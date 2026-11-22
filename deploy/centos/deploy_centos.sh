#!/usr/bin/env bash
#
# deploy_centos.sh -- publish the POPOPX "Mac Node" product portal (a static
# Vite + React build) onto a nginx web root, for RHEL-family hosts (dnf or yum:
# CentOS Stream, CentOS 7 + EPEL, Rocky, AlmaLinux, RHEL).
#
# There are two ways to get the bytes onto the host. The first is the default
# and the only one that works everywhere -- including an EL7-era box running
# nginx 1.14.1, where Node.js 22 cannot even start:
#
#   THE WORKSTATION BUILDS (default; --source DIR)
#     workstation:  npm ci && npm run build
#     workstation:  COPYFILE_DISABLE=1 tar -czf node-popopx-dist.tgz -C dist .
#     workstation:  scp node-popopx-dist.tgz HOST:/tmp/
#     host:         mkdir -p /srv/node-popopx-dist
#     host:         tar -xzf /tmp/node-popopx-dist.tgz -C /srv/node-popopx-dist
#     host:         sudo ./deploy/centos/deploy_centos.sh \
#                       --source /srv/node-popopx-dist --email you@example.com
#     (COPYFILE_DISABLE=1 matters: without it BSD tar adds AppleDouble "._name"
#      entries to the archive, and this script refuses an export that contains
#      them rather than publishing them to a public web root.)
#
#   THE HOST BUILDS (--build-on-host)
#     sudo ./deploy/centos/deploy_centos.sh --build-on-host
#     Needs the Node.js Vite accepts (20.19+ or 22.12+) on this machine; the
#     script checks and stops if it is not there
#     rather than adding a third-party package repository for you.
#
# Other flags: see usage() / `-h`. Always look at `--check` and `--dry-run`
# before the real run.
#
# What this script never does, on purpose:
#   * it never contacts the production host from a workstation: no ssh, no scp,
#     no rsync over a remote shell, no curl/wget to a server, no token, no
#     password, no credential path. The only network it uses is the one `dnf`,
#     `yum` and `npm ci` need to fetch packages on the host itself.
#   * it never publishes a directory it cannot prove is a build output. The
#     entry document must reference /assets/index-<hash>.js and must NOT
#     reference /src/main.tsx. That single gate is the difference between a
#     portal and a black screen, and it is exactly how this host broke: a
#     `git clone` was served straight out of the web root, so the browser asked
#     for /src/main.tsx, nginx answered with raw TypeScript as
#     application/octet-stream, React never ran, and `<meta name="color-scheme"
#     content="dark">` painted the empty page black.
#   * it never deletes web-root content without first writing an out-of-tree
#     tarball backup, and it never runs against a web root that contains the
#     very repository this script is being read from (deleting that while bash
#     is still reading this file is a corrupted-deploy generator).
#   * it never installs a vhost that the local nginx build cannot parse, and
#     never installs one that references a certificate that does not exist yet:
#     the certificate comes first. A rejected install is rolled back and the
#     rollback is re-validated with `nginx -t`.
#   * it never `rm -rf`s a path it did not create in this run.
#   * it never `restart`s nginx; it reloads, so other vhosts keep their sockets.
#
# Deliberate divergence from the sibling project's script: `cp -a` is NOT an
# acceptable fallback when rsync is missing, because `cp -a` cannot prune the
# previous release, and an unpruned web root is what put .git and src/ on the
# public internet here. No rsync, no publish.
#
# Copyright (c) 2026 POPOPX (popopx.chat)
# SPDX-License-Identifier: AGPL-3.0-only

set -euo pipefail

# --------------------------------------------------------------------------
# small helpers
# --------------------------------------------------------------------------

DRY_RUN=0
SKIP_INSTALL=0
CHECK_ONLY=0
ASSUME_YES=0
SKIP_CERTBOT=0
BUILD_ON_HOST=0
WEB_ROOT_OVERRIDE=""
SOURCE_DIR="${SOURCE_DIR:-}"
CERT_EMAIL="${CERT_EMAIL:-}"
OS_RELEASE="${OS_RELEASE:-/etc/os-release}"

TLS_READY=0
BOOTSTRAP_LIVE=0
BACKUP_TAR=""
CONF_PREV_COPY=""
CONF_ORIGINAL_COPY=""
CONF_BACKUPS=""
NEEDS_YES_REASON=""
RENDERED_CONF=""
BOOTSTRAP_CONF=""

# Nothing written by this script outside the two destination trees is meant to
# survive it: the ACME bootstrap is removed as soon as certbot is done, and on
# any exit path -- including a die() or a Ctrl-C mid-certbot -- both temp files
# go with it. The rendered vhost is the one exception: under --dry-run it is the
# artifact worth looking at, so it is left where the message says.
cleanup_temp() {
  [[ -z "$BOOTSTRAP_CONF" || ! -f "$BOOTSTRAP_CONF" ]] || rm -f -- "$BOOTSTRAP_CONF"
  if [[ "$DRY_RUN" -eq 0 ]]; then
    [[ -z "$RENDERED_CONF" || ! -f "$RENDERED_CONF" ]] || rm -f -- "$RENDERED_CONF"
  fi
}
trap cleanup_temp EXIT

say()  { printf '%s\n' "$*"; }
info() { printf '[*] %s\n' "$*"; }
warn() { printf '[!] %s\n' "$*" >&2; }
ok()   { printf '[+] %s\n' "$*"; }
die()  { printf '[x] %s\n' "$*" >&2; exit 1; }

# show_args: render an argv list the way a shell would read it back, so the
# printed line stays copy-pasteable when a path contains a space or a quote.
show_args() {
  local line
  line="$(printf '%q ' "$@")"
  printf '%s' "${line% }"
}

# plan: record (and show) one mutating step, then run it. The command is passed
# as argv and executed directly -- never through eval -- so a document root or
# source directory with an apostrophe in its name is still exactly one path
# instead of a shell grammar accident.
plan() {
  local line
  line="$(show_args "$@")"
  if [[ "$DRY_RUN" -eq 1 ]]; then
    printf 'DRY-RUN  %s\n' "$line"
  else
    printf 'RUN      %s\n' "$line"
    "$@"
  fi
}

need() {
  local c
  for c in "$@"; do
    command -v "$c" >/dev/null 2>&1 || die "required command not found: $c"
  done
}

# file_digest: sha256 of a file, printed short. sha256sum on Linux, shasum on a
# macOS workstation where this script is smoke-tested with --dry-run.
file_digest() {
  if command -v sha256sum >/dev/null 2>&1; then
    sha256sum -- "$1" 2>/dev/null | cut -c1-16
  elif command -v shasum >/dev/null 2>&1; then
    shasum -a 256 -- "$1" 2>/dev/null | cut -c1-16
  else
    printf 'unavailable'
  fi
}

# install_conf: validate in a throwaway prefix, back up the live file, install,
# validate the WHOLE live config, reload. Called twice at most -- once with the
# temporary ACME bootstrap, once with the production vhost -- so the "validate
# before it goes live" gate can never be skipped by one of the two paths. A
# rejected install is undone and the undo is re-validated, because an installed
# file nginx refuses pins the previous runtime config in place for every later
# config change on the machine.
install_conf() {
  local src="$1" label="$2"
  local pre_dir pre_conf
  pre_dir="$(mktemp -d)"
  pre_conf="${pre_dir}/nginx.conf"
  cat >"$pre_conf" <<PRE
pid ${pre_dir}/nginx.pid;
error_log ${pre_dir}/error.log crit;
events { worker_connections 16; }
http {
  include /etc/nginx/mime.types;
  access_log ${pre_dir}/access.log;
  client_body_temp_path ${pre_dir}/cbt;
  proxy_temp_path ${pre_dir}/pt;
  include ${src};
}
PRE
  say "--- nginx -t on ${label}, isolated from the live tree ---"
  if ! nginx -t -c "$pre_conf" -p "$pre_dir" 2>&1; then
    rm -rf -- "$pre_dir"
    die "the ${label} failed 'nginx -t' in isolation; the live config was not touched"
  fi
  rm -rf -- "$pre_dir"

  # One backup per call, named after what is being installed. The timestamp
  # alone is not enough: a run that installs the bootstrap and then the
  # production vhost writes the same destination twice, and a same-named backup
  # would overwrite the copy of the file that was there before this run started
  # -- which, on the incident host, is the hand-pasted snippet itself.
  local slug="${2// /-}" CONF_BACKUP
  CONF_BACKUP="${NGINX_CONF_DST}.bak.${TS}.${slug}"
  if [[ -f "$NGINX_CONF_DST" ]]; then
    cp -a -- "$NGINX_CONF_DST" "$CONF_BACKUP"
    CONF_PREV_COPY="$CONF_BACKUP"
    CONF_BACKUPS+="$CONF_BACKUP"$'\n'
    [[ -n "$CONF_ORIGINAL_COPY" ]] || CONF_ORIGINAL_COPY="$CONF_BACKUP"
    ok "previous conf saved as $CONF_BACKUP"
  else
    CONF_PREV_COPY=""
    info "no existing $NGINX_CONF_DST (first deploy); nothing to back up"
  fi

  install -d -m 0755 /etc/nginx/conf.d
  install -m 0644 -o root -g root -- "$src" "$NGINX_CONF_DST"
  say "--- nginx -t on the full live config ---"
  if nginx -t 2>&1; then
    ok "live config valid"
  else
    if [[ -n "$CONF_PREV_COPY" && -f "$CONF_PREV_COPY" ]]; then
      cp -a -- "$CONF_PREV_COPY" "$NGINX_CONF_DST"
      if nginx -t 2>&1; then
        ok "previous conf restored and 'nginx -t' passes again"
      else
        warn "rollback copied the previous conf but 'nginx -t' still fails -- inspect $NGINX_CONF_DST by hand"
      fi
      warn "install of ${label} rejected: restored ${CONF_PREV_COPY}, nothing was reloaded"
    else
      rm -f -- "$NGINX_CONF_DST"
      if nginx -t 2>&1; then
        ok "installed file removed and 'nginx -t' passes again"
      else
        warn "removed the installed file but 'nginx -t' still fails -- inspect /etc/nginx by hand"
      fi
      warn "install of ${label} rejected: removed the file we created, nothing was reloaded"
    fi
    if [[ "$BOOTSTRAP_LIVE" -eq 1 && -n "$CONF_ORIGINAL_COPY" ]]; then
      warn "Note what is live right now: this run already reloaded the ACME-only bootstrap, so"
      warn "     $DOMAIN answers port 80 with 404 for everything except /.well-known/, and"
      warn "     there is no HTTPS block yet. Nothing further was reloaded, so going home is one command:"
      warn "       sudo cp -a $CONF_ORIGINAL_COPY $NGINX_CONF_DST && sudo nginx -t && sudo systemctl reload nginx"
    fi
    die "nginx -t failed for the ${label}"
  fi

  if systemctl is-active --quiet nginx 2>/dev/null; then
    systemctl reload nginx
    ok "nginx reloaded (graceful; no dropped connections)"
  else
    info "nginx is installed but not running yet; enabling and starting it once"
    systemctl enable --now nginx
    ok "nginx started"
  fi
}

# count_root: how many real `root <value>;` directives a file declares. Matching
# the whole word instead of grepping the path means a comment that mentions the
# old root, or a root that is a prefix of another, cannot move the count.
count_root() {
  awk -v want="$2" '!/^[[:space:]]*#/ && $1=="root" { v=$2; gsub(/;/,"",v); if (v==want) n++ } END { print n+0 }' "$1"
}

# render_conf: the repository conf declares the document root it serves, so a
# --web-root override has to be written into the installed file too -- otherwise
# nginx serves a directory this run never populated. Only the root directive is
# rewritten, so a diff against the repository file stays meaningful, and the
# rewrite is verified by counting both the old and the new value.
render_conf() {
  RENDERED_CONF="/tmp/${DOMAIN}.vhost.${TS}.$$"
  if [[ "$WEB_ROOT" == "$CONF_ROOT" ]]; then
    cat -- "$CONF_SRC" >"$RENDERED_CONF"
    return 0
  fi
  # awk with index()/substr(), not sed: `\+` in a BRE is GNU-only and BSD sed
  # reads it as a literal plus, so a sed rewrite silently changes nothing on a
  # macOS smoke test. String surgery keeps the indentation intact and needs no
  # escaping of the replacement, because `&` and `.` have no special meaning
  # outside a regex. The count check below is the backstop either way.
  awk -v old="$CONF_ROOT" -v new="$WEB_ROOT" '
    $1=="root" && index($0, old ";") > 0 {
      i = index($0, old ";")
      $0 = substr($0, 1, i - 1) new ";" substr($0, i + length(old) + 1)
    }
    { print }' "$CONF_SRC" >"$RENDERED_CONF"
  local expect got left
  expect="$(count_root "$CONF_SRC" "$CONF_ROOT")"
  got="$(count_root "$RENDERED_CONF" "$WEB_ROOT")"
  left="$(count_root "$RENDERED_CONF" "$CONF_ROOT")"
  if [[ "$expect" -eq 0 || "$got" -ne "$expect" || "$left" -ne 0 ]]; then
    die "rewriting 'root $CONF_ROOT' to 'root $WEB_ROOT' left $got of $expect directives replaced and $left of the old one standing. Refusing to install a vhost that points somewhere other than the files just published."
  fi
  info "vhost rendered: $expect root directive(s) now point at $WEB_ROOT"
}

usage() {
  cat <<'USAGE'
usage: deploy_centos.sh [options]

  --source DIR        Publish DIR as the site. DIR must be a built export:
                      index.html that references /assets/index-<hash>.js.
                      Resolution order: --source, $SOURCE_DIR, <repo>/dist.
  --build-on-host     Run npm ci && npm run build on this machine first
                      (needs the Node.js Vite accepts: 20.19+ or 22.12+).
  --email ADDRESS     Let's Encrypt registration address. Required unless
                      --no-certbot, and only used when no certificate for this
                      name exists yet.
  --no-certbot        Do not run certbot. The files are still published (which
                      on its own fixes a black screen), but the TLS vhost is
                      installed only if a certificate already exists.
  --web-root <path>   Publish somewhere other than the root declared in
                      deploy/centos/nginx-node.popopx.chat.conf.
  --skip-install      Install no packages. nginx, rsync and (unless
                      --no-certbot) certbot must already be present.
  --check             Run the preflight, print the evidence, exit 0. Changes
                      and asks nothing.
  --dry-run           Print every step that would change the system, change
                      nothing. Skips the confirmation prompt.
  --yes, -y           Skip the confirmation prompt (needed for any
                      non-interactive real run).
  -h, --help          Show this help.

Unknown arguments are a hard stop.
USAGE
}

# --------------------------------------------------------------------------
# arguments
# --------------------------------------------------------------------------

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run)            DRY_RUN=1; shift ;;
    --skip-install)       SKIP_INSTALL=1; shift ;;
    --check)              CHECK_ONLY=1; shift ;;
    --yes|-y)             ASSUME_YES=1; shift ;;
    --no-certbot)         SKIP_CERTBOT=1; shift ;;
    --build-on-host)      BUILD_ON_HOST=1; shift ;;
    --email)              [[ $# -ge 2 ]] || die "--email needs a value"; CERT_EMAIL="$2"; shift 2 ;;
    --email=*)            CERT_EMAIL="${1#*=}"; shift ;;
    --source)             [[ $# -ge 2 ]] || die "--source needs a value"; SOURCE_DIR="$2"; shift 2 ;;
    --source=*)           SOURCE_DIR="${1#*=}"; shift ;;
    --web-root)           [[ $# -ge 2 ]] || die "--web-root needs a value"; WEB_ROOT_OVERRIDE="$2"; shift 2 ;;
    --web-root=*)         WEB_ROOT_OVERRIDE="${1#*=}"; shift ;;
    -h|--help)            usage; exit 0 ;;
    *)                    usage >&2; die "unknown argument: $1" ;;
  esac
done

# --------------------------------------------------------------------------
# where we are: everything is derived from this file's own location, so no
# developer's absolute path is baked in anywhere. The domain and the web root
# are read out of the conf, so the conf stays the single source of truth.
# --------------------------------------------------------------------------

REPO_ROOT="$(cd "$(dirname "$(readlink -f "$0")")/../.." && pwd)"
DEPLOY_DIR="${REPO_ROOT}/deploy/centos"
CONF_SRC="${DEPLOY_DIR}/nginx-node.popopx.chat.conf"

[[ -f "$CONF_SRC" ]] || die "missing $CONF_SRC"
[[ -f "${REPO_ROOT}/package.json" ]] || die "$REPO_ROOT does not look like the repo root (no package.json)"

DOMAIN="$(awk '!/^[[:space:]]*#/ && $1=="server_name" {gsub(/;/,"",$2); print $2; exit}' "$CONF_SRC")"
[[ -n "$DOMAIN" ]] || die "could not read server_name from $CONF_SRC"

CONF_ROOT="$(awk '!/^[[:space:]]*#/ && $1=="root" {gsub(/;/,"",$2); print $2; exit}' "$CONF_SRC")"
WEB_ROOT="${WEB_ROOT_OVERRIDE:-$CONF_ROOT}"
[[ -n "$WEB_ROOT" && "${WEB_ROOT:0:1}" == "/" ]] || die "web root must be absolute (got: '$WEB_ROOT')"
WEB_ROOT="${WEB_ROOT%/}"
[[ -n "$WEB_ROOT" ]] || die "web root resolved to '/' -- refuse to continue"

# Absolutise the export so the "is it inside the web root?" test below is a
# string comparison and not a guess about the caller's cwd.
if [[ -n "$SOURCE_DIR" ]]; then
  [[ -d "$SOURCE_DIR" ]] || die "--source is not a directory: $SOURCE_DIR"
  SOURCE_DIR="$(cd "$SOURCE_DIR" && pwd)"
fi

NGINX_CONF_DST="/etc/nginx/conf.d/${DOMAIN}.conf"
LIVE_CERT_DIR="/etc/letsencrypt/live/${DOMAIN}"
BACKUP_DIR="/var/backups/popopx"
TS="$(date +%Y%m%dT%H%M%S)"
BACKUP_TAR="${BACKUP_DIR}/${DOMAIN}.${TS}.tar.gz"

say ""
say "POPOPX Mac Node portal deploy"
info "repo root      : $REPO_ROOT"
info "domain         : $DOMAIN"
info "web root       : $WEB_ROOT"
info "nginx conf dst : $NGINX_CONF_DST"
info "cert dir       : $LIVE_CERT_DIR"
say ""

# --------------------------------------------------------------------------
# 1. host sanity + package manager
# --------------------------------------------------------------------------

if [[ "$DRY_RUN" -eq 1 || "$CHECK_ONLY" -eq 1 ]]; then
  info "no-change mode (--dry-run/--check): root privileges are not required yet."
else
  [[ "$(id -u)" -eq 0 ]] || die "must run as root (or with sudo); re-run with --dry-run to see the plan"
fi

# dnf, or yum on an EL7-era box (which is what nginx 1.14.1 suggests). Nothing
# here guesses at apt: the conf paths, the SELinux step and the firewalld step
# are all RHEL-family, and silently running half of them on Debian is worse than
# stopping.
# PM is always one of these two script-owned literals, never operator input, so
# the unquoted `$PM` at the call sites below is a deliberate two-word split and
# not a quoting bug.
if command -v dnf >/dev/null 2>&1; then
  PM="dnf -y"
  info "package manager: dnf"
elif command -v yum >/dev/null 2>&1; then
  PM="yum -y"
  info "package manager: yum (EL7-era; this is the nginx 1.14.1 case)"
elif [[ "$SKIP_INSTALL" -eq 1 ]]; then
  PM=""
  info "--skip-install: no package manager needed"
else
  command -v apt-get >/dev/null 2>&1 && die "apt-get found: this script is the RHEL-family runbook (dnf/yum, SELinux, firewalld). Use a Debian-specific runbook instead, or pass --skip-install and provide nginx + rsync + certbot yourself."
  die "neither dnf nor yum found, and --skip-install is not set: this script will not guess your package manager."
fi

if [[ -r "$OS_RELEASE" ]]; then
  # shellcheck disable=SC1091
  . "$OS_RELEASE"
  info "distro         : ${PRETTY_NAME:-unknown}"
  case "${ID:-}" in
    centos|rocky|almalinux|rhel|fedora|ol|amzn) : ;;
    ubuntu|debian) die "ID='${ID}' is Debian-family; this runbook is for dnf/yum hosts (see the message above about apt)." ;;
    *) warn "ID='${ID:-unset}' is not a known RHEL-family id; continuing because dnf/yum is present." ;;
  esac
fi

# --------------------------------------------------------------------------
# 2. resolve the export to publish
# --------------------------------------------------------------------------

say ""
say "=== 2. what gets published ==="

if [[ "$BUILD_ON_HOST" -eq 1 ]]; then
  if [[ -n "$SOURCE_DIR" ]]; then die "--build-on-host and --source are mutually exclusive"; fi
  [[ -f "${REPO_ROOT}/package-lock.json" ]] || die "package-lock.json missing in $REPO_ROOT; npm ci needs it"
  say "mode: the host builds (requires the Node.js that Vite 8 accepts: 20.19+ or 22.12+)"

  # The floor is Vite's declared constraint, not a round number: package-lock.json
  # pins vite 8.3.8 with engines "^20.19.0 || >=22.12.0", so a 22.0-22.11 toolchain
  # -- which is exactly what a distro `nodejs:22` stream can hand out -- passes a
  # `major >= 22` test and then dies inside npm run build, after this script has
  # already installed a toolchain for it.
  NODE_FLOOR="20.19 or 22.12"
  node_supported() {
    command -v node >/dev/null 2>&1 || return 1
    local v major minor
    v="$(node -v 2>/dev/null)"
    v="${v#v}"
    major="${v%%.*}"
    minor="${v#*.}"; minor="${minor%%.*}"
    [[ "$major" =~ ^[0-9]+$ && "$minor" =~ ^[0-9]+$ ]] || return 1
    (( major > 22 )) && return 0
    (( major == 22 && minor >= 12 )) && return 0
    (( major == 20 && minor >= 19 )) && return 0
    return 1
  }

  if node_supported; then
    ok "node $(node -v) already installed; nothing to do for the toolchain"
  elif [[ "$SKIP_INSTALL" -eq 1 ]]; then
    command -v node >/dev/null 2>&1 || die "--skip-install and no node on PATH: install Node.js $NODE_FLOOR first, or build on the workstation and pass --source."
    die "--skip-install and node is $(node -v 2>/dev/null || echo 'missing'), but $NODE_FLOOR is required for this build."
  else
    say "installing a Node.js LTS toolchain ($NODE_FLOOR)"
    # Two different repo layouts, and one probe that works on both: dnf hosts may
    # ship nodejs as a module (EL8/EL9 appstream, stream syntax `name:stream`),
    # yum hosts ship it flat. `list available` is the only subcommand both
    # package managers answer, so that is what the probe uses.
    if [[ "$PM" == dnf* ]] && dnf module list nodejs 2>/dev/null | awk '{print $2}' | grep -qx 22; then
      plan $PM module enable nodejs:22
      plan $PM module install nodejs:22
    elif $PM list available nodejs >/dev/null 2>&1; then
      plan $PM install nodejs
    else
      die "no nodejs package in the enabled distro repos, and this script will not add a third-party yum repo on your behalf.
   Install a supported Node.js LTS yourself (20.19+ or 22.12+) and re-run, or skip
   the host build entirely:
     workstation:  npm ci && npm run build
     workstation:  COPYFILE_DISABLE=1 tar -czf node-popopx-dist.tgz -C dist .
     host:         sudo ./deploy/centos/deploy_centos.sh --source <dir> --email <address>"
    fi
  fi

  if [[ "$DRY_RUN" -eq 0 ]]; then
    node_supported || die "after install, node is still not $NODE_FLOOR (got: $(node -v 2>/dev/null || echo none))"
    cd "$REPO_ROOT"
    need npm
    info "npm ci in $REPO_ROOT"
    npm ci
    info "npm run build"
    npm run build
  else
    printf 'DRY-RUN  npm ci\nDRY-RUN  npm run build\n'
  fi
  SOURCE_DIR="${REPO_ROOT}/dist"
else
  [[ -n "$SOURCE_DIR" ]] || SOURCE_DIR="${REPO_ROOT}/dist"
  if [[ ! -d "$SOURCE_DIR" ]]; then
    die "no built export at $SOURCE_DIR.
   Either publish one you built on the workstation:
     host:  mkdir -p /srv/node-popopx-dist && tar -xzf /tmp/node-popopx-dist.tgz -C /srv/node-popopx-dist
     host:  sudo ./deploy/centos/deploy_centos.sh --source /srv/node-popopx-dist --email <address>
   or let this host build it (needs Node.js 20.19+/22.12+ here):  --build-on-host"
  fi
fi

info "export dir     : $SOURCE_DIR"

# --- the export gate ------------------------------------------------------
# This is the check that would have caught the incident. Everything else in
# this script is hardening; this one line is the difference between serving a
# portal and serving a black screen.
[[ -d "$SOURCE_DIR" ]] || die "no such directory: $SOURCE_DIR"
INDEX_HTML="${SOURCE_DIR}/index.html"
[[ -f "$INDEX_HTML" ]] || die "$INDEX_HTML is missing -- that is not a static export"

if grep -q 'src="/src/main.tsx"' "$INDEX_HTML"; then
  die "$INDEX_HTML is the DEVELOPMENT entry document (it loads /src/main.tsx).
   nginx will serve that file as application/octet-stream, the browser will
   refuse to execute it, #root stays empty, and <meta name=\"color-scheme\"
   content=\"dark\"> paints the result black -- which is the exact failure this
   deploy is meant to fix. Publish the built output:
     workstation:  npm ci && npm run build      # writes dist/
   then pass --source <the dist directory>."
fi
if ! grep -qE 'src="/assets/index-[A-Za-z0-9_.-]+\.js"' "$INDEX_HTML"; then
  die "$INDEX_HTML does not reference a hashed /assets/index-*.js entry chunk, so it is not a Vite build output."
fi

ASSET_CHUNK="$(find "$SOURCE_DIR/assets" -maxdepth 1 -type f -name 'index-*.js' -size +1k 2>/dev/null | head -n1 || true)"
[[ -n "$ASSET_CHUNK" ]] || die "$SOURCE_DIR/assets holds no non-trivial index-*.js chunk; the build is incomplete."
ASSET_SAMPLE="/assets/$(basename "$ASSET_CHUNK")"

EXPORT_JUNK="$(find "$SOURCE_DIR" -maxdepth 1 \( -name '.DS_Store' -o -name '._*' -o -name 'src' -o -name '.git' -o -name 'node_modules' -o -name 'deploy' \) -print 2>/dev/null | head -n3 || true)"
[[ -z "$EXPORT_JUNK" ]] || die "the export holds non-build entries:
$(printf '%s\n' "$EXPORT_JUNK")
   Repack it from dist/ on the workstation with BSD tar's resource fork off:
     COPYFILE_DISABLE=1 tar -czf node-popopx-dist.tgz -C dist ."

EXPORT_FILES="$(find "$SOURCE_DIR" -type f | wc -l | tr -d ' ')"
ok "export accepted: $EXPORT_FILES files, entry chunk $ASSET_SAMPLE"

# --------------------------------------------------------------------------
# 3. refusal gate: never delete the tree we are standing in
# --------------------------------------------------------------------------

if [[ "$SOURCE_DIR" == "$WEB_ROOT" ]]; then
  die "--source and --web-root are the same directory ($WEB_ROOT). Mirroring it onto itself would erase the export while publishing it."
fi
if [[ "$REPO_ROOT" == "$WEB_ROOT" || "$REPO_ROOT" == "$WEB_ROOT"/* ]]; then
  die "this script is being run from inside the web root:
   repo root : $REPO_ROOT
   web root  : $WEB_ROOT
   Publishing mirrors the web root to the export, which would delete the
   repository (and .git, and the very file bash is reading). Move the clone out
   first, then re-run from the new location:
     sudo mv $WEB_ROOT /srv/${DOMAIN}-web && sudo mkdir -p $WEB_ROOT
     cd /srv/${DOMAIN}-web && sudo ./deploy/centos/deploy_centos.sh --source ... --email ..."
fi
if [[ "$SOURCE_DIR" == "$WEB_ROOT"/* ]]; then
  die "the export lives inside the web root ($SOURCE_DIR inside $WEB_ROOT). Move it out (e.g. /srv) so the mirror cannot delete its own source."
fi

# What is in the web root today is evidence, not a blocker: the incident state
# (a git clone served raw) is exactly what this script is here to repair.
WEB_ROOT_JUNK=""
if [[ -d "$WEB_ROOT" ]]; then
  WEB_ROOT_JUNK="$(find "$WEB_ROOT" -maxdepth 1 \( -name '.git' -o -name 'src' -o -name 'node_modules' -o -name 'deploy' -o -name 'public' \) -print 2>/dev/null | sort | head -n6 || true)"
  if [[ -n "$WEB_ROOT_JUNK" ]]; then
    warn "the web root is not a build output; it holds repository content:"
    printf '%s\n' "$WEB_ROOT_JUNK" | sed 's/^/      /'
    warn "this is why $DOMAIN currently renders black. It will be replaced by the export, after a tarball backup."
  fi
fi

# Rendered before the comparison below, so "is the installed file ours?" is
# asked against the exact bytes this run intends to install, not against the
# repository file they came from.
render_conf

if [[ -f "$NGINX_CONF_DST" ]] && ! cmp -s "$NGINX_CONF_DST" "$RENDERED_CONF"; then
  NEEDS_YES_REASON="the already-installed vhost at $NGINX_CONF_DST is not this repository's file"
  warn "$NEEDS_YES_REASON."
  say "   installed sha256 $(file_digest "$NGINX_CONF_DST")  |  about to install sha256 $(file_digest "$RENDERED_CONF")"
  say "   first directives of the installed file:"
  grep -vE '^[[:space:]]*(#|$)' "$NGINX_CONF_DST" 2>/dev/null | head -n 4 | sed 's/^/      /'
  say "   (If that is the hand-pasted snippet from the repository root, replacing it"
  say "    is the point of this run: it carries no CSP and does not deny /.git/.)"
fi

# Any OTHER conf.d file that also claims this name will conflict with ours at
# `listen` level, and nginx resolves a duplicate by include order -- which is how
# an installed vhost can be silently shadowed.
SHADOWS=""
if [[ -d /etc/nginx/conf.d ]]; then
  # The dots in the domain are escaped because this is an ERE, and the match
  # stays inside the server_name directive (`[^;]*`) instead of using \b, which
  # GNU grep has and BSD grep does not.
  DOMAIN_RE="${DOMAIN//./\\.}"
  SHADOWS="$(grep -lE "server_name[^;]*${DOMAIN_RE}" /etc/nginx/conf.d/*.conf 2>/dev/null | grep -vF "$NGINX_CONF_DST" || true)"
fi
if [[ -n "$SHADOWS" ]]; then
  warn "another conf.d file also declares server_name $DOMAIN:"
  printf '%s\n' "$SHADOWS" | sed 's/^/      /'
  say "   nginx will report a conflicting server name at 'nginx -t'; resolve that"
  say "   before this run can serve $DOMAIN, or the rollback will put you back here."
fi

if [[ "$CHECK_ONLY" -eq 1 ]]; then
  say ""
  ok "--check: preflight finished, nothing was changed."
  say "   export     : $SOURCE_DIR ($EXPORT_FILES files)"
  say "   web root   : $WEB_ROOT"
  say "   vhost      : $NGINX_CONF_DST"
  say "   certificate: $([[ -f "${LIVE_CERT_DIR}/fullchain.pem" ]] && echo present || echo 'not present yet')"
  exit 0
fi

if [[ "$DRY_RUN" -eq 0 && "$ASSUME_YES" -eq 0 ]]; then
  say ""
  if [[ -n "$NEEDS_YES_REASON" ]]; then
    printf '%s\n' "About to: back up $WEB_ROOT, mirror the export over it, obtain a certificate,"
    printf '%s\n' "and replace $NGINX_CONF_DST (which is not this repository's file)."
  else
    printf '%s\n' "About to: back up $WEB_ROOT, mirror the export over it, and install the vhost."
  fi
  if [[ ! -t 0 ]]; then
    die "no terminal to ask for confirmation and --yes was not passed; refusing to change this machine from a non-interactive run."
  fi
  printf 'Proceed with the steps above? [y/N] '
  read -r REPLY || REPLY=""
  case "$REPLY" in
    [yY]|[yY][eE][sS]) : ;;
    *) say "aborted by operator; nothing was changed."; exit 0 ;;
  esac
fi

# --------------------------------------------------------------------------
# 4. packages
# --------------------------------------------------------------------------

say ""
say "=== 4. packages ==="

if [[ "$SKIP_INSTALL" -eq 1 ]]; then
  MISSING=()
  for p in nginx rsync; do
    command -v "$p" >/dev/null 2>&1 || MISSING+=("$p")
  done
  if [[ "$SKIP_CERTBOT" -eq 0 ]]; then
    command -v certbot >/dev/null 2>&1 || MISSING+=("certbot")
  fi
  if [[ "${#MISSING[@]}" -gt 0 ]]; then
    warn "--skip-install set, but these are missing: ${MISSING[*]}"
    say "   install them yourself, or re-run without --skip-install."
  else
    ok "--skip-install: everything required is already present."
  fi
else
  plan $PM install nginx rsync
  if [[ "$SKIP_CERTBOT" -eq 0 ]] && ! command -v certbot >/dev/null 2>&1; then
    # certbot lives in EPEL on EL7/EL8 and in appstream on CentOS Stream 9, and the
    # sibling project enables EPEL for exactly this reason. Asking the enabled repos
    # first keeps a release that already ships certbot from touching its repository
    # set at all, and EPEL is the only repo this script will ever enable.
    if $PM list available certbot >/dev/null 2>&1; then
      info "certbot is available in the enabled repos; no repository changes needed"
    else
      plan $PM install epel-release
    fi
    # python3-certbot-nginx is deliberately NOT requested: this script authenticates
    # with `certonly --webroot`, and a subpackage that is renamed or absent on some
    # release should not be able to abort a publish.
    plan $PM install certbot
  fi
fi

command -v nginx >/dev/null 2>&1 || die "nginx is required for 'nginx -t' and 'systemctl reload nginx' and is not present (it would be installed without --skip-install)."
# No cp -a fallback on purpose: cp cannot prune, and an unpruned web root is
# what put .git and src/ on the public internet for this host.
command -v rsync >/dev/null 2>&1 || die "rsync is required: this script publishes by mirroring the web root to the export, and only rsync --delete can remove the previous release. Install it (${PM%% *} install -y rsync) or drop --skip-install."

if [[ "$SKIP_CERTBOT" -eq 0 ]]; then
  if command -v certbot >/dev/null 2>&1; then
    ok "certbot available: $(certbot --version 2>/dev/null || echo 'unknown version')"
  elif [[ "$DRY_RUN" -eq 1 && "$SKIP_INSTALL" -eq 0 && -n "$PM" ]]; then
    # certbot is the one tool this script installs that a first run is unlikely to
    # have already. Stopping here would hide every step after the certificate --
    # including the vhost install the operator is trying to preview -- when the plan
    # printed above is exactly what installs it. A real run still dies, because by
    # then the install has been attempted.
    warn "certbot is not installed yet; this dry run assumes '${PM} install certbot' succeeds. A real run stops here if it does not."
  else
    die "certbot is not installed and --no-certbot was not passed. Either install it (${PM%% *} install -y certbot) or re-run with --no-certbot."
  fi
fi

# --------------------------------------------------------------------------
# 5. nginx version facts, used by the HTTP/2 gate below
# --------------------------------------------------------------------------

nginx_version() {
  local raw
  # `grep -oE`, not a substitution: a greedy `.*` in a `s///` anchor swallows the
  # leading digits of "nginx version: nginx/1.14.1" and yields 4.1, which reads as
  # a modern nginx and skips the http2 rewrite this function exists to trigger.
  raw="$(nginx -v 2>&1 | { grep -oE '[0-9]+\.[0-9]+(\.[0-9]+)?' || true; } | head -1)"
  [[ -n "$raw" ]] && printf '%s' "$raw" || printf '0.0.0'
}

# true when nginx >= 1.25.1, i.e. when the `http2 on;` directive exists
nginx_supports_http2_on() {
  local v major minor patch
  v="$(nginx_version)"
  IFS=. read -r major minor patch <<<"$v"
  patch="${patch:-0}"
  [[ "$major" -gt 1 ]] && return 0
  [[ "$major" -eq 1 && "$minor" -gt 25 ]] && return 0
  [[ "$major" -eq 1 && "$minor" -eq 25 && "$patch" -ge 1 ]] && return 0
  return 1
}

info "nginx version  : $(nginx_version) ($(nginx -v 2>&1 | head -1))"

# --------------------------------------------------------------------------
# 6. backup of the current web root, outside the tree
# --------------------------------------------------------------------------

say ""
say "=== 6. web root backup ==="

if [[ -d "$WEB_ROOT" && -n "$(ls -A "$WEB_ROOT" 2>/dev/null || true)" ]]; then
  info "backing up the current web root to $BACKUP_TAR (outside the web root, so the mirror cannot delete its own backup)"
  plan mkdir -p -m 0750 -- "$BACKUP_DIR"
  plan tar -czf "$BACKUP_TAR" -C "$WEB_ROOT" .
  if [[ "$DRY_RUN" -eq 1 ]]; then
    info "dry run: the tarball is not written, so the rollback command in the summary is a plan, not a recovery option"
  fi
else
  info "web root is absent or empty: nothing to back up."
  BACKUP_TAR=""
fi

# --------------------------------------------------------------------------
# 7. publish: mirror the export onto the web root
# --------------------------------------------------------------------------
# Why mirror instead of copy: the previous release left a whole repository
# (including .git/) next to the files that are supposed to be public, and an
# additive copy can never remove that. Mirroring makes the web root exactly the
# export, which is the same rule the sibling project publishes by.
# Excluded from deletion: /.well-known/, because certbot --webroot writes into
# it and a renewal must not be interrupted by a deploy.
# --------------------------------------------------------------------------

say ""
say "=== 7. publish $SOURCE_DIR -> $WEB_ROOT (mirror) ==="

plan install -d -m 0755 -- "$WEB_ROOT"

# Print what the mirror is about to remove. Under --dry-run this is the whole
# point of the step; in a real run it is the log line that explains the diff.
if [[ -d "$WEB_ROOT" ]]; then
  PRUNE_LIST="$( { find "$WEB_ROOT" -mindepth 1 -maxdepth 1 -not -name '.well-known' -printf '%f\n' 2>/dev/null ||
                   find "$WEB_ROOT" -mindepth 1 -maxdepth 1 -not -name '.well-known' -exec basename {} \; ; } | sort || true)"
  KEEP_LIST="$(find "$SOURCE_DIR" -mindepth 1 -maxdepth 1 -exec basename {} \; | sort)"
  TO_DELETE="$(comm -23 <(printf '%s\n' "$PRUNE_LIST") <(printf '%s\n' "$KEEP_LIST") | grep -v '^$' || true)"
  if [[ -n "$TO_DELETE" ]]; then
    info "the mirror will remove $(printf '%s\n' "$TO_DELETE" | wc -l | tr -d ' ') top-level entr$([[ -n "$(printf '%s\n' "$TO_DELETE" | sed -n 2p)" ]] && echo ies || echo y):"
    printf '%s\n' "$TO_DELETE" | sed 's/^/      /'
  else
    info "the mirror removes nothing at the top level; the web root already matches the export."
  fi
fi

plan rsync -a --delete --exclude '/.well-known/' -- "$SOURCE_DIR/" "$WEB_ROOT/"

# --------------------------------------------------------------------------
# 8. ownership and modes: readable by nginx, never world-writable
# --------------------------------------------------------------------------

say ""
say "=== 8. owner / group / mode ==="

# No `--` before the file list: macOS chmod and chown do not accept it (they read
# it as a filename), and it buys nothing here, because every path find hands to
# -exec starts with $WEB_ROOT, which is validated absolute further up, so no
# operand can ever begin with a dash.
plan chown -R root:root "$WEB_ROOT"
plan find "$WEB_ROOT" -mindepth 1 -type d -exec chmod 0755 '{}' +
plan find "$WEB_ROOT" -mindepth 1 -type f -exec chmod 0644 '{}' +
# No second `find -perm /o+w -exec chmod o-w` sweep: 0755 and 0644 leave no
# world-write bit to clear, the same two passes would cover exactly the same
# entries, and that predicate is GNU-only syntax -- BSD find rejects it, so the
# smoke test on a workstation would die on this line instead of the deploy.
info "owner root:root, dirs 0755, files 0644: nginx may read every file, nothing is group- or world-writable"

# --------------------------------------------------------------------------
# 9. SELinux (RHEL ships enforcing; a wrong context shows up as 403)
# --------------------------------------------------------------------------

say ""
say "=== 9. SELinux ==="

SELINUX_MODE="$(getenforce 2>/dev/null || echo Unknown)"
info "getenforce: $SELINUX_MODE"

SEMANAGE_OK=0
if command -v semanage >/dev/null 2>&1; then SEMANAGE_OK=1; fi

if [[ "$SELINUX_MODE" == "Disabled" ]]; then
  info "SELinux disabled: nothing to relabel."
elif [[ "$SEMANAGE_OK" -eq 1 ]]; then
  # fcontext -a fails if the rule already exists, so make it idempotent.
  if semanage fcontext -l 2>/dev/null | grep -qF -- "${WEB_ROOT}(/.*)?"; then
    ok "fcontext rule for $WEB_ROOT already registered"
  else
    plan semanage fcontext -a -t httpd_sys_content_t "${WEB_ROOT}(/.*)?"
  fi
  plan restorecon -Rv -- "$WEB_ROOT"
  if [[ "$DRY_RUN" -eq 1 ]]; then
    info "would register httpd_sys_content_t for the web root and relabel it persistently"
  else
    if ! semanage fcontext -l 2>/dev/null | grep -qF -- "${WEB_ROOT}(/.*)?"; then
      semanage fcontext -a -t httpd_sys_content_t "${WEB_ROOT}(/.*)?"
    fi
    restorecon -Rv "$WEB_ROOT" >/dev/null
    ok "contexts set with semanage + restorecon (survives relabel and reboot)"
  fi
else
  warn "semanage is not available (policycoreutils-python-utils not installed)."
  say "   Falling back to chcon, which is NOT persistent: a relabel or an"
  say "   autorelabel reboot will drop these contexts and nginx will 403 again."
  say "   To fix permanently: ${PM:-dnf} install -y policycoreutils-python-utils"
  say "   then: semanage fcontext -a -t httpd_sys_content_t '${WEB_ROOT}(/.*)?'"
  say "   then: restorecon -Rv '${WEB_ROOT}'"
  plan chcon -Rt httpd_sys_content_t -- "$WEB_ROOT"
fi

# --------------------------------------------------------------------------
# 10. certificate -- BEFORE any vhost that references the pem files
# --------------------------------------------------------------------------

say ""
say "=== 10. certificate ==="

if [[ -f "${LIVE_CERT_DIR}/fullchain.pem" && -f "${LIVE_CERT_DIR}/privkey.pem" ]]; then
  ok "certificate already issued for $DOMAIN; reusing it"
  TLS_READY=1
  if command -v certbot >/dev/null 2>&1; then
    info "check expiry yourself: certbot certificates   # the renewal timer is what actually keeps this alive"
  fi
elif [[ "$SKIP_CERTBOT" -eq 1 ]]; then
  TLS_READY=0
  warn "--no-certbot and no certificate at $LIVE_CERT_DIR."
  say "   The files are published, so the portal itself is fixed and the existing"
  say "   HTTP vhost will serve it. The TLS vhost in this repository is NOT"
  say "   installed, because it references $LIVE_CERT_DIR/*.pem and installing it"
  say "   without those files would fail 'nginx -t' for every vhost on this"
  say "   machine. Finish TLS later with:"
  say "     sudo certbot certonly --webroot -w $WEB_ROOT -d $DOMAIN --email <address>"
  say "     sudo ./deploy/centos/deploy_centos.sh --source <same dir> --yes"
else
  [[ -n "$CERT_EMAIL" ]] || die "no certificate for $DOMAIN yet, so an email address is required for Let's Encrypt registration: pass --email you@example.com (or --no-certbot to defer TLS)."

  # Nothing is listening on port 80 for this name in a way that serves the ACME
  # challenge, so install a throwaway bootstrap server first: ACME files plus
  # 404 for everything else. It carries no content, no cache policy and no
  # redirect -- a redirect to HTTPS here loops, because HTTPS does not work yet.
  BOOTSTRAP_CONF="/tmp/${DOMAIN}.acme-bootstrap.$$"
  cat >"$BOOTSTRAP_CONF" <<BOOT
# Generated by deploy_centos.sh: HTTP surface for the ACME HTTP-01 challenge
# only, installed so certbot --webroot can answer, removed once the real vhost
# is in place. Not part of the repository.
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN};

    root ${WEB_ROOT};
    charset utf-8;
    server_tokens off;

    location ^~ /.well-known/acme-challenge/ {
        default_type text/plain;
        try_files \$uri =404;
    }

    location = /.well-known/acme-challenge/ {
        return 404;
    }

    location / {
        return 404;
    }
}
BOOT
  info "bootstrap conf written: $BOOTSTRAP_CONF (ACME only; everything else 404 for the duration of the challenge)"

  if [[ "$DRY_RUN" -eq 1 ]]; then
    printf 'DRY-RUN  install -m 0644 %s -> %s\n' "$BOOTSTRAP_CONF" "$NGINX_CONF_DST"
    printf 'DRY-RUN  nginx -t && systemctl reload nginx   # now serving /.well-known/acme-challenge/ only\n'
    printf 'DRY-RUN  certbot certonly --webroot -w %s -d %s --non-interactive --agree-tos --email %s --key-type rsa --rsa-key-size 2048\n' "$WEB_ROOT" "$DOMAIN" "$CERT_EMAIL"
    printf 'DRY-RUN  rm -f %s\n' "$BOOTSTRAP_CONF"
    # A dry run describes the whole plan, and the plan only continues past
    # certbot if the challenge succeeds -- so the rest of the sequence is
    # printed on that assumption. A real run stops here instead.
    TLS_READY=1
    info "dry run assumes the ACME challenge succeeds; if it does not, the real run stops at this step and no vhost is installed"
  else
    install_conf "$BOOTSTRAP_CONF" "bootstrap ACME server"
    BOOTSTRAP_LIVE=1

    say "--- certbot certonly --webroot for $DOMAIN ---"
    if ! certbot certonly --webroot \
        -w "$WEB_ROOT" \
        -d "$DOMAIN" \
        --non-interactive \
        --agree-tos \
        --email "$CERT_EMAIL" \
        --key-type rsa \
        --rsa-key-size 2048; then
      rm -f -- "$BOOTSTRAP_CONF"
      # Undo the bootstrap whichever way the machine was configured before this
      # run: an ACME-only server left installed keeps answering $DOMAIN with 404
      # long after the challenge failed.
      if [[ -n "$CONF_PREV_COPY" && -f "$CONF_PREV_COPY" ]]; then
        cp -a -- "$CONF_PREV_COPY" "$NGINX_CONF_DST"
      else
        rm -f -- "$NGINX_CONF_DST"
      fi
      if nginx -t 2>&1; then
        systemctl reload nginx 2>/dev/null || true
        BOOTSTRAP_LIVE=0
        warn "certbot failed: the pre-run configuration is back in place and reloaded; this host serves what it served before the run"
      else
        warn "certbot failed and the pre-run configuration no longer passes 'nginx -t' -- look at $NGINX_CONF_DST before reloading anything"
      fi
      die "certbot could not issue a certificate for $DOMAIN.
   Most common causes, in order: DNS for $DOMAIN does not point at this host;
   port 80 is not reachable from the internet (cloud security group, not just
   firewalld); the rate limit (5 failed validations per hour per hostname,
   5 duplicate certificates per week per set of names) -- wait it out, or test
   with --test-cert first. Re-run this script once it resolves."
    fi
    rm -f -- "$BOOTSTRAP_CONF"
    [[ -f "${LIVE_CERT_DIR}/fullchain.pem" ]] || die "certbot reported success but $LIVE_CERT_DIR/fullchain.pem is not there; investigate before re-running"
    ok "certificate issued for $DOMAIN"
    TLS_READY=1
  fi
fi

# --------------------------------------------------------------------------
# 11. the production vhost
# --------------------------------------------------------------------------

say ""
say "=== 11. nginx vhost -> $NGINX_CONF_DST ==="

if [[ "$TLS_READY" -eq 0 ]]; then
  info "skipped: no certificate for $DOMAIN, so the TLS vhost is NOT installed."
  say "   The repository conf is deliberately not half-installed either: its port-80"
  say "   block only redirects to HTTPS, and a 301 to a broken origin locks every"
  say "   visitor out. So this run published the files and stopped there."
  say "   What answers $DOMAIN right now: sudo nginx -T | grep -n 'server_name $DOMAIN'"
  say "   To finish TLS: sudo certbot certonly --webroot -w $WEB_ROOT -d $DOMAIN --email <address>"
  say "   then re-run this script (same flags) and it installs the vhost."
  if [[ "$DRY_RUN" -eq 1 ]]; then
    printf 'DRY-RUN  no vhost installed on this path\n'
  fi
else
  # The repository file ships the portable `listen … 443 ssl http2;` form, so
  # nothing needs rewriting on any nginx from 1.9.5 upward. Guard the one way
  # this breaks: an operator who switches it to the 1.25.1-era `http2 on;`
  # directive and deploys to an older box, where it is an [emerg] that fails the
  # whole machine's config test. Checked against the RENDERED file, because that
  # is the file about to go live.
  if grep -qE '^[[:space:]]*http2[[:space:]]+on;' "$RENDERED_CONF" && ! nginx_supports_http2_on; then
    die "the vhost uses 'http2 on;' but nginx $(nginx_version) predates that directive (needs >= 1.25.1). Use the 'listen 443 ssl http2;' parameter form instead -- deploy/centos/nginx-node.popopx.chat.conf already ships it."
  fi
  if nginx_supports_http2_on; then
    info "nginx $(nginx_version) may print a deprecation notice for 'listen … http2' in nginx -t; harmless, and the form still works"
  fi

  if [[ "$DRY_RUN" -eq 1 ]]; then
    printf 'DRY-RUN  nginx -t on %s in a throwaway prefix, then install -> %s\n' "$RENDERED_CONF" "$NGINX_CONF_DST"
    printf 'DRY-RUN  systemctl reload nginx\n'
    info "rendered vhost left in place for inspection: $RENDERED_CONF  (diff ${DEPLOY_DIR}/nginx-node.popopx.chat.conf $RENDERED_CONF)"
  else
    install_conf "$RENDERED_CONF" "production vhost"
    BOOTSTRAP_LIVE=0
  fi
fi

# --------------------------------------------------------------------------
# 12. firewall: look first, then only add what is missing
# --------------------------------------------------------------------------

say ""
say "=== 12. firewalld ==="

if ! command -v firewall-cmd >/dev/null 2>&1; then
  info "firewall-cmd not present: no firewall change (and no cloud security group here to remind you about)."
elif ! firewall-cmd --state >/dev/null 2>&1; then
  info "firewalld not running: no firewall change. If this host sits behind a cloud security group, open 80 and 443 there."
else
  FW_SERVICES="$(firewall-cmd --list-services 2>/dev/null || echo '')"
  info "currently allowed services: ${FW_SERVICES:-none}"
  FW_CHANGED=0
  case " ${FW_SERVICES} " in
    *" http "*)  ok "service 'http' already allowed; nothing to open" ;;
    *)           plan firewall-cmd --permanent --add-service=http; FW_CHANGED=1 ;;
  esac
  case " ${FW_SERVICES} " in
    *" https "*)  ok "service 'https' already allowed; nothing to open" ;;
    *)
      if [[ "$TLS_READY" -eq 1 ]]; then
        plan firewall-cmd --permanent --add-service=https; FW_CHANGED=1
      else
        info "not opening 'https' now: no certificate is configured yet"
      fi
      ;;
  esac
  if [[ "$DRY_RUN" -eq 0 && "$FW_CHANGED" -eq 1 ]]; then
    if firewall-cmd --reload >/dev/null 2>&1; then
      ok "firewalld reloaded"
    else
      warn "firewall-cmd --reload failed: the permanent rules were written but are not active yet"
    fi
  fi
fi

# --------------------------------------------------------------------------
# 13. what the operator should run to prove it worked
# --------------------------------------------------------------------------

say ""
say "=== 13. self-verification ==="

if [[ "$TLS_READY" -eq 1 ]]; then
  VERIFY_SCHEME="https"
else
  VERIFY_SCHEME="http"
fi

printf '%s\n' "
  # the entry document is the BUILT one: 200, and it names a hashed chunk
  curl -s ${VERIFY_SCHEME}://${DOMAIN}/ | grep -c '/assets/index-'          # expect 1

  # and the old failure mode is gone: /src/main.tsx must NOT be served
  # (http:// is a 301 once TLS is up, so ask the scheme this run actually enabled)
  curl -s -o /dev/null -w '%{http_code}\n' ${VERIFY_SCHEME}://${DOMAIN}/src/main.tsx   # expect 404: the vhost refuses source extensions
  curl -s -o /dev/null -w '%{http_code}\n' ${VERIFY_SCHEME}://${DOMAIN}/.git/config  # expect 403/404

  # cache policy: index.html revalidated every load, chunks immutable for a year
  curl -sI ${VERIFY_SCHEME}://${DOMAIN}/index.html      | grep -i cache-control
  curl -sI ${VERIFY_SCHEME}://${DOMAIN}${ASSET_SAMPLE}  | grep -i cache-control

  # CSP is on every response, and it needs no 'unsafe-inline' for this build
  curl -sI ${VERIFY_SCHEME}://${DOMAIN}/ | grep -i '^content-security-policy'

  # zero third-party requests: the HTML must name no remote host
  curl -s ${VERIFY_SCHEME}://${DOMAIN}/ | grep -Eo 'https?://[A-Za-z0-9.-]+' | sort -u

  # TLS, once the certificate is in place
  curl -sI http://${DOMAIN}/ | sed -n 1p                                    # expect 301
  curl -sI https://${DOMAIN}/ | grep -i strict-transport                     # expect max-age=300
  echo | openssl s_client -servername ${DOMAIN} -connect ${DOMAIN}:443 2>/dev/null | openssl x509 -noout -subject   # expect CN=${DOMAIN}
  sudo certbot renew --dry-run

  # SELinux actually enforcing, and no AVC denials for httpd
  getenforce
  sudo ausearch -m avc -ts recent | tail -n 20

  # this vhost is the one nginx loaded, and no other file claims the name
  sudo nginx -T | grep -c 'server_name  *${DOMAIN}'                        # expect 2: the :80 and the :443 block, one conf
"

say ""
say "=== done ==="
say "web root     : $WEB_ROOT   (mirrored from $SOURCE_DIR, $EXPORT_FILES files)"
say "conf         : $NGINX_CONF_DST"
say "tls          : $([[ "$TLS_READY" -eq 1 ]] && echo "ready, certificate at $LIVE_CERT_DIR" || echo 'NOT installed on this run (see step 10)')"
[[ -n "$BACKUP_TAR" ]] && say "web root backup: $BACKUP_TAR   -- contains the previous web root, including any repository copy that was served from it. Treat it like that clone (it is not a web-served path) and delete it once you are satisfied.$([[ "$DRY_RUN" -eq 1 ]] && echo '  (dry run: the tarball was not written)')"
if [[ -n "$CONF_BACKUPS" ]]; then
  while IFS= read -r backup; do
    [[ -n "$backup" ]] || continue
    say "conf backup  : $backup"
  done <<<"$CONF_BACKUPS"
  say "                 (the first of these is the file that was installed before this run; the last is what step 11 replaced)"
elif [[ "$DRY_RUN" -eq 1 ]]; then
  info "no conf backup written: this is a dry run."
else
  info "no conf backup: $NGINX_CONF_DST did not exist before this run."
fi
say ""
say "redeploy after a content change (the host never needs Node.js):"
say "  workstation: npm ci && npm run build"
say "  workstation: COPYFILE_DISABLE=1 tar -czf node-popopx-dist.tgz -C dist . && scp node-popopx-dist.tgz HOST:/tmp/"
say "  host:        tar -xzf /tmp/node-popopx-dist.tgz -C $SOURCE_DIR && sudo $(readlink -f "$0") --source $SOURCE_DIR --yes"
say ""
if [[ -z "$BACKUP_TAR" ]]; then
  say "rollback the publish: no web-root backup was taken (the directory was absent or empty)."
else
  # Extract beside the live root and swap the directory in, rather than emptying
  # the web root and untarring into it: a typo or a half-finished extract then
  # leaves the old content intact instead of an empty document root.
  say "rollback the publish (NOT the vhost) -- extract next to the live root, then swap:"
  say "  sudo mkdir -m 0755 -p '/var/www/${DOMAIN}.restore'"
  say "  sudo tar -xzf $BACKUP_TAR -C '/var/www/${DOMAIN}.restore'"
  say "  sudo mv $WEB_ROOT '${WEB_ROOT}.bad' && sudo mv '/var/www/${DOMAIN}.restore' $WEB_ROOT"
  say "  sudo restorecon -Rv $WEB_ROOT           # relabel whatever tar could not carry"
  say "  sudo systemctl reload nginx             # then remove '${WEB_ROOT}.bad' once the site is verified"
fi
if [[ -n "$CONF_ORIGINAL_COPY" ]]; then
  say "rollback the vhost -- the file that was installed before this run is $CONF_ORIGINAL_COPY"
  say "  sudo cp -a $CONF_ORIGINAL_COPY $NGINX_CONF_DST && sudo nginx -t && sudo systemctl reload nginx"
else
  say "rollback the vhost: $NGINX_CONF_DST did not exist before this run, so"
  say "  sudo rm -f $NGINX_CONF_DST && sudo nginx -t && sudo systemctl reload nginx"
fi
[[ "$DRY_RUN" -eq 1 ]] && warn "dry run: no change was made to this host."
exit 0

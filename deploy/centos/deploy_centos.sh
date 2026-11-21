#!/usr/bin/env bash
#
# deploy_centos.sh -- build and publish the POPOPX "Mac Node" product portal
# (static Vite + React) on a nginx web root, for the RHEL-family dnf hosts:
# CentOS Stream 9 / 10, Rocky Linux 9 / 10, AlmaLinux 9 / 10.
#
# Run it ON THE TARGET HOST, from a clone of this repo:
#
#   ./deploy/centos/deploy_centos.sh --dry-run      # plan only, changes nothing
#   sudo ./deploy/centos/deploy_centos.sh           # real run
#   sudo ./deploy/centos/deploy_centos.sh --web-root /var/www/example.net
#   sudo ./deploy/centos/deploy_centos.sh --skip-install
#
# What this script never does, on purpose:
#   * it never contacts the production host from this workstation: no ssh, no
#     scp, no rsync over a remote shell, no curl/wget to any server, no token,
#     no password, no credential path. The only network it uses is the one
#     `dnf` and `npm ci` need to fetch packages on the host itself.
#   * it never `rm -rf`s a path it did not create in this run (the only
#     exception is an old `.deploy-staging.*` directory of its own, inside the
#     web root, matched by name).
#   * it never `--delete`s anything at the web-root level. The only --delete is
#     scoped to <web-root>/assets, which this script creates and owns.
#   * it never `restart`s nginx; it reloads, so other vhosts keep their sockets.
#   * it never enables TLS by itself. The 443 block ships commented out; see
#     deploy/centos/README.md for the certbot commands the operator runs.
#
set -euo pipefail

# --------------------------------------------------------------------------
# small helpers
# --------------------------------------------------------------------------

DRY_RUN=0
SKIP_INSTALL=0
WEB_ROOT_OVERRIDE=""
STAGE_DIR=""
PRECHECK_DIR=""
RUN_PLAN=()

say()  { printf '%s\n' "$*"; }
info() { printf '[*] %s\n' "$*"; }
warn() { printf '[!] %s\n' "$*" >&2; }
ok()   { printf '[+] %s\n' "$*"; }
die()  { printf '[x] %s\n' "$*" >&2; exit 1; }

# plan: record (and show) one mutating step. Under --dry-run nothing executes.
plan() {
  RUN_PLAN+=("$*")
  if [[ "$DRY_RUN" -eq 1 ]]; then
    printf 'DRY-RUN  %s\n' "$*"
  else
    printf 'RUN      %s\n' "$*"
    eval "$*"
  fi
}

need() {
  local c
  for c in "$@"; do
    command -v "$c" >/dev/null 2>&1 || die "required command not found: $c"
  done
}

is_active_unit() {
  [[ "$1" == "yes" ]]
}

usage() {
  cat <<'USAGE'
usage: deploy_centos.sh [--dry-run] [--skip-install] [--web-root <path>]

  --dry-run        Print every step that would change the system, change nothing.
  --skip-install   Do not install or enable any package (nginx, nodejs, rsync,
                   policycoreutils-python-utils). Everything must already be
                   present. Build, publish, SELinux, firewall, config, reload
                   still happen.
  --web-root <path>
                   Publish somewhere other than the root declared in
                   deploy/centos/nginx-node.popopx.chat.conf.

  -h, --help       Show this help.
USAGE
}

# --------------------------------------------------------------------------
# arguments
# --------------------------------------------------------------------------

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run)
      DRY_RUN=1
      shift
      ;;
    --skip-install)
      SKIP_INSTALL=1
      shift
      ;;
    --web-root)
      [[ $# -ge 2 ]] || die "--web-root needs a path argument"
      WEB_ROOT_OVERRIDE="$2"
      shift 2
      ;;
    --web-root=*)
      WEB_ROOT_OVERRIDE="${1#*=}"
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      usage >&2
      die "unknown argument: $1"
      ;;
  esac
done

# --------------------------------------------------------------------------
# where we are: everything is derived from this file's own location, so no
# developer's absolute path is baked in anywhere.
# --------------------------------------------------------------------------

REPO_ROOT="$(cd "$(dirname "$(readlink -f "$0")")/../.." && pwd)"
DEPLOY_DIR="${REPO_ROOT}/deploy/centos"
CONF_SRC="${DEPLOY_DIR}/nginx-node.popopx.chat.conf"

[[ -f "$CONF_SRC" ]]        || die "missing $CONF_SRC"
[[ -f "${REPO_ROOT}/package.json" ]] || die "$REPO_ROOT does not look like the repo root (no package.json)"
[[ -f "${REPO_ROOT}/package-lock.json" ]] || die "package-lock.json missing in $REPO_ROOT; npm ci needs it"

info "repo root      : $REPO_ROOT"
info "nginx conf src : $CONF_SRC"

# The domain and the web root are read out of the conf file, so the conf stays
# the single source of truth and this script hard-codes neither.
DOMAIN="$(awk '!/^[[:space:]]*#/ && $1=="server_name" {gsub(/;/,"",$2); print $2; exit}' "$CONF_SRC")"
[[ -n "$DOMAIN" ]] || die "could not read server_name from $CONF_SRC"

CONF_ROOT="$(awk '!/^[[:space:]]*#/ && $1=="root" {gsub(/;/,"",$2); print $2; exit}' "$CONF_SRC")"
WEB_ROOT="${WEB_ROOT_OVERRIDE:-$CONF_ROOT}"
[[ -n "$WEB_ROOT" && "${WEB_ROOT:0:1}" == "/" ]] || die "web root must be absolute (got: '$WEB_ROOT')"
WEB_ROOT="${WEB_ROOT%/}"
[[ -n "$WEB_ROOT" ]] || die "web root resolved to '/' -- refuse to continue"

NGINX_CONF_DST="/etc/nginx/conf.d/${DOMAIN}.conf"
TS="$(date +%Y%m%dT%H%M%S)"

info "domain         : $DOMAIN"
info "web root       : $WEB_ROOT"
info "nginx conf dst : $NGINX_CONF_DST"
say ""

# --------------------------------------------------------------------------
# host sanity: dnf only, root for anything real
# --------------------------------------------------------------------------

command -v dnf >/dev/null 2>&1 || die "dnf not found: this script targets CentOS Stream / Rocky / AlmaLinux (dnf-based). On Debian/Ubuntu use a different runbook."

if [[ -r /etc/os-release ]]; then
  # shellcheck disable=SC1091
  . /etc/os-release
  info "distro         : ${PRETTY_NAME:-unknown}"
  case "${ID:-}" in
    centos|rocky|almalinux|rhel|fedora|centos-stream) : ;;
    *) warn "ID='${ID:-unset}' is not a known RHEL-family id; continuing because dnf is present." ;;
  esac
fi

if [[ "$DRY_RUN" -eq 1 ]]; then
  info "dry run: nothing on this host will be modified."
else
  [[ "$(id -u)" -eq 0 ]] || die "must run as root (or with sudo); re-run with --dry-run to see the plan"
fi

need awk grep sed install systemctl

# --------------------------------------------------------------------------
# 1. packages
# --------------------------------------------------------------------------

say ""
say "=== 1. packages ==="

have_pkg() { rpm -q "$1" >/dev/null 2>&1; }

install_pkgs() {
  local missing=() p
  for p in "$@"; do
    have_pkg "$p" || missing+=("$p")
  done
  if [[ ${#missing[@]} -eq 0 ]]; then
    ok "already installed: $*"
    return 0
  fi
  if [[ "$SKIP_INSTALL" -eq 1 ]]; then
    warn "--skip-install set, but these are missing: ${missing[*]}"
    return 1
  fi
  plan "dnf -y install ${missing[*]}"
  return 0
}

if [[ "$SKIP_INSTALL" -eq 1 ]]; then
  info "--skip-install: no package installation will be attempted."
fi

install_pkgs nginx rsync || true
command -v nginx >/dev/null 2>&1 || die "nginx is required for 'nginx -t' and 'systemctl reload nginx' and is not present (it would be installed without --skip-install)."

# semanage lives in policycoreutils-python-utils; without it we fall back to chcon.
SEMANAGE_OK=0
if command -v semanage >/dev/null 2>&1; then
  SEMANAGE_OK=1
else
  install_pkgs policycoreutils-python-utils || true
  command -v semanage >/dev/null 2>&1 && SEMANAGE_OK=1
fi

# --- Node.js 22 LTS -------------------------------------------------------
# Required because the build is `tsc -b && vite build` (package.json engines:
# node >= 20.19). Preference order: an already-good node, then the distro
# module stream, then the plain distro package, then NodeSource.
node_is_22_or_newer() {
  command -v node >/dev/null 2>&1 || return 1
  local major
  major="$(node -p 'process.versions.node.split(".")[0]' 2>/dev/null || echo 0)"
  [[ "$major" -ge 22 ]]
}

NODE_INSTALL_WAY="none (already present)"
if node_is_22_or_newer; then
  ok "node $(node -v) already installed; nothing to do for the toolchain"
elif [[ "$SKIP_INSTALL" -eq 1 ]]; then
  command -v node >/dev/null 2>&1 || die "--skip-install and no node on PATH: install Node.js 22 LTS first."
  die "--skip-install and node is $(node -v 2>/dev/null || echo 'missing'), but >= 22 is required for this build."
else
  say "installing a Node.js 22 LTS toolchain"
  # a) distro module stream (CentOS Stream / Rocky / Alma ship nodejs streams)
  if dnf -q module list nodejs >/dev/null 2>&1 && \
     dnf -q module list nodejs 2>/dev/null | awk '{print $2}' | grep -qx 22; then
    plan "dnf -y module enable nodejs/22"
    plan "dnf -y module install nodejs/22"
    NODE_INSTALL_WAY="distro module stream nodejs/22 (dnf module)"
  else
    info "no distro nodejs:22 module stream available; trying the distro package"
    if dnf -q repoquery --latest-limit 1 nodejs >/dev/null 2>&1; then
      plan "dnf -y install nodejs"
      NODE_INSTALL_WAY="distro package nodejs (dnf)"
    else
      die "no nodejs package in the enabled distro repos, and this script will not add a third-party yum repo on your behalf.
   Install Node.js 22 LTS yourself, then re-run:
     * a distro module stream, if your release has one:
         dnf -y module enable nodejs:22 && dnf -y module install nodejs:22
     * or your vendor's package, nvm, or a build from source.
   Prove it before re-running:  node -v   (must print v22.x or newer)"
    fi
  fi
fi

if [[ "$DRY_RUN" -eq 0 ]]; then
  node_is_22_or_newer || die "after install, node is still not >= 22 (got: $(node -v 2>/dev/null || echo none))"
  ok "node toolchain via: $NODE_INSTALL_WAY -- now $(node -v) / npm $(npm -v)"
else
  info "would install node via: $NODE_INSTALL_WAY"
fi

# --------------------------------------------------------------------------
# 2. build
# --------------------------------------------------------------------------

say ""
say "=== 2. build (npm ci + npm run build) ==="

if [[ "$DRY_RUN" -eq 1 ]]; then
  info "would run, in $REPO_ROOT :"
  printf 'DRY-RUN  npm ci\nDRY-RUN  npm run build\n'
else
  cd "$REPO_ROOT"
  need npm
  info "npm ci in $REPO_ROOT"
  npm ci
  info "npm run build"
  npm run build
  [[ -f "${REPO_ROOT}/dist/index.html" ]] || die "build produced no dist/index.html"
fi

DIST_DIR="${REPO_ROOT}/dist"
[[ -d "$DIST_DIR" ]] || die "no $DIST_DIR to publish (build step did not run?)"

# One real hashed asset name, used later in the self-verification hints.
ASSET_SAMPLE="$(cd "$DIST_DIR" 2>/dev/null && find assets -name 'index-*.js' -type f 2>/dev/null | sed 's|^|/|' | head -n1 || true)"
if [[ "$DRY_RUN" -eq 1 ]]; then
  ASSET_SAMPLE="$(find "${REPO_ROOT}/dist/assets" -name 'index-*.js' -type f 2>/dev/null | head -n1 | sed "s|${REPO_ROOT}/dist||")"
fi
[[ -n "$ASSET_SAMPLE" ]] || ASSET_SAMPLE="/assets/index-<hash>.js"

# --------------------------------------------------------------------------
# 3. publish: copy to a staging dir inside the web root, flip index.html last
# --------------------------------------------------------------------------
# Why this shape:
#   * assets are content-hashed, so copying new ones in is purely additive: an
#     old page keeps working while the new one is being written.
#   * index.html is NOT hashed and is the only switch-over point, so it moves
#     with a single rename on the same filesystem: visitors see either the old
#     entry or the new one, never a half-written file.
#   * the staging dir is dot-prefixed, and the conf denies every dotfile
#     location, so it is unreachable from the web during the window.
# --------------------------------------------------------------------------

say ""
say "=== 3. publish dist/ -> $WEB_ROOT ==="

STAGE_DIR="${WEB_ROOT}/.deploy-staging.${TS}"

cleanup_stage() {
  # Only ever remove the staging directory this run created, matched by name.
  if [[ -n "$STAGE_DIR" && "$STAGE_DIR" == "${WEB_ROOT}/.deploy-staging."* && -d "$STAGE_DIR" ]]; then
    rm -rf -- "$STAGE_DIR"
  fi
}

# One EXIT handler for both temp areas. A second `trap ... EXIT` would replace
# this one, and `trap - EXIT` would leave the staging dir in the web root.
cleanup_all() {
  cleanup_stage
  if [[ -n "$PRECHECK_DIR" && -d "$PRECHECK_DIR" ]]; then
    rm -rf -- "$PRECHECK_DIR"
  fi
}
trap cleanup_all EXIT

plan "mkdir -p -- '$WEB_ROOT' '$STAGE_DIR'"
plan "cp -a -- '${DIST_DIR}/.' '${STAGE_DIR}/'"
plan "mkdir -p -- '${WEB_ROOT}/assets'"

if [[ "$DRY_RUN" -eq 0 ]]; then
  # 3a. hashed chunks first (additive), then the un-hashed flat root files.
  cp -a -- "${STAGE_DIR}/assets/." "${WEB_ROOT}/assets/"
  find "$STAGE_DIR" -maxdepth 1 -type f ! -name 'index.html' -exec cp -a -- '{}' "$WEB_ROOT/" \;
  ok "assets and root files copied"

  # 3b. the atomic switch-over.
  mv -f -- "${STAGE_DIR}/index.html" "${WEB_ROOT}/index.html"
  ok "index.html switched (deploy is now live for the next page load)"

  # 3c. drop stale hashed chunks so the web root does not grow forever.
  #     --delete is scoped to <web-root>/assets and its source is this build's
  #     own assets dir; a missing/empty source is treated as a hard error.
  if [[ -n "$(ls -A "${STAGE_DIR}/assets" 2>/dev/null)" ]]; then
    rsync -a --delete --exclude '.deploy-staging.*' \
      -- "${STAGE_DIR}/assets/" "${WEB_ROOT}/assets/"
    ok "pruned hashed chunks that no longer exist in this build"
  else
    warn "staged assets dir is empty -- skipping prune (refusing --delete on nothing)"
  fi

  # 3d. tidy staging leftovers from interrupted earlier runs of this script.
  find "$WEB_ROOT" -mindepth 1 -maxdepth 1 -type d -name '.deploy-staging.*' \
    ! -path "$STAGE_DIR" -print -exec rm -rf -- '{}' + 2>/dev/null || true
fi

# --------------------------------------------------------------------------
# 4. ownership and modes: readable by nginx, never world-writable
# --------------------------------------------------------------------------

say ""
say "=== 4. owner / group / mode ==="

plan "chown -R root:root -- '$WEB_ROOT'"
plan "find '$WEB_ROOT' -mindepth 1 -type d -not -name '.deploy-staging.*' -exec chmod 0755 -- '{}' +"
plan "find '$WEB_ROOT' -mindepth 1 -type f -exec chmod 0644 -- '{}' +"

if [[ "$DRY_RUN" -eq 0 ]]; then
  # Belt and braces: nothing world-writable, and mode 0755 on the ancestors
  # that nginx's worker has to traverse.
  find "$WEB_ROOT" -mindepth 1 \( -type d -o -type f \) -perm /o+w -exec chmod o-w -- '{}' +
  ok "root:root, dirs 0755, files 0644, no world-writable path"
fi

# --------------------------------------------------------------------------
# 5. SELinux (RHEL ships enforcing; a wrong context shows up as 403)
# --------------------------------------------------------------------------

say ""
say "=== 5. SELinux ==="

SELINUX_MODE="$(getenforce 2>/dev/null || echo Unknown)"
info "getenforce: $SELINUX_MODE"

if [[ "$SELINUX_MODE" == "Disabled" ]]; then
  info "SELinux disabled: nothing to relabel."
elif [[ "$SEMANAGE_OK" -eq 1 ]]; then
  # fcontext -a fails if the rule already exists, so make it idempotent.
  if semanage fcontext -l 2>/dev/null | grep -qF -- "${WEB_ROOT}(/.*)?"; then
    ok "fcontext rule for $WEB_ROOT already registered"
  else
    plan "semanage fcontext -a -t httpd_sys_content_t '${WEB_ROOT}(/.*)?'"
  fi
  plan "restorecon -Rv -- '$WEB_ROOT'"
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
  say "   To fix permanently: dnf -y install policycoreutils-python-utils"
  say "   then: semanage fcontext -a -t httpd_sys_content_t '${WEB_ROOT}(/.*)?'"
  say "   then: restorecon -Rv '${WEB_ROOT}'"
  plan "chcon -Rt httpd_sys_content_t -- '$WEB_ROOT'"
fi

# --------------------------------------------------------------------------
# 6. firewall: look first, then only add what is missing
# --------------------------------------------------------------------------

say ""
say "=== 6. firewalld ==="

if ! command -v firewall-cmd >/dev/null 2>&1; then
  info "firewall-cmd not present: no firewall change."
elif ! firewall-cmd --state >/dev/null 2>&1; then
  info "firewalld not running: no firewall change."
else
  FW_SERVICES="$(firewall-cmd --list-services 2>/dev/null || echo '')"
  info "currently allowed services: ${FW_SERVICES:-none}"
  case " ${FW_SERVICES} " in
    *" http "*) ok "service 'http' already allowed; nothing to open" ;;
    *)          plan "firewall-cmd --permanent --add-service=http" ;;
  esac
  case " ${FW_SERVICES} " in
    *" https "*) ok "service 'https' already allowed; nothing to open" ;;
    *)           info "not opening 'https' now: no certificate is configured yet (see README step 3)" ;;
  esac
  if [[ "$DRY_RUN" -eq 0 ]]; then
    case " ${FW_SERVICES} " in
      *" http "*) : ;;
      *) firewall-cmd --reload >/dev/null && ok "firewalld reloaded with service 'http'" ;;
    esac
  fi
fi

# --------------------------------------------------------------------------
# 7. nginx config: validate the NEW file before it goes live, back up the old
#    one, install, validate again for real, then reload.
# --------------------------------------------------------------------------

say ""
say "=== 7. nginx config -> $NGINX_CONF_DST ==="

# 7a. Pre-validation with a throwaway main config that includes only our
#     server block. nginx -t here touches nothing under /etc/nginx. This is the
#     "validate BEFORE touching the live config" gate.
PRECHECK_DIR="$(mktemp -d)"
PRECHECK_CONF="${PRECHECK_DIR}/nginx.conf"

cat >"$PRECHECK_CONF" <<PRE
pid ${PRECHECK_DIR}/nginx.pid;
error_log ${PRECHECK_DIR}/error.log crit;
events { worker_connections 16; }
http {
  include /etc/nginx/mime.types;
  access_log ${PRECHECK_DIR}/access.log;
  client_body_temp_path ${PRECHECK_DIR}/cbt;
  proxy_temp_path ${PRECHECK_DIR}/pt;
  include ${CONF_SRC};
}
PRE

say "--- nginx -t on the new conf, isolated from the live tree ---"
if nginx -t -c "$PRECHECK_CONF" -p "$PRECHECK_DIR" 2>&1; then
  ok "new conf is syntactically valid"
else
  die "the new conf failed 'nginx -t' in isolation; the live config was not touched"
fi
# PRECHECK_DIR is removed by the EXIT trap.

# 7b. back up whatever is live, then install.
if [[ -f "$NGINX_CONF_DST" ]]; then
  plan "cp -a -- '$NGINX_CONF_DST' '${NGINX_CONF_DST}.bak.${TS}'"
  if [[ "$DRY_RUN" -eq 0 ]]; then
    cp -a -- "$NGINX_CONF_DST" "${NGINX_CONF_DST}.bak.${TS}"
    ok "previous conf saved as ${NGINX_CONF_DST}.bak.${TS}"
  fi
else
  info "no existing $NGINX_CONF_DST (first deploy); nothing to back up"
fi

plan "install -m 0644 -o root -g root -- '$CONF_SRC' '$NGINX_CONF_DST'"

if [[ "$DRY_RUN" -eq 0 ]]; then
  install -m 0644 -o root -g root -- "$CONF_SRC" "$NGINX_CONF_DST"

  say "--- nginx -t on the full live config ---"
  if nginx -t 2>&1; then
    ok "live config valid"
  else
    if [[ -f "${NGINX_CONF_DST}.bak.${TS}" ]]; then
      cp -a -- "${NGINX_CONF_DST}.bak.${TS}" "$NGINX_CONF_DST"
      warn "live config invalid: restored ${NGINX_CONF_DST}.bak.${TS} and did not reload"
    else
      rm -f -- "$NGINX_CONF_DST"
      warn "live config invalid: removed the file we installed and did not reload"
    fi
    die "nginx -t failed on the live config"
  fi

  if systemctl is-active --quiet nginx; then
    plan "systemctl reload nginx"
    systemctl reload nginx
    ok "nginx reloaded (graceful; no dropped connections)"
  else
    info "nginx is installed but not running yet; enabling and starting it once"
    plan "systemctl enable --now nginx"
    systemctl enable --now nginx
    ok "nginx started"
  fi
fi

# --------------------------------------------------------------------------
# 8. what the operator should run on the host to prove it worked
# --------------------------------------------------------------------------

say ""
say "=== 8. self-verification, run these on the host ==="

VERIFY=(
  "curl -I http://${DOMAIN}/"
  "curl -I http://${DOMAIN}/index.html"
  "curl -I http://${DOMAIN}${ASSET_SAMPLE}"
  "sestatus"
  "sudo nginx -T | grep -c server_name"
  "getenforce"
  "sudo ausearch -m avc -ts recent | tail -n 20"
  "curl -s -o /dev/null -w '%{http_code}\\n' http://${DOMAIN}/some/spa/route"
  "curl -I http://${DOMAIN}/site.webmanifest"
  "curl -sI http://${DOMAIN}/ | grep -i '^content-security-policy'"
)

if [[ "$DRY_RUN" -eq 1 ]]; then
  info "these are the commands the real run would print:"
  printf '  %s\n' "${VERIFY[@]}"
else
  printf '%s\n' "
  # entry page and index.html: 200, no-store style headers on index.html
  curl -I http://${DOMAIN}/
  curl -I http://${DOMAIN}/index.html

  # one hashed asset: Cache-Control must say public, max-age=31536000, immutable
  curl -I http://${DOMAIN}${ASSET_SAMPLE}

  # manifest: Content-Type application/manifest+json
  curl -I http://${DOMAIN}/site.webmanifest

  # the CSP header is on every response
  curl -sI http://${DOMAIN}/ | grep -i '^content-security-policy'

  # SELinux actually enforcing, and no AVC denials for httpd
  sestatus
  getenforce
  sudo ausearch -m avc -ts recent | tail -n 20

  # nginx really loaded our server block (1 server_name on :80, +1 per extra vhost)
  sudo nginx -T | grep -c server_name

  # SPA fallback: an unknown route must return the app, not a 404
  curl -s -o /dev/null -w '%{http_code}\\n' http://${DOMAIN}/some/spa/route

  # zero third-party requests: the HTML must not name any remote host
  curl -s http://${DOMAIN}/ | grep -Eo 'https?://[a-zA-Z0-9.-]+' | sort -u
  # expected: only ${DOMAIN} (and nothing else). api.github.com appears in the
  # JS chunk, never in the HTML.
"
fi

say ""
say "=== done ==="
say "web root : $WEB_ROOT"
say "conf     : $NGINX_CONF_DST"
say "backup   : ${NGINX_CONF_DST}.bak.${TS} (only if a previous conf existed)"
say "staged via: $NODE_INSTALL_WAY"
[[ "$DRY_RUN" -eq 1 ]] && warn "dry run: no change was made to this host."
exit 0

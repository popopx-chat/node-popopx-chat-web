# Deploying the portal on a RHEL-family host

`nginx-node.popopx.chat.conf` and `deploy_centos.sh` publish a **built export** of this
site as a static nginx vhost. They target **CentOS Stream, Rocky Linux and AlmaLinux**
(anything with `dnf` or `yum`); Debian/Ubuntu needs a different runbook, and the script
says so rather than guessing at `apt`.

Two rules decide whether this deploy works, and both come from an incident where the
site rendered a black screen:

1. **The document root contains build output and nothing else.** A `git clone` in
   `/var/www` serves the *development* `index.html`, which loads `/src/main.tsx`; nginx
   hands that out as `application/octet-stream`, the browser refuses to execute it,
   `#root` stays empty, and `<meta name="color-scheme" content="dark">` paints the
   result black — while `/.git/` and `/src/` sit there publicly readable.
   The conf is written so that a repeat of that mistake cannot serve the source even
   if it lands in the document root: the dotfile block turns `/.git/*` into a 403 and
   the "nothing executable in this build" block turns `.ts`, `.tsx`, `.sh`, `.py` and
   friends into a 404, so `/src/main.tsx` answers `404` instead of `200` with raw
   TypeScript. Neither block is a substitute for publishing only `dist/` — they are why
   the verification commands below can expect a `404` rather than a fallback page.
2. **The host does not build.** The production machine runs nginx 1.14.1, an EL7-era
   build on which Node.js 22 cannot even start. So you build on a workstation and point
   the script at the result with `--source`; `npm ci && npm run build` on the host is
   the opt-in `--build-on-host` path, not the default.

## Prerequisites

| | check |
|---|---|
| root | `id -u` prints `0` (or run every command through `sudo`) |
| OS | `cat /etc/os-release` shows a RHEL-family release; `command -v dnf \|\| command -v yum` succeeds |
| package manager | `dnf` or `yum` — needed only if something is missing (see `--skip-install`) |
| nginx | installed, or installable from the distro repos |
| rsync | installed, or installable |
| certbot | installed, or installable — unless you pass `--no-certbot` |
| Node.js | **not needed on this host.** Needed on the workstation you build on; see [`../../README.md`](../../README.md) |
| DNS | `node.popopx.chat` already resolves to this host (Let's Encrypt has to reach it) |
| the export | a directory holding the built `index.html` and `assets/` |

The export is validated before anything is touched, so a wrong directory is caught in
seconds rather than published: `index.html` must reference a hashed
`/assets/index-<hash>.js`, `assets/` must hold a non-trivial `index-*.js`, and the
directory must not contain `.git`, `src/`, `node_modules/`, `.DS_Store` or `._*`.

## Run it

```sh
./deploy/centos/deploy_centos.sh --check                    # preflight evidence, changes nothing, exits 0
./deploy/centos/deploy_centos.sh --dry-run --source DIR     # prints every mutating step, changes nothing
sudo ./deploy/centos/deploy_centos.sh --yes --source DIR --email you@example.com
```

| flag | effect |
|---|---|
| `--source DIR` | publish `DIR` as the site. Resolution order: `--source`, `$SOURCE_DIR`, `<repo>/dist` |
| `--build-on-host` | run `npm ci && npm run build` here first. Needs the Node.js Vite 8 accepts — 20.19+ or 22.12+ — and the script checks minor versions, because a distro `nodejs:22` stream can hand out 22.6 and the build would fail later |
| `--email ADDRESS` | Let's Encrypt registration address. Required unless `--no-certbot`, and used only when no certificate for this name exists yet |
| `--no-certbot` | do not run certbot. The files are still published — which on its own fixes a black screen — but the TLS vhost is installed only if a certificate already exists |
| `--web-root <path>` | publish somewhere other than the root declared in the conf; the conf is re-rendered to match, and the run reports how many `root` directives it replaced |
| `--skip-install` | install nothing; nginx, rsync and (unless `--no-certbot`) certbot must already be present |
| `--check` | run the preflight, print the evidence, exit 0 |
| `--dry-run` | print the mutating steps, change nothing, skip the prompt. A certbot that the plan itself would install does not abort the preview — on a first run that is the normal case, and stopping there would hide the vhost steps you came to read |
| `--yes`, `-y` | skip the confirmation prompt (required for any non-interactive real run) |

Unknown arguments are a hard stop; `-h` prints the same list. A real run without a
terminal refuses to proceed rather than guessing at the prompt.

What a real run does, in order:

1. host sanity, and picks `dnf` or `yum` (neither → it stops, it does not guess `apt`)
2. resolves and validates the export (the gate described above)
3. **refusal gate**: stops if the repository it is running from is the web root or lives
   inside it, or if `--source` is inside the web root — mirroring would delete the
   source, or the script file bash is currently reading. It prints the `mv` that fixes
   the layout instead of proceeding
4. installs `nginx` and `rsync`. If certbot is missing and `--no-certbot` was not
   passed, it first asks the enabled repos (`dnf list available certbot`) and installs
   `epel-release` only when certbot is not there — EPEL is the one repository this script
   will ever enable, and it is where certbot lives on EL7/EL8. It then installs `certbot`
   alone: the nginx plugin is not needed, because issuance goes through
   `certonly --webroot`, and a renamed subpackage should not be able to abort a publish
5. records the nginx version, used by the HTTP/2 gate in step 11
6. **tarballs the current web root to `/var/backups/popopx/<domain>.<timestamp>.tar.gz`**
   — outside the web root on purpose, so the mirror cannot delete its own backup
7. mirrors the export: `rsync -a --delete --exclude '/.well-known/'` — the exclusion
   keeps an in-flight ACME validation alive. `.well-known` is the only thing that
   survives; everything else in the document root becomes exactly the export
8. `root:root`, `0755` on directories, `0644` on files
9. registers `httpd_sys_content_t` with `semanage fcontext` and runs `restorecon`. If
   `semanage` is absent it falls back to `chcon`, says out loud that the label is
   therefore **not persistent**, and prints the `install -y policycoreutils-python-utils`
   command that makes it so — it does not install that package itself, because changing
   SELinux tooling on your box is your decision
10. obtains the certificate **before** any vhost that references the pem files, since a
    missing key fails `nginx -t` for the entire machine. If the conf.d entry currently
    installed is not this repository's file, a port-80 ACME-only bootstrap is installed
    first, the certificate issued, then the real vhost replaces it
11. installs the production vhost: rendered for `--web-root`, gated on the nginx
    version for `http2` spelling, validated with `nginx -t` against a throwaway prefix
    directory **before** `/etc/nginx/conf.d/` is touched, then validated again as part
    of the live config, and on any failure the previous file is restored and
    re-validated. `systemctl reload`, never `restart`, so other vhosts keep their sockets
12. opens `http`, and `https` only when a certificate is actually in place
13. prints the verification commands below, the backup paths, and both rollback recipes

Apart from `epel-release` when certbot genuinely needs it (step 4), the script enables no
repository and installs no vendor rpm: if a package it needs is missing from your enabled
repos, it stops and prints the command instead of reaching for a source you did not
choose.

## First fix from the incident state

The live failure this directory was rewritten for: `/var/www/node.popopx.chat` held a
clone of this repository, an operator-pasted snippet was installed as the vhost, and
`https://node.popopx.chat` had no server block (so it answered with another site's
certificate). Step 3 refuses to run from that layout, so move the clone out first:

```sh
# workstation
npm ci && npm run build
COPYFILE_DISABLE=1 tar -czf /tmp/node-popopx-dist.tgz -C dist .
scp /tmp/node-popopx-dist.tgz HOST:/tmp/

# host, as root — the clone belongs in /srv, never under /var/www
sudo mv /var/www/node.popopx.chat /srv/node-popopx-chat-web
sudo mkdir -p /srv/node-popopx-dist && sudo tar -xzf /tmp/node-popopx-dist.tgz -C /srv/node-popopx-dist
cd /srv/node-popopx-chat-web

sudo ./deploy/centos/deploy_centos.sh --check  --source /srv/node-popopx-dist
sudo ./deploy/centos/deploy_centos.sh --dry-run --source /srv/node-popopx-dist --email you@example.com
sudo ./deploy/centos/deploy_centos.sh --yes    --source /srv/node-popopx-dist --email you@example.com
```

`--check` and `--dry-run` are the pair that proves the run before you make it: `--check`
prints the export, web root, vhost path and whether a certificate exists, and `--dry-run`
prints the tarball target, the exact `rsync` line, the certbot line and the conf it will
install. Read them. `COPYFILE_DISABLE=1` on the workstation tar is not decoration —
without it macOS writes `._*` resource forks into the export, and the export gate
rejects them.

## Publishing an update

```sh
# workstation: npm ci && npm run build, then tar + scp as above
# host:
sudo tar -xzf /tmp/node-popopx-dist.tgz -C /srv/node-popopx-dist
cd /srv/node-popopx-chat-web
sudo ./deploy/centos/deploy_centos.sh --yes --source /srv/node-popopx-dist
```

Nothing is re-signed (an existing certificate is reused), so the update is a mirror plus
a reload. Old hashed chunks are deleted by the mirror; `index.html` is served
`no-cache`, so a reader picks the new entry document on the next load.

## Verifying afterwards

The script prints this list at the end of every run.

```sh
curl -s https://node.popopx.chat/ | grep -c '/assets/index-'                 # expect 1: the entry doc is the BUILT one
curl -s -o /dev/null -w '%{http_code}\n' http://node.popopx.chat/src/main.tsx # expect 404 — the black-screen path is gone
curl -s -o /dev/null -w '%{http_code}\n' https://node.popopx.chat/.git/config # expect 403/404
curl -sI http://node.popopx.chat/ | sed -n 1p                                 # expect 301
curl -sI https://node.popopx.chat/index.html     | grep -i cache-control      # no-cache, must-revalidate
curl -sI https://node.popopx.chat/assets/<hash>.js | grep -i cache-control    # public, max-age=31536000, immutable
curl -sI https://node.popopx.chat/site.webmanifest | grep -i content-type     # application/manifest+json
curl -s -o /dev/null -w '%{http_code}\n' https://node.popopx.chat/some/spa/route # 200, from the SPA fallback
curl -sI https://node.popopx.chat/ | grep -i '^content-security-policy'
curl -sI https://node.popopx.chat/ | grep -i strict-transport                 # max-age=300 to start with
echo | openssl s_client -servername node.popopx.chat -connect node.popopx.chat:443 2>/dev/null | openssl x509 -noout -subject
getenforce                                                                    # Enforcing
sudo nginx -T | grep -c 'server_name  *node.popopx.chat'                       # expect 2: the :80 and :443 block of one conf
sudo certbot renew --dry-run
```

The zero-tracking claim is checkable from the served page, not from this file:

```sh
curl -s https://node.popopx.chat/ | grep -Eo 'https?://[A-Za-z0-9._/~:-]+' | sort -u
```

The entry HTML names no remote host. `api.github.com` appears inside a JS chunk, which
is where the one permitted client-side request is made.

If `curl` on the host itself returns `000` or a proxy error while the site is fine from
elsewhere, an ambient `http_proxy` may be intercepting the request — retry with
`curl --noproxy '*'`.

## HTTPS

The conf ships a redirect-only port-80 block (ACME challenge path plus `return 301`) and
a real 443 block. **A vhost that references a certificate must never be installed before
the certificate exists** — a missing pem is an `[emerg]`, which fails `nginx -t` for the
whole machine and silently pins every other vhost to its old runtime config. The script
therefore issues the certificate first (step 10), and with `--no-certbot` it publishes
the files but declines to install the TLS vhost unless a certificate is already there.

Order it yourself if you prefer, or if Let's Encrypt is rate-limited and you want a
staging certificate first:

```sh
sudo dnf -y install certbot
sudo certbot certonly --webroot -w /var/www/node.popopx.chat -d node.popopx.chat \
     --agree-tos -m you@example.com --non-interactive --key-type rsa --rsa-key-size 2048
# add --test-cert to rehearse against the staging endpoint and avoid the rate limit
```

`--webroot` is the right authenticator because the port-80 block already serves
`/.well-known/acme-challenge/` from that directory (`--standalone` would fail: nginx
holds port 80). Rate limits are real — five failed validations per name per hour, and
repeated certificates per week — which is why the script reuses an existing certificate
instead of requesting one.

The 443 block uses the portable `listen 443 ssl http2;` form. The modern `http2 on;`
directive needs nginx ≥ 1.25.1, and on an older build it is an `[emerg]` that fails
`nginx -t` for **every** site on the box, not just this one; the script checks the
version and refuses a config that combines the two rather than taking the machine down.

`upgrade-insecure-requests` appears only in the 443 block's CSP. On a plain-HTTP origin
it makes the browser rewrite same-origin `http://` subresource URLs to `https://` with no
fallback, which would break every `/assets/` request until the certificate is in place.

HSTS ships as `max-age=300`. Raise it only once HTTPS is proven for your audience — the
header is a commitment to browsers you cannot retract.

**Renewal reload is not configured by this script.** The certbot timer renews the
certificate, but nginx keeps serving the old one until something reloads it. Put the
reload in certbot's own config so the timer does it on every renewal:

```sh
sudo grep -n 'deploy-hook' /etc/letsencrypt/cli.ini 2>/dev/null \
  || printf '%s\n' 'deploy-hook = systemctl reload nginx' | sudo tee -a /etc/letsencrypt/cli.ini
sudo certbot renew --dry-run          # exercises the whole path without issuing anything
```

The guard matters: `cli.ini` is parsed as INI, so a second `deploy-hook` line makes
certbot fail to start rather than pick one. `systemctl list-timers | grep -i certbot`
shows the timer; if you would rather not touch certbot's config, reload nginx yourself
after each renewal.

## Rollback

Every run leaves backups, and the summary prints the exact paths.

```sh
sudo ls -1 /var/backups/popopx/                                        # web-root tarballs, per run
sudo ls -1 /etc/nginx/conf.d/node.popopx.chat.conf.bak.*               # conf backups, per run and per install
```

The conf backups are named `.bak.<timestamp>.bootstrap-ACME-server` and
`.bak.<timestamp>.production-vhost`, because a run that issues a certificate installs two
files. **The first of them is the file that was live before the run** — which in the
incident state is the operator's snippet, and losing it would lose the only copy.

Restore the vhost:

```sh
sudo cp -a /etc/nginx/conf.d/node.popopx.chat.conf.bak.<TS>.bootstrap-ACME-server /etc/nginx/conf.d/node.popopx.chat.conf
sudo nginx -t && sudo systemctl reload nginx
```

Restore the published content by extracting beside the live root and swapping the
directory in, so a typo or a half-finished extract leaves the running site intact
instead of an empty document root:

```sh
sudo mkdir -m 0755 -p /var/www/node.popopx.chat.restore
sudo tar -xzf /var/backups/popopx/node.popopx.chat.<TS>.tar.gz -C /var/www/node.popopx.chat.restore
sudo mv /var/www/node.popopx.chat /var/www/node.popopx.chat.bad && sudo mv /var/www/node.popopx.chat.restore /var/www/node.popopx.chat
sudo restorecon -Rv /var/www/node.popopx.chat
sudo systemctl reload nginx          # remove .bad once the site is verified
```

The tarball is the whole previous document root — including the repository copy that was
served from it, `.git` and all. Treat it as that clone, not as a build artifact, and
delete it once you are satisfied: it is a copy of your source tree.

## Troubleshooting

| symptom | cause and check |
|---|---|
| **black page, empty `#root`**; `curl -s …/ \| grep -c '/assets/index-'` prints `0`; `/src/main.tsx` returns 200; `Server: nginx/1.14.1` and no CSP header | the document root holds a source tree instead of `dist/`, **and** the production vhost was never installed — two independent faults. Follow "First fix from the incident state"; the export gate and the mirror make the combination unpublishable |
| `https://` shows a certificate for a *different* site | no 443 server block exists for this name, so nginx's default vhost answers. `sudo nginx -T \| grep -c 'server_name  *node.popopx.chat'` — `0` or `1` means the TLS block is missing; expect `2` |
| the site you get is not the site you installed, and `nginx -t` warns about a duplicate `server_name` | two conf.d files claim the name, and include order picks the winner. The run scans for this and lists the other file; delete or fix that one, do not re-install over it |
| `nginx -t` fails on `http2 on` | nginx < 1.25.1. The shipped conf uses `listen 443 ssl http2;`; step 11 refuses the other spelling on an old build |
| 403 on every path | SELinux context. `ls -Z /var/www/node.popopx.chat/index.html` should end in `httpd_sys_content_t`; if not, install `policycoreutils-python-utils` and re-run so `semanage`+`restorecon` are used instead of `chcon` |
| 403 but contexts look right | the AVC log decides: `sudo ausearch -m avc -ts recent` |
| 405 | intended: only `GET` and `HEAD` are meaningful for a static portal |
| assets 404 but the page opens | a stale `index.html` pointing at pruned hashes — the mirror deletes old chunks, so an entry document and an `assets/` from different builds cannot mix unless a cache is holding the old HTML. Check `curl -sI …/index.html \| grep -i cache-control` and purge anything in front |
| new deploy not visible | `index.html` must be served `no-cache, must-revalidate`; if a CDN or proxy sits in front, it is caching the entry document |
| `--source … is the DEVELOPMENT entry document` | you pointed at the repository root or a source tree. Build first (`npm run build`) and pass the `dist/` directory |
| `the export holds non-build entries` | macOS resource forks or a source tree in the export. Repack with `COPYFILE_DISABLE=1 tar -czf … -C dist .` |
| `this script is being run from inside the web root` | the clone is in `/var/www`. `sudo mv` it to `/srv` and re-run from there; the mirror would otherwise delete the repository it is standing in |
| CSP error in the console | the policy is `default-src 'self'` with `connect-src 'self' https://api.github.com`. The build ships no inline scripts or styles — verified by rendering `dist/` under this exact CSP and getting the same DOM as with no CSP at all — so a violation means something was added that should not be there |

## Related

- [`../../README.md`](../../README.md) — what the site is, how it is built, licence and trademark position.
- `node.popopx.chat_nginx.conf` in the repository root — the operator's original
  short snippet, kept **untracked** and reduced to a pointer. This directory supersedes
  it: the snippet has no TLS block, no security headers and no `location ~ /\.` deny, so
  pasting it re-creates this incident. Do not install it.

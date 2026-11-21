# Deploying the portal on a RHEL-family host

`nginx-node.popopx.chat.conf` and `deploy_centos.sh` publish this repository's
`dist/` as a static site on one nginx server block. They target **CentOS Stream,
Rocky Linux and AlmaLinux** (anything with `dnf`); Debian/Ubuntu needs a different
runbook, and the script says so rather than guessing at `apt`.

Run both on the target host, from a clone of this repo. Nothing in here is meant to
be run from a workstation against a remote machine.

## Prerequisites

| | check |
|---|---|
| root | `id -u` prints `0` (or run every command through `sudo`) |
| OS | `cat /etc/os-release` shows a dnf-based release; `command -v dnf` succeeds |
| Node.js | `node -v` prints `v22.x` or newer, or the distro offers a `nodejs:22` module stream |
| repo | the clone contains `package.json`, `package-lock.json` and `deploy/centos/` |
| DNS | `node.popopx.chat` already resolves to this host, or you pass `--web-root` for a different name |

`package-lock.json` is not optional: the script builds with `npm ci`, which refuses to
run without it.

## Run it

```sh
./deploy/centos/deploy_centos.sh --dry-run     # prints every mutating step, changes nothing
sudo ./deploy/centos/deploy_centos.sh          # the real run
```

Other flags: `--web-root <path>` publishes somewhere other than the root declared in
the conf, `--skip-install` forbids any `dnf` install (everything must already be
present). Unknown arguments are rejected, `-h` prints the same list.

What a real run does, in order: installs `nginx`, `rsync` and
`policycoreutils-python-utils` if missing, and a Node.js 22 toolchain if the one on
PATH is older; runs `npm ci && npm run build`; copies the build into a dot-prefixed
staging directory inside the web root, then moves hashed `assets/` in additively and
switches `index.html` with a single `mv` on the same filesystem; sets `root:root`,
`0755` on directories and `0644` on files, and strips any world-writable bit;
registers `httpd_sys_content_t` for the web root with `semanage fcontext` and runs
`restorecon` (falling back to `chcon` with a warning if `semanage` is unavailable);
opens the `http` firewalld service only if it is not already open; validates the new
conf with `nginx -t` against a throwaway prefix directory **before** touching
`/etc/nginx/conf.d/`, backs up whatever was there as
`node.popopx.chat.conf.bak.<timestamp>`, installs, validates the whole live config,
and `systemctl reload`s — never `restart`s, so other vhosts keep their sockets.

Two things the script deliberately does not do: it adds no third-party package
repository (if the distro has no Node.js 22 it stops and tells you, because a repo rpm
is your decision, not a script's), and it does not obtain a certificate (see below).

## Verifying afterwards

```sh
curl -sI http://node.popopx.chat/                    | grep -iE '^(HTTP|cache-control|content-security-policy)'
curl -sI http://node.popopx.chat/index.html           | grep -i cache-control   # no-cache, must-revalidate
curl -sI http://node.popopx.chat/assets/index-<hash>.js | grep -i cache-control # public, max-age=31536000, immutable
curl -sI http://node.popopx.chat/site.webmanifest     | grep -i content-type    # application/manifest+json
curl -s -o /dev/null -w '%{http_code}\n' http://node.popopx.chat/some/spa/route # 200, from the SPA fallback
getenforce                                            # Enforcing
sudo ausearch -m avc -ts recent | tail                # empty for httpd means SELinux is not the reason for a 403
```

The zero-tracking claim is checkable from the served page, not from this file:

```sh
curl -s http://node.popopx.chat/ | grep -Eo 'https?://[A-Za-z0-9._/~:-]+' | sort -u
```

The entry HTML names no remote host. `api.github.com` appears inside a JS chunk, which
is where the one permitted client-side request is made.

## HTTPS

The 443 server block at the bottom of the conf ships commented out. Uncommenting it
before a certificate exists makes `nginx -t` fail, so get the certificate first.

```sh
sudo dnf -y install certbot
sudo certbot certonly --webroot -w /var/www/node.popopx.chat -d node.popopx.chat \
     --deploy-hook "systemctl reload nginx"
```

`--webroot` is the right authenticator here because the conf already serves
`/.well-known/acme-challenge/` from that directory (`--standalone` would fail: nginx
holds port 80). Then:

1. Uncomment the whole `#server { … }` block.
2. Reduce the port-80 block to ACME plus a redirect — replace its `location /` with
   `return 307 https://$host$request_uri;` and leave the acme-challenge location alone.
3. `sudo nginx -t && sudo systemctl reload nginx`.

Before step 3, check `nginx -v`: the block uses `http2 on;`, which needs nginx
≥ 1.25.1. If your build is older — some distro-patched appstream packages are — replace
`http2 on;` with `listen 443 ssl http2;` on the two `listen` lines and delete the
`http2 on;` line. `nginx -t` is the arbiter: it errors on whichever spelling your build
does not understand.

The 443 block adds `upgrade-insecure-requests` to the CSP, and it is deliberately
absent from the port-80 block: on a plain-HTTP origin that directive makes the browser
rewrite same-origin `http://` subresource URLs to `https://` with no fallback, which
would break every `/assets/` request until the certificate is in place.

HSTS ships as `max-age=300`. Raise it only once HTTPS is proven for your audience —
the header is a commitment to browsers you cannot retract.

Renewal: `systemctl list-timers | grep -i certbot` should show the certbot timer. The
`--deploy-hook` above reloads nginx after each renewal; without it nginx keeps serving
the old certificate until something reloads it.

## Rollback

```sh
sudo ls -1 /etc/nginx/conf.d/node.popopx.chat.conf.bak.*   # timestamps from each run
sudo cp -a /etc/nginx/conf.d/node.popopx.chat.conf.bak.<TS> /etc/nginx/conf.d/node.popopx.chat.conf
sudo nginx -t && sudo systemctl reload nginx
```

The previous `dist/` files are not kept: a publish overwrites `index.html` and prunes
`assets/` to match the build it just installed. Rolling the site back to an earlier
build means checking out that tag and re-running the script.

## Troubleshooting

| symptom | cause and check |
|---|---|
| 403 on every path | SELinux context. `ls -Z /var/www/node.popopx.chat/index.html` should end in `httpd_sys_content_t`; if not, install `policycoreutils-python-utils` and re-run so `semanage`+`restorecon` are used instead of `chcon` |
| 403 but contexts look right | the AVC log decides: `sudo ausearch -m avc -ts recent` |
| 405 | intended: only `GET` and `HEAD` are meaningful for a static portal |
| new deploy not visible | `index.html` must be served `no-cache, must-revalidate`; check with `curl -sI …/index.html`. If a CDN or proxy sits in front, it is caching the entry document |
| blank page, assets 404 | stale `index.html` pointing at pruned hashes, or `assets/` not world-readable: `namei -l /var/www/node.popopx.chat/assets` |
| `nginx -t` fails on `http2 on` | nginx < 1.25.1; see the HTTPS section |
| CSP error in the console | the policy is `default-src 'self'` with `connect-src 'self' https://api.github.com`; the site ships no inline scripts or styles, so a violation means something was added that should not be there |

## Related

- [`../../README.md`](../../README.md) — what the site is, how it is built, licence and trademark position.
- `node.popopx.chat_nginx.conf` in the repository root — the operator's original short
  snippet. This directory supersedes it; it is kept untracked and untouched.

# node.popopx.chat — the POPOPX Mac Node portal

The product site for **POPOPX Mac Node**: the macOS companion that turns a machine the
reader already owns into the compute node behind the ten Discover engines of the POPOPX
iOS client. Inference, video rendering, sealing and device control happen on that
machine; the network only carries the request and the result. It is a static Vite +
React + TypeScript single-page app with seven routes. There is no backend, no build
service and no runtime dependency on anything we host.

Live: <https://node.popopx.chat> · Source: <https://github.com/popopx-chat/popopx-mac-node>

## Routes

| Path | Destination |
|---|---|
| `/` | Hero, the network/machine split, the four entry points, architecture, the console UI preview, FAQ |
| `/node` | What a node is, the command wire, pairing, the listening ports |
| `/features` | The ten engines and the Apple Silicon memory ladder, including the tier plans |
| `/install` | Prerequisites, the five steps, building from the tag, how the published build is signed and how to check its digest, upgrade/backup/removal, the bridge |
| `/security` | What stays on disk, what leaves, where the keys live, the off switch, the limits |
| `/troubleshooting` | The observed faults as a symptom / cause / fix table |
| `/releases` | Published assets, the verification commands, the pipeline, supported versus planned, the licence |

Routing is `src/router.tsx`: about a hundred lines over the History API, no dependency.
`RouteLink` renders a real `href`, so middle-click, "copy link address" and a reader with
JavaScript disabled all get the same destination, and the vhost's
`try_files $uri $uri/ /index.html` answers any deep link.

**`resolveRoute` defaults an unknown path to `/`, and that is a compatibility contract, not
a 404 page.** The badge flow links `node.popopx.chat/badge`, and the deployed behaviour —
measured with `curl --noproxy '*'` on 2026-11-25 — is that `/badge`,
`/badge?app=desktop` and `/badge?app=android` each answer `200` with the entry document.
The router never reads or rewrites `location.search`, so `?app=desktop` and `?app=android`
survive a visit to this site unchanged. Nothing in the routing may turn one of those
requests into an error page or a redirect.

## What the page claims, and where the claims come from

Every number, price and engine name on the page is read out of the shipping apps
rather than written for the site. That is deliberate: a portal that paraphrases the
product will eventually contradict it.

| On the page | Source of truth |
|---|---|
| The ten engines, their shelves, prices, substrates, quick-menu commands, taglines, highlights | `apps/ios/Shared/DiscoverCatalogModels.swift` and `MacNodeModels.swift`, extracted by `tools/generate_engines_catalog.py` into `src/data/enginesCatalog.ts` |
| The Apple Silicon memory ladder and the three tier rules | `PopopxMacNode/README.md`, with the band boundaries taken from `ComputeTier` in `MacNodeModels.swift` (`.light` below 48 GB, `.high` 48–95, `.flagship` from 96) |
| The pairing code, the command wire, the ports, the data-root layout, the tier plans, the prerequisites | `src/data/nodeRuntime.ts`, read out of `MacNodeModels.swift`, `MacNodePopopxBridge.swift` and `HardwareProfilerAndInstaller.swift`, with the file:line citations kept in that file's comments |
| The release version, asset URLs, sizes and digests | `https://api.github.com/repos/popopx-chat/popopx-mac-node/releases/latest`, with a pinned fallback whose digests were measured by downloading and hashing each published asset (`src/data/release.ts` records the table and the recipe) |
| The five source-line capabilities on `/features` and `/security` — discovery, MCP, Home Assistant/MQTT, CalDAV, sealed pairing — and every limit, protocol name and redaction field | `src/data/edgeHub.ts`, read out of `LocalCapabilityDiscovery.swift`, `HubBridgeConfig.swift`, `MCPBridge.swift`, `SmartHomeBridge.swift`, `CalDavBridge.swift`, `ICalendarFreeBusy.swift`, `PrivacyProposalLedger.swift`, `HubSecrets.swift` and `OpaquePairingCodec.swift`, with file:line citations in that file's header. The section badge says these are on `main` (5858b3c, 040ef25) and **not** in the signed v1.0.2 image the download button serves |
| The console preview card on `/` | `src/data/consolePreview.ts` — the published `LADDER` rows with a numeric size attached, plus a port of `ComputeTier`, `ModelPlan.recommend` and `meshMemoryCeilingGB` from `MacNodeModels.swift`. The three device rows are fixtures in the real `PairedDevice` shape; the card labels itself a UI preview and requests nothing |
| The signing state on `/install` | `src/data/signing.ts` — recorded `codesign`/`spctl`/`stapler` output from the published v1.0.2 bytes, with the mount-and-inspect recipe in that file's header and the same table under “How the published build is signed” below |
| The three sibling portals in the ecosystem row | `src/data/ecosystem.ts`, checked with `curl -sIL --max-time 25` against each host's document title |
| The 18 interface languages | `knownRegions` in `apps/ios/POPOPX.xcodeproj/project.pbxproj`, minus `Base`, which is an Xcode artefact rather than a locale |

Re-derive the language count yourself:

```sh
awk '/knownRegions = \(/,/\);/' apps/ios/POPOPX.xcodeproj/project.pbxproj \
  | grep -cE '^\s+"?[A-Za-z-]+"?,\s*$'
```

Nineteen entries, eighteen languages once `Base` — an Xcode artefact, not a locale —
is dropped. `LOCALES` in `src/i18n/types.ts` is that eighteen.

`src/data/enginesCatalog.ts` is a generated file: edit
`tools/generate_engines_catalog.py`, not the output.

### Checking a published digest

The site prints the download-verification commands rather than asserting a digest of its
own, and it prefers a release manifest (`SHA256SUMS.txt`) over the single-asset
`.dmg.sha256` sidecar. That preference is a measurement, not a style choice: on
2026-11-25 both v1.0.2 assets were downloaded and hashed, and the manifest lines matched
the bytes while the sidecar published beside them named a digest
(`9107bc89d54604f2c000afde8c92b374b33aef77cfd7022c2f6a146f71262eef`) that no published
asset hashes to. The v1.0.1 sidecar did match, so the discrepancy is per-release and
belongs upstream in `popopx-mac-node`'s packaging scripts, not in this repository. Re-derive
from a release you can reach:

```sh
curl -sL -o SUMS  https://github.com/popopx-chat/popopx-mac-node/releases/download/<tag>/SHA256SUMS.txt
curl -sL -o x.dmg https://github.com/popopx-chat/popopx-mac-node/releases/download/<tag>/POPOPX-Mac-Node-Universal.dmg
shasum -a 256 x.dmg
shasum -a 256 -c --ignore-missing SUMS
```

### How the published build is signed

`/install` prints the signing state as measured, including the part that looks like a
problem. Every value below is tool output read off the artifact, recorded on 2026-11-25
against `POPOPX-Mac-Node-Universal.dmg` for v1.0.2 — the local build hashed to
`a8d762867381bc5f6cac7aee4b528e6cee8ace46c4400c6be4cb8d09d94a1d36`, which is exactly the
digest `src/data/release.ts` pins for the published asset, so these are the published bytes
under inspection rather than a reconstruction of them. The same table, in code, is the
comment header of `src/data/signing.ts`.

| Probe | Answer |
|---|---|
| `codesign -dvv "POPOPX Mac Node.app"` | `Developer ID Application: gang sun (PDBA6XRBQT)` → `Developer ID Certification Authority` → `Apple Root CA`; `TeamIdentifier=PDBA6XRBQT`; `flags=0x10000(runtime)`; secure timestamp present; `Notarization Ticket=stapled` |
| `codesign --verify --deep --strict` | `valid on disk`, `satisfies its Designated Requirement` |
| `spctl -a -vv -t install` on the **.app** | `accepted` / `source=Notarized Developer ID` |
| `xcrun stapler validate …dmg` | ticket validates |
| `codesign -dvv` on the **.dmg container** | `code object is not signed at all` |
| `spctl -a -vv` on the **.dmg container** | `rejected` / `source=no usable signature` |

The last two rows are the reason the page explains itself. The application bundle is
notarized; the UDIF image wrapped around it carries a stapled ticket but no code signature
of its own, so a reader who runs `spctl` on the downloaded file gets `rejected` and needs to
be told that is expected. The image's only integrity control is the SHA-256 above.

Provenance, from the node repository: `Scripts/build_dmg.sh:615-619` signs ad-hoc
(`--sign - --timestamp=none`, no hardened runtime) and `:780` expects `spctl` to reject that
— and `.github/workflows/release.yml:115` runs only `build_dmg.sh`, so the tag pipeline
publishes an ad-hoc image with a single-asset sidecar. `Scripts/build-release.sh` is the
Developer ID path: it signs with the runtime flag, submits to notarization, staples the
ticket to bundle and image, and writes the ZIP beside a `SHA256SUMS.txt` manifest. The
container, ZIP and manifest that are actually on the release can only come from that second
script, which needs the certificate, so a runner that never held it cannot produce them.

Re-derive it from the image on your own machine:

```sh
hdiutil attach -readonly -nobrowse -mountpoint /tmp/ppx-node-dmg POPOPX-Mac-Node-Universal.dmg
codesign -dvv "/tmp/ppx-node-dmg/POPOPX Mac Node.app"
spctl -a -vv -t install "/tmp/ppx-node-dmg/POPOPX Mac Node.app"
codesign -dvv POPOPX-Mac-Node-Universal.dmg
spctl -a -vv POPOPX-Mac-Node-Universal.dmg
hdiutil detach /tmp/ppx-node-dmg
```

## Zero tracking, by construction

- No analytics, no cookies, no fingerprinting, no third-party script, no external
  font, no CDN. The type stack is the platform's own system fonts.
- The one outbound request the page can make is the GitHub Releases call for the
  download button, made client-side with `credentials: "omit"` and
  `referrerPolicy: "no-referrer"`, and it degrades to a pinned release when it fails.
- Nothing is fetched from the other POPOPX portals either. `src/data/ecosystem.ts`
  links `popopx.chat`, `bot.popopx.chat` and `mp.popopx.chat` in the navigation and the
  footer, and `src/data/release.ts` links GitHub. Those are anchors: no image, script,
  stylesheet, font or favicon is loaded from them, and a reader only leaves this origin
  by clicking one. Everything the page renders is served from this origin.

Prove it against a build before you ship it:

```sh
npm run build
grep -Eoh 'https?://[A-Za-z0-9._/~:-]+' dist/index.html dist/site.webmanifest \
  dist/assets/*.js dist/assets/*.css | sort -u
```

The expected set is exactly this, and nothing else: `https://api.github.com/repos/`
(the one request the page may make), `https://github.com/` links a reader clicks,
`https://github.com/popopx-chat/popopx-chat`, the three POPOPX portal origins named
above, `https://popopx.chat/i/v1/` (the sealed pairing link shape, displayed as a code
sample and never fetched), `http://127.0.0.1:11434` (the loopback Ollama origin in the
discovery facts, a literal for the reader rather than a request from the page), the four
`http://www.w3.org/…` XML namespaces that live inside React's DOM code,
`https://react.dev/errors/` inside React's minified error text, and the
`https://tailwindcss.com` licence comment at the top of the stylesheet. Only the first is
ever requested, and only by the reader's own browser.

The command above reads text files. The three resampled icons (`favicon.png`,
`favicon-32.png`, `apple-touch-icon.png`) additionally carry an `adobe.xmp` metadata
chunk: three EXIF fields — `ColorSpace`, `PixelXDimension`, `PixelYDimension` — the two
`http://` namespace URIs those field names require, and the version string of the XMP
library that wrote the packet. Nothing in them describes a visitor or a filesystem
path, and they are bytes in a local file, never a URL anyone resolves.
`logo-popopx.png` and `logo-popopx.svg` carry no such chunk.

## Build and run

Requires Node.js 20.19 or newer. `package.json` declares
`engines: { "node": ">=20.19.0" }`, and the locked Vite (8.3.8, in
`package-lock.json`) declares `^20.19.0 || >=22.12.0` — so build on Node 20 LTS
(≥ 20.19) or Node 22 LTS (≥ 22.12), which is the version
`deploy/centos/deploy_centos.sh --build-on-host` asks for.

```sh
npm ci
npm run dev        # http://127.0.0.1:5173
npm run build      # dist/
npm run preview
```

The build is expected to be clean: `tsc -b` with `strict`, `noUnusedLocals`,
`noUnusedParameters`, `verbatimModuleSyntax` and `erasableSyntaxOnly`, and a Vite
build with no warnings. If you introduce a warning, fix the warning rather than
raising the threshold that reports it.

Translations are code-split: English is the fallback that ships in the entry chunk,
and each of the other seventeen languages becomes its own chunk that loads only when
a reader switches to it. Language names are listed separately in
`src/i18n/types.ts` so the language menu is complete before any catalog has arrived.

`Dictionary` in `src/i18n/types.ts` is a total type, so `tsc -b` **is** the catalog parity
gate: a missing key in any of the eighteen files is a compile error, and a key that exists
in a catalog but not in the interface is an excess-property error. Adding a string
therefore means one key and eighteen values; adding a route means `ROUTES` in
`src/router.tsx`, one key in `routes`, and one nav label per locale.

## Deploy

Publishing is three facts: build on a workstation, mirror `dist/` into the document
root, serve it with the vhost in `deploy/centos/`. The host never needs Node.js — the
machine that serves this site runs an nginx old enough that Node.js 22 cannot start on
it, which is why the script takes a prebuilt export (`--source`) as its default path.

`deploy/centos/` holds the nginx server block and an idempotent script for CentOS
Stream and Rocky/AlmaLinux. It validates the export and stops if `index.html` is the
development entry document, refuses to run from a document root that contains the
repository (printing the `mv` that fixes the layout), tarballs the current web root to
`/var/backups/popopx/` outside the tree, mirrors the export with `rsync --delete`,
obtains the Let's Encrypt certificate **before** installing a vhost that references it,
validates the rendered conf with `nginx -t` in a throwaway prefix before touching
`/etc/nginx/conf.d/`, and restores the previous file — re-validating — if the live
config rejects it. `deploy/centos/README.md` carries the flag list, the first-fix
recipe for a web root that currently holds a `git clone`, the verification commands and
both rollback paths.

## Licence

The source in this repository is **AGPL-3.0-only** — see [`LICENSE`](LICENSE). The
`LICENSE` file is the licence text itself and is not modified by this project.

Because the site is a work that can be offered as a service, section 13 applies in
the ordinary way: if you run a modified copy of this portal for other people, you
offer them the corresponding source. That is the whole compliance cost.

## Trademark and artwork

`POPOPX`, `POPOPX Chat` and the POPOPX logo are the marks of the POPOPX Chat project.
They are **not registered** marks, and AGPL-3.0 grants no licence to them. The policy
lives in [`TRADEMARK-POPOPX.md`](https://github.com/popopx-chat/popopx-chat/blob/main/TRADEMARK-POPOPX.md)
in the popopx-chat repository; the artwork licence is
[`ASSETS_LICENSE-POPOPX.md`](https://github.com/popopx-chat/popopx-chat/blob/main/ASSETS_LICENSE-POPOPX.md).

This site is the project's own portal, so it carries the project's own marks. A fork
may not: rename the software, replace the marks, keep the code.

The two brand files this site serves are verbatim copies, not redrawings:

- `public/logo-popopx.svg` is byte-identical to `branding/master-logo/popopx-mark.svg`
  in popopx-chat.

- `public/logo-popopx.png` is the shipping iOS application icon,
  `apps/ios/Shared/Assets.xcassets/AppIcon.appiconset/1024.png`, blob
  `7d28d4528293534d1aa31ebea359e7e599b78189`. The same path held upstream SimpleX
  bytes (`9a44d45b1f8ac226775ac62c40103d135460b8ed`) until commit `070168d15` replaced
  them, which is what makes it POPOPX artwork rather than a copy of someone else's.
- `favicon.png`, `favicon-32.png` and `apple-touch-icon.png` are uniform resamples of
  that same icon at 512, 32 and 180 px. Nothing was recoloured or re-proportioned.

Verify the two identical-file claims yourself, from a checkout of popopx-chat next to
this one:

```sh
cmp branding/master-logo/popopx-mark.svg ../node-popopx-chat-web/public/logo-popopx.svg
cmp apps/ios/Shared/Assets.xcassets/AppIcon.appiconset/1024.png \
    ../node-popopx-chat-web/public/logo-popopx.png
```

Apple is not affiliated with this project. macOS, iOS, Apple Silicon and Metal are
trademarks of Apple Inc.

## What this page is careful not to promise

The throughput, time-to-first-token and memory figures in the hardware table are
engineering estimates derived from memory bandwidth and weight footprint, printed as
estimates and labelled as such in the table's own footnote. They are there to help a
reader pick a tier, not to be quoted as a benchmark. The node's 1.1 plans to replace
them with per-engine measurements taken on the machine in front of the reader.

The console preview on `/` is a picture of an interface, not a status page. It is labelled
`UI Preview` on its face in every locale, it requests nothing, and it never ticks: the
machine rows are fixtures the reader selects, the ceilings are the node's published
arithmetic applied to that selection, the engine list is the same catalog `/features`
prints, and the port table is `nodeRuntime.ts`. What it does not have is a node — so no
string in the `dashboard` block may read as if the page were reporting a running process.

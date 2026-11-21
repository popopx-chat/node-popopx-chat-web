# node.popopx.chat — the POPOPX Mac Node portal

The product site for **POPOPX Mac Node**: the macOS companion that runs the local
compute behind the ten Discover engines of the POPOPX iOS client. It is a static
Vite + React + TypeScript single page. There is no backend, no build service and no
runtime dependency on anything we host.

Live: <https://node.popopx.chat> · Source: <https://github.com/popopx-chat/popopx-mac-node>

## What the page claims, and where the claims come from

Every number, price and engine name on the page is read out of the shipping apps
rather than written for the site. That is deliberate: a portal that paraphrases the
product will eventually contradict it.

| On the page | Source of truth |
|---|---|
| The ten engines, their shelves, prices, substrates, quick-menu commands, taglines, highlights | `apps/ios/Shared/DiscoverCatalogModels.swift` and `MacNodeModels.swift`, extracted by `tools/generate_engines_catalog.py` into `src/data/enginesCatalog.ts` |
| The Apple Silicon memory ladder and the three tier rules | `PopopxMacNode/README.md`, with the band boundaries taken from `ComputeTier` in `MacNodeModels.swift` (`.light` below 48 GB, `.high` 48–95, `.flagship` from 96) |
| The release version, asset URL, size and digest | `https://api.github.com/repos/popopx-chat/popopx-mac-node/releases/latest`, with a pinned fallback |
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

## Zero tracking, by construction

- No analytics, no cookies, no fingerprinting, no third-party script, no external
  font, no CDN. The type stack is the platform's own system fonts.
- The one outbound request the page can make is the GitHub Releases call for the
  download button, made client-side with `credentials: "omit"` and
  `referrerPolicy: "no-referrer"`, and it degrades to a pinned release when it fails.
- Nothing is fetched from `popopx.chat` either: the site, its fonts and its icons are
  all served from this one origin.

Prove it against a build before you ship it:

```sh
npm run build
grep -Eoh 'https?://[A-Za-z0-9._/~:-]+' dist/index.html dist/site.webmanifest \
  dist/assets/*.js dist/assets/*.css | sort -u
```

The expected set is exactly this, and nothing else: `https://api.github.com/repos/`
(the one request the page may make), `https://github.com/` links a reader clicks,
`https://github.com/popopx-chat/popopx-chat`, the four `http://www.w3.org/…` XML
namespaces that live inside React's DOM code, `https://react.dev/errors/` inside
React's minified error text, and the `https://tailwindcss.com` licence comment at the
top of the stylesheet. Only the first is ever requested, and only by the reader's own
browser.

The command above reads text files. The three resampled icons (`favicon.png`,
`favicon-32.png`, `apple-touch-icon.png`) additionally carry an `adobe.xmp` metadata
chunk: three EXIF fields — `ColorSpace`, `PixelXDimension`, `PixelYDimension` — the two
`http://` namespace URIs those field names require, and the version string of the XMP
library that wrote the packet. Nothing in them describes a visitor or a filesystem
path, and they are bytes in a local file, never a URL anyone resolves.
`logo-popopx.png` and `logo-popopx.svg` carry no such chunk.

## Build and run

Requires Node.js 22 or newer.

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

## Deploy

`deploy/centos/` holds the nginx server block and an idempotent script for CentOS
Stream and Rocky/AlmaLinux 9 and 10: it installs the toolchain, builds, stages
`dist/`, sets SELinux contexts, validates with `nginx -t` before touching the live
configuration and keeps a timestamped backup. Read `deploy/centos/README.md` first;
it lists the checks to run on the host afterwards.

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

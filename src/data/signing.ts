/**
 * How the published macOS build is actually signed, and how to check that on your own copy.
 *
 * Every value below is tool output, read off the artifact rather than off a release note.
 * The pinned v1.0.2 digest in `release.ts` is `a8d76286…a1d36`, and the local build in
 * `PopopxMacNode/dist/POPOPX-Mac-Node-Universal.dmg` hashes to exactly that, so this is the
 * published byte sequence being inspected, not a reconstruction of it. Measured 2026-11-25:
 *
 *   # mount the shipped image read-only
 *   hdiutil attach -readonly -nobrowse -mountpoint /tmp/ppx-node-dmg \
 *     PopopxMacNode/dist/POPOPX-Mac-Node-Universal.dmg
 *   codesign -dvv "/tmp/ppx-node-dmg/POPOPX Mac Node.app"
 *     Authority=Developer ID Application: gang sun (PDBA6XRBQT)
 *     Authority=Developer ID Certification Authority
 *     Authority=Apple Root CA
 *     TeamIdentifier=PDBA6XRBQT
 *     CodeDirectory v=20500 size=6012 flags=0x10000(runtime) …
 *     Timestamp=Nov 23, 2026 at 21:58:47
 *     Notarization Ticket=stapled
 *   codesign --verify --deep --strict --verbose=2 "/tmp/ppx-node-dmg/POPOPX Mac Node.app"
 *     … valid on disk … satisfies its Designated Requirement
 *   spctl -a -vv -t install "/tmp/ppx-node-dmg/POPOPX Mac Node.app"
 *     … accepted / source=Notarized Developer ID
 *   xcrun stapler validate PopopxMacNode/dist/POPOPX-Mac-Node-Universal.dmg
 *     The validate action worked!
 *   codesign -dvv PopopxMacNode/dist/POPOPX-Mac-Node-Universal.dmg
 *     … code object is not signed at all
 *   spctl -a -vv PopopxMacNode/dist/POPOPX-Mac-Node-Universal.dmg
 *     … rejected / source=no usable signature
 *   # the same three answers for the app inside the published ZIP, after `unzip`
 *   hdiutil detach /tmp/ppx-node-dmg
 *
 * The last four lines are the reason this file exists. The application bundle is notarized;
 * the disk image wrapped around it is a UDIF carrying a stapled ticket but no code signature
 * of its own, so a reader who runs `spctl` on the downloaded file gets `rejected` and needs to
 * be told that is expected rather than being left to conclude the download was tampered with.
 * The image's only integrity control is its SHA-256, which is what `verifyCommands` in
 * `release.ts` makes a reader check.
 *
 * Where the signature comes from, in the node repository:
 *   `Scripts/build_dmg.sh:615-619` signs ad-hoc — `codesign --force --deep --sign -
 *     --timestamp=none`, no hardened runtime — and `:780` expects `spctl` to reject that.
 *   `Scripts/build-release.sh` is the Developer ID pipeline: `:560` signs with
 *     `--options runtime --timestamp`, `:167` staples the app and the image, `:863` writes the
 *     ZIP, `:910-935` writes and self-verifies `SHA256SUMS.txt`.
 *   `.github/workflows/release.yml:115` runs only `build_dmg.sh` and uploads the DMG plus its
 *     single-asset sidecar. So the tag pipeline publishes an ad-hoc image; the notarized
 *     container, the ZIP and the manifest on a release come from `build-release.sh` run
 *     wherever the Developer ID certificate lives. A build you make yourself is ad-hoc too.
 */

import { DMG_ASSET } from "./release";

/** The bundle name as it lands in `/Applications` after the drag. */
export const INSTALLED_APP = "/Applications/POPOPX Mac Node.app";

/**
 * The evidence block the install page prints: the recorded output, line for line, with nothing
 * paraphrased. It is tool output rather than site copy, so it is never localized — a reader
 * comparing it against their own terminal is comparing the same strings.
 */
export const SIGNATURE_EVIDENCE: string[] = [
  "Authority=Developer ID Application: gang sun (PDBA6XRBQT)",
  "Authority=Developer ID Certification Authority",
  "Authority=Apple Root CA",
  "TeamIdentifier=PDBA6XRBQT",
  "flags=0x10000(runtime)",
  "Notarization Ticket=stapled",
  "→ spctl: accepted, source=Notarized Developer ID",
];

/**
 * In the order to run them: first the bundle's own seal, then Gatekeeper's verdict on it,
 * then the ticket on the image it came in. The fourth is the one that answers `rejected`, and
 * the panel beside it is there to explain why that is the correct answer.
 */
export const SIGNATURE_COMMANDS: string[] = [
  `codesign -dvv "${INSTALLED_APP}"`,
  `spctl -a -vv -t install "${INSTALLED_APP}"`,
  `xcrun stapler validate ${DMG_ASSET}`,
  `spctl -a -vv ${DMG_ASSET}`,
];

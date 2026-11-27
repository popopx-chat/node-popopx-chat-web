/**
 * How the published macOS build is actually signed, and how to check that on your own copy.
 *
 * Every value below is tool output, read off the artifact rather than off a release note.
 * The pinned v1.0.2 build-4 digest in `release.ts` is `b1a75576…08a0a`, and the local build
 * in `PopopxMacNode/dist/release-v1.0.2-build4/POPOPX-Mac-Node-Universal.dmg` hashes to
 * exactly that, so this is the published byte sequence being inspected, not a reconstruction
 * of it. Measured 2026-11-27:
 *
 *   # mount the shipped image read-only
 *   hdiutil attach -readonly -nobrowse -mountpoint /tmp/ppx-node-build4 \
 *     PopopxMacNode/dist/release-v1.0.2-build4/POPOPX-Mac-Node-Universal.dmg
 *   codesign -dvv "/tmp/ppx-node-build4/POPOPX Mac Node.app"
 *     Identifier=chat.popopx.node
 *     Format=app bundle with Mach-O universal (x86_64 arm64)
 *     CodeDirectory v=20500 size=13148 flags=0x10000(runtime) hashes=400+7 location=embedded
 *     Authority=Developer ID Application: gang sun (PDBA6XRBQT)
 *     Authority=Developer ID Certification Authority
 *     Authority=Apple Root CA
 *     Timestamp=Nov 27, 2026 at 12:14:18
 *     Notarization Ticket=stapled
 *     TeamIdentifier=PDBA6XRBQT
 *     Runtime Version=14.0.0
 *   codesign --verify --deep --strict --verbose=2 "/tmp/ppx-node-build4/POPOPX Mac Node.app"
 *     … valid on disk … satisfies its Designated Requirement
 *   spctl -a -vv -t install "/tmp/ppx-node-build4/POPOPX Mac Node.app"
 *     … accepted / source=Notarized Developer ID
 *   xcrun stapler validate "/tmp/ppx-node-build4/POPOPX Mac Node.app"
 *     The validate action worked!
 *   xcrun stapler validate PopopxMacNode/dist/release-v1.0.2-build4/POPOPX-Mac-Node-Universal.dmg
 *     The validate action worked!
 *   codesign -dvv PopopxMacNode/dist/release-v1.0.2-build4/POPOPX-Mac-Node-Universal.dmg
 *     … code object is not signed at all
 *   spctl -a -vv PopopxMacNode/dist/release-v1.0.2-build4/POPOPX-Mac-Node-Universal.dmg
 *     … rejected / source=no usable signature
 *   /usr/libexec/PlistBuddy -c 'Print :CFBundleShortVersionString' …/Contents/Info.plist
 *     1.0.2
 *   /usr/libexec/PlistBuddy -c 'Print :CFBundleVersion' …/Contents/Info.plist
 *     4
 *   hdiutil detach /tmp/ppx-node-build4
 *
 * The DMG's unsigned state is the reason this file exists. The application bundle is
 * notarized; the disk image wrapped around it is a UDIF carrying a stapled ticket but no code
 * signature of its own, so a reader who runs `spctl` on the downloaded file gets `rejected`
 * and needs to be told that is expected rather than being left to conclude the download was
 * tampered with. The image's only integrity control is its SHA-256, which is what
 * `verifyCommands` in `release.ts` makes a reader check.
 *
 * Where the signature comes from, in the node repository at `6de6eb8`:
 *   `Scripts/build_dmg.sh` is the local packer. It signs ad-hoc (`codesign --force --deep
 *     --sign - --timestamp=none`, no hardened runtime) and its own audit expects `spctl` to
 *     reject that, so a build you make yourself wants a right-click Open the first time.
 *   `Scripts/build-release.sh` is the Developer ID pipeline. It signs with
 *     `--options runtime --timestamp`, notarizes and staples the app and the image, writes the
 *     ZIP, and self-verifies `SHA256SUMS.txt`.
 *   `.github/workflows/release.yml` still invokes `build_dmg.sh` on every tag at
 *     `6de6eb8`, which is the ad-hoc path. The signed build 4 DMG, ZIP and manifest
 *     therefore come from a separate `build-release.sh` run that held the Developer ID
 *     certificate, not from that workflow; a runner without the certificate cannot
 *     produce them.
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
  "CodeDirectory v=20500 size=13148 flags=0x10000(runtime)",
  "Authority=Developer ID Application: gang sun (PDBA6XRBQT)",
  "Authority=Developer ID Certification Authority",
  "Authority=Apple Root CA",
  "TeamIdentifier=PDBA6XRBQT",
  "Timestamp=Nov 27, 2026 at 12:14:18",
  "Runtime Version=14.0.0",
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
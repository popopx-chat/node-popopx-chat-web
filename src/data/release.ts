/**
 * Latest-release lookup for the download block and the releases page.
 *
 * This module issues the one and only outbound request the site makes: a client-side
 * GET of the GitHub Releases API, no credentials and no cookies. Everything else —
 * the pinned version, its digests and their sizes — is compiled into the bundle so the
 * page still offers a verified download when api.github.com is unreachable, and so a
 * third-party tracker has nothing to observe.
 *
 * The pinned figures below are not copied from a release note. They are the result of
 * downloading each published asset and hashing it, on 2026-11-25:
 *
 *   v1.0.2  POPOPX-Mac-Node-Universal.dmg  3189691 B  a8d762867381bc5f6cac7aee4b528e6cee8ace46c4400c6be4cb8d09d94a1d36
 *   v1.0.2  POPOPX-Mac-Node-Universal.zip  2632528 B  f6ed80ed1b666ef5e5aec581b6dce1a26450e3b49a28f4d606ca0e66e1a3d740
 *   v1.0.1  POPOPX-Mac-Node-Universal.dmg  3178178 B  135a587cdf3eabc6554e3f753df3da6bcb839d25a60c5e676cc8b4669e83dc3d
 *
 * Both v1.0.2 digests are the SHA256SUMS.txt lines, and both matched the bytes. The
 * single-asset `.dmg.sha256` sidecar published beside v1.0.2 did not: it says
 * 9107bc89d54604f2c000afde8c92b374b33aef77cfd7022c2f6a146f71262eef, which no published
 * asset hashes to. The v1.0.1 sidecar did match. So a manifest, when a release carries
 * one, is the file to check against, and `verifyCommands` prefers it for that reason
 * rather than as a style choice. Re-derive with:
 *
 *   curl -sL -o SUMS  .../releases/download/<tag>/SHA256SUMS.txt
 *   curl -sL -o x.dmg .../releases/download/<tag>/POPOPX-Mac-Node-Universal.dmg
 *   shasum -a 256 x.dmg && shasum -a 256 -c --ignore-missing SUMS
 *
 * The digest of a *newer* release is deliberately not fetched: that would be a second
 * external request, and the manifest published beside the asset is the better source
 * anyway. `knownSha256` is therefore non-null only for the pinned fallback.
 */

export const RELEASE_REPO = "popopx-chat/popopx-mac-node";

export const DMG_ASSET = "POPOPX-Mac-Node-Universal.dmg";
export const ZIP_ASSET = "POPOPX-Mac-Node-Universal.zip";
export const SIDECAR_ASSET = `${DMG_ASSET}.sha256`;
export const SUMS_ASSET = "SHA256SUMS.txt";

export const LATEST_API_URL = `https://api.github.com/repos/${RELEASE_REPO}/releases/latest`;
export const RELEASES_PAGE_URL = `https://github.com/${RELEASE_REPO}/releases`;

type AssetKind = "dmg" | "zip" | "sidecar" | "sums";

/** Classify by exact name: an unrecognised upload is not shown as an install artifact. */
function assetKind(name: string): AssetKind | null {
  if (name === DMG_ASSET) return "dmg";
  if (name === ZIP_ASSET) return "zip";
  if (name === SIDECAR_ASSET) return "sidecar";
  if (name === SUMS_ASSET) return "sums";
  return null;
}

const FALLBACK_TAG = "v1.0.2";
const FALLBACK_SIZE_BYTES = 3189691;
const FALLBACK_SHA256 = "a8d762867381bc5f6cac7aee4b528e6cee8ace46c4400c6be4cb8d09d94a1d36";
const FALLBACK_ZIP_SHA256 = "f6ed80ed1b666ef5e5aec581b6dce1a26450e3b49a28f4d606ca0e66e1a3d740";
const FALLBACK_ZIP_SIZE_BYTES = 2632528;

export interface ReleaseAsset {
  name: string;
  kind: AssetKind;
  url: string;
  sizeBytes: number | null;
}

export interface ReleaseInfo {
  tag: string;
  /** The primary installer. A release without one is treated as unusable. */
  dmgUrl: string;
  zipUrl: string | null;
  sidecarUrl: string | null;
  sumsUrl: string | null;
  assets: ReleaseAsset[];
  tagPageUrl: string;
  sizeBytes: number | null;
  /** ISO-8601 as returned by the API; null when only the fallback is available. */
  publishedAt: string | null;
  /** Digest we can assert without a second request — the pinned build only. */
  knownSha256: string | null;
}

export interface ReleaseLookup {
  release: ReleaseInfo;
  /** "live" means the API answer was used; "fallback" means the pinned build was. */
  source: "live" | "fallback";
  /** Present only when the request ran and did not yield a usable answer. */
  note: string | null;
}

function downloadUrl(tag: string, asset: string): string {
  return `https://github.com/${RELEASE_REPO}/releases/download/${tag}/${asset}`;
}

function fallbackRelease(): ReleaseInfo {
  const entries: Array<[string, number]> = [
    [DMG_ASSET, FALLBACK_SIZE_BYTES],
    [SIDECAR_ASSET, 96],
    [ZIP_ASSET, FALLBACK_ZIP_SIZE_BYTES],
    [SUMS_ASSET, 192],
  ];
  const assets = entries.flatMap<ReleaseAsset>(([name, size]) => {
    const kind = assetKind(name);
    return kind === null ? [] : [{ name, kind, url: downloadUrl(FALLBACK_TAG, name), sizeBytes: size }];
  });
  return {
    tag: FALLBACK_TAG,
    dmgUrl: downloadUrl(FALLBACK_TAG, DMG_ASSET),
    zipUrl: downloadUrl(FALLBACK_TAG, ZIP_ASSET),
    sidecarUrl: downloadUrl(FALLBACK_TAG, SIDECAR_ASSET),
    sumsUrl: downloadUrl(FALLBACK_TAG, SUMS_ASSET),
    assets,
    tagPageUrl: `https://github.com/${RELEASE_REPO}/releases/tag/${FALLBACK_TAG}`,
    sizeBytes: FALLBACK_SIZE_BYTES,
    publishedAt: "2026-11-22T14:22:09Z",
    knownSha256: FALLBACK_SHA256,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function nonEmptyString(value: unknown): string | null {
  return typeof value === "string" && value.length > 0 ? value : null;
}

/**
 * Only accept an asset URL that is still a GitHub release download for this repo. A
 * release body is attacker-influenceable content on a third-party host; the download
 * button must never be pointed somewhere else by it.
 */
function releaseDownloadUrl(value: unknown, tag: string, asset: string): string | null {
  const url = nonEmptyString(value);
  if (url === null) return null;
  const expected = downloadUrl(tag, asset);
  return url === expected ? expected : null;
}

function parseRelease(payload: unknown): ReleaseInfo | null {
  if (!isRecord(payload)) return null;

  const tag = nonEmptyString(payload.tag_name);
  if (tag === null) return null;

  const assets = Array.isArray(payload.assets) ? payload.assets : [];
  const known: ReleaseAsset[] = [];
  const urls: Partial<Record<AssetKind, string>> = {};
  let dmgSize: number | null = null;

  for (const entry of assets) {
    if (!isRecord(entry)) continue;
    const name = nonEmptyString(entry.name);
    if (name === null) continue;
    const kind = assetKind(name);
    if (kind === null) continue;
    const url = releaseDownloadUrl(entry.browser_download_url, tag, name);
    if (url === null) continue;
    const size = entry.size;
    const sizeBytes = typeof size === "number" && Number.isFinite(size) && size > 0 ? size : null;
    urls[kind] = url;
    if (kind === "dmg") dmgSize = sizeBytes;
    known.push({ name, kind, url, sizeBytes });
  }

  const dmgUrl = urls.dmg;
  if (dmgUrl === undefined) return null;

  return {
    tag,
    dmgUrl,
    zipUrl: urls.zip ?? null,
    sidecarUrl: urls.sidecar ?? null,
    sumsUrl: urls.sums ?? null,
    assets: known,
    tagPageUrl: `https://github.com/${RELEASE_REPO}/releases/tag/${tag}`,
    sizeBytes: dmgSize,
    publishedAt: nonEmptyString(payload.published_at),
    knownSha256: tag === FALLBACK_TAG ? FALLBACK_SHA256 : null,
  };
}

/**
 * Resolves the newest published build, falling back to the pinned one on any failure:
 * offline, blocked, rate-limited, non-2xx, or a response that lacks a disk image.
 * It never rejects, because a missing release feed must not blank the page.
 */
export async function lookupRelease(signal?: AbortSignal): Promise<ReleaseLookup> {
  const release = fallbackRelease();

  if (typeof fetch !== "function") {
    return { release, source: "fallback", note: null };
  }

  try {
    const response = await fetch(LATEST_API_URL, {
      signal,
      credentials: "omit",
      referrerPolicy: "no-referrer",
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!response.ok) {
      return {
        release,
        source: "fallback",
        note: `GitHub API responded ${String(response.status)}`,
      };
    }

    const parsed = parseRelease(await response.json());
    if (parsed === null) {
      return { release, source: "fallback", note: "Latest release has no downloadable asset" };
    }
    return { release: parsed, source: "live", note: null };
  } catch (error: unknown) {
    if (signal?.aborted === true) {
      return { release, source: "fallback", note: null };
    }
    const reason = error instanceof Error ? error.message : "request failed";
    return { release, source: "fallback", note: reason };
  }
}

export function formatSize(sizeBytes: number | null, locale: string): string | null {
  if (sizeBytes === null) return null;
  const mebibytes = sizeBytes / 1048576;
  return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(mebibytes)} MiB`;
}

/** The digest recorded for a pinned asset, when we have one. */
export const PINNED_DIGESTS: Record<string, string> = {
  [DMG_ASSET]: FALLBACK_SHA256,
  [ZIP_ASSET]: FALLBACK_ZIP_SHA256,
};

/**
 * The commands that actually check a downloaded copy, in the order to run them, in the
 * folder the files were saved to — and exactly two of them, because `releases.verifyBody`
 * says "two commands" in eighteen languages and a page that prints three contradicts itself.
 * One `curl` takes both files; `-L` and `-O` apply to every URL on the line.
 *
 * A release manifest is preferred because it names every artifact in the release and is
 * written by the same step that packaged them; a single-asset sidecar can come from a
 * different build of the same version. Both forms list relative filenames only, so
 * neither can encode — or require — an absolute path.
 */
export function verifyCommands(release: ReleaseInfo): string[] {
  if (release.sumsUrl !== null) {
    return [
      `curl -LO ${release.dmgUrl} -LO ${release.sumsUrl}`,
      `shasum -a 256 -c --ignore-missing ${SUMS_ASSET}`,
    ];
  }
  if (release.sidecarUrl !== null) {
    return [
      `curl -LO ${release.dmgUrl} -LO ${release.sidecarUrl}`,
      `shasum -a 256 -c ${SIDECAR_ASSET}`,
    ];
  }
  return [`curl -LO ${release.dmgUrl}`];
}

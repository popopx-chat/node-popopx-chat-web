/**
 * Latest-release lookup for the download block.
 *
 * This module issues the one and only outbound request the site makes: a client-side
 * GET of the GitHub Releases API, no credentials and no cookies. Everything else —
 * the pinned version, its digest and its size — is compiled into the bundle so the
 * page still offers a verified download when api.github.com is unreachable, and so a
 * third-party tracker has nothing to observe.
 *
 * Verified against the live API on 2026-11-21: tag v1.0.1, asset
 * POPOPX-Mac-Node-Universal.dmg (3178178 bytes), sidecar 96 bytes holding
 * "<64 hex><2 spaces><relative filename><LF>".
 *
 * The digest of a *newer* release is deliberately not fetched: that would be a second
 * external request, and the sidecar published beside the asset is the better source
 * anyway. `knownSha256` is therefore non-null only for the pinned fallback, and the UI
 * hands the user the three commands that check it locally.
 */

export const RELEASE_REPO = "popopx-chat/popopx-mac-node";

export const DMG_ASSET = "POPOPX-Mac-Node-Universal.dmg";
export const SIDECAR_ASSET = `${DMG_ASSET}.sha256`;

export const LATEST_API_URL = `https://api.github.com/repos/${RELEASE_REPO}/releases/latest`;
export const RELEASES_PAGE_URL = `https://github.com/${RELEASE_REPO}/releases`;

const FALLBACK_TAG = "v1.0.1";
const FALLBACK_SHA256 = "135a587cdf3eabc6554e3f753df3da6bcb839d25a60c5e676cc8b4669e83dc3d";
const FALLBACK_SIZE_BYTES = 3178178;

export interface ReleaseInfo {
  tag: string;
  dmgUrl: string;
  sidecarUrl: string;
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
  return {
    tag: FALLBACK_TAG,
    dmgUrl: downloadUrl(FALLBACK_TAG, DMG_ASSET),
    sidecarUrl: downloadUrl(FALLBACK_TAG, SIDECAR_ASSET),
    tagPageUrl: `https://github.com/${RELEASE_REPO}/releases/tag/${FALLBACK_TAG}`,
    sizeBytes: FALLBACK_SIZE_BYTES,
    publishedAt: null,
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
  let dmgUrl: string | null = null;
  let sidecarUrl: string | null = null;
  let sizeBytes: number | null = null;

  for (const entry of assets) {
    if (!isRecord(entry)) continue;
    const name = nonEmptyString(entry.name);
    if (name === DMG_ASSET) {
      dmgUrl = releaseDownloadUrl(entry.browser_download_url, tag, DMG_ASSET);
      const size = entry.size;
      sizeBytes = typeof size === "number" && Number.isFinite(size) && size > 0 ? size : null;
    } else if (name === SIDECAR_ASSET) {
      sidecarUrl = releaseDownloadUrl(entry.browser_download_url, tag, SIDECAR_ASSET);
    }
  }

  if (dmgUrl === null || sidecarUrl === null) return null;

  return {
    tag,
    dmgUrl,
    sidecarUrl,
    tagPageUrl: `https://github.com/${RELEASE_REPO}/releases/tag/${tag}`,
    sizeBytes,
    publishedAt: nonEmptyString(payload.published_at),
    knownSha256: tag === FALLBACK_TAG ? FALLBACK_SHA256 : null,
  };
}

/**
 * Resolves the newest published build, falling back to the pinned one on any failure:
 * offline, blocked, rate-limited, non-2xx, or a response that lacks the two assets.
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

/**
 * The verification sequence from the node README, run in the folder the files were
 * saved to. The sidecar holds only a relative filename, so it cannot encode — or
 * require — an absolute path.
 */
export function verifyCommands(release: ReleaseInfo): string[] {
  return [
    `curl -LO ${release.dmgUrl}`,
    `curl -LO ${release.sidecarUrl}`,
    `shasum -a 256 -c ${SIDECAR_ASSET}`,
  ];
}

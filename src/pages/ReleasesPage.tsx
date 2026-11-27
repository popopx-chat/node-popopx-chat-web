import { useEffect, useRef, useState } from "react";
import { ArrowDown, Check, Copy, ExternalLink, CircleCheck, CircleDashed } from "lucide-react";
import { GlassPanel } from "../components/GlassPanel";
import { SectionHeading, SubHeading } from "../components/SectionHeading";
import { useI18n } from "../i18n/translations";
import {
  PINNED_DIGESTS,
  RELEASES_PAGE_URL,
  RELEASE_REPO,
  SIDECAR_ASSET,
  SUMS_ASSET,
  formatSize,
  lookupRelease,
  verifyCommands,
} from "../data/release";
import type { ReleaseLookup } from "../data/release";

const SOURCE_URL = `https://github.com/${RELEASE_REPO}`;

/**
 * The `/releases` route: the published artifacts, the commands that check them, and the
 * licence.
 *
 * The asset table is rendered from the live release when the API answers and from the
 * pinned fallback when it does not, so the page can only ever list a file that is actually
 * uploaded. Nothing here is a promise about a build that does not exist yet: the four
 * roadmap cards are the repository's own plans, under a heading that says they are not
 * running.
 */
export function ReleasesPage() {
  const { dict, locale } = useI18n();
  const releases = dict.releases;
  const [lookup, setLookup] = useState<ReleaseLookup | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    lookupRelease(controller.signal).then((result) => {
      if (!controller.signal.aborted) setLookup(result);
    });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  const onCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      return;
    }
    setCopied(text);
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(null), 2400);
  };

  if (lookup === null) {
    return (
      <section className="border-b border-edge px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p
            className="glass-quiet flex items-center gap-3 rounded-panel px-5 py-6 text-sm text-ink-dim"
            role="status"
            aria-live="polite"
          >
            <span className="node-pulse inline-block h-2 w-2 rounded-full bg-brand-lift" />
            {dict.hero.statusFetching}
          </p>
        </div>
      </section>
    );
  }

  const { release, source, note } = lookup;
  const commands = verifyCommands(release);

  return (
    <>
      <section
        id="releases"
        aria-labelledby="releases-title"
        className="border-b border-edge px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            titleId="releases-title"
            index={`01 / ${dict.routes["/releases"].eyebrow}`}
            title={releases.heading}
            sub={releases.sub}
          />

          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] text-ink-mute">
                {dict.hero.releaseLabel}
              </p>
              <p className="mt-1.5 text-[26px] font-semibold leading-none tracking-tight text-ink" dir="ltr">
                {release.tag}
              </p>
              {release.name === null ? null : (
                <p className="mt-1.5 text-pretty text-[13px] text-ink-mute" dir="ltr">{release.name}</p>
              )}
            </div>
            <a
              href={release.dmgUrl}
              className="edge-brand inline-flex items-center gap-2 rounded-pill bg-brand/25 px-5 py-3 text-[15px] font-semibold text-ink shadow-brand transition-transform duration-200 hover:bg-brand/38"
            >
              <ArrowDown size={17} aria-hidden="true" />
              {dict.hero.ctaDownload}
            </a>
          </div>

          <p
            className="mt-4 flex flex-wrap items-center gap-2 text-[13px] text-ink-mute"
            role="status"
            aria-live="polite"
          >
            <span
              className={`inline-block h-1.5 w-1.5 rounded-full ${
                source === "live" ? "bg-brand-lift" : "bg-ink-mute"
              }`}
            />
            {source === "live" ? dict.hero.statusLive : dict.hero.statusFallback}
            {note === null ? null : <span className="font-mono text-[11px]" dir="ltr">({note})</span>}
          </p>

          <h3 className="mt-12 text-[16.5px] font-semibold text-ink">{releases.assetsHeading}</h3>
          <GlassPanel className="scroll-shadow mt-4 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-start">
              <caption className="sr-only">{releases.assetsHeading}</caption>
              <thead>
                <tr className="border-b border-edge-strong">
                  {releases.assetsColumns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-4 py-3.5 font-mono text-[11px] font-medium tracking-[0.1em] text-ink-mute"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {release.assets.map((asset) => {
                  const size = formatSize(asset.sizeBytes, locale);
                  const digest = PINNED_DIGESTS[asset.name];
                  return (
                    <tr
                      key={asset.name}
                      className="border-b border-edge align-top last:border-b-0 transition-colors duration-200 hover:bg-raise/60"
                    >
                      <th scope="row" className="px-4 py-4 text-start">
                        <a
                          href={asset.url}
                          className="wrap-anywhere font-mono text-[12.5px] text-ink underline decoration-edge-strong underline-offset-4 hover:decoration-brand-lift"
                          dir="ltr"
                        >
                          {asset.name}
                        </a>
                        {digest === undefined ? null : (
                          <code className="scroll-shadow mt-1.5 block max-w-full overflow-x-auto whitespace-nowrap font-mono text-[11px] text-brand-haze">
                            {digest.slice(0, 16)}…
                          </code>
                        )}
                      </th>
                      <td className="px-4 py-4 text-pretty text-[13px] leading-relaxed text-ink-dim">
                        {releases.assetKinds[asset.kind]}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 font-mono text-[12.5px] text-ink-mute">
                        <span dir="ltr">{size ?? "—"}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </GlassPanel>
          <p className="mt-4 max-w-3xl text-pretty text-[13px] leading-relaxed text-ink-mute">
            {releases.missingAsset}
          </p>
        </div>
      </section>

      <section
        id="verify"
        aria-labelledby="verify-title"
        className="border-b border-edge px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <SubHeading
            titleId="verify-title"
            label="02"
            title={releases.verifyHeading}
            sub={releases.verifyBody}
          />

          <GlassPanel className="mt-6 p-6 sm:p-7">
            <ol className="flex list-none flex-col gap-1.5">
              {commands.map((command) => (
                <li key={command} className="flex items-stretch gap-2">
                  <code className="scroll-shadow min-w-0 flex-1 overflow-x-auto whitespace-nowrap rounded-[10px] bg-void/60 px-3 py-2 font-mono text-[12px] text-ink-dim">
                    {command}
                  </code>
                  <button
                    type="button"
                    onClick={() => void onCopy(command)}
                    aria-label={dict.install.copyCommand}
                    className="glass-quiet inline-flex w-11 shrink-0 items-center justify-center rounded-[10px] text-ink-mute transition-colors duration-200 hover:text-ink"
                  >
                    {copied === command ? (
                      <Check size={14} aria-hidden="true" />
                    ) : (
                      <Copy size={14} aria-hidden="true" />
                    )}
                  </button>
                </li>
              ))}
            </ol>
          </GlassPanel>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <GlassPanel quiet className="min-w-0 p-6">
              <h4 className="font-mono text-[12.5px] text-brand-haze" dir="ltr">
                {release.sumsUrl === null ? "—" : SUMS_ASSET}
              </h4>
              <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                {releases.verifySumsBody}
              </p>
            </GlassPanel>
            <GlassPanel quiet className="min-w-0 p-6">
              <h4 className="font-mono text-[12.5px] text-brand-haze" dir="ltr">
                {release.sidecarUrl === null ? "—" : SIDECAR_ASSET}
              </h4>
              <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                {releases.verifySidecarBody}
              </p>
            </GlassPanel>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <GlassPanel className="min-w-0 p-6">
              <h4 className="text-[15.5px] font-semibold text-ink">{releases.pipelineHeading}</h4>
              <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                {releases.pipelineBody}
              </p>
            </GlassPanel>
            <GlassPanel className="min-w-0 p-6">
              <h4 className="text-[15.5px] font-semibold text-ink">{releases.supportedHeading}</h4>
              <ul className="mt-3 space-y-2.5">
                {releases.supportedItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-ink-dim">
                    <CircleCheck
                      size={15}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-brand-lift"
                    />
                    <span className="text-pretty leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassPanel>
          </div>
        </div>
      </section>

      <section
        id="roadmap"
        aria-labelledby="roadmap-title"
        className="border-b border-edge px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <SubHeading
            titleId="roadmap-title"
            label="03"
            title={releases.roadmapHeading}
            sub={releases.roadmapSub}
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {releases.roadmap.map((item) => (
              <GlassPanel quiet key={item.title} className="min-w-0 p-6">
                <div className="flex items-start gap-2.5">
                  <CircleDashed
                    size={15}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-ink-mute"
                  />
                  <h4 className="text-[15px] font-semibold leading-snug text-ink">{item.title}</h4>
                </div>
                <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                  {item.body}
                </p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section
        id="source"
        aria-labelledby="source-title"
        className="border-b border-edge px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <SubHeading titleId="source-title" label="04" title={releases.sourceHeading} />
          <p className="mt-4 max-w-3xl text-pretty text-[14px] leading-relaxed text-ink-dim">
            {releases.sourceBody}
          </p>
          <a
            href={SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-quiet mt-6 inline-flex items-center gap-2 rounded-pill px-5 py-3 text-[14px] text-ink-dim transition-colors duration-200 hover:text-ink"
          >
            <ExternalLink size={16} aria-hidden="true" />
            <span className="font-mono text-[12.5px]" dir="ltr">{SOURCE_URL}</span>
          </a>

          <GlassPanel quiet className="mt-10 max-w-3xl p-6 sm:p-7">
            <h4 className="text-[15.5px] font-semibold text-ink">{releases.licenceHeading}</h4>
            <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
              {releases.licenceBody}
            </p>
          </GlassPanel>

          <a
            href={RELEASES_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-[13px] text-ink-dim underline decoration-edge-strong underline-offset-4 hover:text-ink"
            dir="ltr"
          >
            {RELEASES_PAGE_URL}
          </a>
        </div>
      </section>
    </>
  );
}

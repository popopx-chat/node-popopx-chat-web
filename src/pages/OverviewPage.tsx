import { ArrowRight, HardDrive, Network } from "lucide-react";
import { ArchitectureBentoSection } from "../components/ArchitectureBentoSection";
import { GlassPanel } from "../components/GlassPanel";
import { HeroSection } from "../components/HeroSection";
import { NodeConsolePreviewSection } from "../components/NodeConsolePreviewSection";
import { SectionHeading } from "../components/SectionHeading";
import { useI18n } from "../i18n/translations";
import { RouteLink } from "../router";
import type { RoutePath } from "../router";

/**
 * The overview route, and the entry point for a reader who arrived at `/badge` and got
 * this page instead. The four cards below are the portal's other routes in the order a
 * reader actually needs them, which is why they are links rather than decoration: the
 * dictionary keeps one title/body pair per card, and this table is the only place that
 * decides where each card points.
 */
const PATH_DESTINATIONS: readonly RoutePath[] = [
  "/node",
  "/install",
  "/security",
  "/troubleshooting",
];

export function OverviewPage() {
  const { dict } = useI18n();
  const overview = dict.overview;

  return (
    <>
      <HeroSection />

      <section
        id="overview"
        aria-labelledby="overview-title"
        className="border-b border-edge px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            titleId="overview-title"
            index={`01 / ${dict.routes["/"].eyebrow}`}
            title={overview.splitHeading}
            sub={overview.splitSub}
          />

          <div className="mt-2 grid gap-4 lg:grid-cols-2">
            <Half
              Glyph={Network}
              title={overview.cloudTitle}
              body={overview.cloudBody}
              meta="SMP · XFTP · popopxmq"
            />
            <Half
              Glyph={HardDrive}
              title={overview.macTitle}
              body={overview.macBody}
              meta="127.0.0.1 · Ollama · MLX"
            />
          </div>

          <h3 className="mt-16 text-[19px] font-semibold tracking-tight text-ink">
            {overview.pathsHeading}
          </h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {overview.paths.map((path, i) => {
              const to = PATH_DESTINATIONS[i];
              return (
                <li key={path.title}>
                  <RouteLink
                    to={to}
                    className="glass flex h-full min-w-0 flex-col gap-3 rounded-panel p-6 transition-colors duration-300 hover:edge-brand"
                  >
                    <span className="font-mono text-[11px] tracking-[0.18em] text-brand-haze">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[16.5px] font-semibold leading-snug text-ink">
                      {path.title}
                    </span>
                    <span className="text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                      {path.body}
                    </span>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[13px] text-ink-mute">
                      <span className="truncate font-mono text-[11.5px]" dir="ltr">{to}</span>
                      <ArrowRight size={14} aria-hidden="true" className="shrink-0 rtl:-scale-x-100" />
                    </span>
                  </RouteLink>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <ArchitectureBentoSection />

      <NodeConsolePreviewSection />
    </>
  );
}

/**
 * The two halves of the split, drawn as equals because the page claims both are real:
 * the network side is a courier, the machine side is the worker.
 */
function Half({
  Glyph,
  title,
  body,
  meta,
}: {
  Glyph: typeof HardDrive;
  title: string;
  body: string;
  meta: string;
}) {
  return (
    <GlassPanel className="flex min-w-0 flex-col gap-4 p-6 sm:p-7">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-edge bg-raise text-brand-lift"
        >
          <Glyph size={18} />
        </span>
        <h4 className="text-[17px] font-semibold leading-snug text-ink">{title}</h4>
      </div>
      <p className="text-pretty text-[14px] leading-relaxed text-ink-dim">{body}</p>
      <p className="mt-auto border-t border-edge pt-4 font-mono text-[11px] text-ink-mute" dir="ltr">
        {meta}
      </p>
    </GlassPanel>
  );
}

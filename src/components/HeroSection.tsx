import { ArrowDown, ArrowRight } from "lucide-react";
import { useI18n } from "../i18n/translations";
import { RELEASE_REPO } from "../data/release";
import { DownloadPanel } from "./DownloadPanel";
import { Logo } from "./Logo";

const SOURCE_URL = `https://github.com/${RELEASE_REPO}`;

export function HeroSection() {
  const { dict } = useI18n();
  const stats = [dict.hero.statStorage, dict.hero.statIdentity, dict.hero.statSource];

  return (
    <section
      aria-label="POPOPX Mac Node"
      className="relative overflow-hidden border-b border-edge px-5 pb-20 pt-16 sm:px-8 sm:pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand/12 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
        <div className="min-w-0">
          <Logo size={64} alt="POPOPX" />

          <p className="glass-quiet mt-8 inline-flex items-center gap-2 rounded-pill px-3.5 py-1.5 font-mono text-[11px] tracking-[0.06em] text-brand-haze" dir="ltr">
            {dict.hero.badge}
          </p>

          <h1 className="mt-6 text-balance text-[40px] font-semibold leading-[1.06] tracking-[-0.02em] sm:text-[54px]">
            <span className="block text-ink">{dict.hero.titleLead}</span>
            <span className="text-gradient block">{dict.hero.titleAccent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-[17px] leading-relaxed text-ink-dim">
            {dict.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#download"
              className="edge-brand inline-flex items-center gap-2 rounded-pill bg-brand/25 px-5 py-3 text-[15px] font-semibold text-ink shadow-brand transition-transform duration-200 hover:bg-brand/38"
            >
              <ArrowDown size={17} aria-hidden="true" />
              {dict.hero.ctaDownload}
            </a>
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-quiet inline-flex items-center gap-2 rounded-pill px-5 py-3 text-[15px] text-ink-dim transition-colors duration-200 hover:text-ink"
            >
              {dict.hero.ctaSource}
              <ArrowRight size={16} aria-hidden="true" className="rtl:-scale-x-100" />
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {stats.map((stat) => (
              <li key={stat} className="flex items-center gap-2.5 text-[13px] text-ink-dim">
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 rounded-full bg-brand-lift"
                />
                {stat}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex min-w-0 flex-col gap-6">
          <Topology />
          <DownloadPanel />
        </div>
      </div>
    </section>
  );
}

/**
 * The two ends of the chain and the queue between them: nothing in this diagram
 * represents a server we operate, so the middle of it is a line, not a box.
 */
function Topology() {
  const { dict } = useI18n();

  return (
    <div className="glass rounded-panel p-5">
      <div className="flex items-center justify-between gap-3">
        <End label={dict.hero.iosLabel} detail="POPOPX iOS" tone="ink" />
        <div className="link-line mx-1" aria-hidden="true" />
        <End label={dict.hero.nodeLabel} detail="POPOPX Mac Node" tone="brand" />
      </div>

      <p className="mt-4 text-center font-mono text-[11px] text-ink-mute" dir="ltr">
        SMP · XFTP · popopxmq
      </p>

      <div className="mt-4 flex items-center justify-center gap-2.5">
        <span
          aria-hidden="true"
          className="node-pulse inline-block h-2 w-2 rounded-full bg-brand-lift"
        />
        <span className="text-[12px] text-ink-mute">{dict.hero.localLabel}</span>
        <span
          aria-hidden="true"
          className="node-pulse node-pulse-offset inline-block h-2 w-2 rounded-full bg-brand-lift"
        />
      </div>
    </div>
  );
}

function End({
  label,
  detail,
  tone,
}: {
  label: string;
  detail: string;
  tone: "ink" | "brand";
}) {
  return (
    <div className="flex min-w-0 flex-col items-center gap-1.5 text-center">
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-[14px] border ${
          tone === "brand" ? "edge-brand bg-brand/18" : "border-edge bg-raise"
        }`}
        aria-hidden="true"
      >
        <Logo size={26} glow={false} className="rounded-[10px]" />
      </span>
      <span className="text-[13px] font-medium leading-tight text-ink">{label}</span>
      <span className="font-mono text-[10px] leading-tight text-ink-mute" dir="ltr">{detail}</span>
    </div>
  );
}

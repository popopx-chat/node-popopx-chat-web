import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  Clapperboard,
  EyeOff,
  HeartPulse,
  Hourglass,
  Lock,
  Network,
  Sunrise,
  Tv,
  Waves,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useI18n } from "../i18n/translations";
import {
  ENGINES,
  SECTIONS,
  engineName,
  enginesInSection,
} from "../data/enginesCatalog";
import type { EngineDefinition, EngineId, SectionId } from "../data/enginesCatalog";
import {
  engineHighlights,
  engineMenuLabel,
  engineTagline,
  priceLabelFor,
  sectionFilter,
  sectionTitle,
} from "../data/engineLocalization";
import { GlassPanel } from "./GlassPanel";
import { SectionHeading } from "./SectionHeading";

const ICONS: Record<string, LucideIcon> = {
  BrainCircuit,
  Waves,
  EyeOff,
  Clapperboard,
  Tv,
  Network,
  Sunrise,
  Lock,
  Hourglass,
  HeartPulse,
};

const NODE_CMD_PREFIX = "::popopx_sys::NODE_CMD::";

type Filter = SectionId | "all";

export function DiscoverEnginesSection() {
  const { dict, locale } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");
  const [openId, setOpenId] = useState<EngineId | null>(null);

  const shelves = filter === "all" ? SECTIONS : [filter];

  return (
    <section
      id="engines"
      aria-labelledby="engines-title"
      className="border-b border-edge px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          titleId="engines-title"
          index={`01 / ${dict.routes["/features"].eyebrow}`}
          title={dict.engines.heading}
          sub={dict.engines.sub}
        />

        <div
          role="group"
          aria-label={dict.engines.heading}
          className="mb-10 flex flex-wrap items-center gap-2"
        >
          <FilterChip
            label={dict.engines.filterAll}
            count={ENGINES.length}
            active={filter === "all"}
            unit={dict.engines.shelfCount}
            onSelect={() => setFilter("all")}
          />
          {SECTIONS.map((section) => (
            <FilterChip
              key={section}
              label={sectionFilter(section, locale)}
              count={enginesInSection(section).length}
              active={filter === section}
              unit={dict.engines.shelfCount}
              onSelect={() => setFilter(section)}
            />
          ))}
        </div>

        {shelves.map((section) => (
          <div key={section} className={filter === "all" ? "mb-12" : "mb-12 last:mb-0"}>
            <div className="mb-4 flex items-baseline gap-3">
              <h3 className="text-[17px] font-semibold text-ink">
                {sectionTitle(section, locale)}
              </h3>
              <span className="font-mono text-[11px] text-ink-mute">
                {enginesInSection(section).length} {dict.engines.shelfCount}
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {enginesInSection(section).map((engine) => (
                <EngineCard key={engine.id} engine={engine} onOpen={() => setOpenId(engine.id)} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {openId === null ? null : (
        <EngineDialog engine={ENGINES.find((e) => e.id === openId) ?? ENGINES[0]} onClose={() => setOpenId(null)} />
      )}
    </section>
  );
}

function FilterChip({
  label,
  count,
  unit,
  active,
  onSelect,
}: {
  label: string;
  count: number;
  unit: string;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-pill px-4 py-2 text-[13.5px] transition-colors duration-200 ${
        active
          ? "edge-brand bg-brand/25 text-ink"
          : "glass-quiet text-ink-dim hover:text-ink"
      }`}
    >
      {label}
      <span className="font-mono text-[11px] text-ink-mute" aria-label={`${count} ${unit}`}>
        {count}
      </span>
    </button>
  );
}

function EngineCard({ engine, onOpen }: { engine: EngineDefinition; onOpen: () => void }) {
  const { dict, locale } = useI18n();
  const Glyph = ICONS[engine.lucideIcon] ?? Lock;
  const name = engineName(engine, locale);

  return (
    <GlassPanel className="flex min-w-0 flex-col gap-4 p-6 transition-colors duration-300 hover:edge-brand">
      <div className="flex items-start gap-3.5">
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] border border-edge bg-raise text-brand-lift"
        >
          <Glyph size={19} />
        </span>
        <div className="min-w-0">
          <h4 className="text-[16.5px] font-semibold leading-tight text-ink">{name}</h4>
          <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-dim">
            {engineTagline(engine, locale)}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="glass-quiet rounded-pill px-3 py-1 font-mono text-[11.5px] text-brand-haze">
          {priceLabelFor(engine, locale)}
        </span>
        {engine.deterministic ? (
          <Badge text={dict.engines.deterministicBadge} />
        ) : (
          <Badge text={dict.engines.modelBadge} />
        )}
        {engine.worksWithoutLocalModels ? <Badge text={dict.engines.offlineBadge} /> : null}
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-edge pt-4">
        <span className="min-w-0 truncate font-mono text-[11px] text-ink-mute">
          {dict.engines.substrateLabel}: <span dir="ltr">{engine.substrate}</span>
        </span>
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-pill px-3 py-1.5 text-[13px] text-ink-dim transition-colors duration-200 hover:bg-raise hover:text-ink"
        >
          {dict.engines.openDetails}
          <ArrowRight size={14} aria-hidden="true" className="rtl:-scale-x-100" />
        </button>
      </div>
    </GlassPanel>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-pill border border-edge px-3 py-1 text-[11.5px] text-ink-mute">
      <Check size={11} aria-hidden="true" />
      {text}
    </span>
  );
}

function EngineDialog({ engine, onClose }: { engine: EngineDefinition; onClose: () => void }) {
  const { dict, locale } = useI18n();
  const name = engineName(engine, locale);
  const Glyph = ICONS[engine.lucideIcon] ?? Lock;
  const panel = useRef<HTMLDivElement>(null);

  // Separate from the effect below on purpose: `onClose` is a new closure on every
  // parent render, so an effect that depends on it re-runs; focus must move only on mount.
  useEffect(() => {
    const opener = document.activeElement;
    panel.current?.focus();
    return () => {
      if (opener instanceof HTMLElement) opener.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="engine-dialog-title"
      className="fixed inset-0 z-50 flex items-end justify-center bg-abyss/80 px-4 py-6 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        ref={panel}
        tabIndex={-1}
        className="glass scroll-shadow max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-panel p-6 sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-3.5">
            <span
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] border border-edge-brand bg-brand/18 text-brand-lift"
            >
              <Glyph size={19} />
            </span>
            <div className="min-w-0">
              <h3 id="engine-dialog-title" className="text-[20px] font-semibold leading-tight text-ink">
                {name}
              </h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-dim">
                {engineTagline(engine, locale)}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={dict.engines.closeDetails}
            className="glass-quiet shrink-0 rounded-pill p-2 text-ink-dim transition-colors duration-200 hover:text-ink"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>

        <dl className="mt-7 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="font-mono text-[11px] tracking-[0.14em] text-ink-mute">
              {dict.engines.substrateLabel}
            </dt>
            <dd className="mt-1.5 text-[14px] text-ink" dir="ltr">{engine.substrate}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] tracking-[0.14em] text-ink-mute">
              {dict.engines.creditsUnit}
            </dt>
            <dd className="mt-1.5 text-[14px] text-ink">{priceLabelFor(engine, locale)}</dd>
          </div>
        </dl>

        <ul className="mt-6 space-y-2">
          {engineHighlights(engine, locale).map((highlight) => (
            <li key={highlight} className="flex items-start gap-2.5 text-[14px] text-ink-dim">
              <span
                aria-hidden="true"
                className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-lift"
              />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-7 border-t border-edge pt-6">
          <h4 className="text-[14px] font-semibold text-ink">{dict.engines.quickMenuLabel}</h4>
          <p className="mt-1.5 text-[13px] leading-relaxed text-ink-mute">
            {dict.engines.quickMenuHint}
          </p>
          <ul className="mt-4 space-y-2.5">
            {engine.menu.map((item) => (
              <li
                key={item.action}
                className="glass-quiet flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-[14px] px-4 py-3"
              >
                <span className="text-[14px] text-ink">{engineMenuLabel(item, locale)}</span>
                <code className="scroll-shadow min-w-0 max-w-full overflow-x-auto whitespace-nowrap font-mono text-[11.5px] text-brand-haze">
                  {`${NODE_CMD_PREFIX}${engine.id}::${item.action}::{}`}
                </code>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

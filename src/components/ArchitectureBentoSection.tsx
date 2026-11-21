import { HardDrive, Scale, UserX } from "lucide-react";
import { useI18n } from "../i18n/translations";
import { GlassPanel } from "./GlassPanel";
import { SectionHeading } from "./SectionHeading";

const GLYPHS = [HardDrive, UserX, Scale];

export function ArchitectureBentoSection() {
  const { dict } = useI18n();

  return (
    <section
      id="architecture"
      aria-labelledby="architecture-title"
      className="border-b border-edge px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          titleId="architecture-title"
          index="01 / ARCHITECTURE"
          title={dict.architecture.heading}
          sub={dict.architecture.sub}
        />

        <div className="mt-2 grid gap-4 lg:grid-cols-6">
          {dict.architecture.items.map((item, i) => {
            const Glyph = GLYPHS[i];
            const span = i === 0 ? "lg:col-span-4" : i === 1 ? "lg:col-span-2" : "lg:col-span-6";
            return (
              <GlassPanel
                key={item.title}
                className={`flex flex-col gap-4 p-6 transition-colors duration-300 hover:edge-brand sm:p-7 ${span}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-edge bg-raise text-brand-lift"
                  >
                    <Glyph size={18} />
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.18em] text-ink-mute">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-[19px] font-semibold leading-snug text-ink">{item.title}</h3>
                <p className="max-w-3xl text-pretty text-[14.5px] leading-relaxed text-ink-dim">
                  {item.body}
                </p>
              </GlassPanel>
            );
          })}
        </div>
      </div>
    </section>
  );
}

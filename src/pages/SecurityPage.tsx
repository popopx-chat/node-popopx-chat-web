import { CircleCheck, FileLock2, KeyRound, TriangleAlert } from "lucide-react";
import { GlassPanel } from "../components/GlassPanel";
import { SectionHeading, SubHeading } from "../components/SectionHeading";
import { useI18n } from "../i18n/translations";
import { DATA_LOCATIONS, DATA_ROOT } from "../data/nodeRuntime";

const TONE_DOT: Record<string, string> = {
  artifact: "bg-brand-lift",
  secret: "bg-brand-haze",
  log: "bg-ink-mute",
  workspace: "bg-edge-strong",
};

/**
 * The `/security` route. It is deliberately not a list of assurances: the copy states what
 * leaves the machine, where the secrets physically sit, and what the off switch does not
 * cover, because "your data never leaves the device" is only true with those caveats
 * attached. Every path on this page is a relative one under `DATA_ROOT`, which is also what
 * the release workflow refuses to publish a checksum file containing an absolute path.
 */
export function SecurityPage() {
  const { dict } = useI18n();
  const security = dict.security;

  return (
    <>
      <section
        id="privacy"
        aria-labelledby="security-title"
        className="border-b border-edge px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            titleId="security-title"
            index={`01 / ${dict.routes["/security"].eyebrow}`}
            title={security.heading}
            sub={security.sub}
          />

          <div className="mt-12">
            <SubHeading
              titleId="local-title"
              label="02"
              title={security.localHeading}
              sub={security.localSub}
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {security.localItems.map((item) => (
                <GlassPanel key={item.title} className="min-w-0 p-6">
                  <div className="flex items-start gap-3">
                    <CircleCheck size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-lift" />
                    <h4 className="text-[15.5px] font-semibold leading-snug text-ink">{item.title}</h4>
                  </div>
                  <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                    {item.body}
                  </p>
                </GlassPanel>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h4 className="text-[13px] text-ink-mute">{security.rootLabel}</h4>
            <code className="scroll-shadow mt-2 block max-w-full overflow-x-auto rounded-[14px] border border-edge bg-void/60 px-4 py-3.5 font-mono text-[12.5px] text-brand-haze">
              {DATA_ROOT}
            </code>
            <ul className="mt-3 grid gap-2">
              {DATA_LOCATIONS.map((location) => (
                <li
                  key={location.path}
                  className="glass-quiet flex flex-wrap items-baseline gap-x-4 gap-y-1 rounded-[14px] px-4 py-3"
                >
                  <span className="flex items-center gap-2 font-mono text-[12.5px] text-ink">
                    <span
                      aria-hidden="true"
                      className={`inline-block h-1.5 w-1.5 rounded-full ${TONE_DOT[location.tone] ?? "bg-ink-mute"}`}
                    />
                    <span dir="ltr">{location.path}</span>
                  </span>
                  <span className="min-w-0 flex-1 text-pretty text-[13px] leading-relaxed text-ink-dim">
                    {security.dataNote[location.note]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="transit"
        aria-labelledby="transit-title"
        className="border-b border-edge px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <SubHeading
            titleId="transit-title"
            label="03"
            title={security.transitHeading}
            sub={security.transitSub}
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {security.transitItems.map((item) => (
              <GlassPanel key={item.title} className="min-w-0 p-6">
                <h4 className="text-[15.5px] font-semibold leading-snug text-ink">{item.title}</h4>
                <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                  {item.body}
                </p>
              </GlassPanel>
            ))}
          </div>

          <GlassPanel quiet className="mt-4 min-w-0 p-6 sm:p-7">
            <div className="flex items-start gap-3">
              <KeyRound size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-lift" />
              <div className="min-w-0">
                <h4 className="text-[15.5px] font-semibold text-ink">{security.keysHeading}</h4>
                <p className="mt-3 break-words text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                  {security.keysBody}
                </p>
              </div>
            </div>
          </GlassPanel>
        </div>
      </section>

      <section
        id="edge-hub-boundary"
        aria-labelledby="hub-title"
        className="border-b border-edge px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <SubHeading
            titleId="hub-title"
            label="04"
            title={security.hubHeading}
            sub={security.hubSub}
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {security.hubItems.map((item) => (
              <GlassPanel key={item.title} className="min-w-0 p-6">
                <h4 className="text-[15.5px] font-semibold leading-snug text-ink">{item.title}</h4>
                <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                  {item.body}
                </p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section
        id="control"
        aria-labelledby="control-title"
        className="border-b border-edge px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <SubHeading
            titleId="control-title"
            label="05"
            title={security.controlHeading}
            sub={security.controlSub}
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {security.controls.map((control, i) => (
              <GlassPanel key={control.title} className="flex min-w-0 flex-col gap-3 p-6">
                <span className="font-mono text-[11px] tracking-[0.18em] text-brand-haze">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="text-[15px] font-semibold leading-snug text-ink">{control.title}</h4>
                <p className="text-pretty text-[13px] leading-relaxed text-ink-dim">{control.body}</p>
              </GlassPanel>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <GlassPanel quiet className="min-w-0 p-6">
              <div className="flex items-center gap-2.5">
                <FileLock2 size={16} aria-hidden="true" className="text-brand-lift" />
                <h4 className="text-[15.5px] font-semibold text-ink">{security.revokeHeading}</h4>
              </div>
              <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                {security.revokeBody}
              </p>
            </GlassPanel>
            <GlassPanel quiet className="edge-brand min-w-0 p-6">
              <div className="flex items-center gap-2.5">
                <TriangleAlert size={16} aria-hidden="true" className="text-brand-haze" />
                <h4 className="text-[15.5px] font-semibold text-ink">{security.limitsHeading}</h4>
              </div>
              <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                {security.limitsBody}
              </p>
            </GlassPanel>
          </div>
        </div>
      </section>
    </>
  );
}

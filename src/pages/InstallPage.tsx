import { useRef, useState } from "react";
import { Check, CircleAlert, Copy, Fingerprint, ShieldCheck, Terminal } from "lucide-react";
import { GlassPanel } from "../components/GlassPanel";
import { SectionHeading } from "../components/SectionHeading";
import { useI18n } from "../i18n/translations";
import { PREREQUISITES, WIRE } from "../data/nodeRuntime";
import {
  DMG_ASSET,
  fallbackRelease,
  SIDECAR_ASSET,
  SUMS_ASSET,
  verifyCommands,
} from "../data/release";
import { SIGNATURE_COMMANDS, SIGNATURE_EVIDENCE } from "../data/signing";
import { RouteLink } from "../router";

/**
 * The digest commands on this page are the pinned release's, so the page renders them without
 * waiting on the release feed; `/releases` prints the same pair for whatever it resolved.
 */
const PINNED_RELEASE = fallbackRelease();
const DIGEST_COMMANDS = verifyCommands(PINNED_RELEASE);

const BUILD_COMMANDS = [
  "swift build",
  "swift test",
  "swift build -c release",
  "bash Scripts/build_dmg.sh --output dist --version v1.0.2 --build 4",
];

const BRIDGE_COMMANDS = [
  `${WIRE.commandPrefix}shadow_cos::briefing::{}`,
  "PPX_BRIDGE_SECRET=<at least 16 characters>",
];

/**
 * The `/install` route, in the order the node's own wizard works: what has to be on the
 * machine, the five steps, the source build, then what happens after the first run.
 *
 * The prerequisite table is data-driven from `PREREQUISITES` because that list is read
 * out of the installer's own probes, and the note that explains each row is chosen by the
 * row rather than by this file — so adding a tool means one entry in the data and one key
 * in every catalog, not a hunt through JSX.
 */
export function InstallPage() {
  const { dict } = useI18n();
  const install = dict.install;
  const [copied, setCopied] = useState<string | null>(null);
  const timer = useRef<number | null>(null);

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

  return (
    <>
      <section
        id="install"
        aria-labelledby="install-title"
        className="border-b border-edge px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            titleId="install-title"
            index={`01 / ${dict.routes["/install"].eyebrow}`}
            title={install.heading}
            sub={install.sub}
          />

          <div className="mt-2 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
            <GlassPanel className="min-w-0 p-6 sm:p-7">
              <h3 className="text-[16.5px] font-semibold text-ink">{install.prereqsHeading}</h3>
              <ul className="mt-5 divide-y divide-edge">
                {PREREQUISITES.map((prereq) => (
                  <li key={prereq.name} className="flex flex-col gap-1 py-3.5 first:pt-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <span className="font-mono text-[13px] text-ink" dir="ltr">{prereq.name}</span>
                      <span className="rounded-pill border border-edge px-2.5 py-0.5 text-[11.5px] text-ink-mute">
                        {install.prereqRequired[prereq.required]}
                      </span>
                    </div>
                    <p className="text-pretty text-[13px] leading-relaxed text-ink-dim">
                      {install.prereqNotes[prereq.note]}
                    </p>
                  </li>
                ))}
              </ul>
            </GlassPanel>

            <ol className="grid min-w-0 gap-4">
              {install.steps.map((step, i) => (
                <li key={step.title}>
                  <GlassPanel quiet className="h-full min-w-0 p-6">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[13px] text-brand-lift">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-[16px] font-semibold leading-snug text-ink">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                      {step.body}
                    </p>
                  </GlassPanel>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <GlassPanel className="min-w-0 p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <Terminal size={16} aria-hidden="true" className="text-brand-lift" />
                <h3 className="text-[15.5px] font-semibold text-ink">{install.buildHeading}</h3>
              </div>
              <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                {install.buildBody}
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {BUILD_COMMANDS.map((command) => (
                  <CommandRow
                    key={command}
                    command={command}
                    label={install.copyCommand}
                    copied={copied}
                    onCopy={onCopy}
                  />
                ))}
              </ul>
            </GlassPanel>

            <GlassPanel className="min-w-0 p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <CircleAlert size={16} aria-hidden="true" className="text-brand-haze" />
                <h3 className="text-[15.5px] font-semibold text-ink">{install.requirementTitle}</h3>
              </div>
              <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                {install.requirementBody}
              </p>
              <p className="mt-5 border-t border-edge pt-4 font-mono text-[11.5px] leading-relaxed text-ink-mute" dir="ltr">
                {DMG_ASSET}
                {"\n"}
                {SIDECAR_ASSET}
                {"\n"}
                {SUMS_ASSET}
              </p>
              <p className="mt-4 text-[13px]">
                <RouteLink
                  to="/releases"
                  className="inline-flex items-center gap-1.5 rounded-pill border border-edge px-4 py-2 text-ink-dim transition-colors duration-200 hover:edge-brand hover:text-ink"
                >
                  {dict.nav.releases}
                </RouteLink>
              </p>
            </GlassPanel>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <GlassPanel className="min-w-0 p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={16} aria-hidden="true" className="text-brand-lift" />
                <h3 className="text-[15.5px] font-semibold text-ink">{install.signHeading}</h3>
              </div>
              <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                {install.signBody}
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {SIGNATURE_COMMANDS.map((command) => (
                  <CommandRow
                    key={command}
                    command={command}
                    label={install.copyCommand}
                    copied={copied}
                    onCopy={onCopy}
                  />
                ))}
              </ul>
              <p className="mt-5 overflow-x-auto whitespace-pre border-t border-edge pt-4 font-mono text-[11.5px] leading-relaxed text-ink-mute" dir="ltr">
                {SIGNATURE_EVIDENCE.join("\n")}
              </p>
              <div className="mt-5 space-y-4 border-t border-edge pt-4">
                <div>
                  <h4 className="text-[13.5px] font-semibold text-ink">
                    {install.containerTitle}
                  </h4>
                  <p className="mt-1.5 text-pretty text-[13px] leading-relaxed text-ink-dim">
                    {install.containerBody}
                  </p>
                </div>
                <div>
                  <h4 className="text-[13.5px] font-semibold text-ink">
                    {install.provenanceTitle}
                  </h4>
                  <p className="mt-1.5 text-pretty text-[13px] leading-relaxed text-ink-dim">
                    {install.provenanceBody}
                  </p>
                </div>
              </div>
            </GlassPanel>

            <GlassPanel className="min-w-0 p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <Fingerprint size={16} aria-hidden="true" className="text-brand-haze" />
                <h3 className="text-[15.5px] font-semibold text-ink">{install.digestHeading}</h3>
              </div>
              <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                {install.digestBody}
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {DIGEST_COMMANDS.map((command) => (
                  <CommandRow
                    key={command}
                    command={command}
                    label={install.copyCommand}
                    copied={copied}
                    onCopy={onCopy}
                  />
                ))}
              </ul>
              <p className="mt-5 border-t border-edge pt-4 font-mono text-[11.5px] leading-relaxed text-ink-mute" dir="ltr">
                {PINNED_RELEASE.tag} · {DMG_ASSET} · {SUMS_ASSET}
              </p>
            </GlassPanel>
          </div>
        </div>
      </section>

      <section
        id="lifecycle"
        aria-labelledby="lifecycle-title"
        className="border-b border-edge px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading titleId="lifecycle-title" index="02" title={install.lifecycleHeading} />
          <div className="mt-2 grid gap-4 lg:grid-cols-3">
            {install.lifecycle.map((item) => (
              <GlassPanel key={item.title} className="min-w-0 p-6 sm:p-7">
                <h3 className="text-[16px] font-semibold leading-snug text-ink">{item.title}</h3>
                <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                  {item.body}
                </p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section
        id="bridge"
        aria-labelledby="bridge-title"
        className="border-b border-edge px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <GlassPanel className="min-w-0 p-6 sm:p-7">
            <div className="flex items-center gap-2.5">
              <Terminal size={16} aria-hidden="true" className="text-brand-lift" />
              <h3 id="bridge-title" className="text-[15.5px] font-semibold text-ink">
                {install.bridgeTitle}
              </h3>
            </div>
            <p className="mt-3 max-w-3xl text-pretty text-[13.5px] leading-relaxed text-ink-dim">
              {install.bridgeBody}
            </p>
            <ul className="mt-5 flex max-w-3xl flex-col gap-2">
              {BRIDGE_COMMANDS.map((command) => (
                <CommandRow
                  key={command}
                  command={command}
                  label={install.copyCommand}
                  copied={copied}
                  onCopy={onCopy}
                />
              ))}
            </ul>
          </GlassPanel>
        </div>
      </section>
    </>
  );
}

function CommandRow({
  command,
  label,
  copied,
  onCopy,
}: {
  command: string;
  label: string;
  copied: string | null;
  onCopy: (text: string) => void;
}) {
  return (
    <li className="flex items-stretch gap-2">
      <code className="scroll-shadow min-w-0 flex-1 overflow-x-auto whitespace-nowrap rounded-[10px] bg-void/60 px-3 py-2 font-mono text-[12px] text-ink-dim">
        {command}
      </code>
      <button
        type="button"
        onClick={() => onCopy(command)}
        aria-label={label}
        className="glass-quiet inline-flex w-11 shrink-0 items-center justify-center rounded-[10px] text-ink-mute transition-colors duration-200 hover:text-ink"
      >
        {copied === command ? (
          <Check size={14} aria-hidden="true" />
        ) : (
          <Copy size={14} aria-hidden="true" />
        )}
      </button>
    </li>
  );
}

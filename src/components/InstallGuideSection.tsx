import { useRef, useState } from "react";
import { Check, Copy, CircleAlert, Terminal } from "lucide-react";
import { useI18n } from "../i18n/translations";
import { DMG_ASSET, SIDECAR_ASSET } from "../data/release";
import { GlassPanel } from "./GlassPanel";
import { SectionHeading } from "./SectionHeading";

const VERIFY_COMMAND = `shasum -a 256 -c ${SIDECAR_ASSET}`;
const NODE_CMD_SAMPLE = "::popopx_sys::NODE_CMD::shadow_cos::briefing::{}";
const BRIDGE_SECRET = "PPX_BRIDGE_SECRET=<at least 16 characters>";

const COMMANDS = [VERIFY_COMMAND, NODE_CMD_SAMPLE, BRIDGE_SECRET];

async function copy(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function InstallGuideSection() {
  const { dict } = useI18n();
  const [copied, setCopied] = useState<string | null>(null);
  const timer = useRef<number | null>(null);

  const onCopy = async (text: string) => {
    if (!(await copy(text))) return;
    setCopied(text);
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(null), 2400);
  };

  return (
    <section
      id="install"
      aria-labelledby="install-title"
      className="border-b border-edge px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          titleId="install-title"
          index="04 / INSTALL"
          title={dict.install.heading}
          sub={dict.install.sub}
        />

        <ol className="grid gap-4 sm:grid-cols-2">
          {dict.install.steps.map((step, i) => (
            <li key={step.title}>
              <GlassPanel quiet className="h-full min-w-0 p-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[13px] text-brand-lift">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[16px] font-semibold leading-snug text-ink">{step.title}</h3>
                </div>
                <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                  {step.body}
                </p>
              </GlassPanel>
            </li>
          ))}
        </ol>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.35fr_1fr]">
          <GlassPanel className="min-w-0 p-6 sm:p-7">
            <div className="flex items-center gap-2.5">
              <Terminal size={16} aria-hidden="true" className="text-brand-lift" />
              <h3 className="text-[15.5px] font-semibold text-ink">{dict.install.bridgeTitle}</h3>
            </div>
            <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
              {dict.install.bridgeBody}
            </p>
            <ul className="mt-5 flex flex-col gap-2">
              {COMMANDS.map((command) => (
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
            </ul>
          </GlassPanel>

          <GlassPanel className="min-w-0 p-6 sm:p-7">
            <div className="flex items-center gap-2.5">
              <CircleAlert size={16} aria-hidden="true" className="text-brand-haze" />
              <h3 className="text-[15.5px] font-semibold text-ink">
                {dict.install.requirementTitle}
              </h3>
            </div>
            <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
              {dict.install.requirementBody}
            </p>
            <p className="mt-5 whitespace-pre-line wrap-anywhere border-t border-edge pt-4 font-mono text-[11.5px] leading-relaxed text-ink-mute">
              {DMG_ASSET}
              {"\n"}
              {SIDECAR_ASSET}
            </p>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}

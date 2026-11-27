import {
  CalendarClock,
  Globe2,
  Lock,
  Mail,
  ShieldAlert,
  SlidersHorizontal,
  UserCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useI18n } from "../i18n/translations";
import type { LocalizedText } from "../i18n/types";
import { GlassPanel } from "./GlassPanel";
import { SectionHeading, SubHeading } from "./SectionHeading";
import { RouteLink } from "../router";
import { ASSISTANT, GODSEYE } from "../data/extensions";

const ASSISTANT_GLYPHS = [UserCheck, CalendarClock, Mail, ShieldAlert];
const GODSEYE_GLYPHS = [Globe2, Lock, SlidersHorizontal];

const ASSISTANT_FACTS = [
  `${ASSISTANT.permissions.join(" · ")} · default ${ASSISTANT.defaultPermissions.join(" + ")}`,
  `${ASSISTANT.briefing} · ${ASSISTANT.patrolMinutes} min · ${ASSISTANT.ledger}`,
  `IMAPS ${ASSISTANT.imapPort} · SMTPS ${ASSISTANT.smtpPort} · Keychain`,
  `${ASSISTANT.offlineMinutes} min offline · ${ASSISTANT.receiptCharacters} chars · ${ASSISTANT.receiptSeconds} s`,
];

const GODSEYE_FACTS = [
  `${GODSEYE.packageName} ${GODSEYE.pinnedVersion} · ${GODSEYE.entryFile} / ${GODSEYE.mcpEntryFile} · Node ${GODSEYE.minimumNodeMajor}+`,
  `${GODSEYE.bindHost}:${GODSEYE.defaultPort} · no host override · source pull ${GODSEYE.allowSourcePull ? "on" : "off"}`,
  `MCPToolGate · ${GODSEYE.writeExamples.join(" / ")} → ${ASSISTANT.approvalState}`,
];

const BOUNDARY_FACTS = [
  `${ASSISTANT.approvalState} · ${ASSISTANT.receipt} · ${ASSISTANT.receiptSeconds} s · one use`,
  `${GODSEYE.bindHost} · no proxy · no cache`,
];

/**
 * The two build-4 extensions on `/features`. The prose lives in the dictionary; every
 * number and token in the code rows is derived in `src/data/extensions.ts` from the
 * node's own defaults, so a card cannot claim a lifetime or a port the executor does
 * not enforce.
 */
export function ExtensionsSection() {
  const { dict } = useI18n();
  const ext = dict.extensions;

  return (
    <section
      id="extensions"
      aria-labelledby="extensions-title"
      className="border-b border-edge px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          titleId="extensions-title"
          index={`06 / ${dict.routes["/features"].eyebrow}`}
          title={ext.heading}
          sub={ext.sub}
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <GlassPanel className="min-w-0 p-6 sm:p-7">
            <PanelHeader
              Glyph={UserCheck}
              title={ext.assistantTitle}
              body={ext.assistantSub}
              commit={ASSISTANT.commit}
            />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {ext.assistantFeatures.map((feature, i) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                  fact={ASSISTANT_FACTS[i]}
                  Glyph={ASSISTANT_GLYPHS[i]}
                />
              ))}
            </ul>
          </GlassPanel>

          <GlassPanel className="min-w-0 p-6 sm:p-7">
            <PanelHeader
              Glyph={Globe2}
              title={ext.godsEyeTitle}
              body={ext.godsEyeSub}
              commit={GODSEYE.commit}
            />
            <ul className="mt-6 flex flex-col gap-3">
              {ext.godsEyeFeatures.map((feature, i) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                  fact={GODSEYE_FACTS[i]}
                  Glyph={GODSEYE_GLYPHS[i]}
                />
              ))}
            </ul>
          </GlassPanel>
        </div>

        <div className="mt-12">
          <SubHeading label="07" title={ext.boundaryHeading} />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {ext.boundaryItems.map((item, i) => (
              <GlassPanel key={item.title} className="flex min-w-0 flex-col gap-3 p-6">
                <h4 className="text-[15.5px] font-semibold leading-snug text-ink">
                  {item.title}
                </h4>
                <p className="text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                  {item.body}
                </p>
                <code className="mt-auto block max-w-full overflow-x-auto whitespace-nowrap rounded-[10px] border border-edge bg-void/60 px-3 py-2 font-mono text-[11.5px] text-brand-haze">
                  {BOUNDARY_FACTS[i]}
                </code>
              </GlassPanel>
            ))}
          </div>
        </div>

        <p className="mt-6 max-w-4xl text-pretty text-[13.5px] leading-relaxed text-ink-mute">
          {ext.footnote}
        </p>
        <p className="mt-4 text-[13.5px] text-ink-dim">
          <RouteLink
            to="/security"
            className="inline-flex items-center gap-1.5 rounded-pill border border-edge px-4 py-2 text-ink-dim transition-colors duration-200 hover:edge-brand hover:text-ink"
          >
            {dict.nav.security}
          </RouteLink>
        </p>
      </div>
    </section>
  );
}

function PanelHeader({
  Glyph,
  title,
  body,
  commit,
}: {
  Glyph: LucideIcon;
  title: string;
  body: string;
  commit: string;
}) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-edge bg-raise text-brand-lift"
        >
          <Glyph size={18} />
        </span>
        <h3 className="min-w-0 text-[18px] font-semibold leading-snug text-ink">{title}</h3>
        <code className="ms-auto rounded-pill border border-edge px-2.5 py-1 font-mono text-[10.5px] text-ink-mute">
          {commit}
        </code>
      </div>
      <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink-dim">{body}</p>
    </>
  );
}

function FeatureCard({
  feature,
  fact,
  Glyph,
}: {
  feature: LocalizedText;
  fact: string;
  Glyph: LucideIcon;
}) {
  return (
    <li className="flex min-w-0 flex-col gap-2.5 rounded-[14px] border border-edge bg-void/35 p-4">
      <div className="flex items-start gap-2.5">
        <Glyph size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-lift" />
        <h4 className="text-[14.5px] font-semibold leading-snug text-ink">{feature.title}</h4>
      </div>
      <p className="text-pretty text-[13px] leading-relaxed text-ink-dim">{feature.body}</p>
      <code className="mt-auto block max-w-full overflow-x-auto whitespace-nowrap font-mono text-[10.5px] leading-relaxed text-brand-haze">
        {fact}
      </code>
    </li>
  );
}
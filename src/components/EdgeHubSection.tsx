import { CalendarDays, Cpu, Home, Radar } from "lucide-react";
import { useI18n } from "../i18n/translations";
import { GlassPanel } from "./GlassPanel";
import { SectionHeading, SubHeading } from "./SectionHeading";
import { RouteLink } from "../router";
import {
  APPROVAL,
  CALDAV,
  DISCOVERY,
  EDGE_HOST_POLICY,
  HUB_SECRETS,
  MCP,
  SMART_HOME,
  SOURCE_LINE,
} from "../data/edgeHub";

const GLYPHS = [Radar, Cpu, Home, CalendarDays];

/**
 * The source-line bridges on `/features`. Every number under the prose comes from
 * `src/data/edgeHub.ts`, so the cards cannot drift from the node sources they cite, and the
 * badge above them is load-bearing: these bridges are on `main`, not in the signed v1.0.2
 * image this site offers for download.
 */
export function EdgeHubSection() {
  const { dict } = useI18n();
  const hub = dict.hub;

  const cardFacts = [
    `${DISCOVERY.mode} ${DISCOVERY.endpoint} · max ${DISCOVERY.maximumTargets}`,
    `${MCP.protocol} · max ${MCP.maximumServers}`,
    `MQTT 3.1.1 :${SMART_HOME.defaultMqttPort} · max ${SMART_HOME.maximumEntities}`,
    `${CALDAV.methods.join(" / ")} · ${CALDAV.lookaheadDays} d`,
  ];

  const boundaryFacts = [
    EDGE_HOST_POLICY.admittedClasses.join(" · "),
    `${APPROVAL.state} · ${APPROVAL.receipt} · ${APPROVAL.lifetimeSeconds / 60} min`,
    HUB_SECRETS.service,
  ];

  return (
    <section
      id="edge-hub"
      aria-labelledby="edge-hub-title"
      className="border-b border-edge px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          titleId="edge-hub-title"
          index="04 / EDGE HUB"
          title={hub.heading}
          sub={hub.sub}
        />

        <GlassPanel quiet className="edge-brand mt-2 min-w-0 p-5 sm:p-6">
          <p className="font-mono text-[10.5px] tracking-[0.18em] text-brand-haze">
            {hub.badge}
          </p>
          <p className="mt-3 max-w-4xl text-pretty text-[13px] leading-relaxed text-ink-dim">
            {hub.status}
          </p>
          <code className="mt-4 inline-block rounded-[10px] border border-edge bg-void/60 px-3 py-2 font-mono text-[11.5px] text-brand-haze">
            {SOURCE_LINE.commits.join(" · ")} · {SOURCE_LINE.signedRelease} / {SOURCE_LINE.signedBuild}
          </code>
        </GlassPanel>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {hub.cards.map((card, i) => {
            const Glyph = GLYPHS[i];
            return (
              <GlassPanel
                key={card.title}
                className="flex min-w-0 flex-col gap-4 p-6 transition-colors duration-300 hover:edge-brand sm:p-7"
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
                <h3 className="text-[18px] font-semibold leading-snug text-ink">
                  {card.title}
                </h3>
                <p className="text-pretty text-[14px] leading-relaxed text-ink-dim">
                  {card.body}
                </p>
                <code className="mt-auto block overflow-x-auto rounded-[10px] border border-edge bg-void/60 px-3 py-2 font-mono text-[11.5px] text-brand-haze">
                  {cardFacts[i]}
                </code>
              </GlassPanel>
            );
          })}
        </div>

        <div className="mt-12">
          <SubHeading label="05" title={hub.boundaryHeading} />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {hub.boundaryItems.map((item, i) => (
              <GlassPanel key={item.title} className="flex min-w-0 flex-col gap-3 p-6">
                <h4 className="text-[15.5px] font-semibold leading-snug text-ink">
                  {item.title}
                </h4>
                <p className="text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                  {item.body}
                </p>
                <code className="mt-auto block overflow-x-auto rounded-[10px] border border-edge bg-void/60 px-3 py-2 font-mono text-[11.5px] text-brand-haze">
                  {boundaryFacts[i]}
                </code>
              </GlassPanel>
            ))}
          </div>
        </div>

        <p className="mt-6 max-w-4xl text-pretty text-[13.5px] leading-relaxed text-ink-mute">
          {hub.footnote}
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
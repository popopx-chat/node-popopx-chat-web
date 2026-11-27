import { GlassPanel } from "../components/GlassPanel";
import { SectionHeading } from "../components/SectionHeading";
import { useI18n } from "../i18n/translations";
import { RouteLink } from "../router";

/**
 * The `/troubleshooting` route: the faults that were actually observed in the node's own
 * logs, as a symptom / cause / fix table. The rows come from the dictionary, so the count
 * of faults and their wording stay under translation, while this file only decides the
 * presentation — a table on wide screens, stacked cards on narrow ones.
 */
export function TroubleshootingPage() {
  const { dict } = useI18n();
  const trouble = dict.troubleshooting;

  return (
    <>
      <section
        id="troubleshooting"
        aria-labelledby="trouble-title"
        className="border-b border-edge px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            titleId="trouble-title"
            index={`01 / ${dict.routes["/troubleshooting"].eyebrow}`}
            title={trouble.heading}
            sub={trouble.sub}
          />

          <GlassPanel className="scroll-shadow mt-2 overflow-x-auto">
            <table className="w-full min-w-[840px] border-collapse text-start">
              <caption className="sr-only">{trouble.heading}</caption>
              <thead>
                <tr className="border-b border-edge-strong">
                  {trouble.columns.map((column) => (
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
                {trouble.items.map((fault) => (
                  <tr
                    key={fault.symptom}
                    className="border-b border-edge align-top last:border-b-0 transition-colors duration-200 hover:bg-raise/60"
                  >
                    <th
                      scope="row"
                      className="px-4 py-4 text-start text-[13.5px] font-semibold leading-snug text-ink"
                    >
                      {fault.symptom}
                    </th>
                    <td className="px-4 py-4 text-pretty text-[13px] leading-relaxed text-ink-dim">
                      {fault.cause}
                    </td>
                    <td className="px-4 py-4 text-pretty text-[13px] leading-relaxed text-ink-dim">
                      {fault.fix}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassPanel>

          <p className="mt-10 max-w-3xl border-t border-edge pt-6 text-pretty text-[13.5px] leading-relaxed text-ink-dim">
            {trouble.escalation}
          </p>

          <p className="mt-6 flex flex-wrap gap-3 text-[13px]">
            <RouteLink
              to="/node"
              className="inline-flex items-center gap-1.5 rounded-pill border border-edge px-4 py-2 text-ink-dim transition-colors duration-200 hover:edge-brand hover:text-ink"
            >
              {dict.nav.node}
            </RouteLink>
            <RouteLink
              to="/install"
              className="inline-flex items-center gap-1.5 rounded-pill border border-edge px-4 py-2 text-ink-dim transition-colors duration-200 hover:edge-brand hover:text-ink"
            >
              {dict.nav.install}
            </RouteLink>
          </p>
        </div>
      </section>
    </>
  );
}

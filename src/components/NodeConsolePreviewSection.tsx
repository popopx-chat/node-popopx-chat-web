import { useState } from "react";
import type { ReactNode } from "react";
import { useI18n } from "../i18n/translations";
import { SectionHeading } from "./SectionHeading";
import { ENGINES, SECTIONS, engineName } from "../data/enginesCatalog";
import { sectionTitle } from "../data/engineLocalization";
import { RUNTIME_PORTS } from "../data/nodeRuntime";
import { planFor, SAMPLE_DEVICES, SAMPLE_MACHINES } from "../data/consolePreview";

/** The one listener the node owns; the strip prints its real wire description. */
const CONSOLE = RUNTIME_PORTS[0];

/**
 * The `/` console preview: a still picture of the app's own status screen, framed so a
 * reader can see the product without installing it.
 *
 * It is not a dashboard. Nothing is polled, nothing is measured, and no number ticks: the
 * machine rows and ceilings are `consolePreview.ts` running the node's own arithmetic on a
 * fixture, the engine list is the same catalog `/features` prints, and the port table is
 * `nodeRuntime.ts`. The banner and the footer say so in the locale the reader is in, and the
 * `UI Preview` tag is never the only clue.
 */
export function NodeConsolePreviewSection() {
  const { dict, locale } = useI18n();
  const d = dict.dashboard;

  const [machineIndex, setMachineIndex] = useState(2);
  const [revokedIds, setRevokedIds] = useState<string[]>(() =>
    SAMPLE_DEVICES.filter((device) => device.revoked).map((device) => device.id),
  );

  const machine = SAMPLE_MACHINES[machineIndex];
  const plan = planFor(machine);
  const devices = SAMPLE_DEVICES.map((device) => ({
    ...device,
    revoked: revokedIds.includes(device.id),
  }));
  const activeCount = devices.filter((device) => !device.revoked).length;

  const residentShare = (plan.residentCeiling / machine.memoryGB) * 100;
  const meshShare = (plan.meshCeiling / machine.memoryGB) * 100;

  return (
    <section
      id="node-console"
      aria-labelledby="node-console-title"
      className="border-b border-edge px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          titleId="node-console-title"
          index="02 / CONSOLE"
          title={d.heading}
          sub={d.sub}
        />

        <div className="glass mt-10 overflow-hidden rounded-panel">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-edge bg-raise/40 px-5 py-3.5">
            <span className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="inline-block h-2 w-2 rounded-full bg-brand-lift"
              />
              <span className="text-[13.5px] font-medium text-ink">POPOPX Mac Node</span>
            </span>
            <span className="glass-quiet rounded-pill px-2.5 py-1 text-[11.5px] text-ink-dim">
              {d.statusConnected}
            </span>
            <span className="glass-quiet rounded-pill px-2.5 py-1 text-[11.5px] text-ink-dim">
              {d.daemonRunning}
            </span>
            <span className="ms-auto font-mono text-[11px] text-ink-mute" dir="ltr">
              {CONSOLE.protocol} · {CONSOLE.bind}:{CONSOLE.port} · {CONSOLE.authenticated}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 border-b border-edge bg-brand/8 px-5 py-2.5">
            <span className="edge-brand rounded-pill px-2.5 py-1 font-mono text-[10.5px] tracking-[0.14em] text-brand-haze" dir="ltr">
              UI PREVIEW
            </span>
            <p className="text-[12.5px] text-ink-dim">{d.badge}</p>
          </div>

          <div className="grid gap-5 p-5 sm:p-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-brand-haze">
                {d.machineLabel}
              </p>
              <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label={d.machineLabel}>
                {SAMPLE_MACHINES.map((candidate, index) => {
                  const active = index === machineIndex;
                  return (
                    <button
                      key={candidate.memory}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setMachineIndex(index)}
                      className={`rounded-pill px-3.5 py-1.5 text-[13px] transition-colors duration-200 ${
                        active
                          ? "edge-brand bg-brand/25 text-ink"
                          : "glass-quiet text-ink-dim hover:text-ink"
                      }`}
                    >
                      {candidate.memory}
                    </button>
                  );
                })}
              </div>
              <p className="mt-3 text-[12.5px] leading-relaxed text-ink-mute">{d.machineHint}</p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[5fr_7fr]">
              <Panel title={d.statusHeading}>
                <dl className="space-y-3">
                  <Fact label={dict.hardware.columns[1]} value={machine.chip} />
                  <Fact
                    label={dict.hardware.columns[7]}
                    value={dict.hardware.modes[machine.mode]}
                  />
                  <Fact label={dict.hardware.plansColumns[0]} value={plan.band} mono />
                </dl>
                <p className="mt-4 border-t border-edge pt-4 text-[12.5px] leading-relaxed text-ink-mute">
                  {d.loopbackNote}
                </p>
              </Panel>

              <Panel title={d.memHeading}>
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
                  <span className="font-mono text-[24px] text-ink">{machine.memoryGB}</span>
                  <span className="text-[12.5px] text-ink-dim">{d.memTotalLabel}</span>
                </div>

                <svg
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                  role="img"
                  aria-label={`${d.usageLabel} — ${d.memCeilingLabel} ${plan.residentCeiling} GB / ${machine.memoryGB} GB · ${d.memMeshLabel} ${plan.meshCeiling} GB / ${machine.memoryGB} GB`}
                  className="mt-4 h-2.5 w-full text-brand-lift"
                >
                  <rect x="0" y="0" width="100" height="8" fill="currentColor" opacity="0.1" />
                  <rect x="0" y="0" width={meshShare} height="8" fill="currentColor" opacity="0.26" />
                  <rect x="0" y="0" width={residentShare} height="8" fill="currentColor" />
                </svg>

                <dl className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-3">
                  <Fact label={d.memCeilingLabel} value={`${plan.residentCeiling} GB`} mono />
                  <Fact label={d.memMeshLabel} value={`${plan.meshCeiling} GB`} mono />
                  <Fact label={d.memHeadroomLabel} value={`${plan.desktopHeadroom} GB`} mono />
                </dl>

                <dl className="mt-4 space-y-3 border-t border-edge pt-4">
                  <Fact label={dict.hardware.columns[2]} value={machine.textModel} mono />
                  <Fact label={dict.hardware.columns[3]} value={machine.videoModel} mono />
                  <Fact label={dict.hardware.plansColumns[5]} value={plan.pull} mono />
                </dl>
              </Panel>
            </div>

            <Panel title={d.servicesHeading}>
              <div className="grid gap-6 md:grid-cols-[1.25fr_1fr]">
                <div className="space-y-4">
                  {SECTIONS.map((section) => (
                    <div key={section}>
                      <p className="font-mono text-[11px] tracking-[0.14em] text-ink-mute">
                        {sectionTitle(section, locale)}
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {ENGINES.filter((engine) => engine.section === section).map((engine) => (
                          <li
                            key={engine.id}
                            className="glass-quiet rounded-pill px-2.5 py-1 text-[12px] text-ink-dim"
                          >
                            {engineName(engine, locale)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <table className="w-full border-collapse text-start">
                  <caption className="sr-only">{d.servicesHeading}</caption>
                  <thead>
                    <tr className="border-b border-edge">
                      {dict.node.portsColumns.map((column) => (
                        <th
                          key={column}
                          scope="col"
                          className="pb-2 pe-3 font-mono text-[10.5px] font-normal tracking-[0.1em] text-ink-mute"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {RUNTIME_PORTS.map((entry) => (
                      <tr key={entry.port} className="border-b border-edge last:border-b-0">
                        <td className="py-2.5 pe-3 font-mono text-[12.5px] text-ink">
                          <span dir="ltr">:{entry.port}</span>
                        </td>
                        <td className="py-2.5 pe-3 text-[12.5px] text-ink-dim">
                          {dict.node.portsOwner[entry.owner]}
                        </td>
                        <td className="py-2.5 pe-3 font-mono text-[12px] text-ink-mute">
                          <span dir="ltr">{entry.bind}</span>
                        </td>
                        <td className="py-2.5 pe-3 font-mono text-[12px] text-ink-dim">
                          <span dir="ltr">{entry.protocol}</span>
                        </td>
                        <td className="py-2.5 font-mono text-[12px] text-brand-haze">
                          <span dir="ltr">{entry.authenticated}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-5 border-t border-edge pt-4 text-[12.5px] leading-relaxed text-ink-mute">
                {d.servicesNote}
              </p>
            </Panel>

            <Panel title={d.devicesHeading}>
              <div className="mb-3 flex items-center gap-2">
                <span className="font-mono text-[13px] text-ink">
                  {activeCount}/{devices.length}
                </span>
                <span className="text-[12px] text-ink-mute">{d.devicesActive}</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-start">
                  <caption className="sr-only">{d.devicesHeading}</caption>
                  <thead>
                    <tr className="border-b border-edge">
                      {d.deviceColumns.map((column) => (
                        <th
                          key={column}
                          scope="col"
                          className="pb-2 pe-3 font-mono text-[10.5px] font-normal tracking-[0.1em] text-ink-mute"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {devices.map((device) => (
                      <tr key={device.id} className="border-b border-edge last:border-b-0">
                        <td className="py-3 pe-3">
                          <span className="block text-[13.5px] text-ink" dir="ltr">{device.model}</span>
                          <span className="block font-mono text-[11px] text-ink-mute" dir="ltr">
                            {device.keyPrefix}…
                          </span>
                        </td>
                        <td className="py-3 pe-3 font-mono text-[12px] text-ink-dim">
                          <span dir="ltr">{device.pairedAt}</span>
                        </td>
                        <td className="py-3 pe-3 font-mono text-[12px] text-ink-dim">
                          {device.lastSeen === null ? d.neverSeen : <span dir="ltr">{device.lastSeen}</span>}
                        </td>
                        <td className="py-3">
                          {device.revoked ? (
                            <span className="text-[12.5px] text-ink-mute">{d.revokedRow}</span>
                          ) : (
                            <button
                              type="button"
                              onClick={() => setRevokedIds([...revokedIds, device.id])}
                              className="edge-brand rounded-pill px-3 py-1.5 text-[12.5px] text-ink-dim transition-colors duration-200 hover:text-ink"
                            >
                              {d.revoke}
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Panel>
          </div>

          <p className="border-t border-edge bg-raise/30 px-5 py-4 text-[12.5px] leading-relaxed text-ink-mute">
            {d.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="glass-quiet rounded-panel p-5">
      <h3 className="font-mono text-[11px] tracking-[0.2em] text-brand-haze">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Fact({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <dt className="text-[11.5px] text-ink-mute">{label}</dt>
      <dd className={`mt-0.5 text-[13.5px] text-ink ${mono ? "font-mono text-[12.5px]" : ""}`}>
        {mono ? <span dir="ltr">{value}</span> : value}
      </dd>
    </div>
  );
}

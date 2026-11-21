import { useI18n } from "../i18n/translations";
import { LADDER } from "../data/hardwareLadder";
import { GlassPanel } from "./GlassPanel";
import { SectionHeading } from "./SectionHeading";

export function HardwareLadderSection() {
  const { dict } = useI18n();
  const { columns, modes } = dict.hardware;

  return (
    <section
      id="hardware"
      aria-labelledby="hardware-title"
      className="border-b border-edge px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          titleId="hardware-title"
          index="03 / HARDWARE"
          title={dict.hardware.heading}
          sub={dict.hardware.sub}
        />

        <GlassPanel className="scroll-shadow overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse text-left">
            <caption className="sr-only">{dict.hardware.heading}</caption>
            <thead>
              <tr className="border-b border-edge-strong">
                {columns.map((column) => (
                  <th
                    key={column}
                    scope="col"
                    className="px-4 py-3.5 text-balance font-mono text-[11px] font-medium tracking-[0.1em] text-ink-mute"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LADDER.map((row) => (
                <tr
                  key={row.memory}
                  className="border-b border-edge last:border-b-0 transition-colors duration-200 hover:bg-raise/60"
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-4 text-[14px] font-semibold text-ink"
                  >
                    {row.memory}
                  </th>
                  <td className="px-4 py-4 text-[13.5px] text-ink-dim">{row.chip}</td>
                  <td className="whitespace-nowrap px-4 py-4 font-mono text-[12.5px] text-ink-dim">
                    {row.textModel}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 font-mono text-[12.5px] text-ink-dim">
                    {row.videoModel}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 font-mono text-[12.5px] text-ink-mute">
                    {row.firstToken}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 font-mono text-[12.5px] text-ink-mute">
                    {row.throughput}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 font-mono text-[12.5px] text-ink-mute">
                    {row.residentPeak}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4">
                    <span
                      className={`rounded-pill px-3 py-1 text-[12px] ${
                        row.mode === "full"
                          ? "edge-brand bg-brand/22 text-ink"
                          : row.mode === "balanced"
                            ? "border border-edge-strong text-ink-dim"
                            : "border border-edge text-ink-mute"
                      }`}
                    >
                      {modes[row.mode]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </GlassPanel>

        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {dict.hardware.rules.map((rule) => (
            <li key={rule} className="glass-quiet rounded-[16px] p-5 text-[13.5px] leading-relaxed text-ink-dim">
              {rule}
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-4xl text-pretty text-[13px] leading-relaxed text-ink-mute">
          {dict.hardware.footnote}
        </p>
      </div>
    </section>
  );
}

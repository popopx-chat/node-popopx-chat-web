import { QrCode, Radio, ShieldCheck } from "lucide-react";
import { GlassPanel } from "../components/GlassPanel";
import { SectionHeading, SubHeading } from "../components/SectionHeading";
import { useI18n } from "../i18n/translations";
import { PAIRING, RUNTIME_PORTS, WIRE } from "../data/nodeRuntime";
import { SEALED_PAIRING } from "../data/edgeHub";
import { RouteLink } from "../router";

/**
 * The `/node` route: what a node is, the one line it listens on, how a phone is
 * authorized, and which ports are involved.
 *
 * Every literal on this page comes from `src/data/nodeRuntime.ts`, which is read out of
 * the shipping node sources. Nothing here is a paraphrase, because a portal that
 * paraphrases its own protocol is wrong the first time the protocol is tightened.
 */
export function NodePage() {
  const { dict } = useI18n();
  const node = dict.node;

  const facts = [
    { label: node.pairingFacts.lifetime, value: `${PAIRING.lifetimeSeconds} s` },
    { label: node.pairingFacts.singleUse, value: PAIRING.singleUse ? "1×" : "—" },
    { label: node.pairingFacts.signature, value: PAIRING.signature },
    { label: node.pairingFacts.delivery, value: PAIRING.deliveredAs },
  ];

  return (
    <>
      <section
        id="what-is-a-node"
        aria-labelledby="node-title"
        className="border-b border-edge px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            titleId="node-title"
            index={`01 / ${dict.routes["/node"].eyebrow}`}
            title={node.heading}
            sub={node.sub}
          />

          <div className="mt-2 grid gap-4 sm:grid-cols-2">
            {node.points.map((point) => (
              <GlassPanel key={point.title} className="min-w-0 p-6 sm:p-7">
                <h3 className="text-[16.5px] font-semibold leading-snug text-ink">
                  {point.title}
                </h3>
                <p className="mt-3 text-pretty text-[14px] leading-relaxed text-ink-dim">
                  {point.body}
                </p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section
        id="wire"
        aria-labelledby="wire-title"
        className="border-b border-edge px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <SubHeading titleId="wire-title" label={WIRE.commandPrefix} title={node.wireHeading} />
          <p className="mt-4 max-w-3xl text-pretty text-[14.5px] leading-relaxed text-ink-dim">
            {node.wireBody}
          </p>
          <div className="mt-6 max-w-3xl">
            <p className="mb-2 font-mono text-[11px] tracking-[0.16em] text-ink-mute">
              {node.wireSampleLabel}
            </p>
            <code className="scroll-shadow block overflow-x-auto rounded-[14px] border border-edge bg-void/60 px-4 py-3.5 font-mono text-[12.5px] text-brand-haze">
              {WIRE.commandShape}
            </code>
          </div>
        </div>
      </section>

      <section
        id="pairing"
        aria-labelledby="pairing-title"
        className="border-b border-edge px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <SubHeading
            titleId="pairing-title"
            label="02"
            title={node.pairingHeading}
            sub={node.pairingSub}
          />

          <ol className="mt-8 grid gap-4 lg:grid-cols-3">
            {node.pairingSteps.map((step, i) => (
              <li key={step.title}>
                <GlassPanel quiet className="flex h-full min-w-0 flex-col gap-3 p-6">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] border border-edge bg-raise text-brand-lift"
                    >
                      {i === 0 ? <QrCode size={17} /> : i === 1 ? <Radio size={17} /> : <ShieldCheck size={17} />}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.18em] text-ink-mute">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-[16px] font-semibold leading-snug text-ink">{step.title}</h3>
                  <p className="text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                    {step.body}
                  </p>
                </GlassPanel>
              </li>
            ))}
          </ol>

          <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="glass-quiet rounded-[16px] px-5 py-4">
                <dt className="text-[12.5px] text-ink-mute">{fact.label}</dt>
                <dd className="mt-1.5 truncate font-mono text-[13px] text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12">
            <SubHeading title={node.sealedHeading} sub={node.sealedSub} />
            <p className="mt-6 font-mono text-[11px] tracking-[0.16em] text-ink-mute">
              {node.sealedShapeLabel}
            </p>
            <code className="scroll-shadow mt-2 block overflow-x-auto rounded-[14px] border border-edge bg-void/60 px-4 py-3.5 font-mono text-[12.5px] text-brand-haze">
              {SEALED_PAIRING.linkShape}
            </code>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: node.sealedFacts.kdf, value: SEALED_PAIRING.kdf },
                { label: node.sealedFacts.cipher, value: SEALED_PAIRING.cipher },
                {
                  label: node.sealedFacts.nonce,
                  value: `${SEALED_PAIRING.nonceBytes} B · ${SEALED_PAIRING.tagBytes} B tag`,
                },
                {
                  label: node.sealedFacts.caps,
                  value: `${SEALED_PAIRING.maxSealableBytes} / ${SEALED_PAIRING.maxOpenableBytes} B`,
                },
              ].map((fact) => (
                <div key={fact.label} className="glass-quiet rounded-[16px] px-5 py-4">
                  <dt className="text-[12.5px] text-ink-mute">{fact.label}</dt>
                  <dd className="mt-1.5 truncate font-mono text-[13px] text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 max-w-4xl text-pretty text-[13.5px] leading-relaxed text-ink-dim">
              {node.sealedBody}
            </p>
          </div>
        </div>
      </section>

      <section
        id="ports"
        aria-labelledby="ports-title"
        className="border-b border-edge px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <SubHeading
            titleId="ports-title"
            label="03"
            title={node.portsHeading}
            sub={node.portsSub}
          />

          <GlassPanel className="scroll-shadow mt-8 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <caption className="sr-only">{node.portsHeading}</caption>
              <thead>
                <tr className="border-b border-edge-strong">
                  {node.portsColumns.map((column) => (
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
                {RUNTIME_PORTS.map((entry) => (
                  <tr
                    key={entry.port}
                    className="border-b border-edge last:border-b-0 transition-colors duration-200 hover:bg-raise/60"
                  >
                    <td className="whitespace-nowrap px-4 py-4 font-mono text-[13.5px] text-ink">
                      :{entry.port}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-[13.5px] text-ink-dim">
                      {node.portsOwner[entry.owner]}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 font-mono text-[12.5px] text-ink-dim">
                      {entry.bind}
                    </td>
                    <td className="px-4 py-4">
                      <span className="block whitespace-nowrap font-mono text-[12.5px] text-ink-dim">
                        {entry.protocol}
                      </span>
                      <span className="mt-1 block text-[12.5px] text-ink-mute">
                        {node.portsPurpose[entry.purpose]}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 font-mono text-[12.5px] text-brand-haze">
                      {entry.authenticated}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassPanel>

          <p className="mt-6 max-w-4xl text-pretty text-[13.5px] leading-relaxed text-ink-mute">
            {node.portsFootnote}
          </p>

          <p className="mt-6 text-[13.5px] text-ink-dim">
            <RouteLink
              to="/security"
              className="inline-flex items-center gap-1.5 rounded-pill border border-edge px-4 py-2 text-ink-dim transition-colors duration-200 hover:edge-brand hover:text-ink"
            >
              {dict.nav.security}
            </RouteLink>
          </p>
        </div>
      </section>
    </>
  );
}

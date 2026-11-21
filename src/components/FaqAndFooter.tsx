import { useState } from "react";
import { ArrowDown, ChevronDown } from "lucide-react";
import { useI18n } from "../i18n/translations";
import { RELEASE_REPO } from "../data/release";
import { Logo } from "./Logo";
import { SectionHeading } from "./SectionHeading";

const MAC_NODE_URL = `https://github.com/${RELEASE_REPO}`;
const IOS_REPO_URL = "https://github.com/popopx-chat/popopx-chat";

export function FaqAndFooter() {
  const { dict } = useI18n();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <section id="faq" aria-labelledby="faq-title" className="border-b border-edge px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            titleId="faq-title"
            index="05 / FAQ"
            title={dict.faq.heading}
            sub={dict.faq.sub}
          />

          <ul className="divide-y divide-edge">
            {dict.faq.items.map((item, i) => {
              const expanded = open === i;
              return (
                <li key={item.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(expanded ? null : i)}
                      aria-expanded={expanded}
                      id={`faq-question-${i}`}
                      aria-controls={`faq-answer-${i}`}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left"
                    >
                      <span className="text-[16px] font-medium leading-snug text-ink">{item.q}</span>
                      <ChevronDown
                        size={17}
                        aria-hidden="true"
                        className={`mt-0.5 shrink-0 text-ink-mute transition-transform duration-300 ${
                          expanded ? "rotate-180 text-brand-lift" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    hidden={!expanded}
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    className="pb-6 pr-10 text-pretty text-[14px] leading-relaxed text-ink-dim"
                  >
                    {item.a}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <footer className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div className="flex items-center gap-3.5">
              <Logo size={40} alt="POPOPX" />
              <p className="max-w-xs text-pretty text-[13.5px] leading-relaxed text-ink-dim">
                {dict.footer.tagline}
              </p>
            </div>
            <a
              href="#top"
              className="glass-quiet inline-flex items-center gap-2 rounded-pill px-4 py-2 text-[13px] text-ink-dim transition-colors duration-200 hover:text-ink"
            >
              <ArrowDown size={14} aria-hidden="true" className="rotate-180" />
              {dict.footer.backToTop}
            </a>
          </div>

          <div className="rule-fade mt-10" />

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <Notice title={dict.footer.licenceHeading} body={dict.footer.licenceBody} />
            <Notice title={dict.footer.trademarkHeading} body={dict.footer.trademarkBody} />
            <Notice title={dict.footer.privacyHeading} body={dict.footer.privacyBody} />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-edge pt-6">
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href={MAC_NODE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-ink-dim underline decoration-edge-strong underline-offset-4 hover:text-ink"
              >
                {dict.footer.sourceRepo}
              </a>
              <a
                href={IOS_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-ink-dim underline decoration-edge-strong underline-offset-4 hover:text-ink"
              >
                {dict.footer.iosRepo}
              </a>
            </nav>
            <p className="max-w-2xl text-[12px] leading-relaxed text-ink-mute">
              {dict.footer.appleNotice}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function Notice({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="font-mono text-[11px] tracking-[0.18em] text-ink-mute">{title}</h3>
      <p className="mt-2.5 text-pretty text-[13px] leading-relaxed text-ink-dim">{body}</p>
    </div>
  );
}

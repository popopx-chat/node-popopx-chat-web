import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useI18n } from "../i18n/translations";
import { SectionHeading } from "./SectionHeading";

export function FaqSection() {
  const { dict } = useI18n();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" aria-labelledby="faq-title" className="border-b border-edge px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          titleId="faq-title"
          index="03"
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
  );
}

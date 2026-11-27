import { ArrowUp } from "lucide-react";
import { useI18n } from "../i18n/translations";
import { RELEASE_REPO } from "../data/release";
import { ECOSYSTEM_LINKS } from "../data/ecosystem";
import { Logo } from "./Logo";

const MAC_NODE_URL = `https://github.com/${RELEASE_REPO}`;
const IOS_REPO_URL = "https://github.com/popopx-chat/popopx-chat";

const KEYS = ["chat", "botStudio", "serviceSuite"] as const;

export function SiteFooter() {
  const { dict } = useI18n();

  return (
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
            <ArrowUp size={14} aria-hidden="true" />
            {dict.footer.backToTop}
          </a>
        </div>

        <div className="mt-10">
          <h2 className="font-mono text-[11px] tracking-[0.18em] text-ink-mute">
            {dict.ecosystem.heading}
          </h2>
          <p className="mt-2.5 max-w-3xl text-pretty text-[13px] leading-relaxed text-ink-dim">
            {dict.ecosystem.body}
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {ECOSYSTEM_LINKS.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-quiet flex h-full flex-col gap-1.5 rounded-[16px] p-5 transition-colors duration-300 hover:edge-brand"
                >
                  <span className="text-[14.5px] font-semibold text-ink">
                    {dict.ecosystem[KEYS[i]]}
                  </span>
                  <span className="text-pretty text-[13px] leading-relaxed text-ink-dim">
                    {dict.ecosystem[`${KEYS[i]}Body`]}
                  </span>
                  <span className="mt-1 font-mono text-[11px] text-brand-haze" dir="ltr">
                    {link.host}
                  </span>
                </a>
              </li>
            ))}
          </ul>
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
  );
}

function Notice({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="font-mono text-[11px] tracking-[0.18em] text-ink-mute">{title}</h2>
      <p className="mt-2.5 text-pretty text-[13px] leading-relaxed text-ink-dim">{body}</p>
    </div>
  );
}

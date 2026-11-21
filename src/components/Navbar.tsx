import { useEffect, useState } from "react";
import { ArrowDown, Menu, X } from "lucide-react";
import { useI18n } from "../i18n/translations";
import { RELEASE_REPO } from "../data/release";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

const GITHUB_URL = `https://github.com/${RELEASE_REPO}`;

const LINKS = [
  { id: "architecture", key: "architecture" },
  { id: "engines", key: "engines" },
  { id: "hardware", key: "hardware" },
  { id: "install", key: "install" },
  { id: "faq", key: "faq" },
] as const;

export function Navbar() {
  const { dict } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [raised, setRaised] = useState(false);

  useEffect(() => {
    const onScroll = () => setRaised(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <nav
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        raised ? "border-edge bg-abyss/85 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
      aria-label="POPOPX"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 no-underline">
          <Logo size={30} />
          <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
            POPOPX
            <span className="ml-1.5 font-normal text-ink-mute">Mac Node</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-pill px-3 py-2 text-sm text-ink-dim transition-colors duration-200 hover:bg-raise hover:text-ink"
            >
              {dict.nav[link.key]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-pill px-3 py-2 text-sm text-ink-dim transition-colors duration-200 hover:bg-raise hover:text-ink lg:inline-block"
          >
            {dict.nav.github}
          </a>
          <a
            href="#download"
            className="edge-brand hidden items-center gap-1.5 rounded-pill bg-brand/22 px-4 py-2 text-sm font-medium text-ink transition-transform duration-200 hover:bg-brand/32 lg:inline-flex"
          >
            <ArrowDown size={15} aria-hidden="true" />
            {dict.nav.download}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? dict.nav.closeMenu : dict.nav.openMenu}
            className="glass-quiet inline-flex h-10 w-10 items-center justify-center rounded-pill text-ink lg:hidden"
          >
            {menuOpen ? (
              <X size={18} aria-hidden="true" />
            ) : (
              <Menu size={18} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="glass border-t border-edge lg:hidden">
          <ul className="mx-auto flex max-w-6xl list-none flex-col gap-1 px-5 py-4 sm:px-8">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-[14px] px-3 py-2.5 text-[15px] text-ink-dim transition-colors duration-200 hover:bg-raise hover:text-ink"
                >
                  {dict.nav[link.key]}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#download"
                onClick={() => setMenuOpen(false)}
                className="edge-brand mt-1 flex items-center gap-2 rounded-[14px] bg-brand/22 px-3 py-2.5 text-[15px] font-medium text-ink"
              >
                <ArrowDown size={16} aria-hidden="true" />
                {dict.nav.download}
              </a>
            </li>
            <li className="mt-2 flex items-center justify-between gap-3 border-t border-edge pt-3">
              <LanguageSwitcher />
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-dim hover:text-ink"
              >
                {dict.nav.github}
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
}

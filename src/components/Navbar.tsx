import { useEffect, useState } from "react";
import { ArrowDown, Menu, X } from "lucide-react";
import { useI18n } from "../i18n/translations";
import { RELEASE_REPO } from "../data/release";
import { RouteLink, useRouter } from "../router";
import type { RoutePath } from "../router";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

const GITHUB_URL = `https://github.com/${RELEASE_REPO}`;

const LINKS: readonly RoutePath[] = [
  "/",
  "/node",
  "/features",
  "/install",
  "/security",
  "/troubleshooting",
  "/releases",
];

const LABELS: Record<RoutePath, "overview" | "node" | "features" | "install" | "security" | "troubleshooting" | "releases"> = {
  "/": "overview",
  "/node": "node",
  "/features": "features",
  "/install": "install",
  "/security": "security",
  "/troubleshooting": "troubleshooting",
  "/releases": "releases",
};

export function Navbar() {
  const { dict } = useI18n();
  const { navigate } = useRouter();
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

  /**
   * The router already scrolls to the top of the new page, but the open panel has to
   * close as well, and a plain href would re-read the document on every tap.
   */
  const go = (to: RoutePath) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMenuOpen(false);
    navigate(to);
  };

  return (
    <nav
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        raised ? "border-edge bg-abyss/85 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
      aria-label="POPOPX"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <RouteLink to="/" className="flex items-center gap-2.5 no-underline">
          <Logo size={30} />
          <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
            POPOPX
            <span className="ml-1.5 font-normal text-ink-mute">Mac Node</span>
          </span>
        </RouteLink>

        <div className="hidden items-center gap-0.5 xl:flex">
          {LINKS.map((to) => (
            <RouteLink
              key={to}
              to={to}
              className="rounded-pill px-3 py-2 text-sm text-ink-dim transition-colors duration-200 hover:bg-raise hover:text-ink aria-[current=page]:text-ink"
            >
              {dict.nav[LABELS[to]]}
            </RouteLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <RouteLink
            to="/install"
            className="edge-brand hidden items-center gap-1.5 rounded-pill bg-brand/22 px-4 py-2 text-sm font-medium text-ink transition-transform duration-200 hover:bg-brand/32 sm:inline-flex"
          >
            <ArrowDown size={15} aria-hidden="true" />
            {dict.nav.download}
          </RouteLink>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? dict.nav.closeMenu : dict.nav.openMenu}
            className="glass-quiet inline-flex h-10 w-10 items-center justify-center rounded-pill text-ink xl:hidden"
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
        <div className="glass border-t border-edge xl:hidden">
          <ul className="mx-auto flex max-w-6xl list-none flex-col gap-1 px-5 py-4 sm:px-8">
            {LINKS.map((to) => (
              <li key={to}>
                <RouteLink
                  to={to}
                  onClick={go(to)}
                  className="block rounded-[14px] px-3 py-2.5 text-[15px] text-ink-dim transition-colors duration-200 hover:bg-raise hover:text-ink aria-[current=page]:text-ink"
                >
                  {dict.nav[LABELS[to]]}
                </RouteLink>
              </li>
            ))}
            <li className="mt-2 flex items-center justify-between gap-3 border-t border-edge pt-3">
              <LanguageSwitcher />
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-dim hover:text-ink"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
}

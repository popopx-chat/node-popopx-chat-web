import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { LOCALE_NAMES, useI18n } from "../i18n/translations";

export function LanguageSwitcher() {
  const { locale, locales, setLocale, dict } = useI18n();
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const active = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: MouseEvent) => {
      if (wrap.current !== null && !wrap.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    active.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={wrap} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={dict.nav.chooseLanguage}
        className="glass-quiet flex items-center gap-1.5 rounded-pill px-3 py-1.5 text-sm text-ink-dim transition-colors duration-200 hover:text-ink"
      >
        <span className="font-medium text-ink">{LOCALE_NAMES[locale]}</span>
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open ? (
        <ul
          role="menu"
          className="glass absolute end-0 z-50 mt-2 max-h-[60vh] w-56 list-none overflow-y-auto rounded-panel p-1.5 scroll-shadow"
        >
          {locales.map((code) => {
            const selected = code === locale;
            return (
              <li key={code} className="list-none">
                <button
                  ref={selected ? active : undefined}
                  type="button"
                  role="menuitemradio"
                  aria-checked={selected}
                  onClick={() => {
                    setLocale(code);
                    setOpen(false);
                  }}
                  className={`w-full rounded-[12px] px-3 py-2 text-start text-sm transition-colors duration-150 ${
                    selected
                      ? "bg-brand/18 text-ink"
                      : "text-ink-dim hover:bg-raise hover:text-ink"
                  }`}
                >
                  {LOCALE_NAMES[code]}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

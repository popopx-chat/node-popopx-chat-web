import { createContext, createElement, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import type { Dictionary, LocaleCode } from "./types";
import { LOCALES } from "./types";

import { en } from "./locales/en";

/**
 * One chunk per catalog.
 *
 * English is imported eagerly because it is the fallback every reader sees before a
 * catalog lands; the other seventeen are fetched only when the reader actually
 * switches to them, so each literal specifier here becomes its own asset and a reader
 * on Thai downloads Thai, not the other sixteen.
 */
const LOADERS: Record<Exclude<LocaleCode, "en">, () => Promise<Dictionary>> = {
  bg: () => import("./locales/bg").then((m) => m.bg),
  cs: () => import("./locales/cs").then((m) => m.cs),
  de: () => import("./locales/de").then((m) => m.de),
  es: () => import("./locales/es").then((m) => m.es),
  fi: () => import("./locales/fi").then((m) => m.fi),
  fr: () => import("./locales/fr").then((m) => m.fr),
  hu: () => import("./locales/hu").then((m) => m.hu),
  it: () => import("./locales/it").then((m) => m.it),
  ja: () => import("./locales/ja").then((m) => m.ja),
  nl: () => import("./locales/nl").then((m) => m.nl),
  pl: () => import("./locales/pl").then((m) => m.pl),
  ru: () => import("./locales/ru").then((m) => m.ru),
  th: () => import("./locales/th").then((m) => m.th),
  tr: () => import("./locales/tr").then((m) => m.tr),
  uk: () => import("./locales/uk").then((m) => m.uk),
  "zh-Hans": () => import("./locales/zhHans").then((m) => m.zhHans),
  "zh-Hant": () => import("./locales/zhHant").then((m) => m.zhHant),
};

/** Order the switcher shows: Simplified first, then the rest alphabetically. */
export const SWITCHER_ORDER: readonly LocaleCode[] = [
  "zh-Hans",
  "zh-Hant",
  "en",
  "bg",
  "cs",
  "de",
  "es",
  "fi",
  "fr",
  "hu",
  "it",
  "ja",
  "nl",
  "pl",
  "ru",
  "th",
  "tr",
  "uk",
];

export const STORAGE_KEY = "popopx.node.locale";

/**
 * Browser tags that are not themselves a shipped locale, mapped onto the one we can
 * serve. Anything unmapped falls through to the prefix scan in `detectLocale`.
 */
const TAG_ALIASES: Record<string, LocaleCode> = {
  zh: "zh-Hans",
  "zh-cn": "zh-Hans",
  "zh-sg": "zh-Hans",
  "zh-hans": "zh-Hans",
  "zh-tw": "zh-Hant",
  "zh-hk": "zh-Hant",
  "zh-mo": "zh-Hant",
  "zh-hant": "zh-Hant",
  "pt-br": "en",
  "pt-pt": "en",
};

function normalise(tag: string): string {
  return tag.trim().toLowerCase().replace(/_/g, "-");
}

function isLocale(value: string): value is LocaleCode {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Resolve a preference-ordered list of browser tags to a shipped locale.
 *
 * The alias table is consulted before the bare-prefix scan, so a reader whose first
 * choice is `zh-TW` gets Traditional rather than Simplified Chinese.
 */
export function detectLocale(tags: readonly string[]): LocaleCode {
  for (const raw of tags) {
    const tag = normalise(raw);
    if (!tag) continue;
    if (isLocale(tag)) return tag;
    const alias = TAG_ALIASES[tag];
    if (alias) return alias;
    const base = tag.split("-")[0] ?? tag;
    if (isLocale(base)) return base;
    const baseAlias = TAG_ALIASES[base];
    if (baseAlias) return baseAlias;
  }
  return "en";
}

function browserTags(): string[] {
  const listed = typeof navigator !== "undefined" && navigator.languages
    ? Array.from(navigator.languages)
    : [];
  const single = typeof navigator !== "undefined" && typeof navigator.language === "string"
    ? [navigator.language]
    : [];
  return [...listed, ...single];
}

/** The reader's own stored choice, if there is one. */
export function readStoredLocale(): LocaleCode | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored && isLocale(stored) ? stored : null;
  } catch {
    // Private mode or blocked storage is a normal state, not an error state.
    return null;
  }
}

function writeStoredLocale(locale: LocaleCode): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // The in-memory choice still applies for this visit.
  }
}

interface I18nValue {
  locale: LocaleCode;
  dict: Dictionary;
  locales: readonly LocaleCode[];
  setLocale: (locale: LocaleCode) => void;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const detected = useMemo(() => detectLocale(browserTags()), []);
  const stored = useMemo(() => readStoredLocale(), []);
  const [locale, setLocaleState] = useState<LocaleCode>(stored ?? detected);
  const [catalogs, setCatalogs] = useState<Partial<Record<LocaleCode, Dictionary>>>({});

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY || !event.newValue) return;
      if (isLocale(event.newValue)) setLocaleState(event.newValue);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    if (locale === "en" || catalogs[locale]) return;
    let active = true;
    void LOADERS[locale]().then((next) => {
      if (active) setCatalogs((prev) => ({ ...prev, [locale]: next }));
    });
    return () => {
      active = false;
    };
  }, [locale, catalogs]);

  /**
   * Until a catalog arrives the page renders in English rather than showing keys: the
   * first paint on a stored non-English choice is one frame of English, then the whole
   * tree switches at once. A failed import is left alone — the reader stays on English
   * instead of a broken half-translation.
   */
  const dict = catalogs[locale] ?? en;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title =
      locale === "en"
        ? "POPOPX Mac Node — your own Mac runs the ten sovereign engines"
        : `POPOPX Mac Node — ${dict.hero.titleAccent}`;
  }, [locale, dict]);

  const setLocale = useCallback((next: LocaleCode) => {
    setLocaleState(next);
    writeStoredLocale(next);
  }, []);

  const value = useMemo<I18nValue>(
    () => ({ locale, dict, locales: SWITCHER_ORDER, setLocale }),
    [locale, dict, setLocale],
  );

  return createElement(I18nContext.Provider, { value }, children);
}

export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside I18nProvider");
  return value;
}

export { LOCALES };
export { LOCALE_NAMES } from "./types";
export type { Dictionary, LocaleCode } from "./types";

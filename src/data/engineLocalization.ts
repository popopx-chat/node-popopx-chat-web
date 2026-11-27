import type { LocaleCode } from "../i18n/types";
import {
  PRICE_FORMAT,
  PRICE_METERED,
  SECTION_LABELS,
  engineName,
  priceLabel,
} from "./enginesCatalog";
import type { EngineDefinition, EngineMenuAction, SectionId } from "./enginesCatalog";
import { ENGINE_PORTAL_STRINGS } from "./enginePortalStrings";

/**
 * Resolve engine catalog copy for any of the 21 portal locales.
 *
 * The generated catalog carries the 18 official locales. The three portal-only
 * locales read the hand-maintained overlay in `enginePortalStrings.ts`, keyed by the
 * English source string; a missing overlay entry falls back to English rather than
 * rendering a key, and the build-time overlay census is what keeps that fallback
 * unreachable for the strings that ship today.
 */
function isCatalogLocale(locale: LocaleCode): locale is keyof typeof SECTION_LABELS.productivity.title {
  return locale !== "pt-BR" && locale !== "ko" && locale !== "ar";
}

function portalString(locale: LocaleCode, english: string): string | null {
  return ENGINE_PORTAL_STRINGS[locale]?.[english] ?? null;
}

export function sectionTitle(section: SectionId, locale: LocaleCode): string {
  const english = SECTION_LABELS[section].title.en;
  if (isCatalogLocale(locale)) return SECTION_LABELS[section].title[locale];
  return portalString(locale, english) ?? english;
}

export function sectionFilter(section: SectionId, locale: LocaleCode): string {
  const english = SECTION_LABELS[section].filter.en;
  if (isCatalogLocale(locale)) return SECTION_LABELS[section].filter[locale];
  return portalString(locale, english) ?? english;
}

export function engineTagline(engine: EngineDefinition, locale: LocaleCode): string {
  if (isCatalogLocale(locale)) return engine.tagline[locale];
  return portalString(locale, engine.tagline.en) ?? engine.tagline.en;
}

export function engineMenuLabel(item: EngineMenuAction, locale: LocaleCode): string {
  if (isCatalogLocale(locale)) return item.label[locale];
  return portalString(locale, item.label.en) ?? item.label.en;
}

export function engineHighlights(engine: EngineDefinition, locale: LocaleCode): string[] {
  if (isCatalogLocale(locale)) return engine.highlights[locale];
  return engine.highlights.en.map((highlight) => portalString(locale, highlight) ?? highlight);
}

export function priceLabelFor(engine: EngineDefinition, locale: LocaleCode): string {
  if (isCatalogLocale(locale)) return priceLabel(engine, locale);
  const english = engine.credits30d === null ? PRICE_METERED.en : PRICE_FORMAT.en;
  const translated = portalString(locale, english) ?? english;
  if (engine.credits30d === null) return translated;
  return translated.replace("%lld", String(engine.credits30d));
}

export { engineName };
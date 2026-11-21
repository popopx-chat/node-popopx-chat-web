/**
 * The 18 languages the portal ships.
 *
 * This is the language set the POPOPX iOS client ships: `apps/ios/POPOPX.xcodeproj`
 * `knownRegions` minus `Base`, which is an Xcode artefact rather than a locale.
 */
export const LOCALES = [
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
  "zh-Hans",
  "zh-Hant",
  "en",
] as const;

export type LocaleCode = (typeof LOCALES)[number];

/**
 * What each language calls itself, in its own script.
 *
 * This list is deliberately separate from the dictionaries: the language menu has to
 * be complete before any catalog has been fetched, and a catalog is ~17 kB of strings
 * that a reader will never switch to. `LocaleCode` keys this table, so a new language
 * is a compile error until it has both an entry here and a loader.
 */
export const LOCALE_NAMES: Record<LocaleCode, string> = {
  bg: "Български",
  cs: "Čeština",
  de: "Deutsch",
  en: "English",
  es: "Español",
  fi: "Suomi",
  fr: "Français",
  hu: "Magyar",
  it: "Italiano",
  ja: "日本語",
  nl: "Nederlands",
  pl: "Polski",
  ru: "Русский",
  th: "ไทย",
  tr: "Türkçe",
  uk: "Українська",
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文",
};

export interface LocalizedText {
  title: string;
  body: string;
}

export interface QaPair {
  q: string;
  a: string;
}

/**
 * Site chrome only. Engine names, taglines, quick-menu labels, highlights, shelf
 * titles and the price chip are not here — they come from the official catalogs in
 * `src/data/enginesCatalog.ts`, so this file cannot drift from the apps.
 */
export interface Dictionary {
  dir: "ltr";

  nav: {
    engines: string;
    architecture: string;
    hardware: string;
    install: string;
    faq: string;
    github: string;
    download: string;
    openMenu: string;
    closeMenu: string;
    chooseLanguage: string;
  };

  hero: {
    badge: string;
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    ctaDownload: string;
    ctaSource: string;
    releaseLabel: string;
    sizeLabel: string;
    digestLabel: string;
    statusFetching: string;
    statusLive: string;
    statusFallback: string;
    copyDigest: string;
    digestCopied: string;
    verifyTitle: string;
    verifyBody: string;
    iosLabel: string;
    nodeLabel: string;
    localLabel: string;
    statStorage: string;
    statIdentity: string;
    statSource: string;
  };

  architecture: {
    heading: string;
    sub: string;
    items: [LocalizedText, LocalizedText, LocalizedText];
  };

  engines: {
    heading: string;
    sub: string;
    filterAll: string;
    substrateLabel: string;
    quickMenuLabel: string;
    quickMenuHint: string;
    deterministicBadge: string;
    modelBadge: string;
    offlineBadge: string;
    openDetails: string;
    closeDetails: string;
    shelfCount: string;
    creditsUnit: string;
  };

  hardware: {
    heading: string;
    sub: string;
    columns: [string, string, string, string, string, string, string, string];
    modes: { lightweight: string; balanced: string; full: string };
    footnote: string;
    rules: [string, string, string];
  };

  install: {
    heading: string;
    sub: string;
    steps: [LocalizedText, LocalizedText, LocalizedText, LocalizedText];
    bridgeTitle: string;
    bridgeBody: string;
    requirementTitle: string;
    requirementBody: string;
    copyCommand: string;
    commandCopied: string;
  };

  faq: {
    heading: string;
    sub: string;
    items: QaPair[];
  };

  footer: {
    tagline: string;
    licenceHeading: string;
    licenceBody: string;
    trademarkHeading: string;
    trademarkBody: string;
    privacyHeading: string;
    privacyBody: string;
    appleNotice: string;
    sourceRepo: string;
    iosRepo: string;
    backToTop: string;
  };
}

export type Dictionaries = Record<LocaleCode, Dictionary>;

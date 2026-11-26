import type { RoutePath } from "../router";

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

/** One reported fault: what the reader sees, why it happens, what to do. */
export interface FaultItem {
  symptom: string;
  cause: string;
  fix: string;
}

/**
 * Site chrome only. Engine names, taglines, quick-menu labels, highlights, shelf
 * titles and the price chip are not here — they come from the official catalogs in
 * `src/data/enginesCatalog.ts`, so this file cannot drift from the apps. The same
 * rule holds for ports, model references and pairing strings, which live in
 * `src/data/nodeRuntime.ts` because they are wire values.
 */
export interface Dictionary {
  dir: "ltr";

  nav: {
    overview: string;
    node: string;
    features: string;
    install: string;
    security: string;
    troubleshooting: string;
    releases: string;
    download: string;
    openMenu: string;
    closeMenu: string;
    chooseLanguage: string;
  };

  /**
   * The other POPOPX portals. These are the project's own sites, not third parties:
   * nothing is loaded from them and no request is made to them, so a reader only
   * leaves this origin by clicking one.
   */
  ecosystem: {
    heading: string;
    body: string;
    chat: string;
    chatBody: string;
    botStudio: string;
    botStudioBody: string;
    serviceSuite: string;
    serviceSuiteBody: string;
  };

  /** Drives `<title>` and the section eyebrow of each route. */
  routes: Record<RoutePath, { eyebrow: string; title: string }>;

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

  overview: {
    splitHeading: string;
    splitSub: string;
    cloudTitle: string;
    cloudBody: string;
    macTitle: string;
    macBody: string;
    pathsHeading: string;
    paths: [LocalizedText, LocalizedText, LocalizedText, LocalizedText];
  };

  architecture: {
    heading: string;
    sub: string;
    items: [LocalizedText, LocalizedText, LocalizedText];
  };

  /**
   * The console preview card on `/`. Every number in it is derived in
   * `src/data/consolePreview.ts` from the node's own tier rules, and none of it comes from a
   * running machine, so the wording carries that: a label may name what the real console names,
   * but no string here may suggest the page is talking to anything.
   */
  dashboard: {
    /** Always visible on the card face, not on hover. */
    badge: string;
    heading: string;
    sub: string;
    machineLabel: string;
    machineHint: string;
    statusHeading: string;
    statusConnected: string;
    daemonRunning: string;
    loopbackNote: string;
    memHeading: string;
    memTotalLabel: string;
    memCeilingLabel: string;
    memMeshLabel: string;
    memHeadroomLabel: string;
    usageLabel: string;
    servicesHeading: string;
    /** Says what the two columns are: a catalog list and the fixed port table, not live state. */
    servicesNote: string;
    devicesHeading: string;
    deviceColumns: [string, string, string, string];
    devicesActive: string;
    revoke: string;
    revokedRow: string;
    neverSeen: string;
    disclaimer: string;
  };

  node: {
    heading: string;
    sub: string;
    points: [LocalizedText, LocalizedText, LocalizedText, LocalizedText];
    wireHeading: string;
    wireBody: string;
    wireSampleLabel: string;
    pairingHeading: string;
    pairingSub: string;
    pairingSteps: [LocalizedText, LocalizedText, LocalizedText];
    pairingFacts: {
      lifetime: string;
      singleUse: string;
      signature: string;
      delivery: string;
    };
    /**
     * The sealed `/i/v1/` envelope. The shape and every cryptographic fact come from
     * `src/data/edgeHub.ts`, which reads them out of `OpaquePairingCodec.swift`; the
     * dictionary only carries the labels and the explanation of what the envelope does
     * and does not promise.
     */
    sealedHeading: string;
    sealedSub: string;
    sealedShapeLabel: string;
    sealedFacts: {
      kdf: string;
      cipher: string;
      nonce: string;
      caps: string;
    };
    sealedBody: string;
    portsHeading: string;
    portsSub: string;
    portsColumns: [string, string, string, string, string];
    portsOwner: { node: string; tool: string; daemon: string };
    portsPurpose: { console: string; inference: string; control: string };
    portsFootnote: string;
  };

  /**
   * The source-line edge-hub bridges, shown on `/features`. Every limit and protocol name is in
   * `src/data/edgeHub.ts`; this block is only prose. The badge and status exist because
   * the bridges are on `main` but not yet in the signed v1.0.2 download.
   */
  hub: {
    badge: string;
    heading: string;
    sub: string;
    status: string;
    cards: [LocalizedText, LocalizedText, LocalizedText, LocalizedText];
    boundaryHeading: string;
    boundaryItems: [LocalizedText, LocalizedText, LocalizedText];
    footnote: string;
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
    plansHeading: string;
    plansSub: string;
    plansColumns: [string, string, string, string, string, string];
    heavyVideo: { local: string; mesh: string };
    plansFootnote: string;
  };

  install: {
    heading: string;
    sub: string;
    prereqsHeading: string;
    prereqNotes: {
      system: string;
      memory: string;
      disk: string;
      media: string;
      inference: string;
      bridge: string;
    };
    prereqRequired: { hard: string; wizard: string; optional: string };
    steps: [LocalizedText, LocalizedText, LocalizedText, LocalizedText, LocalizedText];
    buildHeading: string;
    buildBody: string;
    lifecycleHeading: string;
    lifecycle: [LocalizedText, LocalizedText, LocalizedText];
    bridgeTitle: string;
    bridgeBody: string;
    requirementTitle: string;
    requirementBody: string;
    /**
     * The integrity pair on `/install`. The signing claims are read off the published artifact
     * (`src/data/signing.ts` records the measurement and the recipe), and the digest copy must
     * keep agreeing with `verifyCommands`, which emits exactly two commands.
     */
    signHeading: string;
    signBody: string;
    containerTitle: string;
    containerBody: string;
    provenanceTitle: string;
    provenanceBody: string;
    digestHeading: string;
    digestBody: string;
    copyCommand: string;
    commandCopied: string;
  };

  security: {
    heading: string;
    sub: string;
    localHeading: string;
    localSub: string;
    localItems: [LocalizedText, LocalizedText, LocalizedText, LocalizedText];
    transitHeading: string;
    transitSub: string;
    transitItems: [LocalizedText, LocalizedText, LocalizedText, LocalizedText];
    keysHeading: string;
    keysBody: string;
    /** Explains one directory under the data root; keyed by `DataLocation.note`. */
    dataNote: {
      output: string;
      vault: string;
      pairing: string;
      weights: string;
      ledger: string;
      logs: string;
      config: string;
    };
    rootLabel: string;
    /**
     * The edge hub's boundary. The four items are the admission rule, the receipt, the
     * secret store and the data minimum — the parts of the source-line bridges that belong
     * on a privacy page rather than a feature list.
     */
    hubHeading: string;
    hubSub: string;
    hubItems: [LocalizedText, LocalizedText, LocalizedText, LocalizedText];
    controlHeading: string;
    controlSub: string;
    controls: [LocalizedText, LocalizedText, LocalizedText, LocalizedText];
    revokeHeading: string;
    revokeBody: string;
    limitsHeading: string;
    limitsBody: string;
  };

  troubleshooting: {
    heading: string;
    sub: string;
    columns: [string, string, string];
    items: FaultItem[];
    escalation: string;
  };

  releases: {
    heading: string;
    sub: string;
    assetsHeading: string;
    assetsColumns: [string, string, string];
    assetKinds: { dmg: string; sidecar: string; zip: string; sums: string };
    missingAsset: string;
    verifyHeading: string;
    verifyBody: string;
    verifySumsBody: string;
    verifySidecarBody: string;
    pipelineHeading: string;
    pipelineBody: string;
    supportedHeading: string;
    supportedItems: [string, string, string, string];
    roadmapHeading: string;
    roadmapSub: string;
    roadmap: [LocalizedText, LocalizedText, LocalizedText, LocalizedText];
    sourceHeading: string;
    sourceBody: string;
    licenceHeading: string;
    licenceBody: string;
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

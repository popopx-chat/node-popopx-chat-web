import type { Dictionary } from "../types";

export const nl: Dictionary = {
  dir: "ltr",

  nav: {
    engines: "Engines",
    architecture: "Architectuur",
    hardware: "Hardware",
    install: "Installatie",
    faq: "FAQ",
    github: "GitHub",
    download: "Download",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
    chooseLanguage: "Taal",
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Je Mac wordt",
    titleAccent: "de rekenlaag",
    subtitle:
      "POPOPX Mac Node draait de lokale compute en de deterministische uitvoering achter de tien Discover-engines van de POPOPX iOS-client. Geen cloud, geen account, geen telemetrie, end-to-end versleuteld.",
    ctaDownload: "Download de DMG",
    ctaSource: "Lees de broncode",
    releaseLabel: "Nieuwste release",
    sizeLabel: "Grootte",
    digestLabel: "SHA-256",
    statusFetching: "GitHub Releases wordt opgevraagd…",
    statusLive: "Live van GitHub Releases",
    statusFallback: "GitHub niet bereikbaar – toont de vastgezette release",
    copyDigest: "Controllesom kopiëren",
    digestCopied: "Controllesom gekopieerd",
    verifyTitle: "Verifieer voordat je opent",
    verifyBody:
      "Bewaar de .dmg en de bijbehorende .sha256-sidecar in dezelfde map en voer shasum -a 256 -c uit op die sidecar, niet op de schijfkopie. De sidecar bevat één controllesom en één relatieve bestandsnaam; het verwachte antwoord is POPOPX-Mac-Node-Universal.dmg: OK.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Je eigen hardware",
    statStorage: "Fysieke lokale opslag",
    statIdentity: "Geen account, geen ID",
    statSource: "Van begin tot eind AGPL-3.0",
  },

  architecture: {
    heading: "Drie garanties, geen enkele dienst ertussen",
    sub:
      "Het interessante aan deze architectuur is wat erin ontbreekt: geen accountservice, geen sleutelbewaring, geen analytics-endpoint, geen gehoste inferentie.",
    items: [
      {
        title: "Fysieke lokale opslag",
        body:
          "Elk artefact dat een engine maakt — de briefing, de clip met watermerk, het verzegelde archief, het ontcijferde rapport — wordt op je eigen SSD onder één data-root geschreven. Het staat buiten iCloud-sync en buiten elke gedeelde container, en de ledger-bestanden zijn met volledige bestandsbescherming geschreven, zodat ze in rust niet leesbaar zijn zodra de machine vergrendeld is.",
      },
      {
        title: "Geen account, geen ID",
        body:
          "Er is geen registratie, geen telefoonnummer, geen e-mailadres en geen apparaatidentificatie die je hoeft af te staan. De telefoon met de node koppelen is één scan van een QR-code, en de commando's die daarna binnenkomen reizen over je eigen popopx-chat-wachtrij, waarbij SMP en XFTP ze end-to-end overbrengen.",
      },
      {
        title: "AGPL-3.0 over de hele stack",
        body:
          "De tien engines, de SMP-gateway, de lokale webconsole, de GOP- en frequentiedomein-watermerken en de administratie van de rekenpunten zijn één broncodeboom onder AGPL-3.0-only. Er is geen gesloten kern: de code voor de credentials op basis van een blinde handtekening en het register met cryptografische parameters staan open in popopxmq.",
      },
    ],
  },

  engines: {
    heading: "Tien soevereine engines",
    sub:
      "Drie schappen en tien officiële serviceaccounts. Elke kaart hieronder drukt zijn eigen prijs af: een vast aantal rekenpunten voor één cyclus van 30 dagen of, voor het Edge Compute Mesh, afrekening per taak met een protocolvergoeding van 10%. Elk van hen draait op hardware die je al bezit.",
    filterAll: "Alles",
    substrateLabel: "Substraat",
    quickMenuLabel: "iOS-snelmenu",
    quickMenuHint:
      "Elke knop stuurt ::popopx_sys::NODE_CMD::<service>::<action>::{} naar je gekoppelde node.",
    deterministicBadge: "Deterministisch — geen model in het pad",
    modelBadge: "Lokaal model in de lus",
    offlineBadge: "Draait zonder lokale modelgewichten",
    openDetails: "Openen",
    closeDetails: "Sluiten",
    shelfCount: "engines",
    creditsUnit: "Rekenpunten",
  },

  hardware: {
    heading: "Het niveau volgt het geheugen",
    sub:
      "Bij het starten leest de node sysctl uit — model van de chip, aantal CPU-kernen, fysiek unified memory, vrije SSD — en kiest automatisch een niveau. Verplaats je de app naar een andere Mac, dan verhuist het niveau mee; er is niets om opnieuw in te stellen.",
    columns: [
      "Unified memory",
      "Gebruikelijke chip",
      "Textmodel",
      "Videomodel",
      "Eerste token*",
      "Doorvoer*",
      "Piek RAM-gebruik*",
      "Modus",
    ],
    modes: {
      lightweight: "Lichtgewicht inferentie",
      balanced: "Gebalanceerd",
      full: "Volledige gewichten",
    },
    footnote:
      "* Deze drie kolommen zijn engineering-schattingen, geen laboratoriummetingen. Ze komen van de door de geheugenbandbreedte begrensde decode van een dicht 27B-model, plus een afleiding van de kwantiseringsverhouding uit de gewichtsvoetafdruk van LTX-2.5. Aanhoudende thermiek, chipgeneratie, achtergrondbelasting, cliplengte en gelijktijdige taken verschuiven de echte getallen met twee tot drie keer. Gebruik ze om een niveau te kiezen, niet als prestatiebelofte.",
    rules: [
      "96 GB en meer — de oorspronkelijke BF16-gewichten van LTX-2.5 met Qwen3.8-27B op Q8_0.",
      "48 GB tot 95 GB — LTX-2.5 in MLX gekwantiseerd tot 8-bit, met Qwen3.8-27B op Q4_K_M.",
      "Onder 48 GB — lichtgewicht inferentie; zwaar videowerk wordt aan het Edge Compute Mesh aangeboden in plaats van lokaal gerenderd.",
    ],
  },

  install: {
    heading: "Drie minuten, dan is hij van jou",
    sub:
      "De node heeft geen installatieprogramma, geen daemon-account en niets om te registreren. Het is één menubalk-app die aan loopback bindt.",
    steps: [
      {
        title: "De DMG verifiëren en openen",
        body:
          "Haal POPOPX-Mac-Node-Universal.dmg en de bijbehorende .sha256 uit Releases, allebei in dezelfde map, en controleer ze voordat je iets opent: shasum -a 256 -c POPOPX-Mac-Node-Universal.dmg.sha256 moet OK afdrukken. Sleep de app naar /Applications.",
      },
      {
        title: "De lokale engines uitrollen",
        body:
          "Open het menubalk-item en start de console-wizard. Stap één neemt het profiel af van de chip, het unified memory en de SSD, haalt de Qwen3.8-kwantisering op die bij het niveau past, initialiseert de ltx2-werkruimte en streamt het installatielogboek terwijl het draait naar de pagina.",
      },
      {
        title: "De iPhone koppelen",
        body:
          "Scan de koppelings-QR uit de console met de POPOPX iOS-client. Die ene scan legt de SMP-brug; daarna praten de Discover-serviceaccounts alleen nog met jouw node en met niets anders.",
      },
      {
        title: "De engines aanzetten",
        body:
          "Tien schakelaars. Een engine draait alleen als je hem inschakelt, en de vier die geen lokaal model nodig hebben — de fysieke vergrendeling, de tijdsvergrendelde kluis, de watermerktracer en de lezer van labrapporten — werken voordat er ook maar één gewicht gedownload is. FFmpeg wordt nog steeds aangeroepen; de modelstack niet.",
      },
    ],
    bridgeTitle: "Bedien de engines vanuit je eigen script",
    bridgeBody:
      "De map integrations bevat een TypeScript-brug en twee agent-adapters. Er wordt geen nieuwe poort door geopend en geen tweede daemon door gestart: de brug hergebruikt de console op 127.0.0.1:18920 en het eenmalige token per proces, en ze stuurt dezelfde NODE_CMD-signaalering als de telefoon. De vergrendelingsactie is dubbele opt-in — allowLockdown moet true zijn en PPX_BRIDGE_SECRET moet minstens zestien tekens lang zijn — en een weigering wordt in het plugin-logboek geschreven zodat je kunt zien dat ze heeft plaatsgevonden.",
    requirementTitle: "Eén eerlijke voorwaarde",
    requirementBody:
      "Stap twee van de wizard van de node zelf, de koppelings-QR en de SMP-brug hebben alle drie op je PATH een popopx-chat-chatdaemon nodig. De node test precies één uitvoerbaar bestand en kent geen terugvalroute, want een upstream-build antwoordt wel op een versieregel maar laat daarna elk commando falen. De tien engines zelf hebben hem niet nodig.",
    copyCommand: "Commando kopiëren",
    commandCopied: "Gekopieerd",
  },

  faq: {
    heading: "Vragen die mensen echt stellen",
    sub: "Korte antwoorden, met het deel dat we niet kunnen garanderen gewoon zichtbaar gelaten.",
    items: [
      {
        q: "Draait hier iets van op jullie servers?",
        a: "Nee. De commando's voor de tien engines komen van de iOS-client over je eigen popopx-chat-wachtrij, end-to-end versleuteld, en de inferentie, het renderen, de opslag en de fysieke uitvoering gebeuren allemaal op jouw Mac. Geen enkele stap heeft onze infrastructuur nodig, en in de node is er geen codepad dat een gehoste inferentie-API bereikt — de modelclient is vastgezet op 127.0.0.1.",
      },
      {
        q: "Wat moet ik registreren?",
        a: "Niets. Er is nergens in het product een account, een telefoonnummer, een e-mailadres of een advertentie-identifier. De telefoon met de node koppelen is één scan van een QR-code, de webconsole bindt uitsluitend aan loopback, draait bij elke start een nieuw willekeurig token en is vanaf de rest van je LAN niet bereikbaar.",
      },
      {
        q: "Waarom AGPL-3.0, en wat verplicht artikel 13 je?",
        a: "Elk broncodebestand in de node is AGPL-3.0-only, wat betekent dat je het vrij mag uitvoeren, bestuderen, bewerken en herverdelen. Artikel 13 voegt de netwerkbepaling toe: als je een aangepaste node als dienst aan andere mensen aanbiedt, moet jij hen je bijbehorende broncode aanbieden. Dat zijn de volledige kosten voor naleving, en het is de reden dat dit project vrij te draaien is.",
      },
      {
        q: "Blijven de watermerken of het protocol voor de rekenpunten gesloten?",
        a: "Nee, en die bewering is degene waarvan we het meest verwachten dat iemand haar naloopt. De code voor de BBS+- en BLS12-381-credentials, de rechtenlogica en het register met cryptografische parameters staan open in popopxmq; de GOP- en frequentiedomein-watermerken en hun blinde decoder staan in deze repository. Wat de commerciële lijn verkoopt zijn het datacenter, de storingsdienst, het distributiekanaal en het compliance-werk — nooit een drempel in de broncode.",
      },
      {
        q: "Mag ik een fork onder de naam en het logo van POPOPX uitbrengen?",
        a: "Nee. De merken worden door AGPL-3.0 niet in licentie gegeven en door geen enkele ondersteuningstrant. Het beleid vraagt om het ene middel dat een fork niets kost: hernoem de software, vervang de merken, houd de code. Voor merkgebruik is een aparte schriftelijke licentie nodig.",
      },
      {
        q: "Hoeveel moet ik geloven van de getallen in de hardwaretabel?",
        a: "Zo veel als de zin eronder zegt. Het zijn grove hoofdrekeningen, geen metingen op jouw machine, en de echte doorvoer verschuift met thermiek en belasting met twee tot drie keer. Versie 1.1 van de node vervangt ze door token- en watt-meting per engine op de machine die je daadwerkelijk gebruikt.",
      },
      {
        q: "Welke machines worden ondersteund?",
        a: "macOS 14 of nieuwer op Apple Silicon. De niveauladder, Metal en MLX gaan allemaal uit van unified memory, en MLX draait niet op Intel, dus een Intel-Mac is geen host waar dit project zich op richt, ook al bevat de universal DMG nog steeds een x86_64-slice. De app zelf linkt geen enkele bibliotheek van derden: alleen Apple-frameworks. Wat de app aanstuurt staat bewust los daarvan — Ollama, FFmpeg en de LTX-2.5-gewichten zijn lokale tools die de engines aanroepen, en elke engine vermeldt welke hij nodig heeft.",
      },
    ],
  },

  footer: {
    tagline: "Lokale rekenkracht voor het POPOPX-ecosysteem. Jij draait het, jij leest het.",
    licenceHeading: "Licentie",
    licenceBody:
      "De broncode van de node staat onder AGPL-3.0-only. De grafische assets die dit project heeft gemaakt, staan onder AGPL-3.0-only of, naar jouw keuze, onder CC0-1.0.",
    trademarkHeading: "Merk",
    trademarkBody:
      "POPOPX, POPOPX Chat en het POPOPX-logo zijn merken van het POPOPX Chat-project. Het pictogram dat op deze site wordt gebruikt, is het onbewerkte applicatiepictogram van POPOPX iOS. Zie TRADEMARK-POPOPX.md in de popopx-chat-repository voor het beleid.",
    privacyHeading: "Deze pagina",
    privacyBody:
      "Geen analytics, geen cookies, geen fingerprinting, geen scripts van derden en geen extern CDN. Het enige uitgaande verzoek dat deze pagina kan doen, gaat naar api.github.com voor de lijst met release-assets, en hij valt terug op een vastgezette koppeling als die aanroep faalt.",
    appleNotice:
      "Niet gelieerd aan Apple. macOS, iOS, Apple Silicon en Metal zijn handelsmerken van Apple Inc.",
    sourceRepo: "Broncode Mac Node",
    iosRepo: "Broncode iOS-client",
    backToTop: "Terug naar boven",
  },
};

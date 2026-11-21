import type { Dictionary } from "../types";

export const de: Dictionary = {
  dir: "ltr",

  nav: {
    engines: "Engines",
    architecture: "Architektur",
    hardware: "Hardware",
    install: "Installation",
    faq: "FAQ",
    github: "GitHub",
    download: "Download",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    chooseLanguage: "Sprache",
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Ihr Mac wird",
    titleAccent: "die Rechenschicht",
    subtitle:
      "POPOPX Mac Node übernimmt die lokale Berechnung und die deterministische Ausführung hinter den zehn Discover-Engines des POPOPX iOS-Clients. Keine Cloud, kein Konto, keine Telemetrie, Ende-zu-Ende verschlüsselt.",
    ctaDownload: "DMG herunterladen",
    ctaSource: "Quellcode lesen",
    releaseLabel: "Neueste Version",
    sizeLabel: "Größe",
    digestLabel: "SHA-256",
    statusFetching: "Frage GitHub Releases ab…",
    statusLive: "Live von GitHub Releases",
    statusFallback: "GitHub nicht erreichbar – die fest hinterlegte Version wird gezeigt",
    copyDigest: "Prüfsumme kopieren",
    digestCopied: "Prüfsumme kopiert",
    verifyTitle: "Prüfen, bevor Sie sie öffnen",
    verifyBody:
      "Speichern Sie die .dmg und ihre .sha256-Nebendatei im selben Ordner und führen Sie shasum -a 256 -c auf der Nebendatei aus, nicht auf dem Image. Sie enthält genau eine Prüfsumme und einen relativen Dateinamen; die erwartete Antwort ist POPOPX-Mac-Node-Universal.dmg: OK.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Ihre eigene Hardware",
    statStorage: "Physischer lokaler Speicher",
    statIdentity: "Kein Konto, keine ID",
    statSource: "Durchgängig AGPL-3.0",
  },

  architecture: {
    heading: "Drei Zusagen, kein Dienst dazwischen",
    sub:
      "Das Entscheidende an dieser Architektur ist, was darin fehlt: kein Kontodienst, keine Schlüsselhinterlegung, kein Analytics-Endpunkt, keine gehostete Inferenz.",
    items: [
      {
        title: "Physischer lokaler Speicher",
        body:
          "Jedes Artefakt, das eine Engine erzeugt – das Briefing, der Clip mit Wasserzeichen, das versiegelte Archiv, der entschlüsselte Bericht – wird auf Ihrer eigenen SSD unter einem einzigen Datenstammverzeichnis geschrieben. Es liegt außerhalb der iCloud-Synchronisation und außerhalb jedes geteilten Containers, und die Ledger werden mit vollständigem Dateischutz geschrieben, sodass sie im Ruhezustand nicht lesbar sind, sobald der Rechner gesperrt ist.",
      },
      {
        title: "Kein Konto, keine ID",
        body:
          "Es gibt keine Registrierung, keine Telefonnummer, keine E-Mail-Adresse und keine Geräte-Kennung, die Sie herausgeben müssen. Das Telefon mit dem Node zu koppeln ist ein einziger QR-Scan, und die Befehle, die danach eintreffen, laufen über Ihre eigene popopx-chat-Warteschlange, wobei SMP und XFTP sie Ende-zu-Ende übertragen.",
      },
      {
        title: "AGPL-3.0 im gesamten Stack",
        body:
          "Die zehn Engines, das SMP-Gateway, die lokale Web-Konsole, die Wasserzeichen im GOP- und im Frequenzbereich und das Rechenpunkte-Ledger bilden einen einzigen Quellcode-Baum mit AGPL-3.0-only. Es gibt keinen geschlossenen Kern: Der Code für die Blind-Signatur-Credentials und das Kryptografie-Register liegen offen in popopxmq.",
      },
    ],
  },

  engines: {
    heading: "Zehn souveräne Engines",
    sub:
      "Drei Bereiche und zehn offizielle Servicekonten. Jede Karte unten nennt ihren eigenen Preis: eine feste Anzahl Rechenpunkte für einen 30-Tage-Zyklus, beim Edge Compute Mesh dagegen die Abrechnung pro Auftrag mit 10 % Protokollgebühr. Jede einzelne davon läuft auf Hardware, die Sie bereits besitzen.",
    filterAll: "Alle",
    substrateLabel: "Substrat",
    quickMenuLabel: "iOS-Schnellmenü",
    quickMenuHint:
      "Jede Schaltfläche sendt ::popopx_sys::NODE_CMD::<service>::<action>::{} an Ihren gekoppelten Node.",
    deterministicBadge: "Deterministisch – kein Modell im Pfad",
    modelBadge: "Lokales Modell in der Schleife",
    offlineBadge: "Läuft ohne lokale Modellgewichte",
    openDetails: "Öffnen",
    closeDetails: "Schließen",
    shelfCount: "Engines",
    creditsUnit: "Rechenpunkte",
  },

  hardware: {
    heading: "Die Ausbaustufe folgt dem Speicher",
    sub:
      "Beim Start liest der Node sysctl aus – Chipmodell, Anzahl der CPU-Kerne, Größe des Unified Memory, freier SSD – und wählt daraus automatisch die Ausbaustufe. Wenn Sie die App auf einen anderen Mac umziehen, wandert die Ausbaustufe mit; nichts muss neu konfiguriert werden.",
    columns: [
      "Unified Memory",
      "Üblicher Chip",
      "Textmodell",
      "Videomodell",
      "Erstes Token*",
      "Durchsatz*",
      "Max. RAM-Belegung*",
      "Modus",
    ],
    modes: {
      lightweight: "Leichtgewichtige Inferenz",
      balanced: "Ausgewogen",
      full: "Volle Gewichte",
    },
    footnote:
      "* Diese drei Spalten sind Ingenieursschätzungen, keine Labormessungen. Sie entstehen aus dem speicherbandbreitengebundenen Decode eines dichten 27B-Modells plus einer Hochrechnung des Quantisierungsverhältnisses beim Gewichts-Footprint von LTX-2.5. Dauerhafte Thermik, Chipgeneration, Hintergrundlast, Cliplänge und parallele Aufträge verschieben die echten Zahlen um das Zwei- bis Dreifache. Nutzen Sie sie, um eine Ausbaustufe zu wählen, nicht als Performanceversprechen.",
    rules: [
      "Ab 96 GB – LTX-2.5 mit Original-BF16-Gewichten und Qwen3.8-27B in Q8_0.",
      "48 GB bis 95 GB – LTX-2.5 als MLX-Modell mit 8-bit quantisiert, dazu Qwen3.8-27B in Q4_K_M.",
      "Unter 48 GB – leichtgewichtige Inferenz; rechenintensive Videoarbeit wird stattdessen dem Edge Compute Mesh angeboten und nicht lokal gerendert.",
    ],
  },

  install: {
    heading: "Drei Minuten, dann gehört er Ihnen",
    sub:
      "Der Node hat keinen Installer, keinen Daemon-Account und nichts, was man registrieren müsste. Es ist eine einzige Menüleisten-App, die an loopback bindet.",
    steps: [
      {
        title: "DMG prüfen und öffnen",
        body:
          "Nehmen Sie POPOPX-Mac-Node-Universal.dmg und die zugehörige .sha256 aus Releases, beide in denselben Ordner, und prüfen Sie sie, bevor Sie irgendetwas öffnen: shasum -a 256 -c POPOPX-Mac-Node-Universal.dmg.sha256 muss OK ausgeben. Ziehen Sie die App in /Applications.",
      },
      {
        title: "Die lokalen Engines ausrollen",
        body:
          "Öffnen Sie den Menüleisten-Eintrag und starten Sie den Konsolen-Assistenten. Schritt eins liest das Profil von Chip, Unified Memory und SSD, lädt die zur Ausbaustufe passende Qwen3.8-Quantisierung, initialisiert den ltx2-Workspace und streamt das Installationsprotokoll laufend auf die Seite.",
      },
      {
        title: "Das iPhone koppeln",
        body:
          "Scannen Sie den Pairing-QR-Code aus der Konsole mit dem POPOPX iOS-Client. Dieser eine Scan richtet die SMP-Brücke ein; von da an sprechen die Discover-Servicekonten nur noch Ihren Node an und sonst nichts.",
      },
      {
        title: "Die Engines einschalten",
        body:
          "Zehn Schalter. Eine Engine läuft nur, wenn Sie sie aktivieren, und die vier, die ohne lokales Modell auskommen – der physische Lockdown, der Tresor mit Zeitsperre, der Wasserzeichen-Tracer, der Leser von Laborberichten – funktionieren, bevor ein einziges Gewicht heruntergeladen wurde. FFmpeg wird weiterhin aufgerufen; der Modell-Stack nicht.",
      },
    ],
    bridgeTitle: "Steuern Sie die Engines aus Ihrem eigenen Skript",
    bridgeBody:
      "Der Ordner integrations enthält eine TypeScript-Brücke und zwei Agent-Adapter. Er öffnet keinen neuen Port und startet keinen zweiten Daemon: Er nutzt die Konsole auf 127.0.0.1:18920 und das einmalige Token pro Prozess weiter und sendet dieselbe NODE_CMD-Signalisierung, die auch das Telefon sendet. Die Lockdown-Aktion ist über ein doppeltes Opt-in abgesichert – allowLockdown muss true sein und PPX_BRIDGE_SECRET muss mindestens sechzehn Zeichen lang sein –, und eine Ablehnung wird in das Plugin-Protokoll geschrieben, damit Sie sehen, dass sie passiert ist.",
    requirementTitle: "Eine ehrliche Voraussetzung",
    requirementBody:
      "Schritt 2 des Assistenten des Nodes selbst, der Pairing-QR-Code und die SMP-Brücke brauchen einen popopx-chat-Chat-Daemon im PATH. Der Node prüft genau eine ausführbare Datei und hat keinen Fallback, weil ein Upstream-Build zwar eine Versionszeile beantwortet, danach aber jeden Befehl scheitern lässt. Die zehn Engines selbst brauchen ihn nicht.",
    copyCommand: "Befehl kopieren",
    commandCopied: "Kopiert",
  },

  faq: {
    heading: "Fragen, die wirklich gestellt werden",
    sub: "Kurze Antworten – und der Teil, für den wir keine Garantie übernehmen können, bleibt sichtbar.",
    items: [
      {
        q: "Läuft davon irgendetwas auf Ihren Servern?",
        a: "Nein. Die Befehle für die zehn Engines kommen von dem iOS-Client über Ihre eigene popopx-chat-Warteschlange, Ende-zu-Ende verschlüsselt, und Inferenz, Rendering, Speicher und physische Ausführung passieren alle auf Ihrem Mac. Kein einziger Schritt braucht unsere Infrastruktur, und im Node gibt es keinen Code-Pfad, der eine gehostete Inferenz-API erreicht – der Modell-Client ist auf 127.0.0.1 festgelegt.",
      },
      {
        q: "Was muss ich registrieren?",
        a: "Nichts. Es gibt nirgends im Produkt ein Konto, eine Telefonnummer, eine E-Mail-Adresse oder eine Werbe-ID. Das Telefon mit dem Node zu koppeln ist ein einziger QR-Scan, die Web-Konsole bindet ausschließlich an loopback, dreht bei jedem Start ein zufälliges Token und ist aus dem Rest Ihres LAN nicht erreichbar.",
      },
      {
        q: "Warum AGPL-3.0, und wozu verpflichtet Abschnitt 13 mich?",
        a: "Jede Quelldatei im Node ist AGPL-3.0-only, das heißt, Sie dürfen sie frei ausführen, studieren, verändern und weitergeben. Abschnitt 13 ergänzt die Netzwerkklausel: Wenn Sie einen veränderten Node als Dienst für andere anbieten, müssen auch Sie ihnen den zugehörigen Quellcode anbieten. Das sind die gesamten Compliance-Kosten, und deshalb kann das Projekt frei lauffähig sein.",
      },
      {
        q: "Bleiben die Wasserzeichen oder das Rechenpunkte-Protokoll geschlossen?",
        a: "Nein, und gerade mit dieser Aussage rechnet man am ehesten. Der Code für die BBS+- und BLS12-381-Credentials, die Berechtigungslogik und das Register der kryptografischen Parameter sind in popopxmq offen; die Wasserzeichen im GOP- und im Frequenzbereich samt ihrem Blind-Dekoder liegen in diesem Repository. Was die kommerzielle Spur verkauft, sind das Rechenzentrum, den Bereitschaftsdienst, den Vertriebskanal und die Compliance-Papiere – niemals eine Quellcode-Schranke.",
      },
      {
        q: "Darf ich einen Fork unter dem Namen und dem Logo POPOPX ausliefern?",
        a: "Nein. Die Marken sind durch AGPL-3.0 nicht in Lizenz gegeben und auch durch keine Unterstützungsstufe zu bekommen. Die Richtlinie bittet um das eine Mittel, das einen Fork nichts kostet: benennen Sie die Software um, ersetzen Sie die Marken, behalten Sie den Code. Für die Markennutzung braucht es eine separate schriftliche Lizenz.",
      },
      {
        q: "Wie viel sollte ich den Zahlen in der Hardware-Tabelle glauben?",
        a: "So viel, wie der Satz darunter sagt. Es sind überschlägige Größenordnungen, keine Messungen an Ihrem Rechner, und der echte Durchsatz verschiebt sich mit Thermik und Last um das Zwei- bis Dreifache. Version 1.1 des Nodes ersetzt sie durch Token- und Watt-Werte pro Engine, gemessen auf dem Rechner, den Sie tatsächlich benutzen.",
      },
      {
        q: "Welche Rechner werden unterstützt?",
        a: "macOS 14 oder neuer auf Apple Silicon. Die Skala der Ausbaustufen, Metal und MLX gehen durchweg von Unified Memory aus, und MLX läuft nicht auf Intel, deshalb ist ein Intel-Mac kein Host, den dieses Projekt anstrebt, auch wenn das Universal-DMG weiterhin einen x86_64-Slice enthält. Die App selbst bindet keine Bibliothek von Dritten ein: ausschließlich Apple-Frameworks. Was sie ansteuert, ist bewusst getrennt davon – Ollama, FFmpeg und die LTX-2.5-Gewichte sind lokale Werkzeuge, die die Engines aufrufen, und jede Engine gibt an, welche sie braucht.",
      },
    ],
  },

  footer: {
    tagline: "Lokale Rechenleistung für das POPOPX-Ökosystem. Sie führen sie aus, Sie lesen sie nach.",
    licenceHeading: "Lizenz",
    licenceBody:
      "Der Quellcode des Nodes steht unter AGPL-3.0-only. Die grafischen Assets, die dieses Projekt erstellt hat, stehen unter AGPL-3.0-only oder, nach Ihrer Wahl, unter CC0-1.0.",
    trademarkHeading: "Marke",
    trademarkBody:
      "POPOPX, POPOPX Chat und das POPOPX-Logo sind Marken des POPOPX Chat-Projekts. Das auf dieser Website verwendete Icon ist das unveränderte Anwendungssymbol von POPOPX iOS. Die Richtlinie steht in TRADEMARK-POPOPX.md im Repository popopx-chat.",
    privacyHeading: "Diese Seite",
    privacyBody:
      "Keine Analytik, keine Cookies, kein Fingerprinting, keine Skripte von Dritten und kein externes CDN. Die einzige ausgehende Anfrage, die diese Seite überhaupt machen kann, geht an api.github.com für die Liste der Release-Assets, und wenn dieser Aufruf fehlschlägt, fällt sie auf einen fest hinterlegten Link zurück.",
    appleNotice:
      "Keine Verbindung zu Apple. macOS, iOS, Apple Silicon und Metal sind Marken der Apple Inc.",
    sourceRepo: "Quellcode Mac Node",
    iosRepo: "Quellcode iOS-Client",
    backToTop: "Zurück nach oben",
  },
};

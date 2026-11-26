import type { Dictionary } from "../types";

export const de: Dictionary = {
  dir: "ltr",

  nav: {
    overview: "Übersicht",
    node: "Was ein Node ist",
    features: "Fähigkeiten",
    install: "Installation & Setup",
    security: "Privatsphäre & Kontrolle",
    troubleshooting: "Fehlerbehebung",
    releases: "Releases & GitHub",
    download: "Node holen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    chooseLanguage: "Sprache",
  },

  ecosystem: {
    heading: "Der Rest von POPOPX",
    body:
      "Drei Portale, ein Projekt, und alle gehören uns. Nichts auf dieser Seite lädt etwas von ihnen, und an sie wird nie eine Anfrage gestellt: Sie verlassen node.popopx.chat nur, wenn Sie selbst klicken.",
    chat: "POPOPX Chat",
    chatBody:
      "Das Nachrichtennetzwerk selbst – Ende-zu-Ende, ohne globale ID, und mit der Warteschlange, der Ihr Node zuhört.",
    botStudio: "Bot Studio",
    botStudioBody:
      "Hier werden die Servicekonten hinter den zehn Engines geschrieben und gehostet, auf einem Server, den Sie kontrollieren.",
    serviceSuite: "Servicekonten",
    serviceSuiteBody:
      "Das Ökosystem nullwissens-verschlüsselter Kanäle, mit dem diese Engines sprechen.",
  },

  routes: {
    "/": { eyebrow: "ÜBERSICHT", title: "POPOPX Mac Node – Ihr eigener Mac führt die zehn Engines aus" },
    "/node": { eyebrow: "WAS IST EIN NODE", title: "Was ein Node ist und was er nicht ist – POPOPX Mac Node" },
    "/features": { eyebrow: "FÄHIGKEITEN", title: "Zehn lokale Engines und die Hardware, die sie ausführt – POPOPX Mac Node" },
    "/install": { eyebrow: "INSTALLATION & SETUP", title: "Installieren, koppeln, aktualisieren, sichern, entfernen – POPOPX Mac Node" },
    "/security": { eyebrow: "PRIVATSPHÄRE & KONTROLLE", title: "Was auf Ihrer Festplatte bleibt und wie Sie es stoppen – POPOPX Mac Node" },
    "/troubleshooting": { eyebrow: "FEHLERBEHEBUNG", title: "Ports, Firewall und Grenzen des Speichers – POPOPX Mac Node" },
    "/releases": { eyebrow: "RELEASES & QUELLCODE", title: "Releases, Prüfsummen und der ganze Quellcode-Baum – POPOPX Mac Node" },
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Ihr Gerät. Ihr Node.",
    titleAccent: "Ihre Kontrolle.",
    subtitle:
      "POPOPX Mac Node ist die Edge des Netzwerks, die Ihnen gehört. Er führt die Engines für lokale Modelle, Medien und Dateien hinter den zehn Discover-Diensten auf Ihrem eigenen Mac aus, neben POPOPX Chat und Bot Studio. Das Netzwerk relayt Ihre verschlüsselten Nachrichten; die Inferenz, das Rendering, das versiegelte Archiv und die Geheimnisse bleiben auf Hardware, die Sie gekauft haben.",
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
      "Speichern Sie das Image und die Prüfsummendatei des Releases in denselben Ordner und prüfen Sie beide, bevor Sie irgendetwas öffnen. Das Format dieser Datei ist von Release zu Release verschieden – neuere Releases veröffentlichen ein SHA256SUMS.txt-Manifest, ältere eine einzelne .sha256 pro Asset –, darum stehen unter „Releases & GitHub“ die zwei exakten Befehle für das Release, das Sie sich gerade ansehen.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Ihre eigene Hardware",
    statStorage: "Artefakte auf Ihrer eigenen SSD",
    statIdentity: "Kein Konto, keine ID",
    statSource: "Durchgängig AGPL-3.0",
  },

  overview: {
    splitHeading: "Das Netzwerk koordiniert. Ihr Rechner führt aus.",
    splitSub:
      "Das ist die ganze Idee, und sie lohnt sich wörtlich auszusprechen, weil die übliche Lesart eines Produkts wie diesem umgekehrt ist: Die Cloud macht die Arbeit nicht, und Ihr Mac ist kein Thin Client. Jede Seite übernimmt genau den Teil, den sie übernehmen soll.",
    cloudTitle: "Was das Netzwerk trägt",
    cloudBody:
      "SMP-Relays und XFTP-Speicher bewegen Ihre Nachrichten und Dateien Ende-zu-Ende zwischen Ihren eigenen Geräten, und die zehn Discover-Servicekonten senden je ein Signal. Ein Relay sieht Chiffretext und Routing-Metadaten. Es erhält niemals ein Modell, einen Prompt, ein Bild oder einen Dateinamen, und es führt keinen einzigen Teil einer Engine aus.",
    macTitle: "Was Ihr Mac tut",
    macBody:
      "Der Node nimmt dieses Signal und erledigt die Arbeit auf dem Rechner vor Ihnen: quantisierte Inferenz über Ollama auf loopback, LTX-2.5-Rendering über MLX, FFmpeg und GOP-Wasserzeichen, CryptoKit-Versiegelung und Hashketten-Tresore, diskutil und AppKit für die physischen Vorgänge. Dann schreibt er das Ergebnis auf Ihre eigene Festplatte.",
    pathsHeading: "Fangen Sie dort an, wo Sie wirklich stehen",
    paths: [
      {
        title: "Die Aufteilung verstehen",
        body:
          "Was ein Node ist, auf welcher einen Zeile er lauscht, wie ein Telefon die Erlaubnis bekommt, ihn zu steuern, und welche Ports beteiligt sind.",
      },
      {
        title: "Auf einen Mac bringen",
        body:
          "Voraussetzungen, das geprüfte DMG, Build aus dem Quellcode, die erste Koppelung, Upgrades, der Umzug auf eine andere Maschine und das vollständige Entfernen.",
      },
      {
        title: "Prüfen, was hinausgeht",
        body:
          "Ein Verzeichnis-für-Verzeichnis-Bericht über das Datenstammverzeichnis, was an Ihr Telefon zurückgesendet wird, wo die Schlüssel liegen und wie Sie stoppen oder widerrufen.",
      },
      {
        title: "Reparieren, was kaputt ist",
        body:
          "Die Fehler, die tatsächlich passieren: ein bereits gebundener Port, ein Modell, das nie antwortete, übersprungene Gewichte, ein abgelaufener Code.",
      },
    ],
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

  dashboard: {
    badge: "UI Preview – Designmockup der Oberfläche, kein Live-Status eines Nodes",
    heading: "Was die Konsole zeigt, wenn der Node läuft",
    sub:
      "Die App trägt genau eine lokale Web-Konsole, und dies ist ein Bild ihres Statusbildschirms: die Maschine, die sie vorgefunden hat, das Unified Memory, dessen Reservierung sie beschlossen hat, die Engines, die sie auf Bitte ausführen kann, und die Telefone, die sie eingelassen hat. Das Layout, die Spaltennamen und die Arithmetik stammen von dem ausgelieferten Produkt. Nichts hier ist von einem laufenden Prozess abgelesen.",
    machineLabel: "Beispielmaschine",
    machineHint:
      "Der Node liest Chip, Kernanzahl und physischen Speicher beim Start aus sysctl. Ihren physischen Speicher kann ein Browser nicht lesen – navigator.deviceMemory ist in jeder Implementierung auf 8 GB gedeckelt –, also wählen Sie eine dieser Konfigurationen, und die Zahlen unten rechnen sich neu.",
    statusHeading: "Status",
    statusConnected: "Verbunden",
    daemonRunning: "Daemon läuft",
    loopbackNote:
      "Die Konsole bindet 127.0.0.1 und weist ein Binden auf 0.0.0.0, auf einer LAN-Adresse oder auf einem Hostnamen ab, darum ist sie nur von diesem Mac aus erreichbar.",
    memHeading: "Zuteilung des Unified Memory",
    memTotalLabel: "Unified Memory",
    memCeilingLabel: "Belegungsobergrenze",
    memMeshLabel: "Mesh-Obergrenze",
    memHeadroomLabel: "Für die Desktop-Sitzung zurückbehalten",
    usageLabel: "Arbeitsmenge der Engines (Schätzung)",
    servicesHeading: "Lokale Engines und Dienste",
    servicesNote:
      "Links die zehn Engines und die drei Bereiche, unter denen sie ausgeliefert werden – derselbe Katalog, den das Menü auf dem Telefon ausdruckt. Rechts die drei Adressen, die der Node kennt: die eine, auf der er lauscht, und die zwei, die er als Client anruft. Beides sind feste Listen, keine Messwerte, und eine Engine läuft nur, wenn Sie sie aktivieren.",
    devicesHeading: "Gekoppelte Geräte",
    deviceColumns: ["Gerät", "Gekoppelt", "Zuletzt gesehen", "Widerrufen"],
    devicesActive: "aktiv",
    revoke: "Widerrufen",
    revokedRow: "widerrufen",
    neverSeen: "nie gesehen",
    disclaimer:
      "Diese Karte ist ein Bild, kein Client. Sie öffnet keine Verbindung und liest keinen Prozess: Eine Beispielmaschine zu wählen, wendet nur die veröffentlichte Stufenregel des Nodes in Ihrem eigenen Browser an, und „Widerrufen“ ändert bloß die Zeile, die Sie gerade ansehen. In der echten Konsole markiert dieser Knopf das Gerät als widerrufen, verwirft von da an seine Befehle und baut die Chat-Verbindung nicht ab – „Privatsphäre & Kontrolle“ sagt genau, was er nicht tut.",
  },

  node: {
    heading: "Ein Node ist ein Rechner, den Sie schon besitzen",
    sub:
      "Keine Region, kein Instance-Typ, kein Abonnement-Level. Ein Mac, der die Teile von POPOPX ausführt, die nicht irgendwoanders passieren sollten – und das Einzige, dem Sie vertrauen müssen, ist die Maschine, der Sie Ihre Dateien längst anvertrauen.",
    points: [
      {
        title: "Die heikle Arbeit verlässt den Rechner nie",
        body:
          "Medizinische Berichte werden von Vision auf Ihrem eigenen Rechner gelesen. Rohmaterial wird lokal geschnitten und mit einem Wasserzeichen versehen. Die Tresor-Versiegelung und das versiegelte Archiv sind CryptoKit-Operationen auf Ihrer eigenen Festplatte. In keinem dieser Pfade gibt es einen gehosteten Endpunkt, den man anrufen könnte.",
      },
      {
        title: "Der Abstand ist null",
        body:
          "Inferenz passiert auf Unified Memory neben dem Prozess, der sie angefordert hat. Der Modell-Client ist auf 127.0.0.1:11434 festgelegt, und deshalb gibt es im Node keinen einzigen Code-Pfad, der auch nur versehentlich eine gehostete Inferenz-API erreichen könnte – der Host-Literal müsste zuerst geändert werden.",
      },
      {
        title: "Sie haben längst dafür bezahlt",
        body:
          "Rechenpunkte messen die Zyklen, die Ihre eigene Hardware verbraucht, und das Edge Compute Mesh ist die einzige Engine, die ungenutzte Kapazität nach außen verleiht, statt sie zu borgen. Welche Ausbaustufe Sie bekommen, ist eine Funktion des Speichers, den Sie gekauft haben.",
      },
      {
        title: "Die Erlaubnis gilt pro Gerät",
        body:
          "Ein signierter, einmalig gültiger fünfzehnminütiger Pairing-Code autorisiert ein Gerät. Die Konsole listet, was gekoppelt ist, und ein Widerruf ist ein Knopf – mit einem ehrlichen Vorbehalt darüber, was dieser Knopf nicht tut, nachzulesen auf der Privatsphäre-Seite.",
      },
    ],
    wireHeading: "Eine Zeile, drei Segmente",
    wireBody:
      "Ein Befehl vom Telefon ist eine gewöhnliche Nachricht in Ihrer eigenen popopx-chat-Warteschlange, und darin steht eine einzige Marker-Zeile: ein Präfix, die Engine-Id, die Aktion und ein JSON-Payload. Der Parser teilt nur am ersten Trennzeichen, deshalb bleibt ein Payload intakt, der dieses Trennzeichen enthält, und eine Zeile mit unbekannter Engine-Id, leerem Payload oder einem Payload über der Obergrenze, die die iOS-Seite akzeptiert, wird verworfen statt teilweise ausgeführt.",
    wireSampleLabel: "Die einzig akzeptierte Form",
    pairingHeading: "Pairing, in der Reihenfolge, in der es tatsächlich passiert",
    pairingSub:
      "Der Node prägt ein Credential, Sie zeigen es dem Telefon einmal, und danach ist das Credential wertlos. Auf einem Server wird nichts gespeichert, weil es keinen Server gibt, der es speichern könnte.",
    pairingSteps: [
      {
        title: "Der Node bietet an",
        body:
          "Über die Menüleiste oder die Konsole schreibt der Node ein Angebot, signiert den Body mit seinem eigenen Ed25519-Schlüssel – dem unter pairing/node.key in seinem Datenstammverzeichnis – und rendert ihn lokal über CoreImage als QR-Code. Kein Bild verlässt den Rechner.",
      },
      {
        title: "Das Telefon nimmt es in Anspruch",
        body:
          "POPOPX iOS scannt den Code, und der Kontakt, der dabei entsteht, ist der Geräteschlüssel. Dieser eine Scan richtet die SMP-Brücke ein; von da an sprechen die Discover-Servicekonten Ihren Node an und sonst nichts.",
      },
      {
        title: "Das Angebot stirbt",
        body:
          "Die erste Inanspruchnahme markiert das Angebot als verbraucht. Einen neuen Code zu erzeugen, nimmt den vorherigen aus dem Spiel, darum ist ein fotografierter QR-Code keine stehende Einladung – er läuft nach fünfzehn Minuten von selbst ab, auch wenn ihn niemand je scannt.",
      },
    ],
    pairingFacts: {
      lifetime: "Lebensdauer des Angebots",
      singleUse: "Einlösung",
      signature: "Signiert von",
      delivery: "Gerendert als",
    },
    sealedHeading: "Der QR-Code ist ein versiegelter Umschlag",
    sealedSub:
      "Seit 040ef25 tragen der QR-Code und die Kopier-Schaltfläche des Assistenten eine einzige undurchsichtige URL statt des rohen Credentials. Der Umschlag hält die Relay-Adresse aus einem Screenshot, einer Link-Vorschau oder einer Weiterleitung heraus; er ist kein Geheimnis, das der Besitzer der App nicht öffnen könnte.",
    sealedShapeLabel: "Form des versiegelten Links",
    sealedFacts: {
      kdf: "Schlüsselableitung",
      cipher: "AEAD",
      nonce: "Nonce",
      caps: "Obergrenzen der Nutzlast",
    },
    sealedBody:
      "Der Schlüssel wird mit HKDF-SHA256 aus einer im Programm veröffentlichten Eingabe abgeleitet, und die Box ist ChaCha20-Poly1305 mit einem festen Associated-Data-String, also kann jeder, der den Quellcode liest, einen Umschlag öffnen. Das ist Absicht: Der Link verbirgt die SMP-Queue-Adresse vor Vorschauen, Screenshots und Weiterleitungen, während das signierte, einmalig gültige fünfzehnminütige Credential darin das ist, was ein Gerät tatsächlich autorisiert. Der rohe PPXNODE1-…-Code und die Einladungs-URI, die die Queue-Adresse trägt, bleiben in der Diagnoseschublade der Konsole; der öffentliche Schlüssel des Nodes erscheint dort und auf den Zeilen der gekoppelten Geräte, nie auf der Vorderseite des Assistenten. Das QR-Bild wird lokal gerendert und nur auf loopback unter /api/pairing/qr.png ausgeliefert.",
    portsHeading: "Die lauschende Seite des Nodes",
    portsSub:
      "Der Node selbst öffnet einen Port. Die anderen zwei gehören Programmen, die er startet und als Client anruft – das zählt, wenn Sie ein Firewall-Log lesen: Eine Verbindung zu 11434 oder 5225 hat der Node aufgebaut, nicht angenommen.",
    portsColumns: ["Port", "Gebunden von", "Adresse", "Protokoll", "Was ihn absichert"],
    portsOwner: {
      node: "Der Node",
      tool: "Ollama",
      daemon: "popopx-chat",
    },
    portsPurpose: {
      console: "Web-Konsole und der Engine-Log-Stream",
      inference: "Lokale Modell-Inferenz",
      control: "Control-Socket des Chat-Daemons",
    },
    portsFootnote:
      "Alle drei liegen auf loopback. Die Konsole ist reines HTTP ohne TLS, was nur deshalb ein vertretbares Design ist, weil sie die Maschine nie verlässt: Bind-Versuche auf 0.0.0.0, auf einer LAN-Adresse oder auf einem Hostnamen werden abgewiesen, bevor ein Socket entsteht, und die Adresse steht im Programm statt in einer Konfigurationsdatei. Was sie stattdessen absichert, ist ein zufälliger vierundzwanzig Byte langer Token, der bei jedem Start neu ausgestellt wird, als X-PPX-Token geschickt wird, nur im Speicher gehalten wird und mit dem Prozess stirbt. Das Control-Socket des Chat-Daemons hat überhaupt keine Authentifizierung – das ist die ehrliche Beschreibung davon –, und es ist nur so lange sicher, wie es auf 127.0.0.1 bleibt.",
  },

  hub: {
    badge: "QUELLCODE-ZWEIG · NICHT IM SIGNIERTEN BUILD 1.0.2",
    heading: "Fünf lokale Fähigkeiten, eine Grenze",
    sub:
      "Der Quellcode-Zweig fügt eine eigentümerbezogene Fähigkeitserkennung, vier Protokolladapter und einen versiegelten Pairing-Link hinzu. Die Brücken sind standardmäßig aus, jedes Ziel wird von derselben positiven Allow-List zugelassen, und jede Schreiboperation wird zu einem signierten Vorschlag, den ein Mensch freigeben muss. Nichts davon ist ein gehosteter Dienst, und nichts davon öffnet einen neuen Listener.",
    status:
      "Im Quellcode seit dem 26. November 2026 (5858b3c und 040ef25). Der signierte Download v1.0.2 auf dieser Seite ist älter als beide Commits, darum lesen Sie diesen Abschnitt als Vertrag des Quellcode-Zweigs, nicht als Funktion des Images, das Sie gerade herunterladen.",
    cards: [
      {
        title: "Erkennung, die nur über sich selbst Auskunft gibt",
        body:
          "Die Konsole berichtet, was dieser Mac bereits hat: Ollama auf 127.0.0.1:11434 und die Modelle, die es bedient, die von Ihnen freigegebenen Workspace-Ordner, den Berechtigungsstatus von EventKit, und eine TCP-Erreichbarkeitszeile für bis zu acht LAN-Ziele, die Sie selbst eingetragen haben. Das ist ein rein lesendes GET /v1/discovery/capabilities. Es gibt keinen mDNS-Advertiser, keinen Port-Sweep und keinen Subnetz-Durchlauf; zugelassen sind nur loopback, RFC 1918-Literale, ULA und .local-Namen, und eine öffentliche Adresse wird abgewiesen, bevor ein Socket geöffnet wird.",
      },
      {
        title: "MCP, innerhalb der Allow-List",
        body:
          "Ein lokaler MCP-Client spricht JSON-RPC 2.0 initialize, tools/list und tools/call. Server werden von Hand in config/mcp_servers.json registriert – höchstens acht. Ein stdio-Befehl muss ein absoluter Pfad aus einer Liste allowedCommands mit sechzehn Einträgen sein, ohne Shell-Metazeichen; ein HTTP-Server muss auf loopback antworten. Ein rein lesendes Tool darf laufen; ein veränderndes Tool wird nie auf Anforderung ausgeführt, sondern nur in einen Vorschlag verwandelt.",
      },
      {
        title: "Home Assistant und MQTT im LAN",
        body:
          "Home Assistant über seine lokale REST-API und ein handgeschriebener MQTT 3.1.1-Client, beide beschränkt auf loopback, RFC 1918 und .local. Nur Entitäten, die in exposedEntities benannt sind, existieren für die Brücke, der Nur-Lese-Modus ist standardmäßig an, und ein Broker-Publish kann nur eine exponierte Entität unter einem von Ihnen konfigurierten Präfix adressieren. Credentials sind Keychain-Referenzen; settings.json enthält keinen Token.",
      },
      {
        title: "CalDAV behält die Lücken, nicht den Text",
        body:
          "PROPFIND und REPORT gegen bis zu vier selbst gehostete CalDAV-Server im LAN. Der iCalendar-Parser behält DTSTART und DTEND und verwirft SUMMARY, DESCRIPTION, LOCATION, ORGANIZER und jeden ATTENDEE innerhalb des Parsens, sodass es keinen späteren Schwärzungsschritt gibt, der schiefgehen könnte. Blöcke belegter Zeit von außen werden mit einem Boden von fünfzehn Minuten aus den lokalen freien Slots ausgeschnitten; eine Wiederholung, die der Parser nicht auswerten kann, wird als Untergrenze gemeldet statt geraten.",
      },
    ],
    boundaryHeading: "Was die Grenze abweist",
    boundaryItems: [
      {
        title: "Öffentliche Adressen und unaufgelöste Namen",
        body:
          "Ein Brückenziel muss loopback, RFC 1918, ULA oder ein .local-Name sein. Ein nackter Hostname wird nicht aufgelöst, um herauszufinden, ob er öffentlich ist; Credentials in einer URL werden abgewiesen, und eine HTTP-Brücke folgt keiner Weiterleitung – ein Host auf der Allow-List kann den Node also nicht auf den Server von jemand anderem umlenken.",
      },
      {
        title: "Schreibvorgänge ohne einen Menschen",
        body:
          "Eine Smart-Home-Auslösung oder ein veränderndes MCP-Tool wird zu einem Vorschlag in pending_user_approval mit einem HMAC-SHA256-Beleg, der an seine Id und sein Verb gebunden ist und fünfzehn Minuten gilt. Die Nutzlast, die läuft, ist die Nutzlast, die Ihnen gezeigt wurde; sie wird im lokalen Audit-Protokoll gebucht, und das Ausschalten der Brücke macht das Ausstehende ungültig.",
      },
      {
        title: "Geheimnisse ohne Klartext-Rückfall",
        body:
          "Der Home-Assistant-Token, das MQTT-Passwort und das CalDAV-Passwort sind Keychain-Einträge, die über eine Referenz adressiert werden; ein Lauf außerhalb des Pakets hält sie nur im Speicher, und nichts fällt auf eine Datei zurück. Das MCP-Dokument speichert Umgebungsvariablen-Namen, nie Werte.",
      },
    ],
    footnote:
      "„Privatsphäre & Kontrolle“ legt dieselbe Grenze Regel für Regel dar, einschließlich dessen, was der Node nicht versprechen kann.",
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
      "Unter 48 GB – ein 9B-Modell in Q4_K_M, nur kurze Renderläufe, rechenintensives Video wird dem Edge Compute Mesh angeboten.",
    ],
    plansHeading: "Was jede Ausbaustufe tatsächlich ausrollt",
    plansSub:
      "Die Tabelle oben ist die Orientierung, die Sie vor dem Kauf lesen. Diese hier ist das, was der Node nach dem Ausmessen des Rechners für sich selbst aufschreibt – direkt aus der Empfehlungsfunktion, inklusive des Modell-Tags, den sie zieht.",
    plansColumns: [
      "Speicherband",
      "Textmodell",
      "Video-Stack",
      "Belegungsobergrenze",
      "Rechenintensives Video",
      "Pull-Befehl",
    ],
    heavyVideo: {
      local: "Wird hier gerendert",
      mesh: "Wird dem Mesh angeboten",
    },
    plansFootnote:
      "Die Belegungsobergrenze ist eine Rechenregel über gemessenen Speicher, kein Benchmark: Jede Stufe zieht von dem gefundenen Unified Memory einen festen Puffer für die Desktop-Sitzung ab, gedeckelt, damit ein sehr großer Rechner nicht mehr verspricht, als der Stack braucht. Die Modell-Tags und Quantisierungen sind die Strings, die der Node tatsächlich an Ollama übergibt.",
  },

  install: {
    heading: "Ein DMG, ein Scan, zehn Schalter",
    sub:
      "Der Node hat keinen Installer, keinen Daemon-Account und nichts, was man registrieren müsste. Es ist eine einzige Menüleisten-App, die an loopback bindet, und der erste Lauf erledigt das Profiling selbst.",
    prereqsHeading: "Bevor Sie herunterladen",
    prereqNotes: {
      system: "Das Paket zielt auf macOS 14, und die App ist ein Menüleisten-Agent.",
      memory:
        "Metal, MLX und die gesamte Stufenleiter setzen Unified Memory voraus. Das DMG enthält einen x86_64-Slice, aber kein Teil des Stacks ist auf Intel abgestimmt.",
      disk:
        "Modellgewichte werden abgelehnt, solange der freie Speicher bei 40 GB oder darunter liegt, also ist die Schwelle der Stufenleiter auch die Ihrer Festplatte.",
      media:
        "Fünf der zehn Engines rufen FFmpeg auf. Der Installationsassistent kann es über Homebrew installieren.",
      inference:
        "Ollama für quantisierte Textmodelle, der LTX-2.5-MLX-Workspace für Video. Beides sind lokale Werkzeuge; keines ist ein Dienst.",
      bridge:
        "Nur für den SMP-Pairing-Schritt und den vom Telefon gesteuerten Pfad nötig. Die Engines selbst laufen ohne ihn.",
    },
    prereqRequired: {
      hard: "Erforderlich",
      wizard: "Der Assistent installiert es",
      optional: "Nur zum Koppeln",
    },
    steps: [
      {
        title: "DMG prüfen und öffnen",
        body:
          "Nehmen Sie POPOPX-Mac-Node-Universal.dmg und die Prüfsummendatei des Releases in denselben Ordner und prüfen Sie beide, bevor Sie irgendetwas öffnen; unter „Releases & GitHub“ stehen die zwei Befehle für das aktuelle Release. Ziehen Sie POPOPX Mac Node.app nach /Applications. Der veröffentlichte Build trägt eine Developer ID-Signatur und ein angeheftetes Notarisierungs-Ticket, darum akzeptiert Gatekeeper ihn ohne Ihr Zutun – spctl -a -vv -t install antwortet accepted mit source=Notarized Developer ID. Ein Build aus dem Tag-Workflow, der mit Scripts/build_dmg.sh paketiert, und ein Build, den Sie selbst mit demselben Skript erstellen, sind dagegen ad hoc signiert, und der erste Start verlangt dort ein Öffnen per Rechtsklick.",
      },
      {
        title: "Die Maschine profilieren lassen",
        body:
          "Starten Sie ihn und öffnen Sie die Konsole über die Menüleiste. Schritt eins liest Chip, Kernanzahl, Unified Memory und freien SSD aus sysctl, druckt die gewählte Ausbaustufe und den Modell-Tag, den diese Stufe bedeutet, und zeigt die Zahlen, die er abgetastet hat – nicht die, die Sie angegeben haben.",
      },
      {
        title: "Die lokalen Engines ausrollen",
        body:
          "Der Assistent arbeitet die Liste herunter: Homebrew, FFmpeg, uv, Ollama, die zu Ihrer Ausbaustufe passende Qwen-Quantisierung, der LTX-2.5-Workspace und dann ein Selbsttest. Das Installationsprotokoll läuft dabei auf die Konsolenseite, und es wird nach logs/install.log geschrieben, damit ein Fehler hinterher noch zu lesen ist.",
      },
      {
        title: "Das iPhone koppeln",
        body:
          "Erzeugen Sie den Pairing-QR-Code – aus der Konsole oder über den Menüleisten-Eintrag für einen neuen Code – und scannen Sie ihn mit dem POPOPX iOS-Client. Seit 040ef25 tragen der QR-Code und die Kopier-Schaltfläche einen versiegelten Link https://popopx.chat/i/v1/… statt des rohen Credentials, damit ein Screenshot oder eine Chat-Vorschau die Queue-Adresse nicht offenlegt. Der Code darin ist weiterhin signiert, einmalig und läuft in fünfzehn Minuten ab; der rohe PPXNODE1-Code und die Einladungs-URI bleiben in der Diagnoseschublade der Konsole. Das Gerät erscheint in der Pairing-Liste der Konsole mit Modell, Pairing-Zeitpunkt und letzter Sichtung.",
      },
      {
        title: "Die Engines einschalten",
        body:
          "Zehn Schalter, in der Menüleiste und in der Konsole. Eine Engine läuft nur, wenn Sie sie aktivieren, und die vier, die ohne lokales Modell auskommen – der physische Lockdown, der Tresor mit Zeitsperre, der Wasserzeichen-Tracer, der Leser von Laborberichten – funktionieren, bevor ein einziges Gewicht heruntergeladen wurde. FFmpeg wird weiterhin aufgerufen; der Modell-Stack nicht.",
      },
    ],
    buildHeading: "Oder bauen Sie ihn aus demselben Tag",
    buildBody:
      "Die Release-Images werden aus dem Baum verpackt, den Sie auschecken können. swift build, swift test, swift build -c release, dann schreibt bash Scripts/build_dmg.sh --output dist --version v1.0.2 das universelle DMG, signiert es ad hoc und gibt das Sidecar mit aus. Das veröffentlichte Artefakt kommt dagegen aus Scripts/build-release.sh, das die Signierung mit Developer ID, die Notarisierung bei Apple und das ZIP hinzufügt – deshalb besteht ein heruntergeladenes Image die spctl-Prüfung, Ihr eigener Build nicht. Beide Skripte laufen nur auf macOS, weil sie aus hdiutil und codesign bestehen.",
    lifecycleHeading: "Nach dem ersten Lauf",
    lifecycle: [
      {
        title: "Aktualisieren",
        body:
          "Es gibt keinen Updater und keine Update-Prüfung – auch das ist etwas, worüber der Node nicht nach Hause telefoniert. Aktualisieren ist Ziehen: das neuere DMG herunterladen, prüfen und die App in /Applications ersetzen. Einstellungen, Pairing-Zustand, der Node-Schlüssel, der Tresor und jedes Artefakt liegen unter Application Support statt im Bundle, darum übernimmt eine ersetzte App den Rechner, auf den sie trifft.",
      },
      {
        title: "Sichern und auf eine andere Maschine umziehen",
        body:
          "Die App markiert ihr eigenes Datenstammverzeichnis als von Time Machine ausgeschlossen, was Ihre Backups vor Modellgewichten schützt und eine Überraschung beim Zurückspielen erspart. Es bedeutet auch, dass der Ordner nicht in Ihrem Backup liegt. Um einen Node umzuziehen: beenden Sie ihn, kopieren Sie ~/Library/Application Support/PopopxMacNode auf dem neuen Mac an denselben Pfad und lassen Sie ihn neu profilieren – die Ausbaustufe kann sich ändern, und pairing/node.key wandert mit dem Ordner mit, was der ganze Grund ist, warum diese Kopie so privat sein muss wie das Original.",
      },
      {
        title: "Vollständig entfernen",
        body:
          "Schalten Sie zuerst Launch at Login aus, dann Quit über die Menüleiste – das schließt den Listener und gibt das Login-Item frei. Löschen Sie /Applications/POPOPX Mac Node.app und danach das Datenstammverzeichnis unter ~/Library/Application Support/PopopxMacNode, wenn auch der versiegelte Tresor, die Ledger und die Artefakte weg sollen. Es gibt keinen Deinstaller und keinen Beleg, den man vergessen könnte: Außerhalb dieser zwei Pfade wurde nie etwas installiert. Das Einzige, was diese zwei Pfade nicht abdecken, ist ein Keychain-Eintrag – wenn Sie eine Hub-Brücke eingerichtet haben, überlebt ihr Credential unter im.popopx.macnode.hub beide Löschungen, weil der Keychain kein Ordner ist; entfernen Sie es in Keychain Access oder über die Trennen-Schaltfläche der Brücke selbst.",
      },
    ],
    bridgeTitle: "Steuern Sie die Engines aus Ihrem eigenen Skript",
    bridgeBody:
      "Der Ordner integrations enthält eine TypeScript-Brücke und zwei Agent-Adapter. Er öffnet keinen neuen Port und startet keinen zweiten Daemon: Er nutzt die Konsole auf 127.0.0.1:18920 und das einmalige Token pro Prozess weiter und sendet dieselbe NODE_CMD-Signalisierung, die auch das Telefon sendet. Die Lockdown-Aktion ist über ein doppeltes Opt-in abgesichert – allowLockdown muss true sein und PPX_BRIDGE_SECRET muss mindestens sechzehn Zeichen lang sein –, und eine Ablehnung wird in das Plugin-Protokoll geschrieben, damit Sie sehen, dass sie passiert ist.",
    requirementTitle: "Eine ehrliche Voraussetzung",
    requirementBody:
      "Schritt 2 des Assistenten des Nodes selbst, der Pairing-QR-Code und die SMP-Brücke brauchen einen popopx-chat-Chat-Daemon im PATH. Der Node prüft genau eine ausführbare Datei und hat keinen Fallback, weil ein Upstream-Build zwar eine Versionszeile beantwortet, danach aber jeden Befehl scheitern lässt. Die zehn Engines selbst brauchen ihn nicht.",
    signHeading: "So ist der veröffentlichte Build signiert",
    signBody:
      "Das Anwendungsbundle in dem Image trägt eine Developer ID Application-Signatur, den hardened runtime-Flag und einen sicheren Zeitstempel, und ein Notarisierungs-Ticket ist in es hinein angeheftet. Deshalb lässt Gatekeeper es ohne Ihr Zutun laufen: spctl -a -vv -t install antwortet accepted mit source=Notarized Developer ID. Der Block darunter ist am 2026-11-25 aus genau den Bytes abgelesen worden, die v1.0.2 veröffentlicht – führen Sie die ersten zwei Befehle gegen die App in /Applications aus, und Sie sollten dieselbe Identität zurückbekommen. Kein Apple-Account wird befragt und nichts wird gegen einen Server geprüft, weil das Ticket zusammen mit der App auf der Festplatte mitwandert.",
    containerTitle: "Das Image selbst ist nicht signiert",
    containerBody:
      "Führen Sie spctl auf dem heruntergeladenen .dmg aus, antwortet es rejected mit source=no usable signature; codesign -dvv sagt über dieselbe Datei, dass sie gar nicht signiert ist. Das ist die erwartete Antwort, kein Alarm wegen Manipulation. Apples Codesignatur sitzt auf dem Anwendungsbundle, das Notarisierungs-Ticket dagegen ist an das Bundle und an das Disk-Image darum herum angeheftet. Die einzige Integritätskontrolle des Images ist sein SHA-256-Wert, und das ist die Prüfung weiter unten auf dieser Seite.",
    provenanceTitle: "Welches Skript liefert welches Artefakt",
    provenanceBody:
      "Zwei Skripte verpacken diese App, und sie enden nicht am selben Ort. Scripts/build_dmg.sh – das Skript, das der Tag-Workflow auf einem macOS-Runner ausführt, und das Ende der Build-Schritte weiter oben – signiert ad-hoc mit --sign - --timestamp=none und ohne hardened runtime, darum verlangt ein Build aus diesem Pfad beim ersten Start tatsächlich ein Öffnen per Rechtsklick. Scripts/build-release.sh ist der Developer ID-Pfad: Er signiert mit hardened runtime, reicht die Notarisierung ein, heftet das Ticket an Bundle und Image und schreibt das ZIP neben ein SHA256SUMS.txt-Manifest. Das Image, das Sie herunterladen, stammt aus dem zweiten Skript, und ein Runner, der das Zertifikat nie in den Händen hielt, kann es nicht erzeugen.",
    digestHeading: "Prüfen Sie die Prüfsumme, bevor Sie irgendetwas öffnen",
    digestBody:
      "Zwei Befehle, ausgeführt in dem Ordner, in den Sie die Dateien gespeichert haben. Das Release-Manifest ist die Datei, gegen die Sie prüfen sollen, denn es nennt jedes Artefakt des Releases und wird von demselben Schritt geschrieben, der sie verpackt hat – während die .dmg.sha256 für ein einzelnes Asset, die neben v1.0.2 veröffentlicht ist, eine Prüfsumme nennt, die bei keinem veröffentlichten Asset herauskommt. Unter „Releases & GitHub“ stehen die zwei Befehle für das Release, das die Seite gerade auflöst, und das kann neuer sein als das unten.",
    copyCommand: "Befehl kopieren",
    commandCopied: "Kopiert",
  },

  security: {
    heading: "Was bleibt, was geht, und wie Sie es stoppen",
    sub:
      "Eine Privatsphäre-Seite, die nur aufzählt, was lokal bleibt, ist eine Seite Marketing. Diese hier zählt den Verkehr auch auf, denn die ehrliche Fassung von „Ihre Daten verlassen das Gerät nie“ ist länger und nützlicher als der Slogan.",
    localHeading: "Bleibt auf Ihrer Festplatte",
    localSub:
      "Unter einem Datenstammverzeichnis, in einem Ordner, den die App selbst anlegt und von Time Machine ausschließt, und mit den Geheimnissen, die atomar im Modus 0600 und mit vollständigem Dateischutz geschrieben werden.",
    localItems: [
      {
        title: "Jedes Artefakt",
        body:
          "Gerenderte Clips, Briefings, Exporte mit Wasserzeichen, versiegelte Archive, entschlüsselte Berichte und unter Quarantäne gestellte Eingaben landen alle unter dem Datenstammverzeichnis und bleiben dort. Eine Outbox hält der Node nur für Ergebnisse vor, die darauf warten, dass Ihr Telefon wieder online ist.",
      },
      {
        title: "Die Modelle und ihre Gewichte",
        body:
          "Die Qwen-Quantisierung liegt im Speicher von Ollama selbst; die LTX-2.5-Gewichte liegen im Engines-Verzeichnis des Nodes. Beides sind lokale Dateien auf lokaler Festplatte, einmal gezogen, und das Ziehen wird abgelehnt, solange der freie Speicher bei 40 GB oder darunter liegt.",
      },
      {
        title: "Schlüssel und Pairing-Zustand",
        body:
          "Der Ed25519-Signierschlüssel des Nodes, die Liste der gekoppelten Geräte und das aktuelle Angebot sind gewöhnliche Dateien unter pairing/. Es gibt kein Cloud-Backup des Schlüssels und nirgends eine Hinterlegung – was nach beiden Seiten wirkt, wie der Absatz über den Verlust unten sagt. Die eine Ausnahme ist das Credential einer Hub-Brücke: Der Home-Assistant-Token, ein MQTT-Passwort oder ein CalDAV-Passwort ist ein Keychain-Eintrag, und settings.json trägt nur die Referenz, die ihn holt.",
      },
      {
        title: "Die Beweisspur",
        body:
          "Die Lockdown- und die Mesh-Ledger werden lokal hash-appendiert, und das Audit-Protokoll zeichnet auf, was lief, auf welcher Engine und mit welchem Ergebnis. Es ist zum Nachlesen durch Sie geschrieben: logs/node.log ist die schnellste Antwort auf die Frage, was dieses Ding um 03:14 getan hat.",
      },
    ],
    transitHeading: "Verlässt die Maschine",
    transitSub:
      "Vier Arten von Verkehr verlassen den Rechner ins weitere Netz, und jede davon ist entweder Ihr eigenes Gerät oder etwas, das Sie eingerichtet haben. Eine fünfte existiert nur, wenn Sie eine LAN-Brücke einschalten: Anfragen an Home Assistant, MQTT und CalDAV, die auf loopback-, RFC 1918- und .local-Adressen bleiben. Es gibt in keinem davon einen Analytics-Endpunkt, an den man etwas schicken könnte.",
    transitItems: [
      {
        title: "Ergebnisse, zurück auf Ihr eigenes Telefon",
        body:
          "Ein fertiger Auftrag schickt eine Karte von höchstens 1024 Zeichen plus eine Nachricht pro Artefakt-Datei zurück, über Ihre eigene popopx-chat-Warteschlange, mit SMP als Relay und XFTP als Träger. Das Relay sieht Chiffretext. Ist das Telefon offline, wartet das Ergebnis in outbox/ und versucht es bis zu dreißig Tage lang weiter.",
      },
      {
        title: "Feeds, die er lesen sollte",
        body:
          "Morning TV ruft die RSS-Quellen ab, die Sie eingerichtet haben, gedeckelt auf drei Megabyte pro Antwort, und das ist eine gewöhnliche ausgehende HTTPS-Anfrage an wen auch immer Ihre Feeds hostet.",
      },
      {
        title: "Ein Webhook, den Sie eingerichtet haben",
        body:
          "Der physische Lockdown kann ein signiertes Event per POST an einen Home-Automation- oder Präsenz-Endpunkt schicken. Es ist best effort, es ist Opt-in, und die URL gehört Ihnen – der Node hat kein Standardziel.",
      },
      {
        title: "Installationen und Modell-Pulls",
        body:
          "Der Assistent lädt Homebrew-Formeln, FFmpeg, uv, Ollama und die Quantisierung herunter, die Sie gewählt haben. Dieser Verkehr ist der Sinn eines Installationsschritts, und er passiert einmal, vor Ihren Augen, mit dem Protokoll auf dem Bildschirm.",
      },
    ],
    keysHeading: "Wo die Geheimnisse wirklich liegen",
    keysBody:
      "Pairing- und Tresormaterial sind Dateien unter dem Datenstammverzeichnis, geschrieben mit atomarem Write, POSIX-Modus 0600 und vollständigem Dateischutz, sodass sie im Ruhezustand nicht lesbar sind, solange der Rechner gesperrt ist. Der Tausch, den Sie eingehen, ist real – Dateirechte sind auditierbar und portabel, und sie sind auch nichts zwischen Ihrem Benutzerkonto und einem Leser, der Ihr Benutzerkonto bereits hat. Behandeln Sie das Datenstammverzeichnis als das Geheimnis, das es ist: Es steht nicht in Time Machine, und es ist die einzige Kopie des Node-Schlüssels, die es gibt. Ein Hub-Credential nimmt den anderen Weg. Der Home-Assistant-Token, das MQTT-Passwort und das CalDAV-Passwort sind generic-password-Einträge unter dem Dienst im.popopx.macnode.hub, angelegt mit kSecAttrAccessibleWhenUnlockedThisDeviceOnly, und das Einstellungsdokument speichert nur eine Referenz. Ein Prozess ohne die Bundle-Identität der App – swift run, ein Test-Harness – bekommt stattdessen einen Store im Speicher; es gibt bewusst keinen Klartext-Datei-Rückfall, also wird ein Credential, das den Keychain nicht erreichen kann, gar nicht gespeichert.",
    dataNote: {
      output: "Erzeugte Artefakte und die Outbox-Warteschlange, die Ergebnisse zurückhält, welche auf das Telefon warten.",
      vault: "Zeitversiegelte Archive und das Nachlassmaterial, das sie wieder öffnet.",
      pairing: "Der Ed25519-Node-Schlüssel, die Liste der gekoppelten Geräte und das aktuelle einmalige Angebot.",
      weights: "Modellgewichte und der LTX-2.5-MLX-Workspace, den die Video-Engines aufrufen.",
      ledger: "Hash-appendierte Lockdown- und Mesh-Ledger.",
      logs: "Das Installationsprotokoll und das Audit-Protokoll, geschrieben damit der Betreiber sie liest.",
      config: "Einstellungen, Engineschalter und die Konfiguration, die sich Brücke und Integrationen teilen.",
    },
    rootLabel: "Datenstammverzeichnis",
    hubHeading: "Die eigene Grenze des Edge-Hubs",
    hubSub:
      "Die vier Brücken, die der Quellcode-Zweig hinzufügt, halten sich an die Regeln oben und an vier weitere. Sie stehen hier statt auf einer Funktionskarte, weil es Behauptungen sind, die ein Leser aus dem Code widerlegen können sollte.",
    hubItems: [
      {
        title: "Ein einziger Zulassungspunkt",
        body:
          "Jedes Brückenziel – MCP über HTTP, Home Assistant, MQTT, CalDAV – passiert dieselbe EdgeBoundary-Prüfung, bevor ein Socket existiert: loopback, RFC 1918, ULA oder .local, ohne DNS-Abfrage, um herauszufinden, ob ein Name öffentlich ist, ohne Credentials in der URL und ohne gefolgte Weiterleitung. Eine Ablehnung ist eine Zeile in der Konsole, kein stiller Neuversuch anderswo.",
      },
      {
        title: "Ein Beleg, kein Prompt",
        body:
          "Eine verändernde Aktion wird nicht durch ein Textfeld in der Konsole abgesichert. Sie wird zu einem Vorschlag im Zustand pending_user_approval, genehmigt mit einem 24 Zeichen langen HMAC-SHA256-Beleg, der an die Id und das Verb des Vorschlags gebunden ist, fünfzehn Minuten gilt und im lokalen Audit-Protokoll festgehalten wird. Die Nutzlast, die die Ausführung ausführt, ist die, die der Eigentümer gesehen hat, und das Ausschalten der Brücke macht ausstehende Vorschläge ungültig.",
      },
      {
        title: "Keychain oder Speicher, nie eine Datei",
        body:
          "Brücken-Credentials liegen in Keychain-Einträgen, die über eine Referenz adressiert werden, oder im Prozessspeicher bei einem Lauf außerhalb des Pakets. Eine dritte Option gibt es nicht: nicht settings.json, nicht ein Protokoll, nicht ein DMG. Das MCP-Dokument speichert die Namen von Umgebungsvariablen, also wird ein Token, das über stdio an einen MCP-Server geht, aus der Umgebung gelesen, die der Eigentümer gesetzt hat, nicht aus einer Datei, die der Node geschrieben hat.",
      },
      {
        title: "Das Minimum lernen",
        body:
          "CalDAV parst DTSTART und DTEND und verwirft Titel, Beschreibungen, Orte und Teilnehmer innerhalb des Parsers, sodass die geschäftigsten Felder gar nicht erst ins Modell gelangen. Eine Vorschau eines Vorschlags zeigt kurze skalare Argumente und verbirgt jeden Wert, dessen Schlüssel auf der Schwärzungsliste steht – content, token, password, payload und mehr. Discovery ist ein rein lesendes GET, das den eigenen Zustand der Maschine berichtet.",
      },
    ],
    controlHeading: "Ihr Teil des Abschaltknopfs",
    controlSub:
      "Vier Kontrollen, alle lokal, alle in der App sichtbar statt in einem Einstellbildschirm vergraben. Keine von ihnen braucht das Netzwerk, und deshalb funktionieren sie auch dann, wenn das Netzwerk das Problem ist.",
    controls: [
      {
        title: "Eine Engine stoppen",
        body:
          "Zehn unabhängige Schalter in der Menüleiste und in der Konsole. Das Abschalten einer wirkt ab dem nächsten Befehl, und ein Befehl für eine deaktivierte Engine wird abgelehnt statt in die Warteschlange gestellt.",
      },
      {
        title: "Das Verleihen von Zyklen stoppen",
        body:
          "Pause Mesh Sharing nimmt den Node sofort aus dem Edge-Compute-Pool; die Menüleiste zeigt Paused, und er nimmt keine Aufträge mehr an. Das ist die einzige Steuerung, in deren Namen das Wort pause vorkommt, und sie handelt von Mesh-Kapazität, nicht vom ganzen Node.",
      },
      {
        title: "Den aktuellen Pairing-Code verbrennen",
        body:
          "New Pairing QR nimmt das ausstehende Angebot aus dem Spiel und prägt einen Ersatz. Wer ein Foto des alten Codes hat, hat eine abgelaufene Signatur, keine zweite Chance.",
      },
      {
        title: "Alles stoppen",
        body:
          "Quit ist der eigentliche Notaus: Er schließt den loopback-Listener, gibt das Login-Item frei und lässt den Token pro Start mit dem Prozess sterben. Ein Node, der nicht läuft, beantwortet nichts – von niemandem, über irgendetwas.",
      },
    ],
    revokeHeading: "Und das Widerrufen eines Geräts",
    revokeBody:
      "Die Liste der gekoppelten Geräte in der Konsole hat in jeder Zeile einen Revoke-Knopf. Er markiert das Gerät als widerrufen, entfernt seine Kontaktzuordnung und verwirft von da an seine Befehle – aber er baut die SMP-Verbindung nicht ab, und die App sagt das in derselben Meldung, die sie Ihnen zeigt. Um die Arbeit zu Ende zu bringen, löschen Sie den Kontakt im Chat-Client. Was einmal auf Ihrer Festplatte steht, bleibt auf Ihrer Festplatte; Widerrufen stoppt künftige Befehle, es ist kein Fernlöschen, und eine Fähigkeit zum Fernlöschen hat es im Node nie gegeben, die man hätte entfernen können.",
    limitsHeading: "Was diese Seite nicht verspricht",
    limitsBody:
      "Das sichere Zerstören ist ein Überschreiben mit Zufallsdaten, ein Sync und ein Unlink. Auf APFS wird eine geänderte Datei in neue Blöcke geschrieben und die SSD bildet logische Blöcke um, das entfernt also die Datei und macht gewöhnliche Recover-Tools unwirksam, beweist aber nicht, dass die alten physikalischen Bytes weg sind. Es ist das Beste, was eine Userspace-Datei-API kann, und der Code sagt das in dem Ergebnis, das er zurückgibt. Darüber hinaus: kein globales Anhalten außer Beenden, kein Fernlöschen, keine Schlüssel-Hinterlegung und darum keine Wiederherstellung, wenn Sie den Rechner und das Datenstammverzeichnis zusammen verlieren – und kein Updater, den man überreden könnte, etwas zu installieren, das Sie nicht verlangt haben.",
  },

  troubleshooting: {
    heading: "Wenn es nicht so läuft, wie Sie erwartet haben",
    sub:
      "Die Fehler, die auf dieser Architektur tatsächlich passieren, in der Reihenfolge, in der man über sie stolpert. Jeder nennt, was man zuerst ansehen soll, denn auf einem Rechner ohne Serverseite ist das Protokoll immer der kürzeste Weg.",
    columns: ["Symptom", "Was passiert", "Was zu tun ist"],
    items: [
      {
        symptom: "Die Konsolenseite öffnet sich nicht",
        cause:
          "Der Port steht auf 127.0.0.1:18920 fest, ohne Rückfallebene, deshalb hält eine zweite laufende Instanz – oder alles andere, das früher dort war – den Listener. Der Token gilt außerdem pro Start: ein alter Tab aus der Zeit vor einem Neustart hat ein totes Credential.",
        fix:
          "Suchen Sie nach einem Listener auf 18920 und beenden Sie die andere Instanz, dann nutzen Sie Open Web Console in der Menüleiste – der Eintrag baut die aktuelle URL mit dem aktuellen Token statt mit einem veralteten.",
      },
      {
        symptom: "Auf 11434 antwortet niemand",
        cause:
          "Die Engines, die ein Modell brauchen, sprechen Ollama ausschließlich auf loopback an. Läuft Ollama nicht oder wurde es ohne den Assistenten installiert, scheitert die Engine, statt auf irgendwas Gehostetes zurückzufallen.",
        fix:
          "Starten Sie Ollama, prüfen Sie, ob OLLAMA_HOST auf loopback zeigt, und ziehen Sie die Quantisierung, die die Stufentabelle für Ihren Rechner nennt. Der Fehlertext zitiert den Befehl, der funktioniert hätte.",
      },
      {
        symptom: "Die Gewichte wurden nie geladen",
        cause:
          "Der Installer überspringt Gewichts-Downloads, solange weightSources nicht in config/engines.json erklärt ist, und lehnt bei freiem Speicher von 40 GB oder darunter ganz ab.",
        fix:
          "Tragen Sie die Quelle ein, die Sie holen wollen, oder kopieren Sie die Gewichte nach engines/weights und lassen Sie die Konfiguration darauf zeigen. Machen Sie zuerst Platz auf der Platte; die Sperre ist eine Schwelle, keine Warnung.",
      },
      {
        symptom: "Ein Render kam als Kommandozeile zurück",
        cause:
          "Videoarbeit braucht den LTX-2.5-Workspace und seine Gewichte. Ohne sie gibt die Engine genau den Befehl zurück, den sie ausgeführt hätte, statt so zu tun, als wäre eine Datei entstanden.",
        fix:
          "Führen Sie den Workspace-Schritt des Assistenten zu Ende oder klonen Sie den LTX-2-MLX-Workspace, den er nennt, und laufen Sie dann erneut. Das ist Absicht: ein vorgetäuschter Erfolg ist schlechter als ein ehrliches Ablehnen.",
      },
      {
        symptom: "Der Pairing-Code wird abgelehnt",
        cause:
          "Ein Angebot ist einmalig und lebt fünfzehn Minuten. Ein zweiter Scan desselben Codes, oder ein Code von einem Bildschirm, der inzwischen weitergedreht hat, wird zu Recht abgelehnt.",
        fix:
          "Erzeugen Sie einen neuen Code und scannen Sie ihn einmal. Wenn das Telefon nach einem Erfolg von selbst erneut, hat die erste Inanspruchnahme bereits gewonnen, und die Ablehnung ist die erwartete Antwort.",
      },
      {
        symptom: "Befehle vom Telefon tun nichts",
        cause:
          "Die Brücke braucht einen popopx-chat-Daemon im PATH, und der Node prüft genau eine ausführbare Datei ohne Rückfallebene. In der Menüleiste steht dann popopx-chat not installed, und eine ausgeschaltete Engine antwortet ohnehin nicht.",
        fix:
          "Lesen Sie zuerst die Brücken-Zeile in der Menüleiste, dann die Engineschalter, dann das Audit-Protokoll. Ein abgelehnter Befehl und ein nie angekommener Befehl sehen vom Telefon aus identisch aus.",
      },
      {
        symptom: "Ergebnisse bleiben aus, während das Telefon weg ist",
        cause:
          "Die ausgehende Zustellung läuft über Ihren eigenen Daemon und Ihr Relay, deshalb sehen eine ausgehend blockierende Firewall, ein VPN, das das Relay nicht mitnimmt, und ein beendeter Daemon von hier aus gleich aus. Ergebnisse sind nicht verloren: sie stehen in outbox/ und werden bis zu dreißig Tage lang wiederholt.",
        fix:
          "Prüfen Sie, ob der Daemon läuft, lassen Sie dann die ausgehenden Verbindungen des Nodes in der Schicht durch, die sie filtert, und warten Sie, bis die Warteschlange sich leert, statt den Auftrag neu zu starten.",
      },
      {
        symptom: "Die Download-Karte meldet die fest hinterlegte Version",
        cause:
          "api.github.com war nicht erreichbar, wurde blockiert, war ratenbegrenzt oder antwortete ohne herunterladbares Asset. Die Seite rendert dann das in das Bundle kompilierte Release, statt zu raten.",
        fix:
          "Öffnen Sie die Releases-Seite direkt. Sonst nichts auf der Site braucht diesen Aufruf, und kein Teil der Seite bleibt wegen eines fehlgeschlagenen leer.",
      },
    ],
    escalation:
      "Zwei Dateien beantworten das Meiste von dem, was übrig bleibt: logs/install.log für alles, was der Assistent getan hat, und logs/node.log für alles danach. Beide sind reiner Text unter dem Datenstammverzeichnis, und der Log-Kanal der Konsole zeigt dieselben Ereignisse live. Wenn ein Fehler das Lesen der beiden übersteht: Der Vertrag, den der Node und die Integrationen gemeinsam abprüfen, liegt im Repository, und Issues gehören in popopx-mac-node.",
  },

  releases: {
    heading: "Releases, Prüfsummen und der ganze Baum",
    sub:
      "Alles, woraus der Node gebaut wird, liegt in einem einzigen AGPL-3.0-only-Repository, und jedes veröffentlichte Image lässt sich vor dem Öffnen gegen eine Prüfsumme prüfen. Dieser Abschnitt ist die Stelle, an der die Site aufhört zu beschreiben und anfängt zu zeigen.",
    assetsHeading: "Veröffentlichte Assets",
    assetsColumns: ["Datei", "Was es ist", "Größe"],
    assetKinds: {
      dmg: "Disk-Image zum Ziehen nach /Applications, universell mit arm64 und x86_64. Das ist das, was Sie nehmen sollen.",
      sidecar: "Eine Prüfsumme für eine einzelne Datei, geschrieben von dem Verpackungsschritt, der sie gebaut hat.",
      zip: "Das signierte Anwendungsbundle als ZIP-Inhalt, für ein Archiv statt eines Datenträgers.",
      sums: "Ein Manifest, das jedes Artefakt des Releases mit seiner Prüfsumme auflistet.",
    },
    missingAsset:
      "Nicht jedes Release veröffentlicht jedes Asset. Ältere Releases tragen nur das Disk-Image und sein Sidecar, deshalb bezieht sich die Prüfung unten auf das Release, das Sie tatsächlich geöffnet haben.",
    verifyHeading: "Prüfen, bevor Sie irgendetwas öffnen",
    verifyBody:
      "Zwei Befehle, ausgeführt in dem Ordner, in den Sie heruntergeladen haben. Die Manifest-Form ist die bevorzugte und die, die das aktuelle Release veröffentlicht.",
    verifySumsBody:
      "Ein Release-Manifest listet jedes Artefakt, deshalb ist eine Datei, die Sie nicht geladen haben, erwartet und nicht fehlend: Übergeben Sie --ignore-missing und lesen Sie die Zeile, die zu Ihrer Datei passt. Das Manifest wird in demselben Schritt geschrieben, der auch den Inhalt verpackt, den es nennt.",
    verifySidecarBody:
      "Ein älteres Release veröffentlicht stattdessen ein Sidecar für ein einzelnes Asset, und das ist die Datei, gegen die Sie prüfen sollten. Wenn ein Release beide trägt und sie widersprechen sich: glauben Sie dem Manifest, denn das Sidecar kann aus einem anderen Build derselben Version stammen.",
    pipelineHeading: "Wie eine Version hierher kommt",
    pipelineBody:
      "Ein Tag zu pushen läuft den Release-Workflow auf einem macOS-Runner: Er baut den Baum, führt die Vertragstests durch, verpackt das universelle Image mit Scripts/build_dmg.sh, verweigert das Veröffentlichen einer Prüfsummendatei mit absolutem Pfad und lädt hoch, was dieses Skript geschrieben hat. Ein notariertes Image neben einem SHA256SUMS.txt-Manifest kommt dagegen aus Scripts/build-release.sh, das die Signierung mit Developer ID, eine Notarisierung bei Apple und das ZIP hinzufügt. Beide Wege enden am selben Ort: einer Prüfsumme, die Sie prüfen können, ohne dieser Seite zu vertrauen.",
    supportedHeading: "Läuft heute",
    supportedItems: [
      "Alle zehn Engines, jede mit ihren eigenen Aktionen und Ablehnungspfaden, einzeln zugeschaltet.",
      "Automatische Stufenwahl aus sysctl, samt dem Modell-Pull, den jede Stufe bedeutet.",
      "Signierte, einmalige, fünfzehnminütige Pairing-Codes und eine Konsole, die nur an loopback bindet.",
      "Die TypeScript-Brücke und zwei Agent-Adapter über dieselbe Konsole und denselben Token.",
    ],
    roadmapHeading: "Noch nicht",
    roadmapSub:
      "Im Repository als Pläne aufgeschrieben, nicht auf einer Seite als Versprechen. Nichts davon läuft heute.",
    roadmap: [
      {
        title: "Messwerte pro Engine auf Ihrem eigenen Rechner",
        body:
          "Ein Nutzungs-Dashboard und Fehler-Zeitachsen, die bis aufs Telefon zurückgetragen werden: Token- und Watt-Werte von dem Rechner vor Ihnen, die die Schätzungen in der Hardware-Tabelle ersetzen.",
      },
      {
        title: "Härtere Mesh-Isolation und ein exportierbares Ledger",
        body:
          "Strengere Eindämmung für geliehene Kapazität und ein Ledger, das Sie aus der App herausnehmen können, statt es nur darin zu lesen.",
      },
      {
        title: "Aufgeteilte Verwahrung für mehr als einen Erben",
        body:
          "Aufteilung des Nachlassmaterials auf mehrere Erben und mehr Berichtlayouts in der Gesundheits-Engine.",
      },
      {
        title: "Signierte Vertriebswege und weitere Video-Stufen",
        body:
          "Prüfung eines Store-Kanals über die Notarisierung hinaus und zusätzliche LTX-Stufen für Speicherbänder, die die Stufenleiter noch nicht abdeckt.",
      },
    ],
    sourceHeading: "Der Quellcode, und wozu die Lizenz verpflichtet",
    sourceBody:
      "Ein Repository, AGPL-3.0-only, kein geschlossener Kern: Die Engines, die Konsole, die Wasserzeichen und das Ledger sind alle darin, und der Code für die Blind-Signatur-Credentials samt dem Register der kryptografischen Parameter stehen offen in popopxmq daneben. Abschnitt 13 gilt auf die gewöhnliche Weise: Führen Sie ihn aus, studieren Sie ihn, verändern Sie ihn frei, und wenn Sie einen veränderten Node als Dienst für andere anbieten, bieten Sie ihnen Ihren zugehörigen Quellcode an. Das sind die gesamten Compliance-Kosten.",
    licenceHeading: "Was nicht abgedeckt ist",
    licenceBody:
      "AGPL-3.0 erteilt keine Lizenz an dem POPOPX-Namen oder dem Logo. Ein Fork darf alles außer den Marken mitnehmen: benennen Sie die Software um, ersetzen Sie die Marken, behalten Sie den Code.",
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
        q: "Durchsucht der Node mein LAN nach Geräten?",
        a: "Nein. Discovery ist ein rein lesendes GET /v1/discovery/capabilities, das berichtet, was dieser Mac bereits hat: Ollama auf loopback, die von Ihnen freigegebenen Workspace-Ordner, den Berechtigungsstatus von EventKit und ob eine TCP-Verbindung zu einem LAN-Host gelingt, den Sie in den Einstellungen eingetragen haben. Es gibt keinen mDNS-Advertiser, keinen Port-Sweep und keinen Subnetz-Durchlauf im Code. Ein Ziel wird nur zugelassen, wenn es loopback, ein RFC 1918-Literal, eine ULA-Adresse oder ein .local-Name ist; eine öffentliche Adresse wird abgewiesen, bevor ein Socket geöffnet wird, und der Quellcode-Zweig akzeptiert keine Hostnamen, die eine DNS-Abfrage bräuchten.",
      },
      {
        q: "Kann ein MCP-Tool oder ein Smart-Home-Befehl ohne mich laufen?",
        a: "Ein rein lesendes schon, innerhalb der Grenze, die der Eigentümer konfiguriert hat. Ein veränderndes nicht: Es wird zu einem Vorschlag in pending_user_approval und braucht eine Genehmigung, die einen 24 Zeichen langen HMAC-SHA256-Beleg an die Id und das Verb des Vorschlags bindet, fünfzehn Minuten gültig. Der Executor führt genau die Nutzlast aus, die gezeigt wurde, die Aktion wird im lokalen Audit-Protokoll gebucht, und das Ausschalten der Brücke macht das Ausstehende ungültig. Eine Aktion für Schloss, Alarmanlage, Sirene, Kamera oder Saugroboter wird auch in einer sonst großzügigen Konfiguration als hohes Risiko behandelt.",
      },
      {
        q: "Ist der Pairing-QR-Code verschlüsselt?",
        a: "Versiegelt, und der Unterschied zählt. Der QR-Code und die Kopier-Schaltfläche tragen https://popopx.chat/i/v1/ gefolgt von einer ChaCha20-Poly1305-Box, deren Schlüssel mit HKDF-SHA256 aus einer im Quellcode der App veröffentlichten Eingabe abgeleitet wird. Das verbirgt die SMP-Queue-Adresse vor Link-Vorschauen, Screenshots und Weiterleitungen; es hält den Inhalt nicht vor jemandem geheim, der die App hat. Was das Gerät autorisiert, ist das signierte, einmalig gültige fünfzehnminütige Credential darin, und der rohe PPXNODE1-Code und die Einladungs-URI bleiben in der Diagnoseschublade der Konsole statt auf der Vorderseite des Assistenten.",
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
        a: "So viel, wie der Satz darunter sagt. Es sind überschlägige Größenordnungen, keine Messungen an Ihrem Rechner, und der echte Durchsatz verschiebt sich mit Thermik und Last um das Zwei- bis Dreifache. Die nächste Version des Nodes ersetzt sie durch Token- und Watt-Werte pro Engine, gemessen auf dem Rechner, den Sie tatsächlich benutzen.",
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

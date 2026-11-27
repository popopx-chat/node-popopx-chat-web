import type { Dictionary } from "../types";

export const nl: Dictionary = {
  dir: "ltr",

  nav: {
    overview: "Overzicht",
    node: "Wat is een node",
    features: "Capaciteiten",
    install: "Installatie & setup",
    security: "Privacy & controle",
    troubleshooting: "Probleemoplossing",
    releases: "Releases & GitHub",
    download: "Haal de node",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
    chooseLanguage: "Taal",
  },

  ecosystem: {
    heading: "De rest van POPOPX",
    body:
      "Drie portalen, één project, en alle drie van ons. Niets op deze pagina laadt iets van hen en er wordt nooit een verzoek naartoe gedaan: je verlaat node.popopx.chat alleen als je zelf klikt.",
    chat: "POPOPX Chat",
    chatBody:
      "Het netwerk voor berichten zelf — end-to-end, zonder globale ID, en met de wachtrij waar jouw node naar luistert.",
    botStudio: "Bot Studio",
    botStudioBody:
      "Waar de serviceaccounts achter de tien engines geschreven en gehost worden, op een server die jij beheert.",
    serviceSuite: "Serviceaccounts",
    serviceSuiteBody:
      "Het ecosysteem van zero-knowledge-versleutelde kanalen waarmee die engines praten.",
  },

  routes: {
    "/": { eyebrow: "OVERZICHT", title: "POPOPX Mac Node — je eigen Mac draait de tien engines" },
    "/node": { eyebrow: "WAT IS EEN NODE", title: "Wat een node is, en wat het niet is — POPOPX Mac Node" },
    "/features": { eyebrow: "CAPACITEITEN", title: "Tien lokale engines en de hardware die ze draait — POPOPX Mac Node" },
    "/install": { eyebrow: "INSTALLATIE & SETUP", title: "Installeren, koppelen, upgraden, back-uppen, verwijderen — POPOPX Mac Node" },
    "/security": { eyebrow: "PRIVACY & CONTROLE", title: "Wat op je schijf blijft, en hoe je het stopt — POPOPX Mac Node" },
    "/troubleshooting": { eyebrow: "PROBLEEMOPLOSSING", title: "Poorten, firewalls en geheugenplafonds — POPOPX Mac Node" },
    "/releases": { eyebrow: "RELEASES & SOURCE", title: "Releases, digests en de hele broncodeboom — POPOPX Mac Node" },
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Jouw apparaat. Jouw node.",
    titleAccent: "Jouw zeggenschap.",
    subtitle:
      "POPOPX Mac Node is de edge van het netwerk, en die is van jou. Hij draait de engines voor lokale modellen, media en bestanden achter de tien Discover-diensten op je eigen Mac, naast POPOPX Chat en Bot Studio. Het netwerk relayt je versleutelde berichten; de inferentie, de render, het verzegelde archief en de geheimen blijven op hardware die jij kocht.",
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
      "Bewaar de image en het digestbestand van de release in dezelfde map en controleer ze voordat je iets opent. Een release kan een SHA256SUMS.txt-manifest, één losse .sha256-sidecar per asset, of beide publiceren — dus bij Releases & GitHub staan de twee exacte commando's voor de release die je bekijkt.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Je eigen hardware",
    statStorage: "Artefacten op je eigen SSD",
    statIdentity: "Geen account, geen ID",
    statSource: "Van begin tot eind AGPL-3.0",
  },

  overview: {
    splitHeading: "Het netwerk coördineert. Jouw machine voert uit.",
    splitSub:
      "Dit is het hele idee, en de moeite waard om exact te zeggen, want de gebruikelijke lezing van een product als dit is omgekeerd: de cloud doet het werk niet en jouw Mac is geen thin client. Elke kant doet precies het deel dat hij moet doen.",
    cloudTitle: "Wat het netwerk draagt",
    cloudBody:
      "SMP-relays en XFTP-opslag bewegen je berichten en bestanden end-to-end tussen je eigen apparaten, en de tien Discover-serviceaccounts sturen elk één signaal. Een relay ziet ciphertext en routing-metadata. Hij krijgt nooit een model, een prompt, een frame of een bestandsnaam en draait geen enkel deel van enige engine.",
    macTitle: "Wat jouw Mac doet",
    macBody:
      "De node neemt dat signaal en doet het werk op de machine voor je: gekwantiseerde inferentie via Ollama op loopback, LTX-2.5-renders via MLX, FFmpeg en GOP-watermerken, CryptoKit-verzegeling en kluizen met hashketen, diskutil en AppKit voor de fysieke handelingen. Daarna schrijft hij het resultaat naar je eigen schijf.",
    pathsHeading: "Begin waar je werkelijk staat",
    paths: [
      {
        title: "De verdeling begrijpen",
        body:
          "Wat een node is, op welke ene regel hij luistert, hoe een telefoon toestemming krijgt om hem te besturen, en welke poorten erbij horen.",
      },
      {
        title: "Op een Mac zetten",
        body:
          "Vereisten, de geverifieerde DMG, bouwen uit broncode, de eerste koppeling, upgrades, verhuizen naar een andere machine en hem volledig verwijderen.",
      },
      {
        title: "Nagaan wat eruit gaat",
        body:
          "Een map-voor-map-verhaal over de data-root, wat er versleuteld naar je telefoon teruggaat, waar de sleutels staan en hoe je stopt of intrekt.",
      },
      {
        title: "Repareren wat brak",
        body:
          "De storingen die echt gebeuren: een poort die al bezet is, een model dat nooit antwoordde, gewichten die overgeslagen werden, een code die verloopt.",
      },
    ],
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

  dashboard: {
    badge: "UI Preview — mock-up van het interfaceontwerp, geen live node",
    heading: "Wat de console toont zodra de node draait",
    sub:
      "De app brengt één lokale webconsole mee, en dit is een afbeelding van zijn statusscherm: de machine die hij vond, het unified memory dat hij besloot te reserveren, de engines die je hem kunt vragen te draaien, en de telefoons die hij binnenliet. De lay-out, de kolomnamen en de rekenregels zijn die van het product zoals het is uitgeleverd. Hier wordt niets afgelezen van een levend proces.",
    machineLabel: "Voorbeeldmachine",
    machineHint:
      "Bij het opstarten leest de node chip, aantal kernen en fysiek geheugen uit sysctl. Een browser kan dat van de jouwe niet — navigator.deviceMemory is in elke implementatie begrensd op 8 GB — dus kies een van deze configuraties en de getallen hieronder worden opnieuw berekend.",
    statusHeading: "Status",
    statusConnected: "Verbonden",
    daemonRunning: "Daemon draait",
    loopbackNote:
      "De console bindt op 127.0.0.1 en weigert een bind op 0.0.0.0, een LAN-adres of een hostname, dus hij is alleen vanaf deze Mac bereikbaar.",
    memHeading: "Toewijzing van unified memory",
    memTotalLabel: "Unified memory",
    memCeilingLabel: "Plafond resident geheugen",
    memMeshLabel: "Plafond mesh-geheugen",
    memHeadroomLabel: "Ruimte voor de desktopsessie",
    usageLabel: "Werkverzameling van de engines (schatting)",
    servicesHeading: "Lokale engines en diensten",
    servicesNote:
      "Links de tien engines en de drie schappen waaronder ze worden uitgeleverd — dezelfde catalogus die het menu van de telefoon afdrukt. Rechts de drie adressen die de node kent: het ene waarop hij luistert en de twee die hij als client belt. Allebei vaste lijsten, geen metingen, en een engine draait alleen als je hem inschakelt.",
    devicesHeading: "Gekoppelde apparaten",
    deviceColumns: ["Apparaat", "Gekoppeld", "Laatst gezien", "Intrekken"],
    devicesActive: "actief",
    revoke: "Intrekken",
    revokedRow: "ingetrokken",
    neverSeen: "nooit gezien",
    disclaimer:
      "Deze kaart is een afbeelding, geen client. Hij opent geen verbinding en leest geen proces: een machine kiezen past alleen de gepubliceerde niveau-regel van de node toe in je eigen browser, en Intrekken verandert alleen de regel die je bekijkt. In de echte console markeert die knop het apparaat als ingetrokken, vallen zijn commando's vanaf dat moment weg, en wordt de chatverbinding er niet door verbroken — bij Privacy & controle staat precies wat die knop niet doet.",
  },

  node: {
    heading: "Een node is een computer die je al bezit",
    sub:
      "Geen regio, geen instance-type, geen abonnementsniveau. Eén Mac die de delen van POPOPX draait die niet ergens anders zouden moeten gebeuren — en het enige waar je op aan hoeft te gaan, is de machine die je je bestanden al toevertrouwt.",
    points: [
      {
        title: "Het gevoelige werk blijft binnen",
        body:
          "Medische rapporten worden door Vision op je eigen machine gelezen. Ruw beeldmateriaal wordt lokaal gesneden en van een watermerk voorzien. Het verzegelen van de kluis en het verzegelde archief zijn CryptoKit-bewerkingen op je eigen schijf. In geen van die paden is er een gehost endpoint om aan te roepen.",
      },
      {
        title: "De afstand is nul",
        body:
          "Inferentie gebeurt in unified memory naast het proces dat erom vroeg. De modelclient is vastgezet op 127.0.0.1:11434, en daarom is er in de node geen codepad dat een gehoste inferentie-API ook maar per ongeluk kan bereiken — daarvoor moet eerst de host-literal veranderen.",
      },
      {
        title: "Je hebt er al voor betaald",
        body:
          "Rekenpunten meten de cycli die je eigen hardware verbruikt, en het Edge Compute Mesh is de enige engine die overtollige capaciteit uitleent in plaats van hem te lenen. Welk niveau je krijgt, is een functie van het geheugen dat je kocht.",
      },
      {
        title: "Toestemming geldt per apparaat",
        body:
          "Eén ondertekende, eenmalige koppelingscode van vijftien minuten autoriseert één apparaat. De console toont wat gekoppeld is, en intrekken is een knop — met één eerlijke kanttekening over wat die knop niet doet, op de privacy-pagina.",
      },
    ],
    wireHeading: "Eén regel, drie segmenten",
    wireBody:
      "Een commando van de telefoon is een gewoon bericht op je eigen popopx-chat-wachtrij, en erin staat één markeerregel: een prefix, de engine-id, de actie en een JSON-payload. De parser splitst alleen op het eerste scheidingsteken, dus een payload waarin dat teken staat blijft intact, en een regel met een onbekende engine-id, een lege payload of een payload boven het plafond dat de iOS-kant toestaat, wordt verworpen in plaats van gedeeltelijk uitgevoerd.",
    wireSampleLabel: "De enige vorm die geaccepteerd wordt",
    pairingHeading: "Koppeling, in de volgorde waarin het echt gebeurt",
    pairingSub:
      "De node munt een credential uit, je laat het één keer aan de telefoon zien, en daarna is het credential niets meer waard. Er staat niets op een server, omdat er geen server is die het zou kunnen opslaan.",
    pairingSteps: [
      {
        title: "De node biedt aan",
        body:
          "Vanuit de menubalk of de console schrijft de node een aanbod, ondertekent de body met zijn eigen Ed25519-sleutel — die onder pairing/node.key bij zijn data-root — en rendert hem lokaal als QR-code via CoreImage. Geen enkel beeld verlaat de machine.",
      },
      {
        title: "De telefoon claimt hem",
        body:
          "POPOPX iOS scant de code, en het contact dat eruit voortkomt is de sleutel van het apparaat. Die ene scan legt de SMP-brug; daarna praten de Discover-serviceaccounts alleen nog met jouw node en met niets anders.",
      },
      {
        title: "Het aanbod sterft",
        body:
          "De eerste claim markeert het aanbod als gebruikt. Een nieuwe code genereren neemt de vorige uit omloop, dus een gefotografeerde QR is geen uitnodiging die blijft staan — hij verloopt vanzelf na vijftien minuten, ook als niemand hem ooit scant.",
      },
    ],
    pairingFacts: {
      lifetime: "Levensduur van het aanbod",
      singleUse: "Inwisseling",
      signature: "Ondertekend door",
      delivery: "Weergegeven als",
    },
    sealedHeading: "De QR is een verzegelde envelop",
    sealedSub:
      "Sinds 040ef25 dragen de QR en de kopieerknop van de wizard één ondoorzichtige URL in plaats van het ruwe credential. De envelop houdt het relayadres buiten een screenshot, een linkvoorbeeld of een doorgestuurd bericht; het is geen geheim dat de houder van de app niet kan openen.",
    sealedShapeLabel: "Vorm van de verzegelde link",
    sealedFacts: {
      kdf: "Sleutelafleiding",
      cipher: "AEAD",
      nonce: "Nonce",
      caps: "Plafonds van de payload",
    },
    sealedBody:
      "De sleutel wordt met HKDF-SHA256 afgeleid uit een invoer die in de app zelf gepubliceerd is, en de box is ChaCha20-Poly1305 met een vaste associated-data-string, dus iedereen die de bron leest kan een envelop openen. Dat is het ontwerp: de link verbergt het SMP-queueadres voor voorbeelden, screenshots en doorgestuurde berichten, terwijl het ondertekende, eenmalige credential van vijftien minuten erin is wat een apparaat echt autoriseert. De ruwe PPXNODE1-…-code en de uitnodigings-URI met het queueadres blijven in de diagnoselade van de console; de publieke sleutel van de node verschijnt daar en op de rijen van gekoppelde apparaten, nooit op de voorkant van de wizard. Het QR-beeld wordt lokaal gerenderd en alleen op loopback geserveerd op /api/pairing/qr.png.",
    portsHeading: "De luisterende kant van de node",
    portsSub:
      "De node zelf opent één poort. De andere twee zijn van programma's die hij start en als client benadert — dat telt als je een firewall-logboek leest: een verbinding met 11434 of 5225 is door de node gemaakt, niet door hem geaccepteerd.",
    portsColumns: ["Poort", "Gebonden door", "Adres", "Protocol", "Wat hem bewaakt"],
    portsOwner: {
      node: "De node",
      tool: "Ollama",
      daemon: "popopx-chat",
    },
    portsPurpose: {
      console: "Webconsole en de logstream van de engines",
      inference: "Lokale modelinferentie",
      control: "Control-socket van de chatdaemon",
    },
    portsFootnote:
      "Alle drie staan op loopback. De console is platte HTTP zonder TLS, en dat is alleen een redelijk ontwerp omdat ze de machine nooit verlaat: bindpogingen op 0.0.0.0, een LAN-adres of een hostname worden geweigerd vóór er een socket ontstaat, en het adres staat in de app in plaats van in een config-bestand. Wat hem wel beveilt, is een willekeurig token van vierentwintig bytes dat bij elke start opnieuw wordt uitgegeven, als X-PPX-Token meegaat, alleen in het geheugen blijft en met het proces verdwijnt. De control-socket van de chatdaemon heeft überhaupt geen authenticatie — dat is de eerlijke beschrijving ervan — en hij is alleen veilig zolang hij op 127.0.0.1 blijft.",
  },

  hub: {
    heading: "Vijf lokale mogelijkheden, één grens",
    sub:
      "De build 4 voegt eigenaargebonden detectie van mogelijkheden, vier protocoladapters en een verzegelde koppelingslink toe aan de ondertekende image. De bruggen staan standaard uit, elk doel wordt door dezelfde positieve allow-list toegelaten, en elke schrijfactie wordt een ondertekend voorstel dat een mens moet goedkeuren. Niets ervan is een gehoste dienst, en niets ervan opent een nieuwe listener.",
    status:
      "In de ondertekende v1.0.2 build 4 (6de6eb8, 27 november 2026) en in de Universal DMG op deze site. De kaarten hieronder beschrijven de image die je downloadt, niet een bronbranch.",
    cards: [
      {
        title: "Detectie die alleen over zichzelf antwoordt",
        body:
          "De console meldt wat deze Mac al heeft: Ollama op 127.0.0.1:11434 en de modellen die het serveert, de werkruimtemappen die je hebt toegestaan, de toestand van de EventKit-toestemming, en een TCP-bereikbaarheidsrij voor maximaal acht LAN-doelen die je zelf hebt ingetypt. Het is een alleen-lezen GET /v1/discovery/capabilities. Er is geen mDNS-adverteerder, geen poortscan en geen subnetwandeling; alleen loopback, RFC 1918-literalen, ULA en .local-namen worden toegelaten, en een publiek adres wordt geweigerd voordat er een socket opengaat.",
      },
      {
        title: "MCP, binnen de allow-list",
        body:
          "Een lokale MCP-client spreekt JSON-RPC 2.0 initialize, tools/list en tools/call. Servers worden met de hand geregistreerd in config/mcp_servers.json — hoogstens acht. Een stdio-commando moet een absoluut pad zijn binnen een allowedCommands-lijst van zestien items, zonder shell-metatekens; een HTTP-server moet op loopback antwoorden. Een alleen-lezen tool mag draaien; een wijzigende tool wordt nooit op verzoek uitgevoerd, alleen omgezet in een voorstel.",
      },
      {
        title: "Home Assistant en MQTT op de LAN",
        body:
          "Home Assistant via zijn lokale REST-API en een handgeschreven MQTT 3.1.1-client, beide beperkt tot loopback, RFC 1918 en .local. Alleen entiteiten die in exposedEntities genoemd zijn, bestaan voor de brug, de alleen-lezenmodus staat standaard aan, en een brokerpublicatie kan alleen een exposed entiteit onder een prefix die jij instelde adresseren. Credentials zijn Keychain-verwijzingen; settings.json bevat geen token.",
      },
      {
        title: "CalDAV bewaart de gaten, niet de tekst",
        body:
          "PROPFIND en REPORT tegen maximaal vier zelfgehoste CalDAV-servers op de LAN. De iCalendar-parser bewaart DTSTART en DTEND en gooit SUMMARY, DESCRIPTION, LOCATION, ORGANIZER en elke ATTENDEE binnen de parse weg, dus er is geen latere redactiestap die fout kan gaan. Externe bezetblokken worden met een ondergrens van vijftien minuten uit lokale vrije slots gesneden; een herhaling die de parser niet kan evalueren wordt als ondergrens gemeld in plaats van geraden.",
      },
    ],
    boundaryHeading: "Wat de grens weigert",
    boundaryItems: [
      {
        title: "Publieke adressen en niet-opgeloste namen",
        body:
          "Een brugdoel moet loopback, RFC 1918, ULA of een .local-naam zijn. Een kale hostname wordt niet opgelost om te ontdekken of hij publiek is, credentials in een URL worden geweigerd, en een HTTP-brug volgt geen redirect — dus een host op de allow-list kan de node niet doorsturen naar de server van iemand anders.",
      },
      {
        title: "Schrijfacties zonder een mens",
        body:
          "Een smart-home-actuatie of een wijzigende MCP-tool wordt een voorstel in pending_user_approval met een HMAC-SHA256-bewijs dat aan zijn id en werkwoord gebonden is en vijftien minuten geldig is. De payload die draait is de payload die je te zien kreeg, hij wordt geboekt in het lokale auditlogboek, en de brug uitzetten maakt wat openstond ongeldig.",
      },
      {
        title: "Geheimen zonder terugval op platte tekst",
        body:
          "Het Home Assistant-token, het MQTT-wachtwoord en het CalDAV-wachtwoord zijn Keychain-items die via een verwijzing worden aangesproken; een run buiten het pakket houdt ze alleen in het geheugen, en niets valt terug op een bestand. Het MCP-document bewaart namen van omgevingsvariabelen, nooit waarden.",
      },
    ],
    footnote:
      "Privacy & controle zet dezelfde grens regel voor regel uiteen, inclusief wat de node niet kan beloven.",
  },

  extensions: {
    heading: "Twee lokale extensies, één goedkeuringsgrens",
    sub:
      "De build 4 voegt een privéassistent toe die leest, voorstelt en wacht, en een brug naar een 3D-globe die je zelf installeert. Beide staan standaard uit, beide houden hun staat op deze Mac, en geen van beide maakt van de suggestie van een model een schrijfactie zonder een goedkeuringsbewijs.",
    assistantTitle: "Privéassistent en gecontroleerde automatisering",
    assistantSub:
      "Eén manager stelt vier stukken samen: een planner, een mailbrug die alleen-lezen leest en pas na goedkeuring verstuurt, een bewaker voor huishoudapparaten en de goedkeuringspoort die elke schrijfactie moet passeren.",
    assistantFeatures: [
      {
        title: "Vier connectorrechten",
        body:
          "Elke connector meldt een van vier niveaus — read, propose, write of admin. De standaard is read plus propose; een write- of admin-actie wordt opnieuw gecontroleerd bij de ingang van de uitvoerder, niet in de prompt van het model.",
      },
      {
        title: "Een planner die jij aanzet",
        body:
          "Een dagelijkse briefing om 08:00 lokale tijd en een gezondheidsronde door het huis elke 30 minuten. Beide staan standaard uit en alleen de eigenaar kan ze aanzetten; elke run en elke statuswijziging wordt naar ledger/assistant.sqlite3 geschreven.",
      },
      {
        title: "Mail blijft alleen-lezen tot je goedkeurt",
        body:
          "IMAPS 993 opent de mailbox met EXAMINE en BODY.PEEK, classificeert recente mail in beantwoorden, rekening, uitnodiging en melding, en stelt antwoorden op. SMTPS 465 verstuurt pas nadat je hebt goedgekeurd op de telefoonkaart of in de console; de wachtwoorden zijn Keychain-verwijzingen, nooit instellingen.",
      },
      {
        title: "Een bewaker die voorstelt en dan stopt",
        body:
          "De ronde leest alleen de Home Assistant-entiteiten die je hebt blootgesteld. Een entiteit die langer dan zijn drempel (standaard 15 minuten) niet beschikbaar blijft, wordt een reparatievoorstel dat aan de actie, entiteit en payload-digest gebonden is; de reparatie draait één keer, na goedkeuring, en een alleen-lezen brug weigert haar zelfs met een geldig bewijs.",
      },
    ],
    godsEyeTitle: "God's Eye View, in een lus",
    godsEyeSub:
      "Een apart programma van derden dat je zelf op deze Mac installeert en beheert. De node levert alleen de Swift-brug: geen JavaScript, geen kaarttegels en geen data.",
    godsEyeFeatures: [
      {
        title: "Door jou geïnstalleerd, door de node geverifieerd",
        body:
          "Een bestaande installatie of een clone met één klik van een vastgezette commit — de clone is opt-in, nooit op een timer. De pakketnaam, de vastgezette versie, de grootte van package.json en beide entryscripts worden gecontroleerd, en de SHA-256 van de entryscripts wordt vastgelegd; een pad dat buiten de installatieroot uitkomt, ook via een symlink, wordt geweigerd.",
      },
      {
        title: "Constant loopbackadres",
        body:
          "De bindhost is het literaal 127.0.0.1 en is niet configureerbaar; de standaardpoort is 18931. Systeemmappen, ~/.ssh, ~/.gnupg, de Keychain-map en de eigen data-root van de node worden als installatiedoel geweigerd.",
      },
      {
        title: "MCPToolGate kan alleen aanscherpen",
        body:
          "Alleen-lezen geografische tools mogen binnen de MCP-allow-list draaien. Een tool die als wijzigend is geclassificeerd — canvasmarkeringen, tekenen, rapportexport, of elke naam die niet herkenbaar een leesactie is — wordt pending_user_approval, zelfs wanneer de server hem als alleen-lezen aanprijst. De poort kan een niveau aanscherpen, nooit versoepelen.",
      },
    ],
    boundaryHeading: "Wat het goedkeuringsbewijs dekt",
    boundaryItems: [
      {
        title: "Negenhonderd seconden, één gebruik",
        body:
          "Een schrijfactie van de assistent draagt een HMAC-SHA256-bewijs van 32 tekens dat aan het soort operatie, het doel, de digest van de inhoud en de vervaldatum gebonden is. Het is 900 seconden geldig, wordt in constante tijd vergeleken, door de uitvoerder verbruikt vóór enige I/O, en geweigerd als de payload verandert, verloopt, opnieuw wordt afgespeeld of aan een ander voorstel gebonden is.",
      },
      {
        title: "De globe blijft op de lus",
        body:
          "God's Eye View bindt aan het literaal 127.0.0.1 en niets anders; gevoelige mappen, de Keychain-map en de eigen data-root van de node worden als installatiedoel geweigerd, ook na symlinkresolutie. Live feeds worden door jouw eigen lokale programma opgehaald onder de voorwaarden van elke provider — deze node houdt alleen optionele Keychain-verwijzingen en proxyt of cachet de data nooit. Canvas-schrijfacties en rapportexports worden pending_user_approval, zelfs wanneer de server ze alleen-lezen noemt.",
      },
    ],
    footnote:
      "Privacy & controle zet dezelfde grenzen uiteen voor de assistent, de globe en de vier LAN-bruggen, inclusief wat geen van hen kan beloven.",
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
      "Onder 48 GB — een 9B-model op Q4_K_M, alleen korte renders, zwaar videowerk wordt aan het Edge Compute Mesh aangeboden.",
    ],
    plansHeading: "Wat elk niveau echt uitrolt",
    plansSub:
      "De tabel hierboven is de richtlijn die je leest voordat je iets koopt. Deze is wat de node na het opmeten van de machine voor zichzelf opschrijft, rechtstreeks uit de aanbevelingsfunctie, inclusief de modeltag die hij ophaalt.",
    plansColumns: [
      "Geheugenband",
      "Textmodel",
      "Videostack",
      "Plafond RAM-gebruik",
      "Zwaar video",
      "Pull-commando",
    ],
    heavyVideo: {
      local: "Wordt hier gerenderd",
      mesh: "Aangeboden aan het mesh",
    },
    plansFootnote:
      "Dat plafond is een rekenregel over gemeten geheugen, geen benchmark: elk niveau trekt een vaste ruimte voor de desktopsessie af van het unified memory dat het vond, met een cap zodat een zeer grote machine niet méér belooft dan de stack nodig heeft. De modeltags en kwantiseringen zijn de strings die de node daadwerkelijk aan Ollama doorgeeft.",
  },

  install: {
    heading: "Eén DMG, één scan, tien schakelaars",
    sub:
      "De node heeft geen installatieprogramma, geen daemon-account en niets om te registreren. Het is één menubalk-app die aan loopback bindt, en de eerste run doet het profileren zelf.",
    prereqsHeading: "Voordat je downloadt",
    prereqNotes: {
      system: "Het pakket richt zich op macOS 14 en de app is een menubalk-agent.",
      memory:
        "Metal, MLX en de hele niveauladder gaan uit van unified memory. De DMG bevat een x86_64-slice, maar geen enkel deel van de stack is afgestemd op Intel.",
      disk:
        "Modelgewichten worden geweigerd zolang de vrije ruimte op 40 GB of lager staat, dus het plafond van de ladder is ook dat van jouw schijf.",
      media:
        "Vijf van de tien engines roepen FFmpeg aan. De installatiewizard kan hem via Homebrew zetten.",
      inference:
        "Ollama voor gekwantiseerde textmodellen, de LTX-2.5 MLX-werkruimte voor video. Het zijn allebei lokale tools; geen van beide is een dienst.",
      bridge:
        "Alleen nodig voor de SMP-koppelingsstap en het pad dat de telefoon bestuurt. De engines zelf draaien zonder.",
    },
    prereqRequired: {
      hard: "Vereist",
      wizard: "De wizard installeert hem",
      optional: "Alleen om te koppelen",
    },
    steps: [
      {
        title: "De DMG verifiëren en openen",
        body:
          "Neem POPOPX-Mac-Node-Universal.dmg en het digestbestand van de release in dezelfde map en controleer ze voordat je iets opent; bij Releases & GitHub staan de twee commando's voor de huidige release. Sleep POPOPX Mac Node.app naar /Applications. De gepubliceerde build draagt een Developer ID-ondertekening en er zit een genotarieerd ticket aan vast, dus Gatekeeper accepteert hem zonder hulp — spctl -a -vv -t install antwoordt accepted met source=Notarized Developer ID. Een build die je zelf met Scripts/build_dmg.sh maakt, is in plaats daarvan ad-hoc ondertekend, en die wil bij de eerste start wél een Open via rechtsklik.",
      },
      {
        title: "Laat de machine profileren",
        body:
          "Start hem en open de console vanuit de menubalk. Stap één leest chip, aantal kernen, unified memory en vrije SSD uit sysctl, drukt het niveau af dat hij koos en de modeltag die dat inhoudt, en toont de getallen die hij afnam — niet degenen die jij opgaf.",
      },
      {
        title: "De lokale engines uitrollen",
        body:
          "De wizard werkt de lijst af: Homebrew, FFmpeg, uv, Ollama, de Qwen-kwantisering die bij jouw niveau past, de LTX-2.5-werkruimte en dan een zelftest. Het installatielogboek gaat intussen live naar de consolepagina en wordt naar logs/install.log geschreven, zodat een mislukking achteraf nog te lezen is.",
      },
      {
        title: "De iPhone koppelen",
        body:
          "Genereer de koppelings-QR — vanuit de console, of vanuit het menubalk-item voor een nieuwe code — en scan hem met de POPOPX iOS-client. Sinds 040ef25 dragen de QR en de kopieerknop een verzegelde link https://popopx.chat/i/v1/… in plaats van het ruwe credential, zodat een screenshot of een chatvoorbeeld het queueadres niet blootlegt. De code erin is nog steeds ondertekend, eenmalig en verloopt over vijftien minuten; de ruwe PPXNODE1-code en de uitnodigings-URI blijven in de diagnoselade van de console. Het apparaat verschijnt in de lijst met gekoppelde apparaten van de console, met model, koppelingstijdstip en laatste sighting.",
      },
      {
        title: "De engines aanzetten",
        body:
          "Tien schakelaars, in de menubalk en in de console. Een engine draait alleen als je hem inschakelt, en de vier die geen lokaal model nodig hebben — de fysieke vergrendeling, de tijdsvergrendelde kluis, de watermerktracer en de lezer van labrapporten — werken voordat er ook maar één gewicht gedownload is. FFmpeg wordt nog steeds aangeroepen; de modelstack niet.",
      },
    ],
    buildHeading: "Of bouw hem vanuit dezelfde tag",
    buildBody:
      "De release-images worden verpakt uit de boom die je kunt uitchecken. swift build, swift test, swift build -c release, en daarna schrijft bash Scripts/build_dmg.sh --output dist --version v1.0.2 --build 4 de universal DMG, ondertekent hem ad-hoc en geeft de sidecar mee. Het gepubliceerde artefact komt uit het andere script: Scripts/build-release.sh voegt de Developer ID-ondertekening, de Apple-notarisation en de ZIP toe, en daarom komt een gedownloade image door spctl heen en je eigen build niet. Beide draaien alleen op macOS, want ze bestaan uit hdiutil en codesign.",
    lifecycleHeading: "Na de eerste run",
    lifecycle: [
      {
        title: "Upgraden",
        body:
          "De build 4 voegt een door de eigenaar geconfigureerde updategate toe, geen automatische installer. Hij leest alleen de manifeshost die jij noemt, verifieert een Ed25519-handtekening van de sleutel die je vastzette over een strikt nieuwere versie, en installeert niets tot je een aan een bewijs gebonden download goedkeurt; een digest dat niet klopt laat het aanbod vallen. Er is geen vendorendpoint en geen standaardcontrole. Je kunt nog steeds upgraden door de nieuwere DMG te downloaden, te verifiëren en de app te vervangen. Instellingen, koppelingsstatus, de nodesleutel, de kluis en elk artefact wonen onder Application Support en niet in de bundle, dus een vervangen app erft de machine waarop hij terechtkomt.",
      },
      {
        title: "Back-up en verhuizen naar een andere machine",
        body:
          "De app markeert zijn eigen data-root als uitgesloten van Time Machine, wat je back-ups beschermt tegen modelgewichten en een verrassing bij je restore voorkomt. Het betekent ook dat de map niet in je back-up staat. Wil je een node verhuizen: stop hem, kopieer ~/Library/Application Support/PopopxMacNode naar hetzelfde pad op de nieuwe Mac en laat hem opnieuw profileren — het niveau kan veranderen, en pairing/node.key verhuist met de map mee, wat de hele reden is dat die kopie even privé moet zijn als het origineel.",
      },
      {
        title: "Hem volledig verwijderen",
        body:
          "Zet eerst Launch at Login uit en kies dan Quit in de menubalk — dat sluit de listener en geeft het login-item vrij. Verwijder /Applications/POPOPX Mac Node.app en daarna de data-root onder ~/Library/Application Support/PopopxMacNode als ook de verzegelde kluis, de ledger-bestanden en de artefacten weg moeten. Er is geen uninstaller en geen bewijs dat je kunt vergeten: buiten die twee paden is nooit iets geïnstalleerd. Het enige dat die twee paden niet dekken is een Keychain-item — heb je een hubbrug ingesteld, dan overleeft het credential daarvan onder im.popopx.macnode.hub beide verwijderingen, want de Keychain is geen map; verwijder het in Keychain Access, of met de verbindingsknop van de brug zelf.",
      },
    ],
    bridgeTitle: "Bedien de engines vanuit je eigen script",
    bridgeBody:
      "De map integrations bevat een TypeScript-brug en twee agent-adapters. Er wordt geen nieuwe poort door geopend en geen tweede daemon door gestart: de brug hergebruikt de console op 127.0.0.1:18920 en het eenmalige token per proces, en ze stuurt dezelfde NODE_CMD-signaalering als de telefoon. De vergrendelingsactie is dubbele opt-in — allowLockdown moet true zijn en PPX_BRIDGE_SECRET moet minstens zestien tekens lang zijn — en een weigering wordt in het plugin-logboek geschreven zodat je kunt zien dat ze heeft plaatsgevonden.",
    requirementTitle: "Eén eerlijke voorwaarde",
    requirementBody:
      "Stap twee van de wizard van de node zelf, de koppelings-QR en de SMP-brug hebben alle drie op je PATH een popopx-chat-chatdaemon nodig. De node test precies één uitvoerbaar bestand en kent geen terugvalroute, want een upstream-build antwoordt wel op een versieregel maar laat daarna elk commando falen. De tien engines zelf hebben hem niet nodig.",
    signHeading: "Hoe de gepubliceerde build ondertekend is",
    signBody:
      "Het application bundle in de image draagt een Developer ID Application-ondertekening, de vlag voor hardened runtime en een secure timestamp, en er is een notarisation-ticket in vastgemaakt. Daarom laat Gatekeeper hem zonder hulp draaien: spctl -a -vv -t install antwoordt accepted met source=Notarized Developer ID. Het blok hieronder is afgelezen van de exacte bytes die v1.0.2 build 4 op 2026-11-27 publiceert — draai de eerste twee commando's tegen de app in /Applications en je krijgt naar verwachting dezelfde identiteit terug. Er wordt geen Apple-account geraadpleegd en er wordt niets tegen een server gecontroleerd, want het ticket reist op de schijf mee met de app.",
    containerTitle: "De image zelf is niet ondertekend",
    containerBody:
      "Draai spctl tegen de gedownloade .dmg en hij antwoordt rejected met source=no usable signature; codesign -dvv zegt dat datzelfde bestand helemaal niet ondertekend is. Dat is het verwachte antwoord, geen alarm over knoeien. De code-ondertekening van Apple staat op het application bundle, terwijl het notarisation-ticket aan het bundle en aan de schijfimage eromheen vastgemaakt is. De image heeft maar één integriteitscontrole: zijn SHA-256, en dat is de controle verder onderaan deze pagina.",
    provenanceTitle: "Welk script welke artefact oplevert",
    provenanceBody:
      "Twee scripts verpakken deze app en ze komen niet op hetzelfde punt uit. Scripts/build_dmg.sh is de lokale verpakker: hij stelt de bundle samen, signeert ad-hoc met --sign - --timestamp=none en zonder hardened runtime, en schrijft de DMG plus zijn sidecar, dus een build uit dat pad wil bij de eerste start wél een Open via rechtsklik. Scripts/build-release.sh is het Developer ID-pad: het signeert met de hardened runtime, stuurt ter notarisation in, maakt het ticket vast aan zowel het bundle als de image, en schrijft de ZIP naast een SHA256SUMS.txt-manifest. De image die je downloadt is een product van build 4 — de tweede soort, Developer ID-ondertekend, genotarieerd en met ticket — die alleen dat script oplevert. De tag-workflow van de node draait op 6de6eb8 nog steeds Scripts/build_dmg.sh, dus de workflow alleen kan de ondertekende assets niet verklaren; een runner die het certificaat nooit in handen heeft gehad, kan ze niet opleveren.",
    digestHeading: "Controleer het digest voordat je iets opent",
    digestBody:
      "Twee commando's, uitgevoerd in de map waarin je de bestanden hebt opgeslagen. Het manifest van de release is het bestand waartegen je controleert, want het noemt elk artefact in de release en wordt geschreven door dezelfde stap die ze verpakte. In build 4 noemen de .dmg.sha256-sidecar en SHA256SUMS.txt hetzelfde digest, dus elke controle komt overeen. Releases & GitHub drukt het paar af voor de release die het op dat moment vindt, en die kan nieuwer zijn dan degene hieronder.",
    copyCommand: "Commando kopiëren",
    commandCopied: "Gekopieerd",
  },

  security: {
    heading: "Wat blijft, wat weggaat en hoe je het stopt",
    sub:
      "Een privacy-pagina die alleen opsomt wat lokaal blijft, is een marktpagina. Deze noemt ook het verkeer, want de eerlijke versie van „je data verlaat het apparaat nooit“ is langer en nuttiger dan de leus.",
    localHeading: "Blijft op je schijf",
    localSub:
      "Onder één data-root, in een map die de app zelf aanmaakt en van Time Machine uitsluit, met de geheimen atomair weggeschreven in mode 0600 en met volledige bestandsbescherming.",
    localItems: [
      {
        title: "Elk artefact",
        body:
          "Gerenderde clips, briefings, export met watermerk, verzegelde archieven, ontcijferde rapporten en in quarantaine geplaatste inputs komen allemaal onder de data-root terecht en blijven daar. De node houdt een outbox alleen aan voor resultaten die wachten tot je telefoon weer online is.",
      },
      {
        title: "De modellen en hun gewichten",
        body:
          "De Qwen-kwantisering staat in de opslag van Ollama zelf; de LTX-2.5-gewichten staan in de engines-map van de node. Het zijn allebei lokale bestanden op lokale schijf, één keer opgehaald, en die pull wordt geweigerd zolang de vrije ruimte op 40 GB of lager staat.",
      },
      {
        title: "Sleutels en koppelingsstatus",
        body:
          "De Ed25519-sleutel van de node, de lijst met gekoppelde apparaten en het huidige aanbod zijn gewone bestanden onder pairing/. Er is geen cloud-back-up van de sleutel en nergens een bewaring — wat twee kanten op werkt, zoals de paragraaf over verlies hieronder zegt. De uitzonderingen zijn credentials: het token of wachtwoord van een hubbrug, de IMAP- en SMTP-wachtwoorden van de assistent en de feedkeys van God's Eye View zijn Keychain-items, en settings.json bevat alleen de verwijzingen die ze ophalen.",
      },
      {
        title: "Het spoor van bewijs",
        body:
          "De lock-down- en de mesh-ledger worden lokaal met hash-appending aangevuld, en het audit-logboek noteert wat draaide, op welke engine, met welke uitkomst. Het is geschreven om door jou gelezen te worden: logs/node.log is het snelste antwoord op „wat deed dit ding om 03:14“.",
      },
    ],
    transitHeading: "Verlaat de machine",
    transitSub:
      "Vier soorten verkeer verlaten de machine naar het bredere netwerk, en elk ervan is ofwel je eigen apparaat, ofwel iets dat jij instelde. Het mailaccount van de assistent voegt er een vijfde aan toe zodra je het aanzet, en een LAN-brug voegt lokaal verkeer toe op loopback-, RFC 1918- en .local-adressen. Er is in geen ervan een analytics-endpoint om iets naartoe te sturen.",
    transitItems: [
      {
        title: "Resultaten, terug naar je eigen telefoon",
        body:
          "Een afgeronde taak stuurt een kaart van maximaal 1024 tekens plus één bericht per artefactbestand terug, over je eigen popopx-chat-wachtrij, met SMP als relay en XFTP als drager. De relay ziet ciphertext. Staat de telefoon offline, dan wacht het resultaat in outbox/ en probeert het tot dertig dagen door.",
      },
      {
        title: "Feeds die je hem liet lezen",
        body:
          "Morning TV haalt de RSS-bronnen op die jij instelde, afgetopt tot drie megabyte per antwoord, en dat is een gewoon uitgaand HTTPS-verzoek aan wie jouw feeds ook host.",
      },
      {
        title: "Een webhook die je instelde",
        body:
          "De fysieke vergrendeling kan een ondertekende event naar een home-automation- of presence-endpoint POSTen. Het is best effort, het is opt-in, en de URL is van jou — de node heeft geen standaardbestemming.",
      },
      {
        title: "Installaties en model-pulls",
        body:
          "De wizard downloadt Homebrew-formules, FFmpeg, uv, Ollama en de kwantisering die je koos. Dat verkeer is het hele punt van een installatiestap, en het gebeurt één keer, voor je neus, met het logboek in beeld.",
      },
      {
        title: "Het mailaccount van de assistent",
        body:
          "Uit tot je het aanzet en de server intypt. IMAPS 993 leest met EXAMINE en BODY.PEEK, waardoor een bericht nooit als gelezen wordt gemarkeerd; SMTPS 465 verstuurt alleen een concept dat je met een bewijs hebt goedgekeurd. De host staat als literaal in je instellingen en wordt nooit ontdekt; de twee wachtwoorden zijn Keychain-verwijzingen. Geen enkele andere actie van de assistent verlaat de machine.",
      },
    ],
    keysHeading: "Waar de geheimen echt staan",
    keysBody:
      "Koppelings- en kluismateriaal zijn bestanden onder de data-root, geschreven met een atomic write, POSIX mode 0600 en volledige bestandsbescherming, zodat ze in rust niet leesbaar zijn zolang de machine vergrendeld is. De ruil die je maakt is echt — bestandsrechten zijn auditbaar en verplaatsbaar, en ze zijn ook niets tussen jouw gebruikersaccount en een lezer die jouw gebruikersaccount al heeft. Behandel de data-root als het geheim dat hij is: hij staat niet in Time Machine, en hij is de enige kopie van de nodesleutel die er is. Een hubcredential neemt de andere route. Het Home Assistant-token, het MQTT-wachtwoord, het CalDAV-wachtwoord, de IMAP- en SMTP-wachtwoorden van de assistent en de feedkeys van God's Eye View zijn generic-password-items onder de dienst im.popopx.macnode.hub, aangemaakt met kSecAttrAccessibleWhenUnlockedThisDeviceOnly, en het instellingendocument bewaart alleen een verwijzing. Een proces zonder de bundle-identiteit van de app — swift run, een testharnas — krijgt in plaats daarvan een opslag in het geheugen; er is bewust geen terugval op een platte-tekstbestand, dus een credential dat de Keychain niet kan bereiken wordt helemaal niet opgeslagen.",
    dataNote: {
      output: "Gegenereerde artefacten, en de outbox-wachtrij die resultaten vasthoudt die op de telefoon wachten.",
      vault: "Tijdsvergrendelde verzegelde archieven en het ervingsmateriaal dat ze weer opent.",
      pairing: "De Ed25519-nodesleutel, de lijst met gekoppelde apparaten en het huidige eenmalige aanbod.",
      weights: "Modelgewichten en de LTX-2.5 MLX-werkruimte die de video-engines aanroepen.",
      ledger: "Met hash-appending aangevulde lock-down- en mesh-ledgers, plus de begrensde SQLite-auditledger van de assistent (ledger/assistant.sqlite3).",
      logs: "Het installatielogboek en het audit-logboek, geschreven zodat de operator ze leest.",
      config: "Instellingen, engineschakelaars en de config die de bruggen, de assistent en de God's Eye View-kaart delen.",
    },
    rootLabel: "Data-root",
    hubHeading: "De eigen grens van de edgehub",
    hubSub:
      "De vier LAN-bruggen die in build 4 zijn toegevoegd, de privéassistent en de God's Eye View-brug houden zich aan de regels hierboven en aan deze. Ze staan hier en niet op een functiekaart, omdat het beweringen zijn die een lezer uit de code moet kunnen weerleggen.",
    hubItems: [
      {
        title: "Eén toegangspunt",
        body:
          "Elk brugdoel — MCP over HTTP, Home Assistant, MQTT, CalDAV — passeert dezelfde EdgeBoundary-controle voordat er een socket bestaat: loopback, RFC 1918, ULA of .local, zonder DNS-lookup om te ontdekken of een naam publiek is, zonder credentials in de URL en zonder gevolgde redirect. Een weigering is een rij in de console, geen stille nieuwe poging elders.",
      },
      {
        title: "Een bewijs, geen prompt",
        body:
          "Een wijzigende actie wordt niet afgeschermd door een tekstvak in de console. Ze wordt een voorstel in de toestand pending_user_approval, goedgekeurd met een HMAC-SHA256-bewijs van 24 tekens dat aan de id en het werkwoord van het voorstel gebonden is, vijftien minuten geldig is en in het lokale auditlogboek wordt vastgelegd. De payload die de uitvoerder draait is degene die de eigenaar zag, en de brug uitzetten maakt openstaande voorstellen ongeldig.",
      },
      {
        title: "Keychain of geheugen, nooit een bestand",
        body:
          "Brugcredentials staan in Keychain-items die via een verwijzing worden aangesproken, of in het procesgeheugen bij een run buiten het pakket. Er is geen derde optie: niet settings.json, niet een logboek, niet een DMG. Het MCP-document bewaart namen van omgevingsvariabelen, dus een token dat via stdio aan een MCP-server wordt gegeven, komt uit de omgeving die de eigenaar instelde, niet uit een bestand dat de node schreef.",
      },
      {
        title: "Het minimum leren",
        body:
          "CalDAV parst DTSTART en DTEND en gooit titels, beschrijvingen, locaties en deelnemers binnen de parser weg, dus de drukste velden komen helemaal niet in het model. Een voorbeeld van een voorstel toont korte scalaire argumenten en verbergt elke waarde waarvan de sleutel op de redactielijst staat — content, token, password, payload en meer. Discovery is een alleen-lezen GET die de eigen toestand van de machine meldt.",
      },
      {
        title: "De assistent en de globe",
        body:
          "Een mailverzending of een reparatie thuis bereikt de uitvoerder alleen met een HMAC-SHA256-bewijs van 32 tekens dat aan soort, doel, digest en vervaldatum gebonden is, 900 seconden geldig en één keer verbruikt. Mail is de enige genoemde uitgaande uitzondering van de assistent, en zijn wachtwoorden zijn Keychain-verwijzingen. God's Eye View is alleen loopback, verifieert zijn installatie na symlinkresolutie, en zijn MCP-poort kan een tool alleen aanscherpen: canvas-schrijfacties en rapportexports worden pending_user_approval, zelfs wanneer de server ze alleen-lezen noemt. De repository bevat alleen de Swift-brug.",
      },
    ],
    controlHeading: "Jouw kant van de uitschakelaar",
    controlSub:
      "Vier bedieningen, allemaal lokaal, allemaal zichtbaar in de app in plaats van begraven in een instellingenscherm. Geen van hen heeft het netwerk nodig, en daarom werken ze ook als het netwerk juist het probleem is.",
    controls: [
      {
        title: "Eén engine stoppen",
        body:
          "Tien onafhankelijke schakelaars in de menubalk en in de console. Eén uitzetten geldt vanaf het volgende commando, en een commando voor een uitgeschakelde engine wordt geweigerd in plaats van in de wachtrij gelegd.",
      },
      {
        title: "Stoppen met het lenen van cycli",
        body:
          "Pause Mesh Sharing haalt de node onmiddellijk uit de edge-compute-pool; de menubalk toont Paused en hij neemt geen taken meer aan. Dit is de enige bediening waarin het woord pause in de naam zit, en ze gaat over mesh-capaciteit, niet over de hele node.",
      },
      {
        title: "De huidige koppelingscode verbranden",
        body:
          "New Pairing QR neemt het openstaande aanbod uit omloop en munt een vervanger. Iemand met een foto van de oude code heeft een verlopen handtekening, geen tweede kans.",
      },
      {
        title: "Alles stoppen",
        body:
          "Quit is de echte kill switch: hij sluit de loopback-listener, geeft het login-item vrij en laat het token per start met het proces verdwijnen. Een node die niet draait, antwoordt niets — aan niemand, over niets.",
      },
    ],
    revokeHeading: "En het intrekken van een apparaat",
    revokeBody:
      "De lijst met gekoppelde apparaten in de console heeft op elke rij een Revoke-knop. Die markeert het apparaat als ingetrokken, verwijdert zijn contactmapping en laat zijn commando's vanaf dan niet meer door — maar hij breekt de SMP-verbinding niet af, en de app zegt dat in dezelfde melding die hij je toont. Maak het af door het contact in de chat-client te verwijderen. Wat eenmaal op jouw schijf staat, blijft op jouw schijf; intrekken stopt toekomstige commando's, het is geen remote wipe, en een mogelijkheid tot remote wipe heeft de node nooit gehad, dus er was niets om weg te halen.",
    limitsHeading: "Wat deze pagina niet belooft",
    limitsBody:
      "Het veilig vernietigen is een overschrijven met willekeurige data, een sync en een unlink. Op APFS wordt een gewijzigd bestand naar nieuwe blokken geschreven en de SSD remapt logische blokken, dus dat verwijdert het bestand en maakt het gewone herstertools onwerkzaam, maar het bewijst niet dat de oude fysieke bytes weg zijn. Het is het beste wat een userspace-bestands-API kan, en de code zegt dat in het resultaat dat hij teruggeeft. Daarvoorbij: geen globale pause behalve quit, geen remote wipe, geen sleutelbewaring en dus geen herstel als je de machine en de data-root samen verliest, en geen stille updater. De build 4 voegt een updategate toe die alleen de manifeshost leest die jij noemt, alleen een handtekening van de sleutel die je vastzette over een strikt nieuwere versie accepteert, en een bewijs eist voordat hij iets downloadt of installeert; er is geen vendorendpoint en geen standaardbestemming.",
  },

  troubleshooting: {
    heading: "Als het niet doet wat je verwachtte",
    sub:
      "De storingen die op deze architectuur echt voorkomen, in de volgorde waarin mensen ze tegenkomen. Elke noemt waar je eerst naar kijkt, want op een machine zonder serverkant is het logboek altijd de kortste route.",
    columns: ["Verschijnsel", "Wat er aan de hand is", "Wat te doen"],
    items: [
      {
        symptom: "De consolepagina opent niet",
        cause:
          "De poort staat vast op 127.0.0.1:18920 zonder terugval, dus een tweede draaiende instantie — of alles wat er eerder was — houdt de listener. Het token is ook per start: een oud tabblad van vóór een herstart heeft een dood credential.",
        fix:
          "Zoek naar een listener op 18920 en stop de andere instantie, gebruik dan Open Web Console in de menubalk, want die bouwt de huidige URL met het huidige token in plaats van een verouderde.",
      },
      {
        symptom: "Op 11434 antwoordt niemand",
        cause:
          "De engines die een model nodig hebben, praten alleen met Ollama op loopback. Draait Ollama niet, of is het zonder de wizard geïnstalleerd, dan faalt de engine in plaats van terug te vallen op iets gehosts.",
        fix:
          "Start Ollama, controleer of OLLAMA_HOST op loopback staat, en haal de kwantisering op die de niveautabel voor jouw machine noemt. De fouttekst citeert het commando dat gewerkt zou hebben.",
      },
      {
        symptom: "De gewichten zijn nooit gedownload",
        cause:
          "De installer slaat gewichts-downloads over tenzij weightSources in config/engines.json verklaard is, en weigert het volledig zolang de vrije ruimte op 40 GB of lager staat.",
        fix:
          "Voeg de bron toe die je wilt ophalen, of kopieer de gewichten naar engines/weights en wijs de config ernaar. Maak eerst schijfruimte vrij; de bewaking is een drempel, geen waarschuwing.",
      },
      {
        symptom: "Een render kwam terug als commandoregel",
        cause:
          "Videowerk heeft de LTX-2.5-werkruimte en zijn gewichten nodig. Zonder die geeft de engine precies het commando terug dat hij gedraaid zou hebben, in plaats van te doen alsof er een bestand is gemaakt.",
        fix:
          "Rond de werkruimtestap van de wizard af, of clone de LTX-2-MLX-werkruimte die hij noemt, en draai opnieuw. Dit is opzettelijk: een gesimuleerd succes is slechter dan een eerlijke weigering.",
      },
      {
        symptom: "De koppelingscode wordt geweigerd",
        cause:
          "Een aanbod is eenmalig en leeft vijftien minuten. Een tweede scan van dezelfde code, of een code van een scherm dat intussen doorliep, wordt terecht geweigerd.",
        fix:
          "Genereer een nieuwe code en scan hem één keer. Als de telefoon na een succes vanzelf opnieuw probeert, heeft de eerste claim al gewonnen en is de weigering het verwachte antwoord.",
      },
      {
        symptom: "Commando's van de telefoon doen niets",
        cause:
          "De brug heeft op je PATH een popopx-chat-daemon nodig, en de node test precies één uitvoerbaar bestand zonder terugvalroute. In de menubalk staat dan popopx-chat not installed, en een engine die uitstaat antwoordt hoe dan ook niet.",
        fix:
          "Lees eerst de brug-regel in de menubalk, dan de engineschakelaars, dan het audit-logboek. Een commando dat geweigerd werd en een commando dat nooit aankwam, zien er vanaf de telefoon identiek uit.",
      },
      {
        symptom: "Resultaten komen niet meer aan terwijl de telefoon weg is",
        cause:
          "De uitgaande bezorging loopt via jouw eigen daemon en relay, dus een firewall die uitgaand blokkeert, een vpn die de relay niet meeneemt of een daemon die gestopt is, zien er vanaf hier hetzelfde uit. Resultaten zijn niet kwijt: ze staan in outbox/ in de wachtrij en proberen tot dertig dagen door.",
        fix:
          "Bevestig dat de daemon draait, laat daarna de uitgaande verbindingen van de node toe door wat ze ook filtert, en wacht tot de wachtrij leegloopt in plaats van de taak opnieuw te starten.",
      },
      {
        symptom: "De downloadkaart toont de vastgezette release",
        cause:
          "api.github.com was niet bereikbaar, werd geblokkeerd, kreeg een rate limit of antwoordde zonder downloadbaar asset. De pagina rendert dan de release die in de bundle gecompileerd is, in plaats van te raden.",
        fix:
          "Open de releasepagina direct. Niets anders op de site heeft die aanroep nodig, en geen enkel deel van de pagina blijft leeg door een mislukte.",
      },
    ],
    escalation:
      "Twee bestanden beantwoorden het meeste van de rest: logs/install.log voor alles wat de wizard deed, en logs/node.log voor alles daarna. Beide zijn platte tekst onder de data-root, en het eigen logkanaal van de console toont dezelfde events live. Overleeft een storing het lezen ervan, dan staat het contract dat de node en de integrations samen testen in de repository, en horen issues bij popopx-mac-node.",
  },

  releases: {
    heading: "Releases, digests en de hele boom",
    sub:
      "Alles waaruit de node gebouwd wordt, staat in één AGPL-3.0-only-repository, en elke gepubliceerde image is vóór het openen tegen een digest te controleren. Dit is het deel waar de site ophoudt te beschrijven en begint aan te wijzen.",
    assetsHeading: "Gepubliceerde assets",
    assetsColumns: ["Bestand", "Wat het is", "Grootte"],
    assetKinds: {
      dmg: "Schijfkopie om naar /Applications te slepen, universal arm64 en x86_64. Dit is degene die je moet hebben.",
      sidecar: "Een digest voor één bestand, geschreven door de verpakkingstap die het bouwde.",
      zip: "Het ondertekende applicatiebundle als ZIP-inhoud, voor een archief in plaats van een volume.",
      sums: "Een manifest dat elk artefact in de release met zijn digest opsomt.",
    },
    missingAsset:
      "Niet elke release publiceerde elke asset. Oudere releases dragen alleen de schijfkopie en zijn sidecar, en daarom gaat de controle hieronder uit van de release die je daadwerkelijk geopend hebt.",
    verifyHeading: "Verifieer voordat je iets opent",
    verifyBody:
      "Twee commando's, uitgevoerd in de map waarnaar je gedownload hebt. De manifestvorm heeft de voorkeur en is wat de huidige release publiceert.",
    verifySumsBody:
      "Een releasemanifest somt elke artefact op, dus een bestand dat je niet downloadde is normaal en niet ontbrekend: geef --ignore-missing mee en lees de regel die bij jouw bestand hoort. Het manifest wordt in dezelfde stap geschreven die de payload verpakt die het noemt.",
    verifySidecarBody:
      "Een oudere release publiceert in plaats daarvan een sidecar voor één asset, en dat is het bestand waartegen je controleert. De build 4 publiceert beide en ze noemen hetzelfde digest; waar de bestanden van een release verschillen, geloof het manifest, want de sidecar kan uit een andere build van dezelfde versie komen.",
    pipelineHeading: "Hoe een versie hier komt",
    pipelineBody:
      "Een tag pushen draait de release-workflow op een macOS-runner: die bouwt de boom, voert de contracttests uit, verpakt de universal image met Scripts/build_dmg.sh, weigert een checksum-bestand met een absoluut pad te publiceren en uploadt de DMG en zijn sidecar. Dat is het ad-hocpad. De ondertekende build 4-image, zijn ZIP en SHA256SUMS.txt komen uit Scripts/build-release.sh, die met de Developer ID-identiteit, de hardened runtime en een secure timestamp signeert, bij Apples notarisationdienst indient en het ticket aan zowel het bundle als de image vastmaakt. De tag-workflow op 6de6eb8 roept dat script niet aan, dus de ondertekende assets kunnen niet de output van de workflow zijn. Beide paden eindigen op dezelfde plek: een digest die je controleren kunt zonder deze pagina te geloven.",
    supportedHeading: "Draait vandaag",
    supportedItems: [
      "Alle tien engines, elk met zijn eigen actieset en weigeringspaden, afzonderlijk aangezet.",
      "Automatische niveaukeuze uit sysctl, met de modelpull die elk niveau inhoudt.",
      "Ondertekende, eenmalige, vijftienminuten koppeling, en een console die uitsluitend aan loopback bindt.",
      "De TypeScript-brug en twee agent-adapters over dezelfde console en hetzelfde token.",
      "De privéassistent en de God's Eye View-brug: aan een bewijs gebonden schrijfacties, een toolpoort die alleen loopback toestaat, en beide standaard uit.",
    ],
    roadmapHeading: "Nog niet",
    roadmapSub:
      "In de repository opgeschreven als plannen, niet op een pagina als beloftes. Niets daarvan draait vandaag.",
    roadmap: [
      {
        title: "Meting per engine op je eigen machine",
        body:
          "Een usage-dashboard en tijdlijnen van storingen die tot op de telefoon teruggebracht worden: token- en watt-meting van de machine voor je, die de schattingen in de hardwaretabel vervangen.",
      },
      {
        title: "Hardere mesh-isolatie en een exporteerbare ledger",
        body:
          "Sterkere inperking voor geleende capaciteit en een ledger die je uit de app kunt halen in plaats van erin te lezen.",
      },
      {
        title: "Gescheiden bewaring voor meer dan één erfgenaam",
        body:
          "Het splitsen van ervingsmateriaal over meerdere erfgenamen, en meer rapportlayouts in de health-engine.",
      },
      {
        title: "Ondertekende distributiekanalen en meer videoniveaus",
        body:
          "Evaluatie van een winkelkanaal voorbij notarisation, en extra LTX-niveaus voor geheugenbanden die de ladder nog niet dekt.",
      },
    ],
    sourceHeading: "De broncode, en wat de licentie verplicht",
    sourceBody:
      "Eén repository, AGPL-3.0-only, geen gesloten kern: de engines, de console, de watermerken en de ledger zitten er allemaal in, en de code voor de credentials op basis van een blinde handtekening en het register met cryptografische parameters staan open in popopxmq ernaast. Artikel 13 geldt op de gewone manier: voer het uit, bestudeer het, bewerk het vrij, en als je een aangepaste node als dienst aan andere mensen aanbiedt, moet jij hen je bijbehorende broncode aanbieden. Dat zijn de volledige kosten voor naleving.",
    licenceHeading: "Wat niet gedekt is",
    licenceBody:
      "AGPL-3.0 geeft geen licentie op de naam of het logo van POPOPX. Een fork mag alles meen behalve de merken: hernoem de software, vervang de merken, houd de code.",
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
        q: "Scant de node mijn LAN naar apparaten?",
        a: "Nee. Discovery is een alleen-lezen GET /v1/discovery/capabilities die meldt wat deze Mac al heeft: Ollama op loopback, de werkruimtemappen die je hebt toegestaan, de toestand van de EventKit-toestemming, en of een TCP-verbinding naar een LAN-host die je in de instellingen typte slaagt. Er zit geen mDNS-adverteerder, geen poortscan en geen subnetwandeling in de code. Een doel wordt alleen toegelaten als het loopback is, een RFC 1918-literaal, een ULA-adres of een .local-naam; een publiek adres wordt geweigerd voordat er een socket opengaat, en de ondertekende build accepteert geen hostnames die een DNS-lookup zouden vereisen. De LAN Discover van build 4 staat standaard uit en kijkt alleen naar de mappen, feeds en MCP-servers die jij instelt, met een ondergrens van zestig seconden tussen verversingen.",
      },
      {
        q: "Kan een MCP-tool of een smart-home-commando zonder mij draaien?",
        a: "Een alleen-lezen tool wel, binnen de grens die de eigenaar instelde. Een wijzigende niet: die wordt een voorstel in pending_user_approval en heeft een goedkeuring nodig die een HMAC-SHA256-bewijs van 24 tekens mint dat aan de id en het werkwoord van het voorstel gebonden is, vijftien minuten geldig. De uitvoerder draait precies de payload die getoond werd, de actie wordt in het lokale auditlogboek geboekt, en de brug uitzetten maakt wat openstond ongeldig. Een actie voor slot, alarm, sirene, camera of stofzuiger wordt ook in een verder ruime configuratie als hoog risico behandeld.",
      },
      {
        q: "Is de koppelings-QR versleuteld?",
        a: "Verzegeld, en dat verschil is belangrijk. De QR en de kopieerknop dragen https://popopx.chat/i/v1/ gevolgd door een ChaCha20-Poly1305-box waarvan de sleutel met HKDF-SHA256 is afgeleid uit een invoer die in de bron van de app zelf gepubliceerd is. Dat verbergt het SMP-queueadres voor linkvoorbeelden, screenshots en doorgestuurde berichten; het houdt de inhoud niet weg bij wie de app heeft. Wat het apparaat autoriseert is het ondertekende, eenmalige credential van vijftien minuten erin, en de ruwe PPXNODE1-code en de uitnodigings-URI blijven in de diagnoselade van de console in plaats van op de voorkant van de wizard.",
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
        a: "Zo veel als de zin eronder zegt. Het zijn grove hoofdrekeningen, geen metingen op jouw machine, en de echte doorvoer verschuift met thermiek en belasting met twee tot drie keer. De volgende versie van de node vervangt ze door token- en watt-meting per engine op de machine die je daadwerkelijk gebruikt.",
      },
      {
        q: "Welke machines worden ondersteund?",
        a: "macOS 14 of nieuwer op Apple Silicon. De niveauladder, Metal en MLX gaan allemaal uit van unified memory, en MLX draait niet op Intel, dus een Intel-Mac is geen host waar dit project zich op richt, ook al bevat de universal DMG nog steeds een x86_64-slice. De app zelf linkt geen enkele bibliotheek van derden: alleen Apple-frameworks. Wat de app aanstuurt staat bewust los daarvan — Ollama, FFmpeg en de LTX-2.5-gewichten zijn lokale tools die de engines aanroepen, en elke engine vermeldt welke hij nodig heeft.",
      },
      {
        q: "Kan de assistent mail versturen of een apparaat schakelen zonder mij?",
        a: "Nee. Lezen en opstellen is lokaal en alleen-lezen; een verzending of een reparatie is een voorstel in pending_user_approval. De uitvoerder accepteert alleen een HMAC-SHA256-bewijs van 32 tekens dat aan de operatie, het doel, de digest en de vervaldatum gebonden is, 900 seconden geldig en één keer bruikbaar. Mailcredentials staan in de macOS-Keychain, en een alleen-lezen Home Assistant-brug weigert de reparatie zelfs met een geldig bewijs.",
      },
      {
        q: "Roept de God's Eye View-brug de cloud aan of scant hij mijn netwerk?",
        a: "Nee. Hij start een programma dat jij op deze Mac hebt geïnstalleerd, zet het vast op 127.0.0.1, verifieert de entryscripts na symlinkresolutie en haalt alleen bron op als jij dat aanzet. De node houdt optionele Keychain-verwijzingen voor feedkeys; jouw lokale programma haalt de feeds op onder de voorwaarden van elke provider, en de node proxyt of cachet ze nooit. Canvas-schrijfacties en rapportexports worden pending_user_approval, zelfs als de server ze alleen-lezen noemt.",
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

import type { Dictionary } from "../types";

export const hu: Dictionary = {
  dir: "ltr",

  nav: {
    overview: "Áttekintés",
    node: "Mi az a node",
    features: "Képességek",
    install: "Telepítés és beállítás",
    security: "Adatvédelem és irányítás",
    troubleshooting: "Hibaelhárítás",
    releases: "Kiadások és GitHub",
    download: "Szerezd be a node-ot",
    openMenu: "Menü megnyitása",
    closeMenu: "Menü bezárása",
    chooseLanguage: "Nyelv",
  },

  ecosystem: {
    heading: "A POPOPX többi része",
    body:
      "Három portal, egy projekt, és mind a miénk. Ezen az oldalon semmi nem tölt be róluk, és feléjük sosem megy kérés: csak akkor hagyod el a node.popopx.chat címet, ha magad kattintasz.",
    chat: "POPOPX Chat",
    chatBody:
      "Maga az üzenethálózat – végpontok között titkosítva, globális azonosító nélkül, és ez az az üzenetsor, amelyre a node-ed hallgat.",
    botStudio: "Bot Studio",
    botStudioBody:
      "Itt írják és itt futnak a tíz motor mögötti szolgáltatásfiókok, egy olyan szerveren, amelyet te irányítasz.",
    serviceSuite: "Szolgáltatásfiókok",
    serviceSuiteBody:
      "A nullaismeretű, titkosított csatornák ökoszisztémája, amelyikkel ezek a motorok beszélgetnek.",
  },

  routes: {
    "/": { eyebrow: "ÁLTEKINTŐ", title: "POPOPX Mac Node – a saját Maced futtatja a tíz motort" },
    "/node": { eyebrow: "MI AZ A NODE", title: "Mi az a node, és mi nem az – POPOPX Mac Node" },
    "/features": { eyebrow: "KÉPESSÉGEK", title: "Tíz helyi motor és a hardver, amely futtatja őket – POPOPX Mac Node" },
    "/install": { eyebrow: "TELEPÍTÉS ÉS BEÁLLÍTÁS", title: "Telepítés, párosítás, frissítés, mentés és eltávolítás – POPOPX Mac Node" },
    "/security": { eyebrow: "ADATVÉDELEM ÉS IRÁNYÍTÁS", title: "Mi marad a lemezeden, és hogyan állíthatod le – POPOPX Mac Node" },
    "/troubleshooting": { eyebrow: "HIBAELHÁRÍTÁS", title: "Portok, tűzfalak és memóriaplafonok – POPOPX Mac Node" },
    "/releases": { eyebrow: "KIADÁSOK ÉS FORRÁSKÓD", title: "Kiadások, ellenőrzőösszegek és az egész forráskódfa – POPOPX Mac Node" },
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "A te eszközöd. A te node-od.",
    titleAccent: "A te irányításod.",
    subtitle:
      "A POPOPX Mac Node a hálózatnak az a széle, amelyik a tiéd. A saját Maceden futtatja a tíz Discover-szolgáltatás mögötti helyi modell-, média- és fájlmotorokat, a POPOPX Chat és a Bot Studio mellett. A hálózat továbbítja a titkosított üzeneteidet; az inferencia, a renderelés, a lepecsételt archívum és a titkok azon a hardveren maradnak, amelyet megvettél.",
    ctaDownload: "Töltsd le a DMG-t",
    ctaSource: "Olvasd el a forráskódot",
    releaseLabel: "Legfrissebb kiadás",
    sizeLabel: "Méret",
    digestLabel: "SHA-256",
    statusFetching: "Lekérdezés a GitHub Releases oldalról…",
    statusLive: "Élő adat a GitHub Releases oldalról",
    statusFallback: "A GitHub nem érhető el — a rögzített kiadás jelenik meg",
    copyDigest: "Ellenőrzőösszeg másolása",
    digestCopied: "Ellenőrzőösszeg kimásolva",
    verifyTitle: "Ellenőrizd, mielőtt megnyitod",
    verifyBody:
      "Mentsd a lemezképet és a kiadás ellenőrzőösszeg-fájlját ugyanabba a mappába, és ellenőrizd őket, mielőtt bármit megnyitsz. A kísérőfájl formája kiadásonként változik – az újabb kiadás SHA256SUMS.txt jegyzéket tesz közzé, a régebbi egyetlen assethez tartozó .sha256 fájlt –, ezért a Kiadások és GitHub szakasz pontosan azt a két parancsot írja ki, amelyik épp a nézett kiadásra vonatkozik.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "A saját hardvered",
    statStorage: "Eredmények a saját SSD-dre",
    statIdentity: "Nincs fiók, nincs azonosító",
    statSource: "Végig AGPL-3.0",
  },

  overview: {
    splitHeading: "A hálózat koordinál. A géped hajtja végre.",
    splitSub:
      "Ez a teljes ötlet, és érdemes pontosan kimondani, mert az efféle termékek szokásos olvasata fordított: nem a felhő végzi a munkát, és a Maced nem vékony kliens. Mindkét fél pontosan azt a részt csinálja meg, amelyik illeszik hozzá.",
    cloudTitle: "Mit cipel a hálózat",
    cloudBody:
      "Az SMP-relék és az XFTP-tároló végpontok között mozgatja az üzeneteidet és a fájljaidat a saját eszközeid között, a tíz Discover szolgáltatásfiók pedig fejenként egy jelet küld. Egy relé titkosított szöveget és útválasztási metaadatot lát. Sosem kap modellt, promptot, képkockát vagy fájlnevet, és a motorok egyetlen részét sem futtatja.",
    macTitle: "Mit csinál a Maced",
    macBody:
      "A node átveszi ezt a jelet, és a munkát a szemed előtt álló gépen végzi el: kvantált inferencia az Ollamán át loopbackön, LTX-2.5 renderelése MLX-en, FFmpeg és GOP-alapú vízjelzés, CryptoKit lepecsételés és hash-láncos széfek, diskutil és AppKit a fizikai műveletekhez. Aztán az eredményt a saját lemezeden írja ki.",
    pathsHeading: "Kezdd ott, ahol valóban vagy",
    paths: [
      {
        title: "Értsd meg a felosztást",
        body:
          "Mi az a node, melyik egyetlen sorra hallgat, hogyan kap engedélyt egy telefon a irányítására, és melyik portok érintettek.",
      },
      {
        title: "Telepítsd egy Macre",
        body:
          "Előfeltételek, az ellenőrzött DMG, buildelés a forrásból, az első párosítás, a frissítések, a másik gépre költözés, és a teljes eltávolítás.",
      },
      {
        title: "Nézd meg, mi megy ki",
        body:
          "A gyökérmappáról szóló, mappánkénti beszámoló, arról, mi megy vissza a telefonodra, hol élnek a kulcsok, és hogyan állíthatod le vagy vonhatod vissza.",
      },
      {
        title: "Javítsd ki, ami elromlott",
        body:
          "Azok a hibák, amelyek valóban előfordulnak: egy már foglalt port, egy sosem válaszoló modell, kihagyott súlyok, egy lejárt kód.",
      },
    ],
  },

  architecture: {
    heading: "Három garancia, és nincs köztük szolgáltatás",
    sub:
      "Az architekturában az a legérdekesebb, ami nincs benne: nincs fiókszolgáltatás, nincs kulcsőrzés, nincs analitikai végpont és nincs távol üzemeltetett inferencia.",
    items: [
      {
        title: "Fizikai helyi tárolás",
        body:
          "A motorok által előállított minden eredmény – az eligazítás, a vízjeles klip, a lepecsételt archívum, a dekódolt jelentés – egyetlen gyökérmappa alatt, a saját SSD-dre íródik. Kívül esik az iCloud szinkronizálásán és minden megosztott konténeren, a naplók pedig teljes fájlvédelemmel kerülnek a lemezre, így a gép lezárása után a lemezen már nem olvashatók.",
      },
      {
        title: "Nincs fiók, nincs azonosító",
        body:
          "Nincs regisztráció, nincs telefonszám, nincs e-mail-cím és nincs átadható eszközazonosító. A telefon párosítása a node-dal egyetlen QR-kód beolvasása, és az ezután érkező parancsok a saját popopx-chat üzenetsorodon haladnak, az SMP és az XFTP szállítja őket végig.",
      },
      {
        title: "AGPL-3.0 végig a teljes stacken",
        body:
          "A tíz motor, az SMP-átjáró, a helyi webes konzol, a GOP- és frekvenciatartomány-alapú vízjelzés és a számítási kreditek naplója egyetlen AGPL-3.0-only forráskódfa. Nincs zárt mag: a vakalírásos hitelesítő kód és a kriptográfiai paraméterregiszter a popopxmq projektben, nyíltan él.",
      },
    ],
  },

  dashboard: {
    badge: "UI Preview – a felület tervezési mockupja, nem egy élő node",
    heading: "Ezt mutatja a konzol, amikor a node már fut",
    sub:
      "Az alkalmazás egyetlen helyi webes konzolt tartalmaz, és ez egy kép annak állapotképernyőjéről: a gép, amelyet megtalált, az az egységesített memória, amelyet le kíván foglalni, a motorok, amelyeknek a futtatását kérheted tőle, és a telefonok, amelyeket beengedett. Az elrendezés, az oszlopnevek és a számtani szabályok ugyanazok, mint a kiadott termékben. Ezek egyike sem egy élő folyamatból lett kiolvasva.",
    machineLabel: "Mintagép",
    machineHint:
      "A node induláskor a sysctl-ből olvassa ki a lapkát, a magok számát és a fizikai memóriát. Egy böngésző a tiédet nem tudja kiolvasni – a navigator.deviceMemory minden megvalósításban 8 GB-re van korlátozva –, ezért válassz egyet az alábbi konfigurációk közül, és a számok újraszámolódnak.",
    statusHeading: "Állapot",
    statusConnected: "Csatlakozva",
    daemonRunning: "A démon fut",
    loopbackNote:
      "A konzol a 127.0.0.1 címre köt ki, és elutasítja a 0.0.0.0-ra, egy helyihálózati címre vagy egy gépnévre történő kikötést, így csak erről a Macről érhető el.",
    memHeading: "Az egységesített memória felosztása",
    memTotalLabel: "Egységesített memória",
    memCeilingLabel: "Memóriaplafon",
    memMeshLabel: "Mesh-plafon",
    memHeadroomLabel: "Fenntartás az asztali munkamenetnek",
    usageLabel: "A motorok munkakészlete (becslés)",
    servicesHeading: "Helyi motorok és szolgáltatások",
    servicesNote:
      "Balra a tíz motor és a három polc, amelyik alatt érkeznek – ugyanaz a katalógus, amelyet a telefon menüje nyomtat. Jobbra a három cím, amelyet a node ismer: az egy, amelyiken figyel, és a kettő, amelyet kliensként kezdeményez. Mindkettő rögzített lista, nem mérés, és egy motor csak akkor fut, ha bekapcsolod.",
    devicesHeading: "Párosított eszközök",
    deviceColumns: ["Eszköz", "Párosítva", "Utolsó megfigyelés", "Visszavonás"],
    devicesActive: "aktív",
    revoke: "Visszavonás",
    revokedRow: "visszavonva",
    neverSeen: "sosem jelent meg",
    disclaimer:
      "Ez a kártya egy kép, nem egy kliens. Nem nyit kapcsolatot és nem olvas ki folyamatot: egy gép kiválasztása a node közzétett szintszabályát alkalmazza a saját böngésződben, a Visszavonás pedig csak azon a soron változtat, amelyiket éppen nézed. Az igazi konzolban az a gomb visszavontnak jelöli az eszközt, onnantól eldobja a parancsait, és a chatkapcsolatot nem bontja le – az Adatvédelem és irányítás oldal pontosan azt írja le, amit nem tesz.",
  },

  node: {
    heading: "A node egy olyan számítógép, amelyik már a tiéd",
    sub:
      "Nem egy régió, nem egy példánytípus, nem egy előfizetési szint. Egyetlen Mac, amelyik elvégzi a POPOPX azon részeit, amelyeknek nem kellene máshol történniük – és az egyetlen dologban, amiben megbíznod kell, az a gép, amelyiknek a fájljaidat már most is megbízod.",
    points: [
      {
        title: "Az érzékeny munka sosem indul el",
        body:
          "Az orvosi leleteket a Vision a saját gépeden elemzi. A nyers felvételek helyben darabolódnak és kapnak vízjelet. A széf lepecsétélése és a lepecsételt archívum a saját lemezeden végzett CryptoKit-műveletek. Ezen utak egyike sincs olyan távol üzemeltetett végponthoz kötve, amelyet hívhatna.",
      },
      {
        title: "A távolság nulla",
        body:
          "Az inferencia az egységesített memóriában történik, annak a folyamatnak a szomszédságában, amelyik kérte. A modellkliens a 127.0.0.1:11434 címre van rögzítve, ezért a node-ban nincs egyetlen kódútvonal sem, amelyik távol üzemeltetett inferencia API-t érne el még véletlenül sem – előbb kellene megváltoztatni a host-literált.",
      },
      {
        title: "Érte már fizettél",
        body:
          "A számítási kreditek a saját hardvered által elköltött ciklusokat mérik, és a számítási mesh az az egyetlen motor, amelyik üres kapacitást kifelé ad kölcsön, nem pedig befelé vesz kölcsön. Az a szint, amit kapsz, annak a függvénye, mekkora memóriát vettél.",
      },
      {
        title: "Az engedély eszközönként jár",
        body:
          "Egy aláírt, egyszer használható, tizenöt perces párosítókód egy eszközt jogosult. A konzol listázza, mi van párosítva, és a visszavonás egy gomb – egy becsületes fenntartással arról, amit az a gomb nem tesz el; ez az adatvédelmi oldalon szerepel.",
      },
    ],
    wireHeading: "Egy sor, három szakasz",
    wireBody:
      "A telefonról érkező parancs egy közönséges üzenet a saját popopx-chat üzenetsorodon, és benne van egyetlen jelölősor: egy előtag, a motor azonosítója, a művelet és egy JSON-tartalom. A feldolgozó csak az első elválasztón bont, ezért az elválasztót tartalmazó tartalom ép marad; egy olyan sort azonban, amelyiknek a motor-azonosítója nem ismert, amelyiknek a tartalma üres, vagy amelyik a iOS oldal által elfogadott plafon fölé megy, a rendszer eldob a részleges végrehajtás helyett.",
    wireSampleLabel: "Az egyetlen elfogadott forma",
    pairingHeading: "A párosítás, abban a sorrendben, ahogy tényleg megtörténik",
    pairingSub:
      "A node készít egy hitelesítőt, te egyszer megmutatod a telefonnak, és utána a hitelesítő értéktelen. Szerveren semmi nem tárolódik, mert nincs is olyan szerver, amelyik tárolhatná.",
    pairingSteps: [
      {
        title: "A node ajánlatot tesz",
        body:
          "A menüsávról vagy a konzolból a node ír egy ajánlatot, a saját Ed25519 kulcsával írja alá a törzsét – azzal, amelyik a pairing/node.key fájlban van a gyökérmappája alatt –, és CoreImage-on át, helyben QR-kóddá rendereli. Egyetlen kép sem hagyja el a gépet.",
      },
      {
        title: "A telefon átveszi",
        body:
          "A POPOPX iOS beolvassa a kódot, és a belőle létrejövő névjegy maga az eszköz-kulcs. Ez az egy beolvasás hozza létre az SMP-hidat; ettől kezdve a Discover szolgáltatásfiókjai a node-oddal beszélgetnek, másokkal nem.",
      },
      {
        title: "Az ajánlat meghal",
        body:
          "Az első átvétel használtként jelöli meg az ajánlatot. Új kód generálása a korábbit nyugdíjba küldi, ezért egy lefényképezett QR-kód nem állandó meghívó – tizenöt perc múltán magától lejár, akkor is, ha sosem olvassa be senki.",
      },
    ],
    pairingFacts: {
      lifetime: "Az ajánlat élettartama",
      singleUse: "Átvétel",
      signature: "Aláírta",
      delivery: "Renderelés formája",
    },
    portsHeading: "A node figyelő oldala",
    portsSub:
      "Magának a node-nak egyetlen kinyitott portja van. A másik kettő olyan programoké, amelyiket a node elindít, és amelyekhez kliensként kapcsolódik – ez számít, amikor egy tűzfalnaplót olvasol: a 11434 vagy az 5225 felé irányuló kapcsolatot a node kezdeményezte, nem fogadta.",
    portsColumns: ["Port", "Ki köti be", "Cím", "Protokoll", "Mi védi"],
    portsOwner: {
      node: "A node",
      tool: "Ollama",
      daemon: "popopx-chat",
    },
    portsPurpose: {
      console: "Webes konzol és a motorok naplófolyama",
      inference: "Helyi modell-inferencia",
      control: "A chat daemon vezérlő socketje",
    },
    portsFootnote:
      "Harmójuk loopback. A konzol nyers HTTP TLS nélkül, ami csak azért ésszerű terv, mert sosem hagyja el a gépet: a 0.0.0.0-ra, egy helyihálózati címre vagy egy gépnévre kötési kísérleteket a rendszer már a socket létrehozása előtt elutasítja, és a cím az alkalmazásban van rögzítve, nem egy konfigurációs fájlból olvasódik. Amit védőként használ helyette, az egy huszonnégy bájt hosszú véletlen token, amelyet minden indításkor újból kiad a rendszer, X-PPX-Token fejléccel küldi el, csak a memóriában tartja, és a folyamat kilépésével megszűnik. A chat daemon vezérlő socketjének egyetlen hitelesítése sincs – ez a becsületes leírása –, és csak addig biztonságos, amíg a 127.0.0.1 címen marad.",
  },

  engines: {
    heading: "Tíz szuverén motor",
    sub:
      "Három polc és tíz hivatalos szolgáltatásfiók. Az alábbi kártyák mindegyike a saját árát tünteti fel: egy 30 napos ciklusra fix mennyiségű számítási kredit, a számítási mesh esetén viszont feladatonkénti elszámolás, 10%-os protokolldíjjal. Mindegyik olyan hardveren fut, amely már a birtokodban van.",
    filterAll: "Mind",
    substrateLabel: "Szubsztrátum",
    quickMenuLabel: "iOS gyorsmenü",
    quickMenuHint:
      "Minden gomb a ::popopx_sys::NODE_CMD::<service>::<action>::{} jelet küldi a párosított node-nak.",
    deterministicBadge: "Determinisztikus – nincs modell az úton",
    modelBadge: "Helyi modell a ciklusban",
    offlineBadge: "Helyi modellsúlyok nélkül is fut",
    openDetails: "Megnyitás",
    closeDetails: "Bezárás",
    shelfCount: "motor",
    creditsUnit: "Számítási kredit",
  },

  hardware: {
    heading: "A szintet a memória határozza meg",
    sub:
      "Induláskor a node lekérdezi a sysctl adatait – a lapka típusa, a CPU-magok száma, az egységesített memória fizikai mérete, a szabad SSD-hely – és automatikusan szintet választ. Ha az alkalmazást másik Macre költözteted, a szint is jön vele; semmit nem kell újrakonfigurálni.",
    columns: [
      "Egységesített memória",
      "Tipikus lapka",
      "Szövegmodell",
      "Videómodell",
      "Első token*",
      "Áteresztőképesség*",
      "Memóriacsúcs*",
      "Mód",
    ],
    modes: {
      lightweight: "Könnyű inferencia",
      balanced: "Kiegyensúlyozott",
      full: "Teljes súlyok",
    },
    footnote:
      "* Ez a három oszlop nem laboratóriumi mérés, hanem mérnöki becslés. A számok egy sűrű 27B modell memóriasávszélesség által korlátozott dekódolásából, valamint az LTX-2.5 súlyainak méretét a kvantálási arányból leolvasva származnak. A tartós hőviselkedés, a lapka generációja, a háttérterhelés, a klip hossza és az egyidejű feladatok függvényében a valós értékek kétszer-háromszorosára ugorhatnak. Használd őket szintválasztáshoz, nem teljesítményígéretként.",
    rules: [
      "96 GB-tól felfelé – LTX-2.5 eredeti BF16 teljes súlyai, Qwen3.8-27B Q8_0 formátumban.",
      "48-tól 95 GB-ig – LTX-2.5 MLX-re 8-bitre kvantálva, Qwen3.8-27B Q4_K_M formátumban.",
      "48 GB alatt – Q4_K_M formátumú 9B modell, csak rövid renderelések; a nehéz videómunkát nem helyben rendereli, hanem felajánlja az Edge Compute Mesh számára.",
    ],
    plansHeading: "Mit telepít valójában minden szint",
    plansSub:
      "A fenti táblázat az útmutató, amelyet vásárlás előtt olvasol. Ez itt az, amit a node a gép lemérése után magának lejegyez – egyenesen a javaslófüggvényből, beleértve azt a modell-címkét is, amelyet lehúz.",
    plansColumns: [
      "Memoriasáv",
      "Szövegmodell",
      "Videó-stack",
      "Memóriaplafon",
      "Nehéz videó",
      "Pull-parancs",
    ],
    heavyVideo: {
      local: "Helyben rendereli",
      mesh: "Felajánlja a meshnek",
    },
    plansFootnote:
      "A memóriaplafon nem benchmark, hanem a mért memórián alkalmazott számtani szabály: minden szint a megtalált egységesített memóriából egy rögzített, az asztali munkamenetnek fenntartott részt von ki, felső korláttal ellátva, hogy egy nagyon nagy gép se ígérjen többet, mint amekkora a stack igénye. A modell-címkék és a kvantálások azok a karaktersorozatok, amelyeket a node ténylegesen átad az Ollamának.",
  },

  install: {
    heading: "Egy DMG, egy beolvasás, tíz kapcsoló",
    sub:
      "A node-nak nincs telepítője, nincs daemon-fiókja és nincs mit regisztrálni. Ez egyetlen, a menüsávban megjelenő alkalmazás, amely a loopbackre köt ki, és az első futás maga végzi el a profilalkotást.",
    prereqsHeading: "Mielőtt letöltöd",
    prereqNotes: {
      system: "A csomag macOS 14-re készült, és az alkalmazás egy menüsáv-ügynök.",
      memory:
        "A Metal, az MLX és az egész szintlétra egységesített memóriával számol. A DMG tartalmaz x86_64 szeletet, de a stack egyetlen része sincs Intelre hangolva.",
      disk:
        "A modellsúlyok letöltését a rendszer megtagadja, ha a szabad hely 40 GB vagy kevesebb, tehát a létra saját plafonja egyben a lemezened plafonja is.",
      media:
        "A tíz motor közül öt hívja az FFmpeget. A telepítő varázsló Homebrew-vel be is tudja tenni.",
      inference:
        "Az Ollama a kvantált szövegmodellekhez, az LTX-2.5 MLX munkaterület a videóhoz. Mindkettő helyi eszköz; egyik sem szolgáltatás.",
      bridge:
        "Csak az SMP-párosítás lépéséhez és a telefonról vezérelt útvonalhoz kell. Maguk a motorok nélküle is futnak.",
    },
    prereqRequired: {
      hard: "Szükséges",
      wizard: "A varázsló telepíti",
      optional: "Csak a párosításhoz",
    },
    steps: [
      {
        title: "A DMG ellenőrzése és megnyitása",
        body:
          "Vedd a POPOPX-Mac-Node-Universal.dmg fájlt és a kiadás ellenőrzőösszeg-fájlját ugyanabba a mappába, és ellenőrizd őket, mielőtt bármit megnyitsz; a Kiadások és GitHub szakaszban találod a két parancsot az aktuális kiadásra. Húzd át a POPOPX Mac Node.app alkalmazást az /Applications mappába. A közzétett build Developer ID-aláírással és a lemezképre rátűzött notarizációs jeggyel érkezik, ezért a Gatekeeper minden segítséged nélkül elfogadja — a spctl -a -vv -t install parancs az accepted választ adja, forrásként pedig a source=Notarized Developer ID van mellette. Ezzel szemben a címke-munkafolyamat – amely a Scripts/build_dmg.sh-val csomagol – buildje, és a magad építette build ugyanazzal a szkripttel, csak ad hoc aláírtak, és valóban ezekhez kell az első indításkor a jobb klikkból választott megnyitás.",
      },
      {
        title: "A gép profilalkotása",
        body:
          "Indítsd el, és a menüsávról nyisd meg a konzolt. Az első lépés a sysctl adatokból olvassa ki a lapkát, a magok számát, az egységesített memóriát és a szabad SSD-helyet, kiírja a választott szintet és az ehhez tartozó modell-címkét, és a lemért számokat mutatja, nem azokat, amelyeket te adtál meg.",
      },
      {
        title: "A helyi motorok üzembe helyezése",
        body:
          "A varázsló halad a lista szerinti sorrendben: Homebrew, FFmpeg, uv, Ollama, a szinthez illő Qwen-kvantizáció, az LTX-2.5 munkaterület, majd egy önellenőrzés. A telepítési napló futás közben a konzol lapjára kerül, és a logs/install.log fájlba is íródik, hogy egy hiba utólag is elolvasható legyen.",
      },
      {
        title: "Az iPhone párosítása",
        body:
          "Generáld le a párosítás QR-kódját – a konzolból, vagy a menüsáv új kód pontjából –, és olvasd be a POPOPX iOS klienssel. A kód aláírt, egyszer használható, és tizenöt perc múlva lejár. Az eszköz a konzol párosított listájában jelenik meg a modelljével, a párosítás időbélyegével és az utolsó megfigyelés idejével.",
      },
      {
        title: "A motorok bekapcsolása",
        body:
          "Tíz kapcsoló a menüsávban és a konzolban. Egy motor csak akkor fut, ha bekapcsolod, és a négy, amely nem igényel helyi modellt – a fizikai lezárás, az időzített széf, a vízjel-nyomozó és a leletolvasó – akkor is működik, mielőtt egyetlen súly letöltődne. Az FFmpeg hívása megmarad; a modellstacké nem.",
      },
    ],
    buildHeading: "Vagy építsd fel ugyanabból a tagből",
    buildBody:
      "A kiadási lemezképek abból a fából csomagolódnak, amelyet te is ki tudsz jelölni a saját gépedre. swift build, swift test, swift build -c release, majd a bash Scripts/build_dmg.sh --output dist --version v1.0.2 írja az univerzális DMG-t, ad hoc aláírja, és kiadja mellé a kísérőfájlt is. A közzétett archívumot viszont a másik szkript készíti: a Scripts/build-release.sh teszi hozzá a Developer ID-aláírást, a notarizációs beküldést és a ZIP-fájlt, éppen ezért a letöltött lemezkép átmegy a spctl vizsgálatán, a saját építésed viszont nem. Mindkettő csak macOS-en fut, mert hdiutil és codesign alkotják.",
    lifecycleHeading: "Az első futás után",
    lifecycle: [
      {
        title: "Frissítés",
        body:
          "Nincs frissítő, és frissítésellenőrzés sincs – ez is egy dolog,.amiről a node nem telefonál haza. A frissítés húzgálás: töltsd le az újabb DMG-t, ellenőrizd, és cseréld le az alkalmazást az /Applications mappában. A beállítások, a párosítási állapot, a node-kulcs, a széf és minden elkészült eredmény az Application Support alatt van, nem a csomag belsejében, ezért a kicserélt alkalmazás átveszi azt a gépet, amelyikre kerül.",
      },
      {
        title: "Mentés és másik gépre költözés",
        body:
          "Az alkalmazás a saját gyökérmappáját Time Machine mellőzésének jelöli, ami megóvja a mentéseidet a modellsúlyoktól, és egy meglepetéstől is megkímél visszaállításkor. Ugyanez azt jelenti, hogy a mappa nincs a mentésedben. Egy node átmentéséhez állítsd le, másold a ~/Library/Application Support/PopopxMacNode mappát az új Mac ugyanazon útvonalára, és hagyd, hogy újra profilozzon: a szint megváltozhat, és a pairing/node.key a mappával együtt érkezik – ez az egész oka annak, hogy e másolatnak olyan titkosnak kell lennie, mint az eredetinek.",
      },
      {
        title: "Teljes eltávolítás",
        body:
          "Először kapcsold ki a Launch at Login elemet, majd a menüsávról válasszd a Quit pontot – ez bezárja a figyelőt és felszabadítja a bejelentkezési elemet. Töröld a /Applications/POPOPX Mac Node.app fájlt, aztán a gyökérmappát a ~/Library/Application Support/PopopxMacNode alatt, ha a lepecsételt safet, a naplókat és az elkészült eredményeket is el akarod tüntetni. Nincs eltávolító program és nincs bizonylat sem, amit elfelejthetnél: a két útvonalon kívül sosem települt semmi, és Keychain-bejegyzés sincs, mert az alkalmazás a Keychain-t sosem használja.",
      },
    ],
    bridgeTitle: "Futtasd a motorokat a saját szkriptedből",
    bridgeBody:
      "Az integrációs mappa egy TypeScript-hídot és két ügynökadaptert tartalmaz. Nem nyit új portot, és nem indít második daemont: a 127.0.0.1:18920 címen futó konzolt és a folyamatonként egyszer használatos tokent használja újra, és ugyanazt a NODE_CMD jelzést küldi, amit a telefon küld. A lezárási művelet dupla rájárást igényel – az allowLockdown értékének true-nak, a PPX_BRIDGE_SECRET pedig legalább tizenhat karakternek kell lennie –, és egy elutasítás a bővítménynaplóba íródik, hogy lásd: megtörtént.",
    requirementTitle: "Egy becsületes előfeltétel",
    requirementBody:
      "A node saját varázslójának 2. lépése, a párosítás QR-kódja és az SMP-híd egyaránt egy popopx-chat chat daemon-t igényel a PATH-odon. A node egyetlen futtatható fájlt vizsgál meg, és nincs tartalék útvonala, mert egy upstream build válaszol egy verziósorra, aztán minden utána jövő parancsra elbukik. A tíz motor maga nem igényli.",
    signHeading: "Hogy van aláírva a közzétett build",
    signBody:
      "A lemezképen belül lévő alkalmazáscsomag Developer ID Application aláírást, a hardened runtime jelzőt és egy biztonságos időbélyeget hordoz, és rá van tűzve egy notarizációs jegy is. Ezért engedi futni a Gatekeeper minden segítség nélkül: a spctl -a -vv -t install parancs az accepted választ adja, forrásként pedig a source=Notarized Developer ID áll mellette. Az alábbi blokkot a v1.0.2 által közzétett pontos bájtokból olvastuk ki 2026-11-25-én – futtasd az első két parancsot az /Applications mappában lévő alkalmazáson, és ugyanezt az identitást kell visszaadnia. Egy Apple-fiókot sem kérdezünk meg, és szervert sem ellenőrzünk, mert a jegy az alkalmazással együtt a lemezen utazik.",
    containerTitle: "Magát a lemezképet nem írják alá",
    containerBody:
      "Futtasd az spctl parancsot a letöltött .dmg fájlon, és a rejected választ adja, forrásként a source=no usable signature értékkel; a codesign -dvv pedig ugyanerről a fájlról azt mondja, hogy egyáltalán nincs aláírva. Ez a várt válasz, nem egy feltörésre utaló riasztás. Az Apple kódaláírása az alkalmazáscsomagon van, a notarizációs jegyet viszont mind a csomagra, mind az azt körülvevő lemezképre rá tűzik. A lemezkép egyetlen épségvizsgálata a saját SHA-256 értéke, ez az az ellenőrzés, amelyik ezen az oldalon lejjebb szerepel.",
    provenanceTitle: "Melyik szkript melyik eredményt állítja elő",
    provenanceBody:
      "Két szkript csomagolja ezt az alkalmazást, és nem ugyanott végződnek. A Scripts/build_dmg.sh – azt futtatja le a tag workflow egy macOS futtatón, és ezzel végződnek a fenti buildelők is – ad-hoc módban írja alá a --sign - --timestamp=none kapcsolókkal, hardened runtime nélkül, ezért egy ezen az útvonalon épült buildnek valóban kell az első indításkori jobb klikkes megnyitás. A Scripts/build-release.sh a Developer ID-útvonal: hardened runtime-mal ír alá, beküldi a notarizációba, a jegyet mind a csomagra, mind a lemezképre rátűzi, és a ZIP-fájlt egy SHA256SUMS.txt jegyzék mellé írja. A letöltött lemezkép a második szkriptből jött, és egy olyan futtató, amelyik sosem tartotta a kezében a tanúsítványt, nem tudja előállítani.",
    digestHeading: "Ellenőrizd az ellenőrzőösszeget, mielőtt bármit megnyitsz",
    digestBody:
      "Két parancs, abban a mappában futtatva, amelyikbe a fájlokat mentetted. A kiadási jegyzék az a fájl, amelyikhez viszonyítani kell, mert minden, a kiadásban szereplő eredményt néven nevesíti, és ugyanaz a lépés írja, amelyik a csomagokat elkészítette; ezzel szemben a v1.0.2 mellé közzétett, egyetlen assethez tartozó .dmg.sha256 egy olyan ellenőrzőösszeget nevez meg, amelyiket egyetlen közzétett asset sem adja ki. A Kiadások és GitHub szakasz azt a két parancsot írja ki, amelyik az éppen feloldott kiadáshoz tartozik – ez lehet újabb, mint amelyik alább szerepel.",
    copyCommand: "Parancs másolása",
    commandCopied: "Kimásolva",
  },

  security: {
    heading: "Mi marad, mi megy, és hogyan állítod le",
    sub:
      "Egy adatvédelmi oldal, amelyik csak azt sorolja fel, ami helyben marad, reklámoldal. Ez a forgalmat is felsorolja, mert a „az adataid soha nem hagyják el a készüléket” állítás becsületes változata hosszabb és hasznosabb, mint a szlogen.",
    localHeading: "A lemezeden marad",
    localSub:
      "Egyetlen gyökérmappa alatt, abban a mappában, amelyet az alkalmazás maga hoz létre és amelyiket Time Machine mellőzésének jelöli, a titkokat pedig atomi írással, 0600 módban és teljes fájlvédelemmel írja.",
    localItems: [
      {
        title: "Minden elkészült eredmény",
        body:
          "A renderelt klipek, az eligazítások, a vízjeles exportok, a lepecsételt archívumok, a dekódolt jelentések és a karanténba került bemenetek mind a gyökérmappa alá kerülnek, és ott is maradnak. A node csak azoknak az eredményeknek tart karontárat az outbox/ mappában, amelyek arra várnak, hogy a telefonod újra elérhető legyen.",
      },
      {
        title: "A modellek és a súlyaik",
        body:
          "A Qwen-kvantizáció az Ollama saját tárolójában él; az LTX-2.5 súlyai a node motorok mappájában. Mindkettő helyi fájl helyi lemezen, egyszer lehúzva, és a letöltést a rendszer megtagadja, ha a szabad hely 40 GB vagy kevesebb.",
      },
      {
        title: "A kulcsok és a párosítási állapot",
        body:
          "A node Ed25519 aláíró kulcsa, a párosított eszközök listája és az érvényes ajánlat egyszerű fájlok a pairing/ alatt. Nincs Keychain-bejegyzés, amelyet átvihetnél, nincs a kulcs felhőbeli mentése, és sehol sincs kulcsőrzés – ami kétélű fegyver, ahogy az alábbi, elvesztésről szóló bekezdés mondja.",
      },
      {
        title: "A bizonyítéknyom",
        body:
          "A lezárási és a mesh-naplók helyben, hash-bejegyzésekkel egészülnek ki, a vizsgálati napló pedig rögzíti, mi futott, melyik motoron, milyen eredménnyel. Azért íródik, hogy te elolvasd: a logs/node.log a leggyorsabb válasz arra, hogy „ez a cucc mit csinált 03:14-kor”.",
      },
    ],
    transitHeading: "Kimegy a gépből",
    transitSub:
      "Négy dolog megy ki, és mindegyik vagy a saját eszközödre megy, vagy valami olyanhoz, amit te állítottál be. Ötödik kategória nincs, és analitikai végpont sincs, amerre bármit elküldhetnél.",
    transitItems: [
      {
        title: "Eredmények, vissza a saját telefonodra",
        body:
          "Egy befejezett feladat legfeljebb 1024 karakteres kártyával tér vissza, plusz egy üzenettel eredményfájlonként, a saját popopx-chat üzenetsorodon, SMP relén és XFTP-n át. A relé titkosított szöveget lát. Ha a telefon nem érhető el, az eredmény az outbox/ mappában vár, és legfeljebb harminc napig újrapróbálkozik.",
      },
      {
        title: "Hírcsatornák, amelyek olvasására megkérted",
        body:
          "A Morning TV a te beállított RSS-forrásaidat kéri le, válaszanként három megabyte-os plafonnal, és ez egy közönséges kimenő HTTPS-kérés ahhoz, aki a csatornáidat hostolja.",
      },
      {
        title: "Egy webhook, amelyet te állítottál be",
        body:
          "A fizikai lezárás küldhet POST kérést egy aláírt eseménnyel egy okosotthon- vagy jelenléti végpontnak. Best effort jellegű, külön bekapcsolandó, és az URL a tiéd – a node-nak nincs alapértelmezett célja.",
      },
      {
        title: "Telepítések és modellletöltések",
        body:
          "A varázsló Homebrew-formulákat, FFmpeget, uv-t, Ollamát és a választott kvantizációt tölti le. Ez a forgalom egy telepítési lépés lényege, egyszer történik, a szemed láttára, a naplóval a képernyőn.",
      },
    ],
    keysHeading: "Hol is laknak a titkok",
    keysBody:
      "Nem a Keychainben. A node egy olyan macOS alkalmazás, amelyiknek egyetlen Keychain-függősége sincs, és ez döntés, nem figyelmetlenség: a párosítási és széfanyag a gyökérmappája alatt lévő fájlok, atomi írással, POSIX 0600 móddal és teljes fájlvédelemmel írva, így a gép lezárása alatt a lemezen nem olvashatók. A mérleg, amit elfogadsz, valós – a fájljogok ellenőrizhetők és hordozhatók, és ugyanakkor semmit nem érnek a felhasználói fiókod és olyan olvasó között, amelyik már rendelkezik a felhasználói fiókoddal. Kezeld a gyökérmappát úgy, mint a titkot, amelyik: nincs benne a Time Machine mentésben, és ez a node-kulcs egyetlen létező példánya.",
    dataNote: {
      output: "A generált eredmények, és az a kimeneti sor, amelyik a telefonra váró eredményeket tartja.",
      vault: "Időzítve lepecsételt archívumok és az öröklési anyag, amelyik kinyitja őket.",
      pairing: "Az Ed25519 node-kulcs, a párosított eszközök listája és az érvényes, egyszer használható ajánlat.",
      weights: "Modellsúlyok és az LTX-2.5 MLX munkaterület, amelyet a videó motorok hívnak.",
      ledger: "A lezárási és a mesh-naplók, hash-bejegyzésekkel bővülve.",
      logs: "A telepítési és a vizsgálati napló, amelyiket az üzemelő olvasására írják.",
      config: "A beállítások, a motor kapcsolók, és az a konfiguráció, amelyet a híd és az integrációk megosztanak.",
    },
    rootLabel: "Gyökérmappa",
    controlHeading: "A te részed a leállító kapcsolón",
    controlSub:
      "Négy irányítás, mind helyi, mind látható az alkalmazásban ahelyett, hogy egy beállítás képernyőn lenne elásva. Egyiküknek sincs szüksége a hálózatra, és éppen ezért működnek akkor is, ha a hálózat a ludas.",
    controls: [
      {
        title: "Egy motor leállítása",
        body:
          "Tíz független kapcsoló a menüsávban és a konzolban. Az egyik kikapcsolása a következő parancstól él, és a kikapcsolt motorhoz szóló parancsot a rendszer elutasítja a sorba állítás helyett.",
      },
      {
        title: "A ciklusok kölcsönzésének leállítása",
        body:
          "A Pause Mesh Sharing a node-ot azonnal kiveszi a élő számítási készletből; a menüsáv Paused állapotot ír ki, és a node többé nem fogad feladatot. Ez az egyetlen olyan irányítás, amelyiknek a nevében szerepel a pause szó, és a mesh kapacitásáról szól, nem az egész node-ról.",
      },
      {
        title: "Az érvényes párosítókód elégetése",
        body:
          "A New Pairing QR nyugdíjba küldi a függőben lévő ajánlatot, és helyette újat bocsát ki. Akinek megvan a régi kód fényképe, annak egy lejárt aláírása van, nem egy második esélye.",
      },
      {
        title: "Minden leállítása",
        body:
          "A Quit a valódi kill switch: bezárja a loopback figyelőt, felszabadítja a bejelentkezési elemet, és az indulásonkénti token a folyamattal együtt múlik ki. Egy node, amelyik nem fut, semmire nem válaszol, senkinek, semmiről.",
      },
    ],
    revokeHeading: "És egy eszköz visszavonása",
    revokeBody:
      "A konzol párosított eszköz listájában minden soron van egy Revoke gomb. A jelöli az eszközt visszavontnak, eltávolítja a hozzá tartozó névjegyet, és onnantól eldobja a parancsait – de az SMP-kapcsolatot nem bontja meg, és az alkalmazás ezt ugyanabban az üzenetben írja, amelyet neked mutat. A munka befejezéséhez töröld a névjegyet a chat kliensben. Ami egyszer a lemezeden íródott, azon a lemezen is marad; a visszavonás a jövőbeli parancsokat állítja le, nem távoli törlés, és a node-nak sosem volt távoli törlés képessége, amelyet el lehetett volna venni tőle.",
    limitsHeading: "Amit ez az oldal nem ígér le",
    limitsBody:
      "A biztonságos megsemmisítés véletlen adatokkal történő felülírás, egy szinkron és egy unlink. APFS-formátumon a módosított fájl új blokkokba íródik, az SSD pedig átlépködi a logikai blokkokat, tehát ez eltünteti a fájlt és hatástalanítja a szokványos helyreállító eszközöket, de nem bizonyítja, hogy a régi fizikai bájtok eltűntek. Ez a legjobb, amit egy felhasználói térbeli fájl-API tud, és a kód ezt a visszaadott eredményben ki is mondja. Ezen túlmenően: nincs globális szünet a leállításon kívül, nincs távoli törlés, nincs kulcsőrzés, ezért nincs helyreállítás sem, ha a gépet és a gyökérmappát együtt veszíted el, és nincs frissítő sem, amelyet rá lehetne beszélni, hogy olyat telepítsen, amit nem kértél.",
  },

  troubleshooting: {
    heading: "Amikor nem azt csinálja, amit vártál",
    sub:
      "Azok a hibák, amelyek ezen az architektúrán valóban előfordulnak, abban a sorrendben, ahogy belebotlanak. Mindegyik megnevezi, hová nézz először, mert egy olyan gépen, amelyiknek nincs szerver oldala, a napló mindig a legrövidebb út.",
    columns: ["Tünet", "Mi történik", "Mit tegyél"],
    items: [
      {
        symptom: "A konzol lapja nem nyílik meg",
        cause:
          "A port rögzített a 127.0.0.1:18920 címen, tartalék nélkül, ezért egy második futó példány – vagy bármi más, amelyik előbb ért oda – birtokában tartja a figyelőt. A token is indulásonkénti: egy újraindítás előtti régi fülnek halott a hitelesítő adata.",
        fix:
          "Nézd meg, van-e figyelő a 18920 porton, és állítsd le a másik példányt, aztán a menüsáv Open Web Console pontját használd, amelyik az aktuális URL-t az aktuális tokennel építi fel, nem egy elavulttal.",
      },
      {
        symptom: "A 11434-es porton senki nem válaszol",
        cause:
          "A modellt igénylő motorok kizárólag loopbackön szólnak az Ollamához. Ha az Ollama nem fut, vagy a varázsló nélkül települt, a motor elbukik, nem pedig távol üzemeltetett megoldásra esik vissza.",
        fix:
          "Indítsd el az Ollamát, ellenőrizd, hogy az OLLAMA_HOST a loopbackre mutat, és húzd le azt a kvantizációt, amelyet a szinttáblázat a gépedhez nevesít. A hibaszöveg idézi azt a parancsot, amelyik működött volna.",
      },
      {
        symptom: "A súlyok sosem töltődtek le",
        cause:
          "A telepítő kihagyja a súlyletöltéseket, hacsak a weightSources nincs deklarálva a config/engines.json fájlban, 40 GB vagy kevesebb szabad helynél pedig egyenesen meg is tagadja őket.",
        fix:
          "Vedd fel azt a forrást, amelyiktől letöltenéd, vagy másold a súlyokat az engines/weights mappába, és igazítsd rá a konfigurációt. Először szabadíts fel lemezterületet; a gátlás küszöbérték, nem figyelmeztetés.",
      },
      {
        symptom: "Egy renderelés parancssorként jött vissza",
        cause:
          "A videómunkához az LTX-2.5 munkaterület és a súlyai kellenek. Nélkülük a motor pontosan azt a parancsot adja vissza, amelyet futtatott volna, ahelyett, hogy úgy tettetné, hogy elkészült egy fájl.",
        fix:
          "Végezd el a varázsló munkaterület-lépését, vagy klónozd az LTX-2-MLX munkaterületet, amelyet a hibaszöveg nevesít, aztán futtasd újra. Ez szándékos: a szimulált siker rosszabb, mint a becsületes elutasítás.",
      },
      {
        symptom: "A párosítókódot elutasítja",
        cause:
          "Egy ajánlat egyszer használható és tizenöt percig él. Ugyanannak a kódnak a második beolvasása, vagy egy olyan kódé, amelyik egy azóta továbbfordult képernyőről jön, jogosan elutasításra kerül.",
        fix:
          "Generálj új kódot, és olvasd be egyszer. Ha a telefon egy siker után magától újrapróbálkozik, az első átvétel már nyert, és az elutasítás a várt válasz.",
      },
      {
        symptom: "A telefon parancsai nem csinálnak semmit",
        cause:
          "A hídhoz a PATH-on elérhető popopx-chat daemon kell, és a node egyetlen futtatható fájlt néz meg, tartalék nélkül. Ha az hiányzik, a menüsáv azt írja ki, hogy popopx-chat not installed, és egy kikapcsolt motor úgysem válaszol semmit.",
        fix:
          "Olvasd el először a menüsáv híd sorát, aztán a motor kapcsolóit, végül a vizsgálati naplót. Egy elutasított parancs és egy sosem érkezett parancs a telefon felől nézve egyformán néz ki.",
      },
      {
        symptom: "Az eredmények elmaradnak, amíg a telefon nincs helyben",
        cause:
          "A kimenő kézbesítés a saját daemonodon és a reléd keresztül megy, ezért innen egyformán néz ki a kimenő forgalmat blokkoló tűzfal, a relét nem továbbító VPN és a kilépett daemon. Az eredmények nem vesznek el: az outbox/ mappában sorakoznak, és legfeljebb harminc napig újrapróbálkoznak.",
        fix:
          "Ellenőrizd, hogy a daemon fut-e, azután engedd a node kimenő kapcsolatait abban a rétegben, amelyik szűri őket, és várd meg, míg a sor kiürül, ahelyett, hogy a feladatot újra futtatnád.",
      },
      {
        symptom: "A letöltési kártya azt írja, hogy a rögzített kiadást mutatja",
        cause:
          "Az api.github.com nem volt elérhető, blokkolták, sebességkorlátozta, vagy letölthető asset nélkül válaszolt. Az oldal ilyenkor a csomagba fordított kiadást jeleníti meg a találgatás helyett.",
        fix:
          "Nyisd meg közvetlenül a kiadások oldalt. Az oldalon semmi más nem igényli ezt a hívást, és egyetlen része sem marad üres egy sikertelen hívás miatt.",
      },
    ],
    escalation:
      "Két fájl a maradék nagy részére is választ ad: a logs/install.log mindarra, amit a varázsló csinált, és a logs/node.log mindenre, ami ezután jött. Mindkettő sima szöveges fájl a gyökérmappa alatt, és a konzol saját naplócsatornája ugyanazokat az eseményeket élőben mutatja. Ha egy hiba a elolvasásuk után is fennáll, a szerződés, amelyet a node és az integrációk közösen tesztelnek, a repóban van, a hibajelentések pedig a popopx-mac-node projektbe tartoznak.",
  },

  releases: {
    heading: "Kiadások, ellenőrzőösszegek és az egész fa",
    sub:
      "Minden, amiből a node épül, egyetlen AGPL-3.0-only repóban van, és minden közzétett lemezkép megnyitás előtt ellenőrizhető egy ellenőrzőösszegen. Ez az a szakasz, ahol az oldal abbahagyja a leírást, és mutogatni kezd.",
    assetsHeading: "Közzétett assetek",
    assetsColumns: ["Fájl", "Mi ez", "Méret"],
    assetKinds: {
      dmg: "Alkalmazásba húzgálható lemezkép, univerzális arm64 és x86_64. Ezt vidd.",
      sidecar: "Ellenőrzőösszeg egyetlen fájlhoz, amelyet annak a csomagoló lépésnek az írta, amelyik felépítette.",
      zip: "Az aláírt alkalmazáscsomag ZIP-tartalomként, archívumként a kötet helyett.",
      sums: "Jegyzék, amelyik a kiadás minden eredményét felsorolja az ellenőrzőösszegével.",
    },
    missingAsset:
      "Nem minden kiadás adja ki minden assetet. A régebbi kiadások csak a lemezképet és a kísérőfájlját tartalmazzák, ezért az alábbi ellenőrzés azt a kiadást olvassa, amelyiket valóban megnyitottad.",
    verifyHeading: "Ellenőrizd, mielőtt bármit megnyitod",
    verifyBody:
      "Két parancs, abban a mappában futtatva, amelyikbe letöltötted. A jegyzékes forma a javasolt, és ezt adja ki a jelenlegi kiadás.",
    verifySumsBody:
      "A kiadási jegyzék minden eredményt felsorol, ezért egy olyan fájl, amelyet nem töltöttél le, nem hiányzik, hanem várható: add át a --ignore-missing kapcsolót, és olvasd el azt a sort, amelyik a letöltött fájlodhoz tartozik. A jegyzéket ugyanaz a lépés írja, amelyik az általa megnevezett tartalmat csomagolja.",
    verifySidecarBody:
      "Egy régebbi kiadás ilyenkor egyetlen assethez tartozó kísérőfájlt tesz közzé, és azzal kell ellenőrizni. Ha egy kiadáson mindkettő ott van és nem egyeznek, a jegyzékben bízz: a kísérőfájl származhat ugyanannak a verziónak egy másik buildjéből.",
    pipelineHeading: "Hogyan kerül ide egy verzió",
    pipelineBody:
      "Egy tag beküldése a kiadási workflow-t futtatja le egy macOS futtatón: felépíti a fát, lefuttatja a szerződésteszteket, a Scripts/build_dmg.sh segítségével becsomagolja az univerzális lemezképet, megtagadja egy abszolút útvonalat tartalmazó ellenőrzőösszeg-fájl közzétételét, és feltölti, amit a szkript kiírt. Egy notarialisan hitelesített lemezkép egy SHA256SUMS.txt jegyzék mellett a Scripts/build-release.sh-ból származik, amely Developer ID aláírást, Apple notarizációs beküldést és a ZIP-et is hozzáadja. Mindkét út ugyanott végződik: egy ellenőrzőösszegnél, amelyet anélől ellenőrizhetsz, hogy ezen az oldalon kellene megbíznod.",
    supportedHeading: "Ma fut",
    supportedItems: [
      "Mind a tíz motor, mindegyik a saját műveletkészletével és elutasítási útjaival, egyenként bekapcsolva.",
      "Automatikus szintválasztás a sysctl adataiból, az egyes szinthez tartozó modellletöltéssel.",
      "Aláírt, egyszer használható, tizenöt perces párosítás, és egy konzol, amelyik csak a loopbackre köt ki.",
      "A TypeScript-híd és két ügynökadapter ugyanazon a konzolon és ugyanazzal a tokennel.",
    ],
    roadmapHeading: "Még nem",
    roadmapSub:
      "A repóban feljegyzett tervként szerepel, nem az oldalon tett ígéretként. Egyikük sem fut ma.",
    roadmap: [
      {
        title: "Motoronkénti mérések a saját gépeden",
        body:
          "Egy használati műszerfal és hiba-idővonalak, amelyek a telefonodig visszagördülnek: token- és watt-lemérések arról a gépről, amelyik előtt ülsz, a hardvertáblázatban szereplő becslések helyébe állítva.",
      },
      {
        title: "Szigorúbb mesh-elkülönítés és kivehető napló",
        body:
          "Erősebb karantén a kölcsönzött kapacitásra, és egy olyan napló, amelyiket ki is lehet venni az alkalmazásból a benne olvasás helyett.",
      },
      {
        title: "Töredékre osztott őrzés több örökös esetén",
        body:
          "Az öröklési anyag felosztása több örökös között, és további jelentésformák az egészségmotorban.",
      },
      {
        title: "Aláírt terjesztési csatornák és további videó-szintek",
        body:
          "Egy, a notarizáción túli áruházi csatorna értékelése, és további LTX-szintek azokhoz a memóriacsokákhoz, amelyeket a létra még nem fed le.",
      },
    ],
    sourceHeading: "A forráskód, és mire kötelez a licenc",
    sourceBody:
      "Egy repó, AGPL-3.0-only, zárt mag nélkül: a motorok, a konzol, a vízjelzés és a napló mind benne vannak, a vakalírásos hitelesítő kód és a kriptográfiai paraméterregiszter pedig mellette, a popopxmq projektben nyílt. A 13. szakasz a szokványos módon alkalmazandó: futtasd, tanulmányozd és módosítsd szabadon, és ha a módosított node-ot szolgáltatásként kínálod másoknak, ajánld fel nekik a megfelelő forráskódot. Ez a megfelelés teljes költsége.",
    licenceHeading: "Amire nem terjed ki",
    licenceBody:
      "Az AGPL-3.0 nem ad licencet a POPOPX névre vagy logóra. Egy fork mindent átvehet a jelölések kivételével: nevezd át a szoftvert, cseréld ki a jelöléseket, a kód maradhat.",
  },

  faq: {
    heading: "A kérdések, amelyeket valóban feltesznek",
    sub: "Rövid válaszok — ott, ahol nem tudunk garanciát adni, az is látszik.",
    items: [
      {
        q: "Ezek közül bármi fut a szervereiteken?",
        a: "Nem. A tíz motor parancsai az iOS kliensről, a saját popopx-chat üzenetsorodon keresztül érkeznek, végpontok között titkosítva, és az inferencia, a renderelés, a tárolás és a fizikai végrehajtás mind a Maceden történik. Egyetlen lépés sem igényli az infrastruktúránkat, és a node-ban nincs olyan kódútvonal, amely távol üzemeltetett inferencia API-t érne el – a modellkliens a 127.0.0.1 címhez van rögzítve.",
      },
      {
        q: "Mit kell regisztrálnom?",
        a: "Semmit. A termékben nincs fiók, nincs telefonszám, nincs e-mail-cím és nincs hirdetési azonosító. A telefon párosítása a node-dal egyetlen QR-kód beolvasása, a webes konzol pedig csak a loopbackre köt ki, minden induláskor véletlenszerű tokent forgat, és a helyi hálózatod többi részéről nem érhető el.",
      },
      {
        q: "Miért AGPL-3.0, és mire kötelez a 13. szakasz?",
        a: "A node minden forrásfájlja AGPL-3.0-only, ami azt jelenti, hogy szabadon futtathatod, tanulmányozhatod, módosíthatod és továbbadhatod. A 13. szakasz a hálós klauzula: ha a módosított node-ot szolgáltatásként kínálod másoknak, nekik is fel kell ajánlanod a megfelelő forráskódot. Ez a teljes megfelelési költség, és ez teszi lehetővé, hogy a projekt futtatása ingyenes legyen.",
      },
      {
        q: "A vízjelzés vagy a számítási kredit protokollja zárt marad?",
        a: "Nem, és ezt az állítást várjuk a leginkább ellenőrizni. A BBS+ és BLS12-381 hitelesítő kód, a jogosultsági logika és a kriptográfiai paraméterregiszter a popopxmq projektben nyitott; a GOP- és frekvenciatartomány-alapú vízjelzés és annak vak dekódolója ebben a repóban van. A kereskedelmi csomag azt adja el, hogy adatközpont, készenléti beosztás, terjesztési csatorna és megfelelési papírmunka – sosem forráskódkapu.",
      },
      {
        q: "Kibocsáthatsz-e forkot POPOPX névvel és logóval?",
        a: "Nem. A jelölésekre az AGPL-3.0 nem ad licencet, és egy támogatási szint sem adja őket. A szabályzat a fork számára semmibe sem kerülő megoldást kéri: nevezd át a szoftvert, cseréld ki a jelöléseket, a kód maradhat. A márka használatához külön, írásos licenc kell.",
      },
      {
        q: "Mennyire megbízhatók a hardvertáblázat számai?",
        a: "Pont annyira, amennyire az alatta lévő mondat mondja. Ezek durva becslések, nem a te géped mérései, és a valós áteresztőképesség a hőviselkedés és a terhelés függvényében két-háromszorosára változik. A node következő verziója ezek helyébe motoronkénti token- és watt-leméréseket állít, amelyeket pontosan azon a gépen mértek, amelyet használsz.",
      },
      {
        q: "Melyik gépek támogatottak?",
        a: "macOS 14 vagy újabb, Apple Silicon gépeken. A szintlétra, a Metal és az MLX is egységesített memóriával számol, és az MLX nem fut Intelen, ezért az Intel Mac nem olyan gazdagép, amelyet ez a projekt célozna, még akkor sem, ha az univerzális DMG továbbra is tartalmaz x86_64 szeletet. Maga az alkalmazás nem linkel harmadik féltől származó könyvtárat: csak Apple-keretrendszerek. Amit vezérel, az tervezés szerint különálló: az Ollama, az FFmpeg és az LTX-2.5 súlyok olyan helyi eszközök, amelyeket a motorok hívnak, és minden motor megadja, melyekre szükséged van.",
      },
    ],
  },

  footer: {
    tagline: "Helyi számítás a POPOPX ökoszisztéma számára. A tiéd, hogy futtasd, és a tiéd, hogy olvasd.",
    licenceHeading: "Licenc",
    licenceBody:
      "A node forráskódja AGPL-3.0-only. A projekt által készített grafikai elemek AGPL-3.0-only vagy — ha úgy választod — CC0-1.0 licenc alatt érhetők el.",
    trademarkHeading: "Védjegyek",
    trademarkBody:
      "A POPOPX, a POPOPX Chat és a POPOPX logó a POPOPX Chat projekt védjegyei. Az ezen az oldalon használt ikon a módosítatlan POPOPX iOS alkalmazásikon. A szabályzatot a popopx-chat repóban található TRADEMARK-POPOPX.md tartalmazza.",
    privacyHeading: "Ez az oldal",
    privacyBody:
      "Nincs elemzés, nincs süti, nincs ujjlenyomat-gyűjtés, nincs harmadik féltől származó szkript és nincs külső CDN. Az oldal egyetlen kimenő kérése az api.github.com felé irányul, a kiadási assetek listájáért, és ha a hívás sikertelen, egy rögzített hivatkozásra vált vissza.",
    appleNotice:
      "Nem állunk kapcsolatban az Apple-lel. A macOS, az iOS, az Apple Silicon és a Metal az Apple Inc. védjegyei.",
    sourceRepo: "Mac Node forráskódja",
    iosRepo: "iOS kliens forráskódja",
    backToTop: "Vissza a tetejére",
  },
};

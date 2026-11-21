import type { Dictionary } from "../types";

export const hu: Dictionary = {
  dir: "ltr",

  nav: {
    engines: "Motorok",
    architecture: "Architektúra",
    hardware: "Hardver",
    install: "Telepítés",
    faq: "GYIK",
    github: "GitHub",
    download: "Letöltés",
    openMenu: "Menü megnyitása",
    closeMenu: "Menü bezárása",
    chooseLanguage: "Nyelv",
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "A Mac-ed",
    titleAccent: "számítási réteg lesz",
    subtitle:
      "A POPOPX Mac Node végzi a POPOPX iOS kliens tíz Discover-motorja mögötti helyi számítást és determinisztikus végrehajtást. Nulla felhő, nincs fiók, nincs telemetria, végpontok közötti titkosítás.",
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
      "Mentsd el a .dmg fájlt és a .sha256 kísérőfájlt ugyanabba a mappába, majd a shasum -a 256 -c parancsot ne a lemezképre, hanem a kísérőfájlra futtasd. A kísérőfájl egyetlen ellenőrzőösszeget és egy relatív fájlnevet tartalmaz; a várt válasz: POPOPX-Mac-Node-Universal.dmg: OK.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "A saját hardvered",
    statStorage: "Fizikai helyi tárolás",
    statIdentity: "Nincs fiók, nincs azonosító",
    statSource: "Végig AGPL-3.0",
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
      "48 GB alatt – könnyű inferencia; a nehéz videomunkát nem helyben rendereli, hanem felajánlja az Edge Compute Mesh számára.",
    ],
  },

  install: {
    heading: "Három perc, és a tiéd",
    sub:
      "A node-nak nincs telepítője, nincs daemon-fiókja és nincs mit regisztrálni. Ez egyetlen, a menüsávban megjelenő alkalmazás, amely a loopbackre köt ki.",
    steps: [
      {
        title: "A DMG ellenőrzése és megnyitása",
        body:
          "Vedd a Releases oldalról a POPOPX-Mac-Node-Universal.dmg fájlt és a .sha256 fájlt, mindkettőt ugyanabba a mappába, és ellenőrizd őket, mielőtt bármit megnyitsz: a shasum -a 256 -c POPOPX-Mac-Node-Universal.dmg.sha256 parancsnak OK-t kell kiadnia. Ezután húzd át az alkalmazást az /Applications mappába.",
      },
      {
        title: "A helyi motorok üzembe helyezése",
        body:
          "Nyisd meg a menüsáv elemét, és indítsd el a konzol varázslóját. Az első lépés felméri a lapkát, az egységesített memóriát és az SSD-t, lehúzza a szinthez illő Qwen3.8-kvantizációt, inicializálja az ltx2 munkaterületet, és futás közben a lapra közvetíti a telepítési naplót.",
      },
      {
        title: "Az iPhone párosítása",
        body:
          "Olvasd be a konzol párosítás QR-kódját a POPOPX iOS klienssel. Ez az egy beolvasás hozza létre az SMP-hidat; ettől kezdve a Discover szolgáltatásfiókjai a node-oddal beszélgetnek, másokkal nem.",
      },
      {
        title: "A motorok bekapcsolása",
        body:
          "Tíz kapcsoló. Egy motor csak akkor fut, ha bekapcsolod, és a négy, amely nem igényel helyi modellt – a fizikai lezárás, az időzített széf, a vízjel-nyomozó és a leletolvasó – akkor is működik, mielőtt egyetlen súly letöltődne. Az FFmpeg hívása megmarad; a modellstacké nem.",
      },
    ],
    bridgeTitle: "Futtasd a motorokat a saját szkriptedből",
    bridgeBody:
      "Az integrációs mappa egy TypeScript-hídot és két ügynökadaptert tartalmaz. Nem nyit új portot, és nem indít második daemont: a 127.0.0.1:18920 címen futó konzolt és a folyamatonként egyszer használatos tokent használja újra, és ugyanazt a NODE_CMD jelzést küldi, amit a telefon küld. A lezárási művelet dupla rájárást igényel – az allowLockdown értékének true-nak, a PPX_BRIDGE_SECRET pedig legalább tizenhat karakternek kell lennie –, és egy elutasítás a bővítménynaplóba íródik, hogy lásd: megtörtént.",
    requirementTitle: "Egy becsületes előfeltétel",
    requirementBody:
      "A node saját varázslójának 2. lépése, a párosítás QR-kódja és az SMP-híd egyaránt egy popopx-chat chat daemon-t igényel a PATH-odon. A node egyetlen futtatható fájlt vizsgál meg, és nincs tartalék útvonala, mert egy upstream build válaszol egy verziósorra, aztán minden utána jövő parancsra elbukik. A tíz motor maga nem igényli.",
    copyCommand: "Parancs másolása",
    commandCopied: "Kimásolva",
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
        a: "Pont annyira, amennyire az alatta lévő mondat mondja. Ezek durva becslések, nem a te géped mérései, és a valós áteresztőképesség a hőviselkedés és a terhelés függvényében két-háromszorosára változik. A node 1.1 verziója ezek helyébe motoronkénti token- és watt-leméréseket állít, amelyeket pontosan azon a gépen mértek, amelyet használsz.",
      },
      {
        q: "Mely gépek támogatottak?",
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

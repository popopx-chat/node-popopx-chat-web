import type { Dictionary } from "../types";

export const cs: Dictionary = {
  dir: "ltr",

  nav: {
    engines: "Enginy",
    architecture: "Architektura",
    hardware: "Hardware",
    install: "Instalace",
    faq: "Časté dotazy",
    github: "GitHub",
    download: "Stáhnout",
    openMenu: "Otevřít nabídku",
    closeMenu: "Zavřít nabídku",
    chooseLanguage: "Jazyk",
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Váš Mac se stane",
    titleAccent: "výpočetní vrstvou",
    subtitle:
      "POPOPX Mac Node zajišťuje lokální výpočty a deterministické provádění úloh za deseti enginy Discover v klientu POPOPX iOS. Žádný cloud, žádný účet, žádná telemetrie, vše šifrováno end-to-end.",
    ctaDownload: "Stáhnout DMG",
    ctaSource: "Přečíst zdrojový kód",
    releaseLabel: "Nejnovější vydání",
    sizeLabel: "Velikost",
    digestLabel: "SHA-256",
    statusFetching: "Dotazuji se GitHub Releases…",
    statusLive: "Naživo z GitHub Releases",
    statusFallback: "GitHub je nedostupný — zobrazuji pevně nastavené vydání",
    copyDigest: "Zkopírovat otisk",
    digestCopied: "Otisk zkopírován",
    verifyTitle: "Ověřte, než ho otevřete",
    verifyBody:
      "Uložte .dmg i jeho doprovodný soubor .sha256 do stejné složky a pak spusťte shasum -a 256 -c nad doprovodným souborem, ne nad obrazem. Obsahuje jeden otisk a jeden relativní název souboru; očekávaná odpověď je POPOPX-Mac-Node-Universal.dmg: OK.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Váš vlastní hardware",
    statStorage: "Fyzické lokální úložiště",
    statIdentity: "Žádný účet, žádné ID",
    statSource: "AGPL-3.0 bez výjimky",
  },

  architecture: {
    heading: "Tři záruky, žádná služba mezi strojem a vámi",
    sub:
      "Na této architektuře je nejzajímavější to, co v ní chybí: žádná služba účtů, žádná úschova klíčů, žádný analytický endpoint, žádné hostované odvozování.",
    items: [
      {
        title: "Fyzické lokální úložiště",
        body:
          "Každý výstup, který engine vytvoří — brief, klip s vodoznakem, zapečetěný archiv, dekódovaná zpráva — se zapisuje na váš vlastní SSD pod jeden datový kořen. Je mimo synchronizaci iCloud i mimo jakoukoli sdílenou schránku a knihy záznamů se zapisují s úplným chráněním souborů, takže po zamknutí stroje z disku nejdou přečíst.",
      },
      {
        title: "Žádný účet, žádné ID",
        body:
          "Žádná registrace, žádné telefonní číslo, žádný e-mail a žádný identifikátor zařízení, který byste měli komu předat. Telefon spárujete s uzlem jedním skenováním QR kódu a příkazy, které potom přijdou, putují vaší vlastní frontou popopx-chat, přičemž SMP a XFTP je nesou end-to-end.",
      },
      {
        title: "AGPL-3.0 v celém zásobníku",
        body:
          "Deset enginů, SMP brána, lokální webová konzole, vodoznakování v GOP a ve frekvenční oblasti i kniha výpočetních bodů tvoří jeden strom zdrojového kódu pod licencí AGPL-3.0-only. Žádné uzavřené jádro neexistuje: kód pověření založený na slepých podpisech a registr kryptografických parametrů leží v popopxmq, veřejně.",
      },
    ],
  },

  engines: {
    heading: "Deset svrchovaných enginů",
    sub:
      "Tři police a deset oficiálních služebních účtů. Každá karta níže uvádí svou vlastní cenu: pevný počet výpočetních bodů za jeden cyklus 30 dnů, nebo u výpočetního meshu vypořádání za každou úlohu s protokolovým poplatkem 10 %. Každý z nich běží na hardwaru, který už máte.",
    filterAll: "Vše",
    substrateLabel: "Substrát",
    quickMenuLabel: "Rychlá nabídka iOS",
    quickMenuHint:
      "Každé tlačítko pošle povel ::popopx_sys::NODE_CMD::<service>::<action>::{} vašemu spárovanému uzlu.",
    deterministicBadge: "Deterministické — žádný model v řetězci",
    modelBadge: "Lokální model ve smyčce",
    offlineBadge: "Běží bez lokálních vah modelu",
    openDetails: "Otevřít",
    closeDetails: "Zavřít",
    shelfCount: "enginy",
    creditsUnit: "Výpočetní body",
  },

  hardware: {
    heading: "Stupeň se odvíjí od paměti",
    sub:
      "Při spuštění uzel přečte sysctl — model čipu, počet jader CPU, fyzickou sjednocenou paměť, volné místo na SSD — a stupeň určí sám. Když aplikaci přenesete na jiný Mac, stupeň se přenese s ní; nic nepřenastavujete.",
    columns: [
      "Sjednocená paměť",
      "Běžný čip",
      "Model textu",
      "Model videa",
      "První token*",
      "Propustnost*",
      "Špičková rezidentní paměť*",
      "Režim",
    ],
    modes: {
      lightweight: "Lehké odvozování",
      balanced: "Vyvážené",
      full: "Plné váhy",
    },
    footnote:
      "* Tyto tři sloupce jsou inženýrské odhady, ne laboratorní měření. Vycházejí z dekódování omezeného šířkou pásma paměti u hustého 27B modelu a z poměru kvantizace velikosti vah LTX-2.5. Trvalé teplotní chování, generace čipu, zátěž na pozadí, délka klipu i souběžné úlohy posouvají skutečné hodnoty dvakrát až třikrát. Slouží k výběru stupně, ne jako slib výkonu.",
    rules: [
      "96 GB a více — původní váhy LTX-2.5 v BF16 s Qwen3.8-27B v Q8_0.",
      "48 GB až 95 GB — LTX-2.5 v MLX kvantizovaný na 8-bit s Qwen3.8-27B v Q4_K_M.",
      "Pod 48 GB — lehké odvozování; náročné práce s videem se místo lokálního vykreslení předávají do Edge Compute Mesh.",
    ],
  },

  install: {
    heading: "Tři minuty a pak je váš",
    sub:
      "Uzel nemá žádný instalátor, žádný účet démona a nic, co by se dalo registrovat. Je to jedna aplikace v liště nabídek, která se váže na loopback.",
    steps: [
      {
        title: "Ověřte a otevřete DMG",
        body:
          "Stáhněte si POPOPX-Mac-Node-Universal.dmg i jeho .sha256 ze sekce Releases, obojí do stejné složky, a zkontrolujte je, než něco otevřete: shasum -a 256 -c POPOPX-Mac-Node-Universal.dmg.sha256 musí vypsat OK. Aplikaci přetáhněte do /Applications.",
      },
      {
        title: "Nasaď lokální enginy",
        body:
          "Otevřete položku v liště nabídek a spusťte průvodce konzolí. První krok zjistí profil čipu, sjednocené paměti a SSD, stáhne kvantizaci Qwen3.8, která odpovídá stupni, inicializuje pracovní prostor ltx2 a za běhu průběžně posílá instalační log na stránku.",
      },
      {
        title: "Spáruj iPhone",
        body:
          "Z konzole naskenujte párovací QR kód klientem POPOPX iOS. To jedno skenování založí SMP můstek; od té doby komunikují služební účty Discover pouze s vaším uzlem a s ničím dalším.",
      },
      {
        title: "Zapněte enginy",
        body:
          "Deset přepínačů. Engine běží jen tehdy, když ho zapnete, a čtyři, které se obejdou bez lokálního modelu — fyzické uzamčení, trezor s časovým zámkem, stopování vodoznaku a čtečka laboratorních zpráv — fungují dřív, než se stáhne jediná váha. FFmpeg se pořád volá; zásobník modelů ne.",
      },
    ],
    bridgeTitle: "Ovládejte enginy vlastním skriptem",
    bridgeBody:
      "Složka integrations obsahuje můstek v TypeScriptu a dva adaptéry pro agenty. Neotevírá žádný nový port a nespouští druhého démona: znovu používá konzoli na 127.0.0.1:18920 a jednorázový token pro každý proces a posílá stejnou signalizaci NODE_CMD jako telefon. Akce uzamčení je dvojitý opt-in — allowLockdown musí být true a PPX_BRIDGE_SECRET musí mít alespoň šestnáct znaků — a odmítnutí se zapíše do logu pluginu, abyste viděli, že k němu došlo.",
    requirementTitle: "Jedna poctivá podmínka",
    requirementBody:
      "Druhý krok průvodce samotného uzlu, párovací QR kód i SMP můstek potřebují demona chatu popopx-chat ve vaší proměnné PATH. Uzel zkouší přesně jeden spustitelný soubor a žádnou zálohu nemá, protože build z upstreamu sice odpoví na řádek s verzí, ale potom zkazí každý další příkaz. Samotných deset enginů ho nepotřebuje.",
    copyCommand: "Zkopírovat příkaz",
    commandCopied: "Zkopírováno",
  },

  faq: {
    heading: "Otázky, na které se lidé skutečně ptají",
    sub: "Stručné odpovědi, kde je vidět i to, co zaručit nemůžeme.",
    items: [
      {
        q: "Běží něco z toho na vašich serverech?",
        a: "Ne. Příkazy pro deset enginů přicházejí z klienta iOS vaší vlastní frontou popopx-chat, šifrované end-to-end, a odvozování, vykreslování, uložení i fyzické provedení probíhají na vašem Macu. Žádný krok nepotřebuje naši infrastrukturu a v uzlu neexistuje žádná cesta kódu, která by sahala na hostované API pro odvozování — klient modelu je pevně ukotven na 127.0.0.1.",
      },
      {
        q: "Co musím registrovat?",
        a: "Nic. Produkt nikde neobsahuje účet, telefonní číslo, e-mailovou adresu ani reklamní identifikátor. Telefon spárujete s uzlem jedním skenováním QR kódu, webová konzole se váže pouze na loopback, při každém spuštění mění náhodný token a zbyte vaší sítě LAN se k ní nedostane.",
      },
      {
        q: "Proč AGPL-3.0, a co mi ukládá článek 13?",
        a: "Každý zdrojový soubor uzlu je AGPL-3.0-only, takže si ho můžete svobodně spustit, prozkoumat, upravit i šířit dál. Článek 13 přidává síťovou doložku: pokud upravený uzel nabízíte jako službu jiným lidem, musíte jim nabídnout i odpovídající zdrojový kód. To je celý náklad na dodržení licence, a díky tomu může být projekt ke spuštění svobodný.",
      },
      {
        q: "Zůstává vodoznakování nebo protokol výpočetních bodů uzavřený?",
        a: "Ne, a právě u tohoto tvrzení čekáme, že se bude nejpřísněji přezkoumávat. Kód pověření BBS+ a BLS12-381, logika oprávnění a registr kryptografických parametrů jsou otevřené v popopxmq; vodoznakování v GOP a ve frekvenční oblasti i jeho slepý dekodér jsou v tomto repozitáři. Komerční větev prodává datacentrum, pohotovostní směny, distribuční kanál a papírování kolem licencí — nikdy ne bránu ve zdrojovém kódu.",
      },
      {
        q: "Můžu distribuovat fork pod jménem a logem POPOPX?",
        a: "Ne. AGPL-3.0 ani žádná úroveň podpory k nim nedávají licenci. Politika chce jedinou nápravu, která fork nic nestojí: software přejmenujte, známky nahraďte a kód si nechte. Užití značky chce samostatnou písemnou licenci.",
      },
      {
        q: "Jak moc mám věřit číslům v tabulce hardwaru?",
        a: "Přesně tolik, co říká věta pod ní. Jsou to odhady tužkou na obálce, ne měření vašeho stroje, a skutečná propustnost se s teplotou a zátěží posune dvakrát až třikrát. Verze 1.1 uzlu je nahradí údaji o tokenech a wattech za každý engine, naměřenými na stroji, který doopravdy používáte.",
      },
      {
        q: "Které stroje jsou podporovány?",
        a: "macOS 14 nebo novější na Apple Silicon. Žebříček stupňů, Metal i MLX počítají se sjednocenou pamětí a MLX na Intelu neběží, takže Intel Mac není hostitel, na který tento projekt cílí, přestože univerzální DMG má stále i část x86_64. Samotná aplikace nelinkuje žádnou knihovnu třetích stran: pouze frameworky Apple. Co ale ovládá, je záměrně mimo ni — Ollama, FFmpeg a váhy LTX-2.5 jsou lokální nástroje, které enginy volají, a každý engine uvádí, které potřebuje.",
      },
    ],
  },

  footer: {
    tagline: "Lokální výpočetní výkon pro ekosystém POPOPX. Váš ke spuštění, váš ke čtení.",
    licenceHeading: "Licence",
    licenceBody:
      "Zdrojový kód uzlu je AGPL-3.0-only. Grafická díla, která tento projekt vytvořil, jsou AGPL-3.0-only, nebo — jak si zvolíte — CC0-1.0.",
    trademarkHeading: "Ochranná známka",
    trademarkBody:
      "POPOPX, POPOPX Chat a logo POPOPX jsou ochranné známky projektu POPOPX Chat. Ikona použitá na tomto webu je nepozměněná aplikační ikona POPOPX iOS. Politiku najdete v TRADEMARK-POPOPX.md v repozitáři popopx-chat.",
    privacyHeading: "Tato stránka",
    privacyBody:
      "Žádná analytika, žádné cookies, žádné fingerprintování, žádné skripty třetích stran ani externí CDN. Jediný odchozí požadavek, který stránka umí poslat, míří na api.github.com pro seznam souborů vydání, a když selže, vrátí se k pevně nastavenému odkazu.",
    appleNotice:
      "Nesouvisí s Apple. macOS, iOS, Apple Silicon a Metal jsou ochranné známky Apple Inc.",
    sourceRepo: "Zdrojový kód Mac Node",
    iosRepo: "Zdrojový kód klienta iOS",
    backToTop: "Zpět nahoru",
  },
};

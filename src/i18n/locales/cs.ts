import type { Dictionary } from "../types";

export const cs: Dictionary = {
  dir: "ltr",

  nav: {
    overview: "Přehled",
    node: "Co je uzel",
    features: "Schopnosti",
    install: "Instalace a nastavení",
    security: "Soukromí a kontrola",
    troubleshooting: "Řešení problémů",
    releases: "Vydání a GitHub",
    download: "Stáhnout uzel",
    openMenu: "Otevřít nabídku",
    closeMenu: "Zavřít nabídku",
    chooseLanguage: "Jazyk",
  },

  ecosystem: {
    heading: "Zbytek POPOPX",
    body:
      "Tři portály, jeden projekt, všechny naše. Nic na této stránce z nich nenačítá a žádný požadavek na ně nikdy nejde: node.popopx.chat opustíte jen tehdy, když sami kliknete.",
    chat: "POPOPX Chat",
    chatBody:
      "Samotná síť pro přenos zpráv — end-to-end, bez globálního ID — a fronta, na které váš uzel naslouchá.",
    botStudio: "Bot Studio",
    botStudioBody:
      "Kde se služební účty za deseti enginy píší a hostují — na serveru, který máte pod kontrolou vy.",
    serviceSuite: "Služební účty",
    serviceSuiteBody:
      "Ekosystém šifrovaných kanálů s nulovou znalostí, se kterými tyto enginy mluví.",
  },

  routes: {
    "/": { eyebrow: "PŘEHLED", title: "POPOPX Mac Node — váš vlastní Mac pohání těch deset enginů" },
    "/node": { eyebrow: "CO JE UZEL", title: "Co uzel je a co není — POPOPX Mac Node" },
    "/features": { eyebrow: "SCHOPNOSTI", title: "Deset lokálních enginů a hardware, který je žene — POPOPX Mac Node" },
    "/install": { eyebrow: "INSTALACE A NASTAVENÍ", title: "Instalace, párování, upgrade, záloha, odstranění — POPOPX Mac Node" },
    "/security": { eyebrow: "SOUKROMÍ A KONTROLA", title: "Co zůstává na vašem disku a jak to zastavit — POPOPX Mac Node" },
    "/troubleshooting": { eyebrow: "ŘEŠENÍ PROBLÉMŮ", title: "Porty, firewally a stropy paměti — POPOPX Mac Node" },
    "/releases": { eyebrow: "VYDÁNÍ A ZDROJOVÝ KÓD", title: "Vydání, otisky a celý zdrojový strom — POPOPX Mac Node" },
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Vaše zařízení. Váš uzel.",
    titleAccent: "Vaše kontrola.",
    subtitle:
      "POPOPX Mac Node je okraj sítě, která patří vám. Pohání lokální enginy pro modely, média a soubory za deseti službami Discover, a to na vašem vlastním Macu, vedle POPOPX Chat a Bot Studio. Síť přeposílá vaše šifrované zprávy; odvozování, vykreslení, zapečetěný archiv i veškerá tajemství zůstávají na hardwaru, který jste si koupili.",
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
      "Uložte obraz i soubor s otisky vydání do stejné složky a zkontrolujte je, než něco otevřete. Ten soubor se podle vydání liší — novější vydání publikují manifest SHA256SUMS.txt, starší jediný .sha256 pro jednu přílohu — proto stránka Vydání a GitHub vypíše přesně ty dva příkazy pro vydání, které právě prohlížíte.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Váš vlastní hardware",
    statStorage: "Výstupy na vašem vlastním SSD",
    statIdentity: "Žádný účet, žádné ID",
    statSource: "AGPL-3.0 bez výjimky",
  },

  overview: {
    splitHeading: "Síť koordinuje. Váš stroj vykonává.",
    splitSub:
      "To je celá myšlenka, a stojí za to vyslovit ji přesně, protože obvyklý výklad produktu jako tohoto je vzhůru nohama: cloud práci nedělá a váš Mac není tenký klient. Každá strana dělá právě ten díl, který dělat má.",
    cloudTitle: "Co síť nese",
    cloudBody:
      "Relé SMP a úložiště XFTP přesouvají vaše zprávy a soubory end-to-end mezi vašimi vlastními zařízeními a deset služebních účtů Discover pošle pokaždé jediný signál. Relé vidí šifrotext a metadata pro směrování. Nikdy nedostane model, prompt, snímek ani název souboru a nevykonává žádnou část žádného enginu.",
    macTitle: "Co dělá váš Mac",
    macBody:
      "Uzel ten signál vezme a práci odvede na stroji před vámi: kvantizované odvozování přes Ollama na loopbacku, vykreslování LTX-2.5 přes MLX, FFmpeg a vodoznakování v GOP, uzavírání CryptoKitem a trezory řetězené hashi, diskutil a AppKit pro fyzické úkony. Pak výsledek zapíše na váš vlastní disk.",
    pathsHeading: "Začněte tam, kde skutečně jste",
    paths: [
      {
        title: "Pojměte ten rozdíl",
        body:
          "Co uzel je, jediná linka, na které naslouchá, jak telefon získává oprávnění ho ovládat, a které porty jsou u toho.",
      },
      {
        title: "Dostaňte ho na Mac",
        body:
          "Předpoklady, ověřené DMG, sestavení ze zdrojového kódu, první spárování, upgrady, přechod na jiný stroj a úplné odstranění.",
      },
      {
        title: "Zjistěte, co odchází",
        body:
          "Popis datového kořene adresář po adresáři, co se vrací do vašeho telefonu, kde leží klíče a jak to zastavit nebo odvolat.",
      },
      {
        title: "Opravte, co se rozbilo",
        body:
          "Selhání, která skutečně nastávají: obsazený port, model, který nikdy neodpověděl, přeskočené váhy, vypršelý kód.",
      },
    ],
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

  node: {
    heading: "Uzel je počítač, který už máte",
    sub:
      "Ne region, ne typ instance, ne cenový tarif. Jeden Mac, na kterém běží ty části POPOPX, které se nemají dít nikde jinde — a jediné, čemu musíte věřit, je stroj, kterému už své soubory svěřujete.",
    points: [
      {
        title: "Citlivá práce nikdy neodejde",
        body:
          "Lékařské zprávy rozebírá Vision na vašem vlastním stroji. Surový videozáznam se stříhá a opatřuje vodoznakem lokálně. Uzavření trezoru i zapečetěný archiv jsou operace CryptoKitu na vašem vlastním disku. Žádná z těch cest nemá hostovaný endpoint, který by mohla zavolat.",
      },
      {
        title: "Vzdálenost je nula",
        body:
          "Odvozování probíhá v sjednocené paměti hned vedle procesu, který je požadoval. Klient modelu je ukotven na 127.0.0.1:11434, a proto v uzlu neexistuje žádná cesta kódu, která by se k hostovanému API pro odvozování mohla dostat i omylem — nejdřív by se musel přepsat literal hostitele.",
      },
      {
        title: "Už jste za to zaplatili",
        body:
          "Výpočetní body měří cykly, které utratí váš vlastní hardware, a Edge Compute Mesh je ten jediný engine, který půjčuje volnou kapacitu ven, místo aby si ji půjčoval. Tarif, který dostanete, je funkcí paměti, kterou jste si koupili.",
      },
      {
        title: "Oprávnění platí pro zařízení",
        body:
          "Jeden podepsaný, jednorázový, patnáctiminutový párovací kód autorizuje jedno zařízení. Konzole vypisuje, co je spárováno, a odvolání je tlačítko — s jednou upřímnou poznámkou o tom, co to tlačítko nedělá, která je na stránce o soukromí.",
      },
    ],
    wireHeading: "Jedna linka, tři segmenty",
    wireBody:
      "Příkaz z telefonu je obyčejná zpráva ve vaší vlastní frontě popopx-chat a uvnitř má jeden označovací řádek: prefix, id enginu, akci a JSON payload. Parser dělí jen podle prvního oddělovače, takže payload, který oddělovač obsahuje, přežije beze změny, a řádek s neznámým id enginu, prázdným payloadem nebo payloadem nad strop, který klient iOS připouští, se zahodí místo toho, aby se provedl zčásti.",
    wireSampleLabel: "Jediná přijímaná podoba",
    pairingHeading: "Párování v pořadí, v jakém skutečně probíhá",
    pairingSub:
      "Uzel vyrobí pověření, vy ho jednou ukážete telefonu, a pak je to pověření k ničemu. Na serveru se neuloží nic, protože žádný server, který by to mohl uložit, neexistuje.",
    pairingSteps: [
      {
        title: "Uzel nabídne",
        body:
          "Z lišty nabídek nebo z konzole uzel sepíše nabídku, podepíše její tělo svým vlastním klíčem Ed25519 — tím v pairing/node.key pod svým datovým kořenem — a vykreslí ji jako QR kód lokálně přes CoreImage. Žádný obraz stroj neopustí.",
      },
      {
        title: "Telefon si ji vezme",
        body:
          "POPOPX iOS kód naskenuje a kontakt, který z toho vzejde, je klíč zařízení. To jedno skenování založí SMP můstek; od té doby služební účty Discover mluví s vaším uzlem a s ničím dalším.",
      },
      {
        title: "Nabídka umře",
        body:
          "První uplatnění označí nabídku jako použitou. Vygenerování nového kódu ten předchozí vyřadí, takže vyfocený QR kód není trvající pozvánka — i když ho nikdo nikdy naskenuje, sám vyprší po patnácti minutách.",
      },
    ],
    pairingFacts: {
      lifetime: "Životnost nabídky",
      singleUse: "Uplatnění",
      signature: "Podepisuje",
      delivery: "Vykresleno jako",
    },
    portsHeading: "Naslouchající strana uzlu",
    portsSub:
      "Uzel sám otevře jeden port. Ty dva další patří programům, které spouští a k nimž se připojuje jako klient — a to je rozhodující ve chvíli, kdy čtete log firewallu: spojení na 11434 nebo 5225 navázal uzel, nepřijal.",
    portsColumns: ["Port", "Kdo váže", "Adresa", "Přenos", "Co to střeží"],
    portsOwner: {
      node: "Uzel",
      tool: "Ollama",
      daemon: "popopx-chat",
    },
    portsPurpose: {
      console: "Webová konzole a proud logů enginů",
      inference: "Lokální odvozování modelů",
      control: "Řídicí socket chatovacího démona",
    },
    portsFootnote:
      "Všechny tři jsou loopback. Konzole je čistý HTTP bez TLS, což je rozumný návrh jen proto, že nikdy neopustí stroj: pokusy navázat se na 0.0.0.0, adresu v LAN nebo hostname se zamítnou dřív, než socket vůbec vznikne, a adresa je v aplikaci zakódovaná, ne přečtená z konfiguračního souboru. Místo toho ji střeží náhodný čtyřiadvacetibajtový token vydávaný při každém spuštění, posílaný jako X-PPX-Token, držený jen v paměti, který po skončení procesu umírá. Řídicí socket chatovacího démona nemá autentizaci vůbec — to je jeho upřímný popis — a bezpečný je jen tak dlouho, jak dlouho zůstává na 127.0.0.1.",
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
      "Pod 48 GB — model 9B v Q4_K_M, jen krátká vykreslení, náročné práce s videem se nabízejí Edge Compute Mesh.",
    ],
    plansHeading: "Co který stupeň skutečně nasadí",
    plansSub:
      "Tabulka nahoře je návod, který čtete před koupí. Tato vypisuje to, co si uzel sám zaznamená, když stroj změří — přímo z funkce, která doporučení počítá, včetně tagu modelu, který se má stáhnout.",
    plansColumns: [
      "Paměťové pásmo",
      "Model textu",
      "Zásobník videa",
      "Strop rezidentní paměti",
      "Náročné video",
      "Příkaz stažení",
    ],
    heavyVideo: {
      local: "Vykreslí se zde",
      mesh: "Nabídne se meshi",
    },
    plansFootnote:
      "Strop rezidentní paměti je aritmetické pravidlo nad naměřenou pamětí, ne benchmark: každý stupeň od nalezené sjednocené paměti odečte pevnou rezervu pro desktopovou relaci a je horně omezen, aby stroj s obří pamětí nesliboval víc, než zásobník potřebuje. Tagy modelů a kvantizace jsou přesně ty řetězce, které uzel předává nástroji Ollama.",
  },

  install: {
    heading: "Jedno DMG, jedno skenování, deset přepínačů",
    sub:
      "Uzel nemá žádný instalátor, žádný účet démona a nic, co by se dalo registrovat. Je to jedna aplikace v liště nabídek, která se váže na loopback, a profil stroje udělá samo první spuštění.",
    prereqsHeading: "Než něco stáhnete",
    prereqNotes: {
      system: "Balíček cílí na macOS 14 a aplikace je agent v liště nabídek.",
      memory:
        "Metal, MLX i celý žebříček stupňů počítají se sjednocenou pamětí. DMG nese i část x86_64, ale žádná část zásobníku není pro Intel laděná.",
      disk:
        "Stahování vah modelů se zamítne, pokud je volné místo 40 GB nebo méně, takže strop žebříčku je zároveň stropem vašeho disku.",
      media:
        "Pět z deseti enginů volá FFmpeg. Průvodce ho umí opatřit přes Homebrew.",
      inference:
        "Ollama pro kvantizované textové modely, pracovní prostor LTX-2.5 MLX pro video. Obojí jsou lokální nástroje; nic z toho není služba.",
      bridge:
        "Třeba jen pro krok párování SMP a pro cestu řízenou telefonem. Samotných deset enginů běží i bez něj.",
    },
    prereqRequired: {
      hard: "Vyžadováno",
      wizard: "Průvodce to nainstaluje",
      optional: "Jen pro párování",
    },
    steps: [
      {
        title: "Ověřte a otevřete DMG",
        body:
          "Vezměte POPOPX-Mac-Node-Universal.dmg a soubor s otisky vydání do stejné složky a zkontrolujte je, než něco otevřete; Vydání a GitHub vypíše ty dva příkazy pro aktuální vydání. Aplikaci POPOPX Mac Node.app přetáhněte do /Applications. Zveřejněné sestavení nese podpis Developer ID a v obrazu přiložený notarizační tiket, takže Gatekeeper ho přijme sám — spctl -a -vv -t install odpoví accepted se source=Notarized Developer ID. Sestavení, které si uděláte sami, má jen ad-hoc podpis, a právě to při prvním spuštění vyžaduje klik pravým tlačítkem a Otevřít.",
      },
      {
        title: "Nechte ho změřit stroj",
        body:
          "Spusťte ho a z lišty nabídek otevřete konzoli. První krok přečte z sysctl čip, počet jader, sjednocenou paměť a volné místo na SSD, vypíše stupeň, který zvolil, a tag modelu, který tento stupeň znamená, a ukazuje čísla, která naměřil, ne ta, která jste mu nadiktovali.",
      },
      {
        title: "Nasaďte lokální enginy",
        body:
          "Průvodce prochází seznamem shora dolů: Homebrew, FFmpeg, uv, Ollama, kvantizace Qwen odpovídající vašemu stupni, pracovní prostor LTX-2.5 a nakonec vlastní kontrola. Instalační log během běhu proudí na stránku konzole a zapisuje se do logs/install.log, takže selhání lze přečíst dodatečně.",
      },
      {
        title: "Spárujte iPhone",
        body:
          "Vyrobte párovací QR kód — z konzole nebo z položky nového kódu v liště nabídek — a naskenujte ho klientem POPOPX iOS. Kód je podepsaný, jednorázový a za patnáct minut vyprší. Zařízení se objeví v seznamu spárovaných v konzoli se svým modelem, časem spárování a údajem, kdy ho uzel naposledy viděl.",
      },
      {
        title: "Zapněte enginy",
        body:
          "Deset přepínačů v liště nabídek a v konzoli. Engine běží jen tehdy, když ho zapnete, a čtyři, které se obejdou bez lokálního modelu — fyzické uzamčení, trezor s časovým zámkem, stopování vodoznaku a čtečka laboratorních zpráv — fungují dřív, než se stáhne jediná váha. FFmpeg se pořád volá; zásobník modelů ne.",
      },
    ],
    buildHeading: "Nebo ho sestavte ze stejného tagu",
    buildBody:
      "Obrazy vydání se balí ze zdrojového stromu, který si můžete zkopírovat. swift build, swift test, swift build -c release a pak bash Scripts/build_dmg.sh --output dist --version v1.0.2 napíšou univerzální DMG, opatří ho ad-hoc podpisem a vyprodukují k němu sidecar. Publikovaný artifact dělá ten druhý skript: Scripts/build-release.sh přidává podpis Developer ID, podání k notarizaci Applem a ZIP — proto stažený obraz projde přes spctl a vaše vlastní sestavení ne. Oba skripty běží jen na macOS, protože se skládají z hdiutil a codesign.",
    lifecycleHeading: "Po prvním spuštění",
    lifecycle: [
      {
        title: "Upgrade",
        body:
          "Není tu žádná aktualizace ani kontrola aktualizací — další věc, kterou uzel nikam nehlásí. Upgrade je přetažení: stáhněte novější DMG, ověřte ho a nahraďte aplikaci v /Applications. Nastavení, stav párování, klíč uzlu, trezor i všechny výstupy žijí pod Application Support, ne uvnitř bundle, takže nahrazená aplikace převezme stroj, na který dopadne.",
      },
      {
        title: "Záloha a přechod na jiný stroj",
        body:
          "Aplikace si označí svůj datový kořen jako vyloučený ze záloh Time Machine, což vaše zálohy chrání před váhami modelů a šetří vám překvapení při obnově. Zároveň to znamená, že ta složka v záloze není. Chcete-li uzel přenést, ukončete ho, zkopírujte ~/Library/Application Support/PopopxMacNode na stejnou cestu na novém Macu a nechte ho změřit se znovu: stupeň se může změnit a pairing/node.key se kopíruje spolu se složkou, což je celý důvod, proč ta kopie musí být stejně soukromá jako originál.",
      },
      {
        title: "Úplné odstranění",
        body:
          "Nejdřív vypněte Launch at Login, pak dejte Quit z lišty nabídek — to zavře listener a uvolní položku při přihlášení. Smažte /Applications/POPOPX Mac Node.app a pak i datový kořen ~/Library/Application Support/PopopxMacNode, pokud chcete odstranit i zapečetěný trezor, knihy záznamů a výstupy. Žádný odinstalační nástroj tu není a na nic se nedá zapomenout: nic se nenainstalovalo mimo ty dvě cesty a žádné položky v Keychainu neexistují, protože aplikace Keychain nikdy nepoužívá.",
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

  security: {
    heading: "Co zůstává, co odchází a jak to zastavit",
    sub:
      "Stránka o soukromí, která vyjmenovává jen to, co zůstává lokální, je marketingová stránka. Tahle vyjmenovává i provoz, protože upřímná verze tvrzení „vaše data nikdy neopustí zařízení“ je delší a užitečnější než slogan.",
    localHeading: "Zůstává na vašem disku",
    localSub:
      "Pod jedním datovým kořenem, ve složce, kterou aplikace vytvořila a vyloučila ze záloh Time Machine, s tajnými údaji zapsanými atomicky v módu 0600 a s úplným chráněním souborů.",
    localItems: [
      {
        title: "Všechny výstupy",
        body:
          "Vykreslené klipy, briefy, exporty s vodoznakem, zapečetěné archivy, dekódované zprávy i karanténované vstupy dopadnou pod datový kořen a zůstanou tam. Uzel drží outbox jen pro výsledky, které čekají, až se telefon vrátí online.",
      },
      {
        title: "Modely a jejich váhy",
        body:
          "Kvantizace Qwen žije ve vlastním úložišti Ollama, váhy LTX-2.5 žijí v adresáři enginů uzlu. Obojí jsou lokální soubory na lokálním disku, stažené jednou, a stahování se zamítne, pokud je volné místo 40 GB nebo méně.",
      },
      {
        title: "Klíče a stav párování",
        body:
          "Podepisovací klíč uzlu Ed25519, seznam spárovaných zařízení i aktuální nabídka jsou obyčejné soubory pod pairing/. Není tam žádný záznam v Keychainu, který by se migroval, žádná cloudová záloha klíče a žádná úschova nikde — což platí oběma směry, jak říká odstavec o ztrátě níže.",
      },
      {
        title: "Stopa důkazů",
        body:
          "Knihy uzamčení a meshu se lokálně appendují řetězcem hashů a audit log zaznamenává, co se spustilo, na kterém enginu a s jakým výsledkem. Píše se proto, abyste si to přečetli: logs/node.log je nejrychlejší odpověď na „co tenhle stroj dělal ve 03:14“.",
      },
    ],
    transitHeading: "Opouští stroj",
    transitSub:
      "Odcházejí čtyři věci, a každá z nich míří buď na vaše vlastní zařízení, nebo na něco, co jste si nastavili. Pátá kategorie neexistuje a neexistuje ani analytický endpoint, kam by něco šlo posílat.",
    transitItems: [
      {
        title: "Výsledky zpět do vašeho vlastního telefonu",
        body:
          "Dokončená úloha vrací kartu s nejvýše 1024 znaky plus jednu zprávu za každý soubor výstupu, a to vaší vlastní frontou popopx-chat, přičemž SMP relayuje a XFTP nese. Relé vidí šifrotext. Když je telefon offline, výsledek počká v outbox/ a opakuje se až třicet dní.",
      },
      {
        title: "Zdroje, které jste mu přikázali číst",
        body:
          "Morning TV načítá RSS zdroje, které jste nastavili, se stropem tří megabajtů na odpověď, a je to obyčejný odchozí HTTPS požadavek komukoli, kdo vaše kanály hostí.",
      },
      {
        title: "Webhook, který jste si nastavili",
        body:
          "Fyzické uzamčení může poslat podepsanou událost metodou POST na endpoint domácí automatizace nebo detekce přítomnosti. Je to best effort, je to opt-in a URL je vaše — uzel nemá žádný výchozí cíl.",
      },
      {
        title: "Instalace a stahování modelů",
        body:
          "Průvodce stahuje formula z Homebrewu, FFmpeg, uv, Ollama a kvantizaci, kterou jste zvolili. Ten provoz je smyslem instalačního kroku, děje se jednou, před vámi a se logem na obrazovce.",
      },
    ],
    keysHeading: "Kde tajné údaje skutečně leží",
    keysBody:
      "Ne v Keychainu. Uzel je aplikace pro macOS, která na Keychainu nezávisí vůbec, a to je rozhodnutí, ne přehlédnutí: párovací materiál i materiál trezoru jsou soubory pod jeho datovým kořenem, zapsané atomickým zápisem, POSIX módem 0600 a s úplným chráněním souborů, takže dokud je stroj zamčený, za klidu na disku se přečíst nedají. Ten kompromis je reálný — oprávnění souborů jsou auditovatelná a přenositelná, a zároveň nejsou ničím mezi vaším uživatelským účtem a čtečkou, která váš uživatelský účet už má. Považte datový kořen za to, čím je: není v záloze Time Machine a je to jediná kopie klíče uzlu, která existuje.",
    dataNote: {
      output:
        "Vygenerované výstupy a fronta outbox, která drží výsledky čekající na telefon.",
      vault: "Trezory se časovým zámkem a materiál pro dědice, který je otevírá.",
      pairing: "Klíč uzlu Ed25519, seznam spárovaných zařízení a aktuální jednorázová nabídka.",
      weights: "Váhy modelů a pracovní prostor LTX-2.5 MLX, který volají enginy videa.",
      ledger: "Knihy uzamčení a meshu appendované řetězcem hashů.",
      logs: "Instalační log a audit log, psané proto, aby je operátor přečetl.",
      config: "Nastavení, přepínače enginů a konfigurace, kterou si dělí můstek a integrations.",
    },
    rootLabel: "Datový kořen",
    controlHeading: "Vaše strana vypínače",
    controlSub:
      "Čtyři ovládací prvky, všechny lokální, všechny viditelné v aplikaci, ne zahrabané na obrazovce nastavení. Žádný z nich nepotřebuje síť, a právě proto fungují ve chvíli, kdy je problém ta síť.",
    controls: [
      {
        title: "Zastavit jeden engine",
        body:
          "Deset nezávislých přepínačů v liště nabídek a v konzoli. Vypnutí se projeví při dalším příkazu a příkaz pro vypnutý engine se zamítne, ne zařadí do fronty.",
      },
      {
        title: "Přestat půjčovat cykly",
        body:
          "Pause Mesh Sharing vyřadí uzel z poolu hraničního výkonu hned; v liště nabídek se objeví Paused a uzel přestane přijímat úlohy. Je to ten jediný prvek, který má ve svém názvu slovo pauza, a týká se kapacity meshu, ne celého uzlu.",
      },
      {
        title: "Upálit aktuální párovací kód",
        body:
          "New Pairing QR vyřadí platnou nabídku a vyrobí náhradu. Kdo má fotografii starého kódu, má propadlý podpis, ne druhou šanci.",
      },
      {
        title: "Zastavit všechno",
        body:
          "Quit je skutečný vypínač: zavře loopback listener, uvolní položku při přihlášení a token pro dané spuštění zemře spolu s procesem. Uzel, který neběží, neodpovídá na nic, nikomu a o ničem.",
      },
    ],
    revokeHeading: "A co odvolání zařízení",
    revokeBody:
      "Seznam spárovaných zařízení v konzoli má tlačítko Revoke na každém řádku. Označí zařízení jako odvolané, sebere mu mapování kontaktu a jeho příkazy od té chvíle zahodí — ale nerozbije to spojení SMP, a aplikace to říká ve stejné zprávě, kterou vám ukáže. Abyste tu práci dokončili, smažte kontakt v chatovacím klientu. Co už bylo zapsáno na váš disk, na disku zůstává; odvolání zastavuje budoucí příkazy, není to vzdálené vymazání, a uzel nikdy žádnou schopnost vzdáleně vymazat neměl.",
    limitsHeading: "Co tato stránka neslibuje",
    limitsBody:
      "Bezpečné zničení je náhodný přepis, sync a unlink. Na APFS se upravený soubor zapíše na nové bloky a SSD přemapovává ty logické, takže to soubor odstraní a znemožní práci běžných obnovovacích nástrojů, ale nedokazuje, že fyzické staré bajty jsou pryč. Je to to nejlepší, co umí userspace API souborů, a kód to říká i ve výsledku, který vrací. Dál už nic: žádné globální pozastavení kromě ukončení, žádné vzdálené vymazání, žádná úschova klíčů, a tedy ani obnova, pokud ztratíte stroj i datový kořen najednou, a žádná aktualizace, kterou by šlo přemluvit, aby nainstalovala něco, o co jste nežádali.",
  },

  troubleshooting: {
    heading: "Když to nedělá, co jste čekali",
    sub:
      "Selhání, která na téhle architektuře skutečně nastávají, v pořadí, v jakém do nich lidé narazí. Každé jménuje, na co se podívat první, protože na stroji bez serverové strany je log vždy nejkratší cesta.",
    columns: ["Příznak", "Co se děje", "Co s tím"],
    items: [
      {
        symptom: "Stránka konzole se neotevře",
        cause:
          "Port je pevně 127.0.0.1:18920 bez zálohy, takže druhá běžící instance — nebo cokoli, co bylo dřív — drží listener. Token je navíc ke každému spuštění: stará karta z doby před restartem má mrtvé pověření.",
        fix:
          "Hledejte listener na 18920 a druhou instanci ukončete, pak použijte Open Web Console z lišty nabídek, který sestaví aktuální URL s aktuálním tokenem, ne se starým.",
      },
      {
        symptom: "Na 11434 nikdo neodpovídá",
        cause:
          "Enginy, které potřebují model, komunikují s Ollama jen na loopbacku. Když Ollama neběží, nebo byla nainstalována bez průvodce, engine selže, místo aby padal zpět na nějakou hostovanou službu.",
        fix:
          "Spusťte Ollama, potvrďte, že OLLAMA_HOST je loopback, a stáhněte kvantizaci, kterou tabulka stupňů pro váš stroj pojmenuje. Text selhání cituje příkaz, který by zabral.",
      },
      {
        symptom: "Váhy se nikdy nestáhly",
        cause:
          "Instalátor stahování vah přeskočí, pokud v config/engines.json není deklarované weightSources, a pokud je volné místo 40 GB nebo méně, odmítne ho rovnou.",
        fix:
          "Přidejte zdroj, který chcete načíst, nebo váhy zkopírujte do engines/weights a mířte na ně konfigurací. Nejdřív uvolněte disk; ta pojistka je prahová hodnota, ne varování.",
      },
      {
        symptom: "Vykreslení se vrátilo jako příkazový řádek",
        cause:
          "Práce s videem potřebuje pracovní prostor LTX-2.5 a jeho váhy. Bez nich engine vrátí přesný příkaz, který by spustil, místo aby předstíral, že vytvořil soubor.",
        fix:
          "Dokončete krok pracovního prostoru v průvodci, nebo naklonujte jím pojmenovaný pracovní prostor LTX-2-MLX, a spusťte znovu. Je to záměr: nafouknutý úspěch je horší než upřímné odmítnutí.",
      },
      {
        symptom: "Párovací kód je zamítnut",
        cause:
          "Nabídka je jednorázová a žije patnáct minut. Druhé skenování stejného kódu, nebo kód z obrazovky, která se mezitím otočila, se zamítne správně.",
        fix:
          "Vyrobte nový kód a naskenujte ho jednou. Pokud se telefon po úspěchu sám ozve znovu, první uplatnění už vyhrálo a zamítnutí je očekávaná odpověď.",
      },
      {
        symptom: "Příkazy z telefonu nic nedělají",
        cause:
          "Můstek potřebuje demona popopx-chat v PATH a uzel zkouší přesně jeden spustitelný soubor bez zálohy. V liště nabídek se pak objeví popopx-chat not installed. A vypnutý engine neodpoví tak jako tak.",
        fix:
          "Nejdřív čtěte řádek můstku v liště nabídek, pak přepínače enginů, pak audit log. Zamítnutý příkaz a příkaz, který nikdy nepřišel, vypadají z telefonu stejně.",
      },
      {
        symptom: "Výsledky přestanou chodit, když je telefon mimo",
        cause:
          "Odchozí doručení jde přes vašeho vlastního démona a relé, takže firewall blokující odchozí spojení, VPN, která relé nenese, i démon, který skončil, vypadají stejně. Výsledky nejsou ztraceny: stojí v outbox/ a opakují se až třicet dní.",
        fix:
          "Ověřte, že démon běží, pak povolte odchozí spojení uzlu v tom, co je filtruje, a pak čekejte, až fronta klesne, místo abyste úlohu spouštěli znovu.",
      },
      {
        symptom: "Karta stahování píše „zobrazuji pevně nastavené vydání“",
        cause:
          "api.github.com bylo nedostupné, zablokované, omezené rate limitem, nebo odpovědělo bez stahovatelné přílohy. Stránka pak vykreslí vydání zabudované do bundle, místo aby hádala.",
        fix:
          "Otevřete stránku vydání přímo. Nic jiného na webu ten požadavek nepotřebuje a žádná část stránky kvůli selhání nezůstane prázdná.",
      },
    ],
    escalation:
      "Většinu ze zbytku vyřeší dva soubory: logs/install.log pro cokoli, co udělal průvodce, a logs/node.log pro vše po něm. Oba jsou čistý text pod datovým kořenem a vlastní logový kanál konzole ukazuje tytéž události živě. Pokud selhání přežije jejich přečtení, kontrakt, podle kterého testují uzel i integrations, je v repozitáři a issues patří na popopx-mac-node.",
  },

  releases: {
    heading: "Vydání, otisky a celý strom",
    sub:
      "Vše, z čeho se uzel staví, je v jednom repozitáři pod AGPL-3.0-only, a každý publikovaný obraz lze před otevřením zkontrolovat proti otisku. Tato sekce je místo, kde web přestává popisovat a začíná ukazovat.",
    assetsHeading: "Publikované přílohy",
    assetsColumns: ["Soubor", "Co to je", "Velikost"],
    assetKinds: {
      dmg: "Diskový obraz s přetažením do Applications, univerzální arm64 a x86_64. Tohle je ten, který si máte vzít.",
      sidecar: "Otisk pro jediný soubor, zapsaný tím balicím krokem, který ho vytvořil.",
      zip: "Podepsaný bundle aplikace jako ZIP, pro archiv místo svazku.",
      sums: "Manifest, který vypisuje každý výsledek vydání spolu s jeho otiskem.",
    },
    missingAsset:
      "Ne každé vydání publikuje každou přílohu. Starší vydání nesou jen diskový obraz a jeho sidecar, proto kontrola níže čte vydání, které jste skutečně otevřeli.",
    verifyHeading: "Zkontrolujte, než něco otevřete",
    verifyBody:
      "Dva příkazy, spuštěné ve složce, do které jste stahovali. Forma s manifestem je upřednostněná a je to, co aktuální vydání publikuje.",
    verifySumsBody:
      "Manifest vydání vypisuje všechny výsledky, takže soubor, který jste nestáhli, je očekávaný, nikoli chybějící: přidejte --ignore-missing a čtěte řádek, který odpovídá souboru, který jste vzali. Manifest se píše ve stejném kroku, který balí payload, jehož jméno obsahuje.",
    verifySidecarBody:
      "Starší vydání místo toho publikuje sidecar pro jedinou přílohu, a ten je třeba brát jako předlohu. Když vydání nese obojí a ty dva si odporují, věřte manifestu: sidecar může pocházet z jiného sestavení téže verze.",
    pipelineHeading: "Jak se sem která verze dostane",
    pipelineBody:
      "Pushnutí tagu spustí release workflow na runneru s macOS: sestaví strom, spustí kontraktové testy, zabalí univerzální obraz přes Scripts/build_dmg.sh, odmítne publikovat soubor s kontrolními součty, který obsahuje absolutní cestu, a nahraje to, co skript napsal. Notarizovaný obraz vedle manifestu SHA256SUMS.txt pochází ze Scripts/build-release.sh, který přidává podpis Developer ID, podání k notarizaci Applem a ZIP. Obě cesty končí stejně: otiskem, který zkontrolujete bez důvěry v tuto stránku.",
    supportedHeading: "Dnes běží",
    supportedItems: [
      "Všech deset enginů, každý s vlastní sadou akcí a cestami odmítnutí, zapínané samostatně.",
      "Automatická volba stupně ze sysctl včetně stažení modelu, který daný stupeň znamená.",
      "Podepsané, jednorázové, patnáctiminutové párování a konzole, která se váže jen na loopback.",
      "Můstek v TypeScriptu a dva adaptéry pro agenty přes tutéž konzoli a tentýž token.",
    ],
    roadmapHeading: "Ještě ne",
    roadmapSub:
      "Sepisováno jako plány v repozitáři, ne jako sliby na stránce. Nic z toho dnes neběží.",
    roadmap: [
      {
        title: "Měření po enginech na vašem vlastním stroji",
        body:
          "Panel využití a časové osy selhání vrácené do telefonu: údaje o tokenech a wattech ze stroje před vámi, které nahradí odhady v tabulce hardwaru.",
      },
      {
        title: "Tvrdší izolace meshu a exportovatelná kniha záznamů",
        body:
          "Silnější uzavření půjčené kapacity a kniha záznamů, kterou lze z aplikace vynést, ne jen uvnitř přečíst.",
      },
      {
        title: "Rozdělená úschova pro víc než jednoho dědice",
        body:
          "Rozdělení materiálu pro dědice mezi víc dědiců a víc layoutů zpráv ve zdravotním enginu.",
      },
      {
        title: "Podepsané distribuční kanály a další stupně videa",
        body:
          "Zvažování kanálu v obchodě s aplikacemi nad rámec notarizace a další stupně LTX pro paměťová pásma, která žebříček ještě nepokrývá.",
      },
    ],
    sourceHeading: "Zdrojový kód a co licence ukládá",
    sourceBody:
      "Jeden repozitář, AGPL-3.0-only, žádné uzavřené jádro: enginy, konzole, vodoznakování i kniha záznamů jsou v něm, a kód pověření založený na slepých podpisech i registr kryptografických parametrů jsou otevřené v popopxmq vedle něj. Článek 13 se aplikuje obvyklým způsobem: spouštějte, zkoumejte a upravujte svobodně, a pokud upravený uzel nabízíte jako službu jiným lidem, nabídněte jim i odpovídající zdrojový kód. To je celá cena za dodržení licence.",
    licenceHeading: "Co nepokrývá",
    licenceBody:
      "AGPL-3.0 nedává licenci k názvu ani logu POPOPX. Fork může vzít vše kromě značek: software přejmenujte, značky nahraďte a kód si nechte.",
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
        a: "Přesně tolik, co říká věta pod ní. Jsou to odhady tužkou na obálce, ne měření vašeho stroje, a skutečná propustnost se s teplotou a zátěží posune dvakrát až třikrát. Příští verze uzlu je nahradí údaji o tokenech a wattech za každý engine, naměřenými na stroji, který doopravdy používáte.",
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

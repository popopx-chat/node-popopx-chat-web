import type { Dictionary } from "../types";

export const fi: Dictionary = {
  dir: "ltr",

  nav: {
    engines: "Moottorit",
    architecture: "Arkkitehtuuri",
    hardware: "Laitteisto",
    install: "Asennus",
    faq: "UKK",
    github: "GitHub",
    download: "Lataa",
    openMenu: "Avaa valikko",
    closeMenu: "Sulje valikko",
    chooseLanguage: "Kieli",
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Macisi muuttuu",
    titleAccent: "laskentakerrokseksi",
    subtitle:
      "POPOPX Mac Node hoitaa POPOPX iOS -asiakkaan kymmenen Discover-moottorin paikallisen laskennan ja deterministisen suorituksen. Ei pilveä, ei tiliä, ei telemetriaa, kaikki päästä päähän salattuna.",
    ctaDownload: "Lataa DMG",
    ctaSource: "Lue lähdekoodi",
    releaseLabel: "Uusin julkaisu",
    sizeLabel: "Koko",
    digestLabel: "SHA-256",
    statusFetching: "Kysellään GitHub Releases -palvelulta…",
    statusLive: "Suoraan GitHub Releases -palvelusta",
    statusFallback: "GitHub ei tavoiteta — näytetään kiinteä julkaisu",
    copyDigest: "Kopioi tiiviste",
    digestCopied: "Tiiviste kopioitu",
    verifyTitle: "Varmista ennen avaamista",
    verifyBody:
      "Tallenna .dmg ja sen .sha256-saattotiedosto samaan kansioon, ja aja shasum -a 256 -c saattotiedostolle, ei levykuvalle. Saattotiedostossa on yksi tiiviste ja yksi suhteellinen tiedostonimi; odotettu tulos on POPOPX-Mac-Node-Universal.dmg: OK.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Oma laitteistosi",
    statStorage: "Fyysinen paikallinen tallennus",
    statIdentity: "Ei tiliä, ei tunnusta",
    statSource: "AGPL-3.0 alusta loppuun",
  },

  architecture: {
    heading: "Kolme takausta, ei yhtään palvelua niiden välissä",
    sub:
      "Tässä arkkitehtuurissa kiinnostavinta on se, mikä siitä puuttuu: ei tilipalvelua, ei avainten säilytyspalvelua, ei analytiikkapäätepistettä, ei isännöityä päättelyä.",
    items: [
      {
        title: "Fyysinen paikallinen tallennus",
        body:
          "Jokainen moottorin tuottama lopputulos — katsaus, vesileimattu leike, sinetöity arkisto ja purettu raportti — kirjoitetaan omaan SSD-asemaasi yhden juurihakemiston alle. Se on iCloud-synkronoinnin ja kaikkien jaettujen säiliöiden ulkopuolella, ja kirjanpidot kirjoitetaan täydellistä tiedostonsuojausta käyttäen, joten ne eivät ole luettavissa levyllä koneen lukituksen jälkeen.",
      },
      {
        title: "Ei tiliä, ei tunnusta",
        body:
          "Ei rekisteröitymistä, ei puhelinnumeroa, ei sähköpostiosoitetta eikä laitteen tunnistetta, jotka pitäisi luovuttaa. Puhelimen liittäminen solmuun on yhden QR-koodin skannaus, ja sen jälkeen saapuvat komennot kulkevat omaa popopx-chat-jonoasi pitkin, SMP ja XFTP vievät ne päästä päähän.",
      },
      {
        title: "AGPL-3.0 läpi koko ohjelmistopinon",
        body:
          "Kymmenen moottoria, SMP-yhdyskäytävä, paikallinen web-konsoli, GOP- ja taajuusaluevesileimaus sekä laskentapisteiden kirjanpito ovat yhtä AGPL-3.0-only-lähdekoodipuuta. Ei suljettua ydintä: sokean allekirjoituksen tositakoodi ja kryptografisten parametrien rekisteri ovat popopxmq-projektissa, avoimina.",
      },
    ],
  },

  engines: {
    heading: "Kymmenen suvereenia moottoria",
    sub:
      "Kolme hyllyä ja kymmenen virallista palvelutiliä. Jokainen alla oleva kortti näyttää oman hintansa: kiinteä määrä laskentapisteitä yhtä 30 päivän jaksoa kohden — tai Edge Compute Mesh -verkon osalta työ kerrallaan suoritettava selvitys 10 %:n protokollamaksulla. Jokainen niistä toimii laitteistolla, joka sinulla jo on.",
    filterAll: "Kaikki",
    substrateLabel: "Alusta",
    quickMenuLabel: "iOS-pikavalikko",
    quickMenuHint:
      "Jokainen painike lähettää ::popopx_sys::NODE_CMD::<service>::<action>::{} pariliitettyyn solmuusi.",
    deterministicBadge: "Deterministinen — ei mallia polussa",
    modelBadge: "Paikallinen malli silmukassa",
    offlineBadge: "Toimii ilman paikallisia mallipainoja",
    openDetails: "Avaa",
    closeDetails: "Sulje",
    shelfCount: "moottoria",
    creditsUnit: "Laskentapistettä",
  },

  hardware: {
    heading: "Taso seuraa muistia",
    sub:
      "Käynnistyksessä solmu lukee sysctl-arvot — sirun mallin, CPU-ytimien lukumäärän, fyysisen yhtenäisen muistin ja vapaan SSD-tilan — ja valitsee tason automaattisesti. Jos siirrät sovelluksen toiseen Maciin, taso seuraa perässä; mitään ei tarvitse määrittää uudelleen.",
    columns: [
      "Yhtenäinen muisti",
      "Tyypillinen siru",
      "Tekstimalli",
      "Videomalli",
      "Ensimmäinen token*",
      "Läpimenonopeus*",
      "Pysyvän muistin huippu*",
      "Tila",
    ],
    modes: {
      lightweight: "Kevyt päättely",
      balanced: "Tasapainoinen",
      full: "Täysi painot",
    },
    footnote:
      "* Nämä kolme saraketta ovat insinööriarvioita, eivät laboratoriomittauksia. Ne perustuvat tiheän 27B-mallin muistiväylään sidottuun dekoodaukseen ja LTX-2.5-painojen muistijäljen lukemiseen kvantisoimissuhteesta. Jatkuva lämpökäyttäytyminen, sirusukupolvi, taustakuorma, leikkeen pituus ja rinnakkaiset työt siirtävät todellisia lukuja kahdella tai kolmella kertoimella. Käytä niitä tason valintaan, älä suorituskykylupauksena.",
    rules: [
      "96 GB ja yli — LTX-2.5 alkuperäiset täydet BF16-painot, Qwen3.8-27B muodossa Q8_0.",
      "48–95 GB — LTX-2.5 MLX-kvantisoituna 8-bit, Qwen3.8-27B muodossa Q4_K_M.",
      "Alle 48 GB — kevyt päättely; raskas videotyö tarjotaan Edge Compute Mesh -verkolle sen sijaan, että se renderöitäisiin paikallisesti.",
    ],
  },

  install: {
    heading: "Kolme minuuttia, sitten se on sinun",
    sub:
      "Solmussa ei ole asennusohjelmaa, ei daemon-tiliä eikä mitään rekisteröitävää. Se on yksi valikkopalkin sovellus, joka sitoutuu loopback-osoitteeseen.",
    steps: [
      {
        title: "Tarkista DMG ja avaa se",
        body:
          "Hae Releases-osiosta POPOPX-Mac-Node-Universal.dmg ja sen .sha256, molemmat samaan kansioon, ja tarkista ne ennen kuin avaat mitään: shasum -a 256 -c POPOPX-Mac-Node-Universal.dmg.sha256 pitää tulostaa OK. Vedä sovellus /Applications-kansioon.",
      },
      {
        title: "Paikallisten moottorien käyttöönotto",
        body:
          "Avaa valikkopalkin valinta ja käynnistä konsolin ohjattu asennus. Ensimmäinen vaihe kartoittaa sirun, yhtenäisen muistin ja SSD-aseman, noutaa tasolle sopivan Qwen3.8-kvantisoinnin, alustaa ltx2-työtilan ja välittää asennuslokin sivulle sen edetessä.",
      },
      {
        title: "iPhonein pariliitos",
        body:
          "Skannaa konsolin pariliitoksen QR-koodi POPOPX iOS -asiakkaalla. Se yksi skannaus luo SMP-sillan; siitä lähtien Discover-palvelutilit puhuvat solmusi kanssa eivätkä minkään muun kanssa.",
      },
      {
        title: "Kytke moottorit päälle",
        body:
          "Kymmenen vipua. Moottori on käynnissä vain, jos otat sen käyttöön, ja neljä moottoria, jotka eivät tarvitse paikallista mallia — fyysinen lukitus, aikalukollinen holvi, vesileiman jäljitys ja laboratorioraportin lukija — toimivat ennen kuin yhtään painoa on ladattu. FFmpegia kutsutaan edelleen; mallipinoa ei.",
      },
    ],
    bridgeTitle: "Ohjaa moottoreita omasta skriptistä",
    bridgeBody:
      "Integraatiokansio sisältää TypeScript-sillan ja kaksi agenttisovitetta. Se ei avaa uutta porttia eikä käynnistä toista daemonia: se käyttää uudelleen konsolia osoitteessa 127.0.0.1:18920 ja kertaluontoista prosessitunnistetta sekä lähettää samaa NODE_CMD-signaalointia kuin puhelin. Lukitustoiminto vaatii kaksoishyväksynnän — allowLockdown on oltava true ja PPX_BRIDGE_SECRET vähintään kuusitoista merkkiä — ja kieltäytyminen kirjoitetaan liitännäislokiin, joten näet sen tapahtuneen.",
    requirementTitle: "Yksi reilu edellytys",
    requirementBody:
      "Solmun oman ohjatun asennuksen toinen vaihe, pariliitoksen QR-koodi ja SMP-silta tarvitsevat kaikki popopx-chat-ohjelman chat-daemonin PATH-polullasi. Solmu tutkii täsmälleen yhden suoritettavan tiedoston eikä sillä ole varamahdollisuutta, koska upstream-käännös vastaa versiokyselyyn mutta epäonnistuu sen jälkeen jokaisessa komennossa. Itse kymmenen moottoria eivät tarvitse sitä.",
    copyCommand: "Kopioi komento",
    commandCopied: "Kopioitu",
  },

  faq: {
    heading: "Kysymyksiä, joita oikeasti kysytään",
    sub: "Lyhyet vastaukset siten, että se osa, jota emme voi taata, jää näkyviin.",
    items: [
      {
        q: "Toimiiko mikään tästä teidän palvelimillanne?",
        a: "Ei. Kymmenen moottorin komennot tulevat iOS-asiakkaalta omaa popopx-chat-jonoasi pitkin, päästä päähän salattuna, ja päättely, renderöinti, tallennus ja fyysinen suoritus tapahtuvat kaikki omalla Macilläsi. Yksikään vaihe ei tarvitse infrastruktuuriamme, eikä solmussa ole koodipolkua, joka yltäisi isännöityyn päättelyrajapintaan — malliasiakas on sidottu osoitteeseen 127.0.0.1.",
      },
      {
        q: "Mitä minun pitää rekisteröidä?",
        a: "Mitään. Tiliä, puhelinnumeroa, sähköpostiosoitetta tai mainostunnistetta ei ole missään tuotteen osassa. Puhelimen liittäminen solmuun on yhden QR-koodin skannaus, ja web-konsoli sitoutuu vain loopback-osoitteeseen, vaihtaa satunnaisen tunnisteen jokaisessa käynnistyksessä eikä ole tavoitettavissa lähiverkkosi muista laitteista.",
      },
      {
        q: "Miksi AGPL-3.0, ja mihin 13. pykälä minut velvoittaa?",
        a: "Jokainen solmun lähdekooditiedosto on AGPL-3.0-only, joten saat käyttää, tutkia, muuttaa ja levittää sitä vapaasti. 13. pykälä lisää verkkolausekkeen: jos tarjoat muunneltua solmua palveluna muille, sinun on tarjottava heille vastaava lähdekoodi. Siinä on koko vaatimustenmukaisuuden kustannus, ja se on syy, miksi projektin voi käynnistää vapaasti.",
      },
      {
        q: "Pidetäänkö vesileima tai laskentapisteprotokolla suljettuna?",
        a: "Ei, ja juuri tätä väitettämme odotamme tutkittavaksi. BBS+- ja BLS12-381-tositakoodi, oikeuksien logiikka sekä kryptografisten parametrien rekisteri ovat avoimina popopxmq-projektissa; GOP- ja taajuusaluevesileima sekä sen sokea dekooderi ovat tässä arkistossa. Kaupallinen rata myy datakeskuksen, päivystysvuorot, jakelutien ja vaatimustenmukaisuuden paperityön — ei koskaan lähdekoodikynnystä.",
      },
      {
        q: "Voinko julkaista haaran POPOPX-nimellä ja -logolla?",
        a: "Et. Tavaramerkkejä ei lisenssoida AGPL-3.0:lla, eikä yksikään tukitaso myönnä niitä. Käytäntö pyytää ainoaa korjaustoimenpidettä, joka ei maksa haaralle mitään: nimeä ohjelmisto uudelleen, vaihda tunnukset ja pidä koodi. Merkin käyttö edellyttää erillistä kirjallista lisenssiä.",
      },
      {
        q: "Paljonko laitteistotaulukon lukuja kannattaa luottaa?",
        a: "Luota niihin yhtä paljon kuin alla oleva lause sanoo. Ne ovat karkeita arvioita, eivät koneesi mittauksia, ja todellinen läpimenonopeus vaihtelee kahdella tai kolmella kertoimella lämmön ja kuorman mukaan. Solmun versio 1.1 korvaa ne moottorikohtaisilla token- ja wattimittauksilla, jotka on mitattu juuri sillä laitteella, jota käytät.",
      },
      {
        q: "Mitkä koneet ovat tuettuja?",
        a: "macOS 14 tai uudempi Apple Silicon -koneilla. Tasojen portaat, Metal ja MLX olettavat kaikki yhtenäisen muistin arkkitehtuuria, eikä MLX toimi Intelissä, joten Intel-Mac ei ole isäntäkone, jota tämä projekti tukee, vaikka universaali DMG sisältääkin yhä x86_64-osion. Itse ohjelma ei linkitä yhtään kolmansien osapuolten kirjastoa: vain Apple-kehyksiä. Se, mitä se ohjaa, on tarkoitettu pysymään erossa: Ollama, FFmpeg ja LTX-2.5-painot ovat paikallisia työkaluja, joita moottorit kutsuvat, ja jokainen moottori kertoo, mitä niistä se tarvitsee.",
      },
    ],
  },

  footer: {
    tagline: "Paikallista laskentaa POPOPX-ekosysteemiä varten. Sinun ajettavaksesi, sinun luettavaksesi.",
    licenceHeading: "Lisenssi",
    licenceBody:
      "Solmun lähdekoodi on AGPL-3.0-only. Tämän projektin luomat graafiset aineistot ovat AGPL-3.0-only tai valintasi mukaan CC0-1.0.",
    trademarkHeading: "Tavaramerkit",
    trademarkBody:
      "POPOPX, POPOPX Chat ja POPOPX-logo ovat POPOPX Chat -projektin tavaramerkkejä. Tällä sivustolla käytetty kuvake on muuttamaton POPOPX iOS -sovelluksen kuvake. Käytäntö on TRADEMARK-POPOPX.md-tiedostossa popopx-chat-arkistossa.",
    privacyHeading: "Tämä sivu",
    privacyBody:
      "Ei analytiikkaa, ei evästeitä, ei sormenjälkitunnistusta, ei kolmansien osapuolten skriptejä eikä ulkoisia CDN-palveluita. Ainoa sivun tekemä ulospäin suuntautuva pyyntö on julkaisujen tiedostolistan hakeminen api.github.com-osoitteesta, ja jos kutsu epäonnistuu, sivu turvautuu kiinteään linkkiin.",
    appleNotice:
      "Sivusto ei ole Appleen sidoksissa. macOS, iOS, Apple Silicon ja Metal ovat Apple Inc:n tavaramerkkejä.",
    sourceRepo: "Mac Node -lähdekoodi",
    iosRepo: "iOS-asiakkaan lähdekoodi",
    backToTop: "Takaisin ylös",
  },
};

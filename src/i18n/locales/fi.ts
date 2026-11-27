import type { Dictionary } from "../types";

export const fi: Dictionary = {
  dir: "ltr",

  nav: {
    overview: "Yleiskuvaus",
    node: "Mikä solmu on",
    features: "Ominaisuudet",
    install: "Asennus ja käyttöönotto",
    security: "Yksityisyys ja hallinta",
    troubleshooting: "Vianmääritys",
    releases: "Julkaisut ja GitHub",
    download: "Hanki solmu",
    openMenu: "Avaa valikko",
    closeMenu: "Sulje valikko",
    chooseLanguage: "Kieli",
  },

  ecosystem: {
    heading: "POPOPX:n muut osat",
    body:
      "Kolme portaalia, yksi projekti, ja kaikki ovat meidän omiamme. Tämä sivu ei lataa niistä mitään eikä lähetä niihin pyyntöjä: node.popopx.chat jätetään taakseen vain, jos klikkaat.",
    chat: "POPOPX Chat",
    chatBody:
      "Itse viestiverkko — päästä päähän salattuna, ilman globaalia tunnusta, ja se jono jota solmusi kuuntelee.",
    botStudio: "Bot Studio",
    botStudioBody:
      "Missä kymmenen moottorin takana olevat palvelutilit kirjoitetaan ja missä ne toimivat palvelimella, jota hallitset itse.",
    serviceSuite: "Palvelutilit",
    serviceSuiteBody:
      "Nollatiedon salattujen kanavien ekosysteemi, jonka kanssa nuo moottorit keskustelevat.",
  },

  routes: {
    "/": { eyebrow: "YLEISKUVAUS", title: "POPOPX Mac Node — oma Macisi pyörittää kymmenen moottoria" },
    "/node": { eyebrow: "MIKÄ ON SOLMU", title: "Mikä solmu on ja mikä se ei ole — POPOPX Mac Node" },
    "/features": { eyebrow: "OMINAISUUDET", title: "Kymmenen paikallista moottoria ja laitteisto, joka ne pyörittää — POPOPX Mac Node" },
    "/install": { eyebrow: "ASENNUS JA KÄYTTÖÖNOTTO", title: "Asennus, pariliitos, päivitys, varmuuskopio ja poisto — POPOPX Mac Node" },
    "/security": { eyebrow: "YKSITYISYYS JA HALLINTA", title: "Mikä jää omalle levyllesi ja miten sen pysäyttää — POPOPX Mac Node" },
    "/troubleshooting": { eyebrow: "VIANMÄÄRITYS", title: "Portit, palomuurit ja muistikatot — POPOPX Mac Node" },
    "/releases": { eyebrow: "JULKAISUT JA LÄHDE", title: "Julkaisut, tiivisteet ja koko lähdepuu — POPOPX Mac Node" },
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Sinun laitteesi. Sinun solmusi.",
    titleAccent: "Sinun hallintasi.",
    subtitle:
      "POPOPX Mac Node on omistamasi verkon reuna. Se pyörittää paikallisia malleja sekä media- ja tiedostomoottoreita kymmenen Discover-palvelun takana omalla Macilläsi, POPOPX Chatin ja Bot Studion vieressä. Verkko releeaa salatut viestisi; päättely, renderöinti, sinetöity arkisto ja salaisuudet pysyvät laitteistolla, jonka itse ostit.",
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
      "Tallenna levykuva ja julkaisun tiivistetiedosto samaan kansioon ja tarkista ne ennen kuin avaat mitään. Julkaisu voi sisältää SHA256SUMS.txt-taulukon, yhden tiedoston .sha256-saattotiedoston tai molemmat, joten Julkaisut ja GitHub -sivu tulostaa täsmälleen ne kaksi komentoa, jotka vastaavat katsomaasi julkaisua.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Oma laitteistosi",
    statStorage: "Lopputulokset omalla SSD-asemallasi",
    statIdentity: "Ei tiliä, ei tunnusta",
    statSource: "AGPL-3.0 alusta loppuun",
  },
  overview: {
    splitHeading: "Verkko sovittaa yhteen. Koneesi suorittaa.",
    splitSub:
      "Siinä on koko idea, ja se kannattaa ilmaista täsmällisesti, koska tällaisen tuotteen tavallinen lukutapa on päinvastainen: pilvi ei tee työtä eikä Macisi ole kevyt asiakas. Kumpikin puoli tekee ainoastaan sen osan, jonka sen kuuluu tehdä.",
    cloudTitle: "Mitä verkko kuljettaa",
    cloudBody:
      "SMP-releet ja XFTP-tallennus siirtävät viestisi ja tiedostosi päästä päähän omien laitteidesi välillä, ja kymmenen Discover-palvelitiliä lähettävät kukin yhden signaalin. Relee näkee salamuotoa ja reitityksen metadataa. Se ei koskaan vastaanota mallia, kehotetta, kuvaruutua tai tiedostonimeä, eikä se suorita mitään osaa mistään moottorista.",
    macTitle: "Mitä Macisi tekee",
    macBody:
      "Solmu ottaa sen signaalin ja tekee työn edessäsi olevalla koneella: kvantisoitu päättely Ollaman kautta loopback-osoitteessa, LTX-2.5 -renderöinti MLX:n kautta, FFmpeg ja GOP-vesileimaus, CryptoKit-sinetsöinti ja hajausketjuholvit sekä diskutil ja AppKit fyysisiä toimintoja varten. Sitten se kirjoittaa tuloksen omalle levyllesi.",
    pathsHeading: "Aloita siitä, missä oikeasti olet",
    paths: [
      {
        title: "Ymmärrä työnjako",
        body:
          "Mikä solmu on, se ainoa linja jota se kuuntelee, miten puhelin saa luvan ohjata sitä, ja mitkä portit ovat mukana.",
      },
      {
        title: "Vie se Macelle",
        body:
          "Edellytykset, varmistettu DMG, rakentaminen lähteestä, ensimmäinen pariliitos, päivitykset, koneenvaihto ja kokonaan poisto.",
      },
      {
        title: "Tarkista, mikä lähtee",
        body:
          "Kansio kerrallaan tehty selitys data-juuresta, mitä puhelimesi lähetetään takaisin, missä avaimet ovat, ja miten toiminnan voi pysäyttää tai peruuttaa.",
      },
      {
        title: "Korjaa, mikä rikkoutui",
        body:
          "Ne vikat, jotka oikeasti tapahtuvat: portti on jo sidottu, malli ei koskaan vastannut, painot ohitettiin, koodi vanheni.",
      },
    ],
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
  dashboard: {
    badge:
      "UI Preview — käyttöliittymän suunnittelumock-up, ei käynnissä oleva solmu",
    heading: "Mitä konsoli näyttää, kun solmu on käynnissä",
    sub:
      "Sovelluksessa on yksi paikallinen web-konsoli, ja tämä on kuva sen tilanäkymästä: kone, jonka se löysi, yhtenäinen muisti, jonka se päätti varata, moottorit jotka se voi suorittaa pyynnöstä, ja puhelimet jotka se päästi sisään. Asettelu, sarakeotsikot ja laskenta ovat täsmälleen toimitetun tuotteen. Mikään tässä ei ole luettu käynnissä olevasta prosessista.",
    machineLabel: "Esimerkkikone",
    machineHint:
      "Solmu lukee sirun, ytimien lukumäärän ja fyysisen muistin sysctl:stä käynnistyessään. Selain ei pysty lukemaan sitä sinun koneeltasi — navigator.deviceMemory on jokaisessa toteutuksessa rajattu korkeintaan 8 GB:hen — joten valitse yksi näistä kokoonpanoista, niin alla olevat luvut lasketaan uudelleen.",
    statusHeading: "Tila",
    statusConnected: "Yhdistetty",
    daemonRunning: "Daemon käynnissä",
    loopbackNote:
      "Konsoli sitoutuu osoitteeseen 127.0.0.1 ja hylkää sidoksen 0.0.0.0-osoitteeseen, LAN-osoitteeseen tai isäntänimeen, joten se on tavoitettavissa ainoastaan tästä Macistä.",
    memHeading: "Yhtenäisen muistin varaus",
    memTotalLabel: "Yhtenäinen muisti",
    memCeilingLabel: "Muistissa pysyvän katto",
    memMeshLabel: "Mesh-katto",
    memHeadroomLabel: "Työpöytäistunnolle jätetty",
    usageLabel: "Moottorien työmuisti (arvio)",
    servicesHeading: "Paikalliset moottorit ja palvelut",
    servicesNote:
      "Vasemmalla kymmenen moottoria ja kolme hyllyä joiden alle ne toimitetaan — sama luettelo jonka puhelimen valikko tulostaa. Oikealla kolme osoitetta jotka solmu tuntee: se jota se kuuntelee ja ne kaksi joihin se soittaa asiakkaana. Molemmat ovat kiinteitä luetteloita, eivät mittauksia, ja moottori on käynnissä ainoastaan jos otat sen käyttöön.",
    devicesHeading: "Pariliitetyt laitteet",
    deviceColumns: ["Laite", "Pariliitetty", "Viimeksi nähty", "Peruuta"],
    devicesActive: "aktiivinen",
    revoke: "Peruuta",
    revokedRow: "peruutettu",
    neverSeen: "ei koskaan nähty",
    disclaimer:
      "Tämä kortti on kuva, ei asiakas. Se ei avaa yhteyttä eikä lue prosesseja: koneen valitseminen soveltaa solmun julkaisemia tasosääntöjä omassa selaimessasi, ja Peruuta muuttaa ainoastaan sitä riviä jota katsot. Oikeassa konsolissa tuo painike merkitsee laitteen peruutetuksi — pariliitoksen valtuutus mitätöityy eikä sitä voi perua — hylkää sen komennot siitä hetkestä eikä pura chat-yhteyttä. Yksityisyys ja hallinta -sivu kertoo täsmälleen sen, mitä tuo painike ei tee.",
  },

  node: {
    heading: "Solmu on tietokone, joka sinulla jo on",
    sub:
      "Ei alue, ei instanssin tyyppi, ei tilaustaso. Yksi Mac, joka pyörittää ne POPOPX:n osat, joiden ei kuulu tapahtua jossain muualla — ja ainoa asia, johon sinun pitää luottaa, on kone, jolle olet jo uskonut tiedostosi.",
    points: [
      {
        title: "Arkaluonteinen työ ei koskaan poistu",
        body:
          "Lääketieteelliset raportit parsii Vision omalla koneellasi. Raaka kuvamateriaali leikataan ja vesileimataan paikallisesti. Holvin sinetöinti ja sinetöity arkisto ovat CryptoKit-operaatioita omalla levylläsi. Yhdessäkään näistä poluista ei ole isännöityä päätepistettä jota kutsua.",
      },
      {
        title: "Etäisyys on nolla",
        body:
          "Päättely tapahtuu yhtenäisessä muistissa aivan sen prosessin vieressä, joka sen pyysi. Malliasiakas on sidottu osoitteeseen 127.0.0.1:11434, ja siksi solmusta ei löydy koodipolkua, joka yltäisi isännöityyn päättelyrajapintaan edes vahingossa — ensin pitäisi muuttaa itse osoiteliteraali.",
      },
      {
        title: "Ostit sen jo",
        body:
          "Laskentapisteet mittaavat oman laitteistosi kuluttuja syklejä, ja Edge Compute Mesh on ainoa moottori, joka lainaa tyhjää kapasiteettia ulospäin sen sijaan että ottaisi sitä sisään. Se taso, jonka saat, on funktio muistista, jonka itse ostit.",
      },
      {
        title: "Lupa myönnetään laitetta kohti",
        body:
          "Yksi allekirjoitettu, kertaluonteinen ja viisitoista minuuttia voimassa oleva pariliitoskoodi valtuuttaa yhden laitteen. Konsoli näyttää mitkä laitteet on pariliitetty, ja peruuttaminen on painike — yhtä rehellistä varausta lukuun ottamatta siitä, mitä tuo painike ei tee; se käsitellään yksityisyys sivulla.",
      },
    ],
    wireHeading: "Yksi rivi, kolme segmenttiä",
    wireBody:
      "Puhelimesta tuleva komento on tavallinen viesti omassa popopx-chat-jsonossasi, ja sen sisällä on yksi merkintärivi: etuliite, moottorin tunniste, toiminto ja JSON-hyötykuorma. Jäsentäjä pilkkoo ainoastaan ensimmäisestä erottimesta, joten hyötykuorma joka sisältää erottimen säilyy ehjänä, ja rivi jonka moottorin tunniste on tuntematon, jonka hyötykuorma on tyhjä tai jonka hyötykuorma ylittää iOS-puolen hyväksymän rajan, hylätään kokonaan sen sijaan että sitä suoritettaisiin osittain.",
    wireSampleLabel: "Ainoa hyväksytty muoto",
    pairingHeading: "Pariliitos siinä järjestyksessä kuin se oikeasti tapahtuu",
    pairingSub:
      "Solmu lyö tositteen, näytät sen puhelimelle kerran, ja sen jälkeen tosite on arvoton. Mitään ei tallenneta palvelimelle, koska palvelinta ei ole joka sen voisi tallentaa.",
    pairingSteps: [
      {
        title: "Solmu tekee tarjouksen",
        body:
          "Valikkopalkista tai konsolista solmu kirjoittaa tarjouksen, allekirjoittaa sen sisällön omalla Ed25519-avaimellaan — sillä joka on sen data-juuren alla polussa pairing/node.key — ja hahmontaa sen QR-koodiksi paikallisesti CoreImagen kautta. Mikään kuva ei poistu koneelta.",
      },
      {
        title: "Puhelin lunastaa sen",
        body:
          "POPOPX iOS skannaa koodin, ja siitä syntyvä kontakti on laitteen avain. Jo tuon yhden skannauksen jälkeen SMP-silta on olemassa; siitä lähtien Discover-palvelutilit puhuvat solmullesi eivätkä kenelle muulle.",
      },
      {
        title: "Tarjous kuolee",
        body:
          "Ensimmäinen lunastus merkitsee tarjouksen käytetyksi. Uuden koodin luominen eläköittää edellisen, joten valokuvattu QR-koodi ei ole pysyvä kutsu — se vanhenee itsestään viidentoista minuutin kuluttua vaikka kukaan ei koskaan skannaisi sitä.",
      },
    ],
    pairingFacts: {
      lifetime: "Tarjouksen voimassaolo",
      singleUse: "Lunastus",
      signature: "Allekirjoittaja",
      delivery: "Esitysmuoto",
    },
    sealedHeading: "QR-koodi on sinetöity kirjekuori",
    sealedSub:
      "Commitista 040ef25 lähtien ohjatun asennuksen QR-koodi ja kopiointipainike kuljettavat yhden läpinäkymättömän URL-osoitteen raa'an tositteen sijaan. Kirjekuori pitää releen osoitteen poissa kuvakaappauksesta, linkin esikatselusta ja edelleenlähetyksestä; se ei ole salaisuus, jota sovelluksen haltija ei voisi avata.",
    sealedShapeLabel: "Sinetöidyn linkin muoto",
    sealedFacts: {
      kdf: "Avaimen johtaminen",
      cipher: "AEAD",
      nonce: "Nonce",
      caps: "Hyötykuorman rajat",
    },
    sealedBody:
      "Avain johdetaan HKDF-SHA256:lla sovelluksen sisällä julkaistusta syötteestä, ja laatikko on ChaCha20-Poly1305 kiinteällä associated-data-merkkijonolla, joten kuka tahansa lähteen lukenut voi avata kirjekuoren. Se on suunnittelun tarkoitus: linkki piilottaa SMP-jonon osoitteen esikatseluilta, kuvakaappauksilta ja edelleenlähetyksiltä, kun taas sen sisällä oleva allekirjoitettu, kertaluonteinen ja viidentoista minuutin tosite on se, mikä laitteen todella valtuuttaa. Raaka PPXNODE1-…-koodi ja jonon osoitteen kantava kutsun URI pysyvät konsolin diagnostiikkalaatikossa; solmun julkinen avain näkyy siellä ja pariliitettyjen laitteiden riveillä, ei koskaan ohjatun asennuksen etupuolella. QR-kuva hahmontaa paikallisesti ja tarjoillaan ainoastaan loopback-osoitteessa polussa /api/pairing/qr.png.",
    portsHeading: "Solmun kuunteleva puoli",
    portsSub:
      "Solmu itse avaa yhden portin. Kaksi muuta kuuluvat ohjelmiin, jotka se käynnistää ja joihin se yhdistää asiakkaana — sillä on väliä kun luet palomuurin lokia: yhteys osoitteeseen 11434 tai 5225 on solmun tekemä, ei sen hyväksymä.",
    portsColumns: ["Portti", "Sitoo", "Osoite", "Linja", "Mikä vartioi"],
    portsOwner: {
      node: "Solmu",
      tool: "Ollama",
      daemon: "popopx-chat",
    },
    portsPurpose: {
      console: "Web-konsoli ja moottorien lokivirta",
      inference: "Paikallinen mallipäättely",
      control: "Chat-daemonin hallintapistoke",
    },
    portsFootnote:
      "Kaikki kolme ovat loopback-osoitteita. Konsoli on tavallista HTTP:tä ilman TLS:ää, mikä on järkevä suunnittelu ainoastaan siksi ettei se koskaan poistu koneelta: sidontayritykset osoitteeseen 0.0.0.0, lähiverkon osoitteeseen tai isäntänimeen evätään jo ennen kuin pistoke luodaan, ja osoite on kovakoodattu sovellukseen eikä lueta config-tiedostosta. Sen sijaan sitä vartioi satunnainen, jokaisessa käynnistyksessä uusi kaksikymmentäneljän tavun mittainen tunniste, joka lähetetään kentässä X-PPX-Token, jota pidetään ainoastaan muistissa ja joka kuolee prosessin päättyessä. Chat-daemonin hallintapistokkeella ei ole lainkaan todennusta — se on sen rehellinen kuvaus — ja se on turvallinen ainoastaan niin kauan kuin se pysyy osoitteessa 127.0.0.1.",
  },
  hub: {
    heading: "Viisi paikallista kykyä, yksi raja",
    sub:
      "Build 4 lisää allekirjoitettuun levykuvaan omistajakohtaisen kykyjen havaitsemisen, neljä protokollasovitinta ja sinetöidyn pariliitoslinkin. Sillat ovat oletuksena pois, jokainen kohde päästetään läpi samasta positiivisesta allow-listasta, ja jokaisesta kirjoituksesta tulee allekirjoitettu ehdotus, jonka ihmisen on hyväksyttävä. Mikään siitä ei ole isännöity palvelu, eikä mikään siitä avaa uutta kuuntelijaa.",
    status:
      "Allekirjoitetussa julkaisussa v1.0.2 build 4 (6de6eb8, 27. marraskuuta 2026) ja tämän sivuston universaalissa DMG:ssä. Alla olevat kortit kuvaavat levykuvaa, jonka lataat, eivät lähdehaaraa.",
    cards: [
      {
        title: "Havaitseminen, joka vastaa vain itsestään",
        body:
          "Konsoli kertoo, mitä tällä Macilla jo on: Ollama osoitteessa 127.0.0.1:11434 ja sen tarjoamat mallit, valtuuttamasi työtilakansiot, EventKit-käyttöoikeuden tila ja TCP-tavoitettavuusrivi enintään kahdeksalle itse kirjoittamallesi lähiverkon kohteelle. Se on vain luku -tyyppinen GET /v1/discovery/capabilities. mDNS-mainostajaa, porttiskannausta ja aliverkon läpikäyntiä ei ole; vain loopback, RFC 1918 -literaalit, ULA ja .local-nimet päästetään läpi, ja julkinen osoite evätään ennen kuin pistoke avataan.",
      },
      {
        title: "MCP, allow-listin sisällä",
        body:
          "Paikallinen MCP-asiakas puhuu JSON-RPC 2.0:n initialize-, tools/list- ja tools/call-kutsuja. Palvelimet rekisteröidään käsin tiedostoon config/mcp_servers.json — enintään kahdeksan. stdio-komennon on oltava absoluuttinen polku kuusitoistakohtaisen allowedCommands-luettelon sisällä ilman shell-metamerkkejä; HTTP-palvelimen on vastattava loopback-osoitteessa. Vain luku -työkalu saa suorittua; muuttavaa työkalua ei koskaan suoriteta pyynnöstä, vaan se muutetaan ainoastaan ehdotukseksi.",
      },
      {
        title: "Home Assistant ja MQTT lähiverkossa",
        body:
          "Home Assistant paikallisen REST-rajapintansa kautta ja käsin kirjoitettu MQTT 3.1.1 -asiakas, molemmat rajattuina loopbackiin, RFC 1918:aan ja .local-nimiin. Vain exposedEntities-luettelossa nimetyt entiteetit ovat sillalle olemassa, vain luku -tila on oletuksena päällä, ja broker-julkaisu voi kohdistaa vain paljastettuun entiteettiin itse määrittämäsi etuliitteen alla. Tunnukset ovat Keychain-viittauksia; settings.json ei sisällä tokenia.",
      },
      {
        title: "CalDAV säilyttää aukot, ei tekstiä",
        body:
          "PROPFIND ja REPORT enintään neljää itse isännöityä lähiverkon CalDAV-palvelinta vastaan. iCalendar-jäsentäjä säilyttää kentät DTSTART ja DTEND ja pudottaa kentät SUMMARY, DESCRIPTION, LOCATION, ORGANIZER ja ATTENDEE jo jäsentämisen aikana, joten myöhempää redaktiota, joka voisi mennä pieleen, ei ole. Etäiset varattu-jaksot leikataan paikallisista vapaista aukoista viidentoista minuutin lattialla; toistuma, jota jäsentäjä ei osaa arvioida, raportoidaan lattiana eikä arvauksena.",
      },
    ],
    boundaryHeading: "Mitä raja evää",
    boundaryItems: [
      {
        title: "Julkiset osoitteet ja selvittämättömät nimet",
        body:
          "Siltakohteen on oltava loopback, RFC 1918, ULA tai .local-nimi. Paljasta isäntänimeä ei selvitetä, jotta tiedettäisiin onko se julkinen, URL-osoitteen tunnukset evätään, eikä HTTP-silta seuraa uudelleenohjausta — joten allow-listalla oleva isäntä ei voi pompauttaa solmua jonkun toisen palvelimelle.",
      },
      {
        title: "Kirjoitukset ilman ihmistä",
        body:
          "Älykodin toimilaitteen käyttö tai muuttava MCP-työkalu muuttuu pending_user_approval-tilassa olevaksi ehdotukseksi, jossa on HMAC-SHA256-tosite, sidottu sen tunnukseen ja verbiin ja voimassa viisitoista minuuttia. Suoritettava hyötykuorma on se, joka sinulle näytettiin, se kirjataan paikalliseen tarkastuslokiin, ja sillan pois kytkeminen mitätöi odottavan.",
      },
      {
        title: "Salaisuudet ilman selkokielistä varareittiä",
        body:
          "Home Assistant -token, MQTT-salasana ja CalDAV-salasana ovat Keychain-tietueita, joihin viittauksella osoitetaan; paketin ulkopuolinen ajo pitää ne vain muistissa, eikä varavaihtoehtona ole tiedosto. MCP-dokumentti tallentaa ympäristömuuttujien nimet, ei koskaan arvoja.",
      },
    ],
    footnote:
      "Yksityisyys ja hallinta esittää saman rajan sääntö sääntöltä, mukaan lukien sen, mitä solmu ei voi luvata.",
  },
  extensions: {
    heading: "Kaksi paikallista laajennusta, yksi hyväksyntäraja",
    sub:
      "Build 4 tuo mukanaan yksityisen avustajan, joka lukee, ehdottaa ja odottaa, ja sillan 3D-karttapalloon, jonka asennat itse. Molemmat ovat oletuksena pois, molemmat pitävät tilansa tällä Macilla, eikä kumpikaan muuta mallin ehdotusta kirjoitukseksi ilman hyväksyntätositetta.",
    assistantTitle: "Yksityinen avustaja ja hallittu automaatio",
    assistantSub:
      "Yksi hallinnoija kokoaa neljä osaa: ajastimen, sähköpostisillan, joka lukee vain luku -tilassa ja lähettää vasta hyväksynnän jälkeen, kotilaitteiden vartijan ja hyväksyntäportin, jonka jokaisen kirjoituksen on läpäistävä.",
    assistantFeatures: [
      {
        title: "Neljä liitinväyttöoikeutta",
        body:
          "Jokainen liitin ilmoittaa yhden neljästä tasosta: read, propose, write tai admin. Oletus on read ja propose; write- tai admin-toiminto tarkistetaan uudelleen suorittajan sisäänkäynnissä, ei mallin kehotteessa.",
      },
      {
        title: "Ajastin, jonka itse kytket",
        body:
          "Päivittäinen katsaus kello 08:00 paikallista aikaa ja kodin terveystarkastus 30 minuutin välein. Molemmat ovat oletuksena pois ja vain omistaja voi ottaa ne käyttöön; jokainen ajo ja tilamuutos kirjoitetaan tiedostoon ledger/assistant.sqlite3.",
      },
      {
        title: "Sähköposti pysyy vain luku -tilassa kunnes hyväksyt",
        body:
          "IMAPS 993 avaa postilaatikon komennoilla EXAMINE ja BODY.PEEK, luokittelee tuoreen postin luokkiin vastausta vaativa, lasku, kutsu ja ilmoitus, ja luonnostelee vastauksia. SMTPS 465 lähettää vasta kun hyväksyt puhelimen kortissa tai konsolissa; salasanat ovat Keychain-viittauksia, eivät koskaan asetuksia.",
      },
      {
        title: "Vartija, joka ehdottaa ja sitten pysähtyy",
        body:
          "Vartiointi lukee vain ne Home Assistant -entiteetit, jotka paljastit. Entiteetti, joka pysyy poissa käytöstä kynnyksensä yli (oletuksena 15 minuuttia), muuttuu korjausehdotukseksi, joka on sidottu toimintoon, entiteettiin ja hyötykuorman tiivisteeseen; korjaus ajetaan kerran hyväksynnän jälkeen, ja vain luku -silta evää sen myös kelvollisella tositteella.",
      },
    ],
    godsEyeTitle: "God's Eye View, silmukassa",
    godsEyeSub:
      "Erillinen kolmannen osapuolen ohjelma, jonka asennat ja jota hallinnoit tällä Macilla. Solmu toimittaa vain Swift-sillan: ei JavaScriptiä, ei karttalaattoja eikä dataa.",
    godsEyeFeatures: [
      {
        title: "Sinä asennat, solmu varmistaa",
        body:
          "Olemassa oleva asennus tai yhden napsautuksen klooni kiinnitetystä commitista — kloonaus on vapaaehtoinen eikä koskaan ajastimella. Paketin nimi, kiinnitetty versio, package.json-tiedoston koko ja molemmat käynnistysskriptit tarkistetaan, ja käynnistysskriptien SHA-256 tallennetaan; polku, joka ratkeaa asennusjuuren ulkopuolelle, myös symbolisen linkin kautta, evätään.",
      },
      {
        title: "Vakio loopback-osoite",
        body:
          "Sidontaosoite on literaali 127.0.0.1 eikä ole määritettävissä; oletusportti on 18931. Järjestelmähakemistot, ~/.ssh, ~/.gnupg, Keychain-kansio ja solmun oma data-juuri evätään asennuskohteina.",
      },
      {
        title: "MCPToolGate vain kiristää",
        body:
          "Vain luku -tyyppiset maantieteelliset työkalut voivat suorittua MCP-allow-listan sisällä. Muuttavaksi luokiteltu työkalu — kanavapiirrot, piirrokset, raportin vienti tai mikä tahansa nimi, joka ei ole tunnistettavasti lukemista — muuttuu tilaan pending_user_approval myös silloin kun palvelin mainostaa sitä vain luku -tyyppisenä. Portti voi kiristää tasoa, ei koskaan löysätä sitä.",
      },
    ],
    boundaryHeading: "Mitä hyväksyntätosite kattaa",
    boundaryItems: [
      {
        title: "Yhdeksänsataa sekuntia, yksi käyttökerta",
        body:
          "Avustajan kirjoitus kuljettaa 32 merkin HMAC-SHA256-tositetta, joka on sidottu toiminnon lajiin, kohteeseen, sisällön tiivisteeseen ja vanhenemiseen. Se on voimassa 900 sekuntia, vertaillaan vakioajassa, suorittaja kuluttaa sen ennen mitään I/O:ta, ja se evätään jos hyötykuorma muuttuu, vanhenee, toistetaan tai on sidottu toiseen ehdotukseen.",
      },
      {
        title: "Pallo pysyy silmukassa",
        body:
          "God's Eye View sitoo literaalin 127.0.0.1 eikä mitään muuta; arkaluontoiset hakemistot, Keychain-kansio ja solmun oma data-juuri evätään asennuskohteina, myös symbolisten linkkien ratkaisemisen jälkeen. Live-syötteet hakee oma paikallinen ohjelmasi kunkin tarjoajan ehtojen mukaisesti — tämä solmu pitää vain valinnaisia Keychain-viittauksia eikä koskaan välitä tai välimuistita dataa. Kanavakirjoitukset ja raporttiviennit muuttuvat tilaan pending_user_approval myös silloin kun palvelin kutsuu niitä vain luku -tyyppisiksi.",
      },
    ],
    footnote:
      "Yksityisyys ja hallinta esittää samat rajat avustajalle, pallolle ja neljälle lähiverkkosillalle, mukaan lukien sen, mitä mikään niistä ei voi luvata.",
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
      "Alle 48 GB — 9B-malli muodossa Q4_K_M, vain lyhyet renderöinnit; raskas videotyö tarjotaan Edge Compute Mesh -verkolle.",
    ],
    plansHeading: "Mitä kukin taso todella ottaa käyttöön",
    plansSub:
      "Yllä oleva taulukko on opas, jonka luet ennen ostoa. Tämä taulukko on se, minkä solmu merkitsee itselleen tultuaan mitanneeksi koneen — suoraan suosittelufunktiosta, mukaan lukien sen mallitagin jonka se hakee.",
    plansColumns: [
      "Muistiväli",
      "Tekstimalli",
      "Videopino",
      "Pysyvän muistin katto",
      "Raskas video",
      "Hakukomento",
    ],
    heavyVideo: {
      local: "Renderöidään täällä",
      mesh: "Tarjotaan verkolle",
    },
    plansFootnote:
      "Pysyvän muistin katto on aritmeettinen sääntö mitatusta muistista, ei benchmark: kukin taso vähentää löytämästään yhtenäisestä muistista kiinteän puskurin työpöytäistuntoa varten, ja katto on rajattu niin, ettei erittäin suuri kone lupaa enempää kuin pino tarvitsee. Mallitagit ja kvantisoinnit ovat ne merkkijonot, jotka solmu todella syöttää Ollamalle.",
  },
  install: {
    heading: "Yksi DMG, yksi skannaus, kymmenen vipua",
    sub:
      "Solmussa ei ole asennusohjelmaa, ei daemon-tiliä eikä mitään rekisteröitävää. Se on yksi valikkopalkin sovellus, joka sitoutuu loopback-osoitteeseen, ja ensikäynnistys tekee profiloinnin itse.",
    prereqsHeading: "Ennen lataamista",
    prereqNotes: {
      system: "Paketti on tehty macOS 14:lle, ja sovellus on valikkopalkin agentti.",
      memory:
        "Metal, MLX ja koko tasojen portaasto olettavat yhtenäisen muistin. DMG sisältää x86_64-osion, mutta mitään osaa pinosta ei ole viritetty Intelille.",
      disk:
        "Mallipainot evätään kun vapaata tilaa on 40 GB tai vähemmän, joten portaaston omasta katosta tulee myös levyysi katto.",
      media:
        "Viisi kymmenestä moottorista kutsuu FFmpeg:iä. Asennusohjelma voi hankkia sen Homebrew'n kautta.",
      inference:
        "Ollama kvantisoiduille tekstimalleille, LTX-2.5 MLX -työtila videolle. Molemmat ovat paikallisia työkaluja; kumpikaan ei ole palvelu.",
      bridge:
        "Tarvitaan ainoastaan SMP-pariliitoksen vaihetta ja puhelimen ohjaamaa reittiä varten. Itse moottorit toimivat ilman sitä.",
    },
    prereqRequired: {
      hard: "Pakollinen",
      wizard: "Ohjelma asentaa sen",
      optional: "Vain pariliitosta varten",
    },
    steps: [
      {
        title: "Tarkista DMG ja avaa se",
        body:
          "Hae POPOPX-Mac-Node-Universal.dmg ja julkaisun tiivistetiedosto samaan kansioon ja tarkista ne ennen kuin avaat mitään; Julkaisut ja GitHub -sivu näyttää nykyisen julkaisun kaksi komentoa. Vedä POPOPX Mac Node.app kansioon /Applications. Julkaistu buildi tulee Developer ID -allekirjoituksen ja niitatun notarointitodistuksen kanssa, joten Gatekeeper hyväksyy sen ilman erillisiä toimia — spctl -a -vv -t install vastaa accepted ja source=Notarized Developer ID. Itse skriptillä Scripts/build_dmg.sh tekemäsi buildi on sen sijaan ad-hoc-allekirjoitettu, ja juuri se vaatii ensimmäisellä käynnistyksellä oikean painikkeen “Open”-valintaa.",
      },
      {
        title: "Anna sen profiloida kone",
        body:
          "Käynnistä sovellus ja avaa konsoli valikkopalkista. Ensimmäinen vaihe lukee sirun, ytimien lukumäärän, yhtenäisen muistin ja vapaan SSD-tilan sysctl:stä, tulostaa valitsemansa tason ja sen tason edellyttämän mallitagin, sekä näyttää ne luvut jotka se on itse mitannut eikä sinun ilmoittamiasi.",
      },
      {
        title: "Ota paikalliset moottorit käyttöön",
        body:
          "Ohjelma käy listan läpi: Homebrew, FFmpeg, uv, Ollama, tasollesi sopiva Qwen-kvantisointi, LTX-2.5-työtila ja lopuksi itsetarkistus. Asennusloki virtaa konsolisivulle samalla kun se etenee, ja se kirjoitetaan tiedostoon logs/install.log, jotta vika voidaan lukea jälkikäteen.",
      },
      {
        title: "iPhonein pariliitos",
        body:
          "Luo pariliitoksen QR-koodi — konsolista tai valikkopalkin uuden koodin valinnasta — ja skannaa se POPOPX iOS -asiakkaalla. Commitista 040ef25 lähtien QR-koodi ja kopiointipainike kuljettavat sinetöidyn linkin https://popopx.chat/i/v1/… raa'an tositteen sijaan, joten kuvakaappaus tai chat-esikatselu ei paljasta jonon osoitetta. Sen sisällä oleva koodi on edelleen allekirjoitettu, kertaluonteinen ja vanhenee viidentoista minuutin kuluttua; raaka PPXNODE1-koodi ja kutsun URI pysyvät konsolin diagnostiikkalaatikossa. Laite näkyy konsolin pariliitettyjen luettelossa mallinsa, pariliityshetkensä ja viimeisen havaintonsa kanssa.",
      },
      {
        title: "Kytke moottorit päälle",
        body:
          "Kymmenen vipua valikkopalkissa ja konsolissa. Moottori on käynnissä vain, jos otat sen käyttöön, ja neljä moottoria, jotka eivät tarvitse paikallista mallia — fyysinen lukitus, aikalukollinen holvi, vesileiman jäljitys ja laboratorioraportin lukija — toimivat ennen kuin yhtään painoa on ladattu. FFmpegia kutsutaan edelleen; mallipinoa ei.",
      },
    ],
    buildHeading: "Tai rakenna se samasta tagista",
    buildBody:
      "Julkaisukuvat paketoidaan puusta, jonka voit hakea. swift build, swift test, swift build -c release ja sen jälkeen bash Scripts/build_dmg.sh --output dist --version v1.0.2 --build 4 kirjoittaa universaalin DMG:n, allekirjoittaa sen ad-hoc ja tuottaa saattotiedoston sen kanssa. Julkaistu tiedosto tulee puolestaan toisesta skriptistä: Scripts/build-release.sh lisää siihen Developer ID -allekirjoituksen, notarointilähetyksen ja ZIP-paketin, ja siksi ladattu image läpäisee spctl-tarkistuksen mutta oma käännöksesi ei. Molemmat toimivat ainoastaan macOS:ssä, koska niiden pohjana ovat hdiutil ja codesign.",
    lifecycleHeading: "Ensi käynnistyksen jälkeen",
    lifecycle: [
      {
        title: "Päivittäminen",
        body:
          "Build 4 tuo mukanaan omistajan määrittämän päivitysportin, ei automaattista asennusohjelmaa. Se lukee vain nimeämäsi taulukkoisännän, varmentaa Ed25519-allekirjoituksen kiinnittämälläsi avaimella ehdottomasti uudemman version yli, eikä asenna mitään ennen kuin hyväksyt tositteeseen sidotun latauksen; tiivisteen poikkeama hylkää tarjouksen. Myyjän päätepistettä ja oletustarkistusta ei ole. Voit yhä päivittää lataamalla uudemman DMG:n, varmistamalla sen ja korvaamalla sovelluksen. Asetukset, pariliitoksen tila, solmun avain, holvi ja jokainen lopputulos asuvat Application Supportissa eivätkä paketin sisällä, joten korvattu sovellus perii sen koneen jolle se tulee.",
      },
      {
        title: "Varmuuskopiointi ja koneenvaihto",
        body:
          "Sovellus merkitsee oman data-juurensa Time Machine -varmuuskopioiden ulkopuolelle, mikä suojaa varmuuskopiosi mallipainoilta ja pitää yhden yllätyksen poissa palautuksesta. Se tarkoittaa myös, ettei kansio ole varmuuskopiossasi. Solmun siirtäminen: sammuta se, kopioi ~/Library/Application Support/PopopxMacNode samaan polkuun uudella Macilla ja anna sen profiloida itsensä uudelleen — taso voi muuttua, ja pairing/node.key seuraa kansion mukana, ja siinä on koko syy siihen miksi kopion on oltava yhtä yksityinen kuin alkuperäinen.",
      },
      {
        title: "Kokonaan poistaminen",
        body:
          "Kytke ensin Launch at Login pois päältä ja valitse sitten Quit valikkopalkista — se sulkee kuuntelijan ja vapauttaa kirjautumisalkion. Poista /Applications/POPOPX Mac Node.app ja sen jälkeen data-juuri kohdassa ~/Library/Application Support/PopopxMacNode, jos haluat sinetöidyn holvin, kirjanpidot ja lopputuloksetkin lähtevän. Ei ole poisto-ohjelmaa eikä kuittia jonka voisi unohtaa: mitään ei ole koskaan asennettu näiden kahden polun ulkopuolelle. Ainoa asia, jota nuo kaksi polkua eivät kata, on Keychain-tietue — jos määritit reunakeskuksen sillan, sen tunnus kohdassa im.popopx.macnode.hub selviää molemmista poistoista, koska Keychain ei ole kansio; poista se Keychain Access -ohjelmassa tai sillan omasta katkaisupainikkeesta.",
      },
    ],
    bridgeTitle: "Ohjaa moottoreita omasta skriptistä",
    bridgeBody:
      "Integraatiokansio sisältää TypeScript-sillan ja kaksi agenttisovitetta. Se ei avaa uutta porttia eikä käynnistä toista daemonia: se käyttää uudelleen konsolia osoitteessa 127.0.0.1:18920 ja kertaluontoista prosessitunnistetta sekä lähettää samaa NODE_CMD-signaalointia kuin puhelin. Lukitustoiminto vaatii kaksoishyväksynnän — allowLockdown on oltava true ja PPX_BRIDGE_SECRET vähintään kuusitoista merkkiä — ja kieltäytyminen kirjoitetaan liitännäislokiin, joten näet sen tapahtuneen.",
    requirementTitle: "Yksi reilu edellytys",
    requirementBody:
      "Solmun oman ohjatun asennuksen toinen vaihe, pariliitoksen QR-koodi ja SMP-silta tarvitsevat kaikki popopx-chat-ohjelman chat-daemonin PATH-polullasi. Solmu tutkii täsmälleen yhden suoritettavan tiedoston eikä sillä ole varamahdollisuutta, koska upstream-käännös vastaa versiokyselyyn mutta epäonnistuu sen jälkeen jokaisessa komennossa. Itse kymmenen moottoria eivät tarvitse sitä.",
    signHeading: "Miten julkaistu buildi on allekirjoitettu",
    signBody:
      "Levykuvan sisällä olevassa sovelluspaketissa on Developer ID Application -allekirjoitus, hardened runtime -lippu ja suojattu aikaleima, ja siihen on niitattu notarointitodistus. Siksi Gatekeeper sallii sen suorittamisen ilman apua: spctl -a -vv -t install vastaa accepted ja source=Notarized Developer ID. Alla oleva lohko on luettu 2026-11-27 täsmälleen niistä tavuista, jotka v1.0.2 build 4 julkaisee — aja kaksi ensimmäistä komentoa kansiossa /Applications olevalle sovellukselle, ja sinun pitäisi saada takaisin sama identiteetti. Apple-tiliä ei kysytä eikä mitään tarkisteta palvelimelta, koska todistus kulkee levyllä sovelluksen mukana.",
    containerTitle: "Itse levykuva ei ole allekirjoitettu",
    containerBody:
      "Jos ajat spctl:n ladatulle .dmg-tiedostolle, se vastaa rejected ja source=no usable signature; codesign -dvv sanoo, että sama tiedosto ei ole allekirjoitettu ollenkaan. Se on odotettu vastaus, ei hälytys manipuloinnista. Applen koodiallekirjoitus on sovelluspaketissa, kun taas notarointitodistus on niitattu sekä pakettiin että sitä ympäröivään levykuvaan. Levykuvan ainoaksi eheydenvalvonnaksi jää sen SHA-256, joka on tämä sivun alempana tehtävä tarkistus.",
    provenanceTitle: "Kumpi skripti on tuottanut mikäkin lopputulos",
    provenanceBody:
      "Tätä sovellusta paketoivat kaksi skriptiä, eivätkä ne pääty samaan paikkaan. Scripts/build_dmg.sh on paikallinen paketoija: se kokoaa paketin, allekirjoittaa ad-hoc arvoilla --sign - --timestamp=none eikä aseta hardened runtime -lippua, ja kirjoittaa DMG:n sekä sen saattotiedoston, joten siitä polusta tuleva buildi todella vaatii ensimmäisellä käynnistyksellä oikean painikkeen “Open”-valintaa. Scripts/build-release.sh on Developer ID -polku: se allekirjoittaa hardened runtime -lippu päällä, lähettää notarointiin, niittaa todistuksen sekä pakettiin että levykuvaan ja kirjoittaa ZIP-paketin viereen SHA256SUMS.txt-taulukon. Lataamasi build 4:n levykuva on jälkimmäistä laatua — Developer ID -allekirjoitettu, notaroitu ja niitattu — ja vain tuo skripti tuottaa sen. Noden tagityönkulku commitissa 6de6eb8 ajaa yhä skriptiä Scripts/build_dmg.sh, joten pelkkä työnkulku ei voi selittää allekirjoitettuja tiedostoja; ajaja, jolla ei ole koskaan ollut varmennetta hallussaan, ei voi tuottaa niitä.",
    digestHeading: "Tarkista tiiviste ennen kuin avaat mitään",
    digestBody:
      "Kaksi komentoa, jotka ajetaan kansiossa johon tallensit tiedostot. Julkaisun taulukko on se tiedosto jota vastaan tarkistetaan, koska se nimeää jokaisen julkaisun lopputuloksen ja sen kirjoittaa sama vaihe joka paketoi ne. Build 4:n saattotiedosto .dmg.sha256 ja SHA256SUMS.txt nimeävät saman tiivisteen, joten kumpi tahansa tarkistus täsmää. Julkaisut ja GitHub -sivu tulostaa parin sen julkaisun mukaan jonka se on ratkaissut, ja se voi olla uudempi kuin alla oleva.",
    copyCommand: "Kopioi komento",
    commandCopied: "Kopioitu",
  },
  security: {
    heading: "Mikä jää, mikä lähtee, ja miten sen pysäyttää",
    sub:
      "Yksityisyys sivu, joka listaa ainoastaan sen mikä pysyy paikallisena, on markkinointisivu. Tämä sivu listaa myös liikenteen, sillä rehellinen versio väitteestä “tietosi eivät koskaan poistu laitteelta” on pidempi ja hyödyllisempi kuin iskulause.",
    localHeading: "Pysyy omalla levylläsi",
    localSub:
      "Yhden data-juuren alla, kansiossa jonka sovellus luo ja sulkee pois Time Machine -varmuuskopioista, niin että salaisuudet kirjoitetaan atomisesti moodilla 0600 ja täydellistä tiedostonsuojaa käyttäen.",
    localItems: [
      {
        title: "Jokainen lopputulos",
        body:
          "Renderöidyt leikkeet, katsaukset, vesileimatut viennit, sinetöidyt arkistot, puretut raportit ja karanteeniin otetut syötteet päätyvät kaikki data-juuren alle ja pysyvät siellä. Solmu pitää outbox/-kansiota ainoastaan niille tuloksille, jotka odottavat puhelimesi palaavan verkkoon.",
      },
      {
        title: "Mallit ja niiden painot",
        body:
          "Qwen-kvantisointi asuu Ollaman omassa varastossa, LTX-2.5-painot solmun engines-hakemistossa. Molemmat ovat paikallisia tiedostoja paikallisella levyllä, haettu kerran, ja haku evätään kun vapaata tilaa on 40 GB tai vähemmän.",
      },
      {
        title: "Avaimet ja pariliitoksen tila",
        body:
          "Solmun Ed25519-allekirjoitusavain, luettelo pariliitetyistä laitteista ja voimassa oleva tarjous ovat tavallisia tiedostoja pairing/-hakemiston alla. Avaimesta ei ole pilvivarastointia eikä missään ole säilöntäpalvelua — ja leikkaa molempiin suuntiin, kuten alla oleva kappale menetyksestä kertoo. Poikkeukset ovat tunnukset: reunakeskuksen sillan token tai salasana, avustajan IMAP- ja SMTP-salasanat sekä God's Eye View -syötteiden avaimet ovat Keychain-tietueita, ja settings.json sisältää vain ne viittaukset, jotka ne hakevat.",
      },
      {
        title: "Todistusketju",
        body:
          "Lukituksen ja verkon kirjanpidot täydennetään paikallisesti hajauksella peräkkäin, ja tarkastusloki tallentaa mitä suoritettiin, millä moottorilla ja minkä lopputuloksen kanssa. Se on kirjoitettu sinua lukijaa varten: logs/node.log on nopein vastaus kysymykseen “mitä tämä teki klo 03:14”.",
      },
    ],
    transitHeading: "Poistuu koneelta",
    transitSub:
      "Neljänlaista liikennettä poistuu laajempaan verkkoon, ja jokainen niistä on joko oma laitteesi tai jotain, jonka itse määritit. Avustajan sähköpostitili lisää viidennen, kun otat sen käyttöön, ja lähiverkkosilta lisää paikallista liikennettä loopback-, RFC 1918- ja .local-osoitteissa. Yhdessäkään niistä ei ole analytiikkapäätepistettä, jolle mitään lähetettäisiin.",
    transitItems: [
      {
        title: "Tulokset takaisin omaan puhelimeesi",
        body:
          "Valmis työ palauttaa enintään 1024 merkin kortin sekä yhden viestin jokaista lopputulostiedostoa kohti, omaa popopx-chat-jonoasi pitkin niin että SMP releettaa ja XFTP kuljettaa. Relee näkee salamuotoa. Jos puhelin on offline-tilassa, tulos odottaa outbox/-kansiossa ja yrittää enintään kolmekymmentä päivää.",
      },
      {
        title: "Syötteet, joiden lukemisen käskit",
        body:
          "Morning TV hakee ne RSS-lähteet jotka olet määrittänyt, kolmen megatavun rajalla vastaus kerrallaan, ja se on tavallinen ulospäin suuntautuva HTTPS-pyyntö sille, joka syötteesi isännöi.",
      },
      {
        title: "Webhook, jonka määritit",
        body:
          "Fyysinen lukitus voi POSTata allekirjoitetun tapahtuman kodinohjauksen tai läsnäolon päätepisteelle. Se suoritetaan parhaan mahdollisen mukaan, se on valinnaista, ja URL-osoite on sinun — solmulla ei ole oletusmääränpäätä.",
      },
      {
        title: "Asennukset ja mallien haut",
        body:
          "Ohjattu asennus lataa Homebrew-kaavoja, FFmpeg:n, uv:n, Ollaman ja valitsemasi kvantisoinnin. Se liikenne on asennusvaiheen tarkoitus, ja se tapahtuu kerran, silmiesi edessä, loki ruudulla.",
      },
      {
        title: "Avustajan sähköpostitili",
        body:
          "Pois päältä kunnes otat sen käyttöön ja kirjoitat palvelimen. IMAPS 993 lukee komennoilla EXAMINE ja BODY.PEEK, jotka eivät koskaan merkitse viestiä luetuksi; SMTPS 465 lähettää vain luonnoksen, jonka hyväksyit tositteella. Isäntä on literaali asetuksissasi eikä sitä koskaan havaita; kaksi salasanaa ovat Keychain-viittauksia. Mikään muu avustajan toiminto ei poistu koneelta.",
      },
    ],
    keysHeading: "Missä salaisuudet todella ovat",
    keysBody:
      "Pariliitoksen ja holvin materiaali ovat tiedostoja data-juuren alla, kirjoitettuina atomisesti, POSIX-moodilla 0600 ja täydellistä tiedostonsuojaa käyttäen, joten ne eivät ole luettavissa levyllä koneen ollessa lukittuna. Tekemäsi vaihtokauppa on todellinen — tiedosto-oikeudet ovat tarkastettavissa ja siirrettäviä, mutta ne eivät merkitse mitään käyttäjätilisi ja sellaisen lukijan välillä, jolla on jo käyttäjätilisi. Kohtele data-juurta sellaisena salaisuutena kuin se on: se ei ole Time Machine -varmuuskopiossa, ja se on ainoa kopio solmun avaimesta. Tunnukset kulkevat toista reittiä. Home Assistant -token, MQTT-salasana, CalDAV-salasana, avustajan IMAP- ja SMTP-salasanat sekä God's Eye View -syötteiden avaimet ovat generic-password-tietueita palvelun im.popopx.macnode.hub alla, luotuina asetuksella kSecAttrAccessibleWhenUnlockedThisDeviceOnly, ja asetustiedosto tallentaa vain viittauksen. Prosessi ilman sovelluksen paketti-identiteettiä — swift run, testiajuri — saa sen sijaan muistivaraston; selkokielistä tiedostovaraa ei tarkoituksella ole, joten tunnusta, joka ei yllä Keychainiin, ei tallenneta lainkaan.",
    dataNote: {
      output: "Tuotetut lopputulokset, sekä outbox/-jono joka pitää sisällään ne tulokset jotka odottavat puhelinta.",
      vault: "Aikalukolla sinetöidyt arkistot ja perintämateriaali, joka avaa ne.",
      pairing: "Ed25519-solmuavain, pariliitettyjen laitteiden luettelo ja voimassa oleva kertaluonteinen tarjous.",
      weights: "Mallipainot ja LTX-2.5 MLX -työtila, jota videomoottorit kutsuvat.",
      ledger: "Hajauksella peräkkäin täydennetyt lukituksen ja verkon kirjanpidot sekä avustajan rajattu SQLite-tarkastuskirjanpito.",
      logs: "Asennusloki ja tarkastusloki, kirjoitettuina operaattoria varten.",
      config: "Asetukset, moottorien kytkimet, sekä se config, jota sillat, avustaja ja God's Eye View -kortti käyttävät yhteisesti.",
    },
    rootLabel: "Data-juuri",
    hubHeading: "Reunakeskuksen oma raja",
    hubSub:
      "Build 4:n neljä lähiverkkosiltaa, yksityinen avustaja ja God's Eye View -silta pidetään yllä olevien sääntöjen ja neljän muun varassa. Ne on kirjoitettu tähän eikä ominaisuuskortille, koska ne ovat väitteitä, jotka lukijan pitäisi voida kumota koodista.",
    hubItems: [
      {
        title: "Yksi päästökohta",
        body:
          "Jokainen siltakohde — MCP HTTP:n yli, Home Assistant, MQTT, CalDAV — läpäisee saman EdgeBoundary-tarkistuksen ennen kuin pistoketta on olemassa: loopback, RFC 1918, ULA tai .local, ilman DNS-kyselyä sen selvittämiseksi onko nimi julkinen, ilman tunnuksia URL-osoitteessa ja ilman seurattua uudelleenohjausta. Kieltäytyminen on rivi konsolissa, ei hiljainen uusiyritys jossain muualla.",
      },
      {
        title: "Tosite, ei kehote",
        body:
          "Muuttavaa toimintoa ei vartioida konsolin tekstikentällä. Siitä tulee ehdotus tilaan pending_user_approval, joka hyväksytään 24 merkin HMAC-SHA256-tositeella, sidottuna ehdotuksen tunnukseen ja verbiin, voimassa viisitoista minuuttia, ja kirjataan paikalliseen tarkastuslokiin. Suorittajan ajama hyötykuorma on se, jonka omistaja näki, ja sillan pois kytkeminen mitätöi odottavat ehdotukset.",
      },
      {
        title: "Keychain tai muisti, ei koskaan tiedosto",
        body:
          "Siltatunnukset ovat Keychain-tietueissa, joihin osoitetaan viittauksella, tai prosessimuistissa paketin ulkopuolisessa ajossa. Kolmatta vaihtoehtoa ei ole: ei settings.json, ei loki, ei DMG. MCP-dokumentti tallentaa ympäristömuuttujien nimet, joten stdio:n yli MCP-palvelimelle annettu token luetaan ympäristöstä, jonka omistaja asetti, ei tiedostosta, jonka solmu kirjoitti.",
      },
      {
        title: "Opi minimi",
        body:
          "CalDAV jäsentää kentät DTSTART ja DTEND ja hylkää otsikot, kuvaukset, sijainnit ja osallistujat jo jäsentimen sisällä, joten kiireisimmät kentät eivät koskaan päädy malliin. Ehdotuksen esikatselu näyttää lyhyet skalaariargumentit ja kätkee jokaisen arvon, jonka avain on redaktiolistalla — content, token, password, payload ja muut. Havaitseminen on vain luku -tyyppinen GET, joka raportoi koneen oman tilan.",
      },
      {
        title: "Avustaja ja pallo",
        body:
          "Sähköpostin lähetys tai kotikorjaus yltää suorittajaan vain 32 merkin HMAC-SHA256-tositteella, joka on sidottu lajiin, kohteeseen, tiivisteeseen ja vanhenemiseen, voimassa 900 sekuntia ja kulutetaan kerran. Sähköposti on avustajan ainoa nimetty poikkeus ulospäin suuntautuvassa liikenteessä, ja sen salasanat ovat Keychain-viittauksia. God's Eye View on vain loopback, varmistaa asennuksensa symbolisten linkkien ratkaisemisen jälkeen, ja sen MCP-portti voi vain kiristää työkalua: kanavakirjoitukset ja raporttiviennit muuttuvat tilaan pending_user_approval myös silloin kun palvelin kutsuu niitä vain luku -tyyppisiksi. Arkisto sisältää vain Swift-sillan.",
      },
    ],
    controlHeading: "Sinun puolesi katkaisimesta",
    controlSub:
      "Neljä hallintaa, kaikki paikallisia, kaikki näkyvillä sovelluksessa eivätkä hautautuneina asetusnäkymään. Yksikään niistä ei tarvitse verkkoa, ja siksi ne toimivat silloinkin kun verkko on ongelmana.",
    controls: [
      {
        title: "Pysäytä yksi moottori",
        body:
          "Kymmenen itsenäistä vipua valikkopalkissa ja konsolissa. Yhden pois kytkeminen astuu voimaan seuraavaan komentoon, ja pois kytketylle moottorille tulevaa komentoa ei jonoteta vaan se evätään.",
      },
      {
        title: "Lopeta syklien lainaaminen",
        body:
          "Pause Mesh Sharing ottaa solmun pois reunalaskennan poolista heti; valikkopalkki näyttää Paused eikä solmu enää ota töitä vastaan. Tämä on ainoa hallinta, jonka nimessä on sana pause, ja se koskee verkon kapasiteettia eikä koko solmua.",
      },
      {
        title: "Polta voimassa oleva pariliitoskoodi",
        body:
          "New Pairing QR eläköittää avoinna olevan tarjouksen ja lyö sen tilalle uuden. Jolla hallussaan on valokuva vanhasta koodista, tällä on vanhentunut allekirjoitus eikä toista mahdollisuutta.",
      },
      {
        title: "Pysäytä kaikki",
        body:
          "Quit on varsinainen katkaisin: se sulkee loopback-kuuntelijan, vapauttaa kirjautumisalkion ja hävittää käynnistyskohtaisen tunnisteen prosessin mukana. Solmu, joka ei ole käynnissä, ei vastaa mihinkään, kenellekään, mistään.",
      },
    ],
    revokeHeading: "Ja laitteen peruuttaminen",
    revokeBody:
      "Konsolin pariliitettyjen laitteiden luettelossa on Revoke-painike jokaisella rivillä. Se merkitsee laitteen peruutetuksi, poistaa sen kontaktikartoituksen ja hylkää sen komennot siitä hetkestä — mutta se ei pura SMP-yhteyttä, ja sovellus sanoo niin samassa viestissä jonka se sinulle näyttää. Vie asia loppuun poistamalla kontakti chat-asiakkaassa. Kaikki mikä on jo kirjoitettu omalle levyllesi, pysyy omalla levylläsi; peruutus pysäyttää tulevat komennot, se ei ole etätyhjennys, eikä solmulla ole koskaan ollut etätyhjennyskykyä, jota voisi poistaa.",
    limitsHeading: "Mitä tämä sivu ei lupaa",
    limitsBody:
      "Turvattu tuhoaminen on satunnaista ylikirjoitusta, sync ja unlink. APFS:llä muuttunut tiedosto kirjoitetaan uusiin lohkoihin ja SSD uudelleenkarttaa loogisia lohkoja, joten tämä poistaa tiedoston ja tekee tavallisista palautustyökaluista hyödyttömiä mutta ei todista että vanhat fyysiset tavut olisivat poissa. Se on parasta mitä käyttäjäavaruuden tiedosto-API voi tehdä, ja koodi sanoo niin palauttamassaan tuloksessa. Tämän lisäksi: ei globaalia tauotusta muuta kuin lopettaminen, ei etätyhjennystä, ei avainten säilöntää eikä siis palautusta jos menetät koneen ja data-juuren yhdessä, eikä hiljaista päivitysohjelmaa. Build 4 lisää päivitysportin, joka lukee vain nimeämäsi taulukkoisännän, hyväksyy vain kiinnittämäsi avaimen allekirjoituksen ehdottomasti uudemman version yli ja vaatii tositteen ennen kuin se lataa tai asentaa mitään; myyjän päätepistettä ja oletusmääränpäätä ei ole.",
  },
  troubleshooting: {
    heading: "Kun se ei tee mitä odotit",
    sub:
      "Ne viat, jotka tällä arkkitehtuurilla oikeasti tapahtuvat, siinä järjestyksessä kuin ihmiset niihin törmäävät. Kukin sanoo mihin katsoa ensin, koska koneessa jossa ei ole palvelinpuolta, loki on aina lyhin reitti.",
    columns: ["Oire", "Mitä on meneillään", "Mitä tehdä"],
    items: [
      {
        symptom: "Konsolisivua ei avaudu",
        cause:
          "Portti on kiinteä osoitteessa 127.0.0.1:18920 ilman varamahdollisuutta, joten toinen käynnissä oleva instanssi — tai mikä tahansa joka ehti ensin — pitää kuuntelijan hallussaan. Tunniste on myös käynnistyskohtainen: vanha välilehto ennen uudelleenkäynnistystä sisältää kuolleen tositteen.",
        fix:
          "Tarkista onko portissa 18920 kuuntelijaa ja lopeta toinen instanssi, ja käytä sitten valikkopalkin Open Web Console -valintaa, joka muodostaa tämänhetkisen URL-osoitteen tämänhetkisellä tunnisteella vanhentuneen sijaan.",
      },
      {
        symptom: "Kukaan ei vastaa portissa 11434",
        cause:
          "Moottorit jotka tarvitsevat mallin, puhuvat Ollaman kanssa ainoastaan loopback-osoitteessa. Jos Ollama ei ole käynnissä, tai se asennettiin ilman ohjattua asennusta, moottori epäonnistuu sen sijaan että pakenisi mihinkään isännöityyn.",
        fix:
          "Käynnistä Ollama, varmista että OLLAMA_HOST on loopback-osoite, ja hae se kvantisointi jonka tasotaulukko nimeää koneellesi. Virheteksti lainaa sen komennon joka olisi toiminut.",
      },
      {
        symptom: "Painoja ei koskaan ladattu",
        cause:
          "Asennusohjelma ohittaa painojen lataukset ellei weightSources ole määritelty tiedostossa config/engines.json, ja evätää ne kokonaan kun vapaata tilaa on 40 GB tai vähemmän.",
        fix:
          "Lisää se lähde jota haluat hakea, tai kopioi painot kansioon engines/weights ja osoita config sen. Vapauta ensin levytilaa; vartiointi on kynnysarvo eikä varoitus.",
      },
      {
        symptom: "Renderöinti palasi komentorivinä",
        cause:
          "Videotyö tarvitsee LTX-2.5-työtilan ja sen painot. Ilman niitä moottori palauttaa täsmälleen sen komennon jonka se olisi ajanut, sen sijaan että esittäisi tuottaneensa tiedoston.",
        fix:
          "Suorita ohjatun asennuksen työtilavaihe loppuun, tai kloonaa sen nimeämä LTX-2-MLX-työtila, ja aja uudelleen. Tämä on harkittua: näennäinen onnistuminen on pahempi kuin rehellinen kieltäytyminen.",
      },
      {
        symptom: "Pariliitoskoodi hylätään",
        cause:
          "Tarjous on kertaluonteinen ja elää viisitoista minuuttia. Koodin toinen skannaus, tai koodi ruudulta joka on sittemmin vaihtunut, hylätään oikeutetusti.",
        fix:
          "Luo uusi koodi ja skannaa se kerran. Jos puhelin yrittää uudelleen itsestään onnistumisen jälkeen, ensimmäinen lunastus jo voitti ja hylkäys on odotettu vastaus.",
      },
      {
        symptom: "Puhelimen komennot eivät tee mitään",
        cause:
          "Silta tarvitsee popopx-chat-daemonin PATH-polullasi, ja solmu tutkii täsmälleen yhden suoritettavan tiedoston ilman varamahdollisuutta. Valikkopalkki näyttää popopx-chat not installed kun daemoni puuttuu, ja pois kytketty moottori ei vastaa mihinkään joka tapauksessa.",
        fix:
          "Lue ensin valikkopalkin silta-rivi, sitten moottorien vivut, sitten tarkastusloki. Puhelimesta katsottuna hylätty komento ja perille asti tulematta jäänyt komento näyttävät samalta.",
      },
      {
        symptom: "Tulokset lakkaavat tulemasta puhelimen ollessa poissa",
        cause:
          "Ulosmenevä lähetys kulkee oman daemonisi ja releesi kautta, joten ulospäin estävä palomuuri, VPN joka ei kuljeta releetä, tai sammunut daemoni näyttävät kaikki samalta täältä käsin. Tulokset eivät katoa: ne jonottavat outbox/-kansiossa ja yrittävät enintään kolmekymmentä päivää.",
        fix:
          "Varmista että daemoni on käynnissä, salli sitten solmun ulospäin suuntautuvat yhteydet siinä mikä niitä suodattaa, ja odota jonon tyhjenemistä työn uudelleenajamisen sijaan.",
      },
      {
        symptom: "Latauskortti näyttää kiinteän julkaisun",
        cause:
          "api.github.com ei ollut tavoitettavissa, oli estetty, sai nopeusrajoituksen, tai vastasi ilman ladattavaa tiedostoa. Sivu renderöi tällöin pakettiin käännetyn julkaisun arvailun sijaan.",
        fix:
          "Avaa julkaisut sivu suoraan. Mikään muu sivuston osa ei tarvitse tuota kutsua, eikä yksikään osa sivua jää tyhjäksi epäonnistuneen kutsun takia.",
      },
    ],
    escalation:
      "Kaksi tiedostoa vastaavat useimpiin muihin: logs/install.log kaikkeen mitä ohjattu asennus teki, ja logs/node.log kaikkeen sen jälkeen. Molemmat ovat pelkkää tekstiä data-juuren alla, ja konsolin oma lokikanava näyttää samat tapahtumat livenä. Jos vika kestää niiden lukemisen, arkistossa on se sopimus jota vastaan solmu ja integraatiot molemmat testaavat, ja ongelmat kuuluvat arkistoon popopx-mac-node.",
  },
  releases: {
    heading: "Julkaisut, tiivisteet ja koko puu",
    sub:
      "Kaikki mistä solmu rakennetaan on yhdessä AGPL-3.0-only-arkistossa, ja jokainen julkaistu levykuva voidaan tarkistaa tiivistettä vasten ennen sen avaamista. Tässä osiossa sivusto lopettaa kuvailemisen ja alkaa osoittaa.",
    assetsHeading: "Julkaistetut tiedostot",
    assetsColumns: ["Tiedosto", "Mikä se on", "Koko"],
    assetKinds: {
      dmg: "Applications-kansioon vedettävä levykuva, universaali arm64 ja x86_64. Juuri tämä otetaan.",
      sidecar: "Tiiviste yhtä tiedostoa varten, kirjoitettuna sen pakkaamisvaiheen toimesta joka sen rakensi.",
      zip: "Allekirjoitettu sovelluspaketti ZIP-hyötykuormana, kun halutaan arkisto eikä volyymi.",
      sums: "Taulukko, joka listaa jokaisen julkaisun lopputuloksen ja sen tiivisteen.",
    },
    missingAsset:
      "Kaikki julkaisut eivät sisällä kaikkia tiedostoja. Vanhemmissa julkaisuissa on vain levykuva ja sen saattotiedosto, joten alla oleva tarkistus tehdään sitä julkaisua vasten jonka todella avaat.",
    verifyHeading: "Varmista ennen kuin avaat mitään",
    verifyBody:
      "Kaksi komentoa, ajettuna siihen kansioon johon latasit. Taulukkomuoto on ensisijainen ja se mitä nykyinen julkaisu sisältää.",
    verifySumsBody:
      "Julkaisun taulukko listaa jokaisen lopputuloksen, joten tiedosto jota et ladannut on odotettu eikä puuttuva: lisää --ignore-missing ja lue se rivi joka vastaa lataamaasi tiedostoa. Taulukko kirjoitetaan samassa vaiheessa joka paketoi sen hyötykuorman joka siinä nimetään.",
    verifySidecarBody:
      "Vanhempi julkaisu sisältää sen sijaan yhteen tiedostoon tarkoitetun saattotiedoston, ja nimenomaan sitä vasten tarkistus tehdään. Build 4 sisältää molemmat ja ne nimeävät saman tiivisteen; kun julkaisun tiedostot eivät täsmää, usko taulukkoa, koska saattotiedosto voi olla peräisin saman version toisesta käännöksestä.",
    pipelineHeading: "Miten versio pääsee tänne",
    pipelineBody:
      "Tagin pushaaminen ajaa julkaisutyönkulun macOS-ajajalla: se rakentaa puun, ajaa sopimustestit, paketoi universaalin levykuvan skriptillä Scripts/build_dmg.sh, kieltäytyy julkaisemasta tarkistustiedostoa jossa on absoluuttinen polku, ja lataa ylös DMG:n ja sen saattotiedoston. Se on ad-hoc-polku. Allekirjoitettu build 4:n levykuva, sen ZIP ja SHA256SUMS.txt tulevat skriptistä Scripts/build-release.sh, joka allekirjoittaa Developer ID -identiteetillä, hardened runtime -lipulla ja suojatulla aikaleimalla, lähettää Applen notarointipalveluun ja niittaa todistuksen pakettiin ja levykuvaan. Tagityönkulku commitissa 6de6eb8 ei kutsu tuota skriptiä, joten allekirjoitetut tiedostot eivät voi olla sen tuotosta. Molemmat polut päättyvät samaan paikkaan: tiivisteeseen, jonka voit tarkistaa luottamatta tähän sivuun.",
    supportedHeading: "Käynnissä tänään",
    supportedItems: [
      "Kaikki kymmenen moottoria, joilla on kukin omat toimintonsa ja hylkäyspolkunsa, ja jotka otetaan käyttöön yksitellen.",
      "Automaattinen tason valinta sysctl-arvoista, mukaan lukien kunkin tason edellyttämän mallin haku.",
      "Allekirjoitettu, kertaluonteinen, viisitoista minuuttia voimassa oleva pariliitos, ja konsoli joka sitoutuu ainoastaan loopback-osoitteeseen.",
      "TypeScript-silta ja kaksi agenttisovitinta saman konsolin ja saman tunnisteen päällä.",
      "Yksityinen avustaja ja God's Eye View -silta: tositteella portitellut kirjoitukset, vain loopbackissa toimiva työkaluportti, ja molemmat oletuksena pois.",
    ],
    roadmapHeading: "Ei vielä",
    roadmapSub:
      "Kirjoitettu arkistoon suunnitelmiksi, ei lupauksina sivulla. Mikään tästä ei ole käynnissä tänään.",
    roadmap: [
      {
        title: "Moottorikohtaiset mittaukset omalla koneellasi",
        body:
          "Käyttökojelauta ja vikojen aikajanat vietynä takaisin puhelimeen: token- ja wattilukemat edessäsi olevasta koneesta, laitteistotaulukon arvioiden tilalle.",
      },
      {
        title: "Kovempi verkon eristys ja vietävissä oleva kirjanpito",
        body:
          "Vahvempi eristys lainatulle kapasiteetille ja kirjanpito, joka voidaan viedä sovelluksesta ulos sen sijaan että se lukuttaisiin sovelluksen sisältä.",
      },
      {
        title: "Paloiteltu säilytys useammalle kuin yhdelle perilliselle",
        body:
          "Perintämateriaalin paloitelu usealle perilliselle, ja lisää raporttiasetelmia terveysmoottoriin.",
      },
      {
        title: "Allekirjoitetut jakelutiet ja lisää videotasoja",
        body:
          "Arviointi sovelluskaupan kaltaisesta jakelutiestä notarisoinnin lisäksi, ja lisää LTX-tasoja muistiväleille joita portaasto ei vielä kata.",
      },
    ],
    sourceHeading: "Lähdekoodi ja mitä lisenssi velvoittaa",
    sourceBody:
      "Yksi arkisto, AGPL-3.0-only, ei suljettua ydintä: moottorit, konsoli, vesileimaus ja kirjanpito ovat kaikki siinä, ja sokean allekirjoituksen tositakoodi sekä kryptografisten parametrien rekisteri ovat avoimina popopxmq-arkistossa sen vieressä. 13. pykälä koskee tavalliseen tapaan: käytä, tutki ja muuta sitä vapaasti, ja jos tarjoat muunneltua solmua palveluna muille ihmisille, tarjoa heille vastaava lähdekoodisi. Siinä on koko vaatimustenmukaisuuden kustannus.",
    licenceHeading: "Mitä tämä ei kata",
    licenceBody:
      "AGPL-3.0 ei myönnä lisenssiä POPOPX-nimeen tai -logoon. Haara saa ottaa kaiken muun paitsi tunnukset: nimeä ohjelmisto uudelleen, vaihda tunnukset, pidä koodi.",
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
        q: "Skannaako solmu lähiverkkoani laitteiden varalta?",
        a: "Ei. Havaitseminen on vain luku -tyyppinen GET /v1/discovery/capabilities, joka raportoi, mitä tällä Macilla jo on: Ollama loopback-osoitteessa, valtuuttamasi työtilakansiot, EventKit-käyttöoikeuden tila ja se, onnistuuko TCP-yhteys asetuksiin kirjoittamaasi lähiverkon isäntään. Koodissa ei ole mDNS-mainostajaa, porttiskannausta eikä aliverkon läpikäyntiä. Kohde päästetään läpi vain, jos se on loopback, RFC 1918 -literaali, ULA-osoite tai .local-nimi; julkinen osoite evätään ennen kuin pistoke avataan, eikä allekirjoitettu buildi hyväksy isäntänimiä, jotka vaatisivat DNS-kyselyn. Build 4:n LAN Discover on oletuksena pois ja tarkkailee vain niitä kansioita, syötteitä ja MCP-palvelimia, jotka määrität, vähintään kuudenkymmenen sekunnin välillä päivitysten kesken.",
      },
      {
        q: "Voiko MCP-työkalu tai älykodin komento suorittua ilman minua?",
        a: "Vain luku -työkalu voi, omistajan määrittämän rajan sisällä. Muuttava ei voi: siitä tulee ehdotus tilaan pending_user_approval, ja se tarvitsee hyväksynnän, joka lyö 24 merkin HMAC-SHA256-tositeen sidottuna ehdotuksen tunnukseen ja verbiin, voimassa viisitoista minuuttia. Suorittaja ajaa täsmälleen sen hyötykuorman, joka näytettiin, toiminto kirjataan paikalliseen tarkastuslokiin, ja sillan pois kytkeminen mitätöi odottavan. Lukon, hälyttimen, sireenin, kameran tai robotti-imurin toimintoa pidetään suurena riskinä myös muuten sallivassa kokoonpanossa.",
      },
      {
        q: "Onko pariliitoksen QR-koodi salattu?",
        a: "Sinetöity, ja ero on olennainen. QR-koodi ja kopiointipainike kuljettavat osoitteen https://popopx.chat/i/v1/ ja sen perässä ChaCha20-Poly1305-laatikon, jonka avain johdetaan HKDF-SHA256:lla sovelluksen omassa lähteessä julkaistusta syötteestä. Se piilottaa SMP-jonon osoitteen linkin esikatseluilta, kuvakaappauksilta ja edelleenlähetyksiltä; se ei pidä sisältöä salassa siltä, jolla sovellus on. Laitteen valtuuttaa sen sisällä oleva allekirjoitettu, kertaluonteinen ja viidentoista minuutin tosite, ja raaka PPXNODE1-koodi ja kutsun URI pysyvät konsolin diagnostiikkalaatikossa eikä ohjatun asennuksen etupuolella.",
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
        a: "Luota niihin yhtä paljon kuin alla oleva lause sanoo. Ne ovat karkeita arvioita, eivät koneesi mittauksia, ja todellinen läpimenonopeus vaihtelee kahdella tai kolmella kertoimella lämmön ja kuorman mukaan. Solmun seuraava versio korvaa ne moottorikohtaisilla token- ja wattimittauksilla, jotka on mitattu juuri sillä laitteella, jota käytät.",
      },
      {
        q: "Mitkä koneet ovat tuettuja?",
        a: "macOS 14 tai uudempi Apple Silicon -koneilla. Tasojen portaat, Metal ja MLX olettavat kaikki yhtenäisen muistin arkkitehtuuria, eikä MLX toimi Intelissä, joten Intel-Mac ei ole isäntäkone, jota tämä projekti tukee, vaikka universaali DMG sisältääkin yhä x86_64-osion. Itse ohjelma ei linkitä yhtään kolmansien osapuolten kirjastoa: vain Apple-kehyksiä. Se, mitä se ohjaa, on tarkoitettu pysymään erossa: Ollama, FFmpeg ja LTX-2.5-painot ovat paikallisia työkaluja, joita moottorit kutsuvat, ja jokainen moottori kertoo, mitä niistä se tarvitsee.",
      },
      {
        q: "Voiko avustaja lähettää sähköpostia tai kytkeä laitetta ilman minua?",
        a: "Ei. Lukeminen ja luonnostelu ovat paikallisia ja vain luku -tyyppisiä; lähetys tai korjaus on ehdotus tilassa pending_user_approval. Suorittaja hyväksyy vain 32 merkin HMAC-SHA256-tositteen, joka on sidottu toimintoon, kohteeseen, tiivisteeseen ja vanhenemiseen, voimassa 900 sekuntia ja käytettävissä kerran. Sähköpostitunnukset ovat macOS:n Keychainissa, ja vain luku -tyyppinen Home Assistant -silta evää korjauksen myös kelvollisella tositteella.",
      },
      {
        q: "Soittaako God's Eye View -silta pilveen vai skannaako se verkkoni?",
        a: "Ei. Se käynnistää ohjelman, jonka itse asensit tälle Macille, sitoo sen osoitteeseen 127.0.0.1, varmistaa sen käynnistysskriptit symbolisten linkkien ratkaisemisen jälkeen ja hakee lähdekoodia vain jos kytket sen päälle. Solmu pitää valinnaisia Keychain-viittauksia syötteiden avaimille; paikallinen ohjelmasi hakee syötteet kunkin tarjoajan ehtojen mukaisesti, eikä solmu koskaan välitä niitä tai välimuistita niitä. Kanavakirjoitukset ja raporttiviennit muuttuvat tilaan pending_user_approval myös silloin kun palvelin kutsuu niitä vain luku -tyyppisiksi.",
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

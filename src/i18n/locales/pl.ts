import type { Dictionary } from "../types";

export const pl: Dictionary = {
  dir: "ltr",

  nav: {
    overview: "Przegląd",
    node: "Czym jest węzeł",
    features: "Możliwości",
    install: "Instalacja i konfiguracja",
    security: "Prywatność i kontrola",
    troubleshooting: "Rozwiązywanie problemów",
    releases: "Wydania i GitHub",
    download: "Pobierz węzeł",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    chooseLanguage: "Język",
  },

  ecosystem: {
    heading: "Reszta POPOPX",
    body:
      "Trzy portale, jeden projekt i wszystkie trzy są nasze. Nic na tej stronie niczego z nich nie ładuje i żadne żądanie do nich nie jest wysyłane: node.popopx.chat opuszczasz tylko wtedy, gdy sam w coś klikniesz.",
    chat: "POPOPX Chat",
    chatBody:
      "Sama sieć wiadomości — end-to-end, bez globalnego identyfikatora, i ta kolejka, na której nasłuchuje Twój węzeł.",
    botStudio: "Bot Studio",
    botStudioBody:
      "Tu powstają i są hostowane konta serwisowe stojące za dziesięcioma silnikami — na serwerze, który kontrolujesz.",
    serviceSuite: "Konta serwisowe",
    serviceSuiteBody:
      "Ekosystem szyfrowanych kanałów zero-knowledge, z którymi te silniki rozmawiają.",
  },

  routes: {
    "/": { eyebrow: "PRZEGLĄD", title: "POPOPX Mac Node — Twój własny Mac uruchamia dziesięć silników" },
    "/node": { eyebrow: "CZYM JEST WĘZEŁ", title: "Czym jest węzeł, a czym nie jest — POPOPX Mac Node" },
    "/features": { eyebrow: "MOŻLIWOŚCI", title: "Dziesięć lokalnych silników i sprzęt, który je uruchamia — POPOPX Mac Node" },
    "/install": { eyebrow: "INSTALACJA I KONFIGURACJA", title: "Instalacja, parowanie, aktualizacja, kopia zapasowa, usuwanie — POPOPX Mac Node" },
    "/security": { eyebrow: "PRYWATNOŚĆ I KONTROLA", title: "Co zostaje na Twoim dysku i jak to zatrzymać — POPOPX Mac Node" },
    "/troubleshooting": { eyebrow: "ROZWIĄZYWANIE PROBLEMÓW", title: "Porty, zapory i limity pamięci — POPOPX Mac Node" },
    "/releases": { eyebrow: "WYDANIA I ŹRÓDŁA", title: "Wydania, skróty i całe drzewo kodu źródłowego — POPOPX Mac Node" },
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Twoje urządzenie. Twój węzeł.",
    titleAccent: "Twoja kontrola.",
    subtitle:
      "POPOPX Mac Node to krawędź sieci, która należy do Ciebie. Uruchamia silniki lokalnych modeli, mediów i plików stojące za dziesięcioma usługami Discover — na Twoim własnym Macu, obok POPOPX Chat i Bot Studio. Sieć przekazuje Twoje zaszyfrowane wiadomości; wnioskowanie, renderowanie, zapieczętowane archiwum i sekrety zostają na sprzęcie, który kupiłeś.",
    ctaDownload: "Pobierz DMG",
    ctaSource: "Przeczytaj kod źródłowy",
    releaseLabel: "Najnowsze wydanie",
    sizeLabel: "Rozmiar",
    digestLabel: "SHA-256",
    statusFetching: "Sprawdzam GitHub Releases…",
    statusLive: "Na żywo z GitHub Releases",
    statusFallback: "GitHub niedostępny — pokazuję na stałe przypisaną wersję",
    copyDigest: "Kopiuj skrót",
    digestCopied: "Skrót skopiowany",
    verifyTitle: "Zweryfikuj, zanim otworzysz",
    verifyBody:
      "Zapisz obraz i plik ze skrótem wydania w tym samym folderze i sprawdź je, zanim otworzysz cokolwiek. Ten plik różni się między wydaniami — nowsze publikują manifest SHA256SUMS.txt, starsze pojedynczy .sha256 dla jednego zasobu — więc w sekcji Wydania i GitHub wypisane są dwa dokładne polecenia dla wydania, które akurat oglądasz.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Twój własny sprzęt",
    statStorage: "Artefakty na Twoim własnym SSD",
    statIdentity: "Bez konta, bez identyfikatora",
    statSource: "AGPL-3.0 bez wyjątku",
  },

  overview: {
    splitHeading: "Sieć koordynuje. Twoja maszyna wykonuje.",
    splitSub:
      "To cała idea i warto wypowiedzieć ją dokładnie, bo zwykle produkt tego typu czyta się na odwrót: to nie chmura wykonuje pracę i Twój Mac nie jest cienkim klientem. Każda ze stron robi jedyną część, którą powinna zrobić.",
    cloudTitle: "Co sieć przenosi",
    cloudBody:
      "Przekaźniki SMP i magazyn XFTP przenoszą Twoje wiadomości i pliki end-to-end między Twoimi własnymi urządzeniami, a dziesięć kont serwisowych Discover wysyła po jednym sygnale. Przekaźnik widzi szyfrogram i metadane routingu. Nigdy nie otrzymuje modelu, promptu, klatki ani nazwy pliku i nie wykonuje żadnej części żadnego silnika.",
    macTitle: "Co robi Twój Mac",
    macBody:
      "Węzeł bierze ten sygnał i wykonuje pracę na maszynie przed Tobą: kwantyzowane wnioskowanie przez Ollama na loopbacku, renderowanie LTX-2.5 przez MLX, FFmpeg i znakowanie wodne w GOP, pieczętowanie CryptoKit i sejfy z łańcuchem skrótów, diskutil i AppKit dla czynności fizycznych. A potem zapisuje wynik na Twoim własnym dysku.",
    pathsHeading: "Zacznij tam, gdzie faktycznie jesteś",
    paths: [
      {
        title: "Zrozum ten podział",
        body:
          "Czym jest węzeł, ta jedna linia, na której nasłuchuje, skąd telefon dostaje pozwolenie na sterowanie nim i które porty w tym uczestniczą.",
      },
      {
        title: "Zainstaluj na Macu",
        body:
          "Warunki wstępne, zweryfikowane DMG, budowanie ze źródła, pierwsze parowanie, aktualizacje, przenosiny między maszynami i kompletne usunięcie.",
      },
      {
        title: "Sprawdź, co wychodzi",
        body:
          "Wyliczenie katalog po katalogu: korzeń danych, co jest odsyłane do Twojego telefonu, gdzie leżą klucze i jak to zatrzymać albo unieważnić.",
      },
      {
        title: "Napraw to, co padło",
        body:
          "Awarie, które naprawdę się zdarzają: zajęty port, model, który nigdy nie odpowiedział, pominięte wagi, kod, który wygasł.",
      },
    ],
  },

  architecture: {
    heading: "Trzy gwarancje — żadnej usługi pośrodku",
    sub:
      "Najciekawsze w tej architekturze jest to, czego w niej brakuje: żadna usługa kont, żadne przechowywanie kluczy u pośrednika, żaden punkt analityczny, żadne zdalnie hostowane wnioskowanie.",
    items: [
      {
        title: "Fizyczne lokalne przechowywanie danych",
        body:
          "Każdy wynik, który tworzy silnik — brief, klip ze znakiem wodnym, zapieczętowane archiwum, zdekodowany raport — zapisywany jest na Twoim własnym dysku SSD, w jednym korzeniu danych. Leży poza synchronizacją iCloud i poza jakimkolwiek współdzielonym kontenerem, a księgi zapisów są zapisywane z pełną ochroną plików, więc po zablokowaniu maszyny nie da się ich odczytać z dysku.",
      },
      {
        title: "Bez konta, bez identyfikatora",
        body:
          "Nie ma rejestracji, nie podajesz numeru telefonu, adresu e-mail ani identyfikatora urządzenia. Parowanie telefonu z węzłem to jedno zeskanowanie kodu QR, a polecenia, które przychodzą potem, wędrują Twoją własną kolejką popopx-chat, przy czym SMP i XFTP niosą je end-to-end.",
      },
      {
        title: "AGPL-3.0 w całym stosie",
        body:
          "Dziesięć silników, brama SMP, lokalna konsola internetowa, znakowanie wodne w GOP i w dziedzinie częstotliwości oraz księga punktów obliczeniowych tworzą jedno drzewo kodu źródłowego na licencji AGPL-3.0-only. Nie ma zamkniętego rdzenia: kod poświadczeń oparty na ślepych podpisach oraz rejestr parametrów kryptograficznych znajdują się w popopxmq — publicznie dostępne.",
      },
    ],
  },

  dashboard: {
    badge: "UI Preview — makieta interfejsu, nie działający węzeł",
    heading: "Co konsola pokazuje, gdy węzeł już działa",
    sub:
      "Aplikacja niesie jedną lokalną konsolę internetową i to jest obraz jej ekranu stanu: maszyna, którą znalazła, pamięć zunifikowana, którą zdecydowała się zarezerwować, silniki, o których może dostać polecenie uruchomienia, i telefony, które wpuściła. Układ, nazwy kolumn i arytmetyka są dokładnie te z wydanego produktu. Nic tutaj nie zostało odczytane z uruchomionego procesu.",
    machineLabel: "Maszyna przykładowa",
    machineHint:
      "Węzeł odczytuje przy uruchomieniu model układu, liczbę rdzeni i fizyczną pamięć z sysctl. Przeglądarka nie odczyta Twojej — navigator.deviceMemory jest we wszystkich implementacjach ograniczona do 8 GB — więc wybierz jedną z tych konfiguracji, a liczby poniżej przeliczą się od nowa.",
    statusHeading: "Stan",
    statusConnected: "Połączono",
    daemonRunning: "Demon działa",
    loopbackNote:
      "Konsola wiąże się z 127.0.0.1 i odrzuca związanie z 0.0.0.0, adresem LAN albo nazwą hosta, więc jest osiągalna wyłącznie z tego Maca.",
    memHeading: "Przydział pamięci zunifikowanej",
    memTotalLabel: "Pamięć zunifikowana",
    memCeilingLabel: "Limit rezydentny",
    memMeshLabel: "Limit meshu",
    memHeadroomLabel: "Zachowane na sesję pulpitu",
    usageLabel: "Zestaw roboczy silników (szacunek)",
    servicesHeading: "Lokalne silniki i usługi",
    servicesNote:
      "Po lewej dziesięć silników i trzy półki, pod którymi je wydano — ten sam katalog, który wypisuje menu w telefonie. Po prawej trzy adresy, które węzeł zna: ten, na którym nasłuchuje, i dwa, na które dzwoni jako klient. Oba to listy ustalone z góry, nie pomiary, a silnik działa tylko wtedy, gdy go włączysz.",
    devicesHeading: "Sparowane urządzenia",
    deviceColumns: ["Urządzenie", "Sparowanie", "Ostatnie wykrycie", "Unieważnij"],
    devicesActive: "aktywne",
    revoke: "Unieważnij",
    revokedRow: "unieważnione",
    neverSeen: "nigdy nie wykryte",
    disclaimer:
      "Ta karta to obraz, nie klient. Nie otwiera żadnego połączenia i nie odczytuje żadnego procesu: wybranie maszyny stosuje w Twojej własnej przeglądarce opublikowaną regułę poziomów węzła, a Unieważnij zmienia tylko ten wiersz, który właśnie oglądasz. W prawdziwej konsoli ten przycisk oznacza urządzenie jako unieważnione, od tej pory odrzuca jego polecenia i nie zrywa połączenia czatu — Prywatność i kontrola mówi dokładnie, czego ten przycisk nie robi.",
  },

  node: {
    heading: "Węzeł to komputer, który już masz",
    sub:
      "Nie region, nie typ instancji, nie plan subskrypcji. Jeden Mac, na którym dzieją się te części POPOPX, które nie powinny dziać się gdzie indziej — a jedyną rzeczą, której musisz ufać, jest maszyna, której już ufasz swoje pliki.",
    points: [
      {
        title: "Wrażliwa praca nigdy nie wychodzi",
        body:
          "Raporty medyczne parsuje Vision na Twojej własnej maszynie. Surowy materiał wideo jest cięty i znakowany lokalnie. Pieczętowanie sejfu i zapieczętowane archiwum to operacje CryptoKit na Twoim własnym dysku. Żadna z tych ścieżek nie ma hostowanego endpointu, który mogłaby wywołać.",
      },
      {
        title: "Odległość wynosi zero",
        body:
          "Wnioskowanie dzieje się w pamięci zunifikowanej, obok procesu, który o nie poprosił. Klient modelu jest przypięty do 127.0.0.1:11434 — i dlatego w węźle nie ma żadnej ścieżki kodu, która trafiłaby do hostowanego API wnioskowania nawet przez pomyłkę: najpierw musiałby zmienić się literał adresu.",
      },
      {
        title: "Za to już zapłaciłeś",
        body:
          "Punkty obliczeniowe mierzą cykle, które zużywa Twój własny sprzęt, a Edge Compute Mesh jest jedynym silnikiem, który pożycza wolną moc na zewnątrz, zamiast ją pożyczać od innych. Poziom, który dostajesz, jest funkcją pamięci, którą kupiłeś.",
      },
      {
        title: "Pozwolenie dotyczy jednego urządzenia",
        body:
          "Jeden podpisany, jednorazowy, piętnastominutowy kod parujący autoryzuje jedno urządzenie. Konsola wypisuje, co jest sparowane, a unieważnienie go to przycisk — z jednym uczciwym zastrzeżeniem co do tego, czego ten przycisk nie robi, opisanym na stronie prywatności.",
      },
    ],
    wireHeading: "Jedna linia, trzy segmenty",
    wireBody:
      "Polecenie z telefonu jest zwyczajną wiadomością na Twojej własnej kolejce popopx-chat, a w niej jedna linia znacznikowa: prefiks, identyfikator silnika, akcja i ładunek JSON. Parser tnie wyłącznie na pierwszym separatorze, więc ładunek, który ten separator zawiera, przechodzi w całości, a linia o nieznanym identyfikatorze silnika, z pustym ładunkiem albo z ładunkiem większym niż górna granica akceptowana po stronie iOS jest odrzucana w całości, zamiast być wykonana częściowo.",
    wireSampleLabel: "Jedyna akceptowana postać",
    pairingHeading: "Parowanie w kolejności, w jakiej naprawdę przebiega",
    pairingSub:
      "Węzeł wybija poświadczenie, pokazujesz je telefonowi raz, a potem nie jest już nic warte. Nic nie jest przechowywane na serwerze, bo nie ma serwera, który mógłby je przechować.",
    pairingSteps: [
      {
        title: "Węzeł składa ofertę",
        body:
          "Z paska menu albo z konsoli węzeł zapisuje ofertę, podpisuje jej treść własnym kluczem Ed25519 — tym w pairing/node.key pod swoim korzeniem danych — i lokalnie renderuje ją jako kod QR przez CoreImage. Żaden obraz nie opuszcza maszyny.",
      },
      {
        title: "Telefon ją przejmuje",
        body:
          "POPOPX iOS skanuje kod, a powstały kontakt to klucz urządzenia. To jedno skanowanie ustanawia most SMP; odtąd konta serwisowe Discover rozmawiają z Twoim węzłem i z niczym innym.",
      },
      {
        title: "Oferta umiera",
        body:
          "Pierwsze przejęcie oznacza ofertę jako zużytą. Wygenerowanie nowego kodu emerytuje poprzedni, więc sfotografowany kod QR nie jest stałym zaproszeniem — po piętnastu minutach wygasa sam, nawet jeśli nikt nigdy go nie zeskanuje.",
      },
    ],
    pairingFacts: {
      lifetime: "Ważność oferty",
      singleUse: "Realizacja",
      signature: "Podpisany przez",
      delivery: "Renderowany jako",
    },
    sealedHeading: "Kod QR to zapieczętowana koperta",
    sealedSub:
      "Od commita 040ef25 kod QR i przycisk kopiowania w kreatorze niosą jeden nieprzezroczysty adres URL zamiast surowego poświadczenia. Koperta trzyma adres przekaźnika z dala od zrzutu ekranu, podglądu linku i przekazania dalej; nie jest to sekret, którego posiadacz aplikacji nie potrafiłby otworzyć.",
    sealedShapeLabel: "Postać zapieczętowanego linku",
    sealedFacts: {
      kdf: "Wyprowadzanie klucza",
      cipher: "AEAD",
      nonce: "Nonce",
      caps: "Limity ładunku",
    },
    sealedBody:
      "Klucz jest wyprowadzany przez HKDF-SHA256 z wejścia opublikowanego wewnątrz aplikacji, a sam ładunek jest zaszyfrowany algorytmem ChaCha20-Poly1305 ze stałym łańcuchem danych stowarzyszonych, więc każdy, kto czyta źródła, potrafi otworzyć kopertę. Taki jest zamysł: link ukrywa adres kolejki SMP przed podglądami, zrzutami ekranu i przekazywaniem dalej, a urządzenie autoryzuje tak naprawdę podpisane, jednorazowe, piętnastominutowe poświadczenie w środku. Surowy kod PPXNODE1-… i URI zaproszenia, który niesie adres kolejki, zostają w szufladzie diagnostycznej konsoli; klucz publiczny węzła pojawia się tam oraz w wierszach sparowanych urządzeń, nigdy na stronie kreatora. Obraz QR jest renderowany lokalnie i serwowany wyłącznie na loopbacku pod /api/pairing/qr.png.",
    portsHeading: "To, co w węźle nasłuchuje",
    portsSub:
      "Sam węzeł otwiera jeden port. Pozostałe dwa należą do programów, które on uruchamia i z którymi łączy się jako klient, a to ma znaczenie, gdy czytasz log zapory: połączenie z 11434 albo 5225 zostało przez węzeł nawiązane, a nie przez niego przyjęte.",
    portsColumns: ["Port", "Wiąże go", "Adres", "Transport", "Co go chroni"],
    portsOwner: {
      node: "Węzeł",
      tool: "Ollama",
      daemon: "popopx-chat",
    },
    portsPurpose: {
      console: "Konsola internetowa i strumień logów silników",
      inference: "Lokalne wnioskowanie modelu",
      control: "Gniazdo sterujące demona czatu",
    },
    portsFootnote:
      "Wszystkie trzy są na loopbacku. Konsola to zwykły HTTP bez TLS, co jest rozsądną konstrukcją tylko dlatego, że nigdy nie opuszcza maszyny: próby związania z 0.0.0.0, adresem LAN albo nazwą hosta są odrzucane, zanim w ogóle powstanie gniazdo, a adres jest zaszyty w aplikacji na stałe, a nie czytany z pliku konfiguracyjnego. Strzeże go zamiast tego losowy dwudziestoczterobajtowy token wydawany przy każdym uruchomieniu, wysyłany jako X-PPX-Token, trzymany wyłącznie w pamięci i martwy po zakończeniu procesu. Gniazdo sterujące demona czatu nie ma żadnej autoryzacji — tak brzmi jego uczciwy opis — i jest bezpieczne tylko o tyle, o ile zostaje na 127.0.0.1.",
  },

  hub: {
    badge: "LINIA ŹRÓDŁOWA · NIEOBECNA W PODPISANYM BUDOWANIU 1.0.2",
    heading: "Pięć lokalnych możliwości, jedna granica",
    sub:
      "Linia źródłowa dodaje wykrywanie zdolności w zakresie wyznaczonym przez właściciela, cztery adaptery protokołów i zapieczętowany link parujący. Mosty są domyślnie wyłączone, każdy cel przechodzi przez tę samą pozytywną listę dozwolonych, a każdy zapis staje się podpisaną propozycją, którą człowiek musi zatwierdzić. Nic z tego nie jest usługą hostowaną i nic nie otwiera nowego nasłuchu.",
    status:
      "W źródłach od 26 listopada 2026 (5858b3c i 040ef25). Podpisane pobranie v1.0.2 z tej strony powstało przed oboma commitami, więc czytaj tę sekcję jako kontrakt linii źródłowej, a nie jako cechę obrazu, który pobierasz.",
    cards: [
      {
        title: "Wykrywanie, które odpowiada tylko o sobie samym",
        body:
          "Konsola raportuje to, co ten Mac już ma: Ollama na 127.0.0.1:11434 i modele, które serwuje, foldery obszaru roboczego, które autoryzowałeś, stan uprawnień EventKit oraz wiersz osiągalności TCP dla maksymalnie ośmiu celów w sieci LAN, które sam wpisałeś. To GET /v1/discovery/capabilities w trybie tylko do odczytu. Nie ma rozgłaszacza mDNS, przemiatania portów ani przejścia podsieci; dopuszczane są tylko loopback, literały RFC 1918, ULA i nazwy .local, a publiczny adres jest odrzucany, zanim zostanie otwarte gniazdo.",
      },
      {
        title: "MCP, wewnątrz listy dozwolonych",
        body:
          "Lokalny klient MCP mówi JSON-RPC 2.0 initialize, tools/list i tools/call. Serwery rejestruje się ręcznie w config/mcp_servers.json — najwyżej osiem. Polecenie stdio musi być ścieżką bezwzględną z szesnastoelementowej listy allowedCommands i nie może zawierać metaznaków powłoki; serwer HTTP musi odpowiadać na loopbacku. Narzędzie tylko do odczytu może się uruchomić; narzędzie zmieniające stan nigdy nie jest wykonywane na żądanie, tylko zamieniane w propozycję.",
      },
      {
        title: "Home Assistant i MQTT w sieci LAN",
        body:
          "Home Assistant przez lokalne REST API i ręcznie napisany klient MQTT 3.1.1, oba ograniczone do loopbacku, RFC 1918 i .local. Dla mostu istnieją wyłącznie encje wymienione w exposedEntities, tryb tylko do odczytu jest domyślnie włączony, a publikacja do brokera może trafić tylko do wyeksponowanej encji pod skonfigurowanym przez Ciebie prefiksem. Poświadczenia to referencje do Keychaina; settings.json nie trzyma żadnego tokenu.",
      },
      {
        title: "CalDAV zachowuje luki, nie tekst",
        body:
          "PROPFIND i REPORT względem maksymalnie czterech samodzielnie hostowanych serwerów CalDAV w sieci LAN. Parser iCalendar zachowuje DTSTART i DTEND, a SUMMARY, DESCRIPTION, LOCATION, ORGANIZER i każde ATTENDEE odrzuca w trakcie parsowania, więc nie ma późniejszego kroku redakcji, który mógłby się pomylić. Zdalne bloki zajętości są wycinane z lokalnych wolnych okien z podłogą piętnastu minut; reguła powtarzania, której parser nie potrafi ocenić, jest raportowana jako podłoga, a nie zgadywana.",
      },
    ],
    boundaryHeading: "Co odrzuca granica",
    boundaryItems: [
      {
        title: "Publiczne adresy i nierozwiązywane nazwy",
        body:
          "Cel mostu musi być loopbackiem, adresem RFC 1918, adresem ULA albo nazwą .local. Goła nazwa hosta nie jest rozwiązywana, żeby sprawdzić, czy jest publiczna, poświadczenia w adresie URL są odrzucane, a most HTTP nie podąży za przekierowaniem — więc host z listy dozwolonych nie może odbić węzła na cudzy serwer.",
      },
      {
        title: "Zapisy bez człowieka",
        body:
          "Włączenie w automatyce domowej albo narzędzie MCP zmieniające stan staje się propozycją pending_user_approval z pokwitowaniem HMAC-SHA256 związanym z jej identyfikatorem i czasownikiem, ważnym przez piętnaście minut. Wykonywany jest dokładnie ten ładunek, który Ci pokazano, trafia on do lokalnego dziennika audytu, a wyłączenie mostu unieważnia to, co czekało.",
      },
      {
        title: "Sekrety bez awaryjnego zapisu jawnym tekstem",
        body:
          "Token Home Assistant, hasło MQTT i hasło CalDAV to elementy Keychaina wskazywane referencją; uruchomienie bez pakietu trzyma je wyłącznie w pamięci i nic nie spada awaryjnie do pliku. Dokument MCP przechowuje nazwy zmiennych środowiskowych, nigdy wartości.",
      },
    ],
    footnote:
      "Strona „Prywatność i kontrola” wypisuje tę samą granicę reguła po regule, łącznie z tym, czego węzeł nie może obiecać.",
  },

  engines: {
    heading: "Dziesięć suwerennych silników",
    sub:
      "Trzy półki i dziesięć oficjalnych kont serwisowych. Każda karta poniżej wypisuje swoją cenę: stałą liczbę punktów obliczeniowych za jeden cykl 30 dni, a w przypadku Edge Compute Mesh rozliczenie za każde zadanie z 10% opłatą protokołu. Każdy z nich działa na sprzęcie, który już masz.",
    filterAll: "Wszystkie",
    substrateLabel: "Podłoże",
    quickMenuLabel: "Szybkie menu iOS",
    quickMenuHint:
      "Każdy przycisk wysyła do Twojego sparowanego węzła ::popopx_sys::NODE_CMD::<service>::<action>::{}.",
    deterministicBadge: "Deterministyczne — brak modelu w ścieżce",
    modelBadge: "Lokalny model w pętli",
    offlineBadge: "Działa bez lokalnych wag modelu",
    openDetails: "Otwórz",
    closeDetails: "Zamknij",
    shelfCount: "silniki",
    creditsUnit: "Punkty obliczeniowe",
  },

  hardware: {
    heading: "Poziom zależy od ilości pamięci",
    sub:
      "Przy uruchomieniu węzeł odczytuje sysctl — model układu, liczbę rdzeni CPU, fizyczną pamięć zunifikowaną i wolne miejsce na SSD — i sam dobiera poziom. Przenieś aplikację na innego Maka, a poziom przeniesie się razem z nią; nie trzeba niczego konfigurować od nowa.",
    columns: [
      "Pamięć zunifikowana",
      "Typowy układ",
      "Model tekstowy",
      "Model wideo",
      "Pierwszy token*",
      "Przepustowość*",
      "Szczyt pamięci rezydentnej*",
      "Tryb",
    ],
    modes: {
      lightweight: "Lekkie wnioskowanie",
      balanced: "Zrównoważone",
      full: "Pełne wagi",
    },
    footnote:
      "* Te trzy kolumny to inżynierskie szacunki, nie pomiary laboratoryjne. Wynikają z dekodowania ograniczonego przepustowością pamięci w gęstym modelu 27B oraz z odczytu proporcji kwantyzacji dla rozmiaru wag LTX-2.5. Utrzymująca się temperatura, generacja układu, obciążenie w tle, długość klipu i równoległe zadania przesuwają realne wartości dwu- do trzykrotnie. Traktuj je jako wskazówkę przy wyborze poziomu, nie jako obietnicę wydajności.",
    rules: [
      "96 GB i więcej — oryginalne wagi LTX-2.5 w BF16 z Qwen3.8-27B w Q8_0.",
      "48 GB do 95 GB — LTX-2.5 w MLX skwantowany do 8-bit z Qwen3.8-27B w Q4_K_M.",
      "Poniżej 48 GB — model 9B w Q4_K_M, wyłącznie krótkie rendery, a wymagająca praca z wideo jest oferowana Edge Compute Mesh.",
    ],
    plansHeading: "Co dany poziom naprawdę wdraża",
    plansSub:
      "Powyższa tabela to przewodnik, który czytasz przed zakupem. Ta jest tym, co węzeł sam dla siebie zapisuje po zmierzeniu maszyny — prosto z funkcji rekomendacji, razem z tagiem modelu, który przy tej okazji pobiera.",
    plansColumns: [
      "Zakres pamięci",
      "Model tekstowy",
      "Stos wideo",
      "Limit rezydentny",
      "Wymagające wideo",
      "Polecenie pull",
    ],
    heavyVideo: {
      local: "Renderowane tutaj",
      mesh: "Oferowane meshowi",
    },
    plansFootnote:
      "Limit rezydentny to reguła arytmetyczna na zmierzonej pamięci, nie benchmark: każdy poziom odejmuje od znalezionej pamięci zunifikowanej stały zapas na sesję pulpitu, z górnym ograniczeniem, tak żeby bardzo duża maszyna nie obiecywała więcej, niż potrzebuje stos. Tagi modeli i kwantyzacje to dokładnie te napisy, które węzeł podaje Ollama.",
  },

  install: {
    heading: "Jedno DMG, jedno skanowanie, dziesięć przełączników",
    sub:
      "Węzeł nie ma instalatora, konta demona ani niczego do zarejestrowania. To jedna aplikacja na pasku menu, która wiąże się z loopback, a pierwsze uruchomienie samo wykonuje profilowanie.",
    prereqsHeading: "Zanim pobierzesz",
    prereqNotes: {
      system: "Pakiet jest przeznaczony dla macOS 14, a aplikacja jest agentem paska menu.",
      memory:
        "Metal, MLX i cała drabinka poziomów zakładają pamięć zunifikowaną. DMG niesie wycinek x86_64, ale żadna część stosu nie jest strojona pod Intela.",
      disk:
        "Pobieranie wag modelu jest odrzucane, dopóki wolne miejsce wynosi 40 GB lub mniej, więc górny limit samej drabinki jest teżgórnym limitem Twojego dysku.",
      media:
        "Pięć z dziesięciu silników wywołuje FFmpeg. Kreator instalacyjny może go doinstalować przez Homebrew.",
      inference:
        "Ollama dla kwantyzowanych modeli tekstowych, obszar roboczy LTX-2.5 MLX dla wideo. Oba to lokalne narzędzia; żadne z nich nie jest usługą.",
      bridge:
        "Potrzebne tylko do kroku parowania SMP i do ścieżki sterowanej telefonem. Same silniki działają bez tego.",
    },
    prereqRequired: {
      hard: "Wymagane",
      wizard: "Instaluje to kreator",
      optional: "Tylko do parowania",
    },
    steps: [
      {
        title: "Zweryfikuj i otwórz DMG",
        body:
          "Weź POPOPX-Mac-Node-Universal.dmg i plik ze skrótem wydania do tego samego folderu i sprawdź je, zanim otworzysz cokolwiek; Wydania i GitHub wypisują dwa polecenia dla bieżącego wydania. Przeciągnij POPOPX Mac Node.app do /Applications. Opublikowany build niesie podpis Developer ID i zszyty bilet notarizacji, więc Gatekeeper akceptuje go bez pomocy — spctl -a -vv -t install odpowiada accepted z source=Notarized Developer ID. Build z obiegu tagu, który pakuje się przez Scripts/build_dmg.sh, i build, który zrobisz sam tym samym skryptem, są podpisane ad-hoc i to właśnie one wymagają pierwszego razem kliknięcia prawym przyciskiem i wybrania Open.",
      },
      {
        title: "Pozwól mu zmierzyć maszynę",
        body:
          "Uruchom go i otwórz konsolę z paska menu. Krok pierwszy odczytuje z sysctl model układu, liczbę rdzeni, pamięć zunifikowaną i wolne miejsce na SSD, wypisuje wybrany poziom oraz wynikający z niego tag modelu i pokazuje liczby, które sam zmierzył, a nie te, które zadeklarowałeś.",
      },
      {
        title: "Wdróż lokalne silniki",
        body:
          "Kreator schodzi po liście w dół: Homebrew, FFmpeg, uv, Ollama, kwantyzacja Qwen pasująca do Twojego poziomu, obszar roboczy LTX-2.5 i na koniec test samosprawdzający. Dziennik instalacji jest na bieżąco przesyłany na stronę konsoli, a zapisywany do logs/install.log, żeby awarię dało się odczytać po fakcie.",
      },
      {
        title: "Sparuj iPhonea",
        body:
          "Wygeneruj kod QR parowania — z konsoli albo z pozycji nowego kodu na pasku menu — i zeskanuj go klientem POPOPX iOS. Od commita 040ef25 kod QR i przycisk kopiowania niosą zapieczętowany link https://popopx.chat/i/v1/… zamiast surowego poświadczenia, więc zrzut ekranu ani podgląd czatu nie ujawniają adresu kolejki. Kod w środku nadal jest podpisany, jednorazowy i wygasa po piętnastu minutach; surowy kod PPXNODE1 i URI zaproszenia zostają w szufladzie diagnostycznej konsoli. Urządzenie pojawia się na liście sparowanych z modelem, godziną parowania i ostatnim wykryciem.",
      },
      {
        title: "Włącz silniki",
        body:
          "Dziesięć przełączników na pasku menu i w konsoli. Silnik działa tylko wtedy, gdy go włączysz, a te cztery, które nie wymagają lokalnego modelu — blokada fizyczna, sejf z blokadą czasową, tropienie znaku wodnego i czytnik raportów laboratoryjnych — działają, zanim pobierzesz choćby jedną wagę modelu. FFmpeg nadal jest wywoływany; stos modeli już nie.",
      },
    ],
    buildHeading: "Albo zbuduj to z tego samego taga",
    buildBody:
      "Obrazy wydaniowe są pakowane z drzewa, które możesz checkoutować. swift build, swift test, swift build -c release, a potem bash Scripts/build_dmg.sh --output dist --version v1.0.2 zapisuje uniwersalne DMG, podpisuje je ad-hoc i odkłada obok niego plik sidecar. Publikowany artefakt robi inny skrypt: Scripts/build-release.sh dodaje podpis Developer ID, zgłoszenie do notarizacji oraz ZIP — dlatego pobrany obraz przechodzi spctl, a Twoja własna budowa nie. Oba działają tylko na macOS, bo hdiutil i codesign to cała ich materia.",
    lifecycleHeading: "Po pierwszym uruchomieniu",
    lifecycle: [
      {
        title: "Aktualizacja",
        body:
          "Nie ma mechanizmu aktualizacji ani sprawdzania aktualizacji — to kolejna rzecz, której węzeł nie zgłasza do producenta. Aktualizacja to przeciągnięcie: pobierz nowsze DMG, zweryfikuj je i zamień aplikację w /Applications. Ustawienia, stan parowania, klucz węzła, sejf i każdy artefakt mieszkają pod Application Support, a nie wewnątrz bundla, więc podmieniona aplikacja przejmuje maszynę, na którą trafia.",
      },
      {
        title: "Kopia zapasowa i przenosiny",
        body:
          "Aplikacja oznacza własny korzeń danych jako wykluczony z Time Machine, co chroni Twoje kopie zapasowe przed wagami modeli i eliminuje niespodziankę przy odtwarzaniu. A to samo znaczy, że tego foldera nie ma w Twojej kopii zapasowej. Żeby przenieść węzeł: wyłącz go, skopiuj ~/Library/Application Support/PopopxMacNode na tę samą ścieżkę na nowym Macu i pozwól mu zmierzyć maszynę od nowa — poziom może się zmienić, a pairing/node.key jedzie razem z folderem i to jest cały powód, dla którego ta kopia musi być tak samo prywatna jak oryginał.",
      },
      {
        title: "Całkowite usunięcie",
        body:
          "Najpierw wyłącz Launch at Login, potem Quit z paska menu — to zamyka nasłuch i uwalnia element logowania. Usuń /Applications/POPOPX Mac Node.app, a potem korzeń danych pod ~/Library/Application Support/PopopxMacNode, jeśli mają zniknąć także zapieczętowany sejf, księgi zapisów i artefakty. Nie ma odinstalownika ani potwierdzenia, o którym można by zapomnieć: poza tymi dwiema ścieżkami nic nie zostało zainstalowane. Jedyne, czego te dwie ścieżki nie obejmują, to element Keychaina — jeśli skonfigurowałeś most edge huba, jego poświadczenie pod im.popopx.macnode.hub przeżywa oba usunięcia, bo Keychain nie jest folderem; usuń je w Keychain Access albo przyciskiem rozłączenia w samym moście.",
      },
    ],
    bridgeTitle: "Steruj silnikami z własnego skryptu",
    bridgeBody:
      "Folder integrations zawiera most TypeScript oraz dwa adaptery agentów. Nie otwiera żadnego nowego portu i nie uruchamia drugiego demona: korzysta z konsoli na 127.0.0.1:18920 i jednorazowego tokenu na proces oraz wysyła tę samą sygnalizację NODE_CMD co telefon. Akcja blokady to podwójny opt-in — allowLockdown musi mieć wartość true, a PPX_BRIDGE_SECRET co najmniej szesnaście znaków — a odmowa jest zapisywana w dzienniku wtyczki, żebyś widział, że nastąpiła.",
    requirementTitle: "Jeden uczciwy warunek wstępny",
    requirementBody:
      "Drugi krok kreatora samego węzła, kod QR parowania i most SMP potrzebują demona czatu popopx-chat w Twojej zmiennej PATH. Węzeł sprawdza dokładnie jeden plik wykonywalny i nie ma żadnej ścieżki awaryjnej, ponieważ build z upstreamu odpowiada na linię z wersją, a potem psuje każde kolejne polecenie. Dziesięć silników samych w sobie tego nie potrzebuje.",
    signHeading: "Jak podpisany jest opublikowany build",
    signBody:
      "Bundle aplikacji wewnątrz obrazu niesie podpis Developer ID Application, flagę hardened runtime i bezpieczny znacznik czasu, a do tego jest w niego zszyty bilet notarizacji. Dlatego Gatekeeper pozwala go uruchomić bez niczyjej pomocy: spctl -a -vv -t install odpowiada accepted z source=Notarized Developer ID. Poniższy blok został odczytany z dokładnie tych bajtów, które v1.0.2 publikuje 2026-11-25 — uruchom pierwsze dwa polecenia względem aplikacji w /Applications, a w odpowiedzi powinieneś dostać tę samą tożsamość. Żadne konto Apple nie jest odpytywane i nic nie jest sprawdzane na serwerze, bo bilet jedzie na dysku razem z aplikacją.",
    containerTitle: "Sam obraz nie jest podpisany",
    containerBody:
      "Uruchom spctl na pobranym .dmg, a odpowiedź to rejected z source=no usable signature; codesign -dvv mówi o tym samym pliku, że nie jest podpisany w ogóle. To oczekiwana odpowiedź, nie alarm o ingerencji. Podpis kodu Apple znajduje się na bundlu aplikacji, a bilet notarizacji jest zszyty z bundlem i z obrazem dysku wokół niego. Jedyną kontrolą integralności samego obrazu jest jego skrót SHA-256, czyli sprawdzenie opisane dalej na tej stronie.",
    provenanceTitle: "Który skrypt produkuje który artefakt",
    provenanceBody:
      "Dwa skrypty pakują tę aplikację i nie kończą w tym samym miejscu. Scripts/build_dmg.sh — ten, który przepływ wydaniowy dla taga uruchamia na runnerze macOS, i ten, na którym kończą powyższe kroki budowania — podpisuje ad-hoc przez --sign - --timestamp=none i bez hardened runtime, więc build z tej ścieżki naprawdę wymaga pierwszego razem kliknięcia prawym przyciskiem i wybrania Open. Scripts/build-release.sh to ścieżka Developer ID: podpisuje z hardened runtime, zgłasza do notarizacji, zszywa bilet i z bundlem, i z obrazem, a potem odkłada ZIP obok manifestu SHA256SUMS.txt. Obraz, który pobierasz, powstał z tego drugiego skryptu, a runner, który nigdy nie trzymał certyfikatu, nie jest w stanie go wytworzyć.",
    digestHeading: "Sprawdź skrót, zanim otworzysz cokolwiek",
    digestBody:
      "Dwa polecenia, uruchomione w folderze, do którego zapisałeś pliki. To względem manifestu wydania trzeba sprawdzać, bo wylicza on każdy artefakt wydania i zapisuje go ten sam krok, który je spakował, podczas gdy pojedynczy .dmg.sha256 dla jednego zasobu, opublikowany obok v1.0.2, podaje skrót, do którego nie haszuje żaden opublikowany zasób. Wydania i GitHub wypisują tę parę dla wydania, które akurat rozpoznają, a może ono być nowsze niż to poniżej.",
    copyCommand: "Kopiuj polecenie",
    commandCopied: "Skopiowano",
  },

  security: {
    heading: "Co zostaje, co wychodzi i jak to zatrzymać",
    sub:
      "Strona prywatności, która wylicza tylko to, co zostaje lokalnie, jest stroną marketingową. Ta wylicza też ruch, bo uczciwa wersja zdania „Twoje dane nigdy nie opuszczają urządzenia” jest dłuższa i bardziej użyteczna niż hasło.",
    localHeading: "Zostaje na Twoim dysku",
    localSub:
      "Pod jednym korzeniem danych, w folderze, który aplikacja sama tworzy i wyklucza z Time Machine, z sekretami zapisanymi atomowo, na prawie 0600 i z pełną ochroną plików.",
    localItems: [
      {
        title: "Każdy artefakt",
        body:
          "Wyrenderowane klipy, briefy, eksporty ze znakiem wodnym, zapieczętowane archiwa, zdekodowane raporty i odizolowane dane wejściowe trafiają pod korzeń danych i tam zostają. Węzeł prowadzi outbox tylko dla wyników czekających, aż telefon wróci do sieci.",
      },
      {
        title: "Modele i ich wagi",
        body:
          "Kwantyzacja Qwen mieszka w własnym magazynie Ollama; wagi LTX-2.5 w katalogu engines węzła. Oba to lokalne pliki na lokalnym dysku, pobierane raz, a pobranie jest odrzucane, dopóki wolne miejsce wynosi 40 GB lub mniej.",
      },
      {
        title: "Klucze i stan parowania",
        body:
          "Klucz podpisujący Ed25519 węzła, lista sparowanych urządzeń i bieżąca oferta to zwykłe pliki pod pairing/. Nie ma chmurowej kopii klucza ani żadnego depozytu — co działa w obie strony, jak mówi akapit o utracie poniżej. Jedynym wyjątkiem jest poświadczenie mostu edge huba: token Home Assistant, hasło MQTT albo hasło CalDAV to element Keychaina, a settings.json niesie wyłącznie referencję, która go pobiera.",
      },
      {
        title: "Ślad dowodowy",
        body:
          "Księgi blokad i meshu są dopisywane lokalnie przez łańcuch skrótów, a dziennik audytu zapisuje, co zostało uruchomione, na którym silniku i z jakim wynikiem. Jest pisany po to, żebyś go przeczytał: logs/node.log to najszybsza odpowiedź na pytanie „co ta rzecz zrobiła o 03:14”.",
      },
    ],
    transitHeading: "Opuszcza maszynę",
    transitSub:
      "Cztery rodzaje ruchu wychodzą do szerszej sieci i każdy z nich to albo Twoje własne urządzenie, albo coś, co sam skonfigurowałeś. Piąty istnieje tylko wtedy, gdy włączysz most w sieci LAN: żądania Home Assistant, MQTT i CalDAV, które zostają na loopbacku, adresach RFC 1918 i .local. W żadnym z nich nie ma punktu analitycznego, do którego miałoby coś iść.",
    transitItems: [
      {
        title: "Wyniki, z powrotem do Twojego własnego telefonu",
        body:
          "Zakończone zadanie odsyła kartę o długości maksymalnie 1024 znaków plus jedną wiadomość na plik artefaktu, Twoją własną kolejką popopx-chat, z SMP jako przekaźnikiem i XFTP jako transportem. Przekaźnik widzi szyfrogram. Jeśli telefon jest offline, wynik czeka w outbox/ i ponawia przez maksymalnie trzydzieści dni.",
      },
      {
        title: "Kanały, które kazałeś mu czytać",
        body:
          "Morning TV pobiera skonfigurowane przez Ciebie źródła RSS z limitem trzech megabajtów na odpowiedź, i jest to zwyczajne wychodzące żądanie HTTPS do tego, kto hostuje Twoje kanały.",
      },
      {
        title: "Webhook, który skonfigurowałeś",
        body:
          "Fizyczna blokada może wysłać POST z podpisanym zdarzeniem do endpointu automatyki domowej albo obecności. Działa best effort, jest włączane przez Ciebie, a adres URL należy do Ciebie — węzeł nie ma żadnej domyślnej destynacji.",
      },
      {
        title: "Instalacje i pobrania modeli",
        body:
          "Kreator pobiera formuły Homebrew, FFmpeg, uv, Ollama i wybraną kwantyzację. Ten ruch jest celem kroku instalacji, dzieje się raz, przed Twoimi oczami, z dziennikiem na ekranie.",
      },
    ],
    keysHeading: "Gdzie naprawdę mieszkają sekrety",
    keysBody:
      "Materiał parowania i materiał sejfu to pliki pod korzeniem danych, zapisane atomowym zapisem, z prawem POSIX 0600 i pełną ochroną plików, więc w spoczynku, przy zablokowanej maszynie, nie da się ich odczytać. Cena, którą płacisz, jest realna — uprawnienia plików są audytowalne i przenośne, ale są też niczym pomiędzy Twoim kontem użytkownika a odczytującym, który już to konto ma. Traktuj korzeń danych jako sekret, którym jest: nie ma go w Time Machine i jest jedyną kopią klucza węzła, jaka istnieje. Poświadczenie huba idzie inną drogą. Token Home Assistant, hasło MQTT i hasło CalDAV to elementy typu generic-password pod usługą im.popopx.macnode.hub, tworzone z kSecAttrAccessibleWhenUnlockedThisDeviceOnly, a dokument ustawień przechowuje wyłącznie referencję. Proces bez tożsamości pakietu aplikacji — swift run, harness testowy — dostaje zamiast tego magazyn w pamięci; celowo nie ma żadnego awaryjnego zapisu jawnym tekstem, więc poświadczenie, które nie dotrze do Keychaina, nie jest zapisywane wcale.",
    dataNote: {
      output: "Wygenerowane artefakty oraz kolejka outbox przechowująca wyniki czekające na telefon.",
      vault: "Zamknięte czasowo zapieczętowane archiwa i materiał sukcesyjny, który je otwiera.",
      pairing: "Klucz Ed25519 węzła, lista sparowanych urządzeń i bieżąca jednorazowa oferta.",
      weights: "Wagi modeli oraz obszar roboczy LTX-2.5 MLX, który wywołują silniki wideo.",
      ledger: "Dopisywane przez łańcuch skrótów księgi blokad i meshu.",
      logs: "Dziennik instalacji i dziennik audytu, pisane po to, żeby operator je przeczytał.",
      config: "Ustawienia, przełączniki silników oraz konfiguracja dzielona przez most i integracje.",
    },
    rootLabel: "Korzeń danych",
    hubHeading: "Własna granica edge huba",
    hubSub:
      "Cztery mosty dodane w linii źródłowej podlegają powyższym regułom i jeszcze czterem. Są zapisane tutaj, a nie na karcie możliwości, bo to twierdzenia, które czytelnik powinien móc obalić na podstawie kodu.",
    hubItems: [
      {
        title: "Jeden punkt wpuszczania",
        body:
          "Każdy cel mostu — MCP przez HTTP, Home Assistant, MQTT, CalDAV — przechodzi tę samą kontrolę EdgeBoundary, zanim w ogóle powstanie gniazdo: loopback, RFC 1918, ULA albo .local, bez odpytywania DNS o to, czy nazwa jest publiczna, bez poświadczeń w adresie URL i bez podążania za przekierowaniem. Odmowa to wiersz w konsoli, a nie cicha ponowna próba gdzie indziej.",
      },
      {
        title: "Pokwitowanie, nie monit",
        body:
          "Zmieniająca stan akcja nie jest warunkowana polem tekstowym w konsoli. Staje się propozycją w stanie pending_user_approval, zatwierdzaną 24-znakowym pokwitowaniem HMAC-SHA256 związanym z identyfikatorem i czasownikiem propozycji, ważnym przez piętnaście minut, i zapisaną w lokalnym dzienniku audytu. Ładunek, który uruchamia wykonawca, to ten, który zobaczył właściciel, a wyłączenie mostu unieważnia oczekujące propozycje.",
      },
      {
        title: "Keychain albo pamięć, nigdy plik",
        body:
          "Poświadczenia mostu mieszkają w elementach Keychaina wskazywanych referencją albo w pamięci procesu przy uruchomieniu bez pakietu. Trzeciej opcji nie ma: ani settings.json, ani dziennik, ani DMG. Dokument MCP przechowuje nazwy zmiennych środowiskowych, więc token przekazany serwerowi MCP przez stdio jest czytany ze środowiska ustawionego przez właściciela, a nie z pliku zapisanego przez węzeł.",
      },
      {
        title: "Uczy się minimum",
        body:
          "CalDAV parsuje DTSTART i DTEND, a tytuły, opisy, lokalizacje i uczestników odrzuca wewnątrz parsera, więc najbardziej zajęte pola nigdy nie trafiają do modelu. Podgląd propozycji pokazuje krótkie argumenty skalarne i ukrywa każdą wartość, której klucz jest na liście redakcji — content, token, password, payload i inne. Wykrywanie to wyłącznie zapytanie GET do odczytu, które raportuje stan samej maszyny.",
      },
    ],
    controlHeading: "Twoja część wyłącznika",
    controlSub:
      "Cztery sterowania, wszystkie lokalne, wszystkie widoczne w aplikacji zamiast pogrzebane w ekranie ustawień. Żadne z nich nie potrzebuje sieci — właśnie dlatego działają, gdy problemem jest sieć.",
    controls: [
      {
        title: "Zatrzymaj jeden silnik",
        body:
          "Dziesięć niezależnych przełączników na pasku menu i w konsoli. Wyłączenie jednego działa od następnego polecenia, a polecenie dla wyłączonego silnika jest odrzucane zamiast czekać w kolejce.",
      },
      {
        title: "Przestań pożyczać cykle",
        body:
          "Pause Mesh Sharing natychmiast wycofuje węzeł z puli edge compute; pasek menu pokazuje Paused, a węzeł przestaje przyjmować zadania. To jedyna kontrolka z wyrazem pause w nazwie i dotyczy ona przepustowości meshu, nie całego węzła.",
      },
      {
        title: "Spal bieżący kod parowania",
        body:
          "New Pairing QR unieważnia otwartą ofertę i wybija zamiast niej nową. Ktoś, kto ma zdjęcie starego kodu, ma wygasły podpis, a nie drugą szansę.",
      },
      {
        title: "Zatrzymaj wszystko",
        body:
          "Quit jest prawdziwym kill switchem: zamyka nasłuch na loopbacku, uwalnia element logowania i razem z procesem zabiera token wydany na to uruchomienie. Węzeł, który nie działa, nie odpowiada na nic, nikomu, o niczym.",
      },
    ],
    revokeHeading: "A kiedy unieważniasz urządzenie",
    revokeBody:
      "Lista sparowanych urządzeń w konsoli ma przycisk Revoke w każdym wierszu. Oznacza on urządzenie jako unieważnione, usuwa jego mapowanie kontaktów i od tej pory odrzuca jego polecenia — ale nie zrywa połączenia SMP, a aplikacja pisze o tym w tej samej wiadomości, którą Ci pokazuje. Żeby dokończyć robotę, usuń kontakt w kliencie czatu. To, co już zostało zapisane na Twoim dysku, na nim zostaje; unieważnienie zatrzymuje przyszłe polecenia, nie jest zdalnym wymazywaniem, a węzeł nigdy nie miał możliwości zdalnego wymazania, którą można by usunąć.",
    limitsHeading: "Czego ta strona nie obieca",
    limitsBody:
      "Bezpieczne niszczenie to losowe nadpisanie, sync i unlink. Na APFS zmodyfikowany plik trafia do nowych bloków, a SSD remapuje bloki logiczne, więc ta operacja usuwa plik i udaremnia działanie zwykłych narzędzi do odzyskiwania danych, ale nie dowodzi, że stare fizyczne bajty zniknęły. To najlepsze, co potrafi userspace’owe API plików, a kod mówi o tym w zwracanym wyniku. Dalej: brak globalnej pauzy poza wyłączeniem, brak zdalnego wymazania, brak przechowywania kluczy u pośrednika, a więc brak odzyskania, jeśli zgubisz maszynę razem z korzeniem danych, i brak mechanizmu aktualizacji, którego dałoby się namówić na zainstalowanie czegoś, o co nie prosiłeś.",
  },

  troubleshooting: {
    heading: "Kiedy nie robi tego, czego oczekujesz",
    sub:
      "Awarie, które na tej architekturze naprawdę się zdarzają, w kolejności, w jakiej się na nie trafia. Każda mówi, na co patrzeć najpierw, bo na maszynie bez strony serwerowej to dziennik jest najkrótszą drogą.",
    columns: ["Objaw", "Co się dzieje", "Co zrobić"],
    items: [
      {
        symptom: "Strona konsoli nie chce się otworzyć",
        cause:
          "Port jest na stałe ustawiony na 127.0.0.1:18920 i nie ma fallbacku, więc druga działająca instancja — albo cokolwiek innego, co zdążyło pierwsze — trzyma nasłuch. Token też jest wydawany na uruchomienie: stara karta otwarta przed restartem niesie martwe poświadczenie.",
        fix:
          "Poszukaj procesu nasłuchującego na 18920 i wyłącz drugą instancję, a potem użyj Open Web Console z paska menu, bo ta pozycja buduje bieżący adres z bieżącym tokenem, a nie ze starym.",
      },
      {
        symptom: "Na 11434 nikt nie odpowiada",
        cause:
          "Silniki potrzebujące modelu rozmawiają z Ollama wyłącznie na loopbacku. Jeśli Ollama nie działa albo została zainstalowana bez kreatora, silnik ponosi awarię zamiast korzystać z czegokolwiek hostowanego.",
        fix:
          "Uruchom Ollamę, sprawdź, czy OLLAMA_HOST wskazuje loopback, i pobierz kwantyzację, którą tabela poziomów podaje dla Twojej maszyny. Tekst błędu cytuje polecenie, które by zadziałało.",
      },
      {
        symptom: "Wagi nigdy nie zostały pobrane",
        cause:
          "Instalator pomija pobieranie wag, dopóki weightSources nie jest zadeklarowane w config/engines.json, a przy wolnym miejscu 40 GB lub mniejszym odmawia bezwarunkowo.",
        fix:
          "Dodaj źródło, z którego ma pobrać, albo skopiuj wagi do engines/weights i wskaż je w konfiguracji. Najpierw zwolnij dysk; ta strażka to próg, nie ostrzeżenie.",
      },
      {
        symptom: "Render wrócił jako linia polecenia",
        cause:
          "Praca nad wideo potrzebuje obszaru roboczego LTX-2.5 i jego wag. Bez nich silnik zwraca dokładne polecenie, które by wykonał, zamiast udawać, że plik powstał.",
        fix:
          "Dokończ krok obszaru roboczego w kreatorze albo sklonuj wskazany przezeń obszar roboczy LTX-2-MLX, a potem uruchom ponownie. To celowe działanie: upozorowany sukces jest gorszy niż uczciwa odmowa.",
      },
      {
        symptom: "Kod parujący jest odrzucany",
        cause:
          "Oferta jest jednorazowa i żyje piętnaście minut. Drugie skanowanie tego samego kodu albo kod z ekranu, który zdążył się obrócić, jest słusznie odrzucane.",
        fix:
          "Wygeneruj nowy kod i zeskanuj go raz. Jeśli telefon po sukcesie sam ponawia, pierwsze przejęcie już wygrało, a odmowa jest oczekiwaną odpowiedzią.",
      },
      {
        symptom: "Polecenia z telefonu nic nie robią",
        cause:
          "Most potrzebuje demona popopx-chat w PATH, a węzeł sprawdza dokładnie jeden plik wykonywalny i nie ma fallbacku. Pasek menu pokazuje popopx-chat not installed, kiedy go brakuje, a wyłączony silnik i tak niczemu nie odpowiada.",
        fix:
          "Najpierw przeczytaj wiersz mostu na pasku menu, potem przełączniki silników, potem dziennik audytu. Polecenie odrzucone i polecenie, które nigdy nie dotarło, wyglądają z telefonu identycznie.",
      },
      {
        symptom: "Wyniki przestają dochodzić, gdy telefon jest poza zasięgiem",
        cause:
          "Dostarczanie wychodzące idzie przez Twój własny demon i przekaźnik, więc zapora blokująca ruch wychodzący, VPN, który nie niesie przekaźnika, albo demon, który zakończył działanie, wyglądają stąd tak samo. Wyniki nie giną: czekają w outbox/ i ponawiają przez maksymalnie trzydzieści dni.",
        fix:
          "Upewnij się, że demon działa, potem zezwól na wychodzące połączenia węzła w tym, co je filtruje, a następnie poczekaj, aż kolejka się opróżni, zamiast ponownie uruchamiać zadanie.",
      },
      {
        symptom: "Karta pobrania pisze, że pokazuje na stałe przypisane wydanie",
        cause:
          "api.github.com było nieosiągalne, zablokowane, ograniczone limitem albo odpowiedziało bez zasobu do pobrania. Strona renderuje wtedy wydanie wkompilowane w bundl, zamiast zgadywać.",
        fix:
          "Otwórz stronę wydań bezpośrednio. Nic innego w serwisie nie potrzebuje tego wywołania i żadna część strony nie jest pusta z powodu jednej porażki.",
      },
    ],
    escalation:
      "Na większość reszty odpowiadają dwa pliki: logs/install.log dla wszystkiego, co zrobił kreator, i logs/node.log dla wszystkiego po nim. Oba to zwykły tekst pod korzeniem danych, a własny kanał logów konsoli pokazuje te same zdarzenia na żywo. Jeśli awaria przeżyje przeczytanie ich, kontrakt, który węzeł i integracje wspólnie testują, leży w repozytorium, a zgłoszenia należą do popopx-mac-node.",
  },

  releases: {
    heading: "Wydania, skróty i całe drzewo",
    sub:
      "Wszystko, z czego budowany jest węzeł, leży w jednym repozytorium AGPL-3.0-only, a każdy opublikowany obraz da się sprawdzić względem skrótu, zanim zostanie otwarty. Ta sekcja jest miejscem, w którym strona przestaje opisywać, a zaczyna wskazywać.",
    assetsHeading: "Opublikowane zasoby",
    assetsColumns: ["Plik", "Czym jest", "Rozmiar"],
    assetKinds: {
      dmg: "Obraz dysku przeciąganego do Applications, uniwersalny arm64 i x86_64. To właśnie ten, który trzeba wziąć.",
      sidecar: "Skrót dla jednego pliku, zapisany przez ten krok pakowania, który go zbudował.",
      zip: "Podpisany bundl aplikacji jako zawartość ZIP — dla archiwum zamiast woluminu.",
      sums: "Manifest wyliczający każdy artefakt wydania razem z jego skrótem.",
    },
    missingAsset:
      "Nie każde wydanie publikuje każdy zasób. Starsze wydania niosą wyłącznie obraz dysku i jego sidecar, dlatego poniższa kontrola czyta wydanie, które faktycznie otworzyłeś.",
    verifyHeading: "Sprawdź, zanim otworzysz cokolwiek",
    verifyBody:
      "Dwa polecenia, uruchomione w folderze, do którego pobrałeś pliki. Forma z manifestem jest preferowana i to ją publikuje bieżące wydanie.",
    verifySumsBody:
      "Manifest wydania wylicza każdy artefakt, więc plik, którego nie pobrałeś, jest oczekiwany, a nie brakujący: podaj --ignore-missing i przeczytaj wiersz pasujący do pliku, który wziąłeś. Manifest jest zapisywany w tym samym kroku, który pakuje wymieniany przezeń ładunek.",
    verifySidecarBody:
      "Starsze wydanie publikuje zamiast tego sidecar dla jednego zasobu i to względem niego trzeba sprawdzać. Jeśli wydanie niesie oba, a się różnią, wierz manifestowi: sidecar może pochodzić z innej budowy tej samej wersji.",
    pipelineHeading: "Jak wersja trafia tutaj",
    pipelineBody:
      "Wypchnięcie taga uruchamia przepływ wydaniowy na runnerze macOS: buduje drzewo, wykonuje testy kontraktu, pakuje uniwersalny obraz przez Scripts/build_dmg.sh, odmawia opublikowania pliku sum zawierającego ścieżkę bezwzględną i wgrywa to, co tamten skrypt zapisał. Podpisany i znotaryzowany obraz obok manifestu SHA256SUMS.txt pochodzi zamiast tego z Scripts/build-release.sh, który dodaje podpisanie Developer ID, zgłoszenie do notarizacji w Apple oraz ZIP. Obie drogi kończą w tym samym miejscu: skrótem, który sprawdzisz bez ufania tej stronie.",
    supportedHeading: "Działa już dziś",
    supportedItems: [
      "Wszystkie dziesięć silników, każdy z własnym zestawem akcji i ścieżkami odmowy, włączane osobno.",
      "Automatyczny wybór poziomu z sysctl, razem z pobraniem modelu, który dany poziom oznacza.",
      "Podpisane, jednorazowe, piętnastominutowe parowanie i konsola, która wiąże się wyłącznie z loopback.",
      "Most TypeScript i dwa adaptery agentów na tej samej konsoli i z tym samym tokenem.",
    ],
    roadmapHeading: "Jeszcze nie",
    roadmapSub:
      "Zapisane w repozytorium jako plany, a nie na stronie jako obietnice. Nic z tego nie działa dziś.",
    roadmap: [
      {
        title: "Pomiary dla każdego silnika na Twojej własnej maszynie",
        body:
          "Panel użycia i osie czasu awarii przenoszone z powrotem do telefonu: odczyty tokenów i watów z maszyny przed Tobą, zastępujące szacunki z tabeli sprzętu.",
      },
      {
        title: "Mocniejsza izolacja meshu i eksportowalna księga",
        body:
          "Silniejsze odizolowanie użyczonej mocy oraz księga zapisów, którą można wynieść z aplikacji, zamiast czytać ją w jej wnętrzu.",
      },
      {
        title: "Kustodia podzielona dla więcej niż jednego spadkobiercy",
        body:
          "Dzielenie materiału sukcesyjnego między wielu spadkobierców i dodatkowe układy raportów w silniku zdrowia.",
      },
      {
        title: "Podpisane kanały dystrybucji i więcej poziomów wideo",
        body:
          "Analiza kanału sklepowego wykraczającego poza notarizację oraz dodatkowe poziomy LTX dla zakresów pamięci, których drabinka jeszcze nie obejmuje.",
      },
    ],
    sourceHeading: "Kod źródłowy i to, do czego zobowiązuje licencja",
    sourceBody:
      "Jedno repozytorium, AGPL-3.0-only, bez zamkniętego rdzenia: silniki, konsola, znakowanie wodne i księga zapisów są w środku, a kod poświadczeń opartych na ślepych podpisach oraz rejestr parametrów kryptograficznych są otwarte w leżącym obok popopxmq. Artykuł 13 stosuje się w zwykły sposób: uruchamiaj, badaj i modyfikuj swobodnie, a jeśli oferujesz zmodyfikowany węzeł jako usługę innym osobom, zaoferuj im odpowiadający mu kod źródłowy. To cały koszt zgodności.",
    licenceHeading: "Czego to nie obejmuje",
    licenceBody:
      "AGPL-3.0 nie daje żadnej licencji na nazwę ani logo POPOPX. Fork może zabrać wszystko poza znakami: zmień nazwę oprogramowania, zastąp znaki, zachowaj kod.",
  },

  faq: {
    heading: "Pytania, które ludzie naprawdę zadają",
    sub: "Krótkie odpowiedzi; to, czego nie możemy zagwarantować, zostaje widoczne.",
    items: [
      {
        q: "Czy coś z tego działa na waszych serwerach?",
        a: "Nie. Polecenia dla dziesięciu silników przychodzą z klienta iOS Twoją własną kolejką popopx-chat, szyfrowane end-to-end, a wnioskowanie, renderowanie, przechowywanie i fizyczne wykonanie dzieją się na Twoim Macu. Żaden krok nie potrzebuje naszej infrastruktury i w węźle nie ma ścieżki kodu, która sięgałaby do hostowanego API wnioskowania — klient modelu jest przypięty do 127.0.0.1.",
      },
      {
        q: "Co muszę zarejestrować?",
        a: "Nic. W całym produkcie nie ma konta, numeru telefonu, adresu e-mail ani identyfikatora reklamowego. Parowanie telefonu z węzłem to jedno zeskanowanie kodu QR, a konsola internetowa wiąże się wyłącznie z loopback, przy każdym uruchomieniu zmienia losowy token i jest niedostępna z reszty Twojej sieci LAN.",
      },
      {
        q: "Czy węzeł skanuje moją sieć LAN w poszukiwaniu urządzeń?",
        a: "Nie. Wykrywanie to GET /v1/discovery/capabilities w trybie tylko do odczytu, który raportuje to, co ten Mac już ma: Ollama na loopbacku, foldery obszaru roboczego, które autoryzowałeś, stan uprawnień EventKit oraz to, czy połączenie TCP z hostem w sieci LAN, który wpisałeś w ustawieniach, się udaje. W kodzie nie ma rozgłaszacza mDNS, przemiatania portów ani przejścia podsieci. Cel jest dopuszczany tylko wtedy, gdy jest loopbackiem, literałem RFC 1918, adresem ULA albo nazwą .local; publiczny adres jest odrzucany, zanim zostanie otwarte gniazdo, a linia źródłowa nie przyjmuje nazw hostów, które wymagałyby odpytywania DNS.",
      },
      {
        q: "Czy narzędzie MCP albo polecenie automatyki domowej może zadziałać beze mnie?",
        a: "Narzędzie tylko do odczytu może, w granicach skonfigurowanych przez właściciela. Narzędzie zmieniające stan nie może: staje się propozycją w pending_user_approval i wymaga zatwierdzenia, które wystawia 24-znakowe pokwitowanie HMAC-SHA256 związane z identyfikatorem i czasownikiem propozycji, ważne przez piętnaście minut. Wykonawca uruchamia dokładnie ten ładunek, który pokazano, akcja trafia do lokalnego dziennika audytu, a wyłączenie mostu unieważnia to, co czekało. Akcja zamka, alarmu, syreny, kamery albo odkurzacza jest traktowana jako wysokiego ryzyka nawet w skądinąd permisywnej konfiguracji.",
      },
      {
        q: "Czy kod QR parowania jest szyfrowany?",
        a: "Jest zapieczętowany, a to rozróżnienie ma znaczenie. Kod QR i przycisk kopiowania niosą https://popopx.chat/i/v1/, a dalej ładunek zaszyfrowany algorytmem ChaCha20-Poly1305, którego klucz jest wyprowadzany przez HKDF-SHA256 z wejścia opublikowanego w źródłach samej aplikacji. To ukrywa adres kolejki SMP przed podglądami linków, zrzutami ekranu i przekazywaniem dalej; nie ukrywa zawartości przed kimś, kto ma aplikację. Urządzenie autoryzuje podpisane, jednorazowe, piętnastominutowe poświadczenie w środku, a surowy kod PPXNODE1 i URI zaproszenia zostają w szufladzie diagnostycznej konsoli, a nie na stronie kreatora.",
      },
      {
        q: "Dlaczego AGPL-3.0 i do czego zobowiązuje mnie artykuł 13?",
        a: "Każdy plik źródłowy węzła jest na licencji AGPL-3.0-only, czyli możesz go swobodnie uruchamiać, badać, modyfikować i dalej rozpowszechniać. Artykuł 13 dodaje klauzulę sieciową: jeśli oferujesz zmodyfikowany węzeł jako usługę innym osobom, musisz im udostępnić odpowiadający mu kod źródłowy. To cały koszt zgodności i właśnie dlatego ten projekt może być wolny w uruchomieniu.",
      },
      {
        q: "Czy znakowanie wodne albo protokół punktów obliczeniowych pozostają zamknięte?",
        a: "Nie — i właśnie to stwierdzenie, jak przewidujemy, będzie sprawdzone najdokładniej. Kod poświadczeń BBS+ i BLS12-381, logika uprawnień oraz rejestr parametrów kryptograficznych są otwarte w popopxmq; znakowanie wodne w GOP i w dziedzinie częstotliwości wraz z jego ślepym dekodorem jest w tym repozytorium. Komercyjna ścieżka sprzedaje centrum danych, dyżury, kanał dystrybucji i papierologię zgodności — nigdy nie bramkę do kodu źródłowego.",
      },
      {
        q: "Czy mogę wypuścić forka pod nazwą i logo POPOPX?",
        a: "Nie. Znaki towarowe nie są objęte licencją AGPL-3.0 i nie daje ich żaden poziom wsparcia. Polityka oczekuje jednego środka, który forka nic nie kosztuje: zmień nazwę oprogramowania, zastąp znaki, zachowaj kod. Użycie marki wymaga osobnej pisemnej licencji.",
      },
      {
        q: "Na ile mogę ufać liczbom w tabeli sprzętu?",
        a: "Tyle, ile mówi zdanie pod nią. To rachunki na kopercie, nie pomiary Twojej maszyny, a rzeczywista przepustowość zmienia się dwu- do trzykrotnie wraz z temperaturą i obciążeniem. Następna wersja węzła zastąpi je odczytami tokenów i watów dla każdego silnika, zmierzonymi na maszynie, której faktycznie używasz.",
      },
      {
        q: "Jakie maszyny są obsługiwane?",
        a: "macOS 14 lub nowszy na Apple Silicon. Drabinka poziomów, Metal i MLX zakładają pamięć zunifikowaną, a MLX nie działa na Intelu, więc Mac z procesorem Intela nie jest hostem, dla którego ten projekt powstał, choć uniwersalny plik DMG nadal zawiera wycinek x86_64. Sama aplikacja nie linkuje żadnej zewnętrznej biblioteki: wyłącznie frameworki Apple. To, co napędza, jest z założenia odrębne — Ollama, FFmpeg i wagi LTX-2.5 to lokalne narzędzia, które silniki wywołują, a każdy silnik podaje, których potrzebuje.",
      },
    ],
  },

  footer: {
    tagline: "Lokalna moc obliczeniowa dla ekosystemu POPOPX. Twoja do uruchomienia, twoja do przeczytania.",
    licenceHeading: "Licencja",
    licenceBody:
      "Kod źródłowy węzła jest na licencji AGPL-3.0-only. Zasoby graficzne, które ten projekt utworzył, są AGPL-3.0-only albo — do Twojego wyboru — CC0-1.0.",
    trademarkHeading: "Znak towarowy",
    trademarkBody:
      "POPOPX, POPOPX Chat oraz logo POPOPX są znakami towarowymi projektu POPOPX Chat. Ikona użyta na tej stronie to niezmieniona ikona aplikacji POPOPX iOS. Zasady znajdziesz w pliku TRADEMARK-POPOPX.md w repozytorium popopx-chat.",
    privacyHeading: "Ta strona",
    privacyBody:
      "Żadnej analityki, żadnych plików cookie, żadnych odcisków palca, żadnych skryptów zewnętrznych ani zewnętrznego CDN. Jedynym wychodzącym żądaniem, które strona potrafi wysłać, jest pytanie do api.github.com o listę zasobów wydania, a gdy ono zawiedzie, strona sięga do na stałe przypisanego linku.",
    appleNotice:
      "Projekt nie jest powiązany z Apple. macOS, iOS, Apple Silicon oraz Metal są znakami towarowymi Apple Inc.",
    sourceRepo: "Kod źródłowy Mac Node",
    iosRepo: "Kod źródłowy klienta iOS",
    backToTop: "Wróć na górę",
  },
};

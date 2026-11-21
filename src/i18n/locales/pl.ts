import type { Dictionary } from "../types";

export const pl: Dictionary = {
  dir: "ltr",

  nav: {
    engines: "Silniki",
    architecture: "Architektura",
    hardware: "Sprzęt",
    install: "Instalacja",
    faq: "Częste pytania",
    github: "GitHub",
    download: "Pobierz",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    chooseLanguage: "Język",
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Twój Mac staje się",
    titleAccent: "warstwą obliczeniową",
    subtitle:
      "POPOPX Mac Node wykonuje lokalne obliczenia i deterministyczne wykonywanie zadań dla dziesięciu silników Discover klienta POPOPX iOS. Żadnej chmury, żadnego konta, żadnej telemetrii, szyfrowanie end-to-end.",
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
      "Zapisz plik .dmg i dołączony do niego plik .sha256 w tym samym folderze, a potem uruchom shasum -a 256 -c na pliku .sha256, a nie na obrazie. Zawiera on jeden skrót i jedną względną nazwę pliku; oczekiwana odpowiedź to POPOPX-Mac-Node-Universal.dmg: OK.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Twój własny sprzęt",
    statStorage: "Fizyczne lokalne przechowywanie danych",
    statIdentity: "Bez konta, bez identyfikatora",
    statSource: "AGPL-3.0 bez wyjątku",
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
          "Dziesięć silników, brama SMP, lokalna konsola internetowa, znakowanie wodne w GOP i w dziedzinie częstotliwości oraz księga punktów obliczeniowych tworzą jedno drzewo kodu źródłowego na licencji AGPL-3.0-only. Nie ma zamkniętego rdzenia: kod poświadczeń oparty na slepych podpisach oraz rejestr parametrów kryptograficznych znajdują się w popopxmq — publicznie dostępne.",
      },
    ],
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
      "Poniżej 48 GB — lekkie wnioskowanie; wymagająca praca z wideo jest przekazywana do Edge Compute Mesh zamiast być renderowana lokalnie.",
    ],
  },

  install: {
    heading: "Trzy minuty i jest Twój",
    sub:
      "Węzeł nie ma instalatora, konta demona ani niczego do zarejestrowania. To jedna aplikacja na pasku menu, która wiąże się z loopback.",
    steps: [
      {
        title: "Zweryfikuj i otwórz DMG",
        body:
          "Pobierz z Releases POPOPX-Mac-Node-Universal.dmg i jego .sha256, oba do tego samego folderu, i sprawdź je, zanim otworzysz cokolwiek: shasum -a 256 -c POPOPX-Mac-Node-Universal.dmg.sha256 musi wypisać OK. Przeciągnij aplikację do /Applications.",
      },
      {
        title: "Wdróż lokalne silniki",
        body:
          "Otwórz pozycję na pasku menu i uruchom kreatora konsoli. Pierwszy krok bada profil układu, pamięci zunifikowanej i dysku SSD, pobiera kwantyzację Qwen3.8 pasującą do poziomu, inicjuje obszar roboczy ltx2 i na bieżąco przesyła dziennik instalacji na stronę.",
      },
      {
        title: "Sparuj iPhonea",
        body:
          "Zeskanuj z konsoli kod QR parowania za pomocą klienta POPOPX iOS. To jedno skanowanie ustanawia most SMP; odtąd konta serwisowe Discover rozmawiają z Twoim węzłem i z niczym więcej.",
      },
      {
        title: "Włącz silniki",
        body:
          "Dziesięć przełączników. Silnik działa tylko wtedy, gdy go włączysz, a te cztery, które nie wymagają lokalnego modelu — blokada fizyczna, sejf z blokadą czasową, tropienie znaku wodnego i czytnik raportów laboratoryjnych — działają, zanim pobierzesz choćby jedną wagę modelu. FFmpeg nadal jest wywoływany; stos modeli już nie.",
      },
    ],
    bridgeTitle: "Steruj silnikami z własnego skryptu",
    bridgeBody:
      "Folder integrations zawiera most TypeScript oraz dwa adaptery agentów. Nie otwiera żadnego nowego portu i nie uruchamia drugiego demona: korzysta z konsoli na 127.0.0.1:18920 i jednorazowego tokenu na proces oraz wysyła tę samą sygnalizację NODE_CMD co telefon. Akcja blokady to podwójny opt-in — allowLockdown musi mieć wartość true, a PPX_BRIDGE_SECRET co najmniej szesnaście znaków — a odmowa jest zapisywana w dzienniku wtyczki, żebyś widział, że nastąpiła.",
    requirementTitle: "Jeden uczciwy warunek wstępny",
    requirementBody:
      "Drugi krok kreatora samego węzła, kod QR parowania i most SMP potrzebują demona czatu popopx-chat w Twojej zmiennej PATH. Węzeł sprawdza dokładnie jeden plik wykonywalny i nie ma żadnej ścieżki awaryjnej, ponieważ build z upstreamu odpowiada na linię z wersją, a potem psuje każde kolejne polecenie. Dziesięć silników samych w sobie tego nie potrzebuje.",
    copyCommand: "Kopiuj polecenie",
    commandCopied: "Skopiowano",
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
        q: "Dlaczego AGPL-3.0 i do czego zobowiązuje mnie artykuł 13?",
        a: "Każdy plik źródłowy węzła jest na licencji AGPL-3.0-only, czyli możesz go swobodnie uruchamiać, badać, modyfikować i dalej rozpowszechniać. Artykuł 13 dodaje klauzulę sieciową: jeśli oferujesz zmodyfikowany węzeł jako usługę innym osobom, musisz im udostępnić odpowiadający mu kod źródłowy. To cały koszt zgodności i właśnie dlatego ten projekt może być wolny w uruchomieniu.",
      },
      {
        q: "Czy znakowanie wodne albo protokół punktów obliczeniowych pozostają zamknięte?",
        a: "Nie — i właśnie to stwierdzenie, jak przewidujemy, będzie sprawdzone najdokładniej. Kod poświadczeń BBS+ i BLS12-381, logika uprawnień oraz rejestr parametrów kryptograficznych są otwarte w popopxmq; znakowanie wodne w GOP i w dziedzinie częstotliwości wraz z jego slepym dekoderm jest w tym repozytorium. Komercyjna ścieżka sprzedaje centrum danych, dyżury, kanał dystrybucji i papierologię zgodności — nigdy nie bramkę do kodu źródłowego.",
      },
      {
        q: "Czy mogę wypuścić forka pod nazwą i logo POPOPX?",
        a: "Nie. Znaki towarowe nie są objęte licencją AGPL-3.0 i nie daje ich żaden poziom wsparcia. Polityka oczekuje jednego środka, który forka nic nie kosztuje: zmień nazwę oprogramowania, zastąp znaki, zachowaj kod. Użycie marki wymaga osobnej pisemnej licencji.",
      },
      {
        q: "Na ile mogę ufać liczbom w tabeli sprzętu?",
        a: "Tyle, ile mówi zdanie pod nią. To rachunki na kopercie, nie pomiary Twojej maszyny, a rzeczywista przepustowość zmienia się dwu- do trzykrotnie wraz z temperaturą i obciążeniem. Wersja 1.1 węzła zastąpi je odczytami tokenów i watów dla każdego silnika, zmierzonymi na maszynie, której faktycznie używasz.",
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

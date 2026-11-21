import type { Dictionary } from "../types";

export const it: Dictionary = {
  dir: "ltr",

  nav: {
    engines: "Motori",
    architecture: "Architettura",
    hardware: "Hardware",
    install: "Installazione",
    faq: "FAQ",
    github: "GitHub",
    download: "Scarica",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    chooseLanguage: "Lingua",
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Il tuo Mac diventa",
    titleAccent: "il livello di calcolo",
    subtitle:
      "POPOPX Mac Node esegue il calcolo locale e l'esecuzione deterministica che stanno dietro ai dieci motori Discover del client POPOPX iOS. Zero cloud, nessun account, nessuna telemetria, cifratura end-to-end.",
    ctaDownload: "Scarica il DMG",
    ctaSource: "Leggi il codice sorgente",
    releaseLabel: "Ultima versione",
    sizeLabel: "Dimensione",
    digestLabel: "SHA-256",
    statusFetching: "Interrogazione di GitHub Releases…",
    statusLive: "In diretta da GitHub Releases",
    statusFallback: "GitHub irraggiungibile — mostriamo la versione fissata",
    copyDigest: "Copia l'impronta",
    digestCopied: "Impronta copiata",
    verifyTitle: "Verifica prima di aprirlo",
    verifyBody:
      "Salva il .dmg e il suo file .sha256 di accompagnamento nella stessa cartella, poi esegui shasum -a 256 -c sul file di accompagnamento, non sull'immagine. Contiene una sola impronta e un solo nome di file relativo; la risposta attesa è POPOPX-Mac-Node-Universal.dmg: OK.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Il tuo hardware",
    statStorage: "Archiviazione locale fisica",
    statIdentity: "Nessun account, nessun ID",
    statSource: "AGPL-3.0 su tutto il codice",
  },

  architecture: {
    heading: "Tre garanzie, nessun servizio nel mezzo",
    sub:
      "La parte interessante di questa architettura è ciò che non c'è: nessun servizio di account, nessun deposito di chiavi, nessun endpoint di analisi, nessuna inferenza ospitata.",
    items: [
      {
        title: "Archiviazione locale fisica",
        body:
          "Ogni artefatto prodotto da un motore — il briefing, la clip con filigrana, l'archivio sigillato, il report decodificato — viene scritto sul tuo SSD sotto un'unica radice dei dati. Sta fuori dalla sincronizzazione iCloud e fuori da qualsiasi container condiviso, e i registri sono scritti con la protezione completa dei file, quindi a riposo non sono leggibili una volta che la macchina è bloccata.",
      },
      {
        title: "Nessun account, nessun ID",
        body:
          "Non c'è alcuna registrazione, nessun numero di telefono, nessun indirizzo email e nessun identificatore del dispositivo da fornire. Abbinare il telefono al nodo è una sola scansione QR, e i comandi che arrivano dopo viaggiano sulla tua coda popopx-chat, con SMP e XFTP che li trasportano end-to-end.",
      },
      {
        title: "AGPL-3.0 su tutta la pila",
        body:
          "I dieci motori, il gateway SMP, la console web locale, la filigrana in GOP e nel dominio delle frequenze e il registro dei punti di calcolo formano un unico albero di sorgenti AGPL-3.0-only. Non esiste un nucleo chiuso: il codice delle credenziali a firma cieca e il registro crittografico stanno in popopxmq, in aperto.",
      },
    ],
  },

  engines: {
    heading: "Dieci motori sovrani",
    sub:
      "Tre scaffali e dieci account di servizio ufficiali. Ogni scheda qui sotto riporta il proprio prezzo: un numero fisso di Compute Credits per un ciclo di 30 giorni oppure, per Edge Compute Mesh, un saldo per singolo lavoro con una commissione di protocollo del 10%. Ognuno di essi viene eseguito su hardware che possiedi già.",
    filterAll: "Tutti",
    substrateLabel: "Sottostrato",
    quickMenuLabel: "Menu rapido iOS",
    quickMenuHint:
      "Ogni pulsante invia ::popopx_sys::NODE_CMD::<service>::<action>::{} al tuo nodo abbinato.",
    deterministicBadge: "Deterministico — nessun modello nel percorso",
    modelBadge: "Modello locale nel ciclo",
    offlineBadge: "Funziona senza pesi di modello locali",
    openDetails: "Apri",
    closeDetails: "Chiudi",
    shelfCount: "motori",
    creditsUnit: "Compute Credits",
  },

  hardware: {
    heading: "Il livello segue la memoria",
    sub:
      "All'avvio il nodo legge sysctl — modello del chip, numero di core CPU, memoria unificata fisica, SSD libero — e sceglie da solo il livello. Sposta l'app su un altro Mac e il livello si sposta con essa; non c'è nulla da riconfigurare.",
    columns: [
      "Memoria unificata",
      "Chip tipico",
      "Modello di testo",
      "Modello video",
      "Primo token*",
      "Throughput*",
      "Picco residente*",
      "Modalità",
    ],
    modes: {
      lightweight: "Inferenza leggera",
      balanced: "Bilanciato",
      full: "Pesi completi",
    },
    footnote:
      "* Queste tre colonne sono stime ingegneristiche, non misurazioni di laboratorio. Derivano dalla decodifica limitata dalla banda di memoria di un modello denso 27B, più una lettura del rapporto di quantizzazione dell'impronta dei pesi di LTX-2.5. Le temperature sostenute, la generazione del chip, il carico in background, la durata delle clip e i lavori concorrenti spostano i numeri reali di due o tre volte. Usale per scegliere un livello, non come una promessa di prestazioni.",
    rules: [
      "96 GB e oltre — pesi BF16 originali di LTX-2.5 con Qwen3.8-27B in Q8_0.",
      "Da 48 a 95 GB — LTX-2.5 MLX quantizzato in 8-bit con Qwen3.8-27B in Q4_K_M.",
      "Sotto 48 GB — inferenza leggera; i lavori video pesanti vengono proposti a Edge Compute Mesh invece di essere renderizzati in locale.",
    ],
  },

  install: {
    heading: "Tre minuti, poi è tuo",
    sub:
      "Il nodo non ha un programma di installazione, non ha un account demone e non c'è nulla da registrare. È una sola app della barra dei menu che si lega a loopback.",
    steps: [
      {
        title: "Verifica e apri il DMG",
        body:
          "Prendi POPOPX-Mac-Node-Universal.dmg e il suo .sha256 da Releases, entrambi nella stessa cartella, e controllali prima di aprire qualsiasi cosa: shasum -a 256 -c POPOPX-Mac-Node-Universal.dmg.sha256 deve stampare OK. Trascina l'app in /Applications.",
      },
      {
        title: "Distribuisci i motori locali",
        body:
          "Apri la voce della barra dei menu e avvia la procedura della console. Il primo passo profila il chip, la memoria unificata e l'SSD, scarica la quantizzazione di Qwen3.8 adatta al livello, inizializza l'area di lavoro ltx2 e trasmette il log di installazione alla pagina mentre l'installazione procede.",
      },
      {
        title: "Abbina l'iPhone",
        body:
          "Scansiona dalla console il QR di abbinamento con il client POPOPX iOS. Quella singola scansione stabilisce il ponte SMP; da allora in poi gli account di servizio Discover parlano con il tuo nodo e nient'altro.",
      },
      {
        title: "Accendi i motori",
        body:
          "Dieci interruttori. Un motore funziona solo se lo abiliti, e i quattro che non hanno bisogno di un modello locale — il lockdown fisico, il caveau con blocco a tempo, il tracciatore di filigrana, il lettore di referti — funzionano prima che venga scaricato anche un solo peso. FFmpeg viene comunque chiamato; la pila dei modelli no.",
      },
    ],
    bridgeTitle: "Guida i motori dal tuo script",
    bridgeBody:
      "La cartella delle integrazioni include un ponte TypeScript e due adattatori per agenti. Non apre nuove porte e non avvia un secondo demone: riusa la console su 127.0.0.1:18920 e il token monouso per processo, e invia la stessa segnaletica NODE_CMD che invia il telefono. L'azione di lockdown richiede una doppia adesione — allowLockdown deve essere true e PPX_BRIDGE_SECRET deve avere almeno sedici caratteri — e un rifiuto viene scritto nel log dei plugin, così puoi vedere che è avvenuto.",
    requirementTitle: "Un solo prerequisito, detto onestamente",
    requirementBody:
      "Il secondo passo della procedura del nodo stesso, il QR di abbinamento e il ponte SMP richiedono un demone chat popopx-chat nel tuo PATH. Il nodo verifica un unico eseguibile e non ha alternativa, perché una build upstream risponde a una riga di versione e poi fallisce ogni comando successivo. I dieci motori in sé non ne hanno bisogno.",
    copyCommand: "Copia il comando",
    commandCopied: "Copiato",
  },

  faq: {
    heading: "Le domande che fanno davvero",
    sub: "Risposte brevi, lasciando in vista la parte che non possiamo garantire.",
    items: [
      {
        q: "Qualcosa di tutto questo gira sui vostri server?",
        a: "No. I comandi per i dieci motori arrivano dal client iOS sulla tua coda popopx-chat, cifrati end-to-end, e l'inferenza, il rendering, l'archiviazione e l'esecuzione fisica si svolgono tutti sul tuo Mac. Nemmeno un passo ha bisogno della nostra infrastruttura, e nel nodo non esiste alcun percorso di codice che raggiunga una API di inferenza ospitata: il client del modello è fissato a 127.0.0.1.",
      },
      {
        q: "Cosa devo registrare?",
        a: "Niente. Non c'è alcun account, alcun numero di telefono, alcun indirizzo email e nessun identificatore pubblicitario in nessun punto del prodotto. Abbinare il telefono al nodo è una scansione QR, e la console web si lega solo a loopback, rinnova un token casuale a ogni avvio e non è raggiungibile dal resto della tua LAN.",
      },
      {
        q: "Perché AGPL-3.0, e cosa mi obbliga a fare la sezione 13?",
        a: "Ogni file sorgente del nodo è AGPL-3.0-only, quindi puoi eseguirlo, studiarlo, modificarlo e ridistribuirlo liberamente. La sezione 13 aggiunge la clausola di rete: se offri un nodo modificato come servizio ad altre persone, devi offrire loro il sorgente corrispondente. È tutto il costo di conformità, ed è ciò che permette al progetto di restare libero da eseguire.",
      },
      {
        q: "La filigrana o il protocollo dei punti di calcolo restano chiusi?",
        a: "No, e questa affermazione è quella che più ci aspettiamo venga verificata. Il codice delle credenziali BBS+ e BLS12-381, la logica dei diritti e il registro dei parametri crittografici sono aperti in popopxmq; la filigrana in GOP e nel dominio delle frequenze, con il suo decodificatore cieco, è in questo repository. Ciò che vende la linea commerciale sono il datacenter, il turno di reperibilità, il canale di distribuzione e la documentazione di conformità, mai una barriera sul codice sorgente.",
      },
      {
        q: "Posso pubblicare un fork con il nome e il logo POPOPX?",
        a: "No. I marchi non sono concessi in licenza da AGPL-3.0 e nessun livello di supporto li concede. La policy chiede l'unico rimedio che non costa nulla a un fork: rinomina il software, sostituisci i marchi, conserva il codice. L'uso del brand richiede una licenza scritta separata.",
      },
      {
        q: "Quanto devo fidarmi dei numeri nella tabella hardware?",
        a: "Quanto dice la frase qui sotto. Sono cifre calcolate approssimativamente, non misure della tua macchina, e il throughput reale si sposta di due o tre volte con temperature e carico. La versione 1.1 del nodo le sostituisce con letture di token e watt per motore, misurate sulla macchina che stai usando davvero.",
      },
      {
        q: "Quali macchine sono supportate?",
        a: "macOS 14 o successivo su Apple Silicon. La scala dei livelli, Metal e MLX danno tutti per scontata la memoria unificata, e MLX non gira su Intel, quindi un Mac Intel non è un host su cui questo progetto punta, anche se il DMG Universal porta ancora una fetta x86_64. L'app in sé non collega alcuna libreria di terze parti: solo framework Apple. Ciò che pilota è separato per progettazione: Ollama, FFmpeg e i pesi di LTX-2.5 sono strumenti locali che i motori chiamano, e ogni motore indica quali gli servono.",
      },
    ],
  },

  footer: {
    tagline: "Calcolo locale per l'ecosistema POPOPX. Tuo da eseguire, tuo da leggere.",
    licenceHeading: "Licenza",
    licenceBody:
      "Il sorgente del nodo è AGPL-3.0-only. Le risorse grafiche create da questo progetto sono AGPL-3.0-only o, a tua scelta, CC0-1.0.",
    trademarkHeading: "Marchio",
    trademarkBody:
      "POPOPX, POPOPX Chat e il logo POPOPX sono marchi del progetto POPOPX Chat. L'icona usata su questo sito è l'icona dell'app POPOPX iOS non modificata. Vedi TRADEMARK-POPOPX.md nel repository popopx-chat per la policy.",
    privacyHeading: "Questa pagina",
    privacyBody:
      "Nessun sistema di analisi, nessun cookie, nessun rilevamento dell'impronta, nessuno script di terze parti e nessun CDN esterno. L'unica richiesta in uscita che la pagina può fare è verso api.github.com per l'elenco dei file della versione, e ripiega su un link fisso quando quella chiamata fallisce.",
    appleNotice:
      "Non affiliato ad Apple. macOS, iOS, Apple Silicon e Metal sono marchi di Apple Inc.",
    sourceRepo: "Sorgente di Mac Node",
    iosRepo: "Sorgente del client iOS",
    backToTop: "Torna in cima",
  },
};

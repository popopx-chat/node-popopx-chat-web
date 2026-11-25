import type { Dictionary } from "../types";

export const it: Dictionary = {
  dir: "ltr",

  nav: {
    overview: "Panoramica",
    node: "Cos'è un nodo",
    features: "Capacità",
    install: "Installazione e configurazione",
    security: "Riservatezza e controllo",
    troubleshooting: "Risoluzione dei problemi",
    releases: "Versioni e GitHub",
    download: "Scarica il nodo",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    chooseLanguage: "Lingua",
  },

  ecosystem: {
    heading: "Il resto di POPOPX",
    body:
      "Tre portali, un progetto, e tutti nostri. Nulla in questa pagina carica qualcosa da loro e nessuna richiesta viene mai inviata loro: si lascia node.popopx.chat solo se si clicca.",
    chat: "POPOPX Chat",
    chatBody:
      "La rete di messaggistica in sé — end-to-end, nessun ID globale, e la coda su cui il tuo nodo ascolta.",
    botStudio: "Bot Studio",
    botStudioBody:
      "Dove gli account di servizio dietro i dieci motori vengono scritti e ospitati, su un server che controlli tu.",
    serviceSuite: "Account di servizio",
    serviceSuiteBody:
      "L'ecosistema di canali cifrati a conoscenza zero a cui parlano quei motori.",
  },

  routes: {
    "/": {
      eyebrow: "PANORAMICA",
      title: "POPOPX Mac Node — il tuo Mac esegue i dieci motori",
    },
    "/node": {
      eyebrow: "COS'È UN NODO",
      title: "Cosa è un nodo, e cosa non è — POPOPX Mac Node",
    },
    "/features": {
      eyebrow: "CAPACITÀ",
      title: "Dieci motori locali e l'hardware che li esegue — POPOPX Mac Node",
    },
    "/install": {
      eyebrow: "INSTALLAZIONE E CONFIGURAZIONE",
      title: "Installa, abbina, aggiorna, backup, rimuovi — POPOPX Mac Node",
    },
    "/security": {
      eyebrow: "RISERVATEZZA E CONTROLLO",
      title: "Cosa resta sul tuo disco, e come fermarlo — POPOPX Mac Node",
    },
    "/troubleshooting": {
      eyebrow: "RISOLUZIONE DEI PROBLEMI",
      title: "Porte, firewall e limiti di memoria — POPOPX Mac Node",
    },
    "/releases": {
      eyebrow: "VERSIONI E SORGENTE",
      title: "Versioni, impronte e tutto l'albero sorgente — POPOPX Mac Node",
    },
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Il tuo dispositivo. Il tuo nodo.",
    titleAccent: "Il tuo controllo.",
    subtitle:
      "POPOPX Mac Node è il bordo della rete che possiedi. Esegue sul tuo Mac, accanto a POPOPX Chat e a Bot Studio, i motori di modelli locali, media e file che stanno dietro ai dieci servizi Discover. La rete ritrasmette i tuoi messaggi cifrati; l'inferenza, il rendering, l'archivio sigillato e i segreti restano su hardware che hai comprato tu.",
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
      "Salva l'immagine e il file delle impronte della versione nella stessa cartella e controllali prima di aprire qualsiasi cosa. Il file delle impronte cambia per versione — le versioni più nuove pubblicano un manifest SHA256SUMS.txt, le più vecchie un .sha256 a un solo file — quindi Versioni e GitHub stampa i due comandi esatti per la versione che stai guardando.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Il tuo hardware",
    statStorage: "Artefatti sul tuo SSD",
    statIdentity: "Nessun account, nessun ID",
    statSource: "AGPL-3.0 su tutto il codice",
  },

  overview: {
    splitHeading: "La rete coordina. La tua macchina esegue.",
    splitSub:
      "È tutta qui l'idea, e vale la pena dirla esattamente, perché la lettura abituale di un prodotto così è rovesciata: il cloud non fa il lavoro e il tuo Mac non è un thin client. Ciascuna parte fa solo la parte che le compete.",
    cloudTitle: "Cosa trasporta la rete",
    cloudBody:
      "I relay SMP e l'archiviazione XFTP spostano i tuoi messaggi e i tuoi file end-to-end tra i tuoi dispositivi, e i dieci account di servizio Discover inviano un segnale ciascuno. Un relay vede testo cifrato e metadati di instradamento. Non riceve mai un modello, un prompt, un frame o un nome di file, e non esegue nessuna parte di nessun motore.",
    macTitle: "Cosa fa il tuo Mac",
    macBody:
      "Il nodo prende quel segnale e fa il lavoro sulla macchina che hai davanti: inferenza quantizzata tramite Ollama su loopback, rendering LTX-2.5 tramite MLX, FFmpeg e filigrana GOP, sigillatura CryptoKit e caveau a catena di hash, diskutil e AppKit per le azioni fisiche. Poi scrive il risultato sul tuo disco.",
    pathsHeading: "Parti da dove sei davvero",
    paths: [
      {
        title: "Capire la divisione",
        body:
          "Cosa è un nodo, l'unica riga su cui ascolta, come un telefono ottiene il permesso di pilotarlo, e quali porte sono coinvolte.",
      },
      {
        title: "Metterlo su un Mac",
        body:
          "Prerequisiti, DMG verificato, costruzione dal sorgente, primo abbinamento, aggiornamenti, passaggio a un'altra macchina e rimozione completa.",
      },
      {
        title: "Controllare cosa esce",
        body:
          "Il rendiconto della radice dei dati cartella per cartella, cosa viene rinviato al telefono, dove vivono le chiavi, e come fermare o revocare.",
      },
      {
        title: "Riparare cosa si è rotto",
        body:
          "I guasti che capitano davvero: una porta già occupata, un modello che non ha mai risposto, pesi saltati, un codice scaduto.",
      },
    ],
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

  node: {
    heading: "Un nodo è un computer che possiedi già",
    sub:
      "Non una regione, non un tipo di istanza, non un livello di abbonamento. Un solo Mac che esegue le parti di POPOPX che non dovrebbero accadere da qualche altra parte — e l'unica cosa a cui devi fidarti è la macchina a cui già affidi i tuoi file.",
    points: [
      {
        title: "Il lavoro sensibile non esce mai",
        body:
          "I referti medici sono analizzati da Vision sulla tua macchina. Il girato grezzo viene tagliato e marchiato con filigrana in locale. La sigillatura del caveau e l'archivio sigillato sono operazioni CryptoKit sul tuo disco. Niente in questi percorsi ha un endpoint ospitato da chiamare.",
      },
      {
        title: "La distanza è zero",
        body:
          "L'inferenza avviene su memoria unificata accanto al processo che l'ha chiesta. Il client del modello è fissato a 127.0.0.1:11434, ed è per questo che nel nodo non esiste alcun percorso di codice che possa raggiungere una API di inferenza ospitata nemmeno per errore: prima dovrebbe cambiare il letterale dell'host.",
      },
      {
        title: "L'hai già pagato",
        body:
          "I punti di calcolo misurano i cicli spesi dal tuo hardware, e Edge Compute Mesh è l'unico motore che presta capacità in eccesso invece di prenderla in prestito. Il livello che ottieni è una funzione della memoria che hai comprato.",
      },
      {
        title: "Il permesso è per dispositivo",
        body:
          "Un solo codice di abbinamento firmato, monouso, della durata di quindici minuti, autorizza un dispositivo. La console elenca ciò che è abbinato, e revocarlo è un pulsante — con un'unica avvertenza onesta su cosa quel pulsante non fa, trattata nella pagina sulla riservatezza.",
      },
    ],
    wireHeading: "Una riga, tre segmenti",
    wireBody:
      "Un comando dal telefono è un messaggio ordinario sulla tua coda popopx-chat, e dentro c'è una sola riga marcatore: un prefisso, l'identificatore del motore, l'azione e un payload JSON. Il parser separa sul primo separatore soltanto, quindi un payload che contiene il separatore sopravvive intatto, e una riga il cui identificatore del motore è sconosciuto, il cui payload è vuoto, o il cui payload supera il limite che la parte iOS accetta, viene scartata invece di essere eseguita a metà.",
    wireSampleLabel: "L'unica forma accettata",
    pairingHeading: "L'abbinamento, nell'ordine in cui accade davvero",
    pairingSub:
      "Il nodo conia una credenziale, la mostri al telefono una volta, e la credenziale dopo non vale più nulla. Non viene memorizzato nulla su un server, perché non c'è alcun server che potrebbe memorizzarlo.",
    pairingSteps: [
      {
        title: "Il nodo offre",
        body:
          "Dalla barra dei menu o dalla console, il nodo scrive un'offerta, firma il corpo con la sua chiave Ed25519 — quella in pairing/node.key sotto la sua radice dei dati — e la renderizza come QR code in locale tramite CoreImage. Nessuna immagine lascia la macchina.",
      },
      {
        title: "Il telefono la riscatta",
        body:
          "POPOPX iOS scansiona il codice, e il contatto che ne risulta è la chiave del dispositivo. Quella singola scansione stabilisce il ponte SMP; da allora in poi gli account di servizio Discover parlano con il tuo nodo e con nient'altro.",
      },
      {
        title: "L'offerta muore",
        body:
          "Il primo riscatto segna l'offerta come usata. Generare un nuovo codice ritira il precedente, quindi un QR fotografato non è un invito permanente — scade da solo dopo quindici minuti anche se nessuno lo scansiona mai.",
      },
    ],
    pairingFacts: {
      lifetime: "Validità dell'offerta",
      singleUse: "Riscatto",
      signature: "Firmata da",
      delivery: "Renderizzato come",
    },
    portsHeading: "Il lato in ascolto del nodo",
    portsSub:
      "Il nodo in sé apre una porta. Le altre due appartengono a programmi che avvia e a cui si connette come client, il che conta quando leggi il log di un firewall: una connessione verso 11434 o 5225 l'ha fatta il nodo, non l'ha accettata.",
    portsColumns: ["Porta", "Occupata da", "Indirizzo", "Protocollo", "Cosa la sorveglia"],
    portsOwner: {
      node: "Il nodo",
      tool: "Ollama",
      daemon: "popopx-chat",
    },
    portsPurpose: {
      console: "Console web e flusso di log dei motori",
      inference: "Inferenza di modelli locali",
      control: "Socket di controllo del demone chat",
    },
    portsFootnote:
      "Tutte e tre sono loopback. La console è HTTP semplice senza TLS, il che è una progettazione ragionevole solo perché non lascia mai la macchina: i tentativi di bind su 0.0.0.0, un indirizzo LAN o un nome host vengono rifiutati prima che venga creato un socket, e l'indirizzo è scritto nel codice dell'app invece di essere letto da un file di configurazione. Ciò che la sorveglia, invece, è un token casuale di ventiquattro byte emesso a ogni avvio, inviato come X-PPX-Token, tenuto solo in memoria e morto quando il processo esce. Il socket di controllo del demone chat non ha alcuna autenticazione — questa è la sua descrizione onesta — ed è sicuro solo finché resta su 127.0.0.1.",
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
      "Sotto 48 GB — un modello 9B in Q4_K_M, solo render brevi, il video pesante viene proposto a Edge Compute Mesh.",
    ],
    plansHeading: "Cosa dispiega davvero ciascun livello",
    plansSub:
      "La tabella sopra è la guida che leggi prima di comprare. Questa è ciò che il nodo scrive per sé dopo aver misurato la macchina, direttamente dalla funzione di raccomandazione, incluso il tag del modello che scarica.",
    plansColumns: [
      "Banda di memoria",
      "Modello di testo",
      "Pila video",
      "Limite residente",
      "Video pesante",
      "Comando pull",
    ],
    heavyVideo: {
      local: "Renderizzato qui",
      mesh: "Proposto al mesh",
    },
    plansFootnote:
      "Il limite residente è una regola aritmetica sulla memoria misurata, non un benchmark: ogni livello sottrae un margine fisso per la sessione desktop dalla memoria unificata trovata, con un tetto perché una macchina molto grande non prometta più di quanto la pila richieda. I tag dei modelli e le quantizzazioni sono le stringhe che il nodo passa davvero a Ollama.",
  },

  install: {
    heading: "Un DMG, una scansione, dieci interruttori",
    sub:
      "Il nodo non ha un programma di installazione, non ha un account demone e non c'è nulla da registrare. È una sola app della barra dei menu che si lega a loopback, e il primo avvio fa la profilatura da sé.",
    prereqsHeading: "Prima di scaricare",
    prereqNotes: {
      system: "Il pacchetto è destinato a macOS 14 e l'app è un agente della barra dei menu.",
      memory:
        "Metal, MLX e tutta la scala dei livelli danno per scontata la memoria unificata. Il DMG porta una fetta x86_64, ma nessuna parte della pila è regolata per Intel.",
      disk:
        "I pesi dei modelli vengono rifiutati finché lo spazio libero è pari o inferiore a 40 GB, quindi il tetto della scala è anche quello del tuo disco.",
      media:
        "Cinque dei dieci motori chiamano FFmpeg. La procedura di installazione può portarlo lì con Homebrew.",
      inference:
        "Ollama per i modelli di testo quantizzati, l'area di lavoro LTX-2.5 MLX per il video. Sono strumenti locali; nessuno dei due è un servizio.",
      bridge:
        "Serve solo per il passo di abbinamento SMP e per il percorso pilotato dal telefono. I motori in sé girano anche senza.",
    },
    prereqRequired: {
      hard: "Obbligatorio",
      wizard: "Lo installa la procedura",
      optional: "Solo per l'abbinamento",
    },
    steps: [
      {
        title: "Verifica e apri il DMG",
        body:
          "Metti POPOPX-Mac-Node-Universal.dmg e il file delle impronte della versione nella stessa cartella e controllali prima di aprire qualsiasi cosa; Versioni e GitHub stampa i due comandi per la versione corrente. Trascina POPOPX Mac Node.app in /Applications. La build pubblicata porta una firma Developer ID e un ticket di notarizzazione allegato, quindi Gatekeeper la accetta senza aiuto — spctl -a -vv -t install risponde accepted with source=Notarized Developer ID. Una build che fai tu è firmata in via ad hoc, e quella sì che vuole un clic destro con Apri la prima volta.",
      },
      {
        title: "Lascialo profilare la macchina",
        body:
          "Avvialo e apri la console dalla barra dei menu. Il primo passo legge chip, numero di core, memoria unificata e SSD libero da sysctl, stampa il livello che ha scelto e il tag del modello che quel livello implica, e mostra i numeri che ha campionato invece di quelli che hai dichiarato tu.",
      },
      {
        title: "Distribuisci i motori locali",
        body:
          "La procedura scorre l'elenco in ordine: Homebrew, FFmpeg, uv, Ollama, la quantizzazione di Qwen adatta al tuo livello, l'area di lavoro LTX-2.5, poi un autocontrollo. Il log di installazione viene trasmesso alla pagina della console mentre l'installazione procede, e viene scritto in logs/install.log, così un fallimento si può leggere dopo.",
      },
      {
        title: "Abbina l'iPhone",
        body:
          "Genera il QR di abbinamento — dalla console, o dalla voce di nuovo codice nella barra dei menu — e scansionarlo con il client POPOPX iOS. Il codice è firmato, monouso e scade in quindici minuti. Il dispositivo appare nell'elenco dei dispositivi abbinati della console con il suo modello, il suo orario di abbinamento e la sua ultima comparsa.",
      },
      {
        title: "Accendi i motori",
        body:
          "Dieci interruttori nella barra dei menu e nella console. Un motore funziona solo se lo abiliti, e i quattro che non hanno bisogno di un modello locale — il lockdown fisico, il caveau con blocco a tempo, il tracciatore di filigrana, il lettore di referti — funzionano prima che venga scaricato anche un solo peso. FFmpeg viene comunque chiamato; la pila dei modelli no.",
      },
    ],
    buildHeading: "Oppure costruiscilo dallo stesso tag",
    buildBody:
      "Le immagini di rilascio sono confezionate dall'albero che puoi scaricare. swift build, swift test, swift build -c release, poi bash Scripts/build_dmg.sh --output dist --version v1.0.2 scrive il DMG universale, lo firma in via ad hoc ed emette il file di accompagnamento insieme. Il file pubblicato viene dall'altro script: Scripts/build-release.sh aggiunge la firma Developer ID, la sottomissione alla notarizzazione e lo ZIP, ed è per questo che un'immagine scaricata passa spctl mentre la tua build no. Entrambi girano solo su macOS, perché sono fatti di hdiutil e codesign.",
    lifecycleHeading: "Dopo il primo avvio",
    lifecycle: [
      {
        title: "Aggiornare",
        body:
          "Non c'è un aggiornatore e non c'è alcun controllo degli aggiornamenti — un'altra cosa di cui il nodo non telefona a casa. L'aggiornamento è un trascina: scarica il DMG più recente, verificalo e sostituisci l'app in /Applications. Impostazioni, stato di abbinamento, chiave del nodo, caveau e ogni artefatto vivono sotto Application Support invece che dentro il bundle, quindi un'app sostituita eredità la macchina su cui arriva.",
      },
      {
        title: "Backup e cambio di macchina",
        body:
          "L'app marca la sua radice dei dati come esclusa da Time Machine, il che protegge i tuoi backup dai pesi dei modelli e tiene una sorpresa fuori dal tuo ripristino. Significa anche che la cartella non è nel tuo backup. Per spostare un nodo, chiudilo con Quit, copia ~/Library/Application Support/PopopxMacNode allo stesso percorso sul nuovo Mac e lascialo riprofiliare: il livello può cambiare, e pairing/node.key viene via con la cartella, che è tutta la ragione per cui la copia deve essere privata quanto l'originale.",
      },
      {
        title: "Rimuoverlo del tutto",
        body:
          "Disattiva prima Launch at Login, poi Quit dalla barra dei menu — chiude l'ascoltatore e libera la voce di login. Elimina /Applications/POPOPX Mac Node.app, poi la radice dei dati in ~/Library/Application Support/PopopxMacNode se vuoi che anche il caveau sigillato, i registri e gli artefatti spariscano. Non c'è un disinstallatore e non c'è alcuna traccia da dimenticare: fuori da quei due percorsi non è mai stato installato nulla, e non esiste alcuna voce del Portachiavi perché l'app non usa mai il Portachiavi.",
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

  security: {
    heading: "Cosa resta, cosa esce, e come fermarlo",
    sub:
      "Una pagina sulla riservatezza che elenca solo ciò che resta locale è una pagina di marketing. Questa elenca anche il traffico, perché la versione onesta di “i tuoi dati non lasciano mai il dispositivo” è più lunga e più utile dello slogan.",
    localHeading: "Resta sul tuo disco",
    localSub:
      "Sotto un'unica radice dei dati, in una cartella che l'app crea ed esclude da Time Machine, con i segreti scritti atomicamente in modalità 0600 e con la protezione completa dei file.",
    localItems: [
      {
        title: "Ogni artefatto",
        body:
          "Le clip renderizzate, i briefing, le esportazioni con filigrana, gli archivi sigillati, i report decodificati e gli input in quarantena finiscono tutti sotto la radice dei dati e ci restano. Il nodo tiene una outbox solo per i risultati che aspettano che il telefono torni in rete.",
      },
      {
        title: "I modelli e i loro pesi",
        body:
          "La quantizzazione di Qwen sta nel deposito di Ollama; i pesi di LTX-2.5 stanno nella cartella engines del nodo. Sono file locali su disco locale, scaricati una volta sola, e lo scaricamento è rifiutato finché lo spazio libero è pari o inferiore a 40 GB.",
      },
      {
        title: "Chiavi e stato di abbinamento",
        body:
          "La chiave di firma Ed25519 del nodo, l'elenco dei dispositivi abbinati e l'offerta corrente sono file semplici sotto pairing/. Non c'è alcuna voce del Portachiavi da migrare, alcun backup cloud della chiave e alcun deposito presso terzi da nessuna parte — il che ha due facce, come dice il paragrafo sulla perdita qui sotto.",
      },
      {
        title: "La traccia delle prove",
        body:
          "I registri di lockdown e di mesh sono accresciuti localmente con catena di hash, e il log di audit registra cosa è stato eseguito, su quale motore, con quale esito. È scritto perché tu lo legga: logs/node.log è la risposta più rapida a “cosa ha fatto questa cosa alle 03:14”.",
      },
    ],
    transitHeading: "Lascia la macchina",
    transitSub:
      "Quattro cose lo fanno, e ognuna di esse è o un tuo dispositivo o qualcosa che hai configurato. Non c'è una quinta categoria, e non c'è un endpoint di analisi a cui inviare qualcosa.",
    transitItems: [
      {
        title: "I risultati, indietro al tuo telefono",
        body:
          "Un lavoro finito riporta una carta di al massimo 1024 caratteri più un messaggio per ogni file artefatto, sulla tua coda popopx-chat con SMP che ritrasmette e XFTP che trasporta. Il relay vede testo cifrato. Se il telefono è offline il risultato attende in outbox/ e riprova fino a trenta giorni.",
      },
      {
        title: "I feed che gli hai chiesto di leggere",
        body:
          "Morning TV recupera le fonti RSS che hai configurato, con un tetto di tre megabyte per risposta, ed è una normale richiesta HTTPS in uscita verso chi ospita i tuoi feed.",
      },
      {
        title: "Un webhook che hai configurato",
        body:
          "Il lockdown fisico può inviare un POST con un evento firmato a un endpoint di domotica o di presenza. È best effort, è opt-in, e l'URL è il tuo — il nodo non ha alcuna destinazione predefinita.",
      },
      {
        title: "Installazioni e scaricamenti di modelli",
        body:
          "La procedura scarica formule Homebrew, FFmpeg, uv, Ollama e la quantizzazione che hai scelto. Quel traffico è lo scopo di un passo di installazione, e accade una volta sola, davanti a te, con il log sullo schermo.",
      },
    ],
    keysHeading: "Dove vivono davvero i segreti",
    keysBody:
      "Non nel Portachiavi. Il nodo è un'app macOS senza alcuna dipendenza dal Portachiavi, e questa è una decisione, non una dimenticanza: il materiale di abbinamento e del caveau sono file sotto la sua radice dei dati, scritti con una scrittura atomica, modalità POSIX 0600 e protezione completa dei file, quindi a riposo non sono leggibili mentre la macchina è bloccata. La rinuncia che fai è reale — i permessi dei file sono verificabili e portabili, e sono anche nulla tra il tuo account utente e un lettore che ha già il tuo account utente. Tratta la radice dei dati per il segreto che è: non è in Time Machine, ed è l'unica copia della chiave del nodo che esiste.",
    dataNote: {
      output:
        "Gli artefatti generati, e la coda di outbox che tiene i risultati in attesa del telefono.",
      vault: "Gli archivi sigillati con blocco a tempo e il materiale successorio che li apre.",
      pairing:
        "La chiave Ed25519 del nodo, l'elenco dei dispositivi abbinati e l'offerta monouso corrente.",
      weights: "I pesi dei modelli e l'area di lavoro LTX-2.5 MLX che i motori video chiamano.",
      ledger: "I registri di lockdown e di mesh, accresciuti con catena di hash.",
      logs: "Il log di installazione e il log di audit, scritti perché l'operatore li legga.",
      config:
        "Impostazioni, interruttori dei motori e la configurazione che il ponte e le integrazioni condividono.",
    },
    rootLabel: "Radice dei dati",
    controlHeading: "La tua parte dell'interruttore di spegnimento",
    controlSub:
      "Quattro comandi, tutti locali, tutti visibili nell'app invece di essere sepolti in una schermata di impostazioni. Nessuno ha bisogno della rete, ed è ciò che li fa funzionare quando il problema è la rete.",
    controls: [
      {
        title: "Fermare un motore",
        body:
          "Dieci interruttori indipendenti nella barra dei menu e nella console. Spegnere uno ha effetto sul comando successivo, e un comando per un motore disabilitato viene rifiutato invece di essere accodato.",
      },
      {
        title: "Smettere di prestare cicli",
        body:
          "Pause Mesh Sharing toglie il nodo dal pool di edge compute immediatamente; la barra dei menu riporta Paused e il nodo smette di accettare lavori. È l'unico comando con la parola pause dentro, e riguarda la capacità del mesh, non il nodo intero.",
      },
      {
        title: "Bruciare il codice di abbinamento corrente",
        body:
          "New Pairing QR ritira l'offerta in corso e ne conia una nuova. Chiunque abbia la fotografia del vecchio codice ha una firma scaduta, non una seconda possibilità.",
      },
      {
        title: "Fermare tutto",
        body:
          "Quit è il vero interruttore di emergenza: chiude l'ascoltatore loopback, libera la voce di login e fa cadere il token per avvio insieme al processo. Un nodo che non gira non risponde a niente, a nessuno, su niente.",
      },
    ],
    revokeHeading: "E revocare un dispositivo",
    revokeBody:
      "L'elenco dei dispositivi abbinati della console ha un pulsante Revoke su ogni riga. Segna quel dispositivo come revocato, rimuove la sua mappatura di contatto e scarta i suoi comandi da allora in poi — ma non abbatte la connessione SMP, e l'app lo dice nello stesso messaggio che ti mostra. Per finire il lavoro, elimina il contatto nel client di messaggistica. Tutto ciò che è già stato scritto sul tuo disco resta sul tuo disco; la revoca ferma i comandi futuri, non è una cancellazione da remoto, e il nodo non ha mai avuto una capacità di cancellazione da remoto da rimuovere.",
    limitsHeading: "Cosa questa pagina non prometterà",
    limitsBody:
      "La distruzione sicura è una riscrittura casuale, una sync e un unlink. Su APFS un file modificato viene scritto su nuovi blocchi e l'SSD rimappa quelli logici, quindi questo rimuove il file, manda in fumo gli ordinari strumenti di recupero e non prova che i vecchi byte fisici siano spariti. È il meglio che una API di file in userspace possa fare, e il codice lo dice nel risultato che restituisce. Oltre a questo: nessuna pausa globale se non uscire, nessuna cancellazione da remoto, nessun deposito di chiavi e quindi nessun recupero se perdi la macchina e la radice dei dati insieme, e nessun aggiornatore che si possa convincere a installare qualcosa che non hai chiesto.",
  },

  troubleshooting: {
    heading: "Quando non fa quello che ti aspettavi",
    sub:
      "I guasti che capitano davvero su questa architettura, nell'ordine in cui la gente li incontra. Ognuno dice cosa guardare per primo, perché su una macchina senza lato server il log è sempre il percorso più corto.",
    columns: ["Sintomo", "Cosa sta succedendo", "Cosa fare"],
    items: [
      {
        symptom: "La pagina della console non si apre",
        cause:
          "La porta è fissa a 127.0.0.1:18920 senza alternative, quindi una seconda istanza in esecuzione — o qualunque altra cosa sia arrivata prima — tiene l'ascoltatore. Anche il token è per avvio: una vecchia scheda aperta prima di un riavvio ha una credenziale morta.",
        fix:
          "Cerca un ascoltatore su 18920 e chiudi l'altra istanza, poi usa Open Web Console dalla barra dei menu, che costruisce l'URL corrente con il token corrente invece di uno vecchio.",
      },
      {
        symptom: "Nessuna risposta su 11434",
        cause:
          "I motori che hanno bisogno di un modello parlano con Ollama solo su loopback. Se Ollama non gira, o è stato installato senza la procedura, il motore fallisce invece di ripiegare su qualcosa di ospitato.",
        fix:
          "Avvia Ollama, conferma che OLLAMA_HOST sia loopback e scarica la quantizzazione che la tabella dei livelli nomina per la tua macchina. Il testo dell'errore cita il comando che avrebbe funzionato.",
      },
      {
        symptom: "I pesi non sono mai stati scaricati",
        cause:
          "Il programma di installazione salta gli scaricamenti dei pesi a meno che weightSources sia dichiarato in config/engines.json, e rifiuta del tutto finché lo spazio libero è pari o inferiore a 40 GB.",
        fix:
          "Aggiungi la sorgente che vuoi recuperare, o copia i pesi in engines/weights e punta lì la configurazione. Libera prima il disco; la guardia è una soglia, non un avvertimento.",
      },
      {
        symptom: "Un render è tornato come riga di comando",
        cause:
          "Il lavoro video ha bisogno dell'area di lavoro LTX-2.5 e dei suoi pesi. Senza di essi il motore restituisce l'esatto comando che avrebbe eseguito invece di fingere di aver prodotto un file.",
        fix:
          "Completa il passo dell'area di lavoro nella procedura, o clona l'area di lavoro LTX-2-MLX che nomina, poi riesegui. È deliberato: un successo simulato è peggio di un rifiuto onesto.",
      },
      {
        symptom: "Il codice di abbinamento viene rifiutato",
        cause:
          "Un'offerta è monouso e vive quindici minuti. Una seconda scansione dello stesso codice, o un codice preso da uno schermo la cui immagine ha da allora ruotato, è rifiutata correttamente.",
        fix:
          "Genera un nuovo codice e scansionarlo una volta sola. Se il telefono riprova da solo dopo un successo, il primo riscatto ha già vinto e il rifiuto è la risposta attesa.",
      },
      {
        symptom: "I comandi dal telefono non fanno nulla",
        cause:
          "Il ponte ha bisogno di un demone popopx-chat nel PATH e il nodo verifica un unico eseguibile senza alternativa. La barra dei menu riporta popopx-chat not installed quando manca, e un motore spento non risponde a niente in ogni caso.",
        fix:
          "Leggi prima la riga del ponte nella barra dei menu, poi gli interruttori dei motori, poi il log di audit. Un comando rifiutato e un comando mai arrivato sembrano identici, dal telefono.",
      },
      {
        symptom: "I risultati smettono di arrivare quando il telefono è assente",
        cause:
          "La consegna in uscita passa dal tuo demone e dal tuo relay, quindi un firewall che blocca l'uscita, una VPN che non porta il relay o un demone che è terminato sono tutti uguali, visti da qui. I risultati non sono persi: si accodano in outbox/ e riprovano fino a trenta giorni.",
        fix:
          "Verifica che il demone giri, poi permetti le connessioni in uscita del nodo in ciò che le filtra, poi aspetta che la coda si svuoti invece di rieseguire il lavoro.",
      },
      {
        symptom: "La carta di download dice che mostriamo la versione fissata",
        cause:
          "api.github.com era irraggiungibile, bloccato, limitato nella frequenza, o ha risposto senza un file scaricabile. La pagina allora renderizza la versione compilata nel bundle invece di indovinare.",
        fix:
          "Apri direttamente la pagina delle versioni. Nient'altro nel sito ha bisogno di quella chiamata, e nessuna parte della pagina resta vuota per una chiamata fallita.",
      },
    ],
    escalation:
      "Due file rispondono a gran parte del resto: logs/install.log per tutto ciò che la procedura ha fatto, e logs/node.log per tutto quello che è venuto dopo. Sono testo semplice sotto la radice dei dati, e il canale di log della console mostra gli stessi eventi in diretta. Se un guasto sopravvive alla loro lettura, il contratto che il nodo e le integrazioni verificano entrambi è nel repository, e i problemi vanno aperte su popopx-mac-node.",
  },

  releases: {
    heading: "Versioni, impronte e tutto l'albero",
    sub:
      "Tutto ciò da cui il nodo è costruito sta in un unico repository AGPL-3.0-only, e ogni immagine pubblicata può essere controllata contro un'impronta prima di essere aperta. Questa sezione è il punto in cui il sito smette di descrivere e comincia a indicare.",
    assetsHeading: "File pubblicati",
    assetsColumns: ["File", "Cos'è", "Dimensione"],
    assetKinds: {
      dmg: "Immagine disco da trascinare in Applicazioni, universale arm64 e x86_64. È quella da prendere.",
      sidecar: "Un'impronta per un solo file, scritta dal passo di confezionamento che lo ha costruito.",
      zip: "Il bundle dell'app firmato come payload ZIP, per un archivio invece che per un volume.",
      sums: "Un manifesto che elenca ogni artefatto della versione con la sua impronta.",
    },
    missingAsset:
      "Non ogni versione pubblica ogni file. Le versioni più vecchie portano solo l'immagine disco e il suo file di accompagnamento, ed è per questo che il controllo qui sotto legge la versione che hai aperto davvero.",
    verifyHeading: "Verifica prima di aprire qualsiasi cosa",
    verifyBody:
      "Due comandi, eseguiti nella cartella in cui hai scaricato. La forma a manifesto è preferita ed è quella che la versione corrente pubblica.",
    verifySumsBody:
      "Un manifesto di versione elenca ogni artefatto, quindi un file che non hai scaricato è atteso, non mancante: passa --ignore-missing e leggi la riga che corrisponde al file che hai preso. Il manifesto è scritto nello stesso passo che confeziona il payload che nomina.",
    verifySidecarBody:
      "Una versione più vecchia pubblica invece un file di accompagnamento a un solo file, ed è quello il file contro cui controllare. Dove una versione porta entrambi e non coincidono, credi al manifesto: l'accompagnamento può venire da una build diversa della stessa versione.",
    pipelineHeading: "Come una versione arriva fin qui",
    pipelineBody:
      "Spingere un tag esegue il workflow di rilascio su un runner macOS: costruisce l'albero, esegue i test sul contratto, confeziona l'immagine universale con Scripts/build_dmg.sh, rifiuta di pubblicare un file di checksum che contenga un percorso assoluto e carica ciò che quello script ha scritto. Un'immagine notarizzata accanto a un manifesto SHA256SUMS.txt viene invece da Scripts/build-release.sh, che aggiunge la firma Developer ID, una sottomissione alla notarizzazione Apple e lo ZIP. Entrambi i percorsi finiscono allo stesso punto: un'impronta che puoi controllare senza fidarti di questa pagina.",
    supportedHeading: "In esecuzione oggi",
    supportedItems: [
      "Tutti e dieci i motori, ognuno con il proprio insieme di azioni e i propri percorsi di rifiuto, accesi individualmente.",
      "Scelta automatica del livello da sysctl, con lo scaricamento del modello che ogni livello implica.",
      "Abbinamento firmato, monouso, di quindici minuti, e una console che si lega solo a loopback.",
      "Il ponte TypeScript e due adattatori per agenti sulla stessa console e con lo stesso token.",
    ],
    roadmapHeading: "Non ancora",
    roadmapSub:
      "Scritti come piani nel repository, non come promesse su una pagina. Nulla di tutto questo gira oggi.",
    roadmap: [
      {
        title: "Misure per motore sulla tua macchina",
        body:
          "Una dashboard d'uso e le cronologie dei fallimenti riportate al telefono: letture di token e watt dalla scatola che hai davanti, al posto delle stime nella tabella hardware.",
      },
      {
        title: "Isolamento del mesh più forte e un registro esportabile",
        body:
          "Un contenimento più stretto per la capacità prestata e un registro che puoi portare fuori dall'app invece di leggerlo dentro.",
      },
      {
        title: "Custodia frazionata per più di un erede",
        body:
          "Divisione del materiale successorio tra più eredi, e più layout di referti nel motore salute.",
      },
      {
        title: "Canali di distribuzione firmati e altri livelli video",
        body:
          "Valutazione di un canale da store oltre la notarizzazione, e ulteriori livelli LTX per le bande di memoria che la scala non copre ancora.",
      },
    ],
    sourceHeading: "Il sorgente, e cosa obbliga la licenza",
    sourceBody:
      "Un repository, AGPL-3.0-only, nessun nucleo chiuso: motori, console, filigrana e registro ci sono tutti, e il codice delle credenziali a firma cieca e il registro dei parametri crittografici sono aperti in popopxmq accanto. La sezione 13 si applica nel modo ordinario: eseguilo, studialo, modificalo liberamente, e se offri un nodo modificato come servizio ad altre persone, offri a loro il tuo sorgente corrispondente. È tutto il costo di conformità.",
    licenceHeading: "Cosa non è coperto",
    licenceBody:
      "AGPL-3.0 non concede alcuna licenza sul nome o sul logo POPOPX. Un fork può prendere tutto tranne i marchi: rinomina il software, sostituisci i marchi, conserva il codice.",
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
        a: "Quanto dice la frase qui sotto. Sono cifre calcolate approssimativamente, non misure della tua macchina, e il throughput reale si sposta di due o tre volte con temperature e carico. La versione successiva del nodo le sostituisce con letture di token e watt per motore, misurate sulla macchina che stai usando davvero.",
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

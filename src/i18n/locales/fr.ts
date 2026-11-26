import type { Dictionary } from "../types";

export const fr: Dictionary = {
  dir: "ltr",

  nav: {
    overview: "Vue d'ensemble",
    node: "Ce qu'est un nœud",
    features: "Capacités",
    install: "Installation et configuration",
    security: "Confidentialité et contrôle",
    troubleshooting: "Dépannage",
    releases: "Versions et GitHub",
    download: "Télécharger le nœud",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    chooseLanguage: "Langue",
  },

  ecosystem: {
    heading: "Le reste de POPOPX",
    body:
      "Trois portails, un seul projet, et ils sont tous à nous. Rien sur cette page ne charge quoi que ce soit depuis eux et aucune requête ne leur est envoyée : on ne quitte node.popopx.chat que si l'on clique.",
    chat: "POPOPX Chat",
    chatBody:
      "Le réseau de messagerie lui-même — de bout en bout, sans identifiant global, et la file sur laquelle votre nœud écoute.",
    botStudio: "Bot Studio",
    botStudioBody:
      "Là où les comptes de service derrière les dix moteurs sont écrits et hébergés, sur un serveur que vous contrôlez.",
    serviceSuite: "Comptes de service",
    serviceSuiteBody:
      "L'écosystème de canaux chiffrés à connaissance nulle auquel ces moteurs parlent.",
  },

  routes: {
    "/": {
      eyebrow: "VUE D'ENSEMBLE",
      title: "POPOPX Mac Node — votre propre Mac exécute les dix moteurs",
    },
    "/node": {
      eyebrow: "CE QU'EST UN NŒUD",
      title: "Ce qu'un nœud est, et ce qu'il n'est pas — POPOPX Mac Node",
    },
    "/features": {
      eyebrow: "CAPACITÉS",
      title: "Dix moteurs locaux et le matériel qui les fait tourner — POPOPX Mac Node",
    },
    "/install": {
      eyebrow: "INSTALLATION ET CONFIGURATION",
      title: "Installer, appairer, mettre à niveau, sauvegarder, supprimer — POPOPX Mac Node",
    },
    "/security": {
      eyebrow: "CONFIDENTIALITÉ ET CONTRÔLE",
      title: "Ce qui reste sur votre disque, et comment l'arrêter — POPOPX Mac Node",
    },
    "/troubleshooting": {
      eyebrow: "DÉPANNAGE",
      title: "Ports, pare-feu et plafonds mémoire — POPOPX Mac Node",
    },
    "/releases": {
      eyebrow: "VERSIONS ET CODE SOURCE",
      title: "Versions, empreintes et arbre source complet — POPOPX Mac Node",
    },
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Votre appareil. Votre nœud.",
    titleAccent: "Votre contrôle.",
    subtitle:
      "POPOPX Mac Node est le bord du réseau que vous possédez. Il exécute sur votre propre Mac, à côté de POPOPX Chat et de Bot Studio, les moteurs de modèles locaux, de médias et de fichiers qui se trouvent derrière les dix services Discover. Le réseau relaie vos messages chiffrés ; l'inférence, le rendu, l'archive scellée et les secrets restent sur un matériel que vous avez acheté.",
    ctaDownload: "Télécharger le DMG",
    ctaSource: "Lire le code source",
    releaseLabel: "Dernière version",
    sizeLabel: "Taille",
    digestLabel: "SHA-256",
    statusFetching: "Interrogation de GitHub Releases…",
    statusLive: "En direct depuis GitHub Releases",
    statusFallback: "GitHub injoignable — affichage de la version épinglée",
    copyDigest: "Copier l'empreinte",
    digestCopied: "Empreinte copiée",
    verifyTitle: "Vérifiez avant de l'ouvrir",
    verifyBody:
      "Enregistrez l'image et le fichier d'empreintes de la version dans le même dossier, puis contrôlez-les avant d'ouvrir quoi que ce soit. Le fichier d'empreintes change selon la version — les versions récentes publient un manifeste SHA256SUMS.txt, les plus anciennes un .sha256 à un seul fichier — alors Versions et GitHub affiche les deux commandes exactes pour la version que vous êtes en train de regarder.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Votre propre matériel",
    statStorage: "Artefacts sur votre propre SSD",
    statIdentity: "Aucun compte, aucun ID",
    statSource: "AGPL-3.0 de bout en bout",
  },

  overview: {
    splitHeading: "Le réseau coordonne. Votre machine exécute.",
    splitSub:
      "C'est toute l'idée, et elle mérite d'être énoncée exactement, parce que la lecture habituelle d'un produit comme celui-ci est inversée : le cloud ne fait pas le travail et votre Mac n'est pas un client léger. Chacun des deux côtés ne fait que la part qui lui revient.",
    cloudTitle: "Ce que le réseau transporte",
    cloudBody:
      "Les relais SMP et le stockage XFTP déplacent vos messages et vos fichiers de bout en bout entre vos propres appareils, et les dix comptes de service Discover envoient chacun un signal. Un relais voit du texte chiffré et des métadonnées de routage. Il ne reçoit jamais un modèle, une invite, une image ou un nom de fichier, et il n'exécute aucune partie d'aucun moteur.",
    macTitle: "Ce que votre Mac fait",
    macBody:
      "Le nœud prend ce signal et fait le travail sur la machine devant vous : inférence quantifiée via Ollama sur loopback, rendu LTX-2.5 via MLX, FFmpeg et filigrane GOP, scellement CryptoKit et coffres à chaînage de hachage, diskutil et AppKit pour les actions physiques. Puis il écrit le résultat sur votre propre disque.",
    pathsHeading: "Commencez là où vous êtes vraiment",
    paths: [
      {
        title: "Comprendre la répartition",
        body:
          "Ce qu'est un nœud, la seule ligne sur laquelle il écoute, comment un téléphone obtient l'autorisation de le piloter, et quels ports sont concernés.",
      },
      {
        title: "L'installer sur un Mac",
        body:
          "Prérequis, DMG vérifié, compilation depuis la source, premier appairage, mises à niveau, changement de machine et suppression complète.",
      },
      {
        title: "Contrôler ce qui part",
        body:
          "Le détail de la racine de données, dossier par dossier, ce qui est renvoyé à votre téléphone, où vivent les clés, et comment arrêter ou révoquer.",
      },
      {
        title: "Réparer ce qui a cassé",
        body:
          "Les pannes qui arrivent vraiment : un port déjà lié, un modèle qui n'a jamais répondu, des poids ignorés, un code expiré.",
      },
    ],
  },

  architecture: {
    heading: "Trois garanties, aucun service entre les deux",
    sub:
      "Ce qui est intéressant dans cette architecture, c'est ce qui lui manque : aucun service de compte, aucun séquestre de clés, aucun point de collecte d'analytics, aucune inférence hébergée.",
    items: [
      {
        title: "Stockage local physique",
        body:
          "Chaque artefact produit par un moteur — le briefing, le clip filigrané, l'archive scellée, le rapport décodé — est écrit sur votre propre SSD, sous une racine de données unique. Il reste hors de la synchronisation iCloud et hors de tout conteneur partagé, et les registres sont écrits avec une protection complète des fichiers : ils ne sont donc pas lisibles au repos une fois la machine verrouillée.",
      },
      {
        title: "Aucun compte, aucune identité",
        body:
          "Il n'y a ni inscription, ni numéro de téléphone, ni adresse e-mail, ni identifiant d'appareil à fournir. Appairer le téléphone avec le nœud tient en un seul scan de QR code, et les commandes qui arrivent ensuite transitent par votre propre file popopx-chat, avec SMP et XFTP qui les portent de bout en bout.",
      },
      {
        title: "AGPL-3.0 sur toute la pile",
        body:
          "Les dix moteurs, la passerelle SMP, la console web locale, le filigrane GOP et en domaine fréquentiel et le registre des points de calcul forment un seul et même arbre de sources AGPL-3.0-only. Il n'existe pas de cœur fermé : le code des attestations à signature aveugle et le registre cryptographique vivent dans popopxmq, en open source.",
      },
    ],
  },

  dashboard: {
    badge: "UI Preview — maquette de design d'interface, pas un nœud réel en marche",
    heading: "Ce que la console affiche une fois le nœud en marche",
    sub:
      "L'app embarque une seule console web locale, et ceci est une image de son écran d'état : la machine qu'elle a trouvée, la mémoire unifiée qu'elle a décidé de réserver, les moteurs qu'on peut lui demander d'exécuter et les téléphones qu'elle a laissés entrer. La disposition, les noms de colonnes et l'arithmétique sont ceux du produit livré. Rien ici n'est relevé d'un processus en marche.",
    machineLabel: "Machine d'exemple",
    machineHint:
      "Au lancement, le nœud lit la puce, le nombre de cœurs et la mémoire physique dans sysctl. Un navigateur ne peut pas lire la vôtre — navigator.deviceMemory est plafonné à 8 GB dans toutes les implémentations — alors choisissez une de ces configurations et les chiffres en dessous se recalculent.",
    statusHeading: "État",
    statusConnected: "Connecté",
    daemonRunning: "Démon en marche",
    loopbackNote:
      "La console se lie à 127.0.0.1 et refuse toute liaison sur 0.0.0.0, une adresse LAN ou un nom d'hôte : elle n'est donc atteignable que depuis ce Mac.",
    memHeading: "Allocation de la mémoire unifiée",
    memTotalLabel: "Mémoire unifiée",
    memCeilingLabel: "Plafond résident",
    memMeshLabel: "Plafond du mesh",
    memHeadroomLabel: "Réservé à la session de bureau",
    usageLabel: "Jeu de travail des moteurs (estimation)",
    servicesHeading: "Moteurs et services locaux",
    servicesNote:
      "À gauche, les dix moteurs et les trois rayons sous lesquels ils sont livrés — le même catalogue que celui qu'imprime le menu du téléphone. À droite, les trois adresses que le nœud connaît : celle sur laquelle il écoute et les deux qu'il appelle en tant que client. Ce sont deux listes fixes, pas des mesures, et un moteur ne tourne que si vous l'activez.",
    devicesHeading: "Appareils appairés",
    deviceColumns: ["Appareil", "Appairé", "Dernière apparition", "Révoquer"],
    devicesActive: "actifs",
    revoke: "Révoquer",
    revokedRow: "révoqué",
    neverSeen: "jamais vu",
    disclaimer:
      "Cette carte est une image, pas un client. Elle n'ouvre aucune connexion et ne lit aucun processus : choisir une machine applique dans votre propre navigateur la règle de palier publiée par le nœud, et Révoquer ne change que la ligne que vous êtes en train de regarder. Dans la vraie console, ce bouton marque l'appareil comme révoqué, rejette ses commandes à partir de là et ne déchire pas la connexion de messagerie — Confidentialité et contrôle dit exactement ce que ce bouton ne fait pas.",
  },

  node: {
    heading: "Un nœud est un ordinateur que vous possédez déjà",
    sub:
      "Pas une région, pas un type d'instance, pas un niveau d'abonnement. Un seul Mac qui exécute les parties de POPOPX qui ne devraient pas se passer ailleurs — et la seule chose à laquelle vous devez faire confiance est la machine à laquelle vous confiez déjà vos fichiers.",
    points: [
      {
        title: "Le travail sensible ne sort jamais",
        body:
          "Les rapports médicaux sont analysés par Vision sur votre propre machine. Les rushes sont découpés et filigranés en local. Le scellement du coffre et l'archive scellée sont des opérations CryptoKit sur votre propre disque. Rien dans ces chemins n'a de point hébergé à appeler.",
      },
      {
        title: "La distance est nulle",
        body:
          "L'inférence se fait sur la mémoire unifiée, à côté du processus qui l'a demandée. Le client de modèle est épinglé sur 127.0.0.1:11434, ce qui explique qu'il n'existe dans le nœud aucun chemin de code capable d'atteindre une API d'inférence hébergée, même par accident — il faudrait d'abord modifier le littéral d'hôte.",
      },
      {
        title: "Vous l'avez déjà payé",
        body:
          "Les points de calcul mesurent les cycles dépensés par votre propre matériel, et Edge Compute Mesh est le seul moteur qui prête la capacité inutilisée au lieu de l'emprunter. Le palier que vous obtenez est une fonction de la mémoire que vous avez achetée.",
      },
      {
        title: "L'autorisation est par appareil",
        body:
          "Un seul code d'appairage signé, à usage unique et valable quinze minutes autorise un appareil. La console liste ce qui est appairé, et la révocation tient dans un bouton — avec une réserve honnête sur ce que ce bouton ne fait pas, détaillée sur la page confidentialité.",
      },
    ],
    wireHeading: "Une ligne, trois segments",
    wireBody:
      "Une commande venant du téléphone est un message ordinaire sur votre propre file popopx-chat, et à l'intérieur se trouve une ligne balise : un préfixe, l'identifiant du moteur, l'action, et une charge JSON. L'analyseur ne découpe que sur le premier séparateur, si bien qu'une charge contenant le séparateur survive intacte, et qu'une ligne dont l'identifiant de moteur est inconnu, dont la charge est vide, ou dont la charge dépasse le plafond accepté par la partie iOS est abandonnée plutôt qu'exécutée partiellement.",
    wireSampleLabel: "La seule forme acceptée",
    pairingHeading: "L'appairage, dans l'ordre où il se passe vraiment",
    pairingSub:
      "Le nœud fabrique une attestation, vous la montrez au téléphone une fois, et l'attestation ne vaut plus rien ensuite. Rien n'est stocké sur un serveur, parce qu'il n'y a aucun serveur qui pourrait le faire.",
    pairingSteps: [
      {
        title: "Le nœud propose",
        body:
          "Depuis la barre de menus ou la console, le nœud écrit une offre, signe le corps avec sa propre clé Ed25519 — celle qui se trouve dans pairing/node.key sous sa racine de données — et la génère en QR code en local via CoreImage. Aucune image ne quitte la machine.",
      },
      {
        title: "Le téléphone la revendique",
        body:
          "POPOPX iOS scanne le code, et le contact qui en résulte est la clé de l'appareil. Ce scan unique établit le pont SMP ; à partir de là, les comptes de service Discover parlent à votre nœud et à rien d'autre.",
      },
      {
        title: "L'offre meurt",
        body:
          "La première revendication marque l'offre comme utilisée. Générer un nouveau code retire le précédent, donc un QR photographié n'est pas une invitation permanente — il expire de lui-même au bout de quinze minutes même si personne ne le scanne jamais.",
      },
    ],
    pairingFacts: {
      lifetime: "Durée de vie de l'offre",
      singleUse: "Utilisation",
      signature: "Signée par",
      delivery: "Généré sous forme de",
    },
    sealedHeading: "Le QR est une enveloppe scellée",
    sealedSub:
      "Depuis 040ef25, le QR et le bouton de copie de l'assistant portent une seule URL opaque au lieu de l'attestation brute. L'enveloppe garde l'adresse du relais hors d'une capture d'écran, d'un aperçu de lien ou d'un transfert ; ce n'est pas un secret que le détenteur de l'app ne peut pas ouvrir.",
    sealedShapeLabel: "Forme du lien scellé",
    sealedFacts: {
      kdf: "Dérivation de clé",
      cipher: "AEAD",
      nonce: "Nonce",
      caps: "Plafonds de la charge utile",
    },
    sealedBody:
      "La clé est dérivée avec HKDF-SHA256 à partir d'une entrée publiée dans l'app, et la boîte est en ChaCha20-Poly1305 avec une chaîne fixe de données associées, si bien que quiconque lit la source peut ouvrir une enveloppe. C'est la conception : le lien cache l'adresse de la file SMP aux aperçus, aux captures d'écran et aux transferts, tandis que l'attestation signée, à usage unique et de quinze minutes qu'il contient est ce qui autorise réellement un appareil. Le code brut PPXNODE1-… et l'URI d'invitation qui porte l'adresse de la file restent dans le tiroir de diagnostics de la console ; la clé publique du nœud y apparaît, ainsi que sur les lignes des appareils appairés, jamais sur la face de l'assistant. L'image du QR est générée en local et servie uniquement en loopback à /api/pairing/qr.png.",
    portsHeading: "Le côté à l'écoute du nœud",
    portsSub:
      "Le nœud lui-même ouvre un seul port. Les deux autres appartiennent à des programmes qu'il démarre et auxquels il se connecte en tant que client, ce qui compte quand vous lisez un journal de pare-feu : une connexion vers 11434 ou 5225 a été faite par le nœud, pas acceptée par lui.",
    portsColumns: ["Port", "Lié par", "Adresse", "Protocole", "Ce qui le protège"],
    portsOwner: {
      node: "Le nœud",
      tool: "Ollama",
      daemon: "popopx-chat",
    },
    portsPurpose: {
      console: "Console web et flux de journal des moteurs",
      inference: "Inférence de modèles locale",
      control: "Socket de contrôle du démon de messagerie",
    },
    portsFootnote:
      "Les trois sont en loopback. La console est du HTTP simple sans TLS, ce qui n'est une conception raisonnable que parce qu'elle ne quitte jamais la machine : les tentatives de liaison sur 0.0.0.0, une adresse LAN ou un nom d'hôte sont refusées avant même la création d'un socket, et l'adresse est codée en dur dans l'app plutôt que lue dans un fichier de configuration. Ce qui la protège à la place est un jeton aléatoire de vingt-quatre octets émis à chaque lancement, envoyé sous X-PPX-Token, conservé uniquement en mémoire, et mort quand le processus se termine. Le socket de contrôle du démon de messagerie n'a aucune authentification du tout — c'est la description honnête qu'on peut en faire — et il n'est sûr que tant qu'il reste sur 127.0.0.1.",
  },

  hub: {
    badge: "LIGNE SOURCE · ABSENT DE LA COMPILATION 1.0.2 SIGNÉE",
    heading: "Cinq capacités locales, une seule frontière",
    sub:
      "La ligne source ajoute une découverte des capacités limitée au propriétaire, quatre adaptateurs de protocole et un lien d'appairage scellé. Les ponts sont désactivés par défaut, chaque cible est admise par la même liste d'autorisation positive, et chaque écriture devient une proposition signée qu'un humain doit approuver. Rien de tout cela n'est un service hébergé, et rien de tout cela n'ouvre un nouvel écouteur.",
    status:
      "Dans la source depuis le 26 novembre 2026 (5858b3c et 040ef25). Le téléchargement v1.0.2 signé sur ce site est antérieur aux deux commits, alors lisez cette section comme le contrat de la ligne source, pas comme une fonctionnalité de l'image que vous êtes en train de télécharger.",
    cards: [
      {
        title: "Une découverte qui ne répond que sur elle-même",
        body:
          "La console rapporte ce que ce Mac possède déjà : Ollama sur 127.0.0.1:11434 et les modèles qu'il sert, les dossiers d'espace de travail que vous avez autorisés, l'état de l'autorisation EventKit, et une ligne de joignabilité TCP pour un maximum de huit cibles LAN que vous avez saisies vous-même. C'est un GET /v1/discovery/capabilities en lecture seule. Il n'y a aucun annonceur mDNS, aucun balayage de ports et aucune exploration de sous-réseau ; seuls le loopback, les littéraux RFC 1918, les adresses ULA et les noms .local sont admis, et une adresse publique est refusée avant qu'un socket soit ouvert.",
      },
      {
        title: "MCP, à l'intérieur de la liste d'autorisation",
        body:
          "Un client MCP local parle JSON-RPC 2.0 initialize, tools/list et tools/call. Les serveurs sont enregistrés à la main dans config/mcp_servers.json — huit au maximum. Une commande stdio doit être un chemin absolu figurant dans une liste allowedCommands de seize entrées, sans métacaractères de shell ; un serveur HTTP doit répondre en loopback. Un outil en lecture seule peut s'exécuter ; un outil qui modifie n'est jamais exécuté sur demande, il est seulement transformé en proposition.",
      },
      {
        title: "Home Assistant et MQTT sur le réseau local",
        body:
          "Home Assistant via son API REST locale et un client MQTT 3.1.1 écrit à la main, tous deux limités au loopback, à RFC 1918 et à .local. Seules les entités nommées dans exposedEntities existent pour le pont, le mode lecture seule est actif par défaut, et une publication vers le broker ne peut viser qu'une entité exposée sous un préfixe que vous avez configuré. Les identifiants sont des références au Trousseau ; settings.json ne contient aucun jeton.",
      },
      {
        title: "CalDAV garde les trous, pas le texte",
        body:
          "PROPFIND et REPORT contre jusqu'à quatre serveurs CalDAV auto-hébergés sur le réseau local. L'analyseur iCalendar conserve DTSTART et DTEND et abandonne SUMMARY, DESCRIPTION, LOCATION, ORGANIZER et chaque ATTENDEE à l'intérieur même de l'analyse, donc il n'y a pas d'étape de rédaction ultérieure à rater. Les blocs occupés distants sont découpés des créneaux libres locaux avec un plancher de quinze minutes ; une récurrence que l'analyseur ne peut pas évaluer est signalée comme un plancher plutôt que devinée.",
      },
    ],
    boundaryHeading: "Ce que la frontière refuse",
    boundaryItems: [
      {
        title: "Adresses publiques et noms non résolus",
        body:
          "Une cible de pont doit être en loopback, RFC 1918, ULA ou un nom .local. Un nom d'hôte nu n'est pas résolu pour découvrir s'il est public, les identifiants dans une URL sont refusés, et un pont HTTP ne suit pas de redirection — ainsi un hôte présent sur la liste d'autorisation ne peut pas faire rebondir le nœud vers le serveur de quelqu'un d'autre.",
      },
      {
        title: "Des écritures sans humain",
        body:
          "Une action domotique ou un outil MCP qui modifie devient une proposition en pending_user_approval portant un reçu HMAC-SHA256 lié à son identifiant et à son verbe, valable quinze minutes. La charge qui s'exécute est celle qu'on vous a montrée, elle est consignée dans le journal d'audit local, et couper le pont annule ce qui était en attente.",
      },
      {
        title: "Des secrets sans repli en clair",
        body:
          "Le jeton Home Assistant, le mot de passe MQTT et le mot de passe CalDAV sont des éléments du Trousseau désignés par une référence ; une exécution non empaquetée les garde uniquement en mémoire, et rien ne se replie sur un fichier. Le document MCP stocke des noms de variables d'environnement, jamais des valeurs.",
      },
    ],
    footnote:
      "Confidentialité et contrôle énonce la même frontière règle par règle, y compris ce que le nœud ne peut pas promettre.",
  },

  engines: {
    heading: "Dix moteurs souverains",
    sub:
      "Trois rayons et dix comptes de service officiels. Chaque carte ci-dessous affiche son propre prix : un nombre fixe de Crédits de calcul pour un cycle de 30 jours, ou, pour Edge Compute Mesh, un règlement par tâche avec des frais de protocole de 10 %. Chacun d'entre eux s'exécute sur un matériel que vous possédez déjà.",
    filterAll: "Tous",
    substrateLabel: "Socle",
    quickMenuLabel: "Menu rapide iOS",
    quickMenuHint:
      "Chaque bouton envoie ::popopx_sys::NODE_CMD::<service>::<action>::{} à votre nœud appairé.",
    deterministicBadge: "Déterministe — aucun modèle sur le chemin",
    modelBadge: "Modèle local dans la boucle",
    offlineBadge: "Fonctionne sans poids de modèle local",
    openDetails: "Ouvrir",
    closeDetails: "Fermer",
    shelfCount: "moteurs",
    creditsUnit: "Crédits de calcul",
  },

  hardware: {
    heading: "Le palier suit la mémoire",
    sub:
      "Au lancement, le nœud lit sysctl — modèle de puce, nombre de cœurs CPU, mémoire unifiée physique, SSD libre — et choisit un palier tout seul. Déplacez l'app sur un autre Mac et le palier suit : il n'y a rien à reconfigurer.",
    columns: [
      "Mémoire unifiée",
      "Puce typique",
      "Modèle de texte",
      "Modèle vidéo",
      "Premier jeton*",
      "Débit*",
      "Pic résident*",
      "Mode",
    ],
    modes: {
      lightweight: "Inférence légère",
      balanced: "Équilibré",
      full: "Poids complets",
    },
    footnote:
      "* Ces trois colonnes sont des estimations d'ingénierie, pas des mesures de laboratoire. Elles proviennent d'un décodage limité par la bande passante mémoire d'un modèle dense de 27B, doublé d'une lecture du ratio de quantification sur l'empreinte des poids de LTX-2.5. La tenue thermique en charge prolongée, la génération de la puce, la charge en arrière-plan, la durée des clips et les tâches concurrentes déplacent les chiffres réels d'un facteur deux à trois. Utilisez-les pour choisir un palier, pas comme une promesse de performance.",
    rules: [
      "96 Go et plus — poids d'origine BF16 de LTX-2.5 avec Qwen3.8-27B en Q8_0.",
      "De 48 à 95 Go — LTX-2.5 MLX quantifié en 8-bit avec Qwen3.8-27B en Q4_K_M.",
      "Moins de 48 Go — un modèle 9B en Q4_K_M, rendus courts uniquement, vidéo lourde proposée à Edge Compute Mesh.",
    ],
    plansHeading: "Ce que chaque palier déploie vraiment",
    plansSub:
      "Le tableau ci-dessus est le guide que vous lisez avant d'acheter. Celui-ci est ce que le nœud écrit pour lui-même après avoir mesuré la machine, directement sorti de la fonction de recommandation, y compris la balise de modèle qu'il récupère.",
    plansColumns: [
      "Bande de mémoire",
      "Modèle de texte",
      "Pile vidéo",
      "Plafond résident",
      "Vidéo lourde",
      "Commande pull",
    ],
    heavyVideo: {
      local: "Rendu ici",
      mesh: "Proposé au mesh",
    },
    plansFootnote:
      "Le plafond résident est une règle arithmétique sur la mémoire mesurée, pas un benchmark : chaque palier retranche une réserve fixe pour la session de bureau de la mémoire unifiée trouvée, avec un plafond pour qu'une très grosse machine ne promette pas plus que ce dont la pile a besoin. Les balises de modèle et les quantifications sont les chaînes que le nœud passe réellement à Ollama.",
  },

  install: {
    heading: "Un DMG, un scan, dix interrupteurs",
    sub:
      "Le nœud n'a ni installeur, ni compte de démon, ni rien à enregistrer. C'est une seule app de la barre de menus qui se lie à loopback, et la première exécution fait le profilage elle-même.",
    prereqsHeading: "Avant de télécharger",
    prereqNotes: {
      system: "Le package cible macOS 14 et l'app est un agent de la barre de menus.",
      memory:
        "Metal, MLX et toute l'échelle des paliers partent de la mémoire unifiée. Le DMG contient une tranche x86_64, mais aucune partie de la pile n'est réglée pour Intel.",
      disk:
        "Les poids de modèle sont refusés tant que l'espace libre est inférieur ou égal à 40 Go, donc le plafond de l'échelle est aussi celui de votre disque.",
      media:
        "Cinq des dix moteurs appellent FFmpeg. L'assistant d'installation peut l'amener là via Homebrew.",
      inference:
        "Ollama pour les modèles de texte quantifiés, l'espace de travail LTX-2.5 MLX pour la vidéo. Ce sont deux outils locaux ; aucun des deux n'est un service.",
      bridge:
        "Nécessaire seulement pour l'étape d'appairage SMP et le chemin piloté par le téléphone. Les moteurs eux-mêmes tournent sans lui.",
    },
    prereqRequired: {
      hard: "Requis",
      wizard: "Installé par l'assistant",
      optional: "Seulement pour l'appairage",
    },
    steps: [
      {
        title: "Vérifiez et ouvrez le DMG",
        body:
          "Placez POPOPX-Mac-Node-Universal.dmg et le fichier d'empreintes de la version dans le même dossier et contrôlez-les avant d'ouvrir quoi que ce soit ; Versions et GitHub affiche les deux commandes pour la version courante. Glissez POPOPX Mac Node.app dans /Applications. La compilation publiée porte une signature Developer ID et un ticket de notarification agrafé, donc Gatekeeper l'accepte sans aide — spctl -a -vv -t install répond accepted avec source=Notarized Developer ID. Une compilation issue du workflow d'étiquette, qui emballe avec Scripts/build_dmg.sh, et une compilation que vous faites vous-même avec ce même script sont signées ad hoc, et ce sont elles qui exigent un clic droit puis Ouvrir la première fois.",
      },
      {
        title: "Laissez le nœud profiler la machine",
        body:
          "Lancez-le et ouvrez la console depuis la barre de menus. La première étape lit la puce, le nombre de cœurs, la mémoire unifiée et le SSD libre dans sysctl, affiche le palier qu'il a choisi et la balise de modèle que ce palier implique, et montre les chiffres qu'il a échantillonnés plutôt que ceux que vous avez déclarés.",
      },
      {
        title: "Déployez les moteurs locaux",
        body:
          "L'assistant parcourt la liste dans l'ordre : Homebrew, FFmpeg, uv, Ollama, la quantification de Qwen qui correspond à votre palier, l'espace de travail LTX-2.5, puis une auto-vérification. Le journal d'installation est diffusé sur la page de console au fur et à mesure, et il est écrit dans logs/install.log pour qu'une panne puisse se lire après coup.",
      },
      {
        title: "Appairez l'iPhone",
        body:
          "Générez le QR d'appairage — depuis la console, ou depuis l'élément de nouveau code de la barre de menus — et scannez-le avec le client POPOPX iOS. Depuis 040ef25, le QR et le bouton de copie portent un lien scellé https://popopx.chat/i/v1/… plutôt que l'attestation brute, donc une capture d'écran ou un aperçu de conversation n'expose pas l'adresse de la file. Le code qu'il contient est toujours signé, à usage unique et expire au bout de quinze minutes ; le code brut PPXNODE1 et l'URI d'invitation restent dans le tiroir de diagnostics de la console. L'appareil apparaît dans la liste d'appairage avec son modèle, son heure d'appairage et sa dernière apparition.",
      },
      {
        title: "Activez les moteurs",
        body:
          "Dix interrupteurs dans la barre de menus et dans la console. Un moteur ne tourne que si vous l'activez, et les quatre qui n'exigent aucun modèle local — le verrouillage physique, le coffre à verrou temporel, le traceur de filigrane, le lecteur de rapports de laboratoire — fonctionnent avant qu'un seul poids soit téléchargé. FFmpeg est toujours appelé ; la pile de modèles, non.",
      },
    ],
    buildHeading: "Ou compilez-le depuis le même tag",
    buildBody:
      "Les images de version sont conditionnées à partir de l'arbre que vous pouvez extraire. swift build, swift test, swift build -c release, puis bash Scripts/build_dmg.sh --output dist --version v1.0.2 écrit le DMG universel, le signe ad hoc et émet le fichier annexe avec. Le fichier publié, c'est l'autre script : Scripts/build-release.sh ajoute la signature Developer ID, la soumission de notarification et le ZIP, ce qui explique qu'une image téléchargée passe spctl alors que votre propre compilation non. Les deux ne tournent que sur macOS, parce qu'ils sont faits de hdiutil et de codesign.",
    lifecycleHeading: "Après la première exécution",
    lifecycle: [
      {
        title: "Monter de version",
        body:
          "Il n'y a ni outil de mise à jour ni vérification de mise à jour — encore une chose dont le nœud ne téléphone pas. La mise à niveau est une glissade de souris : téléchargez le DMG plus récent, vérifiez-le et remplacez l'app dans /Applications. Les réglages, l'état d'appairage, la clé du nœud, le coffre et tous les artefacts vivent sous Application Support plutôt que dans le bundle, donc une app remplacée hérite de la machine où elle arrive.",
      },
      {
        title: "Sauvegarder et changer de machine",
        body:
          "L'app marque sa propre racine de données comme exclue de Time Machine, ce qui protège vos sauvegardes des poids de modèle et garde une surprise hors de votre restauration. Cela veut aussi dire que le dossier n'est pas dans votre sauvegarde. Pour déplacer un nœud, quittez-le, copiez ~/Library/Application Support/PopopxMacNode au même chemin sur le nouveau Mac et laissez-le se reprofiler : le palier peut changer, et pairing/node.key voyage avec le dossier, ce qui est toute la raison pour laquelle la copie doit être aussi privée que l'original.",
      },
      {
        title: "Le supprimer complètement",
        body:
          "Coupez d'abord Launch at Login, puis Quit depuis la barre de menus — cela ferme la socket d'écoute et libère l'élément de connexion. Supprimez /Applications/POPOPX Mac Node.app, puis la racine de données dans ~/Library/Application Support/PopopxMacNode si vous voulez aussi faire disparaître le coffre scellé, les registres et les artefacts. Il n'y a pas de désinstalleur et pas de trace à oublier : rien n'a jamais été installé en dehors de ces deux chemins. La seule chose que ces deux chemins ne couvrent pas est un élément du Trousseau — si vous avez configuré un pont de hub, son attestation sous im.popopx.macnode.hub survit aux deux suppressions, parce que le Trousseau n'est pas un dossier ; retirez-la dans Accès Trousseau, ou depuis le bouton de déconnexion du pont lui-même.",
      },
    ],
    bridgeTitle: "Pilotez les moteurs depuis votre propre script",
    bridgeBody:
      "Le dossier d'intégrations livre un pont TypeScript et deux adaptateurs d'agents. Il n'ouvre aucun nouveau port et ne démarre aucun second démon : il réutilise la console sur 127.0.0.1:18920 et le jeton à usage unique par processus, et il envoie les mêmes signaux NODE_CMD que ceux du téléphone. L'action de verrouillage est à double consentement — allowLockdown doit valoir true et PPX_BRIDGE_SECRET doit comporter au moins seize caractères — et un refus est écrit dans le journal des plugins pour que vous voyiez qu'il a eu lieu.",
    requirementTitle: "Un seul prérequis, dit honnêtement",
    requirementBody:
      "L'étape 2 de l'assistant du nœud lui-même, le QR d'appairage et le pont SMP exigent un démon de messagerie popopx-chat sur votre PATH. Le nœud ne sonde qu'un seul exécutable et n'a aucun repli, parce qu'une compilation amont répond à la ligne de version puis rate toutes les commandes qui suivent. Les dix moteurs, eux, n'en ont pas besoin.",
    signHeading: "Comment la compilation publiée est signée",
    signBody:
      "Le bundle d'applications à l'intérieur de l'image porte une signature Developer ID Application, l'indicateur hardened runtime et un horodatage sécurisé, et un ticket de notarification y est agrafé. C'est pourquoi Gatekeeper le laisse s'exécuter sans aide : spctl -a -vv -t install répond accepted avec source=Notarized Developer ID. Le bloc ci-dessous a été relevé sur les octets exacts publiés par v1.0.2 le 2026-11-25 — lancez les deux premières commandes contre l'app dans /Applications et vous devriez retrouver la même identité. Aucun compte Apple n'est consulté et rien n'est vérifié contre un serveur, parce que le ticket voyage sur le disque avec l'app.",
    containerTitle: "L'image elle-même n'est pas signée",
    containerBody:
      "Lancez spctl sur le .dmg téléchargé et il répond rejected avec source=no usable signature ; codesign -dvv dit que ce même fichier n'est pas signé du tout. C'est la réponse attendue, pas une alerte de falsification. La signature de code d'Apple est sur le bundle d'applications, tandis que le ticket de notarification est agrafé au bundle et à l'image de disque qui l'entoure. Le seul contrôle d'intégrité de l'image est son SHA-256, qui est la vérification plus bas sur cette page.",
    provenanceTitle: "Quel script produit quel artefact",
    provenanceBody:
      "Deux scripts conditionnent cette app et ils ne finissent pas au même endroit. Scripts/build_dmg.sh — ce que lance le flux de tag sur un exécuteur macOS, et ce sur quoi s'arrêtent les étapes de compilation ci-dessus — signe ad-hoc avec --sign - --timestamp=none et sans hardened runtime, donc une compilation venant de ce chemin exige bien un clic droit puis Ouvrir la première fois. Scripts/build-release.sh est le chemin Developer ID : il signe avec le hardened runtime, soumet à la notarification, agrafe le ticket au bundle et à l'image, et écrit le ZIP à côté d'un manifeste SHA256SUMS.txt. L'image que vous téléchargez vient du second script, et un exécuteur qui n'a jamais détenu le certificat ne peut pas la produire.",
    digestHeading: "Contrôlez l'empreinte avant d'ouvrir quoi que ce soit",
    digestBody:
      "Deux commandes, à lancer dans le dossier où vous avez enregistré les fichiers. Le manifeste de la version est le fichier à utiliser pour le contrôle, parce qu'il nomme tous les artefacts de la version et qu'il est écrit par la même étape qui les a conditionnés, alors que le .dmg.sha256 à un seul fichier publié à côté de v1.0.2 nomme une empreinte qu'aucun artefact publié ne produit par hachage. Versions et GitHub affiche la paire pour la version qu'il a résolue, qui peut être plus récente que celle du dessous.",
    copyCommand: "Copier la commande",
    commandCopied: "Copié",
  },

  security: {
    heading: "Ce qui reste, ce qui part, et comment l'arrêter",
    sub:
      "Une page de confidentialité qui ne liste que ce qui reste local est une page de marketing. Celle-ci liste aussi le trafic, parce que la version honnête de “vos données ne quittent jamais l'appareil” est plus longue et plus utile que le slogan.",
    localHeading: "Ce qui reste sur votre disque",
    localSub:
      "Sous une seule racine de données, dans un dossier que l'app crée et exclut de Time Machine, avec les secrets écrits de façon atomique en mode 0600 et protection complète des fichiers.",
    localItems: [
      {
        title: "Tous les artefacts",
        body:
          "Clips rendus, briefings, exports filigranés, archives scellées, rapports décodés et entrées mises en quarantaine atterrissent tous sous la racine de données et y restent. Le nœud ne garde une boîte d'envoi que pour les résultats qui attendent le retour en ligne de votre téléphone.",
      },
      {
        title: "Les modèles et leurs poids",
        body:
          "La quantification de Qwen vit dans le magasin d'Ollama ; les poids de LTX-2.5 vivent dans le répertoire engines du nœud. Ce sont des fichiers locaux sur un disque local, récupérés une fois, et la récupération est refusée tant que l'espace libre est inférieur ou égal à 40 Go.",
      },
      {
        title: "Clés et état d'appairage",
        body:
          "La clé de signature Ed25519 du nœud, la liste des appareils appairés et l'offre en cours sont de simples fichiers sous pairing/. Il n'y a aucune sauvegarde cloud de la clé et aucun séquestre nulle part — ce qui a deux tranchants, comme le dit le paragraphe sur la perte plus bas. La seule exception est l'attestation d'un pont de hub : le jeton Home Assistant, un mot de passe MQTT ou un mot de passe CalDAV est un élément du Trousseau, et settings.json ne porte que la référence qui le récupère.",
      },
      {
        title: "La piste de preuve",
        body:
          "Les registres de verrouillage et de mesh sont complétés localement par chaînage de hachage, et le journal d'audit consigne ce qui a tourné, sur quel moteur, avec quel résultat. Il est écrit pour que vous le lisiez : logs/node.log est la réponse la plus rapide à “qu'est-ce que cette chose a fait à 03:14”.",
      },
    ],
    transitHeading: "Ce qui quitte la machine",
    transitSub:
      "Quatre types de trafic quittent la machine vers le réseau au sens large, et chacun d'eux est soit votre propre appareil, soit quelque chose que vous avez configuré. Un cinquième n'existe que lorsque vous activez un pont LAN : les requêtes Home Assistant, MQTT et CalDAV, qui restent sur le loopback, RFC 1918 et les adresses .local. Il n'y a dans aucun d'eux de point de collecte d'analytics à qui envoyer quoi que ce soit.",
    transitItems: [
      {
        title: "Les résultats, renvoyés à votre propre téléphone",
        body:
          "Un travail terminé renvoie une carte d'au plus 1024 caractères plus un message par fichier artefact, par votre propre file popopx-chat avec SMP qui relaie et XFTP qui transporte. Le relais voit du texte chiffré. Si le téléphone est hors ligne, le résultat attend dans outbox/ et réessaie jusqu'à trente jours.",
      },
      {
        title: "Les flux que vous lui avez demandé de lire",
        body:
          "Morning TV récupère les sources RSS que vous avez configurées, plafonnées à trois mégaoctets par réponse, et c'est une requête HTTPS sortante ordinaire vers l'hébergeur de vos flux.",
      },
      {
        title: "Un webhook que vous avez configuré",
        body:
          "Le verrouillage physique peut poster un événement signé vers un point de domotique ou de présence. C'est une livraison au mieux, c'est opt-in, et l'URL est la vôtre — le nœud n'a aucune destination par défaut.",
      },
      {
        title: "Installations et récupérations de modèles",
        body:
          "L'assistant télécharge les formules Homebrew, FFmpeg, uv, Ollama et la quantification que vous avez choisie. Ce trafic est le but d'une étape d'installation, et il arrive une fois, devant vous, journal à l'écran.",
      },
    ],
    keysHeading: "Où vivent réellement les secrets",
    keysBody:
      "Pas dans le Trousseau. Les matériaux d'appairage et de coffre sont des fichiers sous la racine de données, écrits par une écriture atomique, avec le mode POSIX 0600 et une protection complète des fichiers, donc ils sont illisibles au repos tant que la machine est verrouillée. L'échange que vous faites est réel — les permissions de fichiers sont auditables et portables, et elles ne sont aussi rien entre votre compte utilisateur et un lecteur qui a déjà votre compte utilisateur. Traitez la racine de données comme le secret qu'elle est : elle n'est pas dans Time Machine, et elle est la seule copie de la clé du nœud qui existe. Une attestation de hub prend l'autre chemin. Le jeton Home Assistant, le mot de passe MQTT et le mot de passe CalDAV sont des éléments de mot de passe génériques sous le service im.popopx.macnode.hub, créés avec kSecAttrAccessibleWhenUnlockedThisDeviceOnly, et le document de réglages ne stocke qu'une référence. Un processus dépourvu de l'identité de bundle de l'app — swift run, un banc de test — obtient à la place un magasin en mémoire ; il n'y a délibérément aucun repli vers un fichier en clair, donc un identifiant qui ne peut pas atteindre le Trousseau n'est pas enregistré du tout.",
    dataNote: {
      output:
        "Les artefacts générés, et la file d'envoi qui contient les résultats attendant le téléphone.",
      vault: "Les archives scellées à verrou temporel et le matériau de succession qui les ouvre.",
      pairing: "La clé Ed25519 du nœud, la liste des appareils appairés et l'offre à usage unique en cours.",
      weights: "Les poids des modèles et l'espace de travail LTX-2.5 MLX que les moteurs vidéo appellent.",
      ledger: "Les registres de verrouillage et de mesh, complétés par chaînage de hachage.",
      logs: "Le journal d'installation et le journal d'audit, écrits pour être lus par l'opérateur.",
      config: "Les réglages, les interrupteurs des moteurs et la configuration que le pont et les intégrations partagent.",
    },
    rootLabel: "Racine de données",
    hubHeading: "La frontière propre du hub de bordure",
    hubSub:
      "Les quatre ponts ajoutés par la ligne source sont tenus aux règles ci-dessus et à quatre autres. Elles sont écrites ici plutôt que sur une carte de fonctionnalité parce que ce sont les affirmations qu'un lecteur doit pouvoir réfuter à partir du code.",
    hubItems: [
      {
        title: "Un seul point d'admission",
        body:
          "Chaque cible de pont — MCP via HTTP, Home Assistant, MQTT, CalDAV — passe le même contrôle EdgeBoundary avant qu'un socket existe : loopback, RFC 1918, ULA ou .local, sans recherche DNS pour découvrir si un nom est public, sans identifiants dans l'URL et sans redirection suivie. Un refus est une ligne dans la console, pas une nouvelle tentative silencieuse ailleurs.",
      },
      {
        title: "Un reçu, pas une invite",
        body:
          "Une action qui modifie n'est pas contrôlée par une zone de texte dans la console. Elle devient une proposition dans l'état pending_user_approval, approuvée par un reçu HMAC-SHA256 de 24 caractères lié à l'identifiant et au verbe de la proposition, valable quinze minutes, et consignée dans le journal d'audit local. La charge que l'exécuteur lance est celle que le propriétaire a vue, et couper le pont annule les propositions en attente.",
      },
      {
        title: "Trousseau, ou mémoire, jamais un fichier",
        body:
          "Les identifiants des ponts vivent dans des éléments du Trousseau désignés par une référence, ou dans la mémoire du processus pour une exécution non empaquetée. Il n'y a pas de troisième option : ni settings.json, ni un journal, ni un DMG. Le document MCP stocke des noms de variables d'environnement, donc un jeton transmis à un serveur MCP via stdio est lu dans l'environnement défini par le propriétaire, pas dans un fichier écrit par le nœud.",
      },
      {
        title: "N'apprendre que le minimum",
        body:
          "CalDAV analyse DTSTART et DTEND et écarte les titres, les descriptions, les lieux et les participants à l'intérieur de l'analyseur, donc les champs les plus chargés n'entrent jamais dans le modèle. L'aperçu d'une proposition montre des arguments scalaires courts et masque toute valeur dont la clé figure sur la liste de rédaction — content, token, password, payload et d'autres. La découverte est un GET en lecture seule qui rapporte l'état de la machine elle-même.",
      },
    ],
    controlHeading: "Votre côté de l'interrupteur d'arrêt",
    controlSub:
      "Quatre commandes, toutes locales, toutes visibles dans l'app plutôt qu'enterrées dans un écran de réglages. Aucune n'a besoin du réseau, ce qui est précisément ce qui les fait marcher quand le réseau est le problème.",
    controls: [
      {
        title: "Arrêter un moteur",
        body:
          "Dix interrupteurs indépendants dans la barre de menus et dans la console. En couper un prend effet à la commande suivante, et une commande pour un moteur désactivé est refusée plutôt que mise en file.",
      },
      {
        title: "Arrêter de prêter des cycles",
        body:
          "Pause Mesh Sharing sort le nœud du pool de calcul en bordure immédiatement ; la barre de menus affiche Paused et il cesse d'accepter des travaux. C'est la seule commande qui contient le mot pause, et elle concerne la capacité du mesh, pas le nœud entier.",
      },
      {
        title: "Griller le code d'appairage en cours",
        body:
          "New Pairing QR retire l'offre en attente et en fabrique une nouvelle. Quiconque garde une photographie de l'ancien code a une signature expirée, pas une seconde chance.",
      },
      {
        title: "Tout arrêter",
        body:
          "Quit est le vrai bouton d'arrêt d'urgence : il ferme la socket d'écoute en loopback, libère l'élément de connexion et fait tomber le jeton de lancement avec le processus. Un nœud qui ne tourne ne répond à rien, à personne, sur rien.",
      },
    ],
    revokeHeading: "Et révoquer un appareil",
    revokeBody:
      "La liste des appareils appairés de la console a un bouton Revoke sur chaque ligne. Elle marque l'appareil comme révoqué, supprime sa mise en correspondance de contact et rejette ses commandes à partir de là — mais elle ne déchire pas la connexion SMP, et l'app le dit dans le même message qu'elle vous affiche. Pour finir le travail, supprimez le contact dans le client de messagerie. Tout ce qui est déjà écrit sur votre disque reste sur votre disque ; la révocation arrête les commandes futures, ce n'est pas un effacement à distance, et le nœud n'a jamais eu de capacité d'effacement à distance à supprimer.",
    limitsHeading: "Ce que cette page ne promet pas",
    limitsBody:
      "La destruction sécurisée est une réécriture aléatoire, une synchronisation et une déliaison. Sur APFS un fichier modifié est écrit sur de nouveaux blocs et le SSD remappe les blocs logiques, donc cela supprime le fichier, déjoue les outils de récupération ordinaires et ne prouve pas que les anciens octets physiques ont disparu. C'est le mieux qu'une API de fichiers en espace utilisateur puisse faire, et le code le dit dans le résultat qu'il renvoie. Au-delà : pas de pause globale autre que quitter, pas d'effacement à distance, pas de séquestre de clés et donc pas de récupération si vous perdez la machine et la racine de données ensemble, et pas d'outil de mise à jour que l'on pourrait convaincre d'installer quelque chose que vous n'avez pas demandé.",
  },

  troubleshooting: {
    heading: "Quand il ne fait pas ce que vous attendiez",
    sub:
      "Les pannes qui arrivent vraiment sur cette architecture, dans l'ordre où les gens les rencontrent. Chacune dit quoi regarder d'abord, parce que sur une machine sans côté serveur, le journal est toujours le chemin le plus court.",
    columns: ["Symptôme", "Ce qui se passe", "Que faire"],
    items: [
      {
        symptom: "La page de console ne s'ouvre pas",
        cause:
          "Le port est fixé à 127.0.0.1:18920 sans repli, donc une seconde instance en cours — ou n'importe quoi d'autre arrivé avant — garde la socket d'écoute. Le jeton est aussi par lancement : un ancien onglet ouvert avant un redémarrage porte une attestation morte.",
        fix:
          "Cherchez s'il y a un écouteur sur 18920 et quittez l'autre instance, puis utilisez Open Web Console depuis la barre de menus, qui construit l'URL courante avec le jeton courant au lieu d'un périmé.",
      },
      {
        symptom: "Rien ne répond sur 11434",
        cause:
          "Les moteurs qui ont besoin d'un modèle parlent à Ollama en loopback uniquement. Si Ollama ne tourne pas, ou a été installé sans l'assistant, le moteur échoue au lieu de se replier sur quoi que ce soit d'hébergé.",
        fix:
          "Démarrez Ollama, vérifiez que OLLAMA_HOST est en loopback et récupérez la quantification que le tableau des paliers nomme pour votre machine. Le texte d'échec cite la commande qui aurait marché.",
      },
      {
        symptom: "Les poids n'ont jamais été téléchargés",
        cause:
          "L'installeur passe les téléchargements de poids sauf si weightSources est déclaré dans config/engines.json, et refuse carrément tant que l'espace libre est inférieur ou égal à 40 Go.",
        fix:
          "Ajoutez la source que vous voulez récupérer, ou copiez les poids dans engines/weights et pointez la configuration dessus. Libérez d'abord le disque ; la garde est un seuil, pas un avertissement.",
      },
      {
        symptom: "Un rendu revient comme une ligne de commande",
        cause:
          "Le travail vidéo a besoin de l'espace de travail LTX-2.5 et de ses poids. Sans eux, le moteur renvoie la commande exacte qu'il aurait exécutée au lieu de faire semblant d'avoir produit un fichier.",
        fix:
          "Terminez l'étape espace de travail de l'assistant, ou clonez l'espace de travail LTX-2-MLX qu'il nomme, puis relancez. C'est délibéré : un succès simulé est pire qu'un refus honnête.",
      },
      {
        symptom: "Le code d'appairage est rejeté",
        cause:
          "Une offre est à usage unique et vit quinze minutes. Un second scan du même code, ou un code pris sur un écran dont l'image a depuis tourné, est correctement refusé.",
        fix:
          "Générez un nouveau code et scannez-le une fois. Si le téléphone réessaie seul après un succès, la première revendication a déjà gagné et le refus est la réponse attendue.",
      },
      {
        symptom: "Les commandes du téléphone ne font rien",
        cause:
          "Le pont a besoin d'un démon popopx-chat sur le PATH et le nœud ne sonde qu'un seul exécutable, sans repli. La barre de menus affiche popopx-chat not installed quand il manque, et un moteur éteint ne répond à rien de toute façon.",
        fix:
          "Lisez d'abord la ligne du pont dans la barre de menus, puis les interrupteurs des moteurs, puis le journal d'audit. Une commande refusée et une commande jamais arrivée se ressemblent parfaitement depuis le téléphone.",
      },
      {
        symptom: "Les résultats cessent d'arriver quand le téléphone est parti",
        cause:
          "La livraison sortante passe par votre propre démon et votre relais, donc un pare-feu qui bloque le sortant, un VPN qui ne porte pas le relais ou un démon qui s'est terminé se ressemblent tous vus d'ici. Les résultats ne sont pas perdus : ils s'alignent dans outbox/ et réessaient jusqu'à trente jours.",
        fix:
          "Vérifiez que le démon tourne, puis autorisez les connexions sortantes du nœud dans ce qui les filtre, puis attendez que la file se vide au lieu de relancer le travail.",
      },
      {
        symptom: "La carte de téléchargement affiche la version épinglée",
        cause:
          "api.github.com était injoignable, bloqué, limité en débit, ou a répondu sans fichier téléchargeable. La page affiche alors la version compilée dans le bundle plutôt que de deviner.",
        fix:
          "Ouvrez directement la page des versions. Rien d'autre sur le site n'a besoin de cet appel, et aucune partie de la page n'est vide parce qu'un appel a échoué.",
      },
    ],
    escalation:
      "Deux fichiers répondent à la plupart des autres cas : logs/install.log pour tout ce que l'assistant a fait, et logs/node.log pour tout ce qui a suivi. Les deux sont du texte brut sous la racine de données, et le canal de journal de la console montre les mêmes événements en direct. Si une panne survit à leur lecture, le contrat que le nœud et les intégrations testent tous les deux est dans le dépôt, et les rapports d'anomalie vont sur popopx-mac-node.",
  },

  releases: {
    heading: "Versions, empreintes et arbre complet",
    sub:
      "Tout ce dont le nœud est construit se trouve dans un seul dépôt AGPL-3.0-only, et chaque image publiée peut être contrôlée contre une empreinte avant d'être ouverte. Cette section est l'endroit où le site cesse de décrire et commence à pointer.",
    assetsHeading: "Fichiers publiés",
    assetsColumns: ["Fichier", "Ce que c'est", "Taille"],
    assetKinds: {
      dmg: "Image disque à glisser dans Applications, universelle arm64 et x86_64. C'est celle qu'il faut prendre.",
      sidecar: "Une empreinte pour un seul fichier, écrite par l'étape de conditionnement qui l'a construit.",
      zip: "Le bundle d'application signé en charge ZIP, pour une archive plutôt qu'un volume.",
      sums: "Un manifeste listant chaque artefact de la version avec son empreinte.",
    },
    missingAsset:
      "Toutes les versions ne publient pas tous les fichiers. Les versions plus anciennes n'ont que l'image disque et son fichier annexe, c'est pourquoi le contrôle ci-dessous lit la version que vous avez réellement ouverte.",
    verifyHeading: "Vérifiez avant d'ouvrir quoi que ce soit",
    verifyBody:
      "Deux commandes, lancées dans le dossier où vous avez téléchargé. La forme manifeste est préférée et c'est ce que la version courante publie.",
    verifySumsBody:
      "Un manifeste de version liste tous les artefacts, donc un fichier que vous n'avez pas téléchargé est attendu plutôt que manquant : passez --ignore-missing et lisez la ligne qui correspond au fichier que vous avez pris. Le manifeste est écrit dans la même étape qui conditionne la charge qu'il nomme.",
    verifySidecarBody:
      "Une version plus ancienne publie à la place un fichier annexe à un seul fichier, et c'est contre lui qu'il faut contrôler. Quand une version porte les deux et qu'ils divergent, croyez le manifeste : l'annexe peut venir d'une autre compilation de la même version.",
    pipelineHeading: "Comment une version arrive ici",
    pipelineBody:
      "Pousser un tag exécute le flux de publication sur un exécuteur macOS : il construit l'arbre, lance les tests de contrat, conditionne l'image universelle avec Scripts/build_dmg.sh, refuse de publier un fichier de sommes contenant un chemin absolu, et téléverse ce que ce script a écrit. Une image notarifiée à côté d'un manifeste SHA256SUMS.txt vient de Scripts/build-release.sh, qui ajoute la signature Developer ID, une soumission de notarification Apple et le ZIP. Les deux chemins finissent au même endroit : une empreinte que vous pouvez contrôler sans faire confiance à cette page.",
    supportedHeading: "Ce qui tourne aujourd'hui",
    supportedItems: [
      "Les dix moteurs, chacun avec son propre jeu d'actions et ses chemins de refus, activés individuellement.",
      "Choix automatique du palier depuis sysctl, avec la récupération de modèle que chaque palier implique.",
      "Appairage signé, à usage unique, de quinze minutes, et une console qui ne se lie qu'en loopback.",
      "Le pont TypeScript et deux adaptateurs d'agents sur la même console et avec le même jeton.",
    ],
    roadmapHeading: "Pas encore",
    roadmapSub:
      "Écrit comme des plans dans le dépôt, pas comme des promesses sur une page. Rien de tout cela ne tourne aujourd'hui.",
    roadmap: [
      {
        title: "Mesures par moteur sur votre propre machine",
        body:
          "Un tableau de bord d'usage et des chronologies d'échec renvoyés au téléphone : relevés de jetons et de watts de la machine devant vous, remplaçant les estimations du tableau matériel.",
      },
      {
        title: "Isolation plus dure du mesh et registre exportable",
        body:
          "Un confinement plus fort de la capacité prêtée et un registre que vous pouvez sortir de l'app plutôt que lire dedans.",
      },
      {
        title: "Garde partagée pour plus d'un héritier",
        body:
          "Découpage du matériau de succession entre plusieurs héritiers, et plus de mises en page de rapports dans le moteur santé.",
      },
      {
        title: "Canaux de distribution signés et plus de paliers vidéo",
        body:
          "Évaluation d'un canal de boutique au-delà de la notarification, et des paliers LTX supplémentaires pour les bandes de mémoire que l'échelle ne couvre pas encore.",
      },
    ],
    sourceHeading: "La source, et ce que la licence impose",
    sourceBody:
      "Un seul dépôt, AGPL-3.0-only, aucun cœur fermé : les moteurs, la console, le filigrane et le registre y sont tous, et le code des attestations à signature aveugle ainsi que le registre des paramètres cryptographiques sont ouverts dans popopxmq à côté. L'article 13 s'applique de la façon ordinaire : exécutez-le, étudiez-le, modifiez-le librement, et si vous proposez un nœud modifié comme service à d'autres personnes, offrez-leur votre source correspondante. C'est tout le coût de conformité.",
    licenceHeading: "Ce qui n'est pas couvert",
    licenceBody:
      "AGPL-3.0 n'accorde aucune licence sur le nom ou le logo POPOPX. Un fork peut tout prendre sauf les marques : renommer le logiciel, remplacer les marques, garder le code.",
  },

  faq: {
    heading: "Les questions qu'on pose vraiment",
    sub: "Des réponses courtes, avec la part que nous ne pouvons pas garantir, laissée visible.",
    items: [
      {
        q: "Est-ce que quelque chose ici tourne sur vos serveurs ?",
        a: "Non. Les commandes des dix moteurs arrivent depuis le client iOS par votre propre file popopx-chat, chiffrées de bout en bout, et l'inférence, le rendu, le stockage et l'exécution physique se déroulent tous sur votre Mac. Pas une seule étape n'a besoin de notre infrastructure, et il n'existe dans le nœud aucun chemin de code qui atteigne une API d'inférence hébergée — le client de modèle est épinglé sur 127.0.0.1.",
      },
      {
        q: "Qu'est-ce que je dois enregistrer ?",
        a: "Rien. Il n'y a aucun compte, aucun numéro de téléphone, aucune adresse e-mail et aucun identifiant publicitaire nulle part dans le produit. Appairer le téléphone avec le nœud est un scan de QR code, et la console web ne se lie qu'à loopback, régénère un jeton aléatoire à chaque lancement et reste injoignable depuis le reste de votre réseau local.",
      },
      {
        q: "Le nœud scanne-t-il mon réseau local à la recherche d'appareils ?",
        a: "Non. La découverte est un GET /v1/discovery/capabilities en lecture seule qui rapporte ce que ce Mac possède déjà : Ollama en loopback, les dossiers d'espace de travail que vous avez autorisés, l'état de l'autorisation EventKit, et si une connexion TCP réussit vers un hôte LAN que vous avez saisi dans les réglages. Il n'y a dans le code aucun annonceur mDNS, aucun balayage de ports et aucune exploration de sous-réseau. Une cible n'est admise que si elle est en loopback, un littéral RFC 1918, une adresse ULA ou un nom .local ; une adresse publique est refusée avant qu'un socket soit ouvert, et la ligne source n'accepte pas de noms d'hôte qui exigeraient une recherche DNS.",
      },
      {
        q: "Un outil MCP ou une commande de domotique peut-il s'exécuter sans moi ?",
        a: "Un outil en lecture seule le peut, dans la frontière que le propriétaire a configurée. Un outil qui modifie ne le peut pas : il devient une proposition en pending_user_approval et exige une approbation qui fabrique un reçu HMAC-SHA256 de 24 caractères lié à l'identifiant et au verbe de la proposition, valable quinze minutes. L'exécuteur lance exactement la charge qui a été montrée, l'action est consignée dans le journal d'audit local, et couper le pont annule ce qui était en attente. Une action de serrure, d'alarme, de sirène, de caméra ou d'aspirateur est traitée comme à haut risque même dans une configuration par ailleurs permissive.",
      },
      {
        q: "Le QR d'appairage est-il chiffré ?",
        a: "Scellé, et la distinction compte. Le QR et le bouton de copie portent https://popopx.chat/i/v1/ suivi d'une boîte ChaCha20-Poly1305 dont la clé est dérivée avec HKDF-SHA256 à partir d'une entrée publiée dans le code source de l'app elle-même. Cela cache l'adresse de la file SMP aux aperçus de lien, aux captures d'écran et aux transferts ; cela ne soustrait pas le contenu à quiconque possède l'app. Ce qui autorise l'appareil est l'attestation signée, à usage unique et de quinze minutes qu'elle contient, et le code brut PPXNODE1 ainsi que l'URI d'invitation restent dans le tiroir de diagnostics de la console plutôt que sur la face de l'assistant.",
      },
      {
        q: "Pourquoi AGPL-3.0, et que m'oblige à faire l'article 13 ?",
        a: "Chaque fichier source du nœud est AGPL-3.0-only, ce qui signifie que vous pouvez l'exécuter, l'étudier, le modifier et le redistribuer librement. L'article 13 ajoute la clause réseau : si vous proposez un nœud modifié comme service à d'autres personnes, vous devez leur offrir la source correspondante. C'est tout le coût de conformité, et c'est ce qui permet au projet d'être libre à exécuter.",
      },
      {
        q: "Le filigrane ou le protocole des points de calcul restent-ils fermés ?",
        a: "Non, et c'est justement l'affirmation que nous nous attendrions le plus à voir vérifiée. Le code des attestations BBS+ et BLS12-381, la logique des droits d'usage et le registre des paramètres cryptographiques sont ouverts dans popopxmq ; le filigrane GOP et en domaine fréquentiel, ainsi que son décodeur aveugle, sont dans ce dépôt. Ce que vend la gamme commerciale, ce sont le centre de données, l'astreinte, le canal de distribution et la paperasse de conformité — jamais une barrière de code source.",
      },
      {
        q: "Puis-je diffuser un fork sous le nom et le logo POPOPX ?",
        a: "Non. Les marques ne sont pas concédées par AGPL-3.0 et aucun niveau d'assistance ne les accorde. La politique demande le seul remède qui ne coûte rien à un fork : renommer le logiciel, remplacer les marques, garder le code. L'usage de la marque exige une licence écrite séparée.",
      },
      {
        q: "À quel point dois-je faire confiance aux chiffres du tableau matériel ?",
        a: "Autant que ce que dit la phrase juste en dessous. Ce sont des estimations sur le coin d'une table, pas des mesures de votre machine, et le débit réel varie d'un facteur deux à trois selon la chauffe et la charge. La version suivante du nœud les remplace par des relevés de jetons et de watts, moteur par moteur, mesurés sur la machine que vous utilisez réellement.",
      },
      {
        q: "Quelles machines sont prises en charge ?",
        a: "macOS 14 ou version ultérieure sur Apple Silicon. L'échelle des paliers, Metal et MLX partent tous de la mémoire unifiée, et MLX ne tourne pas sur Intel, donc un Mac Intel n'est pas un hôte visé par ce projet, même si le DMG Universal contient toujours une tranche x86_64. L'app elle-même ne lie aucune bibliothèque tierce : uniquement des frameworks Apple. Ce qu'elle pilote est séparé par conception — Ollama, FFmpeg et les poids LTX-2.5 sont des outils locaux que les moteurs appellent, et chaque moteur indique ceux dont il a besoin.",
      },
    ],
  },

  footer: {
    tagline: "Le calcul local pour l'écosystème POPOPX. À vous de le faire tourner, à vous de le lire.",
    licenceHeading: "Licence",
    licenceBody:
      "La source du nœud est AGPL-3.0-only. Les ressources graphiques créées par ce projet sont AGPL-3.0-only ou, à votre choix, CC0-1.0.",
    trademarkHeading: "Marque",
    trademarkBody:
      "POPOPX, POPOPX Chat et le logo POPOPX sont des marques du projet POPOPX Chat. L'icône utilisée sur ce site est l'icône d'application POPOPX iOS non modifiée. Consultez TRADEMARK-POPOPX.md dans le dépôt popopx-chat pour connaître la politique.",
    privacyHeading: "Cette page",
    privacyBody:
      "Aucune mesure d'audience, aucun cookie, aucune prise d'empreinte, aucun script tiers et aucun CDN externe. La seule requête sortante que la page peut émettre vise api.github.com pour la liste des fichiers de version, et elle se replie sur un lien épinglé quand cet appel échoue.",
    appleNotice:
      "Sans lien avec Apple. macOS, iOS, Apple Silicon et Metal sont des marques d'Apple Inc.",
    sourceRepo: "Code source de Mac Node",
    iosRepo: "Code source du client iOS",
    backToTop: "Haut de page",
  },
};

import type { Dictionary } from "../types";

export const fr: Dictionary = {
  dir: "ltr",

  nav: {
    engines: "Moteurs",
    architecture: "Architecture",
    hardware: "Matériel",
    install: "Installation",
    faq: "FAQ",
    github: "GitHub",
    download: "Télécharger",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    chooseLanguage: "Langue",
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Votre Mac devient",
    titleAccent: "la couche de calcul",
    subtitle:
      "POPOPX Mac Node exécute le calcul local et l'exécution déterministe qui se trouvent derrière les dix moteurs Discover du client POPOPX iOS. Zéro cloud, aucun compte, aucune télémétrie, chiffrement de bout en bout.",
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
      "Enregistrez le .dmg et son fichier annexe .sha256 dans le même dossier, puis lancez shasum -a 256 -c sur le fichier annexe, pas sur l'image. Il contient une seule empreinte et un seul nom de fichier relatif ; la réponse attendue est POPOPX-Mac-Node-Universal.dmg: OK.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Votre propre matériel",
    statStorage: "Stockage local physique",
    statIdentity: "Aucun compte, aucune identité",
    statSource: "AGPL-3.0 de bout en bout",
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
      "Moins de 48 Go — inférence légère ; les travaux vidéo lourds sont confiés à Edge Compute Mesh au lieu d'être calculés sur la machine.",
    ],
  },

  install: {
    heading: "Trois minutes, puis il est à vous",
    sub:
      "Le nœud n'a ni installeur, ni compte de démon, ni rien à enregistrer. C'est une seule app de la barre de menus qui se lie à loopback.",
    steps: [
      {
        title: "Vérifiez et ouvrez le DMG",
        body:
          "Récupérez POPOPX-Mac-Node-Universal.dmg et son .sha256 depuis Releases, les deux dans le même dossier, et contrôlez-les avant d'ouvrir quoi que ce soit : shasum -a 256 -c POPOPX-Mac-Node-Universal.dmg.sha256 doit afficher OK. Glissez l'app dans /Applications.",
      },
      {
        title: "Déployez les moteurs locaux",
        body:
          "Ouvrez l'élément de la barre de menus et lancez l'assistant de la console. La première étape profile la puce, la mémoire unifiée et le SSD, récupère la quantification de Qwen3.8 qui correspond au palier, initialise l'espace de travail ltx2 et diffuse le journal d'installation sur la page au fur et à mesure.",
      },
      {
        title: "Appairez l'iPhone",
        body:
          "Scannez le QR d'appairage depuis la console avec le client POPOPX iOS. Ce scan unique établit le pont SMP ; ensuite, les comptes de service Discover parlent à votre nœud et à rien d'autre.",
      },
      {
        title: "Activez les moteurs",
        body:
          "Dix interrupteurs. Un moteur ne tourne que si vous l'activez, et les quatre qui n'exigent aucun modèle local — le verrouillage physique, le coffre à verrou temporel, le traceur de filigrane, le lecteur de rapports de laboratoire — fonctionnent avant qu'un seul poids soit téléchargé. FFmpeg est toujours appelé ; la pile de modèles, non.",
      },
    ],
    bridgeTitle: "Pilotez les moteurs depuis votre propre script",
    bridgeBody:
      "Le dossier d'intégrations livre un pont TypeScript et deux adaptateurs d'agents. Il n'ouvre aucun nouveau port et ne démarre aucun second démon : il réutilise la console sur 127.0.0.1:18920 et le jeton à usage unique par processus, et il envoie les mêmes signaux NODE_CMD que ceux du téléphone. L'action de verrouillage est à double consentement — allowLockdown doit valoir true et PPX_BRIDGE_SECRET doit comporter au moins seize caractères — et un refus est écrit dans le journal des plugins pour que vous voyiez qu'il a eu lieu.",
    requirementTitle: "Un seul prérequis, dit honnêtement",
    requirementBody:
      "L'étape 2 de l'assistant du nœud lui-même, le QR d'appairage et le pont SMP exigent un démon de messagerie popopx-chat sur votre PATH. Le nœud ne sonde qu'un seul exécutable et n'a aucun repli, parce qu'une compilation amont répond à la ligne de version puis rate toutes les commandes qui suivent. Les dix moteurs, eux, n'en ont pas besoin.",
    copyCommand: "Copier la commande",
    commandCopied: "Copié",
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
        a: "Autant que ce que dit la phrase juste en dessous. Ce sont des estimations sur le coin d'une table, pas des mesures de votre machine, et le débit réel varie d'un facteur deux à trois selon la chauffe et la charge. La version 1.1 du nœud les remplace par des relevés de jetons et de watts, moteur par moteur, mesurés sur la machine que vous utilisez réellement.",
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

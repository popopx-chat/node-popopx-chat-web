import type { Dictionary } from "../types";

export const es: Dictionary = {
  dir: "ltr",

  nav: {
    engines: "Motores",
    architecture: "Arquitectura",
    hardware: "Hardware",
    install: "Instalación",
    faq: "FAQ",
    github: "GitHub",
    download: "Descargar",
    openMenu: "Abrir el menú",
    closeMenu: "Cerrar el menú",
    chooseLanguage: "Idioma",
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Tu Mac se convierte en",
    titleAccent: "la capa de cálculo",
    subtitle:
      "POPOPX Mac Node ejecuta el cálculo local y la ejecución determinista que hay detrás de los diez motores Discover del cliente POPOPX iOS. Cero nube, sin cuenta, sin telemetría, cifrado de extremo a extremo.",
    ctaDownload: "Descarga el DMG",
    ctaSource: "Lee el código fuente",
    releaseLabel: "Última versión",
    sizeLabel: "Tamaño",
    digestLabel: "SHA-256",
    statusFetching: "Consultando GitHub Releases…",
    statusLive: "En vivo desde GitHub Releases",
    statusFallback: "GitHub inaccesible — se muestra la versión fijada",
    copyDigest: "Copiar la huella",
    digestCopied: "Huella copiada",
    verifyTitle: "Verifícalo antes de abrirlo",
    verifyBody:
      "Guarda el .dmg y su archivo .sha256 acompañante en la misma carpeta y ejecuta shasum -a 256 -c sobre ese archivo acompañante, no sobre la imagen. Contiene una única huella y un solo nombre de archivo relativo; la respuesta esperada es POPOPX-Mac-Node-Universal.dmg: OK.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Tu propio hardware",
    statStorage: "Almacenamiento local físico",
    statIdentity: "Sin cuenta, sin identidad",
    statSource: "AGPL-3.0 de principio a fin",
  },

  architecture: {
    heading: "Tres garantías, ningún servicio por medio",
    sub:
      "Lo interesante de esta arquitectura es lo que le falta: ningún servicio de cuentas, ningún depósito de claves, ningún endpoint de analítica, ninguna inferencia alojada.",
    items: [
      {
        title: "Almacenamiento local físico",
        body:
          "Cada artefacto que produce un motor — el resumen, el clip con marca de agua, el archivo sellado, el informe decodificado — se escribe en tu propio SSD bajo una única raíz de datos. Queda fuera de la sincronización con iCloud y fuera de cualquier contenedor compartido, y los registros se escriben con protección completa de archivos, de modo que no se pueden leer en reposo una vez que la máquina está bloqueada.",
      },
      {
        title: "Sin cuenta, sin identidad",
        body:
          "No hay registro, ni número de teléfono, ni correo electrónico, ni identificador de dispositivo que entregar. Emparejar el teléfono con el nodo es un solo escaneo de QR, y los comandos que llegan después viajan por tu propia cola popopx-chat, con SMP y XFTP llevándolos de extremo a extremo.",
      },
      {
        title: "AGPL-3.0 en toda la pila",
        body:
          "Los diez motores, la pasarela SMP, la consola web local, la marca de agua en GOP y en el dominio de la frecuencia, y el registro de puntos de cálculo forman un único árbol de código AGPL-3.0-only. No hay un núcleo cerrado: el código de credenciales de firma invidente y el registro criptográfico están en popopxmq, en abierto.",
      },
    ],
  },

  engines: {
    heading: "Diez motores soberanos",
    sub:
      "Tres estantes y diez cuentas de servicio oficiales. Cada tarjeta de abajo muestra su propio precio: una cantidad fija de Créditos de cálculo por un ciclo de 30 días o, para la malla Edge Compute Mesh, un pago por trabajo con una tasa de protocolo del 10%. Todos ellos se ejecutan sobre hardware que ya posees.",
    filterAll: "Todos",
    substrateLabel: "Sustrato",
    quickMenuLabel: "Menú rápido de iOS",
    quickMenuHint:
      "Cada botón envía ::popopx_sys::NODE_CMD::<service>::<action>::{} a tu nodo emparejado.",
    deterministicBadge: "Determinista — ningún modelo en la ruta",
    modelBadge: "Modelo local en el ciclo",
    offlineBadge: "Funciona sin pesos de modelo locales",
    openDetails: "Abrir",
    closeDetails: "Cerrar",
    shelfCount: "motores",
    creditsUnit: "Créditos de cálculo",
  },

  hardware: {
    heading: "El nivel sigue a la memoria",
    sub:
      "Al iniciarse, el nodo lee sysctl — modelo del chip, número de núcleos de CPU, memoria unificada física, SSD libre — y elige un nivel automáticamente. Lleva la app a otro Mac y el nivel va con ella; no hay nada que reconfigurar.",
    columns: [
      "Memoria unificada",
      "Chip habitual",
      "Modelo de texto",
      "Modelo de vídeo",
      "Primer token*",
      "Rendimiento*",
      "Pico residente*",
      "Modo",
    ],
    modes: {
      lightweight: "Inferencia ligera",
      balanced: "Equilibrado",
      full: "Pesos completos",
    },
    footnote:
      "* Esas tres columnas son estimaciones de ingeniería, no mediciones de laboratorio. Proceden de una decodificación limitada por el ancho de banda de memoria de un modelo denso 27B, más una lectura de la proporción de cuantización de la huella de los pesos de LTX-2.5. La temperatura sostenida, la generación del chip, la carga en segundo plano, la duración de los clips y los trabajos simultáneos mueven las cifras reales entre dos y tres veces. Úsalas para elegir un nivel, no como una promesa de rendimiento.",
    rules: [
      "96 GB o más — pesos BF16 originales de LTX-2.5 con Qwen3.8-27B en Q8_0.",
      "De 48 a 95 GB — LTX-2.5 MLX cuantizado a 8-bit con Qwen3.8-27B en Q4_K_M.",
      "Menos de 48 GB — inferencia ligera; el trabajo de vídeo pesado se ofrece a Edge Compute Mesh en lugar de renderizarse en local.",
    ],
  },

  install: {
    heading: "Tres minutos y ya es tuyo",
    sub:
      "El nodo no tiene instalador, ni cuenta de demonio, ni nada que registrar. Es una sola app de la barra de menús que se enlaza a loopback.",
    steps: [
      {
        title: "Verifica y abre el DMG",
        body:
          "Baja POPOPX-Mac-Node-Universal.dmg y su .sha256 desde Releases, los dos a la misma carpeta, y compruébalos antes de abrir nada: shasum -a 256 -c POPOPX-Mac-Node-Universal.dmg.sha256 debe imprimir OK. Arrastra la app a /Applications.",
      },
      {
        title: "Despliega los motores locales",
        body:
          "Abre el elemento de la barra de menús y arranca el asistente de la consola. El primer paso perfila el chip, la memoria unificada y el SSD, descarga la cuantización de Qwen3.8 que cabe en el nivel, inicializa el espacio de trabajo ltx2 y envía el registro de instalación a la página mientras se ejecuta.",
      },
      {
        title: "Empareja el iPhone",
        body:
          "Escanea desde la consola el QR de emparejamiento con el cliente POPOPX iOS. Ese único escaneo establece el puente SMP; a partir de entonces las cuentas de servicio de Discover hablan con tu nodo y con nada más.",
      },
      {
        title: "Enciende los motores",
        body:
          "Diez interruptores. Un motor solo se ejecuta si lo activas, y los cuatro que no necesitan un modelo local — el bloqueo físico, la caja fuerte con bloqueo de tiempo, el rastreador de marcas de agua, el lector de informes de laboratorio — funcionan antes de que se descargue un solo peso. FFmpeg se sigue llamando; la pila de modelos, no.",
      },
    ],
    bridgeTitle: "Dirige los motores desde tu propio script",
    bridgeBody:
      "La carpeta de integraciones incluye un puente TypeScript y dos adaptadores de agentes. No abre ningún puerto nuevo ni arranca un segundo demonio: reutiliza la consola en 127.0.0.1:18920 y el token de un solo uso por proceso, y envía la misma señalización NODE_CMD que envía el teléfono. La acción de bloqueo exige doble confirmación — allowLockdown debe ser true y PPX_BRIDGE_SECRET debe tener al menos dieciséis caracteres — y una denegación se escribe en el registro del plugin para que veas que ocurrió.",
    requirementTitle: "Un requisito previo, dicho con honestidad",
    requirementBody:
      "El paso 2 del asistente del propio nodo, el QR de emparejamiento y el puente SMP necesitan un demonio de chat popopx-chat en tu PATH. El nodo sondea exactamente un ejecutable y no tiene alternativa, porque una compilación de upstream responde a una línea de versión y después todos los comandos siguientes fallan. Los diez motores en sí no lo necesitan.",
    copyCommand: "Copiar el comando",
    commandCopied: "Copiado",
  },

  faq: {
    heading: "Preguntas que la gente hace de verdad",
    sub: "Respuestas cortas, con la parte que no podemos garantizar bien visible.",
    items: [
      {
        q: "¿Algo de esto se ejecuta en vuestros servidores?",
        a: "No. Los comandos de los diez motores llegan desde el cliente iOS por tu propia cola popopx-chat, cifrados de extremo a extremo, y la inferencia, el renderizado, el almacenamiento y la ejecución física ocurren todos en tu Mac. Ni un solo paso necesita nuestra infraestructura, y no hay ninguna ruta de código en el nodo que alcance una API de inferencia alojada: el cliente del modelo está fijado a 127.0.0.1.",
      },
      {
        q: "¿Qué tengo que registrar?",
        a: "Nada. No hay cuenta, ni número de teléfono, ni dirección de correo, ni identificador de publicidad en ninguna parte del producto. Emparejar el teléfono con el nodo es un escaneo de QR, y la consola web se enlaza solo a loopback, rota un token aleatorio en cada arranque y es inalcanzable desde el resto de tu red local.",
      },
      {
        q: "¿Por qué AGPL-3.0, y qué te obliga a hacer la sección 13?",
        a: "Cada archivo fuente del nodo es AGPL-3.0-only, lo que significa que puedes ejecutarlo, estudiarlo, modificarlo y redistribuirlo libremente. La sección 13 añade la cláusula de red: si ofreces un nodo modificado como servicio a otras personas, tienes que ofrecerles tu código fuente correspondiente. Ese es todo el coste de cumplimiento, y es la razón por la que el proyecto puede seguir siendo libre de ejecutar.",
      },
      {
        q: "¿La marca de agua o el protocolo de puntos de cálculo siguen cerrados?",
        a: "No, y esa afirmación es la que más esperamos que alguien compruebe. El código de credenciales BBS+ y BLS12-381, la lógica de derechos y el registro de parámetros criptográficos están abiertos en popopxmq; la marca de agua en GOP y en el dominio de la frecuencia, y su decodificador invidente, están en este repositorio. Lo que vende la vía comercial son el centro de datos, el turno de guardia, el canal de distribución y el papeleo de cumplimiento, nunca una barrera de código fuente.",
      },
      {
        q: "¿Puedo publicar un fork con el nombre y el logo de POPOPX?",
        a: "No. Las marcas no están licenciadas por AGPL-3.0 y ningún nivel de soporte las concede. La política pide el único remedio que no le cuesta nada al fork: renombra el software, sustituye las marcas, conserva el código. Usar la marca requiere una licencia escrita aparte.",
      },
      {
        q: "¿Cuánto debo fiarme de las cifras de la tabla de hardware?",
        a: "Lo que dice la frase de debajo. Son cálculos aproximados, no mediciones de tu máquina, y el rendimiento real se mueve entre dos y tres veces con la temperatura y la carga. La versión 1.1 del nodo las sustituye por lecturas de tokens y vatios por motor, medidas en la máquina que estás usando de verdad.",
      },
      {
        q: "¿Qué máquinas están admitidas?",
        a: "macOS 14 o posterior en Apple Silicon. La escala de niveles, Metal y MLX dan todos por hecha la memoria unificada, y MLX no funciona en Intel, así que un Mac Intel no es un host al que apunte este proyecto, aunque el DMG Universal siga llevando un segmento x86_64. La app en sí no enlaza ninguna biblioteca de terceros: solo frameworks de Apple. Lo que dirige va aparte por diseño: Ollama, FFmpeg y los pesos de LTX-2.5 son herramientas locales que llaman los motores, y cada motor indica cuáles necesita.",
      },
    ],
  },

  footer: {
    tagline: "Cálculo local para el ecosistema POPOPX. Tuyo para ejecutarlo, tuyo para leerlo.",
    licenceHeading: "Licencia",
    licenceBody:
      "El código fuente del nodo es AGPL-3.0-only. Los recursos gráficos creados por este proyecto son AGPL-3.0-only o, a tu elección, CC0-1.0.",
    trademarkHeading: "Marca",
    trademarkBody:
      "POPOPX, POPOPX Chat y el logo de POPOPX son marcas del proyecto POPOPX Chat. El icono usado en este sitio es el icono de la app POPOPX iOS sin modificar. Consulta TRADEMARK-POPOPX.md en el repositorio popopx-chat para ver la política.",
    privacyHeading: "Esta página",
    privacyBody:
      "Sin analítica, sin cookies, sin huellas digitales, sin scripts de terceros y sin CDN externo. La única solicitud saliente que la página puede hacer es a api.github.com para obtener la lista de archivos de la versión, y recurre a un enlace fijo cuando esa llamada falla.",
    appleNotice:
      "Sin vinculación con Apple. macOS, iOS, Apple Silicon y Metal son marcas de Apple Inc.",
    sourceRepo: "Código fuente de Mac Node",
    iosRepo: "Código fuente del cliente iOS",
    backToTop: "Volver arriba",
  },
};

import type { Dictionary } from "../types";

export const es: Dictionary = {
  dir: "ltr",

  nav: {
    overview: "Resumen",
    node: "Qué es un nodo",
    features: "Capacidades",
    install: "Instalación y configuración",
    security: "Privacidad y control",
    troubleshooting: "Solución de problemas",
    releases: "Versiones y GitHub",
    download: "Obtener el nodo",
    openMenu: "Abrir el menú",
    closeMenu: "Cerrar el menú",
    chooseLanguage: "Idioma",
  },

  ecosystem: {
    heading: "El resto de POPOPX",
    body:
      "Tres portales, un proyecto y los tres nuestros. Nada de esta página carga nada desde ellos y nunca se les envía una solicitud: solo sale de node.popopx.chat si usted hace clic.",
    chat: "POPOPX Chat",
    chatBody:
      "La propia red de mensajería — de extremo a extremo, sin ID global — y la cola a la que escucha su nodo.",
    botStudio: "Bot Studio",
    botStudioBody:
      "Donde se escriben y se alojan las cuentas de servicio que hay detrás de los diez motores, en un servidor que usted controla.",
    serviceSuite: "Cuentas de servicio",
    serviceSuiteBody:
      "El ecosistema de canales cifrados con conocimiento cero con el que hablan esos motores.",
  },

  routes: {
    "/": { eyebrow: "RESUMEN", title: "POPOPX Mac Node — su propio Mac ejecuta los diez motores" },
    "/node": { eyebrow: "QUÉ ES UN NODO", title: "Qué es un nodo y qué no es — POPOPX Mac Node" },
    "/features": { eyebrow: "CAPACIDADES", title: "Diez motores locales y el hardware que los ejecuta — POPOPX Mac Node" },
    "/install": { eyebrow: "INSTALACIÓN Y CONFIGURACIÓN", title: "Instalar, vincular, actualizar, copiar y quitar — POPOPX Mac Node" },
    "/security": { eyebrow: "PRIVACIDAD Y CONTROL", title: "Qué se queda en su disco y cómo pararlo — POPOPX Mac Node" },
    "/troubleshooting": { eyebrow: "SOLUCIÓN DE PROBLEMAS", title: "Puertos, cortafuegos y techos de memoria — POPOPX Mac Node" },
    "/releases": { eyebrow: "VERSIONES Y CÓDIGO FUENTE", title: "Versiones, huellas y todo el árbol de código fuente — POPOPX Mac Node" },
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Su dispositivo. Su nodo.",
    titleAccent: "Su control.",
    subtitle:
      "POPOPX Mac Node es el borde de la red, y ese borde es suyo. Ejecuta en su propio Mac los motores de modelos, de medios y de archivos que hay detrás de los diez servicios de Discover, junto a POPOPX Chat y Bot Studio. La red retransmite sus mensajes cifrados; la inferencia, el render, el archivo sellado y los secretos se quedan en el hardware que usted compró.",
    ctaDownload: "Descargar el DMG",
    ctaSource: "Leer el código fuente",
    releaseLabel: "Última versión",
    sizeLabel: "Tamaño",
    digestLabel: "SHA-256",
    statusFetching: "Consultando GitHub Releases…",
    statusLive: "En vivo desde GitHub Releases",
    statusFallback: "GitHub inaccesible — se muestra la versión fijada",
    copyDigest: "Copiar la huella",
    digestCopied: "Huella copiada",
    verifyTitle: "Verifique antes de abrir",
    verifyBody:
      "Guarde la imagen y el archivo de huellas de la versión en la misma carpeta y compruebe ambos antes de abrir nada. El archivo de huellas cambia según la versión — las más recientes publican un manifiesto SHA256SUMS.txt y las antiguas un solo .sha256 para un solo archivo —, así que la sección Versiones y GitHub imprime los dos comandos exactos para la versión que está mirando.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Su propio hardware",
    statStorage: "Artefactos en su propio SSD",
    statIdentity: "Sin cuenta, sin ID",
    statSource: "AGPL-3.0 de extremo a extremo",
  },

  overview: {
    splitHeading: "La red coordina. Su máquina ejecuta.",
    splitSub:
      "Esta es toda la idea, y merece la pena enunciarla con precisión, porque la lectura habitual de un producto así está del revés: la nube no hace el trabajo y su Mac no es un cliente ligero. Cada parte hace únicamente la parte que le corresponde.",
    cloudTitle: "Qué transporta la red",
    cloudBody:
      "Los relés SMP y el almacenamiento XFTP mueven sus mensajes y sus archivos de extremo a extremo entre sus propios dispositivos, y las diez cuentas de servicio de Discover envían una señal cada una. Un relé ve texto cifrado y metadatos de encaminamiento. Nunca recibe un modelo, un prompt, un fotograma ni un nombre de archivo, y no ejecuta ninguna parte de ningún motor.",
    macTitle: "Qué hace su Mac",
    macBody:
      "El nodo toma esa señal y hace el trabajo en la máquina que tiene delante: inferencia cuantizada a través de Ollama en loopback, render de LTX-2.5 a través de MLX, FFmpeg y marca de agua en GOP, sellado con CryptoKit y cajas fuertes con cadena de hashes, diskutil y AppKit para las acciones físicas. Después escribe el resultado en su propio disco.",
    pathsHeading: "Empiece donde está de verdad",
    paths: [
      {
        title: "Entienda la separación",
        body:
          "Qué es un nodo, la única línea a la que escucha, cómo un teléfono consigue permiso para dirigirlo y qué puertos intervienen.",
      },
      {
        title: "Póngalo en un Mac",
        body:
          "Requisitos previos, el DMG verificado, la compilación desde el código fuente, la primera vinculación, las actualizaciones, el cambio de máquina y la eliminación completa.",
      },
      {
        title: "Mire qué se va",
        body:
          "Un repaso, directorio a directorio, de la raíz de datos, de qué se envía de vuelta a su teléfono, de dónde viven las claves y de cómo parar o revocar.",
      },
      {
        title: "Arregle lo que falló",
        body:
          "Los fallos que ocurren de verdad: un puerto ya ocupado, un modelo que nunca respondió, unos pesos que se omitieron, un código que caducó.",
      },
    ],
  },

  architecture: {
    heading: "Tres garantías y ningún servicio por medio",
    sub:
      "Lo interesante de esta arquitectura es lo que le falta: ningún servicio de cuentas, ningún depósito de claves, ningún endpoint de analítica, ninguna inferencia alojada.",
    items: [
      {
        title: "Almacenamiento local físico",
        body:
          "Cada artefacto que produce un motor — el resumen, el clip con marca de agua, el archivo sellado, el informe decodificado — se escribe en su propio SSD bajo una única raíz de datos. Queda fuera de la sincronización con iCloud y fuera de cualquier contenedor compartido, y los libros de registro se escriben con protección completa de archivos, de modo que no se pueden leer en reposo una vez bloqueada la máquina.",
      },
      {
        title: "Sin cuenta, sin ID",
        body:
          "No hay registro, ni número de teléfono, ni correo electrónico, ni identificador de dispositivo que entregar. Vincular el teléfono con el nodo es un solo escaneo de QR, y los comandos que llegan después viajan por su propia cola popopx-chat, con SMP y XFTP llevándolos de extremo a extremo.",
      },
      {
        title: "AGPL-3.0 en toda la pila",
        body:
          "Los diez motores, la pasarela SMP, la consola web local, la marca de agua en GOP y en el dominio de la frecuencia y el libro de puntos de computación forman un único árbol de código fuente AGPL-3.0-only. No hay un núcleo cerrado: el código de credenciales de firma invidente y el registro de parámetros criptográficos están en popopxmq, en abierto.",
      },
    ],
  },

  node: {
    heading: "Un nodo es un ordenador que usted ya tiene",
    sub:
      "Ni una región, ni un tipo de instancia, ni un nivel de suscripción. Un solo Mac que ejecuta las partes de POPOPX que no deberían ocurrir en otro sitio, y lo único en lo que tiene que confiar es la máquina a la que ya confía sus archivos.",
    points: [
      {
        title: "El trabajo delicado nunca sale",
        body:
          "Los informes médicos los analiza Vision en su propia máquina. El material en bruto se recorta y se le pone marca de agua localmente. El sellado de la caja fuerte y el archivo sellado son operaciones de CryptoKit en su propio disco. Ninguno de esos caminos tiene un endpoint alojado al que llamar.",
      },
      {
        title: "La distancia es cero",
        body:
          "La inferencia ocurre en memoria unificada, al lado del proceso que la pidió. El cliente del modelo está fijado a 127.0.0.1:11434, y por eso no hay en el nodo ni un solo camino de código que pueda alcanzar una API de inferencia alojada ni por accidente: primero habría que cambiar la literal de host.",
      },
      {
        title: "Ya pagó por él",
        body:
          "Los puntos de computación miden los ciclos que gasta su propio hardware, y Edge Compute Mesh es el único motor que presta capacidad ociosa hacia fuera en lugar de tomarla prestada. El nivel que obtiene es una función de la memoria que compró.",
      },
      {
        title: "El permiso es por dispositivo",
        body:
          "Un código de vinculación firmado, de un solo uso y de quince minutos autoriza un dispositivo. La consola lista lo que está vinculado, y revocarlo es un botón, con una advertencia honesta sobre lo que ese botón no hace, que está en la página de privacidad.",
      },
    ],
    wireHeading: "Una línea, tres segmentos",
    wireBody:
      "Un comando desde el teléfono es un mensaje corriente en su propia cola popopx-chat, y dentro lleva una sola línea marcadora: un prefijo, el id del motor, la acción y una carga útil JSON. El parser divide solo en el primer separador, así que una carga útil que contenga ese separador sobrevive intacta, y una línea cuyo id de motor no se conoce, cuya carga útil está vacía o cuya carga útil pasa del techo que acepta la parte de iOS, se descarta en lugar de ejecutarse a medias.",
    wireSampleLabel: "La única forma aceptada",
    pairingHeading: "La vinculación, en el orden en que ocurre de verdad",
    pairingSub:
      "El nodo acuña una credencial, usted la enseña al teléfono una vez y después de eso la credencial ya no vale nada. No se guarda nada en un servidor, porque no hay ningún servidor que pudiera guardarlo.",
    pairingSteps: [
      {
        title: "El nodo ofrece",
        body:
          "Desde la barra de menús o desde la consola, el nodo escribe una oferta, firma el cuerpo con su propia clave Ed25519 — la que está en pairing/node.key bajo su raíz de datos — y la renderiza localmente como código QR con CoreImage. Ninguna imagen sale de la máquina.",
      },
      {
        title: "El teléfono la reclama",
        body:
          "POPOPX iOS escanea el código, y el contacto que resulta es la clave del dispositivo. Ese único escaneo establece el puente SMP; a partir de entonces las cuentas de servicio de Discover hablan con su nodo y con nada más.",
      },
      {
        title: "La oferta muere",
        body:
          "La primera reclamación marca la oferta como usada. Generar un código nuevo jubila el anterior, así que un QR fotografiado no es una invitación permanente: caduca solo, a los quince minutos, aunque nadie lo escanee nunca.",
      },
    ],
    pairingFacts: {
      lifetime: "Vigencia de la oferta",
      singleUse: "Canje",
      signature: "Firmada por",
      delivery: "Renderizada como",
    },
    portsHeading: "La parte del nodo que escucha",
    portsSub:
      "El nodo en sí abre un puerto. Los otros dos son de programas que él arranca y a los que se conecta como cliente, algo que importa cuando lee un registro de cortafuegos: una conexión a 11434 o a 5225 la hizo el nodo, no la aceptó.",
    portsColumns: ["Puerto", "Lo enlaza", "Dirección", "Protocolo", "Qué lo protege"],
    portsOwner: {
      node: "El nodo",
      tool: "Ollama",
      daemon: "popopx-chat",
    },
    portsPurpose: {
      console: "Consola web y flujo de registros de los motores",
      inference: "Inferencia local de modelos",
      control: "Socket de control del demonio de chat",
    },
    portsFootnote:
      "Los tres son de loopback. La consola es HTTP sin TLS, lo que solo es un diseño razonable porque nunca sale de la máquina: los intentos de enlazarse en 0.0.0.0, en una dirección de red local o en un nombre de host se rechazan antes de crear un socket, y la dirección está fija en la app en lugar de leerse de un archivo de configuración. Lo que la protege en su lugar es un token aleatorio de veinticuatro bytes emitido en cada arranque, enviado como X-PPX-Token, guardado solo en memoria y muerto cuando el proceso termina. El socket de control del demonio de chat no tiene autenticación de ningún tipo — esa es su descripción honesta —, y es seguro solo mientras siga en 127.0.0.1.",
  },

  engines: {
    heading: "Diez motores soberanos",
    sub:
      "Tres estantes y diez cuentas de servicio oficiales. Cada tarjeta de abajo muestra su propio precio: una cantidad fija de Créditos de computación por un ciclo de 30 días o, para Edge Compute Mesh, un pago por trabajo con una tasa de protocolo del 10%. Todos ellos se ejecutan sobre hardware que usted ya posee.",
    filterAll: "Todos",
    substrateLabel: "Sustrato",
    quickMenuLabel: "Menú rápido de iOS",
    quickMenuHint:
      "Cada botón envía ::popopx_sys::NODE_CMD::<service>::<action>::{} a su nodo vinculado.",
    deterministicBadge: "Determinista — ningún modelo en la ruta",
    modelBadge: "Modelo local en el ciclo",
    offlineBadge: "Funciona sin pesos de modelo locales",
    openDetails: "Abrir",
    closeDetails: "Cerrar",
    shelfCount: "motores",
    creditsUnit: "Créditos de computación",
  },

  hardware: {
    heading: "El nivel sigue a la memoria",
    sub:
      "Al iniciarse, el nodo lee sysctl — modelo del chip, número de núcleos de CPU, memoria unificada física, SSD libre — y elige un nivel automáticamente. Lleve la app a otro Mac y el nivel va con ella; no hay nada que reconfigurar.",
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
      "* Esas tres columnas son estimaciones de ingeniería, no mediciones de laboratorio. Proceden de una decodificación limitada por el ancho de banda de memoria de un modelo denso 27B, más una lectura de la proporción de cuantización de la ocupación de los pesos de LTX-2.5. La temperatura sostenida, la generación del chip, la carga en segundo plano, la duración de los clips y los trabajos simultáneos mueven las cifras reales entre dos y tres veces. Úselas para elegir un nivel, no como una promesa de rendimiento.",
    rules: [
      "96 GB o más — pesos completos originales de LTX-2.5 en BF16 con Qwen3.8-27B en Q8_0.",
      "De 48 a 95 GB — LTX-2.5 cuantizado con MLX a 8 bits, con Qwen3.8-27B en Q4_K_M.",
      "Menos de 48 GB — un modelo 9B en Q4_K_M, solo renders cortos y vídeo pesado ofrecido a Edge Compute Mesh.",
    ],
    plansHeading: "Qué despliega realmente cada nivel",
    plansSub:
      "La tabla de arriba es la guía que se lee antes de comprar. Esta es la que el nodo anota para sí mismo después de medir la máquina, salida tal cual de la función de recomendación, incluido el tag de modelo que descarga.",
    plansColumns: [
      "Banda de memoria",
      "Modelo de texto",
      "Pila de vídeo",
      "Techo residente",
      "Vídeo pesado",
      "Comando de descarga",
    ],
    heavyVideo: {
      local: "Se renderiza aquí",
      mesh: "Se ofrece a la malla",
    },
    plansFootnote:
      "El techo residente es una regla aritmética sobre la memoria medida, no un benchmark: cada nivel resta a la memoria unificada que encontró un margen fijo para la sesión de escritorio, con un tope para que una máquina muy grande no prometa más de lo que la pila necesita. Los tags de modelo y las cuantizaciones son las cadenas que el nodo pasa de verdad a Ollama.",
  },

  install: {
    heading: "Un DMG, un escaneo, diez interruptores",
    sub:
      "El nodo no tiene instalador, ni cuenta de demonio, ni nada que registrar. Es una sola app de la barra de menús que se enlaza a loopback, y el primer arranque hace el perfilado él solo.",
    prereqsHeading: "Antes de descargar",
    prereqNotes: {
      system: "El paquete va dirigido a macOS 14 y la app es un agente de la barra de menús.",
      memory:
        "Metal, MLX y toda la escala de niveles dan por hecha la memoria unificada. El DMG lleva un corte x86_64, pero ninguna parte de la pila está ajustada para Intel.",
      disk:
        "Los pesos de modelo se rechazan mientras el espacio libre sea de 40 GB o menos, así que el techo de la escala es también el de su disco.",
      media:
        "Cinco de los diez motores llaman a FFmpeg. El asistente de instalación puede instalarlo mediante Homebrew.",
      inference:
        "Ollama para los modelos de texto cuantizados y el espacio de trabajo LTX-2.5 MLX para el vídeo. Las dos son herramientas locales; ninguna es un servicio.",
      bridge:
        "Hace falta solo para el paso de vinculación SMP y para el camino dirigido desde el teléfono. Los motores en sí funcionan sin él.",
    },
    prereqRequired: {
      hard: "Obligatorio",
      wizard: "Lo instala el asistente",
      optional: "Solo para vincular",
    },
    steps: [
      {
        title: "Verifique y abra el DMG",
        body:
          "Lleve POPOPX-Mac-Node-Universal.dmg y el archivo de huellas de la versión a la misma carpeta y compruebe ambos antes de abrir nada; la sección Versiones y GitHub imprime los dos comandos para la versión actual. Arrastre POPOPX Mac Node.app a /Applications. La compilación publicada lleva una firma Developer ID y un ticket de notarización adherido, así que Gatekeeper la acepta sin ayuda: spctl -a -vv -t install responde accepted con source=Notarized Developer ID. Una compilación que haga usted va firmada ad hoc, y esa sí pide un clic derecho con Abrir la primera vez.",
      },
      {
        title: "Deje que perfile la máquina",
        body:
          "Arranque la app y abra la consola desde la barra de menús. El paso uno lee de sysctl el chip, el número de núcleos, la memoria unificada y el SSD libre, imprime el nivel que seleccionó y el tag de modelo que ese nivel implica, y muestra los números que ha medido, no los que usted declaró.",
      },
      {
        title: "Despliegue los motores locales",
        body:
          "El asistente va bajando por la lista: Homebrew, FFmpeg, uv, Ollama, la cuantización de Qwen que cabe en su nivel, el espacio de trabajo de LTX-2.5 y después una autocomprobación. El registro de instalación se transmite a la página de la consola mientras se ejecuta, y se escribe en logs/install.log para que un fallo pueda leerse después.",
      },
      {
        title: "Vincule el iPhone",
        body:
          "Genere el QR de vinculación — desde la consola, o desde la opción de código nuevo de la barra de menús — y escanéelo con el cliente POPOPX iOS. El código está firmado, es de un solo uso y caduca en quince minutos. El dispositivo aparece en la lista de vinculados de la consola con su modelo, su hora de vinculación y su última detección.",
      },
      {
        title: "Encienda los motores",
        body:
          "Diez interruptores en la barra de menús y en la consola. Un motor solo se ejecuta si usted lo activa, y los cuatro que no necesitan un modelo local — el bloqueo físico, la caja fuerte con bloqueo de tiempo, el rastreador de marcas de agua y el lector de informes de laboratorio — funcionan antes de que se descargue un solo peso. FFmpeg se sigue llamando; la pila de modelos, no.",
      },
    ],
    buildHeading: "O compílelo desde el mismo tag",
    buildBody:
      "Las imágenes publicadas se empaquetan desde el árbol que usted puede descargar. swift build, swift test, swift build -c release y después bash Scripts/build_dmg.sh --output dist --version v1.0.2 escribe el DMG universal, lo firma ad hoc y emite su sidecar junto a él. El artefacto publicado sale del otro script: Scripts/build-release.sh añade la firma Developer ID, el envío de notarización y el ZIP, y por eso una imagen descargada pasa spctl y su propia compilación no. Los dos solo corren en macOS, porque están hechos con hdiutil y codesign.",
    lifecycleHeading: "Después del primer arranque",
    lifecycle: [
      {
        title: "Actualizar",
        body:
          "No hay actualizador ni comprobación de actualizaciones, otra de las cosas sobre las que el nodo no contacta con nuestros servidores. Actualizar es arrastrar: baje el DMG más nuevo, verifíquelo y sustituya la app en /Applications. Los ajustes, el estado de vinculación, la clave del nodo, la caja fuerte y cada artefacto viven bajo Application Support y no dentro del paquete, así que una app sustituida hereda la máquina en la que cae.",
      },
      {
        title: "Hacer copia de seguridad y cambiar de máquina",
        body:
          "La app marca su propia raíz de datos como excluida de Time Machine, lo que protege sus copias de los pesos de modelo y le quita una sorpresa al restaurar. También significa que esa carpeta no está en su copia. Para mover un nodo, ciérrelo, copie ~/Library/Application Support/PopopxMacNode a la misma ruta en el Mac nuevo y deje que vuelva a perfilarse: el nivel puede cambiar, y pairing/node.key va dentro de la carpeta, que es toda la razón por la que esa copia debe ser tan privada como el original.",
      },
      {
        title: "Quitarlo por completo",
        body:
          "Primero apague Launch at Login y después pulsa Quit en la barra de menús, que cierra el listener y libera el elemento de inicio. Borre /Applications/POPOPX Mac Node.app y luego la raíz de datos en ~/Library/Application Support/PopopxMacNode si quiere que también desaparezcan la caja fuerte sellada, los libros de registro y los artefactos. No hay desinstalador ni recibo que olvidar: fuera de esas dos rutas nunca se instaló nada, y no existe ninguna entrada de Keychain porque la app nunca usa el Keychain.",
      },
    ],
    bridgeTitle: "Dirija los motores desde su propio script",
    bridgeBody:
      "La carpeta de integraciones incluye un puente TypeScript y dos adaptadores de agentes. No abre ningún puerto nuevo ni arranca un segundo demonio: reutiliza la consola en 127.0.0.1:18920 y el token de un solo uso por proceso, y envía la misma señalización NODE_CMD que envía el teléfono. La acción de bloqueo exige doble confirmación: allowLockdown debe ser true y PPX_BRIDGE_SECRET debe tener al menos dieciséis caracteres, y una denegación se escribe en el registro del plugin para que usted vea que ocurrió.",
    requirementTitle: "Un requisito previo, dicho con honestidad",
    requirementBody:
      "El paso 2 del asistente del propio nodo, el QR de vinculación y el puente SMP necesitan un demonio de chat popopx-chat en su PATH. El nodo sondea exactamente un ejecutable y no tiene alternativa, porque una compilación de upstream responde con una línea de versión y después fallan todos los comandos siguientes. Los diez motores en sí no lo necesitan.",
    copyCommand: "Copiar el comando",
    commandCopied: "Copiado",
  },

  security: {
    heading: "Qué se queda, qué sale y cómo pararlo",
    sub:
      "Una página de privacidad que solo enumera lo que se queda en local es una página de marketing. Esta también enumera el tráfico, porque la versión honesta de “sus datos nunca salen del dispositivo” es más larga y más útil que el eslogan.",
    localHeading: "Se queda en su disco",
    localSub:
      "Bajo una única raíz de datos, en una carpeta que la app crea y excluye de Time Machine, con los secretos escritos de forma atómica en modo 0600 y con protección completa de archivos.",
    localItems: [
      {
        title: "Cada artefacto",
        body:
          "Los clips renderizados, los resúmenes, las exportaciones con marca de agua, los archivos sellados, los informes decodificados y las entradas en cuarentena acaban todos bajo la raíz de datos y se quedan ahí. El nodo mantiene una bandeja de salida solo para los resultados que esperan a que su teléfono vuelva a estar en línea.",
      },
      {
        title: "Los modelos y sus pesos",
        body:
          "La cuantización de Qwen vive en el almacén propio de Ollama; los pesos de LTX-2.5 viven en el directorio engines del nodo. Ambos son archivos locales en disco local, descargados una vez, y la descarga se rechaza mientras el espacio libre sea de 40 GB o menos.",
      },
      {
        title: "Las claves y el estado de vinculación",
        body:
          "La clave de firma Ed25519 del nodo, la lista de dispositivos vinculados y la oferta vigente son archivos normales bajo pairing/. No hay ninguna entrada de Keychain que migrar, ni copia de la clave en la nube, ni depósito en ninguna parte, lo cual tiene sus dos caras, como dice el párrafo sobre la pérdida más abajo.",
      },
      {
        title: "El rastro de evidencia",
        body:
          "Los libros de registro del bloqueo físico y de la malla se amplían localmente con encadenado de hashes, y el registro de auditoría deja constancia de qué corrió, en qué motor y con qué resultado. Está escrito para que lo lea usted: logs/node.log es la respuesta más rápida a “qué hizo esta cosa a las 03:14”.",
      },
    ],
    transitHeading: "Sale de la máquina",
    transitSub:
      "Cuatro cosas lo hacen, y cada una de ellas es o su propio dispositivo o algo que usted configuró. No hay quinta categoría, y no hay ningún endpoint de analítica al que enviar nada.",
    transitItems: [
      {
        title: "Los resultados, de vuelta a su propio teléfono",
        body:
          "Un trabajo terminado devuelve una tarjeta de como mucho 1024 caracteres más un mensaje por archivo de artefacto, por su propia cola popopx-chat, con SMP retransmitiendo y XFTP transportando. El relé ve texto cifrado. Si el teléfono está sin conexión, el resultado espera en outbox/ y sigue reintentando hasta treinta días.",
      },
      {
        title: "Los feeds que usted le pidió que leyera",
        body:
          "Morning TV consulta las fuentes RSS que usted configuró, con un tope de tres megabytes por respuesta, y eso es una petición HTTPS saliente corriente hacia quien aloje sus feeds.",
      },
      {
        title: "Un webhook que usted configuró",
        body:
          "El bloqueo físico puede enviar por POST un evento firmado a un endpoint de domótica o de presencia. No garantiza la entrega, es opt-in y la URL es suya: el nodo no tiene ningún destino por defecto.",
      },
      {
        title: "Instalaciones y descargas de modelos",
        body:
          "El asistente descarga fórmulas de Homebrew, FFmpeg, uv, Ollama y la cuantización que usted eligió. Ese tráfico es el sentido de un paso de instalación, y ocurre una vez, delante de usted, con el registro en pantalla.",
      },
    ],
    keysHeading: "Dónde viven de verdad los secretos",
    keysBody:
      "No en el Keychain. El nodo es una app de macOS que no depende del Keychain en absoluto, y eso es una decisión, no un descuido: el material de vinculación y de caja fuerte son archivos bajo su raíz de datos, escritos con una escritura atómica, modo POSIX 0600 y protección completa de archivos, así que en reposo no se pueden leer mientras la máquina esté bloqueada. El cambio que acepta es real: los permisos de archivos son auditables y portables, y tampoco son nada entre su cuenta de usuario y un lector que ya tiene su cuenta de usuario. Trate la raíz de datos como el secreto que es: no está en Time Machine y es la única copia de la clave del nodo que existe.",
    dataNote: {
      output: "Artefactos generados, y la bandeja de salida que retiene los resultados que esperan al teléfono.",
      vault: "Archivos sellados con bloqueo de tiempo y el material de sucesión que los abre.",
      pairing: "La clave Ed25519 del nodo, la lista de dispositivos vinculados y la oferta vigente, de un solo uso.",
      weights: "Pesos de modelo y el espacio de trabajo LTX-2.5 MLX al que llaman los motores de vídeo.",
      ledger: "Libros de registro del bloqueo físico y de la malla, con encadenado de hashes.",
      logs: "El registro de instalación y el de auditoría, escritos para que los lea el operador.",
      config: "Ajustes, interruptores de motores y la configuración que comparten el puente y las integraciones.",
    },
    rootLabel: "Raíz de datos",
    controlHeading: "Su lado del interruptor de parada",
    controlSub:
      "Cuatro controles, todos locales, todos visibles en la app en lugar de enterrados en una pantalla de ajustes. Ninguno necesita la red, y por eso funcionan cuando el problema es la red.",
    controls: [
      {
        title: "Parar un motor",
        body:
          "Diez interruptores independientes en la barra de menús y en la consola. Apagar uno surte efecto en el siguiente comando, y un comando para un motor desactivado se rechaza en lugar de encolarse.",
      },
      {
        title: "Dejar de prestar ciclos",
        body:
          "Pause Mesh Sharing saca al nodo de la reserva de computación en el borde de inmediato; la barra de menús pone Paused y deja de aceptar trabajos. Es el único control que lleva la palabra pause, y va de la capacidad de la malla, no del nodo entero.",
      },
      {
        title: "Quemar el código de vinculación vigente",
        body:
          "New Pairing QR jubila la oferta pendiente y acuña una de repuesto. Quien tenga una foto del código viejo tiene una firma caducada, no una segunda oportunidad.",
      },
      {
        title: "Pararlo todo",
        body:
          "Quit es el corte de corriente de verdad: cierra el listener de loopback, libera el elemento de inicio y deja morir con el proceso el token de cada arranque. Un nodo que no está en marcha no responde nada, a nadie, sobre nada.",
      },
    ],
    revokeHeading: "Y revocar un dispositivo",
    revokeBody:
      "La lista de dispositivos vinculados de la consola tiene un botón Revoke en cada fila. Marca ese dispositivo como revocado, elimina su asignación de contacto y descarta sus comandos a partir de entonces, pero no derriba la conexión SMP, y la app lo dice en el mismo mensaje que le muestra. Para terminar el trabajo, borre el contacto en el cliente de chat. Lo que ya está escrito en su disco se queda en su disco; la revocación para los comandos futuros, no es un borrado remoto, y el nodo nunca tuvo una capacidad de borrado remoto que hubiera que quitar.",
    limitsHeading: "Lo que esta página no va a prometer",
    limitsBody:
      "La destrucción segura es una sobrescritura aleatoria, un sync y un unlink. En APFS un archivo modificado se escribe en bloques nuevos y el SSD remapea los lógicos, así que eso elimina el archivo y derrota a las herramientas corrientes de recuperación, pero no prueba que los bytes físicos viejos hayan desaparecido. Es lo mejor que puede hacer una API de archivos en espacio de usuario, y el código lo dice en el resultado que devuelve. Más allá de eso: no hay pausa global salvo Quit, no hay borrado remoto, no hay depósito de claves y por tanto no hay recuperación si pierde la máquina y la raíz de datos a la vez, y no hay actualizador al que se pueda convencer de instalar algo que usted no pidió.",
  },

  troubleshooting: {
    heading: "Cuando no hace lo que usted esperaba",
    sub:
      "Los fallos que ocurren de verdad en esta arquitectura, en el orden en que la gente los encuentra. Cada uno dice qué mirar primero, porque en una máquina sin parte de servidor el registro siempre es el camino más corto.",
    columns: ["Síntoma", "Qué está pasando", "Qué hacer"],
    items: [
      {
        symptom: "La página de la consola no se abre",
        cause:
          "El puerto está fijo en 127.0.0.1:18920 sin alternativa, así que una segunda instancia en marcha — o cualquier cosa que llegó antes — se queda con el listener. El token también es por arranque: una pestaña vieja de antes de un reinicio tiene una credencial muerta.",
        fix:
          "Busque un listener en 18920 y cierre la otra instancia; después use Open Web Console desde la barra de menús, que construye la URL actual con el token actual en lugar de uno caducado.",
      },
      {
        symptom: "Nada responde en 11434",
        cause:
          "Los motores que necesitan un modelo hablan con Ollama solo en loopback. Si Ollama no está en marcha, o se instaló sin el asistente, el motor falla en lugar de recurrir a nada alojado.",
        fix:
          "Arranque Ollama, confirme que OLLAMA_HOST es loopback y descargue la cuantización que la tabla de niveles indica para su máquina. El texto del fallo cita el comando que habría funcionado.",
      },
      {
        symptom: "Los pesos nunca se descargaron",
        cause:
          "El instalador omite las descargas de pesos salvo que weightSources esté declarado en config/engines.json, y las rechaza de plano mientras el espacio libre sea de 40 GB o menos.",
        fix:
          "Añada la fuente de la que quiera descargar, o copie los pesos a engines/weights y apunte la configuración a ellos. Libere disco primero: la protección es un umbral, no un aviso.",
      },
      {
        symptom: "Un render volvió como una línea de comando",
        cause:
          "El trabajo de vídeo necesita el espacio de trabajo de LTX-2.5 y sus pesos. Sin ellos el motor devuelve la orden exacta que habría ejecutado en lugar de fingir que produjo un archivo.",
        fix:
          "Termine el paso del espacio de trabajo del asistente, o clone el espacio de trabajo LTX-2-MLX que este indica, y vuelva a ejecutar. Es deliberado: un éxito simulado es peor que una denegación honesta.",
      },
      {
        symptom: "El código de vinculación se rechaza",
        cause:
          "Una oferta es de un solo uso y vive quince minutos. Un segundo escaneo del mismo código, o un código de una pantalla que desde entonces ha cambiado, se rechaza correctamente.",
        fix:
          "Genere un código nuevo y escanéelo una vez. Si el teléfono reintenta solo después de un éxito, la primera reclamación ya ganó y el rechazo es la respuesta esperada.",
      },
      {
        symptom: "Los comandos del teléfono no hacen nada",
        cause:
          "El puente necesita un demonio popopx-chat en el PATH y el nodo sondea exactamente un ejecutable, sin alternativa. La barra de menús pone popopx-chat not installed cuando falta, y un motor apagado no responde nada en cualquier caso.",
        fix:
          "Lea primero la línea del puente en la barra de menús, después los interruptores de motores y luego el registro de auditoría. Un comando rechazado y un comando que nunca llegó se ven idénticos desde el teléfono.",
      },
      {
        symptom: "Los resultados dejan de llegar mientras el teléfono está fuera",
        cause:
          "La entrega saliente pasa por su propio demonio y su relé, así que un cortafuegos que bloquee las salidas, un VPN que no transporta el relé o un demonio que terminó se ven igual desde aquí. Los resultados no se pierden: se encolan en outbox/ y reintentan hasta treinta días.",
        fix:
          "Confirme que el demonio está en marcha, permita después las conexiones salientes del nodo en lo que sea que las filtre y espere a que la cola se vacíe en lugar de repetir el trabajo.",
      },
      {
        symptom: "La tarjeta de descarga dice que muestra la versión fijada",
        cause:
          "api.github.com era inaccesible, estaba bloqueado, limitado por tasa de peticiones o respondió sin un archivo descargable. La página muestra entonces la versión compilada en el paquete en lugar de adivinar.",
        fix:
          "Abra la página de versiones directamente. Nada más del sitio necesita esa llamada y ninguna parte de la página queda en blanco por una llamada fallida.",
      },
    ],
    escalation:
      "Dos archivos responden la mayor parte de lo demás: logs/install.log para todo lo que hizo el asistente y logs/node.log para todo lo posterior. Los dos son texto plano bajo la raíz de datos, y el propio canal de registros de la consola muestra en vivo esos mismos eventos. Si un fallo sobrevive a leerlos, el contrato contra el que el nodo y las integraciones se prueban está en el repositorio, y las incidencias van en popopx-mac-node.",
  },

  releases: {
    heading: "Versiones, huellas y todo el árbol",
    sub:
      "Todo con lo que se construye el nodo está en un único repositorio AGPL-3.0-only, y cada imagen publicada se puede contrastar con una huella antes de abrirla. Esta sección es donde el sitio deja de describir y empieza a señalar.",
    assetsHeading: "Archivos publicados",
    assetsColumns: ["Archivo", "Qué es", "Tamaño"],
    assetKinds: {
      dmg: "Imagen de disco para arrastrar a Applications, universal arm64 y x86_64. Es la que hay que llevarse.",
      sidecar: "Una huella para un solo archivo, escrita por el paso de empaquetado que lo compiló.",
      zip: "El paquete de aplicación firmado como contenido ZIP, para un archivo en lugar de un volumen.",
      sums: "Un manifiesto que lista cada artefacto de la versión con su huella.",
    },
    missingAsset:
      "No todas las versiones publican todos los archivos. Las versiones antiguas llevan solo la imagen de disco y su sidecar, y por eso la comprobación de abajo lee la versión que usted abrió de verdad.",
    verifyHeading: "Verifique antes de abrir nada",
    verifyBody:
      "Dos comandos, ejecutados en la carpeta donde descargó. La forma de manifiesto es la preferida y es la que publica la versión actual.",
    verifySumsBody:
      "Un manifiesto de versión lista cada artefacto, así que un archivo que usted no descargó es algo esperado y no una ausencia: pase --ignore-missing y lea la línea que corresponde al archivo que cogió. El manifiesto se escribe en el mismo paso que empaqueta el contenido que nombra.",
    verifySidecarBody:
      "Una versión antigua publica en su lugar un sidecar de un solo archivo, y ese es el archivo contra el que comprobar. Donde una versión tiene los dos y no coinciden, crea al manifiesto: el sidecar puede venir de otra compilación de la misma versión.",
    pipelineHeading: "Cómo llega aquí una versión",
    pipelineBody:
      "Publicar un tag ejecuta el flujo de versiones en un runner de macOS: compila el árbol, corre las pruebas de contrato, empaqueta la imagen universal con Scripts/build_dmg.sh, se niega a publicar un archivo de sumas de verificación que contenga una ruta absoluta y sube lo que ese script escribió. Una imagen notarizada junto a un manifiesto SHA256SUMS.txt viene en cambio de Scripts/build-release.sh, que añade la firma Developer ID, el envío de notarización a Apple y el ZIP. Los dos caminos terminan igual: con una huella que usted puede comprobar sin confiar en esta página.",
    supportedHeading: "En marcha hoy",
    supportedItems: [
      "Los diez motores, cada uno con su propio conjunto de acciones y de caminos de rechazo, activados por separado.",
      "Selección automática de nivel desde sysctl, con la descarga de modelo que cada nivel implica.",
      "Vinculación firmada, de un solo uso y de quince minutos, y una consola que solo se enlaza a loopback.",
      "El puente TypeScript y los dos adaptadores de agentes sobre la misma consola y el mismo token.",
    ],
    roadmapHeading: "Todavía no",
    roadmapSub:
      "Escrito como planes en el repositorio, no como promesas en una página. Nada de ello está en marcha hoy.",
    roadmap: [
      {
        title: "Mediciones por motor en su propia máquina",
        body:
          "Un panel de uso y cronologías de fallos devueltos al teléfono: lecturas de tokens y vatios de la máquina que tiene delante, en lugar de las estimaciones de la tabla de hardware.",
      },
      {
        title: "Aislamiento más fuerte de la malla y un libro de registro exportable",
        body:
          "Una contención más estricta para la capacidad prestada y un libro de registro que usted pueda sacar de la app en lugar de leerlo dentro.",
      },
      {
        title: "Custodia fragmentada para más de un heredero",
        body:
          "La división del material de sucesión entre varios herederos y más formatos de informe en el motor de salud.",
      },
      {
        title: "Canales de distribución firmados y más niveles de vídeo",
        body:
          "La evaluación de un canal de tienda más allá de la notarización y niveles adicionales de LTX para las bandas de memoria que la escala aún no cubre.",
      },
    ],
    sourceHeading: "El código fuente y qué obliga la licencia",
    sourceBody:
      "Un repositorio, AGPL-3.0-only, sin núcleo cerrado: los motores, la consola, la marca de agua y el libro de registro están todos ahí, y el código de credenciales de firma invidente y el registro de parámetros criptográficos están abiertos en popopxmq a su lado. La sección 13 se aplica de la manera corriente: ejecútelo, estúdielo, modifíquelo libremente y, si ofrece un nodo modificado como servicio a otras personas, ofrézcales su código fuente correspondiente. Ese es todo el coste de cumplimiento.",
    licenceHeading: "Qué no está cubierto",
    licenceBody:
      "AGPL-3.0 no concede licencia alguna sobre el nombre ni el logotipo de POPOPX. Una bifurcación puede tomarlo todo menos las marcas: renombre el software, sustituya las marcas, conserve el código.",
  },

  faq: {
    heading: "Las preguntas que la gente hace de verdad",
    sub: "Respuestas cortas, con la parte que no podemos garantizar bien visible.",
    items: [
      {
        q: "¿Se ejecuta algo de esto en sus servidores?",
        a: "No. Los comandos para los diez motores llegan desde el cliente de iOS por su propia cola popopx-chat, cifrados de extremo a extremo, y la inferencia, el render, el almacenamiento y la ejecución física ocurren en su Mac. Ni un solo paso necesita nuestra infraestructura, y no hay en el nodo ningún camino de código que alcance una API de inferencia alojada: el cliente del modelo está fijado a 127.0.0.1.",
      },
      {
        q: "¿Qué tengo que registrar?",
        a: "Nada. No hay cuenta, ni número de teléfono, ni dirección de correo, ni identificador publicitario en ninguna parte del producto. Vincular el teléfono con el nodo es un solo escaneo de QR, y la consola web se enlaza solo a loopback, rota un token aleatorio en cada arranque y no es accesible desde el resto de su red local.",
      },
      {
        q: "¿Por qué AGPL-3.0 y qué me obliga a hacer la sección 13?",
        a: "Cada archivo de código fuente del nodo es AGPL-3.0-only, lo que significa que puede ejecutarlo, estudiarlo, modificarlo y redistribuirlo libremente. La sección 13 añade la cláusula de red: si ofrece un nodo modificado como servicio a otras personas, tiene que ofrecerles su código fuente correspondiente. Ese es todo el coste de cumplimiento, y es la razón por la que el proyecto puede ser gratis de ejecutar.",
      },
      {
        q: "¿La marca de agua o el protocolo de puntos de computación se mantienen cerrados?",
        a: "No, y esa afirmación es la que más esperamos que se compruebe. El código de credenciales BBS+ y BLS12-381, la lógica de derechos y el registro de parámetros criptográficos están abiertos en popopxmq; la marca de agua en GOP y en el dominio de la frecuencia y su decodificador invidente están en este repositorio. Lo que vende la vía comercial es el centro de datos, la guardia de servicio, el canal de distribución y el papeleo de cumplimiento, nunca una puerta sobre el código fuente.",
      },
      {
        q: "¿Puedo publicar una bifurcación con el nombre y el logotipo de POPOPX?",
        a: "No. Las marcas no están licenciadas por AGPL-3.0 y ningún nivel de soporte las concede. La política pide el único remedio que no cuesta nada a una bifurcación: renombre el software, sustituya las marcas, conserve el código. Usar la marca exige una licencia escrita aparte.",
      },
      {
        q: "¿Cuánto debo fiarme de las cifras de la tabla de hardware?",
        a: "Lo que dice la frase que tiene debajo. Son cifras de cálculo rápido, no mediciones de su máquina, y el rendimiento real se mueve entre dos y tres veces con la temperatura y la carga. La próxima versión del nodo las sustituye por lecturas de tokens y vatios por motor, medidas en la máquina que está usando de verdad.",
      },
      {
        q: "¿Qué máquinas están admitidas?",
        a: "macOS 14 o posterior en Apple Silicon. La escala de niveles, Metal y MLX dan por hecha la memoria unificada, y MLX no corre en Intel, así que un Mac con Intel no es una máquina a la que apunte este proyecto, aunque el DMG universal siga llevando un corte x86_64. La app en sí no enlaza ninguna biblioteca de terceros: solo marcos de Apple. Lo que dirige es aparte por diseño: Ollama, FFmpeg y los pesos de LTX-2.5 son herramientas locales que llaman los motores, y cada motor indica cuáles necesita.",
      },
    ],
  },

  footer: {
    tagline: "Computación local para el ecosistema POPOPX. Suya para ejecutarla, suya para leerla.",
    licenceHeading: "Licencia",
    licenceBody:
      "El código fuente del nodo es AGPL-3.0-only. Los recursos gráficos que este proyecto creó son AGPL-3.0-only o, a su elección, CC0-1.0.",
    trademarkHeading: "Marca comercial",
    trademarkBody:
      "POPOPX, POPOPX Chat y el logotipo de POPOPX son marcas del proyecto POPOPX Chat. El icono que se usa en este sitio es el icono de aplicación de POPOPX iOS sin modificar. La política está en TRADEMARK-POPOPX.md, en el repositorio popopx-chat.",
    privacyHeading: "Esta página",
    privacyBody:
      "Sin analítica, sin cookies, sin huella digital, sin scripts de terceros y sin CDN externo. La única solicitud saliente que esta página puede hacer es a api.github.com para la lista de archivos de la versión, y si esa llamada falla muestra el enlace fijado.",
    appleNotice:
      "Sin afiliación con Apple. macOS, iOS, Apple Silicon y Metal son marcas comerciales de Apple Inc.",
    sourceRepo: "Código fuente de Mac Node",
    iosRepo: "Código fuente del cliente de iOS",
    backToTop: "Volver arriba",
  },
};

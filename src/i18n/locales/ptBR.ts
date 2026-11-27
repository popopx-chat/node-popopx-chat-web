import type { Dictionary } from "../types";

export const ptBR: Dictionary = {
  dir: "ltr",

  nav: {
    overview: "Visão geral",
    node: "O que é um nó",
    features: "Capacidades",
    install: "Instalação e configuração",
    security: "Privacidade e controle",
    troubleshooting: "Solução de problemas",
    releases: "Versões e GitHub",
    download: "Obter o nó",
    openMenu: "Abrir o menu",
    closeMenu: "Fechar o menu",
    chooseLanguage: "Idioma",
  },

  ecosystem: {
    heading: "O resto da POPOPX",
    body:
      "Três portais, um projeto, e todos são nossos. Nada nesta página carrega coisa alguma deles e nenhuma requisição jamais é feita a eles: você só sai de node.popopx.chat se clicar.",
    chat: "POPOPX Chat",
    chatBody:
      "A própria rede de mensagens — ponta a ponta, sem ID global — e a fila na qual o seu nó escuta.",
    botStudio: "Bot Studio",
    botStudioBody:
      "Onde as contas de serviço por trás dos dez motores são escritas e hospedadas, em um servidor que você controla.",
    serviceSuite: "Contas de serviço",
    serviceSuiteBody:
      "O ecossistema de canais cifrados de conhecimento zero com o qual esses motores conversam.",
  },

  routes: {
    "/": { eyebrow: "VISÃO GERAL", title: "POPOPX Mac Node — o seu próprio Mac executa os dez motores" },
    "/node": { eyebrow: "O QUE É UM NÓ", title: "O que um nó é e o que ele não é — POPOPX Mac Node" },
    "/features": { eyebrow: "CAPACIDADES", title: "Dez motores locais e o hardware que os executa — POPOPX Mac Node" },
    "/install": { eyebrow: "INSTALAÇÃO E CONFIGURAÇÃO", title: "Instalar, parear, atualizar, fazer backup, remover — POPOPX Mac Node" },
    "/security": { eyebrow: "PRIVACIDADE E CONTROLE", title: "O que fica no seu disco e como interromper — POPOPX Mac Node" },
    "/troubleshooting": { eyebrow: "SOLUÇÃO DE PROBLEMAS", title: "Portas, firewalls e tetos de memória — POPOPX Mac Node" },
    "/releases": { eyebrow: "VERSÕES E CÓDIGO-FONTE", title: "Versões, digests e toda a árvore de código-fonte — POPOPX Mac Node" },
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Seu dispositivo. Seu nó.",
    titleAccent: "Seu controle.",
    subtitle:
      "O POPOPX Mac Node é a borda da rede que você possui. Ele executa os motores locais de modelos, de mídia e de arquivos por trás dos dez serviços do Discover no seu próprio Mac, ao lado do POPOPX Chat e do Bot Studio. A rede retransmite suas mensagens cifradas; a inferência, a renderização, o arquivo selado e os segredos ficam no hardware que você comprou.",
    ctaDownload: "Baixar o DMG",
    ctaSource: "Ler o código-fonte",
    releaseLabel: "Versão mais recente",
    sizeLabel: "Tamanho",
    digestLabel: "SHA-256",
    statusFetching: "Consultando o GitHub Releases…",
    statusLive: "Ao vivo do GitHub Releases",
    statusFallback: "GitHub inacessível — exibindo a versão fixada",
    copyDigest: "Copiar digest",
    digestCopied: "Digest copiado",
    verifyTitle: "Verifique antes de abrir",
    verifyBody:
      "Salve a imagem e o arquivo de digest da versão na mesma pasta e confira os dois antes de abrir qualquer coisa. Uma versão pode publicar um manifesto SHA256SUMS.txt, um sidecar .sha256 de arquivo único, ou os dois — por isso a seção Versões e GitHub imprime exatamente os dois comandos da versão que você está vendo.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Seu próprio hardware",
    statStorage: "Artefatos no seu próprio SSD",
    statIdentity: "Sem conta, sem ID",
    statSource: "AGPL-3.0 de ponta a ponta",
  },

  overview: {
    splitHeading: "A rede coordena. Sua máquina executa.",
    splitSub:
      "Esta é a ideia inteira, e vale enunciá-la com exatidão, porque a leitura habitual de um produto assim está de cabeça para baixo: a nuvem não está fazendo o trabalho e o seu Mac não é um cliente fino. Cada lado faz apenas a parte que lhe cabe.",
    cloudTitle: "O que a rede transporta",
    cloudBody:
      "Os retransmissores SMP e o armazenamento XFTP movem suas mensagens e arquivos de ponta a ponta entre os seus próprios dispositivos, e as dez contas de serviço do Discover enviam um sinal cada. Um retransmissor vê texto cifrado e metadados de roteamento. Ele nunca recebe um modelo, um prompt, um quadro ou um nome de arquivo, e não executa nenhuma parte de nenhum motor.",
    macTitle: "O que o seu Mac faz",
    macBody:
      "O nó pega esse sinal e faz o trabalho na máquina à sua frente: inferência quantizada pelo Ollama em loopback, renderização do LTX-2.5 pelo MLX, FFmpeg e marca d'água em GOP, selagem com CryptoKit e cofres com cadeia de hashes, diskutil e AppKit para as ações físicas. Depois ele grava o resultado no seu próprio disco.",
    pathsHeading: "Comece por onde você realmente está",
    paths: [
      {
        title: "Entenda a divisão",
        body:
          "O que é um nó, a única linha em que ele escuta, como um telefone obtém permissão para comandá-lo e quais portas estão envolvidas.",
      },
      {
        title: "Coloque-o em um Mac",
        body:
          "Pré-requisitos, o DMG verificado, a compilação a partir do código-fonte, o primeiro pareamento, atualizações, a mudança de máquina e a remoção completa.",
      },
      {
        title: "Veja o que sai",
        body:
          "Um relato diretório por diretório da raiz de dados, do que é transmitido de volta ao seu telefone, de onde as chaves vivem e de como interromper ou revogar.",
      },
      {
        title: "Conserte o que quebrou",
        body:
          "As falhas que de fato acontecem: uma porta já ocupada, um modelo que nunca respondeu, pesos que foram ignorados, um código que expirou.",
      },
    ],
  },

  architecture: {
    heading: "Três garantias e nenhum serviço no meio",
    sub:
      "A parte interessante desta arquitetura é o que falta nela: nenhum serviço de conta, nenhuma custódia de chaves, nenhum endpoint de análise, nenhuma inferência hospedada.",
    items: [
      {
        title: "Armazenamento local físico",
        body:
          "Cada artefato que um motor produz — o briefing, o clipe com marca d'água, o arquivo selado, o relatório decodificado — é gravado no seu próprio SSD sob uma única raiz de dados. Ele fica fora da sincronização do iCloud e fora de qualquer contêiner compartilhado, e os livros-razão são gravados com proteção completa de arquivo, de modo que não podem ser lidos em repouso depois que a máquina é bloqueada.",
      },
      {
        title: "Sem conta, sem ID",
        body:
          "Não há cadastro, nem número de telefone, nem e-mail nem identificador de dispositivo a entregar. Parear o telefone com o nó é uma única leitura de QR, e os comandos que chegam depois viajam pela sua própria fila popopx-chat, com SMP e XFTP os levando de ponta a ponta.",
      },
      {
        title: "AGPL-3.0 em toda a pilha",
        body:
          "Os dez motores, o gateway SMP, o console web local, a marca d'água em GOP e no domínio da frequência e o livro-razão de pontos de computação são uma única árvore de código-fonte AGPL-3.0-only. Não há núcleo fechado: o código de credenciais de assinatura cega e o registro de parâmetros criptográficos estão no popopxmq, em aberto.",
      },
    ],
  },

  dashboard: {
    badge: "UI Preview — maquete de design da interface, não um nó em execução",
    heading: "O que o console mostra quando o nó está rodando",
    sub:
      "O app traz um único console web local, e esta é uma imagem da sua tela de status: a máquina que ele encontrou, a memória unificada que ele decidiu reservar, os motores que podem ser solicitados e os telefones que ele deixou entrar. O layout, os nomes das colunas e a aritmética são os do produto publicado. Nada aqui é lido de um processo em execução.",
    machineLabel: "Máquina de exemplo",
    machineHint:
      "O nó lê o chip, a contagem de núcleos e a memória física do sysctl na inicialização. Um navegador não consegue ler a sua — navigator.deviceMemory é limitado a 8 GB em qualquer implementação —, então escolha uma destas configurações e os números abaixo são recalculados.",
    statusHeading: "Status",
    statusConnected: "Conectado",
    daemonRunning: "Daemon em execução",
    loopbackNote:
      "O console se liga a 127.0.0.1 e recusa uma ligação em 0.0.0.0, em um endereço de LAN ou em um nome de host, então ele é acessível apenas a partir deste Mac.",
    memHeading: "Alocação de memória unificada",
    memTotalLabel: "Memória unificada",
    memCeilingLabel: "Teto residente",
    memMeshLabel: "Teto da malha",
    memHeadroomLabel: "Reservado para a sessão da área de trabalho",
    usageLabel: "Conjunto de trabalho dos motores (estimativa)",
    servicesHeading: "Motores e serviços locais",
    servicesNote:
      "À esquerda, os dez motores e as três prateleiras sob as quais são distribuídos — o mesmo catálogo que o menu do telefone imprime. À direita, os três endereços que o nó conhece: aquele em que ele escuta e os dois aos quais ele se conecta como cliente. Ambos são listas fixas, não medições, e um motor só roda se você o habilitar.",
    devicesHeading: "Dispositivos pareados",
    deviceColumns: ["Dispositivo", "Pareado", "Visto por último", "Revogar"],
    devicesActive: "ativo",
    revoke: "Revogar",
    revokedRow: "revogado",
    neverSeen: "nunca visto",
    disclaimer:
      "Este cartão é uma imagem, não um cliente. Ele não abre conexão alguma e não lê processo algum: escolher uma máquina aplica no seu próprio navegador a regra de níveis publicada pelo nó, e Revogar altera apenas a linha que você está vendo. No console real, esse botão marca o dispositivo como revogado, descarta os comandos dele a partir de então e não derruba a conexão de chat — a seção Privacidade e Controle diz exatamente o que ele não faz.",
  },

  node: {
    heading: "Um nó é um computador que você já tem",
    sub:
      "Não é uma região, nem um tipo de instância, nem um nível de assinatura. É um Mac que executa as partes da POPOPX que não deveriam acontecer em outro lugar — e a única coisa em que você precisa confiar é a máquina à qual já confia seus arquivos.",
    points: [
      {
        title: "O trabalho sensível nunca sai",
        body:
          "Relatórios médicos são analisados pelo Vision na sua própria máquina. Material bruto é cortado e recebe marca d'água localmente. A selagem do cofre e o arquivo selado são operações do CryptoKit no seu próprio disco. Nada nesses caminhos tem um endpoint hospedado para chamar.",
      },
      {
        title: "A distância é zero",
        body:
          "A inferência acontece na memória unificada, ao lado do processo que a pediu. O cliente do modelo está fixado em 127.0.0.1:11434, e é por isso que não existe no nó nenhum caminho de código capaz de alcançar uma API de inferência hospedada nem por acidente — o literal do host teria que mudar antes.",
      },
      {
        title: "Você já pagou por ele",
        body:
          "Os pontos de computação medem os ciclos que o seu próprio hardware gasta, e o Edge Compute Mesh é o único motor que empresta capacidade ociosa para fora em vez de tomá-la emprestada. O nível que você recebe é função da memória que você comprou.",
      },
      {
        title: "A permissão é por dispositivo",
        body:
          "Um código de pareamento assinado, de uso único e de quinze minutos autoriza um dispositivo. O console lista o que está pareado, e revogar é um botão — com uma ressalva honesta sobre o que esse botão não faz, tratada na página de privacidade.",
      },
    ],
    wireHeading: "Uma linha, três segmentos",
    wireBody:
      "Um comando vindo do telefone é uma mensagem comum na sua própria fila popopx-chat, e dentro dela há uma linha marcadora: um prefixo, o id do motor, a ação e um payload JSON. O analisador divide apenas no primeiro separador, então um payload que contenha o separador sobrevive intacto, e uma linha cujo id de motor é desconhecido, cujo payload está vazio ou cujo payload passa do teto que o lado iOS aceita é descartada em vez de executada pela metade.",
    wireSampleLabel: "A única forma aceita",
    pairingHeading: "O pareamento, na ordem em que de fato acontece",
    pairingSub:
      "O nó cunha uma credencial, você a mostra ao telefone uma vez, e depois disso a credencial não vale nada. Nada é armazenado em um servidor, porque não existe servidor que pudesse armazená-la.",
    pairingSteps: [
      {
        title: "O nó oferece",
        body:
          "Na barra de menus ou no console, o nó escreve uma oferta, assina o corpo com sua própria chave Ed25519 — a que fica em pairing/node.key sob sua raiz de dados — e a renderiza como código QR localmente pelo CoreImage. Nenhuma imagem sai da máquina.",
      },
      {
        title: "O telefone a reivindica",
        body:
          "O POPOPX iOS lê o código, e o contato que resulta é a chave do dispositivo. Essa única leitura estabelece a ponte SMP; a partir daí as contas de serviço do Discover falam com o seu nó e com mais nada.",
      },
      {
        title: "A oferta morre",
        body:
          "A primeira reivindicação marca a oferta como usada. Gerar um novo código aposenta o anterior, então um QR fotografado não é um convite permanente — ele expira sozinho após quinze minutos mesmo que ninguém o leia nunca.",
      },
    ],
    pairingFacts: {
      lifetime: "Validade da oferta",
      singleUse: "Resgate",
      signature: "Assinada por",
      delivery: "Renderizada como",
    },
    sealedHeading: "O QR é um envelope selado",
    sealedSub:
      "Desde 040ef25, o QR do assistente e o botão de copiar carregam uma única URL opaca em vez da credencial bruta. O envelope mantém o endereço do retransmissor fora de uma captura de tela, de uma prévia de link ou de um encaminhamento; não é um segredo que quem tem o app não possa abrir.",
    sealedShapeLabel: "Formato do link selado",
    sealedFacts: {
      kdf: "Derivação de chave",
      cipher: "AEAD",
      nonce: "Nonce",
      caps: "Limites do payload",
    },
    sealedBody:
      "A chave é derivada com HKDF-SHA256 a partir de uma entrada publicada dentro do app, e a caixa é ChaCha20-Poly1305 com uma string fixa de dados associados, então qualquer pessoa que leia o código-fonte pode abrir um envelope. Esse é o projeto: o link esconde o endereço da fila SMP de prévias, capturas de tela e encaminhamentos, enquanto a credencial assinada, de uso único e de quinze minutos lá dentro é o que de fato autoriza um dispositivo. O código PPXNODE1-… bruto e a URI de convite que carrega o endereço da fila ficam na gaveta de diagnósticos do console; a chave pública do nó aparece lá e nas linhas dos dispositivos pareados, nunca na face do assistente. A imagem do QR é renderizada localmente e servida apenas em loopback em /api/pairing/qr.png.",
    portsHeading: "O lado do nó que escuta",
    portsSub:
      "O nó em si abre uma porta. As outras duas pertencem a programas que ele inicia e aos quais se conecta como cliente, o que importa quando você lê um log de firewall: uma conexão para 11434 ou 5225 foi feita pelo nó, não aceita por ele.",
    portsColumns: ["Porta", "Aberta por", "Endereço", "Protocolo", "O que a protege"],
    portsOwner: {
      node: "O nó",
      tool: "Ollama",
      daemon: "popopx-chat",
    },
    portsPurpose: {
      console: "Console web e o fluxo de log dos motores",
      inference: "Inferência local de modelos",
      control: "Socket de controle do daemon de chat",
    },
    portsFootnote:
      "As três são loopback. O console é HTTP puro sem TLS, o que só é um projeto razoável porque ele nunca sai da máquina: tentativas de ligação em 0.0.0.0, em um endereço de LAN ou em um nome de host são recusadas antes que um socket seja criado, e o endereço é fixo no app em vez de lido de um arquivo de configuração. O que o protege, em vez disso, é um token aleatório de vinte e quatro bytes emitido a cada inicialização, enviado como X-PPX-Token, mantido apenas em memória e morto quando o processo termina. O socket de controle do daemon de chat não tem autenticação nenhuma — essa é a descrição honesta dele — e só é seguro enquanto permanecer em 127.0.0.1.",
  },

  hub: {
    heading: "Cinco capacidades locais, uma fronteira",
    sub:
      "A build 4 acrescenta à imagem assinada a descoberta de capacidades com escopo do proprietário, quatro adaptadores de protocolo e um link de pareamento selado. As pontes vêm desligadas por padrão, cada destino é admitido pela mesma lista positiva de permissões, e cada escrita vira uma proposta assinada que uma pessoa precisa aprovar. Nada disso é um serviço hospedado, e nada disso abre um novo listener.",
    status:
      "Na compilação assinada v1.0.2 build 4 (6de6eb8, 27 de novembro de 2026) e no DMG universal deste site. Os cartões abaixo descrevem a imagem que você está baixando, não um branch do código-fonte.",
    cards: [
      {
        title: "Uma descoberta que só responde sobre si mesma",
        body:
          "O console relata o que este Mac já tem: Ollama em 127.0.0.1:11434 e os modelos que ele serve, as pastas de trabalho que você autorizou, o estado da permissão do EventKit e uma linha de alcançabilidade TCP para até oito destinos de LAN que você mesmo digitou. É um GET /v1/discovery/capabilities somente leitura. Não há anunciante mDNS, nem varredura de portas, nem caminhada de sub-rede; só são admitidos loopback, literais RFC 1918, ULA e nomes .local, e um endereço público é recusado antes que um socket seja aberto.",
      },
      {
        title: "MCP, dentro da lista de permissões",
        body:
          "Um cliente MCP local fala JSON-RPC 2.0 initialize, tools/list e tools/call. Os servidores são registrados à mão em config/mcp_servers.json — no máximo oito. Um comando stdio precisa ser um caminho absoluto dentro de uma lista allowedCommands de dezesseis entradas e sem metacaracteres de shell; um servidor HTTP precisa responder em loopback. Uma ferramenta somente leitura pode rodar; uma ferramenta que muta nunca é executada a pedido, apenas transformada em proposta.",
      },
      {
        title: "Home Assistant e MQTT na LAN",
        body:
          "Home Assistant pela sua API REST local e um cliente MQTT 3.1.1 escrito à mão, ambos restritos a loopback, RFC 1918 e .local. Só as entidades nomeadas em exposedEntities existem para a ponte, o modo somente leitura vem ligado por padrão, e uma publicação ao broker só pode endereçar uma entidade exposta sob um prefixo que você configurou. As credenciais são referências do Keychain; settings.json não guarda token algum.",
      },
      {
        title: "O CalDAV guarda as lacunas, não o texto",
        body:
          "PROPFIND e REPORT contra até quatro servidores CalDAV auto-hospedados na LAN. O analisador de iCalendar mantém DTSTART e DTEND e descarta SUMMARY, DESCRIPTION, LOCATION, ORGANIZER e cada ATTENDEE dentro da própria análise, então não há um passo posterior de tarja que possa dar errado. Blocos de ocupação remotos são recortados dos espaços livres locais com um piso de quinze minutos; uma recorrência que o analisador não consegue avaliar é relatada como um piso, não adivinhada.",
      },
    ],
    boundaryHeading: "O que a fronteira recusa",
    boundaryItems: [
      {
        title: "Endereços públicos e nomes não resolvidos",
        body:
          "Um destino de ponte precisa ser loopback, RFC 1918, ULA ou um nome .local. Um nome de host cru não é resolvido para descobrir se é público, credenciais em uma URL são recusadas, e uma ponte HTTP não segue redirecionamento — então um host da lista de permissões não consegue rebater o nó para o servidor de outra pessoa.",
      },
      {
        title: "Escritas sem uma pessoa",
        body:
          "Uma atuação de casa inteligente ou uma ferramenta MCP que muta vira uma proposta em pending_user_approval que carrega um recibo HMAC-SHA256 vinculado ao seu id e ao seu verbo, válido por quinze minutos. O payload que roda é o payload que lhe foi mostrado, ele é registrado no log de auditoria local, e desligar a ponte anula o que estava pendente.",
      },
      {
        title: "Segredos sem alternativa em texto claro",
        body:
          "O token do Home Assistant, a senha do MQTT e a senha do CalDAV são itens do Keychain endereçados por uma referência; uma execução não empacotada os mantém apenas em memória, e nada recorre a um arquivo. O documento MCP guarda nomes de variáveis de ambiente, nunca valores.",
      },
    ],
    footnote:
      "Privacidade e Controle enuncia a mesma fronteira regra por regra, incluindo o que o nó não pode prometer.",
  },

  extensions: {
    heading: "Duas extensões locais, uma fronteira de aprovação",
    sub:
      "A build 4 acrescenta um assistente privado que lê, propõe e espera, e uma ponte para um globo 3D que você mesmo instala. Os dois vêm desligados por padrão, os dois mantêm seu estado neste Mac, e nenhum deles transforma a sugestão de um modelo em escrita sem um recibo de aprovação.",
    assistantTitle: "Assistente privado e automação controlada",
    assistantSub:
      "Um único gerente compõe quatro peças: um agendador, uma ponte de e-mail que lê em modo somente leitura e só envia após aprovação, uma sentinela de dispositivos domésticos e o portão de aprovação pelo qual toda escrita precisa passar.",
    assistantFeatures: [
      {
        title: "Quatro permissões de conector",
        body:
          "Cada conector declara um de quatro níveis — read, propose, write ou admin. O padrão é read mais propose; uma ação write ou admin é verificada de novo na entrada do executor, não no prompt do modelo.",
      },
      {
        title: "Um agendador que você liga",
        body:
          "Um briefing diário às 08:00 no horário local e uma patrulha de integridade da casa a cada 30 minutos. Os dois vêm desligados por padrão e só o proprietário pode habilitá-los; cada execução e cada mudança de estado é gravada em ledger/assistant.sqlite3.",
      },
      {
        title: "O e-mail segue somente leitura até você aprovar",
        body:
          "IMAPS 993 abre a caixa de correio com EXAMINE e BODY.PEEK, classifica os e-mails recentes em precisa de resposta, fatura, convite e notificação, e redige respostas. SMTPS 465 só envia depois que você aprova no cartão do telefone ou no console; as senhas são referências do Keychain, nunca configurações.",
      },
      {
        title: "Uma sentinela que propõe e então para",
        body:
          "A patrulha lê apenas as entidades do Home Assistant que você expôs. Uma entidade que permanece indisponível além do seu limite (15 minutos por padrão) vira uma proposta de reparo vinculada à ação, à entidade e ao digest do payload; o reparo roda uma vez, após aprovação, e uma ponte somente leitura o recusa mesmo com um recibo válido.",
      },
    ],
    godsEyeTitle: "God's Eye View, em loop",
    godsEyeSub:
      "Um programa de terceiros separado que você instala e gerencia neste Mac. O nó traz apenas a ponte em Swift: nenhum JavaScript, nenhum tile de mapa e nenhum dado.",
    godsEyeFeatures: [
      {
        title: "Instalado por você, verificado pelo nó",
        body:
          "Instalação existente ou clone em um clique de um commit fixado — o clone é opt-in, nunca por temporizador. O nome do pacote, a versão fixada, o tamanho do package.json e os dois scripts de entrada são verificados, e o SHA-256 dos scripts de entrada é registrado; um caminho que resolva para fora da raiz de instalação, inclusive por um link simbólico, é recusado.",
      },
      {
        title: "Endereço de loopback constante",
        body:
          "O host de ligação é o literal 127.0.0.1 e não é configurável; a porta padrão é 18931. Diretórios do sistema, ~/.ssh, ~/.gnupg, a pasta do Keychain e a própria raiz de dados do nó são recusados como alvos de instalação.",
      },
      {
        title: "O MCPToolGate só aperta",
        body:
          "Ferramentas geográficas somente leitura podem rodar dentro da lista de permissões do MCP. Uma ferramenta classificada como mutante — marcas de tela, desenhos, exportação de relatório, ou qualquer nome que não seja reconhecidamente uma leitura — vira pending_user_approval mesmo quando o servidor a anuncia como somente leitura. O portão pode apertar um nível, nunca afrouxá-lo.",
      },
    ],
    boundaryHeading: "O que o recibo de aprovação cobre",
    boundaryItems: [
      {
        title: "Novecentos segundos, um uso",
        body:
          "Uma escrita do assistente carrega um recibo HMAC-SHA256 de 32 caracteres vinculado ao tipo de operação, ao alvo, ao digest do conteúdo e à expiração. Ele vale por 900 segundos, é comparado em tempo constante, é consumido pelo executor antes de qualquer E/S e é recusado se o payload mudar, expirar, for reproduzido ou estiver vinculado a outra proposta.",
      },
      {
        title: "O globo fica no loop",
        body:
          "O God's Eye View se liga ao literal 127.0.0.1 e a nada mais; diretórios sensíveis, a pasta do Keychain e a própria raiz de dados do nó são recusados como alvos de instalação, inclusive após a resolução de links simbólicos. Os feeds ao vivo são buscados pelo seu próprio programa local sob os termos de cada provedor — este nó apenas mantém referências opcionais do Keychain e nunca faz proxy nem armazena em cache os dados. Escritas na tela e exportações de relatório viram pending_user_approval mesmo quando o servidor as chama de somente leitura.",
      },
    ],
    footnote:
      "Privacidade e Controle enuncia as mesmas fronteiras para o assistente, o globo e as quatro pontes de LAN, incluindo o que nenhuma delas pode prometer.",
  },

  engines: {
    heading: "Dez motores soberanos",
    sub:
      "Três prateleiras e dez contas de serviço oficiais. Cada cartão abaixo imprime o próprio preço: um número fixo de Créditos de Computação por um ciclo de 30 dias ou, para a malha de computação, um acerto por trabalho com uma taxa de protocolo de 10%. Cada um deles executa em hardware que você já possui.",
    filterAll: "Todos",
    substrateLabel: "Substrato",
    quickMenuLabel: "Menu rápido do iOS",
    quickMenuHint:
      "Cada botão envia ::popopx_sys::NODE_CMD::<service>::<action>::{} ao seu nó pareado.",
    deterministicBadge: "Determinístico — nenhum modelo no caminho",
    modelBadge: "Modelo local no loop",
    offlineBadge: "Roda sem pesos de modelo locais",
    openDetails: "Abrir",
    closeDetails: "Fechar",
    shelfCount: "motores",
    creditsUnit: "Créditos de Computação",
  },

  hardware: {
    heading: "O nível segue a memória",
    sub:
      "Na inicialização o nó lê o sysctl — modelo do chip, contagem de núcleos da CPU, memória unificada física, SSD livre — e escolhe um nível automaticamente. Leve o app para outro Mac e o nível vai junto; não há nada a reconfigurar.",
    columns: [
      "Memória unificada",
      "Chip típico",
      "Modelo de texto",
      "Modelo de vídeo",
      "Primeiro token*",
      "Vazão*",
      "Pico residente*",
      "Modo",
    ],
    modes: {
      lightweight: "Inferência leve",
      balanced: "Equilibrado",
      full: "Pesos completos",
    },
    footnote:
      "* Essas três colunas são estimativas de engenharia, não medições de laboratório. Elas vêm da decodificação limitada pela largura de banda de memória de um modelo denso de 27B mais uma leitura da razão de quantização da ocupação de pesos do LTX-2.5. Temperatura sustentada, geração do chip, carga em segundo plano, duração do clipe e trabalhos simultâneos movem os números reais de duas a três vezes. Use-as para escolher um nível, não como promessa de desempenho.",
    rules: [
      "96 GB ou mais — pesos completos originais do LTX-2.5 em BF16 com Qwen3.8-27B em Q8_0.",
      "48 a 95 GB — LTX-2.5 quantizado pelo MLX em 8 bits com Qwen3.8-27B em Q4_K_M.",
      "Abaixo de 48 GB — um modelo de 9B em Q4_K_M, apenas renders curtos, vídeo pesado oferecido ao Edge Compute Mesh.",
    ],
    plansHeading: "O que cada nível realmente implanta",
    plansSub:
      "A tabela acima é o guia que você lê antes de comprar. Esta é a que o nó anota para si mesmo depois de medir a máquina, direto da função de recomendação, incluindo a tag de modelo que ele baixa.",
    plansColumns: [
      "Faixa de memória",
      "Modelo de texto",
      "Pilha de vídeo",
      "Teto residente",
      "Vídeo pesado",
      "Comando de download",
    ],
    heavyVideo: {
      local: "Renderizado aqui",
      mesh: "Oferecido à malha",
    },
    plansFootnote:
      "O teto residente é uma regra aritmética sobre a memória medida, não um benchmark: cada nível subtrai da memória unificada encontrada uma margem fixa para a sessão da área de trabalho, com limite para que uma máquina muito grande não prometa mais do que a pilha precisa. As tags de modelo e as quantizações são as strings que o nó de fato passa ao Ollama.",
  },

  install: {
    heading: "Um DMG, uma leitura, dez chaves",
    sub:
      "O nó não tem instalador, nem conta de daemon, nem nada a registrar. É um único app de barra de menus que se liga a loopback, e a primeira execução faz o perfilamento sozinha.",
    prereqsHeading: "Antes de baixar",
    prereqNotes: {
      system: "O pacote tem como alvo o macOS 14 e o app é um agente de barra de menus.",
      memory:
        "Metal, MLX e toda a escada de níveis pressupõem memória unificada. O DMG traz uma fatia x86_64, mas nenhuma parte da pilha é ajustada para Intel.",
      disk:
        "Pesos de modelo são recusados enquanto o espaço livre estiver em 40 GB ou menos, então o teto da própria escada é também o do seu disco.",
      media:
        "Cinco dos dez motores chamam o FFmpeg. O assistente de instalação pode instalá-lo via Homebrew.",
      inference:
        "Ollama para modelos de texto quantizados, o workspace LTX-2.5 MLX para vídeo. As duas são ferramentas locais; nenhuma é um serviço.",
      bridge:
        "Necessário apenas para a etapa de pareamento SMP e para o caminho comandado pelo telefone. Os motores em si rodam sem ele.",
    },
    prereqRequired: {
      hard: "Obrigatório",
      wizard: "O assistente instala",
      optional: "Só para parear",
    },
    steps: [
      {
        title: "Verifique e abra o DMG",
        body:
          "Leve o POPOPX-Mac-Node-Universal.dmg e o arquivo de digest da versão para a mesma pasta e confira os dois antes de abrir qualquer coisa; a seção Versões e GitHub imprime os dois comandos da versão atual. Arraste o POPOPX Mac Node.app para /Applications. A compilação publicada carrega uma assinatura Developer ID e um tíquete de notarização grampeado, então o Gatekeeper a aceita sem ajuda — spctl -a -vv -t install responde accepted com source=Notarized Developer ID. Uma compilação que você mesmo fizer com Scripts/build_dmg.sh é assinada ad hoc, e essa de fato exige um clique com o botão direito em Abrir na primeira vez.",
      },
      {
        title: "Deixe-o perfilar a máquina",
        body:
          "Inicie o app e abra o console pela barra de menus. O passo um lê chip, contagem de núcleos, memória unificada e SSD livre do sysctl, imprime o nível que selecionou e a tag de modelo que esse nível implica, e mostra os números que ele amostrou em vez dos que você declarou.",
      },
      {
        title: "Implante os motores locais",
        body:
          "O assistente percorre a lista: Homebrew, FFmpeg, uv, Ollama, a quantização do Qwen que cabe no seu nível, o workspace LTX-2.5 e então uma autoverificação. O log de instalação é transmitido à página do console enquanto roda, e é gravado em logs/install.log para que uma falha possa ser lida depois.",
      },
      {
        title: "Pareie o iPhone",
        body:
          "Gere o QR de pareamento — no console ou no item de novo código da barra de menus — e leia-o com o cliente POPOPX iOS. Desde 040ef25, o QR e o botão de copiar carregam um link selado https://popopx.chat/i/v1/… em vez da credencial bruta, então uma captura de tela ou uma prévia de chat não expõe o endereço da fila. O código lá dentro continua assinado, de uso único e expira em quinze minutos; o código PPXNODE1 bruto e a URI de convite ficam na gaveta de diagnósticos do console. O dispositivo aparece na lista de pareados com seu modelo, seu horário de pareamento e seu último avistamento.",
      },
      {
        title: "Ligue os motores",
        body:
          "Dez chaves na barra de menus e no console. Um motor só roda se você o habilitar, e os quatro que não precisam de modelo local — o bloqueio físico, o cofre com trava temporal, o rastreador de marca d'água e o leitor de laudos laboratoriais — funcionam antes de um único peso ser baixado. O FFmpeg ainda é chamado; a pilha de modelos não.",
      },
    ],
    buildHeading: "Ou compile a partir da mesma tag",
    buildBody:
      "As imagens da versão são empacotadas a partir da árvore que você pode baixar. swift build, swift test, swift build -c release e então bash Scripts/build_dmg.sh --output dist --version v1.0.2 --build 4 grava o DMG universal, o assina ad hoc e emite o sidecar junto. O artefato publicado vem do outro script: Scripts/build-release.sh acrescenta a assinatura Developer ID, o envio para notarização e o ZIP, e é por isso que uma imagem baixada passa no spctl e a sua própria compilação não. Ambos rodam apenas no macOS, porque hdiutil e codesign são do que eles são feitos.",
    lifecycleHeading: "Depois da primeira execução",
    lifecycle: [
      {
        title: "Atualizar",
        body:
          "A build 4 acrescenta um portão de atualização configurado pelo proprietário, não um instalador automático. Ele lê apenas o host de manifesto que você indicar, verifica uma assinatura Ed25519 da chave que você fixou sobre uma versão estritamente mais nova, e não instala nada até você aprovar um download vinculado a recibo; um digest divergente descarta a oferta. Não há endpoint de fornecedor nem verificação padrão. Você ainda pode atualizar baixando e verificando o DMG mais novo e substituindo o app. Configurações, estado de pareamento, a chave do nó, o cofre e cada artefato vivem em Application Support, não dentro do bundle, então um app substituído herda a máquina em que aterrissa.",
      },
      {
        title: "Fazer backup e mudar de máquina",
        body:
          "O app marca sua própria raiz de dados como excluída do Time Machine, o que protege seus backups dos pesos de modelo e evita uma surpresa na restauração. Isso também significa que a pasta não está no seu backup. Para mover um nó, encerre-o, copie ~/Library/Application Support/PopopxMacNode para o mesmo caminho no Mac novo e deixe que ele se perfile de novo: o nível pode mudar, e pairing/node.key vem junto com a pasta, que é a razão inteira pela qual a cópia precisa ser tão privada quanto o original.",
      },
      {
        title: "Remover por completo",
        body:
          "Desligue Launch at Login primeiro, depois use Quit na barra de menus — isso fecha o listener e libera o item de login. Apague /Applications/POPOPX Mac Node.app e depois a raiz de dados em ~/Library/Application Support/PopopxMacNode se você quiser que o cofre selado, os livros-razão e os artefatos também desapareçam. Não há desinstalador nem recibo a esquecer: nada foi instalado fora desses dois caminhos. A única coisa que esses dois caminhos não cobrem é um item do Keychain — se você configurou uma ponte de hub, a credencial dela em im.popopx.macnode.hub sobrevive às duas exclusões, porque o Keychain não é uma pasta; remova-a no Acesso às Chaves ou pelo botão de desconexão da própria ponte.",
      },
    ],
    bridgeTitle: "Comande os motores a partir do seu próprio script",
    bridgeBody:
      "A pasta de integrações traz uma ponte em TypeScript mais dois adaptadores de agente. Ela não abre porta nova e não inicia um segundo daemon: reutiliza o console em 127.0.0.1:18920 e o token único por processo, e envia a mesma sinalização NODE_CMD que o telefone envia. A ação de bloqueio exige dupla adesão — allowLockdown precisa ser true e PPX_BRIDGE_SECRET precisa ter pelo menos dezesseis caracteres — e uma recusa é gravada no log do plugin para que você veja que ela aconteceu.",
    requirementTitle: "Um pré-requisito honesto",
    requirementBody:
      "O passo 2 do próprio assistente do nó, o QR de pareamento e a ponte SMP precisam de um daemon de chat popopx-chat no seu PATH. O nó sonda exatamente um executável e não tem alternativa, porque uma compilação de upstream responde com uma linha de versão e depois falha em todos os comandos seguintes. Os dez motores em si não precisam dele.",
    signHeading: "Como a compilação publicada é assinada",
    signBody:
      "O bundle do aplicativo dentro da imagem carrega uma assinatura Developer ID Application, a flag hardened runtime e um carimbo de data e hora seguro, e um tíquete de notarização é grampeado nele. É por isso que o Gatekeeper o deixa rodar sem ajuda: spctl -a -vv -t install responde accepted com source=Notarized Developer ID. O bloco abaixo foi lido dos bytes exatos que a v1.0.2 build 4 publica em 2026-11-27 — execute os dois primeiros comandos contra o app em /Applications e você deve obter a mesma identidade de volta. Nenhuma conta Apple é consultada e nada é verificado contra um servidor, porque o tíquete viaja no disco junto com o app.",
    containerTitle: "A imagem em si não é assinada",
    containerBody:
      "Execute spctl no .dmg baixado e ele responde rejected com source=no usable signature; codesign -dvv diz que o mesmo arquivo não é assinado de forma alguma. Essa é a resposta esperada, não um alarme de adulteração. A assinatura de código da Apple está no bundle do aplicativo, enquanto o tíquete de notarização é grampeado ao bundle e à imagem de disco em volta dele. O único controle de integridade da imagem é o seu SHA-256, que é a verificação mais abaixo nesta página.",
    provenanceTitle: "Qual script produziu qual artefato",
    provenanceBody:
      "Dois scripts empacotam este app e eles não terminam no mesmo lugar. Scripts/build_dmg.sh é o empacotador local: monta o bundle, assina ad hoc com --sign - --timestamp=none e sem hardened runtime, e grava o DMG mais o sidecar, então uma compilação por esse caminho de fato exige um clique com o botão direito em Abrir na primeira vez. Scripts/build-release.sh é o caminho Developer ID: assina com hardened runtime, envia para notarização, grampeia o tíquete ao bundle e à imagem, e grava o ZIP ao lado de um manifesto SHA256SUMS.txt. A imagem da build 4 que você baixa é a do segundo tipo — assinada com Developer ID, notarizada e grampeada — que apenas esse script produz. O workflow de tag do nó em 6de6eb8 ainda executa Scripts/build_dmg.sh, então o workflow sozinho não pode responder pelos assets assinados; um runner que nunca teve o certificado não consegue produzi-los.",
    digestHeading: "Confira o digest antes de abrir qualquer coisa",
    digestBody:
      "Dois comandos, executados na pasta em que você salvou os arquivos. O manifesto da versão é o arquivo com que se comparar, porque ele nomeia cada artefato da versão e é escrito pelo mesmo passo que os empacotou. Na build 4, o sidecar .dmg.sha256 e o SHA256SUMS.txt nomeiam o mesmo digest, então qualquer uma das duas verificações concorda. A seção Versões e GitHub imprime o par para a versão que resolveu, que pode ser mais nova que a de baixo.",
    copyCommand: "Copiar comando",
    commandCopied: "Copiado",
  },

  security: {
    heading: "O que fica, o que sai e como interromper",
    sub:
      "Uma página de privacidade que só lista o que fica local é uma página de marketing. Esta lista o tráfego também, porque a versão honesta de “seus dados nunca saem do dispositivo” é mais longa e mais útil que o slogan.",
    localHeading: "Fica no seu disco",
    localSub:
      "Sob uma única raiz de dados, em uma pasta que o app cria e exclui do Time Machine, com os segredos gravados atomicamente em modo 0600 e proteção completa de arquivo.",
    localItems: [
      {
        title: "Cada artefato",
        body:
          "Clipes renderizados, briefings, exportações com marca d'água, arquivos selados, relatórios decodificados e entradas em quarentena aterrissam todos sob a raiz de dados e ficam lá. O nó mantém uma caixa de saída apenas para resultados que esperam o seu telefone voltar a ficar online.",
      },
      {
        title: "Os modelos e seus pesos",
        body:
          "A quantização do Qwen vive no armazenamento próprio do Ollama; os pesos do LTX-2.5 vivem no diretório engines do nó. Ambos são arquivos locais em disco local, baixados uma vez, e o download é recusado enquanto o espaço livre estiver em 40 GB ou menos.",
      },
      {
        title: "Chaves e estado de pareamento",
        body:
          "A chave de assinatura Ed25519 do nó, a lista de dispositivos pareados e a oferta atual são arquivos simples em pairing/. Não há backup da chave na nuvem nem custódia em lugar algum — o que corta para os dois lados, como diz o parágrafo sobre perda mais abaixo. As exceções são credenciais: o token ou a senha de uma ponte de hub, as senhas IMAP e SMTP do assistente e as chaves de feeds do God's Eye View são itens do Keychain, e settings.json carrega apenas as referências que os buscam.",
      },
      {
        title: "A trilha de evidências",
        body:
          "Os livros-razão de bloqueio e da malha recebem acréscimos com hash localmente, e o log de auditoria registra o que rodou, em qual motor e com que resultado. Ele é escrito para você ler: logs/node.log é a resposta mais rápida para “o que essa coisa fez às 03:14”.",
      },
    ],
    transitHeading: "Sai da máquina",
    transitSub:
      "Quatro tipos de tráfego saem para a rede mais ampla, e cada um deles é o seu próprio dispositivo ou algo que você configurou. A conta de e-mail do assistente acrescenta um quinto quando você a habilita, e uma ponte de LAN acrescenta tráfego local em loopback, em endereços RFC 1918 e .local. Não há endpoint de análise em nenhum deles para onde enviar qualquer coisa.",
    transitItems: [
      {
        title: "Resultados, de volta ao seu próprio telefone",
        body:
          "Um trabalho concluído devolve um cartão de no máximo 1024 caracteres mais uma mensagem por arquivo de artefato, pela sua própria fila popopx-chat, com SMP retransmitindo e XFTP transportando. O retransmissor vê texto cifrado. Se o telefone estiver offline, o resultado espera em outbox/ e continua tentando por até trinta dias.",
      },
      {
        title: "Feeds que você pediu para ele ler",
        body:
          "O Morning TV busca as fontes RSS que você configurou, com limite de três megabytes por resposta, e isso é uma requisição HTTPS de saída comum para quem hospeda os seus feeds.",
      },
      {
        title: "Um webhook que você configurou",
        body:
          "O bloqueio físico pode enviar por POST um evento assinado a um endpoint de automação residencial ou de presença. É o melhor esforço, é opt-in, e a URL é sua — o nó não tem destino padrão.",
      },
      {
        title: "Instalações e downloads de modelos",
        body:
          "O assistente baixa fórmulas do Homebrew, FFmpeg, uv, Ollama e a quantização que você escolheu. Esse tráfego é o propósito de uma etapa de instalação, e acontece uma vez, na sua frente, com o log na tela.",
      },
      {
        title: "A conta de e-mail do assistente",
        body:
          "Desligada até você habilitá-la e digitar o servidor. IMAPS 993 lê com EXAMINE e BODY.PEEK, que nunca marcam uma mensagem como lida; SMTPS 465 envia apenas um rascunho que você aprovou com um recibo. O host é um literal nas suas configurações e nunca é descoberto; as duas senhas são referências do Keychain. Nenhuma outra ação do assistente sai da máquina.",
      },
    ],
    keysHeading: "Onde os segredos realmente vivem",
    keysBody:
      "O material de pareamento e do cofre são arquivos sob a raiz de dados, gravados com escrita atômica, modo POSIX 0600 e proteção completa de arquivo, então são ilegíveis em repouso enquanto a máquina está bloqueada. A troca que você faz é real — permissões de arquivo são auditáveis e portáveis, e também não são nada entre a sua conta de usuário e um leitor que já tem a sua conta de usuário. Trate a raiz de dados como o segredo que ela é: não está no Time Machine, e é a única cópia da chave do nó que existe. As credenciais seguem o outro caminho. O token do Home Assistant, a senha do MQTT, a senha do CalDAV, as senhas IMAP e SMTP do assistente e as chaves de feeds do God's Eye View são itens de senha genérica sob o serviço im.popopx.macnode.hub, criados com kSecAttrAccessibleWhenUnlockedThisDeviceOnly, e o documento de configurações guarda apenas uma referência. Um processo sem a identidade de bundle do app — swift run, um harness de teste — recebe um armazenamento em memória; deliberadamente não há alternativa em arquivo de texto claro, então uma credencial que não consegue chegar ao Keychain não é salva de forma alguma.",
    dataNote: {
      output: "Artefatos gerados, e a fila de saída que guarda resultados à espera do telefone.",
      vault: "Arquivos selados com trava temporal e o material de sucessão que os abre.",
      pairing: "A chave Ed25519 do nó, a lista de dispositivos pareados e a oferta atual, de uso único.",
      weights: "Pesos de modelo e o workspace LTX-2.5 MLX que os motores de vídeo chamam.",
      ledger: "Livros-razão de bloqueio e da malha com acréscimo por hash, mais o livro de auditoria SQLite limitado do assistente.",
      logs: "O log de instalação e o log de auditoria, escritos para o operador ler.",
      config: "Configurações, chaves dos motores e a configuração que as pontes, o assistente e o cartão do God's Eye View compartilham.",
    },
    rootLabel: "Raiz de dados",
    hubHeading: "A fronteira própria do hub de borda",
    hubSub:
      "As quatro pontes de LAN acrescentadas na build 4, o assistente privado e a ponte do God's Eye View estão sujeitos às regras acima e a estas. Elas estão escritas aqui em vez de em um cartão de recurso porque são as afirmações que um leitor deveria poder falsear a partir do código.",
    hubItems: [
      {
        title: "Um único ponto de admissão",
        body:
          "Cada destino de ponte — MCP sobre HTTP, Home Assistant, MQTT, CalDAV — passa pela mesma verificação EdgeBoundary antes de existir um socket: loopback, RFC 1918, ULA ou .local, sem consulta DNS para descobrir se um nome é público, sem credenciais na URL e sem seguir redirecionamento. Uma recusa é uma linha no console, não uma nova tentativa silenciosa em outro lugar.",
      },
      {
        title: "Um recibo, não um prompt",
        body:
          "Uma ação que muta não é controlada por uma caixa de texto no console. Ela vira uma proposta no estado pending_user_approval, aprovada com um recibo HMAC-SHA256 de 24 caracteres vinculado ao id e ao verbo da proposta, válido por quinze minutos e registrado no log de auditoria local. O payload que o executor roda é o que o proprietário viu, e desligar a ponte anula as propostas pendentes.",
      },
      {
        title: "Keychain, ou memória, nunca um arquivo",
        body:
          "As credenciais das pontes vivem em itens do Keychain endereçados por uma referência, ou na memória do processo em uma execução não empacotada. Não há terceira opção: nem settings.json, nem um log, nem um DMG. O documento MCP guarda nomes de variáveis de ambiente, então um token entregue a um servidor MCP por stdio é lido do ambiente que o proprietário definiu, não de um arquivo que o nó escreveu.",
      },
      {
        title: "Aprenda o mínimo",
        body:
          "O CalDAV analisa DTSTART e DTEND e descarta títulos, descrições, locais e participantes dentro do próprio analisador, então os campos mais movimentados nunca entram no modelo. A prévia de uma proposta mostra argumentos escalares curtos e esconde todo valor cuja chave esteja na lista de tarja — content, token, password, payload e mais. A descoberta é um GET somente leitura que relata o estado da própria máquina.",
      },
      {
        title: "O assistente e o globo",
        body:
          "Um envio de e-mail ou um reparo doméstico só chega ao executor com um recibo HMAC-SHA256 de 32 caracteres vinculado ao tipo, ao alvo, ao digest e à expiração, válido por 900 segundos e consumido uma vez. O e-mail é a única exceção de saída nomeada do assistente, e as senhas dele são referências do Keychain. O God's Eye View é apenas loopback, verifica sua instalação após a resolução de links simbólicos, e seu portão MCP só pode apertar uma ferramenta: escritas na tela e exportações de relatório viram pending_user_approval mesmo quando o servidor as chama de somente leitura. O repositório contém apenas a ponte em Swift.",
      },
    ],
    controlHeading: "O seu lado do interruptor",
    controlSub:
      "Quatro controles, todos locais, todos visíveis no app em vez de enterrados em uma tela de ajustes. Nenhum deles precisa da rede, e é isso que os faz funcionar quando a rede é o problema.",
    controls: [
      {
        title: "Parar um motor",
        body:
          "Dez chaves independentes na barra de menus e no console. Desligar uma tem efeito no próximo comando, e um comando para um motor desativado é recusado em vez de enfileirado.",
      },
      {
        title: "Parar de emprestar ciclos",
        body:
          "Pause Mesh Sharing tira o nó do pool de computação de borda imediatamente; a barra de menus mostra Paused e ele para de aceitar trabalhos. É o único controle com a palavra pause nele, e ele trata da capacidade da malha, não do nó inteiro.",
      },
      {
        title: "Queimar o código de pareamento atual",
        body:
          "New Pairing QR aposenta a oferta pendente e cunha uma substituta. Quem tiver uma foto do código antigo tem uma assinatura expirada, não uma segunda chance.",
      },
      {
        title: "Parar tudo",
        body:
          "Quit é o interruptor de emergência de verdade: fecha o listener de loopback, libera o item de login e derruba com o processo o token de cada inicialização. Um nó que não está rodando não responde nada, a ninguém, sobre coisa alguma.",
      },
    ],
    revokeHeading: "E revogar um dispositivo",
    revokeBody:
      "A lista de dispositivos pareados do console tem um botão Revoke em cada linha. Ele marca aquele dispositivo como revogado, remove o mapeamento de contato dele e descarta os comandos dele a partir de então — mas não derruba a conexão SMP, e o app diz isso na mesma mensagem que mostra a você. Para concluir o serviço, exclua o contato no cliente de chat. Tudo o que já foi gravado no seu disco permanece no seu disco; a revogação interrompe comandos futuros, não é um apagamento remoto, e o nó nunca teve uma capacidade de apagamento remoto para remover.",
    limitsHeading: "O que esta página não vai prometer",
    limitsBody:
      "A destruição segura é uma sobrescrita aleatória, um sync e um unlink. No APFS um arquivo modificado é gravado em blocos novos e o SSD remapeia os lógicos, então isso remove o arquivo e derrota ferramentas comuns de recuperação, mas não prova que os bytes físicos antigos sumiram. É o melhor que uma API de arquivos em espaço de usuário consegue fazer, e o código diz isso no resultado que retorna. Além disso: nenhuma pausa global além de encerrar, nenhum apagamento remoto, nenhuma custódia de chaves e portanto nenhuma recuperação se você perder a máquina e a raiz de dados juntas, e nenhum atualizador silencioso. A build 4 acrescenta um portão de atualização que lê apenas o host de manifesto que você indicar, aceita apenas uma assinatura da chave que você fixou sobre uma versão estritamente mais nova, e exige um recibo antes de baixar ou instalar; não há endpoint de fornecedor nem destino padrão.",
  },

  troubleshooting: {
    heading: "Quando ele não faz o que você esperava",
    sub:
      "As falhas que de fato acontecem nesta arquitetura, na ordem em que as pessoas as encontram. Cada uma diz o que olhar primeiro, porque em uma máquina sem lado servidor o log é sempre o caminho mais curto.",
    columns: ["Sintoma", "O que está acontecendo", "O que fazer"],
    items: [
      {
        symptom: "A página do console não abre",
        cause:
          "A porta é fixa em 127.0.0.1:18920 sem alternativa, então uma segunda instância em execução — ou qualquer outra coisa que tenha chegado antes — fica com o listener. O token também é por inicialização: uma aba antiga de antes de um reinício tem uma credencial morta.",
        fix:
          "Verifique se há um listener em 18920 e encerre a outra instância, depois use Open Web Console na barra de menus, que monta a URL atual com o token atual em vez de um obsoleto.",
      },
      {
        symptom: "Nada responde em 11434",
        cause:
          "Os motores que precisam de um modelo falam com o Ollama somente em loopback. Se o Ollama não estiver rodando, ou tiver sido instalado sem o assistente, o motor falha em vez de recorrer a algo hospedado.",
        fix:
          "Inicie o Ollama, confirme que OLLAMA_HOST é loopback e baixe a quantização que a tabela de níveis indica para a sua máquina. O texto da falha cita o comando que teria funcionado.",
      },
      {
        symptom: "Os pesos nunca foram baixados",
        cause:
          "O instalador pula os downloads de pesos a menos que weightSources esteja declarado em config/engines.json, e os recusa de plano enquanto o espaço livre estiver em 40 GB ou menos.",
        fix:
          "Adicione a fonte que você quer buscar, ou copie os pesos para engines/weights e aponte a configuração para lá. Libere disco primeiro; a proteção é um limite, não um aviso.",
      },
      {
        symptom: "Um render voltou como linha de comando",
        cause:
          "O trabalho de vídeo precisa do workspace LTX-2.5 e dos pesos dele. Sem eles o motor devolve o comando exato que teria executado em vez de fingir que produziu um arquivo.",
        fix:
          "Conclua a etapa do workspace no assistente, ou clone o workspace LTX-2-MLX que ele indica, e execute de novo. Isso é deliberado: um sucesso simulado é pior que uma recusa honesta.",
      },
      {
        symptom: "O código de pareamento é rejeitado",
        cause:
          "Uma oferta é de uso único e dura quinze minutos. Uma segunda leitura do mesmo código, ou um código de uma tela que desde então girou, é recusado corretamente.",
        fix:
          "Gere um novo código e leia-o uma vez. Se o telefone tentar de novo por conta própria após um sucesso, a primeira reivindicação já venceu e a recusa é a resposta esperada.",
      },
      {
        symptom: "Os comandos do telefone não fazem nada",
        cause:
          "A ponte precisa de um daemon popopx-chat no PATH e o nó sonda exatamente um executável, sem alternativa. A barra de menus mostra popopx-chat not installed quando ele falta, e um motor desligado não responde nada em qualquer caso.",
        fix:
          "Leia primeiro a linha da ponte na barra de menus, depois as chaves dos motores, depois o log de auditoria. Um comando que foi recusado e um comando que nunca chegou parecem idênticos do telefone.",
      },
      {
        symptom: "Os resultados param de chegar enquanto o telefone está fora",
        cause:
          "A entrega de saída passa pelo seu próprio daemon e retransmissor, então um firewall que bloqueia saídas, uma VPN que não transporta o retransmissor ou um daemon que encerrou parecem iguais daqui. Os resultados não se perdem: eles ficam na fila em outbox/ e tentam de novo por até trinta dias.",
        fix:
          "Confirme que o daemon está rodando, depois libere as conexões de saída do nó naquilo que as estiver filtrando, depois espere a fila esvaziar em vez de repetir o trabalho.",
      },
      {
        symptom: "O cartão de download diz que está exibindo a versão fixada",
        cause:
          "api.github.com estava inacessível, bloqueado, limitado por taxa ou respondeu sem um asset baixável. A página então renderiza a versão compilada no bundle em vez de adivinhar.",
        fix:
          "Abra a página de versões diretamente. Nada mais no site precisa dessa chamada, e nenhuma parte da página fica em branco por causa de uma chamada que falhou.",
      },
    ],
    escalation:
      "Dois arquivos respondem pela maior parte do resto: logs/install.log para tudo o que o assistente fez, e logs/node.log para tudo depois disso. Ambos são texto simples sob a raiz de dados, e o próprio canal de logs do console mostra os mesmos eventos ao vivo. Se uma falha sobreviver à leitura deles, o contrato contra o qual o nó e as integrações testam está no repositório, e as issues pertencem ao popopx-mac-node.",
  },

  releases: {
    heading: "Versões, digests e a árvore inteira",
    sub:
      "Tudo com que o nó é construído está em um único repositório AGPL-3.0-only, e toda imagem publicada pode ser conferida contra um digest antes de ser aberta. Esta seção é onde o site para de descrever e começa a apontar.",
    assetsHeading: "Assets publicados",
    assetsColumns: ["Arquivo", "O que é", "Tamanho"],
    assetKinds: {
      dmg: "Imagem de disco para arrastar até Aplicativos, universal arm64 e x86_64. É a que vale pegar.",
      sidecar: "Um digest de um único arquivo, escrito pela etapa de empacotamento que o gerou.",
      zip: "O bundle de aplicativo assinado como payload ZIP, para um arquivo em vez de um volume.",
      sums: "Um manifesto que lista cada artefato da versão com o seu digest.",
    },
    missingAsset:
      "Não é toda versão que publica todo asset. Versões mais antigas trazem apenas a imagem de disco e o sidecar dela, e é por isso que a verificação abaixo lê a versão que você realmente abriu.",
    verifyHeading: "Verifique antes de abrir qualquer coisa",
    verifyBody:
      "Dois comandos, executados na pasta para a qual você baixou. A forma de manifesto é a preferida e é a que a versão atual publica.",
    verifySumsBody:
      "Um manifesto de versão lista cada artefato, então um arquivo que você não baixou é algo esperado, não ausente: passe --ignore-missing e leia a linha que corresponde ao arquivo que você pegou. O manifesto é escrito no mesmo passo que empacota o payload que ele nomeia.",
    verifySidecarBody:
      "Uma versão mais antiga publica um sidecar de arquivo único, e é com esse arquivo que se compara. A build 4 publica os dois e eles nomeiam o mesmo digest; quando os arquivos de uma versão discordarem, acredite no manifesto, porque o sidecar pode vir de uma compilação diferente da mesma versão.",
    pipelineHeading: "Como uma versão chega aqui",
    pipelineBody:
      "Enviar uma tag executa o workflow de versão em um runner macOS: ele compila a árvore, roda os testes de contrato, empacota a imagem universal com Scripts/build_dmg.sh, recusa publicar um arquivo de checksum que contenha um caminho absoluto, e envia o DMG e o sidecar. Esse é o caminho ad hoc. A imagem assinada da build 4, o ZIP dela e o SHA256SUMS.txt vêm do Scripts/build-release.sh, que assina com a identidade Developer ID, o hardened runtime e um carimbo de data e hora seguro, envia ao serviço de notarização da Apple e grampeia o tíquete ao bundle e à imagem. O workflow de tag em 6de6eb8 não invoca esse script, então os assets assinados não podem ser a saída do workflow. Os dois caminhos terminam no mesmo lugar: um digest que você pode conferir sem confiar nesta página.",
    supportedHeading: "Rodando hoje",
    supportedItems: [
      "Todos os dez motores, cada um com o seu próprio conjunto de ações e caminhos de recusa, ligados individualmente.",
      "Seleção automática de nível a partir do sysctl, com o download do modelo que cada nível implica.",
      "Pareamento assinado, de uso único e de quinze minutos, e um console que se liga apenas a loopback.",
      "A ponte em TypeScript e dois adaptadores de agente sobre o mesmo console e o mesmo token.",
      "O assistente privado e a ponte do God's Eye View: escritas com recibo, um portão de ferramentas apenas em loopback, e os dois desligados por padrão.",
    ],
    roadmapHeading: "Ainda não",
    roadmapSub:
      "Escrito como planos no repositório, não como promessas em uma página. Nada disso está rodando hoje.",
    roadmap: [
      {
        title: "Medições por motor na sua própria máquina",
        body:
          "Um painel de uso e linhas do tempo de falhas levados de volta ao telefone: leituras de tokens e watts da máquina à sua frente, substituindo as estimativas da tabela de hardware.",
      },
      {
        title: "Isolamento mais rígido da malha e um livro-razão exportável",
        body:
          "Contenção mais forte para a capacidade emprestada e um livro-razão que você possa levar para fora do app em vez de ler dentro dele.",
      },
      {
        title: "Custódia fragmentada para mais de um herdeiro",
        body:
          "Divisão do material de sucessão entre vários herdeiros, e mais layouts de relatório no motor de saúde.",
      },
      {
        title: "Canais de distribuição assinados e mais níveis de vídeo",
        body:
          "Avaliação de um canal de loja além da notarização, e níveis LTX adicionais para faixas de memória que a escada ainda não cobre.",
      },
    ],
    sourceHeading: "O código-fonte e o que a licença obriga",
    sourceBody:
      "Um repositório, AGPL-3.0-only, sem núcleo fechado: os motores, o console, a marca d'água e o livro-razão estão todos nele, e o código de credenciais de assinatura cega e o registro de parâmetros criptográficos estão abertos no popopxmq ao lado. A seção 13 se aplica da maneira habitual: execute, estude, modifique livremente e, se você oferecer um nó modificado como serviço a outras pessoas, ofereça a elas o seu código-fonte correspondente. Esse é todo o custo de conformidade.",
    licenceHeading: "O que não está coberto",
    licenceBody:
      "A AGPL-3.0 não concede licença alguma sobre o nome ou o logotipo POPOPX. Um fork pode levar tudo menos as marcas: renomeie o software, substitua as marcas, mantenha o código.",
  },

  faq: {
    heading: "Perguntas que as pessoas realmente fazem",
    sub: "Respostas curtas, com a parte que não podemos garantir bem visível.",
    items: [
      {
        q: "Alguma coisa disso roda nos seus servidores?",
        a: "Não. Os comandos para os dez motores chegam do cliente iOS pela sua própria fila popopx-chat, cifrados de ponta a ponta, e a inferência, a renderização, o armazenamento e a execução física acontecem todos no seu Mac. Nem uma etapa precisa da nossa infraestrutura, e não há no nó nenhum caminho de código que alcance uma API de inferência hospedada — o cliente do modelo está fixado em 127.0.0.1.",
      },
      {
        q: "O que eu preciso registrar?",
        a: "Nada. Não há conta, nem número de telefone, nem endereço de e-mail nem identificador de publicidade em lugar algum do produto. Parear o telefone com o nó é uma única leitura de QR, e o console web se liga apenas a loopback, rotaciona um token aleatório em cada inicialização e é inalcançável do resto da sua LAN.",
      },
      {
        q: "O nó varre a minha LAN em busca de dispositivos?",
        a: "Não. A descoberta é um GET /v1/discovery/capabilities somente leitura que relata o que este Mac já tem: Ollama em loopback, as pastas de trabalho que você autorizou, o estado da permissão do EventKit e se uma conexão TCP é bem-sucedida com um host de LAN que você digitou nas configurações. Não há anunciante mDNS, nem varredura de portas, nem caminhada de sub-rede no código. Um alvo só é admitido se for loopback, um literal RFC 1918, um endereço ULA ou um nome .local; um endereço público é recusado antes de um socket ser aberto, e a compilação assinada não aceita nomes de host que precisariam de consulta DNS. O LAN Discover da build 4 vem desligado por padrão e vigia apenas as pastas, feeds e servidores MCP que você configurar, com um piso de sessenta segundos entre atualizações.",
      },
      {
        q: "Uma ferramenta MCP ou um comando de casa inteligente pode rodar sem mim?",
        a: "Uma somente leitura pode, dentro da fronteira que o proprietário configurou. Uma que muta não: ela vira uma proposta em pending_user_approval e precisa de uma aprovação que cunha um recibo HMAC-SHA256 de 24 caracteres vinculado ao id e ao verbo da proposta, válido por quinze minutos. O executor roda exatamente o payload que foi mostrado, a ação é registrada no log de auditoria local, e desligar a ponte anula o que estava pendente. Uma ação de fechadura, alarme, sirene, câmera ou aspirador é tratada como alto risco mesmo dentro de uma configuração de outro modo permissiva.",
      },
      {
        q: "O QR de pareamento é criptografado?",
        a: "Selado, e a distinção importa. O QR e o botão de copiar carregam https://popopx.chat/i/v1/ seguido de uma caixa ChaCha20-Poly1305 cuja chave é derivada com HKDF-SHA256 a partir de uma entrada publicada no próprio código-fonte do app. Isso esconde o endereço da fila SMP de prévias de link, capturas de tela e encaminhamentos; não impede quem tem o app de ver o conteúdo. O que autoriza o dispositivo é a credencial assinada, de uso único e de quinze minutos lá dentro, e o código PPXNODE1 bruto e a URI de convite permanecem na gaveta de diagnósticos do console em vez da face do assistente.",
      },
      {
        q: "Por que AGPL-3.0, e o que a seção 13 me obriga a fazer?",
        a: "Todo arquivo-fonte do nó é AGPL-3.0-only, o que significa que você pode executá-lo, estudá-lo, modificá-lo e redistribuí-lo livremente. A seção 13 acrescenta a cláusula de rede: se você oferecer um nó modificado como serviço a outras pessoas, você tem que oferecer a elas o seu código-fonte correspondente. Esse é todo o custo de conformidade, e é a razão pela qual o projeto pode ser gratuito de executar.",
      },
      {
        q: "A marca d'água ou o protocolo de pontos de computação são mantidos fechados?",
        a: "Não, e essa afirmação é a que mais esperamos que seja checada. O código de credenciais BBS+ e BLS12-381, a lógica de direitos e o registro de parâmetros criptográficos estão abertos no popopxmq; a marca d'água em GOP e no domínio da frequência e o decodificador cego dela estão neste repositório. O que a via comercial vende é o data center, o plantão de suporte, o canal de distribuição e a papelada de conformidade — nunca um portão sobre o código-fonte.",
      },
      {
        q: "Posso publicar um fork com o nome e o logotipo POPOPX?",
        a: "Não. As marcas não são licenciadas pela AGPL-3.0 e nenhum nível de suporte as concede. A política pede o único remédio que não custa nada a um fork: renomeie o software, substitua as marcas, mantenha o código. O uso da marca exige uma licença escrita separada.",
      },
      {
        q: "Quanto eu devo confiar nos números da tabela de hardware?",
        a: "Tanto quanto diz a frase logo abaixo dela. São números de guardanapo, não medições da sua máquina, e a vazão real varia de duas a três vezes com temperatura e carga. A próxima versão do nó os substitui por leituras de tokens e watts por motor, medidas na máquina que você está de fato usando.",
      },
      {
        q: "Quais máquinas são suportadas?",
        a: "macOS 14 ou posterior em Apple Silicon. A escada de níveis, o Metal e o MLX pressupõem memória unificada, e o MLX não roda em Intel, então um Mac Intel não é um host que este projeto tenha como alvo, ainda que o DMG universal continue trazendo uma fatia x86_64. O app em si não liga nenhuma biblioteca de terceiros: apenas frameworks da Apple. O que ele comanda é separado por projeto — Ollama, FFmpeg e os pesos do LTX-2.5 são ferramentas locais que os motores chamam, e cada motor declara quais precisa.",
      },
      {
        q: "O assistente pode enviar e-mail ou acionar um dispositivo sem mim?",
        a: "Não. Ler e redigir são locais e somente leitura; um envio ou um reparo é uma proposta em pending_user_approval. O executor aceita apenas um recibo HMAC-SHA256 de 32 caracteres vinculado à operação, ao alvo, ao digest e à expiração, válido por 900 segundos e utilizável uma vez. As credenciais de e-mail vivem no Keychain do macOS, e uma ponte somente leitura do Home Assistant recusa o reparo mesmo com um recibo válido.",
      },
      {
        q: "A ponte do God's Eye View chama a nuvem ou varre a minha rede?",
        a: "Não. Ela inicia um programa que você instalou neste Mac, o fixa em 127.0.0.1, verifica seus scripts de entrada após a resolução de links simbólicos e só puxa código-fonte se você ativar isso. O nó mantém referências opcionais do Keychain para as chaves de feeds; o seu programa local busca os feeds sob os termos de cada provedor, e o nó nunca faz proxy nem os armazena em cache. Escritas na tela e exportações de relatório viram pending_user_approval mesmo que o servidor as chame de somente leitura.",
      },
    ],
  },

  footer: {
    tagline: "Computação local para o ecossistema POPOPX. Sua para executar, sua para ler.",
    licenceHeading: "Licença",
    licenceBody:
      "O código-fonte do nó é AGPL-3.0-only. Os recursos gráficos criados por este projeto são AGPL-3.0-only ou, à sua escolha, CC0-1.0.",
    trademarkHeading: "Marca registrada",
    trademarkBody:
      "POPOPX, POPOPX Chat e o logotipo POPOPX são marcas do projeto POPOPX Chat. O ícone usado neste site é o ícone do aplicativo POPOPX iOS sem modificação. Veja TRADEMARK-POPOPX.md no repositório popopx-chat para a política.",
    privacyHeading: "Esta página",
    privacyBody:
      "Sem análise, sem cookies, sem fingerprinting, sem scripts de terceiros e sem CDN externo. A única requisição de saída que a página pode fazer é para api.github.com, para a lista de assets da versão, e ela degrada para um link fixado quando essa chamada falha.",
    appleNotice:
      "Sem afiliação com a Apple. macOS, iOS, Apple Silicon e Metal são marcas registradas da Apple Inc.",
    sourceRepo: "Código-fonte do Mac Node",
    iosRepo: "Código-fonte do cliente iOS",
    backToTop: "Voltar ao topo",
  },
};
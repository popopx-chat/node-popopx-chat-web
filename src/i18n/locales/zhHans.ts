import type { Dictionary } from "../types";

export const zhHans: Dictionary = {
  dir: "ltr",

  nav: {
    overview: "概览",
    node: "什么是节点",
    features: "核心能力",
    install: "安装与配置",
    security: "隐私与控制",
    troubleshooting: "故障排查",
    releases: "发布与源码",
    download: "获取节点",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    chooseLanguage: "语言",
  },

  ecosystem: {
    heading: "POPOPX 的其他部分",
    body:
      "三个门户，一个项目，都是我们自己的。本页不从那几个站点加载任何东西，也从不向它们发请求：只有你点击，才会离开 node.popopx.chat。",
    chat: "POPOPX Chat",
    chatBody:
      "消息网络本身 —— 端到端、无全局 ID，也是你的节点监听的那条队列。",
    botStudio: "Bot Studio",
    botStudioBody:
      "十大引擎背后的服务号在那里编写和托管，跑在你自己控制的服务器上。",
    serviceSuite: "服务号",
    serviceSuiteBody:
      "那些引擎对话的零知识加密频道生态。",
  },

  routes: {
    "/": { eyebrow: "概览", title: "POPOPX Mac Node —— 你的 Mac 跑这十个引擎" },
    "/node": { eyebrow: "什么是节点", title: "节点是什么、不是什么 —— POPOPX Mac Node" },
    "/features": { eyebrow: "核心能力", title: "十个本地引擎与跑它们的硬件 —— POPOPX Mac Node" },
    "/install": { eyebrow: "安装与配置", title: "安装、配对、升级、备份、卸载 —— POPOPX Mac Node" },
    "/security": { eyebrow: "隐私与控制", title: "什么留在你的磁盘上，怎么把它停下 —— POPOPX Mac Node" },
    "/troubleshooting": { eyebrow: "故障排查", title: "端口、防火墙与内存上限 —— POPOPX Mac Node" },
    "/releases": { eyebrow: "发布与源码", title: "发布、摘要与整棵源码树 —— POPOPX Mac Node" },
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "让自己的设备，",
    titleAccent: "成为 POPOPX 生态的一部分。",
    subtitle:
      "POPOPX Mac Node 是你自己那张网络的边缘。它在你自己的 Mac 上跑「发现」里十大引擎背后的本地模型、媒体与文件引擎，与 POPOPX Chat、Bot Studio 并列工作。网络只中继你的加密消息；推理、渲染、封存归档与密钥，留在你花钱买的硬件上。",
    ctaDownload: "下载 DMG",
    ctaSource: "读源码",
    releaseLabel: "最新发布",
    sizeLabel: "大小",
    digestLabel: "SHA-256",
    statusFetching: "正在读取 GitHub Releases…",
    statusLive: "来自 GitHub Releases 的实时数据",
    statusFallback: "GitHub 不可达 —— 显示内置的固定版本",
    copyDigest: "复制摘要",
    digestCopied: "摘要已复制",
    verifyTitle: "打开之前先校验",
    verifyBody:
      "把镜像和发布页的摘要文件放进同一个目录，打开任何东西之前先校验。摘要文件因版本而异 —— 较新的发布给出 SHA256SUMS.txt 清单，较早的只给单个产物的 .sha256 —— 所以「发布与源码」会针对你正在看的那个版本，印出准确的三条命令中的两条。",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "你自己的硬件",
    statStorage: "产物在你自己的 SSD 上",
    statIdentity: "无账号、无 ID",
    statSource: "全栈 AGPL-3.0",
  },

  overview: {
    splitHeading: "网络负责协调。你的机器负责执行。",
    splitSub:
      "这就是全部思路，而且值得说精确，因为这类产品通常被反过来理解：干活儿的不是云，你的 Mac 也不是瘦客户端。两边各自只做它该做的那一半。",
    cloudTitle: "网络搬运的是什么",
    cloudBody:
      "SMP 中继与 XFTP 存储在你自己的设备之间端到端地搬运消息与文件，「发现」里的十个服务号各发一条信令。中继只看到密文和路由元数据：它从不接收模型、提示词、画面或文件名，也不运行任何引擎的任何一部分。",
    macTitle: "你的 Mac 做的是什么",
    macBody:
      "节点接到那条信令，然后在你面前的这台机器上干活儿：回环上经 Ollama 的量化推理、经 MLX 的 LTX-2.5 渲染、FFmpeg 与 GOP 水印、CryptoKit 封存与哈希链保险库、以及负责物理动作的 diskutil 与 AppKit。然后把结果写到你自己的磁盘上。",
    pathsHeading: "从你所在的位置开始",
    paths: [
      {
        title: "理解这个分工",
        body:
          "节点是什么、它监听的那一条线、手机怎么获得驱动它的权限、涉及哪几个端口。",
      },
      {
        title: "装到一台 Mac 上",
        body:
          "前置条件、校验过的 DMG、从源码构建、首次配对、升级、换机、以及彻底卸载。",
      },
      {
        title: "查清什么会离开",
        body:
          "逐目录说明数据根目录、什么会加密回传到你的手机、密钥存在哪里、以及怎么停下或撤销。",
      },
      {
        title: "修好已经坏的",
        body:
          "真正会发生的失败：端口已被占、模型没应答、权重被跳过、配对码过期。",
      },
    ],
  },

  architecture: {
    heading: "三项保证，中间不隔任何服务",
    sub:
      "这套架构值得看的，是它缺了什么：没有账号服务，没有密钥托管，没有分析上报，没有托管推理。",
    items: [
      {
        title: "物理本地存储",
        body:
          "引擎产出的每一件东西 —— 简报、带水印的成片、封存的归档、解读报告 —— 都写在你自己 SSD 上的同一个数据根目录里。它不在 iCloud 同步范围内，也不在任何共享容器里；账本以完整文件保护写入，所以机器锁定后静态数据读不到。",
      },
      {
        title: "无账号、无 ID",
        body:
          "没有注册，没有手机号，没有邮箱，也没有要交出去的设备标识。手机与节点配对只要扫一次二维码；之后进来的指令，走的是你自己的 popopx-chat 队列，由 SMP 与 XFTP 端到端承载。",
      },
      {
        title: "全栈 AGPL-3.0",
        body:
          "十个引擎、SMP 网关、本地网页控制台、GOP 与频域隐形水印、算力点账本，是同一棵 AGPL-3.0-only 源码树。没有闭源内核：盲签凭证代码与密码学登记表都在 popopxmq 里，公开可查。",
      },
    ],
  },

  dashboard: {
    badge: "界面设计示意（UI Preview），非实时运行状态",
    heading: "节点控制台界面示意",
    sub:
      "节点自带一份本地网页控制台，这里是它状态页的示意图：识别到的机器、决定预留的统一内存、可被要求运行的引擎，以及放行进来的手机。版式、列名与算法都取自真实产品，没有任何一项读数来自运行中的进程。",
    machineLabel: "示例机型",
    machineHint:
      "统一内存以 GB 计，取自 Apple Silicon 的常见配置；本机真实数值由控制台第一步读 sysctl 得出。网页 API（navigator.deviceMemory）出于指纹保护最多只报 8 GB，所以示意里的数字不可能来自浏览器。",
    statusHeading: "运行状态",
    statusConnected: "已连接",
    daemonRunning: "守护进程运行中",
    loopbackNote: "控制台绑定在 127.0.0.1，并且拒绝绑定到 0.0.0.0、局域网地址或主机名，所以只有这台 Mac 能访问它。",
    memHeading: "统一内存仪表盘",
    memTotalLabel: "统一内存",
    memCeilingLabel: "常驻上限",
    memMeshLabel: "算力共享上限",
    memHeadroomLabel: "留给桌面会话的余量",
    usageLabel: "引擎工作集（估算）",
    servicesHeading: "本地引擎与服务",
    servicesNote:
      "左边是十个引擎和它们所属的三个货架，与手机菜单印出的那份目录相同；右边是节点知道的三个地址——它自己监听的那一个，以及它作为客户端拨号的那两个。两份都是固定清单，不是测量结果，而且引擎只有你启用才会执行。",
    devicesHeading: "已配对设备",
    deviceColumns: ["设备", "配对时间", "最后通信", "撤销"],
    devicesActive: "活跃",
    revoke: "撤销",
    revokedRow: "已撤销",
    neverSeen: "尚未通信",
    disclaimer:
      "这张卡是示意图，不是客户端：它不建立任何连接，也不读取任何进程。切换机型只是在你自己的浏览器里套用节点公开的档位规则，撤销也只改动你正在看的这一行。真实控制台里那个按钮会把设备标为已撤销、从此丢弃它发来的指令，但不会切断聊天连接——「隐私与控制」写清了它不做什么。",
  },

  node: {
    heading: "节点就是你已经拥有的一台电脑",
    sub:
      "不是一个地域、不是一种实例规格、也不是一个订阅档位。就是一台 Mac，跑 POPOPX 里那些本不该发生在别处的部分 —— 而你唯一需要信任的，正是你早就把文件交给它的那台机器。",
    points: [
      {
        title: "敏感活儿从不离开",
        body:
          "医疗报告由你自己机器上的 Vision 解析。原始素材在本地切片并打水印。保险库封存与封存归档都是你自己磁盘上的 CryptoKit 操作。这些路径里没有任何一步有可调用托管端点。",
      },
      {
        title: "距离是零",
        body:
          "推理发生在发起它的那个进程旁边的统一内存里。模型客户端锁死在 127.0.0.1:11434 —— 这就是为什么节点里连一条意外触达托管推理 API 的代码路径都没有：得先改掉那个字面量主机地址。",
      },
      {
        title: "钱你已经付过了",
        body:
          "算力点计量的是你自己的硬件花掉的算力，而边缘算力共享网络是唯一一个把闲置容量借出去、而不是借进来的引擎。你拿到哪一档，取决于你买的是多大内存。",
      },
      {
        title: "权限按设备授予",
        body:
          "一个签名的、一次性的、15 分钟有效的配对码，授权一台设备。控制台列出已配对的设备，撤销它就是一个按钮 —— 关于这个按钮不做什么，有一个诚实的说明，在隐私页。",
      },
    ],
    wireHeading: "一行，三段",
    wireBody:
      "手机发来的指令，就是你自己的 popopx-chat 队列上一条普通消息，里面含一行标记：前缀、引擎 id、动作、一个 JSON 载荷。解析器只在第一个分隔符处切分，所以带分隔符的载荷能完整保留；而引擎 id 未知、载荷为空、或载荷超过 iOS 侧接受上限的那一行，是整条丢弃而不是执行一半。",
    wireSampleLabel: "唯一被接受的形态",
    pairingHeading: "配对，按它真实发生的顺序",
    pairingSub:
      "节点铸造一个凭证，你只给手机看一次，之后这个凭证就一文不值。没有任何东西存在服务器上，因为根本没有一台服务器可以存它。",
    pairingSteps: [
      {
        title: "节点提供",
        body:
          "从菜单栏或控制台，节点写出一条配对提案，用它自己的 Ed25519 密钥签名 —— 就是数据根目录下 pairing/node.key 那把 —— 再通过 CoreImage 在本机渲染成二维码。图像不出这台机器。",
      },
      {
        title: "手机认领",
        body:
          "POPOPX iOS 扫这个码，扫出来的那个联系人就是设备密钥。这一次扫码建立 SMP 桥接；从那以后，「发现」的服务号只跟你的节点说话，不跟别的东西说话。",
      },
      {
        title: "提案作废",
        body:
          "第一次认领就把提案标记为已用。生成新码会让上一个退休，所以被拍下来的二维码不是一张长期邀请函 —— 即便没人扫，它 15 分钟后也自己过期。",
      },
    ],
    pairingFacts: {
      lifetime: "提案有效期",
      singleUse: "认领次数",
      signature: "由谁签名",
      delivery: "以什么呈现",
    },
    portsHeading: "节点的监听面",
    portsSub:
      "节点自己只开一个端口。另外两个归它启动、并以客户端身份连接的程序 —— 读防火墙日志时这点很重要：连向 11434 或 5225 的那条连接是节点发起的，不是节点接受的。",
    portsColumns: ["端口", "谁绑的", "地址", "协议", "什么在守它"],
    portsOwner: {
      node: "节点自身",
      tool: "Ollama",
      daemon: "popopx-chat",
    },
    portsPurpose: {
      console: "网页控制台与引擎日志流",
      inference: "本地模型推理",
      control: "聊天守护进程控制接口",
    },
    portsFootnote:
      "三个都只绑回环。控制台是明文 HTTP、没有 TLS —— 只有在这个前提下它才是合理设计，因为它从不出这台机器：绑 0.0.0.0、局域网地址或主机名的尝试会在建 socket 之前就被拒绝，而且地址是写死在 App 里的，不从配置文件读。真正保护它的是每次启动随机发的一次性 24 字节 Token，以 X-PPX-Token 传递，只存在内存里，进程退出即失效。而聊天守护进程的控制接口完全没有鉴权 —— 这就是对它的诚实描述 —— 它安全的唯一条件，就是它一直待在 127.0.0.1 上。",
  },

  engines: {
    heading: "十个主权引擎",
    sub:
      "三个货架，十个官方服务号。下面每张卡片都印出自己的价格：30 天一个周期，一笔固定数额的算力点；边缘算力共享节点按任务结算，收取 10% 协议手续费。每一个都在你已经拥有的硬件上执行。",
    filterAll: "全部",
    substrateLabel: "本地基座",
    quickMenuLabel: "iOS 快捷菜单",
    quickMenuHint:
      "每个按钮都向已配对的节点发送 ::popopx_sys::NODE_CMD::<service>::<action>::{}。",
    deterministicBadge: "确定性 —— 处理链路中没有模型",
    modelBadge: "有本地模型参与",
    offlineBadge: "无需本地模型权重即可运行",
    openDetails: "展开",
    closeDetails: "收起",
    shelfCount: "个引擎",
    creditsUnit: "算力点",
  },

  hardware: {
    heading: "档位随内存走",
    sub:
      "启动时节点读取 sysctl —— 芯片型号、CPU 核心数、物理统一内存、可用 SSD —— 自动选定一档。把 App 挪到另一台 Mac，档位跟着走，没有要重配的东西。",
    columns: [
      "统一内存",
      "典型芯片",
      "文本模型",
      "视频模型",
      "首 token 延迟*",
      "生成吞吐*",
      "常驻内存峰值*",
      "模式",
    ],
    modes: {
      lightweight: "轻量推理模式",
      balanced: "均衡档",
      full: "满血权重档",
    },
    footnote:
      "* 这三列是工程估算，不是实验室实测。依据是统一内存带宽受限下的稠密 27B 解码，加上按量化位宽推算 LTX-2.5 权重占用比例。散热、芯片世代、后台负载、片段长度与并发任务数，会把真实数字拉开两到三倍。用它选档位，别当性能承诺。",
    rules: [
      "96 GB 及以上 —— LTX-2.5 原版 BF16 满血权重，配 Qwen3.8-27B（Q8_0）。",
      "48 GB 至 95 GB —— LTX-2.5 MLX 8-bit 量化版，配 Qwen3.8-27B（Q4_K_M）。",
      "48 GB 以下 —— 改用 9B 模型的 Q4_K_M，本地只渲染短片，重型视频交给边缘算力共享网络。",
    ],
    plansHeading: "每一档实际部署了什么",
    plansSub:
      "上面那张表是你买之前看的指南。这一张是节点测完这台机器之后给自己记下来的东西，直接来自推荐函数，包括它会拉取的那个模型 tag。",
    plansColumns: [
      "内存区间",
      "文本模型",
      "视频栈",
      "常驻上限",
      "重型视频",
      "拉取命令",
    ],
    heavyVideo: {
      local: "本地渲染",
      mesh: "交给共享网络",
    },
    plansFootnote:
      "常驻上限是对实测内存做算术，不是跑分：每一档都从它读到的统一内存里扣掉一块固定的桌面会话预留，再设一个上限，免得内存极大的机器承诺超过这套栈本身需要的量。模型 tag 与量化标识，是节点真正传给 Ollama 的那些字符串。",
  },

  install: {
    heading: "一个 DMG、一次扫码、十个开关",
    sub:
      "节点没有安装器，没有守护进程账号，也没有任何东西要注册。它就是一个只绑回环的菜单栏 App，首启自己完成体检。",
    prereqsHeading: "下载之前",
    prereqNotes: {
      system: "安装包面向 macOS 14，App 是一个菜单栏代理。",
      memory:
        "Metal、MLX 和整条档位阶梯都以统一内存为前提。DMG 带着 x86_64 切片，但整套栈没有任何一处为 Intel 调优。",
      disk:
        "空闲空间不超过 40 GB 时模型权重直接拒绝下载，所以档位表的上限也就是你磁盘的上限。",
      media:
        "十个引擎里有五个调用 FFmpeg。安装向导可以通过 Homebrew 把它装上。",
      inference:
        "量化文本模型用 Ollama，视频用 LTX-2.5 MLX 工作区。两者都是本地工具，谁都不是服务。",
      bridge:
        "只有 SMP 配对那一步和手机驱动那条链路需要它。引擎本身没有它照样跑。",
    },
    prereqRequired: {
      hard: "必需",
      wizard: "向导会装",
      optional: "仅配对需要",
    },
    steps: [
      {
        title: "校验并打开 DMG",
        body:
          "从 Releases 取 POPOPX-Mac-Node-Universal.dmg 和发布页的摘要文件，放进同一个目录，打开任何东西之前先校验；「发布与源码」会印出当前版本对应的两条命令。再把 POPOPX Mac Node.app 拖进 /Applications。发布出去的构建带 Developer ID 签名和已经 staple 的公证票据，Gatekeeper 会直接放行 —— spctl -a -vv -t install 回答 accepted、source=Notarized Developer ID。而标签工作流在 runner 上跑的是 Scripts/build_dmg.sh，你自己构建用的也是这个脚本，两条路出来的是 ad-hoc 签名，那一个首次启动确实需要右键选「打开」。",
      },
      {
        title: "让它体检这台机器",
        body:
          "启动后从菜单栏打开控制台。第一步从 sysctl 读取芯片、核心数、统一内存与可用 SSD，打印它选定的档位、以及该档位隐含的模型 tag，并且显示它采样到的数字，而不是你声明的数字。",
      },
      {
        title: "部署本地引擎",
        body:
          "向导按清单往下走：Homebrew、FFmpeg、uv、Ollama、适配你这档的 Qwen 量化、LTX-2.5 工作区，最后自检。安装日志实时流回控制台页面，同时写到 logs/install.log，失败之后还能回头查。",
      },
      {
        title: "配对 iPhone",
        body:
          "生成配对二维码 —— 从控制台，或从菜单栏的「生成新配对码」—— 用 POPOPX iOS 客户端扫。这个码是签名的、一次性的、15 分钟过期。设备会出现在控制台的已配对列表里，带机型、配对时间与最后活动时间。",
      },
      {
        title: "打开引擎开关",
        body:
          "菜单栏与控制台里各有十个开关。引擎只有你启用才会跑；不需要本地模型的那四个 —— 物理闭锁、时间锁保险箱、水印溯源、检测报告解读 —— 在一个权重都没下载下来之前就能用。它们照样调用 FFmpeg，但不会调用模型栈。",
      },
    ],
    buildHeading: "或者从同一个 tag 自己构建",
    buildBody:
      "发布镜像就是从你可以检出的那棵树打包出来的。swift build、swift test、swift build -c release，然后 bash Scripts/build_dmg.sh --output dist --version v1.0.2 会写出通用 DMG、做 ad-hoc 签名、并连同伴生摘要文件一起产出。发布出去的那个产物用的是另一个脚本：Scripts/build-release.sh 会加上 Developer ID 签名、公证提交和 ZIP —— 这就是为什么下载来的镜像能过 spctl，而你自己构建的过不了。两个脚本都只能在 macOS 上跑，因为它们就是由 hdiutil 和 codesign 组成的。",
    lifecycleHeading: "首启之后",
    lifecycle: [
      {
        title: "升级",
        body:
          "没有自动更新器，也不检查更新 —— 这是节点不往外打电话的又一项。升级就是拖一下：下载新 DMG、校验、替换 /Applications 里的 App。设置、配对状态、节点密钥、保险库和所有产物都在 Application Support 下面，不在 bundle 里面，所以换上去的 App 会接手它所落在这台机器的状态。",
      },
      {
        title: "备份与换机",
        body:
          "App 会把自己的数据根目录标记为排除在 Time Machine 之外 —— 这保护你的备份不被模型权重塞满，也让恢复时少一个意外。但它同时意味着这个目录不在你的备份里。要迁移节点：先退出，把 ~/Library/Application Support/PopopxMacNode 拷到新 Mac 的同一路径，再让它重新体检：档位可能变，而 pairing/node.key 是跟着文件夹一起走的 —— 这正是那份拷贝必须和原件同样私密的全部原因。",
      },
      {
        title: "彻底卸载",
        body:
          "先关掉「登录时启动」，再从菜单栏「退出」—— 这会关闭监听器并释放登录项。删除 /Applications/POPOPX Mac Node.app，然后如果你连封存保险库、账本和产物也不想要了，再删 ~/Library/Application Support/PopopxMacNode。没有卸载器，也没有会忘记的卸载记录：那两个路径之外从未安装过任何东西；也没有 Keychain 条目，因为这个 App 从不使用 Keychain。",
      },
    ],
    bridgeTitle: "用你自己的脚本驱动引擎",
    bridgeBody:
      "integrations 目录自带一个 TypeScript 桥接和两个 Agent 适配器。它不开新端口，也不起第二个守护进程：复用 127.0.0.1:18920 上的控制台和每进程一次性 Token，发的还是手机发的那套 NODE_CMD 信令。闭锁动作是双重选择加入 —— allowLockdown 必须为 true，PPX_BRIDGE_SECRET 至少 16 个字符 —— 被拒绝这件事会写进插件日志，让你看得见它发生过。",
    requirementTitle: "一个诚实的前提",
    requirementBody:
      "节点自己向导的第 2 步、配对二维码、还有 SMP 桥接，都需要 PATH 上有一个 popopx-chat 聊天守护进程。节点只探测一个可执行文件，没有任何回退：上游构建会先答一行版本号，然后把之后每一条指令都跑失败。十个引擎本身不需要它。",
    signHeading: "当前发布版怎么签名",
    signBody:
      "镜像里的应用带有 Developer ID Application 签名、hardened runtime 标志与安全时间戳，公证票据已 staple 进包内。所以 Gatekeeper 不需要你帮忙就放行：spctl -a -vv -t install 回答 accepted、source=Notarized Developer ID。下面这块是 2026-11-25 从 v1.0.2 实际发布的那份字节里读出来的——把前两条命令跑在 /Applications 里的应用上，应当拿回同一个身份。全程不查询 Apple 账号，也不向任何服务器核对，因为票据就随应用一起带在盘上。",
    containerTitle: "镜像本身没有签名",
    containerBody:
      "对下载的 .dmg 跑 spctl，它会回答 rejected、source=no usable signature；codesign -dvv 对同一个文件说「完全没有签名」。这是预期答案，不是被篡改的警报。Apple 的签名加在应用包上，公证票据钉在包和外层磁盘镜像上，而镜像自身的完整性控制只有 SHA-256——就是这一页往下那项检查。",
    provenanceTitle: "哪个脚本产出哪个产物",
    provenanceBody:
      "这个应用有两条打包路径，终点不同。Scripts/build_dmg.sh——标签工作流在 macOS runner 上跑的就是它，也是本页前面构建步骤的终点——用 --sign - --timestamp=none 做临时签名，不开 hardened runtime，所以这条路径产出的构建第一次打开确实需要右键「打开」。Scripts/build-release.sh 是 Developer ID 路径：带 hardened runtime 签名、提交公证、把票据钉到应用和镜像两端，并在 ZIP 之外写出 SHA256SUMS.txt。你下载到的镜像出自第二个脚本；从未持有证书的 runner 做不出它。",
    digestHeading: "先校验摘要，再打开任何东西",
    digestBody:
      "两条命令，在你保存文件的目录里跑。要对照的是发布清单：它列出该版本目录下的每一个产物，且与打包在同一步写出；而 v1.0.2 旁边那份单文件 .dmg.sha256 写着一个没有任何已发布产物能对上哈希的摘要。「发布与源码」会按它解析到的版本打印这一对命令，可能比下面这个更新。",
    copyCommand: "复制命令",
    commandCopied: "已复制",
  },

  security: {
    heading: "什么留下、什么离开、怎么停下",
    sub:
      "只列「什么留在本地」的隐私页是一块广告牌。这一页把流量也列出来，因为「你的数据从不出设备」这句话的诚实版本，比口号更长，也比口号有用。",
    localHeading: "留在你的磁盘上",
    localSub:
      "都在同一个数据根目录下，在 App 自建、并对 Time Machine 排除的文件夹里；密钥以原子写入落成 0600 权限并启用完整文件保护。",
    localItems: [
      {
        title: "所有产物",
        body:
          "渲染出的片段、简报、带水印的导出、封存归档、解读报告、隔离中的输入，全部落在数据根目录下并留在那里。节点只在 outbox 里保留等待你的手机重新上线的结果。",
      },
      {
        title: "模型与它们的权重",
        body:
          "Qwen 量化版住在 Ollama 自己的存储里；LTX-2.5 权重住在节点的 engines 目录里。两者都是本地磁盘上的本地文件，各拉一次，而且空闲空间不超过 40 GB 时拒绝拉取。",
      },
      {
        title: "密钥与配对状态",
        body:
          "节点的 Ed25519 签名密钥、已配对设备列表、当前提案，都是 pairing/ 下面的普通文件。没有要迁移的 Keychain 条目，没有密钥的云端备份，任何地方都没有托管副本 —— 这件事是双向的，下面「丢失」那段就说清楚了。",
      },
      {
        title: "证据链",
        body:
          "闭锁与共享账本都在本地哈希追加，审计日志记录跑过什么、在哪个引擎上、结果如何。它是写给你读的：想知道「这玩意儿 03:14 干了什么」，logs/node.log 是最快的答案。",
      },
    ],
    transitHeading: "会离开这台机器",
    transitSub:
      "确实有四样，而且每一样要么是你自己的设备，要么是你自己配置的。没有第五类，也没有一个分析上报端点可以往外发东西。",
    transitItems: [
      {
        title: "结果，回传到你自己的手机",
        body:
          "一个干完的活儿回传一条最多 1024 字符的卡片，外加每个产物文件一条消息，走你自己的 popopx-chat 队列，由 SMP 中继、XFTP 承载。中继只看到密文。手机不在线时，结果在 outbox/ 里等待，最长重试 30 天。",
      },
      {
        title: "你让它读的源站",
        body:
          "晨间简报引擎抓取你配置的 RSS 地址，单条响应上限 3 MB —— 那就是一次普通的对外 HTTPS 请求，发给托管你订阅的那一家。",
      },
      {
        title: "你配置的 webhook",
        body:
          "物理闭锁可以向一个智能家居或在位检测端点 POST 一条签名事件。它是尽力而为、是选择加入，URL 是你的 —— 节点没有任何默认目的地。",
      },
      {
        title: "安装与权重拉取",
        body:
          "向导会下载 Homebrew formula、FFmpeg、uv、Ollama 和你选的那个量化版。这类流量本来就是安装步骤的内容，它只发生一次，当着你的面，日志在屏幕上。",
      },
    ],
    keysHeading: "密钥到底存在哪里",
    keysBody:
      "不是 Keychain。节点是一个对 Keychain 零依赖的 macOS App，这是一个决定而不是疏漏：配对与保险库材料是数据根目录下的文件，以原子写入、POSIX 0600 权限和完整文件保护落盘，所以机器锁定时静态状态下读不到。你做的交换是真实的 —— 文件权限既可审计又可移植，但在你的用户账户和一个已经拿到你用户账户的读取者之间，它也什么都不挡。请把数据根目录当作它本身那个秘密对待：它不在 Time Machine 里，而且它是这台机器上节点密钥唯一的副本。",
    dataNote: {
      output: "生成的产物，以及等待手机的那条 outbox 队列。",
      vault: "时间锁封存归档，以及能打开它们的继承材料。",
      pairing: "Ed25519 节点密钥、已配对设备列表、以及当前那一次性提案。",
      weights: "模型权重，以及视频引擎调用的 LTX-2.5 MLX 工作区。",
      ledger: "哈希追加的闭锁与共享账本。",
      logs: "安装日志与审计日志，写给操作者自己读。",
      config: "设置、引擎开关，以及桥接与集成共用那份配置。",
    },
    rootLabel: "数据根目录",
    controlHeading: "你这侧的停止开关",
    controlSub:
      "四个控制，全部在本地，全部在 App 里看得见而不是埋在某个设置页深处。它们都不需要网络 —— 这正是它们在网络就是问题所在时还能用的原因。",
    controls: [
      {
        title: "停掉一个引擎",
        body:
          "菜单栏与控制台里十个独立开关。关掉一个在下条指令生效，而已关闭引擎的指令是被拒绝，不是被排队。",
      },
      {
        title: "停止外借算力",
        body:
          "「暂停共享」立刻把节点移出边缘算力池：菜单栏显示「已暂停」，它不再接活儿。这是唯一一个名字里带「暂停」的开关，但它管的是共享容量，不是整个节点。",
      },
      {
        title: "作废当前配对码",
        body:
          "「生成新配对码」让未完成的提案退休并铸造一个替代者。任何人手里那张旧码的照片，得到的是一个过期签名，不是第二次机会。",
      },
      {
        title: "全部停掉",
        body:
          "「退出」才是真正的总开关：它关闭回环监听器、释放登录项，并让每次启动的 Token 随进程一起消失。一个没在运行的节点，对任何人、任何问题都不作答。",
      },
    ],
    revokeHeading: "以及撤销一台设备",
    revokeBody:
      "控制台的已配对设备列表每行都有一个「撤销」按钮。它把该设备标记为已撤销、移除它的联系人映射，并从此丢弃它的指令 —— 但它不会拆掉已经建立的 SMP 连接，App 在给你看的那条消息里就说了这一点。要把这件事做完，请在聊天客户端里删掉那个联系人。已经写到你磁盘上的东西继续留在你磁盘上；撤销停止的是后续指令，它不是一次远程擦除，而节点从来就没有过远程擦除这个能力可以拿掉。",
    limitsHeading: "这一页不承诺的事",
    limitsBody:
      "那个安全销毁是随机覆写加 sync 加 unlink。在 APFS 上，被修改的文件会写到新的块、而 SSD 会重映射逻辑块，所以这一步移除了文件、挡住了常规恢复工具，但不能证明旧的物理字节已经消失。这是用户态文件 API 能做到的最好程度，代码在它返回的结果里就这么写着。再往外说：除了退出，没有全局暂停；没有远程擦除；没有密钥托管，因此如果机器和数据根目录一起丢了，也就没有恢复；也没有一个可能被说服去装你没要求的东西的更新器。",
  },

  troubleshooting: {
    heading: "当它没按你的预期做事",
    sub:
      "这套架构上真正会发生的失败，按人们撞上它们的顺序排。每一条都先说要检查哪里 —— 在一台没有服务端的机器上，日志永远是最短路径。",
    columns: ["现象", "实际发生了什么", "怎么处理"],
    items: [
      {
        symptom: "控制台页面打不开",
        cause:
          "端口固定在 127.0.0.1:18920 且没有回退，所以另一个正在跑的实例 —— 或任何先到一步占住它的进程 —— 会把监听器留住。Token 也是每次启动一个：重启之前打开的旧标签页拿的是已失效的凭证。",
        fix:
          "先查 18920 上有没有监听器，退掉另一个实例，然后用菜单栏的「打开网页控制台」—— 它用当前 Token 构造当前 URL，而不是复用一个旧的。",
      },
      {
        symptom: "11434 上没人应答",
        cause:
          "需要模型的引擎只在回环上跟 Ollama 说话。如果 Ollama 没在跑，或者不是向导装的，引擎就失败，而不会回退到任何托管的东西。",
        fix:
          "启动 Ollama，确认 OLLAMA_HOST 是回环，再按档位表里你这台机器的档位拉对应量化版。失败信息里会引用那条本来能跑通的命令。",
      },
      {
        symptom: "权重从来没被下载",
        cause:
          "除非在 config/engines.json 里声明 weightSources，安装器会跳过权重下载；空闲空间不超过 40 GB 时直接拒绝。",
        fix:
          "加上你想拉取的来源，或者把权重拷进 engines/weights 并让配置指向它。先腾出磁盘 —— 那是一道阈值，不是一句警告。",
      },
      {
        symptom: "视频任务返回的是一行命令",
        cause:
          "视频活儿需要 LTX-2.5 工作区和它的权重。缺了这些，引擎会原样返回它本来要执行的那条命令，而不是假装已经产出了一个文件。",
        fix:
          "把向导里工作区那一步做完，或者克隆它指明的 LTX-2-MLX 工作区，然后重跑。这是故意的：一个伪装成功的桩，比一次诚实的拒绝更糟。",
      },
      {
        symptom: "配对码被拒绝",
        cause:
          "一个提案是一次性的、活 15 分钟。同一个码扫第二次，或者扫一个屏幕已经换过的新码，被拒是正确的行为。",
        fix:
          "生成一个新码，只扫一次。如果手机在成功之后自己重试，那是第一次认领已经赢了，拒绝就是预期答案。",
      },
      {
        symptom: "手机发指令没有任何反应",
        cause:
          "桥接需要 PATH 上有一个 popopx-chat 守护进程，而节点只探测一个可执行文件，没有回退。缺失时菜单栏会显示 popopx-chat not installed；而被关掉的引擎无论如何都不作答。",
        fix:
          "先看菜单栏那一行桥接状态，再看引擎开关，最后看审计日志。一条被拒绝的指令和一条从未到达的指令，在手机看来一模一样。",
      },
      {
        symptom: "手机离开期间结果不再送达",
        cause:
          "出站投递走的是你自己的守护进程与中继，所以一个拦出站连接的防火墙、一条不携带中继的 VPN、或者一个已经退出的守护进程，从这里看是同一副样子。结果不会丢：它们在 outbox/ 里排队，最长重试 30 天。",
        fix:
          "先确认守护进程在跑，再在做过滤的那一层里放行节点的出站连接，然后等队列排空，而不是重跑那个任务。",
      },
      {
        symptom: "下载卡片显示「内置的固定版本」",
        cause:
          "api.github.com 不可达、被拦、被限流，或者应答里没有可下载的产物。此时页面渲染编译进 bundle 的那个版本，而不是去猜。",
        fix:
          "直接打开发布页。这个站上没有别的东西需要那次调用，页面也没有因为一次失败而留下空白。",
      },
    ],
    escalation:
      "剩下的问题大部分由两个文件回答：向导做过的一切都写在 logs/install.log，之后的一切都写在 logs/node.log。两者都是数据根目录下的纯文本，控制台自己的日志频道会实时展示同样的事件。如果读完它们问题还在，节点与集成双方共同测试的那份契约就在仓库里，issue 请开在 popopx-mac-node。",
  },

  releases: {
    heading: "发布、摘要与整棵树",
    sub:
      "节点构建自一棵 AGPL-3.0-only 仓库，每个已发布的镜像都可以在打开之前对着摘要校验。这一节是这个站从「描述」切换到「指过去」的地方。",
    assetsHeading: "已发布的产物",
    assetsColumns: ["文件", "它是什么", "大小"],
    assetKinds: {
      dmg: "拖进 /Applications 的磁盘镜像，通用 arm64 加 x86_64。要拿的就是这个。",
      sidecar: "由打包那一步为它产出的那一个文件写的摘要。",
      zip: "同一个已签名 App bundle 的 ZIP 形态，取压缩包而不是卷。",
      sums: "列出本次发布每个产物及其摘要的清单。",
    },
    missingAsset:
      "并非每个发布都带每个产物。较早的版本只带磁盘镜像和它的伴生文件 —— 所以下面这个检查读的是你真的打开的那个发布。",
    verifyHeading: "打开任何东西之前先校验",
    verifyBody:
      "两条命令，就在你下载到的那个目录里跑。清单形态是首选，也是当前发布实际提供的那种。",
    verifySumsBody:
      "发布清单列出每个产物，所以你没下载的那个文件是「正常缺席」而不是「缺失」：加 --ignore-missing，然后读你拿的那个文件对应的那一行。清单与它点名的载荷是在同一步里写出来的。",
    verifySidecarBody:
      "较早的发布改为提供单产物伴生文件，那才是应该对照校验的文件。当一个发布同时带着两种、而它们不一致时，信清单：伴生文件可能来自同一版本号的另一次构建。",
    pipelineHeading: "一个版本是怎么到这里的",
    pipelineBody:
      "推送 tag 会在 macOS runner 上跑发布 workflow：构建树、跑契约测试、用 Scripts/build_dmg.sh 打包通用镜像、拒绝发布任何含绝对路径的校验文件、并上传那个脚本写出的东西。而一个已公证镜像配一份 SHA256SUMS.txt 清单，则来自 Scripts/build-release.sh —— 它加上 Developer ID 签名、向 Apple 提交公证、以及 ZIP。两条路终结在同一个地方：一个不需要相信这个本站点就能核对的摘要。",
    supportedHeading: "今天就在跑",
    supportedItems: [
      "全部十个引擎，各有自己的动作集与拒绝路径，逐个独立开启。",
      "从 sysctl 自动选档，连带该档位隐含的那次模型拉取。",
      "签名、一次性、15 分钟过期的配对，以及只绑回环的控制台。",
      "TypeScript 桥接与两个 Agent 适配器，复用同一个控制台与同一个 Token。",
    ],
    roadmapHeading: "还没有",
    roadmapSub:
      "在仓库里以计划的形式写下来，而不是在页面上作为承诺。这些今天都没有在跑。",
    roadmap: [
      {
        title: "在你这台机器上实测每个引擎",
        body:
          "用量面板与失败时间线回传到手机：从你面前这台机器取 token 与瓦特读数，替换掉硬件表里的估算。",
      },
      {
        title: "更强的共享隔离与可导出账本",
        body:
          "给外借容量更强的封隔，以及一份你能带出 App 而不是只能在里面读的账本。",
      },
      {
        title: "多继承人的分片托管",
        body:
          "继承材料按多个继承人切分，以及健康引擎里更多的报告版式。",
      },
      {
        title: "签名发行渠道与更多视频档位",
        body:
          "评估公证之外的一个商店渠道，以及为档位阶梯尚未覆盖的内存区间增加 LTX 档。",
      },
    ],
    sourceHeading: "源码，以及许可协议要求什么",
    sourceBody:
      "一个仓库，AGPL-3.0-only，没有闭源内核：引擎、控制台、水印与账本全在里面，盲签凭证代码与密码学参数登记表在旁边以 popopxmq 开源。第 13 条按常规适用：自由地运行、研究、修改它，如果把改动过的节点作为服务提供给别人，就要向他们提供你那份对应源码。合规成本只有这些。",
    licenceHeading: "不在覆盖范围内的",
    licenceBody:
      "AGPL-3.0 不授予 POPOPX 名称或 logo 的任何许可。fork 可以拿走除标识以外的一切：改名、换标、代码留着。",
  },

  faq: {
    heading: "真有人问的问题",
    sub: "短答。不能保证的那部分，照样摆在明面上。",
    items: [
      {
        q: "这些会跑在你们的服务器上吗？",
        a: "不会。十个引擎的指令从 iOS 客户端经你自己的 popopx-chat 队列进来，端到端加密；推理、渲染、存储与物理执行全在你的 Mac 上。没有任何一步需要我们的基础设施，节点里也没有一条代码路径能连到托管推理 API —— 模型客户端锁死在 127.0.0.1。",
      },
      {
        q: "我得注册什么？",
        a: "什么都不用。产品里没有账号、没有手机号、没有邮箱、没有广告标识符。手机与节点配对只要扫一次二维码；网页控制台只绑回环，每次启动换一个随机 Token，局域网里其他设备连端口都摸不到。",
      },
      {
        q: "为什么是 AGPL-3.0，第 13 条要求我做什么？",
        a: "节点每个源文件都是 AGPL-3.0-only：你可以自由运行、研究、修改、再分发。第 13 条加上网络条款 —— 把改动过的节点作为服务提供给别人，就要向他们提供你那份对应源码。合规成本只有这一条，也正是这个项目能自由运行的原因。",
      },
      {
        q: "水印或算力点协议是闭源的吗？",
        a: "不是，这是最该被核对的一种说法。BBS+ 与 BLS12-381 凭证代码、权益逻辑、密码学参数登记表都在 popopxmq 里开源；GOP 与频域隐形水印及其盲解码器在本仓库。商业那一轨卖的是机房、值班表、发行通道和合规文件 —— 从来不是一道源码门槛。",
      },
      {
        q: "我能用 POPOPX 的名称和 logo 分发一个 fork 吗？",
        a: "不能。AGPL-3.0 不授权商标，任何支持档位也不给。政策要的补救对 fork 几乎零成本：改名、换标、代码留着。品牌使用需要另外的书面授权。",
      },
      {
        q: "硬件表里的数字该信多少？",
        a: "就信它下面那句话说的程度。它们是估算值，不是你这台机器的实测，真实吞吐会随散热与负载差两到三倍。节点 1.1 版会把它们换成在你这台机器上实测的每引擎 token 与瓦特读数。",
      },
      {
        q: "哪些机器受支持？",
        a: "Apple Silicon 上的 macOS 14 或更新。档位阶梯、Metal 与 MLX 都以统一内存为前提，而 MLX 不跑在 Intel 上；所以尽管通用（Universal）安装包照旧带着 x86_64 切片，Intel Mac 也不是这个项目面向的宿主。App 本身不链接任何第三方库：只用 Apple 框架。它驱动的东西另有安排，这是设计使然 —— Ollama、FFmpeg 与 LTX-2.5 权重是引擎调用的本地工具，每个引擎都写明了自己需要哪几个。",
      },
    ],
  },

  footer: {
    tagline: "给 POPOPX 生态用的本地算力。归你运行，归你阅读。",
    licenceHeading: "授权",
    licenceBody:
      "节点源码是 AGPL-3.0-only。本项目自绘的图形资产是 AGPL-3.0-only，或由你选择 CC0-1.0。",
    trademarkHeading: "商标",
    trademarkBody:
      "POPOPX、POPOPX Chat 与 POPOPX 标志是 POPOPX Chat 项目的商标。本站使用的图标是未经修改的 POPOPX iOS 应用图标。政策见 popopx-chat 仓库里的 TRADEMARK-POPOPX.md。",
    privacyHeading: "本页",
    privacyBody:
      "无分析、无 Cookie、无指纹识别、无第三方脚本、无外部 CDN。这个页面唯一可能发出的外部请求，是向 api.github.com 取 release 资源列表；那次调用失败就退回到内置的固定链接。",
    appleNotice:
      "与 Apple 无隶属关系。macOS、iOS、Apple Silicon 与 Metal 是 Apple Inc. 的商标。",
    sourceRepo: "Mac Node 源码",
    iosRepo: "iOS 客户端源码",
    backToTop: "回到顶部",
  },
};

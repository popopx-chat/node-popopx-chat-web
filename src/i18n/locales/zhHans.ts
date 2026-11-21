import type { Dictionary } from "../types";

export const zhHans: Dictionary = {
  dir: "ltr",

  nav: {
    engines: "引擎",
    architecture: "架构",
    hardware: "硬件",
    install: "安装",
    faq: "常见问题",
    github: "GitHub",
    download: "下载",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    chooseLanguage: "语言",
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "把你自己那台 Mac 变成",
    titleAccent: "本地算力层",
    subtitle:
      "POPOPX Mac Node 在你自己的机器上跑起本地算力与确定性执行这一层，服务 POPOPX iOS 客户端「发现」里的十大引擎。零云端、无账号、无遥测、端到端加密。",
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
      "把 .dmg 和它的 .sha256 伴生文件放进同一个目录，然后对伴生文件执行 shasum -a 256 -c，而不是对镜像执行。伴生文件里只有一条摘要和一个相对文件名；预期的结果是 POPOPX-Mac-Node-Universal.dmg: OK。",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "你自己的硬件",
    statStorage: "物理本地存储",
    statIdentity: "无账号、无 ID",
    statSource: "全栈 AGPL-3.0",
  },

  architecture: {
    heading: "三项保证，中间不隔任何服务",
    sub:
      "这套架构值得看的，是它缺了什么：没有账号服务，没有密钥托管，没有分析上报，没有托管推理。",
    items: [
      {
        title: "物理本地存储",
        body:
          "引擎产出的每一件东西 —— 简报、带水印的成片、封存的归档、解读报告 —— 都写在你自己 SSD 上的同一个数据根目录里。它不在 iCloud 同步范围内，也不在任何共享容器里；账本以完整文件保护写入 —— 机器锁定后，静态数据读不到。",
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

  engines: {
    heading: "十大主权引擎",
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
      "48 GB 以下 —— 轻量推理模式；重型视频任务不本地渲染，交给边缘算力共享节点。",
    ],
  },

  install: {
    heading: "三分钟，之后就是你的",
    sub:
      "节点没有安装器，没有守护进程账号，也没有任何东西要注册。它就是一个只绑回环的菜单栏宿主 App。",
    steps: [
      {
        title: "校验并打开 DMG",
        body:
          "从 Releases 取 POPOPX-Mac-Node-Universal.dmg 和它的 .sha256，两个放进同一个目录，打开任何东西之前先校验：shasum -a 256 -c POPOPX-Mac-Node-Universal.dmg.sha256 必须输出 OK。再把 App 拖进 /Applications。",
      },
      {
        title: "部署本地引擎",
        body:
          "打开菜单栏项，启动控制台向导。第 1 步体检芯片、统一内存与 SSD，按内存档位拉适配的 Qwen3.8 量化权重，初始化 ltx2 工作区，安装日志实时流回网页。",
      },
      {
        title: "配对 iPhone",
        body:
          "用 POPOPX iOS 客户端扫控制台上的配对二维码。这一次扫码建立 SMP 桥接；从那以后，「发现」的服务号只跟你的节点说话。",
      },
      {
        title: "打开引擎开关",
        body:
          "十个开关。引擎只有你启用才会跑；不需要本地模型的那四个 —— 物理闭锁、时间锁保险箱、水印溯源、检测报告解读 —— 在一个权重都没下载下来之前就能用。它们照样调用 FFmpeg，但不会调用模型栈。",
      },
    ],
    bridgeTitle: "用你自己的脚本驱动引擎",
    bridgeBody:
      "integrations 目录自带一个 TypeScript 桥接和两个 Agent 适配器。它不开新端口，也不起第二个守护进程：复用 127.0.0.1:18920 上的控制台和每进程一次性 Token，发的还是手机发的那套 NODE_CMD 信令。闭锁动作是双重选择加入 —— allowLockdown 必须为 true，PPX_BRIDGE_SECRET 至少 16 个字符 —— 被拒绝这件事会写进插件日志，让你看得见它发生过。",
    requirementTitle: "一个诚实的前提",
    requirementBody:
      "节点自己向导的第 2 步、配对二维码、还有 SMP 桥接，都需要 PATH 上有一个 popopx-chat 聊天守护进程。节点只探测一个可执行文件，没有任何回退：上游构建会先答一行版本号，然后把之后每一条指令都跑失败。十个引擎本身不需要它。",
    copyCommand: "复制命令",
    commandCopied: "已复制",
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

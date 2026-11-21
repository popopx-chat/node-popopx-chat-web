import type { Dictionary } from "../types";

export const zhHant: Dictionary = {
  dir: "ltr",

  nav: {
    engines: "引擎",
    architecture: "架構",
    hardware: "硬件",
    install: "安裝",
    faq: "常見問題",
    github: "GitHub",
    download: "下載",
    openMenu: "開啟選單",
    closeMenu: "關閉選單",
    chooseLanguage: "語言",
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "把你自己那台 Mac 變成",
    titleAccent: "本地算力層",
    subtitle:
      "POPOPX Mac Node 在你自己的機器上跑起本地算力與確定性執行這一層，服務 POPOPX iOS 客戶端「發現」裡的十大引擎。零雲端、無賬號、無遙測、端到端加密。",
    ctaDownload: "下載 DMG",
    ctaSource: "讀源碼",
    releaseLabel: "最新發佈",
    sizeLabel: "大小",
    digestLabel: "SHA-256",
    statusFetching: "正在讀取 GitHub Releases…",
    statusLive: "來自 GitHub Releases 的即時數據",
    statusFallback: "GitHub 不可達 —— 顯示內置的固定版本",
    copyDigest: "複製摘要",
    digestCopied: "摘要已複製",
    verifyTitle: "開啟之前先校驗",
    verifyBody:
      "把 .dmg 和它的 .sha256 伴生檔案放進同一個目錄，然後對伴生檔案執行 shasum -a 256 -c，而不是對映像檔執行。伴生檔案裡只有一條摘要和一個相對檔案名；預期的結果是 POPOPX-Mac-Node-Universal.dmg: OK。",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "你自己的硬件",
    statStorage: "物理本地存儲",
    statIdentity: "無賬號、無 ID",
    statSource: "全棧 AGPL-3.0",
  },

  architecture: {
    heading: "三項保證，中間不隔任何服務",
    sub:
      "這套架構值得看的，是它缺了什麼：沒有賬號服務，沒有密鑰託管，沒有分析上報，沒有託管推理。",
    items: [
      {
        title: "物理本地存儲",
        body:
          "引擎產出的每一件東西 —— 簡報、帶水印的成片、封存的歸檔、解讀報告 —— 都寫在你自己 SSD 上的同一個數據根目錄裡。它不在 iCloud 同步範圍內，也不在任何共享容器裡；賬本以完整檔案保護寫入 —— 機器鎖定後，靜態數據讀不到。",
      },
      {
        title: "無賬號、無 ID",
        body:
          "沒有註冊，沒有手機號，沒有郵箱，也沒有要交出去的設備標識。手機與節點配對只要掃一次二維碼；之後進來的指令，走的是你自己的 popopx-chat 隊列，由 SMP 與 XFTP 端到端承載。",
      },
      {
        title: "全棧 AGPL-3.0",
        body:
          "十個引擎、SMP 網關、本地網頁控制台、GOP 與頻域隱形水印、算力點賬本，是同一棵 AGPL-3.0-only 源碼樹。沒有閉源內核：盲簽憑證代碼與密碼學登記表都在 popopxmq 裡，公開可查。",
      },
    ],
  },

  engines: {
    heading: "十大主權引擎",
    sub:
      "三個貨架，十個官方服務號。下面每張卡片都印出自己的價格：30 天一個週期，一筆固定數額的算力點；邊緣算力共享節點按任務結算，收取 10% 協議手續費。每一個都在你已經擁有的硬件上執行。",
    filterAll: "全部",
    substrateLabel: "本地基座",
    quickMenuLabel: "iOS 快捷選單",
    quickMenuHint:
      "每個按鈕都向已配對的節點發送 ::popopx_sys::NODE_CMD::<service>::<action>::{}。",
    deterministicBadge: "確定性 —— 處理鏈路中沒有模型",
    modelBadge: "有本地模型參與",
    offlineBadge: "無需本地模型權重即可運行",
    openDetails: "展開",
    closeDetails: "收起",
    shelfCount: "個引擎",
    creditsUnit: "算力點",
  },

  hardware: {
    heading: "檔位隨內存走",
    sub:
      "啟動時節點讀取 sysctl —— 芯片型號、CPU 核心數、物理統一內存、可用 SSD —— 自動選定一檔。把 App 挪到另一台 Mac，檔位跟著走，沒有要重配的東西。",
    columns: [
      "統一內存",
      "典型芯片",
      "文本模型",
      "影片模型",
      "首 token 延遲*",
      "生成吞吐*",
      "常駐內存峰值*",
      "模式",
    ],
    modes: {
      lightweight: "輕量推理模式",
      balanced: "均衡檔",
      full: "滿血權重檔",
    },
    footnote:
      "* 這三列是工程估算，不是實驗室實測。依據是統一內存帶寬受限下的稠密 27B 解碼，加上按量化位寬推算 LTX-2.5 權重佔用比例。散熱、芯片世代、後台負載、片段長度與並發任務數，會把真實數字拉開兩到三倍。用它選檔位，別當性能承諾。",
    rules: [
      "96 GB 及以上 —— LTX-2.5 原版 BF16 滿血權重，配 Qwen3.8-27B（Q8_0）。",
      "48 GB 至 95 GB —— LTX-2.5 MLX 8-bit 量化版，配 Qwen3.8-27B（Q4_K_M）。",
      "48 GB 以下 —— 輕量推理模式；重型影片任務不本地渲染，交給邊緣算力共享節點。",
    ],
  },

  install: {
    heading: "三分鐘，之後就是你的",
    sub:
      "節點沒有安裝器，沒有守護進程賬號，也沒有任何東西要註冊。它就是一個只綁回環的選單欄宿主 App。",
    steps: [
      {
        title: "校驗並開啟 DMG",
        body:
          "從 Releases 取 POPOPX-Mac-Node-Universal.dmg 和它的 .sha256，兩個放進同一個目錄，開啟任何東西之前先校驗：shasum -a 256 -c POPOPX-Mac-Node-Universal.dmg.sha256 必須輸出 OK。再把 App 拖進 /Applications。",
      },
      {
        title: "部署本地引擎",
        body:
          "開啟選單欄項，啟動控制台向導。第 1 步體檢芯片、統一內存與 SSD，按內存檔位拉適配的 Qwen3.8 量化權重，初始化 ltx2 工作區，安裝日誌實時流回網頁。",
      },
      {
        title: "配對 iPhone",
        body:
          "用 POPOPX iOS 客戶端掃控制台上的配對二維碼。這一次掃碼建立 SMP 橋接；從那以後，「發現」的服務號只跟你的節點說話。",
      },
      {
        title: "開啟引擎開關",
        body:
          "十個開關。引擎只有你啟用才會跑；不需要本地模型的那四個 —— 物理閉鎖、時間鎖保險箱、水印溯源、檢測報告解讀 —— 在一個權重都沒下載下來之前就能用。它們照樣調用 FFmpeg，但不會調用模型棧。",
      },
    ],
    bridgeTitle: "用你自己的腳本驅動引擎",
    bridgeBody:
      "integrations 目錄自帶一個 TypeScript 橋接和兩個 Agent 適配器。它不開新端口，也不起第二個守護進程：複用 127.0.0.1:18920 上的控制台和每進程一次性 Token，發的還是手機發的那套 NODE_CMD 信令。閉鎖動作是雙重選擇加入 —— allowLockdown 必須為 true，PPX_BRIDGE_SECRET 至少 16 個字符 —— 被拒絕這件事會寫進插件日誌，讓你看得見它發生過。",
    requirementTitle: "一個誠實的前提",
    requirementBody:
      "節點自己向導的第 2 步、配對二維碼、還有 SMP 橋接，都需要 PATH 上有一個 popopx-chat 聊天守護進程。節點只探測一個可執行檔案，沒有任何回退：上游構建會先答一行版本號，然後把之後每一條指令都跑失敗。十個引擎本身不需要它。",
    copyCommand: "複製命令",
    commandCopied: "已複製",
  },

  faq: {
    heading: "真有人問的問題",
    sub: "短答。不能保證的那部分，照樣擺在明面上。",
    items: [
      {
        q: "這些會跑在你們的服務器上嗎？",
        a: "不會。十個引擎的指令從 iOS 客戶端經你自己的 popopx-chat 隊列進來，端到端加密；推理、渲染、存儲與物理執行全在你的 Mac 上。沒有任何一步需要我們的基礎設施，節點裡也沒有一條代碼路徑能連到託管推理 API —— 模型客戶端鎖死在 127.0.0.1。",
      },
      {
        q: "我得註冊什麼？",
        a: "什麼都不用。產品裡沒有賬號、沒有手機號、沒有郵箱、沒有廣告標識符。手機與節點配對只要掃一次二維碼；網頁控制台只綁回環，每次啟動換一個隨機 Token，局域網裡其他設備連端口都摸不到。",
      },
      {
        q: "為什麼是 AGPL-3.0，第 13 條要求我做什麼？",
        a: "節點每個源檔案都是 AGPL-3.0-only：你可以自由運行、研究、修改、再分發。第 13 條加上網絡條款 —— 把改動過的節點作為服務提供給別人，就要向他們提供你那份對應源碼。合規成本只有這一條，也正是這個項目能自由運行的原因。",
      },
      {
        q: "水印或算力點協議是閉源的嗎？",
        a: "不是，這是最該被核對的一種說法。BBS+ 與 BLS12-381 憑證代碼、權益邏輯、密碼學參數登記表都在 popopxmq 裡開源；GOP 與頻域隱形水印及其盲解碼器在本倉庫。商業那一軌賣的是機房、值班表、發行通道和合規文件 —— 從來不是一道源碼門檻。",
      },
      {
        q: "我能用 POPOPX 的名稱和 logo 分發一個 fork 嗎？",
        a: "不能。AGPL-3.0 不授權商標，任何支持檔位也不給。政策要的補救對 fork 幾乎零成本：改名、換標、代碼留著。品牌使用需要另外的書面授權。",
      },
      {
        q: "硬件表裡的數字該信多少？",
        a: "就信它下面那句話說的程度。它們是估算值，不是你這台機器的實測，真實吞吐會隨散熱與負載差兩到三倍。節點 1.1 版會把它們換成在你這台機器上實測的每引擎 token 與瓦特讀數。",
      },
      {
        q: "哪些機器受支持？",
        a: "Apple Silicon 上的 macOS 14 或更新。檔位階梯、Metal 與 MLX 都以統一內存為前提，而 MLX 不跑在 Intel 上；所以儘管通用（Universal）安裝包照舊帶著 x86_64 切片，Intel Mac 也不是這個項目面向的宿主。App 本身不連結任何第三方庫：只用 Apple 框架。它驅動的東西另有安排，這是設計使然 —— Ollama、FFmpeg 與 LTX-2.5 權重是引擎調用的本地工具，每個引擎都寫明了自己需要哪幾個。",
      },
    ],
  },

  footer: {
    tagline: "給 POPOPX 生態用的本地算力。歸你運行，歸你閱讀。",
    licenceHeading: "授權",
    licenceBody:
      "節點源碼是 AGPL-3.0-only。本項目自繪的圖形資產是 AGPL-3.0-only，或由你選擇 CC0-1.0。",
    trademarkHeading: "商標",
    trademarkBody:
      "POPOPX、POPOPX Chat 與 POPOPX 標誌是 POPOPX Chat 項目的商標。本站使用的圖標是未經修改的 POPOPX iOS 應用圖標。政策見 popopx-chat 倉庫裡的 TRADEMARK-POPOPX.md。",
    privacyHeading: "本頁",
    privacyBody:
      "無分析、無 Cookie、無指紋識別、無第三方腳本、無外部 CDN。這個頁面唯一可能發出的外部請求，是向 api.github.com 取 release 資源清單；那次調用失敗就退回到內置的固定連結。",
    appleNotice:
      "與 Apple 無隸屬關係。macOS、iOS、Apple Silicon 與 Metal 是 Apple Inc. 的商標。",
    sourceRepo: "Mac Node 源碼",
    iosRepo: "iOS 客戶端源碼",
    backToTop: "回到頂部",
  },
};

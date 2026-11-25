import type { Dictionary } from "../types";

export const zhHant: Dictionary = {
  dir: "ltr",

  nav: {
    overview: "總覽",
    node: "節點是什麼",
    features: "能做什麼",
    install: "安裝與設定",
    security: "隱私與控制",
    troubleshooting: "疑難排解",
    releases: "發布與原始碼",
    download: "取得節點",
    openMenu: "開啟選單",
    closeMenu: "關閉選單",
    chooseLanguage: "語言",
  },

  ecosystem: {
    heading: "POPOPX 的其他部分",
    body:
      "三個入口網站，一個專案，全都是我們自己的。本頁不會從那幾個網站載入任何東西，也從未對它們發出請求：只有你自己點擊，才會離開 node.popopx.chat。",
    chat: "POPOPX Chat",
    chatBody:
      "訊息網路本身 —— 端對端、沒有全域 ID，你的節點聆聽的也是這條佇列。",
    botStudio: "Bot Studio",
    botStudioBody:
      "十大引擎背後的服務帳號在那裡撰寫與託管，跑在你自己控制的伺服器上。",
    serviceSuite: "服務帳號",
    serviceSuiteBody:
      "那些引擎與之通訊的零知識加密頻道生態系統。",
  },

  routes: {
    "/": { eyebrow: "總覽", title: "POPOPX Mac Node —— 你的 Mac 跑這十個引擎" },
    "/node": { eyebrow: "節點是什麼", title: "節點是什麼、又不是什麼 —— POPOPX Mac Node" },
    "/features": { eyebrow: "能做什麼", title: "十個本機引擎與跑它們的硬體 —— POPOPX Mac Node" },
    "/install": { eyebrow: "安裝與設定", title: "安裝、配對、升級、備份、移除 —— POPOPX Mac Node" },
    "/security": { eyebrow: "隱私與控制", title: "什麼留在你的磁碟上，以及怎麼把它停下 —— POPOPX Mac Node" },
    "/troubleshooting": { eyebrow: "疑難排解", title: "連接埠、防火牆與記憶體上限 —— POPOPX Mac Node" },
    "/releases": { eyebrow: "發布與原始碼", title: "發布、摘要與整棵原始碼樹 —— POPOPX Mac Node" },
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "自己的裝置，",
    titleAccent: "自己的節點，自己的控制權。",
    subtitle:
      "POPOPX Mac Node 是你自己那張網路的邊緣。它在你自己的 Mac 上執行「發現」裡十大引擎背後的本機模型、媒體與檔案引擎，與 POPOPX Chat、Bot Studio 並列。網路只轉發你的加密訊息；推論、渲染、封存檔與秘密，留在你花錢買的硬體上。",
    ctaDownload: "下載 DMG",
    ctaSource: "讀原始碼",
    releaseLabel: "最新發布",
    sizeLabel: "大小",
    digestLabel: "SHA-256",
    statusFetching: "正在讀取 GitHub Releases…",
    statusLive: "來自 GitHub Releases 的即時資料",
    statusFallback: "GitHub 連不上 —— 顯示內建的固定版本",
    copyDigest: "複製摘要",
    digestCopied: "摘要已複製",
    verifyTitle: "開啟之前先驗證",
    verifyBody:
      "把映像檔與發布頁的摘要檔放進同一個資料夾，在開啟任何東西之前先比對。摘要檔的形態因版本而異 —— 較新的發布提供 SHA256SUMS.txt 清單，較舊的只提供單一產物的 .sha256 —— 所以「發布與原始碼」會針對你正在看的那個版本，列出正確的那兩條指令。",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "你自己的硬體",
    statStorage: "產物在你自己的 SSD 上",
    statIdentity: "無帳號、無 ID",
    statSource: "全棧 AGPL-3.0",
  },

  overview: {
    splitHeading: "網路負責協調。你的機器負責執行。",
    splitSub:
      "這就是全部的想法，而且值得說得精確，因為這類產品通常被反過來理解：做事情的不是雲端，你的 Mac 也不是薄型用戶端。兩邊各自只做它該做的那一半。",
    cloudTitle: "網路搬運的是什麼",
    cloudBody:
      "SMP 中繼與 XFTP 儲存在你自己的裝置之間端對端地搬運訊息與檔案，「發現」裡的十個服務帳號各發一則信號。中繼只看得到密文與路由後設資料：它從不接收模型、提示詞、畫面或檔名，也不執行任何引擎的任何一部分。",
    macTitle: "你的 Mac 做的是什麼",
    macBody:
      "節點接到那則信號，然後在你面前的這台機器上做事：透過迴環上的 Ollama 做量化推論、透過 MLX 做 LTX-2.5 渲染、FFmpeg 與 GOP 浮水印、CryptoKit 封存與雜湊鏈保險庫、以及負責實體動作的 diskutil 與 AppKit。然後把結果寫到你自己磁碟上。",
    pathsHeading: "從你所在的位置開始",
    paths: [
      {
        title: "理解這個分工",
        body:
          "節點是什麼、它聆聽的那一條線、手機怎麼取得驅動它的權限、涉及哪幾個連接埠。",
      },
      {
        title: "裝到一台 Mac 上",
        body:
          "前置條件、驗證過的 DMG、從原始碼建置、首次配對、升級、換機、以及徹底移除。",
      },
      {
        title: "查清什麼會離開",
        body:
          "逐目錄說明資料根目錄、什麼會加密回傳到你的手機、金鑰存在哪裡、以及怎麼停下或撤銷。",
      },
      {
        title: "修好已經壞掉的",
        body:
          "真的會發生的失敗：連接埠已被佔用、模型沒回應、權重被跳過、配對碼過期。",
      },
    ],
  },

  architecture: {
    heading: "三項保證，中間不隔任何服務",
    sub:
      "這套架構值得看的，是它少了什麼：沒有帳號服務，沒有金鑰託管，沒有分析上報，沒有託管推論。",
    items: [
      {
        title: "實體本機儲存",
        body:
          "引擎產出的每一件東西 —— 簡報、帶浮水印的成片、封存的檔案、解讀報告 —— 都寫在你自己 SSD 上的同一個資料根目錄裡。它不在 iCloud 同步範圍內，也不在任何共用容器裡；帳本以完整檔案保護寫入，所以機器鎖定之後，靜態資料讀不到。",
      },
      {
        title: "無帳號、無 ID",
        body:
          "沒有註冊，沒有手機號碼，沒有電子郵件，也沒有要交出去的裝置識別碼。手機與節點配對只要掃一次 QR Code；之後進來的指令，走的是你自己的 popopx-chat 佇列，由 SMP 與 XFTP 端對端承載。",
      },
      {
        title: "全棧 AGPL-3.0",
        body:
          "十個引擎、SMP 閘道、本機網頁控制台、GOP 與頻域隱形浮水印、算力點帳本，是同一棵 AGPL-3.0-only 原始碼樹。沒有閉源核心：盲簽憑證程式碼與密碼學登記表都在 popopxmq 裡，公開可查。",
      },
    ],
  },

  dashboard: {
    badge: "介面設計示意（UI Preview），非即時執行狀態",
    heading: "節點控制台介面示意",
    sub:
      "節點自帶一份本機網頁控制台，這裡是它狀態頁的示意圖：辨識到的機器、決定保留的統一記憶體、可被要求執行的引擎，以及放進來的手機。版面、欄名與演算都取自真實產品，沒有任何一項讀數來自執行中的程序。",
    machineLabel: "示例機型",
    machineHint:
      "統一記憶體以 GB 計，取自 Apple Silicon 的常見配置；本機真實數值由控制台第一步讀 sysctl 得出。網頁 API（navigator.deviceMemory）為了指紋防護最多只回報 8 GB，所以示意裡的數字不可能來自瀏覽器。",
    statusHeading: "執行狀態",
    statusConnected: "已連線",
    daemonRunning: "守護程序執行中",
    loopbackNote: "控制台綁定在 127.0.0.1，並拒絕綁定到 0.0.0.0、區域網路位址或主機名稱，所以只有這台 Mac 能存取它。",
    memHeading: "統一記憶體儀表",
    memTotalLabel: "統一記憶體",
    memCeilingLabel: "常駐上限",
    memMeshLabel: "算力共享上限",
    memHeadroomLabel: "留給桌面工作階段的餘裕",
    usageLabel: "引擎工作集（估算）",
    servicesHeading: "本機引擎與服務",
    servicesNote:
      "左邊是十個引擎與它們所屬的三個貨架，和手機選單印出的那份目錄相同；右邊是節點知道的三個位址——它自己監聽的那一個，以及它作為用戶端撥號的那兩個。兩份都是固定清單，不是量測結果，而且引擎只有你啟用才會執行。",
    devicesHeading: "已配對裝置",
    deviceColumns: ["裝置", "配對時間", "最後通訊", "撤銷"],
    devicesActive: "活躍",
    revoke: "撤銷",
    revokedRow: "已撤銷",
    neverSeen: "尚未通訊",
    disclaimer:
      "這張卡是示意圖，不是客戶端：它不建立任何連線，也不讀取任何程序。切換機型只是在你自己的瀏覽器裡套用節點公開的檔位規則，撤銷也只變動你正在看的這一行。真實控制台裡那個按鈕會把裝置標為已撤銷、從此丟棄它送來的指令，但不會切斷聊天連線——「隱私與控制」寫清了它不做什麼。",
  },

  node: {
    heading: "節點就是你已經擁有的一台電腦",
    sub:
      "不是一個區域、不是一種執行個體規格、也不是一個訂閱方案。就是一台 Mac，跑 POPOPX 裡那些本不該發生在別處的部分 —— 而你唯一需要信任的，正是你早就把檔案交給它的那台機器。",
    points: [
      {
        title: "敏感的處理從不外流",
        body:
          "醫療報告由你自己機器上的 Vision 解析。原始影像在本地切割並上浮水印。保險庫封存與封存檔都是你自己磁碟上的 CryptoKit 操作。這些路徑裡沒有任何一步有可以呼叫的託管端點。",
      },
      {
        title: "距離是零",
        body:
          "推論發生在發起它的那個行程旁邊的統一記憶體裡。模型用戶端鎖死在 127.0.0.1:11434 —— 這就是為什麼節點裡連一條會意外碰到託管推論 API 的程式碼路徑都沒有：要先改掉的，是那個字面量的主機位址。",
      },
      {
        title: "錢你已經付過了",
        body:
          "算力點計量的是你自己的硬體花掉的算力，而邊緣算力共享節點是唯一的、把閒置容量借出去而不是借進來的引擎。你拿到哪一檔，取決於你買的是多大記憶體。",
      },
      {
        title: "權限按裝置授予",
        body:
          "一個經過簽章、一次性、15 分鐘有效的配對碼，授權一台裝置。控制台列出已配對的裝置，撤銷它就是一個按鈕 —— 關於這個按鈕不做什麼，隱私頁上有一段誠實的說明。",
      },
    ],
    wireHeading: "一行，三個分段",
    wireBody:
      "手機傳來的指令，就是你自己的 popopx-chat 佇列上一則一般訊息，裡面含一行標記：前綴、引擎 id、動作、一個 JSON 酬載。解析器只在第一個分隔符號處切分，所以含有分隔符號的酬載能完整保留；而引擎 id 未知、酬載為空、或酬載超過 iOS 端接受上限的那一行，是整列丟棄而不是執行一半。",
    wireSampleLabel: "唯一被接受的形態",
    pairingHeading: "配對，按它真實發生的順序",
    pairingSub:
      "節點簽發一個憑證，你只給手機看一次，之後這個憑證就一文不值。沒有任何東西存在伺服器上，因為根本沒有伺服器可以存它。",
    pairingSteps: [
      {
        title: "節點提出",
        body:
          "從選單列或控制台，節點寫出一則配對提案，用它自己的 Ed25519 金鑰簽章 —— 就是資料根目錄下 pairing/node.key 那把 —— 再透過 CoreImage 在本機渲染成 QR Code。圖片不會離開這台機器。",
      },
      {
        title: "手機取用",
        body:
          "POPOPX iOS 掃描這個碼，掃出來的那個聯絡人就是裝置金鑰。這一次掃描建立 SMP 橋接；從那以後，「發現」的服務帳號只與你的節點通訊，不與別的東西通訊。",
      },
      {
        title: "提案作廢",
        body:
          "第一次被取用，提案就標為已用。產生新碼會讓上一個作廢，所以被人拍下來的那張 QR Code 不是長期有效的邀請 —— 即使沒人掃，它 15 分鐘後也會自己過期。",
      },
    ],
    pairingFacts: {
      lifetime: "提案效期",
      singleUse: "取用次數",
      signature: "由誰簽章",
      delivery: "以什麼呈現",
    },
    portsHeading: "節點聆聽的那一側",
    portsSub:
      "節點自己只開一個連接埠。另外兩個歸它啟動、並以用戶端身分連線的程序 —— 讀防火牆記錄時這點很重要：連向 11434 或 5225 的那條連線是節點發起的，不是節點接受的。",
    portsColumns: ["連接埠", "由誰綁定", "位址", "協定", "什麼在守護它"],
    portsOwner: {
      node: "節點本身",
      tool: "Ollama",
      daemon: "popopx-chat",
    },
    portsPurpose: {
      console: "網頁控制台與引擎記錄串流",
      inference: "本機模型推論",
      control: "聊天守護行程的控制通訊端",
    },
    portsFootnote:
      "三個都只綁定迴環。控制台是沒有 TLS 的明文 HTTP —— 只有在它從不出這台機器的前提下，這才算合理的設計：綁定 0.0.0.0、區域網路位址或主機名稱的嘗試，會在建立 socket 之前就被拒絕，而且位址是寫死在 App 裡的，不是從設定檔讀取。真正保護它的，是每次啟動隨機發出的 24 位元組一次性 Token，以 X-PPX-Token 傳遞，只存在記憶體裡，行程結束就失效。至於聊天守護行程的控制通訊端，完全沒有任何認證 —— 這就是對它的誠實描述 —— 而它安全的唯一條件，就是它一直留在 127.0.0.1 上。",
  },

  engines: {
    heading: "十個主權引擎",
    sub:
      "三個貨架，十個官方服務帳號。下面每張卡片都列出自己的價格：30 天一個週期、一筆固定數額的算力點；只有邊緣算力共享節點按任務結算，並收取 10% 協定手續費。每一個都在你已經擁有的硬體上執行。",
    filterAll: "全部",
    substrateLabel: "本機基底",
    quickMenuLabel: "iOS 快捷選單",
    quickMenuHint:
      "每個按鈕都向已配對的節點發送 ::popopx_sys::NODE_CMD::<service>::<action>::{}。",
    deterministicBadge: "確定性 —— 處理鏈路裡沒有模型",
    modelBadge: "有本機模型參與",
    offlineBadge: "無需本機模型權重即可執行",
    openDetails: "展開",
    closeDetails: "摺疊",
    shelfCount: "個引擎",
    creditsUnit: "算力點",
  },

  hardware: {
    heading: "檔位跟著記憶體走",
    sub:
      "啟動時節點讀取 sysctl —— 晶片型號、CPU 核心數、實體統一記憶體、可用 SSD —— 自動選定一檔。把 App 移到另一台 Mac，檔位跟著走，沒有需要重新設定的東西。",
    columns: [
      "統一記憶體",
      "典型晶片",
      "文字模型",
      "影片模型",
      "首 token 延遲*",
      "生成吞吐量*",
      "常駐記憶體峰值*",
      "模式",
    ],
    modes: {
      lightweight: "輕量推論模式",
      balanced: "均衡檔",
      full: "完整權重檔",
    },
    footnote:
      "* 這三欄是工程估算，不是實驗室實測。依據是在記憶體頻寬受限下對稠密 27B 模型做解碼，加上按量化位元數推算 LTX-2.5 的權重佔用比例。散熱、晶片世代、背景負載、片段長度與並行任務數，會讓真實數字差到兩到三倍。用它挑檔位，別把它當成效能承諾。",
    rules: [
      "96 GB 及以上 —— LTX-2.5 原版 BF16 完整權重，搭配 Qwen3.8-27B（Q8_0）。",
      "48 GB 至 95 GB —— LTX-2.5 MLX 量化成 8-bit，搭配 Qwen3.8-27B（Q4_K_M）。",
      "48 GB 以下 —— 改用 9B 模型的 Q4_K_M，只做短片渲染，重型影片工作交給邊緣算力共享網路。",
    ],
    plansHeading: "每一檔實際部署了什麼",
    plansSub:
      "上面那張表是你買之前看的依據。這一張是節點量完這台機器之後替自己記下的內容，直接取自推薦函式，包括它會拉取的那個模型 tag。",
    plansColumns: [
      "記憶體區間",
      "文字模型",
      "影片堆疊",
      "常駐上限",
      "重型影片",
      "拉取指令",
    ],
    heavyVideo: {
      local: "在本機渲染",
      mesh: "交給共享網路",
    },
    plansFootnote:
      "常駐上限是對實測記憶體做的算術規則，不是基準測試：每一檔都從它讀到的統一記憶體裡扣掉一塊固定的桌面工作階段保留，再設一個上限，避免記憶體極大的機器承諾超過這套堆疊本身需要的量。模型 tag 與量化標識，就是節點真正傳給 Ollama 的那些字串。",
  },

  install: {
    heading: "一個 DMG、一次掃描、十個開關",
    sub:
      "節點沒有安裝程式，沒有守護行程帳號，也沒有任何東西需要註冊。它就是一個只綁定迴環的選單列 App，首次啟動會自行完成機器檢查。",
    prereqsHeading: "下載之前",
    prereqNotes: {
      system: "這個套件針對 macOS 14，App 是一個選單列代理程式。",
      memory:
        "Metal、MLX 和整條檔位階梯都以統一記憶體為前提。DMG 帶著 x86_64 切片，但整套堆疊沒有任何一處為 Intel 調校過。",
      disk:
        "可用空間少於或等於 40 GB 時直接拒絕下載模型權重，所以檔位表的上限也就是你磁碟的上限。",
      media:
        "十個引擎裡有五個會呼叫 FFmpeg。安裝精靈可以透過 Homebrew 把它裝上。",
      inference:
        "量化文字模型用 Ollama，影片用 LTX-2.5 的 MLX 工作區。兩者都是本機工具，誰都不是服務。",
      bridge:
        "只有 SMP 配對那一步和由手機驅動的那條鏈路需要它。引擎本身沒有它照樣執行。",
    },
    prereqRequired: {
      hard: "必需",
      wizard: "精靈會安裝",
      optional: "僅配對需要",
    },
    steps: [
      {
        title: "驗證並開啟 DMG",
        body:
          "把 POPOPX-Mac-Node-Universal.dmg 與發布頁的摘要檔取到同一個資料夾，在開啟任何東西之前先比對；「發布與原始碼」會列出目前那個版本對應的兩條指令。再把 POPOPX Mac Node.app 拖進 /Applications。發布出來的建置帶著 Developer ID 簽章，以及一枚釘附在映像檔上的公證票據，所以 Gatekeeper 會自己放行 —— spctl -a -vv -t install 回答 accepted，source=Notarized Developer ID。標籤工作流在 runner 上跑的是 Scripts/build_dmg.sh，你自己建置用的也是這個腳本，兩條路出來的只有 ad-hoc 簽章，而那一個首次啟動確實需要右鍵選「打開」。",
      },
      {
        title: "讓它檢查這台機器",
        body:
          "啟動後從選單列開啟控制台。第一步從 sysctl 讀取晶片、核心數、統一記憶體與可用 SSD，列出它選定的檔位、以及該檔隱含的模型 tag，而且顯示的是它取樣到的數字，不是你自行宣告的數字。",
      },
      {
        title: "部署本機引擎",
        body:
          "精靈按清單往下走：Homebrew、FFmpeg、uv、Ollama、適合你這一檔的 Qwen 量化版、LTX-2.5 工作區，最後自我檢查。安裝記錄會即時串流到控制台頁面，同時寫進 logs/install.log，失敗之後還能回頭查。",
      },
      {
        title: "配對 iPhone",
        body:
          "產生配對 QR Code —— 從控制台，或從選單列的 New Pairing QR —— 再用 POPOPX iOS 用戶端掃描。這個碼經過簽章、一次性、15 分鐘過期。裝置會出現在控制台的已配對清單裡，附帶機型、配對時間與最後一次看見它的時間。",
      },
      {
        title: "開啟引擎開關",
        body:
          "選單列和控制台裡各有十個開關。引擎只有你啟用才會執行；不需要本機模型的那四個 —— 實體封鎖、時間鎖保險庫、浮水印溯源、報告解讀 —— 在一個權重都還沒下載下來之前就能用。它們照樣呼叫 FFmpeg，但不會呼叫模型堆疊。",
      },
    ],
    buildHeading: "或者從同一個 tag 自行建置",
    buildBody:
      "發布的映像檔，就是從你可以簽出的那棵樹打包出來的。swift build、swift test、swift build -c release，然後 bash Scripts/build_dmg.sh --output dist --version v1.0.2 會寫出通用 DMG、做 ad-hoc 簽章、並連同伴生摘要檔一起產出。發布出來的產檔則來自另一個腳本：Scripts/build-release.sh 會加上 Developer ID 簽章、向 Apple 提交公證、以及 ZIP，這就是為什麼下載的映像檔過得了 spctl，你自己的建置卻過不了。兩個都只能在 macOS 上跑，因為它們就是由 hdiutil 與 codesign 組成的。",
    lifecycleHeading: "首次啟動之後",
    lifecycle: [
      {
        title: "升級",
        body:
          "沒有自動更新器，也不會檢查更新 —— 這是節點不對外通話的又一項。升級就是拖曳：下載新的 DMG、驗證、取代 /Applications 裡的 App。設定、配對狀態、節點金鑰、保險庫和所有產物都在 Application Support 下面，不在 bundle 裡面，所以換上去的 App 會接手它落腳的那台機器的狀態。",
      },
      {
        title: "備份與換機",
        body:
          "App 會把自己的資料根目錄標為排除在 Time Machine 之外 —— 這保護你的備份不被模型權重塞滿，也讓還原時少一個意外。但它同時意味著這個資料夾不在你的備份裡。要移轉節點：先結束執行，把 ~/Library/Application Support/PopopxMacNode 複製到新 Mac 的同一個路徑，再讓它重新檢查：檔位可能改變，而 pairing/node.key 會跟著資料夾一起走 —— 這份複製必須和原件同樣私密，原因全在這裡。",
      },
      {
        title: "徹底移除",
        body:
          "先關閉 Launch at Login，再從選單列選 Quit —— 這會關閉監聽器並釋放登入項目。刪除 /Applications/POPOPX Mac Node.app，接著如果你連封存保險庫、帳本和產物也不想要了，再刪除 ~/Library/Application Support/PopopxMacNode。沒有反安裝程式，也沒有會忘記的回單：那兩個路徑之外從未安裝過任何東西；也沒有鑰匙圈項目，因為這個 App 從不使用鑰匙圈。",
      },
    ],
    bridgeTitle: "用你自己的腳本驅動引擎",
    bridgeBody:
      "integrations 目錄自帶一個 TypeScript 橋接和兩個 Agent 配接器。它不開新連接埠，也不起第二個守護行程：沿用 127.0.0.1:18920 上的控制台與每行程一次性的 Token，發出的還是手機發的那套 NODE_CMD 信號。封鎖動作是雙重選擇加入 —— allowLockdown 必須為 true，PPX_BRIDGE_SECRET 至少 16 個字元 —— 而被拒絕這件事會寫進外掛記錄，讓你看見它發生過。",
    requirementTitle: "一個誠實的前提",
    requirementBody:
      "節點自己精靈的第二步、配對 QR Code、還有 SMP 橋接，都需要 PATH 上有一個 popopx-chat 聊天守護行程。節點只探測一個可執行檔案，沒有任何備援：某個上游建置會先回應一行版本號，然後把之後每一條指令都弄失敗。十個引擎本身不需要它。",
    signHeading: "目前發布版怎麼簽章",
    signBody:
      "映像檔裡的應用程式帶有 Developer ID Application 簽章、hardened runtime 旗標與安全時間戳，公證票據已釘附在套件內。所以 Gatekeeper 不需要你幫忙就會放行：spctl -a -vv -t install 回答 accepted、source=Notarized Developer ID。下面這塊是 2026-11-25 從 v1.0.2 實際發布的那份位元組裡讀出來的——把前兩條指令跑在 /Applications 裡的應用程式上，應該取回同一個身份。全程不查詢 Apple 帳號，也不向任何伺服器核對，因為票據就與應用程式一起帶在磁碟上。",
    containerTitle: "映像檔本身沒有簽章",
    containerBody:
      "對下載的 .dmg 跑 spctl，它會回答 rejected、source=no usable signature；codesign -dvv 對同一個檔案說「完全沒有簽章」。這是預期答案，不是被竄改的警報。Apple 的簽章加在應用程式套件上，公證票據釘附在套件與外層磁碟映像檔上，而映像檔自身的完整性控制只有 SHA-256——就是這一頁往下那項檢查。",
    provenanceTitle: "哪個腳本產出哪個成品",
    provenanceBody:
      "這個應用有兩條打包路徑，終點不同。Scripts/build_dmg.sh——標籤工作流在 macOS runner 上跑的就是它，也是本頁前面建置步驟的終點——用 --sign - --timestamp=none 做 ad-hoc 簽章，不開 hardened runtime，所以這條路產出的建置首次啟動確實需要右鍵選「打開」。Scripts/build-release.sh 是 Developer ID 路徑：帶 hardened runtime 簽章、提交公證、把票據釘附到應用程式與映像檔兩端，並在 ZIP 之外寫出 SHA256SUMS.txt。你下載到的映像檔出自第二個腳本；從未持有憑證的 runner 做不出它。",
    digestHeading: "先核對摘要，再打開任何東西",
    digestBody:
      "兩條指令，在你儲存檔案的那個目錄裡跑。要對照的是發布清單：它列出該版本目錄下的每一個成品，且與打包在同一步寫出；而 v1.0.2 旁邊那份單檔 .dmg.sha256 寫著一個沒有任何已發布成品能對上哈希的摘要。「發布與原始碼」會依它解析到的版本印出這一對指令，可能比下面這個更新。",
    copyCommand: "複製指令",
    commandCopied: "已複製",
  },

  security: {
    heading: "什麼留下、什麼離開、怎麼停下",
    sub:
      "只列「什麼留在本機」的隱私頁是一塊廣告看板。這一頁把流量也列出來，因為「你的資料從不出裝置」這句話的誠實版本，比口號更長，也比口號有用。",
    localHeading: "留在你的磁碟上",
    localSub:
      "全在同一個資料根目錄下，在 App 自行建立、並排除於 Time Machine 的資料夾裡；金鑰以原子寫入落成 0600 權限並啟用完整檔案保護。",
    localItems: [
      {
        title: "所有產物",
        body:
          "渲染出的片段、簡報、帶浮水印的匯出檔、封存檔、解讀報告、隔離中的輸入，全部落在資料根目錄下並留在那裡。節點只在 outbox 裡保留等待你的手機重新上線的結果。",
      },
      {
        title: "模型與它們的權重",
        body:
          "Qwen 的量化版放在 Ollama 自己的儲存裡；LTX-2.5 權重放在節點的 engines 目錄裡。兩者都是本機磁碟上的本機檔案，各拉取一次，而且可用空間少於或等於 40 GB 時拒絕拉取。",
      },
      {
        title: "金鑰與配對狀態",
        body:
          "節點的 Ed25519 簽章金鑰、已配對裝置清單、目前的提案，都是 pairing/ 下面的一般檔案。沒有需要移轉的鑰匙圈項目，沒有金鑰的雲端備份，任何地方都沒有託管 —— 這件事是兩面的，下面談「遺失」那一段就說清楚了。",
      },
      {
        title: "證據鏈",
        body:
          "封鎖與共享帳本都在本地以雜湊追加，稽核記錄則登記跑過什麼、在哪個引擎上、結果如何。它是寫給你自己讀的：想知道「它 03:14 做了什麼」，logs/node.log 是最快的答案。",
      },
    ],
    transitHeading: "會離開這台機器",
    transitSub:
      "確實有四樣，而且每一樣要嘛是你自己的裝置，要嘛是你自己設定的。沒有第五類，也沒有一個分析上報端點可以往外發東西。",
    transitItems: [
      {
        title: "結果，回傳到你自己手機",
        body:
          "一個做完的任務會回傳一張最多 1024 字元的卡片，外加每個產物檔案一則訊息，走你自己的 popopx-chat 佇列，由 SMP 轉發、XFTP 承載。中繼只看得到密文。手機離線時，結果在 outbox/ 裡等待，最長重試 30 天。",
      },
      {
        title: "你叫它讀取的來源",
        body:
          "晨間簡報引擎會抓取你設定的 RSS 來源，單一回應上限 3 MB —— 那就是一次一般的對外 HTTPS 請求，寄給託管你訂閱內容的那一家。",
      },
      {
        title: "你設定的 webhook",
        body:
          "實體封鎖可以對一個智慧家庭或在位偵測端點 POST 一則經過簽章的事件。它是盡力而為、是選擇加入，URL 是你的 —— 節點沒有任何預設目的地。",
      },
      {
        title: "安裝與權重拉取",
        body:
          "精靈會下載 Homebrew formula、FFmpeg、uv、Ollama 和你選的那個量化版。這類流量本來就是安裝步驟的內容，它只發生一次，當著你的面，記錄就在螢幕上。",
      },
    ],
    keysHeading: "秘密到底存在哪裡",
    keysBody:
      "不是鑰匙圈。節點是一個對鑰匙圈零依賴的 macOS App，這是一個決定而不是疏漏：配對與保險庫材料是資料根目錄下的檔案，以原子寫入、POSIX 0600 權限和完整檔案保護落盤，所以機器鎖定時，靜態狀態下讀不到。你換來的取捨是真實的 —— 檔案權限既可稽核也可攜移，但在你的使用者帳號和一個已經拿到你使用者帳號的讀取者之間，它也擋不了什麼。請把資料根目錄當成它本身那個秘密看待：它不在 Time Machine 裡，而且它是節點金鑰唯一的一份複本。",
    dataNote: {
      output: "產生的產物，以及等待手機的那條 outbox 佇列。",
      vault: "時間鎖封存檔，以及能開啟它們的繼承資料。",
      pairing: "Ed25519 節點金鑰、已配對裝置清單、以及目前那則一次性提案。",
      weights: "模型權重，以及影片引擎呼叫的 LTX-2.5 MLX 工作區。",
      ledger: "以雜湊追加的封鎖與共享帳本。",
      logs: "安裝記錄與稽核記錄，寫給操作者自己讀。",
      config: "設定、引擎開關，以及橋接與整合方案共用的那份設定檔。",
    },
    rootLabel: "資料根目錄",
    controlHeading: "你這一側的停止開關",
    controlSub:
      "四個控制，全部在本機，全部在 App 裡看得見，而不是埋在一個設定畫面深處。它們都不需要網路 —— 這正是當網路就是問題所在時，它們還能用的原因。",
    controls: [
      {
        title: "停掉一個引擎",
        body:
          "選單列與控制台裡十個獨立開關。關掉一個會在下一條指令生效，而發給已停用引擎的指令是被拒絕，不是被排隊。",
      },
      {
        title: "停止外借算力",
        body:
          "Pause Mesh Sharing 會立刻把節點移出邊緣算力池：選單列顯示 Paused，它不再接任務。這是唯一一個名字裡帶有 pause 的開關，但它管的是共享容量，不是整個節點。",
      },
      {
        title: "作廢目前的配對碼",
        body:
          "New Pairing QR 會讓還沒用掉的提案作廢，並簽發一個取代它的。任何人手上那張舊碼的照片，得到的是一個過期簽章，不是第二次機會。",
      },
      {
        title: "全部停掉",
        body:
          "Quit 才是真正的總開關：它關閉迴環監聽器、釋放登入項目，並讓每次啟動的 Token 隨行程一起消失。一個沒有在執行的節點，對任何人、任何問題都不回應。",
      },
    ],
    revokeHeading: "以及撤銷一台裝置",
    revokeBody:
      "控制台的已配對裝置清單，每一列都有一個 Revoke 按鈕。它會把那台裝置標為已撤銷、移除它的聯絡人對應，並從那一刻起丟棄它的指令 —— 但不會拆掉已經建立的 SMP 連線，而 App 在給你看的那則訊息裡就寫了這一點。要把這件事做完，請在聊天用戶端裡刪掉那個聯絡人。已經寫到你磁碟上的東西繼續留在你磁碟上；撤銷停止的是後續指令，它不是遠端抹除，而節點從來就沒有遠端抹除這個能力可以拿掉。",
    limitsHeading: "這一頁不承諾的事",
    limitsBody:
      "那個安全銷毀是隨機覆寫加上 sync 加上 unlink。在 APFS 上，被修改的檔案會寫到新的區塊，而 SSD 會重新對應邏輯區塊，所以這一步移除了檔案、擋得住一般的復原工具，但不能證明舊的實體位元組已經消失。這已是使用者模式檔案 API 能做到的最好程度，程式碼在它回傳的結果裡就這樣寫著。再往外說：除了結束執行，沒有全域暫停；沒有遠端抹除；沒有金鑰託管，所以如果機器和資料根目錄一起不見，也就沒有復原；也沒有一個可能被說服去安裝你沒要求的東西的更新器。",
  },

  troubleshooting: {
    heading: "當它沒有照你的預期做事",
    sub:
      "這套架構上真的會發生的失敗，按人們撞上它們的順序排列。每一項都先點出該看哪裡 —— 在一台沒有伺服器端的機器上，記錄永遠是最短的路徑。",
    columns: ["現象", "實際上是怎麼回事", "該怎麼做"],
    items: [
      {
        symptom: "控制台頁面開不了",
        cause:
          "連接埠固定在 127.0.0.1:18920 而且沒有備援，所以另一個正在執行的執行個體 —— 或任何先一步佔住它的東西 —— 會把監聽器留住。Token 也是每次啟動一個：重新啟動之前開的舊分頁，拿的是已失效的憑證。",
        fix:
          "先查 18920 上有沒有監聽器，結束另一個執行個體，然後用選單列的 Open Web Console —— 它會用現在的 Token 組出現在的 URL，而不是沿用舊的。",
      },
      {
        symptom: "11434 上沒人回應",
        cause:
          "需要模型的引擎只在迴環上與 Ollama 溝通。如果 Ollama 沒有在跑，或是繞過精靈安裝的，引擎就會失敗，而不會退回任何託管的東西。",
        fix:
          "啟動 Ollama，確認 OLLAMA_HOST 是迴環，再依檔位表為你那台機器指定的量化版拉取模型。失敗訊息裡會引用那條本來可以跑通的指令。",
      },
      {
        symptom: "權重從來沒被下載",
        cause:
          "除非在 config/engines.json 裡宣告 weightSources，否則安裝程式會跳過權重下載；可用空間少於或等於 40 GB 時更是直接拒絕。",
        fix:
          "加上你想拉取的來源，或把權重複製進 engines/weights 並讓設定檔指向它。先把磁碟清出來 —— 那是一道閾值，不是一句警告。",
      },
      {
        symptom: "影片任務回來的是一行指令",
        cause:
          "影片工作需要 LTX-2.5 工作區和它的權重。缺少這些時，引擎會原樣回傳它本來要執行的那條指令，而不是假裝已經產出了一個檔案。",
        fix:
          "把精靈裡工作區那一步做完，或複製它指明的 LTX-2-MLX 工作區，然後重跑。這是故意的：一個假裝成功的存根，比一次誠實的拒絕更糟。",
      },
      {
        symptom: "配對碼被拒絕",
        cause:
          "一則提案是一次性的、效期 15 分鐘。同一個碼掃第二次，或是掃一個畫面已經換過的舊碼，被拒絕是正確的行為。",
        fix:
          "產生一個新碼，只掃一次。如果手機在成功之後自行重試，那代表第一次取用已經生效，拒絕就是預期的答案。",
      },
      {
        symptom: "手機發出指令卻毫無反應",
        cause:
          "橋接需要 PATH 上有一個 popopx-chat 守護行程，而節點只探測一個可執行檔案，沒有備援。缺少時選單列會顯示 popopx-chat not installed；而被關掉的引擎不論如何都不回應。",
        fix:
          "先看選單列那一行橋接狀態，再看引擎開關，最後看稽核記錄。一條被拒絕的指令和一條從未抵達的指令，從手機這端看一模一樣。",
      },
      {
        symptom: "手機離開期間結果不再送達",
        cause:
          "對外送件走的是你自己的守護行程與中繼，所以一個擋住外連的防火牆、一條沒有承載中繼的 VPN、或一個已經結束的守護行程，從這裡看都是同一個樣子。結果不會遺失：它們在 outbox/ 裡排隊，最長重試 30 天。",
        fix:
          "先確認守護行程還在跑，再於做過濾的那一層放行節點的對外連線，然後等佇列排空，而不是重跑那個任務。",
      },
      {
        symptom: "下載卡片顯示『內建的固定版本』",
        cause:
          "api.github.com 連不上、被擋、被限流，或回應裡沒有可下載的產物。這時頁面就呈現編譯進 bundle 的那個版本，而不是去猜。",
        fix:
          "直接打開發布頁面。這個網站上沒有別的東西需要那次呼叫，頁面也不會因為一次失敗而留下空白。",
      },
    ],
    escalation:
      "剩下的問題多半由兩個檔案回答：精靈做過的一切都寫在 logs/install.log，之後的一切都寫在 logs/node.log。兩者都是資料根目錄下的純文字，而控制台自己的記錄管道會即時顯示同樣的事件。如果讀完它們問題還在，節點與整合方案雙方共同測試的那份契約就在倉庫裡，issue 請開在 popopx-mac-node。",
  },

  releases: {
    heading: "發布、摘要與整棵樹",
    sub:
      "節點的組成來源全在一棵 AGPL-3.0-only 倉庫裡，而且每個發布出去的映像檔都能在開啟之前比對摘要。這一節是這個網站從「描述」轉為「指過去」的地方。",
    assetsHeading: "已發布的產物",
    assetsColumns: ["檔案", "它是什麼", "大小"],
    assetKinds: {
      dmg: "拖進 /Applications 的磁碟映像檔，通用 arm64 加 x86_64。要取的就是這個。",
      sidecar: "由打包它的那一步為單一檔案寫下的摘要。",
      zip: "同一個已簽章 App bundle 的 ZIP 形態，取壓縮檔而不是磁碟卷宗。",
      sums: "列出這次發布每個產物及其摘要的清單。",
    },
    missingAsset:
      "並非每個發布都帶有每個產物。較舊的版本只帶磁碟映像檔和它的伴生檔 —— 所以下面這個檢查讀的是你真的開啟的那個發布。",
    verifyHeading: "開啟任何東西之前先驗證",
    verifyBody:
      "兩條指令，就在你下載到的那個資料夾裡執行。清單形態是首選，也是目前發布實際提供的形態。",
    verifySumsBody:
      "發布清單列出每個產物，所以沒被你下載的那個檔案是正常的缺席，而不是遺失：加上 --ignore-missing，然後讀對得上你取的那個檔案的那一列。清單與它點名的酬載是在同一步裡寫出來的。",
    verifySidecarBody:
      "較舊的發布改為提供單一產物的伴生檔，那才是應該對照驗證的檔案。當一個發布同時帶著兩種、而它們不一致時，請信清單：伴生檔可能來自同一版本號的另一次建置。",
    pipelineHeading: "一個版本是怎麼到這裡的",
    pipelineBody:
      "推送 tag 會在 macOS runner 上執行發布 workflow：建置這棵樹、跑契約測試、用 Scripts/build_dmg.sh 打包通用映像檔、拒絕發布任何內含絕對路徑的驗證檔、並上傳那個腳本寫出來的東西。而一個已公證的映像檔配上 SHA256SUMS.txt 清單，則來自 Scripts/build-release.sh —— 它加上 Developer ID 簽章、向 Apple 提交公證、以及 ZIP。兩條路都終結在同一個地方：一個不必信任這個網站就能核對的摘要。",
    supportedHeading: "今天就在執行",
    supportedItems: [
      "全部十個引擎，各有自己的動作集與拒絕路徑，逐一獨立開啟。",
      "從 sysctl 自動選檔，連帶該檔隱含的那次模型拉取。",
      "簽章、一次性、15 分鐘過期的配對，以及只綁定迴環的控制台。",
      "TypeScript 橋接與兩個 Agent 配接器，共用同一個控制台與同一個 Token。",
    ],
    roadmapHeading: "還沒有",
    roadmapSub:
      "在倉庫裡以計畫的形式寫著，而不是在頁面上作為承諾。這些今天沒有一項在跑。",
    roadmap: [
      {
        title: "在你這台機器上實測每個引擎",
        body:
          "用量儀表板與失敗時間軸回傳到手機：從你面前這台機器取 token 與瓦特讀值，取代硬體表裡的估算。",
      },
      {
        title: "更強的共享隔離與可匯出帳本",
        body:
          "給外借容量更嚴格的隔離，以及一份你能帶出 App、而不是只能在裡面讀的帳本。",
      },
      {
        title: "多位繼承人的分片保管",
        body:
          "把繼承資料依多位繼承人拆分，以及健康引擎裡更多的報告版面。",
      },
      {
        title: "簽名的發行通路與更多影片檔位",
        body:
          "評估公證之外的另一個商店通路，以及為檔位階梯尚未涵蓋的記憶體區間增加 LTX 檔位。",
      },
    ],
    sourceHeading: "原始碼，以及授權條款要求什麼",
    sourceBody:
      "一個倉庫，AGPL-3.0-only，沒有閉源核心：引擎、控制台、浮水印與帳本全在裡面，盲簽憑證程式碼與密碼學參數登記表則在旁邊的 popopxmq 開放原始碼。第 13 條按一般方式適用：自由地執行、研究、修改它，如果你把改過的節點當成服務提供給別人，就要向他們提供你那份對應的原始碼。合規成本就只有這些。",
    licenceHeading: "不在涵蓋範圍內的",
    licenceBody:
      "AGPL-3.0 不授予 POPOPX 名稱或 logo 任何授權。fork 可以拿走除了識別標誌之外的一切：改名、換標、程式碼留著。",
  },

  faq: {
    heading: "真的會有人問的問題",
    sub: "短答。不能保證的那一部分，照樣擺在明面上。",
    items: [
      {
        q: "這些會跑在你們的伺服器上嗎？",
        a: "不會。十個引擎的指令從 iOS 用戶端經你自己的 popopx-chat 佇列進來，端對端加密；推論、渲染、儲存與實體執行全在你的 Mac 上。沒有任何一步需要我們的基礎設施，節點裡也沒有一條程式碼路徑能連到託管推論 API —— 模型用戶端鎖死在 127.0.0.1。",
      },
      {
        q: "我必須註冊什麼？",
        a: "什麼都不必。產品裡沒有帳號、沒有手機號碼、沒有電子郵件、沒有廣告識別碼。手機與節點配對只要掃一次 QR Code；網頁控制台只綁定迴環，每次啟動換一個隨機 Token，區域網路裡的其他裝置連連接埠都碰不到。",
      },
      {
        q: "為什麼是 AGPL-3.0，第 13 條要求我做了什麼？",
        a: "節點每個原始碼檔案都是 AGPL-3.0-only：你可以自由執行、研究、修改、再散布。第 13 條加上網路條款 —— 如果你把改過的節點當成服務提供給別人，就要向他們提供你那份對應的原始碼。合規成本只有這一條，也正是這個專案可以自由執行的原因。",
      },
      {
        q: "浮水印或算力點協定是閉源的嗎？",
        a: "不是，而這句話正是最該被核對的那一種。BBS+ 與 BLS12-381 憑證程式碼、授權邏輯、密碼學參數登記表都在 popopxmq 裡開放原始碼；GOP 與頻域隱形浮水印及其盲解碼器在這個倉庫裡。商業那一軌賣的是機房、值班表、發行通路和合規文件 —— 從來不是一道原始碼門檻。",
      },
      {
        q: "我可以用 POPOPX 的名稱和 logo 發布一個 fork 嗎？",
        a: "不能。AGPL-3.0 不授權商標，任何付費支援方案也不會給。政策要求的補救對 fork 幾乎零成本：改名、換標、程式碼留著。使用品牌需要另外的書面授權。",
      },
      {
        q: "硬體表裡的數字該信多少？",
        a: "就信它下面那句話所說的程度。它們是估算值，不是你這台機器的實測，真實吞吐量會隨散熱與負載差兩到三倍。節點下一個版本會把它們換成在你這台機器上實測的每引擎 token 與瓦特讀值。",
      },
      {
        q: "支援哪些機器？",
        a: "Apple Silicon 上的 macOS 14 或更新。檔位階梯、Metal 與 MLX 都以統一記憶體為前提，而 MLX 不跑在 Intel 上；所以儘管通用（Universal）安裝檔照舊帶著 x86_64 切片，Intel Mac 也不是這個專案瞄準的主機。App 本身不連結任何第三方函式庫：只使用 Apple 的框架。它驅動的東西另有安排，這是設計使然 —— Ollama、FFmpeg 與 LTX-2.5 權重是引擎呼叫的本機工具，每個引擎都寫明了自己需要哪幾個。",
      },
    ],
  },

  footer: {
    tagline: "給 POPOPX 生態系使用的本機算力。歸你執行，歸你閱讀。",
    licenceHeading: "授權",
    licenceBody:
      "節點原始碼是 AGPL-3.0-only。本專案自繪的圖形資產是 AGPL-3.0-only，或由你選擇 CC0-1.0。",
    trademarkHeading: "商標",
    trademarkBody:
      "POPOPX、POPOPX Chat 與 POPOPX 標誌是 POPOPX Chat 專案的商標。本站使用的圖示是未經修改的 POPOPX iOS 應用程式圖示。政策見 popopx-chat 倉庫裡的 TRADEMARK-POPOPX.md。",
    privacyHeading: "本頁",
    privacyBody:
      "無分析、無 Cookie、無指紋辨識、無第三方腳本、無外部 CDN。這個頁面唯一可能發出的對外請求，是向 api.github.com 取得 Release 資產清單；那次呼叫失敗就退回內建的固定連結。",
    appleNotice:
      "與 Apple 無隸屬關係。macOS、iOS、Apple Silicon 與 Metal 是 Apple Inc. 的商標。",
    sourceRepo: "Mac Node 原始碼",
    iosRepo: "iOS 用戶端原始碼",
    backToTop: "回到頂端",
  },
};

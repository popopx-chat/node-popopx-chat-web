import type { Dictionary } from "../types";

export const tr: Dictionary = {
  dir: "ltr",

  nav: {
    overview: "Genel bakış",
    node: "Düğüm nedir",
    features: "Yetenekler",
    install: "Kurulum ve yapılandırma",
    security: "Gizlilik ve denetim",
    troubleshooting: "Sorun giderme",
    releases: "Sürümler ve GitHub",
    download: "Düğümü edinin",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    chooseLanguage: "Dil",
  },

  ecosystem: {
    heading: "POPOPX'in geri kalanı",
    body:
      "Üç portal, tek proje ve üçü de bizim. Bu sayfa onlardan hiçbir şey yüklemiyor, onlara hiçbir istek göndermiyor: node.popopx.chat'i ancak kendiniz tıklarsanız terk edersiniz.",
    chat: "POPOPX Chat",
    chatBody:
      "Mesajlaşma ağının kendisi — uçtan uca şifreli, global kimlik yok ve düğümünüzün dinlediği kuyruk bu.",
    botStudio: "Bot Studio",
    botStudioBody:
      "On motorun arkasındaki hizmet hesaplarının yazıldığı ve barındırıldığı yer; kendi denetlediğiniz bir sunucuda.",
    serviceSuite: "Hizmet hesapları",
    serviceSuiteBody:
      "Bu motorların konuştuğu, sıfır bilgi esaslı şifreli kanal ekosistemi.",
  },

  routes: {
    "/": { eyebrow: "GENEL BAKIŞ", title: "POPOPX Mac Node — on motoru kendi Mac'iniz çalıştırır" },
    "/node": { eyebrow: "DÜĞÜM NEDİR", title: "Düğümün ne olduğu ve ne olmadığı — POPOPX Mac Node" },
    "/features": { eyebrow: "YETENEKLER", title: "Yerel on motor ve onları çalıştıran donanım — POPOPX Mac Node" },
    "/install": { eyebrow: "KURULUM VE YAPILANDIRMA", title: "Kurulum, eşleştirme, yükseltme, yedekleme, kaldırma — POPOPX Mac Node" },
    "/security": { eyebrow: "GİZLİLİK VE DENETİM", title: "Diskinizde ne kalıyor ve bunu nasıl durduruyorsunuz — POPOPX Mac Node" },
    "/troubleshooting": { eyebrow: "SORUN GİDERME", title: "Portlar, güvenlik duvarları ve bellek tavanları — POPOPX Mac Node" },
    "/releases": { eyebrow: "SÜRÜMLER VE KAYNAK", title: "Sürümler, sağlama değerleri ve tüm kaynak ağacı — POPOPX Mac Node" },
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Cihazınız. Düğümünüz.",
    titleAccent: "Kontrol de sizde.",
    subtitle:
      "POPOPX Mac Node, sahip olduğunuz ağın ucudur. Discover hizmetlerindeki on motorun yerel modellerini, medya ve dosya motorlarını kendi Mac'inizde, POPOPX Chat ile Bot Studio'nun yanında çalıştırır. Ağ şifreli mesajlarınızı aktarır; çıkarım, işleme, mühürlü arşiv ve sırlar sizin satın aldığınız donanımın üzerinde kalır.",
    ctaDownload: "DMG dosyasını indir",
    ctaSource: "Kaynağı oku",
    releaseLabel: "Son sürüm",
    sizeLabel: "Boyut",
    digestLabel: "SHA-256",
    statusFetching: "GitHub Releases sorgulanıyor…",
    statusLive: "GitHub Releases üzerinden canlı",
    statusFallback: "GitHub erişilemiyor — sabitlenen sürüm gösteriliyor",
    copyDigest: "Sağlama değerini kopyala",
    digestCopied: "Sağlama değeri kopyalandı",
    verifyTitle: "Açmadan önce doğrula",
    verifyBody:
      "Disk görüntüsünü ve sürümün sağlama değer dosyasını aynı klasöre kaydedin, ardından hiçbir şeyi açmadan önce ikisini kontrol edin. Bir sürüm bir SHA256SUMS.txt listesi, tek varlıklı bir .sha256 yan dosyası ya da ikisini birden yayımlayabilir — bu yüzden Sürümler ve GitHub, baktığınız sürüm için tam olarak iki komut yazar.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Kendi donanımın",
    statStorage: "Çıktılar kendi SSD'nizde",
    statIdentity: "Hesap yok, kimlik yok",
    statSource: "Baştan sona AGPL-3.0",
  },

  overview: {
    splitHeading: "Ağ koordinasyonu yapar. Makineniz yürütür.",
    splitSub:
      "Tüm fikir bu ve tam olarak söylenmeyi hak ediyor, çünkü bu tür bir ürüne dair alışıldık okuma ters yönde: işi bulut yapmıyor ve Mac'iniz ince bir istemci değil. Her taraf yalnızca yapması gereken kısmı yapıyor.",
    cloudTitle: "Ağın taşıdığı şey",
    cloudBody:
      "SMP aktarıcıları ve XFTP depolaması mesajlarınızı ve dosyalarınızı kendi cihazlarınız arasında uçtan uca taşır; Discover hizmet hesaplarının onundan her biri tek bir sinyal gönderir. Bir aktarıcı şifreli metni ve yönlendirme üst verisini görür. Kendisine hiçbir model, istem, kare ya da dosya adı ulaşmaz ve hiçbir motorun hiçbir parçasını çalıştırmaz.",
    macTitle: "Mac'inizin yaptığı iş",
    macBody:
      "Düğüm o sinyali alır ve işi önünüzdeki makinede yapar: loopback üzerinde Ollama ile kuantizanmış çıkarım, MLX üzerinden LTX-2.5 işleme, FFmpeg ve GOP filigranlama, CryptoKit mühürleme ve hash zincirli kasalar, fiziksel eylemler için diskutil ve AppKit. Sonra sonucu kendi diskinize yazar.",
    pathsHeading: "Neredeyseniz oradan başlayın",
    paths: [
      {
        title: "Ayrımı anlayın",
        body:
          "Düğüm nedir, dinlediği tek hat nedir, telefon onu sürme iznini nasıl alır ve hangi portlar işin içinde.",
      },
      {
        title: "Bir Mac'e kurun",
        body:
          "Ön koşullar, doğrulanmış DMG, kaynaktan derleme, ilk eşleştirme, yükseltmeler, makine taşıma ve tamamen kaldırma.",
      },
      {
        title: "Neyin dışarı çıktığını görün",
        body:
          "Veri kökünün dizin dizin hesabı, telefonunuza neyin geri gönderildiği, anahtarların nerede durduğu ve nasıl durdurulacağı ya da iptal edileceği.",
      },
      {
        title: "Bozulanı onarın",
        body:
          "Gerçekte olan arızalar: önceden bağlanmış bir port, hiç yanıt vermeyen bir model, atlanmış ağırlıklar, süresi dolmuş bir kod.",
      },
    ],
  },

  architecture: {
    heading: "Üç garanti, arada hiçbir servis yok",
    sub:
      "Bu mimarinin ilgi çekici yanı, içinde bulunmayanlar: hesap servisi yok, anahtar emaneti yok, analitik uç noktası yok, barındırılan çıkarım yok.",
    items: [
      {
        title: "Fiziksel yerel depolama",
        body:
          "Motorların ürettiği her çıktı — brifing, filigranlı klip, mühürlü arşiv, çözümlenmiş rapor — tek bir veri kökü altında kendi SSD'ne yazılır. Bu alan iCloud sync'in ve herhangi bir paylaşılan konteynerin dışındadır; defterler tam dosya korumasıyla yazılır, böylece makine kilitlendiğinde diskteki hâlleri okunamaz.",
      },
      {
        title: "Hesap yok, kimlik yok",
        body:
          "Kayıt yok, telefon numarası yok, e-posta yok ve teslim edilecek cihaz tanımlayıcısı yok. Telefonu düğüme eşleştirmek tek bir QR taramasıdır; ardından gelen komutlar kendi popopx-chat kuyruğun üzerinden yol alır ve SMP ile XFTP onları uçtan uca taşır.",
      },
      {
        title: "Tüm teknoloji yığında AGPL-3.0",
        body:
          "On motor, SMP ağ geçidi, yerel web konsolu, GOP ve frekans alanı filigranalama ile hesaplama kredisi defteri tek bir AGPL-3.0-only kaynak ağacıdır. Kapalı çekirdek yok: kör imzalı kimlik bilgisi kodu ve kriptografi kaydı popopxmq içinde, açık olarak duruyor.",
      },
    ],
  },

  dashboard: {
    badge: "UI Preview — arayüz tasarım maketi, canlı bir düğüm durumu değil",
    heading: "Düğüm çalışmaya başladığında konsolun gösterdikleri",
    sub:
      "Uygulama tek bir yerel web konsolu taşıyor ve bu, o konsolun durum ekranının bir görseli: düğümün bulduğu makine, ayırmaya karar verdiği birleşik bellek, çalıştırması istenebilecek motorlar ve içeri aldığı telefonlar. Düzen, sütun adları ve aritmetik yayımlanmış ürüne ait; buradaki hiçbir şey çalışan bir süreçten okunmadı.",
    machineLabel: "Örnek makine",
    machineHint:
      "Düğüm çipi, çekirdek sayısını ve fiziksel belleği açılışta sysctl'den okur. Tarayıcı sizinkini okuyamaz — navigator.deviceMemory her uygulamada 8 GB ile sınırlı — o yüzden bu yapılandırmalardan birini seçin, aşağıdaki sayılar yeniden hesaplansın.",
    statusHeading: "Durum",
    statusConnected: "Bağlı",
    daemonRunning: "Daemon çalışıyor",
    loopbackNote:
      "Konsol 127.0.0.1 adresine bağlanır ve 0.0.0.0, bir yerel ağ adresi ya da bir host adı üzerinden bağlanma girişimini reddeder; bu yüzden yalnızca bu Mac'ten erişilebilir.",
    memHeading: "Birleşik bellek tahsisi",
    memTotalLabel: "Birleşik bellek",
    memCeilingLabel: "Kalıcı bellek tavanı",
    memMeshLabel: "Mesh tavanı",
    memHeadroomLabel: "Masaüstü oturumu için ayrılan",
    usageLabel: "Motorların çalışma kümesi (tahmini)",
    servicesHeading: "Yerel motorlar ve hizmetler",
    servicesNote:
      "Solda on motor ve altında dağıtıldıkları üç raf — telefonun menüsünün yazdırdığı katalogla aynı katalog. Sağda düğümün bildiği üç adres var: kendisinin dinlediği biri ve istemci olarak bağlandığı ikisi. İkisi de ölçüm değil, sabit liste; üstelik bir motor yalnızca siz etkinleştirirseniz çalışır.",
    devicesHeading: "Eşleştirilmiş cihazlar",
    deviceColumns: ["Cihaz", "Eşleştirme", "Son görülme", "İptal et"],
    devicesActive: "etkin",
    revoke: "İptal et",
    revokedRow: "iptal edildi",
    neverSeen: "hiç görülmedi",
    disclaimer:
      "Bu kart bir görsel, istemci değil. Hiçbir bağlantı açmıyor ve hiçbir süreç okumuyor: makine seçmek, düğümün yayımladığı katman kuralını yalnızca kendi tarayıcınızda uygular ve “İptal et” de baktığınız satırı değiştirir. Gerçek konsolda o düğme cihazı iptal edilmiş olarak işaretler, o andan itibaren komutlarını düşürür ve sohbet bağlantısını sökmez — tam olarak ne yapmadığını “Gizlilik ve denetim” sayfası anlatıyor.",
  },

  node: {
    heading: "Düğüm, zaten sahip olduğunuz bir bilgisayardır",
    sub:
      "Bölge değil, örnek tipi değil, abonelik paketi değil. POPOPX'in başka bir yerde olmaması gereken kısımlarını çalıştıran tek bir Mac — ve güvenmek zorunda olduğunuz tek şey, dosyalarınızı zaten emanet ettiğiniz makine.",
    points: [
      {
        title: "Hassas iş hiçbir zaman dışarı çıkmaz",
        body:
          "Tıbbi raporlar kendi makinenizde Vision ile çözümlenir. Ham görüntüler yerelde dilimlenir ve filigranlanır. Kasa mühürleme ve mühürlü arşiv, kendi diskiniz üzerinde CryptoKit işlemleridir. Bu yolların hiçbirinde aranacak barındırılan bir uç nokta yoktur.",
      },
      {
        title: "Mesafe sıfırdır",
        body:
          "Çıkarım, onu isteyen sürecin hemen yanındaki birleşik bellekte olur. Model istemcisi 127.0.0.1:11434 adresine sabitlenmiştir; bu yüzden düğümde barındırılan bir çıkarım API'sine kazara bile ulaşabilecek tek bir kod yolu yoktur — önce o sabit host dizisinin değişmesi gerekirdi.",
      },
      {
        title: "Zaten ödemesini yaptınız",
        body:
          "Hesaplama kredileri, kendi donanımınızın harcadığı çevrimleri ölçer; Edge Compute Mesh ise atıl kapasiteyi dışarı ödünç veren tek motordur, içeri ödünç alan değil. Aldığınız katman, satın aldığınız belleğin bir fonksiyonudur.",
      },
      {
        title: "İzin cihaz başınadır",
        body:
          "İmzalı, tek kullanımlık ve on beş dakikalık tek bir eşleştirme kodu tek bir cihazı yetkilendirir. Konsol eşleştirilmiş olanları listeler ve geri almak bir düğmeye bakar — o düğmenin neyi yapmadığına dair bir dürüst uyarıyla; gizlilik sayfasında anlatılıyor.",
      },
    ],
    wireHeading: "Tek satır, üç bölüm",
    wireBody:
      "Telefondan gelen bir komut, kendi popopx-chat kuyruğunuzda sıradan bir mesajdır ve içinde tek bir işaret satırı taşır: bir ön ek, motor kimliği, eylem ve bir JSON yükü. Ayrıştırıcı yalnızca ilk ayırıcıda böler, böylece ayırıcı içeren bir yük bozulmadan kalır; motor kimliği bilinmeyen, yükü boş olan ya da iOS tarafının kabul ettiği tavanı aşan satır, kısmen yürütülmek yerine düşürülür.",
    wireSampleLabel: "Kabul edilen tek biçim",
    pairingHeading: "Eşleştirme, gerçekte olduğu sırayla",
    pairingSub:
      "Düğüm bir kimlik bilgisi basar, siz onu telefona bir kez gösterirsiniz ve sonrasında o bilginin hiçbir değeri kalmaz. Sunucuda hiçbir şey saklanmaz, çünkü onu saklayacak bir sunucu yoktur.",
    pairingSteps: [
      {
        title: "Düğüm teklif eder",
        body:
          "Düğüm, menü çubuğundan ya da konsoldan bir teklif yazar, gövdeyi kendi Ed25519 anahtarıyla — veri kökünün altındaki pairing/node.key anahtarıyla — imzalar ve CoreImage üzerinden yerelde bir QR kodu olarak çizer. Makineden dışarı tek bir görüntü çıkmaz.",
      },
      {
        title: "Telefon onu kullanır",
        body:
          "POPOPX iOS kodu tarar ve ortaya çıkan kişi kaydı, cihaz anahtarının ta kendisidir. O tek tarama SMP köprüsünü kurar; bundan sonra Discover hizmet hesapları yalnızca düğümünüzle konuşur, başka hiçbir şeyle değil.",
      },
      {
        title: "Teklif ölür",
        body:
          "İlk kullanım teklifi kullanılmış olarak işaretler. Yeni bir kod üretmek öncekini emekliye ayırır, dolayısıyla fotoğrafı çekilmiş bir QR kalıcı bir davetiye değildir — on beş dakikanın sonunda, kimse taramasa bile kendiliğinden süresi dolar.",
      },
    ],
    pairingFacts: {
      lifetime: "Teklifin ömrü",
      singleUse: "Kullanım",
      signature: "İmzalayan",
      delivery: "Sunum biçimi",
    },
    sealedHeading: "QR kod, mühürlü bir zarf",
    sealedSub:
      "040ef25'ten beri sihirbazın QR kodu ve kopyalama düğmesi, ham kimlik bilgisi yerine tek bir opak URL taşır. Zarf, aktarıcı adresini bir ekran görüntüsünden, bağlantı önizlemesinden veya iletiden uzak tutar; uygulamanın sahibinin açamayacağı bir sır değildir.",
    sealedShapeLabel: "Mühürlü bağlantı biçimi",
    sealedFacts: {
      kdf: "Anahtar türetme",
      cipher: "AEAD",
      nonce: "Nonce",
      caps: "Yük sınırları",
    },
    sealedBody:
      "Anahtar, uygulamanın içinde yayımlanan bir girdiden HKDF-SHA256 ile türetilir ve kutu, sabit bir ilişkili veri dizisiyle ChaCha20-Poly1305'tir; bu yüzden kaynağı okuyan herkes bir zarfı açabilir. Tasarım budur: bağlantı, SMP kuyruk adresini önizlemelerden, ekran görüntülerinden ve iletmelerden saklar; bir cihazı yetkilendiren şey ise içindeki imzalı, tek kullanımlık ve on beş dakikalık kimlik bilgisidir. Ham PPXNODE1-… kodu ve kuyruk adresini taşıyan davet URI'si konsolun tanılama çekmecesinde kalır; düğümün ortak anahtarı orada ve eşleştirilmiş cihaz satırlarında görünür, sihirbazın ön yüzünde asla. QR görüntüsü yerelde çizilir ve yalnızca loopback üzerinde /api/pairing/qr.png adresinden sunulur.",
    portsHeading: "Düğümün dinleyen tarafı",
    portsSub:
      "Düğümün kendisi tek bir port açar. Diğer ikisi, başlattığı ve istemci olarak bağlandığı programlara ait; bu, bir güvenlik duvarı günlüğü okurken önemli: 11434 ya da 5225 üzerindeki bir bağlantı düğüm tarafından kabul edilmemiş, düğüm tarafından kurulmuştur.",
    portsColumns: ["Port", "Bağlayan", "Adres", "Hat", "Onu ne koruyor"],
    portsOwner: {
      node: "Düğüm",
      tool: "Ollama",
      daemon: "popopx-chat",
    },
    portsPurpose: {
      console: "Web konsolu ve motor günlük akışı",
      inference: "Yerel model çıkarımı",
      control: "Sohbet daemon'ının kontrol soketi",
    },
    portsFootnote:
      "Üçünün de adresi loopback. Konsol, TLS'siz düz HTTP; bu ancak makineden hiç çıkmadığı ölçüde makul bir tasarım: 0.0.0.0, bir yerel ağ adresi ya da bir host adı üzerinde bağlanma girişimleri bir soket oluşturulmadan reddedilir ve adres, bir yapılandırma dosyasından okunmak yerine uygulamaya sabit olarak yazılmıştır. Onu koruyan şey, her açılışta üretilen rastgele yirmi dört baytlık bir jetondur; X-PPX-Token olarak gönderilir, yalnızca bellekte tutulur ve süreç çıktığında ölür. Sohbet daemon'ının kontrol soketinde hiç kimlik doğrulama yoktur — bunun dürüst tarifi budur — ve güvenli kalabileceği tek şart, 127.0.0.1 üzerinde kalmaya devam etmesidir.",
  },

  hub: {
    heading: "Beş yerel yetenek, tek sınır",
    sub:
      "build 4, sahibiyle sınırlı yetenek keşfini, dört protokol bağdaştırıcısını ve mühürlü bir eşleştirme bağlantısını imzalı görüntüye ekler. Köprüler varsayılan olarak kapalıdır, her hedef aynı olumlu izin listesinden geçer ve her yazma, bir insanın onaylaması gereken imzalı bir öneriye dönüşür. Hiçbiri barındırılan bir hizmet değildir ve hiçbiri yeni bir dinleyici açmaz.",
    status:
      "İmzalı v1.0.2 build 4 sürümünde (6de6eb8, 27 Kasım 2026) ve bu sitedeki Universal DMG'de. Aşağıdaki kartlar bir kaynak dalını değil, indirdiğiniz görüntüyü anlatır.",
    cards: [
      {
        title: "Yalnızca kendisi hakkında yanıt veren keşif",
        body:
          "Konsol, bu Mac'in zaten sahip olduklarını bildirir: 127.0.0.1:11434 üzerindeki Ollama ve sunduğu modeller, yetkilendirdiğiniz çalışma klasörleri, EventKit izin durumu ve kendi yazdığınız en fazla sekiz yerel ağ hedefi için bir TCP erişilebilirlik satırı. Bu, salt okunur bir GET /v1/discovery/capabilities isteğidir. Ne bir mDNS duyurucusu, ne port taraması ne de alt ağ taraması vardır; yalnızca loopback, RFC 1918 sabitleri, ULA ve .local adları kabul edilir ve genel bir adres, soket açılmadan reddedilir.",
      },
      {
        title: "MCP, izin listesinin içinde",
        body:
          "Yerel bir MCP istemcisi JSON-RPC 2.0 initialize, tools/list ve tools/call konuşur. Sunucular config/mcp_servers.json içine elle kaydedilir — en fazla sekiz. stdio komutu, on altı girişlik allowedCommands listesi içinde mutlak bir yol olmalı ve kabuk metakarakteri içermemelidir; HTTP sunucusu loopback üzerinde yanıt vermelidir. Salt okunur bir araç çalışabilir; değişiklik yapan bir araç istek üzerine asla yürütülmez, yalnızca bir öneriye dönüştürülür.",
      },
      {
        title: "Yerel ağda Home Assistant ve MQTT",
        body:
          "Home Assistant yerel REST API'si üzerinden ve elle yazılmış bir MQTT 3.1.1 istemcisi; ikisi de loopback, RFC 1918 ve .local ile sınırlı. Köprü için yalnızca exposedEntities içinde adı geçen varlıklar vardır, salt okunur kip varsayılan olarak açıktır ve bir aracıya yapılan yayın yalnızca yapılandırdığınız bir ön ek altındaki açık bir varlığı hedefleyebilir. Kimlik bilgileri Keychain referanslarıdır; settings.json hiçbir token tutmaz.",
      },
      {
        title: "CalDAV metni değil, boşlukları saklar",
        body:
          "Yerel ağdaki en fazla dört kendi barındırdığınız CalDAV sunucusuna PROPFIND ve REPORT. iCalendar ayrıştırıcısı DTSTART ve DTEND'i tutar; SUMMARY, DESCRIPTION, LOCATION, ORGANIZER ve her ATTENDEE'yi ayrıştırmanın içinde düşürür, böylece sonradan yanlış yapılabilecek bir redaksiyon adımı yoktur. Uzak meşgul blokları yerel boş dilimlerden on beş dakikalık bir tabanla kesilip çıkarılır; ayrıştırıcının değerlendiremediği bir yineleme, tahmin edilmek yerine bir taban olarak bildirilir.",
      },
    ],
    boundaryHeading: "Sınırın reddettikleri",
    boundaryItems: [
      {
        title: "Genel adresler ve çözümlenmeyen adlar",
        body:
          "Bir köprü hedefi loopback, RFC 1918, ULA ya da .local bir ad olmalıdır. Çıplak bir host adı, genel olup olmadığını öğrenmek için çözümlenmez, URL'deki kimlik bilgileri reddedilir ve bir HTTP köprüsü yönlendirmeyi izlemez — böylece izin listesindeki bir host düğümü başkasının sunucusuna sıçratamaz.",
      },
      {
        title: "İnsansız yazmalar",
        body:
          "Bir akıllı ev eylemi ya da değişiklik yapan bir MCP aracı, kimliğine ve fiiline bağlı, on beş dakika geçerli HMAC-SHA256 makbuzu taşıyan bir pending_user_approval önerisine dönüşür. Yürüyen yük, size gösterilen yüktür, yerel denetim günlüğüne kaydedilir ve köprüyü kapatmak bekleyen ne varsa geçersiz kılar.",
      },
      {
        title: "Düz metin yedeği olmayan sırlar",
        body:
          "Home Assistant token'ı, MQTT parolası ve CalDAV parolası, bir referansla adreslenen Keychain öğeleridir; paketlenmemiş bir çalıştırma onları yalnızca bellekte tutar ve hiçbir şey bir dosyaya geri düşmez. MCP belgesi ortam değişkeni adlarını saklar, değerleri asla.",
      },
    ],
    footnote:
      "Gizlilik ve denetim aynı sınırı kural kural anlatır, düğümün söz veremeyeceği şeyler dahil.",
  },

  extensions: {
    heading: "İki yerel uzantı, tek onay sınırı",
    sub:
      "build 4, okuyan, öneren ve bekleyen özel bir asistan ile kendi kurduğunuz 3B bir küreye köprü ekler. İkisi de varsayılan olarak kapalıdır, ikisi de durumunu bu Mac'te tutar ve hiçbiri bir modelin önerisini onay makbuzu olmadan yazmaya dönüştürmez.",
    assistantTitle: "Özel asistan ve denetimli otomasyon",
    assistantSub:
      "Tek bir yönetici dört parçayı bir araya getirir: bir zamanlayıcı, salt okunur okuyan ve yalnızca onaydan sonra gönderen bir posta köprüsü, bir ev cihazı nöbetçisi ve her yazmanın geçmesi gereken onay kapısı.",
    assistantFeatures: [
      {
        title: "Dört bağlayıcı izni",
        body:
          "Her bağlayıcı dört düzeyden birini bildirir — read, propose, write ya da admin. Varsayılan read artı propose'tur; write ya da admin eylemi model isteminde değil, yürütücünün girişinde yeniden denetlenir.",
      },
      {
        title: "Kendi açtığınız bir zamanlayıcı",
        body:
          "Yerel saatle 08:00'de günlük bir brifing ve her 30 dakikada bir ev sağlığı devriyesi. İkisi de varsayılan olarak kapalıdır ve yalnızca sahibi açabilir; her çalıştırma ve durum değişikliği ledger/assistant.sqlite3 dosyasına yazılır.",
      },
      {
        title: "Posta, siz onaylayana kadar salt okunur",
        body:
          "IMAPS 993, posta kutusunu EXAMINE ve BODY.PEEK ile açar, son postaları yanıt gerekli, fatura, davet ve bildirim olarak sınıflandırır ve yanıt taslakları hazırlar. SMTPS 465 yalnızca telefonda karttan ya da konsolda onayladıktan sonra gönderir; parolalar Keychain referanslarıdır, asla ayar değildir.",
      },
      {
        title: "Öneren, sonra duran bir nöbetçi",
        body:
          "Devriye yalnızca açığa çıkardığınız Home Assistant varlıklarını okur. Eşiğini (varsayılan 15 dakika) aşan süre boyunca kullanılamaz kalan bir varlık, eyleme, varlığa ve yük özetine bağlı bir onarım önerisine dönüşür; onarım onaydan sonra bir kez çalışır ve salt okunur bir köprü, geçerli bir makbuz olsa bile onu reddeder.",
      },
    ],
    godsEyeTitle: "God's Eye View, loopback üzerinde",
    godsEyeSub:
      "Bu Mac'te kendi kurduğunuz ve yönettiğiniz ayrı bir üçüncü taraf program. Düğüm yalnızca Swift köprüsünü taşır: JavaScript yok, harita döşemesi yok, veri yok.",
    godsEyeFeatures: [
      {
        title: "Siz kurarsınız, düğüm doğrular",
        body:
          "Mevcut kurulum ya da sabitlenmiş bir commit'in tek tıkla klonu — klon isteğe bağlıdır, asla zamanlayıcıyla olmaz. Paket adı, sabitlenmiş sürüm, package.json boyutu ve iki giriş betiği denetlenir ve giriş betiklerinin SHA-256 değeri kaydedilir; kurulum kökünün dışına çözülen bir yol, symlink üzerinden olsa bile reddedilir.",
      },
      {
        title: "Sabit loopback adresi",
        body:
          "Bağlanma ana bilgisayarı 127.0.0.1 sabitidir ve yapılandırılamaz; varsayılan bağlantı noktası 18931'dir. Sistem dizinleri, ~/.ssh, ~/.gnupg, Keychain klasörü ve düğümün kendi veri kökü kurulum hedefi olarak reddedilir.",
      },
      {
        title: "MCPToolGate yalnızca sıkılaştırır",
        body:
          "Salt okunur coğrafi araçlar MCP izin listesi içinde çalışabilir. Değişiklik yapan olarak sınıflandırılan bir araç — tuval işaretleri, çizimler, rapor dışa aktarma ya da okuma olduğu anlaşılamayan her ad — sunucu onu salt okunur ilan etse bile pending_user_approval olur. Bu kapı bir düzeyi sıkılaştırabilir, asla gevşetemez.",
      },
    ],
    boundaryHeading: "Onay makbuzunun kapsadıkları",
    boundaryItems: [
      {
        title: "Dokuz yüz saniye, tek kullanım",
        body:
          "Bir asistan yazması, işlem türüne, hedefe, içerik özetine ve son kullanma zamanına bağlı 32 karakterlik bir HMAC-SHA256 makbuzu taşır. 900 saniye geçerlidir, sabit zamanda karşılaştırılır, herhangi bir G/Ç öncesinde yürütücü tarafından tüketilir ve yük değişirse, süresi dolarsa, yeniden oynatılırsa ya da başka bir öneriye bağlıysa reddedilir.",
      },
      {
        title: "Küre loopback üzerinde kalır",
        body:
          "God's Eye View, 127.0.0.1 sabitine bağlanır ve başka hiçbir şeye bağlanmaz; hassas dizinler, Keychain klasörü ve düğümün kendi veri kökü, symlink çözümlemesinden sonra da dahil olmak üzere kurulum hedefi olarak reddedilir. Canlı beslemeleri, her sağlayıcının koşulları altında kendi yerel programınız çeker — bu düğüm yalnızca isteğe bağlı Keychain referansları tutar ve veriyi asla vekil olarak geçirmez ya da önbelleğe almaz. Tuval yazmaları ve rapor dışa aktarmaları, sunucu onları salt okunur saysa bile pending_user_approval olur.",
      },
    ],
    footnote:
      "Gizlilik ve denetim, asistan, küre ve dört yerel ağ köprüsü için aynı sınırları kural kural anlatır; hiçbirinin söz veremeyeceği şeyler dahil.",
  },

  engines: {
    heading: "On egemen motor",
    sub:
      "Üç raf ve on resmi hizmet hesabı. Aşağıdaki her kart kendi fiyatını yazar: 30 günlük tek bir döngü için sabit bir Hesaplama kredisi tutarı; Edge Compute Mesh için ise iş başına hesaplaşma ve %10 protokol ücreti. Her biri zaten sahip olduğun donanım üzerinde çalışır.",
    filterAll: "Tümü",
    substrateLabel: "Taban",
    quickMenuLabel: "iOS hızlı menüsü",
    quickMenuHint:
      "Her düğme eşleştirilmiş düğümine ::popopx_sys::NODE_CMD::<service>::<action>::{} gönderir.",
    deterministicBadge: "Deterministik — akışta model yok",
    modelBadge: "Döngüde yerel model",
    offlineBadge: "Yerel model ağırlıkları olmadan çalışır",
    openDetails: "Aç",
    closeDetails: "Kapat",
    shelfCount: "motor",
    creditsUnit: "Hesaplama kredisi",
  },

  hardware: {
    heading: "Katman belleği izler",
    sub:
      "Düğüm açılışta sysctl değerlerini okur — çip modeli, CPU çekirdek sayısı, fiziksel birleşik bellek, boş SSD — ve katmanı otomatik seçer. Uygulamayı başka bir Mac'e taşı, katman da seninle gelir; yeniden yapılandırılacak bir şey yoktur.",
    columns: [
      "Birleşik bellek",
      "Tipik çip",
      "Metin modeli",
      "Video modeli",
      "İlk token*",
      "Aktarım hızı*",
      "Kalıcı tepe değer*",
      "Mod",
    ],
    modes: {
      lightweight: "Hafif çıkarım",
      balanced: "Dengeli",
      full: "Tam ağırlıklar",
    },
    footnote:
      "* Bu üç sütun laboratuvar ölçümü değil, mühendislik tahminidir. Sayılar, yoğun bir 27B modelinin bellek bant genişliğinin sınırlandığı çözümlemeden ve LTX-2.5 ağırlık ayak izinin kuantizasyon oranına dayalı okumasından türetilmiştir. Kalıcı termal davranış, çip nesli, arka plan yükü, klip uzunluğu ve eşzamanlı işler gerçek değerleri iki-üç kat değiştirir. Bunları katman seçmek için kullan, performans sözü olarak değil.",
    rules: [
      "96 GB ve üzeri — LTX-2.5 orijinal BF16 tam ağırlıkları, Qwen3.8-27B modeli Q8_0 ile.",
      "48 GB ile 95 GB arası — 8-bit MLX'e kuantılanmış LTX-2.5, Qwen3.8-27B modeli Q4_K_M ile.",
      "48 GB altı — Q4_K_M ile bir 9B model, yalnızca kısa işler; ağır video Edge Compute Mesh'e önerilir.",
    ],
    plansHeading: "Her katman gerçekte neyi dağıtıyor",
    plansSub:
      "Yukarıdaki tablo satın almadan önce okuduğunuz rehber. Bu tablo ise düğümün makineyi ölçtükten sonra kendisi için yazdırdığı şey: doğrudan öneri işlevinden çıkıyor ve düğümün çektiği model etiketini de içeriyor.",
    plansColumns: [
      "Bellek aralığı",
      "Metin modeli",
      "Video yığını",
      "Kalıcı bellek tavanı",
      "Ağır video",
      "Çekme komutu",
    ],
    heavyVideo: {
      local: "Burada işleniyor",
      mesh: "Mesh'e öneriliyor",
    },
    plansFootnote:
      "Kalıcı bellek tavanı bir kıyas testi değil, ölçülen bellek üzerinde kurulu aritmetik bir kural: her katman, bulduğu birleşik bellekten masaüstü oturumu için sabit bir payı çıkarır ve çok büyük bir makinenin bu yığının ihtiyaç duyduğundan fazlasını vaat etmemesi için bir üst sınır uygular. Model etiketleri ve kuantizasyonlar, düğümün gerçekten Ollama'ya ilettiği dizilerdir.",
  },

  install: {
    heading: "Tek DMG, tek tarama, on anahtar",
    sub:
      "Düğümün kurulum programı yok, daemon hesabı yok ve kaydedilecek hiçbir şeyi yok. O, loopback'e bağlanan tek bir menü çubuğu uygulamasıdır ve profili ilk çalışma kendisi çıkarır.",
    prereqsHeading: "İndirmeden önce",
    prereqNotes: {
      system: "Paket macOS 14'ü hedefliyor ve uygulama bir menü çubuğu ajanı.",
      memory:
        "Metal, MLX ve tüm katman merdiveni birleşik belleği varsayar. DMG bir x86_64 dilimi taşıyor, ancak yığının hiçbir parçası Intel için ayarlanmış değil.",
      disk:
        "Boş alan 40 GB ya da altına düştüğünde model ağırlıkları reddedilir; dolayısıyla merdivenin tavanı aynı zamanda diskinizin tavanıdır.",
      media:
        "On motorun beşi FFmpeg çağırıyor. Kurulum sihirbazı Homebrew ile onu yükleyebilir.",
      inference:
        "Kuantizanmış metin modelleri için Ollama, video için LTX-2.5 MLX çalışma alanı. İkisi de yerel araç; ikisi de hizmet değil.",
      bridge:
        "Yalnızca SMP eşleştirme adımı ve telefonla sürülen yol için gerekiyor. Motorların kendisi onsuz çalışır.",
    },
    prereqRequired: {
      hard: "Gerekli",
      wizard: "Sihirbaz kurar",
      optional: "Yalnızca eşleştirme için",
    },
    steps: [
      {
        title: "DMG dosyasını doğrula ve aç",
        body:
          "POPOPX-Mac-Node-Universal.dmg ile sürümün sağlama değer dosyasını aynı klasöre alın ve hiçbir şeyi açmadan önce kontrol edin; Sürümler ve GitHub, geçerli sürüm için gereken iki komutu yazar. POPOPX Mac Node.app'i /Applications klasörüne sürükleyin. Yayımlanan derleme bir Developer ID imzası ve dosyaya iliştirilmiş bir noter onay kaydı taşır, bu yüzden Gatekeeper ona ekstra bir şey yapmadan izin verir — spctl -a -vv -t install komutu source=Notarized Developer ID ile accepted yanıtını verir. Scripts/build_dmg.sh ile kendinizin yaptığı bir derleme ise ad-hoc imzalıdır ve ilk açılışta sağ tıklayıp “Aç” demenizi isteyen de odur.",
      },
      {
        title: "Makinenin profilini çıkarmasına izin verin",
        body:
          "Uygulamayı başlatın ve konsolu menü çubuğundan açın. Birinci adım çipi, çekirdek sayısını, birleşik belleği ve boş SSD'yi sysctl'den okur, seçtiği katmanla o katmanın ima ettiği model etiketini yazar ve sizin bildirdiğiniz sayıları değil, kendisinin örneklediği sayıları gösterir.",
      },
      {
        title: "Yerel motorları kurun",
        body:
          "Sihirbaz listeyi aşağı doğru işler: Homebrew, FFmpeg, uv, Ollama, katmanınıza uyan Qwen kuantizasyonu, LTX-2.5 çalışma alanı ve ardından bir öz denetim. Kurulum günlüğü çalışırken konsol sayfasına akar ve logs/install.log dosyasına yazılır, böylece bir arıza sonrasında okunabilir.",
      },
      {
        title: "iPhone'u eşleştirin",
        body:
          "Eşleştirme QR kodunu üretin — konsoldan ya da menü çubuğundaki yeni kod öğesinden — ve POPOPX iOS istemcisiyle tarayın. 040ef25'ten beri QR kodu ve kopyalama düğmesi ham kimlik bilgisi yerine mühürlü bir https://popopx.chat/i/v1/… bağlantısı taşır, böylece bir ekran görüntüsü ya da sohbet önizlemesi kuyruk adresini açığa çıkarmaz. İçindeki kod yine imzalıdır, tek kullanımlıktır ve on beş dakikada süresi dolar; ham PPXNODE1 kodu ve davet URI'si konsolun tanılama çekmecesinde kalır. Cihaz; modeli, eşleştirme zamanı ve son görüldüğü anla birlikte eşleştirilmişler listesinde görünür.",
      },
      {
        title: "Motorları açın",
        body:
          "Menü çubuğunda ve konsolda on anahtar. Bir motor yalnızca siz etkinleştirirseniz çalışır ve yerel model gerektirmeyen dördü — fiziksel kilitlenme, zamana kilitli kasa, filigran izleyici, laboratuvar raporu okuyucusu — tek bir ağırlık bile indirilmeden çalışır. FFmpeg yine de çağrılır; model yığını çağrılmaz.",
      },
    ],
    buildHeading: "Ya da aynı etiketten kendiniz derleyin",
    buildBody:
      "Sürüm görüntüleri, sizin de çekebileceğiniz o ağaçtan paketlenir. swift build, swift test, swift build -c release, ardından bash Scripts/build_dmg.sh --output dist --version v1.0.2 --build 4 universal DMG'yi yazar, ad-hoc imzalar ve yan dosyayı da birlikte üretir. Yayımlanan çıktı ise öteki betikten gelir: Scripts/build-release.sh Developer ID imzasını, noter onayına gönderimi ve ZIP dosyasını ekler; indirilen bir görüntünün spctl'den geçip kendi derlemenizin geçmemesinin sebebi budur. İkisi de yalnızca macOS'ta çalışır, çünkü zaten hdiutil ile codesign'dan yapılmışlardır.",
    lifecycleHeading: "İlk çalıştırmadan sonra",
    lifecycle: [
      {
        title: "Yükseltme",
        body:
          "build 4, otomatik bir kurucu değil, sahibin yapılandırdığı bir güncelleme kapısı ekler. Yalnızca sizin adını verdiğiniz liste ana bilgisayarını okur, sabitlediğiniz anahtardan gelen ve kesinlikle daha yeni bir sürümü kapsayan bir Ed25519 imzasını doğrular ve makbuza bağlı bir indirmeyi onaylayana kadar hiçbir şey kurmaz; sağlama değeri uyuşmazsa teklif düşer. Satıcı uç noktası yoktur ve varsayılan denetim yoktur. Yükseltmeyi yine yeni DMG'yi indirip doğrulayarak ve uygulamanın yerine koyarak yapabilirsiniz. Ayarlar, eşleştirme durumu, düğüm anahtarı, kasa ve tüm çıktılar paketin içinde değil Application Support altında durur; bu yüzden yerine konan uygulama, düştüğü makineyi olduğu gibi devralır.",
      },
      {
        title: "Yedekleme ve makine taşıma",
        body:
          "Uygulama kendi veri kökünü Time Machine dışında bırakır; bu, yedeklerinizi model ağırlıklarından korur ve bir geri yüklemede sürpriz olmasını engeller. Aynı zamanda o klasörün yedeğinizde olmadığı anlamına da gelir. Bir düğümü taşımak için onu kapatın, ~/Library/Application Support/PopopxMacNode klasörünü yeni Mac'te aynı yola kopyalayın ve yeniden profil çıkarmasına izin verin: katman değişebilir ve pairing/node.key de klasörle birlikte gelir; kopyanın en az orijinali kadar gizli tutulması gerektiğinin tüm sebebi budur.",
      },
      {
        title: "Tamamen kaldırma",
        body:
          "Önce Launch at Login özelliğini kapatın, sonra menü çubuğundan Quit deyin — dinleyici kapanır ve oturum açma öğesi serbest bırakılır. /Applications/POPOPX Mac Node.app dosyasını silin, ardından mühürlü kasa, defterler ve çıktılar da gitsin istiyorsanız ~/Library/Application Support/PopopxMacNode veri kökünü silin. Kaldırma programı yok ve unutacak bir kayıt da yok: o iki yolun dışında hiçbir şey kurulmadı. O iki yolun kapsamadığı tek şey bir Keychain öğesidir: bir hub köprüsü yapılandırdıysanız im.popopx.macnode.hub altındaki kimlik bilgisi iki silme işlemini de atlatır, çünkü Keychain bir klasör değildir; onu Keychain Access içinde ya da köprünün kendi bağlantı kesme düğmesinden kaldırın.",
      },
    ],
    bridgeTitle: "Motorları kendi betiğinle sür",
    bridgeBody:
      "Entegrasyon klasörü bir TypeScript köprüsü ile iki ajan arayüzü barındırır. Yeni bir port açmaz, ikinci bir daemon başlatmaz: 127.0.0.1:18920 üzerindeki konsolu ve süreç başına tek seferlik jetonu yeniden kullanır, telefonun gönderdiği NODE_CMD sinyalleşmesinin aynısını gönderir. Kilitlenme eylemi çift onay ister — allowLockdown true olmalı ve PPX_BRIDGE_SECRET en az on altı karakter olmalı — ve bir reddetme, gerçekleştiğini görebilmeniz için eklenti günlüğüne yazılır.",
    requirementTitle: "Tek dürüst ön koşul",
    requirementBody:
      "Düğümün kendi sihirbazının 2. adımı, eşleştirme QR kodu ve SMP köprüsü, hepsi PATH yolunda bir popopx-chat sohbet daemon'ı ister. Düğüm tam olarak bir çalıştırılabilir dosyayı yoklar ve yedeği yoktur; çünkü bir upstream derlemesi bir sürüm satırına yanıt verir, ardından gelen her komutta başarısız olur. On motorun kendisi buna ihtiyaç duymaz.",
    signHeading: "Yayımlanan derleme nasıl imzalanıyor",
    signBody:
      "Görüntünün içindeki uygulama paketi bir Developer ID Application imzası, hardened runtime bayrağı ve güvenli bir zaman damgası taşıyor; bir noter onay kaydı da paketin içine iliştirilmiş durumda. Gatekeeper'ın hiçbir yardım olmadan çalışmasına izin vermesinin sebebi bu: spctl -a -vv -t install komutu source=Notarized Developer ID ile accepted yanıtını veriyor. Aşağıdaki blok, 2026-11-27 tarihinde v1.0.2 build 4'ün yayımladığı tam baytlardan okundu — ilk iki komutu /Applications içindeki uygulamaya karşı çalıştırın ve aynı kimliği geri almanız gerekir. Kayıt, uygulama ile birlikte diskte taşındığı için Apple hesabına danışılmaz ve hiçbir şey bir sunucuya karşı kontrol edilmez.",
    containerTitle: "Görüntünün kendisi imzalı değil",
    containerBody:
      "İndirdiğiniz .dmg üzerinde spctl çalıştırırsanız source=no usable signature ile rejected yanıtı alırsınız; codesign -dvv ise aynı dosyanın hiç imzalanmadığını söyler. Bu beklenen yanıt, bir kurcalama uyarısı değil. Apple'ın kod imzası uygulama paketinin üstünde, noter onay kaydı ise hem pakete hem onu saran disk görüntüsüne iliştirilmiş. Görüntünün tek bütünlük denetimi kendi SHA-256 değeridir ve bu sayfanın aşağısında yapılan kontrol de odur.",
    provenanceTitle: "Hangi betik hangi çıktıyı üretiyor",
    provenanceBody:
      "Bu uygulamayı iki betik paketliyor ve ikisi aynı yerde bitmiyor. Scripts/build_dmg.sh yerel paketleyicidir: paketi bir araya getirir, --sign - --timestamp=none ile ve hardened runtime olmadan ad-hoc imzalar, DMG'yi ve yan dosyasını yazar; bu yüzden o yoldan çıkan bir derleme ilk açılışta gerçekten sağ tıklayıp “Aç” demenizi ister. Scripts/build-release.sh ise Developer ID yolu: hardened runtime ile imzalar, noter onayına gönderir, kaydı hem pakete hem görüntüye iliştirir ve ZIP dosyasını bir SHA256SUMS.txt listesinin yanına yazar. İndirdiğiniz build 4 görüntüsü ikinci türdendir — Developer ID ile imzalı, noter onaylı ve kaydı iliştirilmiş — ve onu yalnızca o betik üretir. Düğümün 6de6eb8'deki etiket iş akışı hâlâ Scripts/build_dmg.sh çalıştırıyor, yani iş akışı tek başına imzalı varlıkları açıklayamaz; sertifikayı hiç elinde tutmamış bir çalıştırıcı onları üretemez.",
    digestHeading: "Bir şeyi açmadan önce sağlama değerini kontrol edin",
    digestBody:
      "İki komut, dosyaları kaydettiğiniz klasörde çalıştırılıyor. Esas alınacak dosya sürüm listesidir: sürümdeki her çıktıyı adlandırıyor ve o dosyayı, çıktıları paketleyen aynı adım yazıyor. build 4'te .dmg.sha256 yan dosyası ile SHA256SUMS.txt aynı sağlama değerini adlandırıyor, yani iki kontrol de aynı sonucu veriyor. Sürümler ve GitHub, kendi çözdüğü sürüm için o iki komutu yazar ve bu, aşağıdaki sürümden daha yeni olabilir.",
    copyCommand: "Komutu kopyala",
    commandCopied: "Kopyalandı",
  },

  security: {
    heading: "Ne kalır, ne gider ve nasıl durdurulur",
    sub:
      "Yalnızca yerelde kalanı sayan bir gizlilik sayfası bir pazarlama sayfasıdır. Bu sayfa trafiği de yazıyor, çünkü “verileriniz cihazınızdan asla çıkmaz” cümlesinin dürüst hâli sloganından daha uzun ve daha faydalı.",
    localHeading: "Diskinizde kalır",
    localSub:
      "Tek bir veri kökünün altında, uygulamanın oluşturduğu ve Time Machine dışında tuttuğu bir klasörde; sırlar atomik olarak 0600 kipinde ve tam dosya korumasıyla yazılır.",
    localItems: [
      {
        title: "Her çıktı",
        body:
          "İşlenmiş klipler, brifingler, filigranlı dışa aktarımlar, mühürlü arşivler, çözümlenmiş raporlar ve karantinaya alınmış girdilerin hepsi veri kökünün altına iner ve orada kalır. Düğüm, yalnızca telefonunuzun yeniden çevrimiçi olmasını bekleyen sonuçlar için bir outbox tutar.",
      },
      {
        title: "Modeller ve ağırlıkları",
        body:
          "Qwen kuantizasyonu Ollama'nın kendi deposunda durur; LTX-2.5 ağırlıkları düğümün engines dizininde durur. İkisi de yerel diskte yerel dosyalardır, bir kez çekilir ve çekme işlemi boş alan 40 GB ya da altına düştüğünde reddedilir.",
      },
      {
        title: "Anahtarlar ve eşleştirme durumu",
        body:
          "Düğümün Ed25519 imzalama anahtarı, eşleştirilmiş cihazların listesi ve güncel teklif, pairing/ altında düz dosyalardır. Anahtarın bulut yedeği ya da herhangi bir yerde bir emanet yoktur — bunun iki ucu da keser; aşağıdaki kayıp paragrafı bunu söylüyor. İstisna kimlik bilgileridir: bir hub köprüsünün token'ı ya da parolası, asistanın IMAP ve SMTP parolaları ve God's Eye View besleme anahtarları Keychain öğeleridir ve settings.json yalnızca onları getiren referansları taşır.",
      },
      {
        title: "Kanıt izi",
        body:
          "Kilitlenme ve mesh defterleri yerelde hash eklenerek büyütülür; denetim günlüğü neyin çalıştığını, hangi motorda ve hangi sonuçla bittiğini yazar. O, siz okuyasınız diye yazılır: logs/node.log, “bu şey saat 03:14'te ne yaptı” sorusunun en hızlı yanıtıdır.",
      },
    ],
    transitHeading: "Makineden çıkar",
    transitSub:
      "Dört tür trafik daha geniş ağa çıkar ve her biri ya kendi cihazınızdır ya da sizin yapılandırdığınız bir şeydir. Asistanın posta hesabı, siz açtığınızda beşinciyi ekler; bir yerel ağ köprüsü ise loopback, RFC 1918 ve .local adreslerinde yerel trafik ekler. Hiçbirinde bir şey gönderilecek bir analitik uç noktası yoktur.",
    transitItems: [
      {
        title: "Sonuçlar, kendi telefonunuza geri",
        body:
          "Biten bir iş, en fazla 1024 karakterlik bir kart ve her çıktı dosyası için bir mesaj döndürür; kendi popopx-chat kuyruğunuz üzerinden, SMP aktarımı ve XFTP taşımasıyla. Aktarıcı şifreli metni görür. Telefon çevrim dışıysa sonuç outbox/ içinde bekler ve otuz güne kadar yeniden denemeye devam eder.",
      },
      {
        title: "Okumasını istediğiniz beslemeler",
        body:
          "Morning TV yapılandırdığınız RSS kaynaklarını çeker; yanıt başına üç megabayt tavanı vardır ve bu, beslemelerinizi barındırana giden sıradan bir dış HTTPS isteğidir.",
      },
      {
        title: "Yapılandırdığınız bir webhook",
        body:
          "Fiziksel kilitlenme, bir ev otomasyonu ya da varlık uç noktasına imzalı bir olay POST edebilir. Bu en iyi çabayla yapılır, siz seçmeden yürümez ve URL sizin — düğümün varsayılan bir adresi yoktur.",
      },
      {
        title: "Kurulumlar ve model çekmeleri",
        body:
          "Sihirbaz Homebrew formüllerini, FFmpeg'i, uv'yi, Ollama'yı ve seçtiğiniz kuantizasyonu indirir. Bu trafik zaten bir kurulum adımının kendisidir; bir kez, sizin önünüzde, günlük ekranın üzerindeyken olur.",
      },
      {
        title: "Asistanın posta hesabı",
        body:
          "Siz açıp sunucuyu yazana kadar kapalıdır. IMAPS 993, EXAMINE ve BODY.PEEK ile okur; bu hiçbir zaman bir iletiyi okundu olarak işaretlemez. SMTPS 465 yalnızca makbuza onay verdiğiniz bir taslağı gönderir. Ana bilgisayar ayarlarınızdaki bir sabittir ve asla keşfedilmez; iki parola Keychain referansıdır. Asistanın başka hiçbir eylemi makineden çıkmaz.",
      },
    ],
    keysHeading: "Sırların gerçekte durduğu yer",
    keysBody:
      "Eşleştirme ve kasa malzemesi, veri kökünün altındaki dosyalardır; atomik yazma, POSIX kipi 0600 ve tam dosya korumasıyla diske inerler, böylece makine kilitliyken diskteki hâlleri okunamaz. Göze aldığınız değişiklik gerçek: dosya izinleri denetlenebilir ve taşınabilir, ama sizin kullanıcı hesabınız ile kullanıcı hesabınızı zaten ele geçirmiş bir okuyucu arasına hiçbir şey koymazlar. Veri köküne bir sır gibi davranın: Time Machine içinde değildir ve düğüm anahtarının var olan tek kopyası odur. Bir hub kimlik bilgisi öteki yolu izler. Home Assistant token'ı, MQTT parolası, CalDAV parolası, asistanın IMAP ve SMTP parolaları ve God's Eye View besleme anahtarları, im.popopx.macnode.hub servisi altında kSecAttrAccessibleWhenUnlockedThisDeviceOnly ile oluşturulmuş generic-password öğeleridir ve ayarlar belgesi yalnızca bir referans saklar. Uygulamanın paket kimliği olmayan bir süreç — swift run, bir test koşum takımı — bunun yerine bellek içi bir depo alır; düz metin dosyasına düşüş bilerek yoktur, yani Keychain'e ulaşamayan bir kimlik bilgisi hiç kaydedilmez.",
    dataNote: {
      output: "Üretilen çıktılar ve telefonunu bekleyen sonuçları tutan outbox kuyruğu.",
      vault: "Zamana kilitli mühürlü arşivler ve onları açan halefiyet malzemesi.",
      pairing: "Ed25519 düğüm anahtarı, eşleştirilmiş cihaz listesi ve güncel tek kullanımlık teklif.",
      weights: "Model ağırlıkları ve video motorlarının çağırdığı LTX-2.5 MLX çalışma alanı.",
      ledger: "Hash ile eklenen kilitlenme ve mesh defterleri ile asistanın sınırlı SQLite denetim defteri.",
      logs: "Kurulum günlüğü ve denetim günlüğü; operatör okusun diye yazılır.",
      config: "Ayarlar, motor anahtarları ve köprülerin, asistanın ve God's Eye View kartının paylaştığı yapılandırma.",
    },
    rootLabel: "Veri kökü",
    hubHeading: "Uç hub'ın kendi sınırı",
    hubSub:
      "build 4'te eklenen dört yerel ağ köprüsü, özel asistan ve God's Eye View köprüsü yukarıdaki kurallara ve aşağıdakilere uyar. Bunlar bir özellik kartında değil burada yazılı, çünkü bir okurun koddan yanlışlayabilmesi gereken iddialardır.",
    hubItems: [
      {
        title: "Tek giriş noktası",
        body:
          "Her köprü hedefi — HTTP üzerinden MCP, Home Assistant, MQTT, CalDAV — bir soket doğmadan önce aynı EdgeBoundary denetiminden geçer: loopback, RFC 1918, ULA ya da .local; bir adın genel olup olmadığını keşfetmek için DNS sorgusu yok, URL'de kimlik bilgisi yok ve yönlendirme izlenmiyor. Ret, konsolda bir satırdır, başka bir yerde sessiz bir yeniden deneme değil.",
      },
      {
        title: "İstem değil, makbuz",
        body:
          "Değişiklik yapan bir eylem konsoldaki bir metin kutusuyla geçitlenmez. pending_user_approval durumunda bir öneriye dönüşür, öneri kimliğine ve fiiline bağlı 24 karakterlik bir HMAC-SHA256 makbuzuyla onaylanır, on beş dakika geçerlidir ve yerel denetim günlüğüne yazılır. Yürütücünün çalıştırdığı yük, sahibinin gördüğü yüktür ve köprüyü kapatmak bekleyen önerileri geçersiz kılar.",
      },
      {
        title: "Keychain ya da bellek, asla dosya",
        body:
          "Köprü kimlik bilgileri, bir referansla adreslenen Keychain öğelerinde ya da paketlenmemiş bir çalıştırma için süreç belleğinde yaşar. Üçüncü bir seçenek yok: ne settings.json, ne bir günlük, ne bir DMG. MCP belgesi ortam değişkeni adlarını saklar; böylece stdio yoluyla bir MCP sunucusuna verilen token, düğümün yazdığı bir dosyadan değil, sahibin ayarladığı ortamdan okunur.",
      },
      {
        title: "En azını öğren",
        body:
          "CalDAV, DTSTART ve DTEND'i ayrıştırır; başlıkları, açıklamaları, konumları ve katılımcıları ayrıştırıcının içinde atar, böylece en yoğun alanlar modele hiç girmez. Bir öneri önizlemesi kısa skaler argümanları gösterir ve anahtarı redaksiyon listesinde olan her değeri gizler — content, token, password, payload ve daha fazlası. Keşif, makinenin kendi durumunu bildiren salt okunur bir GET'tir.",
      },
      {
        title: "Asistan ve küre",
        body:
          "Bir posta gönderimi ya da ev onarımı, yürütücüye ancak tür, hedef, özet ve son kullanma zamanına bağlı, 900 saniye geçerli ve bir kez tüketilen 32 karakterlik bir HMAC-SHA256 makbuzuyla ulaşır. Posta, asistanın adı konmuş tek dışa çıkış istisnasıdır ve parolaları Keychain referanslarıdır. God's Eye View yalnızca loopback'e bağlanır, kurulumunu symlink çözümlemesinden sonra doğrular ve MCP kapısı bir aracı yalnızca sıkılaştırabilir: tuval yazmaları ve rapor dışa aktarmaları, sunucu onları salt okunur saysa bile pending_user_approval olur. Depoda yalnızca Swift köprüsü vardır.",
      },
    ],
    controlHeading: "Kapanış düğmesinin sizin tarafınız",
    controlSub:
      "Dört denetim; hepsi yerel, hepsi bir ayarlar ekranına gömülü olmak yerine uygulamada görünür. Hiçbiri ağa ihtiyaç duymaz; ağ sorunken işe yaramalarının nedeni de bu.",
    controls: [
      {
        title: "Bir motoru durdurun",
        body:
          "Menü çubuğunda ve konsolda on bağımsız anahtar. Birini kapatmak bir sonraki komutta etkili olur; kapalı bir motora giden komut kuyruğa alınmak yerine reddedilir.",
      },
      {
        title: "Çevrim ödünç vermeyi durdurun",
        body:
          "Pause Mesh Sharing düğümü derhal uç hesaplama havuzundan çıkarır; menü çubuğu “Duraklatıldı” yazar ve düğüm iş almayı bırakır. Adında duraklatma sözcüğü bulunan tek denetim budur; kapsamı mesh kapasitesidir, tüm düğüm değildir.",
      },
      {
        title: "Güncel eşleştirme kodunu yakın",
        body:
          "New Pairing QR bekleyen teklifi emekliye ayırır ve yerine bir yenisini basar. Eski kodun fotoğrafını elinde tutan biri ikinci bir şans değil, süresi dolmuş bir imza elde etmiş olur.",
      },
      {
        title: "Her şeyi durdurun",
        body:
          "Quit gerçek kapanış anahtarıdır: loopback dinleyicisini kapatır, oturum açma öğesini serbest bırakır ve açılış jetonunu süreçle birlikte düşürür. Çalışmayan bir düğüm hiçbir soruya, hiçbir kimseye yanıt vermez.",
      },
    ],
    revokeHeading: "Ve bir cihazın eşleştirmesini iptal ederken",
    revokeBody:
      "Konsoldaki eşleştirilmiş cihaz listesinde her satırda bir Revoke düğmesi var. Düğme o cihazı iptal edilmiş olarak işaretler, kişi eşlemesini kaldırır ve o andan sonra komutlarını düşürür — ama SMP bağlantısını sökmez ve uygulama bunu, size gösterdiği mesajın içinde kendisi söylüyor. İşe son vermek için sohbet istemcisinde kişiyi silin. Diske zaten yazılmış olan her şey diskinizde kalır; iptal gelecekteki komutları durdurur, uzaktan bir silme değildir ve düğümün hiç uzaktan silme yeteneği olmadı ki kaldırılmış olsun.",
    limitsHeading: "Bu sayfanın vaat etmeyecekleri",
    limitsBody:
      "Güvenli yok etme; rastgele bir üzerine yazma, bir sync ve bir unlink. APFS üzerinde değiştirilen bir dosya yeni bloklara yazılır ve SSD mantıksal blokları yeniden eşler, dolayısıyla bu işlem dosyayı kaldırır ve sıradan kurtarma araçlarını atlatır, ama eski fiziksel baytların gittiğini kanıtlamaz. Bir kullanıcı alanı dosya API'sinin yapabileceği en iyi şey budur ve kod da döndürdüğü sonuçta bunu söylüyor. Ötesinde: Quit dışında küresel bir duraklatma yok, uzaktan silme yok, anahtar emaneti yok — yani makineyi ve veri kökünü birlikte kaybederseniz geri getirme de yok — ve sessiz bir güncelleyici yok. build 4, yalnızca sizin adını verdiğiniz liste ana bilgisayarını okuyan, yalnızca sabitlediğiniz anahtardan gelen ve kesinlikle daha yeni bir sürümü kapsayan bir imzayı kabul eden ve indirmeden ya da kurmadan önce makbuz isteyen bir güncelleme kapısı ekler; satıcı uç noktası ve varsayılan hedef yoktur.",
  },

  troubleshooting: {
    heading: "Umduğunuz şeyi yapmadığında",
    sub:
      "Bu mimaride gerçekte olan arızalar, insanların onlara çarpma sırasıyla. Her biri önce nereye bakılacağını söylüyor; çünkü sunucu tarafı olmayan bir makinede en kısa yol her zaman günceldir.",
    columns: ["Belirti", "Ne oluyor", "Ne yapmak gerek"],
    items: [
      {
        symptom: "Konsol sayfası açılmıyor",
        cause:
          "Port 127.0.0.1:18920 üzerinde yedeksiz olarak sabittir; bu yüzden ikinci bir çalışan örnek — ya da oraya ilk varan başka bir şey — dinleyiciyi elinde tutar. Jeton da açılış başınadır: yeniden başlatmadan kalma eski bir sekme, ölmüş bir kimlik bilgisi taşır.",
        fix:
          "18920 üzerinde bir dinleyici olup olmadığına bakın ve diğer örneği kapatın, sonra menü çubuğundan Open Web Console'u kullanın; o, bayat bir jetonu yeniden kullanmak yerine geçerli URL'i geçerli jetonla kurar.",
      },
      {
        symptom: "11434'e kimse yanıt vermiyor",
        cause:
          "Model isteyen motorlar yalnızca loopback üzerinde Ollama ile konuşur. Ollama çalışmıyorsa ya da sihirbaz olmadan kurulmuşsa motor, barındırılan herhangi bir şeye düşmek yerine başarısız olur.",
        fix:
          "Ollama'yı başlatın, OLLAMA_HOST adresinin loopback olduğunu doğrulayın ve katman tablosunun sizin makineniz için yazdığı kuantizasyonu çekin. Hata metni, işe yarayacak komutu olduğu gibi alıntılıyor.",
      },
      {
        symptom: "Ağırlıklar hiç indirilmedi",
        cause:
          "Kurulum programı, config/engines.json içinde weightSources bildirilmedikçe ağırlık indirmeyi atlar ve boş alan 40 GB ya da altına düştüğünde doğrudan reddeder.",
        fix:
          "Çekmek istediğiniz kaynağı ekleyin ya da ağırlıkları engines/weights içine kopyalayın ve yapılandırmayı oraya yöneltin. Önce diski boşaltın; bu koruma bir eşik, bir uyarı değil.",
      },
      {
        symptom: "Bir iş komut satırı olarak döndü",
        cause:
          "Video işi LTX-2.5 çalışma alanını ve ağırlıklarını ister. Onlar yokken motor, bir dosya üretmiş gibi yapmak yerine çalıştıracak olduğu komutun aynısını döndürür.",
        fix:
          "Sihirbazın çalışma alanı adımını tamamlayın ya da adını verdiği LTX-2-MLX çalışma alanını klonlayın, sonra yeniden çalıştırın. Bu bilinçli bir tercih: sahte bir başarı, dürüst bir reddetmeden daha kötü.",
      },
      {
        symptom: "Eşleştirme kodu reddediliyor",
        cause:
          "Bir teklif tek kullanımlıktır ve on beş dakika yaşar. Aynı kodun ikinci kez taranması ya da o arada dönmüş bir ekrandan kalan bir kodun taranması doğru biçimde reddedilir.",
        fix:
          "Yeni bir kod üretin ve bir kez tarayın. Telefon başarılı bir kullanımdan sonra kendi başına yeniden denerse, ilk kullanım çoktan kazandı demektir ve reddedilme beklenen yanıttır.",
      },
      {
        symptom: "Telefondan gelen komutlar hiçbir şey yapmıyor",
        cause:
          "Köprü, PATH üzerinde bir popopx-chat daemon'ı ister ve düğüm yedeksiz olarak tam olarak tek bir çalıştırılabilir dosyayı yoklar. Daemon yokken menü çubuğu popopx-chat not installed yazar; kapalı bir motor da zaten hiçbir şey yanıtlamaz.",
        fix:
          "Önce menü çubuğundaki köprü satırına, sonra motor anahtarlarına, sonra denetim günlüğüne bakın. Reddedilmiş bir komutla hiç ulaşmamış bir komut, telefondan bakınca aynı görünür.",
      },
      {
        symptom: "Telefon uzaktayken sonuçlar gelmeyi kesiyor",
        cause:
          "Dışa teslimat kendi daemon'ınız ve aktarıcınız üzerinden gider; bu yüzden dış trafiği kesen bir güvenlik duvarı, aktarıcıyı taşımayan bir VPN ya da çıkmış bir daemon buradan bakınca aynı görünür. Sonuçlar kaybolmaz: outbox/ içinde sıraya girer ve otuz güne kadar yeniden dener.",
        fix:
          "Daemon'ın çalıştığını doğrulayın, sonra trafiği süzen şeyde düğümün dış bağlantılarına izin verin ve işi yeniden çalıştırmak yerine kuyruğun boşalmasını bekleyin.",
      },
      {
        symptom: "İndir kartı “sabitlenen sürüm gösteriliyor” yazıyor",
        cause:
          "api.github.com erişilemezdi, engellendi, hız sınırına takıldı ya da indirilebilir bir varlık vermeden yanıtladı. Sayfa bu durumda tahmin etmek yerine pakete derlenmiş sürümü çizer.",
        fix:
          "Sürümler sayfasını doğrudan açın. Sitede başka hiçbir şey o çağa ihtiyaç duymaz ve başarısız bir çağrı yüzünden sayfanın hiçbir bölümü boş kalmaz.",
      },
    ],
    escalation:
      "Kalanın çoğunu iki dosya yanıtlar: sihirbazın yaptıklarının hesabı logs/install.log içinde, sonrasında olan her şey logs/node.log içinde. İkisi de veri kökünün altında düz metindir ve konsolun kendi günlük kanalı aynı olayları canlı gösterir. Bir arıza bunları okuduktan sonra da sürerse, düğüm ile entegrasyonların birlikte test ettiği sözleşme depodadır; sorun bildirimleri popopx-mac-node üzerinde açılır.",
  },

  releases: {
    heading: "Sürümler, sağlama değerleri ve tüm kaynak ağacı",
    sub:
      "Düğümün üzerinden derlendiği her şey tek bir AGPL-3.0-only depoda; yayımlanan her görüntü, açılmadan önce bir sağlama değerine karşı kontrol edilebilir. Bu bölüm, sitenin tarif etmeyi bırakıp göstermeye başladığı yer.",
    assetsHeading: "Yayımlanan varlıklar",
    assetsColumns: ["Dosya", "Nedir", "Boyut"],
    assetKinds: {
      dmg: "Sürükle-bırak ile /Applications'a giden disk görüntüsü; universal arm64 ve x86_64. Alınması gereken dosya bu.",
      sidecar: "Tek bir dosya için sağlama değeri; onu üreten paketleme adımı tarafından yazılmış.",
      zip: "İmzalı uygulama paketinin ZIP yükü olarak hâli; bir disk görüntüsü yerine bir arşiv isterseniz.",
      sums: "Sürümdeki tüm çıktıları sağlama değerleriyle birlikte listeleyen bir içerik listesi.",
    },
    missingAsset:
      "Her sürüm her varlığı yayımlamaz. Eski sürümlerde yalnızca disk görüntüsü ve onun yan dosyası vardır; aşağıdaki kontrol de bu yüzden gerçekten açtığınız sürümü okur.",
    verifyHeading: "Bir şey açmadan önce doğrulayın",
    verifyBody:
      "İki komut; indirdiğiniz klasörde çalıştırın. Tercih edilen biçim içerik listesi biçimidir ve güncel sürümün yayımladığı da bu.",
    verifySumsBody:
      "Bir sürüm listesi her çıktıyı sıralar; dolayısıyla indirmediğiniz bir dosya eksik sayılmaz, beklenir: --ignore-missing geçirin ve aldığınız dosyaya denk gelen satırı okuyun. Liste dosyası, adını verdiği yükü paketleyen adımla aynı adımda yazılır.",
    verifySidecarBody:
      "Eski bir sürüm bunun yerine tek varlıklı bir yan dosya yayımlar ve karşılaştırılacak dosya odur. build 4 ikisini de yayımlar ve ikisi aynı sağlama değerini adlandırır; bir sürümün dosyaları anlaşmazsa listeye inanın, çünkü yan dosya aynı sürümün başka bir derlemesinden gelmiş olabilir.",
    pipelineHeading: "Bir sürüm buraya nasıl geliyor",
    pipelineBody:
      "Bir etiket göndermek, bir macOS çalıştırıcısında sürüm iş akışını başlatır: ağacı derler, sözleşme testlerini çalıştırır, universal görüntüyü Scripts/build_dmg.sh ile paketler, mutlak yol içeren bir sağlama dosyasının yayımlanmasını reddeder ve DMG ile yan dosyasını yükler. Bu, ad-hoc yoldur. İmzalı build 4 görüntüsü, ZIP dosyası ve SHA256SUMS.txt ise Scripts/build-release.sh betiğinden gelir: Developer ID kimliğiyle, hardened runtime ile ve güvenli bir zaman damgasıyla imzalar, Apple'ın noter hizmetine gönderir ve kaydı hem pakete hem görüntüye iliştirir. 6de6eb8'deki etiket iş akışı o betiği çağırmıyor, dolayısıyla imzalı varlıklar iş akışının çıktısı olamaz. İki yol da aynı yerde bitiyor: bu sayfaya güvenmeden doğrulayabileceğiniz bir sağlama değeri.",
    supportedHeading: "Bugün çalışanlar",
    supportedItems: [
      "On motorun hepsi; her biri kendi eylem kümesi ve reddetme yollarıyla, ayrı ayrı açılıyor.",
      "sysctl'den otomatik katman seçimi ve her katmanın ima ettiği model çekmesi.",
      "İmzalı, tek kullanımlık, on beş dakikalık eşleştirme ve yalnızca loopback'e bağlanan konsol.",
      "Aynı konsol ve aynı jeton üzerinden çalışan TypeScript köprüsü ile iki ajan arayüzü.",
      "Özel asistan ve God's Eye View köprüsü: makbuza bağlı yazmalar, yalnızca loopback'e açık bir araç kapısı ve ikisi de varsayılan olarak kapalı.",
    ],
    roadmapHeading: "Henüz yok",
    roadmapSub:
      "Bunlar bir sayfada vaat olarak değil, depoda plan olarak yazılmış durumda. Hiçbiri bugün çalışmıyor.",
    roadmap: [
      {
        title: "Kendi makinenizde motor motor ölçümler",
        body:
          "Kullanım panosu ve arıza zaman çizelgelerinin telefona geri taşınması: önünüzdeki kutudan alınan token ve watt okumaları, donanım tablosundaki tahminlerin yerine geçer.",
      },
      {
        title: "Sıkı mesh yalıtımı ve dışa aktarılabilir defter",
        body:
          "Ödünç verilen kapasite için daha güçlü bir hapsedme ve uygulamada okumak yerine uygulamadan dışarı taşıyabileceğiniz bir defter.",
      },
      {
        title: "Birden fazla varis için parçalanmış emanet",
        body:
          "Halefiyet malzemesinin birden çok varise bölünmesi ve sağlık motorunda daha fazla rapor düzeni.",
      },
      {
        title: "İmzalı dağıtım kanalları ve daha çok video katmanı",
        body:
          "Noter onayının ötesinde bir mağaza kanalı değerlendirmesi ve merdivenin henüz kapsamadığı bellek aralıkları için ek LTX katmanları.",
      },
    ],
    sourceHeading: "Kaynak ve lisansın zorunlu kıldıkları",
    sourceBody:
      "Tek depo, AGPL-3.0-only, kapalı çekirdek yok: motorlar, konsol, filigranlama ve defterin hepsi onun içinde; kör imzalı kimlik bilgisi kodu ile kriptografik parametre kaydı ise yanındaki popopxmq içinde açık. Madde 13 alışıldık şekilde uygulanır: özgürce çalıştırın, inceleyin, değiştirin ve değiştirdiğiniz bir düğümü başkalarına hizmet olarak sunarsanız, onlara karşılık gelen kaynağınızı da sunun. Uyumluluğun toplam bedeli budur.",
    licenceHeading: "Kapsam dışında kalanlar",
    licenceBody:
      "AGPL-3.0, POPOPX adı ya da logosu için hiçbir lisans vermez. Bir çatal, markalar dışında her şeyi alabilir: yazılımı yeniden adlandırın, markaları değiştirin, kodu koruyun.",
  },

  faq: {
    heading: "İnsanların gerçekten sorduğu sorular",
    sub: "Kısa yanıtlar; garanti edemediğimiz kısım da görünür bırakıldı.",
    items: [
      {
        q: "Bunların herhangi biri senin sunucularında mı çalışıyor?",
        a: "Hayır. On motor için komutlar iOS istemcisinden, kendi popopx-chat kuyruğun üzerinden uçtan uca şifreli gelir; çıkarım, işleme, depolama ve fiziksel yürütmenin tamamı senin Mac'inde olur. Hiçbir adım bizim altyapımıza ihtiyaç duymaz ve düğümde barındırılan bir çıkarım API'sine ulaşan tek bir kod yolu yoktur — model istemcisi 127.0.0.1'e sabitlenmiştir.",
      },
      {
        q: "Neyi kaydetmem gerekiyor?",
        a: "Hiçbir şey. Ürünün hiçbir yerinde hesap, telefon numarası, e-posta adresi veya reklam tanımlayıcısı yoktur. Telefonu düğüme eşleştirmek tek bir QR taramasıdır; web konsolu yalnızca loopback'e bağlanır, her açılışta rastgele bir jeton yeniler ve yerel ağının geri kalanından erişilemez.",
      },
      {
        q: "Düğüm cihazlar için yerel ağımı tarıyor mu?",
        a: "Hayır. Keşif, bu Mac'in zaten sahip olduklarını bildiren salt okunur bir GET /v1/discovery/capabilities isteğidir: loopback üzerindeki Ollama, yetkilendirdiğiniz çalışma klasörleri, EventKit izin durumu ve ayarlara yazdığınız bir yerel ağ ana bilgisayarına TCP bağlantısının kurulup kurulamadığı. Kodda ne bir mDNS duyurucusu, ne port taraması ne de alt ağ taraması var. Bir hedef yalnızca loopback, bir RFC 1918 sabiti, bir ULA adresi ya da .local adıysa kabul edilir; genel bir adres bir soket açılmadan reddedilir ve imzalı derleme DNS sorgusu gerektirecek ana bilgisayar adlarını kabul etmez. build 4'ün yerel ağ Keşfi varsayılan olarak kapalıdır ve yalnızca yapılandırdığınız klasörleri, beslemeleri ve MCP sunucularını izler; yenilemeler arasında altmış saniyelik bir taban vardır.",
      },
      {
        q: "Bir MCP aracı ya da akıllı ev komutu bensiz çalışabilir mi?",
        a: "Salt okunur olan çalışabilir, sahibin yapılandırdığı sınırın içinde. Değişiklik yapan çalışamaz: pending_user_approval içinde bir öneriye dönüşür ve öneri kimliğine ve fiiline bağlı, on beş dakika geçerli 24 karakterlik bir HMAC-SHA256 makbuzu üreten bir onay gerektirir. Yürütücü tam olarak gösterilen yükü çalıştırır, eylem yerel denetim günlüğüne kaydedilir ve köprüyü kapatmak bekleyenleri geçersiz kılar. Kilit, alarm, siren, kamera ya da robot süpürge eylemi, aksi hâlde izin verici bir yapılandırmanın içinde bile yüksek riskli sayılır.",
      },
      {
        q: "Eşleştirme QR kodu şifreli mi?",
        a: "Mühürlü — ve aradaki fark önemli. QR kodu ve kopyalama düğmesi https://popopx.chat/i/v1/ ve ardından, anahtarı uygulamanın kendi kaynağında yayımlanan bir girdiden HKDF-SHA256 ile türetilen bir ChaCha20-Poly1305 kutusu taşır. Bu, SMP kuyruk adresini bağlantı önizlemelerinden, ekran görüntülerinden ve iletmelerden saklar; içeriği uygulamaya sahip olan herkesten saklamaz. Cihazı yetkilendiren şey içindeki imzalı, tek kullanımlık ve on beş dakikalık kimlik bilgisidir; ham PPXNODE1 kodu ve davet URI'si ise sihirbazın ön yüzünde değil, konsolun tanılama çekmecesinde kalır.",
      },
      {
        q: "Neden AGPL-3.0 ve Madde 13 beni neye zorunlu tutuyor?",
        a: "Düğüme ait her kaynak dosyası AGPL-3.0-only; bu, onu özgürce çalıştırabileceğini, inceleyebileceğini, değiştirebileceğini ve dağıtabileceğini anlamına gelir. Madde 13 ağ hükmünü ekler: değiştirilmiş bir düğümü başkalarına hizmet olarak sunarsan, onlara karşılık gelen kaynağı da sunmak zorundasın. Uyumluluğun toplam bedeli budur ve projenin çalıştırılmasının ücretsiz olmasını sağlayan da bu.",
      },
      {
        q: "Filigranalama ya da hesaplama kredisi protokolü kapalı mı tutuluyor?",
        a: "Hayır, ve kontrol edilmesini en çok beklediğimiz iddia da budur. BBS+ ve BLS12-381 kimlik bilgisi kodu, yetki mantığı ve kriptografik parametre kaydı popopxmq içinde açıktır; GOP ve frekans alanı filigranalama ile bunun kör çözücüsü bu depodadır. Ticari hattın sattığı şey veri merkezi, çağrı nöbeti, dağıtım kanalı ve uygunluk kağıt işidir — asla kaynak kodu kapısı değil.",
      },
      {
        q: "POPOPX adı ve logosuyla bir çatal yayımlayabilir miyim?",
        a: "Hayır. Markalar AGPL-3.0 ile lisanslanmaz ve hiçbir destek katmanı bunları vermez. Politika, bir çatalın hiçbir şeye mal olmayacağı tek çözümü ister: yazılımı yeniden adlandır, markaları değiştir, kodu koru. Marka kullanımı ayrı, yazılı bir lisans gerektirir.",
      },
      {
        q: "Donanım tablosundaki sayılara ne kadar güveneyim?",
        a: "Altındaki cümlenin söylediği kadar. Bunlar kaba taslak hesaplar, senin makinenin ölçümleri değil, ve gerçek aktarım hızı ısı durumuna ve yüke göre iki-üç kat değişir. Düğümün bir sonraki sürümü bunların yerine, bizzat kullandığın makine üzerinde ölçülmüş motora özgü token ve watt okumalarını koyar.",
      },
      {
        q: "Hangi makineler destekleniyor?",
        a: "Apple Silicon üzerinde macOS 14 veya sonrası. Katman sıralaması, Metal ve MLX birleşik belleği varsayar; MLX Intel üzerinde çalışmaz, dolayısıyla Universal DMG bir x86_64 dilimi taşısa bile Intel Mac bu projenin hedeflediği bir ana makine değildir. Uygulamanın kendisi üçüncü taraf kitaplık bağlamaz: yalnızca Apple framework'leri. Sürdüğü şeyler tasarım gereği ayrıdır — Ollama, FFmpeg ve LTX-2.5 ağırlıkları motorların çağırdığı yerel araçlardır ve her motor hangilerine ihtiyaç duyduğunu belirtir.",
      },
      {
        q: "Asistan benim olmadığım bir anda posta gönderebilir ya da bir cihazı değiştirebilir mi?",
        a: "Hayır. Okuma ve taslak hazırlama yereldir ve salt okunurdur; bir gönderim ya da onarım, pending_user_approval içinde bir öneridir. Yürütücü yalnızca işleme, hedefe, özete ve son kullanma zamanına bağlı, 900 saniye geçerli ve bir kez kullanılabilen 32 karakterlik bir HMAC-SHA256 makbuzunu kabul eder. Posta kimlik bilgileri macOS Keychain'inde yaşar ve salt okunur bir Home Assistant köprüsü, geçerli bir makbuza rağmen onarımı reddeder.",
      },
      {
        q: "God's Eye View köprüsü bulutu arıyor ya da ağımı tarıyor mu?",
        a: "Hayır. Bu Mac'te kurduğunuz bir programı başlatır, onu 127.0.0.1'e sabitler, giriş betiklerini symlink çözümlemesinden sonra doğrular ve kaynağı yalnızca siz açarsanız çeker. Düğüm, besleme anahtarları için isteğe bağlı Keychain referansları tutar; beslemeleri yerel programınız her sağlayıcının koşulları altında çeker ve düğüm onları asla vekil olarak geçirmez ya da önbelleğe almaz. Tuval yazmaları ve rapor dışa aktarmaları, sunucu onları salt okunur saysa bile pending_user_approval olur.",
      },
    ],
  },

  footer: {
    tagline: "POPOPX ekosistemi için yerel hesaplama. Çalıştırmak senin, okumak senin.",
    licenceHeading: "Lisans",
    licenceBody:
      "Düğümün kaynağı AGPL-3.0-only. Bu projenin ürettiği görsel varlıklar AGPL-3.0-only ya da senin seçimine göre CC0-1.0.",
    trademarkHeading: "Ticari marka",
    trademarkBody:
      "POPOPX, POPOPX Chat ve POPOPX logosu, POPOPX Chat projesinin markalarıdır. Bu sitede kullanılan simge, değiştirilmemiş POPOPX iOS uygulama simgesidir. Politikayı popopx-chat deposundaki TRADEMARK-POPOPX.md dosyasında görebilirsin.",
    privacyHeading: "Bu sayfa",
    privacyBody:
      "Analitik yok, çerez yok, parmak izi çıkarma yok, üçüncü taraf betik yok, harici CDN yok. Sayfanın yapabildiği tek dış istek, sürüm varlıkları listesi için api.github.com isteğidir ve bu çağrı başarısız olduğunda sabitlenmiş bir bağlantıya düşer.",
    appleNotice:
      "Apple ile ilişkili değildir. macOS, iOS, Apple Silicon ve Metal, Apple Inc. ticari markalarıdır.",
    sourceRepo: "Mac Node kaynağı",
    iosRepo: "iOS istemcisi kaynağı",
    backToTop: "Yukarı dön",
  },
};

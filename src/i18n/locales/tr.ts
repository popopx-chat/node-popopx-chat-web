import type { Dictionary } from "../types";

export const tr: Dictionary = {
  dir: "ltr",

  nav: {
    engines: "Motorlar",
    architecture: "Mimari",
    hardware: "Donanım",
    install: "Kurulum",
    faq: "SSS",
    github: "GitHub",
    download: "İndir",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    chooseLanguage: "Dil",
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Mac'in",
    titleAccent: "hesap katmanı oluyor",
    subtitle:
      "POPOPX Mac Node, POPOPX iOS istemcisine ait on Discover motorunun yerel hesaplamasını ve deterministik yürütmesini üstlenir. Bulut yok, hesap yok, telemetri yok, uçtan uca şifreleme var.",
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
      ".dmg dosyasını ve .sha256 yan dosyasını aynı klasöre kaydet, ardından shasum -a 256 -c komutunu kalıp dosyaya değil yan dosyaya karşı çalıştır. Yan dosya tek bir sağlama değeri ve tek bir göreli dosya adı taşır; beklenen yanıt POPOPX-Mac-Node-Universal.dmg: OK.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Kendi donanımın",
    statStorage: "Fiziksel yerel depolama",
    statIdentity: "Hesap yok, kimlik yok",
    statSource: "Baştan sona AGPL-3.0",
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
      "48 GB altı — hafif çıkarım; ağır video işleri yerelde işlenmek yerine Edge Compute Mesh'e önerilir.",
    ],
  },

  install: {
    heading: "Üç dakika, sonra sana ait",
    sub:
      "Düğümün kurulum programı, daemon hesabı ve kaydedilecek hiçbir şeyi yoktur. O, loopback'e bağlanan tek bir menü çubuğu uygulamasıdır.",
    steps: [
      {
        title: "DMG dosyasını doğrula ve aç",
        body:
          "Releases üzerinden POPOPX-Mac-Node-Universal.dmg ve .sha256 dosyalarını, ikisini de aynı klasöre al ve hiçbir şeyi açmadan önce kontrol et: shasum -a 256 -c POPOPX-Mac-Node-Universal.dmg.sha256 komutu OK yazmalıdır. Uygulamayı /Applications klasörüne sürükle.",
      },
      {
        title: "Yerel motorları kur",
        body:
          "Menü çubuğu öğesini aç ve konsol sihirbazını başlat. Birinci adım çipin, birleşik belleğin ve SSD'nin profilini çıkarır, kata uyan Qwen3.8 kuantizasyonunu indirir, ltx2 çalışma alanını başlatır ve kurulum günlüğünü çalışırken sayfaya akıtır.",
      },
      {
        title: "iPhone'u eşleştir",
        body:
          "Konsoldaki eşleştirme QR kodunu POPOPX iOS istemcisiyle tara. O tek tarama SMP köprüsünü kurar; bundan sonra Discover hizmet hesapları düğümünle konuşur, başka hiçbir şeyle değil.",
      },
      {
        title: "Motorları aç",
        body:
          "On anahtar. Bir motor yalnızca sen etkinleştirirsen çalışır ve yerel model gerektirmeyen dördü — fiziksel kilitlenme, zamana kilitli kasa, filigran izleyici, laboratuvar raporu okuyucusu — tek bir ağırlık bile indirilmeden çalışır. FFmpeg yine de çağrılır; model yığını çağrılmaz.",
      },
    ],
    bridgeTitle: "Motorları kendi betiğinle sür",
    bridgeBody:
      "Entegrasyon klasörü bir TypeScript köprüsü ile iki ajan arayüzü barındırır. Yeni bir port açmaz, ikinci bir daemon başlatmaz: 127.0.0.1:18920 üzerindeki konsolu ve süreç başına tek seferlik jetonu yeniden kullanır, telefonun gönderdiği NODE_CMD sinyalleşmesinin aynısını gönderir. Kilitlenme eylemi çift onay ister — allowLockdown true olmalı ve PPX_BRIDGE_SECRET en az on altı karakter olmalı — ve bir reddetme, gerçekleştiğini görebilmen için eklenti günlüğüne yazılır.",
    requirementTitle: "Tek dürüst ön koşul",
    requirementBody:
      "Düğümün kendi sihirbazının 2. adımı, eşleştirme QR kodu ve SMP köprüsü, hepsi PATH yolunda bir popopx-chat sohbet daemon'ı ister. Düğüm tam olarak bir çalıştırılabilir dosyayı yoklar ve yedeği yoktur; çünkü bir upstream derlemesi bir sürüm satırına yanıt verir, ardından gelen her komutta başarısız olur. On motorun kendisi buna ihtiyaç duymaz.",
    copyCommand: "Komutu kopyala",
    commandCopied: "Kopyalandı",
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
        a: "Altındaki cümlenin söylediği kadar. Bunlar kaba taslak hesaplar, senin makinenin ölçümleri değil, ve gerçek aktarım hızı ısı durumuna ve yüke göre iki-üç kat değişir. Düğümün 1.1 sürümü bunların yerine, bizzat kullandığın makine üzerinde ölçülmüş motora özgü token ve watt okumalarını koyar.",
      },
      {
        q: "Hangi makineler destekleniyor?",
        a: "Apple Silicon üzerinde macOS 14 veya sonrası. Katman sıralaması, Metal ve MLX birleşik belleği varsayar; MLX Intel üzerinde çalışmaz, dolayısıyla Universal DMG bir x86_64 dilimi taşısa bile Intel Mac bu projenin hedeflediği bir ana makine değildir. Uygulamanın kendisi üçüncü taraf kitaplık bağlamaz: yalnızca Apple framework'leri. Sürdüğü şeyler tasarım gereği ayrıdır — Ollama, FFmpeg ve LTX-2.5 ağırlıkları motorların çağırdığı yerel araçlardır ve her motor hangilerine ihtiyaç duyduğunu belirtir.",
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

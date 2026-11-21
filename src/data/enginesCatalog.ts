/* GENERATED FILE - do not edit by hand.
 * Source of truth: the POPOPX iOS Discover catalog and the Mac Node EngineKind.
 * Engine product names carry only en/zh-Hans/zh-Hant spellings because the shipping
 * iOS catalogs have no name entry in any of the 18 locales; every other language
 * reads the English product name, exactly as the phone and the node do.
 */

import type { LocaleCode } from "../i18n/types";

export type EngineId =
  "shadow_cos" | "zero_trust_warroom" | "zerotrace_studio" | "solo_autopilot" | "creator_paywall_hub" | "edge_compute_mesh" | "morning_tv" | "phantom_sentinel" | "chrono_ark" | "health_sentinel";

export type SectionId = "productivity" | "compute" | "sanctuary";

export interface EngineMenuAction {
  /** The token the node accepts on the NODE_CMD wire. Never localized. */
  action: string;
  label: Record<LocaleCode, string>;
}

export interface EngineName {
  en: string;
  "zh-Hans": string;
  "zh-Hant": string;
}

export interface EngineDefinition {
  id: EngineId;
  section: SectionId;
  /** 30-day cycle price in Compute Credits; null = metered, settled per job. */
  credits30d: number | null;
  substrate: string;
  lucideIcon: string;
  sfSymbol: string;
  deterministic: boolean;
  worksWithoutLocalModels: boolean;
  name: EngineName;
  tagline: Record<LocaleCode, string>;
  menu: EngineMenuAction[];
  highlights: Record<LocaleCode, string[]>;
}

export const SECTIONS: SectionId[] = ["productivity", "compute", "sanctuary"];

export const SECTION_LABELS: Record<
  SectionId,
  { title: Record<LocaleCode, string>; filter: Record<LocaleCode, string> }
> = {
  productivity: {
    title: { bg: "Работа и продуктивност", cs: "Práce a produktivita", de: "Arbeit & Produktivität", en: "Work & Productivity", es: "Trabajo y productividad", fi: "Työ & Tuottavuus", fr: "Travail & productivité", hu: "Munka és hatékonyság", it: "Lavoro e produttività", ja: "仕事と効率", nl: "Werk & productiviteit", pl: "Praca i produktywność", ru: "Работа и продуктивность", th: "งาน & ประสิทธิภาพ", tr: "İş & Üretkenlik", uk: "Робота й продуктивність", "zh-Hans": "工作与效率", "zh-Hant": "工作與效率" },
    filter: { bg: "Продуктивност", cs: "Produktivita", de: "Produktivität", en: "Productivity", es: "Productividad", fi: "Tuottavuus", fr: "Productivité", hu: "Hatékonyság", it: "Produttività", ja: "効率", nl: "Productiviteit", pl: "Produktywność", ru: "Продуктивность", th: "ประสิทธิภาพการทำงาน", tr: "Üretkenlik", uk: "Продуктивність", "zh-Hans": "效率", "zh-Hant": "效率" },
  },
  compute: {
    title: { bg: "Изчисления и Mesh", cs: "Výpočet a mesh", de: "Rechenleistung & Mesh", en: "Compute & Mesh", es: "Cálculo y Mesh", fi: "Laskenta & Mesh", fr: "Calcul & maillage", hu: "Számítás és mesh", it: "Calcolo e Mesh", ja: "計算と Mesh", nl: "Rekenkracht & mesh", pl: "Obliczenia i sieć mesh", ru: "Вычисления и Mesh", th: "การประมวลผล & Mesh", tr: "Hesaplama & Mesh", uk: "Обчислення й Mesh", "zh-Hans": "算力与 Mesh", "zh-Hant": "算力與 Mesh" },
    filter: { bg: "Локални изчисления", cs: "Výpočet na okraji sítě", de: "Dezentrale Rechenleistung", en: "Edge compute", es: "Cálculo en el dispositivo", fi: "Reunalaskenta", fr: "Calcul en périphérie", hu: "Peremszámítás", it: "Calcolo sul dispositivo", ja: "エッジ計算", nl: "Verwerken aan de rand", pl: "Obliczenia brzegowe", ru: "Граничные вычисления", th: "การประมวลผลในเครื่อง", tr: "Uç hesaplama", uk: "Граничні обчислення", "zh-Hans": "边缘算力", "zh-Hant": "邊緣算力" },
  },
  sanctuary: {
    title: { bg: "Живот и убежище", cs: "Život a útočiště", de: "Leben & Rückzugsort", en: "Life & Sanctuary", es: "Vida y refugio", fi: "Elämä & Turvasuoja", fr: "Vie & chez soi", hu: "Élet és menedék", it: "Vita e rifugio", ja: "暮らしと安心", nl: "Leven & thuishaven", pl: "Życie i przystań", ru: "Жизнь и уют", th: "ชีวิตและพื้นที่ส่วนตัว", tr: "Yaşam & Sığınak", uk: "Життя й затишок", "zh-Hans": "生活与守护", "zh-Hant": "生活與守護" },
    filter: { bg: "Дом", cs: "Domov", de: "Zuhause", en: "Home", es: "Hogar", fi: "Koti", fr: "Maison", hu: "Otthon", it: "Casa", ja: "家庭", nl: "Thuis", pl: "Start", ru: "Дом", th: "บ้าน", tr: "Ev", uk: "Дім", "zh-Hans": "家庭", "zh-Hant": "家庭" },
  },
};

export const PRICE_FORMAT: Record<LocaleCode, string> =
{
    bg: "%lld Изчислителни точки / 30 дни",
    cs: "%lld výpočetních bodů / 30 dní",
    de: "%lld Rechenpunkte / 30 Tage",
    en: "%lld Compute Credits / 30 days",
    es: "%lld créditos de cálculo / 30 días",
    fi: "%lld laskentapistettä / 30 päivää",
    fr: "%lld crédits de calcul / 30 jours",
    hu: "%lld számítási kredit / 30 nap",
    it: "%lld Compute Credits / 30 giorni",
    ja: "%lld 計算クレジット / 30 日間",
    nl: "%lld rekenpunten / 30 dagen",
    pl: "%lld punktów obliczeniowych / 30 dni",
    ru: "%lld вычислительных баллов / 30 дней",
    th: "%lld เครดิตการประมวลผล / 30 วัน",
    tr: "%lld hesaplama kredisi / 30 gün",
    uk: "%lld обчислювальних балів / 30 днів",
    "zh-Hans": "%lld 算力点 / 30 天",
    "zh-Hant": "%lld 算力點 / 30 天",
  };

export const PRICE_METERED: Record<LocaleCode, string> =
{
    bg: "Таксува се и се разплаща на задача",
    cs: "Měřeno, účtováno za úkol",
    de: "Aufwendungsabhängig, pro Auftrag abgerechnet",
    en: "Metered, settled per job",
    es: "Con medición y liquidación por tarea",
    fi: "Mitattu, maksetaan työn mukaan",
    fr: "Au mesurage, réglé à la tâche",
    hu: "Mérve, feladatonként elszámolva",
    it: "A consumo, regolato per attività",
    ja: "従量測定・ジョブごとに精算",
    nl: "Gemeten, per taak afgerekend",
    pl: "Mierzone i rozliczane za każde zadanie",
    ru: "Учёт по задачам, расчёт за каждую",
    th: "วัดและชำระตามงานแต่ละชิ้น",
    tr: "Ölçümlü, iş başına hesaplanır",
    uk: "Облік за завданнями, розрахунок за кожне",
    "zh-Hans": "按量计量，按任务结算",
    "zh-Hant": "按量計量，按任務結算",
  };

export const ENGINES: EngineDefinition[] = [
  {
    id: "shadow_cos",
    section: "productivity",
    credits30d: 200,
    substrate: "Ollama / Qwen3.8",
    lucideIcon: "BrainCircuit",
    sfSymbol: "brain.head.profile",
    deterministic: false,
    worksWithoutLocalModels: false,
    name: { en: "Shadow Chief of Staff", "zh-Hans": "影子首席幕僚", "zh-Hant": "影子首席幕僚" },
    tagline: { bg: "Ежедневен локален брифинг и подсказки за срещи на живо", cs: "Denní místní přehled a tipy pro živé porady", de: "Tägliches lokales Briefing und Stichwortvorlagen für Live-Meetings", en: "Daily local briefing and live meeting prompts", es: "Resumen diario local y guiones para reuniones en directo", fi: "Päivittäinen paikallinen katsaus ja live-palaverin kehotteet", fr: "Briefing local quotidien et prompteur pour réunions en direct", hu: "Napi helyi eligazítás és élő megbeszélésekhez súgók", it: "Riepilogo locale quotidiano e suggerimenti per riunioni dal vivo", ja: "毎日のローカルブリーフィングと会議中のリアルタイムプロンプト", nl: "Dagelijkse lokale briefing en live vergaderhulp", pl: "Codzienny lokalny briefing i podpowiedzi na żywe spotkania", ru: "Ежедневная локальная сводка и подсказки для живых встреч", th: "สรุปรายวันในเครื่อง และตัวช่วยเตือนการประชุมสด", tr: "Günlük yerel brifing ve canlı toplantı yönergeleri", uk: "Щоденне локальне зведення й підказки для живих зустрічей", "zh-Hans": "每日本地简报与实时会议提示", "zh-Hant": "每日本地簡報與實時會議提示" },
    menu: [
      { action: "briefing", label: { bg: "Резюме с действията за деня", cs: "Dnešní přehled úkolů", de: "Heutige Aufgabenübersicht", en: "Today's action brief", es: "Resumen de tareas de hoy", fi: "Päivän toimintakatsaus", fr: "Synthèse des actions du jour", hu: "Mai feladatösszefoglaló", it: "Riepilogo attività di oggi", ja: "今日のアクションブリーフ", nl: "De actiebrief van vandaag", pl: "Dzisiejszy brief działań", ru: "Сегодняшняя сводка задач", th: "สรุปสิ่งที่ต้องทำวันนี้", tr: "Bugünkü işlem özeti", uk: "Сьогоднішнє зведення завдань", "zh-Hans": "今日行动简报", "zh-Hant": "今日行動簡報" } },
      { action: "negotiation_prompt", label: { bg: "Подсказки за срещи на живо", cs: "Tipy pro živé porady", de: "Stichwörter für Live-Meetings", en: "Live meeting prompts", es: "Guiones de reunión en directo", fi: "Live-palaverin kehotteet", fr: "Prompteur pour réunions en direct", hu: "Súgók élő megbeszélésekhez", it: "Suggerimenti per riunioni dal vivo", ja: "会議中のリアルタイムプロンプト", nl: "Live-prompts voor vergaderingen", pl: "Podpowiedzi na żywe spotkania", ru: "Подсказки для живых встреч", th: "ตัวช่วยเตือนการประชุมสด", tr: "Canlı toplantı yönergeleri", uk: "Підказки для живих зустрічей", "zh-Hans": "实时会议提示", "zh-Hant": "實時會議提示" } },
      { action: "generate", label: { bg: "Попитайте локалната база знания", cs: "Zeptat se místní znalostní báze", de: "Lokale Wissensdatenbank fragen", en: "Ask the local knowledge base", es: "Consulta la base de conocimientos local", fi: "Kysy paikallisesta tietokannasta", fr: "Interroger la base de connaissances locale", hu: "Helyi tudásbázis megkérdezése", it: "Interroga la base di conoscenza locale", ja: "ローカルのナレッジベースに質問", nl: "Vraag het aan de lokale kennisbank", pl: "Zapytaj lokalną bazę wiedzy", ru: "Спросить локальную базу знаний", th: "ถามฐานความรู้ในเครื่อง", tr: "Yerel bilgi bankasına sor", uk: "Запитати локальну базу знань", "zh-Hans": "询问本地知识库", "zh-Hant": "詢問本地知識庫" } },
    ],
    highlights: {
      bg: ["Работи на вашия собствен Mac", "Чете само папките, които разрешите", "Работи без акаунт"],
      cs: ["Běží na vašem Macu", "Čte pouze složky, které oprávníte", "Funguje bez účtu"],
      de: ["Läuft auf deinem eigenen Mac", "Liest nur die Ordner, die du erlaubst", "Funktioniert ohne Konto"],
      en: ["Runs on your own Mac", "Reads only the folders you authorise", "Works with no account"],
      es: ["Se ejecuta en tu propio Mac", "Solo lee las carpetas que autorices", "Funciona sin cuenta"],
      fi: ["Toimii omalla Macillasi", "Lukee vain kansioita, joille valtuutuksen annat", "Toimii ilman tiliä"],
      fr: ["Tourne sur votre propre Mac", "Ne lit que les dossiers que vous autorisez", "Fonctionne sans compte"],
      hu: ["A saját Maceden fut", "Csak az általad engedélyezett mappákat olvassa", "Működik fiók nélkül"],
      it: ["In esecuzione sul tuo Mac", "Legge solo le cartelle che autorizzi", "Funziona senza account"],
      ja: ["あなた自身の Mac 上で動作", "許可したフォルダだけを読み取ります", "アカウントなしで動作"],
      nl: ["Draait op je eigen Mac", "Leest alleen de mappen die je toestaat", "Werkt zonder account"],
      pl: ["Działa na Twoim własnym Macu", "Odczytuje tylko foldery, na które zezwalasz", "Działa bez konta"],
      ru: ["Работает на вашем Mac", "Читает только разрешённые вами папки", "Работает без аккаунта"],
      th: ["รันบน Mac ของคุณเอง", "อ่านเฉพาะโฟลเดอร์ที่คุณอนุญาต", "ใช้งานได้โดยไม่ต้องมีบัญชี"],
      tr: ["Kendi Mac'in üzerinde çalışır", "Yalnızca izin verdiğin klasörleri okur", "Hesap olmadan çalışır"],
      uk: ["Працює на вашому Mac", "Читає лише ті папки, які ви дозволили", "Працює без акаунта"],
      "zh-Hans": ["在你自己的 Mac 上运行", "只读取你授权的文件夹", "无需账号即可使用"],
      "zh-Hant": ["在你自己的 Mac 上運行", "只讀取你授權的檔案夾", "無需賬號即可使用"],
    },
  },
  {
    id: "zero_trust_warroom",
    section: "productivity",
    credits30d: 500,
    substrate: "FFmpeg + GOP slicer",
    lucideIcon: "Waves",
    sfSymbol: "water.waves",
    deterministic: false,
    worksWithoutLocalModels: true,
    name: { en: "Zero-Trust War Room", "zh-Hans": "零信任微团队暗室", "zh-Hant": "零信任微團隊暗室" },
    tagline: { bg: "Физически отделена екипна стая с проследяване чрез скрит воден знак", cs: "Fyzicky izolovaná týmová místnost se sledováním skrytého vodoznaku", de: "Physisch getrennter Teamraum mit Rückverfolgung über versteckte Wasserzeichen", en: "Physically isolated team room with blind watermark tracing", es: "Sala de equipo aislada físicamente con rastreo por marca de agua invisible", fi: "Fyysisesti eristetty tiimihuone näkymättömän vesileiman seurannalla", fr: "Salle d'équipe isolée physiquement, avec traçage par filigrane invisible", hu: "Fizikailag elkülönített csapatoszoba rejtett vízjel-követéssel", it: "Sala del team isolata fisicamente con tracciamento via filigrana invisibile", ja: "物理的に隔離されたチームルーム、不可視の透かしで追跡", nl: "Fysiek geïsoleerde teamruimte met tracing via onzichtbare watermerken", pl: "Fizycznie izolowany pokój zespołu ze śledzeniem ukrytego znaku wodnego", ru: "Физически изолированная командная комната с поиском по скрытым водяным знакам", th: "ห้องทีมที่แยกทางกายภาพ พร้อมแกะรอยด้วยลายน้ำที่ซ่อนอยู่", tr: "Görünmez filigran takibiyle fiziksel olarak izole takım odası", uk: "Фізично ізольована командна кімната з пошуком за прихованими водяними знаками", "zh-Hans": "物理隔离的团队房间，可用盲水印溯源", "zh-Hant": "物理隔離的團隊房間，可用盲水印溯源" },
    menu: [
      { action: "assign", label: { bg: "Създайте изолирана стая", cs: "Vytvořit izolovanou místnost", de: "Isolierten Raum erstellen", en: "Create isolated room", es: "Crear sala aislada", fi: "Luo eristetty huone", fr: "Créer une salle isolée", hu: "Elkülönített szoba létrehozása", it: "Crea sala isolata", ja: "隔離ルームを作成", nl: "Geïsoleerde ruimte aanmaken", pl: "Utwórz izolowany pokój", ru: "Создать изолированную комнату", th: "สร้างห้องแยกส่วน", tr: "İzole oda oluştur", uk: "Створити ізольовану кімнату", "zh-Hans": "创建隔离房间", "zh-Hant": "創建隔離房間" } },
      { action: "trace", label: { bg: "Проследете изтекло копие", cs: "Vystopovat unesenou kopii", de: "Weitergegebene Kopie zurückverfolgen", en: "Trace a leaked copy", es: "Rastrear una copia filtrada", fi: "Jäljitä vuodettu kopio", fr: "Retracer une copie divulguée", hu: "Kiszivárgott másolat nyomon követése", it: "Traccia una copia trapelata", ja: "漏えいしたコピーを追跡", nl: "Een uitgelekte kopie traceren", pl: "Wyśledź wyciekłą kopię", ru: "Отследить утечку копии", th: "แกะรอยสำเนาที่รั่วไหล", tr: "Sızdırılmış kopyayı takip et", uk: "Відстежити витік копії", "zh-Hans": "追溯泄露的副本", "zh-Hant": "追溯泄露的副本" } },
      { action: "registry", label: { bg: "Проверка на достъпа на членовете", cs: "Zkontrolovat přístup členů", de: "Mitgliederzugriff prüfen", en: "Audit member access", es: "Revisar el acceso de los miembros", fi: "Tarkista jäsenten pääsy", fr: "Contrôler l'accès des membres", hu: "Tagi hozzáférés ellenőrzése", it: "Controlla gli accessi dei membri", ja: "メンバーのアクセスを監査", nl: "Lidtoegang controleren", pl: "Sprawdź dostęp członków", ru: "Проверить доступ участников", th: "ตรวจสอบสิทธิ์การเข้าถึงของสมาชิก", tr: "Üye erişimini denetle", uk: "Перевірити доступ учасників", "zh-Hans": "审查成员访问", "zh-Hant": "審查成員訪問" } },
    ],
    highlights: {
      bg: ["Работи на вашия собствен Mac", "Скрит воден знак за всяко копие", "Работи без акаунт"],
      cs: ["Běží na vašem Macu", "Skrytý vodoznak v každé kopii", "Funguje bez účtu"],
      de: ["Läuft auf deinem eigenen Mac", "Verstecktes Wasserzeichen pro Kopie", "Funktioniert ohne Konto"],
      en: ["Runs on your own Mac", "Blind watermark per copy", "Works with no account"],
      es: ["Se ejecuta en tu propio Mac", "Marca de agua invisible en cada copia", "Funciona sin cuenta"],
      fi: ["Toimii omalla Macillasi", "Näkymätön vesileima jokaisessa kopiossa", "Toimii ilman tiliä"],
      fr: ["Tourne sur votre propre Mac", "Filigrane invisible par copie", "Fonctionne sans compte"],
      hu: ["A saját Maceden fut", "Rejtett vízjel minden másolaton", "Működik fiók nélkül"],
      it: ["In esecuzione sul tuo Mac", "Filigrana invisibile su ogni copia", "Funziona senza account"],
      ja: ["あなた自身の Mac 上で動作", "コピーごとに不可視の透かし", "アカウントなしで動作"],
      nl: ["Draait op je eigen Mac", "Onzichtbaar watermerk per kopie", "Werkt zonder account"],
      pl: ["Działa na Twoim własnym Macu", "Ukryty znak wodny na każdej kopii", "Działa bez konta"],
      ru: ["Работает на вашем Mac", "Скрытый водяной знак на каждой копии", "Работает без аккаунта"],
      th: ["รันบน Mac ของคุณเอง", "ลายน้ำที่มองไม่เห็นบนทุกสำเนา", "ใช้งานได้โดยไม่ต้องมีบัญชี"],
      tr: ["Kendi Mac'in üzerinde çalışır", "Her kopyada görünmez filigran", "Hesap olmadan çalışır"],
      uk: ["Працює на вашому Mac", "Прихований водяний знак на кожній копії", "Працює без акаунта"],
      "zh-Hans": ["在你自己的 Mac 上运行", "每份副本独立盲水印", "无需账号即可使用"],
      "zh-Hant": ["在你自己的 Mac 上運行", "每份副本獨立盲水印", "無需賬號即可使用"],
    },
  },
  {
    id: "zerotrace_studio",
    section: "productivity",
    credits30d: 300,
    substrate: "FFmpeg + Vision + Ollama",
    lucideIcon: "EyeOff",
    sfSymbol: "eye.slash",
    deterministic: false,
    worksWithoutLocalModels: false,
    name: { en: "Zero-Trace Studio", "zh-Hans": "零痕视觉脱敏工作台", "zh-Hant": "零痕視覺脫敏工作台" },
    tagline: { bg: "Премахване на идентифициращи белези на самото устройство и синтезиране на водещ", cs: "Odstranění otisků fotoaparátu a syntéza moderátora na zařízení", de: "Entfernen von Fingerabdrücken auf dem Gerät und Moderator-Synthese", en: "On-device fingerprint removal and presenter synthesis", es: "Borrado de huellas y síntesis de presentador, en el dispositivo", fi: "Laitteen sisäinen sormenjälkien poisto ja juontajan synteesi", fr: "Suppression des empreintes sur l'appareil et synthèse de présentateurs", hu: "Kamera-ujjlenyomatok törlése és műsorvezető-szintézis az eszközön", it: "Rimozione delle impronte e sintesi del presentatore, sul dispositivo", ja: "端末内でカメラ固有情報を除去しプレゼンターを合成", nl: "Op het apparaat: vingerafdrukken verwijderen en presentator samenstellen", pl: "Na urządzeniu: usuwanie odcisków i synteza prezentera", ru: "Локальное удаление отпечатков и синтез ведущего", th: "ลบจุดจำเพาะบุคคลในเครื่อง และสังเคราะห์ผู้บรรยาย", tr: "Cihaz üzerinde parmak izi silme ve anlatıcı sentezi", uk: "Локальне видалення відбитків і синтез ведучого", "zh-Hans": "在本机抹除相机指纹并合成主讲人形象", "zh-Hant": "在本機抹除相機指紋併合成主講人形象" },
    menu: [
      { action: "strip", label: { bg: "Премахнете чувствителните данни от изходните медии", cs: "Vyčistit zdrojová média", de: "Quellmedien bereinigen", en: "Sanitise source media", es: "Sanear los medios originales", fi: "Puhdista lähdemedia", fr: "Nettoyer les médias sources", hu: "Forrásanyagok megtisztítása", it: "Sanifica i file sorgente", ja: "ソースメディアをクリーニング", nl: "De bronmedia opschonen", pl: "Oczyść materiały źródłowe", ru: "Очистить исходные материалы", th: "กำจัดข้อมูลอ่อนไหวจากสื่อต้นทาง", tr: "Kaynak medyayı temizle", uk: "Очистити вихідні матеріали", "zh-Hans": "清洗源媒体", "zh-Hant": "清洗源媒體" } },
      { action: "anchor", label: { bg: "Сменете виртуалния водещ", cs: "Přepnout virtuálního moderátora", de: "Virtuellen Moderator wechseln", en: "Switch virtual presenter", es: "Cambiar de presentador virtual", fi: "Vaihda virtuaalijuontaja", fr: "Changer de présentateur virtuel", hu: "Virtuális műsorvezető váltása", it: "Cambia presentatore virtuale", ja: "仮想プレゼンターを切り替え", nl: "Wissel van virtuele presentator", pl: "Zmień wirtualnego prezentera", ru: "Сменить виртуального ведущего", th: "เปลี่ยนผู้บรรยายเสมือน", tr: "Sanal anlatıcıyı değiştir", uk: "Перемкнути віртуального ведучого", "zh-Hans": "切换虚拟主讲人", "zh-Hant": "切換虛擬主講人" } },
      { action: "broadcast", label: { bg: "Разпределете по канали", cs: "Distribuovat do kanálů", de: "Auf Kanäle verteilen", en: "Distribute to channels", es: "Distribuir a canales", fi: "Jaa kanaville", fr: "Diffuser sur les canaux", hu: "Közzététel csatornákon", it: "Distribuisci nei canali", ja: "チャンネルに配信", nl: "Verspreiden over kanalen", pl: "Rozsyłaj do kanałów", ru: "Разослать по каналам", th: "กระจายไปยังช่องต่าง ๆ", tr: "Kanallara dağıt", uk: "Розіслати каналами", "zh-Hans": "分发到频道", "zh-Hant": "分發到頻道" } },
    ],
    highlights: {
      bg: ["Премахва идентифициращи белези от камерата", "Работи на вашия собствен Mac", "Работи без акаунт"],
      cs: ["Odstraní otisky fotoaparátu", "Běží na vašem Macu", "Funguje bez účtu"],
      de: ["Entfernt Kamera-Fingerabdrücke", "Läuft auf deinem eigenen Mac", "Funktioniert ohne Konto"],
      en: ["Removes camera fingerprints", "Runs on your own Mac", "Works with no account"],
      es: ["Elimina huellas de cámara", "Se ejecuta en tu propio Mac", "Funciona sin cuenta"],
      fi: ["Poistaa kameroiden sormenjäljet", "Toimii omalla Macillasi", "Toimii ilman tiliä"],
      fr: ["Supprime les empreintes de la caméra", "Tourne sur votre propre Mac", "Fonctionne sans compte"],
      hu: ["Eltávolítja a kamera-ujjlenyomatokat", "A saját Maceden fut", "Működik fiók nélkül"],
      it: ["Rimuove le impronte della fotocamera", "In esecuzione sul tuo Mac", "Funziona senza account"],
      ja: ["カメラ固有情報を除去", "あなた自身の Mac 上で動作", "アカウントなしで動作"],
      nl: ["Verwijdert cameravingerafdrukken", "Draait op je eigen Mac", "Werkt zonder account"],
      pl: ["Usuwa odciski kamery", "Działa na Twoim własnym Macu", "Działa bez konta"],
      ru: ["Удаляет отпечатки камеры", "Работает на вашем Mac", "Работает без аккаунта"],
      th: ["ลบจุดจำเพาะบุคคลจากกล้อง", "รันบน Mac ของคุณเอง", "ใช้งานได้โดยไม่ต้องมีบัญชี"],
      tr: ["Kamera parmak izlerini kaldırır", "Kendi Mac'in üzerinde çalışır", "Hesap olmadan çalışır"],
      uk: ["Видаляє відбитки камери", "Працює на вашому Mac", "Працює без акаунта"],
      "zh-Hans": ["抹除相机指纹信息", "在你自己的 Mac 上运行", "无需账号即可使用"],
      "zh-Hant": ["抹除相機指紋信息", "在你自己的 Mac 上運行", "無需賬號即可使用"],
    },
  },
  {
    id: "solo_autopilot",
    section: "productivity",
    credits30d: 500,
    substrate: "LTX-2.5 MLX + FFmpeg",
    lucideIcon: "Clapperboard",
    sfSymbol: "film.stack",
    deterministic: false,
    worksWithoutLocalModels: false,
    name: { en: "Solo Autopilot", "zh-Hans": "一人公司全自动流水线", "zh-Hant": "一人公司全自動流水線" },
    tagline: { bg: "От темата до готовия клип, без намеса", cs: "Od tématu po hotový střih bez dozoru", de: "Vom Thema zum fertigen Clip, unbeaufsichtigt", en: "From topic to finished clip, unattended", es: "Del tema al clip terminado, sin supervisión", fi: "Aiheesta valmiiksi klipiksi, ilman valvojaa", fr: "Du sujet au montage fini, sans surveillance", hu: "Témától a kész klipig, felügyelet nélkül", it: "Dall'argomento alla clip finita, senza supervisione", ja: "企画から完成クリップまで無人で", nl: "Van onderwerp tot afgewerkte clip, zonder toezicht", pl: "Od tematu do gotowego klipu, bez nadzoru", ru: "От темы до готового ролика — без вмешательства", th: "จากหัวข้อจนถึงคลิปที่เสร็จแล้ว โดยไม่ต้องดูแล", tr: "Konudan hazır klipe, insan gerektirmeden", uk: "Від теми до готового ролика — без втручання", "zh-Hans": "从选题到成片，全程无人值守", "zh-Hant": "從選題到成片，全程無人值守" },
    menu: [
      { action: "run", label: { bg: "Готовите клипове за деня", cs: "Dnešní dokončené klipy", de: "Heute fertige Clips", en: "Today's finished clips", es: "Clips terminados de hoy", fi: "Päivän valmiit klipit", fr: "Montages terminés du jour", hu: "A mai kész videók", it: "Clip finite di oggi", ja: "今日完成したクリップ", nl: "Afgewerkte clips van vandaag", pl: "Dzisiejsze gotowe klipy", ru: "Готовые ролики за сегодня", th: "คลิปที่เสร็จแล้ววันนี้", tr: "Bugünün hazır klipleri", uk: "Готові ролики за сьогодні", "zh-Hans": "今日完成的片段", "zh-Hant": "今日完成的片段" } },
      { action: "script", label: { bg: "Задайте трендовите ключови думи", cs: "Nastavit trendová klíčová slova", de: "Trend-Stichwörter festlegen", en: "Set trending keywords", es: "Define las palabras clave en tendencia", fi: "Aseta nousevat avainsanat", fr: "Définir les mots-clés tendance", hu: "Trendelő kulcsszavak beállítása", it: "Imposta le parole chiave di tendenza", ja: "トレンドキーワードを設定", nl: "Trending trefwoorden instellen", pl: "Ustaw trendujące słowa kluczowe", ru: "Задать трендовые ключевые слова", th: "กำหนดคีย์เวิร์ดยอดนิยม", tr: "Trend anahtar kelimeleri belirle", uk: "Задати трендові ключові слова", "zh-Hans": "设置热门关键词", "zh-Hant": "設置熱門關鍵詞" } },
      { action: "generate", label: { bg: "Създайте QR код за поддръжка", cs: "Vytvořit podpůrný QR kód", de: "Support-QR-Code erzeugen", en: "Generate support QR", es: "Generar QR de asistencia", fi: "Luo tuki-QR-koodi", fr: "Générer un code QR d'assistance", hu: "Támogatási QR-kód létrehozása", it: "Genera QR di assistenza", ja: "サポート用 QR を生成", nl: "QR-code voor ondersteuning genereren", pl: "Wygeneruj kod QR wsparcia", ru: "Создать QR-код поддержки", th: "สร้างรหัส QR สำหรับความช่วยเหลือ", tr: "Destek QR kodu oluştur", uk: "Створити QR-код підтримки", "zh-Hans": "生成支持用 QR", "zh-Hant": "生成支持用 QR" } },
    ],
    highlights: {
      bg: ["На опашка през нощта, отчети сутринта", "Работи на вашия собствен Mac", "Работи без акаунт"],
      cs: ["Fronty přes noc, zprávy ráno", "Běží na vašem Macu", "Funguje bez účtu"],
      de: ["Nachts eingereiht, Bericht am Morgen", "Läuft auf deinem eigenen Mac", "Funktioniert ohne Konto"],
      en: ["Queues overnight, reports in the morning", "Runs on your own Mac", "Works with no account"],
      es: ["En cola por la noche, informe por la mañana", "Se ejecuta en tu propio Mac", "Funciona sin cuenta"],
      fi: ["Jonottaa yön, raportoi aamulla", "Toimii omalla Macillasi", "Toimii ilman tiliä"],
      fr: ["Traite la nuit, fait le rapport le matin", "Tourne sur votre propre Mac", "Fonctionne sans compte"],
      hu: ["Éjszakai sor, reggeli jelentések", "A saját Maceden fut", "Működik fiók nélkül"],
      it: ["In coda di notte, report al mattino", "In esecuzione sul tuo Mac", "Funziona senza account"],
      ja: ["夜間にキュー、朝にレポート", "あなた自身の Mac 上で動作", "アカウントなしで動作"],
      nl: ["Nachtjes in de wachtrij, rapportages in de ochtend", "Draait op je eigen Mac", "Werkt zonder account"],
      pl: ["W kolejce przez noc, raporty rano", "Działa na Twoim własnym Macu", "Działa bez konta"],
      ru: ["Очередь на ночь, отчёт утром", "Работает на вашем Mac", "Работает без аккаунта"],
      th: ["เข้าคิวข้ามคืน รายงานตอนเช้า", "รันบน Mac ของคุณเอง", "ใช้งานได้โดยไม่ต้องมีบัญชี"],
      tr: ["Gece sıraya alır, sabah raporlar", "Kendi Mac'in üzerinde çalışır", "Hesap olmadan çalışır"],
      uk: ["Черга на ніч, звіт уранці", "Працює на вашому Mac", "Працює без акаунта"],
      "zh-Hans": ["夜间排队，早晨出报告", "在你自己的 Mac 上运行", "无需账号即可使用"],
      "zh-Hant": ["夜間排隊，早晨出報告", "在你自己的 Mac 上運行", "無需賬號即可使用"],
    },
  },
  {
    id: "creator_paywall_hub",
    section: "productivity",
    credits30d: 300,
    substrate: "Watermark engine + ledger",
    lucideIcon: "Tv",
    sfSymbol: "play.tv",
    deterministic: false,
    worksWithoutLocalModels: false,
    name: { en: "Creator Paywall Hub", "zh-Hans": "大 V 防盗版付费频道管家", "zh-Hant": "大 V 防盜版付費頻道管家" },
    tagline: { bg: "Праг за абонамент, доставка с белег по всяко копие и червени кесии с точки", cs: "Práh předplatného, doručení s otiskem a obálky s body", de: "Abo-Schwellenwert, Auslieferung mit Fingerabdruck und Punkte-Kuverts", en: "Subscription threshold, fingerprinted delivery and credit red packets", es: "Umbral de suscripción, entrega con huella y sobres rojos de créditos", fi: "Tilauskynnys, sormenjäljellä varustettu toimitus ja pisteiden punaiset kirjekuolet", fr: "Seuil d'abonnement, distribution avec empreinte et enveloppes rouges de crédits", hu: "Előfizetési küszöb, ujjlenyomatos kézbesítés és kredit piros borítékok", it: "Soglia di abbonamento, consegna con impronta e buste rosse di crediti", ja: "購読の基準額、指紋付きの配信、計算クレジットの紅包", nl: "Abonnementsdrempel, levering met vingerafdruk en rode enveloppen met punten", pl: "Próg subskrypcji, dostawa opatrzona odciskiem i czerwone koperty punktów", ru: "Порог подписки, доставка с отпечатками и красные конверты с баллами", th: "เกณฑ์สมาชิก การประทับจุดจำเพาะทุกสำเนาที่ส่ง และการส่งอั่งเปาเครดิต", tr: "Abonelik eşiği, parmak izli teslim ve kredi kırmızı zarfları", uk: "Поріг підписки, доставка з відбитками та червоні конверти з балами", "zh-Hans": "订阅门槛、带指纹的送达与算力点红包", "zh-Hant": "訂閲門檻、帶指紋的送達與算力點紅包" },
    menu: [
      { action: "grant", label: { bg: "Нов платен канал", cs: "Nový zpoplatněný kanál", de: "Neuer kostenpflichtiger Kanal", en: "New paid channel", es: "Nuevo canal de pago", fi: "Uusi maksullinen kanava", fr: "Nouveau canal payant", hu: "Új fizetős csatorna", it: "Nuovo canale a pagamento", ja: "新しい有料チャンネル", nl: "Nieuw betaald kanaal", pl: "Nowy płatny kanał", ru: "Новый платный канал", th: "ช่องเรียกเก็บเงินใหม่", tr: "Yeni ücretli kanal", uk: "Новий платний канал", "zh-Hans": "新建付费频道", "zh-Hant": "新建付費頻道" } },
      { action: "red_packet", label: { bg: "Изпратете червена кесия с точки", cs: "Odeslat červenou obálku s body", de: "Punkte-Kuvert senden", en: "Send credit red packet", es: "Enviar un sobre rojo de créditos", fi: "Lähetä pisteiden punainen kirjekuori", fr: "Envoyer une enveloppe rouge de crédits", hu: "Kredit piros boríték küldése", it: "Invia una busta rossa di crediti", ja: "計算クレジットの紅包を送る", nl: "Rode envelop met punten sturen", pl: "Wyślij czerwoną kopertę punktów", ru: "Отправить красный конверт с баллами", th: "ส่งอั่งเปาเครดิต", tr: "Kredi kırmızı zarfı gönder", uk: "Надіслати червоний конверт з балами", "zh-Hans": "发送算力点红包", "zh-Hant": "發送算力點紅包" } },
      { action: "ledger", label: { bg: "Приходи от канала", cs: "Výdělek kanálů", de: "Einnahmen im Kanal", en: "Channel earnings", es: "Ingresos del canal", fi: "Kanavatulot", fr: "Revenus du canal", hu: "Csatorna-bevételek", it: "Guadagni del canale", ja: "チャンネル収益", nl: "Inkomsten van het kanaal", pl: "Zarobki kanału", ru: "Доход канала", th: "รายได้ของช่อง", tr: "Kanal kazançları", uk: "Дохід каналу", "zh-Hans": "频道收益", "zh-Hant": "頻道收益" } },
    ],
    highlights: {
      bg: ["Вие определяте цената на член", "Скрит воден знак за всяко копие", "Работи на вашия собствен Mac"],
      cs: ["Cenu za člena nastavujete vy", "Skrytý vodoznak v každé kopii", "Běží na vašem Macu"],
      de: ["Du legst den Preis pro Mitglied fest", "Verstecktes Wasserzeichen pro Kopie", "Läuft auf deinem eigenen Mac"],
      en: ["You set the price per member", "Blind watermark per copy", "Runs on your own Mac"],
      es: ["Tú pones el precio por miembro", "Marca de agua invisible en cada copia", "Se ejecuta en tu propio Mac"],
      fi: ["Asetat hinnan jäsentä kohti", "Näkymätön vesileima jokaisessa kopiossa", "Toimii omalla Macillasi"],
      fr: ["Vous fixez le prix par membre", "Filigrane invisible par copie", "Tourne sur votre propre Mac"],
      hu: ["Az árat tagonként te adod meg", "Rejtett vízjel minden másolaton", "A saját Maceden fut"],
      it: ["Il prezzo per membro lo fissi tu", "Filigrana invisibile su ogni copia", "In esecuzione sul tuo Mac"],
      ja: ["メンバー 1 人あたりの料金はあなたが設定", "コピーごとに不可視の透かし", "あなた自身の Mac 上で動作"],
      nl: ["Je bepaalt de prijs per lid", "Onzichtbaar watermerk per kopie", "Draait op je eigen Mac"],
      pl: ["Ustalasz cenę za członka", "Ukryty znak wodny na każdej kopii", "Działa na Twoim własnym Macu"],
      ru: ["Цену за участника задаёте вы", "Скрытый водяной знак на каждой копии", "Работает на вашем Mac"],
      th: ["คุณกำหนดราคาต่อสมาชิกเอง", "ลายน้ำที่มองไม่เห็นบนทุกสำเนา", "รันบน Mac ของคุณเอง"],
      tr: ["Üye başına fiyatı sen belirler", "Her kopyada görünmez filigran", "Kendi Mac'in üzerinde çalışır"],
      uk: ["Ціну за учасника встановлюєте ви", "Прихований водяний знак на кожній копії", "Працює на вашому Mac"],
      "zh-Hans": ["每位成员的价格由你设定", "每份副本独立盲水印", "在你自己的 Mac 上运行"],
      "zh-Hant": ["每位成員的價格由你設定", "每份副本獨立盲水印", "在你自己的 Mac 上運行"],
    },
  },
  {
    id: "edge_compute_mesh",
    section: "compute",
    credits30d: null,
    substrate: "Sandboxed Process + CryptoKit",
    lucideIcon: "Network",
    sfSymbol: "point.3.connected.trianglepath.dotted",
    deterministic: false,
    worksWithoutLocalModels: false,
    name: { en: "Edge Compute Mesh", "zh-Hans": "边缘算力共享节点", "zh-Hant": "邊緣算力共享節點" },
    tagline: { bg: "Публикувайте задачи с такса или дайте назаем неизползвани цикли за точки", cs: "Zveřejňujte měřené úlohy nebo půjčte nevyužité cykly za body", de: "Aufträge mit Abrechnung veröffentlichen oder ungenutzte Zyklen gegen Punkte verleihen", en: "Publish metered jobs, or lend idle cycles for credit", es: "Publica tareas medidas o presta ciclos libres a cambio de créditos", fi: "Julkaise mitattuja töitä tai lainaa tyhjiä jaksoja pisteitä vastaan", fr: "Publier des tâches facturables, ou prêter des cycles inutilisés contre des crédits", hu: "Mért feladatok közzététele, vagy üres ciklusok kölcsönadása kreditért", it: "Pubblica attività a consumo oppure presta i cicli inattivi in cambio di crediti", ja: "従量ジョブを公開、またはアイドルのサイクルを貸してクレジットを得る", nl: "Publiceer gemeten taken, of leen ongebruikte cycli uit voor rekenpunten", pl: "Publikuj mierzalne zadania albo pożyczaj bezczynne cykle za punkty", ru: "Публикуйте задачи с оплатой по мере использования или предоставляйте свободные циклы за баллы", th: "ประกาศงานที่คิดเงิน หรือให้ยืมรอบที่ว่างอยู่เพื่อรับเครดิต", tr: "Ölçümlü işler yayınla veya boş dönemleri kredi karşılığında ödünç ver", uk: "Публікуйте завдання з оплатою за використання або надайте вільні цикли за бали", "zh-Hans": "发布按量计费的任务，或把空闲的算力时段借出换点", "zh-Hant": "發佈按量計費的任務，或把空閒的算力時段借出換點" },
    menu: [
      { action: "offer", label: { bg: "Публикувайте изчислителна задача", cs: "Zveřejnit výpočetní úlohu", de: "Rechenauftrag veröffentlichen", en: "Publish a compute job", es: "Publicar una tarea de cálculo", fi: "Julkaise laskentatyö", fr: "Publier une tâche de calcul", hu: "Számítási feladat közzététele", it: "Pubblica un'attività di calcolo", ja: "計算ジョブを公開", nl: "Een rekentaak publiceren", pl: "Opublikuj zadanie obliczeniowe", ru: "Опубликовать задачу на вычисления", th: "ประกาศงานประมวลผล", tr: "Hesaplama işi yayınla", uk: "Опублікувати обчислювальне завдання", "zh-Hans": "发布算力任务", "zh-Hant": "發佈算力任務" } },
      { action: "enable", label: { bg: "Сдвоете възела, приемайте задачи", cs: "Spárovat uzel, přijímat úlohy", de: "Knoten koppeln, Aufträge annehmen", en: "Bond node, accept jobs", es: "Vincula el nodo y acepta tareas", fi: "Liitä solmu, hyväksy työt", fr: "Associer le nœud, accepter des tâches", hu: "Csomópont párosítása, feladatok vállalása", it: "Associa il nodo, accetta attività", ja: "ノードを紐付けてジョブを受ける", nl: "Knooppunt koppelen, taken aannemen", pl: "Sparuj węzeł, przyjmuj zadania", ru: "Сопряжение узла, приём задач", th: "ผูกโหนด แล้วรับงาน", tr: "Düğümü bağla, işleri kabul et", uk: "Спряження вузла, прийом завдань", "zh-Hans": "绑定节点，接受任务", "zh-Hant": "綁定節點，接受任務" } },
      { action: "settle", label: { bg: "Отчет за приходите", cs: "Přehled výdělku", de: "Einnahmenabrechnung", en: "Earnings statement", es: "Extracto de ingresos", fi: "Ansioiden erittely", fr: "Relevé de revenus", hu: "Bevételek kimutatása", it: "Rendiconto dei guadagni", ja: "収益明細", nl: "Inkomstenoverzicht", pl: "Raport zarobków", ru: "Отчёт о доходах", th: "ใบแจ้งรายได้", tr: "Kazanç dökümü", uk: "Звіт про доходи", "zh-Hans": "收益账单", "zh-Hant": "收益賬單" } },
    ],
    highlights: {
      bg: ["Разплащане на задача, такса от 10% за протокола", "Вашата машина решава какво да даде под наем", "Работи на вашия собствен Mac"],
      cs: ["Účtováno za úkol, 10% poplatek za protokol", "Váš stroj rozhoduje, co půjčuje", "Běží na vašem Macu"],
      de: ["Pro Auftrag abgerechnet, 10% Protokollgebühr", "Dein Rechner entscheidet, was er verleiht", "Läuft auf deinem eigenen Mac"],
      en: ["Settled per job, 10% protocol fee", "Your machine decides what to lend", "Runs on your own Mac"],
      es: ["Liquidado por tarea, 10% de comisión de protocolo", "Tu máquina decide qué prestar", "Se ejecuta en tu propio Mac"],
      fi: ["Maksetaan työn mukaan, 10% protokulamaksu", "Laitteesi päättää, mitä lainaa", "Toimii omalla Macillasi"],
      fr: ["Réglé à la tâche, 10% frais de protocole", "Votre machine décide de ce qu'elle prête", "Tourne sur votre propre Mac"],
      hu: ["Feladatonként elszámolva, 10% protokoll díj", "A géped dönti el, mit ad kölcsön", "A saját Maceden fut"],
      it: ["Regolata per attività, 10% di commissione di protocollo", "La tua macchina decide cosa prestare", "In esecuzione sul tuo Mac"],
      ja: ["ジョブごとに精算、10% プロトコル手数料", "何を貸すかはあなたの機械が決めます", "あなた自身の Mac 上で動作"],
      nl: ["Per taak afgerekend, 10% protocolfee", "Jouw machine bepaalt wat je uitleent", "Draait op je eigen Mac"],
      pl: ["Rozliczane za każde zadanie, 10% opłata protokołu", "Twój komputer decyduje, co pożyczać", "Działa na Twoim własnym Macu"],
      ru: ["Расчёт за каждую задачу, комиссия протокола 10%", "Ваша машина решает, что предоставлять другим", "Работает на вашем Mac"],
      th: ["ชำระตามงานแต่ละชิ้น ค่าธรรมเนียมโปรโตคอล 10%", "เครื่องของคุณตัดสินใจว่าจะให้ยืมอะไร", "รันบน Mac ของคุณเอง"],
      tr: ["İş başına hesaplanır, 10% protokol ücreti", "Ne ödünç vereceğine makinan karar verir", "Kendi Mac'in üzerinde çalışır"],
      uk: ["Розрахунок за кожне завдання, комісія протоколу 10%", "Ваша машина вирішує, що надавати іншим", "Працює на вашому Mac"],
      "zh-Hans": ["按任务结算，10% 协议费", "借出什么由你的设备决定", "在你自己的 Mac 上运行"],
      "zh-Hant": ["按任務結算，10% 協議費", "借出什麼由你的設備決定", "在你自己的 Mac 上運行"],
    },
  },
  {
    id: "morning_tv",
    section: "compute",
    credits30d: 100,
    substrate: "RSS + LTX-2.5 MLX",
    lucideIcon: "Sunrise",
    sfSymbol: "sun.horizon",
    deterministic: false,
    worksWithoutLocalModels: false,
    name: { en: "Morning TV", "zh-Hans": "私人定制早间电视台", "zh-Hant": "私人定制早間電視台" },
    tagline: { bg: "Личен сутрешен бюлетин за пет минути, без проследяване", cs: "Soukromé ranní vysílání na pět minut, bez sledování", de: "Fünf Minuten privates Morgenbulletin, ohne Tracking", en: "A five-minute private morning bulletin, no tracking", es: "Boletín matutino privado de cinco minutos, sin rastreo", fi: "Viiden minuutin yksityinen aamutiedote, ei seurantaa", fr: "Un bulletin matinal privé de cinq minutes, sans suivi", hu: "Ötperces privát reggeli híradó, nyomon követés nélkül", it: "Bollettino mattutino privato di cinque minuti, senza tracciamento", ja: "追跡なしの 5 分間・プライベートな朝のブリーフィング", nl: "Een privé-ochtendbulletin van vijf minuten, zonder tracking", pl: "Prywatny poranny biuletyn na pięć minut, bez śledzenia", ru: "Приватный утренний выпуск на пять минут, без слежки", th: "สรุปข่าวเช้าส่วนตัว 5 นาที ไม่มีการติดตาม", tr: "Beş dakikalık özel sabah bülteni, izleme yok", uk: "Приватний ранковий випуск на п'ять хвилин, без стеження", "zh-Hans": "五分钟的私密晨报，不做追踪", "zh-Hant": "五分鐘的私密晨報，不做追蹤" },
    menu: [
      { action: "broadcast", label: { bg: "Пуснете днешния бюлетин", cs: "Přehrát dnešní vysílání", de: "Heutiges Bulletin abspielen", en: "Play today's bulletin", es: "Reproducir el boletín de hoy", fi: "Toista päivän tiedote", fr: "Lire le bulletin du jour", hu: "Mai híradó lejátszása", it: "Riproduci il bollettino di oggi", ja: "今日のブリーフィングを再生", nl: "Speel het bulletin van vandaag af", pl: "Odtwórz dzisiejszy biuletyn", ru: "Включить сегодняшний выпуск", th: "เปิดสรุปข่าววันนี้", tr: "Bugünkü bülteni oynat", uk: "Увімкнути сьогоднішній випуск", "zh-Hans": "播放今日晨报", "zh-Hant": "播放今日晨報" } },
      { action: "digest", label: { bg: "Изберете емисии", cs: "Vybrat zdroje", de: "Quellen wählen", en: "Choose feeds", es: "Elegir fuentes", fi: "Valitse syötteet", fr: "Choisir les flux", hu: "Források kiválasztása", it: "Scegli i feed", ja: "フィードを選ぶ", nl: "Feeds kiezen", pl: "Wybierz feedy", ru: "Выбрать источники", th: "เลือกฟีด", tr: "Akışları seç", uk: "Вибрати джерела", "zh-Hans": "选择信息源", "zh-Hant": "選擇信息源" } },
      { action: "schedule", label: { bg: "Променете прозореца за излъчване", cs: "Změnit časové okno vysílání", de: "Sendezeitraum ändern", en: "Change broadcast window", es: "Cambiar la ventana de emisión", fi: "Muuta lähetysikkunaa", fr: "Modifier la plage d'émission", hu: "Közvetítési idő módosítása", it: "Modifica la finestra di trasmissione", ja: "配信時間帯を変更", nl: "Uitzendvenster wijzigen", pl: "Zmień okno nadawania", ru: "Изменить окно трансляции", th: "เปลี่ยนช่วงเวลาเผยแพร่", tr: "Yayın aralığını değiştir", uk: "Змінити вікно трансляції", "zh-Hans": "更改播报时段", "zh-Hant": "更改播報時段" } },
    ],
    highlights: {
      bg: ["Няма емисия с препоръки", "Стартира по вашия собствен часовник", "Работи без акаунт"],
      cs: ["Žádný kanál doporučení", "Spouští se podle vašich hodin", "Funguje bez účtu"],
      de: ["Kein Empfehlungs-Feed", "Startet nach deiner eigenen Uhr", "Funktioniert ohne Konto"],
      en: ["No recommendation feed", "Fires on your own clock", "Works with no account"],
      es: ["Sin feed de recomendaciones", "Se ejecuta con tu propio reloj", "Funciona sin cuenta"],
      fi: ["Ei ehdotusvirtaa", "Laukeaa oman kellosi mukaan", "Toimii ilman tiliä"],
      fr: ["Aucun fil de recommandations", "Se déclenche sur votre propre horloge", "Fonctionne sans compte"],
      hu: ["Nincs ajánlási csatorna", "Saját órád szerint indul el", "Működik fiók nélkül"],
      it: ["Nessun feed di suggerimenti", "Scatta con il tuo orologio", "Funziona senza account"],
      ja: ["おすすめフィードなし", "あなた自身の時計で起動", "アカウントなしで動作"],
      nl: ["Geen aanbevelingsfeed", "Gaat af op jouw eigen klok", "Werkt zonder account"],
      pl: ["Brak kanału rekomendacji", "Uruchamia się według Twojego zegara", "Działa bez konta"],
      ru: ["Нет ленты рекомендаций", "Срабатывает по вашим часам", "Работает без аккаунта"],
      th: ["ไม่มีฟีดแนะนำ", "ทำงานตามนาฬิกาของคุณเอง", "ใช้งานได้โดยไม่ต้องมีบัญชี"],
      tr: ["Öneri akışı yok", "Kendi saatine göre tetiklenir", "Hesap olmadan çalışır"],
      uk: ["Немає стрічки рекомендацій", "Спрацьовує за вашим годинником", "Працює без акаунта"],
      "zh-Hans": ["没有推荐信息流", "按你自己的时钟触发", "无需账号即可使用"],
      "zh-Hant": ["沒有推薦信息流", "按你自己的時鐘觸發", "無需賬號即可使用"],
    },
  },
  {
    id: "phantom_sentinel",
    section: "sanctuary",
    credits30d: 100,
    substrate: "AppKit + diskutil + Webhook",
    lucideIcon: "Lock",
    sfSymbol: "lock.shield",
    deterministic: true,
    worksWithoutLocalModels: true,
    name: { en: "Phantom Sentinel", "zh-Hans": "物理空间哨兵", "zh-Hant": "物理空間哨兵" },
    tagline: { bg: "Предвидимо заключване с едно докосване и ежедневно резюме за сигурността", cs: "Deterministické uzamknutí jedním klepnutím a denní přehled zabezpečení", de: "Deterministische Sperre mit einem Tipp und täglicher Sicherheitsbericht", en: "Deterministic one-tap lockdown and daily security brief", es: "Bloqueo determinista de un toque e informe diario de seguridad", fi: "Varma yhden napautuksen lukitus ja päivittäinen tietoturvakatsaus", fr: "Verrouillage déterministe en un geste et rapport de sécurité quotidien", hu: "Determinisztikus lezárás egy koppintással, napi biztonsági összefoglaló", it: "Blocco deterministico con un tocco e riepilogo di sicurezza quotidiano", ja: "ワンタップで確定的にロック、毎日のセキュリティブリーフ", nl: "Deterministische vergrendeling met één tik en dagelijkse beveiligingsbrief", pl: "Zawsze takie samo blokowanie jednym dotknięciem i codzienny brief bezpieczeństwa", ru: "Детерминированная блокировка одним нажатием и ежедневная сводка по безопасности", th: "แตะครั้งเดียวล็อกได้ผลแน่นอน พร้อมรายงานความปลอดภัยรายวัน", tr: "Tek dokunuşla kesin kilitme ve günlük güvenlik özeti", uk: "Детерміноване блокування одним дотиком і щоденне зведення з безпеки", "zh-Hans": "一键确定性锁定，附每日安全简报", "zh-Hant": "一鍵確定性鎖定，附每日安全簡報" },
    menu: [
      { action: "lock_all", label: { bg: "Заключете дома", cs: "Uzamknout dům", de: "Haus sperren", en: "Lock down the house", es: "Bloquear la casa", fi: "Lukitse koti", fr: "Verrouiller la maison", hu: "Lakás lezárása", it: "Blocca la casa", ja: "自宅全体をロック", nl: "Het huis op slot zetten", pl: "Zablokuj dom", ru: "Заблокировать дом", th: "ล็อกบ้านทั้งหลัง", tr: "Evi kilitle", uk: "Заблокувати дім", "zh-Hans": "锁定全屋", "zh-Hant": "鎖定全屋" } },
      { action: "probe", label: { bg: "Направете моментна снимка", cs: "Pořídit snímek", de: "Schnappschuss aufnehmen", en: "Capture a snapshot", es: "Capturar una instantánea", fi: "Ota kuvakaappaus", fr: "Prendre un instantané", hu: "Pillanatkép készítése", it: "Scatta un'istantanea", ja: "スナップショットを取得", nl: "Een momentopname maken", pl: "Wykonaj migawkę", ru: "Сделать снимок", th: "สร้างสแนปช็อต", tr: "Anlık görüntü al", uk: "Зробити знімок", "zh-Hans": "采集一次快照", "zh-Hant": "採集一次快照" } },
      { action: "status", label: { bg: "Създайте краткия доклад за сигурност", cs: "Vytvořit přehled zabezpečení", de: "Sicherheitsbericht erstellen", en: "Build the security brief", es: "Crear el informe de seguridad", fi: "Laati tietoturviayhteenveto", fr: "Créer le rapport de sécurité", hu: "Biztonsági összefoglaló készítése", it: "Crea il riepilogo di sicurezza", ja: "セキュリティブリーフを作成", nl: "De beveiligingsbrief opstellen", pl: "Przygotuj brief bezpieczeństwa", ru: "Собрать сводку по безопасности", th: "สร้างรายงานความปลอดภัยฉบับย่อ", tr: "Güvenlik özetini oluştur", uk: "Зібрати зведення з безпеки", "zh-Hans": "生成安全简报", "zh-Hant": "生成安全簡報" } },
    ],
    highlights: {
      bg: ["Няма модел по пътя на данните", "Едно докосване, една машина на състоянията", "Работи на вашия собствен Mac"],
      cs: ["Žádný model ve zpracování", "Jedno klepnutí, jeden stavový automat", "Běží na vašem Macu"],
      de: ["Kein Modell in der Kette", "Ein Tipp, eine Zustandsmaschine", "Läuft auf deinem eigenen Mac"],
      en: ["No model in the path", "One tap, one state machine", "Runs on your own Mac"],
      es: ["Sin modelos en el proceso", "Un toque, una máquina de estados", "Se ejecuta en tu propio Mac"],
      fi: ["Ketjussa ei ole mallia", "Yksi napautus, yksi tilakone", "Toimii omalla Macillasi"],
      fr: ["Aucun modèle dans le traitement", "Un geste, une machine à états", "Tourne sur votre propre Mac"],
      hu: ["Nincs modell a folyamatban", "Egy koppintás, egyetlen állapotgép", "A saját Maceden fut"],
      it: ["Nessun modello nel percorso", "Un tocco, una macchina a stati", "In esecuzione sul tuo Mac"],
      ja: ["処理経路はモデルを通りません", "ワンタップ、ひとつの状態機械", "あなた自身の Mac 上で動作"],
      nl: ["Geen model in de keten", "Eén tik, één statusmachine", "Draait op je eigen Mac"],
      pl: ["Brak modelu w ścieżce", "Jedno dotknięcie, jedna maszyna stanów", "Działa na Twoim własnym Macu"],
      ru: ["Без модели в цепочке", "Одно нажатие, один автомат состояний", "Работает на вашем Mac"],
      th: ["ไม่มีโมเดลในเส้นทางข้อมูล", "แตะครั้งเดียว ด้วย state machine ตัวเดียว", "รันบน Mac ของคุณเอง"],
      tr: ["Zincirde model yok", "Tek dokunuş, tek durum makinesi", "Kendi Mac'in üzerinde çalışır"],
      uk: ["Без моделі в ланцюзі", "Один дотик — один автомат станів", "Працює на вашому Mac"],
      "zh-Hans": ["处理链路中没有模型", "一次点按，一个状态机", "在你自己的 Mac 上运行"],
      "zh-Hant": ["處理鏈路中沒有模型", "一次點按，一個狀態機", "在你自己的 Mac 上運行"],
    },
  },
  {
    id: "chrono_ark",
    section: "sanctuary",
    credits30d: 200,
    substrate: "CryptoKit hash-chain lock",
    lucideIcon: "Hourglass",
    sfSymbol: "hourglass",
    deterministic: false,
    worksWithoutLocalModels: true,
    name: { en: "Chrono Ark", "zh-Hans": "时光数字方舟", "zh-Hant": "時光數字方舟" },
    tagline: { bg: "Криптиран семейен архив с капсула, заключена по време", cs: "Šifrované rodinné úložiště s časovou kapslí", de: "Verschlüsselter Familientresor mit Zeitschloss-Kapsel", en: "Encrypted family vault with a time-locked capsule", es: "Archivo familiar cifrado con una cápsula de apertura bloqueada", fi: "Salattu perheen säilö aikalukollisella kapselilla", fr: "Coffre familial chiffré avec capsule à verrou temporel", hu: "Titkosított családi tár időre lezárt kapszulával", it: "Archivio familiare cifrato con una capsula a blocco temporale", ja: "時間経過で開くカプセル付きの家族用暗号化保管庫", nl: "Versleutelde familiekluis met een tijdvergrendelde capsule", pl: "Zaszyfrowany rodzinny sejf z kapsułą z blokadą czasową", ru: "Зашифрованное семейное хранилище с капсулой, открывающейся по сроку", th: "ที่เก็บข้อมูลครอบครัวแบบเข้ารหัส พร้อมแคปซูลที่ล็อกตามเวลา", tr: "Zaman kilitli kapsüllü şifreli aile kasası", uk: "Зашифроване сімейне сховище з капсулою, що відкривається за строком", "zh-Hans": "加密的家庭保管库，带定时开启的时间胶囊", "zh-Hant": "加密的家庭保管庫，帶定時開啓的時間膠囊" },
    menu: [
      { action: "heartbeat", label: { bg: "Потвърдете импулса за безопасност", cs: "Potvrdit bezpečnostní tep", de: "Sicherheitszeichen bestätigen", en: "Confirm safety heartbeat", es: "Confirmar el latido de seguridad", fi: "Vahvista turvallisuussyke", fr: "Confirmer le signal de sécurité", hu: "Biztonsági életjel megerősítése", it: "Conferma il battito di sicurezza", ja: "安全ハートビートを確認", nl: "Veiligheidshartslag bevestigen", pl: "Potwierdź sygnał bezpieczeństwa", ru: "Подтвердить контрольный сигнал безопасности", th: "ยืนยันสัญญาณความปลอดภัย", tr: "Canlılık sinyalini onayla", uk: "Підтвердити контрольний сигнал безпеки", "zh-Hans": "确认安全心跳", "zh-Hant": "確認安全心跳" } },
      { action: "seal", label: { bg: "Запечатайте капсула на времето", cs: "Zapečetit časovou kapsli", de: "Zeitkapsel versiegeln", en: "Seal a time capsule", es: "Sellar una cápsula del tiempo", fi: "Sinettää aikakapselin", fr: "Sceller une capsule temporelle", hu: "Időkapszula lezárása", it: "Sigilla una capsula del tempo", ja: "タイムカプセルを封じる", nl: "Een tijdcapsule verzegelen", pl: "Zapieczętuj kapsułę czasu", ru: "Запечатать капсулу времени", th: "ปิดผนึกแคปซูลเวลา", tr: "Zaman kapsülü mühürle", uk: "Запечатати капсулу часу", "zh-Hans": "封存一个时间胶囊", "zh-Hant": "封存一個時間膠囊" } },
      { action: "check", label: { bg: "Управление на доверените контакти", cs: "Spravovat důvěryhodné kontakty", de: "Vertrauenswürdige Kontakte verwalten", en: "Manage trusted contacts", es: "Gestionar contactos de confianza", fi: "Hallitse luotettuja yhteystietoja", fr: "Gérer les contacts de confiance", hu: "Megbízható névjegyek kezelése", it: "Gestisci i contatti fidati", ja: "信頼できる連絡先を管理", nl: "Vertrouwde contacten beheren", pl: "Zarządzaj zaufanymi kontaktami", ru: "Управление доверенными контактами", th: "จัดการผู้ติดต่อที่เชื่อถือได้", tr: "Güvenilen kişileri yönet", uk: "Керування довіреними контактами", "zh-Hans": "管理信任的联系人", "zh-Hant": "管理信任的聯繫人" } },
    ],
    highlights: {
      bg: ["Криптирано при съхранение на вашия Mac", "Отваря се чак след зададената от вас дата", "Работи на вашия собствен Mac"],
      cs: ["Na Macu uloženo šifrovaně", "Otevře se až po vámi nastaveném datu", "Běží na vašem Macu"],
      de: ["Auf deinem Mac verschlüsselt gespeichert", "Öffnet erst nach dem von dir gesetzten Datum", "Läuft auf deinem eigenen Mac"],
      en: ["Encrypted at rest on your Mac", "Opens only after the date you set", "Runs on your own Mac"],
      es: ["Cifrado en reposo en tu Mac", "Solo se abre después de la fecha que fijes", "Se ejecuta en tu propio Mac"],
      fi: ["Macissasi tallennettuna salattuna", "Avautuu vasta asettamasi päivän jälkeen", "Toimii omalla Macillasi"],
      fr: ["Chiffré au repos sur votre Mac", "Ne s'ouvre qu'après la date que vous fixez", "Tourne sur votre propre Mac"],
      hu: ["A Macen titkosítva tárolva", "Csak a beállított dátum után nyílik meg", "A saját Maceden fut"],
      it: ["Cifrato a riposo sul tuo Mac", "Si apre solo dopo la data che imposti", "In esecuzione sul tuo Mac"],
      ja: ["お使いの Mac 上で暗号化して保存", "設定した日付を過ぎないと開きません", "あなた自身の Mac 上で動作"],
      nl: ["Versleuteld opgeslagen op je Mac", "Opent pas na de datum die je instelt", "Draait op je eigen Mac"],
      pl: ["Zaszyfrowane w spoczynku na Twoim Macu", "Otwiera się dopiero po dacie, którą ustawisz", "Działa na Twoim własnym Macu"],
      ru: ["Зашифровано при хранении на вашем Mac", "Открывается только после указанной даты", "Работает на вашем Mac"],
      th: ["เข้ารหัสไว้บน Mac ของคุณ", "เปิดได้หลังวันที่คุณกำหนดเท่านั้น", "รันบน Mac ของคุณเอง"],
      tr: ["Mac'inde saklı halde şifreli", "Yalnızca senin belirlediğin tarihten sonra açılır", "Kendi Mac'in üzerinde çalışır"],
      uk: ["Зашифровано під час зберігання на вашому Mac", "Відкривається лише після зазначеної дати", "Працює на вашому Mac"],
      "zh-Hans": ["在你的 Mac 上加密存储", "只在你设定的日期之后开启", "在你自己的 Mac 上运行"],
      "zh-Hant": ["在你的 Mac 上加密存儲", "只在你設定的日期之後開啓", "在你自己的 Mac 上運行"],
    },
  },
  {
    id: "health_sentinel",
    section: "sanctuary",
    credits30d: 200,
    substrate: "Vision + waveform synthesiser",
    lucideIcon: "HeartPulse",
    sfSymbol: "heart.text.square",
    deterministic: false,
    worksWithoutLocalModels: true,
    name: { en: "Health Sentinel", "zh-Hans": "零泄露私人健康哨兵", "zh-Hant": "零洩露私人健康哨兵" },
    tagline: { bg: "Четене на отчети офлайн и звукови среди за сън", cs: "Offline čtení zpráv a zvukové krajiny pro usínání", de: "Berichte offline lesen, dazu Klanglandschaften zum Einschlafen", en: "Offline report reading and sleep soundscapes", es: "Lectura de informes sin conexión y atmósferas sonoras para dormir", fi: "Offline-raporttien lukeminen ja unen äänimaisemat", fr: "Lecture de bilans hors ligne et paysages sonores du sommeil", hu: "Offline jelentésolvasás és altató hangtájak", it: "Lettura di referti offline e paesaggi sonori per il sonno", ja: "オフラインでのレポート読み上げと入眠サウンドスケープ", nl: "Offline rapporten voorlezen en slaapklanklandschappen", pl: "Odczyt raportów offline i pejzaże dźwiękowe do snu", ru: "Чтение отчётов офлайн и звучание для сна", th: "อ่านรายงานแบบออฟไลน์ และบรรยากาศเสียงสำหรับเข้านอน", tr: "Çevrimdışı rapor okuma ve uyku ses manzaraları", uk: "Читання звітів офлайн і звучання для сну", "zh-Hans": "离线报告朗读与助眠声景", "zh-Hant": "離線報告朗讀與助眠聲景" },
    menu: [
      { action: "read", label: { bg: "Прочетете здравен отчет", cs: "Přečíst zdravotní přehled", de: "Gesundheitsbericht lesen", en: "Read a health report", es: "Leer un informe de salud", fi: "Lue terveysraportti", fr: "Lire un bilan de santé", hu: "Egészségügyi jelentés olvasása", it: "Leggi un referto sanitario", ja: "健康レポートを読み上げ", nl: "Een gezondheidsrapport lezen", pl: "Odczytaj raport zdrowotny", ru: "Прочитать отчёт о здоровье", th: "อ่านรายงานสุขภาพ", tr: "Sağlık raporu oku", uk: "Прочитати звіт про здоров'я", "zh-Hans": "朗读健康报告", "zh-Hant": "朗讀健康報告" } },
      { action: "binaural", label: { bg: "Съставете звукова среда за сън", cs: "Vytvořit zvukovou krajinu pro spánek", de: "Einschlaf-Soundlandschaft erstellen", en: "Compose a sleep soundscape", es: "Crear una atmósfera sonora para dormir", fi: "Luo unen äänimaisema", fr: "Composer un paysage sonore du sommeil", hu: "Altató hangtáj létrehozása", it: "Componi un paesaggio sonoro per il sonno", ja: "入眠用のサウンドスケープを作る", nl: "Een klanklandschap voor het slapen samenstellen", pl: "Ułóż pejzaż dźwiękowy do snu", ru: "Собрать звучание для сна", th: "แต่งบรรยากาศเสียงสำหรับเข้านอน", tr: "Uyku ses manzarası oluştur", uk: "Скласти звучання для сну", "zh-Hans": "生成助眠声景", "zh-Hant": "生成助眠聲景" } },
      { action: "report", label: { bg: "Тренд в домакинството", cs: "Trend domácnosti", de: "Haustrend", en: "Household trend", es: "Tendencia del hogar", fi: "Kotitalouden trendi", fr: "Tendance du foyer", hu: "Háztartás alakulása", it: "Tendenza domestica", ja: "家庭の推移", nl: "Trend van het huishouden", pl: "Trend domowy", ru: "Домашняя динамика", th: "แนวโน้มของครัวเรือน", tr: "Ev eğilimi", uk: "Домашня динаміка", "zh-Hans": "家庭趋势", "zh-Hant": "家庭趨勢" } },
    ],
    highlights: {
      bg: ["Отчетите се разчитат офлайн", "Работи без акаунт", "Работи на вашия собствен Mac"],
      cs: ["Zprávy se zpracovávají offline", "Funguje bez účtu", "Běží na vašem Macu"],
      de: ["Berichte werden offline ausgewertet", "Funktioniert ohne Konto", "Läuft auf deinem eigenen Mac"],
      en: ["Reports are parsed offline", "Works with no account", "Runs on your own Mac"],
      es: ["Los informes se analizan sin conexión", "Funciona sin cuenta", "Se ejecuta en tu propio Mac"],
      fi: ["Raportit jäsennetään offline-tilassa", "Toimii ilman tiliä", "Toimii omalla Macillasi"],
      fr: ["Les bilans sont analysés hors ligne", "Fonctionne sans compte", "Tourne sur votre propre Mac"],
      hu: ["A jelentéseket offline dolgozza fel", "Működik fiók nélkül", "A saját Maceden fut"],
      it: ["I referti vengono analizzati offline", "Funziona senza account", "In esecuzione sul tuo Mac"],
      ja: ["レポートはオフラインで解析されます", "アカウントなしで動作", "あなた自身の Mac 上で動作"],
      nl: ["Rapporten worden offline verwerkt", "Werkt zonder account", "Draait op je eigen Mac"],
      pl: ["Raporty są przetwarzane offline", "Działa bez konta", "Działa na Twoim własnym Macu"],
      ru: ["Отчёты разбираются офлайн", "Работает без аккаунта", "Работает на вашем Mac"],
      th: ["ประมวลผลรายงานแบบออฟไลน์", "ใช้งานได้โดยไม่ต้องมีบัญชี", "รันบน Mac ของคุณเอง"],
      tr: ["Raporlar çevrimdışı ayrıştırılır", "Hesap olmadan çalışır", "Kendi Mac'in üzerinde çalışır"],
      uk: ["Звіти розбираються офлайн", "Працює без акаунта", "Працює на вашому Mac"],
      "zh-Hans": ["报告在离线状态下解析", "无需账号即可使用", "在你自己的 Mac 上运行"],
      "zh-Hant": ["報告在離線狀態下解析", "無需賬號即可使用", "在你自己的 Mac 上運行"],
    },
  },
];

export const ENGINE_BY_ID: Record<EngineId, EngineDefinition> = Object.fromEntries(
  ENGINES.map((engine) => [engine.id, engine]),
) as Record<EngineId, EngineDefinition>;

export function enginesInSection(section: SectionId): EngineDefinition[] {
  return ENGINES.filter((engine) => engine.section === section);
}

/** The node's Chinese spelling where it has one, otherwise the English product name. */
export function engineName(engine: EngineDefinition, locale: LocaleCode): string {
  if (locale === "zh-Hans" || locale === "zh-Hant") return engine.name[locale];
  return engine.name.en;
}

/** The official price chip, e.g. "200 Compute Credits / 30 days". */
export function priceLabel(engine: EngineDefinition, locale: LocaleCode): string {
  if (engine.credits30d === null) return PRICE_METERED[locale];
  return PRICE_FORMAT[locale].replace("%lld", String(engine.credits30d));
}

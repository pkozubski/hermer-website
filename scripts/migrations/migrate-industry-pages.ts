import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({ path: resolve(process.cwd(), ".env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN, // Upewnij się, że ten token ma uprawnienia do zapisu
  useCdn: false,
});

function toPortableText(textArray: string[]) {
  return textArray.map((text) => ({
    _type: "block",
    children: [{ _type: "span", text }],
  }));
}

const pages = [
  {
    slug: "strony-internetowe-dla-developerow",
    heroTitleTop: "Skuteczne strony internetowe",
    heroTitleHighlight: "dla deweloperów",
    heroSubtitle: "Prezentuj swoje oferty i przyciągaj nowych inwestorów",
    heroImageStr: "/assets/seo/woocommerce/dlakogobg-scaled.webp",
    introTitle: "Najlepsza strona www dla dewelopera",
    introTextArr: [
      "Internet jest najważniejszym źródłem informacji dla klientów, a wykreowany w przemyślany sposób wizerunek firmy ma kluczowy wpływ na zdobycie ich zainteresowania. Tylko najlepsza strona internetowa przystosowana do sprzedaży inwestycji deweloperskich pozwoli trafić do odpowiednich odbiorców. Nasze nowoczesne strony internetowe dla deweloperów posiadają najważniejsze udogodnienia dla osób szukających informacji dotyczących nieruchomości.",
      "Strony dla deweloperów stworzone pod specyfikę branży i zgodnie ze sztuką projektową są skuteczne, ponieważ realizują cele biznesowe, czyli: pozwalają dotrzeć do wielu klientów poprzez Internet, są narzędziem służącym do prezentacji i sprzedaży nieruchomości, co prowadzi do zwiększenia zysków firmy. Zdając się na nas, otrzymasz indywidualne wsparcie marketingowe i stronę www, która sprzedaje."
    ],
    featuresTitle: "Wyróżniki",
    features: [
      { title: "Unikalny design", description: "Strony internetowe dla deweloperów, aby spełniały założone cele, muszą się wyróżniać na tle witryn konkurencyjnych...", imageStr: "/assets/seo/woocommerce/hero-bg.webp" },
      { title: "Strona dla branży deweloperskiej", description: "Dopasujemy projekt strony do Twojej branży. Uwzględnimy wszystkie elementy, które są niezbędne do odpowiedniego zaprezentowania oferty...", imageStr: "/assets/seo/woocommerce/specjializacja.webp" },
      { title: "Gotowość pod działania marketingowe", description: "Dopracowana strona www dla dewelopera jest niezbędna do prowadzenia skutecznych działań marketingowych...", imageStr: "/assets/seo/woocommerce/przygotowania.webp" }
    ],
    includedTitle: "Co powinna zawierać profesjonalna strona dla dewelopera?",
    includedItems: [
      { title: "Logo", text: "Znak rozpoznawczy i jeden z elementów budowania wizerunku firmy deweloperskiej. Charakterystyczne logo zapadnie w pamięć klientów.", iconSvg: "/assets/seo/dla-restauracji-icons/logo.svg" },
      { title: "Prezentacja inwestycji", text: "Dopracowana wizualnie i estetyczna szata graficzna oraz treści potwierdzające Twój profesjonalizm pomagają sprzedawać nieruchomości.", iconSvg: "/assets/seo/dla-restauracji-icons/menu.svg" },
      { title: "Stopka", text: "Jest źródłem danych teleadresowych firmy i wsparciem dla głównego menu. Choć niepozorna buduje zaufanie i wyróżnia najważniejsze elementy strony.", iconSvg: "/assets/seo/dla-restauracji-icons/calendar.svg" },
      { title: "Przycisk akcji", text: "Zachęć swoich klientów do podjęcia konkretnych działań. Stosując odpowiednie CTA, skłonisz ich do nawiązania kontaktu lub rezerwacji.", iconSvg: "/assets/seo/dla-restauracji-icons/action.svg" },
      { title: "Wyróżniki", text: "Pokaż, dlaczego Twoje inwestycje są godne uwagi. Wymień na stronie atuty, które wyróżniają Cię spośród innych deweloperów.", iconSvg: "/assets/seo/dla-restauracji-icons/spark.svg" },
      { title: "Oferta lokali", text: "Zamieszczenie na stronie informacji o dostępnych lokalach i rzutach jest kluczowe dla procesu sprzedaży nieruchomości.", iconSvg: "/assets/seo/dla-restauracji-icons/education.svg" },
      { title: "Zespół dewelopera", text: "Nie bądź anonimowy. Pokazując zespół dajesz się poznać potencjalnym nabywcom i budujesz relację opartą na zaufaniu.", iconSvg: "/assets/seo/dla-restauracji-icons/people.svg" },
      { title: "Formularz kontaktowy", text: "Maksymalnie ułatw klientom łączność z biurem sprzedaży, wprowadzając na stronie prosty formularz kontaktowy.", iconSvg: "/assets/seo/dla-restauracji-icons/mail.svg" },
      { title: "Łatwa nawigacja", text: "Wygoda i oszczędność czasu to podstawa. Elementy strony ułożone w przemyślany sposób sprawią, że klienci łatwo znajdą wymarzone M.", iconSvg: "/assets/seo/dla-restauracji-icons/dropdown-menu.svg" },
    ],
    successStoriesTitle: "Sukcesy naszych klientów",
    successStories: [
      { companyName: "Dedicante", themeColor: "#D05383", categoryBadge: "WIDOCZNOŚĆ MARKI", badgeImage: "", description: "Efektywna strona www połączona z profesjonalnymi działaniami SEO pozwoliła na spektakularny wzrost pozycji w wynikach wyszukiwania.", resultLabel: "WYNIK:", resultValue: "Wzrost", resultSubtext: "ilości fraz w top 10", mainImagePath: "/assets/seo/woocommerce/dedicante.webp", chartImagePath: "/assets/seo/woocommerce/dedicante-chart.svg" },
      { companyName: "Golden Gift", themeColor: "#C7A566", categoryBadge: "WSPARCIE SPRZEDAŻY", badgeImage: "/goldengift-badge.svg", description: "Nowoczesna platforma firmowa zoptymalizowana pod kątem konwersji przełożyła się na rekordowe wyniki sprzedaży i zainteresowania ofertą.", resultLabel: "WYNIK:", resultValue: "670%", resultSubtext: "Wzrostu konwersji", mainImagePath: "/assets/seo/woocommerce/goldengift.webp", chartImagePath: "/goldengift-chart.svg" }
    ],
    ctaTitle: "Zbuduj przewagę swojej firmy",
    ctaSubtitleLines: ["Zaprojektujemy dla Ciebie stronę internetową,", "która nie tylko świetnie wygląda,", "ale przede wszystkim sprzedaje nieruchomości."],
    seoMetaTitle: "Strony internetowe dla deweloperów - Tworzenie stron www",
    seoMetaDescription: "Zaprojektujemy dla Ciebie stronę dla dewelopera, która będzie sprzedawać nieruchomości. Profesjonalne strony internetowe dla branży deweloperskiej."
  },
  {
    slug: "strony-internetowe-dla-firm",
    heroTitleTop: "Strony internetowe",
    heroTitleHighlight: "dla firm",
    heroSubtitle: "Firmowa strona www zwiększająca sprzedaż",
    heroImageStr: "/assets/seo/woocommerce/dlakogobg-scaled.webp",
    introTitle: "Dlaczego strona internetowa dla firmy jest ważna?",
    introTextArr: [
      "Działalność stacjonarna firmy daje duże możliwości zarobku, ale jednocześnie wiąże się z wieloma ograniczeniami dotyczącymi np. lokalizacji czy godzin otwarcia punktu. Posiadając własną stronę internetową, możesz rozwijać firmę zapominając o tych niedogodnościach.",
      "Warto zainwestować w stworzenie strony internetowej, ponieważ dzięki niej wypromujesz swoje usługi w sieci, trafiając do konkretnej grupy odbiorców. Innymi istotnymi zaletami strony firmowej są: budowanie zaufania wśród klientów, możliwość szybkiego nawiązania kontaktu, usprawnienie pracy przedsiębiorstwa czy poznanie preferencji osób, do których chcesz trafić z ofertą."
    ],
    featuresTitle: "Wyróżniki",
    features: [
      { title: "Profesjonalny wygląd", description: "Jeśli prowadzisz firmę, która podąża z duchem czasu, pokaż to za pomocą nowoczesnej witryny o efektownej grafice...", imageStr: "/assets/seo/woocommerce/hero-bg.webp" },
      { title: "Idealne dla małych firm", description: "Nawet niewielka firma może onieśmielić konkurencję dynamicznym rozwojem, w czym pomoże elegancka strona www...", imageStr: "/assets/seo/woocommerce/specjializacja.webp" },
      { title: "Przygotowania pod marketing", description: "Strona firmy to Twoja wizytówka widniejąca w sieci. Zbudujemy ją pod kątem działań marketingowych...", imageStr: "/assets/seo/woocommerce/przygotowania.webp" }
    ],
    includedTitle: "Co powinna zawierać profesjonalna strona internetowa dla firmy?",
    includedItems: [
      { title: "Logo", text: "Znak rozpoznawczy i jeden z elementów budowania wizerunku firmy. Charakterystyczne logo zapisze się w świadomości Twoich klientów.", iconSvg: "/assets/seo/dla-restauracji-icons/logo.svg" },
      { title: "Prezentacja firmy", text: "Dopracowana wizualnie i estetyczna szata graficzna oraz treści potwierdzające Twój autorytet.", iconSvg: "/assets/seo/dla-restauracji-icons/menu.svg" },
      { title: "Stopka", text: "Jest źródłem danych teleadresowych firmy i wsparciem dla głównego menu.", iconSvg: "/assets/seo/dla-restauracji-icons/calendar.svg" },
      { title: "Przycisk akcji", text: "Zachęć swoich klientów do podjęcia konkretnych działań.", iconSvg: "/assets/seo/dla-restauracji-icons/action.svg" },
      { title: "Wyróżniki", text: "Pokaż, dlaczego Twoja firma jest godna uwagi i zaufania.", iconSvg: "/assets/seo/dla-restauracji-icons/spark.svg" },
      { title: "Specjalizacje", text: "Zamieszczenie na stronie informacji o specjalizacjach jest bardzo ważne.", iconSvg: "/assets/seo/dla-restauracji-icons/education.svg" },
      { title: "Zespół firmy", text: "Nie bądź anonimowy. Pokazując pracowników dajesz się poznać.", iconSvg: "/assets/seo/dla-restauracji-icons/people.svg" },
      { title: "Formularz kontaktowy", text: "Maksymalnie ułatw swoim klientom łączność z firmą.", iconSvg: "/assets/seo/dla-restauracji-icons/mail.svg" },
      { title: "Łatwa nawigacja", text: "Wygoda i oszczędność czasu to podstawa.", iconSvg: "/assets/seo/dla-restauracji-icons/dropdown-menu.svg" },
    ],
    successStoriesTitle: "Sukcesy naszych klientów",
    successStories: [
      { companyName: "Dedicante", themeColor: "#D05383", categoryBadge: "WIDOCZNOŚĆ MARKI", badgeImage: "", description: "Efektywna strona www połączona z profesjonalnymi działaniami SEO pozwoliła na spektakularny wzrost pozycji w wynikach wyszukiwania.", resultLabel: "WYNIK:", resultValue: "Wzrost", resultSubtext: "ilości fraz w top 10", mainImagePath: "/assets/seo/woocommerce/dedicante.webp", chartImagePath: "/assets/seo/woocommerce/dedicante-chart.svg" },
      { companyName: "Golden Gift", themeColor: "#C7A566", categoryBadge: "WSPARCIE SPRZEDAŻY", badgeImage: "/goldengift-badge.svg", description: "Nowoczesna platforma firmowa zoptymalizowana pod kątem konwersji przełożyła się na rekordowe wyniki sprzedaży i zainteresowania ofertą.", resultLabel: "WYNIK:", resultValue: "670%", resultSubtext: "Wzrostu konwersji", mainImagePath: "/assets/seo/woocommerce/goldengift.webp", chartImagePath: "/goldengift-chart.svg" }
    ],
    ctaTitle: "Zbuduj przewagę swojej firmy",
    ctaSubtitleLines: ["Zaprojektujemy dla Ciebie stronę firmową,", "która nie tylko świetnie wygląda,", "ale przede wszystkim zdobywa klientów."],
    seoMetaTitle: "Strony internetowe dla firm - Profesjonalne strony www",
    seoMetaDescription: "Zadbamy o stronę internetową dla Twojej firmy. Wykonujemy nowoczesne strony firmowe nastawione na sprzedaż i zdobywanie klientów."
  },
  {
    slug: "strony-internetowe-dla-fotografa",
    heroTitleTop: "Strona internetowa",
    heroTitleHighlight: "dla Fotografa",
    heroSubtitle: "Zaprezentuj swój warsztat i przyciągnij wymarzonych klientów",
    heroImageStr: "/assets/seo/woocommerce/dlakogobg-scaled.webp",
    introTitle: "Dlaczego własna strona jest kluczowa dla fotografa?",
    introTextArr: [
      "Portfolio to fundament w branży fotograficznej. Własna strona internetowa pozwala nie tylko na profesjonalną prezentację Twoich prac, ale także na budowanie marki osobistej i bezpośredni kontakt z klientami.",
      "Nowoczesna witryna dla fotografa to także narzędzie wspierające sprzedaż usług i komunikację. Strefa klienta z prywatnymi galeriami, blog z poradami oraz integracja z mediami społecznościowymi to elementy, które sprawią, że Twoja firma będzie postrzegana jako nowoczesna i profesjonalna."
    ],
    featuresTitle: "Twoje portfolio w najlepszym wydaniu",
    features: [
      { title: "Atrakcyjna Galeria", description: "Zadbamy o to, by Twoje zdjęcia były sercem witryny. Przejrzyste i eleganckie galerie pozwolą...", imageStr: "/assets/seo/woocommerce/hero-bg.webp" },
      { title: "Strefa Klienta", description: "Usprawnij proces przekazywania zdjęć. Prywatne, zabezpieczone hasłem galerie to wygoda dla Ciebie...", imageStr: "/assets/seo/woocommerce/specjializacja.webp" },
      { title: "Budowanie Marki", description: "Własna strona plus blog i media społecznościowe to potężne narzędzie marketingowe...", imageStr: "/assets/seo/woocommerce/przygotowania.webp" }
    ],
    includedTitle: "Co zawiera strona dla fotografa?",
    includedItems: [
      { title: "Projekt Logo", text: "Przygotujemy dla Ciebie nowoczesny znak graficzny nawiązujący do branży fotograficznej.", iconSvg: "/assets/seo/dla-restauracji-icons/logo.svg" },
      { title: "Portfolio i Galerie", text: "Atrakcyjna prezentacja Twoich najlepszych ujęć.", iconSvg: "/assets/seo/dla-restauracji-icons/menu.svg" },
      { title: "System Rezerwacji", text: "Umożliwiamy wdrożenie modułu rezerwacji terminów sesji.", iconSvg: "/assets/seo/dla-restauracji-icons/calendar.svg" },
      { title: "Panel administracyjny", text: "Intuicyjne narzędzie do zarządzania całą zawartością strony.", iconSvg: "/assets/seo/dla-restauracji-icons/action.svg" },
      { title: "Oryginalna szata graficzna", text: "Zadba o to, by strona była estetyczna i przejrzysta.", iconSvg: "/assets/seo/dla-restauracji-icons/spark.svg" },
      { title: "Blog z Poradami", text: "Miejsce na dzielenie się wiedzą.", iconSvg: "/assets/seo/dla-restauracji-icons/education.svg" },
      { title: "Integracja Social Media", text: "Połączymy Twoją stronę z profilem na Facebooku i Instagramie.", iconSvg: "/assets/seo/dla-restauracji-icons/people.svg" },
      { title: "Bezpieczna Komunikacja", text: "Dopracowany formularz kontaktowy.", iconSvg: "/assets/seo/dla-restauracji-icons/mail.svg" },
      { title: "Intuicyjna nawigacja", text: "Przejrzysty układ menu i podział na kategorie usług.", iconSvg: "/assets/seo/dla-restauracji-icons/dropdown-menu.svg" },
    ],
    successStoriesTitle: "Sukcesy naszych klientów",
    successStories: [
      { companyName: "Skutecznie", themeColor: "#D05383", categoryBadge: "WIDOCZNOŚĆ W GOOGLE", badgeImage: "", description: "Nasze strategie SEO pomagają profesjonalistom osiągać czołowe miejsca w wynikach wyszukiwania, co bezpośrednio przekłada się na liczbę nowych zleceń.", resultLabel: "WYNIK:", resultValue: "Wzrost", resultSubtext: "ilości fraz w top 10", mainImagePath: "/assets/seo/woocommerce/dedicante.webp", chartImagePath: "/assets/seo/woocommerce/dedicante-chart.svg" },
      { companyName: "Efektywnie", themeColor: "#C7A566", categoryBadge: "KONWERSJA KLIENTA", badgeImage: "/goldengift-badge.svg", description: "Dzięki przemyślanemu UX i atrakcyjnemu designowi, odwiedzający stronę znacznie częściej decydują się na kontakt i rezerwację usług.", resultLabel: "WYNIK:", resultValue: "670%", resultSubtext: "Więcej konwersji", mainImagePath: "/assets/seo/woocommerce/goldengift.webp", chartImagePath: "/goldengift-chart.svg" }
    ],
    ctaTitle: "Pokaż swój świat w najlepszym kadrze",
    ctaSubtitleLines: ["Zbudujemy dla Ciebie stronę fotografa,", "która wyeksponuje Twój talent", "i przyciągnie nowych klientów."],
    seoMetaTitle: "Strony internetowe dla fotografów",
    seoMetaDescription: "Profesjonalna strona www ze strefą klienta i portfolio idealna dla fotografa."
  },
  {
    slug: "strony-internetowe-dla-restauracji",
    heroTitleTop: "Strona dla",
    heroTitleHighlight: "restauracji",
    heroSubtitle: "Przyciągnij więcej gości dzięki nowoczesnej witrynie www",
    heroImageStr: "/assets/seo/woocommerce/dlakogobg-scaled.webp",
    introTitle: "Jak strona dla restauracji ułatwi mi sprzedaż?",
    introTextArr: [
      "Celem stron internetowych dla restauracji jest przyciągnięcie klientów i zwiększenie sprzedaży oferowanych dań. Istotny jest aspekt wizualny strony www, a więc grafika, która zwróci uwagę klientów i zachęci ich do zapoznania się z menu restauracji.",
      "Tym, co nakłoni gości do korzystania z witryny i ułatwi sprzedaż, jest intuicyjny układ umożliwiający bezproblemowe poruszanie się po stronie głównej i zakładkach. Zastosowanie odpowiednich przycisków CTA oraz formularza rezerwacji stolika usprawni pracę Twojej restauracji."
    ],
    featuresTitle: "Dlaczego warto nas wybrać?",
    features: [
      { title: "Atrakcyjna oprawa wizualna", description: "Zadbamy o to, aby strona Twojej restauracji zachwycała od pierwszego spojrzenia...", imageStr: "/assets/seo/woocommerce/hero-bg.webp" },
      { title: "Łatwa obsługa menu", description: "Samodzielnie wprowadzaj zmiany w karcie dań, aktualizuj ceny i dodawaj sezonowe specjały...", imageStr: "/assets/seo/woocommerce/specjializacja.webp" },
      { title: "Wsparcie marketingowe", description: "Pomożemy Ci wypromować restaurację w sieci. Od integracji z social media, przez pozycjonowanie...", imageStr: "/assets/seo/woocommerce/przygotowania.webp" }
    ],
    includedTitle: "Co zawiera strona dla restauracji?",
    includedItems: [
      { title: "Projekt Logo", text: "Zaprojektujemy niepowtarzalne i łatwe do zapamiętania logo...", iconSvg: "/assets/seo/dla-restauracji-icons/logo.svg" },
      { title: "Elektroniczne Menu", text: "Przejrzysta prezentacja Twojej karty dań...", iconSvg: "/assets/seo/dla-restauracji-icons/menu.svg" },
      { title: "Formularz rezerwacji", text: "Umożliwiamy wdrożenie modułu rezerwacji online...", iconSvg: "/assets/seo/dla-restauracji-icons/calendar.svg" },
      { title: "Panel administracyjny", text: "Intuicyjne narzędzie do zarządzania całą zawartością strony...", iconSvg: "/assets/seo/dla-restauracji-icons/action.svg" },
      { title: "Oryginalna szata graficzna", text: "Atrakcyjny wygląd i odpowiednio dobrane barwy przyciągną uwagę gości...", iconSvg: "/assets/seo/dla-restauracji-icons/spark.svg" },
      { title: "Blog kulinarny", text: "Miejsce na dzielenie się wiedzą i nowościami...", iconSvg: "/assets/seo/dla-restauracji-icons/education.svg" },
      { title: "Social Media Integration", text: "Połączymy Twoją stronę z profilem na Facebooku i Instagramie...", iconSvg: "/assets/seo/dla-restauracji-icons/people.svg" },
      { title: "Formularz kontaktowy", text: "Poprawiający komunikację moduł...", iconSvg: "/assets/seo/dla-restauracji-icons/mail.svg" },
      { title: "Intuicyjna nawigacja", text: "Logiczny układ strony ułatwia gościom szybkie odnalezienie menu...", iconSvg: "/assets/seo/dla-restauracji-icons/dropdown-menu.svg" },
    ],
    successStoriesTitle: "Sukcesy naszych klientów",
    successStories: [
      { companyName: "Zaufali nam", themeColor: "#D05383", categoryBadge: "SUKCES W SIECI", badgeImage: "", description: "Nasze strony pomagają firmom z różnych branż osiągać spektakularne wzrosty widoczności i sprzedaży dzięki precyzyjnej optymalizacji.", resultLabel: "KLUCZOWY WSKAŹNIK:", resultValue: "Wzrost ilości", resultSubtext: "fraz w top 10", mainImagePath: "/assets/seo/woocommerce/dedicante.webp", chartImagePath: "/assets/seo/woocommerce/dedicante-chart.svg" },
      { companyName: "Efektywnie", themeColor: "#C7A566", categoryBadge: "WSPARCIE SPRZEDAŻY", badgeImage: "/goldengift-badge.svg", description: "Nowoczesny design i optymalizacja ścieżki użytkownika przekładają się na realny wzrost konwersji i zainteresowania ofertą.", resultLabel: "WYNIK:", resultValue: "670%", resultSubtext: "Wzrostu konwersji", mainImagePath: "/assets/seo/woocommerce/goldengift.webp", chartImagePath: "/goldengift-chart.svg" },
      { companyName: "Skutecznie", themeColor: "#728B55", categoryBadge: "WIĘCEJ GOŚCI", badgeImage: "/assets/seo/woocommerce/ulanskazagroda-badge.svg", description: "Budujemy strony, które pracują na Twój sukces 24/7, dostarczając nowych klientów i wzmacniając wizerunek.", resultLabel: "WYNIK:", resultValue: "1574%", resultSubtext: "Więcej zapytań", mainImagePath: "/assets/seo/woocommerce/ulanskazagroda.webp", chartImagePath: "/assets/seo/woocommerce/ulanskazagroda-chart.svg" }
    ],
    ctaTitle: "Zyskaj więcej gości już dziś",
    ctaSubtitleLines: ["Zbudujemy dla Ciebie stronę restauracji,", "która stanie się Twoją najlepszą wizytówką", "i realnie zwiększy sprzedaż Twoich dań."],
    seoMetaTitle: "Strony internetowe dla restauracji",
    seoMetaDescription: "Zamów nowoczesna i apetyczną stronę dla Twojej gastronomii, ze zintegrowanym systemem rezerwacji."
  },
  {
    slug: "strony-internetowe-dla-prawnikow",
    heroTitleTop: "Skuteczne strony internetowe",
    heroTitleHighlight: "dla prawników",
    heroSubtitle: "Zdobywaj klientów bez ograniczeń",
    heroImageStr: "/assets/seo/woocommerce/dlakogobg-scaled.webp",
    introTitle: "Strona internetowa dla prawnika – dlaczego jest ważna?",
    introTextArr: [
      "Strona internetowa dla prawnika jest skutecznym i w pełni zaufanym sposobem promowania świadczonych usług, który wyparł już polecenia tzw. drogą pantoflową. Klienci samodzielnie szukają pomocy w rozwiązaniu problemów i odpowiedzi na pytania dotyczące przepisów prawnych.",
      "Z profesjonalnie przygotowaną, widoczną oraz przejrzystą stroną internetową zadbasz o swój wizerunek, pozyskasz klientów i wykreujesz się na specjalistę w swojej dziedzinie."
    ],
    featuresTitle: "Wyróżniki",
    features: [
      { title: "Zbudujesz zaufanie i zaprezentujesz specjalizacje", description: "Dzięki unikalnej i dopracowanej stronie internetowej zbudujesz pozytywny wizerunek swojego biura...", imageStr: "/assets/seo/woocommerce/hero-bg.webp" },
      { title: "Będziesz widoczny i łatwiej pozyskasz klientów", description: "Optymalizujemy strukturę i treść na stronach internetowych dla prawników do pozycjonowania...", imageStr: "/assets/seo/woocommerce/specjializacja.webp" },
      { title: "Ułatwisz klientom dostęp do profesjonalnej pomocy", description: "Przejrzysta i intuicyjna strona www sprawi, że nawiązanie kontaktu i znalezienie porady zajmie tylko chwilę...", imageStr: "/assets/seo/woocommerce/przygotowania.webp" }
    ],
    includedTitle: "Co powinna zawierać profesjonalna strona internetowa dla prawników?",
    includedItems: [
      { title: "Logo", text: "Znak rozpoznawczy i jeden z kluczowych elementów identyfikacji wizualnej...", iconSvg: "/assets/seo/dla-restauracji-icons/logo.svg" },
      { title: "Przedstawienie zakresu usług i specjalizacji", text: "Atrakcyjnie wyeksponowane specjalizacje kancelarii...", iconSvg: "/assets/seo/dla-restauracji-icons/menu.svg" },
      { title: "Główny baner tekstowo - graficzny z CTA", text: "Część składowa umiejscowiona w samym sercu witryny...", iconSvg: "/assets/seo/dla-restauracji-icons/calendar.svg" },
      { title: "Sekcja \"Poznajmy się\"/zespół", text: "Jeden ze sposobów do niwelowania dystansu pomiędzy prawnikiem, a klientem...", iconSvg: "/assets/seo/dla-restauracji-icons/people.svg" }
    ],
    successStoriesTitle: "Sukcesy naszych klientów",
    successStories: [
      { companyName: "Dedicante", themeColor: "#D05383", categoryBadge: "WIDOCZNOŚĆ MARKI", badgeImage: "", description: "Efektywna strona www połączona z profesjonalnymi działaniami SEO pozwoliła na spektakularny wzrost pozycji w wynikach wyszukiwania.", resultLabel: "WYNIK:", resultValue: "Wzrost", resultSubtext: "ilości fraz w top 10", mainImagePath: "/assets/seo/woocommerce/dedicante.webp", chartImagePath: "/assets/seo/woocommerce/dedicante-chart.svg" },
      { companyName: "Golden Gift", themeColor: "#C7A566", categoryBadge: "WSPARCIE SPRZEDAŻY", badgeImage: "/goldengift-badge.svg", description: "Nowoczesna platforma firmowa zoptymalizowana pod kątem konwersji przełożyła się na rekordowe wyniki sprzedaży i zainteresowania ofertą.", resultLabel: "WYNIK:", resultValue: "670%", resultSubtext: "Wzrostu konwersji", mainImagePath: "/assets/seo/woocommerce/goldengift.webp", chartImagePath: "/goldengift-chart.svg" }
    ],
    ctaTitle: "Zbuduj przewagę swojej firmy",
    ctaSubtitleLines: ["Zaprojektujemy dla Ciebie stronę prawniczą,", "która nie tylko świetnie wygląda,", "ale przede wszystkim zdobywa klientów."],
    seoMetaTitle: "Strony internetowe dla prawników",
    seoMetaDescription: "Oferujemy profesjonalne strony internetowe dla prawników i kancelarii prawnych."
  }
];

async function run() {
  console.log("Starting migration for Industry Landing Pages...");
  for (const page of pages) {
    const doc = {
      _type: "industryLandingPage",
      slug: { _type: "slug", current: page.slug },
      seo: {
        _type: "seo",
        metaTitle: page.seoMetaTitle,
        metaDescription: page.seoMetaDescription,
      },
      heroTitleTop: page.heroTitleTop,
      heroTitleHighlight: page.heroTitleHighlight,
      heroSubtitle: page.heroSubtitle,
      introTitle: page.introTitle,
      introText: toPortableText(page.introTextArr),
      featuresTitle: page.featuresTitle,
      features: page.features.map(f => ({
        _type: "featureItem",
        _key: Math.random().toString(36).substring(7),
        title: f.title,
        description: f.description,
        // Uwaga: heroImage i features[].image wymagają bycia Assetem w Sanity. 
        // W tym wypadku na czas migracji pominiemy je w Payload jako File ref 
        // LUB zmodyfikujemy tymczasowo schema w Sanity by przyjmowała url (string) lub wgrywamy je.
        // Jednak schemaIndustryLandingPage zakłada `type: "image"`. To oznacza, że nie możemy puścić `string`.
        // Usunąłem je by nie wywalić błędu 400. Należy wejść w CMS i dodać zdjęcia Hero oraz wyróźników ręcznie!
      })),
      includedTitle: page.includedTitle,
      includedItems: page.includedItems.map(i => ({
        _type: "includedItem",
        _key: Math.random().toString(36).substring(7),
        title: i.title,
        text: i.text,
        iconSvg: i.iconSvg,
      })),
      successStoriesTitle: page.successStoriesTitle,
      successStories: page.successStories.map(s => ({
        _type: "successStory",
        _key: Math.random().toString(36).substring(7),
        companyName: s.companyName,
        themeColor: s.themeColor,
        categoryBadge: s.categoryBadge,
        badgeImage: s.badgeImage || undefined,
        description: s.description,
        resultLabel: s.resultLabel,
        resultValue: s.resultValue,
        resultSubtext: s.resultSubtext,
        mainImagePath: s.mainImagePath,
        chartImagePath: s.chartImagePath
      })),
      showReviews: true,
      ctaTitle: page.ctaTitle,
      ctaSubtitleLines: page.ctaSubtitleLines,
    };

    console.log(`Migrating ${page.slug}...`);
    try {
      // Upsert by slug
      await client.create(doc);
      console.log(`Success: ${page.slug}`);
    } catch (e: any) {
      console.error(`Error migrating ${page.slug}:`, e.message);
    }
  }
}

run();

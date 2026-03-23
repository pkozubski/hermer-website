import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvFile(filePath) {
  const content = readFileSync(filePath, "utf8");

  for (const line of content.split(/\r?\n/)) {
    if (!line || line.startsWith("#") || !line.includes("=")) {
      continue;
    }

    const eqIndex = line.indexOf("=");
    const key = line.slice(0, eqIndex).trim();
    const value = line.slice(eqIndex + 1).trim();

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

function normalize(value) {
  const polishMap = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ż: "z",
    ź: "z",
  };

  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[ąćęłńóśżź]/g, (char) => polishMap[char] || char)
    .replace(/\s+/g, " ")
    .trim();
}

function textFromPortableBlocks(blocks) {
  if (!Array.isArray(blocks)) {
    return "";
  }

  return blocks
    .map((block) => {
      if (!block || typeof block !== "object" || !Array.isArray(block.children)) {
        return "";
      }

      return block.children
        .map((child) =>
          child && typeof child === "object" && typeof child.text === "string"
            ? child.text
            : ""
        )
        .join("");
    })
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function span(text, marks = []) {
  return {
    _type: "span",
    _key: `span-${Math.random().toString(36).slice(2, 10)}`,
    text,
    marks,
  };
}

function block(children, options = {}) {
  return {
    _type: "block",
    _key: `block-${Math.random().toString(36).slice(2, 10)}`,
    style: "normal",
    markDefs: [],
    children,
    ...options,
  };
}

function introBlock(keyword, sentence) {
  if (!keyword || !keyword.trim()) {
    return block([span(sentence)]);
  }

  return block([
    span(`${sentence} Najczęściej wyszukiwana fraza to `),
    span(keyword, ["strong"]),
    span("."),
  ]);
}

function bulletBlock(text) {
  return block([span(text)], { listItem: "bullet", level: 1 });
}

function paragraphBlock(text) {
  return block([span(text)]);
}

function richTemplate(keyword, intro, bullets, closing, options = {}) {
  const noList = Boolean(options.noList);
  const result = [introBlock(keyword, intro)];

  if (noList) {
    if (Array.isArray(bullets) && bullets.length > 0) {
      for (const paragraph of bullets) {
        result.push(paragraphBlock(paragraph));
      }
    }
  } else {
    for (const bullet of bullets) {
      result.push(bulletBlock(bullet));
    }
  }

  if (closing) {
    result.push(paragraphBlock(closing));
  }
  return result;
}

const CITY_NAMES = [
  "Bydgoszcz",
  "Chojnice",
  "Choszczno",
  "Gniezno",
  "Gorzów Wlkp.",
  "Grudziądz",
  "Konin",
  "Koszalin",
  "Miastko",
  "Piła",
  "Stargard",
  "Szczecinek",
  "Toruń",
  "Trzcianka",
  "Wałcz",
  "Września",
  "Zielona Góra",
  "Złotów",
];

const CITY_NORMALIZED = CITY_NAMES.map((city) => ({
  city,
  normalized: normalize(city.replace(" Wlkp.", "").replace(".", "")),
}));

function findCity(question) {
  const normalizedQuestion = normalize(question);

  for (const entry of CITY_NORMALIZED) {
    if (normalizedQuestion.includes(entry.normalized)) {
      return entry.city;
    }
  }

  return null;
}

function extractSeoPhrase(question) {
  const cleaned = question
    .replace(/\?+$/g, "")
    .split(" - ")[0]
    .trim();

  const patterns = [
    /(pozycjonowanie stron internetowych [^?]+)/i,
    /(tworzenie stron(?: internetowych)?(?: www)? [^?]+)/i,
    /(projektowanie stron(?: internetowych)? [^?]+)/i,
    /(koszt strony internetowej [^?]+)/i,
    /(koszt stron(?:y)? www [^?]+)/i,
    /(co zawiera strona internetowa [^?]+)/i,
    /(co zawieraja strony(?: internetowe| www)? [^?]+)/i,
    /(dlaczego warto wybrac strony internetowe [^?]+)/i,
    /(czy inwestycja w strony www [^?]+)/i,
    /(strony internetowe [^?]+)/i,
    /(strony www [^?]+)/i,
    /(sklep internetowy woocommerce)/i,
    /(sklepy prestashop)/i,
    /(sklep(?:u)?(?: na)? prestashop)/i,
    /(wordpress shield)/i,
    /(strefa klienta)/i,
  ];

  for (const pattern of patterns) {
    const match = cleaned.match(pattern);
    if (match && match[1]) {
      return match[1].trim();
    }
  }

  return "";
}

const fallbackQuestions = new Set();

function manualFaqAnswer(question, rawAnswer) {
  const city = findCity(question);
  const q = normalize(question);
  const seoPhrase = extractSeoPhrase(question);
  const allowList =
    q.includes("co zawiera") ||
    q.includes("co zawieraja") ||
    q.includes("kto bedzie pracowal nad strona");
  const noList = !allowList;
  const template = (keyword, intro, bullets, closing) => {
    const resolvedKeyword =
      seoPhrase ||
      (typeof keyword === "string" && keyword.toLowerCase().includes("pozycjonowanie")
        ? keyword
        : "");
    return richTemplate(resolvedKeyword, intro, bullets, closing, { noList });
  };
  const originalText =
    typeof rawAnswer === "string" ? rawAnswer : textFromPortableBlocks(rawAnswer);

  if (q.includes("pozycjonowanie stron internetowych")) {
    const cityText = city ? `lokalnie (np. ${city})` : "lokalnie";
    return template(
      `Pozycjonowanie ${cityText}`,
      "To stały proces, który buduje widoczność marki i realnie zwiększa liczbę zapytań od klientów.",
      [
        "Zaczynamy od audytu SEO i analizy konkurencji.",
        "Tworzymy treści pod konkretne frazy sprzedażowe i lokalne.",
        "Wzmacniamy stronę technicznie: szybkość, struktura i linkowanie wewnętrzne.",
        "Co miesiąc raportujemy efekty i skalujemy działania, które dają najlepszy zwrot.",
      ],
      "Dzięki temu strona pracuje na leady, a nie tylko „jest obecna” w internecie."
    );
  }

  if (
    q.includes("jak dlugo trwa tworzenie stron") ||
    q.includes("jak dlugo trwa przygotowanie stron") ||
    q.includes("jak dlugo bede czekal na strone") ||
    q.includes("ile czasu zajmie przygotowanie strony")
  ) {
    return template(
      "Czas realizacji",
      "Termin zależy od zakresu projektu, ale zawsze pracujemy na konkretnym harmonogramie i jasnych etapach.",
      [
        "Etap 1: warsztat i brief (cele, oferta, grupa docelowa).",
        "Etap 2: UX i projekt graficzny do akceptacji.",
        "Etap 3: wdrożenie, testy i poprawki.",
        "Etap 4: publikacja oraz krótkie szkolenie z obsługi strony.",
      ],
      "Po zebraniu wymagań podajemy realny termin i trzymamy się ustalonego planu."
    );
  }

  if (
    q.includes("jak dlugo bede czekal na sklep") ||
    q.includes("jak dlugo trwa tworzenie sklepu") ||
    q.includes("jak dlugo bede czekal na stworzenie sklepu")
  ) {
    return template(
      "Termin uruchomienia sklepu",
      "Sklep wymaga dopracowania procesów sprzedaży, dlatego czas realizacji zależy od liczby funkcji i produktów.",
      [
        "Projektujemy architekturę sklepu i ścieżkę zakupową.",
        "Wdrażamy płatności, dostawy oraz konfigurację podatków.",
        "Przygotowujemy SEO techniczne i szablony opisów produktów.",
        "Przed startem wykonujemy testy koszyka, płatności i automatyzacji.",
      ],
      "Po starcie monitorujemy dane i optymalizujemy sklep pod konwersję."
    );
  }

  if (q.includes("kto bedzie pracowal nad strona")) {
    return template(
      "Zespół projektowy",
      "Nad stroną pracuje zespół specjalistów, dzięki czemu każdy obszar jest dopracowany jakościowo.",
      [
        "Project Manager dba o harmonogram, komunikację i priorytety.",
        "UX/UI Designer odpowiada za strukturę i doświadczenie użytkownika.",
        "Developer wdraża stronę i dba o wydajność oraz stabilność.",
        "Specjalista SEO/CRO wspiera widoczność i konwersję strony.",
      ],
      "To podejście minimalizuje ryzyko błędów i przyspiesza osiąganie efektów biznesowych."
    );
  }

  if (
    q.includes("czy inwestycja w strony www") ||
    q.includes("czy to sie oplaca") ||
    q.includes("czy warto zamowic projekt") ||
    q.includes("co zyskam") ||
    q.includes("co zyskujesz") ||
    q.includes("po co mi strona internetowa") ||
    q.includes("czy warto zdecydowac sie na strony")
  ) {
    const cityTextSafe = city ? `na rynku lokalnym (np. ${city})` : "w Twojej branży";
    return template(
      "Zwrot z inwestycji",
      `Dobrze zaprojektowana strona ${cityTextSafe} realnie wspiera sprzedaż, buduje zaufanie i skraca drogę klienta do kontaktu.`,
      [
        "Lepsza prezentacja oferty zwiększa liczbę zapytań ofertowych.",
        "Spójny wizerunek wzmacnia wiarygodność marki.",
        "Szybka i intuicyjna strona poprawia konwersję.",
        "Pozycjonowanie lokalne zapewnia stały dopływ nowych klientów.",
      ],
      "W praktyce strona staje się aktywnym kanałem sprzedaży, a nie tylko wizytówką."
    );
  }

  if (
    q.includes("co zawiera strona internetowa") ||
    q.includes("co zawieraja strony")
  ) {
    return template(
      "Zakres strony",
      "Zakres dopasowujemy do celu biznesowego, ale rdzeń projektu zawsze obejmuje komplet elementów niezbędnych do pozyskiwania klientów.",
      [
        "Indywidualny projekt graficzny zgodny z identyfikacją marki.",
        "Sekcje sprzedażowe: oferta, korzyści, realizacje i CTA.",
        "Optymalizacja techniczna: szybkość, responsywność i SEO podstawowe.",
        "Integracje: formularze, analityka, mapy i social media.",
      ],
      "Dzięki temu strona jest gotowa do działań marketingowych od pierwszego dnia."
    );
  }

  if (q.includes("co wyroznia")) {
    return template(
      "Co nas wyróżnia",
      "Skupiamy się na efekcie biznesowym, dlatego projektujemy strony tak, aby estetyka wspierała sprzedaż.",
      [
        "Projekt łączący UX, strategię treści i nowoczesny design.",
        "Mierzalne podejście: analityka i decyzje oparte na danych.",
        "Kompleksowa realizacja od koncepcji po wdrożenie.",
        "Wsparcie po starcie: rozwój, SEO i dalsza optymalizacja.",
      ],
      "To podejście przekłada się na stronę, która pracuje na wynik, nie tylko wygląda."
    );
  }

  if (
    q.includes("koszt strony") ||
    q.includes("koszt stron")
  ) {
    return template(
      "Koszt realizacji",
      "Cena strony zależy od zakresu funkcji, złożoności projektu i celów sprzedażowych.",
      [
        "Na wycenę wpływa liczba podstron i poziom personalizacji projektu.",
        "Dodatkowe integracje (CRM, płatności, automatyzacje) rozszerzają zakres.",
        "Znaczenie ma też przygotowanie treści, SEO i materiałów graficznych.",
        "Po briefie otrzymujesz precyzyjną wycenę oraz zakres prac.",
      ],
      "Dzięki temu od początku wiesz, za co płacisz i jaki wynik ma dostarczyć projekt."
    );
  }

  if (q.includes("dlaczego warto wybrac") || q.includes("dlaczego warto nam zaufac")) {
    return template(
      "Dlaczego warto z nami pracować",
      "Łączymy kompetencje projektowe, techniczne i marketingowe, dlatego dowozimy nie tylko stronę, ale przede wszystkim wynik.",
      [
        "Pracujemy procesowo i transparentnie na każdym etapie.",
        "Każdy projekt opieramy o cele biznesowe i potrzeby użytkownika.",
        "Stawiamy na wydajność, SEO i łatwość dalszego rozwoju strony.",
        "Po wdrożeniu oferujemy wsparcie i dalszą optymalizację.",
      ],
      "To daje stabilny fundament do skalowania sprzedaży online."
    );
  }

  if (
    q.includes("czy bede mogl sam zarzadzac tresciami") ||
    q.includes("czy sam bede mogl dodawac zdjecia")
  ) {
    return template(
      "Samodzielna edycja treści",
      "Tak, po wdrożeniu otrzymujesz prosty panel CMS i pełną kontrolę nad treścią.",
      [
        "Możesz edytować teksty, zdjęcia i sekcje oferty bez wsparcia developera.",
        "Panel jest intuicyjny i dostosowany do codziennej pracy zespołu.",
        "Dostajesz instrukcję oraz krótkie szkolenie z obsługi.",
        "W razie potrzeby zapewniamy wsparcie i konsultacje po starcie.",
      ],
      "Dzięki temu szybko aktualizujesz ofertę i reagujesz na potrzeby rynku."
    );
  }

  if (
    q.includes("czy strona bedzie responsywna") ||
    (q.includes("czy moj sklep") && q.includes("responsywny"))
  ) {
    return template(
      "Responsywność",
      "Tak, projektujemy i wdrażamy strony w standardzie mobile-first.",
      [
        "Interfejs jest czytelny na telefonach, tabletach i desktopie.",
        "Dbamy o szybkość działania oraz Core Web Vitals.",
        "Testujemy kluczowe widoki na wielu rozdzielczościach.",
        "Optymalizujemy elementy konwersyjne pod urządzenia mobilne.",
      ],
      "To przekłada się na lepsze doświadczenie użytkownika i wyższy współczynnik konwersji."
    );
  }

  if (q.includes("czy projekt") && q.includes("unikalny")) {
    return template(
      "Unikalny projekt",
      "Tak, każdą realizację projektujemy indywidualnie pod markę i jej cele sprzedażowe.",
      [
        "Tworzymy własny layout, a nie kopiujemy gotowych szablonów.",
        "Projekt jest spójny z identyfikacją wizualną firmy.",
        "Uwzględniamy specyfikę branży i zachowania użytkowników.",
        "Dopracowujemy detale pod czytelność i konwersję.",
      ],
      "Dzięki temu strona wyróżnia markę i buduje profesjonalny wizerunek."
    );
  }

  if (q.includes("czy mam wplyw na wyglad sklepu")) {
    return template(
      "Wpływ na projekt sklepu",
      "Tak, masz realny wpływ na wygląd i funkcje sklepu na każdym etapie realizacji.",
      [
        "Pracujemy na makietach i widokach, które akceptujesz krok po kroku.",
        "Możesz zgłaszać uwagi do układu, kolorystyki i elementów sprzedażowych.",
        "Dostosowujemy projekt do charakteru marki i Twojej grupy docelowej.",
        "Finalny wygląd sklepu zatwierdzasz przed wdrożeniem produkcyjnym.",
      ],
      "Dzięki temu sklep jest spójny z Twoją wizją i skuteczny sprzedażowo."
    );
  }

  if (q.includes("wersjach jezykowych") || q.includes("w innych jezykach")) {
    return template(
      "Wersje językowe",
      "Tak, realizujemy sklepy i strony wielojęzyczne wraz z poprawną strukturą SEO.",
      [
        "Wdrażamy oddzielne wersje językowe z właściwą nawigacją.",
        "Dbamy o poprawne adresy URL i znaczniki hreflang.",
        "Porządkujemy treści i kategorie pod każdy rynek.",
        "Pilnujemy spójności checkoutu i komunikatów systemowych.",
      ],
      "To ułatwia ekspansję i poprawia widoczność w wynikach wyszukiwania."
    );
  }

  if (q.includes("nie mam logo")) {
    return template(
      "Wsparcie brandingowe",
      "Tak, możemy pomóc w przygotowaniu logo i podstawowej identyfikacji wizualnej.",
      [
        "Ustalamy kierunek graficzny zgodny z profilem firmy.",
        "Tworzymy logo, dobór kolorów i zasady użycia materiałów.",
        "Projektujemy elementy wizualne pod stronę i social media.",
        "Zapewniamy spójność całego wizerunku marki online.",
      ],
      "Dzięki temu startujesz ze spójnym i profesjonalnym brandem."
    );
  }

  if (q.includes("nie mam opisow") || q.includes("nie mam tresci")) {
    return template(
      "Tworzenie treści",
      "Tak, przygotowujemy komplet treści sprzedażowych i SEO do strony lub sklepu.",
      [
        "Opracowujemy strukturę treści pod intencje użytkownika.",
        "Piszemy opisy usług/produktów z naciskiem na konwersję.",
        "Wplatamy frazy kluczowe w naturalny i czytelny sposób.",
        "Dbamy o spójny ton komunikacji z marką.",
      ],
      "To skraca czas realizacji i poprawia skuteczność strony po uruchomieniu."
    );
  }

  if (
    q.includes("social media") ||
    q.includes("social media")
  ) {
    return template(
      "Integracja z social media",
      "Tak, integrujemy stronę z kanałami social media, aby zwiększyć zasięg i ułatwić kontakt.",
      [
        "Podpinamy profile społecznościowe i przyciski udostępniania.",
        "Wdrażamy metadane Open Graph pod atrakcyjne podglądy linków.",
        "Łączymy formularze i CTA z kampaniami reklamowymi.",
        "Pomagamy mierzyć efekty ruchu z social mediów.",
      ],
      "W efekcie kanały social wspierają sprzedaż i ruch na stronie."
    );
  }

  if (q.includes("w jaki sposob moge promowac") && q.includes("sklep")) {
    return template(
      "Promocja sklepu",
      "Najlepsze efekty daje połączenie SEO, kampanii płatnych i regularnej pracy nad treściami.",
      [
        "Zadbaj o SEO kategorii i kart produktów.",
        "Uruchom Google Ads/Meta Ads pod konkretne cele sprzedażowe.",
        "Wykorzystaj e-mail marketing i automatyzacje odzyskiwania koszyka.",
        "Analizuj dane i optymalizuj ofertę na podstawie konwersji.",
      ],
      "Spójna strategia promocji przyspiesza wzrost sprzedaży i marży."
    );
  }

  if (q.includes("w jaki sposob moge sie promowac")) {
    return template(
      "Promocja strony",
      "Skuteczna promocja łączy działania organiczne i płatne, dopasowane do etapu rozwoju firmy.",
      [
        "Pozycjonowanie lokalne i content pod kluczowe usługi.",
        "Kampanie Google Ads pod leady o wysokiej jakości.",
        "Aktywna obecność w social media i remarketing.",
        "Stała analiza konwersji i ulepszanie treści strony.",
      ],
      "To pozwala stabilnie zwiększać ruch i liczbę zapytań ofertowych."
    );
  }

  if (q.includes("ile kosztuje utrzymanie sklepu")) {
    return template(
      "Koszt utrzymania sklepu",
      "Koszt utrzymania zależy od skali sklepu, liczby integracji i intensywności działań marketingowych.",
      [
        "Stałe koszty to hosting, domena i aktualizacje systemu.",
        "Dodatkowe koszty mogą obejmować integracje i rozwój funkcji.",
        "Wydatki marketingowe warto planować oddzielnie od kosztów technicznych.",
        "Pomagamy dobrać model utrzymania adekwatny do skali biznesu.",
      ],
      "Dzięki temu kontrolujesz budżet i inwestujesz tam, gdzie jest największy zwrot."
    );
  }

  if (q.includes("jak dziala strefa klienta")) {
    return template(
      "Strefa klienta",
      "Strefa klienta porządkuje współpracę i daje pełną kontrolę nad postępem prac.",
      [
        "Masz dostęp do harmonogramu, zadań i materiałów projektowych.",
        "W jednym miejscu zgłaszasz uwagi i akceptujesz etapy.",
        "Widzisz historię zmian oraz aktualny status realizacji.",
        "Komunikacja jest szybsza i bardziej uporządkowana.",
      ],
      "To skraca proces decyzyjny i ułatwia terminową realizację projektu."
    );
  }

  if (q.includes("dlaczego blog jest wazny")) {
    return template(
      "Rola bloga",
      "Blog buduje widoczność SEO i pozwala regularnie pozyskiwać ruch z wyszukiwarki.",
      [
        "Treści edukacyjne wzmacniają pozycję eksperta w branży.",
        "Artykuły odpowiadają na pytania klientów na różnych etapach zakupu.",
        "Wpisy zwiększają liczbę fraz, na które widoczna jest strona.",
        "Blog dostarcza wartościowy ruch, który łatwiej zamienia się w leady.",
      ],
      "To jeden z najbardziej opłacalnych kanałów długoterminowego marketingu."
    );
  }

  if (q.includes("nie jestes pewien")) {
    return template(
      "Konsultacja przed startem",
      "To normalne, że na starcie pojawia się wiele pytań. Dlatego zaczynamy od konsultacji i doprecyzowania celu projektu.",
      [
        "Analizujemy obecną sytuację i potencjał Twojej oferty.",
        "Dobieramy zakres działań adekwatny do budżetu i etapu firmy.",
        "Pokazujemy priorytety, które najszybciej przyniosą efekt.",
        "Wspólnie ustalamy plan działania krok po kroku.",
      ],
      "Po rozmowie masz jasność, co wdrożyć najpierw i dlaczego."
    );
  }

  if (q.includes("czy moge liczyc na wasza pomoc") && q.includes("pomyslu na sklep")) {
    return template(
      "Wsparcie strategiczne",
      "Tak, pomagamy zaplanować koncepcję sklepu od strony biznesowej i UX.",
      [
        "Wspólnie definiujemy grupę docelową i strukturę oferty.",
        "Dobieramy funkcje sklepu do modelu sprzedaży.",
        "Projektujemy ścieżkę zakupową pod konwersję.",
        "Przygotowujemy plan wdrożenia i rozwoju po starcie.",
      ],
      "Dzięki temu sklep od początku ma spójną strategię i lepiej konwertuje."
    );
  }

  if (q === "test") {
    return template(
      "Wsparcie projektu",
      "Pomożemy dobrać najlepszy kierunek działań pod Twój cel biznesowy.",
      [
        "Przeanalizujemy obecną sytuację i potencjał rynku.",
        "Ustalimy priorytety wdrożenia, które najszybciej dadzą efekt.",
        "Przygotujemy plan rozwoju strony i działań marketingowych.",
      ],
      "Skontaktuj się z nami, a zaproponujemy konkretny plan krok po kroku."
    );
  }

  fallbackQuestions.add(question);

  const fallbackIntro =
    originalText ||
    "Treść odpowiedzi została przygotowana do dalszej redakcji.";

  return template(
    "Najważniejsze informacje",
    fallbackIntro,
    [
      "Dopasowujemy rozwiązanie do celu biznesowego i grupy docelowej.",
      "Dbamy o jakość techniczną, UX oraz widoczność SEO.",
      "Wspieramy klienta także po wdrożeniu strony lub sklepu.",
    ],
    "Jeśli chcesz, dopracujemy ten zakres jeszcze dokładniej pod Twoją branżę."
  );
}

loadEnvFile(resolve(process.cwd(), ".env.local"));

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error(
    "Brakuje zmiennych SANITY. Upewnij sie, ze NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET i SANITY_API_WRITE_TOKEN sa ustawione."
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

async function run() {
  const pages = await client.fetch(
    `*[_type == "page" && count(faqs) > 0]{
      _id,
      "slug": slug.current,
      faqs
    } | order(slug asc)`
  );

  let updated = 0;

  for (const page of pages) {
    const faqs = Array.isArray(page.faqs) ? page.faqs : [];
    if (!faqs.length) {
      continue;
    }

    const formattedFaqs = faqs
      .map((faq, index) => {
        const question =
          typeof faq?.question === "string" ? faq.question.trim() : "";
        if (!question) {
          return null;
        }

        return {
          _type: "faqItem",
          _key:
            typeof faq?._key === "string"
              ? faq._key
              : `faq-${index + 1}-${Math.random().toString(36).slice(2, 6)}`,
          question,
          answer: manualFaqAnswer(question, faq?.answer),
        };
      })
      .filter(Boolean);

    if (!formattedFaqs.length) {
      continue;
    }

    await client.patch(page._id).set({ faqs: formattedFaqs }).commit();
    updated += 1;
    console.log(`OK: ${page.slug} -> ${formattedFaqs.length} FAQ sformatowane`);
  }

  console.log(`Zakonczono. Sformatowano FAQ dla ${updated} stron.`);

  if (fallbackQuestions.size > 0) {
    console.log("\nPytania z fallbackiem (do recznego dopracowania 1:1):");
    for (const q of [...fallbackQuestions].sort((a, b) => a.localeCompare(b, "pl"))) {
      console.log(`- ${q}`);
    }
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

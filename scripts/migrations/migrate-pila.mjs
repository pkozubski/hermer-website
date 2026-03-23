/**
 * Migration script: Insert Piła SEO landing page data into Sanity.
 *
 * Run from project root: node scripts/migrate-pila.mjs
 */

import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, "..", ".env.local");
const envContent = readFileSync(envPath, "utf-8");

function getEnv(key) {
  const match = envContent.match(new RegExp(`^${key}=(.+)$`, "m"));
  return match ? match[1].trim() : undefined;
}

const client = createClient({
  projectId: getEnv("NEXT_PUBLIC_SANITY_PROJECT_ID"),
  dataset: getEnv("NEXT_PUBLIC_SANITY_DATASET"),
  apiVersion: "2024-01-01",
  token: getEnv("SANITY_API_WRITE_TOKEN"),
  useCdn: false,
});

const pilaDoc = {
  _type: "seoLandingPage",
  title: "Piła",
  slug: { _type: "slug", current: "tworzenie-stron-www-pila" },
  cityName: "Piła",
  heroBadge: "Specjalna oferta dla mieszkańców Piły",
  heroSubtitle: "Zbudujemy stronę idealnie dopasowaną do Twoich potrzeb",
  benefitsTitle: "Profesjonalna witryna to nowe możliwości dla Twojej firmy:",
  benefits: [
    {
      _key: "b1",
      _type: "benefitCard",
      icon: "palette",
      iconColor: "purple",
      title: "Lepsza widoczność w sieci",
      description: "Strona z wysokiej jakości grafiką zauważalna przez klientów.",
    },
    {
      _key: "b2",
      _type: "benefitCard",
      icon: "users",
      iconColor: "cyan",
      title: "Większy ruch i nowi klienci",
      description: "Wysoka jakość strony zachęci użytkowników sieci do pozostania na stronie.",
    },
    {
      _key: "b3",
      _type: "benefitCard",
      icon: "trending-up",
      iconColor: "purple",
      title: "Kompleksowe wsparcie",
      description: "Projektowanie stron internetowych odbywa się przy pomocy kompletnego zespołu.",
    },
  ],
  detailedSections: [
    {
      _key: "ds1",
      _type: "detailedSection",
      number: 1,
      title: "Lepsza widoczność w sieci",
      barColor: "purple",
      description: "Dzięki umiejętnie zaprojektowanej stronie www zrobisz pozytywne wrażenie na swoich klientach. Zyskasz przewagę nad konkurencją, będziesz postrzegany jako profesjonalista przez osoby odwiedzające Twoją witrynę i zdobędziesz ich zaufanie.",
    },
    {
      _key: "ds2",
      _type: "detailedSection",
      number: 2,
      title: "Większy ruch na stronie i nowi klienci",
      barColor: "cyan",
      description: "Zachęcająca wizualnie strona, która jest jednocześnie funkcjonalna i posiada ważne dla klienta informacje, będzie realizować założone cele biznesowe.",
    },
    {
      _key: "ds3",
      _type: "detailedSection",
      number: 3,
      title: "Kompleksowe wsparcie specjalistów",
      barColor: "purple",
      description: "Budujemy strony internetowe, opierając się na uzgodnionych wytycznych, przeprowadzonej analizie konkurencji oraz znajomości obowiązujących trendów i rozwiązań technicznych.",
    },
  ],
  departmentsTitle: "Działy wspierające tworzenie stron internetowych Piła to:",
  faqs: [
    {
      _key: "faq1",
      _type: "faqItem",
      question: "Tworzenie stron www Piła - czy warto zamówić projekt?",
      answer: [{ _key: "faq1a", _type: "block", style: "normal", markDefs: [], children: [{ _key: "faq1a1", _type: "span", marks: [], text: "Masz wątpliwości czy posiadanie własnej strony jest opłacalne? Posiadanie witryny przyjaznej użytkownikom to znakomity sposób na to, by dowiedziało się o Twojej firmie wiele osób nie tylko z Piły, ale i z najodleglejszych zakątków Polski. Efektywna i bezkonkurencyjna strona internetowa jest inwestycją, która zwróci się w krótkim czasie." }] }],
    },
    {
      _key: "faq2",
      _type: "faqItem",
      question: "Pozycjonowanie stron internetowych Piła",
      answer: [{ _key: "faq2a", _type: "block", style: "normal", markDefs: [], children: [{ _key: "faq2a1", _type: "span", marks: [], text: "Tworzenie stron www to nasza specjalność, dlatego oprócz zaprojektowania witryny, podejmiemy działania, aby ją wypromować. Wiemy, jak ważne jest, aby Twoja firma była widoczna w Google, dlatego postaramy się, aby to osiągnąć. Nasi eksperci ds. marketingu opracują strategię, dzięki której witryna znajdzie się na szczycie strony wyników wyszukiwania." }] }],
    },
    {
      _key: "faq3",
      _type: "faqItem",
      question: "Jak długo trwa tworzenie stron www Piła?",
      answer: [{ _key: "faq3a", _type: "block", style: "normal", markDefs: [], children: [{ _key: "faq3a1", _type: "span", marks: [], text: "Czas potrzebny na zbudowanie strony internetowej zależy od różnych czynników m.in. tego, jak skomplikowany ma być projekt. W związku z tym niezbędne są indywidualne konsultacje, które pozwolą nam zbierać szczegółowe informacje związane z przyszłym projektem strony internetowej. Na podstawie zgromadzonych danych oszacujemy czas potrzebny na przygotowanie Twojej witryny." }] }],
    },
    {
      _key: "faq4",
      _type: "faqItem",
      question: "Kto będzie pracował nad stroną internetową?",
      answer: [{ _key: "faq4a", _type: "block", style: "normal", markDefs: [], children: [{ _key: "faq4a1", _type: "span", marks: [], text: "Dążymy do tego, aby tworzenie stron Piła odbywało się profesjonalnie, dlatego pracą nad Twoją stroną zajmie się doświadczony zespół osób specjalizujących się w kilku dziedzinach. Powierzając nam przygotowanie witryny, otrzymujesz gwarancję, że Twoja strona www będzie kompletna i funkcjonalna." }] }],
    },
    {
      _key: "faq5",
      _type: "faqItem",
      question: "Czy inwestycja w strony www Piła się opłaca?",
      answer: [{ _key: "faq5a", _type: "block", style: "normal", markDefs: [], children: [{ _key: "faq5a1", _type: "span", marks: [], text: "Tak, zakup strony internetowej jest opłacalny, ponieważ dzięki niej możesz w elegancki sposób wyeksponować produkty i usługi swojej firmy. Oferując atrakcyjną zachętę w postaci nowoczesnej witryny, masz znacznie większe szanse na dotarcie do szerokiego grona klientów. To doprowadzi do zwiększenia zysków Twojej firmy." }] }],
    },
  ],
};

async function migrate() {
  console.log("🚀 Migrating Piła data to Sanity...");

  try {
    const existing = await client.fetch(
      `*[_type == "seoLandingPage" && slug.current == "tworzenie-stron-www-pila"][0]._id`
    );

    if (existing) {
      console.log(`⚠️  Document already exists (ID: ${existing}). Skipping.`);
      return;
    }

    const result = await client.create(pilaDoc);
    console.log(`✅ Created document: ${result._id}`);
    console.log(`📄 Title: ${result.title}`);
    console.log(`🔗 Slug: ${result.slug.current}`);
    console.log("\n🎉 Migration complete! Refresh /tworzenie-stron-www-pila/ to see data from Sanity.");
  } catch (error) {
    console.error("❌ Migration failed:", error.message);
    process.exit(1);
  }
}

migrate();

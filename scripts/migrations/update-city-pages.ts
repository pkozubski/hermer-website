import { writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { CITY_SEO_PAGES } from "../src/data/seo/cityData";

const __dirname = dirname(fileURLToPath(import.meta.url));

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// Convert "strony-internetowe-chojnice" to "ChojniceSeoPage"
function getComponentName(slug: string, cityName: string) {
  // Normalize city name for JS function name (remove spaces, dashes, accents)
  const normalized = cityName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "");
  return `${capitalize(normalized)}SeoPage`;
}

async function updatePages() {
  console.log("🚀 Starting generation of page.tsx files for all cities...");

  const slugs = Object.keys(CITY_SEO_PAGES);

  for (const slug of slugs) {
    // Skip Piła since we've already done it perfectly and don't want to risk overwriting with a minor typo
    if (slug === "tworzenie-stron-www-pila") {
      continue;
    }

    const cityObj = CITY_SEO_PAGES[slug];
    const componentName = getComponentName(slug, cityObj.cityName);

    const template = `import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { SEO_LANDING_PAGE_QUERY, PAGE_FAQS_QUERY } from "@/sanity/lib/queries";
import { buildPageMetadataFromSanitySeo } from "@/sanity/lib/seo";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { CITY_SEO_PAGES } from "@/data/seo/cityData";
import type { SanityLandingPage, SanityFaqItem } from "@/sanity/types/seoLandingPage";
import { sanitizeBenefit, sanitizeSection, mapFaqs } from "@/sanity/lib/seoLandingPageHelpers";
import type { SeoLandingPageProps } from "@/components/seo/SeoLandingPage";

const SLUG = "${slug}";
const CITY = "${cityObj.cityName}";
const fallbackConfig = CITY_SEO_PAGES[SLUG];

// ─── SEO Metadata ───────────────────────────────────────────────────

const FALLBACK_SEO = {
  title: \`Strony internetowe \${CITY} - Tworzenie stron www \${CITY}\`,
  description: \`Profesjonalne tworzenie stron internetowych \${CITY}. Nowoczesne strony www dla firm z \${CITY} i okolic. Sprawdź naszą ofertę!\`,
  canonical: \`https://hermer.pl/\${SLUG}\`,
  imageUrl: "https://hermer.pl/og-image.jpg",
  imageAlt: \`Strony internetowe \${CITY} - Hermer\`,
  siteName: "Hermer - Efektywne strony internetowe",
  keywords: [
    \`strony internetowe \${CITY}\`,
    \`tworzenie stron www \${CITY}\`,
    \`projektowanie stron \${CITY}\`,
    "strony internetowe",
    "tworzenie stron www",
  ] as readonly string[],
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch<SanityLandingPage | null>(
    SEO_LANDING_PAGE_QUERY,
    { slug: SLUG },
    { next: { revalidate: 3600 } }
  );

  return buildPageMetadataFromSanitySeo(data?.seo ?? null, FALLBACK_SEO);
}

// ─── Page ───────────────────────────────────────────────────────────

export default async function ${componentName}() {
  const sanityData = await client.fetch<SanityLandingPage | null>(
    SEO_LANDING_PAGE_QUERY,
    { slug: SLUG },
    { next: { revalidate: 3600 } }
  );

  if (sanityData) {
    const faqItems = sanityData.faqs?.length
      ? mapFaqs(sanityData.faqs)
      : fallbackConfig.fallbackFaq;

    const props: SeoLandingPageProps = {
      cityName: sanityData.cityName,
      heroTitle: sanityData.heroTitle || undefined,
      heroBadge: sanityData.heroBadge,
      heroSubtitle: sanityData.heroSubtitle,
      benefitsTitle: sanityData.benefitsTitle,
      benefits: sanityData.benefits.map(sanitizeBenefit),
      detailedSections: sanityData.detailedSections.map(sanitizeSection),
      departmentsTitle: sanityData.departmentsTitle,
      faqItems,
      ctaTitle: sanityData.ctaTitle || undefined,
      ctaSubtitleLines: sanityData.ctaSubtitleLines ?? undefined,
    };

    return <SeoLandingPage {...props} />;
  }

  // Fallback: use cityData.ts config + fetch FAQs from Sanity "page" type
  const pageData = await client.fetch<{ faqs?: SanityFaqItem[] } | null>(
    PAGE_FAQS_QUERY,
    { slug: SLUG },
    { next: { revalidate: 3600 } }
  );

  const faqItems = pageData?.faqs?.length
    ? mapFaqs(pageData.faqs)
    : fallbackConfig.fallbackFaq;

  return <SeoLandingPage {...fallbackConfig} faqItems={faqItems} />;
}
`;

    const dirPath = resolve(__dirname, "..", "src", "app", slug);
    const filePath = resolve(dirPath, "page.tsx");

    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true });
      console.log(`📁 Created directory: ${slug}`);
    }

    writeFileSync(filePath, template, "utf-8");
    console.log(`✅ Generated page for ${cityObj.cityName} (${slug})`);
  }

  console.log("\n🎉 All city pages have been generated successfully!");
}

updatePages();

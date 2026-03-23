import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { CITY_SEO_PAGES } from "../src/data/seo/cityData";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, "..", ".env.local");
const envContent = readFileSync(envPath, "utf-8");

function getEnv(key: string) {
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

async function migrateAll() {
  console.log("🚀 Starting migration of all city SEO pages to Sanity...");

  const slugs = Object.keys(CITY_SEO_PAGES);
  
  for (const slug of slugs) {
    const data = CITY_SEO_PAGES[slug];
    
    console.log(`\n⏳ Checking ${data.cityName} (${slug})...`);
    
    try {
      const existing = await client.fetch(
        `*[_type == "seoLandingPage" && slug.current == $slug][0]._id`,
        { slug }
      );

      if (existing) {
        console.log(`⚠️  Document already exists (ID: ${existing}). Skipping.`);
        continue;
      }

      // Prepare document
      const doc = {
        _type: "seoLandingPage",
        _id: `seo-city-${slug}`, // Stable ID
        title: data.cityName,
        slug: { _type: "slug", current: slug },
        cityName: data.cityName,
        heroTitle: data.heroTitle,
        heroBadge: data.heroBadge,
        heroSubtitle: data.heroSubtitle,
        benefitsTitle: data.benefitsTitle,
        benefits: data.benefits.map((b, i) => ({
          _key: `b-${i}`,
          _type: "benefitCard",
          icon: b.icon,
          iconColor: b.iconColor,
          title: b.title,
          description: b.description,
          // Omitting image as we converted it to Sanity Image type, string paths won't work directly
        })),
        detailedSections: data.detailedSections.map((s, i) => ({
          _key: `ds-${i}`,
          _type: "detailedSection",
          number: s.number,
          title: s.title,
          barColor: s.barColor,
          description: s.description,
          teamCards: s.teamCards ? s.teamCards.map((tc, tci) => ({
            _key: `tc-${tci}`,
            title: tc.title,
            desc: tc.desc,
          })) : undefined,
        })),
        departmentsTitle: data.departmentsTitle,
        faqs: data.fallbackFaq.map((faq, i) => ({
          _key: `faq-${i}`,
          _type: "faqItem",
          question: faq.question,
          answer: [
            {
              _key: `faq-block-${i}`,
              _type: "block",
              style: "normal",
              markDefs: [],
              children: [
                {
                  _key: `faq-span-${i}`,
                  _type: "span",
                  marks: [],
                  // We know standard fallback answer is a string or array, handled correctly
                  text: typeof faq.answer === 'string' ? faq.answer : faq.answer[0]?.children?.[0]?.text || "",
                }
              ]
            }
          ]
        })),
        ctaTitle: data.ctaTitle,
        ctaSubtitleLines: data.ctaSubtitleLines,
      };

      const result = await client.createIfNotExists(doc);
      console.log(`✅ Created/verified document for ${data.cityName} (ID: ${result._id})`);
    } catch (error: any) {
      console.error(`❌ Migration failed for ${slug}:`, error.message);
    }
  }
  
  console.log("\n🎉 All cities processed!");
}

migrateAll();

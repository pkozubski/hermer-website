/**
 * Scrape old e-hermer.pl city pages and patch correct content into Sanity CMS.
 *
 * What it does:
 *   1. Fetches all seoLandingPage documents from Sanity (slug + _id)
 *   2. For each, fetches https://e-hermer.pl/{slug}/
 *   3. Parses the HTML to extract:
 *      - heroSubtitle (text under h1 divider)
 *      - heroBadge (badge text above h1)
 *      - benefitsTitle (h2 above benefit cards)
 *      - benefits[] (title + description)
 *      - detailedSections[] (number, title, description)
 *      - FAQ items (question + answer)
 *   4. Patches each Sanity document with the correct content
 *
 * Run:  node scripts/seed/sync-old-site-content.mjs
 */

import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { createClient } from "@sanity/client";
import { JSDOM } from "jsdom";
import { randomUUID } from "crypto";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const OLD_SITE_BASE = "https://e-hermer.pl";

// ─── Helpers ────────────────────────────────────────────────────────

function textToBlocks(text) {
  if (!text || typeof text !== "string") return [];
  const paragraphs = text.split(/\n\n|\n/).filter(Boolean);
  return paragraphs.map((p) => ({
    _type: "block",
    _key: randomUUID().slice(0, 12),
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: randomUUID().slice(0, 12),
        text: p.trim(),
        marks: [],
      },
    ],
  }));
}

function faqAnswerToBlocks(text) {
  if (!text) return [];
  // Split by double newline for paragraphs, handle lists
  const lines = text.split("\n").filter(Boolean);
  const blocks = [];
  let listItems = [];

  for (const line of lines) {
    if (line.startsWith("- ")) {
      listItems.push(line.slice(2).trim());
    } else {
      // Flush any pending list items
      if (listItems.length > 0) {
        for (const item of listItems) {
          blocks.push({
            _type: "block",
            _key: randomUUID().slice(0, 12),
            style: "normal",
            listItem: "bullet",
            level: 1,
            markDefs: [],
            children: [
              {
                _type: "span",
                _key: randomUUID().slice(0, 12),
                text: item,
                marks: [],
              },
            ],
          });
        }
        listItems = [];
      }
      blocks.push({
        _type: "block",
        _key: randomUUID().slice(0, 12),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: randomUUID().slice(0, 12),
            text: line.trim(),
            marks: [],
          },
        ],
      });
    }
  }

  // Flush remaining list items
  if (listItems.length > 0) {
    for (const item of listItems) {
      blocks.push({
        _type: "block",
        _key: randomUUID().slice(0, 12),
        style: "normal",
        listItem: "bullet",
        level: 1,
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: randomUUID().slice(0, 12),
            text: item,
            marks: [],
          },
        ],
      });
    }
  }

  return blocks;
}

// ─── Scraper ────────────────────────────────────────────────────────

async function scrapePage(slug) {
  const url = `${OLD_SITE_BASE}/${slug}/`;
  console.log(`  Fetching ${url}`);

  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`  ⚠️  HTTP ${res.status} for ${url}, skipping`);
    return null;
  }

  const html = await res.text();
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  // ── Hero badge: look for small badge-like text above h1
  const heroBadge = doc.querySelector(".hero-badge, [class*='badge']")?.textContent?.trim() || null;

  // ── Hero subtitle: text paragraph right after the h1/hero heading
  // Typically it's the first <p> inside the hero section
  const heroSection = doc.querySelector("section.hero, [class*='hero'], .hero-section");
  let heroSubtitle = null;
  if (heroSection) {
    const heroParagraph = heroSection.querySelector("p");
    if (heroParagraph) {
      heroSubtitle = heroParagraph.textContent.trim();
    }
  }

  // ── Benefits: cards with title + description
  // These are typically h3 elements followed by <p> inside a benefits/features section
  const benefits = [];
  // Try to find benefit cards: look for the 3 short card sections
  const allH3 = doc.querySelectorAll("h3");
  for (const h3 of allH3) {
    const title = h3.textContent.trim();
    // The description is the next <p> sibling or parent's <p>
    const parent = h3.parentElement;
    const desc = parent?.querySelector("p")?.textContent?.trim() || "";
    if (title && desc) {
      benefits.push({ title, description: desc });
    }
  }

  // ── Detailed Sections: numbered sections (h2 starting with number)
  const detailedSections = [];
  const allH2 = doc.querySelectorAll("h2");
  for (const h2 of allH2) {
    const text = h2.textContent.trim();
    const match = text.match(/^(\d+)\.\s+(.+)/);
    if (match) {
      const number = parseInt(match[1]);
      const title = match[2].trim();
      // Get the paragraph after this heading
      let nextEl = h2.nextElementSibling;
      let description = "";
      while (nextEl && nextEl.tagName !== "H2") {
        if (nextEl.tagName === "P") {
          description += (description ? "\n" : "") + nextEl.textContent.trim();
        }
        nextEl = nextEl.nextElementSibling;
      }
      if (title && description) {
        detailedSections.push({ number, title, description });
      }
    }
  }

  // ── FAQ: accordion items
  const faqItems = [];
  // Look for FAQ section toggle/accordion links
  const faqLinks = doc.querySelectorAll("[class*='faq'] a, [class*='accordion'] a, .faq-question, [class*='faq'] h3, .faq-item a");
  
  // Fallback: look for FAQ-like structure with alternating question/answer
  const faqSection = doc.querySelector("[class*='faq'], [id*='faq'], .faq");
  if (faqSection) {
    const faqElements = faqSection.querySelectorAll("h3, .faq-question, [class*='toggle'], [class*='accordion-header']");
    for (const el of faqElements) {
      const question = el.textContent.trim();
      // Find the answer - next sibling or panel
      let answerEl = el.nextElementSibling;
      if (!answerEl) {
        answerEl = el.parentElement?.nextElementSibling;
      }
      if (answerEl) {
        const answer = answerEl.textContent.trim();
        if (question && answer) {
          faqItems.push({ question, answer });
        }
      }
    }
  }

  return {
    heroBadge,
    heroSubtitle,
    benefits: benefits.slice(0, 3), // typically 3
    detailedSections: detailedSections.slice(0, 3), // typically 3
    faqItems,
  };
}

// ─── Alternative: use the content I already scraped via read_url_content ──

async function scrapePageSimple(slug) {
  const url = `${OLD_SITE_BASE}/${slug}/`;
  console.log(`  Fetching ${url}`);

  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`  ⚠️  HTTP ${res.status} for ${url}, skipping`);
    return null;
  }

  const html = await res.text();
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  // ── Get ALL text sections with their styles
  const body = doc.querySelector("body");
  if (!body) return null;

  // Approach: get all the main content sections
  const sections = doc.querySelectorAll("section");
  const result = {
    heroSubtitle: null,
    heroBadge: null,
    benefitsTitle: null,
    benefits: [],
    detailedSections: [],
    faqItems: [],
  };

  for (const section of sections) {
    const sectionText = section.textContent.trim();
    const sectionH1 = section.querySelector("h1");
    const sectionH2 = section.querySelector("h2");

    // Hero section detection: contains h1
    if (sectionH1) {
      // Badge - small uppercase text before h1
      const badge = section.querySelector(".badge, [class*='badge'], [class*='subtitle'], span");
      if (badge && badge.textContent.trim().length < 80) {
        result.heroBadge = badge.textContent.trim();
      }
      // Subtitle - paragraph after h1
      const paras = section.querySelectorAll("p");
      for (const p of paras) {
        const t = p.textContent.trim();
        if (t.length > 20 && t.length < 200) {
          result.heroSubtitle = t;
          break;
        }
      }
    }
  }

  // ── Benefits: look for h3 cards
  const h3s = doc.querySelectorAll("h3");
  const seenBenefitTitles = new Set();
  for (const h3 of h3s) {
    const title = h3.textContent.trim();
    if (seenBenefitTitles.has(title)) continue;
    // Get the paragraph in the same parent
    const card = h3.closest("[class*='card'], [class*='benefit'], div");
    if (card) {
      const p = card.querySelector("p");
      if (p) {
        const desc = p.textContent.trim();
        if (desc && desc.length > 10 && desc.length < 200) {
          result.benefits.push({ title, description: desc });
          seenBenefitTitles.add(title);
        }
      }
    }
  }

  // ── Benefits title: the h2 that's right before the benefit cards
  const allH2 = doc.querySelectorAll("h2");
  for (const h2 of allH2) {
    const text = h2.textContent.trim();
    if (
      text.includes("zyskasz") ||
      text.includes("obejmuje") ||
      text.includes("wykonamy") ||
      text.includes("oferujemy") ||
      text.includes("Sprawdź") ||
      text.includes("korzyści") ||
      text.includes("zapewniamy") ||
      text.includes("Dowiedz")
    ) {
      result.benefitsTitle = text;
      break;
    }
  }

  // ── Detailed sections: h2 with numbered prefix "1. Title"
  for (const h2 of allH2) {
    const text = h2.textContent.trim();
    const match = text.match(/^(\d+)\.\s+(.+)/);
    if (match) {
      const number = parseInt(match[1]);
      const title = match[2].trim();
      // Collect all following paragraphs until next h2
      let description = "";
      let nextEl = h2.nextElementSibling;
      while (nextEl) {
        if (nextEl.tagName === "H2" || nextEl.tagName === "SECTION") break;
        if (nextEl.tagName === "P") {
          const t = nextEl.textContent.trim();
          if (t.length > 20) {
            description += (description ? "\n\n" : "") + t;
          }
        }
        // Also check inside child divs for paragraphs
        if (nextEl.tagName === "DIV") {
          const innerP = nextEl.querySelector("p");
          if (innerP) {
            const t = innerP.textContent.trim();
            if (t.length > 20) {
              description += (description ? "\n\n" : "") + t;
            }
          }
        }
        nextEl = nextEl.nextElementSibling;
      }
      if (description) {
        result.detailedSections.push({ number, title, description });
      }
    }
  }

  // ── FAQ items: look for accordion-like structure
  // Try common patterns
  const faqSection = 
    doc.querySelector("[class*='faq'], [id*='faq'], #faq") ||
    doc.querySelector("section:has(h2:first-child)");

  // Another approach: find clickable FAQ questions (often <a> or <button> with toggle behavior)
  const toggles = doc.querySelectorAll(
    "[class*='accordion'] > *, [class*='faq'] [class*='question'], [class*='toggle'], [class*='faq'] a"
  );

  if (toggles.length > 0) {
    for (const toggle of toggles) {
      const q = toggle.textContent.trim();
      if (q.length < 10 || q.length > 200) continue;
      // Answer is in sibling or next content panel
      let panel = toggle.nextElementSibling;
      if (!panel) panel = toggle.parentElement?.nextElementSibling;
      if (panel) {
        const a = panel.textContent.trim();
        if (a && a.length > 20) {
          result.faqItems.push({ question: q, answer: a });
        }
      }
    }
  }

  return result;
}

// ─── Main ───────────────────────────────────────────────────────────

async function main() {
  console.log("Fetching all seoLandingPage documents from Sanity...");

  const docs = await client.fetch(`
    *[_type == "seoLandingPage" && !(_id in path("drafts.**"))]{
      _id,
      _rev,
      'slug': slug.current,
      cityName
    }
  `);

  console.log(`Found ${docs.length} documents.\n`);

  let updated = 0;
  let skipped = 0;

  for (const doc of docs) {
    console.log(`\n── ${doc.cityName} (${doc.slug}) ──`);

    const scraped = await scrapePageSimple(doc.slug);
    if (!scraped) {
      console.log("  ⏭️  Could not scrape, skipping.");
      skipped++;
      continue;
    }

    const patch = {};

    // Hero subtitle
    if (scraped.heroSubtitle) {
      patch.heroSubtitle = textToBlocks(scraped.heroSubtitle);
      console.log(`  heroSubtitle: "${scraped.heroSubtitle.slice(0, 60)}..."`);
    }

    // Hero badge
    if (scraped.heroBadge) {
      patch.heroBadge = scraped.heroBadge;
      console.log(`  heroBadge: "${scraped.heroBadge}"`);
    }

    // Benefits title
    if (scraped.benefitsTitle) {
      patch.benefitsTitle = scraped.benefitsTitle;
      console.log(`  benefitsTitle: "${scraped.benefitsTitle.slice(0, 60)}..."`);
    }

    // Benefits
    if (scraped.benefits.length > 0) {
      // Keep existing icon/iconColor/image from CMS, only update title + description
      const existingBenefits = await client.fetch(
        `*[_id == $id][0].benefits`,
        { id: doc._id }
      );
      
      const newBenefits = scraped.benefits.map((b, i) => {
        const existing = existingBenefits?.[i] || {};
        return {
          ...existing,
          _key: existing._key || randomUUID().slice(0, 12),
          _type: existing._type || "benefitCard",
          title: b.title,
          description: textToBlocks(b.description),
        };
      });
      patch.benefits = newBenefits;
      console.log(`  benefits: ${newBenefits.length} items`);
    }

    // Detailed sections
    if (scraped.detailedSections.length > 0) {
      const existingSections = await client.fetch(
        `*[_id == $id][0].detailedSections`,
        { id: doc._id }
      );

      const newSections = scraped.detailedSections.map((s, i) => {
        const existing = existingSections?.[i] || {};
        return {
          ...existing,
          _key: existing._key || randomUUID().slice(0, 12),
          _type: existing._type || "detailedSection",
          number: s.number,
          title: s.title,
          description: textToBlocks(s.description),
        };
      });
      patch.detailedSections = newSections;
      console.log(`  detailedSections: ${newSections.length} items`);
    }

    // FAQ items
    if (scraped.faqItems.length > 0) {
      const newFaqs = scraped.faqItems.map((f) => ({
        _key: randomUUID().slice(0, 12),
        _type: "faqItem",
        question: f.question,
        answer: faqAnswerToBlocks(f.answer),
      }));
      patch.faqs = newFaqs;
      console.log(`  faqs: ${newFaqs.length} items`);
    }

    if (Object.keys(patch).length > 0) {
      // Patch published version
      await client.patch(doc._id).set(patch).commit();
      console.log(`  ✅ Patched ${doc._id}`);

      // Also patch drafts version if it exists
      try {
        const draftId = `drafts.${doc._id}`;
        const draftExists = await client.fetch(`defined(*[_id == $id][0])`, { id: draftId });
        if (draftExists) {
          await client.patch(draftId).set(patch).commit();
          console.log(`  ✅ Patched ${draftId}`);
        }
      } catch (e) {
        // Draft might not exist, that's fine
      }

      updated++;
    } else {
      console.log("  ⏭️  No data scraped, skipping.");
      skipped++;
    }
  }

  console.log(`\n\n🎉 Done! Updated: ${updated}, Skipped: ${skipped}`);
}

main().catch((err) => {
  console.error("Script failed:", err);
  process.exit(1);
});

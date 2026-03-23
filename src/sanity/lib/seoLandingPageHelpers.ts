/**
 * Shared helpers for mapping Sanity seoLandingPage data to SeoLandingPageProps.
 * Used by all city SEO page files to avoid duplication.
 */

import type { SeoLandingPageProps, IconName } from "@/components/seo/SeoLandingPage";
import type { SanityBenefit, SanityDetailedSection, SanityFaqItem } from "@/sanity/types/seoLandingPage";

// ─── Valid value lists ──────────────────────────────────────────────

const VALID_ICONS: IconName[] = [
  "palette", "users", "trending-up", "settings",
  "monitor", "user-check", "mouse-pointer-2", "search", "code2",
];

const VALID_ICON_COLORS = ["purple", "cyan"] as const;
const VALID_BAR_COLORS = ["purple", "cyan", "white"] as const;

// ─── Sanitizers ─────────────────────────────────────────────────────

export function sanitizeBenefit(b: SanityBenefit): SeoLandingPageProps["benefits"][number] {
  return {
    icon: VALID_ICONS.includes(b.icon as IconName) ? (b.icon as IconName) : "palette",
    iconColor: VALID_ICON_COLORS.includes(b.iconColor as typeof VALID_ICON_COLORS[number])
      ? (b.iconColor as "purple" | "cyan")
      : "purple",
    title: b.title,
    description: "", // kept for backward compatibility
    descriptionRichText: b.description, // PortableTextBlock[]
    image: b.image,
  };
}

export function sanitizeSection(s: SanityDetailedSection): SeoLandingPageProps["detailedSections"][number] {
  return {
    number: s.number,
    title: s.title,
    barColor: VALID_BAR_COLORS.includes(s.barColor as typeof VALID_BAR_COLORS[number])
      ? (s.barColor as "purple" | "cyan" | "white")
      : "purple",
    description: "", // kept for backward compatibility
    descriptionRichText: s.description, // PortableTextBlock[]
    teamCards: s.teamCards,
  };
}

export function mapFaqs(faqs: SanityFaqItem[]) {
  return faqs.map((faq, i) => ({
    id: i + 1,
    question: faq.question,
    answer: faq.answer,
  }));
}

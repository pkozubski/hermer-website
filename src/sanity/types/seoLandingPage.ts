import type { PortableTextBlock } from "@portabletext/react";
import type { SanitySeo } from "@/sanity/lib/seo";

// ─── Sanity response types for seoLandingPage ───────────────────────

export interface SanityBenefit {
  icon: string;
  iconColor: string;
  title: string;
  description: PortableTextBlock[];
  image?: string;
}

export interface SanityTeamCard {
  title: string;
  desc: string;
}

export interface SanityDetailedSection {
  number: number;
  title: string;
  barColor: string;
  description: PortableTextBlock[];
  teamCards?: SanityTeamCard[];
}

export interface SanityFaqItem {
  question: string;
  answer: string | PortableTextBlock[];
}

export interface SanityResultClient {
  clientName: string;
  growthPercent: string;
}

export interface SanityLandingPage {
  slug: string;
  cityName: string;
  heroTitle?: string;
  heroBadge: string;
  heroSubtitle: PortableTextBlock[];
  benefitsTitle: string;
  benefits: SanityBenefit[];
  detailedSections: SanityDetailedSection[];
  departmentsTitle: string;
  resultsTitle?: string;
  resultsDescription?: string;
  resultsClients?: SanityResultClient[];
  faqs?: SanityFaqItem[];
  ctaTitle?: string;
  ctaSubtitleLines?: string[];
  seo?: SanitySeo;
}

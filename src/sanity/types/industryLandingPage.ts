import type { PortableTextBlock } from "@portabletext/react";
export interface SanityImageObject {
  asset: {
    _ref: string;
    _type: "reference";
  };
}

// Note: Reusing the SeoGroup from seoLandingPage.ts if needed, or redefining locally.
export interface SanitySeoGroup {
  metaTitle?: string;
  metaDescription?: string;
  nofollowAttributes?: boolean;
  seoKeywords?: string[];
  metaImage?: SanityImageObject;
  openGraph?: {
    url?: string;
    image?: SanityImageObject;
    title?: string;
    description?: string;
    siteName?: string;
  };
  twitter?: {
    cardType?: string;
    creator?: string;
    site?: string;
    handle?: string;
  };
}

export interface IndustryFeature {
  title: string;
  description: string;
  image?: string;
}

export interface IndustryIncludedItem {
  title: string;
  text: string;
  iconSvg: string;
}

export interface IndustrySuccessStory {
  companyName: string;
  themeColor: string;
  categoryBadge: string;
  badgeImage?: string;
  description: string;
  resultLabel: string;
  resultValue: string;
  resultSubtext: string;
  mainImagePath: string;
  chartImagePath: string;
}

export interface IndustryFaqItem {
  id?: string;
  question: string;
  answer: string | PortableTextBlock[];
}

export interface SanityIndustryLandingPage {
  slug: string;
  heroTitleTop: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  heroImage: string;
  introTitle: string;
  introText: PortableTextBlock[];
  featuresTitle: string;
  features: IndustryFeature[];
  includedTitle: string;
  includedItems: IndustryIncludedItem[];
  successStoriesTitle: string;
  successStories: IndustrySuccessStory[];
  showReviews: boolean;
  faqs?: IndustryFaqItem[];
  ctaTitle: string;
  ctaSubtitleLines?: string[];
  seo?: SanitySeoGroup;
}

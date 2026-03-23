import { groq } from "next-sanity";

export const PAGE_FAQS_QUERY = groq`*[_type == "page" && slug.current == $slug][0] {
  "faqs": faqs[] {
    "question": question,
    "answer": answer
  }
}`;

export const SEO_LANDING_PAGE_QUERY = groq`*[_type == "seoLandingPage" && slug.current == $slug][0] {
  _type,
  "slug": slug.current,
  cityName,
  heroTitle,
  heroBadge,
  heroSubtitle,
  benefitsTitle,
  benefits[] {
    icon,
    iconColor,
    title,
    description,
    "image": image.asset->url
  },
  detailedSections[] {
    number,
    title,
    barColor,
    description,
    teamCards[] {
      title,
      desc
    }
  },
  departmentsTitle,
  resultsTitle,
  resultsDescription,
  resultsClients[] {
    clientName,
    growthPercent
  },
  "faqs": faqs[] {
    "question": question,
    "answer": answer
  },
  ctaTitle,
  ctaSubtitleLines,
  seo {
    metaTitle,
    metaDescription,
    nofollowAttributes,
    seoKeywords,
    metaImage,
    openGraph {
      url,
      image,
      title,
      description,
      siteName
    },
    twitter {
      cardType,
      creator,
      site,
      handle
    }
  }
}`;

export const PAGE_SEO_QUERY = groq`*[_type == "page" && slug.current == $slug][0] {
  title,
  slug,
  seo {
    metaTitle,
    metaDescription,
    nofollowAttributes,
    seoKeywords,
    metaImage,
    openGraph {
      url,
      image,
      title,
      description,
      siteName
    },
    twitter {
      cardType,
      creator,
      site,
      handle
    }
  }
}`;

export const INDUSTRY_LANDING_PAGE_QUERY = groq`*[_type == "industryLandingPage" && slug.current == $slug][0] {
  _type,
  "slug": slug.current,
  heroTitleTop,
  heroTitleHighlight,
  heroSubtitle,
  "heroImage": heroImage.asset->url,
  introTitle,
  introText,
  featuresTitle,
  features[] {
    title,
    description,
    "image": image.asset->url
  },
  includedTitle,
  includedItems[] {
    title,
    text,
    iconSvg
  },
  successStoriesTitle,
  successStories[] {
    companyName,
    themeColor,
    categoryBadge,
    badgeImage,
    description,
    resultLabel,
    resultValue,
    resultSubtext,
    mainImagePath,
    chartImagePath
  },
  showReviews,
  "faqs": faqs[] {
    question,
    answer
  },
  ctaTitle,
  ctaSubtitleLines,
  seo {
    metaTitle,
    metaDescription,
    nofollowAttributes,
    seoKeywords,
    metaImage,
    openGraph { url, image, title, description, siteName },
    twitter { cardType, creator, site, handle }
  }
}`;

export const REVIEWS_QUERY = groq`*[_type == "review" && rating == 5] | order(publishedAt desc) [0...27] {
  _id,
  author,
  rating,
  text,
  publishedAt,
  avatarUrl,
  platform,
  reviewLink
}`;


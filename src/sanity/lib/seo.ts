import type { Metadata } from "next";
import { urlFor } from "./image";

type SanityImage = {
  _type?: "image";
  asset?: {
    _ref?: string;
  };
} | null;

export type SanitySeo = {
  metaTitle?: string;
  metaDescription?: string;
  nofollowAttributes?: boolean;
  seoKeywords?: Array<string | null>;
  metaImage?: SanityImage;
  openGraph?: {
    url?: string;
    image?: SanityImage;
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
} | null;

type FallbackSeoConfig = {
  title: string;
  description: string;
  canonical: string;
  imageUrl: string;
  imageAlt: string;
  siteName: string;
  locale?: string;
  openGraphType?: "website" | "article";
  keywords?: readonly string[];
};

function getSanityImageUrl(image: SanityImage): string | undefined {
  if (!image?.asset?._ref) {
    return undefined;
  }

  return urlFor(image).width(1200).height(630).fit("crop").url();
}

function normalizeTwitterCard(cardType?: string): "summary" | "summary_large_image" | "app" | "player" {
  if (
    cardType === "summary" ||
    cardType === "summary_large_image" ||
    cardType === "app" ||
    cardType === "player"
  ) {
    return cardType;
  }

  return "summary_large_image";
}

function extractTitle(title: Metadata["title"]): string | undefined {
  if (!title) {
    return undefined;
  }

  if (typeof title === "string") {
    return title;
  }

  if ("absolute" in title && typeof title.absolute === "string") {
    return title.absolute;
  }

  if ("default" in title && typeof title.default === "string") {
    return title.default;
  }

  return undefined;
}

function extractCanonicalUrl(alternates: unknown, ogUrl?: string): string | undefined {
  if (typeof alternates !== "object" || alternates === null) {
    return ogUrl;
  }

  const canonical =
    "canonical" in alternates
      ? (alternates as { canonical?: unknown }).canonical
      : undefined;
  if (typeof canonical === "string") {
    return canonical;
  }

  if (canonical instanceof URL) {
    return canonical.toString();
  }

  return ogUrl;
}

function extractOpenGraphImage(images: unknown): { url?: string; alt?: string } {
  if (!images || !Array.isArray(images) || images.length === 0) {
    return {};
  }

  const first = images[0];
  if (typeof first === "string") {
    return { url: first };
  }

  if (first instanceof URL) {
    return { url: first.toString() };
  }

  if (typeof first === "object" && first !== null) {
    const urlValue = "url" in first ? first.url : undefined;
    const altValue = "alt" in first ? first.alt : undefined;
    const url = urlValue instanceof URL ? urlValue.toString() : urlValue;
    const alt = typeof altValue === "string" ? altValue : undefined;
    if (typeof url === "string") {
      return { url, alt };
    }
  }

  return {};
}

function extractKeywords(keywords: unknown): string[] | undefined {
  if (!keywords) {
    return undefined;
  }

  if (typeof keywords === "string") {
    return [keywords];
  }

  if (Array.isArray(keywords)) {
    return keywords.filter(
      (keyword): keyword is string => typeof keyword === "string"
    );
  }

  return undefined;
}

export function buildPageMetadataFromSanitySeo(
  seo: SanitySeo,
  fallback: FallbackSeoConfig
): Metadata {
  const title = seo?.metaTitle?.trim() || fallback.title;
  const description = seo?.metaDescription?.trim() || fallback.description;
  const canonical = seo?.openGraph?.url?.trim() || fallback.canonical;
  const noIndex = Boolean(seo?.nofollowAttributes);
  const keywords = (seo?.seoKeywords ?? fallback.keywords ?? []).filter(
    (keyword): keyword is string => Boolean(keyword?.trim())
  );

  const imageUrl =
    getSanityImageUrl(seo?.openGraph?.image ?? null) ||
    getSanityImageUrl(seo?.metaImage ?? null) ||
    fallback.imageUrl;

  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: {
      canonical,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-snippet": -1,
        "max-video-preview": -1,
        "max-image-preview": "large",
      },
    },
    openGraph: {
      locale: fallback.locale ?? "pl_PL",
      type: fallback.openGraphType ?? "website",
      title: seo?.openGraph?.title?.trim() || title,
      description: seo?.openGraph?.description?.trim() || description,
      url: canonical,
      siteName: seo?.openGraph?.siteName?.trim() || fallback.siteName,
      images: [
        {
          url: imageUrl,
          alt: fallback.imageAlt,
        },
      ],
    },
    twitter: {
      card: normalizeTwitterCard(seo?.twitter?.cardType),
      title,
      description,
      images: [imageUrl],
      creator: seo?.twitter?.creator || seo?.twitter?.handle || undefined,
      site: seo?.twitter?.site || undefined,
    },
  };
}

export function buildMetadataFromSanityWithFallbackMetadata(
  seo: SanitySeo,
  fallback: Metadata
): Metadata {
  if (!seo) {
    return fallback;
  }

  const fallbackTitle = extractTitle(fallback.title);
  const fallbackDescription =
    typeof fallback.description === "string" ? fallback.description : undefined;
  const fallbackOpenGraphBase =
    typeof fallback.openGraph === "object" && fallback.openGraph !== null
      ? (fallback.openGraph as Record<string, unknown>)
      : {};
  const fallbackOgTitle =
    typeof fallbackOpenGraphBase.title === "string"
      ? fallbackOpenGraphBase.title
      : undefined;
  const fallbackOgDescription =
    typeof fallbackOpenGraphBase.description === "string"
      ? fallbackOpenGraphBase.description
      : undefined;
  const fallbackOgUrl =
    typeof fallbackOpenGraphBase.url === "string"
      ? fallbackOpenGraphBase.url
      : undefined;
  const fallbackOgSiteName =
    typeof fallbackOpenGraphBase.siteName === "string"
      ? fallbackOpenGraphBase.siteName
      : undefined;
  const fallbackOgTypeValue = fallbackOpenGraphBase.type;
  const fallbackOgType =
    fallbackOgTypeValue === "article" || fallbackOgTypeValue === "website"
      ? fallbackOgTypeValue
      : "website";
  const fallbackOgLocale =
    typeof fallbackOpenGraphBase.locale === "string"
      ? fallbackOpenGraphBase.locale
      : "pl_PL";
  const fallbackImage = extractOpenGraphImage(fallbackOpenGraphBase.images);
  const fallbackCanonical = extractCanonicalUrl(
    fallback.alternates,
    fallbackOgUrl
  );
  const fallbackKeywords = extractKeywords(fallback.keywords);

  const title = seo.metaTitle?.trim() || fallbackTitle;
  const description = seo.metaDescription?.trim() || fallbackDescription;
  const canonical = seo.openGraph?.url?.trim() || fallbackCanonical;
  const imageUrl =
    getSanityImageUrl(seo.openGraph?.image ?? null) ||
    getSanityImageUrl(seo.metaImage ?? null) ||
    fallbackImage.url;
  const imageAlt = fallbackImage.alt || fallbackTitle || "Hermer";

  const keywords = (seo.seoKeywords ?? fallbackKeywords ?? []).filter(
    (keyword): keyword is string => typeof keyword === "string" && Boolean(keyword.trim())
  );

  const noIndex = Boolean(seo.nofollowAttributes);
  const finalOpenGraph: Metadata["openGraph"] = {
    ...fallbackOpenGraphBase,
    locale: fallbackOgLocale,
    type: fallbackOgType,
    title: seo.openGraph?.title?.trim() || title || fallbackOgTitle,
    description:
      seo.openGraph?.description?.trim() || description || fallbackOgDescription,
    url: canonical || fallbackOgUrl,
    siteName: seo.openGraph?.siteName?.trim() || fallbackOgSiteName,
    images: imageUrl
      ? [{ url: imageUrl, alt: imageAlt }]
      : (fallbackOpenGraphBase.images as Metadata["openGraph"] extends { images?: infer T } ? T : undefined),
  } as Metadata["openGraph"];

  const fallbackTwitterRaw =
    typeof fallback.twitter === "object" && fallback.twitter !== null
      ? (fallback.twitter as Record<string, unknown>)
      : {};
  const fallbackRobots =
    (typeof fallback.robots === "object" && fallback.robots !== null
      ? (fallback.robots as Record<string, unknown>)
      : {});
  const fallbackTwitterCard =
    typeof fallbackTwitterRaw.card === "string"
      ? fallbackTwitterRaw.card
      : undefined;
  const fallbackTwitterImages = Array.isArray(fallbackTwitterRaw.images)
    ? fallbackTwitterRaw.images
    : fallbackTwitterRaw.images
      ? [fallbackTwitterRaw.images]
      : undefined;

  return {
    ...fallback,
    title: title || fallback.title,
    description: description || fallback.description,
    keywords: keywords.length > 0 ? keywords : fallback.keywords,
    alternates: canonical
      ? { ...(fallback.alternates ?? {}), canonical }
      : fallback.alternates,
    robots: {
      ...fallbackRobots,
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        ...(typeof fallbackRobots.googleBot === "object"
          ? fallbackRobots.googleBot
          : {}),
        index: !noIndex,
        follow: !noIndex,
        "max-snippet": -1,
        "max-video-preview": -1,
        "max-image-preview": "large",
      },
    },
    openGraph: finalOpenGraph,
    twitter: {
      ...(fallbackTwitterRaw as Metadata["twitter"]),
      card: normalizeTwitterCard(seo.twitter?.cardType || fallbackTwitterCard),
      title:
        title ||
        (typeof fallbackTwitterRaw.title === "string"
          ? fallbackTwitterRaw.title
          : undefined),
      description:
        description ||
        (typeof fallbackTwitterRaw.description === "string"
          ? fallbackTwitterRaw.description
          : undefined),
      images: imageUrl ? [imageUrl] : fallbackTwitterImages,
      creator:
        seo.twitter?.creator ||
        seo.twitter?.handle ||
        (typeof fallbackTwitterRaw.creator === "string"
          ? fallbackTwitterRaw.creator
          : undefined),
      site:
        seo.twitter?.site ||
        (typeof fallbackTwitterRaw.site === "string"
          ? fallbackTwitterRaw.site
          : undefined),
    },
  };
}

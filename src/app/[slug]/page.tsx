import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import BlogPostContent from "./BlogPostContent";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { groq } from "next-sanity";

// --- CMS Landing Page imports ---
import { buildPageMetadataFromSanitySeo } from "@/sanity/lib/seo";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { IndustryLandingPage } from "@/components/seo/IndustryLandingPage";
import type { SanityLandingPage } from "@/sanity/types/seoLandingPage";
import type { SanityIndustryLandingPage } from "@/sanity/types/industryLandingPage";
import { sanitizeBenefit, sanitizeSection, mapFaqs } from "@/sanity/lib/seoLandingPageHelpers";
import type { SeoLandingPageProps } from "@/components/seo/SeoLandingPage";
import { buildPageJsonLd, JsonLdScript, buildBreadcrumbJsonLd, buildArticleJsonLd } from "@/lib/jsonLd";
import {
  SEO_LANDING_PAGE_QUERY,
  INDUSTRY_LANDING_PAGE_QUERY,
} from "@/sanity/lib/queries";

interface PageParams {
  slug: string;
}

// ─── Types ────────────────────────────────────────────────────────────

type DocType = "post" | "seoLandingPage" | "industryLandingPage";

// ─── GROQ queries (inline where type-specific projection is needed) ───

const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _type,
    title,
    "category": category->title,
    mainImage,
    publishedAt,
    body,
    seo
  }
`;

// ─── Single-fetch helper — returns typed data or null ─────────────────

type SlugDocument =
  | ({ _type: "post" } & Record<string, unknown>)
  | ({ _type: "seoLandingPage" } & SanityLandingPage)
  | ({ _type: "industryLandingPage" } & SanityIndustryLandingPage)
  | null;

async function getDocumentBySlug(slug: string, query: string, opts?: { stega?: boolean }): Promise<SlugDocument> {
  const { data } = (await sanityFetch({ query, params: { slug }, ...opts })) as { data: SlugDocument };
  return data;
}

// ─── Metadata ─────────────────────────────────────────────────────────

function buildPostMetadata(post: Record<string, any>): Metadata {
  const { seo, title, mainImage } = post;
  const ogImageUrl = seo?.ogImage
    ? urlFor(seo.ogImage).width(1200).height(630).url()
    : mainImage
      ? urlFor(mainImage).width(1200).height(630).url()
      : null;

  return {
    title: seo?.title || title,
    description: seo?.description,
    openGraph: {
      title: seo?.title || title,
      description: seo?.description,
      images: ogImageUrl ? [{ url: ogImageUrl }] : [],
    },
  };
}

function buildSeoLandingMetadata(data: SanityLandingPage, slug: string): Metadata {
  const cityName = data.cityName;
  const FALLBACK_SEO = {
    title: `Strony internetowe ${cityName}`,
    description: `Profesjonalne tworzenie stron internetowych ${cityName}.`,
    canonical: `https://hermer.pl/${slug}`,
    imageUrl: "https://hermer.pl/og-image.jpg",
    imageAlt: `Strony internetowe ${cityName} - Hermer`,
    siteName: "Hermer - Efektywne strony internetowe",
    keywords: [] as readonly string[],
  };
  return buildPageMetadataFromSanitySeo(data.seo ?? null, FALLBACK_SEO);
}

function buildIndustryLandingMetadata(data: SanityIndustryLandingPage, slug: string): Metadata {
  const fallbackTitle = data.seo?.metaTitle || `${data.heroTitleTop} ${data.heroTitleHighlight}`;
  const FALLBACK_SEO = {
    title: fallbackTitle,
    description: data.seo?.metaDescription || data.heroSubtitle || "",
    canonical: `https://hermer.pl/${slug}`,
    imageUrl: data.heroImage || "https://hermer.pl/og-image.jpg",
    imageAlt: fallbackTitle,
    siteName: "Hermer - Efektywne strony internetowe",
    keywords: [] as readonly string[],
  };
  return buildPageMetadataFromSanitySeo(data.seo ?? null, FALLBACK_SEO);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams> | PageParams;
}): Promise<Metadata> {
  const { slug } = await params;

  // stega: false — niezbędne żeby znaki stega nie wyciekły do <head>
  const seoData = await getDocumentBySlug(slug, SEO_LANDING_PAGE_QUERY, { stega: false });
  if (seoData?._type === "seoLandingPage") {
    return buildSeoLandingMetadata(seoData as SanityLandingPage, slug);
  }

  const industryData = await getDocumentBySlug(slug, INDUSTRY_LANDING_PAGE_QUERY, { stega: false });
  if (industryData?._type === "industryLandingPage") {
    return buildIndustryLandingMetadata(industryData as SanityIndustryLandingPage, slug);
  }

  const post = await getDocumentBySlug(slug, POST_QUERY, { stega: false });
  if (post?._type === "post") {
    return buildPostMetadata(post);
  }

  return { title: "Nie znaleziono strony" };
}

// ─── Page Component ───────────────────────────────────────────────────

export default async function DynamicCatchAllPage({
  params,
}: {
  params: Promise<PageParams> | PageParams;
}) {
  const { slug } = await params;

  // ── 1. SEO Landing Page ────────────────────────────────────────────
  const seoData = await getDocumentBySlug(slug, SEO_LANDING_PAGE_QUERY);
  if (seoData?._type === "seoLandingPage") {
    const sanityData = seoData as SanityLandingPage;

    const props: SeoLandingPageProps = {
      cityName: sanityData.cityName,
      heroTitle: sanityData.heroTitle || undefined,
      heroBadge: sanityData.heroBadge,
      heroSubtitle: sanityData.heroSubtitle,
      benefitsTitle: sanityData.benefitsTitle,
      benefits: sanityData.benefits.map(sanitizeBenefit),
      detailedSections: sanityData.detailedSections.map(sanitizeSection),
      departmentsTitle: sanityData.departmentsTitle,
      faqItems: sanityData.faqs?.length ? mapFaqs(sanityData.faqs) : [],
      ctaTitleLine1: sanityData.ctaTitle ? sanityData.ctaTitle.split(" ").slice(0, Math.ceil(sanityData.ctaTitle.split(" ").length / 2)).join(" ") : undefined,
      ctaTitleLine2: sanityData.ctaTitle ? sanityData.ctaTitle.split(" ").slice(Math.ceil(sanityData.ctaTitle.split(" ").length / 2)).join(" ") : undefined,
      ctaSubtitleLines: sanityData.ctaSubtitleLines ?? undefined,
      resultsTitle: sanityData.resultsTitle ?? undefined,
      resultsDescription: sanityData.resultsDescription ?? undefined,
      resultsClients: sanityData.resultsClients ?? undefined,
    };

    const jsonLd = buildPageJsonLd({
      slug,
      pageName: `Strony internetowe ${sanityData.cityName} - Tworzenie stron www ${sanityData.cityName}`,
    });

    return (
      <>
        <JsonLdScript data={jsonLd} />
        <SeoLandingPage {...props} />
      </>
    );
  }

  // ── 2. Industry Landing Page ───────────────────────────────────────
  const industryData = await getDocumentBySlug(slug, INDUSTRY_LANDING_PAGE_QUERY);
  if (industryData?._type === "industryLandingPage") {
    const sanityData = industryData as SanityIndustryLandingPage;

    const jsonLd = buildPageJsonLd({
      slug,
      pageName: sanityData.seo?.metaTitle || `${sanityData.heroTitleTop} ${sanityData.heroTitleHighlight}`,
    });

    return (
      <>
        <JsonLdScript data={jsonLd} />
        <IndustryLandingPage data={sanityData} />
      </>
    );
  }

  // ── 3. Blog Post ───────────────────────────────────────────────────
  const post = await getDocumentBySlug(slug, POST_QUERY);
  if (post?._type === "post") {
    const breadcrumbJsonLd = buildBreadcrumbJsonLd([
      { name: "Strona Główna", url: "https://hermer.pl/" },
      { name: "Blog", url: "https://hermer.pl/blog" },
      { name: post.title as string, url: `https://hermer.pl/${slug}` },
    ]);

    const articleJsonLd = buildArticleJsonLd({
      title: post.title as string,
      description: (post.seo as any)?.description as string | undefined,
      image: post.mainImage ? urlFor(post.mainImage).url() : undefined,
      datePublished: post.publishedAt as string,
      url: `https://hermer.pl/${slug}`,
    });

    return (
      <>
        <JsonLdScript data={breadcrumbJsonLd} />
        <JsonLdScript data={articleJsonLd} />
        <BlogPostContent initialPost={post} />
      </>
    );
  }

  notFound();
}

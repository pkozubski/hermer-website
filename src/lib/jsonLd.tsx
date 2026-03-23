/**
 * JSON-LD structured data generators for Next.js pages.
 * Extracted from [slug]/page.tsx to reduce inline schema boilerplate.
 */

interface JsonLdOptions {
  slug: string;
  pageName: string;
}

/**
 * Builds the standard JSON-LD @graph with Person/Organization, WebSite, and WebPage.
 */
export function buildPageJsonLd({ slug, pageName }: JsonLdOptions) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Person", "Organization"],
        "@id": "https://hermer.pl/#person",
        name: "Hermer",
      },
      {
        "@type": "WebSite",
        "@id": "https://hermer.pl/#website",
        url: "https://hermer.pl",
        name: "Hermer",
        publisher: { "@id": "https://hermer.pl/#person" },
        inLanguage: "pl-PL",
      },
      {
        "@type": "WebPage",
        "@id": `https://hermer.pl/${slug}/#webpage`,
        url: `https://hermer.pl/${slug}/`,
        name: pageName,
        isPartOf: { "@id": "https://hermer.pl/#website" },
        inLanguage: "pl-PL",
      },
    ],
  };
}

/**
 * Renders a <script type="application/ld+json"> tag for the given JSON-LD data.
 */
export function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Builds standard sitewide Organization and WebSite schema
 */
export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Person", "Organization"],
        "@id": "https://hermer.pl/#person",
        name: "Hermer",
        logo: "https://hermer.pl/logo.png", // Replace with real logo if needed
        url: "https://hermer.pl",
      },
      {
        "@type": "WebSite",
        "@id": "https://hermer.pl/#website",
        url: "https://hermer.pl",
        name: "Hermer",
        publisher: { "@id": "https://hermer.pl/#person" },
        inLanguage: "pl-PL",
      },
    ],
  };
}

/**
 * Builds BreadcrumbList schema
 */
export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface ArticleJsonLdOptions {
  title: string;
  description?: string;
  image?: string;
  datePublished: string;
  authorName?: string;
  url: string;
}

/**
 * Builds Article schema for blog posts
 */
export function buildArticleJsonLd({
  title,
  description,
  image,
  datePublished,
  authorName = "Hermer",
  url,
}: ArticleJsonLdOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image ? [image] : undefined,
    datePublished: datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
      url: "https://hermer.pl",
    },
    publisher: {
      "@id": "https://hermer.pl/#person",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

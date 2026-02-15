import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import {
  buildPageMetadataFromSanitySeo,
  type SanitySeo,
} from "@/sanity/lib/seo";

const STARGARD_SLUG = "tworzenie-stron-www-stargard";

const STARGARD_SEO_FALLBACK = {
  title: "Strony internetowe Stargard - Strony www Stargard - Hermer",
  description:
    "Strony internetowe Stargard to usługa skierowana do mieszkańców Stargardu. Sprawdź nasza ofertę i Zadzwoń!",
  canonical: "https://e-hermer.pl/tworzenie-stron-www-stargard/",
  imageUrl:
    "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp",
  imageAlt: "strony internetowe stargard",
  siteName: "Hermer",
  locale: "pl_PL",
  openGraphType: "article",
  keywords: ["strony internetowe stargard"],
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch<{ seo?: SanitySeo } | null>(PAGE_SEO_QUERY, {
    slug: STARGARD_SLUG,
  });

  return buildPageMetadataFromSanitySeo(
    page?.seo ?? null,
    STARGARD_SEO_FALLBACK
  );
}

export default function StargardSeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["Person", "Organization"],
                "@id": "https://e-hermer.pl/#person",
                name: "Hermer",
              },
              {
                "@type": "WebSite",
                "@id": "https://e-hermer.pl/#website",
                url: "https://e-hermer.pl",
                name: "Hermer",
                publisher: { "@id": "https://e-hermer.pl/#person" },
                inLanguage: "pl-PL",
              },
              {
                "@type": "ImageObject",
                "@id":
                  "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp",
                url: "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp",
                width: "200",
                height: "200",
                inLanguage: "pl-PL",
              },
              {
                "@type": "WebPage",
                "@id": "https://e-hermer.pl/tworzenie-stron-www-stargard/#webpage",
                url: "https://e-hermer.pl/tworzenie-stron-www-stargard/",
                name: "Strony internetowe Stargard - Strony www Stargard - Hermer",
                datePublished: "2024-08-30T07:45:31+00:00",
                dateModified: "2024-08-30T09:43:56+00:00",
                isPartOf: { "@id": "https://e-hermer.pl/#website" },
                primaryImageOfPage: {
                  "@id":
                    "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp",
                },
                inLanguage: "pl-PL",
              },
              {
                "@type": "Person",
                "@id": "https://e-hermer.pl/author/admin/",
                name: "admin",
                url: "https://e-hermer.pl/author/admin/",
                image: {
                  "@type": "ImageObject",
                  "@id":
                    "https://e-hermer.pl/wp-content/litespeed/avatar/2067ada4bcd16bce6a4b3c21d2b91532.jpg?ver=1770890387",
                  url: "https://e-hermer.pl/wp-content/litespeed/avatar/2067ada4bcd16bce6a4b3c21d2b91532.jpg?ver=1770890387",
                  caption: "admin",
                  inLanguage: "pl-PL",
                },
                sameAs: ["https://e-hermer.pl"],
              },
              {
                "@type": "Article",
                headline: "Strony internetowe Stargard - Strony www Stargard - Hermer",
                keywords: "strony internetowe stargard",
                datePublished: "2024-08-30T07:45:31+00:00",
                dateModified: "2024-08-30T09:43:56+00:00",
                author: { "@id": "https://e-hermer.pl/author/admin/", name: "admin" },
                publisher: { "@id": "https://e-hermer.pl/#person" },
                description:
                  "Strony internetowe Stargard to us\u0142uga skierowana do mieszka\u0144c\u00f3w Stargardu. Sprawd\u017a nasza ofert\u0119 i Zadzwo\u0144!",
                name: "Strony internetowe Stargard - Strony www Stargard - Hermer",
                "@id": "https://e-hermer.pl/tworzenie-stron-www-stargard/#richSnippet",
                isPartOf: {
                  "@id": "https://e-hermer.pl/tworzenie-stron-www-stargard/#webpage",
                },
                image: {
                  "@id":
                    "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp",
                },
                inLanguage: "pl-PL",
                mainEntityOfPage: {
                  "@id": "https://e-hermer.pl/tworzenie-stron-www-stargard/#webpage",
                },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}

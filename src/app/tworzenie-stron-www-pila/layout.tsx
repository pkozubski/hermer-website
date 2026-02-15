import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import {
  buildPageMetadataFromSanitySeo,
  type SanitySeo,
} from "@/sanity/lib/seo";

const PILA_SLUG = "tworzenie-stron-www-pila";

const PILA_SEO_FALLBACK = {
  title: "Strony internetowe Piła - Tworzenie stron www Piła",
  description:
    "Strony Internetowe Piła to usługa skierowana specjalnie do mieszkańców Piły. Przygotujemy stronę idealnie dopasowaną do Twoich potrzeb.",
  canonical: "https://e-hermer.pl/tworzenie-stron-www-pila/",
  imageUrl:
    "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp",
  imageAlt: "strony internetowe piła",
  siteName: "Hermer",
  locale: "pl_PL",
  openGraphType: "article",
  keywords: ["strony internetowe piła"],
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch<{ seo?: SanitySeo } | null>(PAGE_SEO_QUERY, {
    slug: PILA_SLUG,
  });

  return buildPageMetadataFromSanitySeo(page?.seo ?? null, PILA_SEO_FALLBACK);
}

export default function PilaSeoLayout({
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
                "@id": "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp",
                url: "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp",
                width: "200",
                height: "200",
                inLanguage: "pl-PL",
              },
              {
                "@type": "WebPage",
                "@id": "https://e-hermer.pl/tworzenie-stron-www-pila/#webpage",
                url: "https://e-hermer.pl/tworzenie-stron-www-pila/",
                name: "Strony internetowe Piła - Tworzenie stron www Piła",
                datePublished: "2024-08-28T09:58:02+00:00",
                dateModified: "2024-08-30T06:04:05+00:00",
                isPartOf: { "@id": "https://e-hermer.pl/#website" },
                primaryImageOfPage: {
                  "@id": "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp",
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
                  "@id": "https://e-hermer.pl/wp-content/litespeed/avatar/2067ada4bcd16bce6a4b3c21d2b91532.jpg?ver=1770890387",
                  url: "https://e-hermer.pl/wp-content/litespeed/avatar/2067ada4bcd16bce6a4b3c21d2b91532.jpg?ver=1770890387",
                  caption: "admin",
                  inLanguage: "pl-PL",
                },
                sameAs: ["https://e-hermer.pl"],
              },
              {
                "@type": "Article",
                headline: "Strony internetowe Piła - Tworzenie stron www Piła",
                keywords: "strony internetowe piła",
                datePublished: "2024-08-28T09:58:02+00:00",
                dateModified: "2024-08-30T06:04:05+00:00",
                author: { "@id": "https://e-hermer.pl/author/admin/", name: "admin" },
                publisher: { "@id": "https://e-hermer.pl/#person" },
                description:
                  "Strony Internetowe Piła to usługa skierowana specjalnie do mieszkańców Piły. Przygotujemy stronę idealnie dopasowaną do Twoich potrzeb.",
                name: "Strony internetowe Piła - Tworzenie stron www Piła",
                "@id": "https://e-hermer.pl/tworzenie-stron-www-pila/#richSnippet",
                isPartOf: {
                  "@id": "https://e-hermer.pl/tworzenie-stron-www-pila/#webpage",
                },
                image: {
                  "@id": "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp",
                },
                inLanguage: "pl-PL",
                mainEntityOfPage: {
                  "@id": "https://e-hermer.pl/tworzenie-stron-www-pila/#webpage",
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

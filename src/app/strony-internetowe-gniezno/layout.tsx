import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import {
  buildPageMetadataFromSanitySeo,
  type SanitySeo,
} from "@/sanity/lib/seo";

const GNIEZNO_SLUG = "strony-internetowe-gniezno";

const GNIEZNO_SEO_FALLBACK = {
  title: "Strony internetowe Gniezno - Tworzenie stron Gniezno",
  description:
    "Strony internetowe Gniezno to jedna z naszych usług stworzonych z myślą o mieszkańcach Gniezna. Stworzymy stronę dopasowaną do Twoich potrzeb",
  canonical: "https://e-hermer.pl/strony-internetowe-gniezno/",
  imageUrl:
    "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp",
  imageAlt: "strony internetowe gniezno",
  siteName: "Hermer",
  locale: "pl_PL",
  openGraphType: "article",
  keywords: ["strony internetowe gniezno"],
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch<{ seo?: SanitySeo } | null>(PAGE_SEO_QUERY, {
    slug: GNIEZNO_SLUG,
  });

  return buildPageMetadataFromSanitySeo(page?.seo ?? null, GNIEZNO_SEO_FALLBACK);
}

export default function GnieznoSeoLayout({
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
                "@id": "https://e-hermer.pl/strony-internetowe-gniezno/#webpage",
                url: "https://e-hermer.pl/strony-internetowe-gniezno/",
                name: "Strony internetowe Gniezno - Tworzenie stron Gniezno",
                datePublished: "2024-08-29T09:52:46+00:00",
                dateModified: "2024-08-29T11:18:51+00:00",
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
                headline: "Strony internetowe Gniezno - Tworzenie stron Gniezno",
                keywords: "strony internetowe gniezno",
                datePublished: "2024-08-29T09:52:46+00:00",
                dateModified: "2024-08-29T11:18:51+00:00",
                author: { "@id": "https://e-hermer.pl/author/admin/", name: "admin" },
                publisher: { "@id": "https://e-hermer.pl/#person" },
                description:
                  "Strony internetowe Gniezno to jedna z naszych usług stworzonych z myślą o mieszkańcach Gniezna. Stworzymy stronę dopasowaną do Twoich potrzeb",
                name: "Strony internetowe Gniezno - Tworzenie stron Gniezno",
                "@id": "https://e-hermer.pl/strony-internetowe-gniezno/#richSnippet",
                isPartOf: {
                  "@id": "https://e-hermer.pl/strony-internetowe-gniezno/#webpage",
                },
                image: {
                  "@id": "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp",
                },
                inLanguage: "pl-PL",
                mainEntityOfPage: {
                  "@id": "https://e-hermer.pl/strony-internetowe-gniezno/#webpage",
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

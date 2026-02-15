import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import {
  buildPageMetadataFromSanitySeo,
  type SanitySeo,
} from "@/sanity/lib/seo";

const KONIN_SLUG = "tworzenie-stron-www-konin";

const KONIN_SEO_FALLBACK = {
  title: "Strony internetowe Konin - Tworzenie stron Konin - Hermer",
  description:
    "Strony internetowe Konin to oferta skierowana do mieszkańców Konina. Sprawdź naszą ofertę i Zadzwoń!",
  canonical: "https://e-hermer.pl/tworzenie-stron-www-konin/",
  imageUrl:
    "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp",
  imageAlt: "strony internetowe konin",
  siteName: "Hermer",
  locale: "pl_PL",
  openGraphType: "article",
  keywords: ["strony internetowe konin"],
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch<{ seo?: SanitySeo } | null>(PAGE_SEO_QUERY, {
    slug: KONIN_SLUG,
  });

  return buildPageMetadataFromSanitySeo(page?.seo ?? null, KONIN_SEO_FALLBACK);
}

export default function KoninSeoLayout({
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
                "@id": "https://e-hermer.pl/tworzenie-stron-www-konin/#webpage",
                url: "https://e-hermer.pl/tworzenie-stron-www-konin/",
                name: "Strony internetowe Konin - Tworzenie stron Konin - Hermer",
                datePublished: "2024-08-30T08:16:46+00:00",
                dateModified: "2024-08-30T08:16:46+00:00",
                isPartOf: { "@id": "https://e-hermer.pl/#website" },
                primaryImageOfPage: {
                  "@id": "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp",
                },
                inLanguage: "pl-PL",
              },
              {
                "@type": "Article",
                headline: "Strony internetowe Konin - Tworzenie stron Konin - Hermer",
                keywords: "strony internetowe konin",
                datePublished: "2024-08-30T08:16:46+00:00",
                dateModified: "2024-08-30T08:16:46+00:00",
                author: { "@id": "https://e-hermer.pl/author/admin/", name: "admin" },
                publisher: { "@id": "https://e-hermer.pl/#person" },
                description:
                  "Strony internetowe Konin to usługa skierowana do mieszkańców Konina. Sprawdź naszą ofertę i Zadzwoń!",
                name: "Strony internetowe Konin - Tworzenie stron Konin - Hermer",
                "@id": "https://e-hermer.pl/tworzenie-stron-www-konin/#richSnippet",
                isPartOf: {
                  "@id": "https://e-hermer.pl/tworzenie-stron-www-konin/#webpage",
                },
                image: {
                  "@id": "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp",
                },
                inLanguage: "pl-PL",
                mainEntityOfPage: {
                  "@id": "https://e-hermer.pl/tworzenie-stron-www-konin/#webpage",
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

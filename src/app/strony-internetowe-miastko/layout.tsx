import {
  buildMetadataFromSanityWithFallbackMetadata,
  type SanitySeo,
} from "@/sanity/lib/seo";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import type { Metadata } from "next";

const SEO_SLUG = "strony-internetowe-miastko";

const metadataFallback: Metadata = {
  title: "Strony internetowe Miastko - www Miastko",
  description:
    "Strony internetowe Miastko to oferta stworzona specjalnie dla mieszkańców Miastka. Sprawdź naszą ofertę i Zadzwoń!",
  alternates: {
    canonical: "https://e-hermer.pl/strony-internetowe-miastko/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    locale: "pl_PL",
    type: "article",
    title: "Strony internetowe Miastko - www Miastko",
    description:
      "Strony internetowe Miastko to oferta stworzona specjalnie dla mieszkańców Miastka. Sprawdź naszą ofertę i Zadzwoń!",
    url: "https://e-hermer.pl/strony-internetowe-miastko/",
    siteName: "Hermer",
    images: [
      {
        url: "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp",
        width: 1024,
        height: 980,
        alt: "strony internetowe miastko",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strony internetowe Miastko - www Miastko",
    description:
      "Strony internetowe Miastko to oferta stworzona specjalnie dla mieszkańców Miastka. Sprawdź naszą ofertę i Zadzwoń!",
    images: ["https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp"],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch<{ seo?: SanitySeo } | null>(PAGE_SEO_QUERY, {
    slug: SEO_SLUG,
  });

  return buildMetadataFromSanityWithFallbackMetadata(page?.seo ?? null, metadataFallback);
}

export default function MiastkoSeoLayout({
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
                "@id": "https://e-hermer.pl/strony-internetowe-miastko/#webpage",
                url: "https://e-hermer.pl/strony-internetowe-miastko/",
                name: "Strony internetowe Miastko - www Miastko",
                datePublished: "2024-08-30T05:15:49+00:00",
                dateModified: "2024-08-30T06:00:12+00:00",
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
                headline: "Strony internetowe Miastko - www Miastko",
                keywords: "strony internetowe miastko",
                datePublished: "2024-08-30T05:15:49+00:00",
                dateModified: "2024-08-30T06:00:12+00:00",
                author: { "@id": "https://e-hermer.pl/author/admin/", name: "admin" },
                publisher: { "@id": "https://e-hermer.pl/#person" },
                description:
                  "Strony internetowe Miastko to oferta stworzona specjalnie dla mieszkańców Miastka. Sprawdź naszą ofertę i Zadzwoń!",
                name: "Strony internetowe Miastko - www Miastko",
                "@id": "https://e-hermer.pl/strony-internetowe-miastko/#richSnippet",
                isPartOf: {
                  "@id": "https://e-hermer.pl/strony-internetowe-miastko/#webpage",
                },
                image: {
                  "@id": "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp",
                },
                inLanguage: "pl-PL",
                mainEntityOfPage: {
                  "@id": "https://e-hermer.pl/strony-internetowe-miastko/#webpage",
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

import {
  buildMetadataFromSanityWithFallbackMetadata,
  type SanitySeo,
} from "@/sanity/lib/seo";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import type { Metadata } from "next";

const SEO_SLUG = "oferta/wordpress-shield";

const metadataFallback: Metadata = {
  title: "WordPress Shield - Hermer",
  description:
    "Stałe nadzorowanie i aktualizowanie systemu CMS to fundament zabezpieczający Twoją stronę www.Zabezpiecz dane swojej firmy oraz użytkowników dzięki usłudze",
  alternates: {
    canonical: "https://e-hermer.pl/oferta/wordpress-shield/",
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
    title: "WordPress Shield - Hermer",
    description:
      "Stałe nadzorowanie i aktualizowanie systemu CMS to fundament zabezpieczający Twoją stronę www.Zabezpiecz dane swojej firmy oraz użytkowników dzięki usłudze",
    url: "https://e-hermer.pl/oferta/wordpress-shield/",
    siteName: "Hermer",
    images: [
      {
        url: "https://e-hermer.pl/wp-content/uploads/2025/01/wordpress-shield-image.png",
        width: 899,
        height: 925,
        alt: "WordPress Shield",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Shield - Hermer",
    description:
      "Stałe nadzorowanie i aktualizowanie systemu CMS to fundament zabezpieczający Twoją stronę www.Zabezpiecz dane swojej firmy oraz użytkowników dzięki usłudze",
    images: ["https://e-hermer.pl/wp-content/uploads/2025/01/wordpress-shield-image.png"],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch<{ seo?: SanitySeo } | null>(PAGE_SEO_QUERY, {
    slug: SEO_SLUG,
  });

  return buildMetadataFromSanityWithFallbackMetadata(page?.seo ?? null, metadataFallback);
}

export default function WordPressShieldLayout({
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
                "@id": "https://e-hermer.pl/wp-content/uploads/2025/01/wordpress-shield-image.png",
                url: "https://e-hermer.pl/wp-content/uploads/2025/01/wordpress-shield-image.png",
                width: "200",
                height: "200",
                inLanguage: "pl-PL",
              },
              {
                "@type": "WebPage",
                "@id": "https://e-hermer.pl/oferta/wordpress-shield/#webpage",
                url: "https://e-hermer.pl/oferta/wordpress-shield/",
                name: "WordPress Shield - Hermer",
                datePublished: "2025-01-14T10:50:58+00:00",
                dateModified: "2025-01-24T10:43:56+00:00",
                isPartOf: { "@id": "https://e-hermer.pl/#website" },
                primaryImageOfPage: {
                  "@id": "https://e-hermer.pl/wp-content/uploads/2025/01/wordpress-shield-image.png",
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
                headline: "WordPress Shield - Hermer",
                datePublished: "2025-01-14T10:50:58+00:00",
                dateModified: "2025-01-24T10:43:56+00:00",
                author: { "@id": "https://e-hermer.pl/author/admin/", name: "admin" },
                publisher: { "@id": "https://e-hermer.pl/#person" },
                description:
                  "Sta\u0142e nadzorowanie i aktualizowanie systemu CMS to fundament zabezpieczaj\u0105cy Twoj\u0105 stron\u0119 www.Zabezpiecz dane swojej firmy oraz u\u017cytkownik\u00f3w dzi\u0119ki us\u0142udze",
                name: "WordPress Shield - Hermer",
                "@id": "https://e-hermer.pl/oferta/wordpress-shield/#richSnippet",
                isPartOf: {
                  "@id": "https://e-hermer.pl/oferta/wordpress-shield/#webpage",
                },
                image: {
                  "@id": "https://e-hermer.pl/wp-content/uploads/2025/01/wordpress-shield-image.png",
                },
                inLanguage: "pl-PL",
                mainEntityOfPage: {
                  "@id": "https://e-hermer.pl/oferta/wordpress-shield/#webpage",
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

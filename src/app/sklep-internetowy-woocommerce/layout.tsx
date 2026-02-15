import {
  buildMetadataFromSanityWithFallbackMetadata,
  type SanitySeo,
} from "@/sanity/lib/seo";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import type { Metadata } from "next";

const SEO_SLUG = "sklep-internetowy-woocommerce";

const metadataFallback: Metadata = {
  title: "Sklep internetowy WooCommerce - Hermer",
  description: "Wyprzedź konkurencję i osiągnij sukces sieci",
  alternates: {
    canonical: "https://e-hermer.pl/sklep-internetowy-woocommerce/",
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
    title: "Sklep internetowy WooCommerce - Hermer",
    description: "Wyprzedź konkurencję i osiągnij sukces sieci",
    url: "https://e-hermer.pl/sklep-internetowy-woocommerce/",
    siteName: "Hermer",
    images: [
      {
        url: "https://e-hermer.pl/wp-content/uploads/2024/08/profesjonalnywyglad.webp",
        width: 1137,
        height: 849,
        alt: "Sklep internetowy WooCommerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sklep internetowy WooCommerce - Hermer",
    description: "Wyprzedź konkurencję i osiągnij sukces sieci",
    images: ["https://e-hermer.pl/wp-content/uploads/2024/08/profesjonalnywyglad.webp"],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch<{ seo?: SanitySeo } | null>(PAGE_SEO_QUERY, {
    slug: SEO_SLUG,
  });

  return buildMetadataFromSanityWithFallbackMetadata(page?.seo ?? null, metadataFallback);
}

export default function WooCommerceLayout({
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
                "@id": "https://e-hermer.pl/wp-content/uploads/2024/08/profesjonalnywyglad.webp",
                url: "https://e-hermer.pl/wp-content/uploads/2024/08/profesjonalnywyglad.webp",
                width: "200",
                height: "200",
                inLanguage: "pl-PL",
              },
              {
                "@type": "WebPage",
                "@id": "https://e-hermer.pl/sklep-internetowy-woocommerce/#webpage",
                url: "https://e-hermer.pl/sklep-internetowy-woocommerce/",
                name: "Sklep internetowy WooCommerce - Hermer",
                datePublished: "2024-11-25T11:16:34+00:00",
                dateModified: "2024-11-26T10:57:56+00:00",
                isPartOf: { "@id": "https://e-hermer.pl/#website" },
                primaryImageOfPage: {
                  "@id": "https://e-hermer.pl/wp-content/uploads/2024/08/profesjonalnywyglad.webp",
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
                headline: "Sklep internetowy WooCommerce - Hermer",
                datePublished: "2024-11-25T11:16:34+00:00",
                dateModified: "2024-11-26T10:57:56+00:00",
                author: { "@id": "https://e-hermer.pl/author/admin/", name: "admin" },
                publisher: { "@id": "https://e-hermer.pl/#person" },
                description: "Wyprzedź konkurencję i osiągnij sukces sieci",
                name: "Sklep internetowy WooCommerce - Hermer",
                "@id": "https://e-hermer.pl/sklep-internetowy-woocommerce/#richSnippet",
                isPartOf: {
                  "@id": "https://e-hermer.pl/sklep-internetowy-woocommerce/#webpage",
                },
                image: {
                  "@id": "https://e-hermer.pl/wp-content/uploads/2024/08/profesjonalnywyglad.webp",
                },
                inLanguage: "pl-PL",
                mainEntityOfPage: {
                  "@id": "https://e-hermer.pl/sklep-internetowy-woocommerce/#webpage",
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

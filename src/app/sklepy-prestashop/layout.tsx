import {
  buildMetadataFromSanityWithFallbackMetadata,
  type SanitySeo,
} from "@/sanity/lib/seo";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import type { Metadata } from "next";

const SEO_SLUG = "sklepy-prestashop";

const metadataFallback: Metadata = {
  title: "Sklepy PrestaShop - Tworzenie sklepów PrestaShop | Hermer",
  description: "Pozyskuj nowych klientów i rozwijaj swój biznes",
  openGraph: {
    title: "Sklepy PrestaShop - Tworzenie sklepów PrestaShop | Hermer",
    description: "Pozyskuj nowych klientów i rozwijaj swój biznes",
    url: "https://e-hermer.pl/sklepy-prestashop/",
    images: [
      {
        url: "https://e-hermer.pl/wp-content/uploads/2024/08/profesjonalnywyglad.webp",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-video-preview": -1,
    "max-image-preview": "large",
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch<{ seo?: SanitySeo } | null>(PAGE_SEO_QUERY, {
    slug: SEO_SLUG,
  });

  return buildMetadataFromSanityWithFallbackMetadata(page?.seo ?? null, metadataFallback);
}

export default function PrestaShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

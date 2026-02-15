import {
  buildMetadataFromSanityWithFallbackMetadata,
  type SanitySeo,
} from "@/sanity/lib/seo";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import type { Metadata } from "next";

const SEO_SLUG = "strony-internetowe-dla-fotografa";

const metadataFallback: Metadata = {
  title: "Strona internetowa dla Fotografa - Strona dla Fotografa",
  description: "Strony internetowe dla Fotografów to jedna z naszych specjalizacji. Przygotujemy stronę www idealnie dopasowaną do Twojej branży. Sprawdź!",
  openGraph: {
    title: "Strona internetowa dla Fotografa - Strona dla Fotografa",
    description: "Strony internetowe dla Fotografów to jedna z naszych specjalizacji. Przygotujemy stronę www idealnie dopasowaną do Twojej branży. Sprawdź!",
    url: "https://e-hermer.pl/strony-internetowe-dla-fotografa/",
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

export default function PhotographerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

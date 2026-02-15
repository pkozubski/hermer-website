import {
  buildMetadataFromSanityWithFallbackMetadata,
  type SanitySeo,
} from "@/sanity/lib/seo";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import type { Metadata } from "next";

const SEO_SLUG = "projektowanie-stron-torun";

const metadataFallback: Metadata = {
  title: "Strony internetowe Toruń - Tworzenie stron Toruń - Hermer",
  description:
    "Strony internetowe Toruń to specjalna oferta skierowana do mieszkańców Torunia. Sprawdź naszą ofertę i Zadzwoń!",
  openGraph: {
    title: "Strony internetowe Toruń - Tworzenie stron Toruń - Hermer",
    description:
      "Strony internetowe Toruń to specjalna oferta skierowana do mieszkańców Torunia. Sprawdź naszą ofertę i Zadzwoń!",
    url: "https://e-hermer.pl/projektowanie-stron-torun/",
    images: [
      {
        url: "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp",
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

export default function TorunSeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

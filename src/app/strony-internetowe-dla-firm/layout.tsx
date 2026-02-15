import {
  buildMetadataFromSanityWithFallbackMetadata,
  type SanitySeo,
} from "@/sanity/lib/seo";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import type { Metadata } from "next";

const SEO_SLUG = "strony-internetowe-dla-firm";

const metadataFallback: Metadata = {
  title: "Strony internetowe dla Firm - Tworzenie stron www dla Firm | Hermer",
  description: "Tworzenie profesjonalnych stron internetowych dla firm to nasza specjalność. Zapewnij swojej firmie nowoczesną i skuteczną witrynę www. Sprawdź naszą ofertę!",
  openGraph: {
    title: "Strony internetowe dla Firm - Tworzenie stron www dla Firm | Hermer",
    description: "Tworzenie profesjonalnych stron internetowych dla firm to nasza specjalność. Zapewnij swojej firmie nowoczesną i skuteczną witrynę www. Sprawdź naszą ofertę!",
    url: "https://e-hermer.pl/strony-internetowe-dla-firm/",
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

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import {
  buildPageMetadataFromSanitySeo,
  type SanitySeo,
} from "@/sanity/lib/seo";

const SLUG = "najlepszy-pakiet";

const FALLBACK_SEO = {
  title: "Najlepszy pakiet - Hermer",
  description:
    "Naszą strategię marketingową zastosowaliśmy w ramach współpracy z firmą produkującą przyczepy na terenie Polski oraz Niemiec.",
  canonical: "https://e-hermer.pl/najlepszy-pakiet/",
  siteName: "Hermer",
  locale: "pl_PL",
  openGraphType: "website",
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch<{ seo?: SanitySeo } | null>(PAGE_SEO_QUERY, {
    slug: SLUG,
  });

  return buildPageMetadataFromSanitySeo(page?.seo ?? null, FALLBACK_SEO);
}

export default function NajlepszyPakietLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

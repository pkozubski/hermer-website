import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import {
  buildPageMetadataFromSanitySeo,
  type SanitySeo,
} from "@/sanity/lib/seo";

const SLUG = "oferta/marketing";

const FALLBACK_SEO = {
  title: "Marketing - Hermer",
  description:
    "Proponujemy współpracę opartą na modelu rozliczenia za efekty. Rozumiemy, że wiele firm spotyka się z problemem regularnych dużych opłat za pozycjonowanie",
  canonical: "https://e-hermer.pl/oferta/marketing/",
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

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

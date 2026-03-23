import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import {
  buildPageMetadataFromSanitySeo,
  type SanitySeo,
} from "@/sanity/lib/seo";

const SLUG = "oferta/zewnetrzny-dzial-marketingu";

const FALLBACK_SEO = {
  title: "Zewnętrzny dział marketingu dla Twojej firmy | Hermer",
  description:
    "Zewnętrzny dział marketingu dla Twojej firmy – Hermer. Kompleksowe strategie, kampanie i wsparcie w rozwoju marki. Postaw na skuteczny marketing!",
  canonical: "https://e-hermer.pl/oferta/zewnetrzny-dzial-marketingu/",
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

export default function ZewnetrznyDzialMarketinguLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

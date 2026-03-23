import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import {
  buildPageMetadataFromSanitySeo,
  type SanitySeo,
} from "@/sanity/lib/seo";

const SLUG = "oferta/pozycjonowanie";

const FALLBACK_SEO = {
  title: "Pozycjonowanie - Profesjonalne SEO | Hermer",
  description:
    "Zwiększ widoczność swojej strony w wyszukiwarkach dzięki profesjonalnemu pozycjonowaniu SEO.",
  canonical: "https://e-hermer.pl/oferta/pozycjonowanie/",
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

export default function PozycjonowanieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

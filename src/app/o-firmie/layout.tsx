import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import {
  buildPageMetadataFromSanitySeo,
  type SanitySeo,
} from "@/sanity/lib/seo";

const SLUG = "o-firmie";

const FALLBACK_SEO = {
  title: "O nas - Poznaj nas lepiej! Hermer",
  description:
    "Poznajmy się lepiej. Hermer to 11 lat doświadczenia, ponad 750 realizacji, 14 specjalistów, doradztwo i pełen profesjonalizm. Sprawdź!",
  canonical: "https://e-hermer.pl/o-firmie/",
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

export default function OfirmieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

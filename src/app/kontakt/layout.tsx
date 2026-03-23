import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import {
  buildPageMetadataFromSanitySeo,
  type SanitySeo,
} from "@/sanity/lib/seo";

const SLUG = "kontakt";

const FALLBACK_SEO = {
  title: "Kontakt - Hermer",
  description:
    "Skontaktuj się z nami. Wspólnie określamy cele biznesowe projektu oraz dobieramy najlepsze rozwiązania.",
  canonical: "https://e-hermer.pl/kontakt/",
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

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

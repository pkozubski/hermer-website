import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import {
  buildPageMetadataFromSanitySeo,
  type SanitySeo,
} from "@/sanity/lib/seo";

const SLUG = "realizacje";

const FALLBACK_SEO = {
  title: "Profesjonalne Strony www Portfolio - Strony www Realizacje - Hermer",
  description:
    "Strony internetowe, Sklepy internetowe, dopasowane do Twoich potrzeb. Sprawdź wszystkie nasze wyjątkowe Realizacje!",
  canonical: "https://e-hermer.pl/realizacje/",
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

export default function RealizacjeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

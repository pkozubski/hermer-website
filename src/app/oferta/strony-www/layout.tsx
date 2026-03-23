import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import {
  buildPageMetadataFromSanitySeo,
  type SanitySeo,
} from "@/sanity/lib/seo";

const SLUG = "oferta/strony-www";

const FALLBACK_SEO = {
  title: "Nowoczesne Strony Internetowe - Strony WWW Hermer",
  description:
    "Nowoczesne Strony Internetowe to nasza Specjalność. Dzięki 11-letniemu doświadczeniu wiemy jak stworzyć Skuteczną Stronę WWW i ściągnąć na nią Klientów. Sprawdź",
  canonical: "https://e-hermer.pl/oferta/strony-www/",
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

export default function StronyWwwLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

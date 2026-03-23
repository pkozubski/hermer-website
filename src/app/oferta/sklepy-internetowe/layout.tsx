import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import {
  buildPageMetadataFromSanitySeo,
  type SanitySeo,
} from "@/sanity/lib/seo";

const SLUG = "oferta/sklepy-internetowe";

const FALLBACK_SEO = {
  title:
    "Tworzenie Sklepów Internetowych - Profesjonalne Sklepy internetowe HERMER",
  description:
    "Tworzenie sklepów internetowych to nasza Specjalność. Dzięki 11-letniemu doświadczeniu wiemy jak stworzyć Profesjonalny Sklep Internetowy.",
  canonical: "https://e-hermer.pl/oferta/sklepy-internetowe/",
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

export default function SklepyInternetoweLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

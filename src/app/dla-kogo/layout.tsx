import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import {
  buildPageMetadataFromSanitySeo,
  type SanitySeo,
} from "@/sanity/lib/seo";

const SLUG = "dla-kogo";

const FALLBACK_SEO = {
  title: "Dla kogo - Hermer",
  description:
    "Wykorzystaj nieograniczony zasięg internetu, z którego codziennie korzystają niezliczone ilości osób i pokaż swoje usługi za pomocą efektywnej strony",
  canonical: "https://e-hermer.pl/dla-kogo/",
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

export default function DlaKogoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

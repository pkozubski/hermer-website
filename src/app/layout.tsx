import {
  buildMetadataFromSanityWithFallbackMetadata,
  type SanitySeo,
} from "@/sanity/lib/seo";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { SanityLive } from "@/sanity/lib/live";
import { ConditionalSmoothScroll } from "@/components/shared/ConditionalSmoothScroll";
import { CustomScrollbar } from "@/components/shared/CustomScrollbar";
import { buildOrganizationJsonLd, JsonLdScript } from "@/lib/jsonLd";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const SEO_SLUG = "home";

const metadataFallback: Metadata = {
  title: "Profesjonalne Strony internetowe - Projektowanie i Tworzenie - Hermer",
  description:
    "Profesjonalne Strony Internetowe to Nasza Specjalność. Stworzymy dla Ciebie Wyjątkową i Skuteczną Stronę WWW. 11 lat doświadczenia, ponad 700 realizacji, 14 specjalistów. Hermer - Sprawdź nas!",
  verification: {
    google: "rDoyUoz8HqD0RSQxSeTqAN49O6W4OvV6chRJKHC8loQ",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch<{ seo?: SanitySeo } | null>(PAGE_SEO_QUERY, {
    slug: SEO_SLUG,
  });

  return buildMetadataFromSanityWithFallbackMetadata(
    page?.seo ?? null,
    metadataFallback,
  );
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} ${instrumentSerif.variable}`}>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="hl1PBbimxCFcEEM+2u9EcQ"
          strategy="afterInteractive"
        />
        <ConditionalSmoothScroll>
          <JsonLdScript data={buildOrganizationJsonLd()} />
          <CustomScrollbar />
          {children}
        </ConditionalSmoothScroll>
        <SanityLive />
        {(await draftMode()).isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}

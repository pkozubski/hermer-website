import {
  buildMetadataFromSanityWithFallbackMetadata,
  type SanitySeo,
} from "@/sanity/lib/seo";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import VisualEditingWrapper from "@/components/VisualEditingWrapper";
import StyledComponentsRegistry from "@/lib/registry";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const SEO_SLUG = "home";

const metadataFallback: Metadata = {
  title: "Hermer - Efektywne strony internetowe",
  description:
    "Tworzymy nowoczesne i skuteczne strony internetowe, które przyciągają klientów.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      {/* Added instrumentSerif.variable to the body class list */}
      <body className={`${inter.className} ${instrumentSerif.variable}`}>
        <StyledComponentsRegistry>
          <SmoothScroll>
            {children}
            <Suspense fallback={null}>
              <VisualEditingWrapper />
            </Suspense>
          </SmoothScroll>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

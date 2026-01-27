import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import VisualEditingWrapper from "@/components/VisualEditingWrapper";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hermer - Efektywne strony internetowe",
  description:
    "Tworzymy nowoczesne i skuteczne strony internetowe, które przyciągają klientów.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vpe5mno.css" />
      </head>
      {/* Added instrumentSerif.variable to the body class list */}
      <body className={`${inter.className} ${instrumentSerif.variable}`}>
        <StyledComponentsRegistry>
          {children}
          <Suspense fallback={null}>
            <VisualEditingWrapper />
          </Suspense>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

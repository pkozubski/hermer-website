import React from "react";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PAGE_FAQS_QUERY, PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import { buildMetadataFromSanityWithFallbackMetadata } from "@/sanity/lib/seo";
import PilaClientPage from "./PilaClientPage";
import { FaqItem } from "@/components/Faq";

const PILA_SLUG = "tworzenie-stron-www-pila";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await client.fetch(PAGE_SEO_QUERY, { slug: PILA_SLUG });
  
  const fallbackMetadata: Metadata = {
    title: "Strony internetowe Piła - Tworzenie stron www Piła - Hermer",
    description: "Profesjonalne tworzenie stron www Piła. Indywidualne projekty, skuteczne pozycjonowanie i kompleksowe wsparcie. Zwiększ zyski swojej firmy z Hermer!",
    alternates: {
      canonical: "https://e-hermer.pl/tworzenie-stron-www-pila/",
    },
    keywords: [
      "tworzenie stron Piła",
      "strony internetowe Piła",
      "strony www Piła",
      "projektowanie stron Piła",
      "tworzenie stron www Piła",
    ],
    openGraph: {
      title: "Strony internetowe Piła - Tworzenie stron www Piła - Hermer",
      description: "Profesjonalne tworzenie stron www Piła. Indywidualne projekty, skuteczne pozycjonowanie i kompleksowe wsparcie.",
      url: "https://e-hermer.pl/tworzenie-stron-www-pila/",
      siteName: "Hermer",
      locale: "pl_PL",
      type: "website",
      images: [
        {
          url: "/assets/seo/gorzow/hero-bg-clover.webp",
          width: 1200,
          height: 630,
          alt: "Strony internetowe Piła",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Strony internetowe Piła - Tworzenie stron www Piła - Hermer",
      description: "Profesjonalne tworzenie stron www Piła. Indywidualne projekty, skuteczne pozycjonowanie i kompleksowe wsparcie.",
      images: ["/assets/seo/gorzow/hero-bg-clover.webp"],
    },
  };

  return buildMetadataFromSanityWithFallbackMetadata(seoData?.seo, fallbackMetadata);
}

export default async function PilaSeoPage() {
  const data = await client.fetch(PAGE_FAQS_QUERY, { slug: PILA_SLUG });

  const faqItems: FaqItem[] = data?.faqs?.map((item: any, index: number) => ({
    id: index + 1,
    question: item.question,
    answer: item.answer, // Faq component handles Portable Text
  })) || [];

  return <PilaClientPage faqItems={faqItems} />;
}

import React from "react";
import { PageLayout } from "@/components/shared/PageLayout";

import { SeoOfferHero } from "@/components/oferta/seo-offer/SeoOfferHero";
import { SeoProcessSection } from "@/components/oferta/seo-offer/SeoProcessSection";
import { SeoFeaturesBento } from "@/components/oferta/seo-offer/SeoFeaturesBento";
import { SeoBenefitsSection } from "@/components/oferta/seo-offer/SeoBenefitsSection";
import { SeoTargetSection } from "@/components/oferta/seo-offer/SeoTargetSection";
import { Contact } from "@/components/homepage/Contact";
import { Faq } from "@/components/shared/Faq";
import { CTASection } from "@/components/shared/CTASection";

import { client } from "@/sanity/lib/client";
import { PAGE_FAQS_QUERY } from "@/sanity/lib/queries";

export default async function SeoPage() {
  const data = await client.fetch(PAGE_FAQS_QUERY, { slug: "pozycjonowanie" });
  const faqItems = data?.faqs?.map((item: any, index: number) => ({
    id: index + 1,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <PageLayout>
      <SeoOfferHero />
      <SeoFeaturesBento />
      <SeoTargetSection />
      <SeoBenefitsSection />
      <SeoProcessSection />
      <Contact />
      <Faq items={faqItems} />
      <CTASection />
    </PageLayout>
  );
}

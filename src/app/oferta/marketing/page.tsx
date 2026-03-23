import React from "react";
import { PageLayout } from "@/components/shared/PageLayout";

import { MarketingOfferHero } from "@/components/oferta/marketing/MarketingOfferHero";
import { MarketingProcessSection } from "@/components/oferta/marketing/MarketingProcessSection";
import { MarketingFeaturesBento } from "@/components/oferta/marketing/MarketingFeaturesBento";
import { MarketingBenefitsSection } from "@/components/oferta/marketing/MarketingBenefitsSection";
import { MarketingTargetSection } from "@/components/oferta/marketing/MarketingTargetSection";
import { Contact } from "@/components/homepage/Contact";
import { Faq } from "@/components/shared/Faq";
import { CTASection } from "@/components/shared/CTASection";

import { client } from "@/sanity/lib/client";
import { PAGE_FAQS_QUERY } from "@/sanity/lib/queries";

export default async function MarketingPage() {
  const data = await client.fetch(PAGE_FAQS_QUERY, { slug: "marketing" });
  const faqItems = data?.faqs?.map((item: any, index: number) => ({
    id: index + 1,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <PageLayout>
      <MarketingOfferHero />
      <MarketingFeaturesBento />
      <MarketingTargetSection />
      <MarketingBenefitsSection />
      <MarketingProcessSection />
      <Contact />
      <Faq items={faqItems} />
      <CTASection />
    </PageLayout>
  );
}

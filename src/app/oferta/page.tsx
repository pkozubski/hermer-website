import React from "react";
import { PageLayout } from "@/components/shared/PageLayout";

import { OfferHeroFlow } from "@/components/oferta/shared/OfferHeroFlow";
import { PillStatementSection } from "@/components/oferta/shared/PillStatementSection";
import { Contact } from "@/components/homepage/Contact";
import { Faq } from "@/components/shared/Faq";
import { CTASection } from "@/components/shared/CTASection";

import { client } from "@/sanity/lib/client";
import { PAGE_FAQS_QUERY } from "@/sanity/lib/queries";

export default async function OfferPage() {
  const data = await client.fetch(PAGE_FAQS_QUERY, { slug: "oferta" });
  const faqItems = data?.faqs?.map((item: any, index: number) => ({
    id: index + 1,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <PageLayout>
      <OfferHeroFlow />
      <PillStatementSection />
      <Contact />
      <Faq items={faqItems} />
      <CTASection />
    </PageLayout>
  );
}

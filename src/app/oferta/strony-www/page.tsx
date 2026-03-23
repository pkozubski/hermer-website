import React from "react";
import { PageLayout } from "@/components/shared/PageLayout";

import { WebsiteOfferHero } from "@/components/oferta/website/WebsiteOfferHero";
import { ProcessSection } from "@/components/oferta/shared/ProcessSection";
import { WebsiteFeaturesBento } from "@/components/oferta/website/WebsiteFeaturesBento";
import { WhyHermerSection } from "@/components/oferta/website/WhyHermerSection";
import { TechStackSection } from "@/components/oferta/website/TechStackSection";
import { Contact } from "@/components/homepage/Contact";
import { Faq } from "@/components/shared/Faq";
import { OfferProjects } from "@/components/oferta/shared/OfferProjects";
import { CTASection } from "@/components/shared/CTASection";

import { client } from "@/sanity/lib/client";
import { PAGE_FAQS_QUERY } from "@/sanity/lib/queries";

export default async function WebDesignPage() {
  const data = await client.fetch(PAGE_FAQS_QUERY, { slug: "strony-www" });
  const faqItems = data?.faqs?.map((item: any, index: number) => ({
    id: index + 1,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <PageLayout>
      <WebsiteOfferHero />
      <ProcessSection />
      <WebsiteFeaturesBento />
      <WhyHermerSection />
      <TechStackSection />
      <OfferProjects category="website" />
      <Contact />
      <Faq items={faqItems} />
      <CTASection />
    </PageLayout>
  );
}

import React from "react";
import { PageLayout } from "@/components/shared/PageLayout";

import { EcommerceOfferHero } from "@/components/oferta/ecommerce/EcommerceOfferHero";
import { WhatIsEcommerceSection } from "@/components/oferta/ecommerce/WhatIsEcommerceSection";
import { EcommerceProcessSection } from "@/components/oferta/ecommerce/EcommerceProcessSection";
import { StoreFeaturesBento } from "@/components/oferta/ecommerce/StoreFeaturesBento";
import { EcommerceTechStackSection } from "@/components/oferta/ecommerce/EcommerceTechStackSection";
import { Contact } from "@/components/homepage/Contact";
import { Faq } from "@/components/shared/Faq";
import { OfferProjects } from "@/components/oferta/shared/OfferProjects";
import { CTASection } from "@/components/shared/CTASection";

import { client } from "@/sanity/lib/client";
import { PAGE_FAQS_QUERY } from "@/sanity/lib/queries";

export default async function EcommerceOfferPage() {
  const data = await client.fetch(PAGE_FAQS_QUERY, {
    slug: "sklepy-internetowe",
  });
  const faqItems = data?.faqs?.map((item: any, index: number) => ({
    id: index + 1,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <PageLayout showGradientBlobs={false}>
      <EcommerceOfferHero />
      <WhatIsEcommerceSection />
      <EcommerceProcessSection />
      <StoreFeaturesBento />
      <EcommerceTechStackSection />
      <OfferProjects category="ecommerce" />
      <Contact />
      <Faq items={faqItems} />
      <CTASection />
    </PageLayout>
  );
}

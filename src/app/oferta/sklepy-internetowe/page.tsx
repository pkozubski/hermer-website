import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { EcommerceOfferHero } from "@/components/oferta/EcommerceOfferHero";
import { WhatIsEcommerceSection } from "@/components/oferta/WhatIsEcommerceSection";
import { EcommerceProcessSection } from "@/components/oferta/EcommerceProcessSection";
import { EcommerceFeaturesBento } from "@/components/oferta/EcommerceFeaturesBento";
import { EcommerceTechStackSection } from "@/components/oferta/EcommerceTechStackSection";
import { EcommercePricingSection } from "@/components/oferta/EcommercePricingSection";
import { Faq } from "@/components/Faq";
import { OfferProjects } from "@/components/oferta/OfferProjects";
import { EcommerceContactSection } from "@/components/oferta/EcommerceContactSection";

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
    <div className="relative min-h-screen bg-neutral-900 text-white overflow-x-clip">
      {/* Global Dark Background Layer */}
      <div className="fixed inset-0 w-full h-full bg-neutral-900 z-0 pointer-events-none" />

      {/* Global Gradients / Blobs */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Right Purple Blob - Hero Area */}
        <div className="absolute top-[-10vh] right-[-10vw] w-[80vw] h-[80vw] md:w-[800px] md:h-[800px] bg-[#916AFF]/20 rounded-full blur-[100px] mix-blend-screen opacity-80 animate-pulse-slow" />

        {/* Left Blue Blob - Transition Area */}
        <div className="absolute top-[80vh] left-[-20vw] w-[90vw] h-[90vw] md:w-[1000px] md:h-[1000px] bg-[#52D8EA]/10 rounded-full blur-[120px] mix-blend-screen opacity-60" />

        {/* Additional Connecting Blob */}
        <div className="absolute top-[160vh] right-[-10vw] w-[60vw] h-[60vw] md:w-[800px] md:h-[800px] bg-[#916AFF]/15 rounded-full blur-[100px] mix-blend-screen opacity-50" />
      </div>

      <Header allowVisibility={true} />
      <main className="relative z-10">
        <EcommerceOfferHero />
        <WhatIsEcommerceSection />
        <EcommerceProcessSection />
        <EcommerceFeaturesBento />
        <EcommerceTechStackSection />
        {/* <EcommercePricingSection /> */}
        <OfferProjects category="ecommerce" />
        <Faq items={faqItems} />
        <EcommerceContactSection />
      </main>
      <Footer />
    </div>
  );
}

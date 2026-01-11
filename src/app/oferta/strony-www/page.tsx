import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

import { WebsiteOfferHero } from "@/components/oferta/WebsiteOfferHero";
import { ProcessSection } from "@/components/oferta/ProcessSection";
import { FeaturesSection } from "@/components/oferta/FeaturesSection";
import { TechStackSection } from "@/components/oferta/TechStackSection";
import { PricingSection } from "@/components/oferta/PricingSection";
import { WebsiteOfferFaq } from "@/components/oferta/WebsiteOfferFaq";
import { SimpleContactSection } from "@/components/oferta/SimpleContactSection";

export default function WebDesignPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SmoothScroll />
      <Header allowVisibility={true} />
      <main>
        <WebsiteOfferHero />
        <ProcessSection />
        <FeaturesSection />
        <TechStackSection />
        <PricingSection />
        <WebsiteOfferFaq />
        <SimpleContactSection />
      </main>
      <Footer />
    </div>
  );
}

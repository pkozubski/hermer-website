import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { OfferPageHero } from "@/components/oferta/OfferPageHero";
import { PillStatementSection } from "@/components/oferta/PillStatementSection";
import { ServicesGrid } from "@/components/oferta/ServicesGrid";
import { TrustSection } from "@/components/oferta/TrustSection";
import { ProcessSection } from "@/components/oferta/ProcessSection";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";

export default function OfferPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900">
      <SmoothScroll />
      <Header allowVisibility={true} />
      <main>
        <OfferPageHero />
        <PillStatementSection />
        <ServicesGrid />
        <TrustSection />
        <ProcessSection />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

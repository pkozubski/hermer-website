import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { OfferHeroFlow } from "@/components/oferta/OfferHeroFlow";
import { PillStatementSection } from "@/components/oferta/PillStatementSection";
import { TrustSection } from "@/components/oferta/TrustSection";
import { ProcessSection } from "@/components/oferta/ProcessSection";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";

export default function OfferPage() {
  return (
    <div className="relative min-h-screen bg-neutral-900 text-white overflow-x-clip">
      {/* Global Dark Background Layer */}
      <div className="fixed inset-0 w-full h-full bg-neutral-900 z-0 pointer-events-none" />

      {/* Global Gradients / Blobs (Copied from MainContent for consistency) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Right Purple Blob - Hero Area */}
        <div className="absolute top-[-10vh] right-[-10vw] w-[80vw] h-[80vw] md:w-[800px] md:h-[800px] bg-[#916AFF]/20 rounded-full blur-[100px] mix-blend-screen opacity-80 animate-pulse-slow" />

        {/* Left Blue Blob - Transition Area */}
        <div className="absolute top-[80vh] left-[-20vw] w-[90vw] h-[90vw] md:w-[1000px] md:h-[1000px] bg-[#52D8EA]/10 rounded-full blur-[120px] mix-blend-screen opacity-60" />

        {/* Additional Connecting Blob */}
        <div className="absolute top-[160vh] right-[-10vw] w-[60vw] h-[60vw] md:w-[800px] md:h-[800px] bg-[#916AFF]/15 rounded-full blur-[100px] mix-blend-screen opacity-50" />
      </div>

      <SmoothScroll />
      <Header allowVisibility={true} />
      <main className="relative z-10">
        <OfferHeroFlow />
        <PillStatementSection />
        {/* <TrustSection /> */}
        {/* <ProcessSection /> */}
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

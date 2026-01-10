import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Contact } from "@/components/Contact";
import { WebDesignHero } from "@/components/oferta/web-design/WebDesignHero";
import { WebDesignFeatures } from "@/components/oferta/web-design/WebDesignFeatures";
import { WebDesignProcess } from "@/components/oferta/web-design/WebDesignProcess";
import { TechStack } from "@/components/oferta/web-design/TechStack";

export default function WebDesignPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900">
      <SmoothScroll />
      <Header allowVisibility={true} />
      <main>
        <WebDesignHero />
        <WebDesignFeatures />
        <WebDesignProcess />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

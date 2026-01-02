"use client";

import React, { useState, useCallback } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Offer } from "./Offer";
import { Projects } from "./Projects";
import { About } from "./About";
import { Stats } from "./Stats";
import { Blog } from "./Blog";
import { Testimonials } from "./Testimonials";
import { Faq } from "./Faq";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { SmoothScroll } from "./SmoothScroll";

export const MainContent: React.FC = () => {
  const [isHeaderAllowed, setIsHeaderAllowed] = useState(false);

  const handleHeroAnimationComplete = useCallback(() => {
    setIsHeaderAllowed(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SmoothScroll />
      <Header allowVisibility={isHeaderAllowed} />
      <Hero onAnimationComplete={handleHeroAnimationComplete} />

      <div className="relative z-10 bg-white">
        <Offer />

        {/* Unified Dark Section (Projects + About) */}
        <section className="relative bg-neutral-900 overflow-clip">
          {/* Shared Background Decor */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Top Gradients (Projects Area) - Unchanged */}
            <div className="absolute top-[-10%] right-[-5%] w-[1000px] h-[1000px] bg-[#916AFF]/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#52D8EA]/5 rounded-full blur-[120px] mix-blend-screen" />

            {/* About Section Specific Gradients (Corrected) */}
            {/* Title Area (Middle Left) - Purple */}
            <div className="absolute top-[45%] left-[-10%] w-[600px] h-[600px] bg-[#916AFF]/15 rounded-full blur-[130px] mix-blend-screen pointer-events-none" />

            {/* Bottom Left - Purple */}
            <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#916AFF]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

            {/* Bottom Right - White */}
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[140px] mix-blend-overlay pointer-events-none" />
          </div>

          <div className="relative z-10">
            <About />
            <Projects />
            <Testimonials />
          </div>
        </section>

        <Blog />
        <Contact />
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

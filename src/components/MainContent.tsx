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
    <div className="relative min-h-screen bg-neutral-900 font-sans overflow-x-clip">
      {/* Global Dark Background Layer for Top Sections */}
      <div className="fixed inset-0 w-full h-full bg-neutral-900 z-0 pointer-events-none" />

      {/* Global Gradients / Blobs */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Right Purple Blob - Hero Area */}
        <div className="absolute top-[-10vh] right-[-10vw] w-[80vw] h-[80vw] md:w-[800px] md:h-[800px] bg-[#916AFF]/20 rounded-full blur-[100px] mix-blend-screen opacity-80 animate-pulse-slow" />

        {/* Left Blue Blob - Transition Area */}
        <div className="absolute top-[80vh] left-[-20vw] w-[90vw] h-[90vw] md:w-[1000px] md:h-[1000px] bg-[#52D8EA]/10 rounded-full blur-[120px] mix-blend-screen opacity-60" />

        {/* Additional Connecting Blob */}
        <div className="absolute top-[160vh] right-[-10vw] w-[60vw] h-[60vw] md:w-[800px] md:h-[800px] bg-[#916AFF]/15 rounded-full blur-[100px] mix-blend-screen opacity-50" />

        {/* About Section Specific Gradients */}
        <div className="absolute top-[250vh] left-[-10%] w-[600px] h-[600px] bg-[#916AFF]/10 rounded-full blur-[130px] mix-blend-screen pointer-events-none" />

        {/* Bottom Area Gradients */}
        <div className="absolute bottom-0 right-[-10%] w-[800px] h-[800px] bg-[#52D8EA]/5 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <SmoothScroll />
      <Header allowVisibility={isHeaderAllowed} />
      <Hero onAnimationComplete={handleHeroAnimationComplete} />

      <div className="relative z-10 bg-transparent">
        <Offer />

        {/* About/Projects/Testimonials Wrapper with Blobs */}
        <div className="relative overflow-clip">
          {/* Blobs Restored from Git History */}
          {/* Title Area (Top Right) - Purple */}
          <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-[#916AFF]/15 rounded-full blur-[130px] mix-blend-screen pointer-events-none" />

          {/* Middle area - Blueish */}
          <div className="absolute top-[50%] right-[-5%] w-[500px] h-[500px] bg-[#52D8EA]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

          {/* Bottom Left - Purple */}
          <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#916AFF]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

          {/* Bottom Right - White */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[140px] mix-blend-overlay pointer-events-none" />

          <About />
          <Projects />
          <Testimonials />
        </div>

        <Blog />
        <Contact />
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

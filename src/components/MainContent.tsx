"use client";

import React, { useState, useCallback, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Offer } from "./Offer";
import { WhoWeHelp } from "./WhoWeHelp";
import { Projects } from "./Projects";
import { About } from "./About";
import { Stats } from "./Stats";
import { Blog } from "./Blog";
import { Testimonials } from "./Testimonials";
import { Faq } from "./Faq";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

interface MainContentProps {
  faqItems?: any[];
}

export const MainContent: React.FC<MainContentProps> = ({ faqItems }) => {
  const { scrollY } = useScroll();
  const [isHeaderAllowed, setIsHeaderAllowed] = useState(false);

  const handleHeroAnimationComplete = useCallback(() => {
    setIsHeaderAllowed(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-900 font-sans overflow-x-clip">
      {/* Global Dark Background Layer for Top Sections */}
      <div className="fixed inset-0 w-full h-full bg-neutral-900 z-0 pointer-events-none" />

      {/* Global Gradients / Blobs */}
      <motion.div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Right Purple Blob - Hero Area */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 1000], [0, 300]) }}
          className="absolute top-[-10vh] right-[-10vw] w-[80vw] h-[80vw] md:w-[800px] md:h-[800px] bg-[#916AFF]/20 rounded-full blur-[100px] mix-blend-screen opacity-80 animate-pulse-slow"
        />

        {/* Left Blue Blob - Transition Area */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 1000], [0, -200]) }}
          className="absolute top-[80vh] left-[-20vw] w-[90vw] h-[90vw] md:w-[1000px] md:h-[1000px] bg-[#52D8EA]/10 rounded-full blur-[120px] mix-blend-screen opacity-60"
        />

        {/* Additional Connecting Blob */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 1000], [0, 150]) }}
          className="absolute top-[160vh] right-[-10vw] w-[60vw] h-[60vw] md:w-[800px] md:h-[800px] bg-[#916AFF]/15 rounded-full blur-[100px] mix-blend-screen opacity-50"
        />

        {/* About Section Specific Gradients */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 2000], [0, -100]) }}
          className="absolute top-[250vh] left-[-10%] w-[600px] h-[600px] bg-[#916AFF]/10 rounded-full blur-[130px] mix-blend-screen pointer-events-none"
        />

        {/* Bottom Area Gradients */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 3000], [0, 200]) }}
          className="absolute bottom-0 right-[-10%] w-[800px] h-[800px] bg-[#52D8EA]/5 rounded-full blur-[120px] mix-blend-screen"
        />
      </motion.div>

      <Header allowVisibility={isHeaderAllowed} />
      <Hero onAnimationComplete={handleHeroAnimationComplete} />

      <div className="relative z-10 bg-transparent">
        <Offer />
        <WhoWeHelp />

        {/* Unified Dark Section (Projects + About) */}
        <section className="relative bg-neutral-900 overflow-clip">
          {/* Shared Background Decor */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Title Area (Top Right) - Purple */}
            <motion.div
              style={{ y: useTransform(scrollY, [0, 5000], [0, 400]) }}
              className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-[#916AFF]/15 rounded-full blur-[130px] mix-blend-screen pointer-events-none"
            />

            {/* Middle area - Blueish */}
            <motion.div
              style={{ y: useTransform(scrollY, [0, 5000], [0, -300]) }}
              className="absolute top-[50%] right-[-5%] w-[500px] h-[500px] bg-[#52D8EA]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
            />

            {/* Bottom Left - Purple */}
            <motion.div
              style={{ y: useTransform(scrollY, [0, 5000], [0, 200]) }}
              className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#916AFF]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
            />

            {/* Bottom Right - White */}
            <motion.div
              style={{ y: useTransform(scrollY, [0, 5000], [0, -150]) }}
              className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[140px] mix-blend-overlay pointer-events-none"
            />
          </div>

          <div className="relative z-10">
            <About />
            <Projects />
            <Testimonials />
          </div>
        </section>

        <Blog />
        <Contact />
        <Faq items={faqItems} />
        <Footer />
      </div>
    </div>
  );
};

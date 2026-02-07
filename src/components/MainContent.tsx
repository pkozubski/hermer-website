'use client';

import React, { useState, useCallback } from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { Offer } from './Offer';
import { WhoWeHelp } from './WhoWeHelp';
import { Projects } from './Projects';
import { About } from './About';
import { Blog } from './Blog';
import { Testimonials } from './Testimonials';
import { Faq } from './Faq';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { CTASection } from './CTASection';

interface MainContentProps {
  faqItems?: any[];
}

export const MainContent: React.FC<MainContentProps> = ({ faqItems }) => {
  const [isHeaderAllowed, setIsHeaderAllowed] = useState(false);

  const handleHeroAnimationComplete = useCallback(() => {
    setIsHeaderAllowed(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-900 font-sans overflow-x-clip">
      <Header allowVisibility={isHeaderAllowed} />
      <Hero onAnimationComplete={handleHeroAnimationComplete} />

      <div className="relative z-10 bg-transparent">
        <Offer />
        <WhoWeHelp />

        {/* Unified Dark Section (Projects + About) */}
        <section className="relative bg-neutral-900 overflow-visible">
          <div className="relative z-10">
            <About />
            <Projects />
            <Testimonials />
          </div>
        </section>

        <Blog />
        <Contact />
        <Faq items={faqItems} />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

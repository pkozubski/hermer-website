'use client';
import React, { useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Header } from '../shared/Header';
import { Hero } from './Hero';
import { Review } from '../shared/Testimonials';
import type { FaqItem } from '../shared/Faq';

const Offer = dynamic(
  () => import('./Offer').then((m) => ({ default: m.Offer })),
  { ssr: false },
);

const About = dynamic(
  () => import('./About').then((m) => ({ default: m.About })),
  { ssr: false },
);
const Projects = dynamic(
  () => import('./Projects').then((m) => ({ default: m.Projects })),
  { ssr: false },
);
const Blog = dynamic(
  () => import('./Blog').then((m) => ({ default: m.Blog })),
  { ssr: false },
);
const Testimonials = dynamic(
  () => import('../shared/Testimonials').then((m) => ({ default: m.Testimonials })),
  { ssr: false },
);
const Faq = dynamic(() => import('../shared/Faq').then((m) => ({ default: m.Faq })), {
  ssr: false,
});
const Contact = dynamic(
  () => import('./Contact').then((m) => ({ default: m.Contact })),
  { ssr: false },
);
const Footer = dynamic(
  () => import('../shared/Footer').then((m) => ({ default: m.Footer })),
  { ssr: false },
);
const CTASection = dynamic(
  () => import('../shared/CTASection').then((m) => ({ default: m.CTASection })),
  { ssr: false },
);

interface MainContentProps {
  faqItems?: FaqItem[];
  reviews?: Review[];
}

export const MainContent: React.FC<MainContentProps> = ({
  faqItems,
  reviews = [],
}) => {
  const [isHeaderAllowed, setIsHeaderAllowed] = useState(false);
  const [isHeroAnimationAllowed, setIsHeroAnimationAllowed] = useState(false);

  // Start hero animation shortly after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeroAnimationAllowed(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleHeroAnimationComplete = useCallback(() => {
    setIsHeaderAllowed(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-900 font-sans overflow-x-clip">
      <Header allowVisibility={isHeaderAllowed} />
      <Hero
        onAnimationComplete={handleHeroAnimationComplete}
        startAnimation={isHeroAnimationAllowed}
      />

      <div className="relative z-20">
        <Offer />

        {/* Unified Dark Section (About + Projects + Testimonials) */}
        <section className="relative bg-neutral-900 overflow-visible">
          <div className="relative z-10">
            <About />
            <Projects />
            <Testimonials reviews={reviews} />
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

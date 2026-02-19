'use client';
import React, { useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Header } from './Header';
import { Hero } from './Hero';
import { Preloader } from './Preloader';
import { Review } from './Testimonials';
import type { FaqItem } from './Faq';

const Offer = dynamic(
  () => import('./Offer').then((m) => ({ default: m.Offer })),
  { ssr: false },
);
const WhoWeHelp = dynamic(
  () => import('./WhoWeHelp').then((m) => ({ default: m.WhoWeHelp })),
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
  () => import('./Testimonials').then((m) => ({ default: m.Testimonials })),
  { ssr: false },
);
const Faq = dynamic(() => import('./Faq').then((m) => ({ default: m.Faq })), {
  ssr: false,
});
const Contact = dynamic(
  () => import('./Contact').then((m) => ({ default: m.Contact })),
  { ssr: false },
);
const Footer = dynamic(
  () => import('./Footer').then((m) => ({ default: m.Footer })),
  { ssr: false },
);
const CTASection = dynamic(
  () => import('./CTASection').then((m) => ({ default: m.CTASection })),
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHeaderAllowed, setIsHeaderAllowed] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [isHeroAnimationAllowed, setIsHeroAnimationAllowed] = useState(false);

  // Signal content ready once MainContent has mounted and painted
  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setContentReady(true);
      });
    });
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setIsHeroAnimationAllowed(true);
      }, 500); // 500ms matches the fade transition duration
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleHeroAnimationComplete = useCallback(() => {
    setIsHeaderAllowed(true);
  }, []);

  return (
    <>
      {!isLoaded && (
        <Preloader
          onComplete={handlePreloaderComplete}
          contentReady={contentReady}
          assetsReady={true} // Improve LCP: Don't block initial render on below-the-fold assets
        />
      )}
      <div
        className={`relative min-h-screen bg-neutral-900 font-sans overflow-x-clip transition-opacity duration-500 ${
          contentReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Header allowVisibility={isHeaderAllowed} />
        <Hero
          onAnimationComplete={handleHeroAnimationComplete}
          startAnimation={isHeroAnimationAllowed}
        />

        <div className="relative z-20">
          <Offer />
          <WhoWeHelp />

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
    </>
  );
};

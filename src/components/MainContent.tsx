'use client';
import React, { useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Header } from './Header';
import { Hero } from './Hero';
import { Preloader } from './Preloader';
import { Review } from './Testimonials';
import { PROJECTS_SHADER_WARMUP_EVENT } from './ProjectCardScrollShader';
import { PROJECTS } from '@/data/projects';
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
  const [projectAssetsReady, setProjectAssetsReady] = useState(false);
  const [projectShaderWarmupReady, setProjectShaderWarmupReady] = useState(false);

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

  // Warm up "Realizations" thumbnails while preloader is visible.
  useEffect(() => {
    let cancelled = false;
    const sources = PROJECTS.slice(0, 8).map((project) => project.image.src);

    const preload = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new window.Image();
        const done = () => {
          img.onload = null;
          img.onerror = null;
          resolve();
        };
        img.onload = done;
        img.onerror = done;
        img.decoding = 'async';
        img.src = src;

        if (img.complete) {
          done();
          return;
        }

        // decode() may resolve before onload in some browsers.
        if (typeof img.decode === 'function') {
          img.decode().then(done).catch(() => {
            /* no-op: onload/onerror will resolve */
          });
        }
      });

    const fallbackTimer = window.setTimeout(() => {
      if (!cancelled) setProjectAssetsReady(true);
    }, 2200);

    Promise.allSettled(sources.map(preload)).then(() => {
      if (cancelled) return;
      clearTimeout(fallbackTimer);
      setProjectAssetsReady(true);
    });

    return () => {
      cancelled = true;
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Wait for WebGL card overlay warmup while preloader is visible.
  useEffect(() => {
    const w = window as unknown as Record<string, unknown>;
    const readyFlagKey = `__${PROJECTS_SHADER_WARMUP_EVENT}__`;
    const markReady = () => setProjectShaderWarmupReady(true);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      markReady();
      return;
    }

    if (w[readyFlagKey] === true) {
      markReady();
      return;
    }

    let fallbackTimer = 0;
    const onWarmupReady: EventListener = () => {
      clearTimeout(fallbackTimer);
      w[readyFlagKey] = true;
      markReady();
    };

    fallbackTimer = window.setTimeout(() => {
      markReady();
    }, 2600);

    window.addEventListener(PROJECTS_SHADER_WARMUP_EVENT, onWarmupReady);
    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener(PROJECTS_SHADER_WARMUP_EVENT, onWarmupReady);
    };
  }, []);

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
          assetsReady={projectAssetsReady && projectShaderWarmupReady}
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

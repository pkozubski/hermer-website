'use client';

import React, { memo, useEffect, useRef, useState } from 'react';
import {
  Code2,
  Palette,
  Search,
  BarChart3,
  Smartphone,
  Layout,
  ShoppingCart,
  MessageSquare,
  Star,
} from 'lucide-react';
import { gsap } from 'gsap';
import { CmsCard } from './cards/CmsCard';
import { SeoCard } from './cards/SeoCard';
import { ResponsivenessCard } from './cards/ResponsivenessCard';
import { CardWheelHorizontal } from './CardWheelHorizontal';
import { CardWheel } from './CardWheel';
import HeroSquiggle from './HeroSquiggle';
import { WebDevCard } from './cards/WebDevCard';
import { EcommerceCard } from './cards/EcommerceCard';
import { SocialMediaCard } from './cards/SocialMediaCard';
import { MarketingCard } from './cards/MarketingCard';
import { UiUxCard } from './cards/UiUxCard';
import { ReelCtaButton } from './ui/ReelCtaButton';

const CARDS_DATA = [
  {
    id: 'code',
    theme: 'blue',
    icon: Code2,
    title: 'Development',
    content: (
      <div className="relative z-10 flex h-[260px] w-full justify-center overflow-visible">
        <div className="origin-top scale-[0.55] transform-gpu">
          <WebDevCard />
        </div>
      </div>
    ),
  },
  {
    id: 'design',
    theme: 'purple',
    icon: Palette,
    title: 'UI/UX Design',
    content: (
      <div className="relative z-10 flex h-[260px] w-full justify-center overflow-visible">
        <div className="origin-top scale-[0.55] transform-gpu">
          <UiUxCard />
        </div>
      </div>
    ),
  },
  {
    id: 'mobile',
    theme: 'blue',
    icon: Smartphone,
    title: 'Responsywność',
    content: (
      <div className="relative z-10 flex h-[260px] w-full justify-center overflow-visible">
        <div className="origin-top scale-[0.55] transform-gpu">
          <ResponsivenessCard />
        </div>
      </div>
    ),
  },
  {
    id: 'seo',
    theme: 'green',
    icon: Search,
    title: 'SEO & Pozycjonowanie',
    content: (
      <div className="relative z-10 flex h-[260px] w-full justify-center overflow-visible">
        <div className="origin-top scale-[0.55] transform-gpu">
          <SeoCard />
        </div>
      </div>
    ),
  },
  {
    id: 'marketing',
    theme: 'orange',
    icon: BarChart3,
    title: 'Marketing',
    content: (
      <div className="relative z-10 flex h-[260px] w-full justify-center overflow-visible">
        <div className="origin-top scale-[0.55] transform-gpu">
          <MarketingCard />
        </div>
      </div>
    ),
  },
  {
    id: 'cms',
    theme: 'purple',
    icon: Layout,
    title: 'System CMS',
    content: (
      <div className="relative z-10 flex h-[260px] w-full justify-center overflow-visible">
        <div className="origin-top scale-[0.55] transform-gpu">
          <CmsCard />
        </div>
      </div>
    ),
  },
  {
    id: 'ecommerce',
    theme: 'pink',
    icon: ShoppingCart,
    title: 'E-commerce',
    content: (
      <div className="relative z-10 flex h-[260px] w-full justify-center overflow-visible">
        <div className="origin-top scale-[0.55] transform-gpu">
          <EcommerceCard />
        </div>
      </div>
    ),
  },
  {
    id: 'social',
    theme: 'orange',
    icon: MessageSquare,
    title: 'Social Media',
    content: (
      <div className="relative z-10 flex h-[260px] w-full justify-center overflow-visible">
        <div className="origin-top scale-[0.55] transform-gpu">
          <SocialMediaCard />
        </div>
      </div>
    ),
  },
];

const LEFT_COLUMN_CARDS = [
  CARDS_DATA[0],
  CARDS_DATA[2],
  CARDS_DATA[4],
  CARDS_DATA[6],
];
const RIGHT_COLUMN_CARDS = [
  CARDS_DATA[1],
  CARDS_DATA[3],
  CARDS_DATA[5],
  CARDS_DATA[7],
];

const CountUp: React.FC<{
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  start?: boolean;
}> = ({ end, duration = 2000, delay = 0, suffix = '', start = false }) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrameId: number | null = null;
    const el = spanRef.current;
    if (!el) return;

    const easeOutExpo = (x: number): number =>
      x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(easeOutExpo(progress) * end);
      el.textContent = `${value}${suffix}`;
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const timeoutId = window.setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration, delay, suffix, start]);

  return (
    <span ref={spanRef} className="tabular-nums">
      0{suffix}
    </span>
  );
};

const HERO_TEXTS = [
  'Strona www i marketing, które pracują na Twoją markę',
  'Zamieniamy chaos w cyfrowy porządek',
  'Buduj z nami lepszą widoczność firmy w Internecie',
];

const HERO_SPACER_TEXT = HERO_TEXTS.reduce((longest, current) =>
  current.length > longest.length ? current : longest,
);

const MaskedRevealText = memo(function MaskedRevealText({
  text,
  delay = 0,
  start = false,
}: {
  text: string;
  delay?: number;
  start?: boolean;
}) {
  const words = text.split(' ');
  const wordsRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!wordsRef.current) return;

    const targets = wordsRef.current.querySelectorAll<HTMLElement>('[data-word]');
    gsap.killTweensOf(targets);

    if (!start) {
      gsap.set(targets, { yPercent: 110 });
      return;
    }

    gsap.fromTo(
      targets,
      { yPercent: 110 },
      {
        yPercent: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay,
        stagger: 0.08,
      },
    );
  }, [text, delay, start]);

  return (
    <span ref={wordsRef} className="inline-block">
      {words.map((word, wordIndex) => (
        <span
          key={`${word}-${wordIndex}`}
          className="mr-[0.25em] inline-block overflow-hidden whitespace-nowrap align-bottom pb-1"
        >
          <span data-word className="inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </span>
  );
});

const RotatingHeroHeadline = memo(function RotatingHeroHeadline({
  start = false,
}: {
  start?: boolean;
}) {
  const [textIndex, setTextIndex] = useState(0);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const headingClassName =
    'w-full mx-auto text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-[5.25rem] leading-[1.05] text-white tracking-tight font-display font-medium [text-wrap:balance]';

  useEffect(() => {
    if (!start) return;

    let intervalId: number | null = null;
    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setTextIndex((prev) => (prev + 1) % HERO_TEXTS.length);
      }, 5000);
    }, 3000);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [start]);

  useEffect(() => {
    if (!start || !headingRef.current) return;

    gsap.fromTo(
      headingRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.45, ease: 'power2.out' },
    );
  }, [textIndex, start]);

  return (
    <div className="flex w-full justify-center">
      <div className="relative mx-auto w-[min(92vw,1000px)]">
        <h1 className={`${headingClassName} invisible`} aria-hidden="true">
          {HERO_SPACER_TEXT}
        </h1>
        <h1
          ref={headingRef}
          className={`${headingClassName} absolute inset-0 ${start ? '' : 'opacity-0'}`}
        >
          <MaskedRevealText text={HERO_TEXTS[textIndex]} delay={0.1} start={start} />
        </h1>
      </div>
    </div>
  );
});

export const Hero: React.FC<{
  onAnimationComplete?: () => void;
  startAnimation?: boolean;
}> = ({ onAnimationComplete, startAnimation = false }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    const timer = setTimeout(() => {
      onAnimationComplete?.();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onAnimationComplete, startAnimation]);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        setScrollY(window.scrollY || 0);
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const leftColumnY = -Math.min(scrollY * 0.1, 100);
  const rightColumnY = Math.min(scrollY * 0.1, 100);

  return (
    <section
      className="relative isolate z-0 flex h-auto min-h-screen w-full items-center overflow-visible bg-transparent px-4 py-20 text-center sm:px-8 lg:px-8 lg:py-0"
      style={{ contain: 'layout style' }}
    >
      <HeroSquiggle />

      <div
        className="pointer-events-none absolute -right-20 -top-24 z-0 h-[300px] w-[300px] rounded-full opacity-40 blur-[160px] sm:-right-24 sm:-top-28 sm:h-[420px] sm:w-[420px] lg:-right-28 lg:-top-32 lg:h-[520px] lg:w-[520px]"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(145,106,255,0.42) 0%, rgba(82,216,234,0.24) 45%, rgba(23,23,23,0) 75%)',
        }}
      />
      <div
        className="pointer-events-none absolute right-8 top-6 z-0 h-[90px] w-[90px] rounded-full opacity-[0.22] blur-[90px] sm:right-10 sm:top-4 sm:h-[120px] sm:w-[120px] lg:right-16 lg:top-8"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(145,106,255,0.05) 70%, rgba(23,23,23,0) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-8 perspective-[2000px] lg:grid-cols-12 lg:gap-0">
        <div
          className={`relative col-span-3 hidden h-[650px] w-[320px] select-none justify-self-end overflow-hidden transition-opacity duration-700 xl:mr-0 xl:w-full lg:-mr-20 lg:block ${startAnimation ? 'opacity-100' : 'opacity-0'}`}
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
            transform: `perspective(1500px) rotateY(12deg) translateZ(-20px) translateY(${leftColumnY}px)`,
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        >
          <div className="absolute inset-x-0 z-10 h-full w-full">
            <CardWheel cards={LEFT_COLUMN_CARDS} direction="up" start={startAnimation} />
          </div>
        </div>

        <div className="relative z-20 col-span-1 flex flex-col items-center px-4 pb-0 pt-12 text-center lg:col-span-6 lg:pt-32">
          <div className="mb-6 flex w-full justify-center pb-4 sm:mb-8">
            <RotatingHeroHeadline start={startAnimation} />
          </div>

          <p
            className={`mb-8 max-w-lg text-base font-light leading-relaxed tracking-wide text-neutral-400 sm:text-lg lg:mb-10 lg:text-xl ${startAnimation ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
          >
            Zajmiemy się Twoją stroną kompleksowo — <br className="hidden sm:block" />
            od przygotowania koncepcji po wdrożenie gotowego projektu.
          </p>

          <div className={`${startAnimation ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
            <ReelCtaButton text="Rozpocznij projekt" href="/kontakt" className="" size="large" />
          </div>

          <div
            className={`mb-8 mt-10 h-px w-full max-w-xs bg-white/10 lg:mb-10 lg:mt-16 ${startAnimation ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
          />

          <div
            className={`flex w-full flex-nowrap justify-center gap-2 sm:gap-8 lg:gap-16 ${startAnimation ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
          >
            <div className="group flex cursor-default flex-col items-center">
              <span className="mb-2 flex items-center text-2xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                <CountUp end={700} delay={1000} start={startAnimation} />
                <span className="ml-1 align-top text-lg text-[#916AFF] sm:text-2xl lg:text-3xl">+</span>
              </span>
              <span className="relative z-10 text-[8px] text-neutral-500 sm:text-xs lg:text-base">
                zrealizowanych projektów
              </span>
            </div>

            <div className="group flex cursor-default flex-col items-center">
              <span className="mb-2 flex items-center text-2xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                <CountUp end={98} delay={1100} start={startAnimation} />
                <span className="ml-1 align-top text-lg text-[#916AFF] sm:text-2xl lg:text-3xl">%</span>
              </span>
              <div className="mb-2 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={12} fill="#916AFF" className="text-[#916AFF]" />
                ))}
              </div>
              <span className="text-[8px] text-neutral-500 sm:text-xs lg:text-base">
                zadowolonych klientów
              </span>
            </div>

            <div className="group flex cursor-default flex-col items-center">
              <span className="mb-2 flex items-center text-2xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                <CountUp end={15} delay={1200} start={startAnimation} />
                <span className="ml-1 align-top text-lg text-[#916AFF] sm:text-2xl lg:text-3xl">+</span>
              </span>
              <div className="mb-2 flex -space-x-2">
                <div className="h-6 w-6 rounded-full border-2 border-neutral-900 bg-neutral-800" />
                <div className="h-6 w-6 rounded-full border-2 border-neutral-900 bg-neutral-700" />
                <div className="h-6 w-6 rounded-full border-2 border-neutral-900 bg-neutral-600" />
                <div className="h-6 w-6 rounded-full border-2 border-neutral-900 bg-[#1A1A1A]" />
              </div>
              <span className="text-[8px] text-neutral-500 sm:text-xs lg:text-base">ekspertów w zespole</span>
            </div>
          </div>

          <div
            className={`relative mt-8 h-[400px] w-[calc(100%+2rem)] -mx-4 overflow-hidden sm:w-[calc(100%+4rem)] sm:-mx-8 lg:mt-12 lg:hidden ${startAnimation ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
            style={{
              maskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
          >
            <CardWheelHorizontal cards={CARDS_DATA} direction="left" start={startAnimation} />
          </div>
        </div>

        <div
          className={`relative col-span-3 hidden h-[650px] w-[320px] select-none justify-self-start overflow-hidden transition-opacity duration-700 xl:ml-0 xl:w-full lg:-ml-20 lg:block ${startAnimation ? 'opacity-100' : 'opacity-0'}`}
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
            transform: `perspective(1500px) rotateY(-12deg) translateZ(-20px) translateY(${rightColumnY}px)`,
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        >
          <div className="absolute inset-x-0 z-10 h-full w-full">
            <CardWheel cards={RIGHT_COLUMN_CARDS} direction="down" start={startAnimation} />
          </div>
        </div>
      </div>
    </section>
  );
};

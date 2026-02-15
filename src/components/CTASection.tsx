'use client';

import { gsap } from 'gsap';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ReelCtaButton } from './ui/ReelCtaButton';
import { LineReveal } from './ui/LineReveal';

function PhoneAnimatedUI() {
  const [phase, setPhase] = useState(0);
  const phaseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timers: number[] = [];

    const runCycle = () => {
      setPhase(0);
      timers.push(window.setTimeout(() => setPhase(1), 1800));
      timers.push(window.setTimeout(() => setPhase(2), 4000));
      timers.push(window.setTimeout(() => setPhase(3), 6500));
    };

    runCycle();
    const loop = window.setInterval(runCycle, 9500);

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.clearInterval(loop);
    };
  }, []);

  useEffect(() => {
    if (!phaseRef.current) return;
    gsap.fromTo(
      phaseRef.current,
      { autoAlpha: 0, y: 12 },
      { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power2.out' },
    );
  }, [phase]);

  const skeletonBlocks = useMemo(
    () => [
      { w: 'w-10', h: 'h-6', delay: 0 },
      { w: 'flex-1', h: 'h-6', delay: 0.08 },
      { w: 'w-8', h: 'h-6', delay: 0.16 },
      { w: 'w-[30%]', h: 'h-6', delay: 0.5 },
      { w: 'w-[25%]', h: 'h-6', delay: 0.58 },
      { w: 'w-[20%]', h: 'h-6', delay: 0.66 },
      { w: 'w-[25%]', h: 'h-6', delay: 0.74 },
      { w: 'w-[85%]', h: 'h-3', delay: 0.9 },
      { w: 'w-[70%]', h: 'h-3', delay: 0.98 },
      { w: 'w-[55%]', h: 'h-3', delay: 1.06 },
    ],
    [],
  );

  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden p-4 sm:p-5">
      <div key={phase} ref={phaseRef} className="h-full">
        {phase <= 1 && (
          <div className="flex h-full flex-col">
            <div className="mb-3 flex gap-2 sm:mb-4">
              {skeletonBlocks.slice(0, 3).map((block, index) => (
                <div
                  key={index}
                  className={`${block.w} ${block.h} rounded-md bg-white/10 animate-pulse`}
                  style={{ animationDelay: `${block.delay}s` }}
                />
              ))}
            </div>

            <div className="relative mb-3 h-[30%] w-full overflow-hidden rounded-lg bg-white/8 sm:mb-4">
              {phase >= 1 && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
              )}
            </div>

            <div className="mb-3 flex gap-1.5 sm:mb-4 sm:gap-2">
              {skeletonBlocks.slice(3, 7).map((block, index) => (
                <div
                  key={index}
                  className={`${block.w} ${block.h} rounded-md bg-white/10 animate-pulse`}
                  style={{ animationDelay: `${block.delay}s` }}
                />
              ))}
            </div>

            <div className="mb-3 space-y-2 sm:mb-4">
              {skeletonBlocks.slice(7).map((block, index) => (
                <div
                  key={index}
                  className={`${block.w} ${block.h} rounded bg-white/8 animate-pulse`}
                  style={{ animationDelay: `${block.delay}s` }}
                />
              ))}
            </div>

            {phase >= 1 && (
              <div className="mt-auto">
                <div className="mb-2 flex items-center justify-between text-[10px]">
                  <span className="text-white/40">Budowanie strony...</span>
                  <span className="text-[#916aff]">67%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#916aff] to-[#b794ff]"
                    style={{ width: '67%', transition: 'width 1.8s ease-out' }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {phase === 2 && (
          <div className="flex h-full flex-col items-center justify-center px-3 text-center">
            <div className="relative mb-5 h-16 w-16 sm:mb-6 sm:h-20 sm:w-20">
              <div className="absolute inset-0 rounded-full border border-[#916aff]/30 animate-ping" />
              <div className="absolute inset-2 rounded-full border border-[#916aff]/50 animate-pulse" />
              <div className="absolute inset-4 flex items-center justify-center rounded-full bg-[#916aff]/20">
                <div className="h-3 w-3 rounded-full bg-[#916aff] animate-pulse sm:h-4 sm:w-4" />
              </div>
            </div>

            <p className="mb-2 text-[14px] font-medium text-white/90">Twoja strona jest</p>
            <p className="mb-4 text-[18px] font-semibold text-[#916aff]">w budowie</p>

            <div className="flex gap-1.5">
              {[0, 1, 2].map((dot) => (
                <div
                  key={dot}
                  className="h-1.5 w-1.5 rounded-full bg-[#916aff] animate-bounce"
                  style={{ animationDelay: `${dot * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}

        {phase === 3 && (
          <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#916aff]/15 sm:h-14 sm:w-14">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#916aff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17L4 12" />
              </svg>
            </div>

            <p className="mb-1 text-[12px] text-white/80">Wystarczy jeden krok</p>
            <p className="mb-5 text-[15px] font-medium text-white/90">Skontaktuj się z nami</p>

            <div className="flex items-center gap-2 rounded-full bg-[#916aff] px-5 py-2.5 text-[12px] font-medium text-white">
              <span className="inline-block animate-pulse">→</span>
              <span>Rozpocznij projekt</span>
            </div>

            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="absolute h-1 w-1 rounded-full bg-[#916aff]/30 animate-bounce"
                style={{
                  left: `${15 + index * 14}%`,
                  top: `${20 + (index % 3) * 25}%`,
                  animationDelay: `${index * 0.2}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute bottom-[-40px] left-1/2 h-[200px] w-[350px] -translate-x-1/2 md:h-[300px] md:w-[500px]">
        <div className="size-full rounded-full bg-[#916AFF]/30 blur-[100px]" />
      </div>

      <div
        className="pointer-events-none absolute hidden lg:block"
        style={{ top: '-30px', bottom: '-30px', left: '-30px', right: '-30px' }}
      >
        <div className="absolute top-0 h-px bg-[#333]" style={{ left: '-60px', right: '-60px' }} />
        <div className="absolute bottom-0 h-px bg-[#333]" style={{ left: '-60px', right: '-60px' }} />
        <div className="absolute left-0 w-px bg-[#333]" style={{ top: '-60px', bottom: '-60px' }} />
        <div className="absolute right-0 w-px bg-[#333]" style={{ top: '-60px', bottom: '-60px' }} />
      </div>

      <div className="relative z-10 h-[390px] w-[260px] rounded-[24px] bg-white/15 p-[3px] shadow-2xl backdrop-blur-xl backdrop-saturate-150 sm:h-[460px] sm:w-[320px] sm:rounded-[28px] md:h-[530px] md:w-[380px] md:rounded-[32px] lg:h-[600px] lg:w-[440px] lg:rounded-[36px]">
        <div className="relative h-full w-full overflow-hidden rounded-[21px] bg-[#1e1e1e]/95 backdrop-saturate-150 sm:rounded-[25px] md:rounded-[29px] lg:rounded-[33px]">
          <PhoneAnimatedUI />
        </div>
      </div>
    </div>
  );
}

interface CTASectionProps {
  title?: string;
  subtitleLines?: string[];
}

export function CTASection({
  title = 'Gotowy na zmianę?',
  subtitleLines = [
    'Skontaktuj się z nami i porozmawiajmy',
    'o Twoim projekcie. Wycena',
    'i konsultacja są bezpłatne.',
  ],
}: CTASectionProps) {
  return (
    <section
      className="relative mt-32 w-full bg-[rgba(255,255,255,0.01)]"
      style={{ clipPath: 'inset(-200px 0 0 0)' }}
    >
      <div className="container relative mx-auto px-4 py-10 md:py-14 lg:py-16">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-8">
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="text-5xl leading-tight tracking-tighter text-white md:text-8xl">{title}</h2>

            <div className="mt-8">
              <LineReveal
                lines={subtitleLines}
                className="max-w-xs text-xs uppercase tracking-wide text-neutral-400 leading-relaxed md:max-w-sm md:text-sm"
              />
            </div>

            <div className="mt-8 md:mt-10">
              <ReelCtaButton text="Zacznijmy współpracę" href="/kontakt" size="large" />
            </div>
          </div>

          <div className="relative flex flex-shrink-0 justify-center lg:-mb-[180px] lg:-mt-32 lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

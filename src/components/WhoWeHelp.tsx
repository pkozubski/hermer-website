'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import { SplitRevealTitle } from './ui/SplitRevealTitle';
import { LineReveal } from './ui/LineReveal';

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

interface HelpCategory {
  id: string;
  num: string;
  title: string;
  description: string;
  image: string;
  accent: string;
}

const CATEGORIES: HelpCategory[] = [
  {
    id: 'b2b-b2c',
    num: '01',
    title: 'Firmy B2B i B2C',
    description:
      'Porządkujemy komunikację i budujemy ścieżkę, która prowadzi klienta od pierwszego wejścia do zapytania lub zakupu.',
    image: '/images/who-we-help/b2b-b2c.png',
    accent: '#8b5cf6',
  },
  {
    id: 'startups',
    num: '02',
    title: 'Startupy',
    description:
      'Pomagamy wystartować z jasnym przekazem i stroną, która rozbudowuje się wraz z rozwojem biznesu.',
    image: '/images/who-we-help/startups.png',
    accent: '#06b6d4',
  },
  {
    id: 'ecommerce',
    num: '03',
    title: 'E-commerce',
    description:
      'Upraszczamy ścieżkę zakupu, dopracowujemy prezentację oferty i usuwamy przeszkody, które zatrzymują klientów przed finalizacją.',
    image: '/images/who-we-help/ecommerce.png',
    accent: '#10b981',
  },
  {
    id: 'personal',
    num: '04',
    title: 'Marki osobiste',
    description:
      'Tworzymy spójną stronę pokazującą kompetencje firmy, budujemy zaufanie i zakres oferty, aby zachęcić klientów do kontaktu.',
    image: '/images/who-we-help/personal-brands.png',
    accent: '#f59e0b',
  },
];

export const WhoWeHelp: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const active = CATEGORIES[activeIdx];

  // Auto-rotate
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % CATEGORIES.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
    startTimer();
  };

  // Progress for active item timer bar
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const frame = () => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(elapsed / 5000, 1));
      if (elapsed < 5000) rafRef.current = requestAnimationFrame(frame);
    };
    const rafRef = { current: requestAnimationFrame(frame) };
    return () => cancelAnimationFrame(rafRef.current);
  }, [activeIdx]);

  return (
    <section className="relative w-full bg-neutral-900 py-24 md:py-32 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-4 mb-20 md:mb-28 relative z-10">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <SplitRevealTitle
            line1="Komu"
            line2="pomagamy?"
            className="text-5xl md:text-8xl text-white tracking-tighter"
          />
          <LineReveal
            lines={[
              'Współpracujemy z firmami na różnych',
              'etapach rozwoju, które chcą skutecznie',
              'docierać do klientów w internecie.',
            ]}
            className="text-neutral-400 max-w-xs md:max-w-sm text-xs md:text-sm uppercase tracking-wide leading-relaxed"
          />
        </div>
      </div>

      {/* ─── Main layout: split view ─── */}
      <div className="w-full container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-0 w-full">
          {/* Left: visual stage */}
          <div className="relative w-full lg:w-[55%] flex items-center justify-center min-h-[450px] md:min-h-[680px]">
            {/* Rotating ring decoration */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="w-[420px] h-[420px] md:w-[620px] md:h-[620px] rounded-full border border-dashed opacity-[0.06]"
                style={{ borderColor: active.accent }}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
                className="w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full border border-dotted opacity-[0.04]"
                style={{ borderColor: active.accent }}
              />
            </div>

            {/* Hero image with mask */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-[320px] h-[420px] md:w-[460px] md:h-[580px] z-10"
              >
                {/* Irregular clip-path image */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    clipPath:
                      'polygon(0% 0%, 100% 0%, 100% 88%, 92% 100%, 0% 100%)',
                  }}
                >
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover"
                  />
                  {/* Color overlay */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: `linear-gradient(135deg, ${active.accent}20 0%, transparent 60%, ${active.accent}10 100%)`,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
                </div>

                {/* Floating number badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="absolute -left-8 top-8 md:-left-14 md:top-12"
                >
                  <span
                    className="text-[100px] md:text-[160px] font-black leading-none select-none"
                    style={{
                      color: 'transparent',
                      WebkitTextStroke: `1.5px ${active.accent}40`,
                    }}
                  >
                    {active.num}
                  </span>
                </motion.div>

                {/* Corner accent */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-20 h-20 md:w-28 md:h-28"
                  animate={{ backgroundColor: active.accent }}
                  transition={{ duration: 0.4 }}
                  style={{
                    clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)',
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: list & content */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center lg:pl-12">
            {CATEGORIES.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => handleSelect(idx)}
                className={cn(
                  'group relative w-full text-left transition-all duration-300',
                  activeIdx === idx ? 'py-10' : 'py-6',
                )}
              >
                <div className="flex items-start gap-5">
                  {/* Number */}
                  <span
                    className={cn(
                      'font-mono text-xs mt-1 transition-colors duration-300 shrink-0',
                      activeIdx === idx ? 'opacity-100' : 'text-neutral-600',
                    )}
                    style={activeIdx === idx ? { color: cat.accent } : {}}
                  >
                    {cat.num}
                  </span>

                  <div className="flex-1 min-w-0">
                    {/* Title row */}
                    <div className="flex items-center gap-4">
                      <h3
                        className={cn(
                          'text-2xl md:text-3xl font-bold tracking-tight transition-all duration-300',
                          activeIdx === idx
                            ? 'text-white'
                            : 'text-neutral-500 group-hover:text-neutral-300',
                        )}
                      >
                        {cat.title}
                      </h3>

                      {/* Animated arrow */}
                      <motion.span
                        animate={
                          activeIdx === idx
                            ? { x: 0, opacity: 1 }
                            : { x: -8, opacity: 0 }
                        }
                        transition={{ duration: 0.3 }}
                        className="text-lg"
                        style={{ color: cat.accent }}
                      >
                        →
                      </motion.span>
                    </div>

                    {/* Expandable description */}
                    <AnimatePresence>
                      {activeIdx === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="text-neutral-400 text-sm md:text-base leading-relaxed mt-4 max-w-lg">
                            {cat.description}
                          </p>

                          {/* Accent dash */}
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 40 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="h-[2px] mt-4 rounded-full"
                            style={{ backgroundColor: cat.accent }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom floating dots – decorative */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {CATEGORIES.map((cat, idx) => (
          <button
            key={cat.id}
            onClick={() => handleSelect(idx)}
            className="p-1"
          >
            <motion.div
              className="rounded-full"
              animate={{
                width: activeIdx === idx ? 28 : 6,
                height: 6,
                backgroundColor: activeIdx === idx ? cat.accent : '#404040',
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

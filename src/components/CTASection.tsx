'use client';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ReelCtaButton } from './ui/ReelCtaButton';
import { LineReveal } from './ui/LineReveal';

function PhoneAnimatedUI() {
  const [phase, setPhase] = useState(0);
  // 0: skeleton build-up, 1: progress, 2: message, 3: CTA pulse
  // Total cycle ~10s

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1800),
      setTimeout(() => setPhase(2), 4000),
      setTimeout(() => setPhase(3), 6500),
      setTimeout(() => setPhase(0), 9500),
    ];
    const loop = setInterval(() => {
      setPhase(0);
      const t1 = setTimeout(() => setPhase(1), 1800);
      const t2 = setTimeout(() => setPhase(2), 4000);
      const t3 = setTimeout(() => setPhase(3), 6500);
      timers.push(t1, t2, t3);
    }, 9500);
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(loop);
    };
  }, []);

  const skeletonBlocks = [
    { w: 'w-10', h: 'h-6', delay: 0 },
    { w: 'flex-1', h: 'h-6', delay: 0.08 },
    { w: 'w-8', h: 'h-6', delay: 0.16 },
    { w: 'w-full', h: 'h-[30%]', delay: 0.3, full: true },
    { w: 'w-[30%]', h: 'h-6', delay: 0.5 },
    { w: 'w-[25%]', h: 'h-6', delay: 0.58 },
    { w: 'w-[20%]', h: 'h-6', delay: 0.66 },
    { w: 'w-[25%]', h: 'h-6', delay: 0.74 },
    { w: 'w-[85%]', h: 'h-3', delay: 0.9 },
    { w: 'w-[70%]', h: 'h-3', delay: 0.98 },
    { w: 'w-[55%]', h: 'h-3', delay: 1.06 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden p-4 sm:p-5 flex flex-col">
      {/* Phase 0-1: Skeleton blocks build up */}
      <AnimatePresence mode="wait">
        {phase <= 1 && (
          <motion.div
            key="skeleton"
            className="flex flex-col h-full"
            exit={{ opacity: 0, y: -10, transition: { duration: 0.4 } }}
          >
            {/* Top bar */}
            <div className="flex gap-2 mb-3 sm:mb-4">
              {skeletonBlocks.slice(0, 3).map((b, i) => (
                <motion.div
                  key={i}
                  className={`${b.w} ${b.h} rounded-md`}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{
                    opacity: 1,
                    scaleX: 1,
                    backgroundColor:
                      phase >= 1 && i === 0
                        ? 'rgba(145,106,255,0.3)'
                        : 'rgba(255,255,255,0.08)',
                  }}
                  transition={{
                    delay: b.delay,
                    duration: 0.4,
                    ease: 'easeOut',
                  }}
                  style={{ originX: 0 }}
                />
              ))}
            </div>

            {/* Hero block */}
            <motion.div
              className="w-full h-[30%] rounded-lg mb-3 sm:mb-4 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                backgroundColor:
                  phase >= 1
                    ? 'rgba(145,106,255,0.12)'
                    : 'rgba(255,255,255,0.06)',
              }}
              transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
            >
              {phase >= 1 && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              )}
            </motion.div>

            {/* Chip row */}
            <div className="flex gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              {skeletonBlocks.slice(4, 8).map((b, i) => (
                <motion.div
                  key={i}
                  className={`${b.w} ${b.h} rounded-md`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    backgroundColor:
                      phase >= 1 && i === 1
                        ? 'rgba(145,106,255,0.25)'
                        : 'rgba(255,255,255,0.06)',
                  }}
                  transition={{
                    delay: b.delay,
                    duration: 0.35,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </div>

            {/* Text lines */}
            <div className="space-y-2 mb-3 sm:mb-4">
              {skeletonBlocks.slice(8).map((b, i) => (
                <motion.div
                  key={i}
                  className={`${b.w} ${b.h} rounded`}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{
                    delay: b.delay,
                    duration: 0.4,
                    ease: 'easeOut',
                  }}
                  style={{
                    originX: 0,
                    backgroundColor: 'rgba(255,255,255,0.06)',
                  }}
                />
              ))}
            </div>

            {/* Progress bar (phase 1) */}
            {phase >= 1 && (
              <motion.div className="mt-auto">
                <div className="flex items-center justify-between mb-2">
                  <motion.span
                    className="text-white/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ fontSize: '10px' }}
                  >
                    Budowanie strony...
                  </motion.span>
                  <motion.span
                    className="text-[#916aff]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ fontSize: '10px' }}
                  >
                    67%
                  </motion.span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#916aff] to-[#b794ff]"
                    initial={{ width: '0%' }}
                    animate={{ width: '67%' }}
                    transition={{ duration: 1.8, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Phase 2: "Site in progress" message */}
        {phase === 2 && (
          <motion.div
            key="message"
            className="flex flex-col items-center justify-center h-full text-center px-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5 }}
          >
            {/* Animated circles */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-5 sm:mb-6">
              <motion.div
                className="absolute inset-0 rounded-full border border-[#916aff]/30"
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute inset-1.5 sm:inset-2 rounded-full border border-[#916aff]/50"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.2, 0.7] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.3,
                }}
              />
              <motion.div
                className="absolute inset-3 sm:inset-4 rounded-full bg-[#916aff]/20 flex items-center justify-center"
                animate={{ scale: [0.9, 1.05, 0.9] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <motion.div
                  className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#916aff]"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </div>

            <motion.p
              className="text-white/90 mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ fontSize: '14px', fontWeight: 500 }}
            >
              Twoja strona jest
            </motion.p>
            <motion.p
              className="text-[#916aff] mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{ fontSize: '18px', fontWeight: 600 }}
            >
              w budowie
            </motion.p>

            {/* Animated dots */}
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#916aff]"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Phase 3: CTA inside phone */}
        {phase === 3 && (
          <motion.div
            key="cta"
            className="flex flex-col items-center justify-center h-full text-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5 }}
          >
            {/* Checkmark */}
            <motion.div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#916aff]/15 flex items-center justify-center mb-5"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
            >
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#916aff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.path
                  d="M20 6L9 17L4 12"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
                />
              </motion.svg>
            </motion.div>

            <motion.p
              className="text-white/80 mb-1"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              style={{ fontSize: '12px' }}
            >
              Wystarczy jeden krok
            </motion.p>
            <motion.p
              className="text-white/90 mb-5"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.4 }}
              style={{ fontSize: '15px', fontWeight: 500 }}
            >
              Skontaktuj się z nami
            </motion.p>

            {/* Animated CTA button */}
            <motion.div
              className="px-5 py-2.5 rounded-full bg-[#916aff] text-white flex items-center gap-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              style={{ fontSize: '12px', fontWeight: 500 }}
            >
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                →
              </motion.span>
              <span>Rozpocznij projekt</span>
            </motion.div>

            {/* Subtle floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-[#916aff]/30"
                style={{
                  left: `${15 + i * 14}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.35,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative">
      {/* Purple glow behind phone */}
      <div className="absolute left-1/2 bottom-[-40px] -translate-x-1/2 w-[350px] h-[200px] md:w-[500px] md:h-[300px] pointer-events-none">
        <div className="size-full rounded-full bg-[#916AFF]/30 blur-[100px]" />
      </div>

      {/* Crosshair lines — offset from phone, moderate extension */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{ top: '-30px', bottom: '-30px', left: '-30px', right: '-30px' }}
      >
        {/* Horizontal line at top */}
        <div
          className="absolute top-0 h-px bg-[#333]"
          style={{ left: '-60px', right: '-60px' }}
        />
        {/* Horizontal line at bottom */}
        <div
          className="absolute bottom-0 h-px bg-[#333]"
          style={{ left: '-60px', right: '-60px' }}
        />
        {/* Vertical line at left */}
        <div
          className="absolute left-0 w-px bg-[#333]"
          style={{ top: '-60px', bottom: '-60px' }}
        />
        {/* Vertical line at right */}
        <div
          className="absolute right-0 w-px bg-[#333]"
          style={{ top: '-60px', bottom: '-60px' }}
        />
      </div>

      {/* Phone body */}
      <div className="relative z-10 w-[260px] sm:w-[320px] md:w-[380px] lg:w-[440px] h-[390px] sm:h-[460px] md:h-[530px] lg:h-[600px] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] lg:rounded-[36px] p-[3px] backdrop-blur-xl backdrop-saturate-150 bg-white/15 shadow-2xl">
        <div className="relative w-full h-full rounded-[21px] sm:rounded-[25px] md:rounded-[29px] lg:rounded-[33px] bg-[#1e1e1e]/95 backdrop-saturate-150 overflow-hidden">
          <PhoneAnimatedUI />
        </div>
      </div>
    </div>
  );
}

export function CTASection() {
  return (
    <section
      className="relative w-full bg-[rgba(255,255,255,0.01)] mt-32"
      style={{ clipPath: 'inset(-200px 0 0 0)' }}
    >
      <div className="relative container mx-auto px-4 py-10 md:py-14 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Column: Text */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-5xl md:text-8xl text-white tracking-tighter leading-tight">
              Gotowy na zmianę?
            </h2>

            <div className="mt-8">
              <LineReveal
                lines={[
                  "Skontaktuj się z nami i porozmawiajmy",
                  "o Twoim projekcie. Wycena",
                  "i konsultacja są bezpłatne.",
                ]}
                className="text-neutral-400 max-w-xs md:max-w-sm text-xs md:text-sm uppercase tracking-wide leading-relaxed"
              />
            </div>

            <div className="mt-8 md:mt-10">
              <ReelCtaButton
                text="Zacznijmy współpracę"
                href="/kontakt"
                size="large"
              />
            </div>
          </div>

          {/* Right Column: Phone Mockup — sticks out above, clipped at bottom */}
          <div className="relative flex-shrink-0 flex justify-center lg:justify-end lg:-mt-32 lg:mb-[-180px]">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

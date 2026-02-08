import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';
import { SplitRevealTitle } from './ui/SplitRevealTitle';
import { SecurityBentoCard } from './SecurityBentoCard';
import { LineReveal } from './ui/LineReveal';
import AnimatedArc from './AnimatedArc';
import FluidButton from './ui/FluidButton';
import { ChaosLanding } from './ChaosLanding';
import jacekImg from '@/assets/team/jacek.png';
import damianImg from '@/assets/team/damian.png';
import oliwiaImg from '@/assets/team/oliwia.png';
import lukaszImg from '@/assets/team/lukasz.png';
import annaImg from '@/assets/team/anna.png';

// --- Components ---

const BentoCard = ({
  children,
  className = '',
  hoverEffect = true,
}: {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) => {
    if (!hoverEffect) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative z-0 overflow-hidden border border-white/5 rounded-3xl bg-[#232323] text-white font-sans shadow-sm hover:shadow-2xl hover:border-white/10 transition-[border-color,box-shadow] duration-300 ${className}`}
    >
      <div
        className="absolute inset-0 bg-white/5 -z-10"
        style={{
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      />
      <div className="pointer-events-none absolute z-[1] top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-linear-to-r from-transparent via-white/55 to-transparent opacity-80 transition-all duration-500 group-hover:w-64 group-hover:opacity-100" />
      <div className="pointer-events-none absolute z-[1] -top-5 left-1/2 -translate-x-1/2 w-36 h-12 bg-[#916AFF]/25 blur-2xl opacity-70 transition-all duration-500 group-hover:w-56 group-hover:h-16 group-hover:opacity-95" />
      {/* Hover Spotlight Effect */}
      {hoverEffect && (
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(145, 106, 255, 0.1),
                transparent 80%
              )
            `,
          }}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={containerRef}
      id="about"
      className=" py-32 relative text-white"
      style={{ position: 'relative' }}
    >
      {/* Background Ambience moved to MainContent wrapper */}

      {/* Background Ambience moved to MainContent wrapper */}

      {/* Scroll-Driven Decorative Arc (SVG) with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 120]) }}
      >
        <AnimatedArc scrollYProgress={scrollYProgress} />
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header - Lusion Style */}
        <div className="relative mb-32 pt-20">
          {/* Top Left Label */}

          {/* Top Right Menu/Button Placeholder (Optional, to match reference 'Let's Talk') */}
          <div className="absolute top-0 right-0 hidden md:flex gap-4">
            {/* Can be added later if needed */}
          </div>

          {/* Huge Title */}
          {/* Main Copy - Aligned with Projects Section Design */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6 pointer-events-auto">
            <SplitRevealTitle
              line1="Nie jesteśmy"
              line2="kolejną agencją"
              className="text-5xl md:text-8xl text-white tracking-tighter"
            />
            <div className="flex flex-col gap-4 max-w-xs md:max-w-sm">
              <LineReveal
                lines={['Dlaczego warto skorzystać z naszego wsparcia?']}
                className="text-white font-normal text-sm md:text-base mb-2"
              />
              <LineReveal
                lines={[
                  'Nie projektujemy dla samego efektu.',
                  'Nasze realizacje mają sens biznesowy.',
                  'Za estetyką stoi struktura, UX oraz SEO.',
                ]}
                className="text-neutral-400 text-xs md:text-sm uppercase tracking-wide leading-relaxed"
                delay={0.2}
              />
            </div>
          </div>
        </div>

        {/* Bento Grid Layout - Adjusted for Dark Mode & Removed Image Card */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)] mx-auto">
          {/* 1. Main Story Card - Spans 8 cols (CHAOS -> ORDER - DO NOT TOUCH) */}
          <ChaosLanding className="md:col-span-6 lg:col-span-8 bg-[#232323] text-white font-sans" />

          {/* 2. Stat Card: Experience - Spans 4 cols */}
          <div className="md:col-span-6 lg:col-span-4 relative z-0 group/image-card min-h-[400px] w-full h-full rounded-[32px] border border-white/5 bg-[#232323] text-white font-sans overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/10 group">
            <div
              className="absolute inset-0 bg-white/5 -z-10"
              style={{
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
            />
            <div className="pointer-events-none absolute z-[1] top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-linear-to-r from-transparent via-white/55 to-transparent opacity-80 transition-all duration-500 group-hover:w-64 group-hover:opacity-100" />
            <div className="pointer-events-none absolute z-[1] -top-5 left-1/2 -translate-x-1/2 w-36 h-12 bg-[#916AFF]/25 blur-2xl opacity-70 transition-all duration-500 group-hover:w-56 group-hover:h-16 group-hover:opacity-95" />
            {/* Background Effects */}
            <div className="absolute inset-0 bg-linear-to-b from-white/[0.06] to-transparent opacity-30 pointer-events-none" />
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)',
                backgroundSize: '22px 22px',
              }}
            />

            {/* Floating Image */}
            <div className="absolute bottom-0 right-[-32px] w-[300px] h-[126%] z-10 pointer-events-none hidden md:block">
              <img
                src="/images/img-onas-jacek.png"
                alt="Jacek"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
              />
            </div>

            {/* Card Content */}
            <div className="relative z-20 h-full flex flex-col justify-between p-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 mb-6">
                  <div className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full animate-pulse" />
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-normal">
                    Doświadczenie
                  </span>
                </div>
                <h2 className="text-7xl lg:text-8xl font-semibold text-transparent bg-clip-text bg-linear-to-br from-white via-white to-white/60 tracking-tighter leading-none">
                  16<span className="text-4xl align-top text-[#8B5CF6]">+</span>
                </h2>
                <p className="text-xs text-neutral-300/80 font-normal uppercase tracking-[0.16em] mt-2">
                  lat w branży digital
                </p>
              </div>
              <div className="relative z-20 mt-auto max-w-[62%]">
                <h3 className="text-3xl text-white font-normal mb-2">
                  doświadczenie, które skraca drogę
                </h3>
                <p className="text-neutral-400 text-sm font-normal leading-relaxed">
                  Mamy wiele lat doświadczenia w projektowaniu profesjonalnych
                  stron i sklepów, dzięki czemu sprawnie przechodzimy od pomysłu
                  do gotowego rozwiązania.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Feature Card: Security (Bezpieczeństwo współpracy) */}
          <SecurityBentoCard className="bg-[#232323] text-white font-sans" />

          {/* 4. Feature Card: Experts (was Team) */}
          <BentoCard
            className="md:col-span-3 lg:col-span-4 p-0 border border-[#333] overflow-hidden group/team md:col-start-1 rounded-[32px] bg-[#232323]"
            hoverEffect={false}
          >
            {/* Background Mesh Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,_var(--tw-gradient-stops))] from-[#916AFF]/10 via-transparent to-transparent opacity-50" />

            <div className="relative p-8 flex flex-col h-full justify-between z-10">
              {/* Expert Pill Container */}
              <div className="relative mt-8 w-[130%] translate-x-[20%] sm:translate-x-[15%] h-[80px] sm:h-[100px] md:h-[120px] bg-[#262626] rounded-full border-[5px] border-white/5 flex items-center shadow-[0px_0px_48px_10px_rgba(0,0,0,0.2),0px_4px_16px_8px_rgba(0,0,0,0.1)]">
                <div className="flex -space-x-4 sm:-space-x-6 w-full justify-start pl-4 md:pl-6">
                  {[jacekImg, lukaszImg, oliwiaImg, annaImg].map((img, i) => (
                    <div
                      key={i}
                      className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 border-[#262626] overflow-hidden shrink-0 transition-transform duration-300 hover:scale-110 hover:z-10"
                      style={{ zIndex: 5 - i }}
                    >
                      <img
                        src={img.src}
                        alt="Team Member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 border-[#262626] bg-[#2d2d2d] flex items-center justify-center shrink-0 z-0 text-white font-medium text-xs sm:text-base">
                    +5
                  </div>
                </div>
              </div>

              {/* Typography */}
              <div className="mt-8">
                <h4 className="text-3xl font-normal text-white mb-2 flex items-center gap-2 group-hover/team:text-[#916AFF] transition-colors duration-300">
                  Wsparcie ekspertów
                </h4>
                <div className="h-0.5 w-8 bg-neutral-700 rounded-full mb-3 group-hover/team:w-full group-hover/team:bg-[#916AFF]/50 transition-all duration-700 ease-in-out" />
                <p className="text-neutral-400 text-sm font-normal leading-relaxed">
                  Otrzymujesz dostęp do zespołu, który łączy kompetencje
                  projektowe, techniczne i marketingowe, więc dostęp do
                  kompleksowej wiedzy masz w jednym miejscu.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* 5. Stat Card: 700+ Projects */}
          <BentoCard className="md:col-span-6 lg:col-span-4 border border-[#333] overflow-hidden group/projects rounded-[32px]">
            {/* Rounded square grid with elliptical mask */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute inset-0 p-3 flex items-center justify-center"
                style={{
                  maskImage:
                    'radial-gradient(ellipse 65% 50% at 65% 55%, black 20%, transparent 70%)',
                  WebkitMaskImage:
                    'radial-gradient(ellipse 65% 50% at 65% 55%, black 20%, transparent 70%)',
                }}
              >
                <div className="grid grid-cols-8 grid-rows-6 gap-1 w-full aspect-[4/3] max-h-full">
                  {Array.from({ length: 48 }).map((_, i) => {
                    const col = i % 8;
                    const row = Math.floor(i / 8);
                    const centerCol = 5;
                    const centerRow = 3;
                    const dist = Math.sqrt(
                      (col - centerCol) ** 2 + (row - centerRow) ** 2,
                    );
                    const maxDist = Math.sqrt(centerCol ** 2 + centerRow ** 2);
                    const proximity = 1 - dist / maxDist;
                    const borderOpacity = Math.max(0.006, proximity * 0.045);

                    const accentCells = [19, 20, 21, 27, 28, 29, 35, 36];
                    const isAccent = accentCells.includes(i);

                    return (
                      <motion.div
                        key={i}
                        className={`rounded-lg w-full h-full ${
                          isAccent
                            ? 'border-[#916AFF]/20 bg-[#916AFF]/[0.06]'
                            : ''
                        }`}
                        style={{
                          border: `1px solid rgba(${isAccent ? '145,106,255' : '255,255,255'}, ${isAccent ? 0.2 : borderOpacity})`,
                        }}
                        initial={
                          isAccent
                            ? { opacity: 0.55, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                        }
                        {...(isAccent
                          ? {
                              animate: { opacity: [0.55, 0.95] },
                              transition: {
                                duration: 1.6,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                ease: 'easeInOut',
                                delay: i * 0.12,
                              },
                            }
                          : {
                              whileInView: { opacity: 1, scale: 1 },
                              viewport: { once: true },
                              transition: {
                                duration: 0.4,
                                delay: i * 0.012,
                                ease: 'easeOut',
                              },
                            })}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative z-10 h-full flex flex-col p-8">
              <div className="mb-6">
                <h2 className="text-7xl lg:text-8xl font-semibold text-transparent bg-clip-text bg-linear-to-br from-white via-white to-white/60 tracking-tighter leading-none">
                  700
                  <span className="text-[#916AFF] text-5xl align-top ml-1">
                    +
                  </span>
                </h2>
                <p className="text-xs text-neutral-300/80 font-normal uppercase tracking-[0.16em] mt-2">
                  wdrożonych projektów
                </p>
              </div>

              <div className="mt-auto">
                <h3 className="text-3xl font-normal text-white mb-2">
                  projektów, które dowożą wyniki
                </h3>
                <p className="text-neutral-400 text-sm font-normal leading-relaxed max-w-[95%]">
                  Projektujemy i wdrażamy strony oraz sklepy, które łączą
                  estetykę z konwersją i realnym wynikiem biznesowym.
                </p>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>

      {/* Sticky Fluid Button - outside container for proper sticky behavior */}
      <FluidButton label="Poznaj nas bliżej" href="/o-firmie" />
    </section>
  );
};

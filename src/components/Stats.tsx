'use client';

import React, { useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  Users,
  MessageSquareHeart,
  PenTool,
  Globe,
  MousePointer2,
  Layout,
  Type,
  Box,
  Hash,
} from 'lucide-react';
import { gsap } from 'gsap';
import { CustomStar } from '@/components/ui/CustomStar';

type CardWrapperProps = {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  colSpan?: string;
};

const CardWrapper = ({
  children,
  className = '',
  hoverEffect = true,
  colSpan = 'col-span-1',
}: CardWrapperProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    gsap.set(el, { autoAlpha: 0, y: 22 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          gsap.to(el, {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          });
          observer.disconnect();
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative group overflow-hidden rounded-3xl bg-neutral-900/50 backdrop-blur-md border border-white/10 shadow-xl shadow-black/20 ${colSpan} ${className}`}
    >
      {hoverEffect && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      <div className="relative h-full w-full z-10">{children}</div>
    </div>
  );
};

const SalesCard = () => {
  const particlesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = particlesRef.current;
    if (!root) return;

    const particles = gsap.utils.toArray<HTMLElement>('.sales-particle', root);
    const tweens = particles.map((particle, index) =>
      gsap.fromTo(
        particle,
        { y: 0, opacity: 0, scale: 0.2 },
        {
          y: -250,
          opacity: 0,
          scale: 1.2,
          duration: 3 + (index % 3),
          delay: index * 0.2,
          repeat: -1,
          ease: 'power1.out',
        },
      ),
    );

    return () => tweens.forEach((tween) => tween.kill());
  }, []);

  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-[400px]">
      <div className="absolute inset-0 w-full h-full opacity-40 pointer-events-none mix-blend-multiply">
        <div className="absolute top-[-20%] left-[-20%] h-[80%] w-[80%] rounded-full bg-purple-200 blur-[80px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[70%] w-[70%] rounded-full bg-indigo-200 blur-[80px] animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-start">
        <div className="flex items-baseline gap-2">
          <h2 className="text-8xl md:text-9xl font-bold leading-none text-white tracking-tighter">16</h2>
          <span className="text-2xl md:text-3xl font-medium text-neutral-400">lat</span>
        </div>
        <p className="text-xl md:text-2xl mt-4 font-medium leading-tight text-neutral-300 max-w-sm">
          Rozwijamy sprzedaż naszych klientów.
        </p>
      </div>

      <div
        ref={particlesRef}
        className="absolute inset-x-0 bottom-0 h-[50%] z-0 flex items-end justify-center overflow-hidden opacity-60 pointer-events-none"
      >
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="sales-particle absolute bottom-0 h-1.5 w-1.5 rounded-full bg-purple-600 blur-[1px]"
            style={{ left: `${10 + ((index * 12) % 80)}%` }}
          />
        ))}
        <svg viewBox="0 0 800 400" className="h-full w-full translate-y-2" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 350 C 150 350, 200 200, 350 250 S 550 100, 650 120 S 750 0, 800 50 V 400 H 0 Z"
            fill="url(#chartGrad)"
          />
          <path
            d="M0 350 C 150 350, 200 200, 350 250 S 550 100, 650 120 S 750 0, 800 50"
            fill="none"
            stroke="#9333ea"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

const ProjectsCard = () => {
  const GRID_COLS = 12;
  const GRID_ROWS = 8;

  return (
    <div className="p-8 h-full flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              'radial-gradient(ellipse 60% 45% at 70% 60%, black 30%, transparent 70%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 60% 45% at 70% 60%, black 30%, transparent 70%)',
          }}
        >
          {Array.from({ length: GRID_COLS + 1 }).map((_, index) => (
            <div
              key={`v-${index}`}
              className="absolute top-0 bottom-0 w-px bg-white/[0.07]"
              style={{ left: `${(index / GRID_COLS) * 100}%` }}
            />
          ))}

          {Array.from({ length: GRID_ROWS + 1 }).map((_, index) => (
            <div
              key={`h-${index}`}
              className="absolute left-0 right-0 h-px bg-white/[0.07]"
              style={{ top: `${(index / GRID_ROWS) * 100}%` }}
            />
          ))}

          {[
            { col: 7, row: 3 },
            { col: 8, row: 4 },
            { col: 9, row: 3 },
            { col: 8, row: 5 },
            { col: 7, row: 4 },
            { col: 9, row: 5 },
            { col: 10, row: 4 },
          ].map(({ col, row }, index) => (
            <div
              key={`cell-${index}`}
              className="absolute bg-[#916AFF]/20 animate-pulse"
              style={{
                left: `${(col / GRID_COLS) * 100}%`,
                top: `${(row / GRID_ROWS) * 100}%`,
                width: `${100 / GRID_COLS}%`,
                height: `${100 / GRID_ROWS}%`,
                animationDelay: `${index * 120}ms`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex items-baseline gap-1">
          <h3 className="text-5xl font-bold text-white">700</h3>
          <span className="text-3xl font-bold text-[#916AFF]">+</span>
        </div>
        <p className="text-neutral-400 font-medium mt-2">Zrealizowanych projektów</p>
      </div>

      <button className="mt-auto relative z-10 flex items-center gap-2 text-sm font-semibold text-[#916AFF] group-hover:text-white transition-colors">
        Zobacz realizacje <ArrowUpRight size={16} />
      </button>
    </div>
  );
};

const DesignCard = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const selectionRef = useRef<HTMLDivElement | null>(null);
  const componentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cursorRef.current || !selectionRef.current || !componentRef.current) return;

    const timeline = gsap.timeline({ repeat: -1, defaults: { ease: 'power1.inOut' } });

    timeline
      .set(selectionRef.current, { autoAlpha: 0 })
      .to(cursorRef.current, { x: 92, y: 80, duration: 1.3 })
      .to(selectionRef.current, { autoAlpha: 1, duration: 0.2 }, '<0.1')
      .to(
        componentRef.current,
        {
          backgroundColor: '#7e22ce',
          borderRadius: '24px',
          duration: 1.2,
        },
        '<',
      )
      .to(cursorRef.current, { x: 20, y: 30, duration: 1.1 })
      .to(selectionRef.current, { autoAlpha: 0, duration: 0.2 }, '<0.2')
      .to(
        componentRef.current,
        {
          backgroundColor: '#9333ea',
          borderRadius: '4px',
          duration: 1,
        },
        '<',
      );

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="h-full flex flex-col relative overflow-hidden bg-[#1e1e1e] text-white font-sans select-none">
      <div className="h-10 border-b border-white/10 flex items-center px-4 gap-4 bg-[#2c2c2c] flex-shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="h-4 w-[1px] bg-white/10 mx-1" />
        <div className="flex gap-3 text-white/50">
          <MousePointer2 size={14} className="text-blue-500 fill-blue-500" />
          <Layout size={14} className="hover:text-white transition-colors" />
          <Box size={14} className="hover:text-white transition-colors" />
          <PenTool size={14} className="hover:text-white transition-colors" />
          <Type size={14} className="hover:text-white transition-colors" />
        </div>
        <div className="ml-auto text-[10px] font-medium text-white/40">100%</div>
      </div>

      <div className="flex-1 relative bg-[#1e1e1e] p-4 flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />

        <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-white/5 bg-[#2c2c2c]/50 hidden md:flex flex-col items-center py-4 gap-4">
          <div className="w-6 h-6 rounded bg-white/10" />
          <div className="w-6 h-6 rounded bg-white/5" />
          <div className="w-6 h-6 rounded bg-white/5" />
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-16 border-l border-white/5 bg-[#2c2c2c]/50 hidden md:flex flex-col p-3 gap-3">
          <div className="w-full h-2 rounded bg-white/10" />
          <div className="w-2/3 h-2 rounded bg-white/5" />
          <div className="w-full h-20 rounded bg-white/5 mt-2" />
        </div>

        <div className="relative group z-10">
          <div ref={selectionRef} className="absolute -inset-1 border border-blue-500 pointer-events-none opacity-0">
            <div className="absolute -top-1 -left-1 h-1.5 w-1.5 bg-white border border-blue-500" />
            <div className="absolute -top-1 -right-1 h-1.5 w-1.5 bg-white border border-blue-500" />
            <div className="absolute -bottom-1 -left-1 h-1.5 w-1.5 bg-white border border-blue-500" />
            <div className="absolute -bottom-1 -right-1 h-1.5 w-1.5 bg-white border border-blue-500" />
          </div>

          <div
            ref={componentRef}
            className="bg-purple-600 px-5 py-2.5 shadow-2xl flex items-center gap-2 text-xs font-medium tracking-wide"
          >
            <span className="text-white">Button UI</span>
            <Hash size={12} className="text-white/60" />
          </div>
        </div>

        <div ref={cursorRef} className="absolute z-50">
          <MousePointer2 className="h-5 w-5 fill-black text-black stroke-white drop-shadow-md" />
          <div className="ml-3 mt-0 rounded-r-md rounded-bl-md bg-[#E04F47] px-1.5 py-0.5 text-[9px] font-bold text-white shadow-sm">
            Designer
          </div>
        </div>
      </div>

      <div className="px-4 py-3 border-t border-white/10 bg-[#2c2c2c] flex justify-between items-center">
        <div>
          <h3 className="text-sm font-bold text-white">Design System</h3>
          <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/50">Komponenty & Style</p>
        </div>
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.5)]" />
          <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)]" />
        </div>
      </div>
    </div>
  );
};

const TeamStatsCard = () => {
  return (
    <div className="h-full flex flex-col md:flex-row relative divide-y md:divide-y-0 md:divide-x divide-white/10">
      <div className="flex-1 p-8 flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute top-0 right-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-blue-100 opacity-40 blur-[60px] transition-opacity duration-500 group-hover:opacity-60" />

        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-blue-500/10 p-2 text-blue-400">
              <Users size={20} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Eksperci</span>
          </div>

          <div className="mb-2 flex items-baseline gap-2">
            <h3 className="text-6xl font-bold tracking-tight text-white">9</h3>
            <span className="text-xl font-medium text-neutral-500">lat</span>
          </div>
          <p className="max-w-[240px] text-sm font-medium leading-relaxed text-neutral-400">
            Średnie doświadczenie specjalisty w naszym zespole.
          </p>
        </div>

        <div className="relative z-10 mt-6 flex items-center -space-x-3">
          {[
            { bg: 'bg-blue-200', text: 'JD' },
            { bg: 'bg-purple-200', text: 'AK' },
            { bg: 'bg-emerald-200', text: 'MS' },
            { bg: 'bg-orange-200', text: 'PL' },
          ].map((user) => (
            <div
              key={user.text}
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-neutral-800 text-xs font-bold text-slate-600 transition-transform duration-300 hover:-translate-y-1 hover:scale-105 ${user.bg}`}
            >
              {user.text}
            </div>
          ))}
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-neutral-800 bg-neutral-700 text-xs font-bold text-neutral-400">
            +12
          </div>
        </div>
      </div>

      <div className="flex-1 p-8 flex flex-col justify-between relative overflow-hidden group bg-white/5">
        <div className="absolute bottom-0 left-0 h-40 w-40 -translate-x-10 translate-y-10 rounded-full bg-purple-100 opacity-40 blur-[60px] transition-opacity duration-500 group-hover:opacity-60" />

        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-purple-500/10 p-2 text-purple-400">
              <MessageSquareHeart size={20} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Reputacja</span>
          </div>

          <div className="mb-2 flex items-baseline gap-2">
            <h3 className="text-6xl font-bold tracking-tight text-white">140</h3>
            <span className="text-3xl font-bold text-[#916AFF]">+</span>
          </div>
          <p className="text-sm font-medium leading-relaxed text-neutral-400">
            Firm zaufało nam i wystawiło pozytywną opinię.
          </p>
        </div>

        <div className="relative z-10 mt-6 flex max-w-fit items-center gap-4 rounded-xl border border-white/10 bg-neutral-800 p-3 shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase text-neutral-400">Średnia ocen</span>
            <span className="text-lg font-bold text-white">4.9/5.0</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10" />
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="animate-pulse" style={{ animationDelay: `${index * 120}ms` }}>
                <CustomStar size={18} fill="#916AFF" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Stats: React.FC = () => {
  return (
    <div className="bg-transparent py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="mx-auto grid max-w-screen-2xl auto-rows-[minmax(180px,auto)] grid-cols-1 gap-6 md:grid-cols-3">
        <CardWrapper colSpan="md:col-span-2 row-span-2">
          <SalesCard />
        </CardWrapper>

        <CardWrapper colSpan="md:col-span-1 row-span-2">
          <DesignCard />
        </CardWrapper>

        <CardWrapper colSpan="md:col-span-1 row-span-1">
          <ProjectsCard />
        </CardWrapper>

        <CardWrapper colSpan="md:col-span-2 row-span-1">
          <TeamStatsCard />
        </CardWrapper>

        <CardWrapper colSpan="md:col-span-3" hoverEffect={false}>
          <div className="rounded-3xl bg-neutral-800/80 p-8 text-white backdrop-blur-md border border-white/10 shadow-xl flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 flex items-center gap-4 md:mb-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Globe className="text-purple-300" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Dołącz do zadowolonych klientów</h4>
                <p className="text-sm text-slate-400">Rozpocznijmy współpracę jeszcze dzisiaj.</p>
              </div>
            </div>
            <button className="rounded-full bg-white px-8 py-3 font-bold text-slate-900 transition-colors hover:bg-purple-50">
              Skontaktuj się z nami
            </button>
          </div>
        </CardWrapper>
      </div>
    </div>
  );
};

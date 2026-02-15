"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Layers,
  Palette,
  ShoppingBag,
  TrendingUp,
  Search,
  BarChart3,
  CreditCard,
  Package,
  ChevronRight,
  Check,
} from "lucide-react";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";
import { LineReveal } from "@/components/ui/LineReveal";

/* -------------------------------------------------------------------------- */
/*                                WEB DESIGN CARD                             */
/* -------------------------------------------------------------------------- */
const WebDesignCard = () => {
  return (
    <a
      href="/oferta/strony-www"
      className="group relative h-[500px] rounded-[40px] overflow-hidden bg-[#1e1e1e] hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-700 block cursor-pointer border border-white/5"
    >
      {/* --- VISUAL BACKDROP --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Background Subtle Grid */}
        <div
          className="absolute inset-0 z-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Browser Window Composition */}
        <div className="absolute -bottom-10 -right-5 w-[60%] bg-[#2a2a2a] rounded-xl shadow-2xl border border-white/10 block z-10">
          {/* Browser Chrome */}
          <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-[#333] rounded-tl-xl">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>

          {/* Internal Content Skeleton */}
          <div className="p-8 relative h-full">
            <div className="flex flex-col gap-5">
              {/* Mini Navbar */}
              <div className="flex items-center justify-between w-full">
                <div className="w-16 h-4 bg-[#916AFF] rounded mx-0" />
                <div className="flex gap-2">
                  <div className="w-12 h-4 bg-white/10 rounded-full" />
                  <div className="w-12 h-4 bg-white/10 rounded-full" />
                </div>
              </div>

              {/* Mini Hero Content */}
              <div className="mt-4 space-y-3">
                <div className="space-y-1.5">
                  <div className="w-[75%] h-6 bg-[#916AFF] rounded" />
                  <div className="w-[55%] h-6 bg-[#916AFF] rounded" />
                </div>
                <div className="space-y-1 pt-1">
                  <div className="w-[80%] h-2.5 bg-white/20 rounded-full" />
                  <div className="w-[70%] h-2.5 bg-white/20 rounded-full" />
                </div>
                <div className="flex gap-2.5 pt-3">
                  <div className="w-20 h-7 bg-[#916AFF] rounded shadow-md shadow-purple-500/20" />
                  <div className="w-20 h-7 bg-transparent border border-white/20 rounded" />
                </div>
              </div>
            </div>

            {/* Additional content grid */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="aspect-video bg-white/5 rounded border border-white/5"></div>
              <div className="aspect-video bg-white/5 rounded border border-white/5"></div>
              <div className="aspect-video bg-white/5 rounded border border-white/5"></div>
            </div>

            {/* Floating Element: Toast */}
            <div className="absolute top-12 right-[5%] bg-[#2a2a2a] rounded-xl shadow-2xl border border-white/10 p-2 pr-4 flex items-center gap-3 z-20 -rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow:
                    "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)",
                }}
              >
                <Layers
                  size={16}
                  strokeWidth={2}
                  className="text-white drop-shadow-sm"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">
                  Responsywność
                </span>
              </div>
            </div>

            {/* Floating Element: Palette */}
            <div
              className="absolute bottom-[40%] -left-4 transform rotate-6 w-12 h-12 rounded-xl flex items-center justify-center z-30 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)",
              }}
            >
              <Palette
                size={22}
                strokeWidth={2}
                className="text-white drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT OVERLAY --- */}
      <div className="absolute inset-0 bg-linear-to-r from-[#1e1e1e] via-[#1e1e1e]/80 to-transparent opacity-90" />

      {/* Text Content */}
      <div className="absolute left-0 top-0 bottom-0 w-[50%] p-8 md:p-12 flex flex-col justify-end z-20">
        <div className="relative z-10 mt-auto">
          <div className="pb-6 mb-6">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
              Web Design
            </h3>
            <p className="text-neutral-500 font-bold tracking-widest uppercase text-xs">
              Strony WWW & Landing Pages
            </p>
          </div>

          <div className="flex justify-between items-start">
            <p className="text-neutral-400 text-lg font-medium leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500">
              Tworzymy serwisy, które hipnotyzują designem i konwertują lepiej
              niż Twój najlepszy handlowiec.
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

/* -------------------------------------------------------------------------- */
/*                                E-COMMERCE CARD                             */
/* -------------------------------------------------------------------------- */
const EcommerceCard = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { icon: Package, label: "Produkt" },
    { icon: ShoppingBag, label: "Koszyk" },
    { icon: CreditCard, label: "Płatność" },
  ];

  return (
    <a
      href="/oferta/sklepy-internetowe"
      className="group relative h-[500px] rounded-[40px] overflow-hidden bg-[#1e1e1e] hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-700 flex flex-col justify-between border border-white/5"
    >
      {/* 1. TOP: Text Content */}
      <div className="relative z-20 p-8 md:p-10 flex flex-col items-start w-full">
        <div className="absolute top-8 right-8 md:top-10 md:right-10 w-10 h-10 rounded-full border border-white/10 text-neutral-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/5">
          <ArrowUpRight size={20} />
        </div>

        <div className="space-y-2 mb-4">
          <h3 className="text-3xl font-bold tracking-tight text-white leading-tight">
            E-Commerce
          </h3>
          <p className="text-neutral-500 font-bold tracking-widest uppercase text-[10px]">
            Sklepy Online
          </p>
        </div>

        <p className="text-neutral-400 text-base font-medium leading-relaxed max-w-[90%] opacity-80">
          Skalowalne platformy sprzedażowe pod maksymalną wartość koszyka.
        </p>
      </div>

      {/* 2. BOTTOM: Visual Container - Checkout Flow */}
      <div className="relative w-full flex-1 overflow-hidden rounded-b-[40px] flex items-center justify-center p-6 pb-8">
        <div className="w-full max-w-[280px] relative">
          {/* Checkout Flow Steps */}
          <div className="flex items-center justify-between gap-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;

              return (
                <React.Fragment key={index}>
                  {/* Step Circle */}
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "scale-110 shadow-xl"
                          : isCompleted
                            ? "scale-100"
                            : "scale-90 opacity-40"
                      }`}
                      style={{
                        background:
                          isActive || isCompleted
                            ? "linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)"
                            : "#e2e8f0",
                        border:
                          isActive || isCompleted
                            ? "1px solid rgba(255,255,255,0.15)"
                            : "1px solid #cbd5e1",
                        boxShadow: isActive
                          ? "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
                          : "none",
                      }}
                    >
                      {isCompleted ? (
                        <Check
                          size={20}
                          className="text-white"
                          strokeWidth={3}
                        />
                      ) : (
                        <Icon
                          size={20}
                          className={isActive ? "text-white" : "text-slate-400"}
                          strokeWidth={2}
                        />
                      )}
                    </div>
                    <span
                      className={`text-[10px] font-bold tracking-wide transition-all duration-300 ${
                        isActive ? "text-slate-900" : "text-slate-400"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>

                  {/* Connector Arrow */}
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 flex items-center justify-center -mt-6 transition-opacity duration-300 ${
                        index < activeStep ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      <ChevronRight size={16} className="text-slate-300" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-slate-900 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((activeStep + 1) / 3) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </a>
  );
};

/* -------------------------------------------------------------------------- */
/*                                  SEO CARD                                  */
/* -------------------------------------------------------------------------- */
const SeoCard = () => {
  const [typedText, setTypedText] = React.useState("");
  const [showResults, setShowResults] = React.useState(false);
  const [cycle, setCycle] = React.useState(0);
  const searchPhrase = "agencja marketingowa";

  React.useEffect(() => {
    let charIndex = 0;
    setTypedText("");
    setShowResults(false);

    const typeInterval = setInterval(() => {
      if (charIndex < searchPhrase.length) {
        setTypedText(searchPhrase.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setShowResults(true), 400);
        setTimeout(() => {
          setCycle((c) => c + 1);
        }, 4000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [cycle]);

  return (
    <a
      href="/oferta/marketing"
      className="group relative h-[500px] rounded-[40px] overflow-hidden bg-[#1e1e1e] hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-700 flex flex-col justify-between border border-white/5"
    >
      {/* 1. TOP: Text Content */}
      <div className="relative z-20 p-8 md:p-10 flex flex-col items-start w-full">
        <div className="absolute top-8 right-8 md:top-10 md:right-10 w-10 h-10 rounded-full border border-white/10 text-neutral-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/5">
          <ArrowUpRight size={20} />
        </div>

        <div className="space-y-2 mb-4">
          <h3 className="text-3xl font-bold tracking-tight text-white leading-tight">
            SEO & Growth
          </h3>
          <p className="text-neutral-500 font-bold tracking-widest uppercase text-[10px]">
            Pozycjonowanie
          </p>
        </div>

        <p className="text-neutral-400 text-base font-medium leading-relaxed max-w-[90%] opacity-80">
          Wyprowadzimy Cię na szczyt wyników wyszukiwania.
        </p>
      </div>

      {/* 2. BOTTOM: Visual Container - Search Animation */}
      <div className="relative w-full flex-1 overflow-hidden rounded-b-[40px] bg-white/5 flex items-center justify-center p-6 pb-8">
        <div className="w-full max-w-[280px] relative">
          {/* Search Bar */}
          <div className="bg-[#2a2a2a] rounded-full shadow-lg border border-white/10 px-4 py-3 flex items-center gap-3 mb-4">
            <Search size={18} className="text-neutral-500 shrink-0" />
            <div className="flex-1 relative">
              <span className="text-white text-sm font-medium">
                {typedText}
              </span>
              <span className="inline-block w-0.5 h-4 bg-white animate-pulse ml-0.5 align-middle" />
            </div>
          </div>

          {/* Search Results */}
          <div
            className={`space-y-2 transition-all duration-500 ${showResults ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          >
            {/* Result 1 - Your Brand (Highlighted) */}
            <div className="bg-[#2a2a2a] rounded-xl p-3 shadow-md border border-white/10 transform scale-[1.02]">
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-5 h-5 rounded flex items-center justify-center text-[9px] font-bold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)",
                  }}
                >
                  1
                </div>
                <div className="w-20 h-2.5 bg-[#916AFF] rounded" />
              </div>
              <div className="space-y-1 pl-7">
                <div className="w-full h-1.5 bg-white/20 rounded" />
                <div className="w-3/4 h-1.5 bg-white/10 rounded" />
              </div>
            </div>

            {/* Result 2 */}
            <div className="bg-white/5 rounded-xl p-3 border border-white/5 opacity-50">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[9px] font-bold text-neutral-500">
                  2
                </div>
                <div className="w-16 h-2.5 bg-white/10 rounded" />
              </div>
              <div className="space-y-1 pl-7">
                <div className="w-full h-1.5 bg-white/10 rounded" />
                <div className="w-2/3 h-1.5 bg-white/5 rounded" />
              </div>
            </div>

            {/* Result 3 */}
            <div className="bg-white/5 rounded-xl p-3 border border-white/5 opacity-30">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[9px] font-bold text-neutral-500">
                  3
                </div>
                <div className="w-14 h-2.5 bg-white/10 rounded" />
              </div>
              <div className="space-y-1 pl-7">
                <div className="w-full h-1.5 bg-white/10 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

/* -------------------------------------------------------------------------- */
/*                                MARKETING CARD                              */
/* -------------------------------------------------------------------------- */
const MarketingCard = () => {
  return (
    <a
      href="/oferta/marketing"
      className="group relative h-[500px] rounded-[40px] overflow-hidden bg-[#1e1e1e] hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-700 block cursor-pointer border border-white/5"
    >
      {/* --- VISUAL BACKDROP --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Background Subtle Grid */}
        <div
          className="absolute inset-0 z-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Chart Visualization */}
        <div className="absolute -bottom-12 -left-12 right-[40%] top-[20%] p-8 z-10">
          {/* Header Label */}
          <div className="mb-3 flex items-center justify-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <TrendingUp size={16} className="text-white" />
            </div>
            <div>
              <span className="text-sm font-bold text-white">
                Wyniki kampanii
              </span>
              <span className="text-[10px] text-neutral-400 ml-2">
                Ostatnie 30 dni
              </span>
            </div>
          </div>

          {/* Chart Container */}
          <div className="relative w-full h-[calc(100%-44px)] bg-[#2a2a2a] rounded-2xl shadow-2xl border border-white/10 p-6 overflow-hidden">
            {/* SVG Chart */}
            <div className="relative h-full w-full">
              {/* Chart Line & Area SVG - stretched */}
              <svg
                viewBox="0 0 400 150"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                {/* Gradient Definition */}
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#916AFF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#916AFF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#916AFF" />
                    <stop offset="100%" stopColor="#6B4FD8" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                {[0, 1, 2, 3].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={37.5 * i + 20}
                    x2="400"
                    y2={37.5 * i + 20}
                    stroke="#444"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                ))}

                {/* Area Fill */}
                <path
                  d="M 0 130 Q 50 120 80 110 T 140 90 T 200 70 T 260 40 T 320 25 T 400 10 L 400 150 L 0 150 Z"
                  fill="url(#chartGradient)"
                  className="transition-all duration-1000"
                />

                {/* Main Line */}
                <path
                  d="M 0 130 Q 50 120 80 110 T 140 90 T 200 70 T 260 40 T 320 25 T 400 10"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                  style={{
                    strokeDasharray: 600,
                    strokeDashoffset: 0,
                    animation: "drawLine 2s ease-out forwards",
                  }}
                />
              </svg>

              {/* Data Points - separate layer with perfect circles */}
              <div className="absolute inset-0 w-full h-full">
                {[
                  { x: 0, y: 86.7 },
                  { x: 20, y: 73.3 },
                  { x: 35, y: 60 },
                  { x: 50, y: 46.7 },
                  { x: 65, y: 26.7 },
                  { x: 80, y: 16.7 },
                  { x: 100, y: 6.7 },
                ].map((point, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-[#333] border-2 border-[#916AFF] flex items-center justify-center shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-[#916AFF]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Y-Axis Labels */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[9px] text-neutral-500 font-medium py-2">
                <span>10K</span>
                <span>7.5K</span>
                <span>5K</span>
                <span>2.5K</span>
                <span>0</span>
              </div>
            </div>
          </div>

          {/* Floating Icon */}
          <div
            className="absolute bottom-24 right-4 w-12 h-12 rounded-xl flex items-center justify-center z-20 rotate-6 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)",
            }}
          >
            <BarChart3
              size={22}
              strokeWidth={2}
              className="text-white drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* --- CONTENT OVERLAY --- */}
      <div className="absolute inset-0 bg-linear-to-l from-[#1e1e1e] via-[#1e1e1e]/80 to-transparent opacity-90" />

      {/* Text Content - RIGHT SIDE */}
      <div className="absolute right-0 top-0 bottom-0 w-[50%] p-8 md:p-12 flex flex-col justify-start items-end z-20">
        <div className="relative z-10 text-right">
          <div className="pb-6 mb-6">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
              Marketing
            </h3>
            <p className="text-neutral-500 font-bold tracking-widest uppercase text-xs">
              Facebook & Google Ads
            </p>
          </div>

          <div>
            <p className="text-neutral-400 text-lg font-medium leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500">
              Precyzyjne kampanie reklamowe z wysokim zwrotem z inwestycji.
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

/* -------------------------------------------------------------------------- */
/*                             DASHED CARD WRAPPER                            */
/* -------------------------------------------------------------------------- */
const DashedCardWrapper = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsInView(true);
        observer.disconnect();
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative p-3 ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transitionProperty: "opacity, transform",
        transitionDuration: "0.6s",
        transitionTimingFunction: "ease-out",
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Dashed border pseudo-element */}
      <div
        className="absolute inset-0 rounded-[48px] pointer-events-none"
        style={{
          border: "2px dashed rgba(255, 255, 255, 0.1)",
        }}
      />
      {children}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                MAIN COMPONENT                              */
/* -------------------------------------------------------------------------- */
export const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="mb-24 text-center max-w-5xl mx-auto flex flex-col items-center">
          <SplitRevealTitle
            line1="Cztery Filary"
            line2="Twojego Wzrostu"
            className="text-6xl md:text-9xl font-medium tracking-tighter text-white mb-8 w-full"
          />
          <div className="text-neutral-400 text-xl font-light">
            <LineReveal
              lines={[
                "Kompleksowe podejście do obecności w sieci.",
                "Od pierwszej linii kodu po pierwszą sprzedaż.",
              ]}
              className="justify-center"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <DashedCardWrapper className="col-span-1 lg:col-span-2">
            <WebDesignCard />
          </DashedCardWrapper>
          <DashedCardWrapper className="col-span-1" delay={0.2}>
            <EcommerceCard />
          </DashedCardWrapper>
          <DashedCardWrapper className="col-span-1" delay={0.3}>
            <SeoCard />
          </DashedCardWrapper>
          <DashedCardWrapper className="col-span-1 lg:col-span-2" delay={0.1}>
            <MarketingCard />
          </DashedCardWrapper>
        </div>
      </div>
    </section>
  );
};

'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, LayoutTemplate, Palette } from 'lucide-react';
import { SplitRevealTitle } from '../ui/SplitRevealTitle';

const features = [
  {
    icon: Target,
    title: 'Skupiamy się na skuteczności strony, a nie na samym wyglądzie',
    description:
      'Projektujemy stronę uwzględniając cel biznesowy i ścieżkę klienta, tak aby prowadzić go od momentu wejścia na witrynę do kontaktu lub zakupu. Dzięki dopracowanej strukturze ruch z SEO i kampanii reklamowych jest bardziej efektywny – użytkownik rozumie ofertę i wie, jaki kolejny krok wykonać.',
    color: 'from-blue-500 to-cyan-400',
    visual: (
      <div className="relative w-full h-full bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden flex flex-col p-6">
        {/* Abstract Funnel Visualization */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <div className="w-full max-w-[200px] h-12 bg-white/10 rounded-lg flex items-center justify-between px-4">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
            </div>
            <div className="text-[10px] text-white/30">Visitors</div>
          </div>
          <div className="w-2 bg-white/5 h-8"></div>
          <div className="w-full max-w-[160px] h-12 bg-white/10 rounded-lg flex items-center justify-between px-4">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400/50"></div>
              <div className="w-2 h-2 rounded-full bg-blue-400/50"></div>
            </div>
            <div className="text-[10px] text-blue-400/50">Interest</div>
          </div>
          <div className="w-2 bg-white/5 h-8"></div>
          <div className="w-full max-w-[120px] h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-between px-4 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            <div className="text-[10px] text-white font-bold">Conversion</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: LayoutTemplate,
    title: 'Tworzymy makiety UX, które porządkują nawigację i treści',
    description:
      'Zanim powstanie projekt graficzny, tworzymy makiety UX, które porządkują strukturę strony i nawigację. Na tym etapie układamy treści oraz kluczowe elementy tak, aby poruszanie się po stronie było intuicyjne, a kontakt lub zakup łatwe do wykonania.',
    color: 'from-purple-500 to-pink-500',
    visual: (
      <div className="relative w-full h-full bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden p-6 flex flex-col">
        {/* Wireframe Mockup */}
        <div className="w-full h-8 border-b border-dashed border-white/20 mb-6 flex items-center gap-4">
          <div className="w-24 h-3 bg-white/10 rounded"></div>
          <div className="flex-1"></div>
          <div className="w-16 h-3 bg-white/10 rounded"></div>
        </div>
        <div className="flex gap-4 h-full">
          <div className="w-1/4 h-full bg-white/5 rounded border border-dashed border-white/10"></div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="w-full h-32 bg-white/5 rounded border border-dashed border-white/10 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-dashed border-white/20 flex items-center justify-center text-white/20">
                Img
              </div>
            </div>
            <div className="w-full h-4 bg-white/10 rounded"></div>
            <div className="w-2/3 h-4 bg-white/10 rounded"></div>
            <div className="mt-auto w-32 h-10 border border-dashed border-white/20 rounded flex items-center justify-center text-xs text-white/30">
              CTA Button
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Palette,
    title: 'Dbamy o projekt graficzny, który wzmacnia wiarygodność',
    description:
      'Warstwę wizualną dopasowujemy do branży i wizerunku firmy, aby strona od pierwszych sekund była zachęcająca i wiarygodna. Czytelny układ i dopracowane detale wzmacniają przekaz oraz zachęcają do kontaktu.',
    color: 'from-orange-500 to-red-500',
    visual: (
      <div className="relative w-full h-[330px] sm:h-[330px] md:h-[260px] lg:h-[330px] xl:h-[400px] 2xl:h-[460px] bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden flex flex-col items-center justify-center">
        <InterfaceCard />
      </div>
    ),
  },
];

const PrimaryButtonSvg = () => (
  <svg
    className="block w-[304px] h-[156px] overflow-visible pointer-events-none"
    fill="none"
    viewBox="0 0 304 156.658"
  >
    <g>
      <g filter="url(#filter0_ddi_1_111)">
        <rect
          fill="url(#paint0_linear_1_111)"
          height="63"
          rx="12"
          width="264"
          x="20"
          y="20"
        />
      </g>
    </g>
    <defs>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="103"
        id="filter0_ddi_1_111"
        width="304"
        x="0"
        y="0"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius="4"
          result="effect1_dropShadow_1_111"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="8" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          in2="BackgroundImageFix"
          mode="normal"
          result="effect1_dropShadow_1_111"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="3.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          in2="effect1_dropShadow_1_111"
          mode="normal"
          result="effect2_dropShadow_1_111"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_1_111"
          mode="normal"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="erode"
          radius="1"
          result="effect3_innerShadow_1_111"
        />
        <feOffset dy="-5" />
        <feGaussianBlur stdDeviation="3.2" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend in2="shape" mode="normal" result="effect3_innerShadow_1_111" />
      </filter>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint0_linear_1_111"
        x1="20"
        x2="284"
        y1="51.5"
        y2="51.5"
      >
        <stop stopColor="#9B87F5" />
        <stop offset="1" stopColor="#433D5C" />
      </linearGradient>
    </defs>
  </svg>
);

export const FrameGuides = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Top Horizontal Line (-32px from top) */}
      <div className="absolute -top-8 left-[-64px] right-[-64px] h-[2px] bg-[#333333]" />

      {/* Bottom Horizontal Line (-32px from bottom) */}
      <div className="absolute -bottom-8 left-[-64px] right-[-64px] h-[2px] bg-[#333333]" />

      {/* Left Vertical Line (-32px from left) */}
      <div className="absolute -left-8 top-[-64px] bottom-[-64px] w-[2px] bg-[#333333]" />

      {/* Right Vertical Line (-32px from right) */}
      <div className="absolute -right-8 top-[-64px] bottom-[-64px] w-[2px] bg-[#333333]" />
    </div>
  );
};

export const DesignSpecsOverlay = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-50 overflow-visible">
      {/* --- GAP 1: 64px (Between Header and Content) --- */}
      {/* Top Line (Bottom of Header) - approx 76px from top */}
      <div className="absolute top-[76px] -left-[48px] right-0 border-t-2 border-dashed border-[#9B87F5]" />
      {/* Bottom Line (Top of Content) - 76 + 64 = 140px */}
      <div className="absolute top-[140px] -left-[48px] right-0 border-t-2 border-dashed border-[#9B87F5]" />

      {/* Measurement Bracket */}
      <div className="absolute top-[76px] -left-[80px] h-[64px] w-[20px] flex items-center justify-end">
        <div className="absolute right-0 top-0 bottom-0 w-[10px] border-y-2 border-r-2 border-[#9B87F5] opacity-80" />
        <span className="absolute right-[24px] text-[#9B87F5] font-mono text-xs whitespace-nowrap">
          64px
        </span>
      </div>

      {/* --- GAP 2: 72px (Between Content and Footer) --- */}
      {/* We measure from bottom for stability */}
      {/* Bottom Gap is 48px. Footer is now 32px (h-8). 
          Footer Top = 48 + 32 = 80px from bottom.
          Gap 2 starts at 80px from bottom and goes up 72px.
          Top of Gap 2 = 80 + 72 = 152px from bottom.
      */}

      {/* Top Line of Gap 2 (Bottom of Content) */}
      <div className="absolute bottom-[152px] -left-[48px] right-0 border-t-2 border-dashed border-[#9B87F5]" />
      {/* Bottom Line of Gap 2 (Top of Footer) */}
      <div className="absolute bottom-[80px] -left-[48px] right-0 border-t-2 border-dashed border-[#9B87F5]" />

      {/* Measurement Bracket */}
      <div className="absolute bottom-[80px] -left-[80px] h-[72px] w-[20px] flex items-center justify-end">
        <div className="absolute right-0 top-0 bottom-0 w-[10px] border-y-2 border-r-2 border-[#9B87F5] opacity-80" />
        <span className="absolute right-[24px] text-[#9B87F5] font-mono text-xs whitespace-nowrap">
          72px
        </span>
      </div>

      {/* --- GAP 3: 48px (Bottom Padding) --- */}
      {/* Top Line of Gap 3 (Bottom of Footer) */}
      <div className="absolute bottom-[48px] -left-[48px] right-0 border-t-2 border-dashed border-[#9B87F5]" />
      {/* Bottom Line of Gap 3 (Bottom of Card) */}
      <div className="absolute bottom-0 -left-[48px] right-0 border-t-2 border-dashed border-[#9B87F5]" />

      {/* Measurement Bracket */}
      <div className="absolute bottom-0 -left-[80px] h-[48px] w-[20px] flex items-center justify-end">
        <div className="absolute right-0 top-0 bottom-0 w-[10px] border-y-2 border-r-2 border-[#9B87F5] opacity-80" />
        <span className="absolute right-[24px] text-[#9B87F5] font-mono text-xs whitespace-nowrap">
          48px
        </span>
      </div>
    </div>
  );
};

export default function InterfaceCard() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="w-[250vw] sm:w-[120vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] shrink-0 transform-gpu origin-center scale-[0.25] sm:scale-[0.25] md:scale-[0.2] lg:scale-[0.3] xl:scale-[0.4] 2xl:scale-[0.5]">
        <div className="relative group mx-auto">
          {/* Frame Guides (Dark Lines around card) */}
          <FrameGuides />

          {/* Specs Overlay (Purple Measurements) */}
          <DesignSpecsOverlay />

          {/* Main Card Container */}
          <div className="relative bg-[#262626] rounded-[60px] shadow-2xl overflow-hidden border border-white/5 z-10 flex flex-col">
            {/* Inner shadow/border effect */}
            <div className="absolute inset-0 rounded-[60px] pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] z-50" />

            {/* --- Header (Height: 40pt + 20h + 16pb = 76px) --- */}
            <div className="px-12 pt-10 pb-4 flex gap-3 relative z-20 shrink-0">
              <div className="w-5 h-5 rounded-full bg-[#8E8E8E]/25" />
              <div className="w-5 h-5 rounded-full bg-[#8E8E8E]/25" />
              <div className="w-5 h-5 rounded-full bg-[#8E8E8E]/25" />
            </div>

            {/* --- GAP 1: 64px --- */}
            <div className="h-16 w-full shrink-0" />

            {/* --- Content Grid --- */}
            <div className="px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-20 shrink-0">
              {/* Left Column */}
              <div className="lg:col-span-8 flex flex-col gap-10">
                {/* Top Gradient Pill */}
                <div className="h-12 w-full max-w-xl rounded-full bg-gradient-to-r from-[#555555] to-transparent opacity-80" />

                {/* Skeleton Text Area */}
                <div className="space-y-6 py-2">
                  <div className="h-4 w-3/4 rounded-full bg-gradient-to-r from-[#555555] via-[#555555]/50 to-transparent opacity-60" />
                  <div className="h-4 w-1/2 rounded-full bg-gradient-to-r from-[#555555] via-[#555555]/50 to-transparent opacity-60" />
                </div>

                {/* Buttons Area */}
                <div className="flex flex-wrap items-center gap-6 mt-4">
                  {/* Primary Gradient Button (SVG Based) */}
                  <div className="relative w-[264px] h-[63px] group/btn">
                    {/* Button SVG */}
                    <div className="absolute -left-[20px] -top-[20px] w-[304px] max-w-none pointer-events-none">
                      <PrimaryButtonSvg />
                    </div>

                    {/* Interactable Area (Invisible) */}
                    <button
                      className="absolute inset-0 w-full h-full cursor-pointer z-10"
                      aria-label="Primary Action"
                    />

                    {/* Floating Cursor (Overlaid) */}
                    <div className="absolute -bottom-[30px] right-[10px] pointer-events-none z-30 filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.28)]">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19177L11.7841 12.3673H5.65376Z"
                          fill="#333333"
                        />
                        <path
                          d="M5.46026 12.3673L5.65376 12.3673L11.7841 12.3673L0.500002 1.19177L0.500002 16.8829L5.31717 12.4976L5.46026 12.3673Z"
                          stroke="white"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Secondary Outlined Button */}
                  <button className="relative w-[264px] h-[63px] rounded-[12px] border-[3px] border-[#9b87f5] border-solid opacity-50 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1),0px_0px_16px_4px_rgba(0,0,0,0.05)] hover:opacity-80 transition-opacity">
                    <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_-1px_9.8px_0px_rgba(255,255,255,0.04)]" />
                    <span className="sr-only">Secondary Action</span>
                  </button>
                </div>
              </div>

              {/* Right Column (Placeholder Box) */}
              <div className="lg:col-span-4 min-h-[300px]">
                <div className="w-full h-full bg-white/5 rounded-[30px] border border-white/5 min-h-[350px]" />
              </div>
            </div>

            {/* --- GAP 2: 72px --- */}
            <div className="h-[72px] w-full shrink-0" />

            {/* --- Footer Placeholder (New) --- */}
            <div className="px-12 flex justify-center shrink-0">
              <div className="h-8 w-96 rounded-full bg-gradient-to-r from-[#555555] via-[#555555]/50 to-transparent opacity-60" />
            </div>

            {/* --- GAP 3: 48px --- */}
            <div className="h-12 w-full shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export const WhyHermerSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={containerRef} className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <SplitRevealTitle
            line1="Dlaczego strony www"
            line2="Hermer są skuteczne?"
            className="text-white! text-4xl md:text-7xl mb-8"
          />
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Naszym celem jest tworzenie stron internetowych, które są czytelne,
            intuicyjne i przygotowane do działań promocyjnych, dzięki czemu
            łatwiej zamieniają ruch w zapytania oraz klientów.
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div className="relative w-[88px] h-[88px] shrink-0">
                  <div
                    className="absolute inset-0 rounded-[24px]"
                    style={{
                      background:
                        'linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      boxShadow:
                        '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)',
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <feature.icon
                      className="w-10 h-10 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Visual Content */}
              <div className="flex-1 w-full">{feature.visual}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

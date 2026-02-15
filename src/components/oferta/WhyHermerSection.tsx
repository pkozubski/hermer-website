"use client";

import React from "react";
import { Target, LayoutTemplate, Palette } from "lucide-react";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";

const features = [
  {
    icon: Target,
    title: "Skupiamy się na skuteczności strony, a nie na samym wyglądzie",
    description:
      "Projektujemy stronę uwzględniając cel biznesowy i ścieżkę klienta, tak aby prowadzić go od momentu wejścia na witrynę do kontaktu lub zakupu. Dzięki dopracowanej strukturze ruch z SEO i kampanii reklamowych jest bardziej efektywny – użytkownik rozumie ofertę i wie, jaki kolejny krok wykonać.",
    color: "from-blue-500 to-cyan-400",
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
    title: "Tworzymy makiety UX, które porządkują nawigację i treści",
    description:
      "Zanim powstanie projekt graficzny, tworzymy makiety UX, które porządkują strukturę strony i nawigację. Na tym etapie układamy treści oraz kluczowe elementy tak, aby poruszanie się po stronie było intuicyjne, a kontakt lub zakup łatwe do wykonania.",
    color: "from-purple-500 to-pink-500",
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
    title: "Dbamy o projekt graficzny, który wzmacnia wiarygodność",
    description:
      "Warstwę wizualną dopasowujemy do branży i wizerunku firmy, aby strona od pierwszych sekund była zachęcająca i wiarygodna. Czytelny układ i dopracowane detale wzmacniają przekaz oraz zachęcają do kontaktu.",
    color: "from-orange-500 to-red-500",
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

/* Scaled/Adapted for 500px width and 320px height with enlarged elements */

const FrameGuides = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Top Horizontal Line (-8px from top) */}
      <div className="absolute -top-2 left-[-16px] right-[-16px] h-[0.5px] bg-[#333333]" />

      {/* Bottom Horizontal Line (-8px from bottom) */}
      <div className="absolute -bottom-2 left-[-16px] right-[-16px] h-[0.5px] bg-[#333333]" />

      {/* Left Vertical Line (-8px from left) */}
      <div className="absolute -left-2 top-[-16px] bottom-[-16px] w-[0.5px] bg-[#333333]" />

      {/* Right Vertical Line (-8px from right) */}
      <div className="absolute -right-2 top-[-16px] bottom-[-16px] w-[0.5px] bg-[#333333]" />
    </div>
  );
};

const DesignSpecsOverlay = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-50 overflow-visible font-mono">
      {/* --- GAP 1: 20px --- */}
      {/* Top Line (Bottom of Header) - approx 28px from top */}
      <div className="absolute top-[34px] -left-[12px] right-0 border-t border-dashed border-[#9B87F5] opacity-50 border-[0.5px]" />
      {/* Bottom Line (Top of Content) - 28 + 20 = 48px */}
      <div className="absolute top-[68px] -left-[12px] right-0 border-t border-dashed border-[#9B87F5] opacity-50 border-[0.5px]" />

      {/* Measurement Bracket */}
      <div className="absolute top-[34px] -left-[20px] h-[36px] w-[5px] flex items-center justify-end">
        <div className="absolute right-0 top-0 bottom-0 w-[4px] border-y border-r border-[#9B87F5] opacity-80 border-[0.5px]" />
        <span className="absolute right-[8px] text-[#9B87F5] text-[9px] leading-none">
          36
        </span>
      </div>

      {/* --- GAP 2: Flexible (Between Content and Footer) --- */}
      {/* Footer Top = 16 + 12 = 28px from bottom. */}
      {/* Top of Gap 2 = 28 + 24 = 52px from bottom */}

      {/* Top Line of Gap 2 (Bottom of Content Area) */}
      <div className="absolute bottom-[52px] -left-[12px] right-0 border-t border-dashed border-[#9B87F5] opacity-50 border-[0.5px]" />
      {/* Bottom Line of Gap 2 (Top of Footer) */}
      <div className="absolute bottom-[28px] -left-[12px] right-0 border-t border-dashed border-[#9B87F5] opacity-50 border-[0.5px]" />

      {/* Measurement Bracket */}
      <div className="absolute bottom-[28px] -left-[20px] h-[24px] w-[5px] flex items-center justify-end">
        <div className="absolute right-0 top-0 bottom-0 w-[4px] border-y border-r border-[#9B87F5] opacity-80 border-[0.5px]" />
        <span className="absolute right-[8px] text-[#9B87F5] text-[9px] leading-none">
          24
        </span>
      </div>

      {/* --- GAP 3: 16px (Bottom Padding) --- */}
      {/* Top Line of Gap 3 (Bottom of Footer) */}
      <div className="absolute bottom-[16px] -left-[12px] right-0 border-t border-dashed border-[#9B87F5] opacity-50 border-[0.5px]" />
      {/* Bottom Line of Gap 3 (Bottom of Card) */}
      <div className="absolute bottom-0 -left-[12px] right-0 border-t border-dashed border-[#9B87F5] opacity-50 border-[0.5px]" />

      {/* Measurement Bracket */}
      <div className="absolute bottom-0 -left-[20px] h-[16px] w-[5px] flex items-center justify-end">
        <div className="absolute right-0 top-0 bottom-0 w-[4px] border-y border-r border-[#9B87F5] opacity-80 border-[0.5px]" />
        <span className="absolute right-[8px] text-[#9B87F5] text-[9px] leading-none">
          16
        </span>
      </div>
    </div>
  );
};

export default function InterfaceCard() {
  return (
    <div className="relative group mx-auto w-[500px] h-[320px] shrink-0 font-sans">
      {/* Frame Guides */}
      <FrameGuides />

      {/* Specs Overlay */}
      <DesignSpecsOverlay />

      {/* Main Card Container */}
      <div className="relative w-full h-full bg-[#262626] rounded-[20px] shadow-2xl overflow-hidden border border-white/5 z-10 flex flex-col">
        {/* Inner shadow/border effect */}
        <div className="absolute inset-0 rounded-[20px] pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] z-50" />

        {/* --- Header --- */}
        <div className="px-6 pt-4 pb-2 flex gap-[5px] relative z-20 shrink-0">
          <div className="w-[8px] h-[8px] rounded-full bg-[#8E8E8E]/25" />
          <div className="w-[8px] h-[8px] rounded-full bg-[#8E8E8E]/25" />
          <div className="w-[8px] h-[8px] rounded-full bg-[#8E8E8E]/25" />
        </div>

        {/* --- GAP 1: 40px --- */}
        <div className="h-10 w-full shrink-0" />

        {/* --- Content Grid --- */}
        <div className="px-6 grid grid-cols-12 gap-6 relative z-20 flex-1 min-h-0">
          {/* Left Column */}
          <div className="col-span-8 flex flex-col gap-4">
            {/* Top Gradient Pill */}
            <div className="h-4 w-full max-w-[340px] rounded-full bg-gradient-to-r from-[#555555] to-transparent opacity-80" />

            {/* Skeleton Text Area */}
            <div className="space-y-2.5 py-1">
              <div className="h-2.5 w-3/4 rounded-full bg-gradient-to-r from-[#555555] via-[#555555]/50 to-transparent opacity-60" />
              <div className="h-2.5 w-1/2 rounded-full bg-gradient-to-r from-[#555555] via-[#555555]/50 to-transparent opacity-60" />
            </div>

            {/* Buttons Area */}
            <div className="flex flex-wrap items-center gap-3 mt-1">
              {/* Primary Gradient Button */}
              <div className="relative w-[100px] h-[28px] group/btn">
                {/* Button Background */}
                <button
                  className="absolute inset-0 w-full h-full rounded-[6px] bg-gradient-to-r from-[#e0e0e0] to-[#999999] shadow-[0_1px_2px_rgba(0,0,0,0.2)] cursor-pointer z-10 flex items-center justify-center"
                  aria-label="Primary Action"
                >
                  <div className="w-12 h-1.5 bg-white/40 rounded-full" />
                </button>

                {/* Floating Cursor (Overlaid) */}
                <div className="absolute -bottom-[24px] right-0 pointer-events-none z-30 filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.28)]">
                  <svg
                    width="32"
                    height="32"
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
              <button className="relative w-[100px] h-[28px] rounded-[6px] border-[1.5px] border-[#9b87f5] border-solid opacity-50 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.1),0px_0px_4px_1px_rgba(0,0,0,0.05)] hover:opacity-80 transition-opacity">
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_-1px_2.5px_0px_rgba(255,255,255,0.04)]" />
                <span className="sr-only">Secondary Action</span>
              </button>
            </div>
          </div>

          {/* Right Column (Placeholder Box) */}
          <div className="col-span-4 h-full min-h-[100px]">
            <div className="w-full h-full bg-white/5 rounded-[12px] border border-white/5" />
          </div>
        </div>

        {/* --- GAP 2: Flexible Spacer (min 24px) --- */}
        <div className="h-6 w-full shrink-0" />

        {/* --- Footer Placeholder --- */}
        <div className="px-6 flex justify-center shrink-0 mt-auto">
          <div className="h-3 w-48 rounded-full bg-gradient-to-r from-[#555555] via-[#555555]/50 to-transparent opacity-60" />
        </div>

        {/* --- GAP 3: 16px --- */}
        <div className="h-4 w-full shrink-0" />
      </div>
    </div>
  );
}

export const WhyHermerSection: React.FC = () => {
  return (
    <section className="py-24 bg-transparent relative">
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
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div className="relative w-[88px] h-[88px] shrink-0">
                  <div
                    className="absolute inset-0 rounded-[24px]"
                    style={{
                      background:
                        "linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      boxShadow:
                        "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)",
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

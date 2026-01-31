import React from "react";
import { Smartphone, Laptop, Tablet, Monitor } from "lucide-react";

// --- Internal Mock UI Components ---

function WindowControls() {
  return (
    <div className="absolute h-[14px] left-[27px] top-[26px] w-[56px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 56 14"
      >
        <g id="Group 5">
          <circle
            cx="7"
            cy="7"
            fill="var(--fill-0, #8E8E8E)"
            fillOpacity="0.23"
            id="Ellipse 4"
            r="7"
          />
          <circle
            cx="28"
            cy="7"
            fill="var(--fill-0, #8E8E8E)"
            fillOpacity="0.23"
            id="Ellipse 5"
            r="7"
          />
          <circle
            cx="49"
            cy="7"
            fill="var(--fill-0, #8E8E8E)"
            fillOpacity="0.23"
            id="Ellipse 6"
            r="7"
          />
        </g>
      </svg>
    </div>
  );
}

// --- Device Frames ---

function DesktopMockup() {
  return (
    <div className="absolute top-0 right-0 w-[400px] h-[280px]">
      {/* Content Container */}
      <div className="absolute inset-0 bg-[#262626] rounded-[32px] overflow-hidden">
        <WindowControls />
        {/* Content */}
        <div className="p-6 flex flex-col gap-4 opacity-50 mt-12">
          <div className="h-32 w-full bg-white/5 rounded-lg border border-white/5" />
          <div className="flex gap-4">
            <div className="h-20 w-1/3 bg-white/5 rounded-lg" />
            <div className="h-20 w-1/3 bg-white/5 rounded-lg" />
            <div className="h-20 w-1/3 bg-white/5 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Abstract Frame (WebDevCard Style) */}
      <div
        aria-hidden="true"
        className="absolute border-5 border-[rgba(255,255,255,0.03)] border-solid inset-[-5px] pointer-events-none rounded-[37px] shadow-[0px_0px_48px_10px_rgba(0,0,0,0.2),0px_4px_16px_8px_rgba(0,0,0,0.1)]"
      />
    </div>
  );
}

function TabletMockup() {
  return (
    <div className="absolute top-[60px] right-[140px] w-[220px] h-[300px] bg-[#262626] rounded-[24px] border border-white/5 shadow-[-20px_20px_40px_rgba(0,0,0,0.4)] overflow-hidden">
      {/* Content */}
      <div className="p-4 flex flex-col gap-3 py-8 opacity-60">
        <div className="h-24 w-full bg-white/5 rounded-lg border border-white/5" />
        <div className="h-16 w-full bg-white/5 rounded-lg" />
        <div className="h-16 w-full bg-white/5 rounded-lg" />
        <div className="h-16 w-full bg-white/5 rounded-lg" />
      </div>

      {/* Highlight Border */}
      <div className="absolute inset-0 border-4 border-white/5 rounded-[24px] pointer-events-none" />
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="absolute top-[100px] right-[280px] w-[140px] h-[280px] bg-[#262626] rounded-[32px] border border-white/5 shadow-[-20px_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 h-4 w-12 bg-black rounded-full z-20" />

      {/* Content */}
      <div className="p-3 flex flex-col gap-2 pt-10 opacity-80">
        <div className="h-24 w-full bg-[#006FEE]/20 border border-[#006FEE]/30 rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-[#006FEE]/20 to-transparent" />
        </div>
        <div className="h-12 w-full bg-white/5 rounded-lg" />
        <div className="h-12 w-full bg-white/5 rounded-lg" />
        <div className="h-12 w-full bg-white/5 rounded-lg" />
        <div className="h-12 w-full bg-white/5 rounded-lg" />
      </div>

      {/* Highlight Border */}
      <div className="absolute inset-0 border-[6px] border-white/5 rounded-[32px] pointer-events-none" />
    </div>
  );
}

function DevicesContainer() {
  return (
    <div className="absolute h-[600px] w-[800px] -right-[0] top-[40px] scale-[0.85] origin-top-right">
      {/* Desktop - Background */}
      <DesktopMockup />

      {/* Tablet - Midground */}
      <TabletMockup />

      {/* Phone - Foreground */}
      <PhoneMockup />
    </div>
  );
}

function SmartphoneIconVector() {
  return (
    <div className="text-white">
      <Smartphone size={44} strokeWidth={1.5} />
    </div>
  );
}

function FloatingIcon() {
  return (
    <div className="relative size-[88px]">
      <div
        className="absolute left-0 top-0 size-[88px] rounded-[24px]"
        style={{
          background:
            "linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <SmartphoneIconVector />
      </div>
    </div>
  );
}

export function ResponsivenessCard() {
  return (
    <div className="bg-[rgba(26,26,26,0.4)] content-stretch flex flex-col gap-[10px] items-center justify-end overflow-clip px-[51px] py-[41px] relative rounded-[50px] w-[620px] h-[520px] shadow-2xl shrink-0">
      {/* Devices Mockup */}
      <DevicesContainer />

      {/* Progressive Blur and Gradient Overlay */}
      <div className="absolute h-[340px] left-0 bottom-0 w-full pointer-events-none z-0">
        <div
          className="absolute inset-0 backdrop-blur-xs"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 30%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 30%)",
          }}
        />
        <div
          className="absolute inset-0 backdrop-blur-sm"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 30%, black 60%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 30%, black 60%)",
          }}
        />
        <div
          className="absolute inset-0 backdrop-blur-md"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 60%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 60%, black 100%)",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[rgba(26,26,26,0.8)] to-[#1a1a1a]" />
      </div>

      {/* Bottom Content Group */}
      <div className="relative z-10 flex flex-col items-start gap-6 w-full mt-auto">
        <div className="-rotate-12 flex-none origin-bottom-left -ml-2">
          <FloatingIcon />
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[32px] text-white">
          Responsywność
        </p>
      </div>
    </div>
  );
}

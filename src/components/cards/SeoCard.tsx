import React from "react";
import { Search, Mic } from "lucide-react";

// --- Internal Mock UI Components ---

function GoogleLogoAbstract() {
  return (
    <div className="flex items-center gap-3 mb-8">
      {/* G */}
      <div className="size-16 rounded-full border-[6px] border-[#4285F4] relative" />
      {/* o */}
      <div className="size-10 rounded-full border-[6px] border-[#EA4335]" />
      {/* o */}
      <div className="size-10 rounded-full border-[6px] border-[#FBBC05]" />
      {/* g */}
      <div className="size-10 rounded-full border-[6px] border-[#4285F4] relative">
        <div className="absolute -bottom-2 -right-1 w-4 h-6 bg-[#4285F4] rounded-full" />
      </div>
      {/* l */}
      <div className="h-16 w-3 rounded-full bg-[#34A853]" />
      {/* e */}
      <div className="size-10 rounded-full border-[6px] border-[#EA4335] rotate-[-15deg] relative">
        <div className="absolute top-1/2 left-0 right-0 h-[6px] bg-[#EA4335]" />
      </div>
    </div>
  );
}

function SimpleGoogleLogoAbstract() {
  return (
    <div className="flex gap-2 mb-10 items-end">
      <div className="h-20 w-6 rounded-full bg-[#4285F4] shadow-[0_0_20px_-5px_rgba(66,133,244,0.5)]" />
      <div className="h-14 w-6 rounded-full bg-[#EA4335] shadow-[0_0_20px_-5px_rgba(234,67,53,0.5)]" />
      <div className="h-24 w-6 rounded-full bg-[#FBBC05] shadow-[0_0_20px_-5px_rgba(251,188,5,0.5)]" />
      <div className="h-16 w-6 rounded-full bg-[#34A853] shadow-[0_0_20px_-5px_rgba(52,168,83,0.5)]" />
      <div className="h-12 w-6 rounded-full bg-[#4285F4] shadow-[0_0_20px_-5px_rgba(66,133,244,0.5)]" />
      <div className="h-18 w-6 rounded-full bg-[#EA4335] shadow-[0_0_20px_-5px_rgba(234,67,53,0.5)]" />
    </div>
  );
}

function SearchBarMockup() {
  return (
    <div className="w-full h-16 rounded-full bg-[#262626] border border-white/10 flex items-center px-6 shadow-2xl relative overflow-hidden group">
      <Search className="text-white/30 mr-4" size={20} />

      {/* Input Placeholders with Brand Colors */}
      <div className="flex gap-1.5 items-center">
        <div className="h-2 w-16 bg-linear-to-r from-[#4285F4] to-transparent rounded-full opacity-80" />
        <div className="h-2 w-8 bg-linear-to-r from-[#EA4335] to-transparent rounded-full opacity-80" />
        <div className="h-2 w-12 bg-linear-to-r from-[#FBBC05] to-transparent rounded-full opacity-80" />
      </div>

      <div className="flex-1" />

      {/* Mic / Lens Icons Mockup */}
      <div className="flex gap-4">
        <Mic className="text-[#4285F4]" size={20} />
        <div className="size-5 rounded-md border-2 border-[#FBBC05]" />
      </div>

      {/* Active Glow */}
      <div className="absolute inset-0 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="flex gap-4 mt-8">
      <div className="h-10 px-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
        <div className="h-2 w-20 bg-white/10 rounded-full" />
      </div>
      <div className="h-10 px-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
        <div className="h-2 w-24 bg-white/10 rounded-full" />
      </div>
    </div>
  );
}

function SeoContent() {
  return (
    <div className="absolute inset-0 bg-[#1f1f1f] flex flex-col items-center justify-center p-12">
      <SimpleGoogleLogoAbstract />
      <SearchBarMockup />
      <ActionButtons />
    </div>
  );
}

function SeoWindow() {
  return (
    <div className="absolute h-[450px] left-0 top-0 w-[529px]">
      {/* Content Wrapper */}
      <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-[#1f1f1f] border border-white/5 shadow-2xl">
        <SeoContent />
      </div>

      <div
        aria-hidden="true"
        className="absolute border-5 border-[rgba(255,255,255,0.03)] border-solid inset-[-5px] pointer-events-none rounded-[37px] shadow-[0px_0px_48px_10px_rgba(0,0,0,0.2),0px_4px_16px_8px_rgba(0,0,0,0.1)]"
      />
    </div>
  );
}

function SeoFrame() {
  return (
    <div className="absolute h-[450px] -left-[15%] top-0 w-[529px]">
      <SeoWindow />
    </div>
  );
}

function SeoContainer() {
  return (
    <div className="absolute h-[403px] left-[70px] top-[60px] w-[534px]">
      <div className="absolute h-[450px] w-[529px] left-0 top-0 scale-[0.95] origin-top-left">
        <SeoFrame />
      </div>
    </div>
  );
}

function SearchIconVector() {
  return (
    <div className="text-white">
      <Search size={44} strokeWidth={1.5} />
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
        <SearchIconVector />
      </div>
    </div>
  );
}

export function SeoCard() {
  return (
    <div className="bg-[rgba(26,26,26,0.4)] backdrop-blur-[7px] content-stretch flex flex-col gap-[10px] items-center justify-end overflow-clip px-[51px] py-[41px] relative rounded-[50px] w-[620px] h-[520px] shadow-2xl shrink-0">
      {/* SEO Interface Mockup */}
      <SeoContainer />

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

      {/* Bottom Content Group (Right Aligned) */}
      <div className="relative z-10 flex flex-col items-end gap-6 w-full mt-auto">
        <div className="-rotate-12 flex-none origin-bottom-right -mr-2">
          <FloatingIcon />
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[32px] text-white">
          SEO & Ads
        </p>
      </div>
    </div>
  );
}

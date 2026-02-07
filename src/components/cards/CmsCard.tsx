import React from "react";
import { Layout, Image as ImageIcon, Type, AlignLeft } from "lucide-react";

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

function BlockControls() {
  return (
    <div className="absolute -right-3 -top-3 flex gap-1 bg-[#262626] border border-white/10 rounded-md p-1 shadow-xl z-20 scale-75">
      <div className="size-4 rounded bg-[#916AFF] flex items-center justify-center">
        <Layout size={8} className="text-white" />
      </div>
      <div className="size-4 rounded bg-white/10" />
      <div className="size-4 rounded bg-white/10" />
    </div>
  );
}

function HeroBlock() {
  return (
    <div className="w-full h-32 rounded-xl bg-white/5 border border-white/5 relative overflow-hidden group mb-4">
      {/* Abstract Content */}
      <div className="absolute inset-x-6 top-6 flex flex-col gap-3">
        <div className="h-4 w-2/3 bg-linear-to-r from-white/10 to-transparent rounded-full" />
        <div className="h-2 w-1/2 bg-linear-to-r from-white/5 to-transparent rounded-full" />
        <div className="mt-2 h-6 w-24 bg-[#916AFF]/20 border border-[#916AFF]/30 rounded-md" />
      </div>
      {/* Hover/Active State Indicator */}
      <div className="absolute inset-0 border-2 border-[#916AFF]/50 rounded-xl opacity-100" />
      <BlockControls />
    </div>
  );
}

function TextBlock() {
  return (
    <div className="w-full p-4 rounded-xl border border-white/5 bg-transparent flex flex-wrap gap-2 mb-4">
      <div className="h-2 w-full bg-linear-to-r from-white/5 to-transparent rounded-full" />
      <div className="h-2 w-[90%] bg-linear-to-r from-white/5 to-transparent rounded-full" />
      <div className="h-2 w-[95%] bg-linear-to-r from-white/5 to-transparent rounded-full" />
      <div className="h-2 w-[60%] bg-linear-to-r from-white/5 to-transparent rounded-full" />
    </div>
  );
}

function ColumnsBlock() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <div className="aspect-video rounded-xl bg-white/5 border border-white/5 flex items-center justify-center relative overflow-hidden">
        <ImageIcon size={24} className="text-white/10" />
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <div className="h-2 w-full bg-linear-to-r from-white/10 to-transparent rounded-full" />
        <div className="h-2 w-[80%] bg-linear-to-r from-white/5 to-transparent rounded-full" />
        <div className="h-2 w-[90%] bg-linear-to-r from-white/5 to-transparent rounded-full" />
      </div>
    </div>
  );
}

function CmsCanvas() {
  return (
    <div className="absolute inset-x-0 top-[55px] bottom-0 bg-[#1f1f1f] p-8 overflow-hidden">
      {/* Editor Canvas Area */}
      <div className="w-full max-w-[380px] mx-auto">
        <HeroBlock />
        <ColumnsBlock />
        <div className="mt-4">
          <TextBlock />
        </div>
      </div>
    </div>
  );
}

function CmsHeader() {
  return (
    <div className="absolute h-[55px] left-0 top-0 right-0 border-b border-white/5 bg-[#262626] flex items-center justify-between px-4 pt-[20px]">
      <div className="w-[80px]"></div>

      {/* Editor Toolbar Mockup */}
      <div className="h-8 flex items-center gap-4 mx-auto opacity-50">
        <div className="p-1.5 rounded hover:bg-white/5">
          <AlignLeft size={14} className="text-white" />
        </div>
        <div className="h-4 w-px bg-white/10" />
        <div className="p-1.5 rounded hover:bg-white/5">
          <Type size={14} className="text-white" />
        </div>
        <div className="p-1.5 rounded hover:bg-white/5">
          <ImageIcon size={14} className="text-white" />
        </div>
        <div className="h-4 w-px bg-white/10" />
        <div className="h-1.5 w-16 bg-white/10 rounded-full" />
      </div>

      <div className="w-[80px] flex justify-end">
        <div className="h-6 px-3 w-[80px] rounded-md bg-[#916AFF] flex items-center justify-center shadow-[0_0_15px_-3px_rgba(145,106,255,0.4)]">
          <div className="h-1.5 w-full bg-white/40 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function CmsWindow() {
  return (
    <div className="absolute h-[450px] left-0 top-0 w-[529px]">
      {/* Content Wrapper */}
      <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-[#1f1f1f]">
        <CmsHeader />
        <CmsCanvas />
      </div>

      <WindowControls />

      <div
        aria-hidden="true"
        className="absolute border-5 border-[rgba(255,255,255,0.03)] border-solid inset-[-5px] pointer-events-none rounded-[37px] shadow-[0px_0px_48px_10px_rgba(0,0,0,0.2),0px_4px_16px_8px_rgba(0,0,0,0.1)]"
      />
    </div>
  );
}

function CmsFrame() {
  return (
    <div className="absolute h-[450px] -left-[15%] top-0 w-[529px]">
      <CmsWindow />
    </div>
  );
}

function CmsContainer() {
  return (
    <div className="absolute h-[403px] left-[70px] top-[60px] w-[534px]">
      <div className="absolute h-[450px] w-[529px] left-0 top-0 scale-[0.95] origin-top-left">
        <CmsFrame />
      </div>
    </div>
  );
}

function LayoutIconVector() {
  return (
    <div className="text-white">
      <Layout size={44} strokeWidth={1.5} />
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
        <LayoutIconVector />
      </div>
    </div>
  );
}

export const CmsCard = React.memo(function CmsCard() {
  return (
    <div className="bg-[rgba(26,26,26,0.4)] backdrop-blur-[7px] content-stretch flex flex-col gap-[10px] items-center justify-end overflow-clip px-[51px] py-[41px] relative rounded-[50px] w-[620px] h-[520px] shadow-2xl shrink-0">
      {/* CMS Interface Mockup */}
      <CmsContainer />

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
          System CMS
        </p>
      </div>
    </div>
  );
});

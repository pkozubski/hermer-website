import React from "react";
import {
  MessageSquare,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
} from "lucide-react";
import svgPaths from "../../imports/svg-jsem1yknox";

// --- Internal Mock UI Components ---

function DynamicIsland() {
  return (
    <div className="absolute top-[11px] left-1/2 -translate-x-1/2 h-[25px] w-[80px] bg-black rounded-full z-50 flex items-center justify-between px-2"></div>
  );
}

function SocialPost() {
  return (
    <div className="flex flex-col gap-3 p-4">
      {/* Post Header */}
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-full bg-linear-to-tr from-pink-500 to-orange-400" />
        <div className="flex flex-col gap-1">
          <div className="h-2 w-24 bg-linear-to-r from-white/30 to-transparent rounded-full" />
          <div className="h-1.5 w-16 bg-linear-to-r from-white/10 to-transparent rounded-full" />
        </div>
        <div className="ml-auto text-white/40">...</div>
      </div>

      {/* Post Content (Image) */}
      <div className="aspect-4/5 w-full rounded-xl bg-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20" />
        {/* Abstract Shapes */}
        <div className="absolute top-1/4 left-1/4 size-24 rounded-full bg-blue-500/30 blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 size-32 rounded-full bg-purple-500/30 blur-2xl" />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mt-1">
        <div className="flex gap-4">
          <Heart size={20} className="text-white" />
          <MessageCircle size={20} className="text-white" />
          <Send size={20} className="text-white" />
        </div>
        <Bookmark size={20} className="text-white" />
      </div>

      {/* Likes & Caption placeholders */}
      <div className="space-y-2 mt-1">
        <div className="h-2 w-32 bg-linear-to-r from-white/30 to-transparent rounded-full" />
        <div className="h-2 w-full bg-linear-to-r from-white/20 to-transparent rounded-full" />
        <div className="h-2 w-2/3 bg-linear-to-r from-white/20 to-transparent rounded-full" />
      </div>
    </div>
  );
}

function AbstractPhoneFrame() {
  return (
    <div className="absolute h-[630px] left-1/2 -translate-x-1/2 top-[40px] w-[320px]">
      {/* Abstract Border/Shadow Frame (Copied from WebDevCard) */}
      <div className="absolute contents left-0 top-0">
        <div className="absolute bg-[#262626] h-full w-full left-0 rounded-[40px] top-0">
          <div
            aria-hidden="true"
            className="absolute border-5 border-[rgba(255,255,255,0.03)] border-solid inset-[-5px] pointer-events-none rounded-[48px] shadow-[0px_0px_48px_10px_rgba(0,0,0,0.2),0px_4px_16px_8px_rgba(0,0,0,0.1)]"
          />
        </div>
      </div>

      {/* Internal Content Container */}
      <div className="absolute inset-0 bg-[#262626] overflow-hidden rounded-[40px]">
        <DynamicIsland />
        {/* Content */}
        <div className="pt-8 pb-8 overflow-hidden h-full relative">
          <SocialPost />
          <div className="h-px w-full bg-white/10 my-2" />
          {/* Partial Next Post */}
          <div className="flex flex-col gap-3 p-4 opacity-50">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-linear-to-tr from-blue-500 to-cyan-400" />
              <div className="flex flex-col gap-1">
                <div className="h-2 w-24 bg-white/20 rounded-full" />
                <div className="h-1.5 w-16 bg-white/10 rounded-full" />
              </div>
            </div>
            <div className="aspect-square w-full rounded-xl bg-neutral-800" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneContainer() {
  return (
    <div className="absolute h-[500px] w-full top-0 scale-[0.65] origin-top">
      <AbstractPhoneFrame />
    </div>
  );
}

function MessageIconVector() {
  return (
    <div className="text-white">
      <MessageSquare size={44} strokeWidth={1.5} />
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
        <MessageIconVector />
      </div>
    </div>
  );
}

export function SocialMediaCard() {
  return (
    <div className="bg-[rgba(26,26,26,0.4)] backdrop-blur-[7px] content-stretch flex flex-col gap-[10px] items-center justify-end overflow-clip px-[51px] py-[41px] relative rounded-[50px] w-[620px] h-[520px] shadow-2xl shrink-0">
      {/* iPhone Mockup */}
      <PhoneContainer />

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
        <div className="-rotate-2 flex-none origin-bottom-right -mr-2">
          <FloatingIcon />
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[32px] text-white">
          Social Media
        </p>
      </div>
    </div>
  );
}

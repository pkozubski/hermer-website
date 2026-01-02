import React from "react";
import { InteractiveCodeEditor } from "../ui/InteractiveCodeEditor";

export const WebsiteVisual = () => (
  <div className="relative h-full w-full">
    {/* Light gradient background matching other offer visuals */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#f5f3ff] via-white to-[#ede9fe]" />
    <div className="absolute -top-10 right-0 h-52 w-52 rounded-full bg-[#916AFF]/20 blur-[100px] animate-float-slow" />
    <div className="absolute -bottom-12 left-0 h-52 w-52 rounded-full bg-indigo-200/40 blur-[100px] animate-float-reverse" />

    <div className="relative h-full p-4 sm:p-6 flex flex-col gap-4">
      {/* Header Bar */}
      <div className="flex items-center justify-between bg-white/90 border border-[#916AFF]/20 rounded-2xl px-4 py-3 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#916AFF]" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#916AFF]">
            Live studio
          </span>
        </div>
        <span className="font-mono text-[10px] text-slate-400">build v4.2</span>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-4">
        {/* Code Editor */}
        <div className="relative min-h-[180px]">
          <InteractiveCodeEditor
            variant="default"
            tone="color"
            className="h-full w-full"
          />
          <div className="absolute -right-2 -bottom-2 rounded-full bg-[#916AFF] text-white text-[9px] font-semibold px-2.5 py-1 shadow-lg shadow-[#916AFF]/30">
            LIVE
          </div>
        </div>

        {/* Right Side Panels - Desktop Only */}
        <div className="hidden lg:flex flex-col gap-3 min-h-0">
          {/* Layout Panel */}
          <div className="rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-4 flex-1 shadow-sm">
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">
              Layout
            </div>
            <div className="mt-3 space-y-2">
              <div className="h-2 w-3/4 rounded bg-slate-200" />
              <div className="h-2 w-1/2 rounded bg-slate-100" />
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="h-12 rounded-lg border border-slate-200 bg-slate-50" />
                <div className="h-12 rounded-lg border border-slate-200 bg-slate-50" />
              </div>
            </div>
          </div>

          {/* Performance Panel */}
          <div className="rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-4 shadow-sm">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] font-medium">
              <span className="text-slate-500">Performance</span>
              <span className="text-[#916AFF] font-bold">98/100</span>
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[#916AFF] to-indigo-400" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="h-8 rounded-lg border border-slate-200 bg-slate-50" />
              <div className="h-8 rounded-lg border border-slate-200 bg-slate-50" />
              <div className="h-8 rounded-lg border border-slate-200 bg-slate-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="flex items-center justify-between rounded-full border border-slate-200/80 bg-white/80 backdrop-blur-sm px-4 py-2 text-[10px] uppercase tracking-[0.2em] shadow-sm">
        <span className="text-slate-500">Core Web Vitals</span>
        <span className="text-[#916AFF] font-bold">98/100</span>
      </div>
    </div>
  </div>
);

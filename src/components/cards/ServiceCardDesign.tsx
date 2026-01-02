import React from "react";
import { InteractiveDesignWorkspace } from "./ui/InteractiveDesignWorkspace";

interface ServiceCardDesignProps {
  index: number;
}

export const ServiceCardDesign: React.FC<ServiceCardDesignProps> = ({
  index,
}) => {
  return (
    <div className="group relative w-full h-full bg-[#0B0F17] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-800/50">
      {/* --- BACKGROUND EFFECTS --- */}
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-[#0F172A] z-0">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      {/* Glows already inside the workspace, but we add some container level ones too */}
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-purple-900/20 to-transparent pointer-events-none" />

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Header - Minimal, simplified because the workspace has its own header */}
        <div className="px-8 pt-8 lg:px-12 lg:pt-10 flex justify-between items-start mb-4">
          <div className="flex flex-col">
            <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-purple-300/50 mb-2">
              Visual Experience
            </span>
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-white leading-tight">
              UI / UX{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                Design
              </span>
              <span className="block w-12 h-1 bg-purple-500 mt-3 rounded-full"></span>
            </h3>
          </div>

          <span className="font-display text-6xl font-bold text-slate-800/30 select-none">
            0{index + 1}
          </span>
        </div>

        {/* Workspace Area - Takes up remaining space */}
        <div className="flex-1 w-full relative overflow-hidden pb-4 px-2 lg:px-4">
          <InteractiveDesignWorkspace />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Layout, FileText, Settings, PenTool } from "lucide-react";
import { CardFrame } from "./ui/CardFrame";

export const CmsCard: React.FC = () => {
  return (
    <CardFrame title="CMS" type="browser">
      <div className="flex h-full bg-neutral-900">
        {/* Sidebar - Dark WordPress Style */}
        <div className="w-12 bg-[#1A1A1A] flex flex-col items-center py-4 gap-4 shrink-0 border-r border-white/5">
          <div className="w-6 h-6 bg-[#916AFF] rounded mb-2 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">W</span>
          </div>
          <div className="p-1.5 rounded hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer">
            <Layout size={14} />
          </div>
          <div className="p-1.5 rounded hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer bg-[#916AFF] text-white my-1">
            <FileText size={14} />
          </div>
          <div className="p-1.5 rounded hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer">
            <PenTool size={14} />
          </div>
          <div className="mt-auto p-1.5 rounded hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer">
            <Settings size={14} />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col bg-neutral-900 h-full">
          {/* Top Bar */}
          <div className="h-10 bg-neutral-800 border-b border-white/5 flex items-center justify-between px-4 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-sans font-medium text-neutral-400">
                Dodaj nowy wpis
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-neutral-500 font-medium">
                Szkic
              </span>
              <button className="bg-[#916AFF] text-white text-[9px] font-sans font-medium px-3 py-1 rounded-sm hover:bg-[#7e55ee] transition-colors shadow-sm shadow-[#916AFF]/20">
                Opublikuj
              </button>
            </div>
          </div>

          {/* Editor Area */}
          <div className="flex-1 p-4 overflow-hidden">
            <div className="w-full max-w-[200px] mx-auto bg-neutral-800/50 border border-white/5 shadow-sm min-h-full rounded-sm p-4 flex flex-col gap-2">
              {/* Skeleton Title */}
              <div className="h-3 bg-neutral-700/50 rounded-sm w-3/4 mb-2 animate-pulse"></div>

              {/* Skeleton Content Paragraphs */}
              <div className="space-y-1.5">
                <div className="h-1.5 bg-neutral-700/30 rounded-full w-full"></div>
                <div className="h-1.5 bg-neutral-700/30 rounded-full w-[90%]"></div>
                <div className="h-1.5 bg-neutral-700/30 rounded-full w-[95%]"></div>
              </div>

              {/* Block Placeholder */}
              <div className="mt-2 border border-white/10 border-dashed rounded p-2 flex items-center gap-2 text-neutral-600">
                <div className="w-4 h-4 rounded bg-neutral-700"></div>
                <div className="h-1 w-12 bg-neutral-700 rounded-full"></div>
              </div>

              <div className="space-y-1.5 mt-2">
                <div className="h-1.5 bg-neutral-700/30 rounded-full w-[85%]"></div>
                <div className="h-1.5 bg-neutral-700/30 rounded-full w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardFrame>
  );
};

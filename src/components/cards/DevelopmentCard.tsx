import React from "react";
import { CardFrame } from "./ui/CardFrame";

const CODE_SNIPPET = `import { Hermer } from 'Agency';

export async function boost() {
  const result = await Hermer.create({
    quality: "premium",
    style: "creative"
  });

  return result.success;
}`;

export const DevelopmentCard: React.FC = () => {
  return (
    <CardFrame title="code.tsx" type="window">
      <div className="p-4 font-mono text-[10px] leading-relaxed text-slate-500 relative bg-slate-50/50 h-full">
        {/* Glow behind cursor */}
        <div className="absolute top-[60%] right-[30%] w-20 h-20 bg-[#916AFF]/10 blur-xl rounded-full pointer-events-none"></div>

        <div className="whitespace-pre overflow-hidden relative z-10">
          {CODE_SNIPPET.split("\n").map((line, i) => (
            <div key={i} className="flex">
              <span className="w-6 text-slate-300 select-none text-right mr-3 shrink-0">
                {i + 1}
              </span>
              <span
                className={`${
                  line.includes("import") ||
                  line.includes("export") ||
                  line.includes("return")
                    ? "text-[#916AFF] font-bold"
                    : line.includes("const") || line.includes("function")
                      ? "text-slate-800"
                      : line.includes('"')
                        ? "text-emerald-600"
                        : "text-slate-600"
                }`}
              >
                {line}
              </span>
            </div>
          ))}
          {/* Accent Cursor */}
          <div className="flex mt-0.5">
            <span className="w-6 mr-3"></span>
            <span className="w-1.5 h-3 bg-[#916AFF] animate-pulse shadow-[0_0_8px_rgba(145,106,255,0.6)]"></span>
          </div>
        </div>
      </div>
    </CardFrame>
  );
};

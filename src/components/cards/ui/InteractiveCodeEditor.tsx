import React, { useEffect, useState } from "react";

interface InteractiveCodeEditorProps {
  className?: string;
  tone?: "color" | "mono";
  variant?: "default" | "glass";
}

export const InteractiveCodeEditor: React.FC<InteractiveCodeEditorProps> = ({
  className = "",
  tone = "color",
  variant = "default",
}) => {
  const [code, setCode] = useState("");
  // The code we want to "type" out
  const fullCode = `interface Props {
  title: string;
  isActive: boolean;
}

export const Card = ({ title }: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-slate-900"
    >
      <h2 className="text-xl font-bold">
        {title}
      </h2>
      <Button variant="primary">
        Explore
      </Button>
    </motion.div>
  );
};`;

  useEffect(() => {
    let i = 0;
    // Faster typing speed
    const interval = setInterval(() => {
      setCode(fullCode.substring(0, i));
      i++;
      if (i > fullCode.length) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const variantStyles = EDITOR_VARIANTS[variant];
  const theme = CODE_THEMES[tone];

  return (
    <div
      className={`relative overflow-hidden flex flex-col ${variantStyles.container} ${className}`}
    >
      {/* Window Controls */}
      <div
        className={`px-4 py-3 flex items-center gap-2 ${variantStyles.header}`}
      >
        {variantStyles.controls.map((controlClass, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={`control-${index}`}
            className={`w-3 h-3 rounded-full ${controlClass}`}
          />
        ))}

        <div className={`ml-4 text-xs font-mono ${variantStyles.title}`}>
          Architecture.tsx
        </div>
      </div>

      {/* Code Area */}
      <div className="p-3 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-hidden relative flex-1 flex flex-col">
        {/* Glow effect behind code */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] blur-[80px] rounded-full pointer-events-none ${variantStyles.glow}`}
        />

        <div className="relative z-10 flex-1 overflow-auto scrollbar-hide">
          <pre className={`whitespace-pre ${theme.base}`}>
            {/* We could enhance this with actual highlighting if Prism was available/configured, 
                 but for now let's manually style some parts or just keep it clean and typed. */}
            <code
              dangerouslySetInnerHTML={{ __html: highlightCode(code, theme) }}
            />
            <span
              className={`w-1.5 h-3 sm:w-2 sm:h-4 inline-block align-middle ml-1 animate-pulse ${variantStyles.cursor}`}
            />
          </pre>
        </div>
      </div>

      {/* Footer / Status Bar */}
      <div
        className={`absolute bottom-0 inset-x-0 py-1 px-4 flex justify-between items-center text-[10px] font-mono ${variantStyles.footer}`}
      >
        <span>TypeScript React</span>
        <span>Ln 12, Col 34</span>
      </div>
    </div>
  );
};

// Basic syntax highlighting helper
const highlightCode = (code: string, theme: CodeTheme) => {
  if (!code) return "";

  // Single-pass regex to avoid replacing inside already generated HTML
  // Order: Comments -> Strings -> Keywords -> Components -> Props -> Punctuation
  return code.replace(
    /(\/\/.*)|("[^"]*")|\b(const|return|export|default|function|interface|boolean|string|number|void)\b|(<[a-zA-Z0-9\.]+(?:\s|>)|\/?>)|(<\/[a-zA-Z0-9\.]+>)|([{}:;])|([a-zA-Z0-9]+)=/g,
    (match) => {
      // Escape HTML chars in the content to be safe (though for this specific controlled snippet it's mostly fine)
      const safeMatch = match.replace(/</g, "&lt;").replace(/>/g, "&gt;");

      if (match.startsWith("//"))
        return `<span class="${theme.comment}">${safeMatch}</span>`; // Comment
      if (match.startsWith('"'))
        return `<span class="${theme.string}">${safeMatch}</span>`; // String
      if (
        /^(const|return|export|default|function|interface|boolean|string|number|void)$/.test(
          match
        )
      )
        return `<span class="${theme.keyword}">${safeMatch}</span>`; // Keyword
      if (match.startsWith("<") && !match.startsWith("</"))
        return `<span class="${theme.tag}">${safeMatch}</span>`; // Open Tag
      if (match.startsWith("</"))
        return `<span class="${theme.tag}">${safeMatch}</span>`; // Close Tag
      if (/^[{}:;]$/.test(match))
        return `<span class="${theme.punctuation}">${safeMatch}</span>`; // Punctuation
      if (match.endsWith("="))
        return `<span class="${theme.prop}">${safeMatch}</span>`; // Prop

      return safeMatch;
    }
  );
};

type CodeTheme = {
  base: string;
  keyword: string;
  string: string;
  tag: string;
  comment: string;
  punctuation: string;
  prop: string;
};

const CODE_THEMES: Record<NonNullable<InteractiveCodeEditorProps["tone"]>, CodeTheme> =
  {
    color: {
      base: "text-slate-300",
      keyword: "text-purple-400 font-bold",
      string: "text-emerald-400",
      tag: "text-yellow-400",
      comment: "text-slate-500 italic",
      punctuation: "text-slate-400",
      prop: "text-indigo-300",
    },
    mono: {
      base: "text-slate-200",
      keyword: "text-slate-200 font-semibold",
      string: "text-slate-300",
      tag: "text-slate-200",
      comment: "text-slate-400 italic",
      punctuation: "text-slate-400",
      prop: "text-slate-300",
    },
  };

const EDITOR_VARIANTS: Record<
  NonNullable<InteractiveCodeEditorProps["variant"]>,
  {
    container: string;
    header: string;
    footer: string;
    title: string;
    controls: string[];
    glow: string;
    cursor: string;
  }
> = {
  default: {
    container:
      "bg-[#0f1117] rounded-xl border border-slate-800/50 shadow-2xl",
    header: "bg-[#1a1d24] border-b border-slate-800/50",
    footer: "bg-[#1a1d24] border-t border-slate-800/50 text-slate-600",
    title: "text-slate-500",
    controls: [
      "bg-red-500/80 hover:bg-red-500 transition-colors shadow-[0_0_8px_rgba(239,68,68,0.4)]",
      "bg-yellow-500/80 hover:bg-yellow-500 transition-colors shadow-[0_0_8px_rgba(234,179,8,0.4)]",
      "bg-green-500/80 hover:bg-green-500 transition-colors shadow-[0_0_8px_rgba(34,197,94,0.4)]",
    ],
    glow: "bg-blue-500/10",
    cursor: "bg-blue-500",
  },
  glass: {
    container:
      "bg-white/5 rounded-[24px] border border-white/10 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.65)] backdrop-blur-xl",
    header: "bg-white/5 border-b border-white/10",
    footer: "bg-white/5 border-t border-white/10 text-white/50",
    title: "text-white/60",
    controls: [
      "bg-white/25 border border-white/40",
      "bg-white/10 border border-white/30",
      "bg-white/15 border border-white/30",
    ],
    glow: "bg-white/10",
    cursor: "bg-white/70",
  },
};

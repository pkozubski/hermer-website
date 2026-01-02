import React, { useState, useRef, useEffect } from "react";
import {
  Folder,
  Frame,
  Component,
  Zap,
  MousePointer2,
  Minimize2,
  Maximize2,
  Share2,
  Play,
  Type,
  Grid,
  Square,
  Circle,
  PenTool,
  Move,
  Settings,
  Users,
  Clock,
  Layout,
} from "lucide-react";

interface InteractiveDesignWorkspaceProps {
  className?: string;
}

export const InteractiveDesignWorkspace: React.FC<
  InteractiveDesignWorkspaceProps
> = ({ className = "" }) => {
  const [isHiFi, setIsHiFi] = useState(false);
  const [activeLayer, setActiveLayer] = useState("Prototyping");
  const canvasRef = useRef<HTMLDivElement>(null);

  // Design cursor position (simulated movement)
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });

  // Card tilt effect state
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Simulate other designer cursor movement
    const interval = setInterval(() => {
      setCursorPos({
        x: 40 + Math.random() * 40,
        y: 30 + Math.random() * 40,
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    // Tilt calculation
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg tilt
    const rotateY = ((x - centerX) / centerX) * 5;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className={`perspective-[2000px] w-full h-full flex items-center justify-center ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Karta Główna (Glassmorphism Container) */}
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl h-[500px] lg:h-[600px] rounded-3xl overflow-hidden transition-transform duration-200 ease-out border border-white/20 shadow-2xl"
        style={{
          backgroundColor: "rgba(15, 23, 42, 0.4)", // Slightly clearer deep background
          backdropFilter: "blur(20px)",
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Ambient Lights (Mesh Gradients behind) */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] animate-pulse pointer-events-none -z-10" />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[100px] animate-pulse pointer-events-none -z-10"
          style={{ animationDelay: "2s" }}
        />

        {/* --- UI Layout --- */}
        <div className="flex h-full flex-col text-slate-200 font-sans select-none">
          {/* Top Toolbar */}
          <div className="h-12 border-b border-white/10 flex items-center px-4 justify-between bg-white/5 backdrop-blur-md z-20">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="h-4 w-[1px] bg-white/20 mx-2" />
              <MousePointer2 size={16} className="text-blue-400" />
              <Frame
                size={16}
                className="text-slate-400 hover:text-white transition-colors"
              />
              <Square
                size={16}
                className="text-slate-400 hover:text-white transition-colors"
              />
              <PenTool
                size={16}
                className="text-slate-400 hover:text-white transition-colors"
              />
              <Type
                size={16}
                className="text-slate-400 hover:text-white transition-colors"
              />
            </div>

            <div className="items-center gap-2 hidden lg:flex font-mono text-xs text-slate-400">
              <span>Hermer Website / Homepage / v2.0</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-[2px] bg-black/20 rounded-lg p-1">
                <button
                  onClick={() => setIsHiFi(false)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                    !isHiFi
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Wireframe
                </button>
                <button
                  onClick={() => setIsHiFi(true)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                    isHiFi
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Final UI
                </button>
              </div>
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-[10px] font-bold ring-2 ring-black/50">
                P
              </div>
              <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-lg shadow-blue-500/20">
                <Share2 size={12} /> Share
              </button>
              <button className="text-slate-400 hover:text-white">
                <Play size={16} />
              </button>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* A. Lewy Panel (Layers) */}
            <div className="w-64 border-r border-white/10 bg-white/5 backdrop-blur-sm flex flex-col hidden lg:flex z-10">
              <div className="p-3 border-b border-white/10 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Layers
              </div>
              <div className="flex-1 overflow-y-auto py-2">
                {[
                  { name: "Discovery", icon: Folder, type: "folder" },
                  { name: "Wireframing", icon: Frame, type: "frame" },
                  { name: "UI System", icon: Component, type: "component" },
                  { name: "Prototyping", icon: Zap, type: "interaction" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className={`px-4 py-2 flex items-center gap-3 text-sm cursor-pointer border-l-2 transition-colors ${
                      activeLayer === item.name ||
                      (activeLayer === "" && item.name === "Wireframing")
                        ? "bg-blue-500/10 border-blue-500 text-white"
                        : "border-transparent text-slate-400 hover:bg-white/5 hover:text-slate-200"
                    }`}
                    onMouseEnter={() => setActiveLayer(item.name)}
                  >
                    <item.icon
                      size={14}
                      className={
                        activeLayer === item.name
                          ? "text-blue-400"
                          : "text-slate-500"
                      }
                    />
                    {item.name}
                  </div>
                ))}

                <div className="mt-4 px-4 text-[10px] text-slate-600 font-mono uppercase">
                  Assets
                </div>
                <div className="mt-2 px-4 py-1 flex items-center gap-3 text-sm text-slate-400 hover:text-white cursor-pointer">
                  <Grid size={14} /> Grid System
                </div>
              </div>
            </div>

            {/* C. Środek (Canvas) */}
            <div className="flex-1 relative bg-[#0F172A]/50 overflow-hidden flex items-center justify-center p-8 lg:p-12">
              {/* Dot Grid Background */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(#4b5563 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Design Workspace Content */}
              <div
                ref={canvasRef}
                className="relative w-full max-w-2xl aspect-video lg:aspect-16/10 bg-slate-900 rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/10 group/canvas transition-all duration-700 ease-in-out"
                style={{
                  transform: "translateZ(20px)",
                }}
              >
                {/* Smart Guides (Horizontal & Vertical Lines on Hover) - Simulated with Group Hover for now or precise tracking if heavy */}
                <div className="absolute top-0 left-12 bottom-0 w-px bg-red-500/50 hidden group-hover/canvas:block pointer-events-none z-50">
                  <div className="absolute top-1/2 left-1 bg-red-500 text-[9px] text-white px-1 rounded">
                    540px
                  </div>
                </div>
                <div className="absolute top-24 left-0 right-0 h-px bg-red-500/50 hidden group-hover/canvas:block pointer-events-none z-50"></div>

                {/* Mockup Content */}
                <div className="w-full h-full flex flex-col">
                  {/* Mockup Header */}
                  <div
                    className={`h-12 border-b flex items-center justify-between px-6 transition-colors duration-500 ${
                      isHiFi
                        ? "bg-white border-slate-100"
                        : "bg-slate-800 border-slate-700"
                    }`}
                  >
                    <div
                      className={`h-4 w-24 rounded-full ${
                        isHiFi ? "bg-slate-200" : "bg-slate-700"
                      }`}
                    ></div>
                    <div className="flex gap-2">
                      <div
                        className={`h-4 w-12 rounded-full ${
                          isHiFi ? "bg-slate-100" : "bg-slate-700"
                        }`}
                      ></div>
                      <div
                        className={`h-4 w-12 rounded-full ${
                          isHiFi ? "bg-slate-100" : "bg-slate-700"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* Mockup Body */}
                  <div
                    className={`flex-1 p-8 flex items-center gap-8 transition-colors duration-500 relative ${
                      isHiFi ? "bg-slate-50" : "bg-slate-800/50"
                    }`}
                  >
                    {/* Text Column */}
                    <div className="flex-1 space-y-4">
                      <div
                        className={`h-8 w-3/4 rounded-lg transition-all duration-500 ${
                          isHiFi
                            ? "bg-slate-900 shadow-sm"
                            : "bg-slate-700 border border-slate-600"
                        }`}
                      ></div>
                      <div
                        className={`h-4 w-full rounded transition-all duration-500 delay-75 ${
                          isHiFi ? "bg-slate-300" : "bg-slate-700/50"
                        }`}
                      ></div>
                      <div
                        className={`h-4 w-5/6 rounded transition-all duration-500 delay-100 ${
                          isHiFi ? "bg-slate-300" : "bg-slate-700/50"
                        }`}
                      ></div>

                      <div
                        className={`mt-6 h-10 w-32 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-500 delay-150 ${
                          isHiFi
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                            : "border border-slate-500 text-slate-400"
                        }`}
                      >
                        {isHiFi ? "Get Started" : "Button"}
                      </div>
                    </div>

                    {/* Image Column */}
                    <div
                      className={`w-1/3 aspect-square rounded-2xl transition-all duration-500 flex items-center justify-center ${
                        isHiFi
                          ? "bg-linear-to-br from-indigo-500 to-purple-600 shadow-xl"
                          : "border-2 border-dashed border-slate-600 bg-slate-800"
                      }`}
                    >
                      <div
                        className={`transition-opacity duration-500 ${
                          isHiFi
                            ? "opacity-100 text-white"
                            : "opacity-20 text-slate-500"
                        }`}
                      >
                        <Layout size={32} />
                      </div>
                    </div>

                    {/* Change Comment Overlay */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-slate-900 text-xs px-3 py-1.5 rounded-r-xl rounded-tl-xl shadow-lg border border-slate-200 z-30 animate-bounce cursor-help group/comment">
                      <span className="font-bold text-blue-600">Comment:</span>{" "}
                      "Może powiększymy font o 2px? 😉"
                    </div>
                  </div>
                </div>
              </div>

              {/* Lead Designer Cursor (Animated) */}
              <div
                className="absolute z-50 pointer-events-none transition-all duration-2000 ease-in-out"
                style={{
                  left: `${cursorPos.x}%`,
                  top: `${cursorPos.y}%`,
                }}
              >
                <MousePointer2
                  className="text-pink-500 fill-pink-500 transform rotate-[-15deg]"
                  size={24}
                />
                <div className="ml-4 -mt-2 bg-pink-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold whitespace-nowrap shadow-sm">
                  Lead Designer
                </div>
              </div>
            </div>

            {/* B. Prawy Panel (Properties) */}
            <div className="w-64 border-l border-white/10 bg-white/5 backdrop-blur-sm hidden lg:flex flex-col z-10">
              <div className="flex border-b border-white/10">
                <div className="flex-1 py-3 text-center text-xs font-medium text-white border-b-2 border-white">
                  Design
                </div>
                <div className="flex-1 py-3 text-center text-xs font-medium text-slate-500">
                  Prototype
                </div>
              </div>

              <div className="p-4 space-y-6">
                {/* Align Stats */}
                <div>
                  <div className="flex justify-between mb-2">
                    <div className="text-[10px] text-slate-500 font-mono uppercase">
                      Alignment
                    </div>
                  </div>
                  <div className="flex gap-2 justify-between opacity-50">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded bg-slate-700/50 hover:bg-slate-600 transition-colors"
                      />
                    ))}
                  </div>
                </div>

                {/* Timeline Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-slate-500 font-mono uppercase">
                      Timeline
                    </span>
                    <span className="text-xs text-white">2-4 Weeks</span>
                  </div>
                  <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-blue-500 rounded-full" />
                  </div>
                </div>

                {/* Team */}
                <div>
                  <span className="text-[10px] text-slate-500 font-mono uppercase mb-2 block">
                    Team
                  </span>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-[#1e293b] bg-slate-600 relative overflow-hidden"
                        title="Designer"
                      >
                        <img
                          src={`https://i.pravatar.cc/100?img=${10 + i}`}
                          alt="Avatar"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#1e293b] rounded-full"></div>
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-[#1e293b] bg-slate-800 flex items-center justify-center text-[10px] text-slate-400">
                      +2
                    </div>
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <span className="text-[10px] text-slate-500 font-mono uppercase mb-2 block">
                    Compatible With
                  </span>
                  <div className="flex gap-3 text-slate-400">
                    <div
                      className="w-8 h-8 bg-black/40 rounded flex items-center justify-center hover:text-white transition-colors cursor-help"
                      title="Figma"
                    >
                      F
                    </div>
                    <div
                      className="w-8 h-8 bg-black/40 rounded flex items-center justify-center hover:text-white transition-colors cursor-help"
                      title="Adobe Source"
                    >
                      As
                    </div>
                    <div
                      className="w-8 h-8 bg-black/40 rounded flex items-center justify-center hover:text-white transition-colors cursor-help"
                      title="Sketch"
                    >
                      S
                    </div>
                  </div>
                </div>

                {/* Impact Pseudo-Code */}
                <div className="bg-black/30 rounded-lg p-3 font-mono text-[10px] text-slate-400 border border-white/5">
                  <div className="text-purple-400 mb-1">Impact {"{"}</div>
                  <div className="pl-2 flex justify-between">
                    <span>Conversion:</span>{" "}
                    <span className="text-green-400">High</span>;
                  </div>
                  <div className="pl-2 flex justify-between">
                    <span>UX:</span>{" "}
                    <span className="text-blue-400">Intuitive</span>;
                  </div>
                  <div className="pl-2 flex justify-between">
                    <span>Style:</span>{" "}
                    <span className="text-pink-400">Modern</span>;
                  </div>
                  <div className="text-purple-400 mt-1">{"}"}</div>
                </div>

                {/* CTA Button */}
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium text-sm transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group">
                  Export Project{" "}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple internal icon for demo
const ArrowRight = ({
  size,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

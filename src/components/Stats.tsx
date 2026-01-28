"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  ArrowUpRight,
  Users,
  MessageSquareHeart,
  PenTool,
  Globe,
  Cpu,
  MousePointer2,
  Star,
  Layout,
  Type,
  Box,
  Hash,
} from "lucide-react";

// --- Shared Components ---

const CardWrapper = ({
  children,
  className = "",
  hoverEffect = true,
  colSpan = "col-span-1",
}: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative group overflow-hidden rounded-3xl bg-neutral-900/50 backdrop-blur-md border border-white/10 shadow-xl shadow-black/20 ${colSpan} ${className}`}
    >
      {hoverEffect && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      <div className="relative h-full w-full z-10">{children}</div>
    </motion.div>
  );
};

// --- Card 1: Sales Growth (14 lat) ---
const SalesCard = () => {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-[400px]">
      {/* Background Blob */}
      <div className="absolute inset-0 w-full h-full opacity-40 pointer-events-none mix-blend-multiply">
        <motion.div
          className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] rounded-full blur-[80px] bg-purple-200"
          animate={{ x: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full blur-[80px] bg-indigo-200"
          animate={{ x: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start">
        <div className="flex items-baseline gap-2">
          <h2 className="text-8xl md:text-9xl font-bold leading-none text-white tracking-tighter">
            14
          </h2>
          <span className="text-2xl md:text-3xl font-medium text-neutral-400">
            lat
          </span>
        </div>
        <p className="text-xl md:text-2xl mt-4 font-medium leading-tight text-neutral-300 max-w-sm">
          Rozwijamy sprzedaż naszych klientów.
        </p>
      </div>

      {/* Visual: Chart */}
      <div className="absolute inset-x-0 bottom-0 h-[50%] z-0 flex items-end justify-center overflow-hidden opacity-60 pointer-events-none">
        {/* Rising Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-1.5 h-1.5 bg-purple-600 rounded-full blur-[1px]"
            style={{ left: `${10 + ((i * 12) % 80)}%` }}
            animate={{ y: [0, -250], opacity: [0, 0.8, 0], scale: [0, 1.2, 0] }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
          />
        ))}
        <svg
          viewBox="0 0 800 400"
          className="w-full h-full translate-y-2"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 350 C 150 350, 200 200, 350 250 S 550 100, 650 120 S 750 0, 800 50 V 400 H 0 Z"
            fill="url(#chartGrad)"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "bottom" }}
          />
          <motion.path
            d="M0 350 C 150 350, 200 200, 350 250 S 550 100, 650 120 S 750 0, 800 50"
            fill="none"
            stroke="#9333ea"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </div>
  );
};

// --- Card 2: Portfolio / Projects (700+) ---
const ProjectsCard = () => {
  const projects = [
    { color: "bg-emerald-400", title: "Strony www", y: 0 },
    { color: "bg-blue-500", title: "E-commerce", y: 15 },
    { color: "bg-orange-400", title: "B2B", y: 30 },
  ];

  return (
    <div className="p-8 h-full flex flex-col relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-baseline gap-1">
          <h3 className="text-5xl font-bold text-white">700</h3>
          <span className="text-3xl font-bold text-[#916AFF]">+</span>
        </div>
        <p className="text-neutral-400 font-medium mt-2">
          Zrealizowanych projektów
        </p>
      </div>

      <div className="absolute right-[-20px] bottom-[-40px] w-[300px] h-[300px] flex flex-col items-center justify-center perspective-1000">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className={`absolute w-48 h-32 rounded-xl shadow-lg border border-white/20 ${p.color} flex items-center justify-center`}
            style={{
              zIndex: projects.length - i,
              top: "30%",
              left: "20%",
            }}
            initial={{ rotate: -10 + i * 5, x: 0, y: 0 }}
            whileInView={{
              rotate: -15 + i * 10,
              x: i * 20,
              y: i * -15,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
          >
            <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white font-bold tracking-widest text-xs uppercase">
              {p.title}
            </div>
          </motion.div>
        ))}
      </div>
      <button className="mt-auto relative z-10 flex items-center gap-2 text-sm font-semibold text-[#916AFF] group-hover:text-white transition-colors">
        Zobacz realizacje <ArrowUpRight size={16} />
      </button>
    </div>
  );
};

// --- Card 3: Design & UX (Figma Style) ---
const DesignCard = () => {
  return (
    <div className="h-full flex flex-col relative overflow-hidden bg-[#1e1e1e] text-white font-sans select-none">
      {/* Figma-like Top Bar */}
      <div className="h-10 border-b border-white/10 flex items-center px-4 gap-4 bg-[#2c2c2c] flex-shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="h-4 w-[1px] bg-white/10 mx-1" />
        <div className="flex gap-3 text-white/50">
          <MousePointer2 size={14} className="text-blue-500 fill-blue-500" />
          <Layout size={14} className="hover:text-white transition-colors" />
          <Box size={14} className="hover:text-white transition-colors" />
          <PenTool size={14} className="hover:text-white transition-colors" />
          <Type size={14} className="hover:text-white transition-colors" />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="text-[10px] font-medium text-white/40">100%</div>
        </div>
      </div>

      {/* Figma-like Workspace */}
      <div className="flex-1 relative bg-[#1e1e1e] p-4 flex flex-col items-center justify-center overflow-hidden">
        {/* Grid Pattern Background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        ></div>

        {/* Sidebar mock (Left) */}
        <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-white/5 bg-[#2c2c2c]/50 hidden md:flex flex-col items-center py-4 gap-4">
          <div className="w-6 h-6 rounded bg-white/10"></div>
          <div className="w-6 h-6 rounded bg-white/5"></div>
          <div className="w-6 h-6 rounded bg-white/5"></div>
        </div>

        {/* Properties mock (Right) */}
        <div className="absolute right-0 top-0 bottom-0 w-16 border-l border-white/5 bg-[#2c2c2c]/50 hidden md:flex flex-col p-3 gap-3">
          <div className="w-full h-2 rounded bg-white/10"></div>
          <div className="w-2/3 h-2 rounded bg-white/5"></div>
          <div className="w-full h-20 rounded bg-white/5 mt-2"></div>
        </div>

        {/* The "Design" Element - Animated Component */}
        <motion.div
          className="relative group z-10"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Selection Label */}
          <motion.div
            className="absolute -top-6 left-0 text-[9px] text-blue-400 font-medium flex items-center gap-1 opacity-0"
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              times: [0, 0.1, 0.8, 1],
            }}
          >
            Frame 14
          </motion.div>

          {/* Selection Border */}
          <motion.div
            className="absolute -inset-1 border border-blue-500 pointer-events-none opacity-0"
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              times: [0, 0.1, 0.8, 1],
            }}
          >
            {/* Corner Handles */}
            <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-white border border-blue-500" />
            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white border border-blue-500" />
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white border border-blue-500" />
            <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-white border border-blue-500" />
          </motion.div>

          {/* Actual Component */}
          <motion.div
            className="bg-purple-600 px-5 py-2.5 shadow-2xl flex items-center gap-2 text-xs font-medium tracking-wide"
            animate={{
              backgroundColor: ["#9333ea", "#7e22ce", "#9333ea"],
              borderRadius: ["0px", "24px", "4px"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              times: [0.2, 0.5, 0.8],
            }}
          >
            <span className="text-white">Button UI</span>
            <Hash size={12} className="text-white/60" />
          </motion.div>
        </motion.div>

        {/* Fake Cursor */}
        <motion.div
          className="absolute z-50"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [20, 110, 100, 40, 20],
            y: [30, 100, 90, 180, 30],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <MousePointer2 className="w-5 h-5 text-black fill-black stroke-white drop-shadow-md" />
          <div className="bg-[#E04F47] text-white text-[9px] px-1.5 py-0.5 rounded-r-md rounded-bl-md ml-3 mt-0 font-bold shadow-sm">
            Designer
          </div>
        </motion.div>
      </div>

      {/* Bottom Info */}
      <div className="px-4 py-3 border-t border-white/10 bg-[#2c2c2c] flex justify-between items-center">
        <div>
          <h3 className="text-sm font-bold text-white">Design System</h3>
          <p className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5">
            Komponenty & Style
          </p>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></div>
        </div>
      </div>
    </div>
  );
};

// --- Card 4: Team & Reviews (Refined Double Stat Card) ---
const TeamStatsCard = () => {
  return (
    <div className="h-full flex flex-col md:flex-row relative divide-y md:divide-y-0 md:divide-x divide-white/10">
      {/* Stat 1: Team Experience */}
      <div className="flex-1 p-8 flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-[60px] opacity-40 translate-x-10 -translate-y-10 group-hover:opacity-60 transition-opacity duration-500"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
              <Users size={20} />
            </div>
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
              Eksperci
            </span>
          </div>

          <div className="flex items-baseline gap-2 mb-2">
            <motion.h3
              className="text-6xl font-bold text-white tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              9
            </motion.h3>
            <span className="text-xl font-medium text-neutral-500">lat</span>
          </div>
          <p className="text-neutral-400 text-sm font-medium leading-relaxed max-w-[240px]">
            Średnie doświadczenie specjalisty w naszym zespole.
          </p>
        </div>

        {/* Avatars */}
        <div className="relative z-10 flex items-center -space-x-3 mt-6">
          {[
            { bg: "bg-blue-200", text: "JD" },
            { bg: "bg-purple-200", text: "AK" },
            { bg: "bg-emerald-200", text: "MS" },
            { bg: "bg-orange-200", text: "PL" },
          ].map((user, i) => (
            <motion.div
              key={i}
              className={`w-10 h-10 rounded-full border-2 border-neutral-800 flex items-center justify-center text-xs font-bold text-slate-600 ${user.bg}`}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.1, zIndex: 10 }}
            >
              {user.text}
            </motion.div>
          ))}
          <div className="w-10 h-10 rounded-full border-2 border-neutral-800 bg-neutral-700 flex items-center justify-center text-xs font-bold text-neutral-400">
            +12
          </div>
        </div>
      </div>

      {/* Stat 2: Client Reviews */}
      <div className="flex-1 p-8 flex flex-col justify-between relative overflow-hidden group bg-white/5">
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-100 rounded-full blur-[60px] opacity-40 -translate-x-10 translate-y-10 group-hover:opacity-60 transition-opacity duration-500"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
              <MessageSquareHeart size={20} />
            </div>
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
              Reputacja
            </span>
          </div>

          <div className="flex items-baseline gap-2 mb-2">
            <motion.h3
              className="text-6xl font-bold text-white tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              140
            </motion.h3>
            <span className="text-3xl font-bold text-[#916AFF]">+</span>
          </div>
          <p className="text-neutral-400 text-sm font-medium leading-relaxed">
            Firm zaufało nam i wystawiło pozytywną opinię.
          </p>
        </div>

        {/* Rating Badge */}
        <div className="relative z-10 flex items-center gap-4 mt-6 bg-neutral-800 p-3 rounded-xl shadow-sm border border-white/10 max-w-fit">
          <div className="flex flex-col">
            <span className="text-xs text-neutral-400 font-semibold uppercase">
              Średnia ocen
            </span>
            <span className="text-lg font-bold text-white">4.9/5.0</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10"></div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Star size={18} className="fill-amber-400 text-amber-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Layout Component ---

export const Stats: React.FC = () => {
  return (
    <div className="bg-transparent py-20 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Bento Grid */}
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
        {/* Card 1: 14 Lat (Big) */}
        <CardWrapper colSpan="md:col-span-2 row-span-2">
          <SalesCard />
        </CardWrapper>

        {/* Card 3: Design (Tall) */}
        <CardWrapper colSpan="md:col-span-1 row-span-2">
          <DesignCard />
        </CardWrapper>

        {/* Card 2: 700+ Projects (Small) */}
        <CardWrapper colSpan="md:col-span-1 row-span-1">
          <ProjectsCard />
        </CardWrapper>

        {/* Card 4: Team & Reviews (Wide Split) */}
        <CardWrapper colSpan="md:col-span-2 row-span-1">
          <TeamStatsCard />
        </CardWrapper>

        {/* CTA / Footer Strip */}
        <motion.div
          // colSpan="md:col-span-3" // Framer motion doesn't accept colSpan prop directly unless styled
          className="md:col-span-3 rounded-3xl bg-neutral-800/80 backdrop-blur-md border border-white/10 p-8 flex flex-col md:flex-row items-center justify-between text-white shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Globe className="text-purple-300" />
            </div>
            <div>
              <h4 className="font-bold text-lg">
                Dołącz do zadowolonych klientów
              </h4>
              <p className="text-slate-400 text-sm">
                Rozpocznijmy współpracę jeszcze dzisiaj.
              </p>
            </div>
          </div>
          <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition-colors">
            Skontaktuj się z nami
          </button>
        </motion.div>
      </div>
    </div>
  );
};

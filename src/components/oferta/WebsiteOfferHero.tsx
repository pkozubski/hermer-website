"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Image as ImageIcon } from "lucide-react";

export const WebsiteOfferHero: React.FC = () => {
    return (
        <section className="w-full px-4 sm:px-8 lg:px-8 pt-40 pb-20 overflow-hidden bg-transparent isolate relative min-h-[85vh] flex items-center">
            <div className="container mx-auto max-w-[1200px] text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
                    <span className="w-2 h-2 rounded-full bg-[#916AFF]"></span>
                    Web Development
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-5xl xl:text-7xl 2xl:text-[5.5rem] leading-[1.05] text-white tracking-tight font-display font-medium mb-8">
                    Tworzymy strony internetowe, które zwiększają sprzedaż
                </h1>

                <p className="text-neutral-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed tracking-wide">
                    Posiadanie strony www ma sens tylko wtedy, gdy klient od razu rozumie, co oferujesz i łatwo przechodzi do kontaktu lub zakupu. Stworzymy dla Ciebie taką stronę. Nad całym procesem będą czuwać specjaliści z doświadczeniem.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="#pricing"
                        className="group relative px-6 py-3 sm:px-10 sm:py-5 bg-[#916AFF] text-white rounded-full font-bold text-sm sm:text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(145,106,255,0.5)] hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden"
                    >
                        <span className="relative z-10">Rozpocznij projekt</span>
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#916AFF] transition-all duration-300">
                            <ChevronRight size={18} />
                        </div>
                    </Link>
                    <Link
                        href="#projects"
                        className="px-8 py-4 sm:py-5 bg-transparent border border-white/20 text-white rounded-full font-semibold text-base transition-all duration-300 hover:border-white hover:bg-white/5 flex items-center gap-3"
                    >
                        Zobacz realizacje
                    </Link>
                </div>

                {/* Professional UI Visualization */}
                <div className="mt-20 relative mx-auto max-w-5xl">
                    <div className="aspect-[16/9] bg-[#0A0A0A] rounded-t-2xl border border-white/10 border-b-0 shadow-2xl shadow-black/50 overflow-hidden relative group">
                        {/* Browser Chrome */}
                        <div className="h-10 border-b border-white/10 bg-neutral-900 flex items-center px-4 gap-2 z-20 relative">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F57] opacity-80"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FEBC2E] opacity-80"></div>
                                <div className="w-3 h-3 rounded-full bg-[#28C840] opacity-80"></div>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <div className="px-4 py-1 rounded-md bg-white/5 text-[10px] text-neutral-500 font-mono flex items-center gap-2 border border-white/5 transition-colors group-hover:bg-white/10 group-hover:text-neutral-300">
                                    hermer.agency/projekt
                                </div>
                            </div>
                        </div>

                        {/* High-Fidelity Wireframe */}
                        <div className="relative w-full h-full p-8 md:p-12 flex flex-col">
                            {/* Subtle Grid Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                            {/* Mock Navbar */}
                            <div className="relative flex justify-between items-center mb-12 opacity-80">
                                <div className="w-8 h-8 bg-white/10 rounded-lg"></div>
                                <div className="hidden md:flex gap-8">
                                    <div className="w-20 h-2 bg-white/10 rounded-full"></div>
                                    <div className="w-20 h-2 bg-white/10 rounded-full"></div>
                                    <div className="w-20 h-2 bg-white/10 rounded-full"></div>
                                </div>
                                <div className="w-24 h-8 bg-white/5 border border-white/10 rounded-full"></div>
                            </div>

                            {/* Hero Content Layout */}
                            <div className="relative flex-1 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                                {/* Left: Copy */}
                                <div className="col-span-12 md:col-span-6 space-y-6">
                                    <div className="space-y-3">
                                        <div className="h-8 md:h-10 w-full bg-gradient-to-r from-white/10 to-transparent rounded-lg"></div>
                                        <div className="h-8 md:h-10 w-3/4 bg-gradient-to-r from-white/10 to-transparent rounded-lg"></div>
                                    </div>
                                    <div className="space-y-2 pt-2 opacity-50">
                                        <div className="h-3 w-full bg-white/10 rounded-full"></div>
                                        <div className="h-3 w-5/6 bg-white/10 rounded-full"></div>
                                    </div>
                                    <div className="pt-4 flex gap-4">
                                        <div className="w-32 h-10 bg-[#916AFF] rounded-lg shadow-lg shadow-[#916AFF]/20"></div>
                                        <div className="w-32 h-10 bg-white/5 border border-white/10 rounded-lg"></div>
                                    </div>
                                </div>

                                {/* Right: Visual Composition */}
                                <div className="col-span-12 md:col-span-6 relative h-full min-h-[200px] flex items-center justify-center">
                                    {/* Main Card */}
                                    <div className="relative z-20 w-full aspect-square md:aspect-[4/3] bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                                        {/* Card Header */}
                                        <div className="p-4 border-b border-white/5 flex justify-between items-center">
                                            <div className="w-24 h-3 bg-white/10 rounded-full"></div>
                                            <div className="w-4 h-4 bg-green-500/20 rounded-full border border-green-500/30"></div>
                                        </div>
                                        {/* Card Body - Grid */}
                                        <div className="p-4 grid grid-cols-2 gap-3 h-full">
                                            <div className="bg-white/5 rounded-lg h-24"></div>
                                            <div className="bg-white/5 rounded-lg h-24"></div>
                                            <div className="col-span-2 bg-white/5 rounded-lg h-full opacity-50"></div>
                                        </div>
                                    </div>

                                    {/* Decorative Elements (Clean) */}
                                    <div className="absolute -right-4 -bottom-4 w-3/4 h-3/4 bg-white/5 border border-white/5 rounded-xl -z-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
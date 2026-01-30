"use client";

import React from "react";
import { Zap, Smartphone, BarChartBig, LayoutDashboard } from "lucide-react";

import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";

export const FeaturesSection: React.FC = () => {
    return (
        <section className="py-24 bg-transparent">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <SplitRevealTitle
                        line1="Standard"
                        line2="Hermer"
                        className="text-white! text-5xl md:text-8xl"
                    />
                    <LineReveal
                        lines={[
                            "Jakość bez kompromisów. Poznaj filary,",
                            "na których budujemy Twoją obecność w sieci."
                        ]}
                        className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md text-left md:text-right"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Speed */}
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#916AFF]/30 transition-all duration-300 shadow-sm md:col-span-2 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <div className="w-10 h-10 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6" strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">
                                Bezkompromisowa szybkość
                            </h3>
                            <p className="text-neutral-400 leading-relaxed">
                                Optymalizujemy każdy kilobajt. Nasze strony osiągają wyniki 90+ w
                                Google PageSpeed Insights, co przekłada się na lepsze SEO i niższy
                                współczynnik odrzuceń.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 bg-white/5 rounded-xl border border-white/10 p-4 flex flex-col items-center justify-center gap-2">
                            <div className="text-4xl font-black text-green-500">98</div>
                            <div className="text-xs text-neutral-400 font-mono uppercase">
                                Performance
                            </div>
                            <div className="w-full h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                                <div className="w-[98%] h-full bg-green-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* RWD */}
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#916AFF]/30 transition-all duration-300 shadow-sm">
                        <div className="w-10 h-10 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                            <Smartphone className="w-6 h-6" strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 tracking-tight text-white">
                            Mobile First
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Projektujemy z myślą o urządzeniach mobilnych. Twoja strona będzie
                            wyglądać idealnie na każdym ekranie.
                        </p>
                    </div>

                    {/* SEO */}
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#916AFF]/30 transition-all duration-300 shadow-sm">
                        <div className="w-10 h-10 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-6">
                            <BarChartBig className="w-6 h-6" strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 tracking-tight text-white">
                            SEO Friendly
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Prawidłowa struktura nagłówków, meta tagi, mapa strony i
                            schema.org. Dajemy Ci solidny start w wynikach wyszukiwania.
                        </p>
                    </div>

                    {/* CMS */}
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#916AFF]/30 transition-all duration-300 shadow-sm md:col-span-2 flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="flex-1">
                            <div className="w-10 h-10 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-6">
                                <LayoutDashboard className="w-6 h-6" strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">
                                Intuicyjny Panel CMS
                            </h3>
                            <p className="text-neutral-400 leading-relaxed">
                                Chcesz zmienić tekst lub dodać zdjęcie? Nie potrzebujesz
                                programisty. Wdrażamy systemy (WordPress / Custom), które są
                                proste w obsłudze.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 aspect-video bg-white/5 rounded-xl border border-white/10 relative overflow-hidden">
                            {/* CMS Mockup */}
                            <div className="absolute inset-0 p-3 flex flex-col gap-2">
                                <div className="flex gap-2 mb-1">
                                    <div className="w-1/4 h-full bg-white/20 rounded"></div>
                                    <div className="w-3/4 h-full bg-white/10 rounded p-2">
                                        <div className="w-1/2 h-2 bg-white/30 rounded mb-2"></div>
                                        <div className="w-full h-1 bg-white/20 rounded mb-1"></div>
                                        <div className="w-full h-1 bg-white/20 rounded mb-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

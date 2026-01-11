"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, Image as ImageIcon } from "lucide-react";

export const WebsiteOfferHero: React.FC = () => {
    return (
        <section className="w-full px-4 sm:px-8 lg:px-8 pt-40 pb-20 overflow-hidden bg-white isolate relative min-h-[85vh] flex items-center">
            {/* Background Grid */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="container mx-auto max-w-[1200px] text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
                    <span className="w-2 h-2 rounded-full bg-[#916AFF]"></span>
                    Web Development
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-8xl leading-[1.05] text-slate-900 mb-8 tracking-tighter font-semibold">
                    Strony, które{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#916AFF] to-blue-500">
                        sprzedają.
                    </span>
                </h1>

                <p className="text-slate-500 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                    Łączymy design światowej klasy z inżynierską wydajnością. <br className="hidden md:block" />
                    Tworzymy serwisy, które są szybkie, bezpieczne i konwertują ruch w
                    klientów.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="#pricing"
                        className="px-8 py-4 bg-[#916AFF] text-white rounded-full font-semibold text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(145,106,255,0.4)] hover:-translate-y-1 active:scale-95 flex items-center gap-3"
                    >
                        Wybierz pakiet
                        <ArrowDown className="w-4 h-4" strokeWidth={2} />
                    </Link>
                    <Link
                        href="#projects"
                        className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-semibold text-base transition-all duration-300 hover:border-slate-400 hover:text-slate-900 flex items-center gap-3"
                    >
                        Zobacz realizacje
                    </Link>
                </div>

                {/* Abstract UI Visualization */}
                <div className="mt-20 relative mx-auto max-w-5xl">
                    <div className="aspect-[16/9] bg-slate-50 rounded-t-2xl border border-slate-200 border-b-0 shadow-2xl shadow-slate-200/50 overflow-hidden relative">
                        {/* Browser Chrome */}
                        <div className="h-10 border-b border-slate-200 bg-white flex items-center px-4 gap-2">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400/50"></div>
                            </div>
                            <div className="flex-1 text-center">
                                <div className="inline-block px-4 py-1 rounded-md bg-slate-50 text-[10px] text-slate-400 font-mono">
                                    hermer.agency/projekt
                                </div>
                            </div>
                        </div>
                        {/* Content Mockup */}
                        <div className="p-8 lg:p-12 bg-white h-full relative">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#916AFF]/5 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="grid grid-cols-12 gap-8 h-full">
                                <div className="col-span-12 lg:col-span-7 flex flex-col justify-center gap-6">
                                    <div className="h-12 w-3/4 bg-slate-100 rounded-lg animate-pulse"></div>
                                    <div className="h-4 w-full bg-slate-50 rounded animate-pulse delay-75"></div>
                                    <div className="h-4 w-5/6 bg-slate-50 rounded animate-pulse delay-100"></div>
                                    <div className="flex gap-4 mt-4">
                                        <div className="h-10 w-32 bg-slate-900 rounded-full"></div>
                                        <div className="h-10 w-32 bg-slate-100 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="hidden lg:block col-span-5 bg-slate-50 rounded-xl border border-slate-100 relative overflow-hidden group">
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-200">
                                        <ImageIcon className="w-20 h-20" strokeWidth={1} />
                                    </div>
                                    {/* Floating elements */}
                                    <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-slate-100 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex justify-between items-center">
                                            <div className="h-2 w-20 bg-slate-100 rounded"></div>
                                            <div className="h-2 w-10 bg-[#916AFF]/20 rounded"></div>
                                        </div>
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

"use client";

import React from "react";
import { ArrowRight, ShoppingBag, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export const EcommerceOfferHero: React.FC = () => {
    return (
        <section className="w-full px-4 sm:px-8 lg:px-8 pt-40 pb-20 overflow-hidden bg-white isolate relative min-h-[85vh] flex items-center">
            {/* Background Grid */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="container mx-auto max-w-[1200px] text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-[#916AFF]"></span>
                    E-commerce Solutions
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl sm:text-6xl lg:text-8xl leading-[1.05] text-slate-900 mb-8 tracking-tighter font-semibold"
                >
                    Sprzedawaj online <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#916AFF] to-blue-500">
                        bez granic.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-slate-500 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
                >
                    Tworzymy sklepy internetowe, które zamieniają odwiedzających w
                    lojalnych klientów. Wydajność, automatyzacja i design skrojony pod
                    sprzedaż.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#pricing"
                        className="px-8 py-4 bg-[#916AFF] text-white rounded-full font-semibold text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(145,106,255,0.4)] hover:-translate-y-1 active:scale-95 flex items-center gap-3"
                    >
                        Wyceń sklep
                        <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </a>
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-semibold text-base transition-all duration-300 hover:border-slate-400 hover:text-slate-900 flex items-center gap-3"
                    >
                        Case studies
                    </a>
                </motion.div>

                {/* E-commerce UI Visualization */}
                <motion.div
                    initial={{ opacity: 0, y: 50, rotateX: 10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                    className="mt-20 relative mx-auto max-w-5xl perspective-1000"
                >
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
                                    hermer.store/checkout
                                </div>
                            </div>
                        </div>
                        {/* Content Mockup (Shop Interface) */}
                        <div className="p-8 lg:p-12 bg-white h-full relative text-left">
                            {/* Abstract Store Layout */}
                            <div className="grid grid-cols-12 gap-8 h-full">
                                {/* Product Image Side */}
                                <div className="col-span-12 lg:col-span-5 bg-slate-50 rounded-xl border border-slate-100 relative overflow-hidden flex items-center justify-center min-h-[200px]">
                                    <ShoppingBag
                                        className="text-slate-200 w-24 h-24"
                                        strokeWidth={1}
                                    />
                                    {/* Floating Price Tag */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-100 flex items-center gap-2"
                                    >
                                        <span className="text-xs text-slate-400 font-bold uppercase">
                                            PLN
                                        </span>
                                        <span className="text-lg font-bold text-slate-900">
                                            249.00
                                        </span>
                                    </motion.div>
                                </div>

                                {/* Product Details Side */}
                                <div className="col-span-12 lg:col-span-7 flex flex-col justify-center gap-6">
                                    <div className="space-y-3">
                                        <div className="h-8 w-3/4 bg-slate-100 rounded-lg animate-pulse"></div>
                                        <div className="h-4 w-1/4 bg-[#916AFF]/10 rounded animate-pulse delay-75"></div>
                                    </div>
                                    <div className="h-px w-full bg-slate-100"></div>
                                    <div className="space-y-2">
                                        <div className="h-3 w-full bg-slate-50 rounded animate-pulse"></div>
                                        <div className="h-3 w-5/6 bg-slate-50 rounded animate-pulse"></div>
                                        <div className="h-3 w-4/6 bg-slate-50 rounded animate-pulse"></div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-2">
                                        <div className="h-12 w-full border border-slate-200 rounded-lg flex items-center px-4 justify-between">
                                            <div className="w-4 h-4 rounded-full border border-slate-300"></div>
                                            <div className="w-16 h-2 bg-slate-100 rounded"></div>
                                        </div>
                                        <div className="h-12 w-full border border-[#916AFF] bg-[#916AFF]/5 rounded-lg flex items-center px-4 justify-between relative">
                                            <div className="w-4 h-4 rounded-full border-4 border-[#916AFF]"></div>
                                            <div className="w-16 h-2 bg-slate-200 rounded"></div>
                                            <div className="absolute -top-2 -right-2 bg-[#916AFF] text-white text-[8px] font-bold px-1.5 py-0.5 rounded">
                                                BEST
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        <div className="h-12 flex-1 bg-slate-900 text-white rounded-full flex items-center justify-center font-medium text-sm gap-2">
                                            <ShoppingCart className="w-4 h-4" strokeWidth={2} />
                                            Dodaj do koszyka
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

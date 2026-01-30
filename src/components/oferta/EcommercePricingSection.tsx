"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";

export const EcommercePricingSection: React.FC = () => {
    return (
        <section id="pricing" className="py-24 bg-transparent relative">
            {/* Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#916AFF]/5 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 md:px-8">
                {/* Split Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <SplitRevealTitle
                        line1="Inwestycja"
                        line2="w E-commerce"
                        className="text-white! text-5xl md:text-8xl"
                    />
                    <LineReveal
                        lines={[
                            "Pakiety dostosowane do skali Twojej sprzedaży.",
                            "Od małego butiku po duży market.",
                        ]}
                        className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md text-left md:text-right"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* START */}
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 shadow-lg hover:-translate-y-1 transition-transform duration-300">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Sklep Start
                            </h3>
                            <p className="text-neutral-400 text-sm h-10">
                                Dla twórców i małych marek z asortymentem do 50 produktów.
                            </p>
                        </div>
                        <div className="mb-8 flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-white tracking-tight">
                                3 900
                            </span>
                            <span className="text-neutral-400 font-medium">PLN</span>
                            <span className="text-xs text-neutral-500 ml-2">netto</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                                Platforma WooCommerce
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                                Indywidualny projekt strony głównej
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                                Podstawowe płatności (Przelewy)
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                                Konfiguracja wysyłek
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-600 line-through decoration-neutral-600">
                                <XCircle className="text-neutral-600 w-5 h-5" />
                                Automatyzacja faktur
                            </li>
                        </ul>
                        <Link
                            href="#contact"
                            className="block w-full py-4 rounded-xl border border-white/10 text-center font-semibold text-white hover:border-[#916AFF] hover:text-[#916AFF] transition-all"
                        >
                            Wybieram Start
                        </Link>
                    </div>

                    {/* BUSINESS (Featured) */}
                    <div className="bg-neutral-800 p-8 lg:p-10 rounded-3xl border border-[#916AFF]/30 shadow-2xl relative scale-105 z-10 text-white">
                        <div className="absolute top-0 right-0 bg-[#916AFF] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                            Polecany
                        </div>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-2">Sklep Pro</h3>
                            <p className="text-neutral-400 text-sm h-10">
                                Zaawansowany sklep z automatyzacją sprzedaży i marketingu.
                            </p>
                        </div>
                        <div className="mb-8 flex items-baseline gap-1">
                            <span className="text-5xl font-bold text-white tracking-tight">
                                6 500
                            </span>
                            <span className="text-neutral-400 font-medium">PLN</span>
                            <span className="text-xs text-neutral-500 ml-2">netto</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                                Nielimitowana ilość produktów
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                                Integracje (InPost, BLIK, PayU)
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                                Automatyczne faktury
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                                System kodów rabatowych
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                                Integracja z Facebook/Instagram Shop
                            </li>
                        </ul>
                        <Link
                            href="#contact"
                            className="block w-full py-4 rounded-xl bg-[#916AFF] text-center font-semibold text-white hover:bg-[#7b54e0] transition-all shadow-[0_0_20px_rgba(145,106,255,0.3)]"
                        >
                            Wybieram Pro
                        </Link>
                    </div>

                    {/* CUSTOM */}
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 shadow-lg hover:-translate-y-1 transition-transform duration-300">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Sklep Enterprise
                            </h3>
                            <p className="text-neutral-400 text-sm h-10">
                                Dedykowane rozwiązania B2B, marketplace i integracje ERP.
                            </p>
                        </div>
                        <div className="mb-8 flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-white tracking-tight">
                                Wycena
                            </span>
                            <span className="text-neutral-400 font-medium">indywidualna</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                                Headless CMS / Dedykowany Front
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                                Integracja z systemami ERP/CRM
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                                Multistore (wiele sklepów, 1 panel)
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                                Moduły B2B i cenniki hurtowe
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                                Wdrożenie Allegro Ads
                            </li>
                        </ul>
                        <Link
                            href="#contact"
                            className="block w-full py-4 rounded-xl border border-white/10 text-center font-semibold text-white hover:border-[#916AFF] hover:text-[#916AFF] transition-all"
                        >
                            Zapytaj o wycenę
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

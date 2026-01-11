"use client";

import React from "react";
import { Smartphone, CreditCard, Search, LayoutDashboard } from "lucide-react";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";

export const EcommerceFeaturesSection: React.FC = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-8">
                {/* Split Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <SplitRevealTitle
                        line1="Silnik"
                        line2="Sprzedaży"
                        className="text-slate-900! text-5xl md:text-8xl"
                    />
                    <LineReveal
                        lines={[
                            "Kompleksowe rozwiązania dla Twojego e-commerce.",
                            "Technologia, która pracuje na Twój zysk.",
                        ]}
                        className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md text-left md:text-right"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Mobile Checkout (Span 2) */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-[#916AFF]/30 transition-all duration-300 shadow-sm md:col-span-2 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-6">
                                <Smartphone className="w-6 h-6" strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 tracking-tight">
                                Mobilny Koszyk
                            </h3>
                            <p className="text-slate-500 leading-relaxed">
                                Ponad 70% zakupów odbywa się na telefonach. Nasze sklepy są w
                                pełni zoptymalizowane pod mobile – od wygodnego przeglądania
                                produktów po szybkie płatności jednym palcem.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 bg-slate-50 rounded-xl border border-slate-100 p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                            {/* Mock Mobile UI */}
                            <div className="w-32 bg-white rounded-2xl border border-slate-200 shadow-sm p-2 space-y-2 mx-auto">
                                <div className="h-16 bg-slate-100 rounded-lg"></div>
                                <div className="h-2 w-full bg-slate-100 rounded"></div>
                                <div className="h-8 w-full bg-[#916AFF] rounded text-white text-[8px] flex items-center justify-center font-bold">
                                    KUP TERAZ
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Integrations (Span 1) */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-[#916AFF]/30 transition-all duration-300 shadow-sm">
                        <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                            <CreditCard className="w-6 h-6" strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 tracking-tight">
                            Płatności i Kurierzy
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Automatyczne generowanie etykiet InPost/DPD i bezpieczne płatności
                            BLIK, Przelewy24, Stripe.
                        </p>
                    </div>

                    {/* SEO (Span 1) */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-[#916AFF]/30 transition-all duration-300 shadow-sm">
                        <div className="w-10 h-10 bg-green-50 text-green-500 rounded-xl flex items-center justify-center mb-6">
                            <Search className="w-6 h-6" strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 tracking-tight">
                            SEO Produktowe
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Rich snippets, schema.org dla produktów, optymalizacja opisów i
                            szybkości ładowania zdjęć dla lepszej widoczności w Google.
                        </p>
                    </div>

                    {/* Analytics/Management (Span 2) */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-[#916AFF]/30 transition-all duration-300 shadow-sm md:col-span-2 flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="flex-1">
                            <div className="w-10 h-10 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center mb-6">
                                <LayoutDashboard className="w-6 h-6" strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 tracking-tight">
                                Łatwe Zarządzanie
                            </h3>
                            <p className="text-slate-500 leading-relaxed">
                                Intuicyjny panel administratora. Zarządzaj stanami magazynowymi,
                                zamówieniami i promocjami bez wiedzy technicznej. Pełna kontrola
                                nad Twoim biznesem.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 aspect-video bg-slate-50 rounded-xl border border-slate-100 relative overflow-hidden flex items-center justify-center">
                            <div className="w-3/4 space-y-2">
                                <div className="flex justify-between items-end">
                                    <div className="w-8 h-16 bg-blue-200 rounded-t"></div>
                                    <div className="w-8 h-10 bg-blue-200 rounded-t"></div>
                                    <div className="w-8 h-20 bg-[#916AFF] rounded-t shadow-lg"></div>
                                    <div className="w-8 h-12 bg-blue-200 rounded-t"></div>
                                </div>
                                <div className="h-px bg-slate-300 w-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

"use client";

import React from "react";
import { ClipboardList, Palette, Plug2, TrendingUp } from "lucide-react";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";

export const EcommerceProcessSection: React.FC = () => {
    const steps = [
        {
            icon: ClipboardList,
            title: "1. Audyt i Asortyment",
            description:
                "Analizujemy Twoje produkty, grupy docelowe i konkurencję. Planujemy strukturę kategorii i filtry produktowe.",
        },
        {
            icon: Palette,
            title: "2. UX/UI Sprzedażowy",
            description:
                "Projektujemy ścieżkę zakupową tak, by była intuicyjna. Minimalizujemy liczbę kliknięć potrzebnych do zakupu (Check-out).",
        },
        {
            icon: Plug2,
            title: "3. Integracje",
            description:
                "Podłączamy bramki płatności (BLIK, PayU), systemy kurierskie (InPost, DPD) oraz magazynowo-księgowe.",
        },
        {
            icon: TrendingUp,
            title: "4. Start i Analityka",
            description:
                "Uruchamiamy sklep, konfigurujemy Google Analytics 4 (e-commerce tracking) i szkolimy Twój zespół.",
        },
    ];

    return (
        <section className="py-24 bg-transparent border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8">
                {/* Split Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <SplitRevealTitle
                        line1="Etapy"
                        line2="Wdrożenia"
                        className="text-white! text-5xl md:text-8xl"
                    />
                    <LineReveal
                        lines={[
                            "Budowa sklepu to proces biznesowy, nie tylko",
                            "technologiczny. Skupiamy się na maksymalizacji Twoich zysków.",
                        ]}
                        className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md text-left md:text-right"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="group">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-[#916AFF] group-hover:text-white group-hover:border-[#916AFF] transition-all duration-300">
                                <step.icon className="w-5 h-5" strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">
                                {step.title}
                            </h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

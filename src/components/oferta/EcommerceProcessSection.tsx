"use client";

import React from "react";
import { ClipboardList, Palette, Code2, Zap, TrendingUp } from "lucide-react";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";

export const EcommerceProcessSection: React.FC = () => {
    const steps = [
        {
            icon: ClipboardList,
            title: "1. Analiza potrzeb biznesowych i produktów",
            description: "",
        },
        {
            icon: Palette,
            title: "2. Projekt UX i architektura sklepu",
            description: "",
        },
        {
            icon: Code2,
            title: "3. Wdrożenie techniczne i integracje",
            description: "",
        },
        {
            icon: Zap,
            title: "4. Testy, optymalizacja i uruchomienie",
            description: "",
        },
        {
            icon: TrendingUp,
            title: "5. Wsparcie, rozwój i kampanie marketingowe",
            description: "",
        },
    ];

    return (
        <section className="py-24 bg-transparent border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8">
                {/* Split Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <div>
                        <h2 className="text-white text-4xl md:text-6xl font-display font-medium tracking-tight mb-4">
                            Proces współpracy <br />
                            <span className="text-white">przy sklepie internetowym</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="group flex flex-col items-start">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-[#916AFF] group-hover:text-white group-hover:border-[#916AFF] transition-all duration-300">
                                <step.icon className="w-5 h-5" strokeWidth={2} />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-white leading-snug">
                                {step.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

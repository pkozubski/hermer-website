"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";

export const SimpleContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
            <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 text-center">
                <h2 className="text-5xl md:text-7xl tracking-tighter mb-8 font-semibold text-slate-900">
                    Gotowy na <span className="text-[#916AFF]">zmianę?</span>
                </h2>
                <p className="text-xl text-slate-500 mb-12 max-w-xl mx-auto font-light">
                    Skontaktuj się z nami i porozmawiajmy o Twoim projekcie. <br />
                    Wycena i konsultacja są bezpłatne.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a
                        href="mailto:kontakt@hermer.agency"
                        className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-[#916AFF] transition-colors flex items-center justify-center gap-3 shadow-xl"
                    >
                        <Mail className="w-6 h-6" strokeWidth={2} />
                        Napisz do nas
                    </a>
                    <a
                        href="tel:+48123456789"
                        className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-bold text-lg hover:border-[#916AFF] hover:text-[#916AFF] transition-all flex items-center justify-center gap-3"
                    >
                        <Phone className="w-6 h-6" strokeWidth={2} />
                        +48 123 456 789
                    </a>
                </div>
            </div>
        </section>
    );
};

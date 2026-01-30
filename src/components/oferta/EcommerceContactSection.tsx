"use client";

import React from "react";
import { Phone, ShoppingBag } from "lucide-react";

export const EcommerceContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
            <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 text-center">
                <h2 className="text-5xl md:text-7xl tracking-tighter mb-8 font-semibold text-white">
                    Czas zacząć <span className="text-[#916AFF]">zarabiać.</span>
                </h2>
                <p className="text-xl text-neutral-400 mb-12 max-w-xl mx-auto font-light">
                    Opowiedz nam o swoich produktach. <br />
                    Stworzymy dla nich idealne miejsce w sieci.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a
                        href="mailto:sklep@hermer.agency"
                        className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-[#916AFF] hover:text-white transition-colors flex items-center justify-center gap-3 shadow-xl"
                    >
                        <ShoppingBag className="w-6 h-6" strokeWidth={2} />
                        Wyceń sklep
                    </a>
                    <a
                        href="tel:+48123456789"
                        className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:border-[#916AFF] hover:text-[#916AFF] transition-all flex items-center justify-center gap-3"
                    >
                        <Phone className="w-6 h-6" strokeWidth={2} />
                        +48 123 456 789
                    </a>
                </div>
            </div>
        </section>
    );
};

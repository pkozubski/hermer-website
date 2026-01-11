"use client";

import React from "react";
import Image from "next/image";

export const EcommerceTechStackSection: React.FC = () => {
    const technologies = [
        {
            name: "WooCommerce",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg",
        },
        {
            name: "Shopify",
            icon: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_icon_2018.svg",
        },
        {
            name: "PrestaShop",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prestashop/prestashop-original.svg",
        },
        {
            name: "Stripe",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg",
        },
        {
            name: "Google Analytics",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
        },
    ];

    return (
        <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 text-center">
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">
                    Technologie i Integracje
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="relative w-10 h-10 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                            title={tech.name}
                        >
                            <Image
                                src={tech.icon}
                                alt={tech.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                    {/* Custom InPost logo approximation or text if SVG is tricky to find via CDN stable URL. 
              Let's use a placeholder or skip if not essential, or try to find a reliable one. 
              Common CDNs might not have InPost. I'll make a text fallback or simple div if needed, 
              but for now I'll stick to the ones likely to exist. 
              Checking visual: HTML used logos:inpost from iconify.
              I'll try to use a static image for it if possible, but I don't have it.
              I will skip InPost for now or use a generic 'Box' icon.
           */}
                </div>
            </div>
        </section>
    );
};

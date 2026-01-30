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
        <section className="py-16 bg-transparent border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 text-center">
                <p className="text-neutral-500 text-sm font-bold uppercase tracking-widest mb-10">
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
                </div>
            </div>
        </section>
    );
};

import React from "react";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";
import { DashedCardWrapper } from "../cards/bento/DashedCardWrapper";
import { MobileCheckoutCard } from "../cards/bento/ecommerce/MobileCheckoutCard";
import { IntegrationsCard } from "../cards/bento/ecommerce/IntegrationsCard";
import { ProductSeoCard } from "../cards/bento/ecommerce/ProductSeoCard";
import { ManagementCard } from "../cards/bento/ecommerce/ManagementCard";

export const EcommerceFeaturesBento: React.FC = () => {
    return (
        <section className="py-24 bg-transparent relative z-10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <SplitRevealTitle
                        line1="Silnik"
                        line2="Sprzedaży"
                        className="text-white! text-5xl md:text-8xl"
                    />
                    <LineReveal
                        lines={[
                            "Kompleksowe rozwiązania dla Twojego e-commerce.",
                            "Technologia, która pracuje na Twój zysk."
                        ]}
                        className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md text-left md:text-right"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                     {/* Mobile Checkout - Large (2 cols) */}
                     <div className="lg:col-span-2 min-h-[400px]">
                        <DashedCardWrapper className="h-full">
                            <MobileCheckoutCard className="h-full" />
                        </DashedCardWrapper>
                     </div>

                     {/* Integrations - Small (1 col) */}
                     <div className="min-h-[400px]">
                        <DashedCardWrapper className="h-full" delay={0.1}>
                            <IntegrationsCard className="h-full" />
                        </DashedCardWrapper>
                     </div>

                     {/* Product SEO - Small (1 col) */}
                     <div className="min-h-[400px]">
                        <DashedCardWrapper className="h-full" delay={0.2}>
                            <ProductSeoCard className="h-full" />
                        </DashedCardWrapper>
                     </div>

                     {/* Management - Large (2 cols) */}
                     <div className="lg:col-span-2 min-h-[400px]">
                        <DashedCardWrapper className="h-full" delay={0.3}>
                            <ManagementCard className="h-full" />
                        </DashedCardWrapper>
                     </div>
                </div>
            </div>
        </section>
    );
};

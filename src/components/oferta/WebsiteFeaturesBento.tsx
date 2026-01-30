import React from "react";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";
import { DashedCardWrapper } from "../cards/bento/DashedCardWrapper";
import { SpeedCard } from "../cards/bento/website/SpeedCard";
import { MobileFirstCard } from "../cards/bento/website/MobileFirstCard";
import { SeoFriendlyCard } from "../cards/bento/website/SeoFriendlyCard";
import { CmsCard } from "../cards/bento/website/CmsCard";

export const WebsiteFeaturesBento: React.FC = () => {
    return (
        <section className="py-24 bg-transparent relative z-10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <SplitRevealTitle
                        line1="Standard"
                        line2="Hermer"
                        className="text-white! text-5xl md:text-8xl"
                    />
                    <LineReveal
                        lines={[
                            "Jakość bez kompromisów. Poznaj filary,",
                            "na których budujemy Twoją obecność w sieci."
                        ]}
                        className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md text-left md:text-right"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                     {/* Speed - Large */}
                     <div className="lg:col-span-2 min-h-[400px]">
                        <DashedCardWrapper className="h-full">
                            <SpeedCard className="h-full" />
                        </DashedCardWrapper>
                     </div>

                     {/* Mobile - Small */}
                     <div className="min-h-[400px]">
                        <DashedCardWrapper className="h-full" delay={0.1}>
                            <MobileFirstCard className="h-full" />
                        </DashedCardWrapper>
                     </div>

                     {/* SEO - Small */}
                     <div className="min-h-[400px]">
                        <DashedCardWrapper className="h-full" delay={0.2}>
                            <SeoFriendlyCard className="h-full" />
                        </DashedCardWrapper>
                     </div>

                     {/* CMS - Large */}
                     <div className="lg:col-span-2 min-h-[400px]">
                        <DashedCardWrapper className="h-full" delay={0.3}>
                            <CmsCard className="h-full" />
                        </DashedCardWrapper>
                     </div>
                </div>
            </div>
        </section>
    );
};

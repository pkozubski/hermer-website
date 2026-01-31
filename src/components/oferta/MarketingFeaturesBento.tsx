import React from "react";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";
import { DashedCardWrapper } from "../cards/bento/DashedCardWrapper";
// Using existing cards and assuming their paths are correct based on earlier 'ls'
// If they are not exported correctly, I might need to adjust.
// The user provided ls for src/components/cards/marketing-service
import AdCampaigns from "../cards/marketing-service/AdCampaigns";
import ContentCalendar from "../cards/marketing-service/ContentCalendar";
import GrowthFunnel from "../cards/marketing-service/GrowthFunnel";
import TrafficGraph from "../cards/seo-service/TrafficGraph";

export const MarketingFeaturesBento: React.FC = () => {
    return (
        <section className="py-24 bg-transparent relative z-10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <SplitRevealTitle
                        line1="Zakres"
                        line2="Usług"
                        className="text-white! text-5xl md:text-8xl"
                    />
                    <LineReveal
                        lines={[
                            "Kompleksowe podejście do marketingu.",
                            "Wybierz narzędzia, które zbudują Twój wzrost."
                        ]}
                        className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md text-left md:text-right"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                      {/* SEO / Traffic - Large */}
                      <div className="lg:col-span-2 min-h-[400px]">
                         <DashedCardWrapper className="h-full">
                             <TrafficGraph className="h-full" />
                         </DashedCardWrapper>
                      </div>

                      {/* Content Marketing - Small */}
                      <div className="min-h-[400px]">
                         <DashedCardWrapper className="h-full" delay={0.1}>
                             <ContentCalendar className="h-full" />
                         </DashedCardWrapper>
                      </div>

                      {/* Ads - Small */}
                      <div className="min-h-[400px]">
                         <DashedCardWrapper className="h-full" delay={0.2}>
                             <AdCampaigns className="h-full" />
                         </DashedCardWrapper>
                      </div>

                      {/* Strategy / Funnel - Large */}
                      <div className="lg:col-span-2 min-h-[400px]">
                         <DashedCardWrapper className="h-full" delay={0.3}>
                             <GrowthFunnel className="h-full" />
                         </DashedCardWrapper>
                      </div>
                </div>
            </div>
        </section>
    );
};

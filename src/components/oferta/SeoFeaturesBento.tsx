import React from "react";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";
import { DashedCardWrapper } from "../cards/bento/DashedCardWrapper";
// Importing existing SEO cards
import AuditScore from "../cards/seo-service/AuditScore";
import KeywordRankings from "../cards/seo-service/KeywordRankings";
import LinkNetwork from "../cards/seo-service/LinkNetwork";
import TrafficGraph from "../cards/seo-service/TrafficGraph";

export const SeoFeaturesBento: React.FC = () => {
    return (
        <section className="py-24 bg-transparent relative z-10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <SplitRevealTitle
                        line1="Kompleksowe"
                        line2="SEO"
                        className="text-white! text-5xl md:text-8xl"
                    />
                    <LineReveal
                        lines={[
                            "Technologia, content i autorytet.",
                            "Wszystkie elementy układanki w jednym miejscu."
                        ]}
                        className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md text-left md:text-right"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                      {/* Technical Audit - Small */}
                      <div className="min-h-[400px]">
                         <DashedCardWrapper className="h-full">
                             <AuditScore /> {/* Assuming AuditScore doesn't take className props based on its styled-components nature in previous file check, or wraps it */}
                         </DashedCardWrapper>
                      </div>

                      {/* Keywords - Large */}
                      <div className="lg:col-span-2 min-h-[400px]">
                         <DashedCardWrapper className="h-full" delay={0.1}>
                             <KeywordRankings />
                         </DashedCardWrapper>
                      </div>

                      {/* Link Building - Large */}
                      <div className="lg:col-span-2 min-h-[400px]">
                         <DashedCardWrapper className="h-full" delay={0.2}>
                             <LinkNetwork />
                         </DashedCardWrapper>
                      </div>

                      {/* Traffic Analysis - Small */}
                      <div className="min-h-[400px]">
                         <DashedCardWrapper className="h-full" delay={0.3}>
                             <TrafficGraph />
                         </DashedCardWrapper>
                      </div>
                </div>
            </div>
        </section>
    );
};

"use client";
import React from "react";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";
import { LineReveal } from "@/components/ui/LineReveal";
import { WebDesignCard } from "./services/WebDesignCard";
import { EcommerceCard } from "./services/EcommerceCard";
import { SeoCard } from "./services/SeoCard";
import { MarketingCard } from "./services/MarketingCard";
import { DashedCardWrapper } from "./services/DashedCardWrapper";

export const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="mb-24 text-center max-w-5xl mx-auto flex flex-col items-center">
          <SplitRevealTitle
            line1="Cztery Filary"
            line2="Twojego Wzrostu"
            className="text-6xl md:text-9xl font-medium tracking-tighter text-white mb-8 w-full"
          />
          <div className="text-neutral-400 text-xl font-light">
            <LineReveal
              lines={[
                "Kompleksowe podejście do obecności w sieci.",
                "Od pierwszej linii kodu po pierwszą sprzedaż.",
              ]}
              className="justify-center"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <DashedCardWrapper className="col-span-1 lg:col-span-2">
            <WebDesignCard />
          </DashedCardWrapper>
          <DashedCardWrapper className="col-span-1" delay={0.2}>
            <EcommerceCard />
          </DashedCardWrapper>
          <DashedCardWrapper className="col-span-1" delay={0.3}>
            <SeoCard />
          </DashedCardWrapper>
          <DashedCardWrapper className="col-span-1 lg:col-span-2" delay={0.1}>
            <MarketingCard />
          </DashedCardWrapper>
        </div>
      </div>
    </section>
  );
};

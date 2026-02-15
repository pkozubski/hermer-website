import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import { ScrambleText } from "../../ui/ScrambleText";

gsap.registerPlugin(ScrollTrigger);

export type OfferItem = {
  id: number;
  label: string;
  title: string;
  description: string;
  highlights: string[];
  accentText: string;
  accentSoft: string;
  accentBorder: string;
  Icon: React.ElementType;
  Visual: React.FC;
};

interface OfferCardProps {
  item: OfferItem;
  index: number;
  isMobile: boolean;
}

export const OfferCard: React.FC<OfferCardProps> = ({
  item,
  index,
  isMobile,
}) => {
  const cardRef = useRef<HTMLElement>(null);
  const Icon = item.Icon;
  const Visual = item.Visual;

  useGSAP(
    () => {
      if (!cardRef.current) return;

      gsap.fromTo(
        cardRef.current,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          delay: isMobile ? 0.1 : 0.1 + index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: isMobile ? "top 95%" : "top 90%",
            once: true,
          },
        },
      );
    },
    { scope: cardRef, dependencies: [index, isMobile] },
  );

  return (
    <article
      ref={cardRef}
      className={`group relative w-full lg:w-[72vw] xl:w-[70vw] lg:max-w-[1280px] shrink-0 rounded-[32px] lg:rounded-[40px] bg-neutral-900/50 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/50 overflow-hidden ${
        isMobile ? "mb-8 last:mb-0" : ""
      }`}
    >
      <div className="relative h-full grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-6 lg:gap-8 p-6 sm:p-8 lg:p-12">
        <div className="flex flex-col justify-between gap-6 lg:gap-8 py-2">
          <div>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium">
              <span className={`flex items-center gap-2 ${item.accentText}`}>
                <Icon size={16} />
                {item.label}
              </span>
              <span className="font-mono opacity-50">0{item.id}</span>
            </div>

            <h3 className="mt-6 lg:mt-8 text-3xl sm:text-4xl lg:text-6xl font-display font-medium text-white leading-[1.1] tracking-tight min-h-[2.2em] lg:min-h-[auto]">
              {item.title}
            </h3>

            <p className="mt-4 lg:mt-6 text-neutral-400 text-base sm:text-lg leading-relaxed max-w-md min-h-[4.5em] lg:min-h-[auto]">
              {item.description}
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-wrap gap-x-4 lg:gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-neutral-500 uppercase tracking-wide min-h-[2em]">
              {item.highlights.map((highlight, i) => (
                <div key={highlight} className="flex items-center gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${item.accentText.replace(
                      "text-",
                      "bg-",
                    )}`}
                  />
                  <ScrambleText text={highlight} delay={0.5 + i * 0.1} />
                </div>
              ))}
            </div>

            <button className="group/cta flex items-center gap-4 text-white font-medium text-base sm:text-lg w-max">
              <div className="relative overflow-hidden flex items-center justify-center">
                <div className="flex items-center">
                  <ArrowRight
                    className={`w-6 h-6 lg:w-8 lg:h-8 transition-transform duration-500 group-hover/cta:translate-x-1 ${item.accentText}`}
                    strokeWidth={2}
                  />
                </div>
              </div>
              <span className="relative">
                Zobacz szczegóły
                <span
                  className={`absolute left-0 -bottom-1 w-full h-px ${item.accentText.replace(
                    "text-",
                    "bg-",
                  )} origin-left scale-x-0 transition-transform duration-500 group-hover/cta:scale-x-100`}
                />
              </span>
            </button>
          </div>
        </div>

        <div className="relative h-[240px] sm:h-[320px] lg:h-auto min-h-[240px] lg:min-h-[320px] rounded-[24px] lg:rounded-[32px] overflow-hidden bg-neutral-800 order-first lg:order-last">
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
            <Visual />
          </div>

          <div className="absolute inset-0 border border-white/5 rounded-[24px] lg:rounded-[32px] pointer-events-none" />
        </div>
      </div>
    </article>
  );
};

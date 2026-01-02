import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrambleText } from "../../ui/ScrambleText";

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
  const Icon = item.Icon;
  const Visual = item.Visual;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: isMobile ? "0px" : "-10%" }}
      transition={{ duration: 0.7, delay: isMobile ? 0.1 : 0.1 + index * 0.1 }}
      className={`group relative w-full lg:w-[72vw] xl:w-[70vw] lg:max-w-[1280px] shrink-0 rounded-[32px] lg:rounded-[40px] bg-white border border-slate-100 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.15)] overflow-hidden ${
        isMobile ? "mb-8 last:mb-0" : ""
      }`}
    >
      <div className="relative h-full grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-6 lg:gap-8 p-6 sm:p-8 lg:p-12">
        <div className="flex flex-col justify-between gap-6 lg:gap-8 py-2">
          <div>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
              <span className={`flex items-center gap-2 ${item.accentText}`}>
                <Icon size={16} />
                {item.label}
              </span>
              <span className="font-mono opacity-50">0{item.id}</span>
            </div>

            <h3 className="mt-6 lg:mt-8 text-3xl sm:text-4xl lg:text-6xl font-display font-medium text-slate-900 leading-[1.1] tracking-tight min-h-[2.2em] lg:min-h-[auto]">
              {item.title}
            </h3>

            <p className="mt-4 lg:mt-6 text-slate-500 text-base sm:text-lg leading-relaxed max-w-md min-h-[4.5em] lg:min-h-[auto]">
              {item.description}
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-wrap gap-x-4 lg:gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-slate-600 uppercase tracking-wide min-h-[2em]">
              {item.highlights.map((highlight, i) => (
                <div key={highlight} className="flex items-center gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${item.accentText.replace(
                      "text-",
                      "bg-"
                    )}`}
                  />
                  <ScrambleText text={highlight} delay={0.5 + i * 0.1} />
                </div>
              ))}
            </div>

            <button className="group/cta flex items-center gap-4 text-slate-900 font-medium text-base sm:text-lg w-max">
              <div className="relative overflow-hidden flex items-center justify-center">
                <motion.div
                  className="flex items-center"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <ArrowRight
                    className={`w-6 h-6 lg:w-8 lg:h-8 transition-transform duration-500 group-hover/cta:translate-x-1 ${item.accentText}`}
                    strokeWidth={2}
                  />
                </motion.div>
              </div>
              <span className="relative">
                Zobacz szczegóły
                <span
                  className={`absolute left-0 -bottom-1 w-full h-px ${item.accentText.replace(
                    "text-",
                    "bg-"
                  )} origin-left scale-x-0 transition-transform duration-500 group-hover/cta:scale-x-100`}
                />
              </span>
            </button>
          </div>
        </div>

        <div className="relative h-[240px] sm:h-[320px] lg:h-auto min-h-[240px] lg:min-h-[320px] rounded-[24px] lg:rounded-[32px] overflow-hidden bg-slate-50 order-first lg:order-last">
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
            <Visual />
          </div>

          <div className="absolute inset-0 border border-black/5 rounded-[24px] lg:rounded-[32px] pointer-events-none" />
        </div>
      </div>
    </motion.article>
  );
};

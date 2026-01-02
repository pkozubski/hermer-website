import React from "react";
import { ArrowRight } from "lucide-react";

interface OfferCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  index: number;
}

export const OfferCard: React.FC<OfferCardProps> = ({
  title,
  description,
  imageSrc,
  tags,
  index,
}) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
      {/* Image Area */}
      <div className="relative h-64 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-transparent group-hover:bg-[#916AFF]/5 transition-colors duration-500 z-10"></div>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
        />
        {/* Number Badge */}
        <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-white shadow-sm">
          <span className="font-display font-bold text-slate-900">
            0{index + 1}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-[#916AFF] transition-colors">
          {title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-slate-50 text-slate-500 text-xs font-medium rounded-full border border-slate-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <button className="flex items-center gap-2 text-slate-900 font-medium text-sm group/btn w-max">
          <span className="relative">
            Dowiedz się więcej
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#916AFF] group-hover/btn:w-full transition-all duration-300"></span>
          </span>
          <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-[#916AFF] group-hover/btn:text-white transition-all duration-300 shadow-sm">
            <ArrowRight size={12} />
          </div>
        </button>
      </div>
    </div>
  );
};

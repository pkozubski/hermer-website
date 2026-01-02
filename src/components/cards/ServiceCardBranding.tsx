import React from "react";
import { ArrowRight, Gem } from "lucide-react";

interface ServiceCardBrandingProps {
  index: number;
}

export const ServiceCardBranding: React.FC<ServiceCardBrandingProps> = ({
  index,
}) => {
  return (
    <div className="group relative w-full h-full bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl">
      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0">
        <img
          src="/images/offer-branding-bg.png"
          alt="Branding & Identity Background"
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-110 opacity-70"
        />
        {/* Artistic Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-linear-to-br from-yellow-600/10 to-transparent mix-blend-overlay"></div>
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full h-full p-8 lg:p-16 flex flex-col justify-between">
        {/* Top: Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <Gem size={20} className="text-white" />
            </div>
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-white/60">
              Premium Identity
            </span>
          </div>

          <span className="font-display text-6xl lg:text-8xl font-bold text-white/10 select-none group-hover:text-white/20 transition-colors duration-500">
            0{index + 1}
          </span>
        </div>

        {/* Bottom Content */}
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-4xl lg:text-7xl font-display font-bold text-white leading-[0.9] tracking-tighter mb-6 relative">
            Brand <br />
            Identity
            {/* Decorative underline */}
            <span className="block w-24 h-2 bg-yellow-500/80 mt-6 rounded-full origin-left transform scale-x-50 group-hover:scale-x-100 transition-transform duration-500"></span>
          </h3>

          <p className="text-slate-300 text-lg lg:text-xl leading-relaxed max-w-xl mb-8 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            Wizerunek, który zostaje w pamięci. <br />
            Budujemy spójne marki, które emanują zaufaniem i autorytetem.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 items-center">
            {["Logo", "Brand Book", "Visual Key", "Naming"].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-white/80 hover:bg-white/10 transition-colors"
              >
                {tech}
              </span>
            ))}

            {/* Action Arrow */}
            <div className="ml-auto">
              <div className="w-16 h-16 rounded-full bg-white text-slate-900 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <ArrowRight size={28} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

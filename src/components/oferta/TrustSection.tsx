"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Trophy, Rocket, Quote } from "lucide-react";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";

const LogoMarquee = () => {
  const logos = Array(12)
    .fill(0)
    .map((_, i) => i); // Placeholders
  return (
    <div className="w-full overflow-hidden flex py-10 opacity-30 grayscale relative z-10">
      <motion.div
        className="flex gap-16 items-center whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...logos, ...logos].map((_, i) => (
          <div
            key={i}
            className="text-2xl font-bold text-white tracking-tighter"
          >
            CLIENT_LOGO {i}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TrustCard = ({ icon: Icon, title, desc, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="group relative p-8 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-colors duration-500"
  >
    {/* Subtelny gradientowy blik na hover */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    <div className="relative z-10">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6 text-white border border-white/10 group-hover:scale-110 transition-transform duration-500">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm font-light">
        {desc}
      </p>
    </div>
  </motion.div>
);

export const TrustSection = () => {
  return (
    <section className="bg-[#0A0A0A] py-32 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <SplitRevealTitle
            line1="Partnerzy w"
            line2="Sukcesie."
            className="text-6xl md:text-8xl text-white mb-6 justify-center"
          />
          <div className="flex justify-center">
            <div className="overflow-hidden">
              <LineReveal
                lines={[
                  "Nie pracujemy dla Ciebie. Pracujemy z Tobą.",
                  "Zobacz, dlaczego marki wybierają nasze wsparcie.",
                ]}
                className="text-slate-400 text-lg sm:text-xl text-center"
              />
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mb-32 mask-image-gradient">
          <LogoMarquee />
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          <TrustCard
            icon={Trophy}
            title="Jakość Premium"
            desc="Zero gotowców. Każdy projekt to unikalna, szyta na miarę realizacja, która wyróżnia Cię na tle konkurencji."
            delay={0.1}
          />
          <TrustCard
            icon={ShieldCheck}
            title="Bezpieczeństwo"
            desc="Stabilne serwery, certyfikaty SSL, regularne backupy. Twój biznes online jest bezpieczny jak w twierdzy."
            delay={0.2}
          />
          <TrustCard
            icon={Rocket}
            title="Skalowalność"
            desc="Budujemy rozwiązania, które rosną razem z Tobą. Od startupu po korporację. Bez długu technologicznego."
            delay={0.3}
          />
        </div>

        {/* Single Big Testimonial - Refined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center relative"
        >
          {/* Decorative Quote Icon behind */}
          <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
            <Quote size={200} className="fill-white text-white" />
          </div>

          <div className="mb-8 flex justify-center text-[#916AFF]">
            {[1, 2, 3, 4, 5].map((i) => (
              <ShieldCheck key={i} size={24} className="fill-current" />
            ))}
          </div>
          <blockquote className="text-3xl md:text-5xl font-medium text-white leading-tight mb-10 relative z-10">
            "Współpraca z Hermer to była najlepsza decyzja biznesowa w tym roku.
            ROI z kampanii przekroczyło nasze najśmielsze oczekiwania."
          </blockquote>
          <div className="flex flex-col items-center relative z-10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mb-4 p-[2px]">
              <div className="w-full h-full rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-white font-bold text-xl">
                MS
              </div>
            </div>
            <div className="font-bold text-white text-lg">Michał Sadowski</div>
            <div className="text-slate-500 uppercase tracking-widest text-xs font-semibold mt-1">
              CEO, Brand24
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

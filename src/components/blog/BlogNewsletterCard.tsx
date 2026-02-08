"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const BlogNewsletterCard: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0.8, rotate: 3 }}
      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#916AFF] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center text-white relative overflow-hidden group shadow-xl h-full min-h-[400px]"
    >
      {/* Background Decor */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-150" />

      <div className="relative z-10 flex flex-col h-full justify-center">
        <h3 className="text-3xl font-bold mb-6 leading-tight tracking-tight">
          Chcesz być na bieżąco?
        </h3>
        <p className="text-white/90 font-medium mb-8 text-sm uppercase tracking-wide">
          Dołącz do subskrybentów naszego newslettera i odbieraj dawkę wiedzy.
        </p>

        <form
          className="relative w-full space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Twój e-mail"
            className="w-full bg-white/10 border border-white/30 rounded-full px-6 py-4 placeholder:text-white/60 focus:ring-2 focus:ring-white outline-none transition-all text-white"
          />
          <button
            type="submit"
            className="w-full bg-white text-[#916AFF] font-bold py-4 rounded-full hover:bg-slate-50 transition-colors shadow-lg flex items-center justify-center gap-2 uppercase text-sm tracking-widest"
          >
            Zapisz się <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </motion.div>
  );
};

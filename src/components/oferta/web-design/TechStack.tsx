"use client";

import React from "react";
import { motion } from "framer-motion";

const technologies = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Framer Motion",
  "Supabase",
  "Vercel",
  "Figma",
];

export const TechStack = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">
              Nowoczesny Stack
            </h2>
            <p className="text-slate-500 font-light">
              Budujemy na technologiach, które gwarantują szybkość,
              bezpieczeństwo i łatwą rozbudowę w przyszłości.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                <span className="text-slate-900 font-medium text-lg">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

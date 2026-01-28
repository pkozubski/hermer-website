"use client";

import React from "react";
import { motion } from "framer-motion";

export const DashedCardWrapper = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`relative p-3 ${className}`}
    >
      {/* Dashed border pseudo-element */}
      <div
        className="absolute inset-0 rounded-[48px] pointer-events-none"
        style={{
          border: "2px dashed rgba(215, 219, 224, 0.95)",
        }}
      />
      {children}
    </motion.div>
  );
};

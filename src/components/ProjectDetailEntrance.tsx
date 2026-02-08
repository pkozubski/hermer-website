"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProjectDetailEntranceProps {
  children: React.ReactNode;
}

/**
 * Wraps the project detail page content and triggers a smooth
 * entrance animation that coordinates with the zoom-in transition
 * from ProjectCard.
 */
export const ProjectDetailEntrance: React.FC<ProjectDetailEntranceProps> = ({
  children,
}) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Small delay to let the zoom clone overlay still be visible,
    // then the real page content fades in underneath.
    const timer = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={ready ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

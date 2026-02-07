"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { OFFER_ITEMS } from "./OfferDropdown";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string; hasDropdown?: boolean }[];
  expandedNav: string | null;
  onToggleExpand: (name: string | null) => void;
}

const subItemVariants = {
  closed: { opacity: 0, y: -8 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
  expandedNav,
  onToggleExpand,
}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => setIsRevealed(true), 200);
      return () => clearTimeout(timer);
    } else {
      setIsRevealed(false);
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="panel"
          initial={{ y: "-100%" }}
          animate={{
            y: "0%",
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.25,
            },
          }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="fixed inset-0 z-[100] w-full bg-[#131313] flex flex-col"
          style={{ height: "100dvh" }}
        >
          {/* Progressive blur overlay — fades out to reveal content */}
          <div
            className="absolute inset-0 z-[5] pointer-events-none transition-opacity duration-[800ms] ease-out"
            style={{
              opacity: isRevealed ? 0 : 1,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              background:
                "linear-gradient(to bottom, rgba(19,19,19,0.95) 0%, rgba(19,19,19,0.6) 50%, rgba(19,19,19,0.3) 100%)",
            }}
          />

          {/* Content container */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.55, duration: 0.4 },
              }}
              className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/[0.06]"
            >
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                Menu
              </span>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Zamknij menu"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L13 13M13 1L1 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </motion.div>

            {/* Navigation links */}
            <nav className="flex-1 overflow-y-auto px-5 py-6">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        delay: 0.5 + i * 0.07,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                      filter: "blur(4px)",
                      transition: {
                        delay: i * 0.03,
                        duration: 0.25,
                      },
                    }}
                  >
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() =>
                            onToggleExpand(
                              expandedNav === link.name ? null : link.name,
                            )
                          }
                          className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-[17px] font-medium text-white/90 hover:bg-white/[0.04] transition-colors"
                        >
                          {link.name}
                          <ChevronDown
                            size={16}
                            className={`text-neutral-500 transition-transform duration-300 ${
                              expandedNav === link.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {expandedNav === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                                transition: {
                                  height: {
                                    duration: 0.35,
                                    ease: [0.04, 0.62, 0.23, 0.98],
                                  },
                                  opacity: { duration: 0.2, delay: 0.1 },
                                },
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                                transition: {
                                  height: { duration: 0.25 },
                                  opacity: { duration: 0.15 },
                                },
                              }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-1.5 pl-2 pr-1 pb-2 pt-1">
                                {OFFER_ITEMS.map((item, j) => (
                                  <motion.div
                                    key={item.title}
                                    custom={j}
                                    variants={subItemVariants}
                                    initial="closed"
                                    animate="open"
                                  >
                                    <Link
                                      href={item.href}
                                      onClick={onClose}
                                      className="group flex items-center gap-3.5 px-3 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-200"
                                    >
                                      <div className="relative w-10 h-10 shrink-0 rounded-[10px] overflow-hidden">
                                        <div
                                          className="absolute inset-0"
                                          style={{
                                            background:
                                              "linear-gradient(135deg, #2A2A2A 0%, #151515 100%)",
                                            border:
                                              "1px solid rgba(255,255,255,0.06)",
                                          }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                          <item.icon
                                            size={18}
                                            className={item.color}
                                            strokeWidth={1.5}
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="text-[15px] font-medium text-white/90 group-hover:text-white transition-colors">
                                          {item.title}
                                        </span>
                                        <span className="text-xs text-neutral-500 leading-snug truncate">
                                          {item.description}
                                        </span>
                                      </div>
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="block px-4 py-3.5 rounded-xl text-[17px] font-medium text-white/90 hover:text-white hover:bg-white/[0.04] transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Bottom CTA / Full-width Footer Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className="mt-auto"
            >
              <Link
                href="/kontakt"
                onClick={onClose}
                className="group relative flex flex-col items-center justify-center gap-6 w-full py-12 bg-[#161616] text-white transition-all duration-500 overflow-hidden border-t border-white/5"
              >
                {/* Hover Reveal Effect */}
                <div className="absolute inset-0 bg-[#916AFF] -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1]" />
                
                {/* Background Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                  <span className="text-[10vw] font-black text-white/[0.02] group-hover:text-black/[0.05] transition-colors duration-500 whitespace-nowrap uppercase tracking-tighter leading-none">
                    LET&apos;S CREATE
                  </span>
                </div>

                <div className="relative z-10 flex flex-col items-center gap-3 text-center px-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-500 group-hover:text-white/70 transition-colors duration-300">
                    Gotowy na projekt?
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold tracking-tight group-hover:text-white transition-colors duration-300">
                      Rozpocznij teraz
                    </span>
                    <div className="flex items-center justify-center w-12 h-12 border border-white/10 group-hover:border-white/30 group-hover:bg-white group-hover:text-[#916AFF] transition-all duration-500 ease-out">
                      <ArrowRight
                        size={24}
                        className="group-hover:translate-x-1 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

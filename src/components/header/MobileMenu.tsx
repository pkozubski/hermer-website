"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { OFFER_ITEMS } from "./OfferDropdown";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string; hasDropdown?: boolean }[];
  expandedNav: string | null;
  onToggleExpand: (name: string | null) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
  expandedNav,
  onToggleExpand,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (typeof window === "undefined" || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] w-full bg-[#131313] flex flex-col animate-[mobileMenuIn_0.6s_cubic-bezier(0.22,1,0.36,1)_0.25s_both]"
      style={{
        height: "100dvh",
      }}
    >
      <div
        className="absolute inset-0 z-[5] pointer-events-none animate-[mobileMenuReveal_0.8s_ease-out_0.2s_both]"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background:
            "linear-gradient(to bottom, rgba(19,19,19,0.95) 0%, rgba(19,19,19,0.6) 50%, rgba(19,19,19,0.3) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div
          className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/[0.06]"
          style={{
            transition: "opacity 0.4s ease 0.55s",
          }}
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
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <li
                key={link.name}
                style={{
                  opacity: 1,
                  transform: "translateY(0)",
                  filter: "blur(0px)",
                  transitionProperty: "opacity, transform, filter",
                  transitionDuration: "0.5s",
                  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  transitionDelay: `${0.5 + i * 0.07}s`,
                  animation: `mobileMenuItemIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${0.5 + i * 0.07}s both`,
                }}
              >
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        onToggleExpand(expandedNav === link.name ? null : link.name)
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

                    <div
                      className={`overflow-hidden grid transition-[grid-template-rows,opacity] duration-300 ${
                        expandedNav === link.name
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0">
                        <div className="flex flex-col gap-1.5 pl-2 pr-1 pb-2 pt-1">
                          {OFFER_ITEMS.map((item, j) => (
                            <div
                              key={item.title}
                              style={{
                                opacity: expandedNav === link.name ? 1 : 0,
                                transform:
                                  expandedNav === link.name
                                    ? "translateY(0)"
                                    : "translateY(-8px)",
                                transition: `opacity 0.3s ease ${j * 0.05}s, transform 0.3s ease ${j * 0.05}s`,
                              }}
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
                                      border: "1px solid rgba(255,255,255,0.06)",
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
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
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
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="mt-auto"
          style={{
            animation:
              "mobileMenuFooterIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both",
          }}
        >
          <Link
            href="/kontakt"
            onClick={onClose}
            className="group relative flex flex-col items-center justify-center gap-6 w-full py-12 bg-[#161616] text-white transition-all duration-500 overflow-hidden border-t border-white/5"
          >
            <div className="absolute inset-0 bg-[#916AFF] -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1]" />

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
        </div>
      </div>
      <style>{`
        @keyframes mobileMenuIn {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0%);
          }
        }
        @keyframes mobileMenuReveal {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        @keyframes mobileMenuItemIn {
          from {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }
        @keyframes mobileMenuFooterIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>,
    document.body,
  );
};

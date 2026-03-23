"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { OfferDropdown } from "../header/OfferDropdown";
import { MobileMenu } from "../header/MobileMenu";
import { ReelCtaButton } from "../ui/ReelCtaButton";

export const Header: React.FC<{ allowVisibility?: boolean }> = ({
  allowVisibility = true,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Add state for background styling
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [expandedMobileNav, setExpandedMobileNav] = useState<string | null>(
    null,
  );
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (navName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredNav(navName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredNav(null);
    }, 250); // 250ms delay to avoid accidental closing
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state for background transparency
      setIsScrolled(currentScrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Oferta", href: "/oferta", hasDropdown: true },
    { name: "Realizacje", href: "/realizacje" },
    { name: "Opinie", href: "/opinie" },
    { name: "O firmie", href: "/o-firmie" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full py-4 sm:py-6 px-4 sm:px-8 lg:px-16 flex items-center justify-center z-50 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${allowVisibility && !isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"} text-white`}
    >
      {/* Backdrop blur wrapper for better readability when scrolling over content */}
      <div
        className={`absolute top-0 left-0 w-full h-[180px] pointer-events-none select-none transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(to top, transparent 0%, rgba(23, 23, 23, 0.8) 100%)",
          maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 30%, transparent 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      ></div>

      <div className="w-full max-w-screen-2xl flex items-center justify-between relative z-10">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <Link href="/" className="block hover:opacity-90 transition-opacity">
              <img
                src="/assets/hermer-logo.svg"
                alt="Hermer"
                className="w-auto h-10 sm:h-12"
              />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            if (link.name === "Oferta") {
              return (
                <div
                  key={link.name}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => handleMouseEnter(link.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={`text-sm font-medium hover:text-[#916AFF] transition-colors flex items-center gap-1 py-4 ${
                      isScrolled
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={14}
                      className="mt-0.5 group-hover:rotate-180 transition-transform duration-300"
                    />
                  </Link>

                  {hoveredNav === link.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                      <OfferDropdown />
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-[#916AFF] transition-colors flex items-center gap-1 ${
                  isScrolled ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown size={14} className="mt-0.5" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <ReelCtaButton
            text="Kontakt"
            href="/kontakt"
            baseColor="#ffffff"
            textColor="#000000"
            hoverColor="#916AFF"
            hoverTextColor="#ffffff"
            size="small"
          />
        </div>

        {/* Mobile hamburger button */}
        <button
          className="lg:hidden relative z-60 p-2 text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-[5px]">
            <span
              className={`w-full h-[2px] bg-white block origin-center transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-full h-[2px] bg-white block transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "opacity-0 translate-x-[10px]" : ""
              }`}
            />
            <span
              className={`w-full h-[2px] bg-white block origin-center transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile slide-in menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navLinks={navLinks}
          expandedNav={expandedMobileNav}
          onToggleExpand={setExpandedMobileNav}
        />
      </div>
    </header>
  );
};

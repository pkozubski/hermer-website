"use client";

import React, { useEffect, useRef } from "react";

/**
 * Oficjalny widget Trustindex (typ: button).
 * Skrypt ładowany bezpośrednio do kontenera, żeby widget renderował się w tym miejscu.
 */
export const TrustedShopsWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Zapobiegaj podwójnemu wstrzyknięciu (React StrictMode)
    if (containerRef.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js?cfc71cf6763b707d983657621bd";
    script.async = true;
    script.defer = true;

    containerRef.current.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div ref={containerRef} className="pt-4" />;
};

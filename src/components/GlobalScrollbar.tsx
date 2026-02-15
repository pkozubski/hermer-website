"use client";

import { usePathname } from "next/navigation";
import { createGlobalStyle } from "styled-components";

// Define the global style component
const HideScrollbarStyle = createGlobalStyle`
  /* Hide scrollbar for Chrome, Safari and Opera */
  html::-webkit-scrollbar,
  body::-webkit-scrollbar,
  *::-webkit-scrollbar {
    display: none !important;
    width: 0px !important;
    height: 0px !important;
    background: transparent !important;
  }

  html::-webkit-scrollbar-track,
  body::-webkit-scrollbar-track,
  *::-webkit-scrollbar-track {
    background: transparent !important;
  }

  html::-webkit-scrollbar-thumb,
  body::-webkit-scrollbar-thumb,
  *::-webkit-scrollbar-thumb {
    background: transparent !important;
    border: none !important;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  html,
  body,
  * {
    -ms-overflow-style: none !important;  /* IE and Edge */
    scrollbar-width: none !important;  /* Firefox */
  }
`;

export function GlobalScrollbar() {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  // If in studio, do NOT inject these global styles
  if (isStudio) {
    return null;
  }

  return <HideScrollbarStyle />;
}

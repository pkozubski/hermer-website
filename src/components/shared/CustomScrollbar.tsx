"use client";
import { useLenis } from "lenis/react";
import { useRef } from "react";
import { usePathname } from "next/navigation";

export const CustomScrollbar = () => {
  const thumbRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  useLenis(({ scroll, limit }) => {
    if (!thumbRef.current) return;
    // Calculate progress based on current scroll position and total scrollable distance
    const progress = limit > 0 ? scroll / limit : 0;
    
    // Use a fixed height for the scroll indicator track
    const trackHeight = 200; // px
    // Calculate thumb position within the track (40px is thumb height roughly)
    const thumbY = progress * (trackHeight - 40);
    
    // Mutate DOM directly to bypass React state and avoid 120fps re-renders
    thumbRef.current.style.transform = `translateY(${thumbY}px)`;
  });

  if (isStudio) return null;

  return (
    <div className="fixed top-1/2 right-2 -translate-y-1/2 h-[200px] w-[5px] bg-gray-200/20 z-[9999] rounded-full pointer-events-none hidden md:block">
      <div
        ref={thumbRef}
        className="absolute top-0 left-0 w-full bg-[#916AFF] rounded-full will-change-transform"
        style={{
          height: "20%", // The thumb is 20% of the track height
          transform: `translateY(0px)`,
        }}
      />
    </div>
  );
};

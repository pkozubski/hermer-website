"use client";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";

export const CustomScrollbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [docHeight, setDocHeight] = useState(0);

  const lenis = useLenis(({ scroll, limit }) => {
    // Calculate progress based on current scroll position and total scrollable distance
    const progress = limit > 0 ? scroll / limit : 0;
    setScrollProgress(progress);
  });

  useEffect(() => {
    const updateDimensions = () => {
      setWindowHeight(window.innerHeight);
      setDocHeight(document.documentElement.scrollHeight);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // Update dimensions periodically to catch dynamic content changes
    const interval = setInterval(updateDimensions, 1000);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      clearInterval(interval);
    };
  }, []);

  // Use a fixed height for the scroll indicator track
  const trackHeight = 200; // px
  // Calculate thumb position within the track
  const thumbY = scrollProgress * (trackHeight - 40); // 40px is thumb height roughly

  return (
    <div className="fixed top-1/2 right-2 -translate-y-1/2 h-[200px] w-[5px] bg-gray-200/20 z-[9999] rounded-full mix-blend-difference pointer-events-none hidden md:block">
      <div
        className="absolute top-0 left-0 w-full bg-[#916AFF] rounded-full transition-transform duration-75 ease-out"
        style={{
          height: "20%", // The thumb is 20% of the track height
          transform: `translateY(${thumbY}px)`,
        }}
      />
    </div>
  );
};

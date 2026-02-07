"use client";

import { useEffect, useState, useCallback, useRef, memo } from "react";

// Different squiggle path variants - each extends beyond screen edges
const SQUIGGLE_VARIANTS = [
  {
    // Original - from beyond left/bottom to beyond top/right
    viewBox: "-220 -100 1020 720",
    path: "M-51.937 582.5C32.9723 617.386 198.536 598.5 198.536 425.828C198.536 334 113.797 318.767 58.0354 385.5C-96.9663 571 -207.41 280.262 -51.937 190.5C103.536 100.737 143.72 216.339 287.036 99.6722C377.536 26 453.586 -18.3539 511.536 71C589.036 190.5 796.622 -80 573.329 -80",
    style: {
      left: "-15%",
      bottom: "-20%",
      width: "130%",
      height: "140%",
    },
  },
  {
    // Horizontally mirrored - from beyond right/bottom to beyond top/left
    viewBox: "-220 -100 1020 720",
    path: "M851.937 582.5C767.028 617.386 601.464 598.5 601.464 425.828C601.464 334 686.203 318.767 741.965 385.5C896.966 571 1007.41 280.262 851.937 190.5C696.464 100.737 656.28 216.339 512.964 99.6722C422.464 26 346.414 -18.3539 288.464 71C210.964 190.5 3.378 -80 226.671 -80",
    style: {
      right: "-15%",
      bottom: "-20%",
      width: "130%",
      height: "140%",
    },
  },
  {
    // Vertically mirrored - from beyond left/top to beyond bottom/right
    viewBox: "-220 -100 1020 720",
    path: "M-51.937 37.5C32.9723 2.614 198.536 21.5 198.536 194.172C198.536 286 113.797 301.233 58.0354 234.5C-96.9663 49 -207.41 339.738 -51.937 429.5C103.536 519.263 143.72 403.661 287.036 520.328C377.536 594 453.586 638.354 511.536 549C589.036 429.5 796.622 700 573.329 700",
    style: {
      left: "-15%",
      top: "-20%",
      width: "130%",
      height: "140%",
    },
  },
  {
    // Both mirrored - from beyond right/top to beyond bottom/left
    viewBox: "-220 -100 1020 720",
    path: "M851.937 37.5C767.028 2.614 601.464 21.5 601.464 194.172C601.464 286 686.203 301.233 741.965 234.5C896.966 49 1007.41 339.738 851.937 429.5C696.464 519.263 656.28 403.661 512.964 520.328C422.464 594 346.414 638.354 288.464 549C210.964 429.5 3.378 700 226.671 700",
    style: {
      right: "-15%",
      top: "-20%",
      width: "130%",
      height: "140%",
    },
  },
];

// Two solid colors to choose from
const STROKE_COLORS = ["#9868FF", "#52D8EA"]; // Purple and Cyan

// Snake length as percentage of total path
const SNAKE_LENGTH = 0.35;
const SQUIGGLE_STROKE_WIDTH = 18;
const SQUIGGLE_BLUR_PX = 10;

// CSS keyframes injected once for squiggle dash animation
const SQUIGGLE_STYLE_ID = "hero-squiggle-keyframes";
function ensureSquiggleStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(SQUIGGLE_STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = SQUIGGLE_STYLE_ID;
  style.textContent = `
    @keyframes squiggle-dash {
      from { stroke-dashoffset: var(--dash-start); }
      to { stroke-dashoffset: var(--dash-end); }
    }
    @keyframes squiggle-fade-in {
      from { opacity: 0; }
      to { opacity: 0.32; }
    }
    @keyframes squiggle-fade-out {
      from { opacity: 0.32; }
      to { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

const SquigglePath = memo(function SquigglePath({
  variant,
  color,
  animKey,
}: {
  variant: (typeof SQUIGGLE_VARIANTS)[number];
  color: string;
  animKey: number;
}) {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(2000);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [variant.path]);

  const snakeVisibleLength = pathLength * SNAKE_LENGTH;
  const totalDashLength = pathLength + snakeVisibleLength;

  return (
    <div
      key={animKey}
      className="absolute"
      style={{
        ...variant.style,
        animation: "squiggle-fade-in 0.3s ease-out forwards",
      }}
    >
      <svg
        className="w-full h-full"
        viewBox={variant.viewBox}
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: `blur(${SQUIGGLE_BLUR_PX}px)` }}
      >
        <path
          ref={pathRef}
          d={variant.path || "M0 0"}
          stroke={color}
          strokeWidth={SQUIGGLE_STROKE_WIDTH}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={`${snakeVisibleLength} ${totalDashLength}`}
          style={{
            "--dash-start": snakeVisibleLength,
            "--dash-end": -pathLength - snakeVisibleLength,
            animation: "squiggle-dash 5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
          } as React.CSSProperties}
        />
      </svg>
    </div>
  );
});

export default memo(function HeroSquiggle() {
  const [squiggle, setSquiggle] = useState<{
    variantIdx: number;
    colorIdx: number;
    key: number;
  } | null>(null);

  useEffect(() => {
    ensureSquiggleStyles();

    let key = 0;
    let lastVariant = -1;

    const pickNew = () => {
      let newVariant = Math.floor(Math.random() * SQUIGGLE_VARIANTS.length);
      if (newVariant === lastVariant && SQUIGGLE_VARIANTS.length > 1) {
        newVariant = (newVariant + 1) % SQUIGGLE_VARIANTS.length;
      }
      lastVariant = newVariant;
      key++;
      setSquiggle({
        variantIdx: newVariant,
        colorIdx: Math.floor(Math.random() * STROKE_COLORS.length),
        key,
      });
    };

    const initialDelay = setTimeout(pickNew, 2000);
    const interval = setInterval(pickNew, 6000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      {squiggle && (
        <SquigglePath
          variant={SQUIGGLE_VARIANTS[squiggle.variantIdx]}
          color={STROKE_COLORS[squiggle.colorIdx]}
          animKey={squiggle.key}
        />
      )}
    </div>
  );
});

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LucideIcon } from "lucide-react";

interface CardData {
  id: string;
  theme: string;
  icon: LucideIcon;
  title: string;
  content: React.ReactNode;
}

interface CardWheelHorizontalProps {
  cards: CardData[];
  direction?: "left" | "right";
}

const ITEM_WIDTH = 350; // Adjusted for better spacing
const GAP = 10;

export const CardWheelHorizontal: React.FC<CardWheelHorizontalProps> = ({
  cards,
  direction = "left",
}) => {
  const wheelRef = useRef<HTMLDivElement>(null);

  // Double the cards instead of triple to reduce memory usage on mobile (iOS crash prevention)
  const repeatedCards = [...cards, ...cards];
  const total = repeatedCards.length;

  // Calculate radius based on the total circumference
  // r = (width * total) / 2π
  const radius = ((ITEM_WIDTH + GAP) * total) / (2 * Math.PI);
  const angleStep = 360 / total;

  useGSAP(
    () => {
      if (!wheelRef.current) return;

      gsap.set(wheelRef.current, {
        z: -radius,
        force3D: true,
      });

      const dirMulti = direction === "left" ? 1 : -1;
      const step = angleStep * dirMulti;

      const rotate = () => {
        gsap.to(wheelRef.current, {
          rotationY: `+=${step}`,
          duration: 1.6,
          ease: "back.out(1.2)",
          delay: 2,
          force3D: true,
          onComplete: rotate,
        });
      };

      rotate();
    },
    { scope: wheelRef },
  );

  return (
    <div className="w-full h-[400px] relative perspective-[1200px] overflow-visible">
      <div
        ref={wheelRef}
        className="w-full h-full absolute top-0 left-0 transform-style-3d bg-transparent flex items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {repeatedCards.map((card, i) => (
          <div
            key={`${card.id}-${i}`}
            className="absolute top-1/2 left-1/2 w-[350px] flex justify-center items-center backface-hidden"
            style={{
              marginTop: "-130px",
              marginLeft: `-${ITEM_WIDTH / 2}px`,
              transform: `rotateY(${i * angleStep}deg) translateZ(${radius}px)`,
              backfaceVisibility: "hidden",
              contain: "content",
            }}
          >
            <div className="w-full flex justify-center">{card.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

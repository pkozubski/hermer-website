import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LiquidCard } from "./cards/LiquidCard";
import { LucideIcon } from "lucide-react";

interface CardData {
  id: string;
  theme: string;
  icon: LucideIcon;
  title: string;
  content: React.ReactNode;
}

interface CardWheelProps {
  cards: CardData[];
  direction?: "up" | "down";
}

const ITEM_HEIGHT = 400; // Estimated height of LiquidCard + margin

export const CardWheel: React.FC<CardWheelProps> = ({
  cards,
  direction = "up",
}) => {
  const wheelRef = useRef<HTMLDivElement>(null);

  // Triple the cards to ensures we have a dense enough wheel
  const repeatedCards = [...cards, ...cards, ...cards];
  const total = repeatedCards.length;

  // Calculate radius based on the total circumference
  // r = (height * total) / 2π
  const radius = (ITEM_HEIGHT * total) / (2 * Math.PI);
  const angleStep = 360 / total;

  useGSAP(
    () => {
      if (!wheelRef.current) return;

      // Set initial position
      // We want the wheel container to be pushed back so the front cards are at Z=0
      gsap.set(wheelRef.current, {
        z: -radius,
      });

      // Determine rotation direction
      // For 'up' scroll (items moving up), the wheel must rotate "away" at the top -> negative RotationX?
      // Let's visualize:
      // 0 deg: Item at front.
      // +90 deg: Top comes forward.
      // -90 deg: Top goes back.
      // If we want items to move UP, the surface must move UP.
      // Front surface moving up corresponds to +RotationX (Top coming forward, bottom going back... wait)
      // If cylinder rotates "forward" (top to viewer), the front face moves DOWN.
      // So for "up" movement, we need NEGATIVE rotation (Top goes away, Bottom comes forward... wait.
      // Top away (Back), Bottom forward (Front) -> Front face moves UP?
      // Let's check hand rule. Thumb right (X axis). Fingers curl front-to-back (positive?).
      // Usually positive X rotation = top coming towards you. Front face moves DOWN.
      // Negative X rotation = top going away. Front face moves UP.
      // So for 'up', we want negative rotation.

      const dirMulti = direction === "up" ? -1 : 1;
      const step = angleStep * dirMulti;

      // Recursive animation with delay and overshoot
      const rotate = () => {
        gsap.to(wheelRef.current, {
          rotationX: `+=${step}`,
          duration: 1.6,
          ease: "back.out(1.2)", // "Super smooth" overshoot
          delay: 2, // Wait 2s between rotations
          onComplete: rotate,
        });
      };

      rotate();
    },
    { scope: wheelRef },
  );

  return (
    <div className="w-full h-full relative perspective-[2000px]">
      <div
        ref={wheelRef}
        className="w-full h-full absolute top-0 left-0 transform-style-3d bg-transparent"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {repeatedCards.map((card, i) => (
          <div
            key={`${card.id}-${i}`}
            className="absolute left-0 top-1/2 w-full flex justify-center items-center backface-hidden"
            style={{
              height: `${ITEM_HEIGHT}px`,
              marginTop: `-${ITEM_HEIGHT / 2}px`, // Center element on the pivot
              transform: `rotateX(${i * angleStep}deg) translateZ(${radius}px)`,
              // Ensure backface visibility if needed, but 'backface-hidden' usually improves perf
              backfaceVisibility: "hidden",
            }}
          >
            {/* 
              We need to remove the margin from LiquidCard effectively, 
              or account for it. 
              LiquidCard has 'mb-8' (32px).
              Our ITEM_HEIGHT is 400.
              If content < 368, it fits.
            */}
            <div className="w-full">
              <LiquidCard {...card} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

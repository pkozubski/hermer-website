import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { LucideIcon } from 'lucide-react';

interface CardData {
  id: string;
  theme: string;
  icon: LucideIcon;
  title: string;
  content: React.ReactNode;
}

interface CardWheelProps {
  cards: CardData[];
  direction?: 'up' | 'down';
}

const ITEM_HEIGHT = 320; // Estimated height of LiquidCard + margin

export const CardWheel: React.FC<CardWheelProps> = ({
  cards,
  direction = 'up',
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

      gsap.set(wheelRef.current, {
        z: -radius,
        force3D: true,
      });

      const dirMulti = direction === 'up' ? -1 : 1;
      const step = angleStep * dirMulti;

      // Continuous rotation using GSAP timeline for better performance
      const rotate = () => {
        gsap.to(wheelRef.current, {
          rotationX: `+=${step}`,
          duration: 1.6,
          ease: 'back.out(1.2)',
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
    <div className="w-full h-full relative perspective-[2000px]">
      <div
        ref={wheelRef}
        className="w-full h-full absolute top-0 left-0 transform-style-3d bg-transparent"
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {repeatedCards.map((card, i) => (
          <div
            key={`${card.id}-${i}`}
            className="absolute left-0 top-1/2 w-full flex justify-center items-center backface-hidden"
            style={{
              height: `${ITEM_HEIGHT}px`,
              marginTop: `-${ITEM_HEIGHT / 2}px`,
              transform: `rotateX(${i * angleStep}deg) translateZ(${radius}px)`,
              backfaceVisibility: 'hidden',
            }}
          >
            {/* 
              Render content directly. 
              The content should include the card wrapper if needed.
            */}
            <div className="w-full flex justify-center">{card.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

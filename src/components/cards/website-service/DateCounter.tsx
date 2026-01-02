import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
// Dimensions
const WIDGET_HEIGHT = 150;
const DIGIT_HEIGHT = 110;
const DateCounter = ({ active = false }: { active?: boolean }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [digits, setDigits] = useState<{
    start: { d: string; m: string; y: string };
    end: { d: string; m: string; y: string };
  } | null>(null);
  useEffect(() => {
    const now = new Date();
    // Simulate current date if needed, or use real date.
    const future = new Date(now);
    future.setDate(now.getDate() + 14);
    const formatDate = (date: Date) => {
      const d = String(date.getDate()).padStart(2, "0");
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const y = String(date.getFullYear()).slice(-2);
      return { d, m, y };
    };
    setDigits({
      start: formatDate(now),
      end: formatDate(future),
    });
  }, []);
  useEffect(() => {
    if ((active || isInView) && digits) {
      const timer = setTimeout(() => setIsPlaying(true), 300);
      return () => clearTimeout(timer);
    } else {
      setIsPlaying(false);
    }
  }, [active, isInView, digits]);
  if (!digits) return null;
  return (
    <Wrapper ref={containerRef}>
      <HeaderSection>
        <MainTitle>Realizacja</MainTitle>
        <SubTitle>Startujemy dzisiaj</SubTitle>
        <Label>PROJEKT GOTOWY:</Label>
      </HeaderSection>
      <WidgetFrame
        initial={{ scale: 0.95, opacity: 0 }}
        animate={
          active || isInView
            ? { scale: 1, opacity: 1 }
            : { scale: 0.95, opacity: 0 }
        }
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <GlassReflection />
        <BackgroundGradient />
        <ContentMask>
          <DateSection>
            {/* Dzień */}
            <SlotDigit
              from={parseInt(digits.start.d[0])}
              to={parseInt(digits.end.d[0])}
              play={isPlaying}
              delay={0.0}
            />
            <SlotDigit
              from={parseInt(digits.start.d[1])}
              to={parseInt(digits.end.d[1])}
              play={isPlaying}
              delay={0.1}
            />
          </DateSection>
          <SeparatorLine />
          <DateSection>
            {/* Miesiąc */}
            <SlotDigit
              from={parseInt(digits.start.m[0])}
              to={parseInt(digits.end.m[0])}
              play={isPlaying}
              delay={0.2}
            />
            <SlotDigit
              from={parseInt(digits.start.m[1])}
              to={parseInt(digits.end.m[1])}
              play={isPlaying}
              delay={0.3}
            />
          </DateSection>
          <SeparatorLine />
          <DateSection>
            {/* Rok */}
            <SlotDigit
              from={parseInt(digits.start.y[0])}
              to={parseInt(digits.end.y[0])}
              play={isPlaying}
              delay={0.4}
            />
            <SlotDigit
              from={parseInt(digits.start.y[1])}
              to={parseInt(digits.end.y[1])}
              play={isPlaying}
              delay={0.5}
            />
          </DateSection>
        </ContentMask>
        <InnerShadow />
      </WidgetFrame>
    </Wrapper>
  );
};
export default DateCounter;
const SlotDigit = ({
  from,
  to,
  play,
  delay,
}: {
  from: number;
  to: number;
  play: boolean;
  delay: number;
}) => {
  // Bi-directional Logic
  let delta = to - from;
  if (delta > 5) delta -= 10;
  else if (delta < -5) delta += 10;
  // If delta is 0, we force a full positive rotation to show activity
  const effectiveDelta = delta === 0 ? 10 : delta;
  const steps = Math.abs(effectiveDelta);
  const direction = effectiveDelta > 0 ? 1 : -1;
  const numbers: number[] = [];
  let initialY = 0;
  let targetY = 0;
  if (direction > 0) {
    // POSITIVE (Increment): Scroll UP (Content enters from bottom)
    // Sequence: [from, from+1, ... to]
    // Animate: 0 -> -steps * H
    for (let i = 0; i <= steps; i++) {
      numbers.push((((from + i) % 10) + 10) % 10);
    }
    initialY = 0;
    targetY = -(steps * DIGIT_HEIGHT);
  } else {
    // NEGATIVE (Decrement): Scroll DOWN (Content enters from top)
    // We want visual sequence: from -> form-1 -> ... -> to
    // DOM Stack needs correctly ordered elements so sliding Y down reveals them.
    // Stack: [to, ... , from-1, from]
    // Start View: 'from' (at bottom of stack)
    // End View: 'to' (at top of stack)
    // Motion: Y goes from -(steps * H) -> 0
    // Example 2->1. steps=1. Stack: [1, 2].
    // i=0 (to): 1. i=1 (from): 2.
    // Correct.
    for (let i = 0; i <= steps; i++) {
      // Logic: we want [to, to+1... from] basically?
      // No, we want [to, ..., from] where 'to' is logically 'lower value' in the wrap sense...
      // Wait, loop construction:
      // We want the array to be displayed Top->Bottom.
      // Index 0 is Top.
      // If we scroll DOWN to reveal Top, Top is final.
      // So numbers[0] = to.
      // numbers[end] = from.
      // So we build sequence from 'to' up to 'from' (inverse of movement).
      // Since movement is negative (from -> to is -k), then to -> from is +k.
      let val = (((to + i) % 10) + 10) % 10;
      numbers.push(val);
    }
    initialY = -(steps * DIGIT_HEIGHT);
    targetY = 0;
  }
  return (
    <DigitWindow>
      <Reel
        initial={{ y: initialY, filter: "blur(0px)" }}
        animate={
          play
            ? {
                y: targetY,
              }
            : {
                y: initialY,
              }
        }
        transition={{
          y: {
            duration: 0.8 + steps * 0.1,
            ease: [0.2, 0.8, 0.2, 1],
            delay: delay,
          },
        }}
      >
        {numbers.map((num, i) => (
          <DigitCell
            key={i}
            animate={
              play
                ? {
                    filter:
                      (direction > 0 && i === 0) ||
                      (direction < 0 && i === numbers.length - 1)
                        ? "blur(0px)" // The starting number shouldn't blur immediately if we want crisp start? Actually it moves immediately.
                        : i === (direction > 0 ? numbers.length - 1 : 0) // The target landing number
                        ? "blur(0px)"
                        : ["blur(2px)", "blur(0px)"], // Passing numbers
                  }
                : {
                    filter: "blur(0px)",
                  }
            }
            // Simplified Blur Logic for reliability:
            // Just blur everything slightly during motion except the final landing?
            // Or stick to simple per-cell blur.
            style={
              {
                // Apply a static blur class or style if needed, but motion prop handles it.
              }
            }
          >
            {num}
          </DigitCell>
        ))}
      </Reel>
    </DigitWindow>
  );
};
// --- STYLES ---
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-top: 10px;
`;
const HeaderSection = styled.div`
  margin-bottom: 24px;
  padding-left: 8px;
`;
const MainTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 4px 0;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;
const SubTitle = styled.div`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 12px;
  font-weight: 400;
`;
const Label = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;
const WidgetFrame = styled(motion.div)`
  width: 100%;
  height: ${WIDGET_HEIGHT}px;
  background: #000;
  border-radius: 32px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.6),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  transform: translate3d(0, 0, 0);
`;
const BackgroundGradient = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 120%, #222 0%, #000000 80%);
  z-index: 0;
`;
const GlassReflection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 2;
  pointer-events: none;
`;
const InnerShadow = styled.div`
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.9);
  pointer-events: none;
  z-index: 5;
  border-radius: 32px;
`;
const ContentMask = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  z-index: 3;
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );
`;
const DateSection = styled.div`
  display: flex;
  gap: 1px;
`;
const SeparatorLine = styled.div`
  width: 1px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0 4px;
`;
const DigitWindow = styled.div`
  width: 62px;
  height: ${DIGIT_HEIGHT}px;
  overflow: hidden;
  position: relative;
`;
const Reel = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  will-change: transform;
`;
const DigitCell = styled(motion.div)`
  height: ${DIGIT_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI",
    sans-serif;
  font-size: 100px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -4px;
  padding-bottom: 6px;
  color: #fff;
  background: linear-gradient(180deg, #ffffff 30%, #a1a1aa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

'use client';
import { useEffect, useRef, useCallback, useState } from 'react';

const CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  trailLength?: number;
}

export const ScrambleText = ({
  text,
  className = '',
  delay = 0,
  speed = 25,
  trailLength = 4,
}: ScrambleTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);
  const animationRef = useRef<{
    timeout: ReturnType<typeof setTimeout> | null;
    raf: number | null;
    lastTime: number;
    revealedCount: number;
    isRunning: boolean;
  }>({
    timeout: null,
    raf: null,
    lastTime: 0,
    revealedCount: 0,
    isRunning: false,
  });

  const cleanup = useCallback(() => {
    const state = animationRef.current;
    if (state.timeout) clearTimeout(state.timeout);
    if (state.raf) cancelAnimationFrame(state.raf);
    state.timeout = null;
    state.raf = null;
    state.isRunning = false;
    state.revealedCount = 0;
    state.lastTime = 0;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsInView(true);
        observer.disconnect();
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) {
      cleanup();
      if (ref.current) ref.current.textContent = '';
      return;
    }

    if (animationRef.current.isRunning) return;
    animationRef.current.isRunning = true;

    const state = animationRef.current;

    const step = (timestamp: number) => {
      if (!state.isRunning) return;

      if (!state.lastTime) state.lastTime = timestamp;
      const elapsed = timestamp - state.lastTime;

      if (elapsed >= speed) {
        state.lastTime = timestamp;
        state.revealedCount++;

        const result = text
          .split('')
          .map((char, i) => {
            if (i < state.revealedCount - trailLength) return char;
            if (char === ' ' || char === '•') return char;
            if (i < state.revealedCount)
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            return '';
          })
          .join('');

        if (ref.current) ref.current.textContent = result;

        if (state.revealedCount >= text.length + trailLength) {
          if (ref.current) ref.current.textContent = text;
          state.isRunning = false;
          return;
        }
      }

      state.raf = requestAnimationFrame(step);
    };

    state.timeout = setTimeout(() => {
      state.raf = requestAnimationFrame(step);
    }, delay);

    return cleanup;
  }, [isInView, text, delay, speed, trailLength, cleanup]);

  return <span ref={ref} className={className} />;
};

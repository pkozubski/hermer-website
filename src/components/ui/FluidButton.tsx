"use client";

/**
 * FluidButton — fully declarative Motion component with REAL SVG gooey effect.
 */

import {
  useState,
  useRef,
  useEffect,
  useMemo,
  useId,
  useSyncExternalStore,
  type ReactNode,
  type RefObject,
} from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const INITIAL_Y = 140;
const BLOB_H = 56;
const BLOB_W = 56;
const ACCENT = 40;
const TRAIL_W = 40;
const T = 1;

function spr(cfg: Record<string, unknown>): Record<string, unknown> {
  if (T === 1) return cfg;
  const c = { ...cfg };
  if (c.stiffness != null) c.stiffness = (c.stiffness as number) / (T * T);
  if (c.damping != null) c.damping = (c.damping as number) / T;
  if (c.delay != null) c.delay = (c.delay as number) * T;
  return c;
}

function tw(cfg: Record<string, unknown>): Record<string, unknown> {
  if (T === 1) return cfg;
  const c = { ...cfg };
  if (c.duration != null) c.duration = (c.duration as number) * T;
  if (c.delay != null) c.delay = (c.delay as number) * T;
  return c;
}

function ms(val: number): number {
  return T === 1 ? val : val * T;
}

function cs(seconds: number): string {
  return `${(seconds * T).toFixed(3)}s`;
}

function isSafariBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  return (
    /Safari/i.test(ua) &&
    !/Chrome|CriOS|FxiOS|EdgiOS|OPR|SamsungBrowser/i.test(ua)
  );
}

export interface FluidButtonProps {
  label?: string;
  icon?: ReactNode;
  accentColor?: string;
  onClick?: () => void;
  className?: string;
  trigger?: "auto" | "scroll";
  scrollTriggerRef?: RefObject<HTMLElement | null>;
  scrollThreshold?: number;
  scrollRootMargin?: string;
  autoPlayDelay?: number;
  href?: string;
}

export function FluidButton({
  label = "Dowiedz się więcej",
  icon,
  accentColor = "#8b5cf6",
  onClick,
  className = "",
  trigger = "scroll",
  scrollTriggerRef,
  scrollThreshold = 0.45,
  scrollRootMargin = "0px 0px -50% 0px",
  autoPlayDelay = 500,
  href,
}: FluidButtonProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [settled, setSettled] = useState(false);
  const useLiteMode = useSyncExternalStore(
    () => () => {},
    isSafariBrowser,
    () => false,
  );

  const uid = useId().replace(/:/g, "");
  const gooId = `goo-${uid}`;
  const gooAccentId = `gooa-${uid}`;

  const { textWidth, finalWidth, xOffset } = useMemo(() => {
    let measured = label.length * 9.5;
    if (typeof document !== "undefined") {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.font =
          "500 17px -apple-system, BlinkMacSystemFont, system-ui, sans-serif";
        measured = ctx.measureText(label).width;
      }
    }
    const fw = Math.max(Math.ceil(measured) + 104, BLOB_W);
    const xOff = fw / 2 - ACCENT / 2 - 8;
    return { textWidth: Math.ceil(measured), finalWidth: fw, xOffset: xOff };
  }, [label]);

  useEffect(() => {
    if (trigger !== "auto") return;
    const t = setTimeout(() => setIsOpen(true), ms(autoPlayDelay));
    return () => clearTimeout(t);
  }, [trigger, autoPlayDelay]);

  useEffect(() => {
    if (trigger !== "scroll") return;
    let rafId: number | null = null;
    let target: HTMLElement | null = null;
    let scrollRafId: number | null = null;
    let tries = 0;

    const openThreshold = Math.min(Math.max(scrollThreshold, 0), 1);
    const closeThreshold = Math.max(openThreshold * 0.5, 0.01);

    const onScroll = () => {
      if (scrollRafId !== null) return;
      scrollRafId = requestAnimationFrame(() => {
        scrollRafId = null;
        if (!target) return;
        const rect = target.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = (vh - rect.top) / (vh + rect.height);

        if (progress >= openThreshold) {
          setIsOpen(true);
        } else if (progress < closeThreshold) {
          setIsOpen(false);
          if (!useLiteMode) setSettled(false);
        }
      });
    };

    const setup = () => {
      const custom = scrollTriggerRef?.current;
      const section = containerRef.current?.closest(
        "section",
      ) as HTMLElement | null;
      target = custom ?? section ?? containerRef.current?.parentElement ?? null;
      if (!target) {
        if (tries < 10) {
          tries += 1;
          rafId = requestAnimationFrame(setup);
        }
        return;
      }
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    };

    setup();
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (scrollRafId !== null) cancelAnimationFrame(scrollRafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [
    trigger,
    scrollTriggerRef,
    scrollThreshold,
    scrollRootMargin,
    useLiteMode,
  ]);

  const o = isOpen;
  const effectiveSettled = useLiteMode ? true : settled;
  const effectiveFrosted = useLiteMode ? false : settled;

  const riseSpring = spr({
    type: "spring" as const,
    stiffness: o ? 120 : 300,
    damping: o ? 7.5 : 28,
    mass: o ? 1.2 : 1,
    delay: o ? 0 : 0.35,
  });
  const trailRiseSpring = spr({
    type: "spring" as const,
    stiffness: o ? 120 : 300,
    damping: o ? 7.5 : 28,
    mass: o ? 1.2 : 1,
    delay: o ? 0.05 : 0.3,
  });
  const widthSpring = spr({
    type: "spring" as const,
    stiffness: o ? 160 : 300,
    damping: o ? 20 : 28,
    delay: o ? 0.28 : 0,
  });
  const accentLeaderX = spr({
    type: "spring" as const,
    stiffness: 200,
    damping: 15,
    mass: 1,
    delay: o ? 0.28 : 0,
  });
  const accentTrailX = spr({
    type: "spring" as const,
    stiffness: 200,
    damping: 15,
    mass: 1,
    delay: o ? 0.32 : 0.03,
  });
  const accentLeaderScale = spr({
    type: "spring" as const,
    stiffness: 40,
    damping: 14,
    mass: 2,
    delay: o ? 0 : 0.1,
  });
  const accentTrailScale = spr({
    type: "spring" as const,
    stiffness: 40,
    damping: 14,
    mass: 2,
    delay: o ? 0 : 0.1,
  });

  const innerContent = (
    <>
      <motion.span
        className="whitespace-nowrap tracking-tight mx-2 block"
        style={{
          fontSize: "17px",
          fontWeight: 500,
          color: "#f5f5f7",
          overflow: "hidden",
        }}
        initial={{ width: 0, opacity: 0, x: 15 }}
        animate={{
          width: o ? textWidth : 0,
          opacity: o ? 1 : 0,
          x: o ? 0 : 15,
        }}
        transition={{
          width: spr({
            type: "spring",
            stiffness: o ? 260 : 320,
            damping: 26,
            delay: o ? 0.5 : 0,
          }),
          opacity: tw({
            duration: o ? 0.4 : 0.12,
            ease: o ? "easeOut" : "easeIn",
            delay: o ? 0.5 : 0,
          }),
          x: spr({
            type: "spring",
            stiffness: o ? 260 : 320,
            damping: 26,
            delay: o ? 0.5 : 0,
          }),
        }}
      >
        {label}
      </motion.span>
      <div
        className="absolute inset-y-0 left-0 right-0 flex items-center pointer-events-none"
        style={{ filter: useLiteMode ? undefined : `url(#${gooAccentId})` }}
      >
        <motion.div
          className="rounded-full absolute"
          style={{
            width: TRAIL_W,
            height: TRAIL_W,
            backgroundColor: accentColor,
            left: "50%",
            marginLeft: -(TRAIL_W / 2),
          }}
          initial={{ scale: 0.1, x: 0 }}
          animate={{ scale: o ? 1 : 0.1, x: o ? xOffset : 0 }}
          transition={{ scale: accentTrailScale, x: accentTrailX }}
        />
        <motion.div
          className="rounded-full absolute"
          style={{
            width: ACCENT,
            height: ACCENT,
            backgroundColor: accentColor,
            left: "50%",
            marginLeft: -(ACCENT / 2),
          }}
          initial={{ scale: 0.1, x: 0 }}
          animate={{ scale: o ? 1 : 0.1, x: o ? xOffset : 0 }}
          transition={{ scale: accentLeaderScale, x: accentLeaderX }}
        />
      </div>
      <motion.div
        className="rounded-full flex items-center justify-center shrink-0 absolute"
        style={{
          width: ACCENT,
          height: ACCENT,
          left: "50%",
          marginLeft: -(ACCENT / 2),
          zIndex: 10,
          boxShadow: hovered
            ? `0 6px 24px ${accentColor}66`
            : `0 4px 14px ${accentColor}4D`,
          transition: "box-shadow 0.25s ease",
        }}
        initial={{ scale: 0.1, x: 0 }}
        animate={{ scale: o ? 1 : 0.1, x: o ? xOffset : 0 }}
        transition={{ scale: accentLeaderScale, x: accentLeaderX }}
      >
        {icon ?? (
          <ArrowRight
            size={20}
            className="text-white"
            strokeWidth={2.2}
            style={{
              transform: hovered ? "translateX(2px)" : "translateX(0)",
              transition: "transform 0.2s ease",
            }}
          />
        )}
      </motion.div>
    </>
  );

  return (
    <div
      ref={containerRef}
      className={`relative sticky bottom-6 md:bottom-8 z-40 h-[120px] flex justify-center items-end ${className}`}
    >
      {!useLiteMode && (
        <>
          <svg
            className="absolute"
            style={{ width: 0, height: 0, overflow: "hidden" }}
            aria-hidden
          >
            <defs>
              <filter id={gooId} x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  type="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                  result="goo"
                />
                <feComponentTransfer in="goo">
                  <feFuncA type="discrete" tableValues="0 1" />
                </feComponentTransfer>
              </filter>
              <filter
                id={gooAccentId}
                x="-15%"
                y="-15%"
                width="130%"
                height="130%"
              >
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="5"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  type="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
                  result="goo"
                />
                <feComponentTransfer in="goo">
                  <feFuncA type="discrete" tableValues="0 1" />
                </feComponentTransfer>
              </filter>
            </defs>
          </svg>
          <div
            className="absolute bottom-0 left-0 right-0 h-full flex justify-center items-end pointer-events-none"
            style={{
              filter: `url(#${gooId})`,
              zIndex: 10,
              opacity: effectiveFrosted ? 0 : 1,
              transition: effectiveFrosted
                ? `opacity ${cs(0.5)} cubic-bezier(0.4, 0, 0.2, 1)`
                : `opacity ${cs(0.01)} ease`,
            }}
          >
            <motion.div
              className="absolute bottom-0 rounded-full"
              style={{
                width: TRAIL_W - 2,
                height: TRAIL_W - 2,
                backgroundColor: "#262626",
                marginBottom: 1,
              }}
              initial={{ y: INITIAL_Y, scaleY: 1 }}
              animate={{
                y: o ? 0 : INITIAL_Y,
                scaleY: o ? [1, 0.72, 1.03, 1] : [1, 1.03, 1],
              }}
              transition={{
                y: trailRiseSpring,
                scaleY: tw({
                  duration: o ? 0.52 : 0.32,
                  times: o ? [0, 0.32, 0.72, 1] : [0, 0.4, 1],
                  ease: "easeInOut",
                  delay: o ? 0.27 : 0.02,
                }),
              }}
            />
            <motion.div
              className="absolute bottom-0 rounded-full"
              style={{
                height: BLOB_H - 2,
                backgroundColor: "#262626",
                marginBottom: 1,
              }}
              initial={{ y: INITIAL_Y, width: BLOB_W - 2, scaleY: 1 }}
              animate={{
                y: o ? 0 : INITIAL_Y,
                width: o ? finalWidth - 2 : BLOB_W - 2,
                scaleY: o ? [1, 0.78, 1.04, 1] : [1, 1.03, 1],
              }}
              transition={{
                y: riseSpring,
                width: widthSpring,
                scaleY: tw({
                  duration: o ? 0.55 : 0.35,
                  times: o ? [0, 0.3, 0.68, 1] : [0, 0.4, 1],
                  ease: "easeInOut",
                  delay: o ? 0.25 : 0,
                }),
              }}
              onAnimationComplete={() => {
                if (o) setSettled(true);
              }}
            />
          </div>
        </>
      )}
      <motion.div
        className="absolute bottom-0 rounded-full overflow-hidden flex items-center cursor-pointer"
        style={{
          height: BLOB_H,
          padding: 8,
          zIndex: 20,
          backgroundColor: useLiteMode
            ? "rgba(38, 38, 38, 0.96)"
            : !effectiveSettled
              ? "transparent"
              : effectiveFrosted
                ? "rgba(38, 38, 38, 0.82)"
                : "rgba(38, 38, 38, 1)",
          backdropFilter: useLiteMode
            ? "none"
            : effectiveFrosted
              ? "blur(16px)"
              : "none",
          WebkitBackdropFilter: useLiteMode
            ? "none"
            : effectiveFrosted
              ? "blur(16px)"
              : "none",
          border: useLiteMode
            ? "1px solid rgba(255, 255, 255, 0.08)"
            : effectiveFrosted
              ? "1px solid rgba(255, 255, 255, 0.08)"
              : "1px solid transparent",
          transition: useLiteMode
            ? `background-color ${cs(0.2)} ease, border-color ${cs(0.2)} ease`
            : !effectiveSettled
              ? "none"
              : `background-color ${cs(0.5)} cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter ${cs(0.5)} cubic-bezier(0.4, 0, 0.2, 1), -webkit-backdrop-filter ${cs(0.5)} cubic-bezier(0.4, 0, 0.2, 1), border-color ${cs(0.5)} cubic-bezier(0.4, 0, 0.2, 1)`,
        }}
        initial={{ y: INITIAL_Y, width: BLOB_W }}
        animate={{ y: o ? 0 : INITIAL_Y, width: o ? finalWidth : BLOB_W }}
        transition={{ y: riseSpring, width: widthSpring }}
        whileTap={{ scale: 0.94 }}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={() => {
          if (trigger === "auto") {
            if (isOpen) {
              if (!useLiteMode) setSettled(false);
            }
            onClick?.();
            if (!onClick) setIsOpen((v) => !v);
          } else {
            onClick?.();
          }
        }}
      >
        {href ? (
          <a href={href} className="w-full h-full flex items-center">
            {innerContent}
          </a>
        ) : (
          innerContent
        )}
      </motion.div>
    </div>
  );
}

export default FluidButton;

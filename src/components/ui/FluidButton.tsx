/**
 * FluidButton — fake gooey without SVG filters, powered by GSAP.
 * Single blob rises with squash/stretch. Accent is ONE pill that
 * stretches during slide (animated width) -> no separate trail element.
 *
 * Fully rewritten from motion/react to gsap + @gsap/react.
 */

import {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  type ReactNode,
  type RefObject,
} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

/* ── layout constants ── */
const INITIAL_Y = 140;
const BLOB_H = 56;
const BLOB_W = 56;
const ACCENT = 40;
const TRAIL_W = 40;

/* ── GSAP ease presets mimicking the old Framer springs ── */
const RISE_EASE = "elastic.out(1.1, 0.4)";
const RISE_DURATION = 2.0;
const TRAIL_RISE_EASE = "elastic.out(1.1, 0.45)";
const TRAIL_RISE_DURATION = 2.1;
const WIDTH_EASE = "back.out(1.6)";
const WIDTH_DURATION = 1.0;
const SQUASH_EASE = "power2.inOut";
const ACCENT_MOVE_EASE = "elastic.out(1, 0.45)";
const ACCENT_MOVE_DURATION = 1.4;
const ACCENT_SCALE_EASE = "elastic.out(1, 0.55)";
const ACCENT_SCALE_DURATION = 2.0;
const LABEL_EASE = "power3.out";
const LABEL_DURATION = 0.8;

/* ── close eases (snappier but not instant) ── */
const CLOSE_RISE_EASE = "power3.inOut";
const CLOSE_RISE_DURATION = 0.7;
const CLOSE_WIDTH_EASE = "power3.inOut";
const CLOSE_WIDTH_DURATION = 0.55;

// gsap.globalTimeline.timeScale(0.1);

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
  label = "Dowiedz si\u0119 wi\u0119cej",
  icon,
  accentColor = "#8b5cf6",
  onClick,
  className = "",
  trigger = "scroll",
  scrollTriggerRef,
  scrollThreshold = 0,
  scrollRootMargin = "0px 0px -50% 0px",
  autoPlayDelay = 500,
  href,
}: FluidButtonProps) {
  /* ── refs ── */
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trailBlobRef = useRef<HTMLDivElement | null>(null);
  const mainBlobRef = useRef<HTMLDivElement | null>(null);
  const bgLayerRef = useRef<HTMLDivElement | null>(null);
  const fgRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);
  const accentPillRef = useRef<HTMLDivElement | null>(null);
  const accentIconRef = useRef<HTMLDivElement | null>(null);

  /* ── state ── */
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [settled, setSettled] = useState(false);
  const [frosted, setFrosted] = useState(false);

  /* ── measure label width ── */
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
    return {
      textWidth: Math.ceil(measured),
      finalWidth: fw,
      xOffset: xOff,
    };
  }, [label]);

  /* ── keep a ref to the current timeline so we can kill it ── */
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  /* ── initial positions (GSAP set) ── */
  useGSAP(
    () => {
      gsap.set(trailBlobRef.current, {
        y: INITIAL_Y,
        scaleY: 1,
      });
      gsap.set(mainBlobRef.current, {
        y: INITIAL_Y,
        width: BLOB_W - 2,
        scaleY: 1,
      });
      gsap.set(fgRef.current, { y: INITIAL_Y, width: BLOB_W });
      gsap.set(labelRef.current, {
        width: 0,
        opacity: 0,
        x: 15,
      });
      gsap.set(accentPillRef.current, {
        scale: 0.1,
        x: 0,
        width: ACCENT,
      });
      gsap.set(accentIconRef.current, { scale: 0.1, x: 0 });
    },
    { scope: containerRef },
  );

  /* ── OPEN animation ── */
  const playOpen = useCallback(() => {
    tlRef.current?.kill();
    setSettled(false);
    setFrosted(false);

    const tl = gsap.timeline({
      onComplete: () => setSettled(true),
    });

    /* --- Trail blob rise --- */
    tl.to(
      trailBlobRef.current,
      {
        y: 0,
        duration: TRAIL_RISE_DURATION,
        ease: TRAIL_RISE_EASE,
      },
      0,
    );
    // squash/stretch keyframes for trail
    tl.to(
      trailBlobRef.current,
      {
        keyframes: [
          { scaleY: 0.7, duration: 0.32, ease: SQUASH_EASE },
          { scaleY: 1.05, duration: 0.4, ease: SQUASH_EASE },
          { scaleY: 1, duration: 0.35, ease: "power2.out" },
        ],
      },
      0.5,
    );

    /* --- Main blob rise --- */
    tl.to(
      mainBlobRef.current,
      {
        y: 0,
        duration: RISE_DURATION,
        ease: RISE_EASE,
      },
      0,
    );
    // width expand (delayed)
    tl.to(
      mainBlobRef.current,
      {
        width: finalWidth - 2,
        duration: WIDTH_DURATION,
        ease: WIDTH_EASE,
      },
      0.55,
    );
    // squash/stretch keyframes for main
    tl.to(
      mainBlobRef.current,
      {
        keyframes: [
          { scaleY: 0.78, duration: 0.3, ease: SQUASH_EASE },
          { scaleY: 1.04, duration: 0.4, ease: SQUASH_EASE },
          { scaleY: 1, duration: 0.35, ease: "power2.out" },
        ],
      },
      0.45,
    );

    /* --- FG button rise + expand --- */
    tl.to(
      fgRef.current,
      {
        y: 0,
        duration: RISE_DURATION,
        ease: RISE_EASE,
      },
      0,
    );
    tl.to(
      fgRef.current,
      {
        width: finalWidth,
        duration: WIDTH_DURATION,
        ease: WIDTH_EASE,
      },
      0.55,
    );

    /* --- Accent pill: scale up + slide + stretch --- */
    tl.to(
      accentPillRef.current,
      {
        scale: 1,
        duration: ACCENT_SCALE_DURATION,
        ease: ACCENT_SCALE_EASE,
      },
      0,
    );
    tl.to(
      accentPillRef.current,
      {
        x: xOffset,
        duration: ACCENT_MOVE_DURATION,
        ease: ACCENT_MOVE_EASE,
      },
      0.6,
    );
    // width stretch keyframes (pill stretches during slide)
    tl.to(
      accentPillRef.current,
      {
        keyframes: [
          {
            width: ACCENT * 1.2,
            duration: 0.3,
            ease: "power1.out",
          },
          { width: ACCENT, duration: 0.5, ease: "power2.out" },
        ],
      },
      0.6,
    );

    /* --- Accent icon: scale up + slide --- */
    tl.to(
      accentIconRef.current,
      {
        scale: 1,
        duration: ACCENT_SCALE_DURATION,
        ease: ACCENT_SCALE_EASE,
      },
      0,
    );
    tl.to(
      accentIconRef.current,
      {
        x: xOffset,
        duration: ACCENT_MOVE_DURATION,
        ease: ACCENT_MOVE_EASE,
      },
      0.6,
    );

    /* --- Label text reveal --- */
    tl.to(
      labelRef.current,
      {
        width: textWidth,
        x: 0,
        duration: LABEL_DURATION,
        ease: LABEL_EASE,
      },
      1.0,
    );
    tl.to(
      labelRef.current,
      {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      1.0,
    );

    tlRef.current = tl;
  }, [finalWidth, textWidth, xOffset]);

  /* ── CLOSE animation ── */
  const playClose = useCallback(() => {
    tlRef.current?.kill();
    setSettled(false);
    setFrosted(false);

    const tl = gsap.timeline();

    /* --- Label text hide (fast) --- */
    tl.to(
      labelRef.current,
      {
        width: 0,
        opacity: 0,
        x: 15,
        duration: 0.3,
        ease: "power3.in",
      },
      0,
    );

    /* --- Accent pill: shrink + slide back --- */
    tl.to(
      accentPillRef.current,
      {
        x: 0,
        duration: CLOSE_WIDTH_DURATION,
        ease: CLOSE_WIDTH_EASE,
      },
      0,
    );
    tl.to(
      accentPillRef.current,
      {
        scale: 0.1,
        duration: 0.5,
        ease: "power2.in",
      },
      0.15,
    );
    // width pulse on close
    tl.to(
      accentPillRef.current,
      {
        keyframes: [
          {
            width: ACCENT * 1.15,
            duration: 0.18,
            ease: "power2.in",
          },
          { width: ACCENT, duration: 0.25, ease: "power2.out" },
        ],
      },
      0,
    );

    /* --- Accent icon: shrink + slide back --- */
    tl.to(
      accentIconRef.current,
      {
        x: 0,
        duration: CLOSE_WIDTH_DURATION,
        ease: CLOSE_WIDTH_EASE,
      },
      0,
    );
    tl.to(
      accentIconRef.current,
      {
        scale: 0.1,
        duration: 0.5,
        ease: "power2.in",
      },
      0.15,
    );

    /* --- FG button: collapse width, then drop --- */
    tl.to(
      fgRef.current,
      {
        width: BLOB_W,
        duration: CLOSE_WIDTH_DURATION,
        ease: CLOSE_WIDTH_EASE,
      },
      0,
    );
    tl.to(
      fgRef.current,
      {
        y: INITIAL_Y,
        duration: CLOSE_RISE_DURATION,
        ease: CLOSE_RISE_EASE,
      },
      0.5,
    );

    /* --- Main blob: collapse + drop --- */
    tl.to(
      mainBlobRef.current,
      {
        width: BLOB_W - 2,
        duration: CLOSE_WIDTH_DURATION,
        ease: CLOSE_WIDTH_EASE,
      },
      0,
    );
    // slight bounce on close
    tl.to(
      mainBlobRef.current,
      {
        keyframes: [
          { scaleY: 1.03, duration: 0.18, ease: SQUASH_EASE },
          { scaleY: 1, duration: 0.18, ease: "power2.out" },
        ],
      },
      0.4,
    );
    tl.to(
      mainBlobRef.current,
      {
        y: INITIAL_Y,
        duration: CLOSE_RISE_DURATION,
        ease: CLOSE_RISE_EASE,
      },
      0.45,
    );

    /* --- Trail blob: drop (slightly later) --- */
    tl.to(
      trailBlobRef.current,
      {
        keyframes: [
          { scaleY: 1.04, duration: 0.15, ease: SQUASH_EASE },
          { scaleY: 1, duration: 0.15, ease: "power2.out" },
        ],
      },
      0.5,
    );
    tl.to(
      trailBlobRef.current,
      {
        y: INITIAL_Y,
        duration: CLOSE_RISE_DURATION,
        ease: CLOSE_RISE_EASE,
      },
      0.55,
    );

    tlRef.current = tl;
  }, [finalWidth]);

  /* ── react to open/close state ── */
  useEffect(() => {
    if (isOpen) {
      playOpen();
    } else {
      playClose();
    }
  }, [isOpen, playOpen, playClose]);

  /* ── trigger: auto ── */
  useEffect(() => {
    if (trigger !== "auto") return;
    const t = setTimeout(() => setIsOpen(true), autoPlayDelay);
    return () => clearTimeout(t);
  }, [trigger, autoPlayDelay]);

  /* ── trigger: scroll (RAF-throttled) ── */
  useEffect(() => {
    if (trigger !== "scroll") return;
    let rafId: number | null = null;
    let target: HTMLElement | null = null;
    let scrollRafId: number | null = null;
    let tries = 0;

    const onScroll = () => {
      if (scrollRafId !== null) return;
      scrollRafId = requestAnimationFrame(() => {
        scrollRafId = null;
        if (!target) return;
        const rect = target.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = (vh - rect.top) / (vh + rect.height);

        if (progress >= 0.45) {
          setIsOpen(true);
        } else if (progress < 0.3) {
          setIsOpen(false);
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
      window.addEventListener("scroll", onScroll, {
        passive: true,
      });
      onScroll();
    };

    setup();
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (scrollRafId !== null) cancelAnimationFrame(scrollRafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [trigger, scrollTriggerRef]);

  /* ── frosted glass delay after settle ── */
  useEffect(() => {
    if (!settled) {
      setFrosted(false);
      return;
    }
    const t = setTimeout(() => setFrosted(true), 180);
    return () => clearTimeout(t);
  }, [settled]);

  /* ── tap animation ── */
  const handlePointerDown = useCallback(() => {
    if (fgRef.current) {
      gsap.to(fgRef.current, {
        scale: 0.94,
        duration: 0.12,
        ease: "power2.out",
      });
    }
  }, []);
  const handlePointerUp = useCallback(() => {
    if (fgRef.current) {
      gsap.to(fgRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "elastic.out(1, 0.4)",
      });
    }
  }, []);

  /* ── inner content: text + accent pill + icon ── */
  const innerContent = (
    <>
      {/* Label text */}
      <span
        ref={labelRef}
        className="whitespace-nowrap tracking-tight mx-2 block"
        style={{
          fontSize: "17px",
          fontWeight: 500,
          color: "#f5f5f7",
          overflow: "hidden",
          width: 0,
          opacity: 0,
        }}
      >
        {label}
      </span>

      {/* Accent pill — ONE element, stretches via width during slide.
           width > height -> rounded-full gives round caps + flat bridge.
           Anchored by RIGHT edge so width growth extends LEFT = trailing tail. */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center pointer-events-none overflow-hidden rounded-full">
        <div
          ref={accentPillRef}
          className="absolute rounded-full"
          style={{
            height: ACCENT,
            width: ACCENT,
            backgroundColor: accentColor,
            right: "50%",
            marginRight: -(ACCENT / 2),
            transform: "scale(0.1)",
          }}
        />
      </div>

      {/* Accent icon circle (crisp, on top, same motion as pill) */}
      <div
        ref={accentIconRef}
        className="rounded-full flex items-center justify-center shrink-0 absolute"
        style={{
          width: ACCENT,
          height: ACCENT,
          left: "50%",
          marginLeft: -(ACCENT / 2),
          zIndex: 10,
          transform: "scale(0.1)",
          boxShadow: hovered
            ? `0 6px 24px ${accentColor}66`
            : `0 4px 14px ${accentColor}4D`,
          transition: "box-shadow 0.25s ease",
        }}
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
      </div>
    </>
  );

  return (
    <div
      ref={containerRef}
      className={`relative sticky bottom-6 md:bottom-8 z-40 h-[120px] flex justify-center items-end ${className}`}
    >
      {/* BG LAYER — trail + main blob, both #262626 = seamless gooey merge */}
      <div
        ref={bgLayerRef}
        className="absolute bottom-0 left-0 right-0 h-full flex justify-center items-end pointer-events-none"
        style={{
          zIndex: 10,
          opacity: frosted ? 0 : 1,
          transition: frosted
            ? "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            : "opacity 0.01s ease",
        }}
      >
        {/* Trail blob — lags behind main blob during rise = gooey drip tail */}
        <div
          ref={trailBlobRef}
          className="absolute bottom-0 rounded-full"
          style={{
            width: TRAIL_W - 2,
            height: TRAIL_W - 2,
            backgroundColor: "#262626",
            marginBottom: 1,
            boxShadow: "none",
            filter: "none",
            transform: `translateY(${INITIAL_Y}px)`,
          }}
        />
        {/* Main blob — leads the rise, expands width */}
        <div
          ref={mainBlobRef}
          className="absolute bottom-0 rounded-full"
          style={{
            height: BLOB_H - 2,
            width: BLOB_W - 2,
            backgroundColor: "#262626",
            marginBottom: 1,
            boxShadow: "none",
            filter: "none",
            transform: `translateY(${INITIAL_Y}px)`,
          }}
        />
      </div>

      {/* CLEAN FG LAYER — button with text & icon */}
      <div
        ref={fgRef}
        className="absolute bottom-0 rounded-full overflow-hidden flex items-center cursor-pointer"
        style={{
          height: BLOB_H,
          width: BLOB_W,
          padding: 8,
          zIndex: 20,
          transform: `translateY(${INITIAL_Y}px)`,
          backgroundColor: !settled
            ? "transparent"
            : frosted
              ? "rgba(38, 38, 38, 0.82)"
              : "rgba(38, 38, 38, 1)",
          backdropFilter: frosted ? "blur(20px) saturate(1.8)" : "blur(0px)",
          WebkitBackdropFilter: frosted
            ? "blur(20px) saturate(1.8)"
            : "blur(0px)",
          border: "none",
          boxShadow: "none",
          transition: !settled
            ? "none"
            : "background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.5s cubic-bezier(0.4, 0, 0.2, 1), -webkit-backdrop-filter 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={() => {
          setHovered(false);
          handlePointerUp();
        }}
        onPointerEnter={() => setHovered(true)}
        onClick={() => {
          if (trigger === "auto") {
            if (isOpen) {
              setSettled(false);
              setFrosted(false);
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
      </div>
    </div>
  );
}

export default FluidButton;

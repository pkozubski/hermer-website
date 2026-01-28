import React, { useId, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// --- SVG Paths ---
const svgPaths = {
  phoneBody:
    "M19.8015 0H113.199C123.77 0 132.34 8.57069 132.34 19.1431V60.4563C132.724 60.5922 133 60.959 133 61.3901V88.7846C133 89.2157 132.724 89.5825 132.34 89.7184V256.782C132.34 267.355 123.77 275.925 113.199 275.925H19.8015C9.22998 275.925 0.66005 267.355 0.66005 256.782V94.0091C0.275507 93.8732 0 93.5064 0 93.0753V77.2327C0 76.8016 0.275507 76.4348 0.66005 76.2989V70.2452C0.275507 70.1093 0 69.7425 0 69.3114V53.4688C0 53.0377 0.275507 52.6709 0.66005 52.535V44.501C0.275507 44.3651 0 43.9983 0 43.5672V35.3158C0 34.8847 0.275507 34.5179 0.66005 34.382V19.1431C0.66005 8.57069 9.22998 0 19.8015 0ZM19.8015 3.96065C11.4172 3.96065 4.62035 10.7581 4.62035 19.1431V256.782C4.62035 265.167 11.4172 271.965 19.8015 271.965H113.199C121.583 271.965 128.38 265.167 128.38 256.782V19.1431C128.38 10.7581 121.583 3.96065 113.199 3.96065H103.27C102.133 4.36089 101.318 5.44477 101.318 6.71897C101.318 10.7553 98.0458 14.0273 94.0099 14.0273H38.66C34.6241 14.0273 31.3524 10.7553 31.3524 6.71897C31.3524 5.44477 30.5372 4.36089 29.3999 3.96065H19.8015Z",
  phoneScreen:
    "M15.1811 0C6.79681 0 0 6.79746 0 15.1825V252.822C0 261.207 6.79681 268.004 15.1811 268.004H108.578C116.962 268.004 123.759 261.207 123.759 252.822V15.1825C123.759 6.79746 116.962 0 108.578 0H98.6498C97.5125 0.400239 96.6973 1.48412 96.6973 2.75832C96.6973 6.79464 93.4255 10.0667 89.3896 10.0667H34.0397C30.0038 10.0667 26.732 6.79464 26.732 2.75832C26.732 1.48412 25.9168 0.400239 24.7795 0H15.1811Z",
};

// --- Components ---

const ToggleSwitch = ({
  checked,
  sliderRef,
}: {
  checked: boolean;
  sliderRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="bg-[#292929] flex h-[48px] items-center p-1 relative rounded-[50px] w-fit border border-[rgba(255,255,255,0.1)] pointer-events-none shadow-lg">
      <div className="relative flex items-center h-full">
        <div ref={sliderRef} className="absolute h-full w-[50%] z-0">
          <div className="w-full h-full bg-[#3d3d3d] rounded-[50px] relative overflow-hidden">
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-12px_0px_15.3px_0px_rgba(255,255,255,0.57)]" />
            <div className="absolute -left-2 -top-2 w-10 h-10 bg-[#3d3d3d] blur-[8px] rounded-full opacity-50" />
          </div>
          <div className="absolute inset-0 border border-[rgba(255,255,255,0.2)] rounded-[50px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.5)] pointer-events-none" />
        </div>
        <div
          className={`relative z-10 px-6 py-2 ${!checked ? "text-white" : "text-[#8e8e8e]"} transition-colors duration-300`}
        >
          <p className="text-sm uppercase font-['Inter'] leading-normal font-medium tracking-wide">
            Przed
          </p>
        </div>
        <div
          className={`relative z-10 px-8 py-2 ${checked ? "text-white" : "text-[#8e8e8e]"} transition-colors duration-300`}
        >
          <p className="text-sm uppercase font-['Inter'] leading-normal font-medium tracking-wide">
            Po
          </p>
        </div>
      </div>
    </div>
  );
};

const LoremTag = () => (
  <div className="relative border border-[#8B5CF6] px-3 py-1.5 md:px-4 md:py-2 bg-[#1e1e1e]/80 backdrop-blur-sm rounded-sm">
    <p className="font-['Inter'] text-lg md:text-2xl lg:text-3xl text-gray-200 whitespace-nowrap">
      Lorem ipsum
    </p>
    <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#d9d9d9] border border-[#8B5CF6]" />
    <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#d9d9d9] border border-[#8B5CF6]" />
    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#d9d9d9] border border-[#8B5CF6]" />
    <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-[#d9d9d9] border border-[#8B5CF6]" />
  </div>
);

const BlueButton = () => (
  <div className="bg-[#8B5CF6] flex items-center justify-center px-[14px] py-[6px] relative rounded-[24px] shadow-lg min-w-[70px] w-full">
    <p className="font-['Inter'] font-medium text-[9px] text-white">Przycisk</p>
    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-0.1px_-0.1px_3px_0px_rgba(255,255,255,0.5)]" />
  </div>
);

const WireframeBox = ({ size = 20 }: { size?: number }) => (
  <div
    className="bg-white/5 border border-[#8B5CF6]/50 relative rounded-sm"
    style={{ width: size, height: size }}
  >
    <div className="absolute inset-0 pointer-events-none shadow-[inset_-0.3px_-0.3px_0.3px_0px_rgba(0,0,0,0.25)]" />
  </div>
);

const ImageCard = ({ withImage = true }: { withImage?: boolean }) => (
  <div className="w-[110px] md:w-[130px] aspect-video bg-[#2a2a2a] rounded-lg overflow-hidden relative border border-white/10 shadow-lg">
    {withImage ? (
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1640346876473-f76a73c71539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1pbmltYWwlMjBnZW9tZXRyaWMlMjBkYXJrfGVufDF8fHx8MTc2OTUxNjk4N3ww&ixlib=rb-4.1.0&q=80&w=400"
        className="w-full h-full object-cover opacity-80"
        alt="Abstract"
      />
    ) : (
      <div className="w-full h-full bg-[#2a2a2a]" />
    )}
    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
    <div className="absolute bottom-2 left-2 w-8 h-1 bg-white/50 rounded-full" />
  </div>
);

const TextLines = () => (
  <div className="flex flex-col gap-1.5 w-[80px]">
    <div className="h-1.5 bg-white/20 rounded-sm w-full" />
    <div className="h-1.5 bg-white/10 rounded-sm w-[80%]" />
    <div className="h-1.5 bg-white/10 rounded-sm w-[50%]" />
  </div>
);

const MenuIcon = () => (
  <div className="flex flex-col gap-[3px] p-1 bg-white/5 rounded-md border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
    <div className="w-3.5 h-0.5 bg-white/80 rounded-full" />
    <div className="w-3.5 h-0.5 bg-white/80 rounded-full" />
    <div className="w-3.5 h-0.5 bg-white/80 rounded-full" />
  </div>
);

const LogoElement = () => (
  <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-md border border-white/10 backdrop-blur-md">
    <div className="w-3.5 h-3.5 bg-linear-to-br from-[#8B5CF6] to-[#7C3AED] rounded flex items-center justify-center shadow-sm">
      <div className="w-1.5 h-1.5 bg-white rounded-[1px]" />
    </div>
    <span className="font-['Inter'] font-bold text-white text-[7px] tracking-wider uppercase">
      Logo
    </span>
  </div>
);

const PhoneScreenAnchors = ({
  anchorRefs,
}: {
  anchorRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
}) => {
  const setAnchorRef = (key: string) => (node: HTMLDivElement | null) => {
    anchorRefs.current[key] = node;
  };

  return (
    <div className="absolute inset-[3%] flex flex-col">
      <div className="h-[14%] flex items-end justify-between px-1 pb-1">
        <div
          ref={setAnchorRef("logo")}
          className="flex items-center justify-start opacity-0"
        >
          <LogoElement />
        </div>
        <div
          ref={setAnchorRef("menu")}
          className="flex items-center justify-end opacity-0"
        >
          <MenuIcon />
        </div>
      </div>

      <div className="flex-1 px-1 py-1 flex flex-col gap-1">
        <div
          ref={setAnchorRef("image")}
          className="flex items-center justify-center opacity-0"
        >
          <ImageCard withImage={false} />
        </div>
        <div
          ref={setAnchorRef("tag")}
          className="flex items-center justify-center opacity-0"
        >
          <LoremTag />
        </div>
        <div
          ref={setAnchorRef("lines")}
          className="flex items-center justify-center opacity-0"
        >
          <TextLines />
        </div>
        <div className="mt-auto flex items-center justify-between px-1 pb-1">
          <div
            ref={setAnchorRef("box")}
            className="flex items-center justify-start opacity-0"
          >
            <WireframeBox size={20} />
          </div>
          <div
            ref={setAnchorRef("button")}
            className="flex items-center justify-end opacity-0"
          >
            <BlueButton />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Config & Layout Calculation ---

// Domyślne pozycje order są fallbackiem - rzeczywiste pozycje biorą się z kotwic
const defaultOrderPos = {
  left: "80%",
  top: "50%",
  rotate: 0,
  scale: 1,
  opacity: 1,
};

type ElementItem = {
  id: string;
  component: React.ReactNode;
  chaos: {
    left: string;
    top: string;
    rotate: number;
    scale: number;
    opacity: number;
  };
  order: {
    left: string;
    top: string;
    rotate: number;
    scale: number;
    opacity: number;
  };
};

const elements: ElementItem[] = [
  {
    id: "logo",
    component: <LogoElement />,
    chaos: { left: "50%", top: "80%", rotate: -20, scale: 1.2, opacity: 0.6 },
    order: { ...defaultOrderPos, scale: 1 },
  },
  {
    id: "menu",
    component: <MenuIcon />,
    chaos: { left: "90%", top: "15%", rotate: 45, scale: 1.5, opacity: 0.4 },
    order: { ...defaultOrderPos, scale: 1 },
  },
  {
    id: "image",
    component: <ImageCard />,
    chaos: { left: "75%", top: "35%", rotate: 25, scale: 1.2, opacity: 0.5 },
    order: { ...defaultOrderPos, scale: 1.0 },
  },
  {
    id: "tag",
    component: <LoremTag />,
    chaos: { left: "60%", top: "20%", rotate: -15, scale: 0.9, opacity: 0.7 },
    order: { ...defaultOrderPos, scale: 0.5 },
  },
  {
    id: "lines",
    component: <TextLines />,
    chaos: { left: "65%", top: "55%", rotate: -5, scale: 0.8, opacity: 0.6 },
    order: { ...defaultOrderPos, scale: 1.2 },
  },
  {
    id: "box",
    component: <WireframeBox size={20} />,
    chaos: { left: "80%", top: "85%", rotate: 60, scale: 0.8, opacity: 0.3 },
    order: { ...defaultOrderPos, scale: 1.4 },
  },
  {
    id: "button",
    component: <BlueButton />,
    chaos: { left: "85%", top: "70%", rotate: 10, scale: 1.1, opacity: 0.8 },
    order: { ...defaultOrderPos, scale: 1.3 },
  },
];

type AnchorPositions = Record<string, { left: string; top: string }>;

const Particles = ({ isOrdered }: { isOrdered: boolean }) => {
  const [dots, setDots] = useState<
    Array<{ id: number; size: number; x: number; y: number }>
  >([]);
  const dotRefs = useRef<Array<HTMLDivElement | null>>([]);

  React.useEffect(() => {
    setDots(
      Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
      })),
    );
  }, []);

  useLayoutEffect(() => {
    if (dots.length === 0) {
      return;
    }

    dots.forEach((dot) => {
      const node = dotRefs.current[dot.id];
      if (!node) {
        return;
      }

      const xRange = isOrdered ? 800 : 20;
      const yRange = isOrdered ? 400 : 20;

      gsap.to(node, {
        x: Math.random() * xRange - xRange / 2,
        y: Math.random() * yRange - yRange / 2,
        opacity: isOrdered ? 0 : 0.3,
        duration: 1,
        ease: "power1.inOut",
      });
    });
  }, [dots, isOrdered]);

  if (dots.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map((dot) => (
        <div
          key={dot.id}
          ref={(node) => {
            dotRefs.current[dot.id] = node;
          }}
          className="absolute bg-[#8B5CF6] rounded-full opacity-30"
          style={{
            width: dot.size,
            height: dot.size,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
          }}
        />
      ))}
    </div>
  );
};

export const ChaosLanding = ({ className }: { className?: string }) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const clipId = useId();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const toggleSliderRef = useRef<HTMLDivElement | null>(null);
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const elementRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const anchorRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [anchorPositions, setAnchorPositions] = useState<AnchorPositions>({});
  const [phoneScale, setPhoneScale] = useState(1);

  useLayoutEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      if (toggleSliderRef.current) {
        gsap.set(toggleSliderRef.current, {
          x: isOrdered ? "100%" : "0%",
        });
      }

      if (phoneRef.current) {
        gsap.set(phoneRef.current, {
          opacity: isOrdered ? 1 : 0,
          x: isOrdered ? "0%" : "100%",
          filter: isOrdered ? "blur(0px)" : "blur(4px)",
        });
      }

      elements.forEach((el) => {
        const node = elementRefs.current[el.id];
        if (!node) {
          return;
        }
        const current = isOrdered ? el.order : el.chaos;
        gsap.set(node, {
          left: current.left,
          top: current.top,
          rotate: current.rotate,
          scale: current.scale,
          opacity: current.opacity,
          xPercent: -50,
          yPercent: -50,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current) {
      return;
    }

    let frame = 0;

    const measureAnchors = () => {
      if (!containerRef.current) {
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const nextPositions: AnchorPositions = {};

      elements.forEach((el) => {
        const node = anchorRefs.current[el.id];
        if (!node) {
          return;
        }

        const rect = node.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        nextPositions[el.id] = {
          left: `${((centerX - containerRect.left) / containerRect.width) * 100}%`,
          top: `${((centerY - containerRect.top) / containerRect.height) * 100}%`,
        };
      });

      setAnchorPositions(nextPositions);

      if (phoneRef.current) {
        const phoneRect = phoneRef.current.getBoundingClientRect();
        const widthScale = phoneRect.width / 250;
        const heightScale = phoneRect.height / 360;
        const nextScale = Math.min(
          1,
          Math.max(0.6, Math.min(widthScale, heightScale)),
        );
        setPhoneScale(nextScale);
      }
    };

    const scheduleMeasure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measureAnchors);
    };

    scheduleMeasure();

    const resizeObserver = new ResizeObserver(scheduleMeasure);
    resizeObserver.observe(containerRef.current);

    Object.values(anchorRefs.current).forEach((node) => {
      if (node) {
        resizeObserver.observe(node);
      }
    });

    window.addEventListener("resize", scheduleMeasure);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", scheduleMeasure);
    };
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const elementEase = isOrdered ? "elastic.out(1, 1)" : "elastic.out(1, .95)";
    const phoneEase = isOrdered
      ? "elastic.out(0.9, 0.8)"
      : "elastic.out(0.9, 0.75)";
    const toggleEase = isOrdered
      ? "elastic.out(1, 0.95)"
      : "elastic.out(1, 0.85)";

    const elementTargets = elements
      .map((el) => elementRefs.current[el.id])
      .filter((node): node is HTMLDivElement => Boolean(node));

    gsap.killTweensOf([
      toggleSliderRef.current,
      phoneRef.current,
      ...elementTargets,
    ]);

    if (toggleSliderRef.current) {
      gsap.to(toggleSliderRef.current, {
        x: isOrdered ? "100%" : "0%",
        duration: 0.75,
        ease: toggleEase,
      });
    }

    if (phoneRef.current) {
      gsap.to(phoneRef.current, {
        opacity: isOrdered ? 1 : 0,
        x: isOrdered ? "0%" : "100%",
        filter: isOrdered ? "blur(0px)" : "blur(4px)",
        duration: 0.85,
        ease: phoneEase,
      });
    }

    elements.forEach((el) => {
      const node = elementRefs.current[el.id];
      if (!node) {
        return;
      }
      const orderTarget = {
        ...el.order,
        left: anchorPositions[el.id]?.left ?? el.order.left,
        top: anchorPositions[el.id]?.top ?? el.order.top,
        scale: el.order.scale * phoneScale,
      };
      const current = isOrdered ? orderTarget : el.chaos;
      gsap.to(node, {
        left: current.left,
        top: current.top,
        rotate: current.rotate,
        scale: current.scale,
        opacity: current.opacity,
        xPercent: -50,
        yPercent: -50,
        duration: 0.9,
        ease: elementEase,
        delay: 0,
      });
    });
  }, [anchorPositions, isOrdered, phoneScale]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[400px] bg-[#1e1e1e] rounded-[32px] border border-[#333] overflow-hidden shadow-2xl transition-colors duration-500 hover:border-[#444] ${className || ""}`}
      onMouseEnter={() => setIsOrdered(true)}
      onMouseLeave={() => setIsOrdered(false)}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-[10%] top-[20%] w-[50%] h-[60%] bg-[#1e1e1e] blur-[50px] mix-blend-color-dodge opacity-50" />
        <div className="absolute top-[-50%] left-[-20%] w-[150%] h-[200%] bg-linear-to-br from-white/5 to-transparent pointer-events-none opacity-20" />
      </div>

      <div className="relative z-10 flex flex-col h-full p-8 md:p-12 pointer-events-none">
        <div className="flex flex-col items-start gap-4 max-w-[50%] pointer-events-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gray-400 via-white to-gray-400 drop-shadow-sm">
            Chaos → Porządek
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Optymalizacja cyfrowych procesów i systemów. Uporządkowanie i
            automatyzacja.
          </p>
        </div>
        <div className="mt-auto pointer-events-auto">
          <ToggleSwitch checked={isOrdered} sliderRef={toggleSliderRef} />
        </div>
      </div>

      {/* Kotwice - zawsze na miejscu, tylko niewidoczne */}
      <div className="absolute right-[5%] top-[5%] bottom-[5%] aspect-[133/276] z-0 pointer-events-none">
        <PhoneScreenAnchors anchorRefs={anchorRefs} />
      </div>

      {/* Telefon - animowany */}
      <div
        ref={phoneRef}
        className="absolute right-[5%] top-[5%] bottom-[5%] aspect-[133/276] z-0 pointer-events-none"
      >
        <svg
          viewBox="0 0 133 276"
          className="absolute inset-0 w-full h-full drop-shadow-2xl"
        >
          <defs>
            <clipPath id={clipId}>
              <path d={svgPaths.phoneScreen} transform="translate(4.6, 4)" />
            </clipPath>
          </defs>

          <g clipPath={`url(#${clipId})`}>
            <foreignObject x="0" y="0" width="133" height="276">
              <div
                className="w-full h-full bg-[#050505] flex flex-col relative"
                xmlns="http://www.w3.org/1999/xhtml"
              >
                <div className="h-[17%] w-full bg-[#1a1a1a] border-b border-white/10 relative z-0">
                  <div className="absolute inset-0 bg-linear-to-b from-black/80 to-transparent" />
                </div>
                <div className="flex-1 bg-linear-to-b from-[#111] to-[#050505]" />
              </div>
            </foreignObject>
          </g>

          <path d={svgPaths.phoneBody} fill="#333" fillRule="evenodd" />
        </svg>
      </div>

      {elements.map((el) => (
        <div
          key={el.id}
          ref={(node) => {
            elementRefs.current[el.id] = node;
          }}
          className="absolute z-20 flex items-center justify-center origin-center pointer-events-none"
          style={{
            left: el.chaos.left,
            top: el.chaos.top,
          }}
        >
          {el.component}
        </div>
      ))}

      <Particles isOrdered={isOrdered} />
    </div>
  );
};

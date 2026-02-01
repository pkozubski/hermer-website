"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import * as THREE from "three";
import { ReelCtaButton } from "../ui/ReelCtaButton";

export const WebsiteOfferHero: React.FC = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const browserWindowRef = useRef<HTMLDivElement>(null);
  const browserContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasContainerRef.current) return;

    const container = canvasContainerRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const textCanvas = document.createElement("canvas");
    const context = textCanvas.getContext("2d");
    const textureSize = 1024;
    textCanvas.width = textureSize;
    textCanvas.height = textureSize;

    const chars = "010101XYHERMER_<>[]{}*&^%$#@!+=";
    const fontSize = 14;
    const columns = textureSize / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const drawASCII = () => {
      if (!context) return;
      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, textureSize, textureSize);

      context.fillStyle = "#916AFF";
      context.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const opacity = Math.random();
        context.fillStyle = `rgba(145, 106, 255, ${opacity})`;

        context.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > textureSize && Math.random() > 0.975)
          drops[i] = 0;

        drops[i]++;
      }
    };

    const canvasTexture = new THREE.CanvasTexture(textCanvas);
    const geometry = new THREE.PlaneGeometry(16, 9, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      map: canvasTexture,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
    });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    let animationId: number;
    let time = 0;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.005;

      drawASCII();
      canvasTexture.needsUpdate = true;

      const positions = geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z =
          Math.sin(x * 0.5 + time * 2) * 0.2 + Math.cos(y * 0.5 + time) * 0.2;
        positions.setZ(i, z);
      }
      positions.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      canvasTexture.dispose();
    };
  }, []);

  useEffect(() => {
    gsap.from(".gsap-hero", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.2,
    });

    const container = browserContainerRef.current;
    const windowEl = browserWindowRef.current;

    if (!container || !windowEl) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;

      gsap.to(windowEl, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(windowEl, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const MarqueeItem = () => (
    <div className="w-[280px] h-[160px] bg-[#111] border border-white/10 relative overflow-hidden shrink-0 group rounded-lg hover:border-[#916AFF]/50 transition-colors duration-500">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.03)_45%,rgba(255,255,255,0.03)_55%,transparent_60%)] bg-[length:200%_200%] animate-shimmer"></div>
      <div className="absolute bottom-4 left-4 w-2/3 h-4 bg-white/10 rounded-full"></div>
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs text-white/20 group-hover:text-[#916AFF] group-hover:border-[#916AFF] transition-colors">
        ↗
      </div>
    </div>
  );

  return (
    <section className="w-full px-4 sm:px-8 lg:px-8 pt-40 pb-20 overflow-hidden bg-transparent isolate relative min-h-[85vh] flex items-center">
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
              display: none;
          }
          .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
          }
          @keyframes infinite-scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
              animation: infinite-scroll 40s linear infinite;
          }
          @keyframes shimmer {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
          }
          .animate-shimmer {
              background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.05) 55%, transparent 60%);
              background-size: 200% 200%;
              animation: shimmer 3s infinite;
          }
        `}
      </style>
      <div className="container mx-auto max-w-[1200px] text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-[#916AFF]"></span>
          Web Development
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-5xl xl:text-7xl 2xl:text-[5.5rem] leading-[1.05] text-white tracking-tight font-display font-medium mb-8">
          Tworzymy strony internetowe, które zwiększają sprzedaż
        </h1>

        <p className="text-neutral-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed tracking-wide">
          Posiadanie strony www ma sens tylko wtedy, gdy klient od razu rozumie,
          co oferujesz i łatwo przechodzi do kontaktu lub zakupu. Stworzymy dla
          Ciebie taką stronę. Nad całym procesem będą czuwać specjaliści z
          doświadczeniem.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ReelCtaButton
            text="Rozpocznij projekt"
            href="#pricing"
            size="large"
          />
          <Link
            href="#projects"
            className="px-8 py-4 sm:py-5 bg-transparent border border-white/20 text-white rounded-full font-semibold text-base transition-all duration-300 hover:border-white hover:bg-white/5 flex items-center gap-3"
          >
            Zobacz realizacje
          </Link>
        </div>

        {/* Professional UI Visualization */}
        <div
          id="browser-container"
          ref={browserContainerRef}
          className="mt-10 relative mx-auto w-full max-w-6xl perspective-1000"
          style={{ perspective: "1000px" }}
        >
          {/* Wide Flat Blob (Background Glow) */}
          <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[140%] h-[250px] bg-[#916AFF] blur-[100px] opacity-20 rounded-[100%] pointer-events-none -z-10 mix-blend-screen animate-pulse"></div>

          {/* Browser Window Wrapper */}
          <div
            id="browser-window"
            ref={browserWindowRef}
            className="aspect-video p-px bg-transparent rounded-t-2xl border-b-0 shadow-2xl shadow-black/80 overflow-hidden relative group isolate transform-gpu transition-transform duration-100 ease-out"
          >
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-t-2xl pointer-events-none">
              <div className="absolute -inset-[200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#916AFF_50%,#000000_100%)] opacity-100"></div>
            </div>

            {/* Content Wrapper */}
            <div className="w-full h-full bg-[#0A0A0A] rounded-t-[15px] overflow-hidden relative flex flex-col">
              {/* Browser Chrome (Top Bar) */}
              <div className="h-10 border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md flex items-center px-4 gap-2 z-30 relative shrink-0">
                <div className="flex gap-2 group/dots cursor-pointer">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57] transition-opacity hover:opacity-100 opacity-80 shadow-[0_0_10px_rgba(255,95,87,0.5)]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E] transition-opacity hover:opacity-100 opacity-80 shadow-[0_0_10px_rgba(254,188,46,0.5)]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28C840] transition-opacity hover:opacity-100 opacity-80 shadow-[0_0_10px_rgba(40,200,64,0.5)]"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-white/5 text-[10px] text-neutral-500 font-mono flex items-center gap-2 border border-white/5 transition-all hover:bg-white/10 hover:text-neutral-300 hover:border-white/10 cursor-text select-none">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    hermer.agency/projekt
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-transparent">
                {/* THREE.JS CANVAS (Background Layer) */}
                <div
                  id="canvas-container"
                  ref={canvasContainerRef}
                  className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none"
                ></div>

                {/* Vignette Overlay to focus center */}
                <div
                  className="absolute inset-0 z-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at center, transparent 0%, #0A0A0A 90%)",
                  }}
                ></div>

                {/* UI Elements (Wireframe) */}

                {/* Badge (Top Right) */}
                <div className="gsap-hero absolute top-6 right-6 lg:top-8 lg:right-8 z-10 w-16 h-16 border border-white/10 rounded-full flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-t-white/40 border-r-transparent border-b-transparent border-l-transparent animate-[spin_3s_linear_infinite]"></div>
                  <div className="w-12 h-12 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm"></div>
                </div>

                {/* Floating Nav Placeholder (Top Left) */}
                <div className="gsap-hero absolute top-6 left-6 lg:top-8 lg:left-8 z-20 flex items-center gap-0">
                  <div className="w-[34px] h-[34px] bg-white/10 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-4 h-4 bg-white/40 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
                  </div>
                  <div className="hidden md:flex">
                    <div className="h-[34px] w-24 bg-white/5 border border-l-0 border-white/10 backdrop-blur-sm"></div>
                    <div className="h-[34px] w-32 bg-white/5 border border-l-0 border-white/10 backdrop-blur-sm"></div>
                    <div className="h-[34px] w-24 bg-white/5 border border-l-0 border-white/10 backdrop-blur-sm"></div>
                  </div>
                </div>

                {/* Hero Section (Center) */}
                <div className="px-8 flex flex-col items-center justify-center gap-6 relative z-10">
                  {/* Row 1 */}
                  <div className="gsap-hero flex items-center gap-2">
                    <div className="w-28 md:w-40 h-10 md:h-12 bg-white/5 border border-white/10 shrink-0 backdrop-blur-sm hover:bg-white/10 transition-colors"></div>
                    <div className="w-24 md:w-36 h-10 md:h-12 bg-[#916AFF] rounded-full shrink-0 -ml-4 z-10 opacity-90 border border-white/20 shadow-[0_0_30px_rgba(145,106,255,0.3)] backdrop-blur-md flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="gsap-hero flex items-center -mt-2">
                    <div className="w-20 md:w-32 h-10 md:h-12 bg-white/5 border border-white/10 shrink-0 backdrop-blur-sm"></div>
                    <div className="w-20 md:w-32 h-10 md:h-12 bg-white/5 border border-l-0 border-white/10 shrink-0 backdrop-blur-sm"></div>
                  </div>
                  {/* Paragraph */}
                  <div className="gsap-hero flex flex-col items-center gap-2 mt-2">
                    <div className="h-4 w-48 md:w-80 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-white/10 animate-[shimmer_2s_infinite]"></div>
                    </div>
                    <div className="h-4 w-32 md:w-56 bg-white/10 rounded-full"></div>
                  </div>
                </div>

                {/* Marquee (Bottom) */}
                <div className="gsap-hero absolute -bottom-20 left-0 right-0 w-full overflow-hidden z-20">
                  <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
                    <div className="flex gap-4 px-2">
                      {[...Array(6)].map((_, i) => (
                        <MarqueeItem key={`original-${i}`} />
                      ))}
                    </div>
                    <div className="flex gap-4 px-2">
                      {[...Array(6)].map((_, i) => (
                        <MarqueeItem key={`clone-${i}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

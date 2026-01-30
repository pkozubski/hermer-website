"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight, ShoppingBag, ShoppingCart } from "lucide-react";
import gsap from "gsap";
import * as THREE from "three";

export const EcommerceOfferHero: React.FC = () => {
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
        // Subtle wave
        const waveZ =
          Math.sin(x * 0.5 + time) * 0.2 + Math.sin(y * 0.5 + time) * 0.2;
        positions.setZ(i, waveZ);
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // GSAP Hero Animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (browserWindowRef.current) {
      tl.fromTo(
        browserWindowRef.current,
        { rotationX: 15, y: 100, opacity: 0 },
        { rotationX: 0, y: 0, opacity: 1, duration: 1.5, delay: 0.2 },
      );
    }

    const heroElements = document.querySelectorAll(".gsap-hero");
    tl.fromTo(
      heroElements,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8 },
      "-=1",
    );

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  const MarqueeItem = () => (
    <div className="w-[280px] h-[160px] bg-[#111] border border-white/10 relative overflow-hidden shrink-0 group rounded-lg hover:border-[#916AFF]/50 transition-colors duration-500">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.03)_45%,rgba(255,255,255,0.03)_55%,transparent_60%)] bg-[length:200%_200%] animate-shimmer"></div>
      {/* Product Image Placeholder */}
      <div className="absolute top-4 left-4 right-4 h-24 bg-white/5 rounded-md flex items-center justify-center">
        <ShoppingBag className="text-white/10 w-8 h-8" />
      </div>
      {/* Price / Button Placeholder */}
      <div className="absolute bottom-4 left-4 w-1/3 h-3 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-[#916AFF]/20 flex items-center justify-center text-xs text-[#916AFF]">
        +
      </div>
    </div>
  );

  return (
    <section className="w-full px-4 sm:px-8 lg:px-8 pt-40 pb-20 overflow-hidden bg-transparent isolate relative min-h-[85vh] flex items-center">
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
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
          E-commerce Solutions
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-5xl xl:text-7xl 2xl:text-[5.5rem] leading-[1.05] text-white tracking-tight font-display font-medium mb-8">
          Sprzedawaj online <br className="hidden md:block" />
          bez granic.
        </h1>

        <p className="text-neutral-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed tracking-wide">
          Tworzymy sklepy internetowe, które zamieniają odwiedzających w
          lojalnych klientów. Wydajność, automatyzacja i design skrojony pod
          sprzedaż.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#pricing"
            className="group relative px-6 py-3 sm:px-10 sm:py-5 bg-[#916AFF] text-white rounded-full font-bold text-sm sm:text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(145,106,255,0.5)] hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden"
          >
            <span className="relative z-10">Wyceń sklep</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#916AFF] transition-all duration-300">
              <ChevronRight size={18} />
            </div>
          </Link>
          <Link
            href="#projects"
            className="px-8 py-4 sm:py-5 bg-transparent border border-white/20 text-white rounded-full font-semibold text-base transition-all duration-300 hover:border-white hover:bg-white/5 flex items-center gap-3"
          >
            Case studies
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
                    hermer.store/checkout
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

                {/* UI Elements (Wireframe - E-commerce) */}

                {/* Cart Badge (Top Right) */}
                <div className="gsap-hero absolute top-6 right-6 lg:top-8 lg:right-8 z-10 w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                  <ShoppingCart className="w-5 h-5 text-white/50" />
                  <div className="absolute top-3 right-3 w-2 h-2 bg-[#916AFF] rounded-full"></div>
                </div>

                {/* Logo / Nav (Top Left) */}
                <div className="gsap-hero absolute top-6 left-6 lg:top-8 lg:left-8 z-20 flex items-center gap-0">
                  {/* Logo */}
                  <div className="w-[34px] h-[34px] bg-white/10 border border-white/10 flex items-center justify-center backdrop-blur-sm rounded-l-md">
                    <ShoppingBag className="w-4 h-4 text-white/50" />
                  </div>
                  {/* Nav items */}
                  <div className="hidden md:flex">
                    <div className="h-[34px] w-20 bg-white/5 border border-l-0 border-white/10 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-12 h-1 bg-white/10 rounded-full"></div>
                    </div>
                    <div className="h-[34px] w-20 bg-white/5 border border-l-0 border-white/10 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-12 h-1 bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Center Content: Product Split */}
                <div className="px-8 flex flex-row items-center justify-center gap-8 relative z-10 w-full max-w-2xl">
                  {/* Product Image Wireframe */}
                  <div className="gsap-hero w-1/3 aspect-square bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
                    <ShoppingBag className="w-12 h-12 text-white/10" />
                  </div>

                  {/* Product Info Wireframe */}
                  <div className="gsap-hero flex flex-col gap-3 w-1/2">
                    <div className="h-6 w-3/4 bg-white/10 rounded-md"></div>
                    <div className="h-4 w-1/4 bg-[#916AFF]/30 rounded-md"></div>
                    <div className="h-16 w-full bg-white/5 rounded-md mt-2"></div>
                    <div className="flex gap-3 mt-2">
                      <div className="h-10 w-1/3 bg-white/5 rounded-md border border-white/10"></div>
                      <div className="h-10 flex-1 bg-[#916AFF] rounded-md shadow-[0_0_20px_rgba(145,106,255,0.3)]"></div>
                    </div>
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

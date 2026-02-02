"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import gsap from "gsap";
import * as THREE from "three";
import { ReelCtaButton } from "../ui/ReelCtaButton";

export const SeoOfferHero: React.FC = () => {
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

    // Create a "Network/Link" visualization
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x916aff,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add some floating connecting lines/nodes
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3),
    );
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
    });
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial,
    );
    scene.add(particlesMesh);

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
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      sphere.rotation.x += 0.002;
      sphere.rotation.y += 0.002;

      particlesMesh.rotation.y -= 0.001;

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
      particlesGeometry.dispose();
      particlesMaterial.dispose();
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

  return (
    <section className="w-full px-4 sm:px-8 lg:px-8 pt-40 pb-20 overflow-hidden bg-transparent isolate relative min-h-[85vh] flex items-center">
      <div className="container mx-auto max-w-[1200px] text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-[#916AFF]"></span>
          Search Engine Optimization
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-5xl xl:text-7xl 2xl:text-[5.5rem] leading-[1.05] text-white tracking-tight font-display font-medium mb-8">
          Pozycjonowanie stron internetowych
        </h1>

        <p className="text-neutral-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed tracking-wide">
          SEO to proces optymalizacji, który sprawia, że Twoja strona jest
          widoczna dla klientów dokładnie wtedy, gdy szukają Twoich usług. Bądź
          pierwszy w Google.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ReelCtaButton
            text="Darmowy audyt SEO"
            href="/kontakt"
            size="large"
          />
          <Link
            href="#process"
            className="px-8 py-4 sm:py-5 bg-transparent border border-white/20 text-white rounded-full font-semibold text-base transition-all duration-300 hover:border-white hover:bg-white/5 flex items-center gap-3"
          >
            Jak to działa?
          </Link>
        </div>

        {/* Dashboard Visualization */}
        <div
          id="browser-container"
          ref={browserContainerRef}
          className="mt-10 relative mx-auto w-full max-w-6xl perspective-1000 hidden"
          style={{ perspective: "1000px" }}
        >
          {/* Background Glow */}
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
              {/* Browser Chrome */}
              <div className="h-10 border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md flex items-center px-4 gap-2 z-30 relative shrink-0">
                <div className="flex gap-2 group/dots cursor-pointer">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57] opacity-80"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E] opacity-80"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28C840] opacity-80"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-white/5 text-[10px] text-neutral-500 font-mono flex items-center gap-2 border border-white/5 w-1/2">
                    <Search size={10} className="text-neutral-500" />
                    <span>skuteczne pozycjonowanie</span>
                  </div>
                </div>
              </div>

              {/* Main Dashboard Area */}
              <div className="relative w-full h-full flex flex-col p-6 overflow-hidden bg-neutral-900/50">
                {/* THREE.JS CANVAS (Background Layer) */}
                <div
                  id="canvas-container"
                  ref={canvasContainerRef}
                  className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none"
                ></div>

                {/* SEO Interface Mockup */}
                <div className="relative z-10 w-full h-full flex flex-col gap-6">
                  {/* Search Result 1 (Hero) */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 w-full max-w-3xl mx-auto backdrop-blur-sm animate-fade-in-up">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-[#916AFF] flex items-center justify-center text-xs font-bold text-white">
                        H
                      </div>
                      <div className="text-xs text-neutral-400">
                        hermer.agency › oferta › pozycjonowanie
                      </div>
                    </div>
                    <div className="text-xl text-[#916AFF] mb-2 font-medium">
                      Skuteczne Pozycjonowanie Stron - Agencja SEO
                    </div>
                    <div className="text-sm text-neutral-400 leading-relaxed">
                      Zwiększ widoczność swojej firmy w Google. Profesjonalny
                      audyt SEO, optymalizacja techniczna i skuteczny link
                      building. Sprawdź naszą ofertę!
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto w-full">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col items-center justify-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        #1
                      </div>
                      <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                        Position
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col items-center justify-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        15.4k
                      </div>
                      <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                        Impressions
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col items-center justify-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        +125%
                      </div>
                      <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                        CTR Growth
                      </div>
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

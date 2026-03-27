"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface TrackedImage {
  el: HTMLImageElement;
  mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  texture: THREE.Texture;
  currentReveal: number;
  currentTilt: number;
  textureLoaded: boolean;
  docTop: number;
  docLeft: number;
  width: number;
  height: number;
}

interface ProjectCardScrollShaderOverlayProps {
  scopeSelector?: string;
  activationRootMargin?: string;
  warmupRootMargin?: string;
  maxPixelRatio?: number;
  forceWarmupOnMount?: boolean;
  warmupEventName?: string;
}

const CAM_Z = 600;
const MIN_REVEAL = 0.88;
const BORDER_RADIUS_PX = 16;
const REVEAL_LERP = 0.04;
const TILT_LERP = 0.14;
const ENTER_THRESHOLD = 0.92;
const MAX_TILT = 0.07;
const PLANE_SEGMENTS = 8;
const CLEANUP_INTERVAL = 30; // Sprawdzanie odłączonych elementów co N klatek
export const PROJECTS_SHADER_WARMUP_EVENT = "projects-shader-warmup-ready";

const vertexShader = `
uniform float uOffset;
uniform float uSpeed;
uniform float uDirection;

varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 pos = position;

  float intensity = smoothstep(0.0, 1.0, abs(uOffset));
  float absSpeed = abs(uSpeed);

  // Early exit — skip expensive bend math when scroll is nearly still
  if (absSpeed * intensity < 0.5) {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    return;
  }

  float sideMask = uDirection > 0.5 ? uv.x
                 : uDirection < -0.5 ? 1.0 - uv.x
                 : abs(uv.x - 0.5) * 2.0;
  sideMask = sideMask * sideMask * sideMask;

  float verticalMask = uOffset > 0.0 ? uv.y : 1.0 - uv.y;
  verticalMask = verticalMask * verticalMask * verticalMask;

  float bend = sideMask * verticalMask * absSpeed * intensity * 0.03;

  pos.z += bend;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const fragmentShader = `
uniform sampler2D uTexture;
uniform vec2 uResolution;
uniform vec2 uImageResolution;
uniform float uBorderRadius;
uniform float uReveal;

varying vec2 vUv;

float roundedBoxSDF(vec2 p, vec2 b, float r) {
  vec2 d = abs(p) - b + vec2(r);
  return length(max(d, vec2(0.0))) - r;
}

void main() {
  vec2 uv = vUv;
  float aspectRes = uResolution.x / uResolution.y;
  float aspectImg = uImageResolution.x / uImageResolution.y;

  vec2 scale = vec2(1.0);
  if (aspectRes > aspectImg) {
    scale.y = aspectImg / aspectRes;
    uv.y = (1.0 - scale.y) + uv.y * scale.y;
  } else {
    scale.x = aspectRes / aspectImg;
    uv.x = (uv.x - 0.5) * scale.x + 0.5;
    uv.y = (uv.y - 0.5) + 0.5;
  }

  vec4 color = texture2D(uTexture, uv);

  vec2 halfSize = uResolution * 0.5 * uReveal;
  float r = min(uBorderRadius, min(halfSize.x, halfSize.y));
  vec2 pixelPos = vUv * uResolution;
  float d = roundedBoxSDF(pixelPos - uResolution * 0.5, halfSize, r);
  float alpha = 1.0 - smoothstep(-1.0, 1.0, d);

  gl_FragColor = vec4(color.rgb, alpha);
}
`;

export const ProjectCardScrollShaderOverlay: React.FC<
  ProjectCardScrollShaderOverlayProps
> = ({
  scopeSelector,
  activationRootMargin = "220px 0px 220px 0px",
  warmupRootMargin = "1200px 0px 1200px 0px",
  maxPixelRatio = 1.5,
  forceWarmupOnMount = false,
  warmupEventName = PROJECTS_SHADER_WARMUP_EVENT,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let isUnmounted = false; // Zabezpieczenie przed błędem uciekającego asynchronicznego obrazka

    // --- 1. Zakres (Scope) i Inicjalizacja Three.js ---
    const scopeElement = scopeSelector
      ? (document.querySelector(scopeSelector) as HTMLElement | null)
      : container.parentElement;
    const scanRoot = scopeElement ?? document.body;

    let w = window.innerWidth;
    let h = window.innerHeight;
    let animId = 0;
    let isActive = !scopeElement;

    const calcFov = () => 2 * Math.atan(h / 2 / CAM_Z) * (180 / Math.PI);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(calcFov(), w / h, 100, 2000);
    camera.position.z = CAM_Z;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxPixelRatio));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    container.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");

    const sharedGeometry = new THREE.PlaneGeometry(
      1,
      1,
      PLANE_SEGMENTS,
      PLANE_SEGMENTS,
    );

    // --- 2. Zmienne stanu śledzenia i animacji ---
    const tracked: TrackedImage[] = [];
    const known = new Set<HTMLImageElement>();

    let pendingScanFrame: number | null = null;
    let hasWarmupPass = false;
    let warmupNotified = false;
    let warmupTimer: number | null = null;
    const warmupReadyFlagKey = `__${warmupEventName}__`;
    let frameCount = 0;

    let scrollY = window.scrollY;
    let prevScrollY = scrollY;
    let scrollVelocity = 0;
    let lastTime = performance.now();
    const startTime = performance.now();

    // --- 3. Funkcje pomocnicze ---
    const updateCachedRects = () => {
      const cy = window.scrollY;
      const cx = window.scrollX;
      tracked.forEach((obj) => {
        if (!obj.el.isConnected) return;
        const r = obj.el.getBoundingClientRect();
        obj.docTop = r.top + cy;
        obj.docLeft = r.left + cx;
        obj.width = r.width;
        obj.height = r.height;
      });
    };

    const meshPositionAndScale = (
      mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>,
      rect: { width: number; height: number; left: number; top: number },
    ) => {
      mesh.scale.set(rect.width, rect.height, 1);
      mesh.position.x = rect.left - w / 2 + rect.width / 2;
      mesh.position.y = -rect.top + h / 2 - rect.height / 2;
    };

    const runWarmupPass = () => {
      if (hasWarmupPass || tracked.length === 0) return;

      let hasRenderableMesh = false;
      tracked.forEach((obj) => {
        if (!obj.el.isConnected) return;
        const rect = obj.el.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;

        hasRenderableMesh = true;
        meshPositionAndScale(obj.mesh, rect);
        obj.mesh.material.uniforms.uResolution.value.set(
          rect.width,
          rect.height,
        );
        obj.mesh.material.uniforms.uReveal.value = 1;
        obj.mesh.visible = true;
      });

      if (!hasRenderableMesh) return;

      renderer.compile(scene, camera);
      renderer.render(scene, camera);
      hasWarmupPass = true;

      if (forceWarmupOnMount && !warmupNotified) {
        warmupNotified = true;
        (window as unknown as Record<string, unknown>)[warmupReadyFlagKey] =
          true;
        window.dispatchEvent(new CustomEvent(warmupEventName));
      }

      if (!isActive) {
        tracked.forEach((obj) => {
          obj.mesh.visible = false;
        });
      }
    };

    const createTextureFromImage = (el: HTMLImageElement) => {
      const texture = new THREE.Texture(el);
      texture.needsUpdate = true;
      texture.minFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
      return texture;
    };

    const scanImages = () => {
      scanRoot
        .querySelectorAll<HTMLImageElement>("img.webgl-image")
        .forEach((el) => {
          if (known.has(el)) return;
          known.add(el);

          const textureLoaded = el.complete && el.naturalWidth > 0;
          const texture = textureLoaded
            ? createTextureFromImage(el)
            : loader.load(
                el.src,
                (tex) => {
                  if (isUnmounted) return;
                  const found = tracked.find((t) => t.texture === tex);
                  if (found) {
                    found.textureLoaded = true;
                    found.mesh.material.uniforms.uImageResolution.value.set(
                      tex.image.width,
                      tex.image.height,
                    );
                  }
                  el.style.opacity = "0";
                },
                undefined,
                () => {
                  if (!isUnmounted) el.style.opacity = "1";
                },
              );

          texture.minFilter = THREE.LinearFilter;
          texture.generateMipmaps = false;

          const mat = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
              uTexture: { value: texture },
              uOffset: { value: 0 },
              uSpeed: { value: 0 },
              uDirection: { value: 0 },
              uResolution: { value: new THREE.Vector2(1, 1) },
              uImageResolution: { value: new THREE.Vector2(1, 1) },
              uBorderRadius: { value: BORDER_RADIUS_PX },
              uReveal: { value: 1.0 },
            },
            side: THREE.FrontSide,
            transparent: true,
          });

          const mesh = new THREE.Mesh(sharedGeometry, mat);
          scene.add(mesh);

          if (textureLoaded) {
            mesh.material.uniforms.uImageResolution.value.set(
              el.naturalWidth,
              el.naturalHeight,
            );
            el.style.opacity = "0";
          }

          tracked.push({
            el,
            mesh,
            texture,
            currentReveal: MIN_REVEAL,
            currentTilt: 0,
            textureLoaded,
            docTop: 0,
            docLeft: 0,
            width: 0,
            height: 0,
          });
        });

      updateCachedRects();
      runWarmupPass();
    };

    const scheduleScan = () => {
      if (pendingScanFrame !== null) return;
      pendingScanFrame = requestAnimationFrame(() => {
        pendingScanFrame = null;
        scanImages();
      });
    };

    const scheduleWarmupRetry = (attempt = 0) => {
      if (hasWarmupPass || !forceWarmupOnMount) return;
      scheduleScan();
      runWarmupPass();
      if (hasWarmupPass || attempt >= 25) return;
      warmupTimer = window.setTimeout(
        () => scheduleWarmupRetry(attempt + 1),
        120,
      );
    };

    // --- 4. Główna pętla animacji (Render Loop) ---
    const stopLoop = () => {
      if (animId === 0) return;
      cancelAnimationFrame(animId);
      animId = 0;
    };

    const startLoop = () => {
      if (animId !== 0) return;
      animId = requestAnimationFrame(animate);
    };

    const animate = () => {
      if (!isActive) {
        animId = 0;
        return;
      }
      animId = requestAnimationFrame(animate);
      frameCount++;

      // Odpinanie nieużywanych elementów co N klatek
      if (frameCount % CLEANUP_INTERVAL === 0) {
        for (let i = tracked.length - 1; i >= 0; i--) {
          const obj = tracked[i];
          if (!obj.el.isConnected) {
            scene.remove(obj.mesh);
            obj.mesh.material.dispose();
            obj.texture.dispose();
            tracked.splice(i, 1);
            known.delete(obj.el);
          }
        }
      }

      scrollY = window.scrollY;
      const currentScrollX = window.scrollX;

      const now = performance.now();
      const dt = Math.max((now - lastTime) / 1000, 0.001);
      lastTime = now;

      const delta = scrollY - prevScrollY;
      prevScrollY = scrollY;

      // Auto-heal: stabilizacja pozycji np. przy wejściach (CSS/GSAP fixes)
      if (Math.abs(delta) < 2.0 && frameCount % 3 === 0) {
        updateCachedRects();
      }

      const isInitial = now - startTime < 500;
      const rawVel = isInitial && Math.abs(delta) > 100 ? 0 : delta / dt;

      scrollVelocity += (rawVel - scrollVelocity) * 0.12;

      tracked.forEach((obj) => {
        if (!obj.el.isConnected || !obj.textureLoaded) {
          obj.mesh.visible = false;
          return;
        }

        const top = obj.docTop - scrollY;
        const left = obj.docLeft - currentScrollX;
        const rect = {
          top,
          bottom: top + obj.height,
          left,
          right: left + obj.width,
          width: obj.width,
          height: obj.height,
        };

        if (
          rect.width <= 0 ||
          rect.height <= 0 ||
          rect.bottom < -100 ||
          rect.top > h + 100
        ) {
          obj.mesh.visible = false;
          return;
        }

        obj.mesh.visible = true;
        meshPositionAndScale(obj.mesh, rect);

        const direction =
          obj.mesh.position.x > 80
            ? 1.0
            : obj.mesh.position.x < -80
              ? -1.0
              : 0.0;
        obj.mesh.material.uniforms.uDirection.value = direction;

        const normalizedY = obj.mesh.position.y / (h * 0.5);
        obj.mesh.material.uniforms.uOffset.value = normalizedY;

        obj.mesh.material.uniforms.uSpeed.value = THREE.MathUtils.lerp(
          obj.mesh.material.uniforms.uSpeed.value as number,
          scrollVelocity,
          0.1,
        );

        obj.mesh.material.uniforms.uResolution.value.set(
          rect.width,
          rect.height,
        );

        const isVisible = rect.top < h * ENTER_THRESHOLD && rect.bottom > 0;
        const targetReveal = isVisible ? 1.0 : MIN_REVEAL;
        obj.currentReveal = THREE.MathUtils.lerp(
          obj.currentReveal,
          targetReveal,
          REVEAL_LERP,
        );
        obj.mesh.material.uniforms.uReveal.value = obj.currentReveal;

        const targetTilt = isVisible ? 0 : -direction * MAX_TILT;
        obj.currentTilt = THREE.MathUtils.lerp(
          obj.currentTilt,
          targetTilt,
          TILT_LERP,
        );
        obj.mesh.rotation.z = obj.currentTilt;
      });

      renderer.render(scene, camera);
    };

    // --- 5. Nasłuchiwacze i Obserwatory (Events / Observers) ---
    const mutationObserver = new MutationObserver(() => {
      scheduleScan();
    });
    mutationObserver.observe(scanRoot, { childList: true, subtree: true });

    const layoutObserver = new ResizeObserver(() => {
      updateCachedRects();
    });
    layoutObserver.observe(document.body);

    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.fov = calcFov();
      camera.updateProjectionMatrix();
      updateCachedRects();
    };
    window.addEventListener("resize", onResize);

    let warmupObserver: IntersectionObserver | null = null;
    let sectionObserver: IntersectionObserver | null = null;

    if (scopeElement) {
      warmupObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          scheduleScan();
          runWarmupPass();
          warmupObserver?.disconnect();
        },
        { root: null, rootMargin: warmupRootMargin, threshold: 0 },
      );
      warmupObserver.observe(scopeElement);

      sectionObserver = new IntersectionObserver(
        ([entry]) => {
          isActive = entry.isIntersecting;
          if (isActive) {
            startLoop();
            scheduleScan();
            runWarmupPass();
          } else {
            stopLoop();
          }
        },
        { root: null, rootMargin: activationRootMargin, threshold: 0 },
      );
      sectionObserver.observe(scopeElement);

      const rect = scopeElement.getBoundingClientRect();
      isActive = rect.bottom > -200 && rect.top < h + 200;
      if (isActive) startLoop();
      runWarmupPass();
    } else {
      startLoop();
    }

    scheduleScan();
    if (forceWarmupOnMount) {
      warmupTimer = window.setTimeout(() => {
        scheduleWarmupRetry(0);
      }, 40);
    }

    // --- 6. Jeden czysty Return (Unified Cleanup) ---
    return () => {
      isUnmounted = true;
      stopLoop();

      if (pendingScanFrame !== null) cancelAnimationFrame(pendingScanFrame);
      if (warmupTimer !== null) clearTimeout(warmupTimer);

      window.removeEventListener("resize", onResize);
      mutationObserver.disconnect();
      layoutObserver.disconnect();
      if (warmupObserver) warmupObserver.disconnect();
      if (sectionObserver) sectionObserver.disconnect();

      tracked.forEach(({ el, mesh, texture }) => {
        el.style.opacity = "1";
        mesh.material.dispose();
        texture.dispose();
      });

      sharedGeometry.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [
    activationRootMargin,
    forceWarmupOnMount,
    maxPixelRatio,
    scopeSelector,
    warmupEventName,
    warmupRootMargin,
  ]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 20,
        pointerEvents: "none",
      }}
    />
  );
};

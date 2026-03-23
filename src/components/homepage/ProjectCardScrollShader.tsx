'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface TrackedImage {
  el: HTMLImageElement;
  mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  texture: THREE.Texture;
  currentReveal: number;
  currentTilt: number;
  textureLoaded: boolean;
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
const CLEANUP_INTERVAL = 30; // only check disconnected elements every N frames
export const PROJECTS_SHADER_WARMUP_EVENT = 'projects-shader-warmup-ready';

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
  pos.y -= (uOffset > 0.0 ? -1.0 : 1.0) * bend * 0.002;

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
  activationRootMargin = '220px 0px 220px 0px',
  warmupRootMargin = '1200px 0px 1200px 0px',
  maxPixelRatio = 1.5,
  forceWarmupOnMount = false,
  warmupEventName = PROJECTS_SHADER_WARMUP_EVENT,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

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
        powerPreference: 'high-performance',
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
    loader.setCrossOrigin('anonymous');
    const tracked: TrackedImage[] = [];
    const known = new Set<HTMLImageElement>();
    let pendingScanFrame: number | null = null;
    let hasWarmupPass = false;
    let warmupNotified = false;
    let warmupTimer: number | null = null;
    const warmupReadyFlagKey = `__${warmupEventName}__`;
    let frameCount = 0;

    // Shared geometry for all meshes — avoid per-card allocation
    const sharedGeometry = new THREE.PlaneGeometry(
      1,
      1,
      PLANE_SEGMENTS,
      PLANE_SEGMENTS,
    );

    const createTextureFromImage = (el: HTMLImageElement) => {
      const texture = new THREE.Texture(el);
      texture.needsUpdate = true;
      texture.minFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
      return texture;
    };

    const scanImages = () => {
      scanRoot
        .querySelectorAll<HTMLImageElement>('img.webgl-image')
        .forEach((el) => {
          if (known.has(el)) return;
          known.add(el);

          const texture =
            el.complete && el.naturalWidth > 0
              ? createTextureFromImage(el)
              : loader.load(
                  el.src,
                  (tex) => {
                    const found = tracked.find((t) => t.texture === tex);
                    if (found) {
                      found.textureLoaded = true;
                      found.mesh.material.uniforms.uImageResolution.value.set(
                        tex.image.width,
                        tex.image.height,
                      );
                    }
                    el.style.opacity = '0';
                  },
                  undefined,
                  () => {
                    el.style.opacity = '1';
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

          const textureLoaded = el.complete && el.naturalWidth > 0;
          if (textureLoaded) {
            mesh.material.uniforms.uImageResolution.value.set(
              el.naturalWidth,
              el.naturalHeight,
            );
            el.style.opacity = '0';
          }

          tracked.push({
            el,
            mesh,
            texture,
            currentReveal: MIN_REVEAL,
            currentTilt: 0,
            textureLoaded,
          });
        });

      runWarmupPass();
    };
    const scheduleScan = () => {
      if (pendingScanFrame !== null) return;
      pendingScanFrame = requestAnimationFrame(() => {
        pendingScanFrame = null;
        scanImages();
      });
    };

    // Observe DOM changes and rescan only when project images are added/removed.
    const mutationObserver = new MutationObserver(() => {
      scheduleScan();
    });
    mutationObserver.observe(scanRoot, { childList: true, subtree: true });

    let scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    let prevScrollY = scrollY;
    let scrollVelocity = 0;
    let lastTime = performance.now();
    const startTime = performance.now();

    const meshPositionAndScale = (
      mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>,
      rect: DOMRect,
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
        obj.mesh.material.uniforms.uResolution.value.set(rect.width, rect.height);
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

    // Initial scan once after mount.
    scheduleScan();
    if (forceWarmupOnMount) {
      warmupTimer = window.setTimeout(() => {
        scheduleWarmupRetry(0);
      }, 40);
    }

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

      // Throttle cleanup of disconnected elements — every N frames instead of every frame
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

      // Read scrollY directly every frame for better sync with Lenis/Main thread
      scrollY = window.scrollY;

      const now = performance.now();
      const dt = Math.max((now - lastTime) / 1000, 0.001);
      lastTime = now;

      const delta = scrollY - prevScrollY;
      prevScrollY = scrollY;

      // Avoid velocity spikes on initial load/scroll restoration
      const isInitial = now - startTime < 500;
      const rawVel = isInitial && Math.abs(delta) > 100 ? 0 : delta / dt;

      scrollVelocity += (rawVel - scrollVelocity) * 0.12;

      tracked.forEach((obj) => {
        if (!obj.el.isConnected || !obj.textureLoaded) {
          obj.mesh.visible = false;
          return;
        }

        const rect = obj.el.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0 || rect.bottom < -100 || rect.top > h + 100) {
          obj.mesh.visible = false;
          return;
        }

        obj.mesh.visible = true;

        meshPositionAndScale(obj.mesh, rect);

        // Determine direction: 1 for right, -1 for left, 0 for center
        // If the mesh is roughly in the middle of the screen (3-column layout), use 0
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
    if (scopeElement) {
      const warmupObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          scheduleScan();
          runWarmupPass();
          warmupObserver.disconnect();
        },
        {
          root: null,
          rootMargin: warmupRootMargin,
          threshold: 0,
        },
      );
      warmupObserver.observe(scopeElement);

      const sectionObserver = new IntersectionObserver(
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
        {
          root: null,
          rootMargin: activationRootMargin,
          threshold: 0,
        },
      );
      sectionObserver.observe(scopeElement);

      const rect = scopeElement.getBoundingClientRect();
      isActive = rect.bottom > -200 && rect.top < h + 200;
      if (isActive) startLoop();
      runWarmupPass();

      const onResize = () => {
        w = window.innerWidth;
        h = window.innerHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.fov = calcFov();
        camera.updateProjectionMatrix();
      };
      window.addEventListener('resize', onResize);

      return () => {
        stopLoop();
        if (pendingScanFrame !== null) cancelAnimationFrame(pendingScanFrame);
        if (warmupTimer !== null) clearTimeout(warmupTimer);
        mutationObserver.disconnect();
        warmupObserver.disconnect();
        sectionObserver.disconnect();
        window.removeEventListener('resize', onResize);

        tracked.forEach(({ el, mesh, texture }) => {
          el.style.opacity = '1';
          mesh.material.dispose();
          texture.dispose();
        });

        sharedGeometry.dispose();
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    }

    startLoop();

    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.fov = calcFov();
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    return () => {
      stopLoop();
      if (pendingScanFrame !== null) cancelAnimationFrame(pendingScanFrame);
      if (warmupTimer !== null) clearTimeout(warmupTimer);
      mutationObserver.disconnect();
      window.removeEventListener('resize', onResize);

      tracked.forEach(({ el, mesh, texture }) => {
        el.style.opacity = '1';
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
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 20,
        pointerEvents: 'none',
      }}
    />
  );
};

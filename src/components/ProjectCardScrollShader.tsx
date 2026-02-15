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

const CAM_Z = 600;
const MIN_REVEAL = 0.88;
const BORDER_RADIUS_PX = 16;
const REVEAL_LERP = 0.04;
const ENTER_THRESHOLD = 0.92;
const MAX_TILT = 0.07;

const vertexShader = `
uniform float uOffset;
uniform float uSpeed;
uniform float uDirection;

varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 pos = position;

  float sideMask = 0.0;
  if (uDirection > 0.5) {
    sideMask = uv.x;
  } else if (uDirection < -0.5) {
    sideMask = 1.0 - uv.x;
  } else {
    // Center column: both sides
    sideMask = abs(uv.x - 0.5) * 2.0;
  }
  sideMask = pow(sideMask, 3.0);

  float verticalMask = 0.0;
  if (uOffset > 0.0) {
    verticalMask = pow(uv.y, 3.0);
  } else {
    verticalMask = pow(1.0 - uv.y, 3.0);
  }

  float intensity = smoothstep(0.0, 1.0, abs(uOffset));
  float bend = sideMask * verticalMask * abs(uSpeed) * intensity * 0.03;

  pos.z += bend;

  float sign = (uOffset > 0.0) ? -1.0 : 1.0;
  pos.y -= sign * bend * 0.002;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const fragmentShader = `
uniform sampler2D uTexture;
uniform vec2 uResolution;
uniform vec2 uImageResolution; // Added for object-fit: cover
uniform float uBorderRadius;
uniform float uReveal;

varying vec2 vUv;

float roundedBoxSDF(vec2 p, vec2 b, float r) {
  vec2 d = abs(p) - b + vec2(r);
  return length(max(d, vec2(0.0))) - r;
}

void main() {
  // Aspect Correction (object-fit: cover) with Top Anchoring
  vec2 uv = vUv;
  float aspectRes = uResolution.x / uResolution.y;
  float aspectImg = uImageResolution.x / uImageResolution.y;

  vec2 scale = vec2(1.0, 1.0);
  if (aspectRes > aspectImg) {
      // Image is taller than container: scale y < 1
      scale.y = aspectImg / aspectRes;
      // Anchor Top: map mesh [0,1] to texture [1-scale, 1]
      // Standard plane UVs go 0 to 1 (bottom to top).
      // We want vUv.y=1 -> tex.y=1
      // vUv.y=0 -> tex.y=1-scale.y
      uv.y = (1.0 - scale.y) + uv.y * scale.y;
      
      // Center X
      uv.x = (uv.x - 0.5) * scale.x + 0.5;
  } else {
      // Image is wider than container: scale x < 1
      scale.x = aspectRes / aspectImg;
      // Center X
      uv.x = (uv.x - 0.5) * scale.x + 0.5;
      // Center Y (or Anchor Top? usually center Y is preferred for wide images, but if top requested...)
      // Let's keep Y centered if image is wider, unless strictly top-left is needed.
      // Usually "anchor top" refers to vertical cropping.
      uv.y = (uv.y - 0.5) * scale.y + 0.5;
  }
  
  vec4 color = texture2D(uTexture, uv);

  vec2 fullHalf = uResolution * 0.5;
  vec2 halfSize = fullHalf * uReveal;

  float r = min(uBorderRadius, min(halfSize.x, halfSize.y));

  vec2 pixelPos = vUv * uResolution;
  vec2 center = uResolution * 0.5;

  float d = roundedBoxSDF(pixelPos - center, halfSize, r);
  float alpha = 1.0 - smoothstep(-1.0, 1.0, d);

  gl_FragColor = vec4(color.rgb, alpha);
}
`;

export const ProjectCardScrollShaderOverlay: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    let animId = 0;

    const calcFov = () => 2 * Math.atan(h / 2 / CAM_Z) * (180 / Math.PI);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(calcFov(), w / h, 100, 2000);
    camera.position.z = CAM_Z;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    container.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');
    const tracked: TrackedImage[] = [];
    const known = new Set<HTMLImageElement>();

    const scanImages = () => {
      document
        .querySelectorAll<HTMLImageElement>('img.webgl-image')
        .forEach((el) => {
          if (known.has(el)) return;
          known.add(el);

          const texture = loader.load(
            el.src,
            // onLoad
            (tex) => {
              // Ensure we only mark loaded if this specific object still exists/is tracked
              // We'll update the 'textureLoaded' flag on the object in the 'tracked' array
              // Finding it might be O(N), but N=8 usually.
              const found = tracked.find((t) => t.texture === tex);
              if (found) {
                found.textureLoaded = true;
                // Update shader with actual image dimensions
                found.mesh.material.uniforms.uImageResolution.value.set(
                  tex.image.width,
                  tex.image.height,
                );
              }
              el.style.opacity = '0';
            },
            undefined,
            // onError
            () => {
              el.style.opacity = '1';
            },
          );
          texture.minFilter = THREE.LinearFilter;
          texture.generateMipmaps = false;

          const geo = new THREE.PlaneGeometry(1, 1, 32, 32);
          const mat = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
              uTexture: { value: texture },
              uOffset: { value: 0 },
              uSpeed: { value: 0 },
              uDirection: { value: 0 },
              uResolution: { value: new THREE.Vector2(1, 1) },
              uImageResolution: { value: new THREE.Vector2(1, 1) }, // Init default
              uBorderRadius: { value: BORDER_RADIUS_PX },
              uReveal: { value: 1.0 },
            },
            side: THREE.DoubleSide,
            transparent: true,
          });

          const mesh = new THREE.Mesh(geo, mat);
          scene.add(mesh);
          tracked.push({
            el,
            mesh,
            texture,
            currentReveal: MIN_REVEAL,
            currentTilt: 0,
            textureLoaded: false,
          });
        });
    };

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

    const animate = () => {
      animId = requestAnimationFrame(animate);
      scanImages();

      // Clean up disconnected elements
      for (let i = tracked.length - 1; i >= 0; i--) {
        const obj = tracked[i];
        if (!obj.el.isConnected) {
          scene.remove(obj.mesh);
          obj.mesh.geometry.dispose();
          obj.mesh.material.dispose();
          obj.texture.dispose();
          tracked.splice(i, 1);
          // Note: WeakSet doesn't need manual removal, but the image might be re-added
          // If we want to allow re-scanning the same image element if it's re-mounted:
          known.delete(obj.el);
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
        if (!obj.el.isConnected) return;

        const rect = obj.el.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) {
          obj.mesh.visible = false;
          return;
        }

        // Only show if image is actually loaded and visible
        obj.mesh.visible =
          rect.bottom > -100 &&
          rect.top < h + 100 &&
          obj.el.complete &&
          obj.textureLoaded;

        meshPositionAndScale(obj.mesh, rect);

        // Determine direction: 1 for right, -1 for left, 0 for center
        // If the mesh is roughly in the middle of the screen (3-column layout), use 0
        let direction =
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
          REVEAL_LERP,
        );
        obj.mesh.rotation.z = obj.currentTilt;
      });

      renderer.render(scene, camera);
    };
    animId = requestAnimationFrame(animate);

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
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);

      tracked.forEach(({ el, mesh, texture }) => {
        el.style.opacity = '1';
        mesh.geometry.dispose();
        texture.dispose();
        mesh.material.dispose();
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

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

'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface TrackedImage {
  el: HTMLImageElement;
  mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  texture: THREE.Texture;
  currentReveal: number;
  currentTilt: number;
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
  if (uDirection > 0.0) {
    sideMask = uv.x;
  } else {
    sideMask = 1.0 - uv.x;
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
uniform float uBorderRadius;
uniform float uReveal;

varying vec2 vUv;

float roundedBoxSDF(vec2 p, vec2 b, float r) {
  vec2 d = abs(p) - b + vec2(r);
  return length(max(d, vec2(0.0))) - r;
}

void main() {
  vec4 color = texture2D(uTexture, vUv);

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
    container.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    const tracked: TrackedImage[] = [];
    const known = new WeakSet<HTMLImageElement>();

    const scanImages = () => {
      document
        .querySelectorAll<HTMLImageElement>('img.webgl-image')
        .forEach((el) => {
          if (known.has(el)) return;
          known.add(el);

          const texture = loader.load(
            el.src,
            () => {
              el.style.opacity = '0';
            },
            undefined,
            () => {
              el.style.opacity = '1';
            },
          );
          texture.minFilter = THREE.LinearFilter;
          texture.generateMipmaps = false;
          texture.colorSpace = THREE.SRGBColorSpace;

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
          });
        });
    };

    let scrollY = window.scrollY;
    let prevScrollY = scrollY;
    let scrollVelocity = 0;
    let lastTime = performance.now();

    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

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

      const now = performance.now();
      const dt = Math.max((now - lastTime) / 1000, 1 / 240);
      lastTime = now;

      const delta = scrollY - prevScrollY;
      prevScrollY = scrollY;
      const rawVel = delta / dt;
      scrollVelocity += (rawVel - scrollVelocity) * 0.12;

      tracked.forEach((obj) => {
        if (!obj.el.isConnected) return;

        const rect = obj.el.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) {
          obj.mesh.visible = false;
          return;
        }
        obj.mesh.visible = rect.bottom > -50 && rect.top < h + 50;

        meshPositionAndScale(obj.mesh, rect);

        const direction = obj.mesh.position.x > 0 ? 1.0 : -1.0;
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
      window.removeEventListener('scroll', onScroll);
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

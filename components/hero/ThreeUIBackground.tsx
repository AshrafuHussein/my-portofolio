'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '@/hooks/use-reduced-motion';

export function ThreeUIBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion) return;

    let isVisible = true;
    let animationFrameId: number;

    // Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 85;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Create Subtle Particle Flow Geometry (ThreeUI Flow & Constellation hybrid)
    const particleCount = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Color palette: deep electric blues, soft cyans, subtle indigo
    const color1 = new THREE.Color(0x2563eb); // Brand Blue
    const color2 = new THREE.Color(0x38bdf8); // Sky / Cyan
    const color3 = new THREE.Color(0x1d4ed8); // Deep Blue

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 140;
      positions[i3 + 1] = (Math.random() - 0.5) * 90;
      positions[i3 + 2] = (Math.random() - 0.5) * 60;

      velocities[i3] = (Math.random() - 0.5) * 0.04;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.04;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;

      const mixedColor = Math.random() > 0.5 ? color1 : (Math.random() > 0.5 ? color2 : color3);
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const pMaterial = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, pMaterial);
    scene.add(particles);

    // Subtle Connecting Network Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
    });

    const maxConnections = 300;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Mouse tracking interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.015;
      mouseY = (event.clientY - windowHalfY) * 0.015;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // IntersectionObserver to pause rendering when hero is out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      if (isVisible) {
        const elapsedTime = clock.getElapsedTime();
        const posArray = geometry.attributes.position.array as Float32Array;

        // Smooth camera follow mouse
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;
        camera.position.x = targetX;
        camera.position.y = -targetY;
        camera.lookAt(scene.position);

        // Update particles
        let lineIndex = 0;
        const linePos = lineGeometry.attributes.position.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;

          // Flow dynamics
          posArray[i3] += velocities[i3] + Math.sin(elapsedTime * 0.3 + posArray[i3 + 1] * 0.02) * 0.02;
          posArray[i3 + 1] += velocities[i3 + 1] + Math.cos(elapsedTime * 0.3 + posArray[i3] * 0.02) * 0.02;
          posArray[i3 + 2] += velocities[i3 + 2];

          // Boundary bounds bounce
          if (posArray[i3] < -70 || posArray[i3] > 70) velocities[i3] = -velocities[i3];
          if (posArray[i3 + 1] < -45 || posArray[i3 + 1] > 45) velocities[i3 + 1] = -velocities[i3 + 1];
          if (posArray[i3 + 2] < -30 || posArray[i3 + 2] > 30) velocities[i3 + 2] = -velocities[i3 + 2];

          // Connect adjacent particles
          for (let j = i + 1; j < particleCount; j++) {
            if (lineIndex >= maxConnections * 6) break;
            const j3 = j * 3;
            const dx = posArray[i3] - posArray[j3];
            const dy = posArray[i3 + 1] - posArray[j3 + 1];
            const dz = posArray[i3 + 2] - posArray[j3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < 18) {
              linePos[lineIndex++] = posArray[i3];
              linePos[lineIndex++] = posArray[i3 + 1];
              linePos[lineIndex++] = posArray[i3 + 2];
              linePos[lineIndex++] = posArray[j3];
              linePos[lineIndex++] = posArray[j3 + 1];
              linePos[lineIndex++] = posArray[j3 + 2];
            }
          }
        }

        geometry.attributes.position.needsUpdate = true;
        lineGeometry.attributes.position.needsUpdate = true;

        particles.rotation.y = elapsedTime * 0.02;
        lines.rotation.y = elapsedTime * 0.02;

        renderer.render(scene, camera);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      lineGeometry.dispose();
      pMaterial.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-60 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}

export default ThreeUIBackground;

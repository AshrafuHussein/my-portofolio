"use client";

import { useEffect, useRef } from "react";

export function SmoothFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop devices with fine pointer (mouse)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    let mouseX = -100;
    let mouseY = -100;
    let dotX = -100;
    let dotY = -100;
    let borderX = -100;
    let borderY = -100;
    let isVisible = false;
    let isHovering = false;
    let rafId: number | null = null;
    let isRunning = false;

    const DOT_SMOOTHNESS = 0.25;
    const BORDER_DOT_SMOOTHNESS = 0.12;

    const updatePosition = () => {
      const dotDiffX = mouseX - dotX;
      const dotDiffY = mouseY - dotY;
      const borderDiffX = mouseX - borderX;
      const borderDiffY = mouseY - borderY;

      dotX += dotDiffX * DOT_SMOOTHNESS;
      dotY += dotDiffY * DOT_SMOOTHNESS;
      borderX += borderDiffX * BORDER_DOT_SMOOTHNESS;
      borderY += borderDiffY * BORDER_DOT_SMOOTHNESS;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      }
      if (borderRef.current) {
        borderRef.current.style.transform = `translate3d(${borderX}px, ${borderY}px, 0) translate(-50%, -50%)`;
      }

      // Stop loop when close enough to mouse position to save 100% CPU/GPU
      const isSettled =
        Math.abs(dotDiffX) < 0.1 &&
        Math.abs(dotDiffY) < 0.1 &&
        Math.abs(borderDiffX) < 0.1 &&
        Math.abs(borderDiffY) < 0.1;

      if (!isSettled) {
        rafId = requestAnimationFrame(updatePosition);
      } else {
        isRunning = false;
        rafId = null;
      }
    };

    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (wrapperRef.current) {
          wrapperRef.current.style.opacity = "1";
        }
      }

      startLoop();
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (wrapperRef.current) {
        wrapperRef.current.style.opacity = "0";
      }
    };

    // Event delegation for hover detection on interactive elements (zero querySelectorAll overhead)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("a, button, input, textarea, select, [role='button'], .cursor-pointer");
      const shouldHover = !!interactive;

      if (shouldHover !== isHovering) {
        isHovering = shouldHover;
        if (borderRef.current) {
          if (isHovering) {
            borderRef.current.style.width = "44px";
            borderRef.current.style.height = "44px";
            borderRef.current.style.boxShadow = "0 0 16px rgba(16, 185, 129, 0.45)";
            borderRef.current.style.borderColor = "rgba(52, 211, 153, 0.9)";
          } else {
            borderRef.current.style.width = "28px";
            borderRef.current.style.height = "28px";
            borderRef.current.style.boxShadow = "none";
            borderRef.current.style.borderColor = "rgba(52, 211, 153, 0.6)";
          }
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block opacity-0 transition-opacity duration-300"
      style={{ willChange: "opacity" }}
    >
      {/* Inner Dot in Emerald */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 rounded-full bg-emerald-400 pointer-events-none"
        style={{
          width: "8px",
          height: "8px",
          willChange: "transform",
        }}
      />
      {/* Outer Border Dot in Emerald */}
      <div
        ref={borderRef}
        className="absolute top-0 left-0 rounded-full border border-emerald-400/60 transition-[width,height,box-shadow,border-color] duration-200 pointer-events-none"
        style={{
          width: "28px",
          height: "28px",
          willChange: "transform",
        }}
      />
    </div>
  );
}

export default SmoothFollower;

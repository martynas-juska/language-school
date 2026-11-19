"use client";

import { useEffect } from "react";

/**
 * Lets the light inside .btn-primary buttons and .glow-card cards follow the pointer
 * (sets --glow-x / --glow-y). Mounted once in app/layout.js. Does nothing on touch screens.
 */
export default function PointerGlow() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    let frame = 0;
    let last = null;

    function onMove(event) {
      const target = event.target instanceof Element ? event.target.closest(".btn-primary, .glow-card") : null;
      if (!target) return;
      last = { target, x: event.clientX, y: event.clientY };
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const box = last.target.getBoundingClientRect();
        last.target.style.setProperty("--glow-x", `${last.x - box.left}px`);
        last.target.style.setProperty("--glow-y", `${last.y - box.top}px`);
      });
    }

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
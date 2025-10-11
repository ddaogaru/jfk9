"use client";

import { useEffect, useState } from "react";

const FALLBACK_WIDTH = 800;

const resolveTarget = () => {
  const grid = document.querySelector(".membership-grid") as HTMLElement | null;
  if (grid) return grid;
  return document.querySelector(".membership-card") as HTMLElement | null;
};

export function useMembershipWidth(): number {
  const [width, setWidth] = useState<number>(FALLBACK_WIDTH);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let rafId: number | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let listenersAttached = false;

    const updateWidth = () => {
      const target = resolveTarget();
      if (target) {
        setWidth(target.getBoundingClientRect().width);
      }
    };

    const setup = () => {
      const target = resolveTarget();
      if (!target) {
        rafId = window.requestAnimationFrame(setup);
        return;
      }

      updateWidth();

      if (!listenersAttached) {
        window.addEventListener("resize", updateWidth);
        listenersAttached = true;
      }

      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(updateWidth);
        resizeObserver.observe(target);
      }
    };

    setup();

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      if (listenersAttached) {
        window.removeEventListener("resize", updateWidth);
      }
      resizeObserver?.disconnect();
    };
  }, []);

  return width;
}

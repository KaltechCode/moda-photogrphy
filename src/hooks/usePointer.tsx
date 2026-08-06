"use client";

import { useEffect, useRef } from "react";

import type { PointerState } from "@/types/cursor";

export function usePointer() {
  const pointer = useRef<PointerState>({
    x: 0,
    y: 0,

    targetX: 0,
    targetY: 0,

    velocityX: 0,
    velocityY: 0,
  });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const current = pointer.current;

      current.targetX = event.clientX;
      current.targetY = event.clientY;
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return pointer;
}

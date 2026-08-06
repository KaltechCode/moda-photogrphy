"use client";

import { RefObject, useCallback, useMemo } from "react";

import { createMagneticEngine } from "@/libs/magneticEngine";

interface UseMagneticProps {
  ref: RefObject<HTMLDivElement | null>;

  strength?: number;

  radius?: number;

  disabled?: boolean;
}

export function useMagnetic({
  ref,

  strength = 0.35,

  radius = 120,

  disabled = false,
}: UseMagneticProps) {
  const engine = useMemo(() => {
    if (disabled) {
      return null;
    }

    return createMagneticEngine({
      element: ref,
      strength,
      radius,
    });
  }, [ref, strength, radius, disabled]);

  const enable = useCallback(() => {
    engine?.enable();
  }, [engine]);

  const disable = useCallback(() => {
    engine?.disable();
  }, [engine]);

  const destroy = useCallback(() => {
    engine?.destroy();
  }, [engine]);

  return {
    enable,

    disable,

    destroy,
  };
}

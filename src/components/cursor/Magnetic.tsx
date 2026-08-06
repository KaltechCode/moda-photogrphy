"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

import { useMagnetic } from "@/hooks/useMagnetic";

import type { MagneticProps } from "@/types/cursor";

const Magnetic = forwardRef<HTMLDivElement, MagneticProps>(
  (
    {
      children,

      strength = 0.35,

      radius = 120,

      disabled = false,

      className,
    },
    ref,
  ) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => elementRef.current!, []);

    const magnetic = useMagnetic({
      ref: elementRef,
      strength,
      radius,
      disabled,
    });

    useEffect(() => {
      if (disabled) return;

      magnetic.enable();

      return () => {
        magnetic.destroy();
      };
    }, [disabled, magnetic]);

    return (
      <div ref={elementRef} className={className}>
        {children}
      </div>
    );
  },
);

Magnetic.displayName = "Magnetic";

export default Magnetic;

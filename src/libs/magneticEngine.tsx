import { gsap } from "gsap";
import { RefObject } from "react";

interface MagneticEngineOptions {
  element: RefObject<HTMLDivElement | null>;

  strength: number;

  radius: number;
}

export interface MagneticEngine {
  enable(): void;

  disable(): void;

  destroy(): void;
}

export function createMagneticEngine({
  element,

  strength,

  radius,
}: MagneticEngineOptions): MagneticEngine {
  let enabled = false;

  const onPointerMove = (event: PointerEvent) => {
    const target = element.current;

    if (!target) return;

    const rect = target.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;

    const centerY = rect.top + rect.height / 2;

    const distanceX = event.clientX - centerX;

    const distanceY = event.clientY - centerY;

    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance > radius) {
      gsap.to(target, {
        x: 0,
        y: 0,
        duration: 0.35,
        ease: "power3.out",
      });

      return;
    }

    gsap.to(target, {
      x: distanceX * strength,
      y: distanceY * strength,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const onPointerLeave = () => {
    const target = element.current;

    if (!target) return;

    gsap.to(target, {
      x: 0,
      y: 0,
      duration: 0.45,
      ease: "power3.out",
      clearProps: "transform",
    });
  };

  return {
    enable() {
      if (enabled) return;

      const target = element.current;

      if (!target) return;

      enabled = true;

      target.addEventListener("pointermove", onPointerMove);

      target.addEventListener("pointerleave", onPointerLeave);
    },

    disable() {
      if (!enabled) return;

      const target = element.current;

      if (!target) return;

      enabled = false;

      target.removeEventListener("pointermove", onPointerMove);

      target.removeEventListener("pointerleave", onPointerLeave);
    },

    destroy() {
      this.disable();

      const target = element.current;

      if (!target) return;

      gsap.killTweensOf(target);
    },
  };
}

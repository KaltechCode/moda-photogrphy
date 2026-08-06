import { gsap } from "gsap";

export interface CursorEngineOptions {
  wrapper: HTMLElement | null;

  image: HTMLElement | null;

  video: HTMLElement | null;

  text: HTMLElement | null;

  dot: HTMLElement | null;
  ring: HTMLElement | null;

  ease: number;

  rotation: boolean;

  maxRotation: number;
}

export interface CursorEngine {
  pointerMove(x: number, y: number): void;

  //   setScale(scale: number): void;

  setRingOpacity(opacity: number): void;

  setTextOpacity(opacity: number): void;

  //   setSize(width: number, height: number): void;

  setColor(color: string): void;

  show(): void;

  hide(): void;

  destroy(): void;
}

export function createCursorEngine({
  wrapper,
  dot,
  ring,
  text,
  image,
  video,
  ease = 0.18,

  rotation = false,

  maxRotation = 20,
}: CursorEngineOptions): CursorEngine {
  let currentX = 0;
  let currentY = 0;

  let targetX = 0;
  let targetY = 0;

  let velocityX = 0;
  let velocityY = 0;

  let destroyed = false;

  const setX = gsap.quickSetter(wrapper, "x", "px");
  const setY = gsap.quickSetter(wrapper, "y", "px");

  const setRingScale = gsap.quickSetter(ring, "scale");

  const setDotScale = gsap.quickSetter(dot, "scale");

  const setRingOpacity = gsap.quickSetter(ring, "opacity");

  const setTextOpacity = gsap.quickSetter(text, "opacity");

  ``;

  gsap.set(wrapper, {
    xPercent: -50,
    yPercent: -50,
    force3D: true,
    willChange: "transform",
  });

  function update() {
    if (destroyed) return;

    velocityX = targetX - currentX;
    velocityY = targetY - currentY;

    currentX += velocityX * ease;
    currentY += velocityY * ease;

    setX(currentX);
    setY(currentY);

    if (rotation) {
      const angle = Math.atan2(velocityY, velocityX) * (180 / Math.PI);

      setRingScale(gsap.utils.clamp(-maxRotation, maxRotation, angle));
      setDotScale(gsap.utils.clamp(-maxRotation, maxRotation, angle));
    }
  }

  gsap.ticker.add(update);

  return {
    pointerMove(x, y) {
      targetX = x;
      targetY = y;
    },

    setRingOpacity(opacity) {
      setRingOpacity(opacity);
    },

    setTextOpacity(opacity) {
      setTextOpacity(opacity);
    },

    setColor(color) {
      if (wrapper) {
        wrapper.style.backgroundColor = color;
        wrapper.style.borderColor = color;
      }
    },

    show() {
      gsap.to(wrapper, {
        autoAlpha: 1,
        duration: 0.2,
      });
    },

    hide() {
      gsap.to(wrapper, {
        autoAlpha: 0,
        duration: 0.2,
      });
    },

    destroy() {
      destroyed = true;

      gsap.ticker.remove(update);

      gsap.killTweensOf(wrapper);
    },
  };
}

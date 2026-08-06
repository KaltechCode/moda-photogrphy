export interface Point {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function lerp(start: number, end: number, amount: number): number {
  return start + (end - start) * amount;
}

export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export function distance(a: Point, b: Point): number {
  const dx = b.x - a.x;
  const dy = b.y - a.y;

  return Math.sqrt(dx * dx + dy * dy);
}

export function angle(a: Point, b: Point): number {
  return Math.atan2(b.y - a.y, b.x - a.x) * (180 / Math.PI);
}

export function normalize(value: number, min: number, max: number): number {
  return (value - min) / (max - min);
}

export function getCenter(element: HTMLElement): Point {
  const rect = element.getBoundingClientRect();

  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  };
}

export function getSize(element: HTMLElement): Size {
  const rect = element.getBoundingClientRect();

  return {
    width: rect.width,
    height: rect.height,
  };
}

export function isTouchDevice(): boolean {
  return (
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches ||
    "ontouchstart" in window
  );
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function rafThrottle<T extends (...args: any[]) => void>(
  callback: T,
): T {
  let frame = 0;

  return ((...args: Parameters<T>) => {
    if (frame) return;

    frame = requestAnimationFrame(() => {
      callback(...args);

      frame = 0;
    });
  }) as T;
}

export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay = 100,
): T {
  let timeout: ReturnType<typeof setTimeout>;

  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  }) as T;
}

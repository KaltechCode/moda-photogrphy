import { ReactNode } from "react";

export type CursorVariant =
  | "default"
  | "text"
  | "image"
  | "video"
  | "icon"
  | "hidden";

export interface CursorPosition {
  x: number;
  y: number;
}

export interface CursorElements {
  wrapper: HTMLElement;

  dot: HTMLElement;

  ring: HTMLElement;

  text?: HTMLElement;

  image?: HTMLElement;

  video?: HTMLElement;
}

export interface CursorSize {
  width: number;
  height: number;
}

export interface CursorPreview {
  src: string;
  alt?: string;
}

export interface CursorVideo {
  src: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

export interface CursorState {
  visible: boolean;

  variant: CursorVariant;

  text: string | null;

  image: CursorPreview | null;

  video: CursorVideo | null;

  color: string;

  scale: number;

  opacity: number;

  blur: number;

  size: CursorSize;

  position: CursorPosition;
}

export interface CursorContextValue {
  cursor: CursorState;

  show(): void;

  hide(): void;

  move(position: CursorPosition): void;

  setVariant(variant: CursorVariant): void;

  setText(text: string | null): void;

  setImage(image: CursorPreview | null): void;

  setVideo(video: CursorVideo | null): void;

  setColor(color: string): void;

  setScale(scale: number): void;

  setOpacity(opacity: number): void;

  setBlur(blur: number): void;

  setSize(size: CursorSize): void;

  reset(): void;
}

export interface CursorProviderProps {
  children: ReactNode;
}

export interface CursorDotProps {
  className?: string;
}

export interface CursorRingProps {
  className?: string;
}

export interface CursorTextProps {
  text: string;
  children: ReactNode;
}

export interface CursorImageProps {
  src: string;
  alt?: string;
  children: ReactNode;
}

export interface CursorVideoProps {
  src: string;
  muted?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  children: ReactNode;
}

export interface MagneticProps {
  children: ReactNode;

  strength?: number;

  radius?: number;

  disabled?: boolean;

  className?: string;
}

export interface PointerState {
  x: number;
  y: number;

  targetX: number;
  targetY: number;

  velocityX: number;
  velocityY: number;
}

export interface MagneticState {
  x: number;
  y: number;

  active: boolean;
}

"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";

import { createCursorEngine } from "@/libs/cursorEngine";

import { useCursor } from "./useCursor";
import { usePointer } from "./usePointer";

interface UseCursorAnimationProps {
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  dotRef: React.RefObject<HTMLDivElement | null>;
  ringRef: React.RefObject<HTMLDivElement | null>;
  textRef: React.RefObject<HTMLDivElement | null>;
  imageRef: React.RefObject<HTMLDivElement | null>;
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

export function useCursorAnimation({
  wrapperRef,

  dotRef,

  ringRef,

  textRef,

  imageRef,

  videoRef,
}: UseCursorAnimationProps) {
  const engineRef = useRef<ReturnType<typeof createCursorEngine> | null>(null);

  const pointer = usePointer();

  const { cursor } = useCursor();

  useGSAP(() => {
    if (!wrapperRef.current) return;

    engine = createCursorEngine({
      wrapper: wrapperRef.current,

      dot: dotRef.current,

      ring: ringRef?.current,

      text: textRef.current,

      image: imageRef.current,

      video: videoRef.current,
    });

    return () => {
      engineRef.current?.destroy();
      engineRef.current = null;
    };
  }, []);

  useGSAP(() => {
    if (!engineRef.current) return;

    engineRef.current.pointerMove(
      pointer.current.targetX,
      pointer.current.targetY,
    );
  });

  useGSAP(() => {
    if (!engineRef.current) return;

    engineRef.current.setScale(cursor.scale);

    engineRef.current.setOpacity(cursor.opacity);

    engineRef.current.setColor(cursor.color);

    engineRef.current.setSize(cursor.size.width, cursor.size.height);

    if (cursor.visible) {
      engineRef.current.show();
    } else {
      engineRef.current.hide();
    }
  }, [cursor]);
}

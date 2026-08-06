"use client";

import { useRef } from "react";

import { useCursorAnimation } from "@/hooks/useCursorAnimation.t";

import CursorDot from "./CursorDot";
import CursorRing from "./CursorRing";
import CursorText from "./CursorText";
import CursorImage from "./CursorImage";
import CursorVideo from "./CursorVideo";

export default function MagicCursor() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const dotRef = useRef<HTMLDivElement>(null);

  const ringRef = useRef<HTMLDivElement>(null);

  const textRef = useRef<HTMLDivElement>(null);

  const imageRef = useRef<HTMLDivElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  useCursorAnimation({
    wrapperRef,
    dotRef,
    ringRef,
    textRef,
    imageRef,
    videoRef,
  });

  return (
    <div ref={wrapperRef} id="magic-cursor">
      <CursorRing ref={ringRef} />

      <CursorDot ref={dotRef} />

      <CursorText ref={textRef} />

      <CursorImage ref={imageRef} />

      <CursorVideo ref={videoRef} />
    </div>
  );
}

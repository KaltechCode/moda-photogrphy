"use client";

import { forwardRef } from "react";

import { useCursor } from "@/hooks/useCursor";

const CursorVideo = forwardRef<HTMLVideoElement>((_, ref) => {
  const { cursor } = useCursor();

  if (cursor.variant !== "video" || !cursor.video) {
    return null;
  }

  return (
    <video
      ref={ref}
      id="magic-cursor-video"
      aria-hidden="true"
      className="
        absolute
        left-1/2
        top-1/2
        h-32
        w-32
        -translate-x-1/2
        -translate-y-1/2
        rounded-xl
        object-cover
        will-change-transform
      "
      style={{
        opacity: cursor.opacity,
      }}
      src={cursor.video.src}
      autoPlay={cursor.video.autoPlay}
      muted={cursor.video.muted}
      loop={cursor.video.loop}
      playsInline
    />
  );
});

CursorVideo.displayName = "CursorVideo";

export default CursorVideo;

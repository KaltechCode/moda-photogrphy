"use client";

import { forwardRef } from "react";

import { useCursor } from "@/hooks/useCursor";

const CursorText = forwardRef<HTMLDivElement>((_, ref) => {
  const { cursor } = useCursor();

  if (cursor.variant !== "text" || !cursor.text) {
    return null;
  }

  return (
    <div
      ref={ref}
      id="magic-cursor-text"
      aria-hidden="true"
      className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        whitespace-nowrap
        select-none
        text-center
        text-xs
        font-semibold
        uppercase
        tracking-wider
        text-black
        will-change-transform
      "
      style={{
        opacity: cursor.opacity,
      }}
    >
      {cursor.text}
    </div>
  );
});

CursorText.displayName = "CursorText";

export default CursorText;

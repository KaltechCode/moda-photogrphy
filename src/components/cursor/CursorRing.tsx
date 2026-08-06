"use client";

import { forwardRef } from "react";

import { useCursor } from "@/hooks/useCursor";

import type { CursorRingProps } from "@/types/cursor";

const CursorRing = forwardRef<HTMLDivElement, CursorRingProps>(
  ({ className }, ref) => {
    const { cursor } = useCursor();

    return (
      <div
        ref={ref}
        id="magic-cursor-ring"
        aria-hidden="true"
        className={[
          "absolute",
          "left-0",
          "top-0",
          "size-10",
          "rounded-full",
          "border",
          "border-white",
          "will-change-transform",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={{
          opacity: cursor.opacity,
          borderColor: cursor.color,
          scale: cursor.scale,
        }}
      />
    );
  },
);

CursorRing.displayName = "CursorRing";

export default CursorRing;

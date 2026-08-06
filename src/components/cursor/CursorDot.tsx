"use client";

import { forwardRef } from "react";

import { useCursor } from "@/hooks/useCursor";

import type { CursorDotProps } from "@/types/cursor";

const CursorDot = forwardRef<HTMLDivElement, CursorDotProps>(
  ({ className }, ref) => {
    const { cursor } = useCursor();

    return (
      <div
        ref={ref}
        id="magic-cursor-dot"
        aria-hidden="true"
        className={[
          "absolute",
          "left-0",
          "top-0",
          "size-3",
          "rounded-full",
          "bg-white",
          "will-change-transform",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={{
          opacity: cursor.opacity,
          backgroundColor: cursor.color,
          scale: cursor.scale,
        }}
      />
    );
  },
);

CursorDot.displayName = "CursorDot";

export default CursorDot;

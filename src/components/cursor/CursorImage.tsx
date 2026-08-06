"use client";

import Image from "next/image";
import { forwardRef } from "react";

import { useCursor } from "@/hooks/useCursor";

const CursorImage = forwardRef<HTMLDivElement>((_, ref) => {
  const { cursor } = useCursor();

  if (cursor.variant !== "image" || !cursor.image) {
    return null;
  }

  return (
    <div
      ref={ref}
      id="magic-cursor-image"
      aria-hidden="true"
      className="
        absolute
        left-1/2
        top-1/2
        h-28
        w-28
        -translate-x-1/2
        -translate-y-1/2
        overflow-hidden
        rounded-xl
        will-change-transform
      "
      style={{
        opacity: cursor.opacity,
      }}
    >
      <Image
        src={cursor.image.src}
        alt={cursor.image.alt ?? ""}
        fill
        className="object-cover"
        sizes="112px"
      />
    </div>
  );
});

CursorImage.displayName = "CursorImage";

export default CursorImage;

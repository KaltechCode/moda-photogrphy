"use client";

import { useCallback } from "react";

import { useCursorContext } from "@/context/CursorContext";

import type {
  CursorPosition,
  CursorPreview,
  CursorSize,
  CursorVariant,
  CursorVideo,
} from "@/types/cursor";

export function useCursor() {
  const {
    cursor,

    show,
    hide,

    move,

    setVariant,

    setText,

    setImage,

    setVideo,

    setColor,

    setScale,

    setOpacity,

    setBlur,

    setSize,

    reset,
  } = useCursorContext();

  const showText = useCallback(
    (text: string) => {
      setVariant("text");
      setText(text);
      show();
    },
    [setVariant, setText, show],
  );

  const showImage = useCallback(
    (image: CursorPreview) => {
      setVariant("image");
      setImage(image);
      show();
    },
    [setVariant, setImage, show],
  );

  const showVideo = useCallback(
    (video: CursorVideo) => {
      setVariant("video");
      setVideo(video);
      show();
    },
    [setVariant, setVideo, show],
  );

  const showIcon = useCallback(() => {
    setVariant("icon");
    show();
  }, [setVariant, show]);

  const restore = useCallback(() => {
    reset();
  }, [reset]);

  return {
    cursor,

    show,
    hide,

    move,

    restore,

    showText,

    showImage,

    showVideo,

    showIcon,

    setVariant,

    setText,

    setImage,

    setVideo,

    setColor,

    setScale,

    setOpacity,

    setBlur,

    setSize,
  };
}

export type {
  CursorPosition,
  CursorPreview,
  CursorSize,
  CursorVariant,
  CursorVideo,
};

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import type {
  CursorContextValue,
  CursorPosition,
  CursorProviderProps,
  CursorPreview,
  CursorSize,
  CursorState,
  CursorVariant,
  CursorVideo,
} from "@/types/cursor";

const INITIAL_STATE: CursorState = {
  visible: false,

  variant: "default",

  text: null,

  image: null,

  video: null,

  color: "#ffffff",

  scale: 1,

  opacity: 1,

  blur: 0,

  size: {
    width: 14,
    height: 14,
  },

  position: {
    x: 0,
    y: 0,
  },
};

const CursorContext = createContext<CursorContextValue | null>(null);

export function CursorProvider({ children }: CursorProviderProps) {
  const [cursor, setCursor] = useState<CursorState>(INITIAL_STATE);

  const show = useCallback(() => {
    setCursor((prev) => ({
      ...prev,
      visible: true,
    }));
  }, []);

  const hide = useCallback(() => {
    setCursor((prev) => ({
      ...prev,
      visible: false,
    }));
  }, []);

  const move = useCallback((position: CursorPosition) => {
    setCursor((prev) => ({
      ...prev,
      position,
    }));
  }, []);

  const setVariant = useCallback((variant: CursorVariant) => {
    setCursor((prev) => ({
      ...prev,
      variant,
    }));
  }, []);

  const setText = useCallback((text: string | null) => {
    setCursor((prev) => ({
      ...prev,
      text,
    }));
  }, []);

  const setImage = useCallback((image: CursorPreview | null) => {
    setCursor((prev) => ({
      ...prev,
      image,
    }));
  }, []);

  const setVideo = useCallback((video: CursorVideo | null) => {
    setCursor((prev) => ({
      ...prev,
      video,
    }));
  }, []);

  const setColor = useCallback((color: string) => {
    setCursor((prev) => ({
      ...prev,
      color,
    }));
  }, []);

  const setScale = useCallback((scale: number) => {
    setCursor((prev) => ({
      ...prev,
      scale,
    }));
  }, []);

  const setOpacity = useCallback((opacity: number) => {
    setCursor((prev) => ({
      ...prev,
      opacity,
    }));
  }, []);

  const setBlur = useCallback((blur: number) => {
    setCursor((prev) => ({
      ...prev,
      blur,
    }));
  }, []);

  const setSize = useCallback((size: CursorSize) => {
    setCursor((prev) => ({
      ...prev,
      size,
    }));
  }, []);

  const reset = useCallback(() => {
    setCursor((prev) => ({
      ...INITIAL_STATE,
      position: prev.position,
      visible: prev.visible,
    }));
  }, []);

  const value = useMemo<CursorContextValue>(
    () => ({
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
    }),
    [
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
    ],
  );

  return (
    <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
  );
}

export function useCursorContext() {
  const context = useContext(CursorContext);

  if (!context) {
    throw new Error("useCursorContext must be used inside CursorProvider");
  }

  return context;
}

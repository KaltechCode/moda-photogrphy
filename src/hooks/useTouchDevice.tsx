"use client";

import { useEffect, useState } from "react";

export function useTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      const hasTouch =
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window;

      setIsTouchDevice(hasTouch);
    };

    checkTouchDevice();

    const media = window.matchMedia("(pointer: coarse)");

    const handleChange = () => {
      checkTouchDevice();
    };

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  return isTouchDevice;
}

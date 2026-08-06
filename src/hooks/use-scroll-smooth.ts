"use client";
import { gsap } from "gsap";
import { useState } from "react";
import { ScrollSmoother, ScrollTrigger } from "@/libs/plugins";
import { useGSAP } from "@gsap/react";

export default function useScrollSmooth() {
  const [isScrollSmooth, setIsScrollSmooth] = useState<boolean>(true);
  useGSAP(() => {
    const smoothWrapper = document.getElementById("smooth-wrapper");
    const smoothContent = document.getElementById("smooth-content");

    if (smoothWrapper && smoothContent && isScrollSmooth) {
      gsap.config({
        nullTargetWarn: false,
      });

      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });

      if (smoother) {
        ScrollTrigger.defaults({ scroller: "#smooth-wrapper" });
      }

      ScrollTrigger.refresh();
    }
  });
}

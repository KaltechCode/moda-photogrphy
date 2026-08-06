import { gsap } from "gsap";
import $ from "jquery";
import { ScrollTrigger } from "@/libs/plugins";

function instagramAnim() {
  if (!(gsap as any)._gsap || !(gsap as any).plugins?.ScrollTrigger) {
    try {
      gsap.registerPlugin(ScrollTrigger);
    } catch {}
  }

  if ($(".tp-instagram-area").length > 0) {
    let ins = gsap.matchMedia();
    ins.add("(min-width: 1200px)", () => {
      // Home 8 - pin the instagram area to the top while the animation runs
      // so that after the timeline ends the images remain centered in view.
      let tp_instagram_3 = gsap.timeline({
        scrollTrigger: {
          scroller: "#smooth-wrapper",
          trigger: ".tp-instagram-area",
          start: "top top",
          // pin for one viewport height so the final state appears centered
          end: () => "+=" + window.innerHeight,
          markers: false,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // animate thumbnails/images into their final sizes/positions
      tp_instagram_3.to(
        ".tp-instagram-thumb img",
        {
          width: "520px",
          height: "640px",
          borderRadius: "36px",
          ease: "power2.out",
        },
        0,
      );
    });
  }
}

export { instagramAnim };

import { gsap } from "gsap";

async function videoAnimTwo() {
  if (typeof window === "undefined") return;

  const { default: $ } = await import("jquery");
  if ($(".tp-video-area").length > 0) {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1400px)", () => {
      console.log("min-width: 1400px");
      let tp_hero_2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".tp-video-area",
          start: "top 170",
          pin: true,
          scrub: 1,
          pinSpacing: true,
          end: "bottom 70%",
          endTrigger: ".tp-project-2-area",
        },
      });
      tp_hero_2.to(".tp-video-wrap", {
        width: "1110px",
        height: "560px",
      });
    });
  }
}

export { videoAnimTwo };

import { gsap } from "gsap";
import { ScrollTrigger } from "@/libs/plugins";

async function panelOneAnimation() {
  if (typeof window === "undefined") return;

  // Ensure plugin is registered in case caller didn't do it
  if (!(gsap as any)._gsap || !(gsap as any).plugins?.ScrollTrigger) {
    try {
      gsap.registerPlugin(ScrollTrigger);
    } catch {}
  }
  let pp = gsap.matchMedia();

  pp.add(
    {
      isDesktop: "(min-width: 1500px)",
      // Condition 1: >= 1500px
      isPortrait: "(min-width: 1200px) and (orientation: portrait)",
      isLaptop:
        "(min-width: 1200px) and (max-width: 1499px) and (orientation: landscape)", // Condition 2: 1200px–1499px
    },
    (context) => {
      let { isDesktop, isLaptop, isPortrait } = context.conditions as any;

      // --- SETUP VARIABLES BASED ON EXCLUSIVE RANGES ---
      let pinValue = false;
      let startValue: string | number = "top 20%";
      let endValue: string | number | ((st: any) => string | number) =
        "bottom 75%";
      let heightValue = 720;

      if (isDesktop || isPortrait) {
        startValue = `top ${window.innerHeight - 700}`;
        endValue = `+=${window.innerHeight - 600}`;
        heightValue = 720;
      } else if (isLaptop) {
        startValue = "top 140";
        endValue = (st: any) =>
          "+=" + (st.vars.trigger.offsetWidth - innerWidth);
        heightValue = window.innerHeight;
        pinValue = true;
      }
      const panelsSections = gsap.utils.toArray(".panels");
      for (var i = 0; i < panelsSections.length; i++) {
        const thePanelsSection: any = panelsSections[i];
        const panels = gsap.utils.toArray(
          ".panels-container .panel",
          thePanelsSection,
        );
        const panelsContainer =
          thePanelsSection.querySelector(".panels-container");

        let totalPanelsWidth = 0;
        panels.forEach(function (panel: any) {
          if (panel) {
            totalPanelsWidth += panel.offsetWidth ?? 0;
          }
        });

        gsap.set(panelsContainer, {
          height: heightValue,
          width: totalPanelsWidth,
        });
        gsap.set(panels, { height: heightValue });

        gsap.to(panels, {
          x: -totalPanelsWidth + innerWidth,
          ease: "none",
          scrollTrigger: {
            trigger: panelsContainer,
            // pin: pinValue, // Use the determined pin value
            start: startValue, // Use the determined start value
            scrub: 1,
            pin: true,
            end: endValue as any, // Use the determined end value
          },
        });
      }
    },
  );

  let pj = gsap.matchMedia();
  pj.add("(min-width: 992px)", () => {
    if (document.querySelector(".tp-project-2-area")) {
      let sections = gsap.utils.toArray(".tp-project-2-area");
      let listItem = gsap.utils.toArray(".tpproject");
      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "bottom 115%",
          end: "bottom -100%",
          toggleClass: { targets: listItem[index], className: "addclass" },
        });
      });
    }
  });
}

export { panelOneAnimation };

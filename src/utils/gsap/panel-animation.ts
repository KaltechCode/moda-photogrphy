import { gsap } from "gsap";
import $ from "jquery";
import { ScrollTrigger } from "@/libs/plugins";

function panelOneAnimation() {
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
      let startValue: string | number = "top 40%";
      let endValue: string | number | ((st: any) => string | number) =
        "bottom 75%";
      let heightValue = 720;

      if (isDesktop || isPortrait) {
        startValue = `top ${window.innerHeight - 650}`;
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
            pin: pinValue,
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

// PORTFOLIO TWO ANIMATION
function panelTwoAnimation() {
  if (typeof window === "undefined") return;
  if (!(gsap as any)._gsap || !(gsap as any).plugins?.ScrollTrigger) {
    try {
      gsap.registerPlugin(ScrollTrigger);
    } catch {}
  }
  let pr = gsap.matchMedia();
  pr.add("(min-width: 768px)", () => {
    const isLarge = window.matchMedia("(min-width: 1500px)").matches;
    let tl = gsap.timeline();
    let projectPanels = document.querySelectorAll(".project-panel");
    // if (projectPanels.length > 0) {
    projectPanels.forEach((section) => {
      tl.to(section, {
        scrollTrigger: {
          trigger: section,
          pin: isLarge ? false : section,
          scrub: 1,
          start: "tp-project-2-area",
          end: "bottom 100%",
          endTrigger: ".project-panel-area",
          pinSpacing: false,
        },
      });
    });
    // }
  });
}

function studioPanel() {
  if (typeof window === "undefined") return;
  if (!(gsap as any)._gsap || !(gsap as any).plugins?.ScrollTrigger) {
    try {
      gsap.registerPlugin(ScrollTrigger);
    } catch {}
  }
  let pp_2 = gsap.matchMedia();
  pp_2.add("(min-width: 1200px) and (max-width: 19720px)", () => {
    const isLarge = window.matchMedia("(min-width: 1500px)").matches;
    const panelsSectionss = gsap.utils.toArray(".panels-2");
    for (let i = 0; i < panelsSectionss.length; i++) {
      const thePanelsSection: any = panelsSectionss[i];
      const panels = gsap.utils.toArray(
        ".panels-container-2 .panel-2",
        thePanelsSection,
      );
      const panelsContainer = thePanelsSection.querySelector(
        ".panels-container-2",
      );

      gsap.set(panelsContainer, { height: window.innerHeight });
      gsap.set(panels, { height: window.innerHeight });

      let totalPanelsWidth: any = 0;
      panels.forEach(function (panel: any) {
        totalPanelsWidth += $(panel).width();
      });

      gsap.set(panelsContainer, { width: totalPanelsWidth });
      let scrollTween = gsap.to(panels, {
        x: -totalPanelsWidth + window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: panelsContainer,
          pin: isLarge ? false : true,
          pinSpacing: true,
          start: "top 0",
          scrub: 1,
          end: (st) => "+=" + totalPanelsWidth,
        },
      });

      const services_items: any = gsap.utils.toArray(".tp-studio-service-item");

      services_items.forEach(function (item: any) {
        gsap.to(item, {
          marginLeft: "0",
          scrollTrigger: {
            trigger: ".tp-studio-service-area",
            containerAnimation: scrollTween,
            start: "left center",
            end: "400px 200px",
            scrub: 0.5,
          },
        });
      });
    }
  });
}

function servicePanel() {
  if (typeof window === "undefined") return;

  if (!(gsap as any)._gsap || !(gsap as any).plugins?.ScrollTrigger) {
    try {
      gsap.registerPlugin(ScrollTrigger);
    } catch {}
  }

  const sv = gsap.matchMedia();

  // Targets iPad Mini (768px) and up.
  // Added min-height: 500px to exclude mobile phones in landscape mode.
  sv.add("(min-width: 768px) and (min-height: 500px)", () => {
    // Create the timeline INSIDE the matchMedia so it resets on resize
    const tl = gsap.timeline();
    const projectpanelss = document.querySelectorAll(".project-panel-2");

    projectpanelss.forEach((section) => {
      tl.to(section, {
        scrollTrigger: {
          trigger: section,
          pin: section,
          scrub: 1,
          start: "top top",
          end: "bottom 100%",
          endTrigger: ".project-panel-area-2",
          pinSpacing: false,
          invalidateOnRefresh: true, // Helps with responsive recalculations
        },
      });
    });

    // Cleanup: GSAP matchMedia handles this automatically if variables are inside
    return () => {
      // Any specific manual cleanup if needed
    };
  });

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
}

export { panelOneAnimation, panelTwoAnimation, studioPanel, servicePanel };

// import { gsap } from "gsap";
// import { ScrollTrigger } from "@/libs/plugins";

// async function panelOneAnimation() {
//   if (typeof window === "undefined") return;

//   // Ensure plugin is registered in case caller didn't do it
//   if (!(gsap as any)._gsap || !(gsap as any).plugins?.ScrollTrigger) {
//     try {
//       gsap.registerPlugin(ScrollTrigger);
//     } catch {}
//   }
//   let pp = gsap.matchMedia();

//   pp.add(
//     {
//       isDesktop: "(min-width: 1500px)",
//       // Condition 1: >= 1500px
//       isPortrait: "(min-width: 1200px) and (orientation: portrait)",
//       isLaptop:
//         "(min-width: 1200px) and (max-width: 1499px) and (orientation: landscape)", // Condition 2: 1200px–1499px
//     },
//     (context) => {
//       let { isDesktop, isLaptop, isPortrait } = context.conditions as any;

//       // --- SETUP VARIABLES BASED ON EXCLUSIVE RANGES ---
//       let pinValue = false;
//       let startValue: string | number = "top 20%";
//       let endValue: string | number | ((st: any) => string | number) =
//         "bottom 75%";
//       let heightValue = 720;

//       if (isDesktop || isPortrait) {
//         startValue = `top ${window.innerHeight - 700}`;
//         endValue = `+=${window.innerHeight - 600}`;
//         heightValue = 720;
//       } else if (isLaptop) {
//         startValue = "top 140";
//         endValue = (st: any) =>
//           "+=" + (st.vars.trigger.offsetWidth - innerWidth);
//         heightValue = window.innerHeight;
//         pinValue = true;
//       }
//       const panelsSections = gsap.utils.toArray(".panels");
//       for (var i = 0; i < panelsSections.length; i++) {
//         const thePanelsSection: any = panelsSections[i];
//         const panels = gsap.utils.toArray(
//           ".panels-container .panel",
//           thePanelsSection,
//         );
//         const panelsContainer =
//           thePanelsSection.querySelector(".panels-container");

//         let totalPanelsWidth = 0;
//         panels.forEach(function (panel: any) {
//           if (panel) {
//             totalPanelsWidth += panel.offsetWidth ?? 0;
//           }
//         });

//         gsap.set(panelsContainer, {
//           height: heightValue,
//           width: totalPanelsWidth,
//         });
//         gsap.set(panels, { height: heightValue });

//         gsap.to(panels, {
//           x: -totalPanelsWidth + innerWidth,
//           ease: "none",
//           scrollTrigger: {
//             trigger: panelsContainer,
//             // pin: pinValue, // Use the determined pin value
//             start: startValue, // Use the determined start value
//             scrub: 1,
//             pin: true,
//             end: endValue as any, // Use the determined end value
//           },
//         });
//       }
//     },
//   );

//   let pj = gsap.matchMedia();
//   pj.add("(min-width: 992px)", () => {
//     if (document.querySelector(".tp-project-2-area")) {
//       let sections = gsap.utils.toArray(".tp-project-2-area");
//       let listItem = gsap.utils.toArray(".tpproject");
//       sections.forEach((section, index) => {
//         ScrollTrigger.create({
//           trigger: section,
//           start: "bottom 115%",
//           end: "bottom -100%",
//           toggleClass: { targets: listItem[index], className: "addclass" },
//         });
//       });
//     }
//   });
// }

// import { gsap } from "gsap";
// import { ScrollTrigger } from "@/libs/plugins";

// async function panelOneAnimation() {
//   if (typeof window === "undefined") return;

//   if (!(gsap as any)._gsap || !(gsap as any).plugins?.ScrollTrigger) {
//     try {
//       gsap.registerPlugin(ScrollTrigger);
//     } catch {}
//   }

// const mm = gsap.matchMedia();

// mm.add(
//   {
//     isDesktop: "(min-width: 1500px)",
//     isPortrait: "(min-width: 1200px) and (orientation: portrait)",
//     isLaptop:
//       "(min-width: 1200px) and (max-width: 1499px) and (orientation: landscape)",
//   },
//   (context) => {
//     const { isDesktop, isLaptop, isPortrait } = context.conditions as any;

//     let startValue: string | number = "top 20%";
//     let heightValue = 720;

//     if (isDesktop || isPortrait) {
//       startValue = `top ${window.innerHeight - 700}`;
//       heightValue = 720;
//     } else if (isLaptop) {
//       startValue = "top 140";
//       heightValue = window.innerHeight;
//     }

//     const panelsSections = gsap.utils.toArray<HTMLElement>(".panels");

//     panelsSections.forEach((section) => {
//       const panelsContainer = section.querySelector(
//         ".panels-container",
//       ) as HTMLElement;

//       if (!panelsContainer) return;

//       const panels = gsap.utils.toArray<HTMLElement>(
//         ".panels-container .panel",
//         section,
//       );

//       let totalPanelsWidth = 0;

//       panels.forEach((panel) => {
//         totalPanelsWidth += panel.offsetWidth;
//       });

//       gsap.set(panelsContainer, {
//         width: totalPanelsWidth,
//         height: heightValue,
//       });

//       gsap.set(panels, {
//         height: heightValue,
//       });

//       const horizontalDistance = totalPanelsWidth - window.innerWidth;

//       const scrollDistance = Math.max(
//         horizontalDistance * 2,
//         window.innerHeight * 1.5,
//       );

//       gsap.to(panels, {
//         x: -horizontalDistance,
//         ease: "none",

//         scrollTrigger: {
//           trigger: panelsContainer,

//           start: startValue,

//           end: () => `+=${scrollDistance}`,

//           scrub: 2,

//           pin: true,

//           pinSpacing: true,

//           anticipatePin: 1,

//           invalidateOnRefresh: true,

//           fastScrollEnd: false,

//           // markers: true,
//         },
//       });
//     });

//     ScrollTrigger.refresh();

//     return () => {
//       ScrollTrigger.getAll().forEach((st: any) => st.kill());
//     };
//   },
// );

//   const mm = gsap.matchMedia();

//   mm.add(
//     {
//       isMobile: "(max-width: 767px)",
//       isTablet: "(min-width: 768px) and (max-width: 1199px)",
//       isDesktop: "(min-width: 1500px)",
//       isPortrait: "(min-width: 1200px) and (orientation: portrait)",
//       isLaptop:
//         "(min-width: 1200px) and (max-width: 1499px) and (orientation: landscape)",
//     },
//     (context) => {
//       const { isMobile, isTablet, isDesktop, isPortrait, isLaptop } =
//         context.conditions as any;

//       let startValue = "top top";
//       let panelHeight = window.innerHeight;
//       let scrollMultiplier = 2;

//       if (isMobile) {
//         startValue = "top top";
//         panelHeight = window.innerHeight;
//         scrollMultiplier = 3.5;
//       } else if (isTablet) {
//         startValue = "top top";
//         panelHeight = window.innerHeight;
//         scrollMultiplier = 3;
//       } else if (isLaptop) {
//         startValue = "top 140";
//         panelHeight = window.innerHeight;
//         scrollMultiplier = 2.5;
//       } else if (isDesktop || isPortrait) {
//         startValue = `top ${window.innerHeight - 700}`;
//         panelHeight = 720;
//         scrollMultiplier = 2;
//       }

//       const sections = gsap.utils.toArray<HTMLElement>(".panels");

//       sections.forEach((section) => {
//         const container = section.querySelector(
//           ".panels-container",
//         ) as HTMLElement;

//         if (!container) return;

//         const panels = gsap.utils.toArray<HTMLElement>(".panel", container);

//         let totalWidth = 0;

//         panels.forEach((panel) => {
//           totalWidth += panel.offsetWidth;
//         });

//         gsap.set(container, {
//           width: totalWidth,
//           height: panelHeight,
//         });

//         gsap.set(panels, {
//           height: panelHeight,
//         });

//         const moveDistance = totalWidth - window.innerWidth;

//         const scrollDistance = Math.max(
//           moveDistance * scrollMultiplier,
//           window.innerHeight * scrollMultiplier,
//         );

//         gsap.to(panels, {
//           x: -moveDistance,
//           ease: "none",

//           scrollTrigger: {
//             trigger: container,

//             start: startValue,

//             end: () => `+=${scrollDistance}`,

//             pin: true,

//             pinSpacing: true,

//             scrub: 2,

//             anticipatePin: 1,

//             invalidateOnRefresh: true,

//             fastScrollEnd: false,
//           },
//         });
//       });

//       ScrollTrigger.refresh();

//       return () => {
//         ScrollTrigger.getAll().forEach((st: any) => st.kill());
//       };
//     },
//   );
//   const pj = gsap.matchMedia();

//   pj.add("(min-width: 992px)", () => {
//     const sections = gsap.utils.toArray(".tp-project-2-area");
//     const listItem = gsap.utils.toArray(".tpproject");

//     sections.forEach((section, index) => {
//       ScrollTrigger.create({
//         trigger: section,

//         start: "bottom 115%",

//         end: "bottom -100%",

//         toggleClass: {
//           targets: listItem[index],
//           className: "addclass",
//         },
//       });
//     });
//   });
// }

// export { panelOneAnimation };

import { gsap } from "gsap";
import { ScrollTrigger } from "@/libs/plugins";

async function panelOneAnimation() {
  if (typeof window === "undefined") return;

  if (!(gsap as any)._gsap || !(gsap as any).plugins?.ScrollTrigger) {
    try {
      gsap.registerPlugin(ScrollTrigger);
    } catch {}
  }

  const mm = gsap.matchMedia();

  mm.add(
    {
      isMobile: "(max-width: 767px)",
      isTablet: "(min-width: 768px) and (max-width: 1199px)",
      isDesktop: "(min-width: 1500px)",
      isPortrait: "(min-width: 1200px) and (orientation: portrait)",
      isLaptop:
        "(min-width: 1200px) and (max-width: 1499px) and (orientation: landscape)",
    },
    (context) => {
      const { isMobile, isTablet, isLaptop, isDesktop, isPortrait } =
        context.conditions as any;

      let start = "center center";
      let panelHeight = window.innerHeight;
      let multiplier = 2;

      if (isMobile) {
        start = "center center";
        panelHeight = window.innerHeight;
        multiplier = 1.4;
      } else if (isTablet) {
        start = "center center";
        panelHeight = window.innerHeight;
        multiplier = 1.6;
      } else if (isLaptop) {
        start = "center center";
        panelHeight = window.innerHeight;
        multiplier = 2.2;
      } else if (isDesktop || isPortrait) {
        start = `top ${window.innerHeight - 700}`;
        panelHeight = 720;
        multiplier = 2.5;
      }

      const sections = gsap.utils.toArray<HTMLElement>(".panels");

      sections.forEach((section) => {
        const container = section.querySelector(
          ".panels-container",
        ) as HTMLElement;

        if (!container) return;

        gsap.set(container, {
          height: panelHeight,
        });

        const panels = gsap.utils.toArray<HTMLElement>(".panel", container);

        gsap.set(panels, {
          height: panelHeight,
        });

        ScrollTrigger.refresh();

        const updateAnimation = () => {
          const totalWidth = container.scrollWidth;
          const visibleWidth = section.clientWidth;

          const moveDistance = Math.max(totalWidth - visibleWidth, 0);

          if (moveDistance <= 0) return;

          const scrollDistance = moveDistance * multiplier;

          gsap.to(container, {
            x: -moveDistance,
            ease: "none",

            scrollTrigger: {
              trigger: section,

              start,

              end: () => `+=${scrollDistance}`,

              pin: section,

              pinSpacing: true,

              scrub: 2,

              anticipatePin: 1,

              invalidateOnRefresh: true,

              pinType: document.querySelector("#smooth-wrapper")
                ? "transform"
                : "fixed",
              pinReparent: true,

              fastScrollEnd: false,

              // markers: true,
            },
          });
        };

        requestAnimationFrame(updateAnimation);
      });

      ScrollTrigger.refresh();

      return () => {
        ScrollTrigger.getAll().forEach((st: any) => st.kill());
      };
    },
  );

  const pj = gsap.matchMedia();

  pj.add("(min-width: 992px)", () => {
    const sections = gsap.utils.toArray(".tp-project-2-area");
    const listItem = gsap.utils.toArray(".tpproject");

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,

        start: "bottom 115%",

        end: "bottom -100%",

        toggleClass: {
          targets: listItem[index],
          className: "addclass",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st: any) => st.kill());
    };
  });
}

export { panelOneAnimation };

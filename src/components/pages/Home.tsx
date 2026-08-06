"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/libs/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// animation
import {
  bounceAnimation,
  heroBgAnimation,
  heroTitleAnim,
} from "@/utils/gsap/text-animation";
import HeroBanner from "../medium/hero/home";
import Wrapper from "../layouts/Wrapper";
import Header from "../layouts/Header";
import About from "../large/About";
import Video from "../medium/Video";
import Service from "../medium/service";
import ShowSection from "../medium/showcaseworks";
import Instagram from "../large/Intagram";
import Footer from "../layouts/Footer";
import { videoAnimOne, videoAnimTwo } from "@/utils/gsap/video-anim";
import { panelOneAnimation } from "@/utils/gsap/panel-animation";
import { instagramAnim } from "@/utils/gsap/instagram-anim";
// import { instagramAnim } from "@/utils/gsap/instagram-anim";
// import { hoverBtn } from "@/utils/gsap/hover-btn";

const HomePage = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      // hero animation
      heroTitleAnim();

      heroBgAnimation();
      // bounce animation
      bounceAnimation();
      // video anim
      videoAnimTwo();
      // panel animation
      panelOneAnimation();

      instagramAnim();
      // hoverBtn();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <Header />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* hero area start */}
            <HeroBanner />
            {/* hero area end */}

            {/* about area start */}
            <About />
            {/* about area end */}

            {/* video area start */}
            <Video />
            {/* video area end */}

            {/* service area start */}
            {/* <Service /> */}
            {/* service area end */}

            {/* project area */}
            <ShowSection />
            {/* project area */}

            {/* instagram area */}
            <Instagram />
            {/* instagram area */}
          </main>

          {/* footer area */}
          {/* <Footer /> */}
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;

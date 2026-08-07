"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useSpring, useTransform } from "motion/react";
import { motion } from "motion/react";

// instagram images
import Contact_our_team from "@/assets/photo/portrait.png";
import { useMediaQuery } from "@/utils/getMedia";
import { Icon } from "../small/Icon";

import inst_1 from "@/assets/photo/project-one.png";
import inst_2 from "@/assets/photo/project-two.png";
const inst_3 = "/images/Image-3.png";
const inst_4 = "/images/Image-4.png";
const inst_5 = "/images/Image-5.png";
const inst_6 = "/images/Image-6.png";
const inst_7 = "/images/Img1.png";

export default function InstagramArea() {
  const instagram_images = [
    // { id: 1, img: inst_1 },
    // { id: 2, img: inst_2 },
    { id: 3, img: inst_3 },
    { id: 4, img: inst_4 },
    { id: 5, img: inst_5 },
    { id: 6, img: inst_6 },
    // { id: 7, img: inst_7 },
  ];
  const refContainer = useRef(null);

  const { scrollYProgress } = useScroll();

  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 991px)");
  const isMobileLandscape = useMediaQuery(
    "(min-width: 576px) and (max-width: 900px) and (orientation: landscape)",
  );

  // const aspect = window?.devicePixelRatio;

  // container: refContainer,
  // target: refContainer,
  // offset: ["start end", "end end"],

  const rawScale = useTransform(scrollYProgress, [0.1, 0.55], [0.3, 1]);
  const sRawScale = useTransform(scrollYProgress, [0.1, 0.15], [0.8, 1]);
  const rawScale3 = useTransform(scrollYProgress, [0.2, 0.65], [0.3, 1]);
  const sRawScale3 = useTransform(scrollYProgress, [0.2, 0.35], [0.8, 1]);
  const rawScale4 = useTransform(scrollYProgress, [0.23, 0.67], [0.3, 1]);
  const sRawScale4 = useTransform(scrollYProgress, [0.23, 0.37], [0.8, 1]);
  const rawPosT1 = useTransform(scrollYProgress, [0.1, 0.55], [10, -150]);
  const sRawPosT1 = useTransform(scrollYProgress, [0.1, 0.25], [6, -120]);
  const rawPosL3 = useTransform(scrollYProgress, [0.1, 0.35], [-12, -320]);
  const sRawPosL3 = useTransform(scrollYProgress, [0.1, 0.15], [-12, -180]);

  const rawPosL4 = useTransform(scrollYProgress, [0.1, 0.35], [-12, -180]);

  const sRawPosL4 = useTransform(scrollYProgress, [0.1, 0.15], [-8, -140]);

  const rawPosR5 = useTransform(scrollYProgress, [0.1, 0.35], [-15, -120]);

  const sRawPosR5 = useTransform(scrollYProgress, [0.1, 0.15], [-12, -90]);

  const scale = useSpring(
    isTablet || isMobileLandscape ? sRawScale : rawScale,
    {
      stiffness: 100, // Lower is springier/slower
      damping: 30, // Higher is more resistive/slower
      restDelta: 0.001,
    },
  );

  const scale3 = useSpring(
    isTablet || isMobileLandscape ? sRawScale3 : rawScale3,
    {
      stiffness: 100, // Lower is springier/slower
      damping: 30, // Higher is more resistive/slower
      restDelta: 0.001,
    },
  );

  const scale4 = useSpring(
    isTablet || isMobileLandscape ? sRawScale4 : rawScale4,
    {
      stiffness: 100, // Lower is springier/slower
      damping: 30, // Higher is more resistive/slower
      restDelta: 0.001,
    },
  );

  const posT1 = useSpring(
    isTablet || isMobileLandscape ? sRawPosT1 : rawPosT1,
    {
      stiffness: 100, // Lower is springier/slower
      damping: 30, // Higher is more resistive/slower
      restDelta: 0.001,
    },
  );

  const posL3 = useSpring(
    isTablet || isMobileLandscape ? sRawPosL3 : rawPosL3,
    {
      stiffness: 100, // Lower is springier/slower
      damping: 30, // Higher is more resistive/slower
      restDelta: 0.001,
    },
  );

  const posL4 = useSpring(
    isTablet || isMobileLandscape ? sRawPosL4 : rawPosL4,
    {
      stiffness: 100, // Lower is springier/slower
      damping: 30, // Higher is more resistive/slower
      restDelta: 0.001,
    },
  );

  const posR5 = useSpring(
    isTablet || isMobileLandscape ? sRawPosR5 : rawPosR5,
    {
      stiffness: 100, // Lower is springier/slower
      damping: 30, // Higher is more resistive/slower
      restDelta: 0.001,
    },
  );

  // return (
  //   <div
  //     className="tp-instagram-area tp-instagram-ptb text-center p-relative mb-10"
  //     style={{ height: 650 }}
  //     ref={refContainer}
  //   >
  //     <div
  //       className="tp-instagram-thumb-wrap p-relative "
  //       style={{ height: "max-content" }}
  //     >
  //       <motion.div
  //         className={`tp-instagram-thumb-inner-3`}
  //         style={{
  //           scale: scale3,
  //         }}
  //       >
  //         <a href="/contact" aria-label="link to contact page">
  //           <Image src={instagram_images[0].img} alt="contact us Image" />
  //         </a>
  //       </motion.div>

  //       <motion.div
  //         className={`tp-instagram-thumb-inner-6 `}
  //         style={{
  //           scale: scale3,
  //         }}
  //       >
  //         <div
  //           style={{
  //             position: "relative",
  //             height: "100%",
  //             overflow: "hidden",
  //           }}
  //         ></div>
  //       </motion.div>

  //       <motion.div
  //         className={`tp-instagram-thumb-inner-7`}
  //         style={{
  //           scale: scale,
  //           display: "flex",
  //           alignItems: "center",
  //         }}
  //       >
  //         <h3 className="split-text" style={{ padding: "10px 0" }}>
  //           Are You{" "}
  //         </h3>
  //       </motion.div>

  //       <motion.div
  //         className="tp-instagram-thumb-center-image"
  //         style={{ scale, background: "#111" }}
  //       >
  //         <div
  //           className=""
  //           style={{
  //             display: "flex",

  //             position: "relative",
  //             justifyContent: "center",
  //             alignItems: "center",
  //             height: "100%",
  //             gap: "20px",
  //           }}
  //         >
  //           <div className="split-text-container" style={{}}>
  //             <p
  //               style={{
  //                 color: "#fff",
  //                 letterSpacing: "10",
  //                 marginBottom: 0,
  //                 fontSize: "clamp(16px, calc(1vw + 16px), 28px)",
  //               }}
  //             >
  //               SEARCHING FOR A
  //             </p>
  //           </div>
  //         </div>
  //       </motion.div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="tp-instagram-area tp-instagram-ptb text-center">
      <div className="tp-instagram-thumb-wrap p-relative">
        {instagram_images.map((item) => (
          <div key={item.id} className={`tp-instagram-thumb-inner-${item.id}`}>
            <img
              src={item.img}
              alt="inst-img"
              width={100}
              height={100}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
        <div className="tp-instagram-thumb-inner-8 d-none d-xl-block">
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="tp-instagram-thumb">
          {/* <Image src={inst_8} alt="inst-img" */}

          <img src={inst_7} alt="inst-img" className="" />
        </div>
        <div className="tp-instagram-content-wrap text-start">
          <div className="tp-instagram-title-box">
            <span className="tp-instagram-subtitle">INSTAGRAM</span>
            <h4 className="tp-instagram-title">@modastudio</h4>
          </div>
          <div className="tp-instagram-content">
            <p>
              Become a part of our stories! <br /> Join MODA Studio..
            </p>
            <a className="tp-btn-white background-black" href="#">
              Follow Us
              <span>
                <Icon name="leaf" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

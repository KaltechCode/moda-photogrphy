"use client";
import React, { CSSProperties } from "react";
import Image from "next/image";
// images
import ab_1 from "@/assets/photo/portrait.png";
import ab_2 from "@/assets/photo/caia-portrait.png";
import ab_3 from "@/assets/photo/woman-with-wig-portrait.png";
// img style
const imgStyle: CSSProperties = { height: "auto" };
const About = () => {
  return (
    <div className="tp-about-2-area pt-125 pb-200">
      <div className="wrapper-container-cls ">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10">
            <div className="tp-about-2-title-box tp-btn-trigger tp-btn-bounce mb-70 text-start text-xl-center">
              <h2 className="tp-about-2-section-title">
                Your Vision, Our Studio. Perfect Results, Every Occasion{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 col-md-6 order-1 order-xl-0">
            <div className="tp-about-2-thumb-box p-relative">
              <div className="tp-about-2-thumb-main">
                <img src={"/images/moda.jpg"} alt="ab-img" style={imgStyle} />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-12 order-0 order-xl-1">
            <div className="tp-about-2-content">
              {/* <span>FOLLOW FOR THE BEST EYEWEAR INSPIRATION</span> */}
              <p className="mb-30">
                From professional photography to immersive fashion experiences,
                MODA Studio is more than a creative space; it’s a hub for
                aspiring artists, models, entrepreneurs, and creators in Down
                town Nashville and Germantown. Whether you’re stepping in front
                of the camera, producing your own event, or launching a project,
                we provide the tools, guidance, and environment to bring your
                vision to life.
              </p>
              {/* <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt .!
              </p> */}
            </div>
          </div>
          <div className="col-xl-2 col-lg-6 col-md-6 order-1">
            <div className="tp-about-2-right-thumb text-end">
              <img
                data-speed="auto"
                src={"/images/section2img2.webp"}
                alt="ab-img"
                data-lag="0"
                style={imgStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

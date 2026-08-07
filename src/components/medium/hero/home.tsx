"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import hero_bg from "@/assets/hero/moda-make-up-image.png";
import { Icon } from "@/components/small/Icon";

const HeroBanner = () => {
  return (
    <div className="tp-hero-2-area tp-hero-2-pt">
      <div className="w-full justify-center flex!">
        <div className="mx-auto">
          <div className="tp-hero-2-wrapper-main">
            <div className="tp-hero-2-wrapper d-flex align-items-center p-relative">
              <div className="tp-hero-2-bg tp-gsap-bg tp-hero-bg-single">
                {/* <img src={"/images/Hero.webp"} alt="hero-bg" /> */}
                <img src={"/Hero.png"} alt="hero-bg" />
              </div>
              {/* <div className="tp-hero-2-content-wrap p-relative">
                <div className="tp-hero-2-title-box">
                  <h2 className="tp-hero-2-title text-1 z-index-5">
                    MODA Studio
                  </h2>
                </div>

                <div className="tp-hero-2-content">
                  <p className="tp-hero-2-title">Premium</p>
                  <p> Photo Studio & Events Space.</p>
                  <Link
                    className="tp-btn-white flex! justify-center items-center w-max"
                    href="/"
                  >
                    Join Us
                    <span>
                      <Icon name="leaf" size={20} />
                    </span>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

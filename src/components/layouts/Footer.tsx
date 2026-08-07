import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/share/logo.svg";
import logoWhite from "@/assets/share/light-logo.svg";

// prop type
type IProps = {
  whiteFooter?: boolean;
  topCls?: string;
};

export default function Footer({ whiteFooter = false, topCls = "" }: IProps) {
  return (
    <footer className={`${topCls} mt-50`}>
      <div
        className={`tp-footer-2-area pt-100 pb-20 ${
          whiteFooter ? "tp-footer-white" : "black-bg"
        }`}
      >
        <div className="wrapper-container-cls ">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-1">
                {!whiteFooter && (
                  <div className="tp-footer-2-widget-logo">
                    <Link href="/">
                      <img src={"/logo/light-logo.svg"} alt="logo" />
                    </Link>
                  </div>
                )}
                {whiteFooter && (
                  <div className="tp-footer-2-widget-logo tp-footer-dark">
                    <Link className="logo-1" href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                    <Link className="logo-2" href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                )}
                <div className="tp-footer-2-widget-text">
                  <p>
                    From professional photography to immersive fashion
                    experiences, MODA Studio is more than a creative space –
                    it’s a hub for aspiring artists, models, entrepreneurs, and
                    creators in Downtown Nashville – Germantown.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 className="tp-footer-2-widget-title">Quick Links</h4>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Portfolio</a>
                    </li>
                    <li>
                      <a href="#">Gallery</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 className="tp-footer-2-widget-title">Office</h4>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a
                      href="https://www.google.com/maps/@23.8223596,90.3656686,15z?entry=ttu"
                      target="_blank"
                    >
                      1919 Ninth ave N , Nashville , Tennessee, Tn, 37208
                    </a>
                  </span>
                </div>
                {/* <div className="tp-footer-2-contact-item">
                  <span>
                    <a href="tel:+725214456">P: + 725 214 456</a>
                  </span>
                  d
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a href="mailto:contact@liko.com">E: contact@liko.com</a>
                  </span>
                </div> */}
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-4">
                <div className="tp-footer-2-widget-newslatter">
                  <h4 className="tp-footer-2-widget-title">
                    Subscribe to our newsletter
                  </h4>
                  <form action="#">
                    <div className="tp-footer-2-input p-relative">
                      <input type="text" placeholder="Enter your email..." />
                      <button>
                        {/* <RightArrow
                          clr={whiteFooter ? "currentcolor" : "#F3F3F4"}
                        /> */}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`tp-copyright-2-area tp-copyright-2-bdr-top ${
          whiteFooter ? "tp-copyright-white" : "black-bg"
        }`}
      >
        <div className="wrapper-container-cls ">
          <div className="row align-items-center justify-content-between">
            <div className="footer-box-one">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p>
                  Copyright {new Date().getFullYear()} Moda Studio. All rights
                  reserved
                </p>
              </div>
            </div>
            <div className="footer-box-two tp-copyright-2-left text-center text-lg-start">
              <p>
                <Link href={"/"} className="">
                  Designed by Kaltech
                </Link>
              </p>
            </div>
            <div className="footer-box-three">
              <div className="tp-copyright-2-social text-center text-lg-end">
                <a className="mb-10" href="#">
                  Facebook
                </a>
                <a className="mb-10" href="#">
                  Instagram
                </a>
                <a className="mb-10" href="#">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer area end --> */}
    </footer>
  );
}

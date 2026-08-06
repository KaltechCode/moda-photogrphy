import React from "react";
import Image from "next/image";

// images
import logo from "@/assets/share/logo.svg";

import { Icon } from "../small/Icon";
import MobileMenus from "./mobileMenus";

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({
  openOffcanvas,
  setOpenOffcanvas,
}: IProps) {
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="flex items-center justify-between mb-30">
            <div className="tp-offcanvas-logo">
              <a href="#">
                <Image src={logo} alt="logo" />
              </a>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <Icon name="close" size={24} />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus />
            </div>

            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>

              <ul>
                <li>
                  <a href="tel:1245654">+ 1 20 7800 1207</a>
                </li>
                <li>
                  <a href="mailto:modastudio@moda.com">modastudio@moda.com</a>
                </li>
                <li>
                  <a href="#">Avenuq Queen Road 158b, Usa</a>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <a href="#" className="flex! items-center justify-center">
                    <Icon name="instagram" size={20} />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex! items-center justify-center">
                    <Icon name="dribble" size={20} />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex! items-center justify-center">
                    {" "}
                    <Icon name="behance" size={20} />
                  </a>
                </li>
                <li className="">
                  <a href="#" className="flex! items-center justify-center">
                    <Icon name="youtube" size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}

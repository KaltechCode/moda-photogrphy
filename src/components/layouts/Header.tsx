"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useSticky from "@/libs/useSticky";
import MobileOffcanvas from "../medium/mobileCanvass";
import HeaderMenus from "../medium/header-menus";
import logo from "@/assets/share/logo.svg";
import logoWhite from "@/assets/share/light-logo.svg";
import { Icon } from "../small/Icon";

const Header = () => {
  const { sticky, headerRef, headerFullWidth } = useSticky();
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
  useEffect(() => {
    headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="tp-header-height" ref={headerRef}>
        <div
          id="header-sticky"
          className={`tp-header-area tp-transparent z-index-9 ${sticky ? "header-sticky" : ""}`}
        >
          <div className="top-bar-container">
            <div className="top-bar-container-content">
              <p>Schedule a tour</p>
              <p>Join moda studio club</p>
            </div>
          </div>
          <div className="wrapper-container-cls">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-6">
                <div className="tp-header-logo">
                  <Link className="logo-1" href="/">
                    <Image
                      src={logo}
                      alt="logo"
                      width={167}
                      height={100}
                      className=""
                    />
                  </Link>
                  <Link className="logo-2" href="/">
                    <Image src={logoWhite} alt="logo" width={85} height={26} />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-9 d-none d-xl-block">
                <div className="tp-header-menu header-main-menu text-center">
                  <nav className="tp-main-menu-content">
                    {/* header menus */}
                    <HeaderMenus />
                    {/* header menus */}
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg col-6 flex gap-3">
                <div className="tp-header-bar text-end flex icon-user-con">
                  <button
                    className="tp-offcanvas-open-btn bg-button"
                    onClick={() => {}}
                  >
                    <Icon name="user" size={28} color="#fff" />
                  </button>

                  <button
                    className="tp-offcanvas-open-btn hambuger"
                    onClick={() => setOpenOffCanvas(true)}
                  >
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas */}
      <MobileOffcanvas
        openOffcanvas={openOffCanvas}
        setOpenOffcanvas={setOpenOffCanvas}
      />
      {/* off canvas */}
    </>
  );
};

export default Header;

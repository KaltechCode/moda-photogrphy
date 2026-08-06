import React from "react";
import Image from "next/image";
import Link from "next/link";
import shop_banner from "@/assets/img/menu/shop-menu/banner-1.jpg";
import port_img from "@/assets/img/menu/portfolio-menu/portfolio.png";
import { IMenuDT } from "@/types/menus";
import { menu_data } from "@/utils/data/menu";

export default function MobileMenus() {
  const [navTitle, setNavTitle] = React.useState<string>("");

  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <>
      <nav className="tp-main-menu-content">
        <ul>
          {menu_data.map((menu: IMenuDT) => (
            <li
              key={menu.id}
              className={`has-dropdown ${navTitle === menu.title ? "active" : ""}`}
            >
              <a className="pointer" onClick={() => openMobileMenu(menu.title)}>
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import projectOne from "../../../public/images/Img1.webp";
import projectTwo from "../../../public/images/Img2.webp";
import projectThree from "../../../public/images/Img3.webp";
import projectFour from "../../../public/images/Img4.webp";
import projectFive from "../../../public/images/Img5.webp";
import projectSix from "../../../public/images/Img6.webp";
import projectSeven from "../../../public/images/Img7.webp";

const project_data = [
  {
    id: 1,
    img: projectOne,
    subtitle: "Woman",
    title: "Portrait",
  },
  {
    id: 2,
    img: projectTwo,
    subtitle: "Woman",
    title: "Portrait",
  },
  {
    id: 3,
    img: projectThree,
    subtitle: "Woman",
    title: "Portrait",
  },
  {
    id: 4,
    img: projectFour,
    subtitle: "Woman",
    title: "Portrait",
  },
  {
    id: 5,
    img: projectFive,
    subtitle: "Woman",
    title: "Portrait",
  },
  {
    id: 6,
    img: projectSix,
    subtitle: "Woman",
    title: "Portrait",
  },
  {
    id: 7,
    img: projectSeven,
    subtitle: "Woman",
    title: "Portrait",
  },
];

export default function ProjectTwo() {
  return (
    <section className="tp-project-2-area tpproject">
      <div className="panels p-relative fix">
        <div className="panels-container d-flex">
          {project_data.map((item) => (
            <div key={item.id} className="panel">
              <div className="tp-project-2-item  p-relative">
                <div className="tp-project-2-thumb">
                  <Image src={item.img} alt="p-img" width={890} height={700} />
                </div>
                <div className="tp-project-2-content">
                  <span>{item.subtitle}</span>
                  <h4 className="tp-project-2-title-sm">
                    <Link href="/portfolio-details-1">{item.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

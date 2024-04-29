"use client";

import Image from "next/image";
import {
  LayoutGroup,
  motion,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const y1 = useTransform(scrollYProgress, [0.33, 0.5], ["0%", "116%"]);
  const x1 = useTransform(scrollYProgress, [0.33, 0.5], ["0%", "-24%"]);
  const scale1 = useTransform(scrollYProgress, [0.33, 0.5], [1, 0.12]);
  const x2 = useTransform(scrollYProgress, [0.55, 0.7], ["10%", "0%"]);

  const y2 = useTransform(scrollYProgress, [0.55, 0.7, 0.76,1], ["-120%%", "0%","0%","130%"]);
  const scale2 = useTransform(scrollYProgress, [0.55, 0.7,0.76,1], [0.4, 1, 1, 0.7]);

  return (
    <div
      className="flex flex-col items-center panel py-36 h-[260vh]"
      data-color="white"
      ref={ref}
    >
      <div className=" flex w-full items-center justify-between px-28 mx-6 pb-20 mb-20 border-neutral-900 border-b-2">
        <h3 className="text-5xl font-semibold">Brand Identity</h3>
        <motion.img
          src={"/logo-designing.png"}
          alt="website development"
          width={600}
          height={600}
          style={{ scale: scale1, y: y1, x: x1 }}
          className="z-10"
        />
      </div>
      <div className=" flex w-full items-center justify-between px-28 mx-6 pb-20 mb-20 border-neutral-900 border-b-2">
        <h3 className="text-5xl font-semibold">Website Design</h3>
        <motion.img
          src={"/website-designing.png"}
          alt="website designing"
          width={600}
          height={600}
          style={{}}
          className=""
        />
      </div>
      <div className=" flex w-full items-center justify-between px-28 mx-6 pb-20 border-neutral-900 border-b-2">
        <h3 className="text-5xl font-semibold">Website Design</h3>
           <motion.img
          src={"/website-development.png"}
          alt="website development"
          width={600}
          height={600}
          style={{x:x2,y:y2, scale:scale2}}
          className=""
        />
      </div>
      <div className=" flex w-full items-center justify-between px-28 mx-6 pb-20 border-neutral-900 border-b-2">
        <h3 className="text-5xl font-semibold">Digital Marketing</h3>
           <motion.img
          src={"/website-development.png"}
          alt="website development"
          width={600}
          height={600}
          style={{}}
          className=""
        />
      </div>
    </div>
  );
};

export default Services;

"use client";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import {
  LayoutGroup,
  motion,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cascadia } from "@/utils/cascadia";

const Services = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1280 });

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const y1 = useTransform(scrollYProgress, [0.33, 0.5], ["0%", "116%"]);
  const x1 = useTransform(scrollYProgress, [0.33, 0.5], ["0%", "-24%"]);
  const scale1 = useTransform(scrollYProgress, [0.33, 0.5], [1, 0.12]);
  const smally1 = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "116%"]);
  const smallx1 = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "-24%"]);
  const smallscale1 = useTransform(scrollYProgress, [0.3, 0.5], [1, 0.12]);

  const x2 = useTransform(scrollYProgress, [0.76, 1], ["10%", "13%"]);
  const y2 = useTransform(
    scrollYProgress,
    [0.5, 0.7, 0.76, 1],
    ["-120%%", "0%", "0%", "144%"]
  );
  const scale2 = useTransform(
    scrollYProgress,
    [0.5, 0.7, 0.76, 1],
    [0.4, 1, 1, 0.33]
  );
  const smallx2 = useTransform(scrollYProgress, [0.5, 0.7, 0.76, 0.9], ["10%","0%","0%", "-15%"]);
  const smally2 = useTransform(
    scrollYProgress,
    [0.5, 0.7, 0.76, 0.9],
    ["-120%%", "0%", "0%", "181%"]
  );
  const smallscale2 = useTransform(
    scrollYProgress,
    [0.5, 0.7, 0.76, 0.9],
    [0.43, 1, 1, 0.6]
  );

  return (
    <div
      className="flex flex-col items-center justify-start panel  xl:mt-44 py-44 h-[260vh]"
      data-color="white"
      ref={ref}
    >
      <h2 className={`${cascadia.className} text-neutral-900 2xl:text-7xl xl:text-6xl md:text-5xl text-4xl font-bold pb-16`}>{"<"}What we do?{" />"}</h2>
      <div className="flex flex-col xl:flex-row w-full items-center justify-between px-4 mx-2 pb-6 mb-6 xl:px-28 xl:mx-6 xl:pb-20 xl:mb-20  border-neutral-900 border-b-2">
        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold pb-2">
          <span>:/</span> Brand Identity<span>{">"}</span><span className="blinking_text">_</span>
        </h3>
        <motion.img
          src={"/logo-designing.png"}
          alt="website development"
          width={600}
          height={600}
          style={{
            scale: isSmallScreen ? smallscale1 : scale1,
            y: isSmallScreen ? smally1 : y1,
            x: isSmallScreen ? smallx1 : x1,
          }}
          className="z-10 w-[343px] xl:w-[600px]"
        />
      </div>
      <div className=" flex flex-col xl:flex-row w-full items-center justify-between px-4 mx-2 pb-6 mb-6 xl:px-28 xl:mx-6 xl:pb-20 xl:mb-20  border-neutral-900 border-b-2">
        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold pb-2 ">:/ Website Design<span>{">"}</span><span className="blinking_text">_</span></h3>
        <motion.img
          src={"/website-designing.png"}
          alt="website designing"
          width={600}
          height={600}
          style={{}}
          className="w-[343px] xl:w-[600px]"
        />
      </div>
      <div className=" flex flex-col xl:flex-row w-full items-center justify-between px-4 mx-2 pb-6 mb-6 xl:px-28 xl:mx-6 xl:pb-20 xl:mb-20 border-neutral-900 border-b-2">
        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold pb-2 whitespace-nowrap">:/ Website Development<span>{">"}</span><span className="blinking_text">_</span></h3>
        <motion.img
          src={"/website-development.png"}
          alt="website development"
          width={600}
          height={600}
          style={{
            x: isSmallScreen ? smallx2 : x2,
            y: isSmallScreen ? smally2 : y2,
            scale: isSmallScreen ? smallscale2 : scale2,
          }}
          className="w-[343px] xl:w-[600px]"
        />
      </div>
      <div className=" flex flex-col xl:flex-row w-full items-center justify-between px-4 mx-2 pb-6 mb-6 xl:px-28 xl:mx-6 xl:pb-20 xl:mb-20 border-neutral-900 border-b-2">
        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold pb-2">:/ Digital Marketing<span>{">"}</span><span className="blinking_text">_</span></h3>
        <motion.img
          src={"/digital-marketing.png"}
          alt="digital marketing"
          width={300}
          height={430}
          style={{}}
          className="my-auto w-[343px] xl:w-[343px]"
        />
      </div>
    </div>
  );
};

export default Services;

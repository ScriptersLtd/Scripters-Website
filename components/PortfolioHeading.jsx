"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const PortfolioHeading = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 639 });
  const isMediumScreen = useMediaQuery({ minWidth: 640, maxWidth: 768 });
  const isLargeScreen = useMediaQuery({ minWidth: 767, maxWidth: 1024 });
  const refPortfolioHeading = useRef();
  const { scrollYProgress } = useScroll({
    target: refPortfolioHeading,
    offset: ["0 0", "1 0"],
  });
  const scaleHeading = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [1, 10, 60, 200]
  );
  const smallScaleHeading = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [1, 40, 570, 600]
  );
  const noScale = useTransform(scrollYProgress, [0,1],[1,1]);
  const noY = useTransform(scrollYProgress,[0,1],[1,1]);
  const yHeading = useTransform(scrollYProgress, [0, 0.6], ["0%", "110rem"]);
  const smallyHeading = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["0%", "1850%", "2250%"]
  );
  const largeyHeading = useTransform(scrollYProgress, [0, 1], ["0%", "170rem"]);

  const opacity = useTransform(scrollYProgress, [1.1, 1.3], [1, 0]);

  return (
    <div
      className=" sm:h-[200rem] sm:w-[100vw] overflow-hidden relative flex flex-col  panel bg-neutral-900  sm:bg-transparent pt-12  sm:pt-44"
      ref={refPortfolioHeading}
      
    >
      <motion.h2
        className={`z-10 text-[45px] md:text-[70px] lg:text-[100px] whitespace-nowrap text-center sticky top-[4rem] xl:top-[10rem] text-neutral-100 sm:text-neutral-900 font-bold select-none pb-12 sm:pb-0`}
        style={{
          scale: isSmallScreen
            ? noScale
            : isMediumScreen
            ? smallScaleHeading
            : scaleHeading,
          y: isSmallScreen
            ? noY
            : isMediumScreen
            ? smallyHeading
            : isLargeScreen
            ? largeyHeading
            : yHeading,
          opacity: opacity,
        }}
      >
        OUR PORTFOLIO
      </motion.h2>
    </div>
  );
};

export default PortfolioHeading;

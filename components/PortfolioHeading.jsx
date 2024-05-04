"use client";
import {
  useScroll,
  motion,
  useTransform,

} from "framer-motion";
import {  useRef } from "react";
import { useMediaQuery } from "react-responsive";

const PortfolioHeading = () => {
  const isMediumScreen = useMediaQuery({ maxWidth: 768 });
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

  const yHeading = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6],
    ["0%", "900%", "1200%"]
  );
  const smallyHeading = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["0%", "1850%", "2250%"]
  );
  const largeyHeading = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ["0%", "1000%", "1400%", "2050%"]
  );

  const opacity = useTransform(scrollYProgress, [1.1, 1.3], [1, 0]);

  return (
    <div
      className="h-[350vh] w-[100vw] overflow-hidden relative flex flex-col  panel"
      ref={refPortfolioHeading}
      data-color="white"
    >
      <motion.h2
        className={`text-[40px] md:text-[70px]  lg:text-[100px] whitespace-nowrap 2xl:text-[100px] text-center sticky top-[27rem] sm:top-[] 2xl:top-[16rem] text-neutral-900 font-bold select-none `}
        style={{
          scale: isMediumScreen ? smallScaleHeading : scaleHeading,
          y: isMediumScreen
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

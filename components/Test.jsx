"use client";

import { useHeroContext } from "@/utils/contextProvider";
import { LayoutGroup, motion, useAnimation, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { cascadia } from "@/utils/cascadia";
const Test = () => {
  const { isVisible } = useHeroContext();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  
  return (
    <div
      className="w-[100vw]  relative"
      data-color="white"
      ref={ref}
    >
    
      <LayoutGroup>
        <p className="text-8xl text-pink-700">asdasdu bausdb </p>
        {isVisible && (
          <motion.img
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 4.5, ease: "anticipate" }}
            layoutId="main-image-1"
            className="absolute -top-[700px] left-[35%]"
            src={"/image-main.jpg"}
            width={600}
            height={600}
            alt="as"
          />
        )}
        {!isVisible && (
          <motion.img
            transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
            src={"/image-main.jpg"}
            layoutId="main-image-1"
            width={500}
            height={500}
            className={`absolute ${ scrollYProgress >= 0 ? "-top-[700px] left-[35%]" : "" }`}
          />
        )}
      </LayoutGroup>
    </div>
  );
};

export default Test;

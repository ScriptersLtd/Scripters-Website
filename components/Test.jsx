"use client";
import {
  LayoutGroup,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {  useRef, useState } from "react";
import { cascadia } from "@/utils/cascadia";
import { useMediaQuery } from "react-responsive";

const Test = () => {
  const isXLargeScreen = useMediaQuery({ minWidth: 1280 });
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const position1 = useTransform(scrollYProgress, [0.1,0.2,0.2, 0.4,0.5], ["40px", "20px", "20px", "0px","-20px"]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.3,0.4,0.5,0.6], [0, 0,1,1,0]);
  const position2 = useTransform(scrollYProgress, [0.6,0.85,.85, 0.9,1], ["40px", "20px", "20px", "0px","-20px"]);
  const opacity2 = useTransform(scrollYProgress, [0,0.6,0.7,0.9,1], [0, 0,1,1,0]);

  return (
    <div
      className="w-[100vw] panel h-[500vh] relative -mt-80"
      data-color="black"
      ref={ref}
    >
      <LayoutGroup>
        {!isLoaded && (
          <motion.img
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 4.5, ease: "anticipate" }}
            onAnimationComplete={ () => setIsLoaded(true)}
            layoutId="main-image-1"
            className="absolute -top-[700px] left-[35%] object-cover"
            src={"/image-main.jpg"}
            width={600}
            height={600}
            alt="as"
          />
        )}
        {isLoaded && (
          <div className="absolute top-0 left-0 w-[100vw] h-[500vh]">
            <motion.img
              transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6, }}
              src={"/image-main.jpg"}
              layoutId="main-image-1"
              width={600}
              height={400}
              className={`sticky left-24 top-0 w-full h-[300px] lg:h-[500px] object-cover`}
            />
            </div>
        )}
      </LayoutGroup>
      <motion.h2 className={`${cascadia.className}  mx-auto  text-2xl md:text-4xl lg:text-5xl xl:text-6xl  w-[85%] lg:w-[60%] xl:w-[40%] sticky top-[550px] text-rose-400 whitespace-nowrap max-w-[100vw] overflow-hidden`}
      style={{opacity:opacity1, x:position1}}
      ><span>{"<"}</span>Scripters’ Legacy<span>{" />"}</span></motion.h2>
      <motion.p
        className="z-50 mx-auto  xl:text-lg 2xl:text-xl text-neutral-100 w-[85%] lg:w-[60%] xl:w-[40%]  sticky top-[610px]  md:top-[650px] leading-6"
        style={{ opacity: opacity1, y: position1 }}
      >
        With our signature blend of creativity, expertise, and a whole lot of groovy flair, we`&apos;`ve been setting the digital world on fire for years! Our stellar track record of 1000+ successful projects speaks volumes, reflecting the satisfaction of countless clients who have witnessed the impact of our services firsthand. Join us, and let`&apos;`s continue making waves together!
      </motion.p>
      <motion.h2 className={`${cascadia.className} z-50 mx-auto text-2xl md:text-4xl lg:text-5xl xl:text-6xl w-[85%] lg:w-[60%] xl:w-[40%]  sticky top-[550px] text-lime-400  whitespace-nowrap`}
      style={{opacity:opacity2, x:position2}}
      ><span>{"<"}</span>Scripters’ Approach<span>{" />"}</span></motion.h2>
      <motion.p
        className="mx-auto  xl:text-lg 2xl:text-xl z-50 text-neutral-100 w-[85%] lg:w-[60%] xl:w-[40%]  sticky top-[610px]  md:top-[650px] leading-6"
        style={{ opacity: opacity2, y: position2 }}
      >
       At Scripters, we`&apos;`re not just creating digital solutions; we`&apos;`re building lasting relationships based on trust, transparency, and a shared vision for success. Therefore, our approach is deep-seated in collaboration and innovation. We believe that by combining fresh ideas with diverse perspectives and exploring new possibilities, we can achieve truly remarkable results. 
      </motion.p>
    </div>
  );
};

export default Test;

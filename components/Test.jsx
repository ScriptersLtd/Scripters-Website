"use client";
import {
  LayoutGroup,
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cascadia } from "@/utils/cascadia";
import { useMediaQuery } from "react-responsive";

const Test = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const position1 = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.2, 0.3, 0.5],
    ["40px", "20px", "20px", "0px", "-20px"]
  );
  const opacity1 = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3, 0.3, 0.5],
    [0, 0, 1, 1, 0]
  );
  const position2 = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.8, 0.9],
    ["40px", "20px", "0px", "-20px"]
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.8, 0.9],
    [0, 1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.9, 1],
    [0, 0, 1, 1, 0]
  );
  const [randomString, setRandomString] = useState("");
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  useEffect(() => {
    let str = generateRandomString(15000);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    const str = generateRandomString(15000);
    setRandomString(str);
  }

  return (
    <div
      className="w-[100vw] panel h-[70rem] sm:h-[270rem] relative "
      data-color="black"
      ref={ref}
    >
      <LayoutGroup>
        {!isLoaded && (
          <motion.img
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 4.5, ease: "anticipate" }}
            onAnimationComplete={() => setIsLoaded(true)}
            layoutId="main-image-1"
            className="absolute -top-[670px] sm:-top-[400px] left-[35%] object-cover"
            src={"/image-main.jpg"}
            width={600}
            height={600}
            alt="as"
          />
        )}
        {isLoaded && (
          <div
            className="group/card bg-transparent relative sm:sticky sm:top-[0%] sm:left-0 w-[100vw] sm:h-[100vh]"
            onMouseMove={onMouseMove}
          >
            <CardPattern
              mouseX={mouseX}
              mouseY={mouseY}
              randomString={randomString}
              textOpacity={textOpacity}
            />
            <motion.img
              transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
              src={"/image-main.jpg"}
              layoutId="main-image-1"
              width={600}
              height={400}
              className={`sm:absolute inset-0 top-0 w-full h-[35vh] sm:h-[50vh] min-h-[40vh] max-w-5xl mx-auto`}
            />
          </div>
        )}
      </LayoutGroup>
      <motion.h2
        className={`${cascadia.className} -z-10 bg-transparent absolute top-[400px] text-center pb-2 mx-auto  text-2xl md:text-4xl lg:text-5xl xl:text-6xl  sm:sticky sm:top-[51vh] text-rose-400 whitespace-nowrap max-w-[100vw] inset-x-0`}
        style={{
          opacity: isSmallScreen ? opacity : opacity1,
          y: isSmallScreen ? y : position1,
        }}
      >
        Scripters’ Legacy
      </motion.h2>
      <motion.p
        className="-z-10  absolute top-[440px] text-center text-sm mx-auto  xl:text-lg 2xl:text-xl text-neutral-100 w-[85%] lg:w-[60%] xl:w-[40%]  sm:sticky sm:top-[60vh] leading-6 inset-x-0"
        style={{
          opacity: isSmallScreen ? opacity : opacity1,
          y: isSmallScreen ? y : position1,
        }}
      >
        With our signature blend of creativity, expertise, and a whole lot of
        groovy flair, we&apos;ve been setting the digital world on fire for
        years! Our stellar track record of 1000+ successful projects speaks
        volumes, reflecting the satisfaction of countless clients who have
        witnessed the impact of our services firsthand. Join us, and let&apos;s
        continue making waves together!
      </motion.p>
      <motion.h2
        className={`${cascadia.className} -z-10  absolute  top-[780px] text-center  mx-auto text-2xl md:text-4xl lg:text-5xl xl:text-6xl w-[75%] lg:w-[60%] xl:w-[40%]  sm:sticky sm:top-[51vh] text-lime-400  whitespace-nowrap inset-x-0`}
        style={{
          opacity: isSmallScreen ? opacity : opacity2,
          y: isSmallScreen ? y : position2,
        }}
      >
        Scripters’ Approach
      </motion.h2>
      <motion.p
        className=" -z-10  mx-auto text-sm xl:text-lg 2xl:text-xl absolute  top-[820px] text-center   text-neutral-100 w-[85%] lg:w-[60%] xl:w-[40%]  sm:sticky sm:top-[60vh] leading-6 inset-x-0"
        style={{
          opacity: isSmallScreen ? opacity : opacity2,
          y: isSmallScreen ? y : position2,
        }}
      >
        At Scripters, we&apos;re not just creating digital solutions; we&apos;re
        building lasting relationships based on trust, transparency, and a
        shared vision for success. Therefore, our approach is deep-seated in
        collaboration and innovation. We believe that by combining fresh ideas
        with diverse perspectives and exploring new possibilities, we can
        achieve truly remarkable results.
      </motion.p>
    </div>
  );
};


export function CardPattern({ mouseX, mouseY, randomString }) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className=" pointer-events-none sticky top-0 sm:h-[100vh] ">
      <div className="absolute inset-0   [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0  bg-gradient-to-r from-green-500 to-sky-700 opacity-0  group-hover/card:opacity-40 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0  opacity-0 mix-blend-overlay  group-hover/card:opacity-40"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters = ":/Scripters>_";
export const generateRandomString = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export default Test;

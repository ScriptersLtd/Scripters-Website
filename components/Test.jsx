"use client";
import { useHeroContext } from "@/utils/contextProvider";
import {
  LayoutGroup,
  motion,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cascadia } from "@/utils/cascadia";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const Test = () => {
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
  const x = useTransform(scrollYProgress, [0.75, 0.8], [25, 75]);

  return (
    <div
      className="w-full panel h-[500vh] relative px-12"
      data-color="white"
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
            className="absolute -top-[700px] left-[35%]"
            src={"/image-main.jpg"}
            width={600}
            height={600}
            alt="as"
          />
        )}
        {isLoaded && (
          <div className="absolute top-[10vh] h-[500vh]">
            <motion.img
              transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
              src={"/image-main.jpg"}
              layoutId="main-image-1"
              width={900}
              height={900}
              style={{x}}
              className={`sticky left-24  top-[15vh]`}
            />
            </div>
        )}
      </LayoutGroup>
      <motion.h2 className={`${cascadia.className} text-6xl text-neutral-600  w-full max-w-3xl ml-auto sticky top-[300px]`}
      style={{opacity:opacity1, x:position1}}
      >Cascadia 1</motion.h2>
      <motion.p
        className="text-xl text-neutral-900  w-full max-w-3xl ml-auto sticky top-96"
        style={{ opacity: opacity1, y: position1 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        dolor dolores nihil earum quia voluptatibus dicta voluptatem, similique
        consequatur quaerat, mollitia, ducimus reprehenderit ipsa. Esse
        recusandae dignissimos repellendus consequuntur commodi?{" "}
      </motion.p>
      <motion.h2 className={`${cascadia.className} text-6xl text-neutral-600  w-full max-w-3xl ml-auto sticky top-[350px]`}
      style={{opacity:opacity2, x:position2}}
      >Cascadia 2</motion.h2>
      <motion.p
        className="text-xl text-neutral-900  w-full max-w-3xl ml-auto sticky top-[434px]"
        style={{ opacity: opacity2, y: position2 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        dolor dolores nihil earum quia voluptatibus dicta voluptatem, similique
        consequatur quaerat, mollitia, ducimus reprehenderit ipsa. Esse
        recusandae dignissimos repellendus consequuntur commodi?{" "}
      </motion.p>
    </div>
  );
};

export default Test;

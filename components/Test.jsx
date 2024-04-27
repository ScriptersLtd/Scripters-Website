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

const Test = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const position = useTransform(scrollYProgress, [0.1, 0.2, 0.4,0.5], ["40px", "20px", "20px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.4,0.5], ["0", "1","1", "0"]);
  const positionImage = useTransform(scrollYProgress, [0.2,0.5], ["fixed","absolute"])
  const scale = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  return (
    <div
      className="w-full panel h-[500vh] relative"
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
            <motion.img
              transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
              src={"/image-main.jpg"}
              layoutId="main-image-1"
              width={900}
              height={900}
            
              className={`left-24 sticky top-[10vh]`}
            />
        )}
      </LayoutGroup>
      <motion.p
        className="text-3xl text-neutral-900  w-full max-w-3xl ml-auto sticky top-20"
        style={{ opacity: opacity, y: position }}
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

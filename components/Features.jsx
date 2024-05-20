import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const Features = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.9, 1], [0.8, 0.8, 1]);
  const x = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 0.85, 0.9],
    [1, 1, 0.4, 0.4, 1]
  );

  const text1Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    [0, 1, 0]
  );
  const text1Y = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    ["30px", "0px", "-30px"]
  );

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    [0, 1, 0]
  );
  const text2Y = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    ["30px", "0px", "-30px"]
  );

  const text3Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    [0, 1, 0]
  );
  const text3Y = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    ["30px", "0px", "-30px"]
  );

  return (
    <section
      ref={targetRef}
      className="flex  px-3 h-[500vh] flex-col items-center justify-start panel "
      data-color="black"
    >
      <div className="sticky top-[16.7vh] h-[66.8vh] text-xl leading-[1.5] text-white 2xl:[&_p]:w-[35rem]   [&_p]:max-w-[90%] overflow-hidden">
        <motion.div style={{ x, scale }} className="relative h-full ">
          <motion.figure style={{ opacity }} className="h-full">
            <Image height={900} width={900} alt="Scripters Assets" src="/main-screen.svg" className="h-full w-auto" />
          </motion.figure>
          <motion.figure style={{ opacity: text2Opacity }}>
            <Image  height={100} width={100} alt="Scripters Assets"
              src="/command-palette.svg"
              className="absolute inset-0 h-full w-auto"
            />
          </motion.figure>
          <motion.figure style={{ opacity: text3Opacity }}>
            <Image  height={100} width={100} alt="Scripters Assets"
              src="/devtools.svg"
              className="absolute inset-0 h-full w-auto"
            />
          </motion.figure>
        </motion.div>
        <motion.p
          style={{
            opacity: text1Opacity,
            y: text1Y,
          }}
          className="translate-y-centered-offset absolute top-1/2 left-0"
        >
          <span className="text-purple-400">Lightning-Fast Speed</span>
          <br />
          Our websites are meticulously optimized for speed, ensuring swift loading times and seamless user experiences. Say goodbye to frustrating delays and hello to instant gratification for your visitors.
        </motion.p>
        <motion.p
          style={{
            opacity: text2Opacity,
            y: text2Y,
          }}
          className="translate-y-centered-offset absolute top-1/2 left-0"
        >
          <span className="text-rose-500">Efficiency Redefined</span>
          <br />
          Behind the sleek design lies a robust framework engineered for efficiency. Our websites are crafted with clean code and smart architecture, maximizing performance while minimizing resource consumption.
        </motion.p>
        <motion.p
          style={{
            opacity: text3Opacity,
        y: text3Y,
          }}
          className="translate-y-centered-offset absolute top-1/2 left-0"
        >
          <span className="text-lime-500">Aesthetic Excellence</span>
          <br />
          Beauty meets functionality in every pixel of our designs. From captivating visuals to intuitive layouts, we prioritize aesthetics without compromising usability. 
        </motion.p>
      </div>
    </section>
  );
};
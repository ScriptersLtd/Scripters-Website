"use client";
import {
  useAnimate,
  stagger,
  motion,
  AnimatePresence,
  LayoutGroup,
  delay,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const staggerTaglineItems = stagger(0.2, { startDelay: 2 });
function useTaglineAnimation(isVisible) {
  const [marquee, setPlayMarquee] = useState();
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "span",
      { opacity: 1, y: 0 },
      {
        duration: 0.15,
        delay: stagger(0.1, { startDelay: 4 }),
      }
    );
  }, [isVisible]);

  return scope;
}
const title = "WE THE SAGACIOUS";
const spacedTitle = title.replace(/\s/g, "\u00A0");

const TagLine = ({ spacedTitle, playMarquee, isVisible }) => {
  const scope = useTaglineAnimation(isVisible);
  return (
    <div className="marquee">
    <motion.p ref={scope} className={`z-50 text-neutral-100 text-[130px]`}>
      {[...spacedTitle].map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 80 }}
            className="inline-block"
          >
            {letter}
          </motion.span>
      ))}
    </motion.p>
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);

  const name = [
    { name: "S", delay: 3.8 },
    { name: "C", delay: 3.2 },
    { name: "R", delay: 3.5 },
    { name: "I", delay: 3.1 },
    { name: "P", delay: 2.8 },
    { name: "T", delay: 3.2 },
    { name: "E", delay: 3.9 },
    { name: "R", delay: 3.3 },
    { name: "S", delay: 3.8 },
  ];

  const [playMarquee, setPlayMarquee] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  return (
    <div className="relative h-[100vh] bg-neutral-900">
      {!isVisible && (
        <>
          {name.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 100 }}
              transition={{ duration: 0.2, delay: letter.delay }}
              className="text-[150px] text-neutral-100"
            >
              {letter.name}
            </motion.span>
          ))}
          <TagLine
            spacedTitle={spacedTitle}
            playMarquee={playMarquee}
            isVisible={isVisible}
          />
        </>
      )}
      <LayoutGroup>
        <AnimatePresence>
          {isVisible && (
            <div className="h-[90vh]">
              <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 0.8, y: 10 }}
                transition={{ duration: 3, ease: "anticipate", delay: 0.2 }}
                exit={{ opacity: 0, y: -500 }}
                onAnimationComplete={() => setIsVisible(false)}
                className="absolute top-44 right-16 overflow-hidden"
              >
                <Image src={"/image-4.jpg"} width={400} height={600} alt="as" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ duration: 3, ease: "anticipate", delay: 0.8 }}
                exit={{ opacity: 0, y: -500 }}
                onAnimationComplete={() => setIsVisible(false)}
                className="absolute top-80 left-16 overflow-hidden"
              >
                <Image src={"/image-1.jpg"} width={400} height={400} alt="as" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ duration: 3, ease: "anticipate", delay: 0.4 }}
                exit={{ opacity: 0, y: -500 }}
                onAnimationComplete={() => setIsVisible(false)}
                className="absolute top-12 left-36 overflow-hidden"
              >
                <Image src={"/image-3.jpg"} width={400} height={400} alt="as" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ duration: 3, ease: "anticipate", delay: 0.6 }}
                exit={{ opacity: 0, y: -500 }}
                onAnimationComplete={() => setIsVisible(false)}
                className="absolute top-96 right-[15%] overflow-hidden"
              >
                <Image src={"/image-3.jpg"} width={400} height={400} alt="as" />
              </motion.div>
              <motion.div>
                <motion.img
                  initial={{ opacity: 0, y: 500 }}
                  animate={{ opacity: 1, y: 10 }}
                  transition={{ duration: 4.5, ease: "anticipate" }}
                  layoutId="main-image-1"
                  onAnimationComplete={() => setIsVisible(false)}
                  className="absolute top-44 left-[35%] "
                  src={"/image-main.jpg"}
                  width={600}
                  height={600}
                  alt="as"
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        {!isVisible && (
          <motion.img
            transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
            src={"/image-main.jpg"}
            layoutId="main-image-1"
            width={500}
            height={500}
            className="absolute -bottom-[750px] left-[20%] w-[60vw] h-auto "
          />
        )}
      </LayoutGroup>
    </div>
  );
};

export default Hero;

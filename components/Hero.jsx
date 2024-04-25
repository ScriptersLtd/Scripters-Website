"use client";
import { cascadia } from "@/utils/cascadia";
import {
  useAnimate,
  stagger,
  motion,
  AnimatePresence,
  LayoutGroup,
} from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useHeroContext } from "@/utils/contextProvider";
import Socials from "./Socials";

const title = "We The Sagacious";
const spacedTitle = title.replace(/\s/g, "\u00A0");


function useTaglineAnimation(isVisible, delay) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "span",
      { opacity: 1, y: 0 },
      {
        duration: 0.15,
        delay: stagger(0.05, { startDelay: delay }),
      }
    );
  }, [isVisible]);

  return scope;
}

const TagLine = ({ spacedTitle, isVisible, delay }) => {
  const scope = useTaglineAnimation(isVisible, delay);
  return (
    <div className="marquee mt-44">
      <motion.p
        ref={scope}
        className={`p1 text-neutral-100 text-[170px] whitespace-nowrap`}
      >
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
      <p className="p2 text-neutral-100 text-[170px] whitespace-nowrap">
        We The Sagacious
      </p>
    </div>
  );
};

const Hero = () => {

  const {  isVisible,  setIsVisible } = useHeroContext();
  return (
    <div className="panel relative min-h-[100vh] " data-color="black">
      <div className="flex justify-between pt-44 px-32">
          <Socials />
          <motion.p
            className="text-neutral-100 max-w-lg ml-auto my-auto"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay:3}}
          >
            sidfuh uasidfb iysabdf oibsadf bsaif bsiavn ioefb isnadpisbaei
            nsapdvn psaoen sanef pipisaefu nsaiebnc isaoe pisanef psane isnaf
          </motion.p>
        </div>

          <TagLine
            spacedTitle={spacedTitle}
            isVisible={isVisible}
            delay={5}
          />
      <LayoutGroup>
        <AnimatePresence>
          {isVisible && (
            <div className="">
              <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 0.8, y: 10 }}
                transition={{ duration: 3, ease: "anticipate", delay: 0.2 }}
                exit={{ opacity: 0, y: -500 }}
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
            
            </div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
};

export default Hero;

"use client";
import {
  useAnimate,
  stagger,
  motion,
} from "framer-motion";
import { useEffect } from "react";
import { useHeroContext } from "@/utils/contextProvider";
import { Oswald } from "next/font/google";


const title = "We The Sagacious";
const spacedTitle = title.replace(/\s/g, "\u00A0");

const Lexendfont = Oswald({ weight: ["400","700"], subsets: ["latin"] });


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
    <div className="marquee mt-28 lg:mt-44 relative z-10 uppercase">
      <motion.p
        ref={scope}
        className={`p1 ${Lexendfont.className} text-neutral-100 text-[70px] lg:text-[80px] xl:text-[150px] 2xl:text-[200px] font-bold whitespace-nowrap`}
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
      <p className={`p2 ${Lexendfont.className}  text-neutral-100 text-[70px] lg:text-[80px] xl:text-[150px] 2xl:text-[200px] font-bold whitespace-nowrap`}>
        We The Sagacious
      </p>
    </div>
  );
};

const Hero = () => {
  const { isVisible } = useHeroContext();
  return (
    <div
      className="panel relative h-[80vh] sm:h-[100vh] w-[100vw] overflow-hidden bg-black"
      data-color="black"
    >
      <div className="flex flex-col justify-between pt-20 px-4">
          <motion.p
          className="text-neutral-100 text-xl max-w-lg mt-10 ml-auto my-auto z-10"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 4 }}
        >
          Boost your digital presence with captivating logos, dynamic websites,
          expert SEO, and engaging content. Scripters brings your vision to
          life!
        </motion.p>
      </div>

      <TagLine spacedTitle={spacedTitle} isVisible={isVisible} delay={4.5} />
     
    </div>
  );
};

export default Hero;

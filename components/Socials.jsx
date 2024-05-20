"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { cascadia } from "@/utils/cascadia";

const codeTitle = "1|print(scripters_socials)";

function useCodeAnimation(isBoxVisible) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isBoxVisible) {
      animate(
        "span",
        { opacity: 1 },
        {
          duration: 0,
          delay: stagger(0.08),
        }
      );
    }
  }, [isBoxVisible, animate]);

  return scope;
}

function useSocialIconsAnimation(isCodeComplete) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isCodeComplete) {
      animate(
        "div",
        { opacity: 1, y: 0 },
        {
          duration: 0.1,
          delay: stagger(0.08),
        }
      );
    }
  }, [isCodeComplete, animate]);

  return scope;
}

const Socials = () => {
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const [isCodeComplete, setIsCodeComplete] = useState(false);
  const codeScope = useCodeAnimation(isBoxVisible);
  const iconScope = useSocialIconsAnimation(isCodeComplete);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setTimeout(() => setIsCodeComplete(true), 2000);
    }
  }, [inView]);

  return (
    <>
      <motion.div
        ref={ref}
        className="w-[350px] h-36 bg-neutral-800 rounded-sm py-3 relative mb-24"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        onAnimationComplete={() => inView && setIsBoxVisible(true)}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
      >
        <div className="flex gap-x-2 px-3">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-600" />
          <div className="w-3 h-3 rounded-full bg-green-600" />
        </div>
        {isBoxVisible && (
          <motion.p ref={codeScope} className={`${cascadia.className} text-neutral-400 pt-4 pb-3 px-3 w-fit `}>
            {[...codeTitle].map((letter, index) => (
              <motion.span className="" key={index} initial={{ opacity: 0 }}>
                {letter}
              </motion.span>
            ))}
          </motion.p>
        )}
        <motion.div
          className="h-[1px] w-full bg-cyan-500  "
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.9, ease: "easeInOut" }}
        />
        {isCodeComplete && (
          <motion.div ref={iconScope} className="flex px-3 pt-3 gap-x-2">
            <motion.div
              className="rounded-full w-8 h-8"
              initial={{ opacity: 0, y: -10 }}
            >
              <Image
                src={"/facebook.png"}
                alt="Scripters facebook"
                height={100}
                width={100}
                className="object-contain"
                priority
              />
            </motion.div>
            <motion.div
              className="rounded-full w-8 h-8"
              initial={{ opacity: 0, y: -10 }}
            >
              <Image
                src={"/insta.png"}
                alt="Scripters Instagram"
                height={100}
                width={100}
                className="object-contain"
                priority
              />
            </motion.div>
            <motion.div
              className="rounded-full w-8 h-8"
              initial={{ opacity: 0, y: -10 }}
            >
              <Image
                src={"/linkedin.png"}
                alt="Scripters Linkedin"
                height={100}
                width={100}
                className="object-contain"
                priority
              />
            </motion.div>
            <motion.div
              className="rounded-full w-8 h-8"
              initial={{ opacity: 0, y: -10 }}
            >
              <Image
                src={"/twitter.png"}
                alt="Scripters twitter"
                height={100}
                width={100}
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default Socials;

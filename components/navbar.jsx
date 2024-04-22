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

const staggerMenuItems = stagger(0.3, { startDelay: 0.15 });


function useTaglineAnimation(isVisible) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      
      "span",
      !isVisible ? { opacity: 0 } : { opacity:0},
      {
        duration: 0.2,
        delay: isVisible ? staggerMenuItems : 1,
      }
    );
  }, [isVisible]);

  return scope;
}

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return <><TagLine  isVisible={isVisible} ></TagLine></>;
};

const TagLine = ({ isVisible }) => {
  const scope = useTaglineAnimation(isVisible);
  return (
    <>
      <motion.p ref={scope} className="">
          <motion.span>A</motion.span>
          <motion.span>A</motion.span>
          <motion.span>A</motion.span>
          <motion.span>A</motion.span>
          <motion.span>A</motion.span>
          <motion.span>A</motion.span>
          <motion.span>A</motion.span>
          <motion.span>A</motion.span>
      </motion.p>
    </>
  );
};

export default Navbar;

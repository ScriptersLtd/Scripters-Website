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

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

const useTaglineAnimation = (isOpen) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "li",
      isOpen
        ? { opacity: 1, }
        : { opacity: 0,},
      {
        duration: 2.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);
  return scope;
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <TagLine isOpen={isOpen} />
    </>
  );
};

const TagLine = ({ isOpen }) => {
  const scope = useTaglineAnimation(isOpen)
  return (
    <>
      <nav>
        <ul
           ref={scope}
          className="text-black"
        >
          <motion.li initial={{opacity:0}}>Item 1 </motion.li>
          <motion.li initial={{opacity:0}}>Item 3 </motion.li>
          <motion.li initial={{opacity:0}}>Item 2 </motion.li>
          <motion.li initial={{opacity:0}}>Item 4 </motion.li>
          <motion.li initial={{opacity:0}}>Item 5 </motion.li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
"use client";
import { cascadia } from "@/utils/cascadia";
import { motion, LayoutGroup } from "framer-motion";
import { useHeroContext } from "@/utils/contextProvider";
import MenuButton from "./MenuButton";
const Navbar = () => {
  const { isLogoVisible, isVisible, isOpen, setOpen } = useHeroContext();

  const name = [
    { name: ":", delay: 3.6 },
    { name: "/", delay: 3.4 },
    { name: "S", delay: 3.8 },
    { name: "c", delay: 3.2 },
    { name: "r", delay: 3.5 },
    { name: "i", delay: 3.1 },
    { name: "p", delay: 2.8 },
    { name: "t", delay: 3.2 },
    { name: "e", delay: 3.9 },
    { name: "r", delay: 3.3 },
    { name: "s", delay: 3.8 },
    { name: ">", delay: 3.7 },
  ];

  return (
    <div className="flex justify-end items-center bg-neutral-900 p-10">
      {!isVisible && (
        <>
          <LayoutGroup>
            {!isLogoVisible && (
              <motion.div
                className="absolute top-44 left-0 z-20"
                transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] }}
                layoutId="logo-text"
              >
                {name.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 100 }}
                    transition={{ duration: 0.2, delay: letter.delay }}
                    className={`text-[150px] text-neutral-100 ${cascadia.className}`}
                  >
                    {letter.name}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: 100 }}
                  transition={{ duration: 0.2, delay: 3.9 }}
                  className={`text-[150px] text-neutral-100 ${cascadia.className}`}
                >
                  _
                </motion.span>
              </motion.div>
            )}
            {isLogoVisible && (
              <motion.div
                className="absolute top-7 left-7 z-20"
                transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] }}
                layoutId="logo-text"
              >
                {name.map((letter, index) => (
                  <motion.span
                    key={index}
                    className={`text-[50px] text-neutral-100 ${cascadia.className}`}
                  >
                    {letter.name}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: 100 }}
                  transition={{ duration: 0.2, delay: 3.9 }}
                  className={`text-[50px] text-neutral-100 blinking_text ${cascadia.className}`}
                >
                  _
                </motion.span>
              </motion.div>
            )}
          </LayoutGroup>
        </>
      )}
      <div className="flex justify-center items-center bg-neutral-100 rounded-full h-14 w-14 z-50 fixed"
      onClick={() => setOpen(!isOpen)}>
        <MenuButton isOpen={isOpen}  />
      </div>



      {/* <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.ul
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 7 }}
          className="flex gap-x-28 text-neutral-100 text-xl"
        >
          <motion.li className="listt">Home</motion.li>
          <motion.li className="listt">Services</motion.li>
          <motion.li className="listt">About</motion.li>
          <motion.li className="listt">Careers</motion.li>
          <motion.li className="listt">Contact</motion.li>
        </motion.ul>
      </motion.div> */}
    </div>
  );
};

export default Navbar;

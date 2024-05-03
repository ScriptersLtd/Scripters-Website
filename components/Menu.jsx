"use client";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useHeroContext } from "@/utils/contextProvider";
import { cascadia } from "@/utils/cascadia";


const transition = { duration: 1.5, yoyo: Infinity,  easeInOut };

const Menu = () => {
  const { isOpen } = useHeroContext();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 0.98 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bg-neutral-900 z-50 w-[100vw] flex justify-center auto items-center opacity-50"
          >
            <div className="flex flex-col lg:flex-row gap-y-5 justify-center items-start  gap-x-44">
              <motion.div
                className={`z-50  bg-neutral-900 text-neutral-100 ${cascadia.className} flex flex-col justify-center items-center`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p className=" text-neutral-100 text-[30px] sm:text-[50px] lg:text-[70px] ">
                  <span>{":/Scripters>"}</span>
                  <span className="blinking_text">_</span>
                </p>
                <p className="py-3 text-lg text-center ">Connect With Us</p>

                <div className="flex gap-x-3 justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 71.9 67.8"
                    width="50px"
                    height="50px"
                  >
                    <motion.path
                      d="M47.2,60H21.3A12.5,12.5,0,0,1,8.7,47.5V22.3A12.5,12.5,0,0,1,21.3,9.8H47.2A12.5,12.5,0,0,1,59.7,22.3V47.5A12.5,12.5,0,0,1,47.2,60Z"
                      stroke="#ffffff"
                      strokeWidth={3}
                      fill={"transparent"}
                      className={"transition-all"}
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      whileHover={{pathLength: 0}}
                      transition={transition}
                    />
                    <motion.path
                      d="M38.3,26.4a2,2,0,0,1,1.4-.6h5V18.3H37.8a10.9,10.9,0,0,0-5.6,1.1,7,7,0,0,0-2.8,2.5,5.6,5.6,0,0,0-1,2.7,14.9,14.9,0,0,0-.1,1.7v5.8H23.7v7.1h4.6V58.9A23.5,23.5,0,0,0,35.4,60h2.2V39.2h6.3l.3-2.2.3-2.2c.1-.9.1-1.8.2-2.7H37.6V27.4A1.5,1.5,0,0,1,38.3,26.4Z"
                      stroke="#ffffff"
                      strokeWidth={3}
                      fill={"transparent"}
                      className={"transition-all"}
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={transition}
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
              height={50}
              width={50}
                    viewBox="0 0 71.87 67.76"
                    fill="transparent"
                 
                    // style="enable-background:new 0 0 69.88 68.82;"
                  >
                    <motion.path
                      d="M48.32,60.05H22.41A12.53,12.53,0,0,1,9.88,47.52V22.28A12.53,12.53,0,0,1,22.41,9.75H48.32A12.53,12.53,0,0,1,60.85,22.28V47.52A12.53,12.53,0,0,1,48.32,60.05ZM23.88,34.74A11.65,11.65,0,1,0,35.53,23.08,11.65,11.65,0,0,0,23.88,34.74ZM49,19.63a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5.51.51,0,0,0-.5-.5A.5.5,0,0,0,49,19.63Z"
                      stroke="#ffffff"
                      strokeWidth={3}
                      fill={"#transparent"}
                      className={"transition-all"}
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={transition}
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 71.9 67.8"
                    width="50px"
                    height="50px"
                  >
                    <motion.path
                      d="M51.4,60H25.5A12.5,12.5,0,0,1,12.9,47.5V22.3A12.5,12.5,0,0,1,25.5,9.8H51.4A12.5,12.5,0,0,1,63.9,22.3V47.5A12.5,12.5,0,0,1,51.4,60"
                      stroke="#ffffff"
                      strokeWidth={2.5}
                      fill={"transparent"}
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      whileHover={{pathLength:0 }}
                      transition={transition}
                    />
                    <motion.path
                      d="M40.4,32.4h0Z"
                      stroke="#ffffff"
                      strokeWidth={2}
                      fill={"transparent"}
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={transition}
                    />
                    <motion.path
                      d="M29.9,22.8a3.8,3.8,0,0,1-4,3.7h-.1a3.7,3.7,0,1,1,.1-7.4A3.8,3.8,0,0,1,29.9,22.8Z"
                      stroke="#ffffff"
                      strokeWidth={2}
                      fill={"transparent"}
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={transition}
                    />
                    <motion.path
                      d="M54.9,38.4V50.7H47.8V39.3c0-2.9-1-4.8-3.5-4.8A3.9,3.9,0,0,0,40.6,37a5,5,0,0,0-.2,1.8V50.7H33.3s.1-19.3,0-21.3h7.1v3h0a6.9,6.9,0,0,1,6.4-3.5C51.4,28.9,54.9,31.9,54.9,38.4Z"
                      stroke="#ffffff"
                      strokeWidth={2}
                      fill={"transparent"}
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={transition}
                    />
                    <motion.path
                      d="M22.3,29.4V50.7h7.1V29.4Z"
                      stroke="#ffffff"
                      strokeWidth={2}
                      fill={"transparent"}
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={transition}
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    height={50}
                    width={50}
                   fill="transparent"
                    viewBox="0 0 71.9 67.8"
                  >
                    <motion.path
                      d="M47.6,60H21.7A12.5,12.5,0,0,1,9.2,47.5V22.3A12.5,12.5,0,0,1,21.7,9.8H47.6A12.5,12.5,0,0,1,60.1,22.3V47.5A12.5,12.5,0,0,1,47.6,60Z"
                      stroke="#ffffff"
                      strokeWidth={2}
                     
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={transition}
                    />
                    <motion.path
                      d="M21.5,20.6h5L49.9,50H44.8Z"
                      stroke="#ffffff"
                      strokeWidth={2}
                     
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={transition}
                    />
                    <motion.path
                      d="M33.5,35l1.1,1.7L22.9,50.3H20.4Z"
                      stroke="#ffffff"
                      strokeWidth={2}
                     
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={transition}
                    />
                    <motion.path
                      d="M49.4,19.6,36.9,34.1l-1.2-1.7,11-12.8Z"
                      stroke="#ffffff"
                      strokeWidth={2}
                     
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={transition}
                    />
                  </svg>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.ul
                  initial={{ opacity: 0, filter: "blur(5px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1 }}
                  className="flex flex-col gap-y-5 text-neutral-100 text-2xl"
                >
                  <motion.li className="listt">Home</motion.li>
                  <motion.li className="listt">Services</motion.li>
                  <motion.li className="listt">About</motion.li>
                  <motion.li className="listt">Careers</motion.li>
                  <motion.li className="listt">Contact</motion.li>
                </motion.ul>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Menu;

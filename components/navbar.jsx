
"use client";
import { cascadia } from "@/utils/cascadia";
import {
  motion,
  LayoutGroup,
} from "framer-motion";
import { useHeroContext } from "@/utils/contextProvider";

const Navbar = () => {
  const { isLogoVisible, isVisible, setIsLogoVisible, setIsVisible } = useHeroContext();

    const name = [
        { name: ":", delay: 3.6 },
        { name: "/", delay: 3.4 },
        { name: "S", delay: 3.8 },
        { name: "C", delay: 3.2 },
        { name: "R", delay: 3.5 },
        { name: "I", delay: 3.1 },
        { name: "P", delay: 2.8 },
        { name: "T", delay: 3.2 },
        { name: "E", delay: 3.9 },
        { name: "R", delay: 3.3 },
        { name: "S", delay: 3.8 },
        { name: ">", delay: 3.7 },
       
      ];
      
return(
  <div className=" bg-neutral-500">
    {!isVisible && (
        <>
          <LayoutGroup>
            {!isLogoVisible && (
              <motion.div
                className="absolute top-44 left-0 z-50"
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
                className="absolute top-7 left-7 z-50"
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
        </div>
)
};


export default Navbar;
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

const staggerTaglineItems = stagger(0.2, {startDelay: 2});
function useTaglineAnimation(isVisible) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "span",
      !isVisible
        ? { opacity: 1, y:0 }
        : { opacity: 0.1, y:200 },
      {
        duration: 2,
        delay: stagger(0.2, {startDelay:4}) 
      }
    );
  }, [isVisible]);

  return scope;
}

const TagLine = ({ title, playMarquee, isVisible }) => {
  const scope = useTaglineAnimation(isVisible)
  return (
      <p ref={scope} className="text-neutral-100" >
        {[...title].map((letter, index) => (
        <span
          key={index}
        >
          {letter} 
        </span>
      ))}
      </p>
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
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: letter.delay }}
              className="text-[200px] text-neutral-100"
            >
              {letter.name}
            </motion.span>
            
          ))}
          <TagLine
          title={`WE THE SUGACIOUS`}
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

// const AnimatedLetters = ({ title, disabled }) => {
//   return (
//     <>
//       {[...title].map((letter, index) => (
//         <span
//           key={index}
//           className="row-letter text-neutral-100"
//         >
//           {letter}
//         </span>
//       ))}
//     </>
//   );
// };



export default Hero;

"use client";
import { cubicBezier, easeIn, motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsVisible(false);
  //   }, 3000);

  //   return () => clearTimeout(timer); // Cleanup the timer to prevent memory leaks
  // }, []);
  const name = ["S","C","R","I","P","T","E","R","S"]

  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  return (
    <div className="relative h-[100vh] bg-neutral-900">
      {!isVisible && (
      <div className="">
        {/* {name.map((letter, index)=>( */}
          <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.2, delay:3.8}} className="text-[200px] text-neutral-100">
              S
          </motion.span>
          <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.2, delay:3.2}} className="text-[200px] text-neutral-100">
              C
          </motion.span>
          <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.2, delay:3.5}} className="text-[200px] text-neutral-100">
              R
          </motion.span>
          <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.2, delay:3.1}} className="text-[200px] text-neutral-100">
              I
          </motion.span>
          <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.2, delay:3.7}} className="text-[200px] text-neutral-100">
              P
          </motion.span>
          <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.2, delay:3.1}} className="text-[200px] text-neutral-100">
              T
          </motion.span>
          <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.2, delay:3.9}} className="text-[200px] text-neutral-100">
              E
          </motion.span>
          <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.2, delay:3.3}} className="text-[200px] text-neutral-100">
              R
          </motion.span>
          <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.2, delay:3.8}} className="text-[200px] text-neutral-100">
              S
          </motion.span>
       
        {/* ))} */}
      </div>
     
       )}
        <div>
        <TagLine title={`WE THE SUGACIOUS`} playMarquee={playMarquee}/>
        <p className="text-neutral-100 text-8xl text-[200px] "></p>
      </div>
      <LayoutGroup>
      <AnimatePresence>
             {isVisible && (
              <div className="h-[90vh]">
            <motion.div
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 0.8, y: 10, }}
              transition={{ duration: 3, ease: "anticipate", delay:0.2 }}
              exit={{ opacity: 0, y: -500 }}
              onAnimationComplete={() => setIsVisible(false)}
              className="absolute top-44 right-16 overflow-hidden"
            >
              <Image src={"/image-4.jpg"} width={400} height={600} alt="as" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ duration: 3, ease: "anticipate", delay:0.8 }}
              exit={{ opacity: 0, y: -500 }}
              onAnimationComplete={() => setIsVisible(false)}
              className="absolute top-80 left-16 overflow-hidden"
            >
              <Image src={"/image-1.jpg"} width={400} height={400} alt="as" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ duration: 3, ease: "anticipate", delay:0.4 }}
              exit={{ opacity: 0, y: -500 }}
              onAnimationComplete={() => setIsVisible(false)}
              className="absolute top-12 left-36 overflow-hidden"
            >
              <Image src={"/image-3.jpg"} width={400} height={400} alt="as" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ duration: 3, ease: "anticipate", delay:0.6 }}
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
              transition={{ duration: 4.5, ease: "anticipate", }}
              layoutId='main-image-1'

              onAnimationComplete={() => setIsVisible(false)}
              className="absolute top-44 left-[35%] "
              src={"/image-main.jpg"} width={600} height={600} alt="as" />
            </motion.div>
            </div>
        )}
        
      </AnimatePresence>
      {!isVisible && (
              <div >
                <motion.img
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                  src={'/image-main.jpg'}
                  layoutId='main-image-1'
                  width={500}
                  height={500}
                  className="absolute -bottom-[750px] left-[20%] w-[60vw] h-auto "
                />
              </div>
            )}
      </LayoutGroup>
    </div>
  );
};


const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    initial={{opacity:0, y:200}}
    animate={{opacity:1, y:100}}
    transition={{ duration: 4.5, ease: "anticipate", delay:5}}
    >
    
    {[...title].map((letter,index) => (
      <motion.span
        key={index}
        className='row-letter text-neutral-100'
        variants={disabled ? null : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const TagLine = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className='marquee__inner'>
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </motion.div>
    </div>
  );
};

export default Hero;

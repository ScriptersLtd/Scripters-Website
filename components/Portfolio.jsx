"use client";
import { cascadia } from "@/utils/cascadia";
import {
  useScroll,
  motion,
  useTransform,
  useMotionValue,
  useInView,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Portfolio = () => {
  const refPortfolio = useRef();
  const isSmallScreen = useMediaQuery({ maxWidth: 1280 });
  const { scrollYProgress } = useScroll({
    target: refPortfolio,
    offset: ["0 1", "1 0"],
  });
  const x1 = useTransform(scrollYProgress, [0,1],[-2000,600])
  const x2 = useTransform(scrollYProgress, [0.2,1],[0,-1000])
  return (
    <div
      className="flex flex-col justify-start items-start xl:pb-44 panel bg-neutral-900  xl:h-[200vh] relative w-[100vw] overflow-hidden"
      ref={refPortfolio}
      data-color="black"
    >
      <div className="flex flex-col gap-1">
     <motion.div className="flex h-[40vh] xl:h-[50vh]" style={{x : x1}} >
        <Image src={"/portfolio-1.png"} alt="" className="h-[40vh] xl:h-[50vh]" width={600} height={500}  />
        <Image src={"/portfolio-2.png"} alt="" className="h-[40vh] xl:h-[50vh]" width={600} height={500}  />
        <Image src={"/portfolio-3.png"} alt="" className="h-[40vh] xl:h-[50vh]" width={600} height={500}  />
        <Image src={"/portfolio-4.png"} alt="" className="h-[40vh] xl:h-[50vh]" width={600} height={500}  />
        <Image src={"/portfolio-5.png"} alt="" className="h-[40vh] xl:h-[50vh]" width={600} height={500}  />
        <Image src={"/portfolio-6.png"} alt="" className="h-[40vh] xl:h-[50vh]" width={600} height={500}  />
        <Image src={"/portfolio-7.png"} alt="" className="h-[40vh] xl:h-[50vh]" width={600} height={500}  />
     </motion.div>
     <motion.div className="flex h-[40vh] xl:h-[50vh]" style={{x : x2}} >
        <Image src={"/portfolio-8.png"} alt="" className="h-[40vh] xl:h-[50vh]" width={600} height={500}  />
        <Image src={"/portfolio-7.png"} alt="" className="h-[40vh] xl:h-[50vh]" width={600} height={500}  />
        <Image src={"/portfolio-6.png"} alt="" className="h-[40vh] xl:h-[50vh]" width={600} height={500}  />
        <Image src={"/portfolio-5.png"} alt="" className="h-[40vh] xl:h-[50vh]" width={600} height={500}  />
        <Image src={"/portfolio-4.png"} alt="" className="h-[40vh] xl:h-[50vh]" width={600} height={500}  />
        <Image src={"/portfolio-3.png"} alt="" className="h-[40vh] xl:h-[50vh]" width={600} height={500}  />
        <Image src={"/portfolio-2.png"} alt="" className="h-[40vh] xl:h-[50vh]" width={600} height={500}  />
     </motion.div>
     </div>
    </div>
  );
};

const PortfolioCard = ({ title, y, desc, image }) => {
  const refPortfolioCard = useRef();
  const { scrollYProgress } = useScroll({
    target: refPortfolioCard,
    offset: ["0 0", "1 0"],
  });
  const headingY = useTransform(scrollYProgress, [0, "0%"], [1, "-20%"]);

  return (
    <motion.div
      className="group relative mx-auto bg-neutral-900 pb-24 border-x border-neutral-800"
      ref={refPortfolioCard}
    >
      <Image
        src={image}
        width={800}
        height={800}
        className="  w-[800px] h-[500px] object-cover"
        alt="asd"
      />
    </motion.div>
  );
};

export default Portfolio;

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
  const { scrollYProgress } = useScroll({
    target: refPortfolio,
    offset: ["0 1", "1 0"],
  });
  const y1 = useTransform(scrollYProgress, [0, 0.4], ["20%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.4],
    [0, 1, 1, 0]
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.7, 0.8],
    [0, 1, 1, 0]
  );
  const scaleHeading = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8],
    [1, 10, 600]
  );
  // const yHeading = useTransform(scrollYProgress,[0,0.8],["0%","700%"])

  const portfolioData = [
    {
      name: "portfolio 1",
      desc: "asdsada das dsa dsad sad ad sadsa sad sad adsa dsada",

      image: "/la-chance.jpg",
    },
    {
      name: "portfolio 1",
      desc: "asdsada das dsa dsad sad ad sadsa sad sad adsa dsada",

      image: "/la-chance.jpg",
    },
    {
      name: "portfolio 1",
      desc: "asdsada das dsa dsad sad ad sadsa sad sad adsa dsada",

      image: "/la-chance.jpg",
    },
  ];
  return (
    <div
      className="flex flex-col justify-start pb-44 panel bg-neutral-900 h-[400vh] relative"
      ref={refPortfolio}
      data-color="black"
    >
      <motion.div
        className="flex flex-col sticky top-[10vh] "
        style={{ opacity: opacity1, y: y1 }}
      >
        {portfolioData.map((portfolio) => {
          return (
            <>
              <PortfolioCard
                title={portfolio.name}
                desc={portfolio.desc}
                image={portfolio.image}
              />
            </>
          );
        })}
      </motion.div>

      <motion.div
        className="flex flex-col sticky top-[120vh]"
        style={{ y: y2, opacity: opacity2 }}
      >
        {portfolioData.map((portfolio) => {
          return (
            <>
              <PortfolioCard
                title={portfolio.name}
                desc={portfolio.desc}
                image={portfolio.image}
              />
            </>
          );
        })}
      </motion.div>
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
      className="group relative mx-auto bg-neutral-900 pb-24 border-x  border-neutral-800"
      ref={refPortfolioCard}
    >
      <Image
        src={image}
        width={800}
        height={800}
        className=" -z-10"
        alt="asd"
      />
      <div className="text-4xl text-neutral-100">{title}</div>
      <div className="bg-neutral-900 z-10 opacity-0 group-hover:opacity-3z10 transition-all absolute left-0 top-0 w-full h-full"></div>
    </motion.div>
  );
};

export default Portfolio;

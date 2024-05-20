"use client";
import { useMediaQuery } from "react-responsive";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cascadia } from "@/utils/cascadia";
import Image from "next/image";
const Services = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1280 });

  const ref2 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref2,
    offset: ["0 1", "1 0"],
  });

  const w1 = useTransform(scrollYProgress, [0, 0.25], ["0%", "100%"]);
  const w2 = useTransform(scrollYProgress, [0.25, 0.5], ["0%", "100%"]);
  const w3 = useTransform(scrollYProgress, [0.5, 0.75], ["0%", "100%"]);
  const w4 = useTransform(scrollYProgress, [0.75, 1], ["0%", "100%"]);
  const opacity1 = useTransform(scrollYProgress, [0.06, 0.08], ["0%", "100%"]);

  

  return (
    <div
      className="flex flex-col items-center justify-start relative h-[1600vh]  "
      ref={ref2}
    >
      
      <motion.div className="absolute left-0 gap-x-4 h-full w-full z-20 flex justify-center pb-20 " style={{opacity: opacity1}}>
        <div className="w-[23vw] h-1 bg-gray-400/30 rounded-full backdrop-blur-sm sticky top-[90vh]">
          <motion.div
            className="h-full bg-neutral-100 rounded-full "
            style={{ width: w1 }}
          ></motion.div>
        </div>
        <div className="w-[23vw] h-1 bg-gray-400/30 rounded-full backdrop-blur-sm sticky top-[90vh]">
          <motion.div
            className="h-full bg-neutral-100 rounded-full "
            style={{ width: w2 }}
          ></motion.div>
        </div>
        <div className="w-[23vw] h-1 bg-gray-400/30 rounded-full backdrop-blur-sm sticky top-[90vh]">
          <motion.div
            className="h-full bg-neutral-100 rounded-full "
            style={{ width: w3 }}
          ></motion.div>
        </div>
        <div className="w-[23vw] h-1 bg-gray-400/30 rounded-full backdrop-blur-sm sticky top-[90vh]">
          <motion.div
            className="h-full bg-neutral-100 rounded-full "
            style={{ width: w4 }}
          ></motion.div>
        </div>
      </motion.div>
      {serviceData.map((service, index) => (
        <div key={index}>
          <Service image={service.image} desc={service.desc}/>
        </div>
      ))}
    </div>
  );
};

const Service = ({image, desc}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  const x1 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [2000, 1900, -1900, -2000]
  );


  return (
    <motion.div
      className="h-[400vh] w-[100vw] relative "
      ref={ref}
    >
      <motion.div className="sticky top-0 h-[100vh] w-[100vw] justify-end items-end flex" >
        <Image
          src={"/service-background.jpg"}
          fill
          alt=""
          className="h-full -z-20"
        />

        <motion.img
          src={image}
          width={1920}
          height={1080}
          alt=""
          className="h-[80vh] xl:h-[100vh]  object-cover z-20"
          // whileHover={{
          //   scale: 1.1,
          //   transition: { duration: 1 },
          // }}
        />
        <motion.div
          className={`absolute left-0  h-full top-[75vh] xl:top-[70vh] 2xl:top-[60vh] whitespace-nowrap max-w-[100vw] overflow-hidden -z-10 text-neutral-100`}
        >
          <motion.p
            className="text-[70px] xl:text-[90px] 2xl:text-[150px] whitespace-nowrap font-bold "
            style={{ x: x1}}
          >
            {desc}
          </motion.p>
        </motion.div>
        <motion.div
          className={`absolute left-0 h-full top-[75vh] xl:top-[70vh] 2xl:top-[60vh] whitespace-nowrap max-w-[100vw] overflow-hidden  z-30 text-neutral-100`}
        >
          <motion.p
            className="text-[70px] xl:text-[90px] 2xl:text-[150px] whitespace-nowrap font-bold text-stroke"
            style={{ x: x1 }}
          >
            {desc}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const serviceData = [
  { image: "/service-1.png", desc: "POSTER - BROCHURE - SEO - BRANDING" },
  { image: "/service-2.png", desc: "WEBSITE DESIGN - WEB DEVELOPMENT - WEBAPPS" },
  { image: "/service-3.png", desc: "APP DEVELOPMENT - ECOMMERCE - NATIVE DEVELOPMENT" },
  { image: "/service-4.png", desc: "ORM - DIGITAL BANNER - PHYSICAL MARKETING" },
];

export default Services;

"use client";
import { cascadia } from "@/utils/cascadia";
import { motion, LayoutGroup } from "framer-motion";
import { useHeroContext } from "@/utils/contextProvider";
import MenuButton from "./MenuButton";
import { useEffect, useRef } from "react";
import Hls from "hls.js";

const Navbar = () => {
  const { isLogoVisible, isVisible, isOpen, setOpen } = useHeroContext();
  const videoRef = useRef(null);
  const name = [
    { name: ":", delay: 0.6 },
    { name: "/", delay: 0.4 },
    { name: "S", delay: 0.8 },
    { name: "c", delay: 0.2 },
    { name: "r", delay: 0.5 },
    { name: "i", delay: 0.1 },
    { name: "p", delay: 0.8 },
    { name: "t", delay: 0.2 },
    { name: "e", delay: 0.9 },
    { name: "r", delay: 0.0 },
    { name: "s", delay: 0.8 },
    { name: ">", delay: 0.7 },
  ];
  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource('/video/master.m3u8'); // Update this path with your HLS URL
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = '/video/master.m3u8'; // Update this path with your HLS URL
      video.addEventListener('loadedmetadata', () => {
        video.play();
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center  h-12 w-full bg-black">
      <video
        ref={videoRef}
        playsInline
        muted
        preload="auto"
        className="w-[40rem] sm:w-[100vw] h-[90vh] sm:h-[110vh] absolute top-0  z-10 object-cover"
      >
        Your browser does not support the video tag.
      </video>

      {isVisible && (
        <>
          <LayoutGroup>
            {!isLogoVisible && (
              <motion.div
                className="absolute top-44 left-5 z-20"
                transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] }}
                layoutId="logo-text"
              >
                {name.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 100 }}
                    transition={{ duration: 0.2, delay: letter.delay }}
                    className={`text-[40px] lg:text-[50px] xl:text-[150px] text-neutral-100 ${cascadia.className}`}
                  >
                    {letter.name}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: 100 }}
                  transition={{ duration: 0.2, delay: 3.9 }}
                  className={`text-[40px] text-neutral-100 ${cascadia.className}`}
                >
                  _
                </motion.span>
              </motion.div>
            )}
            {isLogoVisible && (
              <motion.div
                className="absolute top-4 left-4 z-20"
                transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] }}
                layoutId="logo-text"
              >
                {name.map((letter, index) => (
                  <motion.span
                    key={index}
                    className={`text-[25px] sm:text-[40px] lg:text-[50px] text-neutral-100 ${cascadia.className}`}
                  >
                    {letter.name}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: 100 }}
                  transition={{ duration: 0.2, delay: 3.9 }}
                  className={`text-[25px] sm:text-[40px] lg:text-[50px] text-neutral-100 blinking_text ${cascadia.className}`}
                >
                  _
                </motion.span>
              </motion.div>
            )}
          </LayoutGroup>
        </>
      )}
      <div
        className="flex justify-center items-center bg-neutral-100 rounded-full h-8 w-8 sm:h-12 sm:w-12 z-50 fixed right-4 top-4"
        onClick={() => setOpen(!isOpen)}
      >
        <MenuButton isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Navbar;

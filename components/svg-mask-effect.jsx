"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);

  const updateMousePosition = useCallback((e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  }, []);

  const debouncedMouseMove = useCallback((e) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(() => {
      updateMousePosition(e);
    });
  }, [updateMousePosition]);

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("mousemove", debouncedMouseMove);
    return () => {
      if (container) {
        container.removeEventListener("mousemove", debouncedMouseMove);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [debouncedMouseMove]);

  let maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("h-screen relative", className)}
      animate={{
        backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
      }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center text-6xl absolute bg-black bg-grid-white/[0.2] text-white [mask-image:url(/mask.svg)] [mask-size:20px] [mask-repeat:no-repeat]"
        animate={{
          WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:  0.1 }}
        >
          <div className="absolute inset-0 bg-black h-full w-full z-0 opacity-50" />
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="mx-auto text-center text-white text-4xl font-bold relative z-20"
          >
            {children}
          </div>
        </motion.div>
  
        <div className="w-full h-full flex items-center justify-center text-white">
          {revealText}
        </div>
      </motion.div>
    );
  };
  

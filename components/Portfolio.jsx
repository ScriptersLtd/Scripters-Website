"use client";
import {
  useScroll,
  motion,
  useTransform,
  useMotionValue
} from 'framer-motion';

const Portfolio = () => {

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const y1 = useTransform(scrollYProgress, [0, 300], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 300], [0, -100]);
  return (
    <div>
        <motion.div className='rounded-3xl shadow-xl p-4 '>
            <h3 className='text-5xl'>
              DEEZ PROJECT 1
            </h3>
            
        </motion.div>
    </div>
  )
}

export default Portfolio
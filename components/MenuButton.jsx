import { motion } from "framer-motion";

    const MenuButton = ({
        isOpen = false,
        width = 19,
        height = 12,
        strokeWidth = 2,
        color = "#000",
        transition = null,
        lineProps = null,
        ...props
      }) => {
        const variant = isOpen ? "opened" : "closed";
        const top = {
          closed: {
            rotate: 0,
            translateY: 0
          },
          opened: {
            rotate: 45,
            translateY: 1.5
          }
        };
        const center = {
          closed: {
            opacity: 1
          },
          opened: {
            opacity: 0
          }
        };
        const bottom = {
          closed: {
            rotate: 0,
            translateY: 0
          },
          opened: {
            rotate: -45,
            translateY: -2.5
          }
        };
        lineProps = {
          stroke: color,
          strokeWidth: strokeWidth,
          vectorEffect: "non-scaling-stroke",
          initial: "closed",
          animate: variant,
          transition,
          ...lineProps
        };
        const unitHeight = 4;
        const unitWidth = (unitHeight * (width)) / (height);
      
        return (
          <motion.svg
            viewBox={`0 0 ${unitWidth} ${unitHeight}`}
            overflow="visible"
            preserveAspectRatio="none"
            width={width}
            height={height}
            {...props}
          >
            <motion.line
              x1="0"
              x2={unitWidth}
              y1="0"
              y2="0"
              variants={top}
              {...lineProps}
            />
            <motion.line
              x1="0"
              x2={unitWidth}
              y1="2"
              y2="2"
              variants={center}
              {...lineProps}
            />
            <motion.line
              x1="0"
              x2={unitWidth}
              y1="4"
              y2="4"
              variants={bottom}
              {...lineProps}
            />
          </motion.svg>
        );
      };
      
 

export default MenuButton
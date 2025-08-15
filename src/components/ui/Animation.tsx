"use client";

import { AnimationProps } from "@/types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Animation: React.FC<AnimationProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  direction = "up",
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
      },
    };

    switch (direction) {
      case "up":
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, y: 30 },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case "down":
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, y: -30 },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case "left":
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: 30 },
          visible: { ...baseVariants.visible, x: 0 },
        };
      case "right":
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: -30 },
          visible: { ...baseVariants.visible, x: 0 },
        };
      default:
        return baseVariants;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={getVariants()}
      className={className}>
      {children}
    </motion.div>
  );
};

export default Animation;

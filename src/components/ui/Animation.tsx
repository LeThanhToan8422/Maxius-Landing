"use client";

import { AnimationProps } from "@/types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Animation component with configurable repeat behavior
 * @param repeat - If true, animation will trigger every time element comes into view
 * @param triggerOnce - If false (when repeat=true), animation will trigger every time
 */
const Animation: React.FC<AnimationProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  direction = "up",
  repeat = false,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: !repeat,
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

// Convenience component for repeatable animations
export const RepeatableAnimation: React.FC<Omit<AnimationProps, "repeat">> = (
  props
) => {
  return <Animation {...props} repeat={true} />;
};

export default Animation;

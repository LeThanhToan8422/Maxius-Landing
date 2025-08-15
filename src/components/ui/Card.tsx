"use client";

import { CardProps } from "@/types";
import { motion } from "framer-motion";

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = true,
  shadow = true,
}) => {
  const baseClasses =
    "bg-white rounded-xl border border-gray-200 overflow-hidden";
  const shadowClasses = shadow ? "shadow-lg" : "";
  const classes = `${baseClasses} ${shadowClasses} ${className}`;

  if (hover) {
    return (
      <motion.div
        className={classes}
        whileHover={{
          y: -4,
          boxShadow: shadow ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "none",
        }}
        transition={{ duration: 0.2 }}>
        {children}
      </motion.div>
    );
  }

  return <div className={classes}>{children}</div>;
};

export default Card;

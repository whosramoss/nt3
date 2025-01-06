"use client"

import { CommonsProps } from "@utils/utils";
import { motion } from "framer-motion";

interface FadeInItem extends CommonsProps {
  delay?: number;
  duration?: number;
  y?: string;
  hasStaggerChildren?: boolean;
}

export default function FadeInItem({
  children,
  className,
  delay = 0,
  duration = 1,
  y = "2em",
  hasStaggerChildren = false,
}: FadeInItem) {
  const setDelay = () => {
    if (hasStaggerChildren) {
      return {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      };
    }

    return {
      hidden: { opacity: 0, y: y },
      visible: {
        opacity: 1,
        y: `0em`,
        transition: {
          delay: delay,
          duration: duration,
          ease: [0.2, 0.65, 0.3, 0.9],
        },
      },
    };
  };

  return (
    <motion.div className={className} variants={setDelay()}>
      {children}
    </motion.div>
  );
}

"use client"

import { setDelay } from "@hooks/useAnimationFadeIn";
import { CommonsProps, DelayProps } from "@utils/utils";
import { motion } from "framer-motion";

interface FadeInItem extends CommonsProps, DelayProps { }

export default function FadeInItem({
  children,
  className,
  delay,
  duration,
  y,
  hasStaggerChildren,
}: FadeInItem) {
  return (
    <motion.div className={className} variants={setDelay({
      delay,
      duration,
      y,
      hasStaggerChildren,
    })}>
      {children}
    </motion.div>
  );
}

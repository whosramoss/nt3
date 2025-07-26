"use client";

import { useAnimationFadeIn } from "src/shared/hooks/useAnimationFadeIn";
import { CommonsProps } from "src/shared/utils/utils";
import { motion } from "framer-motion";

export default function FadeInRoot({ children }: CommonsProps) {
  const { animateRef, animate, initial } = useAnimationFadeIn(0.1);

  const motionProps = {
    ref: animateRef,
    initial,
    animate,
  };

  return (
    <motion.div aria-hidden="true" {...motionProps}>
      {children}
    </motion.div>
  );
}

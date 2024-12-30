"use client";

import React, { ReactNode } from "react";
import { useAnimationFadeIn } from "@hooks/useAnimationFadeIn";
import { motion } from "framer-motion";
import { CommonsProps } from "@utils/utils";
import { cn } from "@utils/utils";

export default function Grid({ className, children }: CommonsProps) {

  const { animateRef, animate, initial, setDelayVariant } = useAnimationFadeIn();


  return (
    <motion.div
      aria-hidden="true"
      ref={animateRef}
      initial={initial}
      animate={animate}
      variants={setDelayVariant({ delay: 0.5, duration: 1.5 })}
      className={cn(
        "py-20 w-[90vw] place-content-center place-items-center ",
        "grid grid-cols-1",
        "sm:grid-cols-3",
        "gap-x-5 gap-y-7",
        className,
      )}
    >
      {children}

    </motion.div>

  );
}




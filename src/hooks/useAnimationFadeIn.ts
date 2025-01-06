import { AnimationProps, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { DelayProps } from "@utils/utils";

interface FadeInResponse {
  animateRef: (node?: Element | null | undefined) => void;
  animate: AnimationProps["animate"];
  initial: string;
}

export const useAnimationFadeIn = (
  threshold = 0,
  firstState = "visible",
  secondState = "hidden",
): FadeInResponse => {
  const animate = useAnimation();

  const { ref: animateRef, inView } = useInView({
    threshold: threshold ?? 0,
    triggerOnce: true,
  });

  useEffect(() => {
    animate.start(inView ? firstState : secondState);
  }, [animate, inView]);

  return { animateRef, animate, initial: secondState };
};


export const setDelay = ({
  delay = 0,
  duration = 1,
  y = "2em",
  hasStaggerChildren = false,
}: DelayProps) => {
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

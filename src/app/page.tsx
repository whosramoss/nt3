"use client";

import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Hero } from "@ui/hero";
import CardList from "@app/_components/CardList";
import { NavBar } from "@ui/navbar";
import { Button } from "@ui/buttons";
import { motion } from "framer-motion";
import { openExternalLink, threeLinks } from "@utils/utils";
import { useAnimationFadeIn } from "@hooks/useAnimationFadeIn";
import Center from "@app/_components/Center";

export default function HomePage() {
  const { animateRef, animate, initial, setDelayVariant } =
    useAnimationFadeIn(0.1);

  const motionProps = {
    ref: animateRef,
    initial: initial,
    animate: animate,
  };

  return (
    <React.Fragment>
      <NavBar.Root>
        <NavBar.Left className="text-[14px] font-semibold text-third">
          NT3
        </NavBar.Left>
        <NavBar.Right>
          <Button.Link href="https://github.com/whosramoss/nt3">
            GITHUB
          </Button.Link>
        </NavBar.Right>
      </NavBar.Root>
      <Button.Theme />
      <ReactLenis root options={{ lerp: 0.05 }}>
        <motion.div aria-hidden="true" {...motionProps}>
          <Hero.Root>
            <motion.div variants={setDelayVariant({ delay: 0, duration: 1.3 })}>
              <Hero.Title>Next.Js Boilerplate</Hero.Title>
            </motion.div>
            <motion.div
              variants={setDelayVariant({ delay: 0.25, duration: 1.5 })}
            >
              <Hero.SubTitle>
                Next.Js • Three.Js • Typescript • Tailwind
              </Hero.SubTitle>
            </motion.div>
            <motion.div
              className="flex flex-row py-2"
              variants={setDelayVariant({ delay: 0.25, duration: 1.5 })}
            >
              {threeLinks.map(({ title, link }, index) => (
                <Button.Chip key={index} onClick={() => openExternalLink(link)}>
                  {title}
                </Button.Chip>
              ))}
            </motion.div>
          </Hero.Root>
          <Center>
            <CardList />
          </Center>
          <Center className="py-16 tracking-wide">
            <motion.div
              className="py-2"
              variants={setDelayVariant({ delay: 0.4, duration: 1.5 })}
            >
              <h2 className="text-base font-bold sm:text-4xl">
                Three.js has a large number of 3D shapes
              </h2>
            </motion.div>
            <motion.div
              className="cursor-pointer py-4 text-xl sm:text-3xl"
              variants={setDelayVariant({ delay: 0.6, duration: 1.5 })}
            >
              <Button.Link
                className="flex rounded-full bg-secondary px-6 py-2 sm:py-4 "
                href="https://threejs.org/manual/#en/primitives"
              >
                Check more shapes
              </Button.Link>
            </motion.div>
          </Center>
        </motion.div>
      </ReactLenis>
    </React.Fragment>
  );
}

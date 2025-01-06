"use client"
import React from "react";
import { Hero } from "@ui/hero";
import CardList from "@app/_components/CardList";
import { NavBar } from "@ui/navbar";
import { Button } from "@ui/buttons";
import { openExternalLink, threeLinks } from "@utils/utils";
import Center from "@app/_components/Center";
import { FadeIn } from "@ui/fade-in";
import SmoothScroll from "@ui/smooth-scroll";

export default function HomePage() {
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
      <SmoothScroll>
        <FadeIn.Root>
          <Hero.Root>
            <FadeIn.Item delay={0} duration={1.3}>
              <Hero.Title>Next.Js Boilerplate</Hero.Title>
            </FadeIn.Item>
            <FadeIn.Item delay={0.25} duration={1.5}>
              <Hero.SubTitle>
                Next.Js • Three.Js • Typescript • Tailwind
              </Hero.SubTitle>
            </FadeIn.Item>
            <FadeIn.Item className="flex flex-row py-2" delay={0.25} duration={1.5}>
              {threeLinks.map(({ title, link }, index) => (
                <Button.Chip key={index} onClick={() => openExternalLink(link)}>
                  {title}
                </Button.Chip>
              ))}
            </FadeIn.Item>
          </Hero.Root>
          <Center>
            <CardList />
          </Center>
          <Center className="py-16 tracking-wide">
            <FadeIn.Item className="py-2 text-base font-bold sm:text-4xl" delay={0.4} duration={1.5}>
              Three.js has a large number of 3D shapes
            </FadeIn.Item>
            <FadeIn.Item
              className="cursor-pointer py-4 text-xl sm:text-3xl"
              delay={0.6} duration={1.5}
            >
              <Button.Link
                className="flex rounded-full bg-secondary px-6 py-2 sm:py-4 "
                href="https://threejs.org/manual/#en/primitives"
              >
                Check more shapes
              </Button.Link>
            </FadeIn.Item>
          </Center>
        </FadeIn.Root>
      </SmoothScroll>
    </React.Fragment>
  );
}

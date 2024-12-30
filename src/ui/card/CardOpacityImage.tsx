"use client";

import { CommonsProps } from "@utils/utils";
import { cn } from "@utils/utils";
import React from "react";
import { useState } from "react";

interface CardOpacityProps extends CommonsProps {
  image: string
}

export default function CardOpacityImage({ children, image }: CardOpacityProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "flex flex-col px-5 pb-5 absolute bottom-0 left-0 z-30 hidden w-full items-start justify-between opacity-0 transition-opacity duration-300 ease-in-out md:flex lg:px-5 lg:pb-5",
          { "opacity-100": isHovered },
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "absolute hidden h-full w-full flex-col rounded-xl bg-[rgba(0,0,0,0.3)] opacity-0 backdrop-blur-md transition-all duration-[0.3s] ease-[cubic-bezier(0.2,0.65,0.3,0.9)] md:flex",
          { "opacity-100": isHovered },
        )}
      ></div>
      <img
        className="justify-center w-full rounded-xl bg-primary bg-cover bg-center object-cover card-size"
        src={image}
        alt="image"
      />
    </div>

  );
}
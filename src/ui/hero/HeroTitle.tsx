import React from "react";
import { cn } from "@utils/utils";
import { CommonsProps } from "@utils/utils";

export default function HeroTitle({ className, children }: CommonsProps) {
  return (
    <h1 className={cn("z-30 w-full text-center text-4xl sm:text-8xl font-bold leading-2 tracking-[0.2px]  tracking-wider cursor-none", className)}>
      {children}
    </h1>
  );
}

import React from "react";
import { cn } from "@utils/utils";
import { CommonsProps } from "@utils/utils";

export default function HeroSubTitle({ className, children }: CommonsProps) {
  return (
    <h2 className={cn(
      "text-sm font-bold py-4 tracking-wide cursor-none",
      "sm:text-2xl",
      className,
    )}>
      {children}
    </h2>
  );
}

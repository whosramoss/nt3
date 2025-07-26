import React from "react";
import { cn } from "src/shared/utils/utils";
import { CommonsProps } from "src/shared/utils/utils";

export default function HeroSubTitle({ className, children }: CommonsProps) {
  return (
    <h2
      className={cn(
        "cursor-none py-4 text-sm font-bold tracking-wide",
        "sm:text-2xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

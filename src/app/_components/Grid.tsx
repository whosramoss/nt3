"use client";

import React from "react";
import { CommonsProps } from "src/shared/utils/utils";
import { cn } from "src/shared/utils/utils";
import { FadeIn } from "src/shared/ui/fade-in";

export default function Grid({ className, children }: CommonsProps) {
  return (
    <FadeIn.Item
      delay={0.5}
      duration={1.5}
      className={cn(
        "w-[90vw] place-content-center place-items-center py-20 ",
        "grid grid-cols-1",
        "sm:grid-cols-3",
        "gap-x-5 gap-y-7",
        className,
      )}
    >
      {children}
    </FadeIn.Item>
  );
}

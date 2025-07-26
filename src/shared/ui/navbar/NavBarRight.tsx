import { CommonsProps } from "src/shared/utils/utils";
import { cn } from "src/shared/utils/utils";
import React from "react";

export default function NavBarRight({ children, className }: CommonsProps) {
  return (
    <div className={cn("flex items-center gap-[15px] text-[14px]", className)}>
      {children}
    </div>
  );
}

import { CommonsProps } from "@utils/utils";
import { cn } from "@utils/utils";
import React from "react";

interface ChipButtonProps extends CommonsProps {
  isSelected?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ChipButton({
  children,
  className,
  onClick,
}: ChipButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        onClick
      }}
      className={cn(
        "cursor-none rounded-full px-4 py-2 font-semibold text-third hover:bg-third hover:text-secondary",
        className,
      )}
    >
      {children}
    </button>
  );
}

import { CommonsProps } from "@utils/utils";
import { cn } from "@utils/utils";
import Link from "next/link";

interface LinkButtonProps extends CommonsProps {
  href: string;
  target?: string;
};

export default function LinkButton({
  className,
  children,
  href,
  target = "_blank",
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        "cursor-pointer font-semibold",
        "text-third hover:text-primary/50 dark:text-third",
        className,
      )}
    >
      {children}
    </Link>
  );
}
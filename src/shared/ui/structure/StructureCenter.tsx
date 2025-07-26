import { CommonsProps } from "src/shared/utils/utils";
import { cn } from "src/shared/utils/utils";

export default function StructureCenter({ children, className }: CommonsProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      {children}
    </div>
  );
}

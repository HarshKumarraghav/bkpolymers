import { cn } from "@/lib/utils";
import { ReactNode } from "react";
interface MaxWidth {
  className?: string;
  children: ReactNode;
}
const Wrapper = ({ className, children }: MaxWidth) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-12",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;

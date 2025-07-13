import { cn } from "@/src/utils/cn";
import React, { HTMLAttributes } from "react";

const Container = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "w-full 2xl:max-w-[95%] max-w-full 2xl:px-10 px-6 mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;

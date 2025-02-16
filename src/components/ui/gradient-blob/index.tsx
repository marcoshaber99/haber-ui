"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GradientBlobProps extends React.HTMLAttributes<HTMLDivElement> {
  colors?: string[];
  size?: "sm" | "md" | "lg";
  blur?: number;
  opacity?: number;
}

const GradientBlob = React.forwardRef<HTMLDivElement, GradientBlobProps>(
  (
    {
      className,
      colors = ["#FF0080", "#7928CA"],
      size = "md",
      blur = 40,
      opacity = 0.5,
      ...props
    },
    ref
  ) => {
    const sizeMap = {
      sm: "w-32 h-32",
      md: "w-48 h-48",
      lg: "w-64 h-64",
    };

    return (
      <div
        ref={ref}
        className={cn("relative rounded-full", sizeMap[size], className)}
        style={{
          background: `linear-gradient(45deg, ${colors.join(", ")})`,
          filter: `blur(${blur}px)`,
          opacity,
        }}
        {...props}
      />
    );
  }
);
GradientBlob.displayName = "GradientBlob";

export { GradientBlob };
export type { GradientBlobProps };

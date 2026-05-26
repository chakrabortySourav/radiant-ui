import * as React from "react";
import { cn } from "@/lib/utils";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const Container = React.forwardRef<
  HTMLDivElement,
  LockedProps<React.HTMLAttributes<HTMLDivElement>> & {
    size?: "sm" | "md" | "lg" | "xl" | "full";
  }
>(({ size = "lg", ...props }, ref) => {
  const sizes = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    full: "max-w-full",
  } as const;
  return (
    <div
      ref={ref}
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size])}
      {...stripStyleProps(props)}
    />
  );
});
Container.displayName = "Container";

export const Stack = React.forwardRef<
  HTMLDivElement,
  LockedProps<React.HTMLAttributes<HTMLDivElement>> & {
    direction?: "row" | "column";
    gap?: 1 | 2 | 3 | 4 | 6 | 8;
    align?: "start" | "center" | "end" | "stretch";
    justify?: "start" | "center" | "end" | "between";
  }
>(({ direction = "column", gap = 4, align, justify, ...props }, ref) => {
  const gapMap = { 1: "gap-1", 2: "gap-2", 3: "gap-3", 4: "gap-4", 6: "gap-6", 8: "gap-8" };
  const alignMap = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };
  const justifyMap = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
  };
  return (
    <div
      ref={ref}
      className={cn(
        "flex",
        direction === "column" ? "flex-col" : "flex-row",
        gapMap[gap],
        align && alignMap[align],
        justify && justifyMap[justify],
      )}
      {...stripStyleProps(props)}
    />
  );
});
Stack.displayName = "Stack";

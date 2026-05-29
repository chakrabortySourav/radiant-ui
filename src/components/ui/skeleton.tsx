import * as React from "react";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export type SkeletonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type SkeletonRadius = "none" | "sm" | "md" | "lg" | "full";

const sizeMap: Record<SkeletonSize, string> = {
  xs: "h-2",
  sm: "h-3",
  md: "h-4",
  lg: "h-6",
  xl: "h-8",
};

const radiusMap: Record<SkeletonRadius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

export interface SkeletonProps extends LockedProps<React.HTMLAttributes<HTMLDivElement>> {
  size?: SkeletonSize;
  radius?: SkeletonRadius;
}

export function Skeleton({ size = "md", radius = "md", ...props }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-muted w-full ${sizeMap[size]} ${radiusMap[radius]}`}
      {...stripStyleProps(props)}
    />
  );
}

/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/progress.tsx`.
 */
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { Progress as ShadcnProgress } from "./_shadcn/progress";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>>
>((props, ref) => <ShadcnProgress ref={ref} {...stripStyleProps(props)} />);
Progress.displayName = "Progress";

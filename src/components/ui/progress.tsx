import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>>
>(({ value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className="relative h-4 w-full overflow-hidden rounded-full bg-secondary"
    {...stripStyleProps(props)}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = "Progress";

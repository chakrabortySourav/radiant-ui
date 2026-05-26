import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  LockedProps<React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>>
>(({ orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={
      "shrink-0 bg-border " + (orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]")
    }
    {...stripStyleProps(props)}
  />
));
Separator.displayName = "Separator";

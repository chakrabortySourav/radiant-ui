import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;

export const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  LockedProps<React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>>
>(({ align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className="z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none"
    {...stripStyleProps(props)}
  />
));
HoverCardContent.displayName = "HoverCardContent";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  LockedProps<React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>>
>(({ sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className="z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-fade-in"
    {...stripStyleProps(props)}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

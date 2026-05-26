import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  LockedProps<React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>>
>(({ align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className="z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none"
      {...stripStyleProps(props)}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = "PopoverContent";

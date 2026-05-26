import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>>
>(({ children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className="relative overflow-hidden" {...stripStyleProps(props)}>
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = "ScrollArea";

export const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>>
>(({ orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={
      orientation === "vertical"
        ? "flex touch-none select-none transition-colors h-full w-2.5 border-l border-l-transparent p-[1px]"
        : "flex touch-none select-none transition-colors h-2.5 flex-col border-t border-t-transparent p-[1px]"
    }
    {...stripStyleProps(props)}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = "ScrollBar";

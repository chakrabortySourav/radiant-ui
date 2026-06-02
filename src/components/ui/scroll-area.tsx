/** Design-system wrapper. Raw shadcn lives in `./_shadcn/scroll-area.tsx`. */
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import {
  ScrollArea as ShadcnScrollArea,
  ScrollBar as ShadcnScrollBar,
} from "./_shadcn/scroll-area";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>>
>(({ children, ...props }, ref) => (
  <ShadcnScrollArea ref={ref} {...stripStyleProps(props)}>
    {children}
  </ShadcnScrollArea>
));
ScrollArea.displayName = "ScrollArea";

export const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>>
>((props, ref) => <ShadcnScrollBar ref={ref} {...stripStyleProps(props)} />);
ScrollBar.displayName = "ScrollBar";

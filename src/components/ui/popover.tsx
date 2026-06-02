/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/popover.tsx`.
 */
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import {
  Popover as ShadcnPopover,
  PopoverTrigger as ShadcnPopoverTrigger,
  PopoverContent as ShadcnPopoverContent,
} from "./_shadcn/popover";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const Popover = ShadcnPopover;
export const PopoverTrigger = ShadcnPopoverTrigger;

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  LockedProps<React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>>
>((props, ref) => (
  <ShadcnPopoverContent ref={ref} {...stripStyleProps(props)} />
));
PopoverContent.displayName = "PopoverContent";

/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/separator.tsx`.
 */
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { Separator as ShadcnSeparator } from "./_shadcn/separator";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  LockedProps<React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>>
>((props, ref) => (
  <ShadcnSeparator ref={ref} {...stripStyleProps(props)} />
));
Separator.displayName = "Separator";

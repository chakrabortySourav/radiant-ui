/** Design-system wrapper. Raw shadcn lives in `./_shadcn/toggle.tsx`. */
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { type VariantProps } from "class-variance-authority";
import { Toggle as ShadcnToggle, toggleVariants } from "./_shadcn/toggle";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export { toggleVariants };

export const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  LockedProps<React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>> &
    VariantProps<typeof toggleVariants>
>(({ variant, size, ...props }, ref) => (
  <ShadcnToggle ref={ref} variant={variant} size={size} {...stripStyleProps(props)} />
));
Toggle.displayName = "Toggle";

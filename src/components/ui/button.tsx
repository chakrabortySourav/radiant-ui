/**
 * Design-system wrapper around the raw shadcn Button.
 *
 * Re-exports `buttonVariants` for internal use (e.g. asChild link styling).
 * Consumer `className` / `style` are intentionally blocked so the design
 * system remains the single source of truth for Button styling.
 *
 * The raw shadcn source lives in `./_shadcn/button.tsx` and is CLI-managed.
 */
import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { buttonVariants } from "./_shadcn/button";
import { cn } from "@/lib/utils";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export { buttonVariants };

export type ButtonProps = LockedProps<React.ComponentProps<"button">> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "button";
    const rest = stripStyleProps(props);

    return (
      <Comp
        ref={ref}
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={cn(buttonVariants({ variant, size }))}
        {...rest}
      />
    );
  },
);
Button.displayName = "Button";

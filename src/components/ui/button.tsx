/**
 * Design-system wrapper around the raw shadcn Button.
 *
 * - Locks `className` / `style` so consumers cannot override design-system styling.
 * - Re-exports `buttonVariants` for internal use (e.g. asChild link styling).
 *
 * The raw shadcn source lives in `./_shadcn/button.tsx` and is CLI-managed.
 * Do not edit that file by hand — update this wrapper instead.
 */
import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import {
  buttonVariants,
} from "./_shadcn/button";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export { buttonVariants };

type ShadcnButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export type ButtonProps = LockedProps<ShadcnButtonProps>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { variant = "default", size = "default", asChild = false, ...rest } = stripStyleProps(props);
    const Comp = asChild ? Slot.Root : "button";

    return (
      <Comp
        ref={ref}
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={buttonVariants({ variant, size })}
        {...rest}
      />
    );
  },
);
Button.displayName = "Button";

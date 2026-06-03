/**
 * Design-system wrapper around the raw shadcn Button.
 *
 * Re-exports `buttonVariants` for internal use (e.g. asChild link styling).
 * Consumers can pass `className` to extend styling; it is merged with the
 * variant classes via `cn` (tailwind-merge), so later classes win.
 *
 * The raw shadcn source lives in `./_shadcn/button.tsx` and is CLI-managed.
 */
import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { buttonVariants } from "./_shadcn/button";
import { cn } from "@/lib/utils";

export { buttonVariants };

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", asChild = false, className, ...rest }, ref) => {
    const Comp = asChild ? Slot.Root : "button";

    return (
      <Comp
        ref={ref}
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={cn(
          buttonVariants({ variant, size }),
          // v4: `border` utility no longer ships a color; ensure outline has a visible border in light mode.
          variant === "outline" && "border-input",
          className,
        )}
        {...rest}
      />
    );
  },
);
Button.displayName = "Button";

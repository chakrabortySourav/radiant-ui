/** Design-system wrapper. Raw shadcn lives in `./_shadcn/checkbox.tsx`. */
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Checkbox as ShadcnCheckbox } from "./_shadcn/checkbox";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  LockedProps<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>>
>((props, ref) => <ShadcnCheckbox ref={ref} {...stripStyleProps(props)} />);
Checkbox.displayName = "Checkbox";

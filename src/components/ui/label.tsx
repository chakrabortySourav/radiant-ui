/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/label.tsx`.
 */
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Label as ShadcnLabel } from "./_shadcn/label";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export type LabelProps = LockedProps<
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>;

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>((props, ref) => <ShadcnLabel ref={ref} {...stripStyleProps(props)} />);
Label.displayName = "Label";

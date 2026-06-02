/**
 * Design-system wrapper around the raw shadcn Input.
 * See `./button.tsx` for the wrapper pattern rationale.
 */
import * as React from "react";
import { Input as ShadcnInput } from "./_shadcn/input";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export type InputProps = LockedProps<
  React.InputHTMLAttributes<HTMLInputElement>
>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => <ShadcnInput ref={ref} {...stripStyleProps(props)} />,
);
Input.displayName = "Input";

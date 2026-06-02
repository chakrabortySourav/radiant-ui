/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/textarea.tsx`.
 */
import * as React from "react";
import { Textarea as ShadcnTextarea } from "./_shadcn/textarea";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export type TextareaProps = LockedProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => <ShadcnTextarea ref={ref} {...stripStyleProps(props)} />,
);
Textarea.displayName = "Textarea";

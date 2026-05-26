import * as React from "react";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export type TextareaProps = LockedProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => (
  <textarea
    ref={ref}
    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    {...stripStyleProps(props)}
  />
));
Textarea.displayName = "Textarea";

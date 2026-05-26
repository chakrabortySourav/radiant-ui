import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export type LabelProps = LockedProps<
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>;

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>((props, ref) => {
  const safe = stripStyleProps(props);
  return (
    <LabelPrimitive.Root
      ref={ref}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      {...safe}
    />
  );
});
Label.displayName = LabelPrimitive.Root.displayName;

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  LockedProps<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>>
>((props, ref) => (
  <RadioGroupPrimitive.Root ref={ref} className="grid gap-2" {...stripStyleProps(props)} />
));
RadioGroup.displayName = "RadioGroup";

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  LockedProps<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>>
>((props, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    {...stripStyleProps(props)}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <Circle className="h-2.5 w-2.5 fill-current text-current" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = "RadioGroupItem";

/** Design-system wrapper. Raw shadcn lives in `./_shadcn/radio-group.tsx`. */
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import {
  RadioGroup as ShadcnRadioGroup,
  RadioGroupItem as ShadcnRadioGroupItem,
} from "./_shadcn/radio-group";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  LockedProps<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>>
>((props, ref) => <ShadcnRadioGroup ref={ref} {...stripStyleProps(props)} />);
RadioGroup.displayName = "RadioGroup";

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  LockedProps<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>>
>((props, ref) => <ShadcnRadioGroupItem ref={ref} {...stripStyleProps(props)} />);
RadioGroupItem.displayName = "RadioGroupItem";

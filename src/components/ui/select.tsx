/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/select.tsx`.
 */
import * as React from "react";
import {
  Select as ShadcnSelect,
  SelectGroup as ShadcnSelectGroup,
  SelectValue as ShadcnSelectValue,
  SelectTrigger as ShadcnSelectTrigger,
  SelectContent as ShadcnSelectContent,
  SelectLabel as ShadcnSelectLabel,
  SelectItem as ShadcnSelectItem,
  SelectSeparator as ShadcnSelectSeparator,
} from "./_shadcn/select";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const Select = ShadcnSelect;
export const SelectGroup = ShadcnSelectGroup;
export const SelectValue = ShadcnSelectValue;

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof ShadcnSelectTrigger>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnSelectTrigger>>
>((props, ref) => <ShadcnSelectTrigger ref={ref} {...stripStyleProps(props)} />);
SelectTrigger.displayName = "SelectTrigger";

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof ShadcnSelectContent>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnSelectContent>>
>((props, ref) => <ShadcnSelectContent ref={ref} {...stripStyleProps(props)} />);
SelectContent.displayName = "SelectContent";

export const SelectLabel = React.forwardRef<
  React.ElementRef<typeof ShadcnSelectLabel>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnSelectLabel>>
>((props, ref) => <ShadcnSelectLabel ref={ref} {...stripStyleProps(props)} />);
SelectLabel.displayName = "SelectLabel";

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof ShadcnSelectItem>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnSelectItem>>
>((props, ref) => <ShadcnSelectItem ref={ref} {...stripStyleProps(props)} />);
SelectItem.displayName = "SelectItem";

export const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof ShadcnSelectSeparator>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnSelectSeparator>>
>((props, ref) => <ShadcnSelectSeparator ref={ref} {...stripStyleProps(props)} />);
SelectSeparator.displayName = "SelectSeparator";

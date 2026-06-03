/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/dropdown-menu.tsx`.
 */
import * as React from "react";
import {
  DropdownMenu as ShadcnDropdownMenu,
  DropdownMenuTrigger as ShadcnDropdownMenuTrigger,
  DropdownMenuGroup as ShadcnDropdownMenuGroup,
  DropdownMenuPortal as ShadcnDropdownMenuPortal,
  DropdownMenuSub as ShadcnDropdownMenuSub,
  DropdownMenuRadioGroup as ShadcnDropdownMenuRadioGroup,
  DropdownMenuContent as ShadcnDropdownMenuContent,
  DropdownMenuItem as ShadcnDropdownMenuItem,
  DropdownMenuLabel as ShadcnDropdownMenuLabel,
  DropdownMenuSeparator as ShadcnDropdownMenuSeparator,
  DropdownMenuCheckboxItem as ShadcnDropdownMenuCheckboxItem,
  DropdownMenuRadioItem as ShadcnDropdownMenuRadioItem,
  DropdownMenuSubTrigger as ShadcnDropdownMenuSubTrigger,
  DropdownMenuSubContent as ShadcnDropdownMenuSubContent,
  DropdownMenuShortcut as ShadcnDropdownMenuShortcut,
} from "./_shadcn/dropdown-menu";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const DropdownMenu = ShadcnDropdownMenu;
export const DropdownMenuTrigger = ShadcnDropdownMenuTrigger;
export const DropdownMenuGroup = ShadcnDropdownMenuGroup;
export const DropdownMenuPortal = ShadcnDropdownMenuPortal;
export const DropdownMenuSub = ShadcnDropdownMenuSub;
export const DropdownMenuRadioGroup = ShadcnDropdownMenuRadioGroup;

type ContentProps = LockedProps<React.ComponentProps<typeof ShadcnDropdownMenuContent>>;
export function DropdownMenuContent(props: ContentProps) {
  return <ShadcnDropdownMenuContent {...stripStyleProps(props)} />;
}

type ItemProps = LockedProps<React.ComponentProps<typeof ShadcnDropdownMenuItem>>;
export function DropdownMenuItem(props: ItemProps) {
  return <ShadcnDropdownMenuItem {...stripStyleProps(props)} />;
}

type LabelProps = LockedProps<React.ComponentProps<typeof ShadcnDropdownMenuLabel>>;
export function DropdownMenuLabel(props: LabelProps) {
  return <ShadcnDropdownMenuLabel {...stripStyleProps(props)} />;
}

type SeparatorProps = LockedProps<React.ComponentProps<typeof ShadcnDropdownMenuSeparator>>;
export function DropdownMenuSeparator(props: SeparatorProps) {
  return <ShadcnDropdownMenuSeparator {...stripStyleProps(props)} />;
}

type CheckboxItemProps = LockedProps<React.ComponentProps<typeof ShadcnDropdownMenuCheckboxItem>>;
export function DropdownMenuCheckboxItem(props: CheckboxItemProps) {
  return <ShadcnDropdownMenuCheckboxItem {...stripStyleProps(props)} />;
}

type RadioItemProps = LockedProps<React.ComponentProps<typeof ShadcnDropdownMenuRadioItem>>;
export function DropdownMenuRadioItem(props: RadioItemProps) {
  return <ShadcnDropdownMenuRadioItem {...stripStyleProps(props)} />;
}

type SubTriggerProps = LockedProps<React.ComponentProps<typeof ShadcnDropdownMenuSubTrigger>>;
export function DropdownMenuSubTrigger(props: SubTriggerProps) {
  return <ShadcnDropdownMenuSubTrigger {...stripStyleProps(props)} />;
}

type SubContentProps = LockedProps<React.ComponentProps<typeof ShadcnDropdownMenuSubContent>>;
export function DropdownMenuSubContent(props: SubContentProps) {
  return <ShadcnDropdownMenuSubContent {...stripStyleProps(props)} />;
}

export const DropdownMenuShortcut = (
  props: LockedProps<React.HTMLAttributes<HTMLSpanElement>>,
) => <ShadcnDropdownMenuShortcut {...stripStyleProps(props)} />;

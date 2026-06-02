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

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownMenuContent>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnDropdownMenuContent>>
>((props, ref) => <ShadcnDropdownMenuContent ref={ref} {...stripStyleProps(props)} />);
DropdownMenuContent.displayName = "DropdownMenuContent";

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownMenuItem>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnDropdownMenuItem>> & { inset?: boolean }
>((props, ref) => <ShadcnDropdownMenuItem ref={ref} {...stripStyleProps(props)} />);
DropdownMenuItem.displayName = "DropdownMenuItem";

export const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownMenuLabel>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnDropdownMenuLabel>> & { inset?: boolean }
>((props, ref) => <ShadcnDropdownMenuLabel ref={ref} {...stripStyleProps(props)} />);
DropdownMenuLabel.displayName = "DropdownMenuLabel";

export const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownMenuSeparator>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnDropdownMenuSeparator>>
>((props, ref) => <ShadcnDropdownMenuSeparator ref={ref} {...stripStyleProps(props)} />);
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

export const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownMenuCheckboxItem>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnDropdownMenuCheckboxItem>>
>((props, ref) => <ShadcnDropdownMenuCheckboxItem ref={ref} {...stripStyleProps(props)} />);
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

export const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownMenuRadioItem>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnDropdownMenuRadioItem>>
>((props, ref) => <ShadcnDropdownMenuRadioItem ref={ref} {...stripStyleProps(props)} />);
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

export const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownMenuSubTrigger>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnDropdownMenuSubTrigger>> & { inset?: boolean }
>((props, ref) => <ShadcnDropdownMenuSubTrigger ref={ref} {...stripStyleProps(props)} />);
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";

export const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownMenuSubContent>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnDropdownMenuSubContent>>
>((props, ref) => <ShadcnDropdownMenuSubContent ref={ref} {...stripStyleProps(props)} />);
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";

export const DropdownMenuShortcut = (
  props: LockedProps<React.HTMLAttributes<HTMLSpanElement>>,
) => <ShadcnDropdownMenuShortcut {...stripStyleProps(props)} />;

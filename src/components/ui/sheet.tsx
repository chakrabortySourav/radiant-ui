/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/sheet.tsx`.
 */
import * as React from "react";
import {
  Sheet as ShadcnSheet,
  SheetTrigger as ShadcnSheetTrigger,
  SheetClose as ShadcnSheetClose,
  SheetPortal as ShadcnSheetPortal,
  SheetOverlay as ShadcnSheetOverlay,
  SheetContent as ShadcnSheetContent,
  SheetHeader as ShadcnSheetHeader,
  SheetFooter as ShadcnSheetFooter,
  SheetTitle as ShadcnSheetTitle,
  SheetDescription as ShadcnSheetDescription,
  type SheetContentProps as ShadcnSheetContentProps,
} from "./_shadcn/sheet";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const Sheet = ShadcnSheet;
export const SheetTrigger = ShadcnSheetTrigger;
export const SheetClose = ShadcnSheetClose;
export const SheetPortal = ShadcnSheetPortal;

export const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof ShadcnSheetOverlay>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnSheetOverlay>>
>((props, ref) => <ShadcnSheetOverlay ref={ref} {...stripStyleProps(props)} />);
SheetOverlay.displayName = "SheetOverlay";

export type SheetContentProps = LockedProps<ShadcnSheetContentProps>;

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof ShadcnSheetContent>,
  SheetContentProps
>((props, ref) => <ShadcnSheetContent ref={ref} {...stripStyleProps(props)} />);
SheetContent.displayName = "SheetContent";

export const SheetHeader = (props: LockedProps<React.HTMLAttributes<HTMLDivElement>>) => (
  <ShadcnSheetHeader {...stripStyleProps(props)} />
);

export const SheetFooter = (props: LockedProps<React.HTMLAttributes<HTMLDivElement>>) => (
  <ShadcnSheetFooter {...stripStyleProps(props)} />
);

export const SheetTitle = React.forwardRef<
  React.ElementRef<typeof ShadcnSheetTitle>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnSheetTitle>>
>((props, ref) => <ShadcnSheetTitle ref={ref} {...stripStyleProps(props)} />);
SheetTitle.displayName = "SheetTitle";

export const SheetDescription = React.forwardRef<
  React.ElementRef<typeof ShadcnSheetDescription>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnSheetDescription>>
>((props, ref) => <ShadcnSheetDescription ref={ref} {...stripStyleProps(props)} />);
SheetDescription.displayName = "SheetDescription";

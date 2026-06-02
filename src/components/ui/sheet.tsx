/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/sheet.tsx`.
 *
 * Note: shadcn v2 no longer exports SheetPortal / SheetOverlay separately —
 * they are composed inside SheetContent. We omit them from the public API.
 */
import * as React from "react";
import {
  Sheet as ShadcnSheet,
  SheetTrigger as ShadcnSheetTrigger,
  SheetClose as ShadcnSheetClose,
  SheetContent as ShadcnSheetContent,
  SheetHeader as ShadcnSheetHeader,
  SheetFooter as ShadcnSheetFooter,
  SheetTitle as ShadcnSheetTitle,
  SheetDescription as ShadcnSheetDescription,
} from "./_shadcn/sheet";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

type ShadcnSheetContentProps = React.ComponentProps<typeof ShadcnSheetContent>;

export const Sheet = ShadcnSheet;
export const SheetTrigger = ShadcnSheetTrigger;
export const SheetClose = ShadcnSheetClose;

export type SheetContentProps = LockedProps<ShadcnSheetContentProps>;

export function SheetContent(props: SheetContentProps) {
  return <ShadcnSheetContent {...stripStyleProps(props)} />;
}

export const SheetHeader = (
  props: LockedProps<React.HTMLAttributes<HTMLDivElement>>,
) => <ShadcnSheetHeader {...stripStyleProps(props)} />;

export const SheetFooter = (
  props: LockedProps<React.HTMLAttributes<HTMLDivElement>>,
) => <ShadcnSheetFooter {...stripStyleProps(props)} />;

export function SheetTitle(
  props: LockedProps<React.ComponentProps<typeof ShadcnSheetTitle>>,
) {
  return <ShadcnSheetTitle {...stripStyleProps(props)} />;
}

export function SheetDescription(
  props: LockedProps<React.ComponentProps<typeof ShadcnSheetDescription>>,
) {
  return <ShadcnSheetDescription {...stripStyleProps(props)} />;
}

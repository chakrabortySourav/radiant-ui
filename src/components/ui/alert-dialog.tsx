/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/alert-dialog.tsx`.
 */
import * as React from "react";
import {
  AlertDialog as ShadcnAlertDialog,
  AlertDialogTrigger as ShadcnAlertDialogTrigger,
  AlertDialogPortal as ShadcnAlertDialogPortal,
  AlertDialogOverlay as ShadcnAlertDialogOverlay,
  AlertDialogContent as ShadcnAlertDialogContent,
  AlertDialogHeader as ShadcnAlertDialogHeader,
  AlertDialogFooter as ShadcnAlertDialogFooter,
  AlertDialogTitle as ShadcnAlertDialogTitle,
  AlertDialogDescription as ShadcnAlertDialogDescription,
  AlertDialogAction as ShadcnAlertDialogAction,
  AlertDialogCancel as ShadcnAlertDialogCancel,
} from "./_shadcn/alert-dialog";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const AlertDialog = ShadcnAlertDialog;
export const AlertDialogTrigger = ShadcnAlertDialogTrigger;
export const AlertDialogPortal = ShadcnAlertDialogPortal;

export const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof ShadcnAlertDialogOverlay>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnAlertDialogOverlay>>
>((props, ref) => <ShadcnAlertDialogOverlay ref={ref} {...stripStyleProps(props)} />);
AlertDialogOverlay.displayName = "AlertDialogOverlay";

export const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof ShadcnAlertDialogContent>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnAlertDialogContent>>
>((props, ref) => <ShadcnAlertDialogContent ref={ref} {...stripStyleProps(props)} />);
AlertDialogContent.displayName = "AlertDialogContent";

export const AlertDialogHeader = (
  props: LockedProps<React.HTMLAttributes<HTMLDivElement>>,
) => <ShadcnAlertDialogHeader {...stripStyleProps(props)} />;

export const AlertDialogFooter = (
  props: LockedProps<React.HTMLAttributes<HTMLDivElement>>,
) => <ShadcnAlertDialogFooter {...stripStyleProps(props)} />;

export const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof ShadcnAlertDialogTitle>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnAlertDialogTitle>>
>((props, ref) => <ShadcnAlertDialogTitle ref={ref} {...stripStyleProps(props)} />);
AlertDialogTitle.displayName = "AlertDialogTitle";

export const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof ShadcnAlertDialogDescription>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnAlertDialogDescription>>
>((props, ref) => <ShadcnAlertDialogDescription ref={ref} {...stripStyleProps(props)} />);
AlertDialogDescription.displayName = "AlertDialogDescription";

export const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof ShadcnAlertDialogAction>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnAlertDialogAction>>
>((props, ref) => <ShadcnAlertDialogAction ref={ref} {...stripStyleProps(props)} />);
AlertDialogAction.displayName = "AlertDialogAction";

export const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof ShadcnAlertDialogCancel>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnAlertDialogCancel>>
>((props, ref) => <ShadcnAlertDialogCancel ref={ref} {...stripStyleProps(props)} />);
AlertDialogCancel.displayName = "AlertDialogCancel";

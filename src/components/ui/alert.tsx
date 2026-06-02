/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/alert.tsx`.
 */
import * as React from "react";
import {
  Alert as ShadcnAlert,
  AlertTitle as ShadcnAlertTitle,
  AlertDescription as ShadcnAlertDescription,
} from "./_shadcn/alert";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const Alert = React.forwardRef<
  React.ElementRef<typeof ShadcnAlert>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnAlert>>
>((props, ref) => <ShadcnAlert ref={ref} {...stripStyleProps(props)} />);
Alert.displayName = "Alert";

export const AlertTitle = React.forwardRef<
  React.ElementRef<typeof ShadcnAlertTitle>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnAlertTitle>>
>((props, ref) => <ShadcnAlertTitle ref={ref} {...stripStyleProps(props)} />);
AlertTitle.displayName = "AlertTitle";

export const AlertDescription = React.forwardRef<
  React.ElementRef<typeof ShadcnAlertDescription>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnAlertDescription>>
>((props, ref) => <ShadcnAlertDescription ref={ref} {...stripStyleProps(props)} />);
AlertDescription.displayName = "AlertDescription";

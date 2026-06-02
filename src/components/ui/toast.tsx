/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/toast.tsx`.
 */
import * as React from "react";
import {
  ToastProvider as ShadcnToastProvider,
  ToastViewport as ShadcnToastViewport,
  Toast as ShadcnToast,
  ToastTitle as ShadcnToastTitle,
  ToastDescription as ShadcnToastDescription,
  ToastClose as ShadcnToastClose,
  ToastAction as ShadcnToastAction,
  type ToastActionElement,
} from "./_shadcn/toast";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const ToastProvider = ShadcnToastProvider;

export const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ShadcnToastViewport>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnToastViewport>>
>((props, ref) => <ShadcnToastViewport ref={ref} {...stripStyleProps(props)} />);
ToastViewport.displayName = "ToastViewport";

export const Toast = React.forwardRef<
  React.ElementRef<typeof ShadcnToast>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnToast>>
>((props, ref) => <ShadcnToast ref={ref} {...stripStyleProps(props)} />);
Toast.displayName = "Toast";

export const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ShadcnToastTitle>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnToastTitle>>
>((props, ref) => <ShadcnToastTitle ref={ref} {...stripStyleProps(props)} />);
ToastTitle.displayName = "ToastTitle";

export const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ShadcnToastDescription>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnToastDescription>>
>((props, ref) => <ShadcnToastDescription ref={ref} {...stripStyleProps(props)} />);
ToastDescription.displayName = "ToastDescription";

export const ToastClose = React.forwardRef<
  React.ElementRef<typeof ShadcnToastClose>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnToastClose>>
>((props, ref) => <ShadcnToastClose ref={ref} {...stripStyleProps(props)} />);
ToastClose.displayName = "ToastClose";

export const ToastAction = React.forwardRef<
  React.ElementRef<typeof ShadcnToastAction>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnToastAction>>
>((props, ref) => <ShadcnToastAction ref={ref} {...stripStyleProps(props)} />);
ToastAction.displayName = "ToastAction";

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
export type { ToastActionElement };

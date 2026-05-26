import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const ToastProvider = ToastPrimitives.Provider;

export const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>>
>((props, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
    {...stripStyleProps(props)}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>> &
    VariantProps<typeof toastVariants>
>(({ variant, ...props }, ref) => (
  <ToastPrimitives.Root
    ref={ref}
    className={toastVariants({ variant })}
    {...stripStyleProps(props)}
  />
));
Toast.displayName = ToastPrimitives.Root.displayName;

export const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>>
>((props, ref) => (
  <ToastPrimitives.Title ref={ref} className="text-sm font-semibold" {...stripStyleProps(props)} />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

export const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>>
>((props, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className="text-sm opacity-90"
    {...stripStyleProps(props)}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

export const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>>
>((props, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none group-hover:opacity-100"
    toast-close=""
    {...stripStyleProps(props)}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";
import { buttonVariants } from "./button";

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogPortal = AlertDialogPrimitive.Portal;

export const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  LockedProps<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>>
>((props, ref) => (
  <AlertDialogPrimitive.Overlay
    ref={ref}
    className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out"
    {...stripStyleProps(props)}
  />
));
AlertDialogOverlay.displayName = "AlertDialogOverlay";

export const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  LockedProps<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>>
>((props, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg"
      {...stripStyleProps(props)}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = "AlertDialogContent";

export const AlertDialogHeader = (
  props: LockedProps<React.HTMLAttributes<HTMLDivElement>>,
) => <div className="flex flex-col space-y-2 text-center sm:text-left" {...stripStyleProps(props)} />;

export const AlertDialogFooter = (
  props: LockedProps<React.HTMLAttributes<HTMLDivElement>>,
) => <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2" {...stripStyleProps(props)} />;

export const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  LockedProps<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>>
>((props, ref) => (
  <AlertDialogPrimitive.Title ref={ref} className="text-lg font-semibold" {...stripStyleProps(props)} />
));
AlertDialogTitle.displayName = "AlertDialogTitle";

export const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  LockedProps<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>>
>((props, ref) => (
  <AlertDialogPrimitive.Description ref={ref} className="text-sm text-muted-foreground" {...stripStyleProps(props)} />
));
AlertDialogDescription.displayName = "AlertDialogDescription";

export const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  LockedProps<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>>
>((props, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={buttonVariants()} {...stripStyleProps(props)} />
));
AlertDialogAction.displayName = "AlertDialogAction";

export const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  LockedProps<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>>
>((props, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={buttonVariants({ variant: "outline" }) + " mt-2 sm:mt-0"}
    {...stripStyleProps(props)}
  />
));
AlertDialogCancel.displayName = "AlertDialogCancel";

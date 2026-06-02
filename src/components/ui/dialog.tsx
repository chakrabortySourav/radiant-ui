/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/dialog.tsx`.
 */
import * as React from "react";
import {
  Dialog as ShadcnDialog,
  DialogTrigger as ShadcnDialogTrigger,
  DialogPortal as ShadcnDialogPortal,
  DialogClose as ShadcnDialogClose,
  DialogOverlay as ShadcnDialogOverlay,
  DialogContent as ShadcnDialogContent,
  DialogHeader as ShadcnDialogHeader,
  DialogFooter as ShadcnDialogFooter,
  DialogTitle as ShadcnDialogTitle,
  DialogDescription as ShadcnDialogDescription,
} from "./_shadcn/dialog";
import { cn } from "@/lib/utils";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const Dialog = ShadcnDialog;
export const DialogTrigger = ShadcnDialogTrigger;
export const DialogPortal = ShadcnDialogPortal;
export const DialogClose = ShadcnDialogClose;

export const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof ShadcnDialogOverlay>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnDialogOverlay>>
>((props, ref) => <ShadcnDialogOverlay ref={ref} {...stripStyleProps(props)} />);
DialogOverlay.displayName = "DialogOverlay";

export type DialogContentSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";

const dialogSizeClasses: Record<DialogContentSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  full: "max-w-[95vw]",
};

export type DialogContentProps = LockedProps<
  React.ComponentPropsWithoutRef<typeof ShadcnDialogContent>
> & {
  size?: DialogContentSize;
};

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof ShadcnDialogContent>,
  DialogContentProps
>(({ size = "lg", ...props }, ref) => (
  <ShadcnDialogContent
    ref={ref}
    className={cn(dialogSizeClasses[size])}
    {...stripStyleProps(props)}
  />
));
DialogContent.displayName = "DialogContent";

export const DialogHeader = (
  props: LockedProps<React.HTMLAttributes<HTMLDivElement>>,
) => <ShadcnDialogHeader {...stripStyleProps(props)} />;
DialogHeader.displayName = "DialogHeader";

export const DialogFooter = (
  props: LockedProps<React.HTMLAttributes<HTMLDivElement>>,
) => <ShadcnDialogFooter {...stripStyleProps(props)} />;
DialogFooter.displayName = "DialogFooter";

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof ShadcnDialogTitle>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnDialogTitle>>
>((props, ref) => <ShadcnDialogTitle ref={ref} {...stripStyleProps(props)} />);
DialogTitle.displayName = "DialogTitle";

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof ShadcnDialogDescription>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnDialogDescription>>
>((props, ref) => <ShadcnDialogDescription ref={ref} {...stripStyleProps(props)} />);
DialogDescription.displayName = "DialogDescription";

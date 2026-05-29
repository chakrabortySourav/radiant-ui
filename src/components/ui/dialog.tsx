import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogPortal = DialogPrimitive.Portal;
export const DialogClose = DialogPrimitive.Close;

export const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  LockedProps<React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>
>((props, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    {...stripStyleProps(props)}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

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
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
> & {
  size?: DialogContentSize;
};

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ children, size = "lg", ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={`fixed left-[50%] top-[50%] z-50 grid w-full ${dialogSizeClasses[size]} translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg`}
      {...stripStyleProps(props)}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

export const DialogHeader = (
  props: LockedProps<React.HTMLAttributes<HTMLDivElement>>,
) => (
  <div
    className="flex flex-col space-y-1.5 text-center sm:text-left"
    {...stripStyleProps(props)}
  />
);
DialogHeader.displayName = "DialogHeader";

export const DialogFooter = (
  props: LockedProps<React.HTMLAttributes<HTMLDivElement>>,
) => (
  <div
    className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"
    {...stripStyleProps(props)}
  />
);
DialogFooter.displayName = "DialogFooter";

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  LockedProps<React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>
>((props, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className="text-lg font-semibold leading-none tracking-tight"
    {...stripStyleProps(props)}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  LockedProps<React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>
>((props, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className="text-sm text-muted-foreground"
    {...stripStyleProps(props)}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

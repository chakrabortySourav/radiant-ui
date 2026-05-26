import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const Sheet = SheetPrimitive.Root;
export const SheetTrigger = SheetPrimitive.Trigger;
export const SheetClose = SheetPrimitive.Close;
export const SheetPortal = SheetPrimitive.Portal;

export const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  LockedProps<React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>>
>((props, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className="fixed inset-0 z-50 bg-black/80"
    {...stripStyleProps(props)}
  />
));
SheetOverlay.displayName = "SheetOverlay";

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b",
        bottom: "inset-x-0 bottom-0 border-t",
        left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
      },
    },
    defaultVariants: { side: "right" },
  },
);

export interface SheetContentProps
  extends LockedProps<React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>>,
    VariantProps<typeof sheetVariants> {}

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={sheetVariants({ side })}
      {...stripStyleProps(props)}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = "SheetContent";

export const SheetHeader = (props: LockedProps<React.HTMLAttributes<HTMLDivElement>>) => (
  <div className="flex flex-col space-y-2 text-center sm:text-left" {...stripStyleProps(props)} />
);

export const SheetFooter = (props: LockedProps<React.HTMLAttributes<HTMLDivElement>>) => (
  <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2" {...stripStyleProps(props)} />
);

export const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  LockedProps<React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>>
>((props, ref) => (
  <SheetPrimitive.Title ref={ref} className="text-lg font-semibold text-foreground" {...stripStyleProps(props)} />
));
SheetTitle.displayName = "SheetTitle";

export const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  LockedProps<React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>>
>((props, ref) => (
  <SheetPrimitive.Description ref={ref} className="text-sm text-muted-foreground" {...stripStyleProps(props)} />
));
SheetDescription.displayName = "SheetDescription";

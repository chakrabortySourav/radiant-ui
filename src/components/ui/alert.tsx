import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export const Alert = React.forwardRef<
  HTMLDivElement,
  LockedProps<React.HTMLAttributes<HTMLDivElement>> & VariantProps<typeof alertVariants>
>(({ variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={alertVariants({ variant })} {...stripStyleProps(props)} />
));
Alert.displayName = "Alert";

export const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  LockedProps<React.HTMLAttributes<HTMLHeadingElement>>
>((props, ref) => (
  <h5 ref={ref} className="mb-1 font-medium leading-none tracking-tight" {...stripStyleProps(props)} />
));
AlertTitle.displayName = "AlertTitle";

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  LockedProps<React.HTMLAttributes<HTMLParagraphElement>>
>((props, ref) => (
  <div ref={ref} className="text-sm [&_p]:leading-relaxed" {...stripStyleProps(props)} />
));
AlertDescription.displayName = "AlertDescription";

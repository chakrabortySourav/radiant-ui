import * as React from "react";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

type DivProps = LockedProps<React.HTMLAttributes<HTMLDivElement>>;
type HeadingProps = LockedProps<React.HTMLAttributes<HTMLHeadingElement>>;
type ParaProps = LockedProps<React.HTMLAttributes<HTMLParagraphElement>>;

export const Card = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <div
    ref={ref}
    className="rounded-lg border bg-card text-card-foreground shadow-sm"
    {...stripStyleProps(props)}
  />
));
Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <div ref={ref} className="flex flex-col space-y-1.5 p-6" {...stripStyleProps(props)} />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => (
  <h3
    ref={ref}
    className="text-2xl font-semibold leading-none tracking-tight"
    {...stripStyleProps(props)}
  />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<HTMLParagraphElement, ParaProps>((props, ref) => (
  <p ref={ref} className="text-sm text-muted-foreground" {...stripStyleProps(props)} />
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <div ref={ref} className="p-6 pt-0" {...stripStyleProps(props)} />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <div ref={ref} className="flex items-center p-6 pt-0" {...stripStyleProps(props)} />
));
CardFooter.displayName = "CardFooter";

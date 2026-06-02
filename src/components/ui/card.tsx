/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/card.tsx`.
 */
import * as React from "react";
import {
  Card as ShadcnCard,
  CardHeader as ShadcnCardHeader,
  CardTitle as ShadcnCardTitle,
  CardDescription as ShadcnCardDescription,
  CardContent as ShadcnCardContent,
  CardFooter as ShadcnCardFooter,
} from "./_shadcn/card";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

type DivProps = LockedProps<React.HTMLAttributes<HTMLDivElement>>;
type HeadingProps = LockedProps<React.HTMLAttributes<HTMLHeadingElement>>;
type ParaProps = LockedProps<React.HTMLAttributes<HTMLParagraphElement>>;

export const Card = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <ShadcnCard ref={ref} {...stripStyleProps(props)} />
));
Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <ShadcnCardHeader ref={ref} {...stripStyleProps(props)} />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => (
  <ShadcnCardTitle ref={ref} {...stripStyleProps(props)} />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<HTMLParagraphElement, ParaProps>((props, ref) => (
  <ShadcnCardDescription ref={ref} {...stripStyleProps(props)} />
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <ShadcnCardContent ref={ref} {...stripStyleProps(props)} />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <ShadcnCardFooter ref={ref} {...stripStyleProps(props)} />
));
CardFooter.displayName = "CardFooter";

/* ------------------------------------------------------------------ */
/* MediaCard — design-system-only composite (no shadcn equivalent).    */
/* ------------------------------------------------------------------ */

export const MediaCard = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <div
    ref={ref}
    className="flex items-center gap-3 rounded-xl border bg-card p-2 pr-4 text-card-foreground shadow-sm transition-colors hover:bg-accent/30"
    {...stripStyleProps(props)}
  />
));
MediaCard.displayName = "MediaCard";

export interface MediaCardThumbnailProps
  extends LockedProps<React.ImgHTMLAttributes<HTMLImageElement>> {
  src: string;
  alt?: string;
}

export const MediaCardThumbnail = React.forwardRef<HTMLImageElement, MediaCardThumbnailProps>(
  ({ src, alt = "", ...props }, ref) => (
    <div className="h-12 w-16 shrink-0 overflow-hidden rounded-lg bg-muted">
      <img
        ref={ref}
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
        {...stripStyleProps(props)}
      />
    </div>
  ),
);
MediaCardThumbnail.displayName = "MediaCardThumbnail";

export const MediaCardBody = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <div ref={ref} className="min-w-0 flex-1" {...stripStyleProps(props)} />
));
MediaCardBody.displayName = "MediaCardBody";

export const MediaCardTitle = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <div
    ref={ref}
    className="truncate text-sm font-semibold leading-tight"
    {...stripStyleProps(props)}
  />
));
MediaCardTitle.displayName = "MediaCardTitle";

export const MediaCardMeta = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <div
    ref={ref}
    className="mt-0.5 truncate text-xs text-muted-foreground"
    {...stripStyleProps(props)}
  />
));
MediaCardMeta.displayName = "MediaCardMeta";

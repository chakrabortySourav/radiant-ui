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

/**
 * MediaCard — compact horizontal card with a square thumbnail on the left
 * and a title + meta line on the right. Style is locked.
 */
export interface MediaCardProps
  extends Omit<LockedProps<React.HTMLAttributes<HTMLDivElement>>, "title"> {
  thumbnailSrc: string;
  thumbnailAlt?: string;
  title: React.ReactNode;
  meta?: React.ReactNode;
}

export const MediaCard = React.forwardRef<HTMLDivElement, MediaCardProps>(
  ({ thumbnailSrc, thumbnailAlt = "", title, meta, ...props }, ref) => (
    <div
      ref={ref}
      className="flex items-center gap-3 rounded-xl border bg-card p-2 pr-4 text-card-foreground shadow-sm transition-colors hover:bg-accent/30"
      {...stripStyleProps(props)}
    >
      <div className="h-12 w-16 shrink-0 overflow-hidden rounded-lg bg-muted">
        <img
          src={thumbnailSrc}
          alt={thumbnailAlt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-semibold leading-tight">{title}</div>
        {meta && (
          <div className="mt-0.5 truncate text-xs text-muted-foreground">{meta}</div>
        )}
      </div>
    </div>
  ),
);
MediaCard.displayName = "MediaCard";
CardFooter.displayName = "CardFooter";

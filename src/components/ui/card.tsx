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
/**
 * MediaCard — compact horizontal card with a thumbnail and body area.
 *
 * Composable, like `Card`. Compose it from `MediaCardThumbnail`,
 * `MediaCardBody`, `MediaCardTitle`, and `MediaCardMeta` so consumer apps
 * can customise layout/content per-slot.
 *
 * @example
 * <MediaCard>
 *   <MediaCardThumbnail src={thumb} alt="TechWave Solutions" />
 *   <MediaCardBody>
 *     <MediaCardTitle>TechWave Solutions</MediaCardTitle>
 *     <MediaCardMeta>Updated 2 days ago</MediaCardMeta>
 *   </MediaCardBody>
 * </MediaCard>
 */
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


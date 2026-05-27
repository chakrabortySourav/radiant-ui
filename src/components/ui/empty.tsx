import * as React from "react";
import { cn } from "@/lib/utils";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

/**
 * Shadcn-style `Empty` state block. Use to render a friendly placeholder when
 * a list, search, or page has no content.
 *
 *   <Empty>
 *     <EmptyHeader>
 *       <EmptyMedia variant="icon"><Inbox /></EmptyMedia>
 *       <EmptyTitle>No messages yet</EmptyTitle>
 *       <EmptyDescription>You're all caught up.</EmptyDescription>
 *     </EmptyHeader>
 *     <EmptyContent>
 *       <Button>Compose</Button>
 *     </EmptyContent>
 *   </Empty>
 */
export const Empty = React.forwardRef<
  HTMLDivElement,
  LockedProps<React.HTMLAttributes<HTMLDivElement>>
>((props, ref) => (
  <div
    ref={ref}
    role="status"
    className="flex w-full flex-col items-center justify-center gap-4 rounded-lg border border-dashed bg-background p-8 text-center"
    {...stripStyleProps(props)}
  />
));
Empty.displayName = "Empty";

export const EmptyHeader = React.forwardRef<
  HTMLDivElement,
  LockedProps<React.HTMLAttributes<HTMLDivElement>>
>((props, ref) => (
  <div
    ref={ref}
    className="flex flex-col items-center gap-2"
    {...stripStyleProps(props)}
  />
));
EmptyHeader.displayName = "EmptyHeader";

export type EmptyMediaVariant = "default" | "icon";

export const EmptyMedia = React.forwardRef<
  HTMLDivElement,
  LockedProps<React.HTMLAttributes<HTMLDivElement>> & { variant?: EmptyMediaVariant }
>(({ variant = "default", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mb-2 flex items-center justify-center text-muted-foreground",
      variant === "icon" &&
        "h-12 w-12 rounded-full border bg-muted [&_svg]:h-6 [&_svg]:w-6",
    )}
    {...stripStyleProps(props)}
  />
));
EmptyMedia.displayName = "EmptyMedia";

export const EmptyTitle = React.forwardRef<
  HTMLHeadingElement,
  LockedProps<React.HTMLAttributes<HTMLHeadingElement>>
>((props, ref) => (
  <h3
    ref={ref}
    className="text-base font-semibold text-foreground"
    {...stripStyleProps(props)}
  />
));
EmptyTitle.displayName = "EmptyTitle";

export const EmptyDescription = React.forwardRef<
  HTMLParagraphElement,
  LockedProps<React.HTMLAttributes<HTMLParagraphElement>>
>((props, ref) => (
  <p
    ref={ref}
    className="max-w-sm text-sm text-muted-foreground"
    {...stripStyleProps(props)}
  />
));
EmptyDescription.displayName = "EmptyDescription";

export const EmptyContent = React.forwardRef<
  HTMLDivElement,
  LockedProps<React.HTMLAttributes<HTMLDivElement>>
>((props, ref) => (
  <div
    ref={ref}
    className="flex flex-col items-center gap-2 sm:flex-row"
    {...stripStyleProps(props)}
  />
));
EmptyContent.displayName = "EmptyContent";

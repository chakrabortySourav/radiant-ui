import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  LockedProps<React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>>
>((props, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
    {...stripStyleProps(props)}
  />
));
Avatar.displayName = "Avatar";

export const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  LockedProps<React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>>
>((props, ref) => (
  <AvatarPrimitive.Image ref={ref} className="aspect-square h-full w-full" {...stripStyleProps(props)} />
));
AvatarImage.displayName = "AvatarImage";

export const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  LockedProps<React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>>
>((props, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className="flex h-full w-full items-center justify-center rounded-full bg-muted"
    {...stripStyleProps(props)}
  />
));
AvatarFallback.displayName = "AvatarFallback";

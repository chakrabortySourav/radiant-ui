import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const avatarImageVariants = cva("aspect-square h-full w-full", {
  variants: {
    size: {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-14 w-14",
    },
  },
  defaultVariants: { size: "md" },
});

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

export interface AvatarImageProps
  extends LockedProps<React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>>,
    VariantProps<typeof avatarImageVariants> {}

export const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ size, ...props }, ref) => {
  const safe = stripStyleProps(props);
  const dim = size === "sm" ? 32 : size === "lg" ? 56 : 40;
  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={avatarImageVariants({ size })}
      width={dim}
      height={dim}
      {...safe}
    />
  );
});
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

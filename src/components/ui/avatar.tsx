import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-14 w-14",
      },
    },
    defaultVariants: { size: "md" },
  },
);

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

export interface AvatarProps
  extends LockedProps<React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>>,
    VariantProps<typeof avatarVariants> {}

export const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ size, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={avatarVariants({ size })}
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

function getInitials(name?: string): string {
  if (!name) return "";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export interface UserAvatarProps
  extends LockedProps<React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  name?: string;
  alt?: string;
}

export const UserAvatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  UserAvatarProps
>(({ size, src, name, alt, ...props }, ref) => {
  const initials = getInitials(name);
  const safe = stripStyleProps(props);
  return (
    <Avatar ref={ref} size={size} {...safe}>
      {src ? <AvatarImage size={size} src={src} alt={alt ?? name ?? ""} /> : null}
      {initials ? <AvatarFallback>{initials}</AvatarFallback> : null}
    </Avatar>
  );
});
UserAvatar.displayName = "UserAvatar";

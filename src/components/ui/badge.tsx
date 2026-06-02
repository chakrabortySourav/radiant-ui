/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/badge.tsx`.
 */
import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { Badge as ShadcnBadge, badgeVariants } from "./_shadcn/badge";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export { badgeVariants };

type ShadcnBadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean };

export type BadgeProps = LockedProps<ShadcnBadgeProps>;

export function Badge(props: BadgeProps) {
  return <ShadcnBadge {...stripStyleProps(props)} />;
}

/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/badge.tsx`.
 */
import * as React from "react";
import {
  Badge as ShadcnBadge,
  badgeVariants,
  type BadgeProps as ShadcnBadgeProps,
} from "./_shadcn/badge";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export { badgeVariants };

export type BadgeProps = LockedProps<ShadcnBadgeProps>;

export function Badge(props: BadgeProps) {
  return <ShadcnBadge {...stripStyleProps(props)} />;
}

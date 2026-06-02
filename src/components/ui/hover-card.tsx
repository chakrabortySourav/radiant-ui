/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/hover-card.tsx`.
 */
import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import {
  HoverCard as ShadcnHoverCard,
  HoverCardTrigger as ShadcnHoverCardTrigger,
  HoverCardContent as ShadcnHoverCardContent,
} from "./_shadcn/hover-card";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const HoverCard = ShadcnHoverCard;
export const HoverCardTrigger = ShadcnHoverCardTrigger;

export const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  LockedProps<React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>>
>((props, ref) => (
  <ShadcnHoverCardContent ref={ref} {...stripStyleProps(props)} />
));
HoverCardContent.displayName = "HoverCardContent";

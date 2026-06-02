/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/tooltip.tsx`.
 */
import * as React from "react";
import {
  TooltipProvider as ShadcnTooltipProvider,
  Tooltip as ShadcnTooltip,
  TooltipTrigger as ShadcnTooltipTrigger,
  TooltipContent as ShadcnTooltipContent,
} from "./_shadcn/tooltip";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const TooltipProvider = ShadcnTooltipProvider;
export const Tooltip = ShadcnTooltip;
export const TooltipTrigger = ShadcnTooltipTrigger;

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof ShadcnTooltipContent>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnTooltipContent>>
>((props, ref) => <ShadcnTooltipContent ref={ref} {...stripStyleProps(props)} />);
TooltipContent.displayName = "TooltipContent";

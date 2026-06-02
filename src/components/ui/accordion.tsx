/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/accordion.tsx`.
 */
import * as React from "react";
import {
  Accordion as ShadcnAccordion,
  AccordionItem as ShadcnAccordionItem,
  AccordionTrigger as ShadcnAccordionTrigger,
  AccordionContent as ShadcnAccordionContent,
} from "./_shadcn/accordion";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const Accordion = ShadcnAccordion;

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof ShadcnAccordionItem>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnAccordionItem>>
>((props, ref) => <ShadcnAccordionItem ref={ref} {...stripStyleProps(props)} />);
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof ShadcnAccordionTrigger>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnAccordionTrigger>>
>((props, ref) => <ShadcnAccordionTrigger ref={ref} {...stripStyleProps(props)} />);
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof ShadcnAccordionContent>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnAccordionContent>>
>((props, ref) => <ShadcnAccordionContent ref={ref} {...stripStyleProps(props)} />);
AccordionContent.displayName = "AccordionContent";

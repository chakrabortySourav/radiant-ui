/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/calendar.tsx`.
 *
 * DayPicker's props form a discriminated union (mode: single/multiple/range),
 * so we can't apply `Omit<…, "className" | "style">` without breaking the
 * union. We keep the original type and strip `className`/`style` at runtime.
 *
 * Note: shadcn's calendar.tsx does not export a `CalendarProps` type, so we
 * derive it from the component itself. This stays correct across shadcn updates.
 */
import * as React from "react";
import { Calendar as ShadcnCalendar } from "./_shadcn/calendar";
import { stripStyleProps } from "@/lib/locked-props";

export type CalendarProps = React.ComponentProps<typeof ShadcnCalendar>;

export function Calendar(props: CalendarProps) {
  return <ShadcnCalendar {...(stripStyleProps(props as object) as CalendarProps)} />;
}
Calendar.displayName = "Calendar";

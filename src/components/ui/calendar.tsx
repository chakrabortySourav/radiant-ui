/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/calendar.tsx`.
 *
 * DayPicker's props form a discriminated union (mode: single/multiple/range),
 * so we can't apply `Omit<…, "className" | "style">` without breaking the
 * union. We keep the original type and strip `className`/`style` at runtime.
 */
import { Calendar as ShadcnCalendar, type CalendarProps as ShadcnCalendarProps } from "./_shadcn/calendar";
import { stripStyleProps } from "@/lib/locked-props";

export type CalendarProps = ShadcnCalendarProps;

export function Calendar(props: CalendarProps) {
  return <ShadcnCalendar {...(stripStyleProps(props as object) as CalendarProps)} />;
}
Calendar.displayName = "Calendar";

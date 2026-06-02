/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/calendar.tsx`.
 */
import { Calendar as ShadcnCalendar, type CalendarProps as ShadcnCalendarProps } from "./_shadcn/calendar";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export type CalendarProps = LockedProps<ShadcnCalendarProps>;

export function Calendar(props: CalendarProps) {
  return <ShadcnCalendar {...(stripStyleProps(props as object) as ShadcnCalendarProps)} />;
}
Calendar.displayName = "Calendar";

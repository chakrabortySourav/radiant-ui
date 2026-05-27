import * as React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export type CalendarProps = LockedProps<React.ComponentProps<typeof DayPicker>>;

export function Calendar(props: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays
      className="rdp p-3"
      {...(stripStyleProps(props) as React.ComponentProps<typeof DayPicker>)}
    />
  );
}

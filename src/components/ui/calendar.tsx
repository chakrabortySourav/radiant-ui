import * as React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar(props: CalendarProps) {
  return <DayPicker showOutsideDays className="rdp p-3" {...props} />;
}

import * as React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, ...props }: CalendarProps) {
  return <DayPicker showOutsideDays className={cn("rdp p-3", className)} {...props} />;
}
Calendar.displayName = "Calendar";

export { Calendar };

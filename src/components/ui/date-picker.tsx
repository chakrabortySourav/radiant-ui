import * as React from "react";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "@/lib/utils";

type CommonProps = {
  placeholder?: string;
  disabled?: boolean;
  dateFormat?: string;
  align?: "start" | "center" | "end";
};

export interface DatePickerProps extends CommonProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
}

export function DatePicker({
  value,
  onChange,
  placeholder = "Pick a date",
  disabled,
  dateFormat = "PPP",
  align = "start",
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          disabled={disabled}
          className={cn(
            "w-[260px] justify-start text-left font-normal",
            !value && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, dateFormat) : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent align={align} className="w-auto p-0">
        <Calendar mode="single" selected={value} onSelect={onChange} autoFocus />
      </PopoverContent>
    </Popover>
  );
}

export interface DateRangePickerProps extends CommonProps {
  value?: DateRange;
  onChange?: (range: DateRange | undefined) => void;
}

export function DateRangePicker({
  value,
  onChange,
  placeholder = "Pick a date range",
  disabled,
  dateFormat = "LLL dd, y",
  align = "start",
}: DateRangePickerProps) {
  const label = value?.from
    ? value.to
      ? `${format(value.from, dateFormat)} – ${format(value.to, dateFormat)}`
      : format(value.from, dateFormat)
    : placeholder;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          disabled={disabled}
          className={cn(
            "w-[300px] justify-start text-left font-normal",
            !value?.from && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {label}
        </Button>
      </PopoverTrigger>
      <PopoverContent align={align} className="w-auto p-0">
        <Calendar
          mode="range"
          selected={value}
          onSelect={onChange}
          numberOfMonths={2}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export interface DateMultiPickerProps extends CommonProps {
  value?: Date[];
  onChange?: (dates: Date[] | undefined) => void;
  max?: number;
}

export function DateMultiPicker({
  value,
  onChange,
  placeholder = "Pick dates",
  disabled,
  dateFormat = "MMM d",
  align = "start",
  max,
}: DateMultiPickerProps) {
  const label =
    value && value.length > 0
      ? value.length <= 2
        ? value.map((d) => format(d, dateFormat)).join(", ")
        : `${value.length} dates selected`
      : placeholder;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          disabled={disabled}
          className={cn(
            "w-[260px] justify-start text-left font-normal",
            (!value || value.length === 0) && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {label}
        </Button>
      </PopoverTrigger>
      <PopoverContent align={align} className="w-auto p-0">
        <Calendar mode="multiple" selected={value} onSelect={onChange} max={max} autoFocus />
      </PopoverContent>
    </Popover>
  );
}

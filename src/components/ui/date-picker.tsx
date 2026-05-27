import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import { Calendar as CalendarIcon } from "lucide-react";
import { buttonVariants } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverTrigger } from "./popover";
import { cn } from "@/lib/utils";

export { addDays } from "date-fns";
export type { DateRange } from "react-day-picker";

type CommonProps = {
  placeholder?: string;
  disabled?: boolean;
  dateFormat?: string;
  align?: "start" | "center" | "end";
};

function CalendarPopoverContent({
  align = "start",
  children,
}: {
  align?: "start" | "center" | "end";
  children: React.ReactNode;
}) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        sideOffset={4}
        className="z-50 w-auto rounded-md border bg-popover p-0 text-popover-foreground shadow-md outline-none"
      >
        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
}

function TriggerButton({
  disabled,
  placeholder,
  label,
  hasValue,
  width,
}: {
  disabled?: boolean;
  placeholder: string;
  label: React.ReactNode;
  hasValue: boolean;
  width: string;
}) {
  return (
    <PopoverTrigger asChild>
      <button
        type="button"
        disabled={disabled}
        className={cn(
          buttonVariants({ variant: "outline" }),
          width,
          "justify-start text-left font-normal",
          !hasValue && "text-muted-foreground",
        )}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {hasValue ? label : placeholder}
      </button>
    </PopoverTrigger>
  );
}

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
      <TriggerButton
        disabled={disabled}
        placeholder={placeholder}
        hasValue={!!value}
        label={value ? format(value, dateFormat) : ""}
        width="w-[260px]"
      />
      <CalendarPopoverContent align={align}>
        <Calendar mode="single" selected={value} onSelect={onChange} autoFocus />
      </CalendarPopoverContent>
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
    : "";

  return (
    <Popover>
      <TriggerButton
        disabled={disabled}
        placeholder={placeholder}
        hasValue={!!value?.from}
        label={label}
        width="w-[300px]"
      />
      <CalendarPopoverContent align={align}>
        <Calendar
          mode="range"
          selected={value}
          onSelect={onChange}
          numberOfMonths={2}
          autoFocus
        />
      </CalendarPopoverContent>
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
      : "";

  return (
    <Popover>
      <TriggerButton
        disabled={disabled}
        placeholder={placeholder}
        hasValue={!!value && value.length > 0}
        label={label}
        width="w-[260px]"
      />
      <CalendarPopoverContent align={align}>
        <Calendar mode="multiple" selected={value} onSelect={onChange} max={max} autoFocus />
      </CalendarPopoverContent>
    </Popover>
  );
}

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";
import { cn } from "@/lib/utils";

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  LockedProps<React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>>
>((props, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
    {...stripStyleProps(props)}
  >
    <SwitchPrimitive.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
  </SwitchPrimitive.Root>
));
Switch.displayName = "Switch";

/* ------------------------------------------------------------------ */
/* SegmentedSwitch — pill with two options and a sliding thumb behind */
/* the active one. Supports icon-only, text-only, and icon+text.      */
/* ------------------------------------------------------------------ */

export type SegmentedOption = {
  value: string;
  label?: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export interface SegmentedSwitchProps {
  options: [SegmentedOption, SegmentedOption];
  value: string;
  onChange: (value: string) => void;
  size?: "sm" | "md";
  "aria-label"?: string;
}

export const SegmentedSwitch = React.forwardRef<HTMLDivElement, SegmentedSwitchProps>(
  ({ options, value, onChange, size = "md", ...rest }, ref) => {
    const active: "left" | "right" = value === options[0].value ? "left" : "right";
    const pad = size === "sm" ? "p-0.5" : "p-1";
    const itemPad = size === "sm" ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5 text-sm";
    return (
      <div
        ref={ref}
        role="radiogroup"
        aria-label={rest["aria-label"]}
        className={cn("relative inline-flex items-center rounded-full bg-muted", pad)}
      >
        <span
          aria-hidden
          className="absolute top-1 bottom-1 rounded-full bg-background shadow-sm transition-all duration-200"
          style={{
            left: active === "left" ? 4 : "50%",
            right: active === "right" ? 4 : "50%",
          }}
        />
        {options.map((opt) => {
          const Icon = opt.icon;
          const isActive = opt.value === value;
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => onChange(opt.value)}
              className={cn(
                "relative z-10 inline-flex items-center justify-center gap-1.5 rounded-full font-medium transition-colors",
                itemPad,
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {Icon ? <Icon className="h-4 w-4" /> : null}
              {opt.label ? <span>{opt.label}</span> : null}
            </button>
          );
        })}
      </div>
    );
  },
);
SegmentedSwitch.displayName = "SegmentedSwitch";

/** Design-system wrapper. Raw shadcn lives in `./_shadcn/switch.tsx`. */
import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { Switch as ShadcnSwitch } from "./_shadcn/switch";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";
import { cn } from "@/lib/utils";

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  LockedProps<React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>>
>((props, ref) => <ShadcnSwitch ref={ref} {...stripStyleProps(props)} />);
Switch.displayName = "Switch";

/* ------------------------------------------------------------------ */
/* SegmentedSwitch — pill with two options and a sliding thumb behind */
/* the active one. Supports icon-only, text-only, and icon+text.      */
/* ------------------------------------------------------------------ */

export type SegmentedOption = {
  value: string;
  label?: string;
  icon?: React.ComponentType<any> | React.ForwardRefExoticComponent<any>;
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

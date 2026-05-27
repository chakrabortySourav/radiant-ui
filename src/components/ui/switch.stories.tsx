import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Grid3x3, List } from "lucide-react";
import { Switch } from "./switch";
import { cn } from "@/lib/utils";

const meta: Meta<typeof Switch> = { title: "UI/Switch", component: Switch };
export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = { render: () => <Switch /> };
export const Checked: Story = { render: () => <Switch defaultChecked /> };

/* ------------------------------------------------------------------ */
/* Segmented switch — pill with two options, sliding thumb behind the */
/* active one. Supports icon-only, text-only, and icon+text content.  */
/* ------------------------------------------------------------------ */

type Side = "left" | "right";
type SegmentedOption = {
  value: string;
  label?: string;
  icon?: React.ComponentType<{ className?: string }>;
};

function SegmentedSwitch({
  options,
  value,
  onChange,
  size = "md",
}: {
  options: [SegmentedOption, SegmentedOption];
  value: string;
  onChange: (v: string) => void;
  size?: "sm" | "md";
}) {
  const active: Side = value === options[0].value ? "left" : "right";
  const pad = size === "sm" ? "p-0.5" : "p-1";
  const itemPad = size === "sm" ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5 text-sm";
  return (
    <div
      role="radiogroup"
      className={cn(
        "relative inline-flex items-center rounded-full bg-muted",
        pad,
      )}
    >
      {/* sliding thumb */}
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
              isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {Icon ? <Icon className="h-4 w-4" /> : null}
            {opt.label ? <span>{opt.label}</span> : null}
          </button>
        );
      })}
    </div>
  );
}

/** Segmented switch with icons only (e.g. grid / list view toggle). */
export const SegmentedIcon: Story = {
  render: function Render() {
    const [view, setView] = React.useState("grid");
    return (
      <SegmentedSwitch
        value={view}
        onChange={setView}
        options={[
          { value: "grid", icon: Grid3x3 },
          { value: "list", icon: List },
        ]}
      />
    );
  },
};

/** Segmented switch with text labels only (e.g. date range). */
export const SegmentedText: Story = {
  render: function Render() {
    const [range, setRange] = React.useState("30");
    return (
      <SegmentedSwitch
        value={range}
        onChange={setRange}
        options={[
          { value: "7", label: "7 Days" },
          { value: "30", label: "30 Days" },
        ]}
      />
    );
  },
};

/** Segmented switch with both icon and text. */
export const SegmentedIconText: Story = {
  render: function Render() {
    const [view, setView] = React.useState("grid");
    return (
      <SegmentedSwitch
        value={view}
        onChange={setView}
        options={[
          { value: "grid", label: "Grid", icon: Grid3x3 },
          { value: "list", label: "List", icon: List },
        ]}
      />
    );
  },
};

import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Grid3x3, List } from "lucide-react";
import { Switch, SegmentedSwitch } from "./switch";

const meta: Meta<typeof Switch> = { title: "UI/Switch", component: Switch };
export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = { render: () => <Switch /> };
export const Checked: Story = { render: () => <Switch defaultChecked /> };

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
  parameters: {
    docs: {
      source: {
        code: `<SegmentedSwitch
  value={view}
  onChange={setView}
  options={[
    { value: "grid", icon: Grid3x3 },
    { value: "list", icon: List },
  ]}
/>`,
      },
    },
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
  parameters: {
    docs: {
      source: {
        code: `<SegmentedSwitch
  value={range}
  onChange={setRange}
  options={[
    { value: "7", label: "7 Days" },
    { value: "30", label: "30 Days" },
  ]}
/>`,
      },
    },
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
  parameters: {
    docs: {
      source: {
        code: `<SegmentedSwitch
  value={view}
  onChange={setView}
  options={[
    { value: "grid", label: "Grid", icon: Grid3x3 },
    { value: "list", label: "List", icon: List },
  ]}
/>`,
      },
    },
  },
};

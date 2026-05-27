import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Bell, BellOff, Moon, Sun, Wifi, WifiOff } from "lucide-react";
import { Switch } from "./switch";
import { Label } from "./label";

const meta: Meta<typeof Switch> = { title: "UI/Switch", component: Switch };
export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = { render: () => <Switch /> };
export const Checked: Story = { render: () => <Switch defaultChecked /> };

/** Switch with a text label next to it. */
export const WithText: Story = {
  render: function Render() {
    const [on, setOn] = React.useState(true);
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Switch id="airplane" checked={on} onCheckedChange={setOn} />
        <Label htmlFor="airplane">Airplane mode</Label>
      </div>
    );
  },
};

/** Switch flanked by icons that reflect the current state (sun / moon). */
export const WithIcon: Story = {
  render: function Render() {
    const [dark, setDark] = React.useState(false);
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Sun
          style={{ height: 16, width: 16, opacity: dark ? 0.4 : 1, transition: "opacity 150ms" }}
        />
        <Switch checked={dark} onCheckedChange={setDark} aria-label="Toggle dark mode" />
        <Moon
          style={{ height: 16, width: 16, opacity: dark ? 1 : 0.4, transition: "opacity 150ms" }}
        />
      </div>
    );
  },
};

/** Switch with both an icon and a text label that update with state. */
export const WithIconAndText: Story = {
  render: function Render() {
    const [notify, setNotify] = React.useState(true);
    const [wifi, setWifi] = React.useState(true);
    return (
      <div style={{ display: "grid", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Switch id="notify" checked={notify} onCheckedChange={setNotify} />
          {notify ? (
            <Bell style={{ height: 16, width: 16 }} />
          ) : (
            <BellOff style={{ height: 16, width: 16, opacity: 0.6 }} />
          )}
          <Label htmlFor="notify">{notify ? "Notifications on" : "Notifications off"}</Label>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Switch id="wifi" checked={wifi} onCheckedChange={setWifi} />
          {wifi ? (
            <Wifi style={{ height: 16, width: 16 }} />
          ) : (
            <WifiOff style={{ height: 16, width: 16, opacity: 0.6 }} />
          )}
          <Label htmlFor="wifi">{wifi ? "Wi-Fi connected" : "Wi-Fi off"}</Label>
        </div>
      </div>
    );
  },
};

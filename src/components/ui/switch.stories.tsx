import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";

const meta: Meta<typeof Switch> = { title: "UI/Switch", component: Switch };
export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = { render: () => <Switch /> };
export const Checked: Story = { render: () => <Switch defaultChecked /> };

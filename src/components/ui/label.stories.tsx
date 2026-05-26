import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";
import { Input } from "./input";

const meta: Meta<typeof Label> = { title: "UI/Label", component: Label };
export default meta;
type Story = StoryObj<typeof Label>;

export const Basic: Story = {
  render: () => (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="you@example.com" />
    </div>
  ),
};

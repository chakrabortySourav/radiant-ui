import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";

const meta: Meta<typeof Separator> = { title: "UI/Separator", component: Separator };
export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: 240 }}>
      <div>Above</div>
      <Separator />
      <div>Below</div>
    </div>
  ),
};

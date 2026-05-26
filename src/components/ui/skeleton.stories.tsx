import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./skeleton";

const meta: Meta<typeof Skeleton> = { title: "UI/Skeleton", component: Skeleton };
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Basic: Story = {
  render: () => (
    <div style={{ width: 240, display: "flex", flexDirection: "column", gap: 8 }}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  ),
};

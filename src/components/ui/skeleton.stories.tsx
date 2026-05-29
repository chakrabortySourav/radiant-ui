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

export const Sizes: Story = {
  render: () => (
    <div style={{ width: 240, display: "flex", flexDirection: "column", gap: 8 }}>
      <Skeleton size="xs" />
      <Skeleton size="sm" />
      <Skeleton size="md" />
      <Skeleton size="lg" />
      <Skeleton size="xl" />
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div style={{ width: 240, display: "flex", flexDirection: "column", gap: 8 }}>
      <Skeleton radius="none" />
      <Skeleton radius="sm" />
      <Skeleton radius="md" />
      <Skeleton radius="lg" />
      <Skeleton radius="full" size="lg" />
    </div>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import { Bold, Italic, Underline } from "lucide-react";
import { Toggle } from "./toggle";

const meta: Meta<typeof Toggle> = { title: "UI/Toggle", component: Toggle };
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Basic: Story = {
  render: () => (
    <Toggle aria-label="Bold">
      <Bold style={{ height: 16, width: 16 }} />
    </Toggle>
  ),
};

export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="Bold">
      <Bold style={{ height: 16, width: 16 }} />
    </Toggle>
  ),
};

/** Toggle showing only an icon. */
export const WithIcon: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <Toggle aria-label="Bold">
        <Bold style={{ height: 16, width: 16 }} />
      </Toggle>
      <Toggle aria-label="Italic">
        <Italic style={{ height: 16, width: 16 }} />
      </Toggle>
      <Toggle aria-label="Underline">
        <Underline style={{ height: 16, width: 16 }} />
      </Toggle>
    </div>
  ),
};

/** Toggle showing only text. */
export const WithText: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <Toggle aria-label="Bold">Bold</Toggle>
      <Toggle variant="outline" aria-label="Italic">
        Italic
      </Toggle>
    </div>
  ),
};

/** Toggle showing icon + text. */
export const WithIconAndText: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <Toggle aria-label="Bold">
        <Bold style={{ height: 16, width: 16, marginRight: 6 }} /> Bold
      </Toggle>
      <Toggle variant="outline" aria-label="Italic">
        <Italic style={{ height: 16, width: 16, marginRight: 6 }} /> Italic
      </Toggle>
      <Toggle variant="outline" aria-label="Underline">
        <Underline style={{ height: 16, width: 16, marginRight: 6 }} /> Underline
      </Toggle>
    </div>
  ),
};

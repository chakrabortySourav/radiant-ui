import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "./aspect-ratio";

const meta: Meta<typeof AspectRatio> = { title: "UI/AspectRatio", component: AspectRatio };
export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Basic: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <AspectRatio ratio={16 / 9}>
        <div style={{ width: "100%", height: "100%", background: "#888", borderRadius: 8 }} />
      </AspectRatio>
    </div>
  ),
};

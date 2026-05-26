import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "./scroll-area";

const meta: Meta<typeof ScrollArea> = { title: "UI/ScrollArea", component: ScrollArea };
export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Basic: Story = {
  render: () => (
    <div style={{ height: 200, width: 300, border: "1px solid #ccc", borderRadius: 6 }}>
      <ScrollArea>
        <div style={{ padding: 16 }}>
          {Array.from({ length: 50 }).map((_, i) => (<div key={i}>Item {i + 1}</div>))}
        </div>
      </ScrollArea>
    </div>
  ),
};

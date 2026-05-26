import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";
import { Button } from "./button";

const meta: Meta<typeof Popover> = { title: "UI/Popover", component: Popover };
export default meta;
type Story = StoryObj<typeof Popover>;

export const Basic: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild><Button variant="outline">Open</Button></PopoverTrigger>
      <PopoverContent>Place content inside a popover.</PopoverContent>
    </Popover>
  ),
};

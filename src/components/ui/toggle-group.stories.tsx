import type { Meta, StoryObj } from "@storybook/react";
import { Bold, Italic, Underline } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

const meta: Meta<typeof ToggleGroup> = { title: "UI/ToggleGroup", component: ToggleGroup };
export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Basic: Story = {
  render: () => (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold"><Bold className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="italic"><Italic className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="underline"><Underline className="h-4 w-4" /></ToggleGroupItem>
    </ToggleGroup>
  ),
};

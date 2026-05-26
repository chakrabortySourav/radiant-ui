import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./select";

const meta: Meta<typeof Select> = { title: "UI/Select", component: Select };
export default meta;
type Story = StoryObj<typeof Select>;

export const Basic: Story = {
  render: () => (
    <div style={{ width: 240 }}>
      <Select>
        <SelectTrigger><SelectValue placeholder="Pick a fruit" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

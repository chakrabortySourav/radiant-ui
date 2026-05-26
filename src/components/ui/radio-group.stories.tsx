import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "./label";

const meta: Meta<typeof RadioGroup> = { title: "UI/RadioGroup", component: RadioGroup };
export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Basic: Story = {
  render: () => (
    <RadioGroup defaultValue="a">
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}><RadioGroupItem value="a" id="a" /><Label htmlFor="a">Option A</Label></div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}><RadioGroupItem value="b" id="b" /><Label htmlFor="b">Option B</Label></div>
    </RadioGroup>
  ),
};

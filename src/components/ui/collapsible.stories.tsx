import type { Meta, StoryObj } from "@storybook/react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./collapsible";
import { Button } from "./button";

const meta: Meta<typeof Collapsible> = { title: "UI/Collapsible", component: Collapsible };
export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Basic: Story = {
  render: () => (
    <Collapsible>
      <CollapsibleTrigger asChild><Button variant="outline">Toggle</Button></CollapsibleTrigger>
      <CollapsibleContent>Hidden content revealed.</CollapsibleContent>
    </Collapsible>
  ),
};

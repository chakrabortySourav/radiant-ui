import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion";

const meta: Meta<typeof Accordion> = { title: "UI/Accordion", component: Accordion };
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="a"><AccordionTrigger>Section 1</AccordionTrigger><AccordionContent>Content 1</AccordionContent></AccordionItem>
      <AccordionItem value="b"><AccordionTrigger>Section 2</AccordionTrigger><AccordionContent>Content 2</AccordionContent></AccordionItem>
    </Accordion>
  ),
};

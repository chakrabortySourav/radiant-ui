import type { Meta, StoryObj } from "@storybook/react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./hover-card";
import { Button } from "./button";

const meta: Meta<typeof HoverCard> = { title: "UI/HoverCard", component: HoverCard };
export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Basic: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild><Button variant="link">@username</Button></HoverCardTrigger>
      <HoverCardContent>The React framework — created and maintained by @username.</HoverCardContent>
    </HoverCard>
  ),
};

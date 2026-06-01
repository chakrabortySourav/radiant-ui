import type { Meta, StoryObj } from "@storybook/react";
import { Inbox } from "lucide-react";
import { Spinner, EmptyState } from "./spinner";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Spinner> = { title: "Feedback/Spinner", component: Spinner };
export default meta;
type Story = StoryObj<typeof Spinner>;

export const Basic: Story = { render: () => <Spinner /> };

export const Empty: StoryObj = {
  name: "EmptyState",
  render: () => (
    <EmptyState
      icon={<Inbox className="h-8 w-8" />}
      title="No messages yet"
      description="When you receive messages, they'll show up here."
      action={<Button size="sm">Compose</Button>}
    />
  ),
};

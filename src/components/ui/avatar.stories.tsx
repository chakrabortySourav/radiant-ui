import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback, UserAvatar } from "./avatar";

const meta: Meta<typeof Avatar> = { title: "UI/Avatar", component: Avatar };
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="user" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const FallbackOnly: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarImage size="sm" src="https://github.com/shadcn.png" alt="user" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage size="md" src="https://github.com/shadcn.png" alt="user" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage size="lg" src="https://github.com/shadcn.png" alt="user" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  ),
};

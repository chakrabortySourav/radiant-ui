import type { Meta, StoryObj } from "@storybook/react";
import { Bold } from "lucide-react";
import { Toggle } from "./toggle";

const meta: Meta<typeof Toggle> = { title: "UI/Toggle", component: Toggle };
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Basic: Story = { render: () => (<Toggle aria-label="Bold"><Bold className="h-4 w-4" /></Toggle>) };
export const Outline: Story = { render: () => (<Toggle variant="outline" aria-label="Bold"><Bold className="h-4 w-4" /></Toggle>) };

import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "./form-field";

const meta: Meta<typeof FormField> = { title: "Forms/FormField", component: FormField };
export default meta;
type Story = StoryObj<typeof FormField>;

export const Basic: Story = {
  args: { label: "Email", placeholder: "you@example.com", type: "email" },
};

export const WithHint: Story = {
  args: { label: "Username", placeholder: "jane", hint: "3–20 characters, no spaces." },
};

export const WithError: Story = {
  args: {
    label: "Password",
    type: "password",
    defaultValue: "abc",
    error: "Must be at least 8 characters.",
  },
};

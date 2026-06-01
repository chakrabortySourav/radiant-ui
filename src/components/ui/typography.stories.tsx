import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./typography";

const meta: Meta<typeof Typography> = {
  title: "UI/Typography",
  component: Typography,
};
export default meta;
type Story = StoryObj<typeof Typography>;

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Heading 1 — The quick brown fox</Typography>
      <Typography variant="h2">Heading 2 — The quick brown fox</Typography>
      <Typography variant="h3">Heading 3 — The quick brown fox</Typography>
      <Typography variant="h4">Heading 4 — The quick brown fox</Typography>
      <Typography variant="p">
        Paragraph — The quick brown fox jumps over the lazy dog. This is a standard
        paragraph with default leading and spacing.
      </Typography>
      <Typography variant="blockquote">
        Blockquote — Design is not just what it looks like and feels like. Design is how it works.
      </Typography>
      <Typography variant="lead">
        Lead — A short introductory paragraph that sets the tone for the content below.
      </Typography>
      <Typography variant="large">Large — Prominent body text for emphasis.</Typography>
      <Typography variant="small">Small — Fine-print or caption-sized text.</Typography>
      <Typography variant="muted">
        Muted — Secondary or de-emphasized text for descriptions.
      </Typography>
    </div>
  ),
};

export const H1: Story = { render: () => <Typography variant="h1">Heading 1</Typography> };
export const H2: Story = { render: () => <Typography variant="h2">Heading 2</Typography> };
export const H3: Story = { render: () => <Typography variant="h3">Heading 3</Typography> };
export const H4: Story = { render: () => <Typography variant="h4">Heading 4</Typography> };
export const Paragraph: Story = { render: () => <Typography variant="p">Paragraph text</Typography> };
export const Blockquote: Story = {
  render: () => <Typography variant="blockquote">A quoted statement.</Typography>,
};
export const Lead: Story = {
  render: () => <Typography variant="lead">Lead paragraph text.</Typography>,
};
export const Large: Story = { render: () => <Typography variant="large">Large text</Typography> };
export const Small: Story = { render: () => <Typography variant="small">Small text</Typography> };
export const Muted: Story = {
  render: () => <Typography variant="muted">Muted description text.</Typography>,
};

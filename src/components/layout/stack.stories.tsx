import type { Meta, StoryObj } from "@storybook/react";
import { Container, Stack } from "./stack";

const meta: Meta = { title: "Layout/Stack & Container" };
export default meta;
type Story = StoryObj;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-md border bg-muted px-3 py-2 text-sm">{children}</div>
);

export const StackColumn: Story = {
  render: () => (
    <Stack gap={3}>
      <Box>First</Box>
      <Box>Second</Box>
      <Box>Third</Box>
    </Stack>
  ),
};

export const StackRow: Story = {
  render: () => (
    <Stack direction="row" gap={2} align="center" justify="between">
      <Box>Left</Box>
      <Box>Middle</Box>
      <Box>Right</Box>
    </Stack>
  ),
};

export const ContainerSizes: Story = {
  render: () => (
    <Stack gap={4}>
      {(["sm", "md", "lg", "xl", "full"] as const).map((s) => (
        <Container key={s} size={s}>
          <Box>Container size: {s}</Box>
        </Container>
      ))}
    </Stack>
  ),
};

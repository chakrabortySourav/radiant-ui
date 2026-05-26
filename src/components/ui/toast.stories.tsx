import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ToastProvider, Toast, ToastTitle, ToastDescription, ToastViewport, ToastClose } from "./toast";
import { Button } from "./button";

const meta: Meta<typeof Toast> = { title: "UI/Toast", component: Toast };
export default meta;
type Story = StoryObj<typeof Toast>;

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <ToastProvider>
        <Button onClick={() => setOpen(true)}>Show toast</Button>
        <Toast open={open} onOpenChange={setOpen}>
          <div>
            <ToastTitle>Scheduled</ToastTitle>
            <ToastDescription>Friday, February 10 at 5:57 PM</ToastDescription>
          </div>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    );
  },
};

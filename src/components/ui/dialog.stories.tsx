import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./dialog";
import { Button } from "./button";

const meta: Meta<typeof Dialog> = { title: "UI/Dialog", component: Dialog };
export default meta;
type Story = StoryObj<typeof Dialog>;

export const Basic: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader><DialogTitle>Edit profile</DialogTitle><DialogDescription>Make changes to your profile.</DialogDescription></DialogHeader>
        <DialogFooter><Button>Save</Button></DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

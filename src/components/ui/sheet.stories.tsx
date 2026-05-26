import type { Meta, StoryObj } from "@storybook/react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "./sheet";
import { Button } from "./button";

const meta: Meta<typeof Sheet> = { title: "UI/Sheet", component: Sheet };
export default meta;
type Story = StoryObj<typeof Sheet>;

export const Right: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild><Button variant="outline">Open</Button></SheetTrigger>
      <SheetContent>
        <SheetHeader><SheetTitle>Title</SheetTitle><SheetDescription>Slide-in panel content.</SheetDescription></SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};

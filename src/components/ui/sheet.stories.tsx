import type { Meta, StoryObj } from "@storybook/react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "./sheet";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";

const meta: Meta<typeof Sheet> = { title: "UI/Sheet", component: Sheet };
export default meta;
type Story = StoryObj<typeof Sheet>;

export const Right: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild><Button variant="outline">Open right</Button></SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Right sheet</SheetTitle>
          <SheetDescription>Slides in from the right side.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};

export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild><Button variant="outline">Open left</Button></SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Left sheet</SheetTitle>
          <SheetDescription>Slides in from the left side.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};

export const Top: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild><Button variant="outline">Open top</Button></SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Top sheet</SheetTitle>
          <SheetDescription>Slides down from the top.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild><Button variant="outline">Open bottom</Button></SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Bottom sheet</SheetTitle>
          <SheetDescription>Slides up from the bottom.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild><Button>Edit profile</Button></SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes and click save.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Jane Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="jane@example.com" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild><Button variant="outline">Cancel</Button></SheetClose>
          <SheetClose asChild><Button>Save</Button></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const AllSides: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild><Button variant="outline">{side}</Button></SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>{side[0].toUpperCase() + side.slice(1)} sheet</SheetTitle>
              <SheetDescription>Slides in from the {side}.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  ),
};

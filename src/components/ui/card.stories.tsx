import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { Button } from "./button";

const meta: Meta<typeof Card> = { title: "UI/Card", component: Card };
export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: () => (
    <div className="max-w-sm"><Card>
      <CardHeader>
        <CardTitle>Project status</CardTitle>
        <CardDescription>Latest deploy succeeded.</CardDescription>
      </CardHeader>
      <CardContent>All systems operational.</CardContent>
      <CardFooter>
        <Button>View dashboard</Button>
      </CardFooter>
    </Card></div>
  ),
};

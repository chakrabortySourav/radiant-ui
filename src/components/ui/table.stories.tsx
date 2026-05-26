import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "./table";

const meta: Meta<typeof Table> = { title: "UI/Table", component: Table };
export default meta;
type Story = StoryObj<typeof Table>;

export const Basic: Story = {
  render: () => (
    <Table>
      <TableCaption>Recent invoices.</TableCaption>
      <TableHeader><TableRow><TableHead>Invoice</TableHead><TableHead>Status</TableHead><TableHead>Total</TableHead></TableRow></TableHeader>
      <TableBody>
        <TableRow><TableCell>INV001</TableCell><TableCell>Paid</TableCell><TableCell>$250</TableCell></TableRow>
        <TableRow><TableCell>INV002</TableCell><TableCell>Pending</TableCell><TableCell>$150</TableCell></TableRow>
      </TableBody>
    </Table>
  ),
};

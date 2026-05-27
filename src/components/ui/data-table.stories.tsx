import type { Meta, StoryObj } from "@storybook/react";
import { DataTable, badgeCell, type ColumnDef } from "./data-table";
import { Badge } from "./badge";

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const data: Payment[] = [
  { id: "m5gr84i9", amount: 316, status: "success", email: "ken99@yahoo.com" },
  { id: "3u1reuv4", amount: 242, status: "success", email: "abe45@gmail.com" },
  { id: "derv1ws0", amount: 837, status: "processing", email: "monserrat44@gmail.com" },
  { id: "5kma53ae", amount: 874, status: "success", email: "silas22@gmail.com" },
  { id: "bhqecj4p", amount: 721, status: "failed", email: "carmella@hotmail.com" },
  { id: "p4xu8s2k", amount: 145, status: "pending", email: "jane.doe@acme.com" },
  { id: "q8d2n9wq", amount: 512, status: "success", email: "john@acme.com" },
  { id: "x7v3b1nc", amount: 99, status: "processing", email: "lisa@example.com" },
  { id: "h2k9j4ll", amount: 1250, status: "success", email: "mark@example.com" },
  { id: "n0p3w8qa", amount: 60, status: "failed", email: "alex@example.com" },
  { id: "y6c7v8b9", amount: 480, status: "pending", email: "sam@example.com" },
];

const statusVariant: Record<Payment["status"], "default" | "secondary" | "destructive" | "outline"> = {
  success: "default",
  processing: "secondary",
  pending: "outline",
  failed: "destructive",
};

const columns: ColumnDef<Payment>[] = [
  { accessorKey: "email", header: "Email" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={statusVariant[row.original.status]}>{row.original.status}</Badge>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) =>
      new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
        row.original.amount,
      ),
  },
];

const meta: Meta<typeof DataTable<Payment, unknown>> = {
  title: "UI/DataTable",
  component: DataTable,
};
export default meta;
type Story = StoryObj<typeof DataTable<Payment, unknown>>;

// Shared snippets shown in the Docs "Show code" panel. Storybook's auto-source
// serializes inline functions as `() => {}`; providing explicit source.code
// keeps the displayed snippet copy-pastable.
const sharedColumnsSnippet = `type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const data: Payment[] = [
  { id: "m5gr84i9", amount: 316, status: "success", email: "ken99@yahoo.com" },
  { id: "3u1reuv4", amount: 242, status: "success", email: "abe45@gmail.com" },
  { id: "derv1ws0", amount: 837, status: "processing", email: "monserrat44@gmail.com" },
  { id: "5kma53ae", amount: 874, status: "success", email: "silas22@gmail.com" },
  { id: "bhqecj4p", amount: 721, status: "failed", email: "carmella@hotmail.com" },
  { id: "p4xu8s2k", amount: 145, status: "pending", email: "jane.doe@acme.com" },
  { id: "q8d2n9wq", amount: 512, status: "success", email: "john@acme.com" },
  { id: "x7v3b1nc", amount: 99, status: "processing", email: "lisa@example.com" },
  { id: "h2k9j4ll", amount: 1250, status: "success", email: "mark@example.com" },
  { id: "n0p3w8qa", amount: 60, status: "failed", email: "alex@example.com" },
  { id: "y6c7v8b9", amount: 480, status: "pending", email: "sam@example.com" },
];

const statusVariant = {
  success: "default",
  processing: "secondary",
  pending: "outline",
  failed: "destructive",
} as const;

const columns: ColumnDef<Payment>[] = [
  { accessorKey: "email", header: "Email" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => badgeCell(row.original.status, statusVariant),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) =>
      new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
        .format(row.original.amount),
  },
];`;

export const Basic: Story = {
  render: () => (
    <DataTable columns={columns} data={data} searchColumn="email" searchPlaceholder="Filter emails..." />
  ),
  parameters: {
    docs: {
      source: {
        code: `${sharedColumnsSnippet}

<DataTable
  columns={columns}
  data={data}
  searchColumn="email"
  searchPlaceholder="Filter emails..."
/>`,
      },
    },
  },
};

export const WithSelection: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={data}
      searchColumn="email"
      enableRowSelection
      onSelectionChange={(rows) => console.log("selected:", rows)}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `${sharedColumnsSnippet}

<DataTable
  columns={columns}
  data={data}
  searchColumn="email"
  enableRowSelection
  onSelectionChange={(rows) => console.log("selected:", rows)}
/>`,
      },
    },
  },
};

export const WithRowClick: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={data}
      searchColumn="email"
      enableRowSelection
      onRowClick={(row) => alert(`Clicked ${row.email}`)}
      onSelectionChange={(rows) => console.log("selected:", rows)}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `${sharedColumnsSnippet}

<DataTable
  columns={columns}
  data={data}
  searchColumn="email"
  enableRowSelection
  onRowClick={(row) => alert(\`Clicked \${row.email}\`)}
  onSelectionChange={(rows) => console.log("selected:", rows)}
/>`,
      },
    },
  },
};

export const WithRowActions: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={data}
      searchColumn="email"
      enableRowSelection
      rowActions={[
        { label: "Copy email", onClick: (r) => navigator.clipboard.writeText(r.email) },
        { label: "View details", onClick: (r) => alert(JSON.stringify(r, null, 2)) },
        {
          label: "Delete",
          separatorBefore: true,
          onClick: (r) => console.log("delete", r.id),
          disabled: (r) => r.status === "processing",
        },
      ]}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `${sharedColumnsSnippet}

<DataTable
  columns={columns}
  data={data}
  searchColumn="email"
  enableRowSelection
  rowActions={[
    {
      label: "Copy email",
      onClick: (r) => navigator.clipboard.writeText(r.email),
    },
    {
      label: "View details",
      onClick: (r) => alert(JSON.stringify(r, null, 2)),
    },
    {
      label: "Delete",
      separatorBefore: true,
      onClick: (r) => console.log("delete", r.id),
      // disabled accepts a function — combine any conditions:
      disabled: (r) => ["processing", "success"].includes(r.status),
    },
  ]}
/>`,
      },
    },
  },
};

export const NoToolbar: Story = {
  render: () => <DataTable columns={columns} data={data} enableColumnVisibility={false} />,
  parameters: {
    docs: {
      source: {
        code: `${sharedColumnsSnippet}

<DataTable columns={columns} data={data} enableColumnVisibility={false} />`,
      },
    },
  },
};

export const NoPagination: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={data.slice(0, 4)}
      searchColumn="email"
      enablePagination={false}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `${sharedColumnsSnippet}

<DataTable
  columns={columns}
  data={data}
  searchColumn="email"
  enablePagination={false}
/>`,
      },
    },
  },
};

/**
 * Columns dropdown placed at the top-right corner of the table; toolbar/filter hidden.
 * Also demonstrates the `badgeCell` helper for status columns and a row action
 * that's disabled conditionally.
 */
export const HeaderColumnsNoFilter: Story = {
  render: () => {
    const cols: ColumnDef<Payment>[] = [
      { accessorKey: "email", header: "Email" },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => badgeCell(row.original.status, statusVariant),
      },
      {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) =>
          new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
            row.original.amount,
          ),
      },
    ];
    return (
      <DataTable
        columns={cols}
        data={data}
        columnVisibilityPlacement="header"
        enableRowSelection
        rowActions={[
          { label: "Edit", onClick: (r) => console.log("edit", r.id) },
          {
            label: "Delete",
            separatorBefore: true,
            onClick: (r) => console.log("delete", r.id),
            disabled: (r) => r.status === "processing" || r.status === "success",
          },
        ]}
      />
    );
  },
  parameters: {
    docs: {
      source: {
        code: `${sharedColumnsSnippet}

<DataTable
  columns={columns}
  data={data}
  columnVisibilityPlacement="header"
  enableRowSelection
  rowActions={[
    { label: "Edit", onClick: (r) => console.log("edit", r.id) },
    {
      label: "Delete",
      separatorBefore: true,
      onClick: (r) => console.log("delete", r.id),
      disabled: (r) => ["processing", "success"].includes(r.status),
    },
  ]}
/>`,
      },
    },
  },
};

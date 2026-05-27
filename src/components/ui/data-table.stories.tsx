import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DataTable, badgeCell, type ColumnDef } from "./data-table";
import { Badge } from "./badge";
import { DatePicker } from "./date-picker";
import { Avatar, AvatarFallback } from "./avatar";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./dropdown-menu";
import { Pencil, Trash2, Search } from "lucide-react";

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

// ---------- Extra variants ----------

type Task = {
  id: string;
  title: string;
  due: Date | undefined;
  assignees: { name: string; initials: string }[];
};

const teamPool = [
  { name: "Alice Johnson", initials: "AJ" },
  { name: "Bob Williams", initials: "BW" },
  { name: "Charlie Brown", initials: "CB" },
  { name: "Diana Prince", initials: "DP" },
  { name: "Ethan Hunt", initials: "EH" },
  { name: "Fiona Gallagher", initials: "FG" },
];

const taskSeed: Task[] = [
  { id: "t1", title: "Write spec", due: new Date(), assignees: teamPool.slice(0, 3) },
  { id: "t2", title: "Design review", due: new Date(), assignees: teamPool.slice(1, 5) },
  { id: "t3", title: "Ship beta", due: undefined, assignees: teamPool.slice(2, 4) },
];

/** Each row's "Due" cell is an editable DatePicker. */
export const WithDatePickerCell: Story = {
  render: () => {
    const Demo = () => {
      const [rows, setRows] = React.useState(taskSeed);
      const cols: ColumnDef<Task>[] = [
        { accessorKey: "title", header: "Task" },
        {
          accessorKey: "due",
          header: "Due date",
          cell: ({ row }) => (
            <DatePicker
              value={row.original.due}
              onChange={(d) =>
                setRows((rs) =>
                  rs.map((r) => (r.id === row.original.id ? { ...r, due: d ?? undefined } : r)),
                )
              }
            />
          ),
        },
      ];
      return <DataTable columns={cols} data={rows} enablePagination={false} enableColumnVisibility={false} />;
    };
    return <Demo />;
  },
};

/** Avatar stack in a cell — click opens a searchable dropdown of members. */
export const WithAvatarStackDropdown: Story = {
  render: () => {
    const AssigneeCell = ({ row }: { row: { original: Task } }) => {
      const [query, setQuery] = React.useState("");
      const filtered = teamPool.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()),
      );
      const assignees = row.original.assignees;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              style={{ display: "inline-flex", alignItems: "center", background: "transparent", border: 0, cursor: "pointer" }}
              aria-label="View assignees"
            >
              {assignees.slice(0, 3).map((a, i) => (
                <span key={a.name} style={{ marginLeft: i === 0 ? 0 : -8 }}>
                  <Avatar>
                    <AvatarFallback>{a.initials}</AvatarFallback>
                  </Avatar>
                </span>
              ))}
              {assignees.length > 3 && (
                <span
                  style={{
                    marginLeft: -8,
                    height: 40,
                    width: 40,
                    borderRadius: 9999,
                    background: "hsl(var(--muted))",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                  }}
                >
                  +{assignees.length - 3}
                </span>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: 8,
                borderBottom: "1px solid hsl(var(--border))",
                marginBottom: 4,
              }}
            >
              <Search style={{ height: 16, width: 16, opacity: 0.5 }} />
              <input
                placeholder="Search members..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontSize: 14 }}
              />
            </div>
            <div style={{ maxHeight: 220, overflow: "auto" }}>
              {filtered.length ? (
                filtered.map((p) => <DropdownMenuItem key={p.name}>{p.name}</DropdownMenuItem>)
              ) : (
                <div style={{ padding: 12, textAlign: "center", fontSize: 13, opacity: 0.6 }}>
                  No matches.
                </div>
              )}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    };

    const cols: ColumnDef<Task>[] = [
      { accessorKey: "title", header: "Task" },
      { id: "assignees", header: "Assignees", cell: AssigneeCell },
    ];
    return <DataTable columns={cols} data={taskSeed} enablePagination={false} enableColumnVisibility={false} />;
  },
};

/**
 * Row group-hover: action buttons stay hidden until the row is hovered.
 * Enabled via `enableGroupHover` + Tailwind `group-hover/row:` on the cell.
 */
export const WithGroupHover: Story = {
  render: () => {
    const cols: ColumnDef<Payment>[] = [
      { accessorKey: "email", header: "Email" },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => badgeCell(row.original.status, statusVariant),
      },
      {
        id: "hoverActions",
        header: "",
        cell: () => (
          <div className="flex justify-end gap-1 opacity-0 transition-opacity group-hover/row:opacity-100">
            <Button variant="ghost" size="icon" aria-label="Edit">
              <Pencil />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Delete">
              <Trash2 />
            </Button>
          </div>
        ),
      },
    ];
    return (
      <DataTable
        columns={cols}
        data={data.slice(0, 6)}
        enableGroupHover
        enablePagination={false}
        enableColumnVisibility={false}
      />
    );
  },
};


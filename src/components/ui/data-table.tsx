import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type Row,
  type SortingState,
  type VisibilityState,
  type RowSelectionState,
  type PaginationState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { type LockedProps, stripStyleProps } from "@/lib/locked-props";
import { Badge } from "./badge";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Input } from "./input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export interface DataTableRowAction<TData> {
  label: string;
  onClick: (row: TData) => void;
  /** Render a separator above this item. */
  separatorBefore?: boolean;
  /** Disable the item conditionally. */
  disabled?: (row: TData) => boolean;
}

export interface DataTableProps<TData, TValue>
  extends LockedProps<React.HTMLAttributes<HTMLDivElement>> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  /** Column id used by the search input. If unset the toolbar search is hidden. */
  searchColumn?: string;
  searchPlaceholder?: string;
  /** Show the column visibility dropdown. */
  enableColumnVisibility?: boolean;
  /** Show pagination footer. */
  enablePagination?: boolean;
  pageSize?: number;

  /** Prepend a built-in checkbox selection column. */
  enableRowSelection?: boolean;
  /** Fires whenever selection changes; receives the currently selected row data. */
  onSelectionChange?: (selectedRows: TData[]) => void;
  /** Fires when a row body is clicked (ignores clicks inside the select/actions columns). */
  onRowClick?: (row: TData) => void;

  /** Append a trailing actions column with a dropdown menu. */
  rowActions?: DataTableRowAction<TData>[];
  /** Label shown at the top of the actions dropdown. Defaults to "Actions". */
  rowActionsLabel?: string;

  /**
   * Where to render the column visibility dropdown.
   * - "toolbar" (default): inline with the search input above the table.
   * - "header": floats above the top-right corner of the table; the toolbar
   *   (and search input) is hidden.
   */
  columnVisibilityPlacement?: "toolbar" | "header";
}

/**
 * Helper to render a value as a Badge using a variant map.
 * Use inside a column `cell` to avoid writing the JSX manually.
 *
 *   cell: ({ row }) => badgeCell(row.original.status, statusVariants)
 */
export function badgeCell<K extends string>(
  value: K,
  variants: Record<K, "default" | "secondary" | "destructive" | "outline">,
) {
  // Imported lazily to avoid circular type issues in some consumers.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { Badge } = require("./badge") as typeof import("./badge");
  return <Badge variant={variants[value]}>{value}</Badge>;
}

const SELECT_COL_ID = "__select__";
const ACTIONS_COL_ID = "__actions__";

export function DataTable<TData, TValue>({
  columns,
  data,
  searchColumn,
  searchPlaceholder = "Filter...",
  enableColumnVisibility = true,
  enablePagination = true,
  pageSize = 10,
  enableRowSelection = false,
  onSelectionChange,
  onRowClick,
  rowActions,
  rowActionsLabel = "Actions",
  ...rest
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize,
  });

  const resolvedColumns = React.useMemo<ColumnDef<TData, TValue>[]>(() => {
    const cols: ColumnDef<TData, TValue>[] = [];

    if (enableRowSelection) {
      cols.push({
        id: SELECT_COL_ID,
        enableSorting: false,
        enableHiding: false,
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(v) => table.toggleAllPageRowsSelected(!!v)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(v) => row.toggleSelected(!!v)}
            aria-label="Select row"
          />
        ),
      } as ColumnDef<TData, TValue>);
    }

    cols.push(...columns);

    if (rowActions && rowActions.length > 0) {
      cols.push({
        id: ACTIONS_COL_ID,
        enableSorting: false,
        enableHiding: false,
        header: () => <span className="sr-only">Actions</span>,
        cell: ({ row }) => (
          <div className="flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open row actions">
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{rowActionsLabel}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {rowActions.map((action, i) => (
                  <React.Fragment key={`${action.label}-${i}`}>
                    {action.separatorBefore && <DropdownMenuSeparator />}
                    <DropdownMenuItem
                      disabled={action.disabled?.(row.original)}
                      onSelect={() => action.onClick(row.original)}
                    >
                      {action.label}
                    </DropdownMenuItem>
                  </React.Fragment>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ),
      } as ColumnDef<TData, TValue>);
    }

    return cols;
  }, [columns, enableRowSelection, rowActions, rowActionsLabel]);

  const table = useReactTable({
    data,
    columns: resolvedColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: enablePagination ? getPaginationRowModel() : undefined,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    state: { sorting, columnFilters, columnVisibility, rowSelection, pagination },
  });

  // Fire selection change callback when selection state changes.
  React.useEffect(() => {
    if (!onSelectionChange) return;
    const selected = table.getSelectedRowModel().rows.map((r: Row<TData>) => r.original);
    onSelectionChange(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowSelection]);

  const safe = stripStyleProps(rest);

  const isInteractiveCol = (id: string) => id === SELECT_COL_ID || id === ACTIONS_COL_ID;

  return (
    <div className="w-full space-y-4" {...safe}>
      {(searchColumn || enableColumnVisibility) && (
        <div className="flex items-center gap-2">
          {searchColumn && (
            <Input
              placeholder={searchPlaceholder}
              value={(table.getColumn(searchColumn)?.getFilterValue() as string) ?? ""}
              onChange={(e) =>
                table.getColumn(searchColumn)?.setFilterValue(e.target.value)
              }
            />
          )}
          {enableColumnVisibility && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Columns <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((c) => c.getCanHide())
                  .map((column) => (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      checked={column.getIsVisible()}
                      onCheckedChange={(v) => column.toggleVisibility(!!v)}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((header) => {
                  const canSort = header.column.getCanSort();
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : canSort ? (
                        <button
                          type="button"
                          onClick={header.column.getToggleSortingHandler()}
                          className="inline-flex items-center gap-1 font-medium hover:text-foreground"
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          <ArrowUpDown className="h-3.5 w-3.5 opacity-60" />
                        </button>
                      ) : (
                        flexRender(header.column.columnDef.header, header.getContext())
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={
                    onRowClick ? () => onRowClick(row.original) : undefined
                  }
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      onClick={
                        isInteractiveCol(cell.column.id)
                          ? (e) => e.stopPropagation()
                          : undefined
                      }
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={resolvedColumns.length}>
                  <div className="py-8 text-center text-sm text-muted-foreground">
                    No results.
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {enablePagination && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount() || 1}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export type { ColumnDef } from "@tanstack/react-table";

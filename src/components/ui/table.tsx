/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/table.tsx`.
 */
import * as React from "react";
import {
  Table as ShadcnTable,
  TableHeader as ShadcnTableHeader,
  TableBody as ShadcnTableBody,
  TableFooter as ShadcnTableFooter,
  TableRow as ShadcnTableRow,
  TableHead as ShadcnTableHead,
  TableCell as ShadcnTableCell,
  TableCaption as ShadcnTableCaption,
} from "./_shadcn/table";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";
import { cn } from "@/lib/utils";

export const Table = React.forwardRef<
  React.ElementRef<typeof ShadcnTable>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnTable>>
>((props, ref) => <ShadcnTable ref={ref} {...stripStyleProps(props)} />);
Table.displayName = "Table";

export const TableHeader = React.forwardRef<
  React.ElementRef<typeof ShadcnTableHeader>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnTableHeader>>
>((props, ref) => <ShadcnTableHeader ref={ref} {...stripStyleProps(props)} />);
TableHeader.displayName = "TableHeader";

export const TableBody = React.forwardRef<
  React.ElementRef<typeof ShadcnTableBody>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnTableBody>>
>((props, ref) => <ShadcnTableBody ref={ref} {...stripStyleProps(props)} />);
TableBody.displayName = "TableBody";

export const TableFooter = React.forwardRef<
  React.ElementRef<typeof ShadcnTableFooter>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnTableFooter>>
>((props, ref) => <ShadcnTableFooter ref={ref} {...stripStyleProps(props)} />);
TableFooter.displayName = "TableFooter";

export const TableRow = React.forwardRef<
  React.ElementRef<typeof ShadcnTableRow>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnTableRow>> & {
    /** Adds a `group/row` class so cells can react with `group-hover/row:` utilities. */
    groupHover?: boolean;
  }
>(({ groupHover, ...props }, ref) => (
  <ShadcnTableRow ref={ref} className={cn(groupHover && "group/row")} {...stripStyleProps(props)} />
));
TableRow.displayName = "TableRow";

export const TableHead = React.forwardRef<
  React.ElementRef<typeof ShadcnTableHead>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnTableHead>>
>((props, ref) => <ShadcnTableHead ref={ref} {...stripStyleProps(props)} />);
TableHead.displayName = "TableHead";

export const TableCell = React.forwardRef<
  React.ElementRef<typeof ShadcnTableCell>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnTableCell>>
>((props, ref) => <ShadcnTableCell ref={ref} {...stripStyleProps(props)} />);
TableCell.displayName = "TableCell";

export const TableCaption = React.forwardRef<
  React.ElementRef<typeof ShadcnTableCaption>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnTableCaption>>
>((props, ref) => <ShadcnTableCaption ref={ref} {...stripStyleProps(props)} />);
TableCaption.displayName = "TableCaption";

/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/sidebar.tsx`.
 *
 * Behavioral shadcn props (asChild, variant, size, isActive, tooltip, side,
 * collapsible, etc.) pass through. Consumer `className` / `style` are blocked
 * at the wrapper boundary; the raw shadcn defaults remain intact internally.
 */
import * as React from "react";
import {
  useSidebar,
  SidebarProvider as ShadcnSidebarProvider,
  Sidebar as ShadcnSidebar,
  SidebarTrigger as ShadcnSidebarTrigger,
  SidebarRail as ShadcnSidebarRail,
  SidebarInset as ShadcnSidebarInset,
  SidebarInput as ShadcnSidebarInput,
  SidebarHeader as ShadcnSidebarHeader,
  SidebarFooter as ShadcnSidebarFooter,
  SidebarSeparator as ShadcnSidebarSeparator,
  SidebarContent as ShadcnSidebarContent,
  SidebarGroup as ShadcnSidebarGroup,
  SidebarGroupLabel as ShadcnSidebarGroupLabel,
  SidebarGroupAction as ShadcnSidebarGroupAction,
  SidebarGroupContent as ShadcnSidebarGroupContent,
  SidebarMenu as ShadcnSidebarMenu,
  SidebarMenuItem as ShadcnSidebarMenuItem,
  SidebarMenuButton as ShadcnSidebarMenuButton,
  SidebarMenuAction as ShadcnSidebarMenuAction,
  SidebarMenuBadge as ShadcnSidebarMenuBadge,
  SidebarMenuSkeleton as ShadcnSidebarMenuSkeleton,
  SidebarMenuSub as ShadcnSidebarMenuSub,
  SidebarMenuSubItem as ShadcnSidebarMenuSubItem,
  SidebarMenuSubButton as ShadcnSidebarMenuSubButton,
} from "./_shadcn/sidebar";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export { useSidebar };

type PropsOf<T extends React.ElementType> = React.ComponentProps<T>;
type LockedComponentProps<T extends React.ElementType> = LockedProps<PropsOf<T>>;

export type SidebarProviderProps = LockedComponentProps<typeof ShadcnSidebarProvider>;
export function SidebarProvider(props: SidebarProviderProps) {
  return <ShadcnSidebarProvider {...stripStyleProps(props)} />;
}

export type SidebarProps = LockedComponentProps<typeof ShadcnSidebar>;
export function Sidebar(props: SidebarProps) {
  return <ShadcnSidebar {...stripStyleProps(props)} />;
}

export type SidebarTriggerProps = LockedComponentProps<typeof ShadcnSidebarTrigger>;
export function SidebarTrigger(props: SidebarTriggerProps) {
  return <ShadcnSidebarTrigger {...stripStyleProps(props)} />;
}

export type SidebarRailProps = LockedComponentProps<typeof ShadcnSidebarRail>;
export function SidebarRail(props: SidebarRailProps) {
  return <ShadcnSidebarRail {...stripStyleProps(props)} />;
}

export type SidebarInsetProps = LockedComponentProps<typeof ShadcnSidebarInset>;
export function SidebarInset(props: SidebarInsetProps) {
  return <ShadcnSidebarInset {...stripStyleProps(props)} />;
}

export type SidebarInputProps = LockedComponentProps<typeof ShadcnSidebarInput>;
export function SidebarInput(props: SidebarInputProps) {
  return <ShadcnSidebarInput {...stripStyleProps(props)} />;
}

export type SidebarHeaderProps = LockedComponentProps<typeof ShadcnSidebarHeader>;
export function SidebarHeader(props: SidebarHeaderProps) {
  return <ShadcnSidebarHeader {...stripStyleProps(props)} />;
}

export type SidebarFooterProps = LockedComponentProps<typeof ShadcnSidebarFooter>;
export function SidebarFooter(props: SidebarFooterProps) {
  return <ShadcnSidebarFooter {...stripStyleProps(props)} />;
}

export type SidebarSeparatorProps = LockedComponentProps<typeof ShadcnSidebarSeparator>;
export function SidebarSeparator(props: SidebarSeparatorProps) {
  return <ShadcnSidebarSeparator {...stripStyleProps(props)} />;
}

export type SidebarContentProps = LockedComponentProps<typeof ShadcnSidebarContent>;
export function SidebarContent(props: SidebarContentProps) {
  return <ShadcnSidebarContent {...stripStyleProps(props)} />;
}

export type SidebarGroupProps = LockedComponentProps<typeof ShadcnSidebarGroup>;
export function SidebarGroup(props: SidebarGroupProps) {
  return <ShadcnSidebarGroup {...stripStyleProps(props)} />;
}

export type SidebarGroupLabelProps = LockedComponentProps<typeof ShadcnSidebarGroupLabel>;
export function SidebarGroupLabel(props: SidebarGroupLabelProps) {
  return <ShadcnSidebarGroupLabel {...stripStyleProps(props)} />;
}

export type SidebarGroupActionProps = LockedComponentProps<typeof ShadcnSidebarGroupAction>;
export function SidebarGroupAction(props: SidebarGroupActionProps) {
  return <ShadcnSidebarGroupAction {...stripStyleProps(props)} />;
}

export type SidebarGroupContentProps = LockedComponentProps<typeof ShadcnSidebarGroupContent>;
export function SidebarGroupContent(props: SidebarGroupContentProps) {
  return <ShadcnSidebarGroupContent {...stripStyleProps(props)} />;
}

export type SidebarMenuProps = LockedComponentProps<typeof ShadcnSidebarMenu>;
export function SidebarMenu(props: SidebarMenuProps) {
  return <ShadcnSidebarMenu {...stripStyleProps(props)} />;
}

export type SidebarMenuItemProps = LockedComponentProps<typeof ShadcnSidebarMenuItem>;
export function SidebarMenuItem(props: SidebarMenuItemProps) {
  return <ShadcnSidebarMenuItem {...stripStyleProps(props)} />;
}

type ShadcnSidebarMenuButtonProps = PropsOf<typeof ShadcnSidebarMenuButton>;
type SidebarMenuButtonTooltip = ShadcnSidebarMenuButtonProps["tooltip"];

export type SidebarMenuButtonProps = LockedProps<
  Omit<ShadcnSidebarMenuButtonProps, "tooltip">
> & {
  tooltip?: string | LockedProps<Extract<SidebarMenuButtonTooltip, object>>;
};

export function SidebarMenuButton({ tooltip, ...props }: SidebarMenuButtonProps) {
  const lockedTooltip =
    tooltip && typeof tooltip === "object" ? stripStyleProps(tooltip) : tooltip;

  return (
    <ShadcnSidebarMenuButton
      {...stripStyleProps(props)}
      tooltip={lockedTooltip as SidebarMenuButtonTooltip}
    />
  );
}

export type SidebarMenuActionProps = LockedComponentProps<typeof ShadcnSidebarMenuAction>;
export function SidebarMenuAction(props: SidebarMenuActionProps) {
  return <ShadcnSidebarMenuAction {...stripStyleProps(props)} />;
}

export type SidebarMenuBadgeProps = LockedComponentProps<typeof ShadcnSidebarMenuBadge>;
export function SidebarMenuBadge(props: SidebarMenuBadgeProps) {
  return <ShadcnSidebarMenuBadge {...stripStyleProps(props)} />;
}

export type SidebarMenuSkeletonProps = LockedComponentProps<typeof ShadcnSidebarMenuSkeleton>;
export function SidebarMenuSkeleton(props: SidebarMenuSkeletonProps) {
  return <ShadcnSidebarMenuSkeleton {...stripStyleProps(props)} />;
}

export type SidebarMenuSubProps = LockedComponentProps<typeof ShadcnSidebarMenuSub>;
export function SidebarMenuSub(props: SidebarMenuSubProps) {
  return <ShadcnSidebarMenuSub {...stripStyleProps(props)} />;
}

export type SidebarMenuSubItemProps = LockedComponentProps<typeof ShadcnSidebarMenuSubItem>;
export function SidebarMenuSubItem(props: SidebarMenuSubItemProps) {
  return <ShadcnSidebarMenuSubItem {...stripStyleProps(props)} />;
}

export type SidebarMenuSubButtonProps = LockedComponentProps<typeof ShadcnSidebarMenuSubButton>;
export function SidebarMenuSubButton(props: SidebarMenuSubButtonProps) {
  return <ShadcnSidebarMenuSubButton {...stripStyleProps(props)} />;
}

/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/sidebar.tsx`.
 *
 * Each public sub-component strips `className`/`style` at the call site so
 * consumers can't override the internal styling. Behavioral props (asChild,
 * variant, size, isActive, tooltip, side, collapsible, etc.) flow through.
 */
import * as React from "react";
import * as Raw from "./_shadcn/sidebar";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const useSidebar = Raw.useSidebar;

/** Create a wrapper that forwards refs and strips style props. */
function lock<T extends React.ForwardRefExoticComponent<any>>(
  Component: T,
  displayName: string,
) {
  type Props = React.ComponentPropsWithoutRef<T>;
  type Ref = React.ElementRef<T>;
  const Wrapped = React.forwardRef<Ref, LockedProps<Props>>((props, ref) => {
    const Comp = Component as unknown as React.ComponentType<any>;
    return <Comp ref={ref} {...stripStyleProps(props as object)} />;
  });
  Wrapped.displayName = displayName;
  return Wrapped;
}

export const SidebarProvider = lock(Raw.SidebarProvider, "SidebarProvider");
export const Sidebar = lock(Raw.Sidebar, "Sidebar");
export const SidebarTrigger = lock(Raw.SidebarTrigger, "SidebarTrigger");
export const SidebarRail = lock(Raw.SidebarRail, "SidebarRail");
export const SidebarInset = lock(Raw.SidebarInset, "SidebarInset");
export const SidebarInput = lock(Raw.SidebarInput, "SidebarInput");
export const SidebarHeader = lock(Raw.SidebarHeader, "SidebarHeader");
export const SidebarFooter = lock(Raw.SidebarFooter, "SidebarFooter");
export const SidebarSeparator = lock(Raw.SidebarSeparator, "SidebarSeparator");
export const SidebarContent = lock(Raw.SidebarContent, "SidebarContent");
export const SidebarGroup = lock(Raw.SidebarGroup, "SidebarGroup");
export const SidebarGroupLabel = lock(Raw.SidebarGroupLabel, "SidebarGroupLabel");
export const SidebarGroupAction = lock(Raw.SidebarGroupAction, "SidebarGroupAction");
export const SidebarGroupContent = lock(Raw.SidebarGroupContent, "SidebarGroupContent");
export const SidebarMenu = lock(Raw.SidebarMenu, "SidebarMenu");
export const SidebarMenuItem = lock(Raw.SidebarMenuItem, "SidebarMenuItem");
export const SidebarMenuButton = lock(Raw.SidebarMenuButton, "SidebarMenuButton");
export const SidebarMenuAction = lock(Raw.SidebarMenuAction, "SidebarMenuAction");
export const SidebarMenuBadge = lock(Raw.SidebarMenuBadge, "SidebarMenuBadge");
export const SidebarMenuSkeleton = lock(Raw.SidebarMenuSkeleton, "SidebarMenuSkeleton");
export const SidebarMenuSub = lock(Raw.SidebarMenuSub, "SidebarMenuSub");
export const SidebarMenuSubItem = lock(Raw.SidebarMenuSubItem, "SidebarMenuSubItem");
export const SidebarMenuSubButton = lock(Raw.SidebarMenuSubButton, "SidebarMenuSubButton");

/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/sidebar.tsx`.
 *
 * Re-exports each sub-component as-is so behavioral props (asChild, variant,
 * size, isActive, tooltip, side, collapsible, etc.) and styling props
 * (className, style) flow through to the underlying shadcn implementation.
 * Many sidebar parts (Provider, Sidebar, Inset, Trigger) rely on className
 * passthrough for layout, so stripping styles here breaks the component.
 */
export {
  useSidebar,
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarRail,
  SidebarInset,
  SidebarInput,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "./_shadcn/sidebar";

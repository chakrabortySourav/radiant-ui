import type { Meta, StoryObj } from "@storybook/react";
import { Home, Inbox, Settings, Search, Calendar, ChevronRight, MoreHorizontal } from "lucide-react";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarGroupAction,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarInput,
  SidebarSeparator,
  SidebarRail,
} from "./sidebar";

const meta: Meta<typeof Sidebar> = { title: "UI/Sidebar", component: Sidebar };
export default meta;
type Story = StoryObj<typeof Sidebar>;

const items = [
  { title: "Home", icon: Home },
  { title: "Inbox", icon: Inbox, badge: "12" },
  { title: "Calendar", icon: Calendar },
  { title: "Search", icon: Search },
  { title: "Settings", icon: Settings },
];

const Shell = ({ children, side = "left", variant = "sidebar", collapsible = "offcanvas" }: any) => (
  <SidebarProvider>
    <Sidebar side={side} variant={variant} collapsible={collapsible}>
      <SidebarHeader>
        <SidebarInput placeholder="Search..." />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupAction title="Add"><MoreHorizontal /></SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((it) => (
                <SidebarMenuItem key={it.title}>
                  <SidebarMenuButton tooltip={it.title}>
                    <it.icon />
                    <span>{it.title}</span>
                  </SidebarMenuButton>
                  {it.badge && <SidebarMenuBadge>{it.badge}</SidebarMenuBadge>}
                  <SidebarMenuAction showOnHover><MoreHorizontal /></SidebarMenuAction>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <ChevronRight /><span>Design System</span>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem><SidebarMenuSubButton href="#">Tokens</SidebarMenuSubButton></SidebarMenuSubItem>
                  <SidebarMenuSubItem><SidebarMenuSubButton href="#" isActive>Components</SidebarMenuSubButton></SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Account"><Settings /><span>Account</span></SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    <SidebarInset>
      <header className="flex h-12 items-center gap-2 border-b px-4">
        <SidebarTrigger />
        <span className="text-sm font-medium">Dashboard</span>
      </header>
      <div className="p-4">{children}</div>
    </SidebarInset>
  </SidebarProvider>
);

export const Default: Story = { render: () => <Shell>Main content area.</Shell> };
export const RightSide: Story = { render: () => <Shell side="right">Sidebar on the right side.</Shell> };
export const Floating: Story = { render: () => <Shell variant="floating">Floating sidebar variant.</Shell> };
export const Inset: Story = { render: () => <Shell variant="inset">Inset sidebar variant.</Shell> };
export const CollapsibleIcon: Story = { render: () => <Shell collapsible="icon">Collapses to icon-only rail. Toggle to see.</Shell> };
export const CollapsibleOffcanvas: Story = { render: () => <Shell collapsible="offcanvas">Slides off-canvas when collapsed.</Shell> };
export const NonCollapsible: Story = { render: () => <Shell collapsible="none">Always-visible sidebar.</Shell> };

export const WithSkeletonLoading: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Loading</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {Array.from({ length: 5 }).map((_, i) => (
                  <SidebarMenuItem key={i}><SidebarMenuSkeleton showIcon /></SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-4"><SidebarTrigger /></header>
      </SidebarInset>
    </SidebarProvider>
  ),
};

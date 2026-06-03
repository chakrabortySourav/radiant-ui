import { beforeAll, describe, expect, it, vi } from "vitest";
import type { ComponentProps } from "react";
import { render, screen } from "@testing-library/react";
import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "./sidebar";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

describe("Sidebar", () => {
  it("keeps shadcn defaults while stripping consumer styling overrides", () => {
    const providerStyleProps = {
      className: "consumer-provider",
      style: { backgroundColor: "red" },
    } as unknown as ComponentProps<typeof SidebarProvider>;
    const sidebarStyleProps = {
      className: "consumer-sidebar",
    } as unknown as ComponentProps<typeof Sidebar>;
    const triggerStyleProps = {
      className: "consumer-trigger",
    } as unknown as ComponentProps<typeof SidebarTrigger>;

    render(
      <SidebarProvider {...providerStyleProps}>
        <Sidebar {...sidebarStyleProps}>
          <SidebarContent>Navigation</SidebarContent>
        </Sidebar>
        <SidebarInset>
          <SidebarTrigger {...triggerStyleProps} />
          <span>Main content</span>
        </SidebarInset>
      </SidebarProvider>,
    );

    const provider = document.querySelector('[data-slot="sidebar-wrapper"]');
    const sidebar = document.querySelector('[data-slot="sidebar-container"]');
    const trigger = screen.getByRole("button", { name: "Toggle Sidebar" });

    expect(provider).toHaveClass("group/sidebar-wrapper");
    expect(provider).not.toHaveClass("consumer-provider");
    expect(provider).toHaveStyle({ "--sidebar-width": "16rem" });
    expect(provider).not.toHaveStyle({ backgroundColor: "red" });
    expect(sidebar).toHaveClass("fixed");
    expect(sidebar).not.toHaveClass("consumer-sidebar");
    expect(trigger).toHaveClass("size-7");
    expect(trigger).not.toHaveClass("consumer-trigger");
  });
});
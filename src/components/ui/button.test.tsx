import { describe, it, expect } from "vitest";
import type { ComponentPropsWithoutRef } from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Hello</Button>);
    expect(screen.getByRole("button", { name: "Hello" })).toBeInTheDocument();
  });

  it("applies variant classes", () => {
    render(<Button variant="destructive">Del</Button>);
    expect(screen.getByRole("button").className).toContain("bg-destructive");
  });

  it("strips consumer styling overrides", () => {
    const consumerStyleProps = {
      className: "bg-red-500",
      style: { color: "red" },
    } as unknown as ComponentPropsWithoutRef<"button">;

    render(
      <Button {...consumerStyleProps}>Locked</Button>,
    );

    const button = screen.getByRole("button", { name: "Locked" });
    expect(button.className).not.toContain("bg-red-500");
    expect(button).not.toHaveAttribute("style");
  });
});

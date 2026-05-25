import { describe, it, expect } from "vitest";
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
});

/** Design-system wrapper. Raw shadcn lives in `./_shadcn/toggle-group.tsx`. */
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";
import {
  ToggleGroup as ShadcnToggleGroup,
  ToggleGroupItem as ShadcnToggleGroupItem,
} from "./_shadcn/toggle-group";
import { toggleVariants } from "./_shadcn/toggle";
import { stripStyleProps } from "@/lib/locked-props";

type RootProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>;
type LockedRoot = Omit<RootProps, "className" | "style"> & VariantProps<typeof toggleVariants>;

export const ToggleGroup = React.forwardRef<HTMLDivElement, LockedRoot>(
  ({ variant, size, children, ...props }, ref) => (
    <ShadcnToggleGroup
      ref={ref}
      variant={variant}
      size={size}
      {...(stripStyleProps(props) as RootProps)}
    >
      {children}
    </ShadcnToggleGroup>
  ),
);
ToggleGroup.displayName = "ToggleGroup";

type ItemProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>;
type LockedItem = Omit<ItemProps, "className" | "style"> & VariantProps<typeof toggleVariants>;

export const ToggleGroupItem = React.forwardRef<HTMLButtonElement, LockedItem>(
  ({ children, variant, size, ...props }, ref) => (
    <ShadcnToggleGroupItem ref={ref} variant={variant} size={size} {...stripStyleProps(props)}>
      {children}
    </ShadcnToggleGroupItem>
  ),
);
ToggleGroupItem.displayName = "ToggleGroupItem";

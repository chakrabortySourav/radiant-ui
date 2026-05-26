import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";
import { stripStyleProps } from "@/lib/locked-props";
import { toggleVariants } from "./toggle";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

type RootProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>;
type LockedRoot = Omit<RootProps, "className" | "style"> & VariantProps<typeof toggleVariants>;

export const ToggleGroup = React.forwardRef<HTMLDivElement, LockedRoot>(
  ({ variant, size, children, ...props }, ref) => (
    <ToggleGroupPrimitive.Root
      ref={ref}
      className="flex items-center justify-center gap-1"
      {...(stripStyleProps(props) as RootProps)}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  ),
);
ToggleGroup.displayName = "ToggleGroup";

type ItemProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>;
type LockedItem = Omit<ItemProps, "className" | "style"> & VariantProps<typeof toggleVariants>;

export const ToggleGroupItem = React.forwardRef<HTMLButtonElement, LockedItem>(
  ({ children, variant, size, ...props }, ref) => {
    const context = React.useContext(ToggleGroupContext);
    return (
      <ToggleGroupPrimitive.Item
        ref={ref}
        className={toggleVariants({ variant: context.variant || variant, size: context.size || size })}
        {...stripStyleProps(props)}
      >
        {children}
      </ToggleGroupPrimitive.Item>
    );
  },
);
ToggleGroupItem.displayName = "ToggleGroupItem";

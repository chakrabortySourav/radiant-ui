import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";
import { toggleVariants } from "./toggle";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

export const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>> &
    VariantProps<typeof toggleVariants>
>(({ variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className="flex items-center justify-center gap-1"
    {...stripStyleProps(props)}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));
ToggleGroup.displayName = "ToggleGroup";

export const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>> &
    VariantProps<typeof toggleVariants>
>(({ children, variant, size, ...props }, ref) => {
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
});
ToggleGroupItem.displayName = "ToggleGroupItem";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  LockedProps<React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>>
>((props, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
    {...stripStyleProps(props)}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  LockedProps<React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>
>((props, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
    {...stripStyleProps(props)}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  LockedProps<React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>
>((props, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    {...stripStyleProps(props)}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

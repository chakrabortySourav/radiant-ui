/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/tabs.tsx`.
 */
import * as React from "react";
import {
  Tabs as ShadcnTabs,
  TabsList as ShadcnTabsList,
  TabsTrigger as ShadcnTabsTrigger,
  TabsContent as ShadcnTabsContent,
} from "./_shadcn/tabs";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export const Tabs = ShadcnTabs;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof ShadcnTabsList>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnTabsList>>
>((props, ref) => <ShadcnTabsList ref={ref} {...stripStyleProps(props)} />);
TabsList.displayName = "TabsList";

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof ShadcnTabsTrigger>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnTabsTrigger>>
>((props, ref) => <ShadcnTabsTrigger ref={ref} {...stripStyleProps(props)} />);
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof ShadcnTabsContent>,
  LockedProps<React.ComponentPropsWithoutRef<typeof ShadcnTabsContent>>
>((props, ref) => <ShadcnTabsContent ref={ref} {...stripStyleProps(props)} />);
TabsContent.displayName = "TabsContent";

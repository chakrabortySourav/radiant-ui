import * as React from "react";
import { ThemeProvider, type ThemeProviderProps } from "./theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ToastProvider, ToastViewport } from "@/components/ui/toast";

export interface UIProviderProps extends Omit<ThemeProviderProps, "children"> {
  children: React.ReactNode;
}

/**
 * Single root provider wired with theme + portals.
 * Wrap your app once: <UIProvider>{app}</UIProvider>
 */
export function UIProvider({ children, ...themeProps }: UIProviderProps) {
  return (
    <ThemeProvider {...themeProps}>
      <TooltipProvider delayDuration={150}>
        <ToastProvider>
          {children}
          <ToastViewport />
        </ToastProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}

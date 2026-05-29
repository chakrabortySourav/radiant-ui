
import { Toaster as SonnerPrimitive, toast as sonnerToast, type ToasterProps as SonnerToasterProps } from "sonner";
import { useTheme } from "@/providers/theme-provider";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export type ToasterProps = LockedProps<SonnerToasterProps>;

export function Toaster(props: ToasterProps) {
  const { resolvedTheme } = useTheme();
  return (
    <SonnerPrimitive
      theme={resolvedTheme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...stripStyleProps(props as object) as SonnerToasterProps}
    />
  );
}

export const toast = sonnerToast;

/**
 * Design-system wrapper. Raw shadcn lives in `./_shadcn/sonner.tsx`.
 */
import {
  Toaster as ShadcnToaster,
  type ToasterProps as ShadcnToasterProps,
} from "./_shadcn/sonner";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export type ToasterProps = LockedProps<ShadcnToasterProps>;

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export function Toaster({ position = "bottom-right", ...props }: ToasterProps) {
  return (
    <ShadcnToaster
      position={position}
      {...(stripStyleProps(props as object) as ShadcnToasterProps)}
    />
  );
}

export { toast } from "sonner";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export interface SpinnerProps extends LockedProps<React.SVGAttributes<SVGSVGElement>> {
  label?: string;
}

export const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ label = "Loading", ...props }, ref) => (
    <Loader2
      ref={ref}
      role="status"
      aria-label={label}
      className="h-4 w-4 animate-spin text-muted-foreground"
      {...stripStyleProps(props)}
    />
  ),
);
Spinner.displayName = "Spinner";

export interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export function EmptyState({ title, description, icon, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-10 text-center">
      {icon ? <div className="mb-3 text-muted-foreground">{icon}</div> : null}
      <h3 className="text-base font-semibold">{title}</h3>
      {description ? (
        <p className="mt-1 max-w-sm text-sm text-muted-foreground">{description}</p>
      ) : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}

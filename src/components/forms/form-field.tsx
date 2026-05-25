import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input, type InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface FormFieldProps extends InputProps {
  label: string;
  hint?: string;
  error?: string;
  containerClassName?: string;
}

/**
 * Opinionated form field wrapper: label + input + hint/error.
 * Keeps consumers from re-wiring accessibility plumbing every time.
 */
export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, hint, error, id, containerClassName, className, ...inputProps }, ref) => {
    const reactId = React.useId();
    const fieldId = id ?? reactId;
    const describedById = error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined;

    return (
      <div className={cn("flex flex-col gap-1.5", containerClassName)}>
        <Label htmlFor={fieldId}>{label}</Label>
        <Input
          id={fieldId}
          ref={ref}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedById}
          className={cn(error && "border-destructive focus-visible:ring-destructive", className)}
          {...inputProps}
        />
        {error ? (
          <p id={`${fieldId}-error`} className="text-xs text-destructive">
            {error}
          </p>
        ) : hint ? (
          <p id={`${fieldId}-hint`} className="text-xs text-muted-foreground">
            {hint}
          </p>
        ) : null}
      </div>
    );
  },
);
FormField.displayName = "FormField";

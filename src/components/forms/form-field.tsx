import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input, type InputProps } from "@/components/ui/input";
import { stripStyleProps } from "@/lib/locked-props";

export interface FormFieldProps extends InputProps {
  label: string;
  hint?: string;
  error?: string;
}

/**
 * Opinionated form field wrapper: label + input + hint/error.
 * Keeps consumers from re-wiring accessibility plumbing every time.
 */
export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, hint, error, id, ...inputProps }, ref) => {
    const reactId = React.useId();
    const fieldId = id ?? reactId;
    const describedById = error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined;

    return (
      <div className="flex flex-col gap-1.5">
        <Label htmlFor={fieldId}>{label}</Label>
        <Input
          id={fieldId}
          ref={ref}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedById}
          {...stripStyleProps(inputProps)}
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

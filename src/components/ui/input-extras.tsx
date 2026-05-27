import * as React from "react";
import { cn } from "@/lib/utils";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

/**
 * `InputGroup` lets consumers wrap an `<Input>` with a leading and/or trailing
 * icon (or any node) without overriding the input's styles.
 *
 *   <InputGroup leftIcon={<Search />}>
 *     <Input placeholder="Search..." />
 *   </InputGroup>
 */
export interface InputGroupProps
  extends LockedProps<Omit<React.HTMLAttributes<HTMLDivElement>, "children">> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactElement<{ className?: string }>;
}

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ leftIcon, rightIcon, children, ...props }, ref) => {
    const child = React.cloneElement(children, {
      className: cn(
        children.props.className,
        leftIcon && "pl-9",
        rightIcon && "pr-9",
      ),
    });
    return (
      <div ref={ref} className="relative" {...stripStyleProps(props)}>
        {leftIcon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground [&_svg]:h-4 [&_svg]:w-4">
            {leftIcon}
          </span>
        )}
        {child}
        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground [&_svg]:h-4 [&_svg]:w-4">
            {rightIcon}
          </span>
        )}
      </div>
    );
  },
);
InputGroup.displayName = "InputGroup";

/**
 * `FormattedInput` lets consumers control the displayed text via a `format`
 * function while still working with a single string `value`. The raw input
 * value is sent to `onValueChange` so consumers can store it in their state.
 *
 *   <FormattedInput
 *     value={phone}
 *     onValueChange={setPhone}
 *     format={(d) => {
 *       const x = d.replace(/\D/g, "").slice(0, 10);
 *       const p = [x.slice(0,3), x.slice(3,6), x.slice(6)].filter(Boolean);
 *       return p.length > 1 ? `(${p[0]}) ${p.slice(1).join("-")}` : p[0] ?? "";
 *     }}
 *   />
 */
export type FormattedInputProps = LockedProps<
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">
> & {
  value: string;
  onValueChange: (raw: string) => void;
  /** Transform the raw value into the display string. */
  format?: (raw: string) => string;
  /** Strip the display string back to the raw value before storing. */
  parse?: (display: string) => string;
};

export const FormattedInput = React.forwardRef<HTMLInputElement, FormattedInputProps>(
  ({ value, onValueChange, format, parse, type = "text", ...props }, ref) => {
    const display = format ? format(value) : value;
    return (
      <input
        ref={ref}
        type={type}
        value={display}
        onChange={(e) => {
          const raw = parse ? parse(e.target.value) : e.target.value;
          onValueChange(raw);
        }}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        {...stripStyleProps(props)}
      />
    );
  },
);
FormattedInput.displayName = "FormattedInput";

/**
 * `FileInput` — a styled file-upload control with an icon and helper text.
 * Hides the native input and uses a button-like surface as the trigger.
 */
export type FileInputProps = LockedProps<
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">
> & {
  icon?: React.ReactNode;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
};

export const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  ({ icon, label = "Click to upload", helperText = "or drag and drop", ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);
    const [fileName, setFileName] = React.useState<string | null>(null);

    return (
      <label className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed border-input bg-background px-4 py-6 text-sm text-muted-foreground transition-colors hover:bg-accent/40">
        <input
          ref={inputRef}
          type="file"
          className="sr-only"
          {...stripStyleProps(props)}
          onChange={(e) => {
            setFileName(e.target.files?.[0]?.name ?? null);
            props.onChange?.(e);
          }}
        />
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground [&_svg]:h-4 [&_svg]:w-4">
          {icon}
        </span>
        <span className="font-medium text-foreground">{fileName ?? label}</span>
        {!fileName && <span className="text-xs">{helperText}</span>}
      </label>
    );
  },
);
FileInput.displayName = "FileInput";

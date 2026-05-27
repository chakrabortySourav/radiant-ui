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
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "defaultValue">
> & {
  /**
   * Controlled raw value (digits/letters only, no mask characters).
   * Omit to use the component uncontrolled.
   */
  value?: string;
  /** Initial raw value for uncontrolled usage. */
  defaultValue?: string;
  /** Called with the raw value (mask characters stripped) whenever it changes. */
  onValueChange?: (raw: string) => void;
  /**
   * Mask pattern. Tokens:
   *   `#` → any digit (0-9)
   *   `A` → any letter (a-z, A-Z)
   *   `*` → any character
   * Everything else is treated as a literal.
   *
   *   format="(###) ###-####"      → (555) 123-4567
   *   format="##/##/####"          → 12/31/2026
   *   format="AAA-####"            → ABC-1234
   */
  format?: string;
};

const MASK_TOKENS: Record<string, RegExp> = {
  "#": /\d/,
  "9": /\d/,
  A: /[A-Za-z]/,
  "*": /./,
};

/** Apply a mask pattern to a raw string; returns the formatted display. */
function applyMask(raw: string, mask: string): string {
  let out = "";
  let i = 0;
  for (const m of mask) {
    if (i >= raw.length) break;
    const re = MASK_TOKENS[m];
    if (re) {
      if (re.test(raw[i])) {
        out += raw[i];
        i++;
      } else {
        // skip invalid character
        i++;
      }
    } else {
      out += m;
      // if user typed the literal, consume it
      if (raw[i] === m) i++;
    }
  }
  return out;
}

/** Strip a masked display string back to its raw tokens. */
function stripMask(display: string, mask: string): string {
  let raw = "";
  let mi = 0;
  for (const ch of display) {
    // advance past literals in the mask
    while (mi < mask.length && !MASK_TOKENS[mask[mi]] && mask[mi] === ch) {
      mi++;
    }
    if (mi >= mask.length) break;
    const re = MASK_TOKENS[mask[mi]];
    if (re && re.test(ch)) {
      raw += ch;
      mi++;
    }
  }
  return raw;
}

export const FormattedInput = React.forwardRef<HTMLInputElement, FormattedInputProps>(
  (
    { value, defaultValue, onValueChange, format, type = "text", ...props },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const [internal, setInternal] = React.useState(defaultValue ?? "");
    const raw = isControlled ? (value as string) : internal;

    const display = format ? applyMask(raw, format) : raw;

    return (
      <input
        ref={ref}
        type={type}
        value={display}
        onChange={(e) => {
          const next = format ? stripMask(e.target.value, format) : e.target.value;
          if (!isControlled) setInternal(next);
          onValueChange?.(next);
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

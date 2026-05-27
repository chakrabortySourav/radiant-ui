import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";

export interface TagsAutocompleteOption {
  /** Underlying value of the suggestion (e.g. an email). */
  value: string;
  /** Display label. Defaults to `value`. */
  label?: string;
  /** Secondary text shown under the label (e.g. a name). */
  description?: string;
  /** Avatar image URL shown on the left of the suggestion and the chip. */
  avatar?: string;
  /** Fallback initials if no avatar image is provided. */
  initials?: string;
}

export type TagsAutocompleteProps = LockedProps<
  Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue">
> & {
  /** Currently selected tag values. */
  value?: string[];
  onChange?: (value: string[]) => void;
  /** Suggestions to show while typing. */
  options?: TagsAutocompleteOption[];
  placeholder?: string;
  emptyText?: string;
  disabled?: boolean;
  /**
   * Optional validator for free-typed entries (e.g. an email regex).
   * Return false to reject the entry on space / enter.
   */
  validate?: (raw: string) => boolean;
  /** Keys that commit the current input as a chip. Defaults to space, enter, comma, tab. */
  commitKeys?: string[];
};

function Avatar({ src, initials }: { src?: string; initials?: string }) {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-[10px] font-medium text-muted-foreground">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" className="h-full w-full object-cover" />
      ) : (
        initials?.slice(0, 2).toUpperCase() ?? "?"
      )}
    </span>
  );
}

/**
 * Multi-select tag input with autocomplete suggestions and avatars.
 *
 * - Type to filter `options`; click a suggestion to add it as a chip.
 * - Press space / enter / comma to commit free-typed text (e.g. emails not in
 *   the list) as a chip. Use `validate` to gate this.
 * - Backspace on empty input removes the last chip.
 */
export const TagsAutocomplete = React.forwardRef<
  HTMLDivElement,
  TagsAutocompleteProps
>((props, ref) => {
  const {
    value,
    onChange,
    options = [],
    placeholder = "Add...",
    emptyText = "No matches. Press space to add.",
    disabled,
    validate,
    commitKeys = [" ", "Enter", ",", "Tab"],
    ...rest
  } = props;

  const [internal, setInternal] = React.useState<string[]>([]);
  const tags = value ?? internal;
  const setTags = (next: string[]) => {
    if (value === undefined) setInternal(next);
    onChange?.(next);
  };

  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [highlight, setHighlight] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const optionByValue = React.useMemo(() => {
    const m = new Map<string, TagsAutocompleteOption>();
    options.forEach((o) => m.set(o.value, o));
    return m;
  }, [options]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return options.filter(
      (o) =>
        !tags.includes(o.value) &&
        (q === "" ||
          o.value.toLowerCase().includes(q) ||
          (o.label ?? "").toLowerCase().includes(q) ||
          (o.description ?? "").toLowerCase().includes(q)),
    );
  }, [options, query, tags]);

  React.useEffect(() => setHighlight(0), [query, open]);

  const addTag = (raw: string) => {
    const v = raw.trim();
    if (!v) return;
    if (tags.includes(v)) {
      setQuery("");
      return;
    }
    if (validate && !validate(v)) return;
    setTags([...tags, v]);
    setQuery("");
  };

  const removeTag = (v: string) => setTags(tags.filter((t) => t !== v));

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setHighlight((h) => Math.min(h + 1, filtered.length - 1));
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
      return;
    }
    if (e.key === "Backspace" && query === "" && tags.length > 0) {
      e.preventDefault();
      setTags(tags.slice(0, -1));
      return;
    }
    if (commitKeys.includes(e.key)) {
      const opt = open && filtered[highlight];
      if (e.key === "Enter" && opt) {
        e.preventDefault();
        addTag(opt.value);
        return;
      }
      if (query.trim()) {
        e.preventDefault();
        addTag(query);
      }
    }
  };

  return (
    <div ref={ref} {...stripStyleProps(rest)} className="relative">
      <div
        onClick={() => inputRef.current?.focus()}
        className={cn(
          "flex min-h-10 w-full flex-wrap items-center gap-1 rounded-md border border-input bg-background px-2 py-1.5 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          disabled && "cursor-not-allowed opacity-50",
        )}
      >
        {tags.map((t) => {
          const opt = optionByValue.get(t);
          return (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 rounded-full bg-secondary py-0.5 pl-1 pr-2 text-xs text-secondary-foreground"
            >
              <Avatar src={opt?.avatar} initials={opt?.initials ?? t} />
              <span>{opt?.label ?? t}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeTag(t);
                }}
                className="opacity-60 hover:opacity-100"
                aria-label={`Remove ${t}`}
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          );
        })}
        <input
          ref={inputRef}
          value={query}
          disabled={disabled}
          placeholder={tags.length === 0 ? placeholder : ""}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => {
            setTimeout(() => setOpen(false), 120);
            if (query.trim()) addTag(query);
          }}
          onKeyDown={onKeyDown}
          className="min-w-[8ch] flex-1 border-0 bg-transparent py-1 text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>

      {open && (filtered.length > 0 || query.trim()) && (
        <div className="absolute z-50 mt-1 w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md">
          <div className="max-h-64 overflow-auto p-1">
            {filtered.length === 0 ? (
              <div className="p-3 text-center text-xs text-muted-foreground">
                {emptyText}
              </div>
            ) : (
              filtered.map((opt, i) => {
                const isActive = i === highlight;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      addTag(opt.value);
                      inputRef.current?.focus();
                    }}
                    onMouseEnter={() => setHighlight(i)}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left text-sm outline-none",
                      isActive && "bg-accent text-accent-foreground",
                    )}
                  >
                    <Avatar
                      src={opt.avatar}
                      initials={opt.initials ?? opt.label ?? opt.value}
                    />
                    <span className="flex flex-1 flex-col">
                      <span>{opt.label ?? opt.value}</span>
                      {opt.description && (
                        <span className="text-xs text-muted-foreground">
                          {opt.description}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
});
TagsAutocomplete.displayName = "TagsAutocomplete";

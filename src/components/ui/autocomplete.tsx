import * as React from "react";
import { Check, ChevronDown, Search, X, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";

export interface AutocompleteOption {
  value: string;
  label: string;
  /** Optional secondary text shown below the label. */
  description?: string;
  /** Optional icon rendered on the left of the option. */
  icon?: LucideIcon;
  disabled?: boolean;
}

type SingleProps = {
  multiple?: false;
  value?: string;
  onChange?: (value: string) => void;
};

type MultiProps = {
  multiple: true;
  value?: string[];
  onChange?: (value: string[]) => void;
};

export type AutocompleteProps = LockedProps<
  Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue">
> & {
  options: AutocompleteOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  /** Allow clearing the selection. Default true. */
  clearable?: boolean;
  disabled?: boolean;
} & (SingleProps | MultiProps);

/**
 * Autocomplete combobox. Supports single or multi-select via `multiple`,
 * and per-option left icons via `option.icon`.
 */
export const Autocomplete = React.forwardRef<HTMLDivElement, AutocompleteProps>(
  (props, ref) => {
    const {
      options,
      placeholder = "Select...",
      searchPlaceholder = "Search...",
      emptyText = "No results.",
      clearable = true,
      disabled,
      multiple,
      value,
      onChange,
      ...rest
    } = props as AutocompleteProps & {
      value?: string | string[];
      onChange?: (v: never) => void;
    };

    const [open, setOpen] = React.useState(false);
    const [query, setQuery] = React.useState("");
    const [highlight, setHighlight] = React.useState(0);

    const filtered = React.useMemo(
      () =>
        options.filter((o) =>
          o.label.toLowerCase().includes(query.toLowerCase()),
        ),
      [options, query],
    );

    React.useEffect(() => {
      setHighlight(0);
    }, [query, open]);

    const selectedValues = React.useMemo<string[]>(() => {
      if (multiple) return Array.isArray(value) ? value : [];
      return typeof value === "string" && value ? [value] : [];
    }, [multiple, value]);

    const isSelected = (v: string) => selectedValues.includes(v);

    const commit = (opt: AutocompleteOption) => {
      if (opt.disabled) return;
      if (multiple) {
        const next = isSelected(opt.value)
          ? selectedValues.filter((v) => v !== opt.value)
          : [...selectedValues, opt.value];
        (onChange as ((v: string[]) => void) | undefined)?.(next);
      } else {
        (onChange as ((v: string) => void) | undefined)?.(opt.value);
        setOpen(false);
        setQuery("");
      }
    };

    const clear = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (multiple) (onChange as ((v: string[]) => void) | undefined)?.([]);
      else (onChange as ((v: string) => void) | undefined)?.("");
    };

    const onKey = (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlight((h) => Math.min(h + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlight((h) => Math.max(h - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const opt = filtered[highlight];
        if (opt) commit(opt);
      }
    };

    const selectedOptions = options.filter((o) => selectedValues.includes(o.value));
    const hasSelection = selectedValues.length > 0;

    const renderTrigger = () => {
      if (!hasSelection) {
        return <span className="truncate text-muted-foreground">{placeholder}</span>;
      }
      if (multiple) {
        return (
          <span className="flex flex-wrap gap-1">
            {selectedOptions.map((o) => (
              <span
                key={o.value}
                className="inline-flex items-center gap-1 rounded bg-secondary px-1.5 py-0.5 text-xs text-secondary-foreground"
              >
                {o.icon ? <o.icon className="h-3 w-3" /> : null}
                {o.label}
                <X
                  className="h-3 w-3 cursor-pointer opacity-60 hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    commit(o);
                  }}
                />
              </span>
            ))}
          </span>
        );
      }
      const sole = selectedOptions[0];
      return (
        <span className="flex items-center gap-2 truncate">
          {sole?.icon ? <sole.icon className="h-4 w-4 opacity-70" /> : null}
          <span className="truncate">{sole?.label}</span>
        </span>
      );
    };

    return (
      <div ref={ref} {...stripStyleProps(rest)}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              role="combobox"
              aria-expanded={open}
              disabled={disabled}
              className="flex min-h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {renderTrigger()}
              <span className="ml-2 flex items-center gap-1">
                {clearable && hasSelection && (
                  <X
                    className="h-4 w-4 opacity-50 hover:opacity-100"
                    onClick={clear}
                  />
                )}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent align="start">
            <div className="-m-4 overflow-hidden rounded-md">
              <div className="flex items-center gap-2 border-b px-3 py-2">
                <Search className="h-4 w-4 opacity-50" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onKey}
                  placeholder={searchPlaceholder}
                  className="h-8 w-full border-0 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <div className="max-h-64 overflow-auto p-1">
                {filtered.length === 0 && (
                  <div className="p-3 text-center text-sm text-muted-foreground">
                    {emptyText}
                  </div>
                )}
                {filtered.map((opt, i) => {
                  const selected = isSelected(opt.value);
                  const isActive = i === highlight;
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      disabled={opt.disabled}
                      onMouseEnter={() => setHighlight(i)}
                      onClick={() => commit(opt)}
                      className={cn(
                        "relative flex w-full cursor-default select-none items-start gap-2 rounded-sm px-2 py-1.5 text-left text-sm outline-none",
                        isActive && "bg-accent text-accent-foreground",
                        opt.disabled && "pointer-events-none opacity-50",
                      )}
                    >
                      {Icon ? (
                        <Icon className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
                      ) : (
                        <Check
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0",
                            selected ? "opacity-100" : "opacity-0",
                          )}
                        />
                      )}
                      <span className="flex flex-1 flex-col">
                        <span>{opt.label}</span>
                        {opt.description && (
                          <span className="text-xs text-muted-foreground">
                            {opt.description}
                          </span>
                        )}
                      </span>
                      {Icon && selected && (
                        <Check className="mt-0.5 h-4 w-4 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
);
Autocomplete.displayName = "Autocomplete";

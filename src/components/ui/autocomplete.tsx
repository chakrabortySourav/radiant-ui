import * as React from "react";
import { Check, ChevronDown, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { type LockedProps, stripStyleProps } from "@/lib/locked-props";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";

export interface AutocompleteOption {
  value: string;
  label: string;
  /** Optional secondary text shown below the label. */
  description?: string;
  disabled?: boolean;
}

export interface AutocompleteProps
  extends LockedProps<Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">> {
  options: AutocompleteOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  /** Allow clearing the selection. Default true. */
  clearable?: boolean;
  disabled?: boolean;
}

/**
 * Single-select autocomplete combobox. Filter options via a search input,
 * pick one with click or keyboard.
 */
export const Autocomplete = React.forwardRef<HTMLDivElement, AutocompleteProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = "Select...",
      searchPlaceholder = "Search...",
      emptyText = "No results.",
      clearable = true,
      disabled,
      ...props
    },
    ref,
  ) => {
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

    const selected = options.find((o) => o.value === value) ?? null;

    const commit = (opt: AutocompleteOption) => {
      if (opt.disabled) return;
      onChange?.(opt.value);
      setOpen(false);
      setQuery("");
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

    return (
      <div ref={ref} {...stripStyleProps(props)}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              role="combobox"
              aria-expanded={open}
              disabled={disabled}
              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span className={cn("truncate", !selected && "text-muted-foreground")}>
                {selected ? selected.label : placeholder}
              </span>
              <span className="ml-2 flex items-center gap-1">
                {clearable && selected && (
                  <X
                    className="h-4 w-4 opacity-50 hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      onChange?.("");
                    }}
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
                  const isSelected = opt.value === value;
                  const isActive = i === highlight;
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
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          isSelected ? "opacity-100" : "opacity-0",
                        )}
                      />
                      <span className="flex flex-col">
                        <span>{opt.label}</span>
                        {opt.description && (
                          <span className="text-xs text-muted-foreground">
                            {opt.description}
                          </span>
                        )}
                      </span>
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

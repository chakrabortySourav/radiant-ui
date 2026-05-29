import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  User,
  Settings,
  LogOut,
  CreditCard,
  Mail,
  Plus,
  Search,
  Check,
  Github,
  Twitter,
  Facebook,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "./dropdown-menu";
import { Button } from "./button";

const meta: Meta<typeof DropdownMenu> = { title: "UI/DropdownMenu", component: DropdownMenu };
export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Basic: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/** Items with checkboxes (multi-select). */
export const WithCheckboxes: Story = {
  render: function Render() {
    const [state, setState] = React.useState({ status: true, activity: false, panel: true });
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">View options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={state.status}
            onCheckedChange={(v) => setState((s) => ({ ...s, status: !!v }))}
          >
            Status bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={state.activity}
            onCheckedChange={(v) => setState((s) => ({ ...s, activity: !!v }))}
          >
            Activity bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={state.panel}
            onCheckedChange={(v) => setState((s) => ({ ...s, panel: !!v }))}
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `const [state, setState] = React.useState({ status: true, activity: false, panel: true });

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">View options</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem
      checked={state.status}
      onCheckedChange={(v) => setState((s) => ({ ...s, status: !!v }))}
    >
      Status bar
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem
      checked={state.activity}
      onCheckedChange={(v) => setState((s) => ({ ...s, activity: !!v }))}
    >
      Activity bar
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem
      checked={state.panel}
      onCheckedChange={(v) => setState((s) => ({ ...s, panel: !!v }))}
    >
      Panel
    </DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>`,
      },
    },
  },
};


/** Items with leading (left) icons. */
export const WithLeftIcons: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Account</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User style={{ marginRight: 8, height: 16, width: 16 }} /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard style={{ marginRight: 8, height: 16, width: 16 }} /> Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings style={{ marginRight: 8, height: 16, width: 16 }} /> Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut style={{ marginRight: 8, height: 16, width: 16 }} /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/** Single-select dropdown where the selected option shows a check on the right. */
export const SelectedCheckRight: Story = {
  render: function Render() {
    const options = ["Low", "Medium", "High", "Urgent"];
    const [value, setValue] = React.useState("Medium");
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Priority: {value}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Priority</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {options.map((opt) => (
            <DropdownMenuItem key={opt} onSelect={() => setValue(opt)}>
              <span style={{ flex: 1 }}>{opt}</span>
              {value === opt && <Check style={{ marginLeft: 8, height: 16, width: 16 }} />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `const options = ["Low", "Medium", "High", "Urgent"];
const [value, setValue] = React.useState("Medium");

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Priority: {value}</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Priority</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {options.map((opt) => (
      <DropdownMenuItem key={opt} onSelect={() => setValue(opt)}>
        <span style={{ flex: 1 }}>{opt}</span>
        {value === opt && <Check style={{ marginLeft: 8, height: 16, width: 16 }} />}
      </DropdownMenuItem>
    ))}
  </DropdownMenuContent>
</DropdownMenu>`,
      },
    },
  },
};


/** Dropdown with a search input that filters items. */
export const WithSearch: Story = {
  render: function Render() {
    const all = [
      "Alice Johnson",
      "Bob Williams",
      "Charlie Brown",
      "Diana Prince",
      "Ethan Hunt",
      "Fiona Gallagher",
      "George Costanza",
    ];
    const [query, setQuery] = React.useState("");
    const filtered = all.filter((n) => n.toLowerCase().includes(query.toLowerCase()));
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Assign to…</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              borderBottom: "1px solid hsl(var(--border))",
              padding: "8px",
              marginBottom: 4,
            }}
          >
            <Search style={{ height: 16, width: 16, opacity: 0.5 }} />
            <input
              placeholder="Search people..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: 14,
              }}
            />
          </div>
          <div style={{ maxHeight: 240, overflow: "auto" }}>
            {filtered.length ? (
              filtered.map((n) => <DropdownMenuItem key={n}>{n}</DropdownMenuItem>)
            ) : (
              <div style={{ padding: 12, textAlign: "center", fontSize: 14, opacity: 0.6 }}>
                No results.
              </div>
            )}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `const all = [
  "Alice Johnson",
  "Bob Williams",
  "Charlie Brown",
  "Diana Prince",
  "Ethan Hunt",
  "Fiona Gallagher",
  "George Costanza",
];
const [query, setQuery] = React.useState("");
const filtered = all.filter((n) => n.toLowerCase().includes(query.toLowerCase()));

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Assign to…</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        borderBottom: "1px solid hsl(var(--border))",
        padding: "8px",
        marginBottom: 4,
      }}
    >
      <Search style={{ height: 16, width: 16, opacity: 0.5 }} />
      <input
        placeholder="Search people..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          background: "transparent",
          fontSize: 14,
        }}
      />
    </div>
    <div style={{ maxHeight: 240, overflow: "auto" }}>
      {filtered.length ? (
        filtered.map((n) => <DropdownMenuItem key={n}>{n}</DropdownMenuItem>)
      ) : (
        <div style={{ padding: 12, textAlign: "center", fontSize: 14, opacity: 0.6 }}>
          No results.
        </div>
      )}
    </div>
  </DropdownMenuContent>
</DropdownMenu>`,
      },
    },
  },
};


/** Multi-level (nested) dropdown menu using Sub / SubTrigger / SubContent. */
export const MultiLevel: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">More actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Plus style={{ marginRight: 8, height: 16, width: 16 }} /> New file
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Mail style={{ marginRight: 8, height: 16, width: 16 }} /> Invite by email
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Plus style={{ marginRight: 8, height: 16, width: 16 }} /> Share
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Github style={{ marginRight: 8, height: 16, width: 16 }} /> GitHub
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Twitter style={{ marginRight: 8, height: 16, width: 16 }} /> Twitter
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Facebook style={{ marginRight: 8, height: 16, width: 16 }} /> Facebook
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>More…</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Slack</DropdownMenuItem>
                    <DropdownMenuItem>Discord</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/** Multi-select "Assign to" dropdown with search + checkboxes. Menu stays open while selecting. */
export const AssignToMultiSelect: Story = {
  render: function Render() {
    const all = [
      "Alice Johnson",
      "Bob Williams",
      "Charlie Brown",
      "Diana Prince",
      "Ethan Hunt",
      "Fiona Gallagher",
      "George Costanza",
    ];
    const [query, setQuery] = React.useState("");
    const [selected, setSelected] = React.useState<string[]>([]);
    const filtered = all.filter((n) => n.toLowerCase().includes(query.toLowerCase()));
    const toggle = (n: string) =>
      setSelected((s) => (s.includes(n) ? s.filter((x) => x !== n) : [...s, n]));
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Assign to{selected.length ? ` (${selected.length})` : "…"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          // Prevent the search input from being auto-focused away by Radix
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              borderBottom: "1px solid hsl(var(--border))",
              padding: 8,
              marginBottom: 4,
            }}
            // Let arrow keys / Enter / Escape bubble to Radix for menu navigation,
            // but stop typing keys so they don't trigger Radix typeahead.
            onKeyDown={(e) => {
              if (!["ArrowDown", "ArrowUp", "Enter", "Escape", "Tab"].includes(e.key)) {
                e.stopPropagation();
              }
            }}
          >
            <Search style={{ height: 16, width: 16, opacity: 0.5 }} />
            <input
              autoFocus
              placeholder="Search people..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: 14,
              }}
            />
          </div>
          <div style={{ maxHeight: 240, overflow: "auto" }}>
            {filtered.length ? (
              filtered.map((n) => (
                <DropdownMenuCheckboxItem
                  key={n}
                  checked={selected.includes(n)}
                  // Keep the menu open after each toggle (mouse + keyboard Enter/Space)
                  onSelect={(e) => e.preventDefault()}
                  onCheckedChange={() => toggle(n)}
                >
                  {n}
                </DropdownMenuCheckboxItem>
              ))
            ) : (
              <div style={{ padding: 12, textAlign: "center", fontSize: 14, opacity: 0.6 }}>
                No results.
              </div>
            )}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `const all = [
  "Alice Johnson",
  "Bob Williams",
  "Charlie Brown",
  "Diana Prince",
  "Ethan Hunt",
  "Fiona Gallagher",
  "George Costanza",
];
const [query, setQuery] = React.useState("");
const [selected, setSelected] = React.useState<string[]>([]);
const filtered = all.filter((n) => n.toLowerCase().includes(query.toLowerCase()));
const toggle = (n: string) =>
  setSelected((s) => (s.includes(n) ? s.filter((x) => x !== n) : [...s, n]));

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      Assign to{selected.length ? \` (\${selected.length})\` : "…"}
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        borderBottom: "1px solid hsl(var(--border))",
        padding: 8,
        marginBottom: 4,
      }}
      onKeyDown={(e) => {
        if (!["ArrowDown", "ArrowUp", "Enter", "Escape", "Tab"].includes(e.key)) {
          e.stopPropagation();
        }
      }}
    >
      <Search style={{ height: 16, width: 16, opacity: 0.5 }} />
      <input
        autoFocus
        placeholder="Search people..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          background: "transparent",
          fontSize: 14,
        }}
      />
    </div>
    <div style={{ maxHeight: 240, overflow: "auto" }}>
      {filtered.map((n) => (
        <DropdownMenuCheckboxItem
          key={n}
          checked={selected.includes(n)}
          onSelect={(e) => e.preventDefault()}
          onCheckedChange={() => toggle(n)}
        >
          {n}
        </DropdownMenuCheckboxItem>
      ))}
    </div>
  </DropdownMenuContent>
</DropdownMenu>`,
      },
    },
  },
};


/** Multi-select using a native `<input type="checkbox">` inside each menu item. Menu stays open. */
export const AssignToMultiSelectNativeCheckbox: Story = {
  render: function Render() {
    const all = [
      "Alice Johnson",
      "Bob Williams",
      "Charlie Brown",
      "Diana Prince",
      "Ethan Hunt",
      "Fiona Gallagher",
      "George Costanza",
    ];
    const [query, setQuery] = React.useState("");
    const [selected, setSelected] = React.useState<string[]>([]);
    const filtered = all.filter((n) => n.toLowerCase().includes(query.toLowerCase()));
    const toggle = (n: string) =>
      setSelected((s) => (s.includes(n) ? s.filter((x) => x !== n) : [...s, n]));
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Assign to{selected.length ? ` (${selected.length})` : "…"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              borderBottom: "1px solid hsl(var(--border))",
              padding: 8,
              marginBottom: 4,
            }}
            onKeyDown={(e) => {
              if (!["ArrowDown", "ArrowUp", "Enter", "Escape", "Tab"].includes(e.key)) {
                e.stopPropagation();
              }
            }}
          >
            <Search style={{ height: 16, width: 16, opacity: 0.5 }} />
            <input
              autoFocus
              placeholder="Search people..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: 14,
              }}
            />
          </div>
          <div style={{ maxHeight: 240, overflow: "auto" }}>
            {filtered.length ? (
              filtered.map((n) => (
                <DropdownMenuItem
                  key={n}
                  // Keep menu open on click / Enter / Space
                  onSelect={(e) => {
                    e.preventDefault();
                    toggle(n);
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(n)}
                    onChange={() => toggle(n)}
                    onClick={(e) => e.stopPropagation()}
                    style={{ marginRight: 8, cursor: "pointer" }}
                  />
                  {n}
                </DropdownMenuItem>
              ))
            ) : (
              <div style={{ padding: 12, textAlign: "center", fontSize: 14, opacity: 0.6 }}>
                No results.
              </div>
            )}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `const all = [
  "Alice Johnson",
  "Bob Williams",
  "Charlie Brown",
  "Diana Prince",
  "Ethan Hunt",
  "Fiona Gallagher",
  "George Costanza",
];
const [query, setQuery] = React.useState("");
const [selected, setSelected] = React.useState<string[]>([]);
const filtered = all.filter((n) => n.toLowerCase().includes(query.toLowerCase()));
const toggle = (n: string) =>
  setSelected((s) => (s.includes(n) ? s.filter((x) => x !== n) : [...s, n]));

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      Assign to{selected.length ? \` (\${selected.length})\` : "…"}
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        borderBottom: "1px solid hsl(var(--border))",
        padding: 8,
        marginBottom: 4,
      }}
      onKeyDown={(e) => {
        if (!["ArrowDown", "ArrowUp", "Enter", "Escape", "Tab"].includes(e.key)) {
          e.stopPropagation();
        }
      }}
    >
      <Search style={{ height: 16, width: 16, opacity: 0.5 }} />
      <input
        autoFocus
        placeholder="Search people..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          background: "transparent",
          fontSize: 14,
        }}
      />
    </div>
    <div style={{ maxHeight: 240, overflow: "auto" }}>
      {filtered.map((n) => (
        <DropdownMenuItem
          key={n}
          onSelect={(e) => {
            e.preventDefault();
            toggle(n);
          }}
        >
          <input
            type="checkbox"
            checked={selected.includes(n)}
            onChange={() => toggle(n)}
            onClick={(e) => e.stopPropagation()}
            style={{ marginRight: 8, cursor: "pointer" }}
          />
          {n}
        </DropdownMenuItem>
      ))}
    </div>
  </DropdownMenuContent>
</DropdownMenu>`,
      },
    },
  },
};



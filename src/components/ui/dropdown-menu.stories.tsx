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
import { Input } from "./input";

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
  render: () => {
    const Demo = () => {
      const [state, setState] = React.useState({ status: true, activity: false, panel: true });
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">View options</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
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
    };
    return <Demo />;
  },
};

/** Items with leading (left) icons. */
export const WithLeftIcons: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Account</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard className="mr-2 h-4 w-4" /> Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" /> Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/** Single-select dropdown where the selected option shows a check on the right. */
export const SelectedCheckRight: Story = {
  render: () => {
    const options = ["Low", "Medium", "High", "Urgent"];
    const Demo = () => {
      const [value, setValue] = React.useState("Medium");
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Priority: {value}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel>Priority</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {options.map((opt) => (
              <DropdownMenuItem key={opt} onSelect={() => setValue(opt)}>
                <span>{opt}</span>
                {value === opt && <Check className="ml-auto h-4 w-4" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    };
    return <Demo />;
  },
};

/** Dropdown with a search input that filters items. */
export const WithSearch: Story = {
  render: () => {
    const all = [
      "Alice Johnson",
      "Bob Williams",
      "Charlie Brown",
      "Diana Prince",
      "Ethan Hunt",
      "Fiona Gallagher",
      "George Costanza",
    ];
    const Demo = () => {
      const [query, setQuery] = React.useState("");
      const filtered = all.filter((n) => n.toLowerCase().includes(query.toLowerCase()));
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Assign to…</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 p-0">
            <div className="flex items-center gap-2 border-b px-2 py-2">
              <Search className="h-4 w-4 opacity-50" />
              <Input
                placeholder="Search people..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-8 border-0 focus-visible:ring-0"
              />
            </div>
            <div className="max-h-60 overflow-auto p-1">
              {filtered.length ? (
                filtered.map((n) => <DropdownMenuItem key={n}>{n}</DropdownMenuItem>)
              ) : (
                <div className="p-3 text-center text-sm text-muted-foreground">No results.</div>
              )}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    };
    return <Demo />;
  },
};

/** Multi-level (nested) dropdown menu using Sub / SubTrigger / SubContent. */
export const MultiLevel: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">More actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <Plus className="mr-2 h-4 w-4" /> New file
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Mail className="mr-2 h-4 w-4" /> Invite by email
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Plus className="mr-2 h-4 w-4" /> Share
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Github className="mr-2 h-4 w-4" /> GitHub
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Twitter className="mr-2 h-4 w-4" /> Twitter
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Facebook className="mr-2 h-4 w-4" /> Facebook
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

import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  TagsAutocomplete,
  type TagsAutocompleteOption,
} from "./tags-autocomplete";

const meta: Meta<typeof TagsAutocomplete> = {
  title: "UI/TagsAutocomplete",
  component: TagsAutocomplete,
};
export default meta;
type Story = StoryObj<typeof TagsAutocomplete>;

const people: TagsAutocompleteOption[] = [
  {
    value: "ada@lovable.dev",
    label: "ada@lovable.dev",
    description: "Ada Lovelace",
    avatar: "https://i.pravatar.cc/40?u=ada",
    initials: "AL",
  },
  {
    value: "grace@lovable.dev",
    label: "grace@lovable.dev",
    description: "Grace Hopper",
    avatar: "https://i.pravatar.cc/40?u=grace",
    initials: "GH",
  },
  {
    value: "linus@lovable.dev",
    label: "linus@lovable.dev",
    description: "Linus Torvalds",
    avatar: "https://i.pravatar.cc/40?u=linus",
    initials: "LT",
  },
  {
    value: "margaret@lovable.dev",
    label: "margaret@lovable.dev",
    description: "Margaret Hamilton",
    avatar: "https://i.pravatar.cc/40?u=margaret",
    initials: "MH",
  },
];

export const Emails: Story = {
  render: function Render() {
    const [value, setValue] = React.useState<string[]>([]);
    return (
      <div style={{ width: 420 }}>
        <TagsAutocomplete
          options={people}
          value={value}
          onChange={setValue}
          placeholder="Type an email and press space..."
          validate={(v) => /^\S+@\S+\.\S+$/.test(v)}
        />
        <p style={{ marginTop: 8, fontSize: 12, opacity: 0.6 }}>
          Tags: {value.join(", ") || "(none)"}
        </p>
      </div>
    );
  },
};

export const FreeForm: Story = {
  render: function Render() {
    const [value, setValue] = React.useState<string[]>(["design", "react"]);
    return (
      <div style={{ width: 420 }}>
        <TagsAutocomplete
          value={value}
          onChange={setValue}
          placeholder="Add tags..."
        />
      </div>
    );
  },
};

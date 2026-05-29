import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Globe, Rocket, Zap, Flame, Leaf, Atom, Star } from "lucide-react";
import { Autocomplete, type AutocompleteOption } from "./autocomplete";

const meta: Meta<typeof Autocomplete> = {
  title: "UI/Autocomplete",
  component: Autocomplete,
};
export default meta;
type Story = StoryObj<typeof Autocomplete>;

const frameworks: AutocompleteOption[] = [
  { value: "next", label: "Next.js", description: "React framework" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "svelte", label: "SvelteKit" },
  { value: "nuxt", label: "Nuxt" },
  { value: "solid", label: "SolidStart" },
  { value: "qwik", label: "Qwik City", disabled: true },
];

const frameworksWithIcons: AutocompleteOption[] = [
  { value: "next", label: "Next.js", description: "React framework", icon: Rocket },
  { value: "remix", label: "Remix", icon: Globe },
  { value: "astro", label: "Astro", icon: Star },
  { value: "svelte", label: "SvelteKit", icon: Flame },
  { value: "nuxt", label: "Nuxt", icon: Leaf },
  { value: "solid", label: "SolidStart", icon: Atom },
  { value: "qwik", label: "Qwik City", icon: Zap },
];

export const Basic: Story = {
  render: function Render() {
    const [value, setValue] = React.useState("");
    return (
      <div style={{ width: 320 }}>
        <Autocomplete
          options={frameworks}
          value={value}
          onChange={setValue}
          placeholder="Select framework..."
        />
        <p style={{ marginTop: 8, fontSize: 12, opacity: 0.6 }}>
          Selected: {value || "(none)"}
        </p>
      </div>
    );
  },
};

export const WithInitial: Story = {
  render: function Render() {
    const [value, setValue] = React.useState("remix");
    return (
      <div style={{ width: 320 }}>
        <Autocomplete options={frameworks} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const WithLeftIcons: Story = {
  render: function Render() {
    const [value, setValue] = React.useState("");
    return (
      <div style={{ width: 320 }}>
        <Autocomplete
          options={frameworksWithIcons}
          value={value}
          onChange={setValue}
          placeholder="Pick a framework..."
        />
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `const frameworksWithIcons = [
  { value: "next", label: "Next.js", description: "React framework", icon: Rocket },
  { value: "remix", label: "Remix", icon: Globe },
  { value: "astro", label: "Astro", icon: Star },
  { value: "svelte", label: "SvelteKit", icon: Flame },
  { value: "nuxt", label: "Nuxt", icon: Leaf },
  { value: "solid", label: "SolidStart", icon: Atom },
  { value: "qwik", label: "Qwik City", icon: Zap },
];

<Autocomplete
  options={frameworksWithIcons}
  value={value}
  onChange={setValue}
  placeholder="Pick a framework..."
/>`,
      },
    },
  },
};

export const MultiSelect: Story = {
  render: function Render() {
    const [value, setValue] = React.useState<string[]>(["next"]);
    return (
      <div style={{ width: 360 }}>
        <Autocomplete
          multiple
          options={frameworks}
          value={value}
          onChange={setValue}
          placeholder="Pick multiple..."
        />
        <p style={{ marginTop: 8, fontSize: 12, opacity: 0.6 }}>
          Selected: {value.join(", ") || "(none)"}
        </p>
      </div>
    );
  },
};

export const MultiSelectWithIcons: Story = {
  render: function Render() {
    const [value, setValue] = React.useState<string[]>([]);
    return (
      <div style={{ width: 360 }}>
        <Autocomplete
          multiple
          options={frameworksWithIcons}
          value={value}
          onChange={setValue}
          placeholder="Pick multiple..."
        />
      </div>
    );
  },
};

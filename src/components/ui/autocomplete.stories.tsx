import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
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

export const Basic: Story = {
  render: () => {
    const Demo = () => {
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
    };
    return <Demo />;
  },
};

export const WithInitial: Story = {
  render: () => {
    const Demo = () => {
      const [value, setValue] = React.useState("remix");
      return (
        <div style={{ width: 320 }}>
          <Autocomplete options={frameworks} value={value} onChange={setValue} />
        </div>
      );
    };
    return <Demo />;
  },
};

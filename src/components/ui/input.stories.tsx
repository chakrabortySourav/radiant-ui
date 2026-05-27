import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Search, Mail, Eye, EyeOff, Upload, Phone } from "lucide-react";
import { Input } from "./input";
import { InputGroup, FormattedInput, FileInput } from "./input-extras";

const meta: Meta<typeof Input> = { title: "UI/Input", component: Input };
export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = { args: { placeholder: "Type here..." } };
export const Email: Story = { args: { type: "email", placeholder: "you@example.com" } };
export const Disabled: Story = { args: { disabled: true, placeholder: "Disabled" } };

/** All native HTML input types side-by-side. */
export const AllTypes: Story = {
  render: () => {
    const types = [
      "text",
      "email",
      "password",
      "number",
      "tel",
      "url",
      "search",
      "date",
      "time",
      "datetime-local",
      "month",
      "week",
      "color",
    ] as const;
    return (
      <div style={{ display: "grid", gap: 12, maxWidth: 360 }}>
        {types.map((t) => (
          <label key={t} style={{ fontSize: 13, display: "grid", gap: 4 }}>
            <span style={{ opacity: 0.7 }}>{t}</span>
            <Input type={t} placeholder={t} />
          </label>
        ))}
      </div>
    );
  },
};

/** Phone-number input — just pass a mask via the `format` string prop. */
export const PhoneFormatted: Story = {
  render: function Render() {
    const [phone, setPhone] = React.useState("");
    return (
      <div style={{ display: "grid", gap: 8, maxWidth: 320 }}>
        <FormattedInput
          format="(###) ###-####"
          onValueChange={setPhone}
          placeholder="(555) 555-5555"
        />
        <small style={{ opacity: 0.6 }}>Raw value: {phone || "(empty)"}</small>
      </div>
    );
  },
};

/** Credit-card style mask. */
export const CardNumberFormatted: Story = {
  render: function Render() {
    const [card, setCard] = React.useState("");
    return (
      <div style={{ display: "grid", gap: 8, maxWidth: 320 }}>
        <FormattedInput
          format="#### #### #### ####"
          onValueChange={setCard}
          placeholder="4242 4242 4242 4242"
          inputMode="numeric"
        />
        <small style={{ opacity: 0.6 }}>Raw: {card || "(empty)"}</small>
      </div>
    );
  },
};

/** Upload control with icon, label and helper text. */
export const Upload_: Story = {
  name: "Upload",
  render: () => (
    <div style={{ maxWidth: 360 }}>
      <FileInput icon={<Upload />} label="Click to upload" helperText="PNG, JPG up to 5MB" />
    </div>
  ),
};

/** Input with a leading icon. */
export const WithLeftIcon: Story = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <InputGroup leftIcon={<Search />}>
        <Input placeholder="Search..." />
      </InputGroup>
    </div>
  ),
};

/** Input with a trailing icon. */
export const WithRightIcon: Story = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <InputGroup rightIcon={<Mail />}>
        <Input type="email" placeholder="you@example.com" />
      </InputGroup>
    </div>
  ),
};

/** Input with both leading and trailing icons (password reveal toggle). */
export const WithBothIcons: Story = {
  render: function Render() {
    const [shown, setShown] = React.useState(false);
    return (
      <div style={{ maxWidth: 320 }}>
        <InputGroup
          leftIcon={<Phone />}
          rightIcon={
            <button
              type="button"
              onClick={() => setShown((s) => !s)}
              style={{ pointerEvents: "auto", background: "transparent", border: 0, cursor: "pointer", color: "inherit" }}
              aria-label={shown ? "Hide" : "Show"}
            >
              {shown ? <EyeOff /> : <Eye />}
            </button>
          }
        >
          <Input type={shown ? "text" : "password"} placeholder="Password" />
        </InputGroup>
      </div>
    );
  },
};

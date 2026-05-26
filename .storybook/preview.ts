import type { Preview } from "@storybook/react";
import React from "react";
import "../src/globals.css";
import { UIProvider } from "../src/providers/ui-provider";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: { disable: true },
    docs: {
      source: {
        type: "dynamic",
        language: "tsx",
        excludeDecorators: true,
      },
      toc: true,
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
      },
    },
  },
  decorators: [
    (Story, ctx) => {
      const theme = (ctx.globals.theme as "light" | "dark") ?? "light";
      return React.createElement(
        UIProvider,
        { defaultTheme: theme },
        React.createElement(
          "div",
          { className: "p-6 bg-background text-foreground min-h-screen" },
          React.createElement(Story, null),
        ),
      );
    },
  ],
};

export default preview;

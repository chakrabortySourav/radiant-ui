import type { Config } from "tailwindcss";
import preset from "./src/tailwind-preset";

/**
 * This config is used for local development & Storybook only.
 * Consumers should extend `@company/ui-library/tailwind-preset` instead.
 */
export default {
  darkMode: ["class"],
  presets: [preset],
  content: [
    "./src/**/*.{ts,tsx}",
    "./.storybook/**/*.{ts,tsx}",
  ],
} satisfies Config;

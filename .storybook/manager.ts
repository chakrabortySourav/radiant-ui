import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",
  brandTitle: "ARC Design System",
  brandImage: "arc-logo.png",
  brandTarget: "_self",
});

addons.setConfig({ theme });

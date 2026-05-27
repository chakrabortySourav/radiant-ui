import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";
import logo from "./arc-logo.png";

const theme = create({
  base: "light",
  brandTitle: "ARC Design System",
  brandImage: logo,
  brandTarget: "_self",
});

addons.setConfig({ theme });

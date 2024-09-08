import { create } from "@storybook/theming";

const commonOptions = {
  brandTitle: "Building UIs that scale",
  brandUrl: "https://ruijadom.com/",
  brandTarget: "_blank",
};

export const light = create({
  base: "light",
  brandImage: "./logo-no-background.svg",
  ...commonOptions,
});

export const dark = create({
  base: "dark",
  brandImage: "./logo-no-background.svg",
  ...commonOptions,
});

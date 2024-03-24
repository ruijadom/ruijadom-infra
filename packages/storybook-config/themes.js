import { create } from "@storybook/theming";

const commonOptions = {
  brandTitle: "Ruijadom",
  brandUrl: "https://ruijadom.com/",
  brandTarget: "_blank",
};

export const light = create({
  base: "light",
  brandImage: "",
  ...commonOptions,
});

export const dark = create({
  base: "dark",
  brandImage: "",
  ...commonOptions,
});

import type { Meta, StoryObj } from "@storybook/react";

import { ButtonLink } from "./ButtonLink";

const meta = {
  title: "Components/ButtonLink",
  component: ButtonLink,
} satisfies Meta<typeof ButtonLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Link",
    href: "https://ruijadom.com/",
    target: "_blank",
  },
};

export const Primary: Story = {
  ...Default,
  args: {
    ...Default.args,
    variant: "primary",
  },
};

export const Text: Story = {
  ...Default,
  args: {
    ...Default.args,
    variant: "text",
  },
};

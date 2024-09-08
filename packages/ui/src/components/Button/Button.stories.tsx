import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "onClick" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
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

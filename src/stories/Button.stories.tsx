import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { Button } from "../components/Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      options: {
        black: { name: "Black", value: "#0f0f0f" },
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    text: "Button",
    className: "",
    style: {},
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    text: "Button",
    className: "",
    style: {},
  },
};

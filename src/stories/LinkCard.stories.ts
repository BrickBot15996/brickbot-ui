import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { LinkCard } from "../components/LinkCard";

const meta = {
  title: "LinkCard",
  component: LinkCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LinkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Link Title",
    displayLink: "brickbot.ro",
    icon: null,
    highlighted: false,
  },
};

export const Secondary: Story = {
  args: {
    title: "Link Title",
    displayLink: "brickbot.ro",
    icon: null,
    highlighted: false,
  },
};

import type { Meta, StoryObj } from "@storybook/react-vite";

import { DialogBox } from "../components/DialogBox";

const meta = {
  title: "DialogBox",
  component: DialogBox,
  parameters: {
    layout: "centered",
    backgrounds: {
      options: {
        black: { name: "Black", value: "#0f0f0f" },
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DialogBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: () => {
    return (
      <DialogBox>
        <div className="h-[10rem] w-[10rem]"></div>
      </DialogBox>
    );
  },
};

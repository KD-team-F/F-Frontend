import type { Meta, StoryObj } from "@storybook/react";
import { Item } from "./Item";

const meta: Meta<typeof Item> = {
  title: "Components/Item",
  component: Item,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Item>;

export const Default: Story = {
  args: {
    title: "質問題名(仮)",
    content: `質問内容
oooooooooooooooooooo
oooooooooooooooooooo`,
    date: "20xx/xx/xx",
  },
};
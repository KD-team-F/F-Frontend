import type { Meta, StoryObj } from "@storybook/react";
import  {Item}  from "./Item";

const meta: Meta<typeof Item> = {
  title: "Components/Item",
  component: Item,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    date: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Item>;

export const Default: Story = {
  args: {
    title: "質問題名(仮)",
    content: `質問内容
ooooooooooooooo
ooooooooooooooo`,
    date: "20xx/xx/xx",
  },
};

export const LongContent: Story = {
  args: {
    title: "長文テスト",
    content: `これは長い質問内容です。
改行もちゃんと表示されるかテストしています。
Tailwindのwhitespace-pre-wrapが効いているか確認。`,
    date: "2026/04/23",
  },
};

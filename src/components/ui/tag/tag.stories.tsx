import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tag>;

// デフォルト表示
export const Default: Story = {
  args: {
    label: "タグ 1",
  },
};

// 複数パターン（例）
export const LongText: Story = {
  args: {
    label: "長いタグテキスト",
  },
};

// カスタムクラス適用
export const CustomColor: Story = {
  args: {
    label: "カスタム",
    className: "bg-blue-400 text-white",
  },
};
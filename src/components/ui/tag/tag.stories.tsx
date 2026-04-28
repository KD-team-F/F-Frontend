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
    tagId: "485c14aa-d1f5-0124-e12a-8dbb56eb5703",
  },
};

// 複数パターン（例）
export const LongText: Story = {
  args: {
    label: "長いタグテキスト",
    tagId: "df8479fb-ef2b-c227-3511-229bd0dd8cb9",
  },
};

// カスタムクラス適用
export const CustomColor: Story = {
  args: {
    label: "カスタム",
    className: "bg-blue-400 text-white",
    tagId: "a2d0798c-5e2e-d4c0-37a7-cbf14cb8f8e0",
  },
};

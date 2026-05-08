import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: "React",
    tagId: "react",
  },
};

export const Active: Story = {
  args: {
    label: "React",
    tagId: "react",
    isActive: true,
  },
};

export const Clickable: Story = {
  args: {
    label: "TypeScript",
    tagId: "typescript",
    onClick: () => alert("タグがクリックされました"),
  },
};

export const LongText: Story = {
  args: {
    label: "長いタグテキスト",
    tagId: "long-text",
  },
};

export const CustomColor: Story = {
  args: {
    label: "カスタム",
    className: "bg-blue-400 text-white",
    tagId: "custom",
  },
};

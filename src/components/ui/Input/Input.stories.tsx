import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// 1. 基本形
export const Default: Story = {
  args: {
    label: "タイトル",
    placeholder: "タイトルを入力してください",
  },
};

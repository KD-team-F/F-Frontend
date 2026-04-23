import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    disabled: {
      control: 'boolean'
    },
  },
}

export default meta;
type Story = StoryObj<typeof Button>;

export const NextButton: Story = {
  args: {
    label: '次へ',
    variant: 'primary',
  },
}

export const BackButton: Story = {
  args: {
    label: '戻る',
    variant: 'secondary',
  },
}

export const PSubmitButton: Story = {
  args: {
    label: '送信',
    variant: 'primary',
  },
}

export const Disabled: Story = {
  args: {
    label: '送信',
    disabled: true,
  },
}
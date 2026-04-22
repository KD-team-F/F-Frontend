import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Elements/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'ボタン',
    variant: 'primary',
    size: 'md',
  },
}

export const Secondary: Story = {
  args: {
    label: 'ボタン',
    variant: 'secondary',
    size: 'md',
  },
}

export const Danger: Story = {
  args: {
    label: '削除',
    variant: 'danger',
    size: 'md',
  },
}

export const Small: Story = {
  args: {
    label: '小さいボタン',
    variant: 'primary',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    label: '大きいボタン',
    variant: 'primary',
    size: 'lg',
  },
}

export const Disabled: Story = {
  args: {
    label: '無効',
    variant: 'primary',
    disabled: true,
  },
}

import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SampleButton } from './SampleButton'

const meta: Meta<typeof SampleButton> = {
  title: 'Elements/SampleButton',
  component: SampleButton,
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
type Story = StoryObj<typeof SampleButton>

export const Primary: Story = {
  args: {
    label: 'サンプルボタン',
    variant: 'primary',
    size: 'md',
  },
}

export const Secondary: Story = {
  args: {
    label: 'サンプルボタン',
    variant: 'secondary',
    size: 'md',
  },
}

export const Danger: Story = {
  args: {
    label: 'サンプルボタン',
    variant: 'danger',
    size: 'md',
  },
}

export const Small: Story = {
  args: {
    label: 'サンプルボタン',
    variant: 'primary',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    label: 'サンプルボタン',
    variant: 'primary',
    size: 'lg',
  },
}

export const Disabled: Story = {
  args: {
    label: 'サンプルボタン',
    variant: 'primary',
    disabled: true,
  },
}

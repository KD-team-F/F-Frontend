import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { IconCircle } from './Icon'

const meta: Meta<typeof IconCircle> = {
  title: 'UI/IconCircle',
  component: IconCircle,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof IconCircle>

export const Default: Story = {
  args: {
    name: 'home',
    size: 120,
  },
}

export const UserIcon: Story = {
  args: {
    name: 'user',
    size: 120,
  },
}

export const Large: Story = {
  args: {
    name: 'settings',
    size: 200,
  },
}

export const Small: Story = {
  args: {
    name: 'home',
    size: 80,
  },
}
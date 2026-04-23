import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { PostDate } from './PostDate'

const meta: Meta<typeof PostDate> = {
  title: 'UI/PostDate',
  component: PostDate,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PostDate>

export const Default: Story = {
  args: {
    date: '2025/04/23',
  },
}

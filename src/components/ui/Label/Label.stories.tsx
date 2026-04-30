import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Label } from './Label'

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: '質問の内容',
  },
}

export const Required: Story = {
  args: {
    children: '質問の内容',
    required: true,
  },
}

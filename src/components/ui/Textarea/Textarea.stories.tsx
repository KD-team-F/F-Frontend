import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Textarea } from './Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    placeholder: 'ここに入力してください...',
    rows: 8,
  },
}

export const WithValue: Story = {
  args: {
    defaultValue: 'サンプルのテキストが入っています。',
    rows: 8,
  },
}

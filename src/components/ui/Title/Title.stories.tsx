import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Title } from './Title'

const meta: Meta<typeof Title> = {
  title: 'Elements/Title',
  component: Title,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Title>

export const Default: Story = {
  args: {
    children: '記事タイトル',
  },
}

export const Long: Story = {
  args: {
    children: 'これは非常に長いタイトルのサンプルです。記事タイトルが長くなった場合の表示を確認します。',
  },
}

export const Short: Story = {
  args: {
    children: '短いタイトル',
  },
}

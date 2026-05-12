import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { DeleteIcon } from './delete-icon'

const meta: Meta<typeof DeleteIcon> = {
  title: 'Components/DeleteIcon',
  component: DeleteIcon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof DeleteIcon>

export const Default: Story = {
  args: {
    onClick: () => alert('削除ボタンがクリックされました'),
  },
}

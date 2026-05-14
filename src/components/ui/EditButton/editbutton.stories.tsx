import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { EditButton } from './editbutton'

const meta: Meta<typeof EditButton> = {
  title: 'Components/UI/EditButton',
  component: EditButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof EditButton>

export const Default: Story = {
  args: {},
}

export const WithClickEvent: Story = {
  args: {
    onClick: () => {
      alert('編集ボタンがクリックされました')
    },
  },
}

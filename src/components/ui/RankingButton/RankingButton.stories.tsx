import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { RankingButton } from './RankingButton'

const meta: Meta<typeof RankingButton> = {
  title: 'Components/UI/RankingButton',
  component: RankingButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof RankingButton>

export const Default: Story = {
  args: {
    href: '/ranking',
  },
}

export const CustomPath: Story = {
  args: {
    href: '/articles/ranking',
  },
}

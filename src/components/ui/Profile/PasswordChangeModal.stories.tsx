import type { Meta, StoryObj } from '@storybook/react'
import { PasswordChangeModal } from './ChangePasswordModal'

const meta: Meta<typeof PasswordChangeModal> = {
  title: 'User/PasswordChangeModal',
  component: PasswordChangeModal,
}

export default meta

type Story = StoryObj<typeof PasswordChangeModal>

export const Default: Story = {}

import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SignUp } from './SignUp'

const meta: Meta<typeof SignUp> = {
  title: 'Features/User/SignUp',
  component: SignUp,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof SignUp>

const successSubmit = async (formData: {
  userId: string
  grade: number
  department: string
  email: string
  password: string
  passwordConfirm: string
}) : Promise<void> => {

  await new Promise((resolve) => setTimeout(resolve, 500))
  console.log('登録データ:', formData)
}

const failureSubmit = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  throw new Error('登録に失敗しました')
}

const loadingSubmit = async (): Promise<void> => {
  return new Promise(() => {})
}

/** 初期状態（未入力） */
export const Default: Story = {
  args: {
    onSubmit: successSubmit,
  },
}

/** 登録ボタンを押すと永続的にローディング状態になる */
export const Loading: Story = {
  args: {
    onSubmit: loadingSubmit,
  },
}

/** 登録ボタンを押すとエラーがスローされる */
export const WithFailure: Story = {
  args: {
    onSubmit: failureSubmit,
  },
}

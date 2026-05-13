import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SignIn } from './SignIn'

const meta: Meta<typeof SignIn> = {
  title: 'Features/User/SignIn',
  component: SignIn,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof SignIn>

const successSubmit = async (formData: {
  email: string
  password: string
}): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  console.log('ログインデータ:', formData)
} 

const failureSubmit = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  throw new Error('ログインに失敗しました')
}

const loadingSubmit = async (): Promise<void> => {
  return new Promise(() => {})
}

/** 初期状態（未入力） */
export const Default: Story = {
  args: {
    onSubmit: successSubmit,
    onNavigateToSignUp: () => console.log('登録画面へ遷移'),
  },
}

/** ログインボタンを押すと永続的にローディング状態になる */
export const Loading: Story = {
  args: {
    onSubmit: loadingSubmit,
    onNavigateToSignUp: () => console.log('登録画面へ遷移'),
  },
}

/** ログインボタンを押すとエラーがスローされる */
export const WithFailure: Story = {
  args: {
    onSubmit: failureSubmit,
    onNavigateToSignUp: () => console.log('登録画面へ遷移'),
  },
}

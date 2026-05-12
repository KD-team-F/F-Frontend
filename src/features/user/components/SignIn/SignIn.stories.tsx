import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SignIn } from './SignIn'

// Storybookのメタデータを定義します。
// これには、コンポーネントのタイトル、使用するコンポーネント、タグ、およびパラメーターが含まれます。
const meta: Meta<typeof SignIn> = {
  
  // Storybookのサイドバーに表示されるタイトルを定義します。
  // ここでは、Features/User/SignInという階層で表示されます。
  title: 'Features/User/SignIn',
  component: SignIn,

  // Storybookで表示されるコンポーネントのタグを定義します。
  tags: ['autodocs'],
  
  // Storybookのパラメーターを定義します。
  // ここでは、レイアウトを全画面表示に設定しています。
  parameters: {
    layout: 'fullscreen',
  },
}

// Storybookのメタデータをエクスポートします。
export default meta

// StoryObjは、SignInコンポーネントのストーリーの型を定義します。
type Story = StoryObj<typeof SignIn>

// Storybookのストーリーを定義します。
const successSubmit = async (formData: {
  email: string
  password: string
  
  // フォームデータの型を定義します。
  // ここでは、メールアドレスとパスワードが含まれます。
}): Promise<void> => {

  // ログイン処理をシミュレートするために、500ミリ秒の遅延を追加します。
  await new Promise((resolve) => setTimeout(resolve, 500))
  
  // ログインに成功したことを示すメッセージをコンソールに出力します。
  console.log('ログインデータ:', formData)
}

// ログインに失敗するシナリオをシミュレートするための関数を定義します。
const failureSubmit = async (): Promise<void> => {
  // ログイン処理をシミュレートするために、500ミリ秒の遅延を追加します。
  await new Promise((resolve) => setTimeout(resolve, 500))
  // ログインに失敗したことを示すエラーメッセージをコンソールに出力します。
  throw new Error('ログインに失敗しました')
}

// ログイン処理をシミュレートするための関数を定義します。
// この関数は、永続的にローディング状態を維持するために、解決されないPromiseを返します。
const loadingSubmit = async (): Promise<void> => {
  return new Promise(() => {})
}

/** 初期状態（未入力） */
export const Default: Story = {

  // ストーリーの引数を定義します。
  // ここでは、onSubmitに成功するシナリオをシミュレートする関数を渡し、
  // onNavigateToSignUpには登録画面への遷移をコンソールに出力する関数を渡します。
  args: {
    onSubmit: successSubmit,
    onNavigateToSignUp: () => console.log('登録画面へ遷移'),
  },
}

/** ログインボタンを押すと永続的にローディング状態になる */
export const Loading: Story = {

  // ストーリーの引数を定義します。
  // ここでは、onSubmitに永続的にローディング状態を維持する関数を渡し、
  // onNavigateToSignUpには登録画面への遷移をコンソールに出力する関数を渡します。
  args: {
    onSubmit: loadingSubmit,
    onNavigateToSignUp: () => console.log('登録画面へ遷移'),
  },
}

/** ログインボタンを押すとエラーがスローされる */
export const WithFailure: Story = {

  // ストーリーの引数を定義します。
  // ここでは、onSubmitにログインに失敗するシナリオをシミュレートする関数を渡し、
  // onNavigateToSignUpには登録画面への遷移をコンソールに出力する関数を渡します。
  args: {
    onSubmit: failureSubmit,
    onNavigateToSignUp: () => console.log('登録画面へ遷移'),
  },
}

import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SignUp } from './SignUp'

// Storybookのメタデータを定義します。
// これには、コンポーネントのタイトル、使用するコンポーネント、タグ、およびパラメーターが含まれます。
const meta: Meta<typeof SignUp> = {
  
  // Storybookのサイドバーに表示されるタイトルを定義します。
  // ここでは、Features/User/SignUpという階層で表示されます。
  title: 'Features/User/SignUp',

  // Storybookで表示されるコンポーネントを定義します。
  component: SignUp,
  tags: ['autodocs'],
  
  // Storybookのパラメーターを定義します。ここでは、レイアウトを全画面表示に設定しています。
  parameters: {
    layout: 'fullscreen',
  },
}

// Storybookのメタデータをエクスポートします。
export default meta
// StoryObjは、SignUpコンポーネントのストーリーの型を定義します。
type Story = StoryObj<typeof SignUp>

// ログイン処理をシミュレートするための関数を定義します。ここでは、成功するシナリオをシミュレートしています。
const successSubmit = async (formData: {
  // フォームデータの型を定義します。
  // ここでは、ユーザーID、学年、学科、メールアドレス、パスワード、およびパスワード確認が含まれます。
  userId: string
  grade: string
  department: string
  email: string
  password: string
  passwordConfirm: string
}) : Promise<void> => {

  // 登録処理をシミュレートするために、500ミリ秒の遅延を追加します。
  await new Promise((resolve) => setTimeout(resolve, 500))
  // 登録に成功したことを示すメッセージをコンソールに出力します。
  console.log('登録データ:', formData)
}

// 登録に失敗するシナリオをシミュレートするための関数を定義します。
const failureSubmit = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  throw new Error('登録に失敗しました')
}

// 登録処理をシミュレートするための関数を定義します。
// この関数は、永続的にローディング状態を維持するために、解決されないPromiseを返します。
const loadingSubmit = async (): Promise<void> => {
  return new Promise(() => {})
}

/** 初期状態（未入力） */
export const Default: Story = {

  // ストーリーの引数を定義します。
  // ここでは、onSubmitに成功するシナリオをシミュレートする関数を渡し、
  // onNavigateToSignInにはログイン画面への遷移をコンソールに出力する関数を渡します。
  args: {
    onSubmit: successSubmit,
    onNavigateToSignIn: () => console.log('ログイン画面へ遷移'),
  },
}

/** 登録ボタンを押すと永続的にローディング状態になる */
export const Loading: Story = {
  // ストーリーの引数を定義します。
  // ここでは、onSubmitに永続的にローディング状態を維持する関数を渡し、
  // onNavigateToSignInにはログイン画面への遷移をコンソールに出力する関数を渡します。
  args: {
    onSubmit: loadingSubmit,
    onNavigateToSignIn: () => console.log('ログイン画面へ遷移'),
  },
}

/** 登録ボタンを押すとエラーがスローされる */
export const WithFailure: Story = {

  // ストーリーの引数を定義します。
  // ここでは、onSubmitに登録に失敗するシナリオをシミュレートする関数を渡し、
  // onNavigateToSignInにはログイン画面への遷移をコンソールに出力する関数を渡します。
  args: {
    onSubmit: failureSubmit,
    onNavigateToSignIn: () => console.log('ログイン画面へ遷移'),
  },
}

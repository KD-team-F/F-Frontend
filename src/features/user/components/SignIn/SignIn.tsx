'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'

// SignInPropsは、SignInコンポーネントが受け取るプロパティの型を定義します。
type SignInProps = {
  onSubmit?: (formData: {
    email: string
    password: string
  }) => void | Promise<void>
  onNavigateToSignUp?: () => void
}

// SignInコンポーネントは、ユーザーがメールアドレスとパスワードを入力してログインできるフォームを提供します。
export function SignIn({ onSubmit, onNavigateToSignUp }: SignInProps) {
  
  // useStateフックを使用して、メールアドレス、パスワード、送信状態、ステータスメッセージ、およびステータスタイプを管理します。
  const [email, setEmail] = useState('')
  
  // パスワードの状態を管理するためのuseStateフックを追加します。
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // ステータスメッセージとステータスタイプを管理するためのuseStateフックを追加します。
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [statusType, setStatusType] = useState<'info' | 'error'>('info')

  // handleSubmit関数は、ユーザーがログインボタンをクリックしたときに呼び出されます。
  const handleSubmit = async () => {
  
    // ステータスメッセージとステータスタイプを初期化し、送信状態をtrueにします。
    setStatusMessage(null)
    setStatusType('info')

    // onSubmitプロパティが提供されている場合は、メールアドレスとパスワードを渡して呼び出します。
    try {
      setIsSubmitting(true)
  
      // onSubmitがPromiseを返す場合は、awaitを使用して完了を待ちます。
      await onSubmit?.({
        email,
        password,
      })
    }
  
    // エラーが発生した場合は、ステータスメッセージをエラーメッセージに設定し、ステータスタイプを'error'に変更します。
    catch {
      setStatusMessage('エラーが発生しました')
      setStatusType('error')
    }
  
    // 最後に、送信状態をfalseに戻します。
    finally {
      setIsSubmitting(false)
    }
  }


  // SignInコンポーネントは、メールアドレス、パスワード、送信状態、ステータスメッセージ、およびステータスタイプを表示します。
  return (
    
    // 最小の高さを画面全体に設定し、中央に配置された背景色のあるコンテナを作成します。
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Sign In</h1>
        {isSubmitting ? (
          <div className="text-center text-blue-700 mb-6">ロード中です...</div>
        )
        
        // ステータスメッセージが存在する場合は、それを表示します。エラーの場合は赤色、情報の場合は青色で表示します。 
        : statusMessage ? (
          <div className={`text-center mb-6 ${statusType === 'error' ? 'text-red-600' : 'text-blue-700'}`}>
            {statusMessage}
          </div>
        )
  
        // ステータスメッセージが存在しない場合は、何も表示しません。
        : null}

        <div className="space-y-6">
          <div>
            <Input
              id="email"
              name="email"
              label="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="sample@email.com"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Input
              id="password"
              name="password"
              label="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isSubmitting}
            />
          </div>
          <div className="flex justify-center pt-4">
            <Button
              label="ログイン"
              onClick={handleSubmit}
              disabled={isSubmitting}
              variant="primary"
              className="w-full"
            />
          </div>
          <div className="text-center text-sm text-gray-600 py-4">
            はじめてご利用の方（新規会員登録）
          </div>
          <div className="flex justify-center">
            <Button
              label="新規登録はこちら"
              onClick={onNavigateToSignUp}
              disabled={isSubmitting}
              variant="secondary"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'

// SignUpPropsは、SignUpコンポーネントが受け取るプロパティの型を定義します。
type SignUpProps = {

  // onSubmitプロパティは、ユーザーがサインアップフォームを送信したときに呼び出される関数の型を定義します。
  // 送信されたフォームデータには、ユーザーID、学年、学科、メールアドレス、パスワード、およびパスワード確認が含まれます。
  onSubmit?: (formData: {
    userId: string
    grade: string
    department: string
    email: string
    password: string
    passwordConfirm: string
  }) => void | Promise<void>

  // onNavigateToSignInプロパティは、ユーザーがサインイン画面に移動したときに呼び出される関数の型を定義します。
  onNavigateToSignIn?: () => void
}

// SignUpコンポーネントは、ユーザーがサインアップできるフォームを提供します。
export function SignUp({ onSubmit, onNavigateToSignIn }: SignUpProps) {

  // useStateフックを使用して、
  // ユーザーID、学年、学科、メールアドレス、パスワード、パスワード確認、送信状態、ステータスメッセージ、およびステータスタイプを管理します。
  const [userId, setUserId] = useState('')
  const [grade, setGrade] = useState('')
  const [department, setDepartment] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [statusType, setStatusType] = useState<'info' | 'error'>('info')

  // handleSubmit関数は、ユーザーがサインアップボタンをクリックしたときに呼び出されます。
  const handleSubmit = async () => {

    // ステータスメッセージとステータスタイプを初期化し、送信状態をtrueにします。
    setStatusMessage(null)
    setStatusType('info')

    // パスワードとパスワード確認が一致しない場合は、
    // ステータスメッセージにエラーメッセージを設定し、ステータスタイプを'error'に変更して、関数を終了します。
    if (password !== passwordConfirm) {
      setStatusMessage('パスワードが違います')
      setStatusType('error')
      return
    }

    // onSubmitプロパティが提供されている場合は、フォームデータを渡して呼び出します。
    try {
      // onSubmitがPromiseを返す場合は、awaitを使用して完了を待ちます。
      setIsSubmitting(true)
      await onSubmit?.({
        userId,
        grade,
        department,
        email,
        password,
        passwordConfirm,
      })
    }
    // エラーが発生した場合は、
    // ステータスメッセージをエラーメッセージに設定し、ステータスタイプを'error'に変更します。
    catch {
      setStatusMessage('エラーが発生しました')
      setStatusType('error')
    }
    // 最後に、送信状態をfalseに戻します。
    finally {
      setIsSubmitting(false)
    }
  }


  // SignUpコンポーネントは、
  // ユーザーID、学年、学科、メールアドレス、パスワード、およびパスワード確認の入力フィールドとサインアップボタンを表示します。
  return (
    
    // 最小の高さを画面全体に設定し、中央に配置された背景色のあるコンテナを作成します。
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Sign Up</h1>
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
              id="userId"
              name="userId"
              label="userid"
              required
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="山田　太郎"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Input
              id="grade"
              name="grade"
              label="grade"
              required
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              placeholder="1年生"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Input
              id="department"
              name="department"
              label="department"
              required
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="ITエキスパート学科"
              disabled={isSubmitting}
            />
          </div>
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
          <div>
            <Input
              id="passwordConfirm"
              name="passwordConfirm"
              label="password(確認用)"
              type="password"
              required
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              disabled={isSubmitting}
            />
          </div>
          <div className="flex justify-center pt-4">
            <Button
              label="新規登録"
              onClick={handleSubmit}
              disabled={isSubmitting}
              variant="primary"
              className="w-full"
            />
          </div>
          <div className="text-center text-sm text-gray-600 py-4">
            既にサイトをご利用の方（ログイン）
          </div>
          <div className="flex justify-center">
            <Button
              label="ログインはこちら"
              onClick={onNavigateToSignIn}
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

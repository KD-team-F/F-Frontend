'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'
import { register } from '@/features/user/actions/register'

type SignUpProps = {
  onSubmit?: (formData: {
    userId: string
    grade: number
    department: string
    email: string
    password: string
    passwordConfirm: string
  }) => void | Promise<void>
  onNavigateToLogin?: () => void
}

export function SignUp({ onSubmit, onNavigateToLogin }: SignUpProps) {

  const [userId, setUserId] = useState('')
  const [grade, setGrade] = useState('')
  const [department, setDepartment] = useState<'0' | '1' | '2' | '3' | '4'>('0')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [statusType, setStatusType] = useState<'info' | 'error'>('info')
  
  const handleSubmit = async () => {
    if (!/^[\x20-\x7E]+$/.test(userId)) {
      setStatusMessage('userId は半角のみ入力できます')
      setStatusType('error')
      return
    }
    if (!/^[\x20-\x7E]+$/.test(email)) {
      setStatusMessage('email は半角のみ入力できます')
      setStatusType('error')
      return
    }
    setStatusMessage(null)
    setStatusType('info')
    setIsSubmitting(true)

    if (password !== passwordConfirm) {
      setStatusMessage('確認用パスワードが違います')
      setStatusType('error')
      setIsSubmitting(false)
      return
    }

    const parsedGrade = Number(grade)
    if (department === '0') {
      setStatusMessage('まだ学科が選択されていません')
      setStatusType('error')
      setIsSubmitting(false)
      return
    }
    if (!Number.isInteger(parsedGrade) || parsedGrade < 1 || parsedGrade > 4) {
      setStatusMessage('grade は 1〜4 の数値で指定してください')
      setStatusType('error')
      setIsSubmitting(false)
      return
    }

    try {
      if (onSubmit) {
        await onSubmit({
          userId,
          grade: parsedGrade,
          department,
          email,
          password,
          passwordConfirm,
        })
      } else {
        await register({
          userId,
          grade: parsedGrade,
          department,
          email,
          password,
        })
      }
    } catch (error) {
      setStatusMessage(
        error instanceof Error
          ? error.message
          : 'エラーが発生しました',
      )
      setStatusType('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Sign Up</h1>
        {isSubmitting ? (
          <div className="text-center text-blue-700 mb-6">ロード中です...</div>
        ) : statusMessage ? (
          <div className={`text-center mb-6 ${statusType === 'error' ? 'text-red-600' : 'text-blue-700'}`}>
            {statusMessage}
          </div>
        ) : null}

        <div className="space-y-6">
          <div>
            <Input
              id="userId"
              name="userId"
              label="userId"
              required
              value={userId}
              onChange={(e) => {
                const value = e.target.value

                if (/^[\x20-\x7E]*$/.test(value)) {
                  setUserId(value)
                }
              }}
              placeholder="yamada tarou"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Input
              id="grade"
              name="grade"
              label="grade"
              type="number"
              min="1"
              max="4"
              required
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              placeholder="1"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <select
              value={department}
              onChange={(e) =>
                setDepartment(e.target.value as '0' | '1' | '2' | '3' | '4')
              }
              disabled={isSubmitting}
              className="w-full border rounded px-3 py-2"
            >
              <option value="0">学科</option>
              <option value="1">AIシステム学科</option>
              <option value="2">情報処理学科</option>
              <option value="3">ITスペシャリスト学科</option>
              <option value="4">ITエキスパート学科</option>
            </select>
          </div>
          <div>
            <Input
              id="email"
              name="email"
              label="email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                const value = e.target.value

                if (/^[\x20-\x7E]*$/.test(value)) {
                  setEmail(value)
                }
              }}
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
              disabled={ isSubmitting || password.length < 8 || department === '0' }
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
              disabled={isSubmitting}
              onClick={onNavigateToLogin}
              variant="secondary"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'

type SignUpProps = {
  onSubmit?: (formData: {
    userId: string
    grade: string
    department: string
    email: string
    password: string
    passwordConfirm: string
  }) => void | Promise<void>
}

export function SignUp({ onSubmit }: SignUpProps) {

  const [userId, setUserId] = useState('')
  const [grade, setGrade] = useState('')
  const [department, setDepartment] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [statusType, setStatusType] = useState<'info' | 'error'>('info')
  
  const handleSubmit = async () => {

    setStatusMessage(null)
    setStatusType('info')

    if (password !== passwordConfirm) {
      setStatusMessage('確認用パスワードが違います')
      setStatusType('error')
      return
    } try {
      setIsSubmitting(true)
      await onSubmit?.({
        userId,
        grade,
        department,
        email,
        password,
        passwordConfirm,
      })
    } catch {
      setStatusMessage('エラーが発生しました')
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

'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'
import { login } from '@/features/user/actions/login'

type SignInProps = {
  onSubmit?: (formData: {
    email: string
    password: string
  }) => void | Promise<void>
}

export function SignIn({ onSubmit }: SignInProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [statusType, setStatusType] = useState<'info' | 'error'>('info')

  const handleSubmit = async () => {
    setStatusMessage(null)
    setStatusType('info')

    if (!/^[\x20-\x7E]+$/.test(email)) {
      setStatusMessage('email は半角のみ入力できます')
      setStatusType('error')
      return
    }
    if (password.length < 8) {
      setStatusMessage('password は8文字以上で指定してください')
      setStatusType('error')
      return
    }
    
    setIsSubmitting(true)

    try {
      if (onSubmit) {
        await onSubmit({
          email,
          password,
        })
      } else {
        await login({
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
        <h1 className="text-4xl font-bold text-center mb-8">Sign In</h1>
        {isSubmitting ? (
          <div className="text-center text-blue-700 mb-6">ロード中です...</div>
        )
        : statusMessage ? (
          <div className={`text-center mb-6 ${statusType === 'error' ? 'text-red-600' : 'text-blue-700'}`}>
            {statusMessage}
          </div>
        ) : null}
        <div className="space-y-6">
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

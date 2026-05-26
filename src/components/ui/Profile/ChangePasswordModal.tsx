'use client'

import { useState } from 'react'
import { ArrowLeft, Eye, EyeOff } from 'lucide-react'
import { Input } from '@/components/ui/Input/Input'
import { users } from '@/mocks/data/users'

type PasswordChangeModalProps = {
  onClose?: () => void
}

type FormErrors = {
  currentPassword?: string
  newPassword?: string
  confirmPassword?: string
}

export function PasswordChangeModal({
  onClose,
}: PasswordChangeModalProps) {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!currentPassword) {
      newErrors.currentPassword = '現在のパスワードを入力してください'
    } else if (currentPassword !== users[0].password) {
      newErrors.currentPassword = '現在のパスワードが正しくありません'
    }

    if (!newPassword) {
      newErrors.newPassword = '新しいパスワードを入力してください'
    } else if (newPassword.length < 8) {
      newErrors.newPassword = 'パスワードは8文字以上で入力してください'
    } else if (newPassword === currentPassword) {
      newErrors.newPassword = '現在のパスワードと異なるパスワードを設定してください'
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = '確認用パスワードを入力してください'
    } else if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = 'パスワードが一致しません'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = () => {
    if (!validate()) return
    users[0].password = newPassword
    onClose?.()
  }

  const EyeToggle = ({
    visible,
    onToggle,
  }: {
    visible: boolean
    onToggle: () => void
  }) => (
    <button
      type="button"
      onClick={onToggle}
      className="text-gray-400 hover:text-gray-600"
    >
      {visible ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
      <div className="relative w-full max-w-[520px] border border-gray-300 bg-white px-10 py-12 shadow-lg">

        {/* 戻るボタン */}
        <button
          onClick={onClose}
          className="absolute left-6 top-6 hover:opacity-70"
        >
          <ArrowLeft size={28} />
        </button>

        {/* タイトル */}
        <h2 className="mb-14 text-center text-4xl font-bold">
          パスワードを変更する
        </h2>

        {/* 入力欄 */}
        <div className="flex flex-col gap-8">

          <div className="flex flex-col gap-1">
            <Input
              type={showCurrent ? 'text' : 'password'}
              placeholder="現在のパスワード"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              suffix={<EyeToggle visible={showCurrent} onToggle={() => setShowCurrent((v) => !v)} />}
            />
            {errors.currentPassword && (
              <p className="text-sm text-red-500">{errors.currentPassword}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Input
              type={showNew ? 'text' : 'password'}
              placeholder="新しいパスワード"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              suffix={<EyeToggle visible={showNew} onToggle={() => setShowNew((v) => !v)} />}
            />
            {errors.newPassword && (
              <p className="text-sm text-red-500">{errors.newPassword}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Input
              type={showConfirm ? 'text' : 'password'}
              placeholder="新しいパスワード（確認用）"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              suffix={<EyeToggle visible={showConfirm} onToggle={() => setShowConfirm((v) => !v)} />}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">{errors.confirmPassword}</p>
            )}
          </div>

        </div>

        {/* ボタン */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={handleChange}
            className="
              w-[260px]
              rounded-full
              bg-sky-500
              py-3
              text-base
              font-bold
              text-white
              transition
              hover:bg-sky-600
            "
          >
            パスワード変更
          </button>
        </div>

      </div>
    </div>
  )
}

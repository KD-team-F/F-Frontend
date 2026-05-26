'use client'

import { useState } from 'react'
import { ArrowLeft, Eye, EyeOff } from 'lucide-react'
import { Input } from '@/components/ui/Input/Input'
import { users } from '@/mocks/data/users'

type PasswordChangeModalProps = {
  onClose?: () => void
}

export function PasswordChangeModal({
  onClose,
}: PasswordChangeModalProps) {
  const [newPassword, setNewPassword] = useState('')
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleChange = () => {
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

          <Input
            type={showCurrent ? 'text' : 'password'}
            placeholder="現在のパスワード"
            suffix={<EyeToggle visible={showCurrent} onToggle={() => setShowCurrent((v) => !v)} />}
          />

          <Input
            type={showNew ? 'text' : 'password'}
            placeholder="新しいパスワード"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            suffix={<EyeToggle visible={showNew} onToggle={() => setShowNew((v) => !v)} />}
          />

          <Input
            type={showConfirm ? 'text' : 'password'}
            placeholder="新しいパスワード（確認用）"
            suffix={<EyeToggle visible={showConfirm} onToggle={() => setShowConfirm((v) => !v)} />}
          />

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

'use client'

import { ArrowLeft } from 'lucide-react'
import { Input } from '@/components/ui/Input/Input'

type PasswordChangeModalProps = {
  onClose?: () => void
}

export function PasswordChangeModal({
  onClose,
}: PasswordChangeModalProps) {
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
            type="password"
            placeholder="現在のパスワード"
          />

          <Input
            type="password"
            placeholder="新しいパスワード"
          />

          <Input
            type="password"
            placeholder="新しいパスワード（確認用）"
          />

        </div>

        {/* ボタン */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={onClose}
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

type DeleteConfirmModalProps = {
  onConfirm: () => void
  onCancel: () => void
  isDeleting?: boolean
}

export function DeleteConfirmModal({
  onConfirm,
  onCancel,
  isDeleting = false,
}: DeleteConfirmModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
      <div className="w-full max-w-[440px] border border-gray-300 bg-white px-10 py-12 shadow-lg">
        <p className="mb-10 text-center text-2xl font-bold">
          本当に削除していいですか？
        </p>
        <div className="flex justify-center gap-6">
          <button
            type="button"
            onClick={onCancel}
            disabled={isDeleting}
            className="
              w-[180px]
              h-[56px]
              border-2
              border-black
              rounded-full
              text-[22px]
              font-medium
              bg-white
              text-black
              transition
              duration-200
              hover:opacity-90
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            キャンセル
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isDeleting}
            className="
              w-[180px]
              h-[56px]
              border-2
              border-black
              rounded-full
              text-[22px]
              font-medium
              bg-[#FF4B4B]
              text-white
              transition
              duration-200
              hover:opacity-90
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {isDeleting ? "削除中…" : "OK"}
          </button>
        </div>
      </div>
    </div>
  )
}

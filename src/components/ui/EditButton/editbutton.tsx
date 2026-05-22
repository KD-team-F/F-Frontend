'use client'

import { useRouter } from 'next/navigation'

type EditButtonProps = {
  id?: string
  className?: string
}

export const EditButton = ({
  id,
  className = '',
}: EditButtonProps) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/articles/edit/${id}`)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="編集"
      className={`flex items-center justify-center transition-transform hover:scale-105 ${className}`}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ペン */}
        <path
          d="M10 34L14 24L30 8C31.6569 6.34315 34.3431 6.34315 36 8C37.6569 9.65685 37.6569 12.3431 36 14L20 30L10 34Z"
          fill="#1C1C1C"
        />

        {/* ペンの白ライン */}
        <path
          d="M31 11L17 25"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* 下線 */}
        <rect
          x="20"
          y="36"
          width="14"
          height="4"
          rx="2"
          fill="#1C1C1C"
        />
      </svg>
    </button>
  )
}

import Link from 'next/link'
import { PlusIcon } from '@/components/assets/PlusIcon'

type CreatePostButtonProps = {
  href?: string
  className?: string
}

export function CreatePostButton({
  href = '/articles/new',
  className = '',
}: CreatePostButtonProps) {
  return (
    <Link
      href={href}
      aria-label="投稿を作成"
      className={`
        fixed right-6 bottom-6 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-[#4169e1] text-white
        shadow-lg shadow-[#4169e1]/30
        hover:scale-105 hover:bg-[#3558c4]
        active:scale-95
        ${className}
      `}
    >
      <PlusIcon />
    </Link>
  )
}

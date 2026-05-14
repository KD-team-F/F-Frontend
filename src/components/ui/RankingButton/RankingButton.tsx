import Link from 'next/link'

type RankingButtonProps = {
  href?: string
  className?: string
}

export const RankingButton = ({
  href = '/ranking',
  className = '',
}: RankingButtonProps) => {
  return (
    <Link
      href={href}
      aria-label="ランキング画面へ"
      className={`
        group inline-flex items-center justify-center
        rounded-full bg-yellow-400
        p-4 shadow-lg
        transition-all duration-200
        hover:scale-110 hover:bg-yellow-300
        active:scale-95
        ${className}
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-10 w-10 text-yellow-900 transition-transform duration-200 group-hover:-translate-y-0.5"
      >
        <path d="M18 16H6L4.5 8.5L8.5 11L12 5L15.5 11L19.5 8.5L18 16Z" />
        <path d="M5 18H19V20H5V18Z" />
        <circle cx="12" cy="13" r="1.5" fill="#FACC15" />
      </svg>
    </Link>
  )
}

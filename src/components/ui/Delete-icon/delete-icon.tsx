type Props = {
  onClick?: () => void
}

export const DeleteIcon = ({ onClick }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 text-[#FF4B4B] hover:opacity-80 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h18" />
        <path d="M8 6V4h8v2" />
        <path d="M19 6l-1 14H6L5 6" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
      </svg>

      <span className="text-[32px] font-medium leading-none">
        投稿を削除
      </span>
    </button>
  )
}

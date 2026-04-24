type ButtonProps = {
  label: string
  onClick?: () => void
  variant?: "primary" | "secondary"
  disabled?: boolean
  className?: string
}

export function Button({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
}: ButtonProps) {

  const variantStyle = {
    primary: "bg-[#7f95f5] text-black",
    secondary: "bg-white text-black",
  }

  const disabledStyle = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer hover:opacity-90"

  return (
    <button
      className={`
        w-[140px]
        h-[56px]
        border-2
        border-black
        rounded-full
        text-[28px]
        font-medium
        transition
        duration-200
        ${variantStyle[variant]}
        ${disabledStyle}
        ${className}
        `}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

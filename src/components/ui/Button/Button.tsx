type ButtonProps = {
  label: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

export function Button({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
}: ButtonProps) {
  const baseStyle = {
    width: '140px',
    height: '56px',
    border: '2px solid #000',
    borderRadius: '999px',
    fontSize: '28px',
    fontWeight: 500,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: '0.2s',
    opacity: disabled ? 0.5 : 1,
  }

  const variantStyle = {
    primary: {
      backgroundColor: '#7f95f5',
      color: '#000',
    },
    secondary: {
      backgroundColor: '#ffffff',
      color: '#000',
    },
  }

  return (
    <button
      style={{
        ...baseStyle,
        ...variantStyle[variant],
      }}
      onClick={onClick}
      disabled={disabled}
      onMouseOver={(e) => {
        if (!disabled) {
          e.currentTarget.style.opacity = '0.9'
        }
      }}
      onMouseOut={(e) => {
        if (!disabled) {
          e.currentTarget.style.opacity = '1'
        }
      }}
    >
      {label}
    </button>
  )
}
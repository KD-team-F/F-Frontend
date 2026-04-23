import styles from './Button.module.css'

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
    return (
      <button
        className={`${styles.button} ${styles[variant]}`}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    )

}
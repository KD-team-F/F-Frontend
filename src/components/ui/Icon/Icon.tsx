type Props = {
  name: 'home' | 'user' | 'settings'
  size?: number
}

export function IconCircle({ name, size = 120 }: Props) {
  const icons = {
    home: <path d="M3 12L12 4l9 8v8a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z" />,
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      </>
    ),
    settings: <circle cx="12" cy="12" r="3" />,
  }

  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center bg-gray-200 rounded-full"
    >
      <svg
        viewBox="0 0 24 24"
        style={{ width: size * 0.7, height: size * 0.7 }}
      >
        {icons[name]}
      </svg>
    </div>
  )
}
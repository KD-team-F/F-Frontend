import type { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLHeadingElement> & {
  children: string
}

export function Title({ children, className = '', ...props }: Props) {
  return (
    <h1
      className={`text-2xl font-bold text-gray-900 border-b border-gray-200 pb-4 ${className}`}
      {...props}
    >
      {children}
    </h1>
  )
}

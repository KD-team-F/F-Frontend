import type { TextareaHTMLAttributes } from 'react'

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea({ className = '', ...props }: Props) {
  return (
    <textarea
      className={`block w-full resize-y rounded-xl bg-transparent px-5 py-4 pb-8 text-base text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4a6bff]/40 ${className}`}
      {...props}
    />
  )
}

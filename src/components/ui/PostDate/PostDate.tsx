import { format, parseISO, isValid } from 'date-fns'

type Props = {
  date: string
}

export function PostDate({ date }: Props) {
  const parsed = parseISO(date)
  const formatted = isValid(parsed) ? format(parsed, 'yyyy/MM/dd HH:mm') : date

  return (
    <time className="text-sm text-gray-500">
      {formatted}
    </time>
  )
}

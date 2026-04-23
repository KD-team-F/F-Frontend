type Props = {
  date: string
}

export function PostDate({ date }: Props) {
  return (
    <time className="text-sm text-gray-500">
      {date}
    </time>
  )
}

import ReactMarkdown from 'react-markdown'

type MarkdownPreviewProps = {
  content: string
  minRows?: number
  emptyText?: string
}

export function MarkdownPreview({
  content,
  minRows = 10,
  emptyText = 'プレビューする内容がありません',
}: MarkdownPreviewProps) {
  const hasContent = content.trim().length > 0

  return (
    <div
      className="prose prose-neutral max-w-none px-5 py-4 pb-8"
      style={{ minHeight: `${minRows * 1.5}rem` }}
    >
      {hasContent ? (
        <ReactMarkdown>{content}</ReactMarkdown>
      ) : (
        <p className="text-gray-400">{emptyText}</p>
      )}
    </div>
  )
}

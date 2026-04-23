import ReactMarkdown from 'react-markdown'

type Props = {
  content: string
}

export function ArticleContent({ content }: Props) {
  return (
    <div className="prose prose-neutral max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

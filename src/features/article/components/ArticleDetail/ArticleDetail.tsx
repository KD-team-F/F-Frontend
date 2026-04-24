import { ArticleContent } from '@/components/ui/ArticleContent/ArticleContent'
import { PostDate } from '@/components/ui/PostDate/PostDate'
import { Title } from '@/components/ui/Title/Title'

type Props = {
  title: string
  date: string
  content: string
}

export function ArticleDetail({ title, date, content }: Props) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <Title>{title}</Title>
      <div className="flex items-center gap-4 mt-2 mb-8">
        {/* アイコン群がここに入る予定 */}
        <PostDate date={date} />
      </div>
      <ArticleContent content={content} />
    </article>
  )
}

import { ArticleContent } from '@/components/ui/ArticleContent/ArticleContent'
import { PostDate } from '@/components/ui/PostDate/PostDate'
import { Title } from '@/components/ui/Title/Title'
import { CommentSection } from '@/features/comment/components/CommentSection/CommentSection'
import type { Comment } from '@/features/comment/types/comment'

type Props = {
  title: string
  date: string
  content: string
  initialComments?: Comment[]
  onSubmit?: (content: string) => Promise<Comment>
}

export function ArticleDetail({ title, date, content, initialComments, onSubmit }: Props) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <Title>{title}</Title>
      <div className="flex items-center gap-4 mt-2 mb-8">
        {/* アイコン群がここに入る予定 */}
        <PostDate date={date} />
      </div>
      <ArticleContent content={content} />
      <hr className="my-8 border-gray-200" />
      <CommentSection initialComments={initialComments} onSubmit={onSubmit} />
    </article>
  )
}

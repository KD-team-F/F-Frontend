import { ArticleContent } from '@/components/ui/ArticleContent/ArticleContent'
import { PostDate } from '@/components/ui/PostDate/PostDate'
import { Title } from '@/components/ui/Title/Title'
import { Tag as TagUI } from '@/components/ui/tag/tag'
import { CommentSection } from '@/features/comment/components/CommentSection/CommentSection'
import type { Comment } from '@/features/comment/types/comment'
import { RatingHeart } from '@/components/ui/rating/rating'

type Tag = {
  id: string
  label: string
}

type ArticleDetailProps = {
  title: string
  date: string
  content: string
  tags?: Tag[]
  initialComments?: Comment[]
  onSubmit?: (content: string) => Promise<Comment>
}

export function ArticleDetail({
  title,
  date,
  content,
  tags = [],
  initialComments,
  onSubmit,
}: ArticleDetailProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <Title>{title}</Title>

      <div className="flex items-center gap-4 mt-2 mb-4">
        <PostDate date={date} />
        <div className="ml-auto" />
        <RatingHeart />
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <TagUI key={tag.id} tagId={tag.id} label={tag.label} />
          ))}
        </div>
      )}

      <ArticleContent content={content} />

      <hr className="my-8 border-gray-200" />

      <CommentSection
        initialComments={initialComments}
        onSubmit={onSubmit}
      />
    </article>
  )
}

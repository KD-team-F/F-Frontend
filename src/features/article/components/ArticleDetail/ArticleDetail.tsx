import { Header } from '@/components/layouts/Header/Header'
import { ArticleContent } from '@/components/ui/ArticleContent/ArticleContent'
import { PostDate } from '@/components/ui/PostDate/PostDate'
import { Title } from '@/components/ui/Title/Title'
import { Tag as TagUI } from '@/components/ui/tag/tag'
import { CommentSection } from '@/features/comment/components/CommentSection/CommentSection'
import type { Comment } from '@/features/comment/types/comment'
import { RatingHeart } from '@/components/ui/rating/rating'
import type { Tag as TagType } from '@/types/tag'
import { EditButton } from '@/components/ui/EditButton/editbutton'

type ArticleDetailProps = {
  title: string
  date: string
  content: string
  tags?: TagType[]
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
    <>
      <Header />

      <article className="max-w-3xl mx-auto px-4 py-8">
        <Title>{title}</Title>

        <div className="flex items-center justify-between mt-2">
          <PostDate date={date} />

          <div className="flex items-center gap-2">
            <EditButton />
            <RatingHeart />
          </div>
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 mb-8">
            {tags.map((tag: TagType) => (
              <TagUI
                key={tag.id}
                tagId={tag.id}
                label={tag.label}
              />
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
    </>
  )
}

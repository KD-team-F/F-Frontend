'use client'

import { IconCircle } from '@/components/ui/Icon/Icon'
import { PostDate } from '@/components/ui/PostDate/PostDate'
import { ArticleContent } from '@/components/ui/ArticleContent/ArticleContent'
import { MarkdownEditor } from '@/features/submission/components/MarkdownEditor/MarkdownEditor'
import { Button } from '@/components/ui/Button/Button'
import { useCommentSection } from '@/features/comment/hooks/useCommentSection'
import type { Comment } from '@/features/comment/types/comment'

type Props = {
  initialComments?: Comment[]
  onSubmit?: (content: string) => Promise<Comment>
}

export function CommentSection({ initialComments = [], onSubmit }: Props) {
  const { comments, text, setText, isLoading, error, handleSubmit } = useCommentSection({
    initialComments,
    onSubmit,
  })

  return (
    <section className="max-w-3xl mx-auto px-4 py-8">
      <p className="text-xl font-bold mb-6">コメント</p>

      <div className="space-y-6 mb-8">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-200 pb-6">
            <div className="flex items-center gap-3 mb-3">
              <IconCircle name="user" size={40} />
              <PostDate date={comment.date} />
            </div>
            <ArticleContent content={comment.content} />
          </div>
        ))}
      </div>

      <div>
        <MarkdownEditor
          label="コメント"
          value={text}
          onChange={setText}
          placeholder="コメントを入力..."
          rows={4}
        />
        {error && (
          <p className="mt-2 text-sm text-red-500">{error}</p>
        )}
        <div className="flex justify-end mt-3">
          <Button
            label="投稿"
            onClick={handleSubmit}
            disabled={isLoading || !text.trim()}
          />
        </div>
      </div>
    </section>
  )
}

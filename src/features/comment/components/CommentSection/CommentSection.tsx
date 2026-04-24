'use client'

import { useState } from 'react'
import { IconCircle } from '@/components/ui/Icon/Icon'
import { PostDate } from '@/components/ui/PostDate/PostDate'
import { ArticleContent } from '@/components/ui/ArticleContent/ArticleContent'
import { Textarea } from '@/components/ui/Textarea/Textarea'
import { Button } from '@/components/ui/Button/Button'
import { postComment } from '@/features/comment/api/commentApi'
import type { Comment } from '@/features/comment/types/comment'

type Props = {
  initialComments?: Comment[]
  onSubmit?: (content: string) => Promise<Comment>
}

export function CommentSection({ initialComments = [], onSubmit }: Props) {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submitFn = onSubmit ?? postComment

  const handleSubmit = async () => {
    if (!text.trim()) return
    setIsLoading(true)
    setError(null)
    try {
      const newComment = await submitFn(text)
      setComments((prev) => [...prev, newComment])
      setText('')
    } catch {
      setError('コメントの投稿に失敗しました。もう一度お試しください。')
    } finally {
      setIsLoading(false)
    }
  }

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

      <div className="border border-gray-200 rounded-xl">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="コメントを入力..."
          rows={4}
          disabled={isLoading}
        />
        {error && (
          <p className="px-5 pb-2 text-sm text-red-500">{error}</p>
        )}
        <div className="flex justify-end px-4 pb-4">
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

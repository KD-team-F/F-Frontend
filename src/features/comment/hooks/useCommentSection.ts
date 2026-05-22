import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { postComment } from '@/features/comment/api/commentApi'
import type { Comment } from '@/features/comment/types/comment'

type Props = {
  initialComments?: Comment[]
  onSubmit?: (articleId: string, content: string) => Promise<Comment>
}

export function useCommentSection({ initialComments = [], onSubmit }: Props) {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()
  const params = useParams()
  const articleId = params.id as string

  const submitFn = onSubmit || postComment
  
  const handleSubmit = async () => {
    if (!text.trim()) return
    setIsLoading(true)
    setError(null)
    try {
      const newComment = await submitFn(articleId, text)
      setComments((prev) => [...prev, newComment])
      setText('')
      router.refresh()
    } catch {
      setError('コメントの投稿に失敗しました。もう一度お試しください。')
    } finally {
      setIsLoading(false)
    }
  }

  return { comments, text, setText, isLoading, error, handleSubmit }
}

import type { Comment } from '@/features/comment/types/comment'

export async function postComment(articleId: string, content: string): Promise<Comment> {

  const response = await fetch(`/api/articles/${articleId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  })

  if (!response.ok) {
    throw new Error('コメントの送信に失敗しました')
  }

  const newComment = await response.json()

  return newComment
}

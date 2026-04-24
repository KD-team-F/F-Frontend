import type { Comment } from '@/features/comment/types/comment'

export async function postComment(content: string): Promise<Comment> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    id: crypto.randomUUID(),
    content,
    date: new Date().toISOString().split('T')[0],
  }
}

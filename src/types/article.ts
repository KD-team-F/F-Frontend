import type { Tag } from '@/types/tag'

export type ArticleCategory = 'question' | 'work'

export type Article = {
  id: string
  item: ArticleCategory
  title: string
  content: string
  date: string
  tags: Tag[]
}

export type ArticleItem = {
  id?: string
  title: string
  content: string
  date: string
  tags?: Tag[]
  likeCount?: number
  isLikedByCurrentUser?: boolean
}

export type ArticleRequestBody = {
  title: string
  content: string
  tag: unknown
}


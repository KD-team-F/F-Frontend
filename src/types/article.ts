import type { Tag } from '@/types/tag'

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
  title: string;
  content: string;
  tag: unknown;
};


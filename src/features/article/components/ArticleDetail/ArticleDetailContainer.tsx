'use client'

import { useArticleById } from '@/features/article/hooks/useArticleById'
import { ArticleDetail } from './ArticleDetail'

type Props = {
  articleId: string
}

export function ArticleDetailContainer({ articleId }: Props) {
  const { article, isLoading } = useArticleById(articleId)

  if (isLoading || !article) return null

  return (
    <ArticleDetail
      articleId={article.id}
      title={article.title}
      date={article.date}
      content={article.content}
      tags={article.tags}
      likeCount={article.likeCount}
      isLikedByCurrentUser={article.isLikedByCurrentUser}
      initialComments={article.initialComments}
    />
  )
}

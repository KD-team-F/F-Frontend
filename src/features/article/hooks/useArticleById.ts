'use client'

import { useEffect } from 'react'
import { notFound } from 'next/navigation'
import useSWR from 'swr'
import {
  ArticleNotFoundError,
  fetchArticleDetail,
} from '@/features/article/actions/fetchArticleDetail'

export function useArticleById(articleId: string | undefined) {
  const shouldFetch = articleId !== undefined

  const { data, error, isLoading } = useSWR(
    shouldFetch ? ['article-detail', articleId] : null,
    () => fetchArticleDetail(articleId!),
  )

  useEffect(() => {
    if (error instanceof ArticleNotFoundError) {
      notFound()
    }
  }, [error])

  return {
    article: data,
    isLoading: shouldFetch && isLoading,
    shouldFetch,
    error,
  }
}

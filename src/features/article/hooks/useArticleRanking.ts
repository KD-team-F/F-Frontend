'use client'

import useSWR from 'swr'
import { fetchArticleRanking } from '@/features/article/actions/fetchArticleRanking'
import type { ArticleItem } from '@/types/articleItem'

type UseArticleRankingOptions = {
  initialQuestionItems?: ArticleItem[]
  initialWorkItems?: ArticleItem[]
}

export function useArticleRanking({
  initialQuestionItems,
  initialWorkItems,
}: UseArticleRankingOptions = {}) {
  const shouldFetch =
    initialQuestionItems === undefined && initialWorkItems === undefined

  const { data } = useSWR(
    shouldFetch ? 'article-ranking' : null,
    fetchArticleRanking,
  )

  const questionItems = shouldFetch
    ? (data?.questionItems ?? [])
    : (initialQuestionItems ?? [])
  const workItems = shouldFetch
    ? (data?.workItems ?? [])
    : (initialWorkItems ?? [])

  return { questionItems, workItems }
}

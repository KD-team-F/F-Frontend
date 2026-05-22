'use client'

import useSWR from 'swr'
import type { ArticleItem } from '@/types/articleItem'

type UseArticleRankingOptions = {
  initialQuestionItems?: ArticleItem[]
  initialWorkItems?: ArticleItem[]
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function useArticleRanking({
  initialQuestionItems,
  initialWorkItems,
}: UseArticleRankingOptions = {}) {
  const shouldFetch = initialQuestionItems === undefined && initialWorkItems === undefined

  const { data: questionData, isLoading: questionLoading } = useSWR<ArticleItem[]>(
    shouldFetch ? '/api/articles/ranking?type=question' : null,
    fetcher,
  )
  const { data: workData, isLoading: workLoading } = useSWR<ArticleItem[]>(
    shouldFetch ? '/api/articles/ranking?type=work' : null,
    fetcher,
  )

  return {
    questionItems: shouldFetch ? (questionData ?? []) : (initialQuestionItems ?? []),
    workItems: shouldFetch ? (workData ?? []) : (initialWorkItems ?? []),
    isLoading: shouldFetch && (questionLoading || workLoading),
  }
}

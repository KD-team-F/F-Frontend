'use client'

import { useState } from 'react'
import useSWR from 'swr'
import type { ArticleItem } from '@/types/articleItem'

type RefreshResult = {
  questionItems: ArticleItem[]
  workItems: ArticleItem[]
}

type UseArticleListOptions = {
  initialQuestionItems?: ArticleItem[]
  initialWorkItems?: ArticleItem[]
  onRefresh?: () => Promise<RefreshResult>
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function useArticleList({
  initialQuestionItems,
  initialWorkItems,
  onRefresh,
}: UseArticleListOptions = {}) {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [updatedData, setUpdatedData] = useState<RefreshResult | null>(null)

  const shouldFetch = initialQuestionItems === undefined && initialWorkItems === undefined

  const { data: questionData } = useSWR<ArticleItem[]>(
    shouldFetch ? '/api/articles?item=question' : null,
    fetcher,
  )
  const { data: workData } = useSWR<ArticleItem[]>(
    shouldFetch ? '/api/articles?item=work' : null,
    fetcher,
  )

  const questionItems = updatedData?.questionItems ?? (shouldFetch ? (questionData ?? []) : (initialQuestionItems ?? []))
  const workItems = updatedData?.workItems ?? (shouldFetch ? (workData ?? []) : (initialWorkItems ?? []))

  const handleRefresh = async () => {
    setIsRefreshing(true)
    try {
      if (onRefresh) {
        const result = await onRefresh()
        setUpdatedData(result)
      } else {
        const res = await fetch('/api/articles/update', { method: 'POST' })
        const data: RefreshResult = await res.json()
        setUpdatedData(data)
      }
    } finally {
      setIsRefreshing(false)
    }
  }

  return {
    questionItems,
    workItems,
    isRefreshing,
    handleRefresh,
  }
}

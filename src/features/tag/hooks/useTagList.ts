'use client'

import useSWR from 'swr'
import { fetchTagList } from '@/features/tag/actions/fetchTagList'
import type { Tag } from '@/types/tag'

export function useTagList() {
  const { data, error, isLoading, mutate } = useSWR<Tag[]>(
    '/api/tags',
    fetchTagList,
  )

  return {
    tags: data ?? [],
    isLoading,
    error,
    retry: () => mutate(),
  }
}

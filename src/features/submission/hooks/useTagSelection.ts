'use client'

import { useMemo, useState } from 'react'
import {
  filterTagsByKeyword,
  resolveSelectedTags,
} from '@/features/submission/utils/tagSelection'
import type { Tag } from '@/types/tag'

export function useTagSelection(availableTags: Tag[]) {
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([])
  const [tagFilter, setTagFilter] = useState('')

  const selectedTags = useMemo(
    () => resolveSelectedTags(availableTags, selectedTagIds),
    [availableTags, selectedTagIds],
  )

  const filteredTags = useMemo(
    () => filterTagsByKeyword(availableTags, tagFilter),
    [availableTags, tagFilter],
  )

  const toggleTag = (id: string) => {
    setSelectedTagIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )
  }

  const clearTags = () => setSelectedTagIds([])

  return {
    selectedTagIds,
    selectedTags,
    filteredTags,
    tagFilter,
    setTagFilter,
    toggleTag,
    clearTags,
  }
}

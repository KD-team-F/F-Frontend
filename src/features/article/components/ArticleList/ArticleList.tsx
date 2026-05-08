'use client'

import { useState } from 'react'
import { ARTICLE_LIST_EXPANDED_LIMIT, ARTICLE_LIST_INITIAL_LIMIT } from '@/constants/articleList'
import { Item } from '@/components/ui/Item/Item'
import { Title } from '@/components/ui/Title/Title'
import { FilterTab } from '@/components/ui/FilterTab/FilterTab'
import { Tag } from '@/components/ui/tag/tag'
import type { ArticleItem } from '@/types/article'


type FilterType = 'question' | 'work'

type ArticleListProps = {
  questionItems: ArticleItem[]
  workItems: ArticleItem[]
}

const FILTER_CONFIG: { id: FilterType; label: string }[] = [
  { id: 'question', label: '質問' },
  { id: 'work', label: '制作物' },
]

export function ArticleList({ questionItems, workItems }: ArticleListProps) {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('question')
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([])
  const [expanded, setExpanded] = useState(false)

  const currentItems = selectedFilter === 'question' ? questionItems : workItems
  const currentTitle = selectedFilter === 'question' ? '質問' : '制作物'

  const filteredItems =
    selectedTagIds.length === 0
      ? currentItems
      : currentItems.filter((item) =>
          item.tags?.some((tag) => selectedTagIds.includes(tag.id))
        )

  const displayItems = expanded
    ? filteredItems.slice(0, ARTICLE_LIST_EXPANDED_LIMIT)
    : filteredItems.slice(0, ARTICLE_LIST_INITIAL_LIMIT)
  const showMore = !expanded && filteredItems.length > ARTICLE_LIST_INITIAL_LIMIT

  const allTags = Array.from(
    new Map(
      currentItems.flatMap((item) => item.tags ?? []).map((tag) => [tag.id, tag])
    ).values()
  )

  const handleFilterChange = (newFilter: FilterType) => {
    setSelectedFilter(newFilter)
    setSelectedTagIds([])
    setExpanded(false)
  }

  const handleTagToggle = (tagId: string) => {
    setSelectedTagIds((prev) =>
      prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
    )
    setExpanded(false)
  }

  const handleClearTags = () => {
    setSelectedTagIds([])
    setExpanded(false)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <Title>{currentTitle}</Title>
        <FilterTab
          options={FILTER_CONFIG}
          selected={selectedFilter}
          onChange={handleFilterChange}
        />
      </div>

      {allTags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {allTags.map((tag) => (
            <Tag
              key={tag.id}
              tagId={tag.id}
              label={tag.label}
              isActive={selectedTagIds.includes(tag.id)}
              onClick={() => handleTagToggle(tag.id)}
            />
          ))}
          {selectedTagIds.length > 0 && (
            <button
              onClick={handleClearTags}
              className="text-sm text-gray-500 underline hover:text-gray-700"
            >
              クリア
            </button>
          )}
        </div>
      )}

      <div className="mt-6">
        {displayItems.map((item, index) => (
          <Item
            key={index}
            title={item.title}
            content={item.content}
            date={item.date}
            tags={item.tags}
            selectedTagIds={selectedTagIds}
            onTagClick={handleTagToggle}
            likeCount={item.likeCount}
            isLikedByCurrentUser={item.isLikedByCurrentUser}
          />
        ))}
        {showMore && (
          <button
            onClick={() => setExpanded(true)}
            className="w-full text-center text-gray-400 text-xl tracking-widest mt-2 hover:text-gray-600 transition-colors"
          >
            ...
          </button>
        )}
      </div>
    </div>
  )
}

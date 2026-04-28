'use client'

import { useState } from 'react'
import { ARTICLE_LIST_EXPANDED_LIMIT, ARTICLE_LIST_INITIAL_LIMIT } from '@/constants/articleList'
import { Item } from '@/components/ui/Item/Item'
import { Title } from '@/components/ui/Title/Title'
import { FilterTab } from '@/components/ui/FilterTab/FilterTab'

type ArticleItem = {
  title: string
  content: string
  date: string
}

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
  const [expanded, setExpanded] = useState(false)

  const currentItems = selectedFilter === 'question' ? questionItems : workItems
  const currentTitle = selectedFilter === 'question' ? '質問' : '制作物'

  const displayItems = expanded
    ? currentItems.slice(0, ARTICLE_LIST_EXPANDED_LIMIT)
    : currentItems.slice(0, ARTICLE_LIST_INITIAL_LIMIT)
  const showMore = !expanded && currentItems.length > ARTICLE_LIST_INITIAL_LIMIT

  const handleFilterChange = (tag: FilterType) => {
    setSelectedFilter(tag)
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
      <div className="mt-6">
        {displayItems.map((item, index) => (
          <Item key={index} title={item.title} content={item.content} date={item.date} />
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

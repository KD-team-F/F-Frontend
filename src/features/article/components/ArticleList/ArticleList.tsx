'use client'

import { useState } from 'react'
import { ARTICLE_LIST_EXPANDED_LIMIT, ARTICLE_LIST_INITIAL_LIMIT } from '@/constants/articleList'
import { Item } from '@/components/ui/Item/Item'
import { Title } from '@/components/ui/Title/Title'

type ArticleItem = {
  title: string
  content: string
  date: string
}

type Props = {
  title: string
  items: ArticleItem[]
}

export function ArticleList({ title, items }: Props) {
  const [expanded, setExpanded] = useState(false)

  const displayItems = expanded ? items.slice(0, ARTICLE_LIST_EXPANDED_LIMIT) : items.slice(0, ARTICLE_LIST_INITIAL_LIMIT)
  const showMore = !expanded && items.length > ARTICLE_LIST_INITIAL_LIMIT

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Title>{title}</Title>
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

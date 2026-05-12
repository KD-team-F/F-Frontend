'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Item } from '@/components/ui/Item/Item'
import { Title } from '@/components/ui/Title/Title'
import { FilterTab } from '@/components/ui/FilterTab/FilterTab'
import { useMemo } from 'react'
import type { ArticleItem } from '@/types/article'

type FilterType = 'question' | 'work'

type ArticleRankingProps = {
  questionItems: ArticleItem[]
  workItems: ArticleItem[]
}

const FILTER_CONFIG: { id: FilterType; label: string }[] = [
  { id: 'question', label: '質問' },
  { id: 'work', label: '制作物' },
]

export function ArticleRanking({ questionItems, workItems }: ArticleRankingProps) {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('question')

  const currentItems = selectedFilter === 'question' ? questionItems : workItems;

  const sortedItems = useMemo(() => {
    return [...currentItems]
      .sort((a, b) => {
        const diff = (b.likeCount ?? 0) - (a.likeCount ?? 0);
        if (diff !== 0) return diff;
        return new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime();
      })
      .slice(0, 10);
  }, [currentItems]);

  

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <Title>{`${selectedFilter === 'question' ? '質問' : '制作物'}ランキング`}</Title>
        <FilterTab
          options={FILTER_CONFIG}
          selected={selectedFilter}
          onChange={(val) => setSelectedFilter(val as FilterType)}
        />
      </div>

      <div className="space-y-6">
        {sortedItems.length === 0 ? (
          <p className="text-gray-500 text-center py-10">データがありません</p>
        ) : (
          sortedItems.map((item, index) => {
            const itemNode = (
              <div className="relative pl-12">
                {/* 順位バッジ */}
                <div className={`absolute left-0 top-0 w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm
                  ${index === 0 ? 'bg-yellow-400 text-white shadow-sm' : 
                    index === 1 ? 'bg-gray-300 text-white' : 
                    index === 2 ? 'bg-orange-400 text-white' : 'text-gray-400 border border-gray-200'}`}
                >
                  {index + 1}
                </div>
                
                <Item
                  title={item.title}
                  content={item.content}
                  date={item.date}
                  tags={item.tags}
                  likeCount={item.likeCount}
                  isLikedByCurrentUser={item.isLikedByCurrentUser}
                  selectedTagIds={[]}
                />
              </div>
            )

            if (!item.id) return <div key={index}>{itemNode}</div>

            return (
              <Link key={item.id} href={`/articles/${item.id}`} className="block hover:opacity-80 transition-opacity">
                {itemNode}
              </Link>
            )
          })
        )}
      </div>
    </div>
  )
}

'use client'

import { useState, useMemo } from 'react'

import Link from 'next/link'

import { Item } from '@/components/ui/Item/Item'
import { Title } from '@/components/ui/Title/Title'
import { FilterTab } from '@/components/ui/FilterTab/FilterTab'

import type { ArticleItem } from '@/types/articleItem'

const DISPLAY_LIMIT = 10
const EPOCH_TIME = 0

const RANK_GOLD = 1
const RANK_SILVER = 2
const RANK_BRONZE = 3
const RANK_OFFSET = 1

type FilterType = 'question' | 'work'

type ArticleRankingProps = {
  questionItems: ArticleItem[]
  workItems: ArticleItem[]
}

const FILTER_CONFIG: {
  id: FilterType
  label: string
}[] = [
  { id: 'question', label: '質問' },
  { id: 'work', label: '制作物' },
]

const RANK_BADGE_STYLES: Record<number, string> = {
  [RANK_GOLD]: 'bg-yellow-400 text-white shadow-sm',
  [RANK_SILVER]: 'bg-gray-300 text-white',
  [RANK_BRONZE]: 'bg-orange-400 text-white',
}

const DEFAULT_BADGE_STYLE =
  'text-gray-400 border border-gray-200'

const getRankBadgeStyle = (
  rank: number
): string => {
  return (
    RANK_BADGE_STYLES[rank] ??
    DEFAULT_BADGE_STYLE
  )
}

export function ArticleRanking({
  questionItems,
  workItems,
}: ArticleRankingProps) {

  const [selectedFilter, setSelectedFilter] =
    useState<FilterType>('question')

  const currentItems =
    selectedFilter === 'question'
      ? questionItems
      : workItems

  const sortedItems = useMemo(() => {

    return [...currentItems]
      .sort((a, b) => {

        const diff =
          (b.likeCount ?? 0) -
          (a.likeCount ?? 0)

        if (diff !== 0) return diff

        const dateA = new Date(
          a.date || EPOCH_TIME
        ).getTime()

        const dateB = new Date(
          b.date || EPOCH_TIME
        ).getTime()

        return dateB - dateA

      })
      .slice(0, DISPLAY_LIMIT)

  }, [currentItems])

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">

      <div className="flex items-center justify-between mb-8">

        <Title>
          {`${selectedFilter === 'question'
            ? '質問'
            : '制作物'
          }ランキング`}
        </Title>

        <FilterTab
          options={FILTER_CONFIG}
          selected={selectedFilter}
          onChange={(val) =>
            setSelectedFilter(val as FilterType)
          }
        />

      </div>

      <div className="space-y-6">

        {sortedItems.length === 0 ? (

          <p className="text-gray-500 text-center py-10">
            データがありません
          </p>

        ) : (

          sortedItems.map((item, index) => {

            const rank = index + RANK_OFFSET

            const itemNode = (

              <div className="relative pl-12">

                <div
                  className={`
                    absolute left-0 top-0
                    w-10 h-10
                    flex items-center justify-center
                    rounded-full font-bold text-sm
                    ${getRankBadgeStyle(rank)}
                  `}
                >
                  {rank}
                </div>

                <Item
                  title={item.title}
                  content={item.content}
                  date={item.date}
                  tags={item.tags}
                  likeCount={item.likeCount}
                  isLikedByCurrentUser={
                    item.isLikedByCurrentUser
                  }
                  selectedTagIds={[]}
                />

              </div>
            )

            if (!item.id) {
              return (
                <div key={index}>
                  {itemNode}
                </div>
              )
            }

            return (
              <Link
                key={item.id}
                href={`/articles/${item.id}?from=ranking`}
                className="block hover:opacity-80 transition-opacity"
              >
                {itemNode}
              </Link>
            )

          })

        )}

      </div>

    </div>
  )
}
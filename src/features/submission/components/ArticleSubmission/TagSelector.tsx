import { Input } from '@/components/ui/Input/Input'
import { Label } from '@/components/ui/Label/Label'
import { Tag } from '@/components/ui/tag/tag'
import type { Tag as TagType } from '@/types/tag'

type TagSelectorProps = {
  selectedTagIds: string[]
  selectedTags: TagType[]
  filteredTags: TagType[]
  tagFilter: string
  onTagFilterChange: (value: string) => void
  onToggleTag: (id: string) => void
  onClearTags: () => void
  isLoading: boolean
  error: unknown
  onRetry: () => void
}

export function TagSelector({
  selectedTagIds,
  selectedTags,
  filteredTags,
  tagFilter,
  onTagFilterChange,
  onToggleTag,
  onClearTags,
  isLoading,
  error,
  onRetry,
}: TagSelectorProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <Label htmlFor="article-tag-filter">タグ</Label>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">
            選択中: {selectedTags.length}
          </span>
          {selectedTags.length > 0 ? (
            <button
              type="button"
              onClick={onClearTags}
              className="text-xs text-gray-500 underline hover:text-gray-700 cursor-pointer"
            >
              クリア
            </button>
          ) : null}
        </div>
      </div>

      <div className="mt-3">
        <Input
          id="article-tag-filter"
          name="tag-filter"
          value={tagFilter}
          onChange={(e) => onTagFilterChange(e.target.value)}
          placeholder="タグを検索..."
        />
      </div>

      <div className="mt-3 min-h-[3rem]">
        {isLoading ? (
          <p className="text-sm text-gray-500">タグを読み込み中…</p>
        ) : error ? (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3"
          >
            <p className="text-sm text-red-600">
              {error instanceof Error
                ? error.message
                : 'タグの取得に失敗しました'}
            </p>
            <button
              type="button"
              onClick={onRetry}
              className="mt-2 text-sm font-semibold text-red-700 underline hover:text-red-800 cursor-pointer"
            >
              再読み込み
            </button>
          </div>
        ) : filteredTags.length === 0 ? (
          <p className="text-sm text-gray-500">
            該当するタグが見つかりませんでした
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {filteredTags.map((t) => (
              <Tag
                key={t.id}
                tagId={t.id}
                label={t.label}
                isActive={selectedTagIds.includes(t.id)}
                onClick={() => onToggleTag(t.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

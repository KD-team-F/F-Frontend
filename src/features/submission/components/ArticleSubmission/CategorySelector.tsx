import { Label } from '@/components/ui/Label/Label'
import { CATEGORY_OPTIONS } from '@/features/submission/constants/articleSubmission'
import type { ArticleCategory } from '@/types/article'

type CategorySelectorProps = {
  selectedItem: ArticleCategory
  onSelect: (item: ArticleCategory) => void
}

export function CategorySelector({
  selectedItem,
  onSelect,
}: CategorySelectorProps) {
  return (
    <div className="mb-8">
      <Label required>カテゴリ</Label>
      <div className="mt-3 flex gap-3">
        {CATEGORY_OPTIONS.map(({ id, label }) => {
          const isSelected = selectedItem === id
          return (
            <button
              key={id}
              type="button"
              onClick={() => onSelect(id)}
              aria-pressed={isSelected}
              className={`
                inline-flex items-center justify-center
                px-8 py-2 rounded-full
                border-2 text-base font-semibold
                transition-colors cursor-pointer
                ${
                  isSelected
                    ? 'bg-[#4169e1] border-black text-black'
                    : 'bg-white border-gray-300 text-gray-700 hover:border-gray-500'
                }
              `}
            >
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

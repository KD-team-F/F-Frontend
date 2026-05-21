import type { Tag } from '@/types/tag'

export function resolveSelectedTags(
  availableTags: Tag[],
  selectedIds: string[],
): Tag[] {
  return selectedIds
    .map((id) => availableTags.find((t) => t.id === id))
    .filter((t): t is Tag => t !== undefined)
}

export function filterTagsByKeyword(tags: Tag[], keyword: string): Tag[] {
  const normalized = keyword.trim().toLowerCase()
  if (!normalized) return tags
  return tags.filter((t) => t.label.toLowerCase().includes(normalized))
}

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
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Title>{title}</Title>
      <div className="mt-6">
        {items.map((item, index) => (
          <Item key={index} title={item.title} content={item.content} date={item.date} />
        ))}
      </div>
    </div>
  )
}

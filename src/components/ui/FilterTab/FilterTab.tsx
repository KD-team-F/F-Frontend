type FilterTabOption<T extends string> = {
  id: T
  label: string
}

type FilterTabProps<T extends string> = {
  options: FilterTabOption<T>[]
  selected: T
  onChange: (id: T) => void
}

export function FilterTab<T extends string>({ options, selected, onChange }: FilterTabProps<T>) {
  return (
    <div className="flex gap-2">
      {options.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`
            inline-flex items-center justify-center
            px-6 py-2 rounded-full
            text-base font-medium
            transition-colors cursor-pointer
            ${selected === id ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black hover:bg-gray-400'}
          `}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

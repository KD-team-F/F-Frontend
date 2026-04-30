type LabelProps = {
  htmlFor?: string
  required?: boolean
  children: string
}

export function Label({ htmlFor, required = false, children }: LabelProps) {
  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor={htmlFor}
        className="text-base font-semibold text-gray-900"
      >
        {children}
      </label>
      {required && (
        <span className="text-sm font-bold text-red-500">* 必須</span>
      )}
    </div>
  )
}

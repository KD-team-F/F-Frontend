export function Footer() {
  return (
    <footer className="bg-[#ABE1FA] px-4 py-8 mt-auto">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-6">
        
        {/* ボタン（後で消すこと） */}
        <div className="flex gap-4">
          <button className="rounded px-6 py-2 text-sm font-bold text-[#FFFFFF] bg-[#87CEFA] border-2 border-[#FFFFFF] hover:bg-white hover:text-[#87CEFA] transition-all shadow-sm">
            質問
          </button>
          <button className="rounded px-6 py-2 text-sm font-bold text-[#FFFFFF] bg-[#87CEFA] border-2 border-[#FFFFFF] hover:bg-white hover:text-[#87CEFA] transition-all shadow-sm">
            制作物
          </button>
        </div>
        
      </div>
    </footer>
  )
}
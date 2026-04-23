export function Header() {
  return (
    <header className="bg-[#ABE1FA] px-4 py-4 shadow-sm">
      <div className="mx-auto max-w-7xl grid grid-cols-3 items-center">
        
        {/* アプリ名 */}
        <div className="flex justify-start">
          <a 
            href="/" 
            className="text-xl font-extrabold tracking-tight text-[#FFFFFF] hover:opacity-80 transition-opacity"
          >
            アプリ名
          </a>
        </div>

        {/* ボタン（後で消すこと） */}
        <div className="flex justify-center gap-4">
          <button className="rounded px-6 py-2 text-sm font-bold text-[#FFFFFF] bg-[#87CEFA] border-2 border-[#FFFFFF] hover:bg-white hover:text-[#87CEFA] transition-all shadow-sm shrink-0">
            質問
          </button>
          <button className="rounded px-6 py-2 text-sm font-bold text-[#FFFFFF] bg-[#87CEFA] border-2 border-[#FFFFFF] hover:bg-white hover:text-[#87CEFA] transition-all shadow-sm shrink-0">
            制作物
          </button>
        </div>

        {/* 余白 */}
        <div className="hidden md:block"></div>
        
      </div>
    </header>
  )
}
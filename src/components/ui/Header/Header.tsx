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

        {/* // TODO: ボタン配置予定 */}

        {/* ここから */}


        
        {/* ここまで */}

        {/* 余白 */}
        <div className="hidden md:block"></div>
        
      </div>
    </header>
  )
}
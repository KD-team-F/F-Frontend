import Link from 'next/link'
import { Crown, FileText, UserCircle } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-[#ABE1FA] px-4 py-4 shadow-sm">
      <div className="mx-auto max-w-7xl flex items-center">

        {/* アプリ名 */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tight text-white hover:opacity-80 transition-opacity"
          >
            アプリ名
          </Link>
        </div>

        {/* 右側エリア */}
        <div className="ml-auto flex items-center gap-4">

          {/* 記事一覧 */}
          <Link
            href="/articles"
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#4AA3D8] shadow hover:scale-105 transition-transform"
          >
            <FileText size={18} />
            記事一覧
          </Link>

          {/* ランキング */}
          <Link
            href="/articles/ranking"
            className="flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-white shadow hover:scale-105 transition-transform"
          >
            <Crown size={18} />
            ランキング
          </Link>

          {/* マイページ */}
          <Link
            href="/mypage"
            className="text-white hover:scale-110 transition-transform"
          >
            <UserCircle size={38} />
          </Link>

        </div>
      </div>
    </header>
  )
}

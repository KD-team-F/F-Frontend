import Link from 'next/link'
import { Mail } from 'lucide-react'
import {
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6'

export function Footer() {
  return (
    <footer className="bg-[#ABE1FA] px-4 py-8 mt-auto">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-6">

        {/* // TODO: ボタン配置予定地です。 */}

        {/* ここから */}

        <div className="flex items-center gap-8">

          <Link
            href="https://github.com/KD-team-F/F-Frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            <FaGithub size={28} />
          </Link>

          <Link
            href="https://www.instagram.com/kobedenshi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            <FaInstagram size={28} />
          </Link>

          <Link
            href="https://www.youtube.com/user/Kobedenshi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            <FaYoutube size={28} />
          </Link>

          <Link
            href="https://x.com/kobedenshi?lang=ja"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            <FaXTwitter size={28} />
          </Link>

          <Link
            href="mailto:example@example.com"
            className="hover:opacity-70 transition"
          >
            <Mail size={32} strokeWidth={2} />
          </Link>

        </div>

        <div className="text-center text-sm text-black">
          <p>© 2026 dev hub</p>
          <p>Powered by team F</p>
        </div>

        {/* ここまで */}

      </div>
    </footer>
  )
}
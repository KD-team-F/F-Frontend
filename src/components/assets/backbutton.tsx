'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

export default function BackButton() {

  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <button
      onClick={handleBack}
      className="p-2 rounded-full hover:bg-gray-200 transition"
    >
      <ArrowLeft size={20} />
    </button>
  )
}

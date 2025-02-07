"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Header() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (mounted) {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A2%E3%83%90%E3%82%A4%E3%83%AB%E3%82%A2%E3%82%AB%E3%83%87%E3%83%9F%E3%83%BC%E3%83%AD%E3%82%B4%E2%91%A1-v7Y1HUpSu726noAijuYV7UnTMo9jKX.png"
            alt="熊本モバイルアカデミー"
            width={150}
            height={150}
            className="h-16 w-auto"
          />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <button onClick={() => scrollToSection("features")} className="text-teal-800 hover:text-teal-600">
                特徴
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("events")} className="text-teal-800 hover:text-teal-600">
                イベント
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="text-teal-800 hover:text-teal-600">
                お問い合わせ
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}


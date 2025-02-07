"use client"

import { ClientButton } from "./client-button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">熊本モバイルアカデミーへようこそ</h1>
          <p className="text-xl text-teal-700 mb-8">
            シニアの方から子どもまで、スマートフォンの活用をサポート。
            防災や健康づくりにも役立つ実践的な講座を提供しています。
          </p>
          <div className="flex gap-4">
            <ClientButton
              size="lg"
              className="bg-teal-700 hover:bg-teal-800"
              onClick={() => window.open("https://lin.ee/XPNrf6l", "_blank")}
            >
              無料体験に申し込む
            </ClientButton>
            <ClientButton
              size="lg"
              variant="outline"
              className="border-teal-700 text-teal-700 hover:bg-teal-50"
              onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
            >
              講座を見る
            </ClientButton>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A2%E3%83%90%E3%82%A4%E3%83%AB%E3%82%A2%E3%82%AB%E3%83%87%E3%83%9F%E3%83%BC%E3%83%AD%E3%82%B4%E2%91%A1-v7Y1HUpSu726noAijuYV7UnTMo9jKX.png"
            alt="熊本モバイルアカデミー"
            width={400}
            height={400}
            className="w-auto h-auto max-w-[400px]"
            priority
          />
        </div>
      </div>
    </section>
  )
}


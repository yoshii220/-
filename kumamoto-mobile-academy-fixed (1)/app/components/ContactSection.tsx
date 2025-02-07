"use client"

import { ClientButton } from "./client-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Instagram, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function ContactSection() {
  const handlePhoneClick = () => (window.location.href = "tel:09073844254")
  const handleLineClick = () => window.open("https://lin.ee/XPNrf6l", "_blank")
  const handleInstagramClick = () => window.open("https://www.instagram.com/k_mobile.ac", "_blank")

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">お問い合わせ・SNS</h2>
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  電話でのお問い合わせ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-teal-800 mb-2">090-7384-4254</p>
                <p className="text-gray-600">担当：吉井未来</p>
                <p className="text-sm text-gray-500 mt-1">移動通信端末診断士 総務省届出番号：J2312005</p>
                <ClientButton className="mt-4 w-full bg-teal-700 hover:bg-teal-800" onClick={handlePhoneClick}>
                  電話をかける
                </ClientButton>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>公式LINE</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/line_oa_chat_250110_130505_group_0-FlUcYy01YhCands3f7sD1nrdL8V9yg.png"
                    alt="LINE QRコード"
                    width={100}
                    height={100}
                    className="border p-2"
                  />
                </div>
                <p className="text-center text-sm mb-4">イベントや教室の様子を随時アップしています！</p>
                <ClientButton
                  variant="outline"
                  className="w-full border-teal-700 text-teal-700 hover:bg-teal-50"
                  onClick={handleLineClick}
                >
                  LINEで友だち追加
                </ClientButton>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Instagram className="h-5 w-5" />
                  Instagram
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF.JPG-osCzWJDtwjkRJGPGBStYFyAG3wheRX.jpeg"
                    alt="Instagram QRコード"
                    width={100}
                    height={100}
                    className="border p-2"
                  />
                </div>
                <p className="text-center text-sm mb-4">教室の雰囲気やイベントの様子を写真でシェアしています！</p>
                <ClientButton
                  variant="outline"
                  className="w-full border-teal-700 text-teal-700 hover:bg-teal-50"
                  onClick={handleInstagramClick}
                >
                  Instagramをフォロー
                </ClientButton>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                お問い合わせ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center mb-4">
                お問い合わせは公式LINEで受け付けております。
                <br />
                迅速な対応と、便利なコミュニケーションのために、LINEでのお問い合わせをおすすめしています。
              </p>
              <ClientButton className="w-full bg-[#00B900] hover:bg-[#00A000] text-white" onClick={handleLineClick}>
                LINEでお問い合わせ
              </ClientButton>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


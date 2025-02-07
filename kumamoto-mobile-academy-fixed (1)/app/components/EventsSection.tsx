"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ClientButton } from "./client-button"
import { CalendarDays, MapPin, Users, Coffee, Smartphone } from "lucide-react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EventsSection() {
  const handlePhoneClick = () => (window.location.href = "tel:09073844254")
  const handleLineClick = () => window.open("https://lin.ee/XPNrf6l", "_blank")

  return (
    <section id="events" className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">開催予定のイベント</h2>
        <Tabs defaultValue="january" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="january">1月のイベント</TabsTrigger>
            <TabsTrigger value="february">2月のイベント</TabsTrigger>
          </TabsList>

          <TabsContent value="january" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-teal-800">健康寿命up＆スマホスキルup講座</CardTitle>
                <CardDescription>健康を守り、デジタル社会に適応しよう</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4346.JPG-GgdTE39E3BRJ8zQUDBIJZbEHVzixVb.jpeg"
                    alt="健康寿命up＆スマホスキルup講座の詳細"
                    width={600}
                    height={400}
                    className="w-full rounded-lg mb-4"
                  />
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-teal-600" />
                    <span>2025年1月8日(水)・16日(木)・22日(水)・30日(木)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-teal-600" />
                    <span>9時30分〜12時</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-teal-600" />
                    <span>菊池郡大津町にて</span>
                  </div>
                  <div className="mt-4">
                    <p className="font-semibold">参加費：1回 1,000円</p>
                    <p className="text-sm text-teal-600">※お友達を連れて来た方は500円（お友達も）</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4">
                <ClientButton className="w-full sm:w-auto bg-teal-700 hover:bg-teal-800" onClick={handlePhoneClick}>
                  電話で申し込む
                </ClientButton>
                <ClientButton
                  variant="outline"
                  className="w-full sm:w-auto border-teal-700 text-teal-700 hover:bg-teal-50"
                  onClick={handleLineClick}
                >
                  LINEで申し込む
                </ClientButton>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-teal-800">災害×スマホセミナー</CardTitle>
                <CardDescription>熊本地震から学ぶ！災害時にスマホが命を守る</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4347.JPG-hG81xPXuvgAKcB28LMpunEy7VkUOd3.jpeg"
                    alt="災害×スマホセミナーの詳細"
                    width={600}
                    height={400}
                    className="w-full rounded-lg mb-4"
                  />
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-teal-600" />
                    <span>2025年1月20日（月）13:00〜15:00（受付12:45〜）</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-teal-600" />
                    <span>熊本市北区にて</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-teal-600" />
                    <span>定員7名（初心者大歓迎！）</span>
                  </div>
                  <div className="mt-4">
                    <p className="font-semibold mb-2">セミナー内容：</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>緊急速報を受け取る方法</li>
                      <li>災害伝言ダイヤル（171）の使い方</li>
                      <li>LINE「安否確認」機能の活用</li>
                      <li>スマホのバッテリーを長持ちさせる方法</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="font-semibold">参加費：500円</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4">
                <ClientButton className="w-full sm:w-auto bg-teal-700 hover:bg-teal-800" onClick={handlePhoneClick}>
                  電話で申し込む
                </ClientButton>
                <ClientButton
                  variant="outline"
                  className="w-full sm:w-auto border-teal-700 text-teal-700 hover:bg-teal-50"
                  onClick={handleLineClick}
                >
                  LINEで申し込む
                </ClientButton>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-teal-800">スマホのお困り事相談会</CardTitle>
                <CardDescription>家族や友人には聞けないアナタのための相談会</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4348.JPG-7GKdEUgnLtUaqRO9aIsQyvxCps4B8a.jpeg"
                    alt="スマホ相談会の詳細"
                    width={600}
                    height={400}
                    className="w-full rounded-lg mb-4"
                  />
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-teal-600" />
                    <span>2025年1月29日（水）10:00〜11:30</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-teal-600" />
                    <span>熊本市北区にて</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-teal-600" />
                    <span>定員5名（先着順）</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coffee className="h-5 w-5 text-teal-600" />
                    <span>参加費：500円（ドリンク付き）</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4">
                <ClientButton className="w-full sm:w-auto bg-teal-700 hover:bg-teal-800" onClick={handlePhoneClick}>
                  電話で申し込む
                </ClientButton>
                <ClientButton
                  variant="outline"
                  className="w-full sm:w-auto border-teal-700 text-teal-700 hover:bg-teal-50"
                  onClick={handleLineClick}
                >
                  LINEで申し込む
                </ClientButton>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="february" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-teal-800">健康寿命up＆スマホスキルup講座</CardTitle>
                <CardDescription>健康を守り、デジタル社会に適応しよう</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4345.JPG-G7YykQc5xe5cFC9h7zTJYQOhAE7Xir.jpeg"
                    alt="健康寿命up＆スマホスキルup講座の詳細"
                    width={600}
                    height={400}
                    className="w-full rounded-lg mb-4"
                  />
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-teal-600" />
                    <span>2025年2月6日(木)・13日(木)・20日(木)・27日(木)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-teal-600" />
                    <span>9時30分〜12時</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-teal-600" />
                    <span>菊池郡大津町にて</span>
                  </div>
                  <div className="mt-4">
                    <p className="font-semibold">参加費：1回 1,000円</p>
                    <p className="text-sm text-teal-600">※お友達を連れて来た方は500円（お友達も）</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4">
                <ClientButton className="w-full sm:w-auto bg-teal-700 hover:bg-teal-800" onClick={handlePhoneClick}>
                  電話で申し込む
                </ClientButton>
                <ClientButton
                  variant="outline"
                  className="w-full sm:w-auto border-teal-700 text-teal-700 hover:bg-teal-50"
                  onClick={handleLineClick}
                >
                  LINEで申し込む
                </ClientButton>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}


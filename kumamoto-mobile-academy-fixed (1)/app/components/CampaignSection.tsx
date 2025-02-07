import { Wallet, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function CampaignSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">
          キャンペーン実施中！
        </h2>
        <Card className="max-w-4xl mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 p-6 md:p-8">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-teal-800 mb-2">
                  携帯料金、見直してみませんか？
                </CardTitle>
                <CardDescription className="text-lg text-teal-600">
                  今のプランが本当にあなたに合っているか、一緒に確認しましょう！
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>使い方に合わせた最適なプラン提案</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>わかりやすい料金説明</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>お得な割引情報もご紹介</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  size="lg" 
                  className="mt-4 bg-teal-600 hover:bg-teal-700 text-white"
                  onClick={() => window.open('https://lin.ee/XPNrf6l', '_blank')}
                >
                  無料で相談する <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardFooter>
            </div>
            <div className="md:w-1/3 bg-teal-600 text-white flex flex-col justify-center items-center p-6 md:p-8">
              <Wallet className="h-16 w-16 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-center mb-2">今なら</h3>
              <p className="text-3xl md:text-4xl font-bold text-center mb-2">見直し料金</p>
              <p className="text-4xl md:text-5xl font-bold text-center">無料！</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}


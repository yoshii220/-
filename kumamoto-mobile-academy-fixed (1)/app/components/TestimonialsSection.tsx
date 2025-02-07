import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { QuoteIcon, User, UserRound } from 'lucide-react'

const testimonials = [
  {
    name: 'T.K. さん (68歳)',
    initials: 'TK',
    gender: 'male',
    comment: '最初は不安でしたが、今では毎回の教室が楽しみです。スマホを使いこなせるようになって、孫とのビデオ通話が日課になりました。友達にも勧めています！',
    staffComment: '熱心に学ばれ、毎回の上達が目に見えて分かります。他の生徒さんの良い刺激にもなっています。'
  },
  {
    name: 'S.M. さん (72歳)',
    initials: 'SM',
    gender: 'female',
    comment: '健康アプリの使い方を学んで、毎日の運動が習慣になりました。先生の説明がとてもわかりやすく、質問しやすい雰囲気が良いです。これからも続けていきたいです。',
    staffComment: '健康への意識が高く、アプリの活用法をどんどん広げていらっしゃいます。素晴らしい上達ぶりです。'
  },
  {
    name: 'Y.T. さん (65歳)',
    initials: 'YT',
    gender: 'male',
    comment: 'LINEやPayPayの使い方を学べて便利になりました。同じ教室の仲間とLINEでつながり、新しい友達もできました。この教室のおかげで毎日が楽しくなりました！',
    staffComment: '積極的に新しいアプリに挑戦される姿勢が素晴らしいです。教室の雰囲気づくりにも一役買っていただいています。'
  },
  {
    name: 'K.N. さん (70歳)',
    initials: 'KN',
    gender: 'female',
    comment: '料金プランの見直しをしていただいて、本当に助かりました。使っていない機能にお金を払っていたことに気づき、新しいプランに変更したら毎月の支払いが3000円も安くなりました！スマホの使い方も教えてもらえて、一石二鳥でした。',
    staffComment: 'お客様のニーズをしっかりヒアリングし、最適なプランをご提案できました。スマホの活用法と合わせてご説明することで、より満足度の高いサービスを提供できています。'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">
          お客様の声
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4">
                  <Avatar className="bg-teal-100">
                    <AvatarFallback className="text-teal-700">
                      {testimonial.gender === 'male' ? (
                        <User className="h-6 w-6" />
                      ) : (
                        <UserRound className="h-6 w-6" />
                      )}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-start">
                  <QuoteIcon className="text-teal-200 h-8 w-8 mr-2 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 italic mb-4">{testimonial.comment}</p>
                    <div className="mt-4 pt-4 border-t border-teal-200">
                      <p className="text-sm text-teal-700 font-semibold">スタッフより：</p>
                      <p className="text-sm text-gray-600">{testimonial.staffComment}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


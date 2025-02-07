import { Shield, Users, Heart, Wallet } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: '防災×スマホ',
    description: '災害時に役立つスマートフォンの活用方法を学びます。'
  },
  {
    icon: Users,
    title: '世代を超えた学び',
    description: 'シニアの方から子どもまで、それぞれのニーズに合わせた指導を提供。'
  },
  {
    icon: Heart,
    title: '健康づくり連携',
    description: '運動教室とコラボレーションした、健康的な講座を実施。'
  },
  {
    icon: Wallet,
    title: '携帯料金の見直し',
    description: 'あなたに合ったプランをご提案いたします。'
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">
          特徴
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-teal-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <feature.icon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-teal-800 mb-2">{feature.title}</h3>
              <p className="text-teal-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


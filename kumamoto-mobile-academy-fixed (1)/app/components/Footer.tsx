import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A2%E3%83%90%E3%82%A4%E3%83%AB%E3%82%A2%E3%82%AB%E3%83%87%E3%83%9F%E3%83%BC%E3%83%AD%E3%82%B4%E2%91%A1-uRqgv5486IXKAb57vOIOGZofT3NLkh.png"
              alt="熊本モバイルアカデミー"
              width={120}
              height={120}
              className="h-12 w-auto brightness-200"
            />
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              <li><a href="#features" className="hover:text-teal-300">特徴</a></li>
              <li><a href="#events" className="hover:text-teal-300">イベント</a></li>
              <li><a href="#contact" className="hover:text-teal-300">お問い合わせ</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} 熊本モバイルアカデミー. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


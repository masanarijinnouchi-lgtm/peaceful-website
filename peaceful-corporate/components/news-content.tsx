"use client"

import { useEffect, useState } from "react"

interface NewsItem {
  date: string
  title: string
  excerpt: string
}

const newsItems: NewsItem[] = [
  {
    date: "2025.10.01",
    title: "マニフェスト：我々が描く、次世代医療の設計図『Giga-Hospital』",
    excerpt:
      "なぜ、病院は「建物」でなければならないのか？我々は、医療をデータに基づき自己進化する「生命体」として再定義する。これは遠い未来の話ではない。我々が今日から創り始める現実である。",
  },
]

export default function NewsContent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-start px-8 pt-32 pb-20">
      {/* Page Title */}
      <div className="mb-20 w-full max-w-5xl">
        <h1
          className={`text-center font-bold tracking-tight transition-all duration-1500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          } text-5xl md:text-6xl lg:text-7xl`}
          style={{
            textShadow: isVisible
              ? "0 0 20px rgba(96, 165, 250, 0.4), 0 0 40px rgba(96, 165, 250, 0.2), 0 0 60px rgba(96, 165, 250, 0.1)"
              : "none",
          }}
        >
          News
        </h1>
      </div>

      {/* News List */}
      <div className="w-full max-w-4xl space-y-8">
        {newsItems.map((item, index) => (
          <article
            key={index}
            className={`group cursor-pointer border-l-2 border-transparent pl-6 transition-all duration-1000 hover:border-neon-blue ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${300 + index * 200}ms` }}
          >
            <time className="mb-2 block text-sm font-medium text-neon-blue/60 transition-colors group-hover:text-neon-blue md:text-base">
              {item.date}
            </time>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-neon-blue md:text-3xl">
              {item.title}
            </h2>
            <p className="text-base leading-relaxed text-foreground/80 md:text-lg">{item.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

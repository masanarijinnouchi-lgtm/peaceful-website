"use client"

import { useEffect, useState } from "react"

export default function CompanyContent() {
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
          } text-4xl md:text-5xl lg:text-6xl`}
          style={{
            textShadow: isVisible
              ? "0 0 20px rgba(96, 165, 250, 0.4), 0 0 40px rgba(96, 165, 250, 0.2), 0 0 60px rgba(96, 165, 250, 0.1)"
              : "none",
          }}
        >
          我々について
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl">ABOUT US</span>
        </h1>
      </div>

      {/* Content Sections */}
      <div className="w-full max-w-4xl space-y-16">
        {/* CEO Message Section */}
        <section
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">代表メッセージ</h2>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            CEOは、医療の最前線にいた一人の当事者です。そこで見たのは、誇り高き専門家たちが、その能力の多くを本質的ではない業務に奪われているという現実でした。「我々の仕事は、こんなものではないはずだ」。その葛藤が、peacefulの原点です。
          </p>
        </section>

        {/* Philosophy Section */}
        <section
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">我々の哲学</h2>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            我々は、テクノロジーの会社である前に、医療への深いリスペクトを持つ一人の「当事者」です。AIは、決して人間に取って代わるものではありません。人間を、人間にしかできない、最も価値ある仕事へと解放するための、最高のパートナーであると信じています。第一原則思考に基づき、あらゆる非効率を根絶し、医療従事者と患者、双方のポテンシャルが最大化される未来を設計します。
          </p>
        </section>

        {/* Company Info Section */}
        <section
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">会社概要</h2>
          </div>
          <dl className="space-y-4 border-l-2 border-neon-blue/30 pl-6">
            <div className="group">
              <dt className="mb-1 text-base font-bold text-neon-blue/80 md:text-lg">社名</dt>
              <dd className="text-lg text-foreground/90 md:text-xl">株式会社peaceful</dd>
            </div>
            <div className="group">
              <dt className="mb-1 text-base font-bold text-neon-blue/80 md:text-lg">代表取締役</dt>
              <dd className="text-lg text-foreground/90 md:text-xl">陣之内 将成</dd>
            </div>
            <div className="group">
              <dt className="mb-1 text-base font-bold text-neon-blue/80 md:text-lg">所在地</dt>
              <dd className="text-lg text-foreground/90 md:text-xl">東京都練馬区</dd>
            </div>
            <div className="group">
              <dt className="mb-1 text-base font-bold text-neon-blue/80 md:text-lg">設立</dt>
              <dd className="text-lg text-foreground/90 md:text-xl">2025年</dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  )
}

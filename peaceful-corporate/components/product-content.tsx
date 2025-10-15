"use client"

import { useEffect, useState } from "react"

export default function ProductContent() {
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
          NURVIS
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl">看護師の能力を拡張するAIエージェント</span>
        </h1>
      </div>

      {/* Content Sections */}
      <div className="w-full max-w-4xl space-y-16">
        {/* Overview Section */}
        <section
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">概要</h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">WHAT IT IS</span>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            NURVISは、単なる記録ツールではない。あなたの「第二の脳」として、常に隣で思考を続ける、能動的なAIエージェントです。
          </p>
        </section>

        {/* Value Section */}
        <section
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">提供価値</h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">WHAT IT DOES</span>
          </div>

          {/* Value Points */}
          <div className="space-y-6 border-l-2 border-neon-blue/30 pl-6">
            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                思考を止めない
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                ハンズフリー・アイズフリーのUXで、患者ケアに集中したまま、記録・情報アクセス・判断支援をリアルタイムで実行。
              </p>
            </div>

            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                暗黙知を構造化
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                あなたの「気づき」や「判断プロセス」そのものを、独自のFPP（First Person
                Perspective）データとして収集・解析。
              </p>
            </div>

            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                判断を支援
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                蓄積されたデータを基に、臨床判断を支援するインサイト（洞察）を提供。あなたの能力を拡張します。
              </p>
            </div>
          </div>
        </section>

        {/* Future Section */}
        <section
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">未来</h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">THE FUTURE</span>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            NURVISが収集する世界唯一のFPPデータは、我々が開発するフィジカルAI（看護ヒューマノイド）の基盤となります。あなたの今日の仕事が、明日のあなたの最高のパートナーを育てる。peacefulは、その未来を実現する、最初のパートナーです。
          </p>
        </section>
      </div>
    </div>
  )
}

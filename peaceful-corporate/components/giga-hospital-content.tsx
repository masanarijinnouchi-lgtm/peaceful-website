"use client"

import { useEffect, useState } from "react"

export default function GigaHospitalContent() {
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
          Giga-Hospital構想
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl">自己進化する医療エコシステム</span>
        </h1>
      </div>

      {/* Content Sections */}
      <div className="w-full max-w-4xl space-y-16">
        {/* Philosophy Section */}
        <section
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">思想</h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">THE PHILOSOPHY</span>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            現在の病院は、物理的な「建物」に縛られている。我々は、街全体を一つの生命体（Organism）と見立て、予防から予後までをシームレスに繋ぐ、自己進化する医療エコシステムを設計する。
          </p>
        </section>

        {/* Future Section */}
        <section
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">実現する未来</h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">THE FUTURE</span>
          </div>

          {/* Future Points */}
          <div className="space-y-6 border-l-2 border-neon-blue/30 pl-6">
            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                街が病院になる
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                診断、治療、リハビリ、予防の機能が地域や家庭に分散。中央の高度医療センターは最小化され、患者は「通院」から解放される。
              </p>
            </div>

            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                ハードウェアの進化
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                病院施設はレゴブロックのような「モジュール型」で構築。最新医療機器が登場すれば、古いモジュールを入れ替えるだけで、常にハードウェアを最新に保つ。
              </p>
            </div>

            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                アンビエントAI
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                高齢者はデバイスを「操作」する必要がなくなる。「声」や「存在」そのものをAIが認識し、フィジカルAIが先回りして実行する。
              </p>
            </div>

            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                価値観の転換
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                「健康」と「病気」の垣根は溶け合い、生きている時間すべてが、より良く生きるためのヘルスケアとなる。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

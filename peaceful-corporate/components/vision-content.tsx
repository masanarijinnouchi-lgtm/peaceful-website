"use client"

import { useEffect, useState } from "react"

export default function VisionContent() {
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
          世界に誇る日本の医療を、
          <br />
          未来へつなぐ
        </h1>
      </div>

      {/* Content Sections */}
      <div className="w-full max-w-4xl space-y-16">
        {/* Problem Section */}
        <section
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">課題</h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">THE PROBLEM</span>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            日本の医療は、未来への投資（建設的な医療）ではなく、現状維持のためのコストセンターとなりつつある。現場のポテンシャルは、この構造の中で正しく価値に変換されていない。
          </p>
        </section>

        {/* Solution Section */}
        <section
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">我々の解決策</h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">OUR SOLUTION</span>
          </div>
          <p className="mb-8 text-lg leading-relaxed text-foreground/90 md:text-xl">
            我々は、医療を再び日本の成長を牽引する「プロフィットセンター」へと転換させる。そのために、医療現場に眠る世界最大級の資産「暗黙知」を、テクノロジーによって解放・構造化する。
          </p>

          {/* Solution Points */}
          <div className="space-y-6 border-l-2 border-neon-blue/30 pl-6">
            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                現場でしか得られない一人称視点データを収集し、次世代医療AIの基盤とする。
              </h3>
            </div>

            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                労働から、価値創造へ
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                医療従事者を単純作業から解放し、人間にしかできない高度な判断とケアに集中させる。
              </p>
            </div>

            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                コストから、投資へ
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                データに基づき、未来の医療システム（Giga-Hospital）を設計・提案する。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

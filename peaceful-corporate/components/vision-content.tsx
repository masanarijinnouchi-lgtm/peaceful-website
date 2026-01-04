"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-context"

export default function VisionContent() {
  const [isVisible, setIsVisible] = useState(false)
  const { lang } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-start px-8 pt-32 pb-20">
      {/* Page Title */}
      <div className="mb-20 w-full max-w-5xl">
        <h1
          className={`text-center font-bold tracking-tight transition-all duration-1500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } text-5xl md:text-6xl lg:text-7xl`}
          style={{
            textShadow: isVisible
              ? "0 0 20px rgba(96, 165, 250, 0.4), 0 0 40px rgba(96, 165, 250, 0.2), 0 0 60px rgba(96, 165, 250, 0.1)"
              : "none",
          }}
        >
          {lang === 'ja' ? (
            <>
              世界に誇る日本の医療を、
              <br />
              未来へつなぐ
            </>
          ) : (
            <>
              Connecting Japan's
              <br />
              World-Class Healthcare
              <br />
              to the Future
            </>
          )}
        </h1>
      </div>

      {/* Content Sections */}
      <div className="w-full max-w-4xl space-y-16">
        {/* Problem Section */}
        <section
          className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === 'ja' ? '課題' : 'THE PROBLEM'}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              {lang === 'ja' ? 'THE PROBLEM' : ''}
            </span>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            {lang === 'ja'
              ? '日本の医療は、未来への投資（建設的な医療）ではなく、現状維持のためのコストセンターとなりつつある。現場のポテンシャルは、この構造の中で正しく価値に変換されていない。'
              : 'Japanese healthcare is becoming a cost center for maintaining the status quo, rather than an investment for the future (constructive healthcare). The potential of the field is not being correctly converted into value within this structure.'}
          </p>
        </section>

        {/* Solution Section */}
        <section
          className={`transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-neon-blue md:text-3xl">
              {lang === 'ja' ? '我々の解決策' : 'OUR SOLUTION'}
            </h2>
            <span className="text-sm font-medium tracking-widest text-neon-blue/60 md:text-base">
              {lang === 'ja' ? 'OUR SOLUTION' : ''}
            </span>
          </div>
          <p className="mb-8 text-lg leading-relaxed text-foreground/90 md:text-xl">
            {lang === 'ja'
              ? '我々は、医療を再び日本の成長を牽引する「プロフィットセンター」へと転換させる。そのために、医療現場に眠る世界最大級の資産「暗黙知」を、テクノロジーによって解放・構造化する。'
              : 'We will transform healthcare back into a "profit center" that drives Japan\'s growth. To achieve this, we will liberate and structure "tacit knowledge," one of the world\'s largest assets dormant in medical settings, using technology.'}
          </p>

          {/* Solution Points */}
          <div className="space-y-6 border-l-2 border-neon-blue/30 pl-6">
            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                {lang === 'ja'
                  ? '現場でしか得られない一人称視点データを収集し、次世代医療AIの基盤とする。'
                  : 'Collecting first-person perspective data available only in the field to serve as the foundation for next-generation medical AI.'}
              </h3>
            </div>

            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                {lang === 'ja' ? '労働から、価値創造へ' : 'From Labor to Value Creation'}
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {lang === 'ja'
                  ? '医療従事者を単純作業から解放し、人間にしかできない高度な判断とケアに集中させる。'
                  : 'Liberating healthcare professionals from menial tasks to focus on advanced judgment and care that only humans can provide.'}
              </p>
            </div>

            <div className="group">
              <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-neon-blue md:text-xl">
                {lang === 'ja' ? 'コストから、投資へ' : 'From Cost to Investment'}
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {lang === 'ja'
                  ? 'データに基づき、未来の医療システム（Giga-Hospital）を設計・提案する。'
                  : 'Designing and proposing the future healthcare system (Giga-Hospital) based on data.'}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

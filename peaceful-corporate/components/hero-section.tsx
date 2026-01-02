"use client"

import { useEffect, useState } from "react"

const messages = ["その手の温もり、", "語りかける声。", "我々の葛藤のすべてが、", "次世代への礎となる。"]

export default function HeroSection() {
  const [visibleLines, setVisibleLines] = useState<number[]>([])

  useEffect(() => {
    const timings = [500, 1200, 2500, 3200]
    messages.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index])
      }, timings[index])
    })
  }, [])

  return (
    <section className="flex min-h-screen items-center justify-center px-8">
      <div className="max-w-5xl text-center">
        {messages.map((message, index) => (
          <h1
            key={index}
            className={`font-bold leading-tight tracking-tight text-foreground transition-all duration-1000 text-3xl md:text-5xl lg:text-6xl mb-4 ${visibleLines.includes(index) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            style={{
              textShadow: visibleLines.includes(index)
                ? "0 0 30px rgba(96, 165, 250, 0.4), 0 0 60px rgba(96, 165, 250, 0.2), 0 0 90px rgba(96, 165, 250, 0.1)"
                : "none",
            }}
          >
            {message}
          </h1>
        ))}
        {/* Mission Statement */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${visibleLines.length === messages.length ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <div className="flex flex-col gap-2 font-bold text-neon-blue/90" style={{ textShadow: "0 0 20px rgba(96, 165, 250, 0.3)" }}>
            <p className="text-lg md:text-xl tracking-widest">
              AIとロボティクスで、持続可能な医療インフラを再構築する。
            </p>
            <p className="text-xl md:text-2xl tracking-widest mt-2">
              看護師向けAIエージェント &quot;NURVIS&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

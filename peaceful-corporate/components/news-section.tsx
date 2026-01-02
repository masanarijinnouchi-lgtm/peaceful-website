"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

interface NewsItem {
    date: string
    title: string
    href: string
}

const newsItems: NewsItem[] = [
    {
        date: "2025.10.01",
        title: "マニフェスト：我々が描く、次世代医療の設計図『Giga-Hospital』",
        href: "/news", // Linking to the news page for details
    },
]

export default function NewsSection() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        const element = document.getElementById("news-section")
        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [])

    return (
        <section id="news-section" className="relative z-10 flex min-h-[50vh] flex-col justify-center px-8 py-24 bg-background">
            <div className="mx-auto w-full max-w-5xl">
                <div className="mb-12 flex items-baseline justify-between">
                    <h2
                        className={`font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                            }`}
                        style={{
                            textShadow: isVisible
                                ? "0 0 20px rgba(96, 165, 250, 0.4), 0 0 40px rgba(96, 165, 250, 0.2)"
                                : "none",
                        }}
                    >
                        News
                    </h2>
                    <Link
                        href="/news"
                        className={`text-xs md:text-sm font-medium tracking-widest text-neon-blue transition-all duration-1000 hover:text-white delay-300 ${isVisible ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        VIEW ALL
                    </Link>
                </div>

                <div className="space-y-6 border-l-2 border-neon-blue/30 pl-4 md:pl-6">
                    {newsItems.map((item, index) => (
                        <Link key={index} href={item.href} className="group block">
                            <article
                                className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                                    }`}
                                style={{ transitionDelay: `${500 + index * 200}ms` }}
                            >
                                <div className="flex flex-col md:flex-row md:items-baseline md:gap-8">
                                    <time className="mb-1 text-xs md:text-sm font-medium text-neon-blue/60 transition-colors group-hover:text-neon-blue md:mb-0">
                                        {item.date}
                                    </time>
                                    <h3 className="text-lg md:text-xl md:text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-neon-blue">
                                        {item.title}
                                    </h3>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

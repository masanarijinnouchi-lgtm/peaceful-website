"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export default function ServicesSection() {
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

        const element = document.getElementById("services-section")
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
        <section id="services-section" className="relative z-10 flex min-h-screen flex-col justify-center px-8 py-24 bg-background">
            <div className="mx-auto w-full max-w-6xl">
                <h2
                    className={`mb-20 text-center font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                    style={{
                        textShadow: isVisible
                            ? "0 0 20px rgba(96, 165, 250, 0.4), 0 0 40px rgba(96, 165, 250, 0.2)"
                            : "none",
                    }}
                >
                    Services
                </h2>

                <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2">
                    {/* Service 1: NURVIS */}
                    <div
                        className={`group flex flex-col justify-between rounded-lg border border-neon-blue/20 bg-card/50 p-6 md:p-8 backdrop-blur-sm transition-all duration-700 hover:border-neon-blue/60 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                            }`}
                        style={{ transitionDelay: "300ms" }}
                    >
                        <div>
                            <h3 className="mb-4 text-3xl font-bold text-neon-blue group-hover:text-white transition-colors">NURVIS</h3>
                            <p className="mb-6 text-lg leading-relaxed text-foreground/80">
                                看護師の能力を拡張するAIエージェント。あなたの「第二の脳」として、常に隣で思考を続ける能動的なパートナー。
                            </p>
                        </div>
                        <Link
                            href="/product"
                            className="mt-4 inline-flex items-center gap-2 text-sm font-bold tracking-widest text-neon-blue transition-colors group-hover:text-white"
                        >
                            READ MORE <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    {/* Service 2: Giga-Hospital */}
                    <div
                        className={`group flex flex-col justify-between rounded-lg border border-neon-blue/20 bg-card/50 p-6 md:p-8 backdrop-blur-sm transition-all duration-700 hover:border-neon-blue/60 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                            }`}
                        style={{ transitionDelay: "500ms" }}
                    >
                        <div>
                            <h3 className="mb-4 text-3xl font-bold text-neon-blue group-hover:text-white transition-colors">Giga-Hospital</h3>
                            <p className="mb-6 text-lg leading-relaxed text-foreground/80">
                                自己進化する医療エコシステム。街全体を一つの生命体として見立て、予防から予後までをシームレスに繋ぐ。
                            </p>
                        </div>
                        <Link
                            href="/giga-hospital"
                            className="mt-4 inline-flex items-center gap-2 text-sm font-bold tracking-widest text-neon-blue transition-colors group-hover:text-white"
                        >
                            READ MORE <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

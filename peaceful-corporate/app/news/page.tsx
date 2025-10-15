import Header from "@/components/header"
import ParticleBackground from "@/components/particle-background"
import NewsContent from "@/components/news-content"

export default function NewsPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Header />
      <NewsContent />
    </main>
  )
}

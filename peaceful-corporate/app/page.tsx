import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <ParticleBackground />
      <Header />
      <HeroSection />
    </main>
  )
}

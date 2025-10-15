import Header from "@/components/header"
import ParticleBackground from "@/components/particle-background"
import VisionContent from "@/components/vision-content"

export default function VisionPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Header />
      <VisionContent />
    </main>
  )
}

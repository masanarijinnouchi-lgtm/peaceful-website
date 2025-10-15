import Header from "@/components/header"
import ParticleBackground from "@/components/particle-background"
import GigaHospitalContent from "@/components/giga-hospital-content"

export default function GigaHospitalPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <ParticleBackground />
      <Header />
      <GigaHospitalContent />
    </main>
  )
}

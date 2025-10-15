import Header from "@/components/header"
import ParticleBackground from "@/components/particle-background"
import CompanyContent from "@/components/company-content"

export default function CompanyPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Header />
      <CompanyContent />
    </main>
  )
}

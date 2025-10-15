import Header from "@/components/header"
import ParticleBackground from "@/components/particle-background"
import ProductContent from "@/components/product-content"

export default function ProductPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Header />
      <ProductContent />
    </main>
  )
}

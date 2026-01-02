import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import NewsSection from "@/components/news-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <ParticleBackground />
      <Header />
      <HeroSection />
      <NewsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

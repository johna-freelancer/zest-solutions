import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { ProductGrid } from '../components/ProductGrid'
import { ServicesSection } from '../components/ServicesSection'
import { LeadMagnet } from '../components/LeadMagnet'
import { Footer } from '../components/Footer'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-dark-primary flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductGrid />
        <ServicesSection />
        <LeadMagnet />
      </main>
      <Footer />
    </div>
  )
}

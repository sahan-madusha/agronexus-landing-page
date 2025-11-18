import HeroSection from '@/components/HeroSection'
import KeyFeatures from '@/components/KeyFeatures'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import AboutProject from '@/components/AboutProject'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <KeyFeatures />
      <HowItWorks />
      <Benefits />
      <AboutProject />
      <ContactForm />
      <Footer />
    </main>
  )
}

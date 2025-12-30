import HeroSection from '@/components/heroSection'
import KeyFeatures from '@/components/keyFeatures'
import AboutProject from '@/components/aboutProject'
import HowItWorks from '@/components/howItWorks'
import Benefits from '@/components/benefits'
import ContactForm from '@/components/contactForm'
import Footer from '@/components/footer'

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
